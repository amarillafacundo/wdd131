document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;


function handleFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessageDiv = document.getElementById("formMessage");


    formMessageDiv.style.display = "none";
    formMessageDiv.textContent = "";
    formMessageDiv.style.backgroundColor = "";
    formMessageDiv.style.color = "";
    formMessageDiv.style.borderColor = "";

    
    if (name === "" || email === "" || message === "") {
        formMessageDiv.textContent = `Please fill in all fields.`;
        formMessageDiv.style.backgroundColor = "#f8d7da"; 
        formMessageDiv.style.color = "#721c24";
        formMessageDiv.style.borderColor = "#f5c6cb";
        formMessageDiv.style.display = "block";
        return;
    }

    
    console.log(`Form Submitted:
Name: ${name}
Email: ${email}
Message: ${message}`);

    
    localStorage.setItem('formSubmitted', 'true');
    localStorage.setItem('lastSubmissionTime', new Date().toISOString());

    
    formMessageDiv.textContent = `Thank you, ${name}! Your message has been sent. We will get back to you shortly.`;
    formMessageDiv.style.backgroundColor = "#d4edda"; 
    formMessageDiv.style.color = "#155724"; 
    formMessageDiv.style.borderColor = "#c3e6cb";
    formMessageDiv.style.display = "block";

    
    document.getElementById("contactForm").reset();

    
    const recentMessages = JSON.parse(localStorage.getItem('recentMessages')) || [];
    recentMessages.push({ name: name, timestamp: new Date().toISOString() });
    localStorage.setItem('recentMessages', JSON.stringify(recentMessages.slice(-5)));
}

document.getElementById("contactForm").addEventListener("submit", handleFormSubmit);

function checkLastSubmission() {
    const lastTime = localStorage.getItem('lastSubmissionTime');
    const formMessageDiv = document.getElementById("formMessage");

    if (lastTime) {
        const submittedDate = new Date(lastTime);
        const now = new Date();
        const diffMinutes = (now - submittedDate) / (1000 * 60);

        if (diffMinutes < 5) {
            formMessageDiv.textContent = `You recently submitted a form on ${submittedDate.toLocaleString()}. Please wait a moment before submitting again.`;
            formMessageDiv.style.backgroundColor = "#fff3cd"; 
            formMessageDiv.style.color = "#856404"; 
            formMessageDiv.style.borderColor = "#ffeeba";
            formMessageDiv.style.display = "block";
        }
    }
}


window.onload = checkLastSubmission;


const userProfile = {
    firstName: "Facundo",
    lastName: "Amarilla",
    occupation: "Web Developer",
    location: "Santa Fe, Argentina"
};

console.log(`User Profile: ${userProfile.firstName} ${userProfile.lastName} from ${userProfile.location}`);