document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/api/data")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("api-data").textContent = data.message;
    })
    .catch((error) => {
      document.getElementById("api-data").textContent = "Error fetching data!";
      console.error(error);
    });
});