const LESSONS = [
// ============================================
// Section: 基礎概念
// ============================================
{
    id: 'hello-world',
    section: '基礎概念',
    title: 'Hello World 與基本設定',
    badge: '第 1 課',
    content: () => `
<h3>你的第一個 Rust 程式</h3>
<p>每個 Rust 程式都從 <code>fn main()</code> 函式開始執行。<code>println!</code> 是一個<strong>巨集 (macro)</strong>，注意結尾的驚嘆號 <code>!</code>，這是 Rust 中巨集的標誌。</p>

${createPlayground('hello1',
`fn main() {
    println!("Hello, World!");
    println!("我正在學習 Rust! 🦀");

    // 格式化輸出，類似 Python 的 f-string
    let name = "Rustacean";
    let year = 2024;
    println!("Hello, {}! Welcome to {}.", name, year);

    // 位置參數
    println!("{0} loves {1}, {1} loves {0}", "Alice", "Rust");

    // Debug 輸出
    println!("{:?}", (1, 2, 3));
}`,
`#include <iostream>
#include <format> // C++20

int main() {
    std::cout << "Hello, World!" << std::endl;
    std::cout << "我正在學習 C++!" << std::endl;

    // C++20 format
    std::string name = "Developer";
    int year = 2024;
    std::cout << std::format("Hello, {}! Welcome to {}.", name, year);

    return 0;
}`,
`# Python
print("Hello, World!")
print("我正在學習 Python!")

# f-string 格式化
name = "Pythonista"
year = 2024
print(f"Hello, {name}! Welcome to {year}.")

# 位置參數
print("{0} loves {1}, {1} loves {0}".format("Alice", "Python"))

# Debug 輸出
print(repr((1, 2, 3)))
`)}

<div class="info-box cpp">
    <div class="box-title">🔷 C++ 對比</div>
    <p>Rust 的 <code>println!</code> 是編譯期巨集，類似 C++20 的 <code>std::format</code>，但格式字串在編譯時檢查。不需要 <code>std::endl</code>，<code>println!</code> 自動換行。</p>
</div>

<div class="info-box python">
    <div class="box-title">🐍 Python 對比</div>
    <p>Rust 的 <code>println!("{}", x)</code> 類似 Python 的 <code>print(f"{x}")</code>。<code>{:?}</code> 類似 Python 的 <code>repr()</code>。</p>
</div>

<h3>Cargo — Rust 的建構工具</h3>
<p>Cargo 是 Rust 的套件管理器和建構系統，相當於 C++ 的 CMake + Conan，或 Python 的 pip + setuptools。</p>

<table class="comparison-table">
    <tr><th>操作</th><th>Cargo (Rust)</th><th>C++</th><th>Python</th></tr>
    <tr><td>建立專案</td><td><code>cargo new myapp</code></td><td><code>mkdir + CMakeLists.txt</code></td><td><code>mkdir + setup.py</code></td></tr>
    <tr><td>編譯</td><td><code>cargo build</code></td><td><code>cmake --build .</code></td><td>不需要</td></tr>
    <tr><td>執行</td><td><code>cargo run</code></td><td><code>./build/myapp</code></td><td><code>python main.py</code></td></tr>
    <tr><td>加入依賴</td><td><code>Cargo.toml</code></td><td><code>CMakeLists / vcpkg</code></td><td><code>pip install</code></td></tr>
    <tr><td>測試</td><td><code>cargo test</code></td><td><code>ctest</code></td><td><code>pytest</code></td></tr>
</table>

<div class="info-box tip">
    <div class="box-title">💡 提示</div>
    <p><code>println!</code> 末尾的 <code>!</code> 代表它是巨集而非函式。巨集在編譯時展開，可以接受可變數量的參數，並在編譯時檢查格式字串。</p>
</div>

<div class="quiz-section">
    <h4>📝 小測驗</h4>
    <p>在 Rust 中，<code>println!</code> 的驚嘆號代表什麼？</p>
    <button class="quiz-option" onclick="checkQuiz(this, false)">A. 這是一個特殊的函式呼叫語法</button>
    <button class="quiz-option" onclick="checkQuiz(this, true)">B. 這是一個巨集 (macro)，不是普通函式</button>
    <button class="quiz-option" onclick="checkQuiz(this, false)">C. 這表示函式可能會拋出異常</button>
    <button class="quiz-option" onclick="checkQuiz(this, false)">D. 這是運算子重載的語法</button>
    <div class="quiz-feedback">正確！在 Rust 中，<code>!</code> 標記表示這是一個巨集呼叫。巨集在編譯時展開，比函式更靈活，例如可以接受可變數量的參數。</div>
</div>

<div class="exercise-section">
    <h4>🏋️ 練習：格式化輸出</h4>
    <p class="exercise-desc">修改下面的程式，讓它輸出你的名字和最喜歡的程式語言。使用 <code>println!</code> 的格式化功能。</p>
    ${createPlayground('hello-ex1',
`fn main() {
    // TODO: 宣告兩個變數 name 和 language
    // 然後用 println! 輸出 "Hi, I'm {name} and I love {language}!"
    let name = ""; // 填入你的名字
    let language = ""; // 填入你喜歡的語言

    println!("Hi, I'm {} and I love {}!", name, language);
}`,
null, null)}
    <div class="exercise-hint">
        <button class="hint-toggle" onclick="toggleHint(this)">💡 顯示提示</button>
        <div class="hint-content">把空字串替換成實際的值，例如 <code>let name = "Alice";</code>。Rust 字串使用雙引號 <code>"</code>。</div>
    </div>
    <div class="exercise-answer">
        <button class="answer-toggle" onclick="toggleAnswer(this)">📖 顯示正解</button>
        <div class="answer-content"><pre><code>fn main() {
    let name = "Alice";
    let language = "Rust";

    println!("Hi, I'm {} and I love {}!", name, language);
}</code></pre></div>
    </div>
</div>
`
},
{
    id: 'variables',
    section: '基礎概念',
    title: '變數與可變性',
    badge: '第 2 課',
    content: () => `
<h3>不可變是預設</h3>
<p>在 Rust 中，變數預設是<strong>不可變的 (immutable)</strong>。這是 Rust 安全性的重要基礎。要讓變數可變，必須明確使用 <code>mut</code> 關鍵字。</p>

${createPlayground('var1',
`fn main() {
    // 不可變變數
    let x = 5;
    println!("x = {}", x);
    // x = 6;  // ❌ 編譯錯誤！不能修改不可變變數

    // 可變變數
    let mut y = 10;
    println!("y = {}", y);
    y = 20;  // ✅ 可以修改
    println!("y = {}", y);

    // 常數 - 必須標注型別，值在編譯時確定
    const MAX_POINTS: u32 = 100_000;
    println!("MAX = {}", MAX_POINTS);

    // Shadowing - 重新宣告同名變數
    let z = 5;
    let z = z + 1;      // shadow 前一個 z
    let z = z * 2;      // 再次 shadow
    println!("z = {}", z);  // 12

    // Shadowing 可以改變型別！
    let spaces = "   ";         // &str
    let spaces = spaces.len();  // usize
    println!("spaces = {}", spaces);
}`,
`#include <iostream>

int main() {
    // C++ 預設可變
    int x = 5;
    x = 6;  // OK

    // 不可變需要 const
    const int y = 10;
    // y = 20;  // ❌ 編譯錯誤

    // constexpr 編譯期常數
    constexpr int MAX_POINTS = 100000;

    // C++ 沒有 shadowing（同作用域內）
    // 需要不同變數名或新的作用域
    {
        int z = 5;
        int z2 = z + 1;  // 需要不同名稱
    }

    return 0;
}`,
`# Python - 所有變數都可變
x = 5
x = 6  # OK，沒有 immutable 的概念

# Python 沒有真正的常數
MAX_POINTS = 100000  # 只是命名慣例

# Python 可以隨意改變型別
spaces = "   "
spaces = len(spaces)  # 直接覆蓋，改變型別
print(spaces)
`)}

<div class="info-box cpp">
    <div class="box-title">🔷 C++ 對比</div>
    <p>C++ 預設可變，需要 <code>const</code> 明確標記不可變。Rust 恰好相反 — 預設不可變，需要 <code>mut</code> 明確標記可變。這讓你在寫程式時必須主動思考哪些值需要被修改。</p>
</div>

<div class="info-box python">
    <div class="box-title">🐍 Python 對比</div>
    <p>Python 完全沒有不可變變數的概念（只有不可變的<em>物件</em>如 tuple）。Rust 的 <code>let</code> 加上 Shadowing 類似 Python 的重新賦值，但更安全，因為每次 shadow 都是全新的綁定。</p>
</div>

<div class="info-box warning">
    <div class="box-title">⚠️ Shadowing vs mut</div>
    <p>Shadowing（<code>let x = x + 1</code>）和 <code>mut</code> 不同！Shadowing 建立<strong>全新的變數</strong>，可以改變型別。<code>mut</code> 是讓同一個變數可以被修改，但型別不能改變。</p>
</div>

<div class="quiz-section">
    <h4>📝 小測驗</h4>
    <p>以下哪段程式碼能成功編譯？</p>
    <button class="quiz-option" onclick="checkQuiz(this, false)">A. <code>let x = 5; x = 10;</code></button>
    <button class="quiz-option" onclick="checkQuiz(this, true)">B. <code>let x = 5; let x = 10;</code></button>
    <button class="quiz-option" onclick="checkQuiz(this, false)">C. <code>const x = 5; let x = 10;</code></button>
    <button class="quiz-option" onclick="checkQuiz(this, true)">D. <code>let mut x = 5; x = 10;</code></button>
    <div class="quiz-feedback">B 和 D 都正確！B 使用 shadowing 重新宣告 x；D 使用 mut 讓 x 可變。A 錯誤因為 x 是不可變的。C 錯誤因為 const 需要型別標註。</div>
</div>

<div class="exercise-section">
    <h4>🏋️ 練習：修復可變性錯誤</h4>
    <p class="exercise-desc">下面的程式碼有編譯錯誤。請修復它，使程式能正確執行並輸出結果。</p>
    ${createPlayground('var-ex1',
`fn main() {
    let count = 0;

    count = count + 1;
    count = count + 1;
    count = count + 1;

    println!("Count: {}", count);

    let message = "hello";
    message = message.len();
    println!("Length: {}", message);
}`,
null, null)}
    <div class="exercise-hint">
        <button class="hint-toggle" onclick="toggleHint(this)">💡 顯示提示</button>
        <div class="hint-content">第一個問題：Rust 的變數預設是不可變的，想想要用什麼關鍵字讓變數可以被重新賦值？<br>第二個問題：Rust 不允許改變變數的型別。但有一種方式可以用相同的名稱建立全新的變數，這在第 2 課有介紹過。</div>
    </div>
    <div class="exercise-answer">
        <button class="answer-toggle" onclick="toggleAnswer(this)">📖 顯示正解</button>
        <div class="answer-content"><pre><code>fn main() {
    let mut count = 0;

    count = count + 1;
    count = count + 1;
    count = count + 1;

    println!("Count: {}", count);

    let message = "hello";
    let message = message.len(); // shadowing
    println!("Length: {}", message);
}</code></pre></div>
    </div>
</div>
`
},
{
    id: 'data-types',
    section: '基礎概念',
    title: '資料型別',
    badge: '第 3 課',
    content: () => `
<h3>靜態型別系統</h3>
<p>Rust 是<strong>靜態型別</strong>語言，每個值在編譯時都有明確的型別。但 Rust 有強大的<strong>型別推斷</strong>，很多時候不需要明確標注型別。</p>

<h4>純量型別 (Scalar Types)</h4>
<table class="comparison-table">
    <tr><th>類別</th><th>Rust</th><th>C++</th><th>Python</th></tr>
    <tr><td>整數</td><td><code>i8, i16, i32, i64, i128, u8...u128, isize, usize</code></td><td><code>int, long, uint8_t...</code></td><td><code>int</code> (任意精度)</td></tr>
    <tr><td>浮點數</td><td><code>f32, f64</code></td><td><code>float, double</code></td><td><code>float</code></td></tr>
    <tr><td>布林</td><td><code>bool</code></td><td><code>bool</code></td><td><code>bool</code></td></tr>
    <tr><td>字元</td><td><code>char</code> (4 bytes, Unicode)</td><td><code>char</code> (1 byte)</td><td><code>str</code> (length 1)</td></tr>
</table>

${createPlayground('types1',
`fn main() {
    // 整數型別
    let a: i32 = 42;
    let b: u8 = 255;         // 無符號 8-bit
    let c: isize = -100;     // 平台相關大小
    let hex = 0xff;           // 十六進制
    let binary = 0b1010;      // 二進制
    let big_num = 1_000_000;  // 底線分隔，增加可讀性

    println!("a={}, b={}, c={}, hex={}, bin={}, big={}",
             a, b, c, hex, binary, big_num);

    // 浮點數
    let pi: f64 = 3.14159265;
    let e: f32 = 2.71828;
    println!("pi={:.4}, e={:.2}", pi, e);

    // 布林
    let is_rust_cool: bool = true;
    println!("Rust is cool: {}", is_rust_cool);

    // 字元 - 4 bytes, 支援 Unicode
    let letter = 'A';
    let emoji = '🦀';
    let chinese = '中';
    println!("{} {} {}", letter, emoji, chinese);

    // Tuple（元組）
    let tup: (i32, f64, &str) = (42, 3.14, "hello");
    let (x, y, z) = tup;  // 解構
    println!("x={}, y={}, z={}", x, y, z);
    println!("First: {}", tup.0);  // 索引存取

    // Array（陣列）- 固定長度
    let arr: [i32; 5] = [1, 2, 3, 4, 5];
    let zeros = [0; 10];  // 10 個 0
    println!("arr[0]={}, len={}", arr[0], arr.len());
    println!("zeros len={}", zeros.len());
}`,
`#include <iostream>
#include <tuple>
#include <array>

int main() {
    int a = 42;
    uint8_t b = 255;
    float e = 2.71828f;
    double pi = 3.14159265;
    bool is_cool = true;
    char letter = 'A';  // 1 byte only!

    // C++ tuple
    auto tup = std::make_tuple(42, 3.14, "hello");
    auto [x, y, z] = tup;  // C++17 structured bindings

    // C++ array
    std::array<int, 5> arr = {1, 2, 3, 4, 5};
    std::cout << arr[0] << std::endl;

    return 0;
}`,
`# Python - 動態型別
a = 42          # int (任意精度!)
b = 255
pi = 3.14159265 # float (always 64-bit)
is_cool = True   # bool

letter = 'A'     # str，不是 char
emoji = '🦀'

# tuple（不可變）
tup = (42, 3.14, "hello")
x, y, z = tup    # 解構
print(tup[0])     # 索引存取

# list（可變，非固定長度）
arr = [1, 2, 3, 4, 5]
zeros = [0] * 10
print(arr[0], len(arr))
`)}

<div class="info-box tip">
    <div class="box-title">💡 Rust 的 char</div>
    <p>Rust 的 <code>char</code> 是 4 bytes，代表一個 Unicode Scalar Value。這與 C++ 的 1-byte <code>char</code> 完全不同！Rust 能原生處理 emoji 和中文字元。</p>
</div>

<div class="quiz-section">
    <h4>📝 小測驗</h4>
    <p>Rust 的 <code>char</code> 型別佔多少空間？</p>
    <button class="quiz-option" onclick="checkQuiz(this, false)">A. 1 byte（和 C++ 一樣）</button>
    <button class="quiz-option" onclick="checkQuiz(this, false)">B. 2 bytes（和 Java 一樣）</button>
    <button class="quiz-option" onclick="checkQuiz(this, true)">C. 4 bytes（Unicode Scalar Value）</button>
    <button class="quiz-option" onclick="checkQuiz(this, false)">D. 不固定，取決於字元</button>
    <div class="quiz-feedback">正確！Rust 的 <code>char</code> 永遠是 4 bytes，可以表示任何 Unicode Scalar Value，包括 emoji。</div>
</div>

<div class="exercise-section">
    <h4>🏋️ 練習：型別宣告</h4>
    <p class="exercise-desc">完成下面的程式，宣告各種型別的變數並輸出它們。</p>
    ${createPlayground('types-ex1',
`fn main() {
    // TODO: 宣告一個 u8 型別的變數 age，值為 25
    // let age ...

    // TODO: 宣告一個 f64 型別的變數 height，值為 175.5
    // let height ...

    // TODO: 宣告一個 tuple 包含 ("Alice", age, height)
    // let person = ...

    // TODO: 宣告一個長度為 3 的 i32 陣列 scores，值為 [95, 87, 92]
    // let scores ...

    // 取消下面的註解來測試你的答案
    // println!("Name: {}, Age: {}, Height: {:.1}cm",
    //          person.0, person.1, person.2);
    // println!("Scores: {:?}", scores);
    // println!("Average: {:.1}",
    //          (scores[0] + scores[1] + scores[2]) as f64 / 3.0);
}`,
null, null)}
    <div class="exercise-hint">
        <button class="hint-toggle" onclick="toggleHint(this)">💡 顯示提示</button>
        <div class="hint-content">型別標注語法是 <code>let 變數名: 型別 = 值;</code>。Tuple 用小括號 <code>()</code>，陣列用中括號 <code>[]</code> 且型別標注為 <code>[型別; 長度]</code>。存取 tuple 元素用 <code>.0</code>、<code>.1</code> 等。</div>
    </div>
    <div class="exercise-answer">
        <button class="answer-toggle" onclick="toggleAnswer(this)">📖 顯示正解</button>
        <div class="answer-content"><pre><code>fn main() {
    let age: u8 = 25;
    let height: f64 = 175.5;
    let person = ("Alice", age, height);
    let scores: [i32; 3] = [95, 87, 92];

    println!("Name: {}, Age: {}, Height: {:.1}cm",
             person.0, person.1, person.2);
    println!("Scores: {:?}", scores);
    println!("Average: {:.1}",
             (scores[0] + scores[1] + scores[2]) as f64 / 3.0);
}</code></pre></div>
    </div>
</div>
`
},
{
    id: 'functions',
    section: '基礎概念',
    title: '函式',
    badge: '第 4 課',
    content: () => `
<h3>函式定義</h3>
<p>Rust 使用 <code>fn</code> 關鍵字定義函式。函式參數<strong>必須</strong>標注型別。回傳值型別用 <code>-></code> 標注。</p>

<p>重要概念：Rust 區分<strong>陳述式 (statements)</strong> 和<strong>表達式 (expressions)</strong>。表達式有回傳值，陳述式沒有。函式最後一行如果是表達式（沒有分號），就是回傳值。</p>

${createPlayground('fn1',
`// 無回傳值的函式
fn greet(name: &str) {
    println!("Hello, {}!", name);
}

// 有回傳值的函式
fn add(a: i32, b: i32) -> i32 {
    a + b  // 注意：沒有分號！這是表達式，自動回傳
}

// 也可以用 return 明確回傳
fn divide(a: f64, b: f64) -> f64 {
    if b == 0.0 {
        return 0.0;  // 提前回傳用 return
    }
    a / b  // 最後的表達式自動回傳
}

// 多回傳值用 tuple
fn swap(a: i32, b: i32) -> (i32, i32) {
    (b, a)
}

// 表達式 vs 陳述式
fn expression_demo() -> i32 {
    let x = {
        let y = 5;
        y + 1  // 這個 block 的值是 6
    };
    x * 2  // 回傳 12
}

fn main() {
    greet("Rustacean");

    let sum = add(3, 4);
    println!("3 + 4 = {}", sum);

    println!("10 / 3 = {:.2}", divide(10.0, 3.0));

    let (a, b) = swap(1, 2);
    println!("swap(1,2) = ({}, {})", a, b);

    println!("expression_demo = {}", expression_demo());
}`,
`#include <iostream>
#include <tuple>

void greet(const std::string& name) {
    std::cout << "Hello, " << name << "!" << std::endl;
}

int add(int a, int b) {
    return a + b;  // C++ 必須用 return
}

// C++17 structured bindings
std::tuple<int, int> swap_vals(int a, int b) {
    return {b, a};
}

int main() {
    greet("Developer");
    std::cout << add(3, 4) << std::endl;
    auto [a, b] = swap_vals(1, 2);
    return 0;
}`,
`def greet(name):
    print(f"Hello, {name}!")

def add(a, b):  # 不需要型別標注
    return a + b

def divide(a, b):
    if b == 0:
        return 0.0
    return a / b

def swap(a, b):  # Python 可以直接回傳 tuple
    return b, a

greet("Pythonista")
print(add(3, 4))
a, b = swap(1, 2)
`)}

<div class="info-box warning">
    <div class="box-title">⚠️ 分號很重要！</div>
    <p>在 Rust 中，<code>x + 1</code> 是表達式（有值），但 <code>x + 1;</code> 是陳述式（值被丟棄）。函式回傳值時，最後一行<strong>不要</strong>加分號！這是從 C++/Python 轉過來最常犯的錯誤之一。</p>
</div>

<div class="quiz-section">
    <h4>📝 小測驗</h4>
    <p>以下函式的回傳值是什麼？</p>
    <pre style="background:var(--bg-tertiary);padding:12px;border-radius:6px;margin:8px 0;font-family:var(--font-mono);font-size:0.88rem;color:var(--text-secondary);">fn mystery(x: i32) -> i32 {
    let y = x + 1;
    y * 2
}</pre>
    <button class="quiz-option" onclick="checkQuiz(this, false)">A. 編譯錯誤，沒有 return</button>
    <button class="quiz-option" onclick="checkQuiz(this, true)">B. (x + 1) * 2</button>
    <button class="quiz-option" onclick="checkQuiz(this, false)">C. x + 1</button>
    <button class="quiz-option" onclick="checkQuiz(this, false)">D. 0（沒有明確 return 就回傳 0）</button>
    <div class="quiz-feedback">正確！最後一行 <code>y * 2</code> 沒有分號，所以是表達式，自動作為回傳值。y = x + 1，所以回傳 (x+1)*2。</div>
</div>

<div class="exercise-section">
    <h4>🏋️ 練習：寫函式</h4>
    <p class="exercise-desc">完成 <code>fibonacci</code> 函式，計算第 n 個費波那契數。</p>
    ${createPlayground('fn-ex1',
`// TODO: 完成這個函式
fn fibonacci(n: u32) -> u64 {
    // fib(0)=0, fib(1)=1, fib(n)=fib(n-1)+fib(n-2)
    // 在這裡寫你的實作
    todo!("實作 fibonacci 函式")
}

fn main() {
    for i in 0..10 {
        println!("fib({}) = {}", i, fibonacci(i));
    }
}`,
null, null)}
    <div class="exercise-hint">
        <button class="hint-toggle" onclick="toggleHint(this)">💡 顯示提示</button>
        <div class="hint-content">先處理基礎情況（n 為 0 和 1 時直接回傳）。對於較大的 n，可以用迴圈搭配兩個變數追蹤前兩個數字，這比遞迴更有效率。想想 <code>for _ in 2..=n</code> 的用法。</div>
    </div>
    <div class="exercise-answer">
        <button class="answer-toggle" onclick="toggleAnswer(this)">📖 顯示正解</button>
        <div class="answer-content"><pre><code>fn fibonacci(n: u32) -> u64 {
    if n == 0 { return 0; }
    if n == 1 { return 1; }
    let mut a: u64 = 0;
    let mut b: u64 = 1;
    for _ in 2..=n {
        let temp = a + b;
        a = b;
        b = temp;
    }
    b
}</code></pre></div>
    </div>
</div>
`
},
// ============================================
// Section: 所有權系統
// ============================================
{
    id: 'ownership',
    section: '所有權系統',
    title: '所有權概念',
    badge: '第 5 課',
    content: () => `
<h3>Rust 最重要的概念</h3>
<p>所有權 (Ownership) 是 Rust 最獨特的特性，它讓 Rust 在<strong>不需要垃圾回收器</strong>的情況下保證記憶體安全。這是你從 C++ 或 Python 轉到 Rust 時需要花最多時間理解的概念。</p>

<h4>三條所有權規則</h4>
<ol>
    <li>Rust 中每個值都有一個<strong>擁有者 (owner)</strong></li>
    <li>同一時間只能有<strong>一個擁有者</strong></li>
    <li>當擁有者離開作用域，值會被<strong>自動丟棄 (drop)</strong></li>
</ol>

${createPlayground('own1',
`fn main() {
    // === Move 語意 ===
    let s1 = String::from("hello");
    let s2 = s1;  // s1 的所有權「移動」到 s2
    // println!("{}", s1);  // ❌ 編譯錯誤！s1 已失效

    println!("s2 = {}", s2);  // ✅ s2 擁有這個字串

    // === Clone（深拷貝）===
    let s3 = String::from("world");
    let s4 = s3.clone();  // 明確深拷貝
    println!("s3 = {}, s4 = {}", s3, s4);  // ✅ 兩個都有效

    // === Copy trait（棧上的資料）===
    let x = 42;
    let y = x;  // i32 實作了 Copy，所以這是拷貝
    println!("x = {}, y = {}", x, y);  // ✅ 兩個都有效

    // === 函式呼叫也會轉移所有權 ===
    let name = String::from("Alice");
    take_ownership(name);
    // println!("{}", name);  // ❌ name 已被移動到函式中

    let num = 42;
    make_copy(num);
    println!("num still valid: {}", num);  // ✅ i32 是 Copy 的

    // === 回傳值轉移所有權 ===
    let greeting = give_ownership();
    println!("{}", greeting);
}

fn take_ownership(s: String) {
    println!("I took: {}", s);
}  // s 在這裡被 drop

fn make_copy(n: i32) {
    println!("I copied: {}", n);
}

fn give_ownership() -> String {
    String::from("I'm yours now!")  // 所有權轉移給呼叫者
}`,
`#include <iostream>
#include <string>
#include <memory>

int main() {
    // C++ move semantics (C++11)
    std::string s1 = "hello";
    std::string s2 = std::move(s1);
    // s1 is now in "valid but unspecified state"
    // 可以用但結果不確定！（Rust 直接禁止）

    // unique_ptr 類似 Rust ownership
    auto p1 = std::make_unique<int>(42);
    auto p2 = std::move(p1);
    // p1 is now nullptr

    // Deep copy
    std::string s3 = "world";
    std::string s4 = s3;  // C++ 預設深拷貝 string

    return 0;
}`,
`# Python 使用引用計數 + 垃圾回收
s1 = "hello"
s2 = s1  # 只是增加引用計數，不是 move

# 兩個都可以用
print(s1)  # OK
print(s2)  # OK

# Python 不需要擔心所有權
# 垃圾回收器會自動清理
import sys
print(f"s1 ref count: {sys.getrefcount(s1)}")

# 但這也意味著：
# 1. 有 GC 暫停的效能損失
# 2. 無法確定資源何時被釋放
# 3. 循環引用需要特別處理
`)}

<div class="info-box cpp">
    <div class="box-title">🔷 C++ 對比：RAII vs Ownership</div>
    <p>Rust 的所有權類似 C++ 的 RAII + move 語意，但有編譯器強制保證。C++ 中 <code>std::move</code> 後的物件處於「有效但未定義」狀態，你仍可以存取它（這是 bug 來源）。Rust 直接在編譯時禁止使用被移動的變數。</p>
</div>

<div class="info-box python">
    <div class="box-title">🐍 Python 對比</div>
    <p>Python 使用引用計數和垃圾回收，你完全不用擔心所有權。但代價是：GC 造成不可預測的延遲、無法精確控制資源釋放時間、循環引用問題。Rust 用所有權系統在編譯時解決這些問題，執行時零開銷。</p>
</div>

<div class="quiz-section">
    <h4>📝 小測驗</h4>
    <p>以下程式碼會發生什麼？</p>
    <pre style="background:var(--bg-tertiary);padding:12px;border-radius:6px;margin:8px 0;font-family:var(--font-mono);font-size:0.88rem;color:var(--text-secondary);">let v1 = vec![1, 2, 3];
let v2 = v1;
println!("{:?}", v1);</pre>
    <button class="quiz-option" onclick="checkQuiz(this, false)">A. 輸出 [1, 2, 3]</button>
    <button class="quiz-option" onclick="checkQuiz(this, true)">B. 編譯錯誤：v1 已被移動</button>
    <button class="quiz-option" onclick="checkQuiz(this, false)">C. 執行時錯誤</button>
    <button class="quiz-option" onclick="checkQuiz(this, false)">D. 輸出空的 vec</button>
    <div class="quiz-feedback">正確！<code>Vec</code> 沒有實作 <code>Copy</code> trait，所以 <code>let v2 = v1</code> 會移動所有權。之後使用 <code>v1</code> 是編譯錯誤。如果需要保留兩個副本，使用 <code>v1.clone()</code>。</div>
</div>

<div class="exercise-section">
    <h4>🏋️ 練習：修復所有權錯誤</h4>
    <p class="exercise-desc">下面的程式碼有所有權錯誤，請修復它。你可以使用 <code>clone()</code>、引用或調整程式結構。</p>
    ${createPlayground('own-ex1',
`fn print_length(s: String) {
    println!("'{}' has length {}", s, s.len());
}

fn main() {
    let message = String::from("Hello, Rust!");

    print_length(message);

    // 修復：讓這行也能正常執行
    println!("Message was: {}", message);
}`,
null, null)}
    <div class="exercise-hint">
        <button class="hint-toggle" onclick="toggleHint(this)">💡 顯示提示</button>
        <div class="hint-content">問題出在 <code>print_length</code> 取得了 <code>message</code> 的所有權。有兩種解決思路：(1) 讓函式「借用」而不是「擁有」值 — 想想引用 <code>&</code> 的用法；(2) 在傳入前複製一份。哪種方式更有效率？</div>
    </div>
    <div class="exercise-answer">
        <button class="answer-toggle" onclick="toggleAnswer(this)">📖 顯示正解</button>
        <div class="answer-content"><pre><code>fn print_length(s: &String) {
    println!("'{}' has length {}", s, s.len());
}

fn main() {
    let message = String::from("Hello, Rust!");
    print_length(&message);
    println!("Message was: {}", message);
}</code></pre></div>
    </div>
</div>
`
},
{
    id: 'references',
    section: '所有權系統',
    title: '引用與借用',
    badge: '第 6 課',
    content: () => `
<h3>借用 (Borrowing)</h3>
<p>如果每次傳值都要轉移所有權，程式寫起來會很痛苦。Rust 的解決方案是<strong>引用 (references)</strong> — 借用值而不取得所有權。</p>

<h4>借用規則</h4>
<ul>
    <li>任意時刻，你可以有<strong>多個不可變引用</strong> <code>&T</code>，或者<strong>一個可變引用</strong> <code>&mut T</code></li>
    <li>引用必須永遠是有效的（不能有懸空引用）</li>
</ul>

${createPlayground('ref1',
`fn main() {
    // === 不可變引用 &T ===
    let s1 = String::from("hello");
    let len = calculate_length(&s1);  // 借用 s1
    println!("'{}' length = {}", s1, len);  // s1 仍然有效！

    // 可以同時有多個不可變引用
    let r1 = &s1;
    let r2 = &s1;
    println!("{} and {}", r1, r2);  // ✅ OK

    // === 可變引用 &mut T ===
    let mut s2 = String::from("hello");
    change(&mut s2);
    println!("Changed: {}", s2);

    // 但不能同時有可變和不可變引用！
    let mut s3 = String::from("hello");
    let r3 = &s3;
    // let r4 = &mut s3;  // ❌ 不能同時借用為可變和不可變
    println!("{}", r3);
    // 注意：r3 的生命週期在這裡結束
    let r4 = &mut s3;  // ✅ OK，r3 已不再使用
    r4.push_str(", world");
    println!("{}", r4);
}

fn calculate_length(s: &String) -> usize {
    s.len()
    // s 在這裡離開作用域，但因為它不擁有所有權
    // 所以什麼都不會發生
}

fn change(s: &mut String) {
    s.push_str(", world!");
}`,
`#include <iostream>
#include <string>

// C++ 引用（不可為 null，不可重新綁定）
size_t calculate_length(const std::string& s) {
    return s.length();
}

// C++ 可以同時有 const& 和 非const&
// 編譯器不會阻止，但可能導致 data race
void change(std::string& s) {
    s += ", world!";
}

int main() {
    std::string s1 = "hello";
    size_t len = calculate_length(s1);

    // C++ 沒有借用規則檢查
    // 下面這段 C++ 允許但可能有問題
    std::string& r1 = s1;
    const std::string& r2 = s1;
    // 可以同時存在，但有潛在風險

    return 0;
}`,
`# Python 一切都是引用
def calculate_length(s):
    return len(s)  # s 只是引用

s1 = "hello"
length = calculate_length(s1)  # 傳引用
print(f"'{s1}' length = {length}")

# Python 沒有可變/不可變引用的區分
# 可變性取決於物件本身
lst = [1, 2, 3]
def modify(l):
    l.append(4)  # 修改原始 list

modify(lst)
print(lst)  # [1, 2, 3, 4]
`)}

<div class="info-box cpp">
    <div class="box-title">🔷 C++ 對比</div>
    <p>C++ 的引用 (<code>&</code>) 和指標 (<code>*</code>) 不受借用規則限制。你可以同時擁有多個可變引用，導致 data race。C++ 也允許建立懸空引用/指標。Rust 在編譯時阻止這一切。</p>
</div>

<div class="info-box tip">
    <div class="box-title">💡 NLL (Non-Lexical Lifetimes)</div>
    <p>Rust 的借用檢查器很聰明。引用的生命週期不是到作用域結束，而是到<strong>最後一次使用</strong>。所以在 <code>r3</code> 最後一次使用後，就可以建立 <code>r4</code> 可變引用。</p>
</div>

<div class="quiz-section">
    <h4>📝 小測驗</h4>
    <p>以下哪段程式碼能編譯通過？</p>
    <button class="quiz-option" onclick="checkQuiz(this, false)">A. <code>let mut s = String::from("hi"); let r1 = &s; let r2 = &mut s; println!("{}{}", r1, r2);</code></button>
    <button class="quiz-option" onclick="checkQuiz(this, true)">B. <code>let mut s = String::from("hi"); let r1 = &s; println!("{}", r1); let r2 = &mut s;</code></button>
    <button class="quiz-option" onclick="checkQuiz(this, false)">C. <code>let mut s = String::from("hi"); let r1 = &mut s; let r2 = &mut s; println!("{}{}", r1, r2);</code></button>
    <div class="quiz-feedback">正確！B 可以編譯因為 <code>r1</code> 在 <code>println!</code> 之後不再使用（NLL），所以之後建立 <code>r2</code> 是合法的。A 和 C 在同時使用引用時違反借用規則。</div>
</div>

<div class="exercise-section">
    <h4>🏋️ 練習：修復借用錯誤</h4>
    <p class="exercise-desc">修復下面的借用錯誤，讓程式能編譯並正確執行。</p>
    ${createPlayground('ref-ex1',
`fn main() {
    let mut data = vec![1, 2, 3, 4, 5];

    let data_ref = &data;  // 不可變借用

    data.push(6);  // 嘗試可變借用 — 這裡有錯！

    println!("Data: {:?}", data_ref);
    println!("Data: {:?}", data);
}`,
null, null)}
    <div class="exercise-hint">
        <button class="hint-toggle" onclick="toggleHint(this)">💡 顯示提示</button>
        <div class="hint-content">Rust 不允許同時存在不可變引用和可變操作。想想引用的「生命週期」——如果你在 <code>push</code> 之前就完成對 <code>data_ref</code> 的使用，編譯器就不會抱怨了。試著調整程式碼的順序。</div>
    </div>
    <div class="exercise-answer">
        <button class="answer-toggle" onclick="toggleAnswer(this)">📖 顯示正解</button>
        <div class="answer-content"><pre><code>fn main() {
    let mut data = vec![1, 2, 3, 4, 5];

    let data_ref = &data;
    println!("Data: {:?}", data_ref);
    // data_ref 在這之後不再使用（NLL）

    data.push(6);  // 現在可以可變借用了
    println!("Data: {:?}", data);
}</code></pre></div>
    </div>
</div>
`
},
{
    id: 'slices',
    section: '所有權系統',
    title: '切片 (Slices)',
    badge: '第 7 課',
    content: () => `
<h3>切片是對資料的引用視圖</h3>
<p>切片 (slice) 讓你引用集合中的一段連續元素，而不需要取得整個集合的所有權。最常見的切片是字串切片 <code>&str</code>。</p>

${createPlayground('slice1',
`fn main() {
    // === 字串切片 &str ===
    let s = String::from("Hello, World!");

    let hello = &s[0..5];     // "Hello"
    let world = &s[7..12];    // "World"
    println!("{} {}", hello, world);

    // 簡寫
    let hello = &s[..5];      // 從開頭
    let world = &s[7..];      // 到結尾
    let full = &s[..];        // 整個字串

    println!("{}", full);

    // 字串字面量就是切片！
    let literal: &str = "I am a string slice";
    println!("{}", literal);

    // === 陣列切片 ===
    let arr = [1, 2, 3, 4, 5];
    let slice = &arr[1..4];   // [2, 3, 4]
    println!("Slice: {:?}", slice);
    println!("Slice len: {}", slice.len());

    // 用切片寫函式更通用
    println!("First word: {}", first_word("Hello World"));
    println!("Sum of slice: {}", sum_slice(&arr[1..4]));
}

fn first_word(s: &str) -> &str {
    let bytes = s.as_bytes();
    for (i, &byte) in bytes.iter().enumerate() {
        if byte == b' ' {
            return &s[..i];
        }
    }
    s
}

fn sum_slice(slice: &[i32]) -> i32 {
    slice.iter().sum()
}`,
`#include <iostream>
#include <string>
#include <string_view> // C++17
#include <span>        // C++20

int main() {
    std::string s = "Hello, World!";

    // string_view 類似 &str
    std::string_view hello(s.data(), 5);
    std::cout << hello << std::endl;

    // span 類似 &[T]  (C++20)
    int arr[] = {1, 2, 3, 4, 5};
    std::span<int> slice(arr + 1, 3);

    return 0;
}`,
`# Python 切片
s = "Hello, World!"
hello = s[0:5]    # "Hello"
world = s[7:12]   # "World"
print(hello, world)

# Python 切片是複製！不是引用
arr = [1, 2, 3, 4, 5]
slc = arr[1:4]    # [2, 3, 4] — 新的 list
slc[0] = 99       # 不影響原始 arr
print(arr)        # [1, 2, 3, 4, 5]
`)}

<div class="info-box warning">
    <div class="box-title">⚠️ 重要差異</div>
    <p>Python 的切片是<strong>複製</strong>，Rust 的切片是<strong>引用</strong>。Rust 切片不會複製資料，而是指向原始資料的一部分。這意味著切片受借用規則限制 — 你不能在持有切片的同時修改原始資料。</p>
</div>

<div class="quiz-section">
    <h4>📝 小測驗</h4>
    <p><code>&str</code> 和 <code>String</code> 的關係是什麼？</p>
    <button class="quiz-option" onclick="checkQuiz(this, false)">A. 它們是同一種型別</button>
    <button class="quiz-option" onclick="checkQuiz(this, true)">B. <code>&str</code> 是字串切片（引用），<code>String</code> 是擁有所有權的堆上字串</button>
    <button class="quiz-option" onclick="checkQuiz(this, false)">C. <code>String</code> 是 <code>&str</code> 的可變版本</button>
    <div class="quiz-feedback">正確！<code>String</code> 擁有資料，存在堆上，可以增長。<code>&str</code> 是借用的字串切片，可以指向 <code>String</code> 的一部分或字串字面量。函式參數優先使用 <code>&str</code> 讓函式更通用。</div>
</div>

<div class="exercise-section">
    <h4>🏋️ 練習：實作字串處理</h4>
    <p class="exercise-desc">實作一個函式，找出字串中最長的單字。</p>
    ${createPlayground('slice-ex1',
`// TODO: 實作這個函式，找出字串中最長的單字
// 提示：回傳值是字串切片 &str
fn longest_word(s: &str) -> &str {
    // 在這裡寫你的實作
    todo!("實作 longest_word 函式")
}

fn main() {
    let text = "The quick brown fox jumps over the lazy dog";
    println!("Longest word: '{}'", longest_word(text));

    let another = "Rust is amazingly fast";
    println!("Longest word: '{}'", longest_word(another));
}`,
null, null)}
    <div class="exercise-hint">
        <button class="hint-toggle" onclick="toggleHint(this)">💡 顯示提示</button>
        <div class="hint-content">可以用 <code>split_whitespace()</code> 來分割單字，然後用一個變數追蹤目前找到的最長單字。比較每個單字的 <code>.len()</code>。初始值可以用空字串 <code>""</code>。</div>
    </div>
    <div class="exercise-answer">
        <button class="answer-toggle" onclick="toggleAnswer(this)">📖 顯示正解</button>
        <div class="answer-content"><pre><code>fn longest_word(s: &str) -> &str {
    let mut longest = "";
    for word in s.split_whitespace() {
        if word.len() > longest.len() {
            longest = word;
        }
    }
    longest
}</code></pre></div>
    </div>
</div>
`
},
// ============================================
// Section: 結構與枚舉
// ============================================
{
    id: 'structs',
    section: '結構與枚舉',
    title: '結構體',
    badge: '第 8 課',
    content: () => `
<h3>用 struct 定義自訂型別</h3>
<p>Rust 的 <code>struct</code> 類似 C++ 的 class/struct 或 Python 的 class。方法用 <code>impl</code> 區塊定義。</p>

${createPlayground('struct1',
`#[derive(Debug)]
struct Rectangle {
    width: f64,
    height: f64,
}

// 方法定義在 impl 區塊中
impl Rectangle {
    // 關聯函式（類似靜態方法）- 沒有 self
    fn new(width: f64, height: f64) -> Self {
        Rectangle { width, height }
    }

    fn square(size: f64) -> Self {
        Rectangle { width: size, height: size }
    }

    // 方法 - 借用 self
    fn area(&self) -> f64 {
        self.width * self.height
    }

    fn perimeter(&self) -> f64 {
        2.0 * (self.width + self.height)
    }

    // 可變借用 self
    fn scale(&mut self, factor: f64) {
        self.width *= factor;
        self.height *= factor;
    }

    fn can_hold(&self, other: &Rectangle) -> bool {
        self.width > other.width && self.height > other.height
    }
}

fn main() {
    let mut rect = Rectangle::new(30.0, 50.0);
    println!("Rectangle: {:?}", rect);
    println!("Area: {}", rect.area());
    println!("Perimeter: {}", rect.perimeter());

    rect.scale(2.0);
    println!("After scale: {:?}", rect);

    let small = Rectangle::square(10.0);
    println!("Can hold? {}", rect.can_hold(&small));
}`,
`#include <iostream>

class Rectangle {
private:
    double width, height;

public:
    Rectangle(double w, double h) : width(w), height(h) {}

    static Rectangle square(double size) {
        return Rectangle(size, size);
    }

    double area() const { return width * height; }
    double perimeter() const { return 2 * (width + height); }

    void scale(double factor) {
        width *= factor;
        height *= factor;
    }

    bool can_hold(const Rectangle& other) const {
        return width > other.width && height > other.height;
    }
};`,
`class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    @classmethod
    def square(cls, size):
        return cls(size, size)

    def area(self):
        return self.width * self.height

    def perimeter(self):
        return 2 * (self.width + self.height)

    def scale(self, factor):
        self.width *= factor
        self.height *= factor

    def can_hold(self, other):
        return self.width > other.width and self.height > other.height

    def __repr__(self):
        return f"Rectangle(w={self.width}, h={self.height})"
`)}

<div class="info-box cpp">
    <div class="box-title">🔷 C++ 對比</div>
    <p>Rust 沒有類別繼承、建構子/解構子語法。<code>impl</code> 區塊中的 <code>&self</code> 類似 C++ 的 <code>this</code> 指標（const 方法），<code>&mut self</code> 類似非 const 方法。Rust 的 <code>Self</code> 等於型別名稱本身。</p>
</div>

<div class="info-box python">
    <div class="box-title">🐍 Python 對比</div>
    <p>Rust 的 <code>impl</code> 區塊相當於 Python 的 class body。關聯函式類似 <code>@classmethod</code>。<code>#[derive(Debug)]</code> 類似 Python 的 <code>__repr__</code>。Rust 沒有 <code>__init__</code>，而是用關聯函式 <code>new()</code> 作為慣例。</p>
</div>

<div class="quiz-section">
    <h4>📝 小測驗</h4>
    <p>Rust 方法中 <code>&self</code>、<code>&mut self</code>、<code>self</code> 的差別是什麼？</p>
    <button class="quiz-option" onclick="checkQuiz(this, true)">A. 不可變借用、可變借用、取得所有權</button>
    <button class="quiz-option" onclick="checkQuiz(this, false)">B. 傳值、傳引用、傳指標</button>
    <button class="quiz-option" onclick="checkQuiz(this, false)">C. 都一樣，只是語法糖</button>
    <div class="quiz-feedback">正確！<code>&self</code> 不可變借用（只能讀取），<code>&mut self</code> 可變借用（可以修改），<code>self</code> 取得所有權（呼叫後物件失效）。大部分方法用 <code>&self</code>，需要修改時用 <code>&mut self</code>。</div>
</div>

<div class="exercise-section">
    <h4>🏋️ 練習：建立 struct</h4>
    <p class="exercise-desc">完成 <code>Circle</code> 結構體，實作面積和周長方法。</p>
    ${createPlayground('struct-ex1',
`use std::f64::consts::PI;

#[derive(Debug)]
struct Circle {
    radius: f64,
}

impl Circle {
    fn new(radius: f64) -> Self {
        Circle { radius }
    }

    // TODO: 實作 area 方法，回傳面積（圓面積公式：PI * r^2）
    // fn area(&self) -> f64 { ... }

    // TODO: 實作 circumference 方法，回傳周長（圓周長公式：2 * PI * r）
    // fn circumference(&self) -> f64 { ... }
}

fn main() {
    let c = Circle::new(5.0);
    println!("Circle: {:?}", c);
    // 完成上面的方法後，取消下面的註解來測試
    // println!("Area: {:.2}", c.area());
    // println!("Circumference: {:.2}", c.circumference());
}`,
null, null)}
    <div class="exercise-hint">
        <button class="hint-toggle" onclick="toggleHint(this)">💡 顯示提示</button>
        <div class="hint-content">方法的第一個參數是 <code>&self</code>，可以用 <code>self.radius</code> 存取欄位。<code>PI</code> 已經從 <code>std::f64::consts</code> 引入了，直接使用即可。記得方法最後一行不加分號就是回傳值。</div>
    </div>
    <div class="exercise-answer">
        <button class="answer-toggle" onclick="toggleAnswer(this)">📖 顯示正解</button>
        <div class="answer-content"><pre><code>impl Circle {
    fn new(radius: f64) -> Self {
        Circle { radius }
    }

    fn area(&self) -> f64 {
        PI * self.radius * self.radius
    }

    fn circumference(&self) -> f64 {
        2.0 * PI * self.radius
    }
}</code></pre></div>
    </div>
</div>
`
},
{
    id: 'enums-pattern',
    section: '結構與枚舉',
    title: '枚舉與模式匹配',
    badge: '第 9 課',
    content: () => `
<h3>Rust 的枚舉 — 遠比你想的強大</h3>
<p>Rust 的 <code>enum</code> 不只是 C++ 的簡單數值枚舉。每個變體可以攜帶不同的資料，類似 C++ 的 <code>std::variant</code> 或 Haskell 的代數資料型別。配合 <code>match</code> 模式匹配，這是 Rust 最強大的功能之一。</p>

${createPlayground('enum1',
`// 枚舉可以攜帶資料！
#[derive(Debug)]
enum Shape {
    Circle(f64),                    // 帶一個 f64（半徑）
    Rectangle(f64, f64),            // 帶兩個 f64（寬高）
    Triangle { a: f64, b: f64, c: f64 }, // 具名欄位
}

impl Shape {
    fn area(&self) -> f64 {
        match self {
            Shape::Circle(r) => std::f64::consts::PI * r * r,
            Shape::Rectangle(w, h) => w * h,
            Shape::Triangle { a, b, c } => {
                let s = (a + b + c) / 2.0;
                (s * (s - a) * (s - b) * (s - c)).sqrt()
            }
        }
    }

    fn describe(&self) -> String {
        match self {
            Shape::Circle(r) => format!("Circle with radius {}", r),
            Shape::Rectangle(w, h) => format!("{}x{} Rectangle", w, h),
            Shape::Triangle { .. } => "Triangle".to_string(),
        }
    }
}

fn main() {
    let shapes = vec![
        Shape::Circle(5.0),
        Shape::Rectangle(4.0, 6.0),
        Shape::Triangle { a: 3.0, b: 4.0, c: 5.0 },
    ];

    for shape in &shapes {
        println!("{}: area = {:.2}", shape.describe(), shape.area());
    }

    // Option<T> — Rust 的 null 替代方案
    let some_number: Option<i32> = Some(42);
    let no_number: Option<i32> = None;

    // 必須處理 None 的情況！
    match some_number {
        Some(n) => println!("Got: {}", n),
        None => println!("Nothing"),
    }

    // if let 簡寫
    if let Some(n) = some_number {
        println!("Also got: {}", n);
    }

    // Result<T, E> — 錯誤處理
    let result: Result<i32, String> = Ok(42);
    match result {
        Ok(v) => println!("Success: {}", v),
        Err(e) => println!("Error: {}", e),
    }
}`,
`#include <iostream>
#include <variant>  // C++17
#include <optional> // C++17

// C++ 用 variant 模擬 Rust enum
struct Circle { double radius; };
struct Rect { double w, h; };

using Shape = std::variant<Circle, Rect>;

double area(const Shape& s) {
    return std::visit([](auto&& shape) -> double {
        using T = std::decay_t<decltype(shape)>;
        if constexpr (std::is_same_v<T, Circle>)
            return 3.14159 * shape.radius * shape.radius;
        else
            return shape.w * shape.h;
    }, s);
}

int main() {
    // optional 類似 Option<T>
    std::optional<int> maybe = 42;
    if (maybe.has_value()) {
        std::cout << *maybe << std::endl;
    }
    return 0;
}`,
`# Python 用 class 或 dataclass 模擬
from dataclasses import dataclass
from typing import Optional
import math

@dataclass
class Circle:
    radius: float
    def area(self): return math.pi * self.radius ** 2

@dataclass
class Rectangle:
    width: float
    height: float
    def area(self): return self.width * self.height

# Python 3.10+ match statement
shape = Circle(5.0)
match shape:
    case Circle(radius=r):
        print(f"Circle area: {math.pi * r * r:.2f}")
    case Rectangle(width=w, height=h):
        print(f"Rect area: {w * h:.2f}")

# Optional 用 None 表示
maybe: Optional[int] = 42
if maybe is not None:
    print(maybe)
`)}

<div class="info-box tip">
    <div class="box-title">💡 Option 和 Result</div>
    <p><code>Option&lt;T&gt;</code> 和 <code>Result&lt;T, E&gt;</code> 是 Rust 最常用的枚舉。Rust <strong>沒有 null</strong>，用 <code>Option::None</code> 代替。Rust <strong>沒有例外</strong>，用 <code>Result::Err</code> 代替。編譯器會強制你處理所有可能的情況！</p>
</div>

<div class="info-box cpp">
    <div class="box-title">🔷 C++ 對比</div>
    <p>Rust 的 <code>enum</code> 比 C++ 的 <code>enum class</code> 強大得多。最接近的 C++ 等價物是 <code>std::variant</code> + <code>std::visit</code>，但語法更冗長且沒有窮盡性檢查。Rust 的 <code>match</code> 必須處理所有變體，否則編譯錯誤。</p>
</div>

<div class="quiz-section">
    <h4>📝 小測驗</h4>
    <p>Rust 用什麼取代 null？</p>
    <button class="quiz-option" onclick="checkQuiz(this, true)">A. <code>Option&lt;T&gt;</code>，有 <code>Some(T)</code> 和 <code>None</code> 兩個變體</button>
    <button class="quiz-option" onclick="checkQuiz(this, false)">B. <code>nullptr</code>，和 C++ 一樣</button>
    <button class="quiz-option" onclick="checkQuiz(this, false)">C. <code>nil</code> 關鍵字</button>
    <button class="quiz-option" onclick="checkQuiz(this, false)">D. Rust 不需要表示「沒有值」的概念</button>
    <div class="quiz-feedback">正確！Rust 沒有 null。<code>Option&lt;T&gt;</code> 是一個枚舉，<code>Some(value)</code> 表示有值，<code>None</code> 表示沒有值。編譯器強制你在使用前處理 <code>None</code> 的情況，避免了 null pointer exception。</div>
</div>

<div class="exercise-section">
    <h4>🏋️ 練習：用 match 處理 Option</h4>
    <p class="exercise-desc">實作一個安全的除法函式，當除數為零時回傳 <code>None</code>。</p>
    ${createPlayground('enum-ex1',
`// TODO: 實作安全除法函式
// 當除數為零時回傳 None，否則回傳 Some(結果)
fn safe_divide(a: f64, b: f64) -> Option<f64> {
    todo!("實作 safe_divide")
}

fn main() {
    let cases = vec![(10.0, 3.0), (10.0, 0.0), (0.0, 5.0)];

    for (a, b) in cases {
        // TODO: 用 match 處理 safe_divide 的回傳值
        // Some(result) => 印出 "{a} / {b} = {result:.2}"
        // None => 印出 "{a} / {b} = undefined (division by zero!)"
        match safe_divide(a, b) {
            _ => println!("TODO: 處理結果"),
        }
    }
}`,
null, null)}
    <div class="exercise-hint">
        <button class="hint-toggle" onclick="toggleHint(this)">💡 顯示提示</button>
        <div class="hint-content"><code>Option&lt;T&gt;</code> 有兩個變體：<code>Some(值)</code> 和 <code>None</code>。函式中用 <code>if</code> 判斷除數，回傳對應的變體。<code>match</code> 時要分別處理 <code>Some(result)</code> 和 <code>None</code> 兩種情況。</div>
    </div>
    <div class="exercise-answer">
        <button class="answer-toggle" onclick="toggleAnswer(this)">📖 顯示正解</button>
        <div class="answer-content"><pre><code>fn safe_divide(a: f64, b: f64) -> Option&lt;f64&gt; {
    if b == 0.0 {
        None
    } else {
        Some(a / b)
    }
}

// match 部分：
match safe_divide(a, b) {
    Some(result) => println!("{} / {} = {:.2}", a, b, result),
    None => println!("{} / {} = undefined (division by zero!)", a, b),
}</code></pre></div>
    </div>
</div>
`
},
// ============================================
// Section: 進階概念
// ============================================
{
    id: 'error-handling',
    section: '進階概念',
    title: '錯誤處理',
    badge: '第 10 課',
    content: () => `
<h3>Result 與 ? 運算子</h3>
<p>Rust 的錯誤處理不使用例外（exception），而是用 <code>Result&lt;T, E&gt;</code> 型別和 <code>?</code> 運算子。這讓錯誤處理變得明確且可組合。</p>

${createPlayground('err1',
`use std::num::ParseIntError;

// 回傳 Result 的函式
fn parse_and_double(s: &str) -> Result<i32, ParseIntError> {
    let n = s.parse::<i32>()?;  // ? 自動傳播錯誤
    Ok(n * 2)
}

// 自訂錯誤型別
#[derive(Debug)]
enum AppError {
    ParseError(ParseIntError),
    TooLarge(i32),
}

impl From<ParseIntError> for AppError {
    fn from(e: ParseIntError) -> Self {
        AppError::ParseError(e)
    }
}

fn validate_age(input: &str) -> Result<i32, AppError> {
    let age: i32 = input.parse()?;  // 自動轉換錯誤
    if age > 150 {
        Err(AppError::TooLarge(age))
    } else {
        Ok(age)
    }
}

fn main() {
    // 使用 match 處理 Result
    let inputs = vec!["42", "abc", "200", "25"];

    for input in inputs {
        match validate_age(input) {
            Ok(age) => println!("Valid age: {}", age),
            Err(AppError::ParseError(e)) => println!("Parse error for '{}': {}", input, e),
            Err(AppError::TooLarge(n)) => println!("Too large: {} > 150", n),
        }
    }

    // unwrap 和 expect — 快速但危險
    let good: i32 = "42".parse().unwrap();
    let also_good: i32 = "42".parse().expect("should be a number");
    println!("Good: {}, Also: {}", good, also_good);

    // unwrap_or 提供預設值
    let fallback: i32 = "abc".parse().unwrap_or(0);
    println!("Fallback: {}", fallback);
}`,
`#include <iostream>
#include <stdexcept>
#include <string>

// C++ 使用例外
int parse_and_double(const std::string& s) {
    try {
        int n = std::stoi(s);
        return n * 2;
    } catch (const std::exception& e) {
        throw;  // 重新拋出
    }
}

int main() {
    try {
        std::cout << parse_and_double("42") << std::endl;
        std::cout << parse_and_double("abc") << std::endl;
    } catch (const std::exception& e) {
        std::cerr << "Error: " << e.what() << std::endl;
    }
    return 0;
}`,
`# Python 使用 try/except
def parse_and_double(s):
    try:
        return int(s) * 2
    except ValueError as e:
        raise

def validate_age(s):
    try:
        age = int(s)
    except ValueError:
        return None
    if age > 150:
        raise ValueError(f"Too large: {age}")
    return age

# Python 的例外會「飛」過多個 call stack
try:
    print(parse_and_double("42"))
    print(parse_and_double("abc"))
except ValueError as e:
    print(f"Error: {e}")
`)}

<div class="info-box warning">
    <div class="box-title">⚠️ 不要濫用 unwrap!</div>
    <p><code>unwrap()</code> 在遇到 <code>Err</code> 或 <code>None</code> 時會 panic（程式崩潰）。在正式程式碼中，應該用 <code>?</code>、<code>match</code> 或 <code>unwrap_or</code> 等安全的方式處理錯誤。<code>unwrap()</code> 只適合快速原型或你確定不會失敗的情況。</p>
</div>

<div class="quiz-section">
    <h4>📝 小測驗</h4>
    <p><code>?</code> 運算子做了什麼？</p>
    <button class="quiz-option" onclick="checkQuiz(this, true)">A. 如果是 Err，立即回傳該錯誤；如果是 Ok，取出內部值</button>
    <button class="quiz-option" onclick="checkQuiz(this, false)">B. 忽略錯誤並繼續執行</button>
    <button class="quiz-option" onclick="checkQuiz(this, false)">C. 把 Result 轉換成 Option</button>
    <div class="quiz-feedback">正確！<code>?</code> 是語法糖，等同於：如果是 <code>Ok(v)</code> 就取出 v 繼續；如果是 <code>Err(e)</code> 就直接 <code>return Err(e)</code>。它讓錯誤傳播非常簡潔。</div>
</div>

<div class="exercise-section">
    <h4>🏋️ 練習：錯誤處理鏈</h4>
    <p class="exercise-desc">用 <code>?</code> 運算子串聯多個可能失敗的操作。</p>
    ${createPlayground('err-ex1',
`use std::num::ParseIntError;

// TODO: 完成這個計算函式
// 1. 將字串 a, b 解析為 i32（用 .parse() 和 ? 運算子）
// 2. 根據 op 執行對應的運算（+, -, *, /）
// 3. 除法要檢查除數是否為零
// 4. 未知運算子要回傳錯誤
fn calculate(a: &str, b: &str, op: &str) -> Result<i32, String> {
    // 提示：用 .parse().map_err(|e: ParseIntError| e.to_string())? 轉換字串
    let x: i32 = todo!("解析 a");
    let y: i32 = todo!("解析 b");

    todo!("根據 op 執行運算")
}

fn main() {
    let tests = vec![
        ("10", "3", "+"),
        ("10", "abc", "+"),
        ("10", "0", "/"),
        ("10", "3", "%"),
    ];

    for (a, b, op) in tests {
        match calculate(a, b, op) {
            Ok(result) => println!("{} {} {} = {}", a, op, b, result),
            Err(e) => println!("{} {} {} => Error: {}", a, op, b, e),
        }
    }
}`,
null, null)}
    <div class="exercise-hint">
        <button class="hint-toggle" onclick="toggleHint(this)">💡 顯示提示</button>
        <div class="hint-content">用 <code>?</code> 運算子可以自動傳播錯誤。字串解析用 <code>a.parse::&lt;i32&gt;()</code>，但因為回傳的錯誤型別不同，需要用 <code>.map_err()</code> 轉換。運算子部分可以用 <code>match op { "+" => ..., _ => ... }</code> 處理。</div>
    </div>
    <div class="exercise-answer">
        <button class="answer-toggle" onclick="toggleAnswer(this)">📖 顯示正解</button>
        <div class="answer-content"><pre><code>fn calculate(a: &str, b: &str, op: &str) -> Result&lt;i32, String&gt; {
    let x: i32 = a.parse().map_err(|e: ParseIntError| e.to_string())?;
    let y: i32 = b.parse().map_err(|e: ParseIntError| e.to_string())?;

    match op {
        "+" => Ok(x + y),
        "-" => Ok(x - y),
        "*" => Ok(x * y),
        "/" => {
            if y == 0 {
                Err("Division by zero".to_string())
            } else {
                Ok(x / y)
            }
        }
        _ => Err(format!("Unknown operator: {}", op)),
    }
}</code></pre></div>
    </div>
</div>
`
},
{
    id: 'generics-traits',
    section: '進階概念',
    title: '泛型與 Trait',
    badge: '第 11 課',
    content: () => `
<h3>泛型 (Generics)</h3>
<p>泛型讓你寫出適用於多種型別的程式碼，在編譯時特化（零執行時開銷），類似 C++ 的模板。</p>

<h3>Trait — Rust 的介面</h3>
<p>Trait 定義共享行為，類似 C++ 的抽象類別/concepts 或 Python 的 ABC。但 Rust 沒有繼承，而是用 trait 組合功能。</p>

${createPlayground('trait1',
`use std::fmt;

// 定義 trait
trait Summary {
    fn summarize(&self) -> String;

    // 可以有預設實作
    fn preview(&self) -> String {
        format!("{}...", &self.summarize()[..20.min(self.summarize().len())])
    }
}

#[derive(Debug)]
struct Article {
    title: String,
    author: String,
    content: String,
}

#[derive(Debug)]
struct Tweet {
    username: String,
    text: String,
}

// 為 Article 實作 Summary
impl Summary for Article {
    fn summarize(&self) -> String {
        format!("{} by {}", self.title, self.author)
    }
}

// 為 Tweet 實作 Summary
impl Summary for Tweet {
    fn summarize(&self) -> String {
        format!("@{}: {}", self.username, self.text)
    }
}

// 泛型函式 + trait bound
fn notify<T: Summary + fmt::Debug>(item: &T) {
    println!("[Notification] {:?}", item);
    println!("  Summary: {}", item.summarize());
}

// 泛型結構體
#[derive(Debug)]
struct Pair<T> {
    first: T,
    second: T,
}

impl<T: PartialOrd + fmt::Display> Pair<T> {
    fn larger(&self) -> &T {
        if self.first >= self.second { &self.first } else { &self.second }
    }
}

fn main() {
    let article = Article {
        title: String::from("Rust is Amazing"),
        author: String::from("Alice"),
        content: String::from("Long content..."),
    };

    let tweet = Tweet {
        username: String::from("rustlang"),
        text: String::from("Rust 2024 is here!"),
    };

    notify(&article);
    notify(&tweet);

    let pair = Pair { first: 10, second: 20 };
    println!("Larger: {}", pair.larger());
}`,
`#include <iostream>
#include <concepts>  // C++20

// C++ 用模板
template<typename T>
T larger(T a, T b) {
    return (a >= b) ? a : b;
}

// C++20 concepts 類似 trait bounds
template<typename T>
concept Summarizable = requires(T t) {
    { t.summarize() } -> std::convertible_to<std::string>;
};

class Article {
public:
    std::string title, author;
    std::string summarize() const {
        return title + " by " + author;
    }
};`,
`# Python 用抽象基類或 Protocol
from abc import ABC, abstractmethod

class Summary(ABC):
    @abstractmethod
    def summarize(self) -> str: ...

    def preview(self) -> str:  # 預設實作
        return self.summarize()[:20] + "..."

class Article(Summary):
    def __init__(self, title, author):
        self.title = title
        self.author = author

    def summarize(self) -> str:
        return f"{self.title} by {self.author}"

# Python duck typing - 不需要明確宣告
def notify(item):  # 只要有 summarize 方法就行
    print(item.summarize())
`)}

<div class="info-box cpp">
    <div class="box-title">🔷 C++ 對比</div>
    <p>Rust 泛型類似 C++ 模板，但有 trait bounds 限制。C++20 的 concepts 最接近 Rust 的 trait bounds。重要差異：Rust 泛型在定義時就進行型別檢查（而非實例化時），所以錯誤訊息更清楚。</p>
</div>

<div class="info-box python">
    <div class="box-title">🐍 Python 對比</div>
    <p>Python 的 duck typing 很方便但不安全 — 只有執行時才知道方法是否存在。Rust 的 trait 在編譯時保證型別滿足需求，同時保持類似的靈活性。</p>
</div>

<div class="quiz-section">
    <h4>📝 小測驗</h4>
    <p>Rust 的 trait 最接近哪個概念？</p>
    <button class="quiz-option" onclick="checkQuiz(this, false)">A. C++ 的 class inheritance</button>
    <button class="quiz-option" onclick="checkQuiz(this, true)">B. C++20 的 concepts + Java 的 interface</button>
    <button class="quiz-option" onclick="checkQuiz(this, false)">C. Python 的 duck typing</button>
    <button class="quiz-option" onclick="checkQuiz(this, false)">D. C 的函式指標</button>
    <div class="quiz-feedback">正確！Trait 結合了介面（定義方法簽名）和 concepts（約束泛型）。它不使用繼承，而是通過實作多個 trait 來組合功能。</div>
</div>

<div class="exercise-section">
    <h4>🏋️ 練習：實作 Trait</h4>
    <p class="exercise-desc">為不同形狀實作 <code>Area</code> trait。</p>
    ${createPlayground('trait-ex1',
`trait Area {
    fn area(&self) -> f64;
    fn description(&self) -> String;
}

struct Circle { radius: f64 }
struct Square { side: f64 }

// TODO: 為 Circle 實作 Area trait
// impl Area for Circle { ... }

// TODO: 為 Square 實作 Area trait
// impl Area for Square { ... }

fn print_area(shape: &dyn Area) {
    println!("{}: area = {:.2}", shape.description(), shape.area());
}

fn main() {
    let shapes: Vec<Box<dyn Area>> = vec![
        Box::new(Circle { radius: 5.0 }),
        Box::new(Square { side: 4.0 }),
        Box::new(Circle { radius: 3.0 }),
    ];

    for shape in &shapes {
        print_area(shape.as_ref());
    }
}`,
null, null)}
    <div class="exercise-hint">
        <button class="hint-toggle" onclick="toggleHint(this)">💡 顯示提示</button>
        <div class="hint-content">語法是 <code>impl TraitName for StructName { ... }</code>。你需要實作 trait 定義的所有方法。<code>area</code> 回傳 <code>f64</code>，<code>description</code> 回傳 <code>String</code>（可以用 <code>format!()</code>）。圓面積 = PI * r²，正方形面積 = side²。</div>
    </div>
    <div class="exercise-answer">
        <button class="answer-toggle" onclick="toggleAnswer(this)">📖 顯示正解</button>
        <div class="answer-content"><pre><code>impl Area for Circle {
    fn area(&self) -> f64 {
        std::f64::consts::PI * self.radius * self.radius
    }
    fn description(&self) -> String {
        format!("Circle(r={})", self.radius)
    }
}

impl Area for Square {
    fn area(&self) -> f64 {
        self.side * self.side
    }
    fn description(&self) -> String {
        format!("Square(s={})", self.side)
    }
}</code></pre></div>
    </div>
</div>
`
},
{
    id: 'lifetime',
    section: '進階概念',
    title: '生命週期',
    badge: '第 12 課',
    content: () => `
<h3>為什麼需要生命週期？</h3>
<p>生命週期 (lifetime) 是 Rust 獨有的概念，它告訴編譯器引用的有效範圍。目的是防止<strong>懸空引用 (dangling references)</strong> — 在 C++ 中這是最常見的記憶體安全問題之一。</p>

${createPlayground('life1',
`// 生命週期標注 'a
// 表示回傳值的引用和輸入的引用具有相同的生命週期
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() { x } else { y }
}

// 結構體中的生命週期
#[derive(Debug)]
struct Excerpt<'a> {
    content: &'a str,  // 這個引用必須活得和結構體一樣長
}

