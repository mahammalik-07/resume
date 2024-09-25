"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import html2canvas from "html2canvas";
/**
 * Get the text from the workExperience element and set it as the innerHTML for the message element
 */
function toggleMessage() {
    var workExperienceElement = document.getElementById("workExperience");
    var toggleButton = document.getElementById("toggleButton");
    var messageDisplayElement = document.getElementById("messageDisplay");
    if (workExperienceElement && toggleButton && messageDisplayElement) {
        // Check if the element is currently visible
        if (messageDisplayElement.innerHTML === "") {
            // Show the work experience and update the button label
            messageDisplayElement.innerHTML = workExperienceElement.innerHTML;
            toggleButton.innerHTML = "Hide Work Experience";
        }
        else {
            // Hide the work experience and update the button label
            messageDisplayElement.innerHTML = "";
            toggleButton.innerHTML = "Show Work Experience";
        }
    }
    else {
        console.error('One of the elements was not found');
    }
}
// function createButton() {
//   const button:any = document.getElementById('toggleButton');
//   button.addEventListener('click', () => {
//       const workSection = document.getElementById('workExperience');
//       if (workSection) {
//           workSection.style.display = 'block';
//       }
//   });
// }
//   function generateResume() {
//     const { jsPDF } = window.jspdf;
//     const doc = new jsPDF();
//     // Capture HTML content
//     const content = document.getElementsByClassName('formelements').innerText;
//     // Add content to PDF
//     doc.text(content, 10, 10);
//     // Save the PDF
//     doc.save("user_data.pdf");
//   }
function printFormData() {
    // Get the form elements
    var nameInput = document.getElementById('name');
    var titleInput = document.getElementById('title');
    var workExperienceInput = document.getElementById('workExperience');
    var educationInput = document.getElementById('education');
    var skillsInput = document.getElementById('skills');
    var emailInput = document.getElementById('email');
    var contactInput = document.getElementById('contactNo');
    if (!nameInput || !titleInput || !educationInput || !skillsInput || !emailInput || !contactInput) {
        console.error('One or more form elements were not found');
        return;
    }
    // Get the values of the form elements
    var name = nameInput.value;
    var title = titleInput.value;
    var education = educationInput.value;
    var skills = skillsInput.value;
    var email = emailInput.value;
    var contact = contactInput.value;
    // Create a new div element to display the form data
    var formDataDiv = document.createElement('div');
    formDataDiv.id = 'outputResume';
    formDataDiv.innerHTML = "\n                <h2>Resume</h2>\n                <p>Name: ".concat(name, "</p>\n                <p>Title: ").concat(title, "</p>\n                <p>Education: ").concat(education, "</p>\n                <p>Skills: ").concat(skills, "</p>\n                <p>Email: ").concat(email, "</p>\n                <p>Contact: ").concat(contact, "</p>\n            ");
    // Append the form data div to the page
    var resumePreview = document.getElementById('resumePreview');
    if (resumePreview) {
        resumePreview.innerHTML = ''; // Clear previous data
        resumePreview.appendChild(formDataDiv);
    }
}
// Create a new div element to display the form data
