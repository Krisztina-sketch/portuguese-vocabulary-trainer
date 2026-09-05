# Portuguese Vocabulary Trainer

## Introduction

Portuguese Vocabulary Trainer is a responsive educational web application for beginners who want to practise a small set of common Portuguese words. Users can review vocabulary cards, complete a multiple-choice quiz and view a simple progress page.

The project was built with HTML5, CSS3, Bootstrap 5 and JavaScript.

## Live Website

[Portuguese Vocabulary Trainer](https://krisztina-sketch.github.io/portuguese-vocabulary-trainer/)

## GitHub Repository

[GitHub Repository](https://github.com/Krisztina-sketch/portuguese-vocabulary-trainer)

## UX and Design

### Target User

The primary user is a beginner Portuguese learner who wants a simple, low-pressure way to review basic vocabulary and check understanding through a short quiz.

### User Goals

- Learn a small set of common Portuguese words and their English meanings.
- Move backwards and forwards through vocabulary cards without leaving the page.
- Test learning through a short multiple-choice quiz.
- Receive immediate feedback after choosing an answer.
- See a final score and be able to restart the quiz.
- Navigate easily between the learning, quiz, progress and information pages.

### Design Decisions

The interface deliberately uses a simple card-based layout so the learner can focus on one task at a time. Bootstrap provides responsive spacing, buttons and navigation. Green is used prominently because it relates visually to the Portuguese flag and also gives the application a consistent identity. White space and large headings improve readability.

The Learn page keeps one vocabulary item in focus at a time. The Quiz page displays one question at a time to avoid overwhelming the learner. Immediate feedback helps the learner understand mistakes before moving on.

## Wireframes

Wireframes were produced before development to plan the page structure, navigation and placement of the main interactive elements.

### Homepage Wireframe

![Homepage Wireframe](assets/homepage-wireframe.jpg)

## User Stories

| User Story | Acceptance Criteria |
|---|---|
| As a beginner, I want to learn common Portuguese vocabulary so that I can improve my language skills. | The Learn page displays Portuguese words, English meanings and example sentences. |
| As a learner, I want to move through vocabulary cards so that I can revise at my own pace. | Previous and Next buttons change the displayed vocabulary item. |
| As a learner, I want to test my knowledge so that I can see what I remember. | The Quiz page presents multiple-choice questions and checks answers. |
| As a learner, I want immediate feedback so that I know when I am correct or incorrect. | Each answer displays clear correct/incorrect feedback. |
| As a learner, I want to see my score so that I can judge my performance. | The quiz displays a final score after the last question. |
| As a user, I want clear navigation so that I can move between features quickly. | Navigation links connect the Home, Learn, Quiz, Progress and About pages. |

## Features

### Home Page

- Introduces the application and its purpose.
- Provides navigation to the main learning features.
- Includes prominent buttons to start learning or take the quiz.

### Learn Page

- Displays Portuguese vocabulary with English translations and example sentences.
- Previous and Next controls allow users to move through the vocabulary list.
- A counter shows the current word number.

### Quiz Page

- Presents five multiple-choice questions.
- Gives immediate feedback after each answer.
- Prevents repeated scoring by disabling answer buttons after a choice.
- Displays the final score.
- Stores the last and best quiz scores in localStorage.
- Allows the user to restart the quiz.

### Progress Page

- Presents a simple visual summary of the learning set and completion percentage.

### About Page

- Explains the purpose of the application and its main features.

### Responsive Design

- Bootstrap is used for responsive layout, spacing, navigation, cards and buttons.
- Custom presentation rules are stored in `assets/css/style.css` instead of inline HTML styles.

## Screenshots

### Home Page
![Home Page](assets/images/home-page.png)

### Learn Page
![Learn Page](assets/images/learn-page.png)

### Quiz Page
![Quiz Page](assets/images/quiz-page.png)

### Progress Page
![Progress Page](assets/images/progress-page.png)

### About Page
![About Page](assets/images/about-page.png)

## Technologies Used

- HTML5 — semantic page structure.
- CSS3 — custom presentation rules.
- Bootstrap 5 — responsive layout and UI components.
- JavaScript — vocabulary navigation, quiz behaviour, scoring and localStorage.
- Git and GitHub — version control and source hosting.
- GitHub Pages — deployment.

## Testing

Testing was carried out against the project features and user stories. The revised project also separates custom CSS from HTML and includes comments explaining the JavaScript logic.

### Manual Functional Testing

| Test | Expected Result | Actual Result | Status |
|---|---|---|---|
| Open each navigation link | Correct page opens | All navigation links open the intended page | Pass |
| Click Next on Learn page | Next vocabulary item is displayed | Vocabulary changes and counter updates | Pass |
| Click Previous on Learn page | Previous vocabulary item is displayed | Vocabulary changes and counter updates | Pass |
| Continue past the final vocabulary item | Revision continues from the start | Vocabulary loops back to the first item | Pass |
| Select correct quiz answer | Correct feedback is shown and score increases | Correct feedback appears | Pass |
| Select incorrect quiz answer | Correct answer is shown and score does not increase | Incorrect feedback appears with correct answer | Pass |
| Click Next Question | Next quiz question is displayed | Question number and content update | Pass |
| Complete final question | Final score is displayed | Quiz complete message and score appear | Pass |
| Click Try Again | Quiz restarts from question one with score reset | Quiz restarts correctly | Pass |
| Refresh after completing a quiz | Saved score remains available in localStorage | Last/best score values remain stored | Pass |

### User Story Testing

| User Story | Test Result |
|---|---|
| Learn common Portuguese vocabulary | Learn page displays five vocabulary items with translations and examples. Pass. |
| Move through vocabulary cards | Previous and Next controls work in both directions. Pass. |
| Test knowledge with a quiz | Five multiple-choice questions can be completed. Pass. |
| Receive immediate feedback | Correct/incorrect feedback appears immediately after selection. Pass. |
| See a final score | Final score appears at the end of the quiz. Pass. |
| Navigate easily | Main navigation links were checked across the pages. Pass. |

### JavaScript Syntax Validation

The JavaScript files were checked with Node's syntax checker using:

```bash
node --check assets/js/learn.js
node --check assets/js/quiz.js
```

Both files completed the syntax check without errors in the revised project.

### HTML and CSS Validation

Before resubmission, the live deployed pages should be checked with the W3C HTML Validator and the custom stylesheet should be checked with the W3C CSS Validator. Screenshots or links to the validation results should be added here as evidence.

This section is intentionally left as a final verification step rather than claiming a validator result that has not yet been recorded.

## Bugs

### Fixed Bugs

- Quiz score handling was checked to ensure the score only increases for correct answers.
- Answer buttons are disabled after a selection so one question cannot be scored repeatedly.
- Navigation links were checked to ensure they lead to the intended pages.
- Custom presentation styles were moved from inline `style` attributes into `assets/css/style.css`.
- JavaScript was commented to make the logic easier to understand and maintain.

### Known Limitations

- The Learn page intentionally loops back to the first card after the final vocabulary item. A future improvement would be to add a clear end-of-revision state or completion message.
- The Progress page currently presents a simple static summary rather than a detailed progress dashboard.

## Deployment

The project is deployed using GitHub Pages.

### Deployment Steps

1. Log in to GitHub.
2. Open the Portuguese Vocabulary Trainer repository.
3. Open **Settings**.
4. Select **Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and `/(root)` folder.
7. Save the configuration.
8. Wait for GitHub Pages to publish the site.

## Credits

### Content and Media

- Portuguese vocabulary and written project content were prepared for this educational project.
- Project screenshots and wireframes are stored in the repository.
- Bootstrap 5 documentation and MDN Web Docs were used as technical references.

## AI Assistance

Generative AI (ChatGPT by OpenAI) was used extensively during development and revision of this project, including assistance with JavaScript, code structure, debugging and documentation. Because the JavaScript files were substantially AI-assisted, this is stated directly in comments at the top of `assets/js/learn.js` and `assets/js/quiz.js` rather than presenting any part of those files as independently written code.

The AI-assisted code was reviewed, tested and integrated into the project. The project owner should be able to explain the purpose of the main functions and event listeners before resubmission.

## Future Improvements

- Add more vocabulary categories and words.
- Add pronunciation audio.
- Add different quiz difficulty levels.
- Replace the static Progress page with statistics generated from localStorage.
- Add a clear completion state after the learner reaches the final vocabulary card.
