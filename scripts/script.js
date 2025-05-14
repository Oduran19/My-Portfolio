
/*Main JavaScript file for the website*/

// Function to toggle the display of the menu on smaller screens
function hamburger() {
    const menu = document.getElementById('menu-links');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}


// Function to copy the email address to the clipboard
function copyEmail() {
    navigator.clipboard.writeText("oscaralbertoduran9@gmail.com");
    alert('Email copied to clipboard!');
}

// Function to handle form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    const formData = {
            Fname: document.getElementById('Fname').value,
            Lname: document.getElementById('Lname').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value,
            date: new Date().toISOString(),
            gCaptchaResponse: document.getElementById('g-recaptcha-response').value,
            };
        
                  
    const url = 'https://script.google.com/macros/s/AKfycbx8a7yV7CVl-XOQsNX5wRh9ErMpaMks67Zu-_l2ZK5FekcuH0TvYJxGkU-giUgE5CBnfw/exec';
  
    // Make the fetch request to send the form data to Google Apps Script
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Form submitted successfully:', data);
        alert('Form submitted successfully!');
        // Reset the form fields
        document.getElementById('contact-form').reset(); 
        captcha.reset();
      })
      .catch((err) => {
        console.log('Error submitting form:', err);
        alert('There was an error submitting the form.');
      });
  });
