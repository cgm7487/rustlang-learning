/* ============================================
   Rust Online Compiler - Rust Playground API
   ============================================ */

const RustCompiler = {
    PLAYGROUND_URL: 'https://play.rust-lang.org/execute',

    async run(code, edition = '2021') {
        const payload = {
            channel: 'stable',
            mode: 'debug',
            edition: edition,
            crateType: 'bin',
            tests: false,
            code: code,
            backtrace: false
        };

        try {
            const response = await fetch(this.PLAYGROUND_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const result = await response.json();
            return {
                success: result.success,
                stdout: result.stdout || '',
                stderr: result.stderr || '',
            };
        } catch (error) {
            return {
                success: false,
                stdout: '',
                stderr: `Compilation request failed: ${error.message}\n\nTip: Check your internet connection or try again later.\nYou can also run this code at https://play.rust-lang.org/`,
            };
        }
    }
};

/* Create a code playground component */
function createPlayground(id, rustCode, cppCode, pythonCode, options = {}) {
    const { editable = true, autoHeight = false } = options;
    const codes = { rust: rustCode, cpp: cppCode || null, python: pythonCode || null };

    const tabs = [];
    tabs.push('<button class="lang-tab active" data-lang="rust" onclick="switchTab(this)">Rust</button>');
    if (cppCode) tabs.push('<button class="lang-tab" data-lang="cpp" onclick="switchTab(this)">C++</button>');
    if (pythonCode) tabs.push('<button class="lang-tab" data-lang="python" onclick="switchTab(this)">Python</button>');

    const height = autoHeight ? '' : 'style="min-height:180px"';

    let html = `
    <div class="code-playground" id="playground-${id}" data-codes='${escapeForAttr(JSON.stringify(codes))}' data-original-rust='${escapeForAttr(rustCode)}'>
        <div class="code-playground-header">
            <div class="lang-tabs">${tabs.join('')}</div>
            <div class="code-playground-actions">
                ${editable ? `<button class="btn-reset" onclick="resetCode('${id}')">Reset</button>` : ''}
                <button class="btn-run" onclick="runCode('${id}')" id="runBtn-${id}">▶ Run</button>
            </div>
        </div>
        <div class="code-editor-wrapper">
            ${editable
                ? `<textarea class="code-editor" id="editor-${id}" ${height} spellcheck="false">${escapeHtml(rustCode)}</textarea>`
                : `<div class="code-static" id="editor-${id}">${escapeHtml(rustCode)}</div>`
            }
        </div>
        <div class="code-output" id="output-${id}" style="display:none;">
            <div class="code-output-header">Output</div>
            <pre id="outputPre-${id}"></pre>
        </div>
    </div>`;

    return html;
}

function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
              .replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

function escapeForAttr(str) {
    return str.replace(/&/g, '&amp;').replace(/'/g, '&#039;').replace(/"/g, '&quot;')
              .replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function switchTab(btn) {
    const playground = btn.closest('.code-playground');
    const codes = JSON.parse(playground.dataset.codes);
    const lang = btn.dataset.lang;

    playground.querySelectorAll('.lang-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');

    const editor = playground.querySelector('.code-editor, .code-static');
    const code = codes[lang] || '// No example for this language';

    if (editor.tagName === 'TEXTAREA') {
        editor.value = code;
    } else {
        editor.textContent = code;
    }

    // Only allow running Rust code
    const runBtn = playground.querySelector('.btn-run');
    if (lang !== 'rust') {
        runBtn.disabled = true;
        runBtn.textContent = '(Rust only)';
    } else {
        runBtn.disabled = false;
        runBtn.textContent = '▶ Run';
    }
}

async function runCode(id) {
    const playground = document.getElementById(`playground-${id}`);
    const activeTab = playground.querySelector('.lang-tab.active');
    if (activeTab.dataset.lang !== 'rust') return;

    const editor = document.getElementById(`editor-${id}`);
    const code = editor.tagName === 'TEXTAREA' ? editor.value : editor.textContent;
    const runBtn = document.getElementById(`runBtn-${id}`);
    const output = document.getElementById(`output-${id}`);
    const outputPre = document.getElementById(`outputPre-${id}`);

    // Show loading state
    runBtn.disabled = true;
    runBtn.classList.add('running');
    runBtn.innerHTML = '<span class="spinner"></span> Running...';
    output.style.display = 'block';
    outputPre.className = '';
    outputPre.innerHTML = '<span class="loading"><span class="spinner"></span> Compiling and running...</span>';

    const result = await RustCompiler.run(code);

    runBtn.disabled = false;
    runBtn.classList.remove('running');
    runBtn.textContent = '▶ Run';

    if (result.success) {
        outputPre.className = '';
        outputPre.textContent = result.stdout || '(No output)';
        if (result.stderr) {
            outputPre.textContent += '\n--- Warnings ---\n' + result.stderr;
        }
    } else {
        outputPre.className = 'error';
        outputPre.textContent = result.stderr || result.stdout || 'Unknown error';
    }
}

function resetCode(id) {
    const playground = document.getElementById(`playground-${id}`);
    const original = playground.dataset.originalRust;
    const editor = document.getElementById(`editor-${id}`);

    // Reset to Rust tab
    playground.querySelectorAll('.lang-tab').forEach(t => {
        t.classList.toggle('active', t.dataset.lang === 'rust');
    });

    if (editor.tagName === 'TEXTAREA') {
        editor.value = original;
    }

    const runBtn = playground.querySelector('.btn-run');
    runBtn.disabled = false;
    runBtn.textContent = '▶ Run';

    // Hide output
    document.getElementById(`output-${id}`).style.display = 'none';
}