impl<'a> Excerpt<'a> {
    fn level(&self) -> i32 {
        3
    }

    // 生命週期省略規則自動推斷
    fn announce(&self, announcement: &str) -> &str {
        println!("Attention: {}", announcement);
        self.content
    }
}

fn main() {
    // 生命週期示例
    let string1 = String::from("long string");
    let result;
    {
        let string2 = String::from("xyz");
        result = longest(string1.as_str(), string2.as_str());
        println!("Longest: {}", result);
    }
    // 注意：如果把 println! 移到大括號外面，會編譯錯誤
    // 因為 result 可能引用 string2，但 string2 已離開作用域

    // 結構體生命週期
    let novel = String::from("Call me Ishmael. Some years ago...");
    let first_sentence = novel.split('.').next().unwrap();
    let excerpt = Excerpt { content: first_sentence };
    println!("Excerpt: {:?}", excerpt);

    // 'static 生命週期 — 整個程式期間都有效
    let s: &'static str = "I live forever!";
    println!("{}", s);
}`,
`#include <iostream>
#include <string>

// C++ 沒有生命週期標注
// 編譯器不會阻止懸空引用！
const std::string& longer(const std::string& a,
                           const std::string& b) {
    return (a.length() > b.length()) ? a : b;
}

int main() {
    std::string s1 = "hello";
    const std::string* result;
    {
        std::string s2 = "hi";
        result = &longer(s1, s2);
        // s2 在這裡被銷毀
    }
    // ⚠️ 如果 result 指向 s2，這是懸空引用！
    // C++ 不會警告你，Rust 會阻止編譯！
    return 0;
}`,
`# Python 不需要生命週期
# 因為垃圾回收器追蹤所有引用
def longest(a, b):
    return a if len(a) > len(b) else b

