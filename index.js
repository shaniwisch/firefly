// Wait for the whole page to load before running the script
document.addEventListener("DOMContentLoaded", () => {

    // Select all links inside the navigation bar
    const links = document.querySelectorAll(".nav-links a");
  
    // Loop through each link and add a click event
    links.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default browser navigation
  
        const page = this.textContent.trim().toLowerCase(); // Get the text inside the link
  
        // Map the link text to the correct HTML file
        const pageMap = {
          "דף הבית": "index.html",
          "about": "about.html",
          "robots": "projects.html",
          "projects": "projects.html",
          "team": "team.html",
          "צור קשר": "contact.html"
        };
  
        // Check if the clicked link matches a page, and navigate there
        if (pageMap[page]) {
          window.location.href = pageMap[page]; // Navigate to the appropriate page
        }
      });
    });
  });
  