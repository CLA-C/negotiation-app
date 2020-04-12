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