s1 = "hello"
result = None
# 在 Python 中，只要有引用存在
# 物件就不會被回收
s2 = "hi"
result = longest(s1, s2)
del s2  # 如果 result 引用 s2 的值
        # 值仍然存在（引用計數 > 0）
print(result)  # 永遠安全
`)}

<div class="info-box tip">
    <div class="box-title">💡 生命週期省略規則</div>
    <p>大部分情況下，你不需要手動標注生命週期。Rust 有三條省略規則自動推斷：1) 每個引用參數得到自己的生命週期 2) 如果只有一個輸入生命週期，它被賦給所有輸出 3) 如果有 <code>&self</code>，self 的生命週期被賦給所有輸出。</p>
</div>

<div class="quiz-section">
    <h4>📝 小測驗</h4>
    <p>生命週期標注 <code>'a</code> 的作用是什麼？</p>
    <button class="quiz-option" onclick="checkQuiz(this, false)">A. 控制變數存活多長時間</button>
    <button class="quiz-option" onclick="checkQuiz(this, true)">B. 描述多個引用之間的生命週期關係，幫助編譯器驗證安全性</button>
    <button class="quiz-option" onclick="checkQuiz(this, false)">C. 在執行時追蹤記憶體使用</button>
    <div class="quiz-feedback">正確！生命週期標注不會改變任何引用的實際生命週期。它們只是告訴編譯器引用之間的關係，讓編譯器能驗證所有引用在使用時都是有效的。</div>
</div>

<div class="exercise-section">
    <h4>🏋️ 練習：修復生命週期</h4>
    <p class="exercise-desc">這段程式碼需要生命週期標注才能編譯。請加上正確的標注。</p>
    ${createPlayground('life-ex1',
`// TODO: 加上生命週期標注讓這個函式能編譯
// 目前會報錯：missing lifetime specifier
fn longest(x: &str, y: &str) -> &str {
    if x.len() > y.len() { x } else { y }
}

