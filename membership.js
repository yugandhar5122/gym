/ membership.js

document.addEventListener('DOMContentLoaded', function() {
    // Load text-membership.html content into the membership-content div
    fetch('text-membership.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('membership-content').innerHTML = data;
        })
        .catch(error => console.error('Error loading text-membership.html:', error));
});
