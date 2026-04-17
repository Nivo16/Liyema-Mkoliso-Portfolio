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


// Scroll animation
const elements = document.querySelectorAll(".fade-in");

function showOnScroll() {
    const trigger = window.innerHeight * 0.8;

    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < trigger) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showOnScroll);
function toggleForm() {
    const form = document.getElementById("contactForm");
    form.style.display = form.style.display === "block" ? "none" : "block";
}
function sendEmail(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let mailtoLink = `mailto:mkolisoliyema@gmail.com?subject=Contact from ${name}&body=${message} (${email})`;

    window.location.href = mailtoLink;
}

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
