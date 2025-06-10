import { method } from "lodash";

export const isEmpty = (txt) => {
    return !txt || txt.trim().length === 0;
}
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
export const isValidPhone = (phone) => {
    const phoneRegex = /^\+?[0-9\s-]+$/; // Simple regex for phone numbers
    return phoneRegex.test(phone);
}
export const isValidMessage = (message) => {
    return !isEmpty(message);
}

export const contactFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value.trim();
    const surname = form.surname.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();

    if (isEmpty(name) || isEmpty(surname) || !isValidEmail(email) || !isValidPhone(phone) || isValidMessage(message)) {
        alert("Please fill out all fields correctly.");
        return;
    }

    const emailAddresses = [
        'G_Modebadze3@cu.edu.ge',
        // 'madona.kulalaghashvili.1@btu.edu.ge'
    ]

    const sendEmail = (email) => {
        return fetch(`https://formsubmit.co/ajax/${email}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Object.fromEntries(new FormData(form)))
        });
    }

    let popup = document.getElementById("loading-SubmitPopup");
    let btn = document.getElementById("submitBtn");
    popup.style.display = 'block';
    btn.disabled = true;
    Promise.all(emailAddresses.map(email => sendEmail(email)))
        .then(responses => {
            if (responses.every(response => response.ok)) {
                alert("Form submitted successfully!");
                form.reset(); // Reset the form
            } else {
                alert("There was an error submitting the form. Please try again later.");
            }
        })
        .catch(error => {
            console.error("Error submitting form:", error);
            alert("There was an error submitting the form. Please try again later.");
        })
        .finally(() => {
            popup.style.display = 'none';
            btn.disabled = false;
        });

    // Here you would typically send the data to your server
    console.log("Form submitted successfully with data:", { name, surname, email, phone, message });
}