import { display } from 'html2canvas/dist/types/css/property-descriptors/display';
import { jsPDF } from 'jspdf';


function toggleMessage() {
  const workExperienceElement = document.getElementById("workExperience");
const toggleButton = document.getElementById("toggleButton");
const messageDisplayElement = document.getElementById("messageDisplay");

if (workExperienceElement && toggleButton && messageDisplayElement) {
    // Check if the element is currently visible
    if (messageDisplayElement.innerHTML === "") {
        // Show the work experience and update the button label
        messageDisplayElement.innerHTML = workExperienceElement.innerHTML;
        toggleButton.innerHTML = "Hide Work Experience";
    } else {
        // Hide the work experience and update the button label
        messageDisplayElement.innerHTML = "";
        toggleButton.innerHTML = "Show Work Experience";
    }
} else {
    console.error('One of the elements was not found');
}
}
        function printFormData() {
            // Get the form elements
            const nameInput: HTMLInputElement | null = document.getElementById('name') as HTMLInputElement;
            const titleInput: HTMLInputElement | null = document.getElementById('title') as HTMLInputElement;
            const workExperienceInput: HTMLTextAreaElement | null = document.getElementById('workExperience') as HTMLTextAreaElement;
            const educationInput: HTMLTextAreaElement | null = document.getElementById('education') as HTMLTextAreaElement;
            const skillsInput: HTMLTextAreaElement | null = document.getElementById('skills') as HTMLTextAreaElement;
            const emailInput: HTMLTextAreaElement | null = document.getElementById('email') as HTMLTextAreaElement;
            const contactInput: HTMLTextAreaElement | null = document.getElementById('contactNo') as HTMLTextAreaElement;

            if (!nameInput || !titleInput || !educationInput || !skillsInput || !emailInput || !contactInput) {
                console.error('One or more form elements were not found');
                return;
            }

            // Get the values of the form elements
            const name = nameInput.value;
            const title = titleInput.value;
            const education = educationInput.value;
            const skills = skillsInput.value;
            const email = emailInput.value;
            const contact = contactInput.value;

            // Create a new div element to display the form data
            const formDataDiv = document.createElement('div');
            formDataDiv.id = 'outputResume';
            formDataDiv.innerHTML = `
                <h2>Resume</h2>
                <p>Name: ${name}</p>
                <p>Title: ${title}</p>
                <p>Education: ${education}</p>
                <p>Skills: ${skills}</p>
                <p>Email: ${email}</p>
                <p>Contact: ${contact}</p>
            `;

            // Append the form data div to the page
            const resumePreview = document.getElementById('resumePreview');
            if (resumePreview) {
                resumePreview.innerHTML = ''; // Clear previous data
                resumePreview.appendChild(formDataDiv);
            }
        }
   
  