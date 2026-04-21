// Typing animation
const roles = [
    "Full Stack Web Developer",
    "Chemistry Graduate",
    "Tutor",
    "Lab Assistant"
];

let i = 0, j = 0, current = "", deleting = false;

function type() {
    current = roles[i];

    document.getElementById("roles").textContent =
        current.substring(0, j);

    if (!deleting && j < current.length) j++;
    else if (deleting && j > 0) j--;
    else {
        deleting = !deleting;
        if (!deleting) i = (i + 1) % roles.length;
    }

    setTimeout(type, deleting ? 50 : 100);
}
type();

(function(){
    emailjs.init("ehH9wdBdzYOz9tP88");
})();
document.getElementById("contactFormElement").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.send("service_l2lwx9c", "template_shpkuho", {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value
    })
    .then(function() {
        alert("Message sent successfully!");
    }, function(error) {
        alert("Failed to send message. Try again.");
        console.log(error);
    });
});
// ...existing code...

// Add this after your existing functions
const style = document.createElement('style');
style.textContent = `
@keyframes fadeSlideUp {
    from {
        transform: translateY(40px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
`;
document.head.appendChild(style);
