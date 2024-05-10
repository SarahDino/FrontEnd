// Buttons to switch the language
let arabic = document.getElementById("arabic");
let english = document.getElementById("english");

// Elements to translate
let q1 = document.getElementById("q1");
let q2 = document.getElementById("q2");
let q3 = document.getElementById("q3");
let q4 = document.getElementById("q4");
let q5 = document.getElementById("q5");
let q6 = document.getElementById("q6");
let q7 = document.getElementById("q7");
let q8 = document.getElementById("q8");

const submit = document.getElementById("submit");

const stylingen = document.getElementById("style");

// Event listeners to switch the language to Arabic
arabic.onclick = () => {
    setLanguage("arabic");
    localStorage.setItem("Lang", "arabic");
};

// Event listeners to switch the language to English
english.onclick = () => {
    setLanguage("english");
    localStorage.setItem("Lang", "english");
};

// Get language from storage if the user reloads the page
window.onload = () => {
    setLanguage(localStorage.getItem("Lang"));
};

// Function to set language and update text content
function setLanguage(language) {
    if (language === "arabic") {
        q1.innerHTML = "تقييمك لجودة منتجاتنا";
        q2.innerHTML = "تقييمك لجودة المنتج مقارنة بالسعر؟";
        q3.innerHTML = "احتمالية توصيتك بمنتجاتنا لعائلتك وأصدقائك؟";
        q4.innerHTML = "تقييمك لسرعة استجابة فريقنا لاحتياجاتك واستفساراتك؟";
        q5.innerHTML = "تقييمك لخبرة ومعرفة فريقنا بالمنتجات؟";
        q6.innerHTML = "تقييمك لخدماتنا ما بعد البيع؟";
        q7.innerHTML = "هل تجد منتجاتنا قابلة للتخصيص حسب احتياجك؟";
        q8.innerHTML = "هل لديك أي اقتراح لتطوير خدماتنا؟";
        submit.innerHTML = "إرسال";
        stylingen.href = "ArabicStyle.css";


    } else if (language === "english") {
        q1.innerHTML = "How would you rate the quality of our products?";
        q2.innerHTML = "How would you rate the value you receive for the money you pay?";
        q3.innerHTML = "How likely are you to recommend our products to your friends and family?";
        q4.innerHTML = "How would you rate the speed of our team's response to your needs and inquiries?";
        q5.innerHTML = "How would you rate our team's knowledge of our products?";
        q6.innerHTML = "How would you rate our after-sales services?";
        q7.innerHTML = "Do you find our products customizable to your needs?";
        q8.innerHTML = "Any suggestions to improve our services?";
        submit.innerHTML = "Submit";
        stylingen.href = "EnglishStyle.css";
    }
}


submit.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    window.location.href = 'onsubmit.html';
});