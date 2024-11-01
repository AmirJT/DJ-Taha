document.addEventListener("DOMContentLoaded", function () {
    const formSection = document.querySelector(".page-section");
    const form = document.getElementById("booking-form");
    const thankYouSection = document.getElementById("thank-you");
    const confirmationMessage = document.getElementById("confirmation-message");
   
    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const formData = {
            fullName: document.getElementById("full-name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            eventDate: document.getElementById("event-date").value,
            location: document.getElementById("location").value,
            eventType: document.getElementById("event-type").value,
            guestCount: document.getElementById("guest-count").value,
            referral: document.getElementById("boxs").value,
            eventDetails: document.getElementById("event-details").value,
        };

        localStorage.setItem("bookingData", JSON.stringify(formData));

        formSection.style.display = "none";
        thankYouSection.style.display = "block";
        
        confirmationMessage.innerHTML = `
            <h2>Thank You for Your Submission!</h2>
            <p><strong>Full Name:</strong> ${formData.fullName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Event Date:</strong> ${formData.eventDate}</p>
            <p><strong>Location:</strong> ${formData.location}</p>
            <p><strong>Event Type:</strong> ${formData.eventType}</p>
            <p><strong>Guest Count:</strong> ${formData.guestCount}</p>
            <p><strong>Referral:</strong> ${formData.referral}</p>
            <p><strong>Event Details:</strong> ${formData.eventDetails}</p>
        `;
    });
});