fn main() {
    let result;
    let s1 = String::from("long string");
    {
        let s2 = String::from("hi");
        result = longest(s1.as_str(), s2.as_str());
        println!("Longest: '{}'", result);
    }
}`,
null, null)}
    <div class="exercise-hint">
        <button class="hint-toggle" onclick="toggleHint(this)">💡 顯示提示</button>
        <div class="hint-content">當函式接受多個引用並回傳引用時，編譯器需要知道回傳值的生命週期和哪個輸入相關。用 <code>&lt;'a&gt;</code> 宣告生命週期參數，然後標注在參數和回傳值上。想想：回傳值最多能活多久？</div>
    </div>
    <div class="exercise-answer">
        <button class="answer-toggle" onclick="toggleAnswer(this)">📖 顯示正解</button>
        <div class="answer-content"><pre><code>fn longest&lt;'a&gt;(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() { x } else { y }
}</code></pre></div>
    </div>
</div>
`
},
{
    id: 'collections',
    section: '進階概念',
    title: '常用集合',
    badge: '第 13 課',
    content: () => `
<h3>Vec, String, HashMap</h3>
<p>Rust 標準庫提供了幾個常用的集合型別，它們存儲在堆上，大小可以動態改變。</p>

${createPlayground('coll1',
`use std::collections::HashMap;

fn main() {
    // === Vec<T> — 動態陣列 ===
    let mut numbers: Vec<i32> = Vec::new();
    numbers.push(1);
    numbers.push(2);
    numbers.push(3);

    // vec! 巨集快速建立
    let mut fruits = vec!["apple", "banana", "cherry"];
    fruits.push("date");

    // 存取元素
    println!("First: {}", numbers[0]);          // 可能 panic
    println!("Safe: {:?}", numbers.get(10));     // 回傳 Option

    // 迭代
    for n in &numbers {
        print!("{} ", n);
    }
    println!();

    // 可變迭代
    for n in &mut numbers {
        *n *= 2;
    }
    println!("Doubled: {:?}", numbers);

    // === String ===
    let mut s = String::from("Hello");
    s.push(' ');
    s.push_str("World");
    s += "!";
    println!("{}", s);

    // 字串連接
    let s1 = String::from("Hello, ");
    let s2 = String::from("World!");
    let s3 = format!("{}{}", s1, s2);
    println!("{}", s3);

    // 字串是 UTF-8
    let chinese = String::from("你好世界");
    println!("Bytes: {}", chinese.len());    // byte 長度
    println!("Chars: {}", chinese.chars().count());  // 字元數

    // === HashMap<K, V> ===
    let mut scores: HashMap<String, i32> = HashMap::new();
    scores.insert(String::from("Alice"), 100);
    scores.insert(String::from("Bob"), 85);

    // 取得值
    if let Some(score) = scores.get("Alice") {
        println!("Alice: {}", score);
    }

    // entry API — 如果不存在才插入
    scores.entry(String::from("Charlie")).or_insert(90);
    scores.entry(String::from("Alice")).or_insert(0);  // Alice 已存在，不會覆蓋
    println!("Scores: {:?}", scores);

    // 迭代 HashMap
    for (name, score) in &scores {
        println!("{}: {}", name, score);
    }
}`,
`#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>

int main() {
    // std::vector
    std::vector<int> numbers = {1, 2, 3};
    numbers.push_back(4);

    // std::string
    std::string s = "Hello";
    s += " World!";

    // std::unordered_map
    std::unordered_map<std::string, int> scores;
    scores["Alice"] = 100;
    scores["Bob"] = 85;
    scores.insert_or_assign("Charlie", 90);

    for (auto& [name, score] : scores) {
        std::cout << name << ": " << score << std::endl;
    }
    return 0;
}`,
`# Python 內建集合
numbers = [1, 2, 3]      # list
numbers.append(4)

s = "Hello"               # str (不可變)
s += " World!"            # 建立新字串

scores = {}                # dict
scores["Alice"] = 100
scores["Bob"] = 85
scores.setdefault("Charlie", 90)  # 類似 entry().or_insert()

for name, score in scores.items():
    print(f"{name}: {score}")
`)}

<div class="quiz-section">
    <h4>📝 小測驗</h4>
    <p><code>vec![1, 2, 3]</code> 和 <code>[1, 2, 3]</code> 的差別是什麼？</p>
    <button class="quiz-option" onclick="checkQuiz(this, true)">A. <code>vec!</code> 建立堆上的動態陣列 (Vec)，<code>[1,2,3]</code> 建立棧上的固定陣列</button>
    <button class="quiz-option" onclick="checkQuiz(this, false)">B. 沒有差別，只是語法不同</button>
    <button class="quiz-option" onclick="checkQuiz(this, false)">C. <code>vec!</code> 是可變的，<code>[]</code> 是不可變的</button>
    <div class="quiz-feedback">正確！<code>Vec&lt;T&gt;</code> 是堆分配的動態陣列，可以改變大小。陣列 <code>[T; N]</code> 是棧上的固定大小。類似 C++ 的 <code>std::vector</code> vs 原生陣列。</div>
</div>

<div class="exercise-section">
    <h4>🏋️ 練習：單字計數器</h4>
    <p class="exercise-desc">用 HashMap 實作一個單字計數器。</p>
    ${createPlayground('coll-ex1',
`use std::collections::HashMap;

// TODO: 實作單字計數器
// 將文字中的每個單字（轉小寫）計數，回傳 HashMap
fn word_count(text: &str) -> HashMap<String, usize> {
    let mut counts = HashMap::new();
    // 在這裡寫你的實作
    // 1. 用 split_whitespace() 分割單字
    // 2. 將每個單字轉小寫
    // 3. 更新 HashMap 中的計數
    counts
}

fn main() {
    let text = "the quick brown fox jumps over the lazy dog the fox";
    let counts = word_count(text);

    let mut sorted: Vec<_> = counts.iter().collect();
    sorted.sort_by(|a, b| b.1.cmp(a.1));

    println!("Word frequencies:");
    for (word, count) in sorted {
        println!("  {}: {}", word, count);
    }
}`,
null, null)}
    <div class="exercise-hint">
        <button class="hint-toggle" onclick="toggleHint(this)">💡 顯示提示</button>
        <div class="hint-content">HashMap 的 <code>.entry(key).or_insert(default)</code> 方法很好用——它回傳值的可變引用。如果 key 不存在就插入預設值。拿到引用後可以用 <code>*count += 1</code> 來增加計數。</div>
    </div>
    <div class="exercise-answer">
        <button class="answer-toggle" onclick="toggleAnswer(this)">📖 顯示正解</button>
        <div class="answer-content"><pre><code>fn word_count(text: &str) -> HashMap&lt;String, usize&gt; {
    let mut counts = HashMap::new();
    for word in text.split_whitespace() {
        let word = word.to_lowercase();
        let count = counts.entry(word).or_insert(0);
        *count += 1;
    }
    counts
}</code></pre></div>
    </div>
</div>
`
},
{
    id: 'closures-iterators',
    section: '進階概念',
    title: '閉包與迭代器',
    badge: '第 14 課',
    content: () => `
<h3>閉包 (Closures)</h3>
<p>閉包是可以捕獲周圍環境變數的匿名函式。Rust 的閉包非常高效 — 編譯器會自動決定捕獲方式（借用 vs 移動）。</p>

${createPlayground('closure1',
`fn main() {
    // === 閉包基礎 ===
    let add = |a: i32, b: i32| -> i32 { a + b };
    println!("add(3, 4) = {}", add(3, 4));

    // 型別可以推斷
    let double = |x| x * 2;
    println!("double(5) = {}", double(5));

    // 捕獲環境變數
    let name = String::from("Rust");
    let greet = || println!("Hello, {}!", name);  // 借用 name
    greet();
    println!("name still valid: {}", name);  // name 仍可用

    // move 閉包 — 取得所有權
    let data = vec![1, 2, 3];
    let owns_data = move || println!("data: {:?}", data);
    owns_data();
    // println!("{:?}", data);  // ❌ data 已被移動

    // === 迭代器 ===
    let numbers = vec![1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // 函式式鏈式操作
    let result: Vec<i32> = numbers.iter()
        .filter(|&&x| x % 2 == 0)     // 偶數
        .map(|&x| x * x)               // 平方
        .collect();
    println!("Even squares: {:?}", result);

    // fold (類似 reduce)
    let sum: i32 = numbers.iter().sum();
    let product: i32 = numbers.iter().fold(1, |acc, &x| acc * x);
    println!("Sum: {}, Product: {}", sum, product);

    // 其他實用方法
    let max = numbers.iter().max().unwrap();
    let min = numbers.iter().min().unwrap();
    println!("Max: {}, Min: {}", max, min);

    let any_even = numbers.iter().any(|&x| x % 2 == 0);
    let all_positive = numbers.iter().all(|&x| x > 0);
    println!("Any even: {}, All positive: {}", any_even, all_positive);

    // enumerate
    for (i, val) in numbers.iter().enumerate().take(3) {
        println!("[{}] = {}", i, val);
    }

    // zip
    let names = vec!["Alice", "Bob", "Charlie"];
    let scores = vec![95, 87, 92];
    let records: Vec<_> = names.iter()
        .zip(scores.iter())
        .collect();
    println!("Records: {:?}", records);
}`,
`#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>

int main() {
    // C++ lambda
    auto add = [](int a, int b) { return a + b; };

    std::string name = "C++";
    auto greet = [&name]() {  // 明確捕獲
        std::cout << "Hello, " << name << std::endl;
    };

    // C++20 ranges (類似 Rust 迭代器)
    std::vector<int> nums = {1, 2, 3, 4, 5};
    int sum = std::accumulate(nums.begin(), nums.end(), 0);

    return 0;
}`,
`# Python lambda 和 comprehension
add = lambda a, b: a + b

# List comprehension（Python 最常用的方式）
numbers = list(range(1, 11))
even_squares = [x**2 for x in numbers if x % 2 == 0]
print(even_squares)

# 函式式風格
total = sum(numbers)
product = 1
for x in numbers:
    product *= x

# map/filter（較少用）
evens = list(filter(lambda x: x % 2 == 0, numbers))
doubled = list(map(lambda x: x * 2, numbers))

# enumerate 和 zip
names = ["Alice", "Bob", "Charlie"]
scores = [95, 87, 92]
records = list(zip(names, scores))
`)}

<div class="info-box cpp">
    <div class="box-title">🔷 C++ 對比</div>
    <p>C++ lambda 必須明確指定捕獲方式 (<code>[&]</code>, <code>[=]</code>, <code>[x, &y]</code>)。Rust 閉包自動推斷，但你可以用 <code>move</code> 強制轉移所有權。Rust 的迭代器是零開銷抽象，編譯後的效能和手寫迴圈相同。</p>
</div>

<div class="quiz-section">
    <h4>📝 小測驗</h4>
    <p>以下哪個是正確的迭代器鏈，取得 vec 中所有正數的平方和？</p>
    <button class="quiz-option" onclick="checkQuiz(this, true)">A. <code>v.iter().filter(|&&x| x > 0).map(|&x| x * x).sum()</code></button>
    <button class="quiz-option" onclick="checkQuiz(this, false)">B. <code>v.filter(x > 0).map(x * x).sum()</code></button>
    <button class="quiz-option" onclick="checkQuiz(this, false)">C. <code>v.iter().map(x * x).filter(x > 0).sum()</code></button>
    <div class="quiz-feedback">正確！要先 <code>.iter()</code> 建立迭代器，用閉包 <code>|&&x|</code>（雙重引用因為 iter 回傳引用，filter 也傳引用）過濾正數，再 map 計算平方，最後 sum。</div>
</div>

<div class="exercise-section">
    <h4>🏋️ 練習：迭代器鏈</h4>
    <p class="exercise-desc">使用迭代器方法處理學生成績資料。</p>
    ${createPlayground('iter-ex1',
`fn main() {
    let students = vec![
        ("Alice", vec![90, 85, 92]),
        ("Bob", vec![78, 82, 88]),
        ("Charlie", vec![95, 98, 100]),
        ("Diana", vec![60, 55, 70]),
    ];

    // TODO 1: 用 .iter().map().collect() 計算每位學生的平均分數
    // 結果型別為 Vec<(&str, f64)>
    let averages: Vec<(&str, f64)> = vec![]; // 替換這行

    println!("Averages:");
    for (name, avg) in &averages {
        println!("  {}: {:.1}", name, avg);
    }

    // TODO 2: 用 .iter().filter().map().collect() 找出平均 >= 85 的優等生
    let honors: Vec<&str> = vec![]; // 替換這行
    println!("Honors: {:?}", honors);

    // TODO 3: 用 .iter().max_by() 找出全班最高平均的學生
    // let top = averages.iter()...
    // println!("Top student: {} ({:.1})", top.0, top.1);
}`,
null, null)}
    <div class="exercise-hint">
        <button class="hint-toggle" onclick="toggleHint(this)">💡 顯示提示</button>
        <div class="hint-content">TODO 1: 在 <code>map</code> 中用 <code>scores.iter().sum::&lt;i32&gt;() as f64 / scores.len() as f64</code> 計算平均。<br>TODO 2: <code>filter</code> 接受閉包檢查條件，<code>map</code> 可以只取出名字。<br>TODO 3: <code>max_by</code> 需要一個比較函式，浮點數比較用 <code>partial_cmp</code>。</div>
    </div>
    <div class="exercise-answer">
        <button class="answer-toggle" onclick="toggleAnswer(this)">📖 顯示正解</button>
        <div class="answer-content"><pre><code>// TODO 1:
let averages: Vec<(&str, f64)> = students.iter()
    .map(|(name, scores)| {
        let avg = scores.iter().sum::&lt;i32&gt;() as f64
                  / scores.len() as f64;
        (*name, avg)
    })
    .collect();

// TODO 2:
let honors: Vec<&str> = averages.iter()
    .filter(|(_, avg)| *avg >= 85.0)
    .map(|(name, _)| *name)
    .collect();

// TODO 3:
let top = averages.iter()
    .max_by(|a, b| a.1.partial_cmp(&b.1).unwrap())
    .unwrap();
println!("Top student: {} ({:.1})", top.0, top.1);</code></pre></div>
    </div>
</div>
`
},
{
    id: 'concurrency',
    section: '進階概念',
    title: '並行處理',
    badge: '第 15 課',
    content: () => `
<h3>無畏並行 (Fearless Concurrency)</h3>
<p>Rust 的所有權系統在編譯時防止資料競爭 (data race)。這讓你可以放心地寫並行程式碼，不用擔心 C++ 中常見的競爭條件 bug，也不受 Python GIL 的限制。</p>

${createPlayground('conc1',
`use std::thread;
use std::sync::{Arc, Mutex};

fn main() {
    // === 基本執行緒 ===
    let handle = thread::spawn(|| {
        println!("Hello from a thread!");
        42  // 執行緒可以回傳值
    });
    let result = handle.join().unwrap();
    println!("Thread returned: {}", result);

    // === move 閉包傳資料給執行緒 ===
    let data = vec![1, 2, 3];
    let handle = thread::spawn(move || {
        println!("Thread got: {:?}", data);
        data.iter().sum::<i32>()
    });
    println!("Sum from thread: {}", handle.join().unwrap());

    // === Arc + Mutex 共享可變狀態 ===
    let counter = Arc::new(Mutex::new(0));
    let mut handles = vec![];

    for i in 0..5 {
        let counter = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            let mut num = counter.lock().unwrap();
            *num += 1;
            println!("Thread {} incremented counter to {}", i, *num);
        });
        handles.push(handle);
    }

    for handle in handles {
        handle.join().unwrap();
    }

    println!("Final counter: {}", *counter.lock().unwrap());

    // === 多執行緒計算示範 ===
    let data = Arc::new(vec![1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    let mut handles = vec![];

    // 分成兩半並行計算
    for chunk_start in [0usize, 5usize] {
        let data = Arc::clone(&data);
        handles.push(thread::spawn(move || {
            let chunk = &data[chunk_start..chunk_start + 5];
            let sum: i32 = chunk.iter().sum();
            println!("Chunk {:?} sum = {}", chunk, sum);
            sum
        }));
    }

    let total: i32 = handles.into_iter()
        .map(|h| h.join().unwrap())
        .sum();
    println!("Total sum: {}", total);
}`,
`#include <iostream>
#include <thread>
#include <mutex>
#include <vector>

int main() {
    // C++ threads
    std::mutex mtx;
    int counter = 0;
    std::vector<std::thread> threads;

    for (int i = 0; i < 5; i++) {
        threads.emplace_back([&counter, &mtx, i]() {
            std::lock_guard<std::mutex> lock(mtx);
            counter++;
            // 注意：C++ 不會阻止你忘記加鎖！
        });
    }

    for (auto& t : threads) t.join();
    std::cout << "Counter: " << counter << std::endl;

    // C++ 允許 data race — 未定義行為
    // Rust 在編譯時阻止！
    return 0;
}`,
`# Python 有 GIL，真正的多執行緒 CPU 密集運算受限
import threading

counter = 0
lock = threading.Lock()

def increment():
    global counter
    with lock:
        counter += 1

threads = []
for _ in range(5):
    t = threading.Thread(target=increment)
    threads.append(t)
    t.start()

for t in threads:
    t.join()

print(f"Counter: {counter}")

# Python 要用 multiprocessing 做真正的並行
# from multiprocessing import Pool
# with Pool(4) as p:
#     results = p.map(heavy_compute, data)
`)}

<div class="info-box cpp">
    <div class="box-title">🔷 C++ 對比</div>
    <p>C++ 的 <code>std::thread</code> 和 <code>std::mutex</code> 功能類似，但沒有編譯時保護。你可以忘記加鎖、在多個執行緒中共享可變資料而不報錯 — 直到執行時出現難以重現的 data race bug。Rust 的型別系統在編譯時就阻止這類錯誤。</p>
</div>

<div class="info-box python">
    <div class="box-title">🐍 Python 對比</div>
    <p>Python 的 GIL 讓真正的多執行緒 CPU 密集運算不可能。Rust 沒有 GIL，可以充分利用多核 CPU，同時在編譯時保證安全。這是 Rust 效能大幅超越 Python 的原因之一。</p>
</div>

<div class="info-box tip">
    <div class="box-title">💡 Arc vs Rc</div>
    <p><code>Rc&lt;T&gt;</code> 是單執行緒引用計數（類似 C++ 的 <code>shared_ptr</code>）。<code>Arc&lt;T&gt;</code> 是原子引用計數，安全用於多執行緒。編譯器會阻止你在多執行緒中使用 <code>Rc</code>。</p>
</div>

<div class="quiz-section">
    <h4>📝 小測驗</h4>
    <p>為什麼 Rust 稱之為「無畏並行」？</p>
    <button class="quiz-option" onclick="checkQuiz(this, false)">A. Rust 執行緒不會崩潰</button>
    <button class="quiz-option" onclick="checkQuiz(this, true)">B. 編譯器在編譯時就防止資料競爭，讓你放心寫並行程式碼</button>
    <button class="quiz-option" onclick="checkQuiz(this, false)">C. Rust 有更快的執行緒實作</button>
    <div class="quiz-feedback">正確！「無畏並行」指的是 Rust 的所有權和型別系統在編譯時阻止資料競爭。如果你的程式碼能編譯，就不會有 data race。這讓你可以放心地重構和優化並行程式碼。</div>
</div>

<div class="exercise-section">
    <h4>🏋️ 練習：多執行緒統計</h4>
    <p class="exercise-desc">嘗試修改下面的程式，用多個執行緒並行計算向量的統計資訊。</p>
    ${createPlayground('conc-ex1',
`use std::thread;
use std::sync::Arc;

fn main() {
    let data = Arc::new(vec![
        3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9
    ]);

    // TODO: 建立 3 個執行緒並行計算不同的統計值
    // 每個執行緒需要用 Arc::clone(&data) 取得資料的共享引用

    // 執行緒 1: 計算總和（回傳 i32）
    // let d1 = Arc::clone(&data);
    // let sum_handle = thread::spawn(move || -> i32 { ... });

    // 執行緒 2: 找最大值（回傳 i32）
    // let d2 = ...
    // let max_handle = ...

    // 執行緒 3: 計算偶數個數（回傳 usize）
    // let d3 = ...
    // let even_handle = ...

    // TODO: 用 .join().unwrap() 取得每個執行緒的結果
    // let sum = sum_handle.join().unwrap();
    // ...

    println!("Data: {:?}", *data);
    // println!("Sum: {}", sum);
    // println!("Max: {}", max);
    // println!("Even count: {}", even_count);
    // println!("Average: {:.2}", sum as f64 / data.len() as f64);
}`,
null, null)}
    <div class="exercise-hint">
        <button class="hint-toggle" onclick="toggleHint(this)">💡 顯示提示</button>
        <div class="hint-content"><code>Arc::clone(&data)</code> 建立共享引用，搭配 <code>move</code> 閉包讓執行緒取得所有權。<code>thread::spawn</code> 回傳 <code>JoinHandle</code>，用 <code>.join().unwrap()</code> 等待結果。迭代器的 <code>.sum()</code>、<code>.max()</code>、<code>.filter().count()</code> 可以分別計算三種統計值。</div>
    </div>
    <div class="exercise-answer">
        <button class="answer-toggle" onclick="toggleAnswer(this)">📖 顯示正解</button>
        <div class="answer-content"><pre><code>let d1 = Arc::clone(&data);
let sum_handle = thread::spawn(move || -> i32 {
    d1.iter().sum()
});

let d2 = Arc::clone(&data);
let max_handle = thread::spawn(move || -> i32 {
    *d2.iter().max().unwrap()
});

let d3 = Arc::clone(&data);
let even_handle = thread::spawn(move || -> usize {
    d3.iter().filter(|&&x| x % 2 == 0).count()
});

let sum = sum_handle.join().unwrap();
let max = max_handle.join().unwrap();
let even_count = even_handle.join().unwrap();</code></pre></div>
    </div>
</div>
`
},
// ============================================
// Section: 實戰應用
// ============================================
{
    id: 'ffi-interop',
    section: '實戰應用',
    title: '從 C++/Python 呼叫 Rust',
    badge: '第 16 課',
    content: () => `
<h3>為什麼要從其他語言呼叫 Rust？</h3>
<p>Rust 的高效能和記憶體安全使它成為撰寫<strong>效能關鍵元件</strong>的理想選擇。你可以把計算密集的核心用 Rust 寫成函式庫，然後從 C++、Python 或其他語言呼叫，兼顧開發效率和執行效能。</p>

<div class="info-box tip">
    <div class="box-title">💡 常見應用場景</div>
    <p>Python 科學計算的底層加速（類似 NumPy 用 C 寫核心）、C++ 專案中逐步替換不安全的模組、跨平台共享函式庫、WebAssembly 編譯等。</p>
</div>

<h3>第一步：建立 Rust 共享函式庫</h3>
<p>要讓其他語言呼叫 Rust 程式碼，需要透過 <strong>FFI (Foreign Function Interface)</strong>，將 Rust 函式導出為 C ABI 相容的介面。</p>

<h4>Cargo.toml 設定</h4>
${createPlayground('ffi-cargo',
`# Cargo.toml
[package]
name = "mathlib"
version = "0.1.0"
edition = "2021"

[lib]
name = "mathlib"
crate-type = ["cdylib"]  # 產生 .so (Linux) / .dll (Windows) / .dylib (macOS)`,
null, null, { editable: false })}

