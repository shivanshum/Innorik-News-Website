# Innorik-News-Website
 A News Blog build using Reactjs and ExpressJs - Shivanshu Mishra

### Steps to start the project.
- cd Backend
- nodemon server.js
#### backend server will start
- cd ..
- cd Frontend
- npm i
- npm start
#### frontend services will start and you can visit then on http://localhost:3000/

## Let's walk through the functionalities and logic of the code:

### GenericGrid.js

- **Functionality**: This component is responsible for displaying a grid of news items. It fetches news data from a Redux store and renders each news item using the `SingleGridItem` component.

- **Logic**:
  - It uses the `useSelector` hook to retrieve news data from the Redux store.
  - It maps over the news data and renders each item using the `SingleGridItem` component.
  - The `handleSaveForLater` function is passed down to the `SingleGridItem` component, allowing users to save articles for later.
  - When the component is loading news data, it displays a skeleton loading animation.

### Navbar.js

- **Functionality**: This component is a navigation bar that allows users to select news categories and navigate between pages.

- **Logic**:
  - It uses Chakra UI components to create a responsive navigation bar.
  - Users can select news categories from a dropdown menu.
  - Depending on the route, it displays different buttons such as "Save" when on the saved articles page.
  - The navigation menu is collapsible for smaller screen sizes.

### SingleGridItem.js

- **Functionality**: This component represents an individual news item within the grid.

- **Logic**:
  - It displays the title, description, content, and image of a news article.
  - Users can click a button to read more, which opens the article in a new tab.
  - The component provides functionality to save an article for later viewing.
  - If the component is rendered on the saved articles page, a button to mark an article as completed is shown.

### HomePage.js

- **Functionality**: This is the main page of the application that combines the grid of news items and the navigation bar.

- **Logic**:
  - It includes the `Navbar` and `GenericGrid` components to create the homepage layout.
  - Users can select news categories from the navigation bar and view corresponding news items in the grid.

### LoginPage.js

- **Functionality**: This component provides a login form for users to enter their email and password.

- **Logic**:
  - Users can input their login credentials and submit the form.
  - It dispatches a login action when the form is submitted, triggering authentication.
  - If the login is successful, users are redirected to the homepage.
  - A loading spinner is displayed while waiting for a response from the server.

### Register.js

- **Functionality**: This component offers a registration form for users to create an account.

- **Logic**:
  - Users can input their name, email, and password and submit the form.
  - Upon submission, it dispatches a registration action to create a new user account.
  - If registration is successful, users are redirected to the login page.
  - A loading spinner is shown while waiting for the registration process to complete.

This README provides an overview of the functionalities and logic of the project codebase.