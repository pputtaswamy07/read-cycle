# read-cycle
read-cycle is an Angular web application designed for recycling books online. The project leverages Firebase for authentication (sign-in/sign-up) and MongoDB for backend data management. It is currently an ongoing project.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact](#contact)

## Features

- **User Registration and Authentication**: Sign in or sign up using Firebase.
- **Book Recycling**: Users can post books they wish to recycle and browse books posted by others.
- **Responsive Design**: The application is designed to be responsive and user-friendly.
- **Search and Filter**: Search for books by title, author, or genre.
- **Data Management**: Backend data is managed using MongoDB.

## Technologies Used
- **Angular**: Frontend framework
- **Firebase**: Authentication
- **MongoDB**: Backend data management
- **Node.js**: Backend server
- **SCSS**: Styling
- **Navbar**: Used for navigation design


## Setup and Installation

To set up the project locally, follow these steps:

1. **Clone the repository**
    ```bash
    git clone https://github.com/Pooja-puttaswamy07
/book-recycling.git
    cd book-recycling
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```
3. **Setup Firebase**
   - Go to the Firebase Console.
   - Create a new project or use an existing one.
   - Add a web app to your Firebase project.
   - Copy the Firebase configuration and paste it into your Angular environment file (src/environments/environment.ts).
     
```bash
export const environment = {
  production: false,
  firebase: {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id"
  }
};
```
4. **Setup MongoDB**
   - Ensure you have MongoDB installed and running.
   - Create a new database for the project.
   - Update your backend configuration to connect to MongoDB.

5. **Run the application**
      ```bash
   ng serve
    ```
   Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Usage
- **Sign In/Sign Up**: Users can sign in or sign up using their email and password.
- **Post a Book**: Users can post books they wish to recycle.
- **Browse Books**: Users can browse books posted by others.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the project's coding standards and include appropriate tests.
1. Fork the project
2. Create your feature branch `git checkout -b feature/AmazingFeature`
3. Commit your changes `git commit -m 'Add some AmazingFeature`
4. Push to the branch `git push origin feature/AmazingFeature`
5. Open a pull request