<h4>Rust 函式庫程式碼 (src/lib.rs)</h4>
${createPlayground('ffi-lib',
`use std::ffi::{CStr, CString};
use std::os::raw::c_char;

// === 基本數值運算 ===

/// 計算費波那契數
#[no_mangle]
pub extern "C" fn fibonacci(n: u32) -> u64 {
    if n <= 1 { return n as u64; }
    let mut a: u64 = 0;
    let mut b: u64 = 1;
    for _ in 2..=n {
        let temp = a + b;
        a = b;
        b = temp;
    }
    b
}

/// 計算陣列的統計資訊
#[repr(C)]
pub struct Stats {
    pub sum: f64,
    pub mean: f64,
    pub min: f64,
    pub max: f64,
    pub count: usize,
}

#[no_mangle]
pub extern "C" fn compute_stats(data: *const f64, len: usize) -> Stats {
    assert!(!data.is_null());
    let slice = unsafe { std::slice::from_raw_parts(data, len) };

    let sum: f64 = slice.iter().sum();
    let min = slice.iter().cloned().fold(f64::INFINITY, f64::min);
    let max = slice.iter().cloned().fold(f64::NEG_INFINITY, f64::max);

    Stats {
        sum,
        mean: sum / len as f64,
        min,
        max,
        count: len,
    }
}

// === 字串處理 ===

/// 接收 C 字串，回傳處理後的 C 字串
/// 呼叫端必須用 free_string() 釋放回傳值
#[no_mangle]
pub extern "C" fn to_uppercase(input: *const c_char) -> *mut c_char {
    let c_str = unsafe { CStr::from_ptr(input) };
    let rust_str = c_str.to_str().unwrap_or("");
    let upper = rust_str.to_uppercase();
    CString::new(upper).unwrap().into_raw()
}

/// 釋放 Rust 分配的字串
#[no_mangle]
pub extern "C" fn free_string(s: *mut c_char) {
    if !s.is_null() {
        unsafe { drop(CString::from_raw(s)); }
    }
}

fn main() {
    // 測試函式
    println!("fib(10) = {}", fibonacci(10));

    let data = vec![3.0, 1.0, 4.0, 1.0, 5.0, 9.0];
    let stats = compute_stats(data.as_ptr(), data.len());
    println!("sum={}, mean={:.2}, min={}, max={}",
             stats.sum, stats.mean, stats.min, stats.max);
}`,
null, null)}

