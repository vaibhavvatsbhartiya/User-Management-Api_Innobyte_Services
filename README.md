# User Management API Project

This project is part of the June cohort internship program at Innobyte Services. The main goal is to create a User Management API and integrate it with a frontend application using React and Tailwind CSS.

## Project Overview

The User Management API includes features such as:
- User registration
- User login
- User profile management
- OTP-based login
- Email confirmation after user registration

## Tech Stack

- **Backend**: Node.js with Express.js
- **Frontend**: React.js (using Vite) with Tailwind CSS for styling
- **Database**: MongoDB
- **Email Service**: Node-mailer

## Project Structure

### Frontend: `my-project`

This folder contains the React frontend application created using Vite and styled with Tailwind CSS.

#### Folder Structure

```
my-project/
├── src/
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── Signup.jsx
│   │   ├── Login.jsx
│   │   ├── Profile.jsx
│   │   ├── Navbar.jsx
│   ├── App.js
│   ├── index.js
│   ├── api/
│   │   └── api.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── tailwind.config.js
│   ├── vite.config.js
```

For more details, please refer to the `package.json` file within the `my-project` directory.

### Backend: `backend`

This folder contains all necessary files for the creation of the User Management API.

#### Folder Structure

```
backend/
├── controllers/
│   ├── userController.js
├── middleware/
│   ├── authMiddleware.js
├── models/
│   ├── userSchema.js
├── routes/
│   ├── user.js
├── utils/
│   ├── sendEmail.js
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── server.js
```

## Setup Instructions

### Backend

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node server.js
   ```

### Frontend

1. Navigate to the `my-project` directory:
   ```bash
   cd my-project
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## API Usage Guide

### Endpoints

- **User Registration**: 
  - **POST** `/api/user/register`
  - Request Body: `{ "name": "John Doe", "email": "john@example.com", "password": "password123" }`
- **User Login**: 
  - **POST** `/api/user/login`
  - Request Body: `{ "email": "john@example.com", "password": "password123" }`
- **Get User Profile**: 
  - **GET** `/api/user/profile`
  - Headers: `{ "Authorization": "Bearer <token>" }`
- **Update User Profile**: 
  - **PUT** `/api/user/profile`
  - Headers: `{ "Authorization": "Bearer <token>" }`
  - Request Body: `{ "name": "John Doe", "email": "john@example.com" }`
- **OTP Login**: 
  - **POST** `/api/user/otp-login`
  - Request Body: `{ "email": "john@example.com", "otp": "123456" }`

### Example Requests

#### User Registration

```bash
curl -X POST http://localhost:5000/api/user/register \
-H "Content-Type: application/json" \
-d '{"name": "John Doe", "email": "john@example.com", "password": "password123"}'
```

## Frontend Integration Guide

The frontend interacts with the backend API using Axios. Ensure that the backend server is running on `http://localhost:5000` when making requests from the frontend.

Example Axios POST request:

```javascript
import axios from 'axios';

const registerUser = async (userData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/user/register', userData);
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error.response.data);
  }
};
```

For more detailed instructions, refer to the `api.js` file in the `src/api` directory of the `my-project` folder.

## Documentation

For further documentation, including detailed API specifications and frontend integration details, please refer to the full project documentation available in the `backend/README.md` file and the comments within the codebase.


Thank you for reviewing this project. I hope this documentation helps you understand the structure and setup process. If you have any questions, please let me know.

Best regards,
Vaibhav Vats