document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally
  
  // Get form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  
  // Create an object to hold the form data
  var formData = {
      name: name,
      email: email,
      message: message
  };
  
  // Send form data to the server using AJAX
  fetch('contact_process.php', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
          'Content-Type': 'application/json'
      }
  })
  .then(response => {
      if (response.ok) {
          console.log('Form submission successful');
          document.getElementById('contactForm').reset(); // Reset the form after successful submission
          location.reload(); // Reload the page to display updated contact submissions
      } else {
          console.error('Form submission failed');
      }
  })
  .catch(error => {
      console.error('Error:', error);
  });
});
