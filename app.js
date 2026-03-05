/* ============================================
   Rust Interactive Learning App - Main Logic
   ============================================ */

let currentLessonIndex = -1;
let completedLessons = new Set();

/* ---- Init ---- */
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    renderSidebar();
    setupKeyboard();
    setupMenuToggle();

    // If user had a lesson open, restore it
    const saved = localStorage.getItem('rustlearn_current');
    if (saved !== null) {
        const idx = parseInt(saved, 10);
        if (idx >= 0 && idx < LESSONS.length) {
            openLesson(idx);
        }
    }
});

/* ---- Sidebar Rendering ---- */
function renderSidebar() {
    const list = document.getElementById('lessonList');
    let html = '';
    let lastSection = '';

    LESSONS.forEach((lesson, i) => {
        if (lesson.section !== lastSection) {
            html += `<li class="section-header">${lesson.section}</li>`;
            lastSection = lesson.section;
        }
        const done = completedLessons.has(lesson.id);
        const active = i === currentLessonIndex;
        html += `<li class="${active ? 'active' : ''} ${done ? 'completed' : ''}"
                     onclick="openLesson(${i})"
                     data-index="${i}">
                    <span class="lesson-status">${done ? '✓' : (i + 1)}</span>
                    <span>${lesson.title}</span>
                 </li>`;
    });

    list.innerHTML = html;
    updateProgress();
}

/* ---- Progress ---- */
function loadProgress() {
    try {
        const data = localStorage.getItem('rustlearn_completed');
        if (data) {
            completedLessons = new Set(JSON.parse(data));
        }
    } catch (e) {
        completedLessons = new Set();
    }
}

function saveProgress() {
    localStorage.setItem('rustlearn_completed', JSON.stringify([...completedLessons]));
    localStorage.setItem('rustlearn_current', currentLessonIndex.toString());
}

function updateProgress() {
    const total = LESSONS.length;
    const done = completedLessons.size;
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;

    document.querySelector('.progress-fill').style.width = pct + '%';
    document.getElementById('progressText').textContent = `${pct}% 完成 (${done}/${total})`;
}

/* ---- Navigation ---- */
function startLearning() {
    openLesson(0);
}

function openLesson(index) {
    if (index < 0 || index >= LESSONS.length) return;

    currentLessonIndex = index;
    const lesson = LESSONS[index];

    // Update views
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('lessonView').style.display = 'block';

    document.getElementById('lessonBadge').textContent = lesson.badge;
    document.getElementById('lessonTitle').textContent = lesson.title;
    document.getElementById('lessonContent').innerHTML = lesson.content();

    // Navigation buttons
    document.getElementById('prevBtn').disabled = index === 0;
    document.getElementById('nextBtn').disabled = index === LESSONS.length - 1;

    // Complete button state
    const completeBtn = document.getElementById('completeBtn');
    if (completedLessons.has(lesson.id)) {
        completeBtn.textContent = '✓ 已完成';
        completeBtn.classList.add('done');
    } else {
        completeBtn.textContent = '✓ 標記完成';
        completeBtn.classList.remove('done');
    }

    // Update sidebar
    renderSidebar();
    saveProgress();

    // Scroll to top
    document.getElementById('mainContent').scrollTo(0, 0);

    // Close mobile sidebar
    document.getElementById('sidebar').classList.remove('open');
}

function navigateLesson(delta) {
    openLesson(currentLessonIndex + delta);
}

function markComplete() {
    if (currentLessonIndex < 0) return;
    const lesson = LESSONS[currentLessonIndex];

    if (completedLessons.has(lesson.id)) {
        completedLessons.delete(lesson.id);
    } else {
        completedLessons.add(lesson.id);
    }

    saveProgress();
    renderSidebar();

    const completeBtn = document.getElementById('completeBtn');
    if (completedLessons.has(lesson.id)) {
        completeBtn.textContent = '✓ 已完成';
        completeBtn.classList.add('done');
    } else {
        completeBtn.textContent = '✓ 標記完成';
        completeBtn.classList.remove('done');
    }
}

/* ---- Quiz ---- */
function checkQuiz(btn, isCorrect) {
    const quizSection = btn.closest('.quiz-section');
    const buttons = quizSection.querySelectorAll('.quiz-option');
    const feedback = quizSection.querySelector('.quiz-feedback');

    buttons.forEach(b => {
        b.disabled = true;
        if (b === btn) {
            b.classList.add(isCorrect ? 'correct' : 'wrong');
        }
        // Highlight the correct answer
        if (b.getAttribute('onclick').includes('true')) {
            b.classList.add('correct');
        }
    });

    if (feedback) {
        feedback.classList.add('show', isCorrect ? 'correct' : 'wrong');
    }
}

/* ---- Hint Toggle ---- */
function toggleHint(btn) {
    const content = btn.nextElementSibling;
    const isShowing = content.classList.contains('show');
    content.classList.toggle('show');
    btn.textContent = isShowing ? '💡 顯示提示' : '💡 隱藏提示';
}

/* ---- Answer Toggle ---- */
function toggleAnswer(btn) {
    const content = btn.nextElementSibling;
    const isShowing = content.classList.contains('show');
    content.classList.toggle('show');
    btn.textContent = isShowing ? '📖 顯示正解' : '📖 隱藏正解';
}

/* ---- Keyboard Shortcuts ---- */
function setupKeyboard() {
    document.addEventListener('keydown', (e) => {
        // Don't trigger shortcuts when typing in editor
        if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') return;

        if (e.key === 'ArrowLeft' || e.key === 'h') {
            navigateLesson(-1);
        } else if (e.key === 'ArrowRight' || e.key === 'l') {
            navigateLesson(1);
        }
    });
}

/* ---- Mobile Menu ---- */
function setupMenuToggle() {
    document.getElementById('menuToggle').addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('open');
    });

    // Close sidebar when clicking outside on mobile
    document.getElementById('mainContent').addEventListener('click', (e) => {
        if (e.target.id !== 'menuToggle') {
            document.getElementById('sidebar').classList.remove('open');
        }
    });
}