<div class="info-box warning">
    <div class="box-title">⚠️ FFI 關鍵要素</div>
    <p><code>#[no_mangle]</code> — 防止 Rust 改變函式名稱，讓其他語言找得到。<br>
    <code>extern "C"</code> — 使用 C 呼叫慣例（ABI），確保跨語言相容。<br>
    <code>#[repr(C)]</code> — 讓 struct 的記憶體佈局與 C 相同。<br>
    <code>cdylib</code> — 編譯為 C 動態函式庫格式。</p>
</div>

<h3>從 C++ 呼叫 Rust</h3>
<p>C++ 透過 C ABI 直接呼叫 Rust 函式庫，效能開銷幾乎為零。步驟：<strong>編譯 Rust → 寫 C++ header → 連結</strong>。</p>

<h4>步驟 1：編譯 Rust 函式庫</h4>
${createPlayground('ffi-cpp-build',
`// 終端機指令：
// $ cargo build --release
// 產出：target/release/libmathlib.so (Linux)
//       target/release/libmathlib.dylib (macOS)
//       target/release/mathlib.dll (Windows)

fn main() {
    println!("編譯指令：cargo build --release");
    println!("產出位置：target/release/libmathlib.so");
}`,
`// ---- 步驟 2：C++ 標頭檔 (mathlib.h) ----
#pragma once
#include <cstdint>
#include <cstddef>

extern "C" {
    // 數值運算
    uint64_t fibonacci(uint32_t n);

    // 統計結構
    struct Stats {
        double sum;
        double mean;
        double min;
        double max;
        size_t count;
    };

    Stats compute_stats(const double* data, size_t len);

    // 字串處理
    char* to_uppercase(const char* input);
    void free_string(char* s);
}
`,
null)}

