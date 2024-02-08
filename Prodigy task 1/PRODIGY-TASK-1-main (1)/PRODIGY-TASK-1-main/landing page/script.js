document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (!name || !email) {
    alert('Name and Email are required!');
    return;
    }

    // Simulate form submission with a fetch request (you can replace this with your actual backend endpoint)
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email }),
    })
    .then(response => {
        if (response.ok) {
        return response.json();
        } else {
        throw new Error('Something went wrong');
        }
    })
    .then(data => {
        alert('Form submitted successfully!');
        // You can perform additional actions here, such as clearing the form
    })
    .catch(error => {
        alert('Error submitting form. Please try again later.');
        console.error('Error:', error);
    });
});
