/**
 * Lessons integrity tests
 * Ensures lessons.js is valid and all exercises have proper structure
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { join } from 'path';

// ---- Load and parse lessons.js ----
let LESSONS;
let lessonsSource;

beforeAll(() => {
    lessonsSource = readFileSync(join(__dirname, 'lessons.js'), 'utf-8');

    // Execute lessons.js in a sandbox with mocked browser globals
    const createPlayground = (id, rust, cpp, python, opts) => {
        // Include rust code in output so tests can inspect exercise content
        const escaped = (rust || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return `<div class="code-playground" id="playground-${id}"><pre>${escaped}</pre></div>`;
    };
    const fn = new Function('createPlayground', lessonsSource + '\nreturn LESSONS;');
    LESSONS = fn(createPlayground);
});

// ============================================
// 1. JavaScript Syntax & Loading
// ============================================
describe('JavaScript syntax', () => {
    it('lessons.js has valid syntax (can be parsed)', () => {
        expect(LESSONS).toBeDefined();
        expect(Array.isArray(LESSONS)).toBe(true);
    });

    it('LESSONS is a non-empty array', () => {
        expect(LESSONS.length).toBeGreaterThan(0);
    });
});

// ============================================
// 2. Lesson Structure
// ============================================
describe('lesson structure', () => {
    it('every lesson has required fields', () => {
        LESSONS.forEach((lesson, i) => {
            expect(lesson.id, `lesson[${i}] missing id`).toBeTruthy();
            expect(lesson.section, `lesson[${i}] missing section`).toBeTruthy();
            expect(lesson.title, `lesson[${i}] missing title`).toBeTruthy();
            expect(lesson.badge, `lesson[${i}] missing badge`).toBeTruthy();
            expect(typeof lesson.content, `lesson[${i}] content should be function`).toBe('function');
        });
    });

    it('lesson IDs are unique', () => {
        const ids = LESSONS.map(l => l.id);
        const unique = new Set(ids);
        expect(unique.size).toBe(ids.length);
    });

    it('content() returns non-empty HTML string', () => {
        LESSONS.forEach((lesson, i) => {
            const html = lesson.content();
            expect(typeof html, `lesson[${i}] content() should return string`).toBe('string');
            expect(html.length, `lesson[${i}] content() is empty`).toBeGreaterThan(0);
        });
    });
});

// ============================================
// 3. Exercise Integrity
// ============================================
describe('exercise integrity', () => {
    it('every exercise-section has a hint', () => {
        LESSONS.forEach((lesson) => {
            const html = lesson.content();
            const exerciseCount = (html.match(/class="exercise-section"/g) || []).length;
            const hintCount = (html.match(/class="exercise-hint"/g) || []).length;
            expect(hintCount, `lesson "${lesson.title}": ${exerciseCount} exercises but ${hintCount} hints`)
                .toBe(exerciseCount);
        });
    });

    it('every exercise-section has a show-answer block', () => {
        LESSONS.forEach((lesson) => {
            const html = lesson.content();
            const exerciseCount = (html.match(/class="exercise-section"/g) || []).length;
            const answerCount = (html.match(/class="exercise-answer"/g) || []).length;
            expect(answerCount, `lesson "${lesson.title}": ${exerciseCount} exercises but ${answerCount} answers`)
                .toBe(exerciseCount);
        });
    });

    it('every hint has a toggleHint button', () => {
        LESSONS.forEach((lesson) => {
            const html = lesson.content();
            const hintCount = (html.match(/class="exercise-hint"/g) || []).length;
            const toggleCount = (html.match(/toggleHint\(this\)/g) || []).length;
            expect(toggleCount, `lesson "${lesson.title}": hint/button mismatch`)
                .toBe(hintCount);
        });
    });

    it('every answer has a toggleAnswer button', () => {
        LESSONS.forEach((lesson) => {
            const html = lesson.content();
            const answerCount = (html.match(/class="exercise-answer"/g) || []).length;
            const toggleCount = (html.match(/toggleAnswer\(this\)/g) || []).length;
            expect(toggleCount, `lesson "${lesson.title}": answer/button mismatch`)
                .toBe(answerCount);
        });
    });

    it('exercises contain TODO/todo! or are fix-the-bug type (not pre-solved)', () => {
        // Skip lesson 1 (hello world is intentionally simple)
        LESSONS.slice(1).forEach((lesson) => {
            const html = lesson.content();
            const hasExercise = html.includes('class="exercise-section"');
            if (!hasExercise) return;

            // Extract playground code blocks from exercises
            const exerciseSections = html.split('class="exercise-section"').slice(1);
            exerciseSections.forEach((section) => {
                const playgroundMatch = section.match(/id="playground-([^"]+)"/);
                if (!playgroundMatch) return;

                // "Fix the bug" exercises have broken code as the challenge
                const isFixExercise = section.includes('修復') || section.includes('修改');

                const hasTodo = section.includes('TODO') || section.includes('todo!');
                const hasCommentedCode = section.includes('// let ') || section.includes('// fn ') ||
                                        section.includes('// println!') || section.includes('替換這行');
                expect(hasTodo || hasCommentedCode || isFixExercise,
                    `lesson "${lesson.title}": exercise should have TODO, skeleton code, or be a fix-the-bug type`)
                    .toBe(true);
            });
        });
    });
});

// ============================================
// 4. Quiz Integrity
// ============================================
describe('quiz integrity', () => {
    it('every quiz has at least one correct answer', () => {
        LESSONS.forEach((lesson) => {
            const html = lesson.content();
            const quizSections = html.split('class="quiz-section"').slice(1);
            quizSections.forEach((section, qi) => {
                const hasCorrect = section.includes('checkQuiz(this, true)');
                expect(hasCorrect, `lesson "${lesson.title}" quiz ${qi + 1}: no correct answer`).toBe(true);
            });
        });
    });

    it('every quiz has feedback', () => {
        LESSONS.forEach((lesson) => {
            const html = lesson.content();
            const quizCount = (html.match(/class="quiz-section"/g) || []).length;
            const feedbackCount = (html.match(/class="quiz-feedback"/g) || []).length;
            expect(feedbackCount, `lesson "${lesson.title}": quiz/feedback mismatch`)
                .toBe(quizCount);
        });
    });
});

// ============================================
// 5. Playground IDs
// ============================================
describe('playground IDs', () => {
    it('all playground IDs are unique', () => {
        const allIds = [];
        LESSONS.forEach((lesson) => {
            const html = lesson.content();
            const matches = html.matchAll(/id="playground-([^"]+)"/g);
            for (const m of matches) {
                allIds.push(m[1]);
            }
        });
        const unique = new Set(allIds);
        expect(unique.size, `duplicate playground IDs: ${allIds.filter((id, i) => allIds.indexOf(id) !== i)}`)
            .toBe(allIds.length);
    });
});

// ============================================
// 6. Cross-file references
// ============================================
describe('cross-file references', () => {
    it('app.js has toggleHint function', () => {
        const appJs = readFileSync(join(__dirname, 'app.js'), 'utf-8');
        expect(appJs).toContain('function toggleHint');
    });

    it('app.js has toggleAnswer function', () => {
        const appJs = readFileSync(join(__dirname, 'app.js'), 'utf-8');
        expect(appJs).toContain('function toggleAnswer');
    });

    it('app.js has checkQuiz function', () => {
        const appJs = readFileSync(join(__dirname, 'app.js'), 'utf-8');
        expect(appJs).toContain('function checkQuiz');
    });

    it('compiler.js has createPlayground function', () => {
        const compilerJs = readFileSync(join(__dirname, 'compiler.js'), 'utf-8');
        expect(compilerJs).toContain('function createPlayground');
    });

    it('index.html loads all required JS files', () => {
        const indexHtml = readFileSync(join(__dirname, 'index.html'), 'utf-8');
        expect(indexHtml).toContain('lessons.js');
        expect(indexHtml).toContain('app.js');
        expect(indexHtml).toContain('compiler.js');
        expect(indexHtml).toContain('styles.css');
    });

    it('styles.css has exercise/hint/answer styles', () => {
        const css = readFileSync(join(__dirname, 'styles.css'), 'utf-8');
        expect(css).toContain('.exercise-section');
        expect(css).toContain('.hint-toggle');
        expect(css).toContain('.hint-content');
        expect(css).toContain('.answer-toggle');
        expect(css).toContain('.answer-content');
    });
});

// ============================================
// 7. Section ordering
// ============================================
describe('section ordering', () => {
    it('lessons are grouped by section (no interleaving)', () => {
        const seenSections = new Set();
        let lastSection = '';
        LESSONS.forEach((lesson) => {
            if (lesson.section !== lastSection) {
                expect(seenSections.has(lesson.section),
                    `section "${lesson.section}" appears again after other sections`)
                    .toBe(false);
                seenSections.add(lesson.section);
                lastSection = lesson.section;
            }
        });
    });

    it('badge numbers are sequential', () => {
        LESSONS.forEach((lesson, i) => {
            const match = lesson.badge.match(/(\d+)/);
            expect(match, `lesson "${lesson.title}" badge should contain a number`).not.toBeNull();
            expect(parseInt(match[1]), `lesson "${lesson.title}" badge number should be ${i + 1}`)
                .toBe(i + 1);
        });
    });
});
