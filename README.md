# Apartments Listing Web/App

## Overview

This project is a simple listing apartments app with the following features:
- **Backend Application**: Built with Node.js and TypeScript.
- **Frontend Application**: Built with Next.js.
- **Database**: MongoDB (NoSQL).

The application allows users to view a list of apartments, see details about each apartment, and add new apartments.

## Features

### Backend
- **List Apartments**: API endpoint to list all apartments.
- **Get Apartment Details**: API endpoint to fetch details of a specific apartment.
- **Add Apartment**: API endpoint to add a new apartment.

### Frontend
- **Apartment Listing Page**: Displays a list of apartments.
- **Apartment Details Page**: Shows details of a selected apartment.
- **Add Apartment Page**: Adds a new apartment.

## Setup and Installation

### Prerequisites
- Docker
- Docker Compose

### Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
2. **Run the Application**

   Navigate to the root directory of the project and run the following command to start all services (frontend, backend, and MongoDB) using Docker Compose:
   ```bash
   docker-compose up --build
4. **Access the Application**
   - *Frontend*: http://localhost:3000
   - *Backend*: The backend runs internally and communicates with the frontend.

## Notes
- **Database Implementation**: Due to time constraints, MongoDB was used for this project. Although SQL was considered, I was unable to implement it within the limited time available.
- **Frontend API Integration**: The API for adding apartments was implemented but faced issues within the Docker container. Time constraints and new syntax challenges with Next.js limited my ability to fully resolve these issues before the submission deadline.


## Development Details
- **Frontend**: Implemented using Next.js with styled-components for styling & MUI components.
- **Backend**: Implemented using Node.js and TypeScript with Express.js.

## Challenges and Learnings
- **Time Management**: The assignment was completed within a strict 4-hour time limit due to having other work commitments, affecting the depth of implementation and debugging.
- **New Technologies**: Faced learning curves with React Native, as well as Next.js, which added to the development time.
