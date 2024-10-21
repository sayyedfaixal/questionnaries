# Questionnaire Web App

This is a simple questionnaire web page built using React with the following features:

## Features

1. A **1-minute timer** displayed at the top of the page.
2. Below the timer, a **question with 4 clickable options** is rendered.
3. **Options are clickable** and the selected option is highlighted.
4. A **submit button** at the bottom allows the user to submit their selected answer.
5. Upon submitting:
   - If the selected answer is **correct**, the selected option's background changes to **green**.
   - If the selected answer is **incorrect**, the selected option's background changes to **red**, and the correct answer's background changes to **green**.
6. A pop-up message is shown when the **time runs out**, asking the user if they want to reload the page to attempt the questionnaire again.
7. After submission, the **submit button changes** to a **next** button to allow moving to the next question (if any).

## Libraries Used

- **Vite**: For fast and modern development.
- **Tailwind CSS**: For easy and responsive styling.

## Installation

### Steps to run the project:

1. Clone the repository or download the project.
2. Navigate to the project directory:
   ```bash
   cd \questionnaries
   ```
3. Run the following command to run the app locally
   ```bash
   npm run dev
   ```
