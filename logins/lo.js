const form = document.querySelector('form');
// inputs
const usernameInput = document.getElementById('usernam');
const passwordInput = document.getElementById('password');
const Email = document.getElementById("Email");
const phone = document.getElementById("phone");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const containr = document.querySelector(".container");



const cv = document.getElementById("cv");
const tb = document.getElementById("tb");
const bt = document.querySelector(".bt");  
const sle = document.getElementById("country");

let i = 0;

const countries = [
  { code: "US", dial: "+1", flag: "https://flagcdn.com/us.svg" },
  { code: "UK", dial: "+44", flag: "https://flagcdn.com/gb.svg" },
  { code: "EG", dial: "+20", flag: "https://flagcdn.com/eg.svg" },
  { code: "SA", dial: "+966", flag: "https://flagcdn.com/sa.svg" },
  { code: "AE", dial: "+971", flag: "https://flagcdn.com/ae.svg" },
  { code: "IN", dial: "+91", flag: "https://flagcdn.com/in.svg" }
];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = {
    username: usernameInput.value,
    password: passwordInput.value,
    Email: Email.value,
    phone: phone.value,
    firstName: firstName.value,
    lastName: lastName.value
  };
fetch('http://localhost:3000/sign', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }, 
   body: JSON.stringify(formData)
  })
  .then(response => {
    console.log(response.status);
    if (response.status === 200) {
      containr.style.display = "none";}
  })

});

cv.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});
const country = countries[i];
  sle.innerHTML =
        `<span class="yu" value="${country.dial}">${country.code} ${country.dial} 
      <img class="img" src="${country.flag}"/></span>`

bt.addEventListener("click", () => {
  i = i+1;
  const country = countries[i];
  sle.innerHTML =
        `<span class="yu" value="${country.dial}">${country.code} ${country.dial} 
      <img class="img" src="${country.flag}"/></span>`
  console.log(i);
})