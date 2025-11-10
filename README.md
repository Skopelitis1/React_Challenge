# React + Vite

 - The application is built with React and Vite.
 - State is managed using React hooks.
 - The GitHub fetching logic is separated into a service file to keep it clean.
 - Sorting and filtering are implemented in a utility (sortRepos) to keep the UI components simple.
 - TailwindCSS is used for styling to maintain a clean and responsive layout with minimal CSS overhead.
 - Debounced search (via react-use) is used to avoid unnecessary filtering operations on every keystroke.
 - The project folder structure follows a clear separation of concerns (components, hooks, services, utils).



## Running the Application Locally

Install dependencies:

npm install

Start the development server:

npm run dev

## Environment Variables

The project requires a GitHub Personal Access Token:

VITE_API_KEY=your_github_token