<h4>步驟 3：C++ 主程式與編譯</h4>
${createPlayground('ffi-cpp-main',
`// 在 Rust 端確認 Cargo.toml 設定正確：
// [lib]
// crate-type = ["cdylib"]
//
// 編譯：cargo build --release

fn main() {
    println!("Rust 函式庫已準備好，等待 C++ 呼叫！");
}`,
`// main.cpp — 呼叫 Rust 函式庫
#include <iostream>
#include <vector>
#include <string>
#include "mathlib.h"

int main() {
    // --- 呼叫 fibonacci ---
    std::cout << "=== Fibonacci ===" << std::endl;
    for (uint32_t i = 0; i <= 10; i++) {
        std::cout << "fib(" << i << ") = " << fibonacci(i) << std::endl;
    }

    // --- 呼叫 compute_stats ---
    std::cout << "\\n=== Statistics ===" << std::endl;
    std::vector<double> data = {3.0, 1.0, 4.0, 1.0, 5.0, 9.0, 2.0, 6.0};
    Stats stats = compute_stats(data.data(), data.size());

    std::cout << "Count: " << stats.count << std::endl;
    std::cout << "Sum:   " << stats.sum << std::endl;
    std::cout << "Mean:  " << stats.mean << std::endl;
    std::cout << "Min:   " << stats.min << std::endl;
    std::cout << "Max:   " << stats.max << std::endl;

    // --- 呼叫字串處理 ---
    std::cout << "\\n=== String ===" << std::endl;
    char* result = to_uppercase("hello from c++");
    std::cout << "Uppercase: " << result << std::endl;
    free_string(result);  // 重要！用 Rust 的 free 釋放

    return 0;
}

// 編譯指令（Linux）：
// g++ -o main main.cpp -L../target/release -lmathlib -Wl,-rpath,../target/release
//
// 編譯指令（macOS）：
// g++ -o main main.cpp -L../target/release -lmathlib -Wl,-rpath,@loader_path/../target/release
`,
null)}

<div class="info-box cpp">
    <div class="box-title">🔷 C++ 整合重點</div>
    <p><strong>型別對應：</strong><code>u32</code>↔<code>uint32_t</code>、<code>f64</code>↔<code>double</code>、<code>usize</code>↔<code>size_t</code>、<code>*const c_char</code>↔<code>const char*</code>。<br>
    <strong>記憶體管理：</strong>Rust 分配的記憶體必須用 Rust 提供的函式釋放（如 <code>free_string</code>），不能直接用 C++ 的 <code>delete</code>。<br>
    <strong>進階工具：</strong>可以用 <a href="https://github.com/aspect-build/aspect-cli" style="color:var(--accent-cyan)">cbindgen</a> 自動從 Rust 原始碼產生 C/C++ 標頭檔，或用 <a href="https://cxx.rs" style="color:var(--accent-cyan)">cxx</a> crate 獲得更安全的 C++/Rust 互操作。</p>
</div>

<h3>從 Python 呼叫 Rust</h3>
<p>Python 呼叫 Rust 有兩種主要方式：<strong>ctypes</strong>（直接呼叫動態函式庫）和 <strong>PyO3</strong>（建立原生 Python 模組）。</p>

