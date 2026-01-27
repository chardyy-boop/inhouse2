:root {
    --bg-color: #0f172a;
    --card-bg: rgba(30, 41, 59, 0.7);
    --card-border: rgba(255, 255, 255, 0.1);
    --text-primary: #f8fafc;
    --text-secondary: #94a3b8;
    --accent-color: #3b82f6;
    --accent-hover: #2563eb;
    --success-color: #10b981;
    --danger-color: #ef4444;
    --glass-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    --font-family: 'Inter', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font-family);
    background-color: var(--bg-color);
    color: var(--text-primary);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    background: radial-gradient(circle at top left, #1e293b, #0f172a);
}

.background-animation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
    background:
        radial-gradient(circle at 15% 50%, rgba(59, 130, 246, 0.15), transparent 25%),
        radial-gradient(circle at 85% 30%, rgba(16, 185, 129, 0.15), transparent 25%);
}

.glass-container {
    background: var(--card-bg);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--card-border);
    border-radius: 24px;
    padding: 2rem;
    width: 90%;
    max-width: 800px;
    box-shadow: var(--glass-shadow);
    min-height: 500px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
}

.screen {
    display: none;
    flex-direction: column;
    height: 100%;
    flex: 1;
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
}

.screen.active {
    display: flex;
    opacity: 1;
}

/* Start Screen */
#start-screen {
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 2rem;
}

h1 {
    font-size: 3rem;
    font-weight: 700;
    background: linear-gradient(135deg, #60a5fa, #34d399);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0.5rem;
}

.subtitle {
    font-size: 1.25rem;
    color: var(--text-secondary);
}

.info-card {
    display: flex;
    gap: 2rem;
    margin: 2rem 0;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    border: 1px solid var(--card-border);
}

.info-item {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.info-item .label {
    font-size: 0.875rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 1px;
}

.info-item .value {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
}

/* Buttons */
.btn {
    padding: 1rem 2rem;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    border: none;
    transition: all 0.2s ease;
    font-family: var(--font-family);
}

.primary-btn {
    background: var(--accent-color);
    color: white;
    box-shadow: 0 4px 14px 0 rgba(59, 130, 246, 0.39);
}

.primary-btn:hover {
    background: var(--accent-hover);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px 0 rgba(59, 130, 246, 0.45);
}

.secondary-btn {
    background: rgba(255, 255, 255, 0.1);
    color: var(--text-primary);
}

.secondary-btn:hover {
    background: rgba(255, 255, 255, 0.15);
}

.secondary-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
}

.success-btn {
    background: var(--success-color);
    color: white;
}

.success-btn:hover {
    background: #059669;
}

/* Quiz Header */
.quiz-header {
    margin-bottom: 2rem;
}

.progress-bar {
    width: 100%;
    height: 6px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    margin-bottom: 1rem;
    overflow: hidden;
}

#progress-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--accent-color), var(--success-color));
    width: 0%;
    transition: width 0.3s ease;
}

.quiz-status {
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;
    color: var(--text-secondary);
}

/* Question Area */
.question-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding-bottom: 1rem;
}

#question-text {
    font-size: 1.4rem;
    line-height: 1.5;
    margin-bottom: 2rem;
    font-weight: 600;
}

.options-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

.option-btn {
    text-align: left;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--card-border);
    padding: 1.2rem;
    border-radius: 12px;
    color: var(--text-primary);
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: 1rem;
    font-family: var(--font-family);
    display: flex;
    align-items: center;
}

.option-btn:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
}

.option-btn.selected {
    background: rgba(59, 130, 246, 0.2);
    border-color: var(--accent-color);
    box-shadow: 0 0 0 2px var(--accent-color);
}

.option-letter {
    font-weight: 700;
    margin-right: 1rem;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    font-size: 0.8rem;
}

.option-btn.selected .option-letter {
    background: var(--accent-color);
    color: white;
}

/* Quiz Footer */
.quiz-footer {
    display: flex;
    padding-top: 1.5rem;
    border-top: 1px solid var(--card-border);
    margin-top: auto;
}

.spacer {
    flex: 1;
}

.hidden {
    display: none;
}

/* Result Screen */
#result-screen {
    justify-content: center;
    align-items: center;
    text-align: center;
}

.score-card {
    margin: 3rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.score-circle {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: radial-gradient(circle at center, rgba(59, 130, 246, 0.1), transparent 70%);
    border: 4px solid var(--card-border);
    border-top-color: var(--accent-color);
    border-right-color: var(--success-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;
    box-shadow: 0 0 40px rgba(59, 130, 246, 0.2);
    position: relative;
}

#final-score {
    font-size: 4rem;
    font-weight: 800;
    line-height: 1;
    background: linear-gradient(135deg, #fff, #94a3b8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.total {
    font-size: 1.2rem;
    color: var(--text-secondary);
    margin-top: 0.5rem;
}

#percentage-display {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--accent-color);
}

/* Responsive */
@media (max-width: 600px) {
    .glass-container {
        padding: 1.5rem;
        width: 95%;
    }

    h1 {
        font-size: 2rem;
    }

    .question-container {
        padding-right: 0.5rem;
    }

    #question-text {
        font-size: 1.1rem;
    }

    .option-btn {
        padding: 1rem;
        font-size: 0.95rem;
    }
}
