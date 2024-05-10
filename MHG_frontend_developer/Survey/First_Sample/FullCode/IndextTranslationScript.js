// identifi evrey elment you want to translate

//buttons to switch the language
let arabic = document.getElementById("arabic");
let english = document.getElementById("english");


let q1 = document.getElementById("q1");
let q2 = document.getElementById("q2");
let q3 = document.getElementById("q3");


const stylingen = document.getElementById("style");
const stylsubmit = document.getElementById("survey-form");


var quality1 = document.getElementById("quality1");
var value1 = document.getElementById("value1");
var availability1 = document.getElementById("availability1");
var help1 = document.getElementById("help1");
var speed1 = document.getElementById("speed1");
var requirements1 = document.getElementById("requirements1");
var aftersales1 = document.getElementById("aftersales1");
var maintenance1 = document.getElementById("maintenance1");
var delivery1 = document.getElementById("delivery1");
var Responsiveness1 = document.getElementById("Responsiveness1");
var Trustworthiness1 = document.getElementById("Trustworthiness1");


//onclick event to switch the language to arabic
arabic.onclick = ()=>{
    setLanugage("arabic");
//save it in localstorage of the user browser
    localStorage.setItem("Lang","arabic");
};
//onclick event to switch the language to english
english.onclick = ()=>{
    setLanugage("english");
    //save it in localstorage of the user browser
    localStorage.setItem("Lang","english");
};
//get language from storage if the user reload the page
onload = ()=>{
    setLanugage(localStorage.getItem("Lang"));
};

//arabic trasnlation
function setLanugage(getLanuage){
if(getLanuage === "arabic"){

    q1.innerHTML = "كيف تقيم تجربتك معنا ؟ ";
    q2.innerHTML = "شكراً لك على تقييمك. هل يمكنك التوضيح أكثر حول الأسباب وراء تقييمك لخدماتنا؟ (اختياري)";
    q3.innerHTML = "هل هناك أي شيء يمكننا تحسينه لتعزيز رضاك كعميل؟ (اختياري)";


    submit1.value = "إرسال";
    submit2.value = "إرسال";


    quality1.innerHTML = "جودة منتجاتنا";
    value1.innerHTML = "قيمة المنتج مقابل المال المدفوع";
    availability1.innerHTML = "توفر المنتجات لدينا";
    help1.innerHTML = "موظفينا لديهم المعرفة الكافية لخدمتك";
    speed1.innerHTML = "سرعة استجابة موظفينا لخدمتك";
    requirements1.innerHTML = "المنتج متناسب مع متطلباتك";
    aftersales1.innerHTML = "جودة خدمة ما بعد البيع";
    maintenance1.innerHTML = "جودة خدمات الصيانه";
    delivery1.innerHTML = "سرعة توصيل الطلبية";
    Responsiveness1.innerHTML = "الاستجابة للاستفسارات / الشكاوى";
    Trustworthiness1.innerHTML = "المصداقية / الشفافية";

    stylingen.href = "ArabicStyle.css";


//english trasnlation
}else if(getLanuage ==="english"){

    q1.innerHTML = "How would you rate your experience with us ?";
    q2.innerHTML = "Thank you for providing your feedback. Would you please elaborate on the reasons behind your assessment of our services? (optional)";
    q3.innerHTML = "Please let us know how we can enhance your experience with us ? (optional)";


    submit1.value = "Submit";
    submit2.value = "Submit";

    
    quality1.innerHTML = "The quality of our products ";
    value1.innerHTML = "The value of the product for the money paid";
    availability1.innerHTML = "The availability of our products";
    help1.innerHTML = "Our Staff possess sufficent Knowledge to assist you";
    speed1.innerHTML = "The responsiveness of our Staff in serving you";
    requirements1.innerHTML = "The product is suitable for your requirements";
    aftersales1.innerHTML = "Quality of after-sales service";
    maintenance1.innerHTML = "Quality of maintenance";
    delivery1.innerHTML = "Speed of delivery/service";
    Responsiveness1.innerHTML = "Responsiveness to inquiries/complaints";
    Trustworthiness1.innerHTML = "Trustworthiness/transparency";

    stylingen.href = "EnglishStyle.css";
}}


