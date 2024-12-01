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

---

### Steps to Run

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website

2. Build and start the containers:
   ```bash
   docker-compose up --build
   
3. Access the project:

   Frontend: http://localhost:8080
   Backend API: http://localhost:3000/api/data

