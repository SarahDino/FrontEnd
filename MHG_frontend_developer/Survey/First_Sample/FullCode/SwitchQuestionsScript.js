const question1 = document.getElementById("question1");
const question2 = document.getElementById("question2");
const question3 = document.getElementById("question3");


// 2 submit buttons
const submit1 = document.getElementById("submit1");
const submit2 = document.getElementById("submit2");
let counter = 0;


submit1.addEventListener("click", (event) => {
  event.preventDefault(); //to prevent submitting
  question1.style.display = "none"; //hide question1
  question2.style.display = "block";
  question3.style.display = "block";

  counter++;  //page coutnter
  if (counter === 1) {
    const counterDiv = document.getElementById("counter");
    counterDiv.innerHTML =  (counter + 1) +" / 2 ";
  }
});


submit2.addEventListener("click", (event) => {
  event.preventDefault(); //to prevent submitting
  window.location.href = "SubmitPage.html"; //go to submit page
});

