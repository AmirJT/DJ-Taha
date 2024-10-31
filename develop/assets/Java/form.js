document.addEventListener("DOMContentLoaded", function () {
    const formSection = document.querySelector(".page-section");
    const form = document.getElementById("booking-form");
    const thankYouSection = document.getElementById("thank-you");

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
    });
});

