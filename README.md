# Travel Booking Website

This is a full-stack travel booking website that allows users to explore and book travel packages. 
## Table of Contents

- [Technologies Used](#technologies-used)
- [Frontend](#frontend)
- [Backend](#backend)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Deployed Link](#deployed-link)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- **Frontend**: 
  - React.js
  - React Router
  - Tailwind CSS
  - Axios
  - Vercel (Deployment)
  
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (Database)
  - Mongoose (ODM)
  - JWT Authentication
  - NodeMailer (Email OTP)
  - Multer (File Uploads)

## Frontend

The frontend is built using **React.js** and styled with **Tailwind CSS**. The key features of the frontend include:

- **Home Page**: Displays featured packages, popular destinations, and a search feature.
- **Package Details**: Users can view more details about a selected package.
- **Booking Page**: Users can select travel packages and complete the booking process.
- **Authentication**: Users can register, log in, and reset their passwords using email and OTP verification.
- **Admin Dashboard**: Admins can create, update, and delete packages, as well as view all bookings.

### Running the Frontend Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/travel-booking-frontend.git

2. Navigate to the project directory:
   ```bash
   cd travel-booking-frontend
3. Install dependencies:
   ```bash
   npm install
4. Start the development server:
   ```bash
   npm start
5. Open http://localhost:3000 in your browser.

##  Backend

The backend is built using Node.js and Express.js, with MongoDB as the database. It provides the necessary API endpoints for managing travel packages and bookings.

Key Features:
-**Booking System:** Users can create bookings with package details, and admins can manage all bookings.
-**Package Management:** Admins can add, update, or delete travel packages.
-**Authentication:** Users can register, log in, and reset passwords with OTPs.
-**Security:** JWT tokens are used for authentication and authorization.

### Running the Backend Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/travel-booking-backend.git
   
2. Navigate to the project directory:
   ```bash
   cd travel-booking-backend
   
3. Install dependencies:
   ```bash
   npm install

4. Start the server:
   ```bash
   npm start

5.The backend will now be running on http://localhost:5000.    

### API Endpoints

1. POST /api/admin/packages: Create a new package.
2. GET /api/admin/packages: Get all packages.
3. GET /api/admin/packages/:id: Get package by ID.
4. PUT /api/admin/packages/:id: Update an existing package.
5. DELETE /api/admin/packages/:id: Delete a package.
6. POST /api/bookings: Create a new booking.
7. GET /api/bookings: Get all bookings.







     