<h4>方式一：ctypes — 直接呼叫 .so/.dll</h4>
<p>最簡單的方式，不需要額外的 Rust crate，直接載入編譯好的函式庫。</p>

${createPlayground('ffi-py-ctypes',
`// 同樣使用前面的 Rust 函式庫
// cargo build --release 編譯後即可使用

fn main() {
    println!("使用 ctypes 不需修改 Rust 程式碼！");
    println!("直接用 cargo build --release 編譯即可。");
}`,
null,
`import ctypes
import os

# --- 載入 Rust 函式庫 ---
lib = ctypes.CDLL("./target/release/libmathlib.so")  # Linux
# lib = ctypes.CDLL("./target/release/libmathlib.dylib")  # macOS
# lib = ctypes.CDLL("./target/release/mathlib.dll")        # Windows

# --- fibonacci ---
lib.fibonacci.argtypes = [ctypes.c_uint32]
lib.fibonacci.restype = ctypes.c_uint64

print("=== Fibonacci ===")
for i in range(11):
    print(f"fib({i}) = {lib.fibonacci(i)}")

# --- compute_stats ---
class Stats(ctypes.Structure):
    _fields_ = [
        ("sum", ctypes.c_double),
        ("mean", ctypes.c_double),
        ("min", ctypes.c_double),
        ("max", ctypes.c_double),
        ("count", ctypes.c_size_t),
    ]

lib.compute_stats.argtypes = [ctypes.POINTER(ctypes.c_double), ctypes.c_size_t]
lib.compute_stats.restype = Stats

data = [3.0, 1.0, 4.0, 1.0, 5.0, 9.0, 2.0, 6.0]
arr = (ctypes.c_double * len(data))(*data)
stats = lib.compute_stats(arr, len(data))

print(f"\\n=== Statistics ===")
print(f"Count: {stats.count}")
print(f"Sum:   {stats.sum}")
print(f"Mean:  {stats.mean:.2f}")
print(f"Min:   {stats.min}")
print(f"Max:   {stats.max}")

# --- 字串處理 ---
lib.to_uppercase.argtypes = [ctypes.c_char_p]
lib.to_uppercase.restype = ctypes.c_char_p
lib.free_string.argtypes = [ctypes.c_char_p]

result = lib.to_uppercase(b"hello from python")
print(f"\\nUppercase: {result.decode('utf-8')}")
# 注意：ctypes 的 c_char_p restype 會自動複製，
# 但嚴謹做法應手動管理記憶體
`)}

<h4>方式二：PyO3 — 建立原生 Python 模組（推薦）</h4>
<p>PyO3 讓你用 Rust 寫出<strong>原生 Python 模組</strong>，提供更 Pythonic 的 API，支援 class、exception、type hint 等。搭配 <strong>maturin</strong> 工具，開發體驗非常流暢。</p>

${createPlayground('ffi-pyo3-cargo',
`// Cargo.toml 設定
// [package]
// name = "mathlib"
// version = "0.1.0"
// edition = "2021"
//
// [lib]
// name = "mathlib"
// crate-type = ["cdylib"]
//
// [dependencies]
// pyo3 = { version = "0.22", features = ["extension-module"] }

// ---- src/lib.rs ----
use pyo3::prelude::*;
use pyo3::exceptions::PyValueError;

/// 計算費波那契數
#[pyfunction]
fn fibonacci(n: u32) -> u64 {
    if n <= 1 { return n as u64; }
    let (mut a, mut b) = (0u64, 1u64);
    for _ in 2..=n {
        let temp = a + b;
        a = b;
        b = temp;
    }
    b
}

/// 統計資訊類別
#[pyclass]
#[derive(Clone)]
struct Stats {
    #[pyo3(get)]
    sum: f64,
    #[pyo3(get)]
    mean: f64,
    #[pyo3(get)]
    min: f64,
    #[pyo3(get)]
    max: f64,
    #[pyo3(get)]
    count: usize,
}

#[pymethods]
impl Stats {
    fn __repr__(&self) -> String {
        format!("Stats(sum={}, mean={:.2}, min={}, max={}, count={})",
                self.sum, self.mean, self.min, self.max, self.count)
    }
}

/// 計算統計資訊
#[pyfunction]
fn compute_stats(data: Vec<f64>) -> PyResult<Stats> {
    if data.is_empty() {
        return Err(PyValueError::new_err("data cannot be empty"));
    }
    let sum: f64 = data.iter().sum();
    let min = data.iter().cloned().fold(f64::INFINITY, f64::min);
    let max = data.iter().cloned().fold(f64::NEG_INFINITY, f64::max);
    Ok(Stats {
        sum, mean: sum / data.len() as f64, min, max, count: data.len(),
    })
}

/// 批次字串轉大寫
#[pyfunction]
fn batch_uppercase(strings: Vec<String>) -> Vec<String> {
    strings.into_iter().map(|s| s.to_uppercase()).collect()
}

/// Python 模組定義
#[pymodule]
fn mathlib(m: &Bound<'_, PyModule>) -> PyResult<()> {
    m.add_function(wrap_pyfunction!(fibonacci, m)?)?;
    m.add_function(wrap_pyfunction!(compute_stats, m)?)?;
    m.add_function(wrap_pyfunction!(batch_uppercase, m)?)?;
    m.add_class::<Stats>()?;
    Ok(())
}

fn main() {
    // PyO3 模組不需要 main，這裡僅做語法展示
    println!("PyO3 模組透過 maturin 編譯：");
    println!("  pip install maturin");
    println!("  maturin develop --release");
}`,
null,
`# --- 安裝與使用 PyO3 模組 ---
# 終端機：
#   pip install maturin
#   cd mathlib_project/
#   maturin develop --release    # 編譯並安裝到當前 Python 環境

import mathlib

# 直接呼叫，就像一般的 Python 函式！
print("=== Fibonacci ===")
for i in range(11):
    print(f"fib({i}) = {mathlib.fibonacci(i)}")

# 回傳 Python 物件
print("\\n=== Statistics ===")
stats = mathlib.compute_stats([3.0, 1.0, 4.0, 1.0, 5.0, 9.0])
print(stats)          # Stats(sum=23, mean=3.83, ...)
print(stats.mean)     # 直接存取屬性
print(stats.max)

# 支援 Python list 直接傳入
print("\\n=== Batch Uppercase ===")
results = mathlib.batch_uppercase(["hello", "world", "rust"])
print(results)  # ['HELLO', 'WORLD', 'RUST']

# 錯誤處理也會正確轉為 Python exception
try:
    mathlib.compute_stats([])
except ValueError as e:
    print(f"\\nCaught error: {e}")

# --- 效能對比 ---
import time

def py_fibonacci(n):
    if n <= 1: return n
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b

n = 1000000
start = time.time()
for _ in range(100):
    mathlib.fibonacci(40)
rust_time = time.time() - start

start = time.time()
for _ in range(100):
    py_fibonacci(40)
py_time = time.time() - start

print(f"\\n=== Performance ===")
print(f"Rust: {rust_time:.4f}s")
print(f"Python: {py_time:.4f}s")
print(f"Speedup: {py_time/rust_time:.1f}x")
`)}

<div class="info-box python">
    <div class="box-title">🐍 ctypes vs PyO3 比較</div>
    <p><strong>ctypes：</strong>零依賴、簡單快速，但需要手動定義型別、不支援 Python class、錯誤處理不方便。適合簡單的函式呼叫。<br>
    <strong>PyO3：</strong>需要額外依賴，但提供完整的 Python 整合 — 自動型別轉換、Python class 支援、exception 處理、type hints。適合正式專案和發布 pip 套件。</p>
</div>

<h3>型別對應速查表</h3>
<table>
    <thead>
        <tr><th>Rust 型別</th><th>C / C++ 型別</th><th>Python ctypes</th><th>PyO3 自動轉換</th></tr>
    </thead>
    <tbody>
        <tr><td><code>i32</code></td><td><code>int32_t</code></td><td><code>c_int32</code></td><td><code>i32</code> ↔ <code>int</code></td></tr>
        <tr><td><code>u32</code></td><td><code>uint32_t</code></td><td><code>c_uint32</code></td><td><code>u32</code> ↔ <code>int</code></td></tr>
        <tr><td><code>f64</code></td><td><code>double</code></td><td><code>c_double</code></td><td><code>f64</code> ↔ <code>float</code></td></tr>
        <tr><td><code>bool</code></td><td><code>bool</code></td><td><code>c_bool</code></td><td><code>bool</code> ↔ <code>bool</code></td></tr>
        <tr><td><code>usize</code></td><td><code>size_t</code></td><td><code>c_size_t</code></td><td><code>usize</code> ↔ <code>int</code></td></tr>
        <tr><td><code>*const c_char</code></td><td><code>const char*</code></td><td><code>c_char_p</code></td><td><code>String</code> ↔ <code>str</code></td></tr>
        <tr><td><code>Vec&lt;T&gt;</code></td><td><code>T* + len</code></td><td><code>POINTER(T)</code></td><td><code>Vec&lt;T&gt;</code> ↔ <code>list</code></td></tr>
        <tr><td><code>#[repr(C)] struct</code></td><td><code>struct</code></td><td><code>Structure</code></td><td><code>#[pyclass]</code> ↔ <code>class</code></td></tr>
    </tbody>
</table>

<div class="quiz-section">
    <h4>📝 小測驗</h4>
    <p>為什麼 Rust FFI 函式需要加上 <code>#[no_mangle]</code> 和 <code>extern "C"</code>？</p>
    <button class="quiz-option" onclick="checkQuiz(this, false)">A. 讓 Rust 編譯器做額外的安全檢查</button>
    <button class="quiz-option" onclick="checkQuiz(this, true)">B. <code>#[no_mangle]</code> 保留原始函式名稱，<code>extern "C"</code> 使用 C 呼叫慣例，讓其他語言能正確找到並呼叫函式</button>
    <button class="quiz-option" onclick="checkQuiz(this, false)">C. 這只是 Rust 的慣例，不加也可以正常運作</button>
    <button class="quiz-option" onclick="checkQuiz(this, false)">D. 為了讓函式在多執行緒中安全使用</button>
    <div class="quiz-feedback">正確！Rust 編譯器預設會 mangle（改變）函式名稱以支援泛型等功能。<code>#[no_mangle]</code> 保留原始名稱讓外部能找到。<code>extern "C"</code> 確保使用 C ABI，這是跨語言呼叫的通用標準。</div>
</div>

<div class="exercise-section">
    <h4>🏋️ 練習：設計 FFI 介面</h4>
    <p class="exercise-desc">完成下面的 Rust FFI 函式：實作一個可以被 C++/Python 呼叫的<strong>向量運算函式庫</strong>。</p>
    ${createPlayground('ffi-ex1',
`use std::os::raw::c_char;
use std::ffi::{CStr, CString};

// TODO 1: 實作 dot_product — 計算兩個向量的內積
// 參數：兩個 f64 指標和長度
// 回傳：f64
#[no_mangle]
pub extern "C" fn dot_product(
    a: *const f64, b: *const f64, len: usize
) -> f64 {
    todo!("實作 dot_product")
}

// TODO 2: 實作 scale_vector — 將向量中每個元素乘以 scalar
// 參數：可變 f64 指標、長度、scalar
// 注意：直接修改原始陣列（in-place）
#[no_mangle]
pub extern "C" fn scale_vector(
    data: *mut f64, len: usize, scalar: f64
) {
    todo!("實作 scale_vector")
}

// 測試用的 main
fn main() {
    let a = vec![1.0, 2.0, 3.0];
    let b = vec![4.0, 5.0, 6.0];
    println!("dot product: {}", dot_product(a.as_ptr(), b.as_ptr(), a.len()));
    // 預期: 1*4 + 2*5 + 3*6 = 32.0

    let mut v = vec![1.0, 2.0, 3.0];
    scale_vector(v.as_mut_ptr(), v.len(), 2.5);
    println!("scaled: {:?}", v);
    // 預期: [2.5, 5.0, 7.5]
}`,
`// C++ 呼叫端範例
#include <iostream>
#include <vector>

extern "C" {
    double dot_product(const double* a, const double* b, size_t len);
    void scale_vector(double* data, size_t len, double scalar);
}

int main() {
    std::vector<double> a = {1.0, 2.0, 3.0};
    std::vector<double> b = {4.0, 5.0, 6.0};

    double dp = dot_product(a.data(), b.data(), a.size());
    std::cout << "Dot product: " << dp << std::endl;

    scale_vector(a.data(), a.size(), 2.5);
    std::cout << "Scaled: ";
    for (auto x : a) std::cout << x << " ";
    std::cout << std::endl;
}
`,
`import ctypes

lib = ctypes.CDLL("./target/release/libmathlib.so")

# dot_product
lib.dot_product.argtypes = [
    ctypes.POINTER(ctypes.c_double),
    ctypes.POINTER(ctypes.c_double),
    ctypes.c_size_t
]
lib.dot_product.restype = ctypes.c_double

a = (ctypes.c_double * 3)(1.0, 2.0, 3.0)
b = (ctypes.c_double * 3)(4.0, 5.0, 6.0)
print(f"Dot product: {lib.dot_product(a, b, 3)}")

# scale_vector
lib.scale_vector.argtypes = [
    ctypes.POINTER(ctypes.c_double),
    ctypes.c_size_t,
    ctypes.c_double
]

data = (ctypes.c_double * 3)(1.0, 2.0, 3.0)
lib.scale_vector(data, 3, 2.5)
print(f"Scaled: {list(data)}")
`)}
    <div class="exercise-hint">
        <button class="hint-toggle" onclick="toggleHint(this)">💡 顯示提示</button>
        <div class="hint-content">兩個函式都需要先用 <code>unsafe { std::slice::from_raw_parts(ptr, len) }</code> 將原始指標轉為 Rust 切片。<code>dot_product</code> 可以用 <code>.iter().zip().map().sum()</code> 的迭代器鏈。<code>scale_vector</code> 需要用 <code>from_raw_parts_mut</code> 取得可變切片。</div>
    </div>
    <div class="exercise-answer">
        <button class="answer-toggle" onclick="toggleAnswer(this)">📖 顯示正解</button>
        <div class="answer-content"><pre><code>#[no_mangle]
pub extern "C" fn dot_product(
    a: *const f64, b: *const f64, len: usize
) -> f64 {
    let a = unsafe { std::slice::from_raw_parts(a, len) };
    let b = unsafe { std::slice::from_raw_parts(b, len) };
    a.iter().zip(b.iter()).map(|(x, y)| x * y).sum()
}

#[no_mangle]
pub extern "C" fn scale_vector(
    data: *mut f64, len: usize, scalar: f64
) {
    let slice = unsafe { std::slice::from_raw_parts_mut(data, len) };
    for x in slice.iter_mut() {
        *x *= scalar;
    }
}</code></pre></div>
    </div>
</div>
`
},
];
