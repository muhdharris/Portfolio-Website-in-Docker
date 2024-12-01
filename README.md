# Portfolio Website in Docker

This project is a **Portfolio Website** hosted in **Docker** containers, created as part of a learning exercise for a web development course. It showcases a fully responsive frontend and a basic backend API, all running in containerized environments.

---

## Overview

This project demonstrates:
- A **responsive portfolio website** created using HTML, CSS, and JavaScript.
- A **backend API** built with Node.js to serve dynamic content.
- The use of **Docker** to containerize the frontend and backend.
- **NGINX** as a web server for hosting static frontend files.
- **Docker Compose** to orchestrate the entire application stack.

It serves as an example of combining **web development** and **containerization tools** for educational purposes.

---

## Project Structure

The project is divided into two main parts: **Frontend** and **Backend**.


- **Frontend**: Static files such as HTML, CSS, and JavaScript.
- **Backend**: Node.js API that provides dynamic data to the frontend.
- **docker-compose.yml**: File used to set up and manage the containers.

---

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Web Server**: NGINX
- **Containerization**: Docker, Docker Compose
- **Version Control**: Git & GitHub

---

## How to Run the Project

### Prerequisites

Ensure the following are installed on your system:
- **Docker**: [Install Docker](https://www.docker.com/get-started)
- **Docker Compose**: Comes bundled with Docker Desktop.

### Steps to Run

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
2. Build and start the containers:
    ```bash
    docker-compose up --build
3. Access the project:

    Frontend:
    ```bash
    http://localhost:8080
    ```
    This is where the portfolio website is hosted. You can view  the homepage, navigate to the about and contact sections, and see dynamic data displayed from the backend.

   Backend API: 
   ```bash
   http://localhost:3000/api/data
   ```
   This endpoint provides the API response, which the frontend fetches to display dynamic content:
   ```bash
   {
     "message": "Welcome to my Portfolio!",
     "year": 2024
   }
   ```

4. Stop the containers when you're done:
  ```bash
  docker-compose down
  ```
---
 ## Features
- **Responsive Design**: The portfolio is designed to work on both desktop and mobile devices.
- **Dynamic Data**: The website fetches data from a backend API, allowing you to display dynamic content.
- **Containerized Application**: Both the frontend and backend are containerized using Docker, making the setup portable and easy to deploy.
---

## Customization 
You can customize the wesite by modifying the following files:

- **Frontend:**

  - index.html: The homepage of the portfolio.
  - about.html: The About Me page.
  - contact.html: The Contact page.
  - style.css: Modify the website's design and layout.
  - scripts.js: Customize the JavaScript functionality.

- **Backend:**

  - server.js: The backend API code. Modify this to serve different data or create more endpoints.

Once you make changes, rebuild and restart the containers using the following command:
```bash
docker-compose up --build
```
---
## Usage
**Testing Backend**: You can use tools like Postman or cURL to send a GET request to the backend API to test its response:
```bash
curl http://localhost:3000/api/data
```
**Logs:** To view logs of the containers (both frontend and backend):
```bash
docker-compose logs
```

