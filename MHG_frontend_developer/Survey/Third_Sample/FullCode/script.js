let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let submit = document.getElementById("submit");

let description = document.getElementById("description");
let q1 = document.getElementById("q1");
let q2 = document.getElementById("q2");
let q3 = document.getElementById("q3");


const stylingen = document.getElementById("style");
const stylsubmit = document.getElementById("survey-form");

let submittxt = document.getElementById("submittxt");
let button = document.getElementById("button");

let nextext1 = document.getElementById("nextext1");
let nextext2 = document.getElementById("nextext2");
let prevtext1 = document.getElementById("prevtext1");

var quality1 = document.getElementById("quality1");
var value1 = document.getElementById("value1");
var availability1 = document.getElementById("availability1");
var speed1 = document.getElementById("speed1");
var attitude1 = document.getElementById("attitude1");
var help1 = document.getElementById("help1");
var requirements1 = document.getElementById("requirements1");
var aftersales1 = document.getElementById("aftersales1");
var maintenance1 = document.getElementById("maintenance1");
var delivery1 = document.getElementById("delivery1");
var Responsiveness1 = document.getElementById("Responsiveness1");
var Trustworthiness1 = document.getElementById("Trustworthiness1");
var easy1 = document.getElementById("easy1");


arabic.onclick = ()=>{
    setLanugage("arabic");
    localStorage.setItem("Lang","arabic");
};

english.onclick = ()=>{
    setLanugage("english");
    localStorage.setItem("Lang","english");
};

onload = ()=>{
    setLanugage(localStorage.getItem("Lang"));
};
function setLanugage(getLanuage){
if(getLanuage === "arabic"){

    description.innerHTML = "اخبرنا عن تجربتك معنا";
    q1.innerHTML = "كيف تقيم رضاك العام عن تعاملك مع شركتنا ومنتجاتنا/خدماتنا؟";
    q2.innerHTML = "بناءا على اجابتك السابقة ، نرجو منك اختيار الاسباب التي أثرت على قرارك ؟";



    q3.innerHTML = " هل هناك أي شيء يمكننا تحسينه لتعزيز رضاك كعميل؟";
    submit.value = "إرسال";
    
    
    nextext1.innerHTML = "التالي";
    prevtext1.innerHTML = "السابق";
    nextext2.innerHTML = "التالي";

    quality1.innerHTML = "جودة منتجاتنا";
    value1.innerHTML = "قيمة المنتج مقابل المال المدفوع";
    availability1.innerHTML = "توفر المنتجات لدينا";
    speed1.innerHTML = "سرعة استجابت موظفينا لخدمتكم";
    help1.innerHTML = "موظفينا لديهم المعلومات الواضحة لإفادتك";
    attitude1.innerHTML = "تعامل موظفينا معك";
    requirements1.innerHTML = "المنتج متناسب مع متطلباتك";
    aftersales1.innerHTML = "جودة خدمة ما بعد البيع";
    maintenance1.innerHTML = "جودة خدمات الصيانه";
    delivery1.innerHTML = "سرعة توصيل البضاعة";
    Responsiveness1.innerHTML = "الاستجابة للاستفسارات / الشكاوي";
    Trustworthiness1.innerHTML = "المصداقية / الشفافية";
    easy1.innerHTML = "سهولة الوصول للمنتجات";


    stylingen.href = "stylear.css";



}else if(getLanuage ==="english"){

    description.innerHTML = "How was your experince with us";
    q1.innerHTML = "How would you rate your overall satisfaction with your interactions with our company and our products/services?";
    q2.innerHTML = "Based on your previous response, please select the reasons that influence your decision? ";




    q3.innerHTML = "Is there anything we could improve to enhance your satisfaction as a customer? ";
    submit.value = "Submit";


    nextext1.innerHTML = "Next";
    nextext2.innerHTML = "Next";
    prevtext1.innerHTML = "Back";

    quality1.innerHTML = "The quality of our products ";
    value1.innerHTML = "The value of the product for the money paid";
    availability1.innerHTML = "The availability of our products";
    attitude1.innerHTML = "Our employees attitude with you";
    requirements1.innerHTML = "The product is suitable for your requirements";
    aftersales1.innerHTML = "Quality of after-sales service";
    maintenance1.innerHTML = "Quality of maintenance service";
    delivery1.innerHTML = "Speed of delivery/service";
    Responsiveness1.innerHTML = "Responsiveness to inquiries/complaints";
    Trustworthiness1.innerHTML = "Trustworthiness/transparency";
    easy1.innerHTML = "The ease of finding the product you want";
    speed1.innerHTML = "Our employees respond quickly to serve you";
    help1.innerHTML = "Our employees have accurate information";


    stylingen.href = "stylen.css";


}}



  submit.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    window.location.href = 'onsubmit.html';
});