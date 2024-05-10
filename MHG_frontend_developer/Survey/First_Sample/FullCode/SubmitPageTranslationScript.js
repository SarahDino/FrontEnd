// identifi evrey elment you want to translate

let submittxt1 = document.getElementById("submittxt1");
let submittxt2 = document.getElementById("submittxt2");
let button = document.getElementById("button");

//get language from storage
onload = ()=>{
    onsubmitlanguage(localStorage.getItem("Lang"));
};

//arabic trasnlation
function onsubmitlanguage(getLanuage){
if(getLanuage === "arabic"){

    submittxt1.innerHTML="شكرا لك";
    submittxt2.innerHTML="تم إرسال ردك بنجاح";
    button.value = "قم بزيارة موقعنا";


//english trasnlation
}else if(getLanuage ==="english"){
    submittxt1.innerHTML="Thank you";
    submittxt2.innerHTML="Your survey has been submitted successfully";
    button.value = " Visit our website";

}}

