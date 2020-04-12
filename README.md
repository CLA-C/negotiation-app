The app is based on the idea of a work contract negotiation: Employer and employee enter salary values and the app tells if the expectations meet.

The interface of the app consists of two tabs: one for the employee and one for the employer. Each tab contains an input box which only accepts numbers, and a “Submit” button. Once a value has been entered and submitted, the input field of the tab disappears.

The employer enters how much she is willing to pay maximally. The employee enters how much he expects to be paid minimally. As soon as both inputs have been submitted, a modal window pops up and shows either “Success!” or “Failure!”, as well as the entered values. “Success” is only if the employee’s minimum pay is equal to or below the employer’s maximum pay. Otherwise the input is considered a “Failure”.

## Notes

- I used [Create React App](https://github.com/facebook/create-react-app) with a few tweaks to quickly have the app up-and-running

- Main logic is handled by a Redux-style global state/store (created through a *useReducer* hook) found in `src\state\state.js`  

- Styling is minimal, with some Bootstrap components for convenience

- Left a few comments in the code for clarity

## Available Scripts

Run `npm-install` in the same folder of the `package.json` file to install all dependencies. Then, in the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### `npm test`

Launches the test runner in the interactive watch mode. All tests are found in the `__tests__` folder.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
