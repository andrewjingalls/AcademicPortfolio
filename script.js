 // Select all project titles
 const projectTitles = document.querySelectorAll('.project-title');
    
 // Iterate over each project title
 projectTitles.forEach(title => {
     // Add click event listener to each title
     title.addEventListener('click', () => {
         // Toggle 'show' class on the next sibling element (description)
         title.nextElementSibling.classList.toggle('show');
     });
 });