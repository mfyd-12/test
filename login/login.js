
const form = document.querySelector('form');
const usernameInput = document.getElementById('user');
const passwordInput = document.getElementById('pass');
const cv=document.getElementById("cv")


addEventListener('submit', (event) => {
    event.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;
    const age = 22;
    console.log(username, password);
    fetch('http://localhost:3000/logn', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password,age }),

    })
    // Here you can add your login logic, e.g., sending data to a server
});
cv.addEventListener("click",()=>{
    if(passwordInput.type==="password"){
        passwordInput.type="text" 
    }else{
        passwordInput.type="password"
    }
})