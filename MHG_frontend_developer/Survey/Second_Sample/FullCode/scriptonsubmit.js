let submittxt1 = document.getElementById("submittxt1");
let submittxt2 = document.getElementById("submittxt2");
let button = document.getElementById("button");

// Call the function to set language on page load
window.onload = () => {
    setLanguage(localStorage.getItem("Lang"));
};

// Function to set language and update text content
function setLanguage(language) {
    if (language === "arabic") {
        submittxt1.innerHTML = "شكرا لك";
        submittxt2.innerHTML = "تم إرسال ردك بنجاح";
        button.value = "قم بزيارة موقعنا";
    } else if (language === "english") {
        submittxt1.innerHTML = "Thank you";
        submittxt2.innerHTML = "Your survey has been submitted successfully";
        button.value = " Visit our website";
    }
}