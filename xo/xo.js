let currentPlayer = "❌"; 
let moves = 0;
let xs = [];
let os = [];

const buttons = document.querySelectorAll(".call");

const btn1 = document.getElementById("1");      
const btn2 = document.getElementById("2");      
const btn3 = document.getElementById("3");      
const btn4 = document.getElementById("4");      
const btn5 = document.getElementById("5");      
const btn6 = document.getElementById("6");      
const btn7 = document.getElementById("7");      
const btn8 = document.getElementById("8");      
const btn9 = document.getElementById("9");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    moves++;

    if (button.textContent === "") { 
      button.textContent = currentPlayer; 
      if (currentPlayer === "❌") {
        xs.push(button.id);
        currentPlayer = "O";
      } else {
        os.push(button.id);
        currentPlayer = "❌";
      }        
    }

    if (xs.length >= 3 && (
      (btn1.textContent==="❌" && btn2.textContent==="❌" && btn3.textContent==="❌") || 
      (btn4.textContent==="❌" && btn5.textContent==="❌" && btn6.textContent==="❌") ||
      (btn7.textContent==="❌" && btn8.textContent==="❌" && btn9.textContent==="❌") ||
      (btn1.textContent==="❌" && btn4.textContent==="❌" && btn7.textContent==="❌") ||
      (btn2.textContent==="❌" && btn5.textContent==="❌" && btn8.textContent==="❌") ||
      (btn3.textContent==="❌" && btn6.textContent==="❌" && btn9.textContent==="❌") ||
      (btn1.textContent==="❌" && btn5.textContent==="❌" && btn9.textContent==="❌") ||
      (btn3.textContent==="❌" && btn5.textContent==="❌" && btn7.textContent==="❌")
    )) {
      buttons.forEach(b => b.textContent === "❌" ? b.classList.add(".bak") : "");
      setTimeout(() => {
        buttons.forEach(b => b.textContent = "");
        buttons.forEach(b => b.classList.remove(".bak"));
        moves = 0;
        xs = [];
        os = [];
        currentPlayer = "❌";
      }, 2000);
    }

    if (os.length >= 3 && (
      (btn1.textContent==="O" && btn2.textContent==="O" && btn3.textContent==="O") || 
      (btn4.textContent==="O" && btn5.textContent==="O" && btn6.textContent==="O") ||
      (btn7.textContent==="O" && btn8.textContent==="O" && btn9.textContent==="O") ||
      (btn1.textContent==="O" && btn4.textContent==="O" && btn7.textContent==="O") ||
      (btn2.textContent==="O" && btn5.textContent==="O" && btn8.textContent==="O") ||
      (btn3.textContent==="O" && btn6.textContent==="O" && btn9.textContent==="O") ||
      (btn1.textContent==="O" && btn5.textContent==="O" && btn9.textContent==="O") ||
      (btn3.textContent==="O" && btn5.textContent==="O" && btn7.textContent==="O")
    )) {
      buttons.forEach(b => b.textContent === "O" ? b.classList.add("bak") : "");
      setTimeout(() => {
        buttons.forEach(b => b.textContent = "");
        buttons.forEach(b => b.classList.remove("bak"));
        moves = 0;
        xs = [];
        os = [];
        currentPlayer = "❌";
      }, 2000);
    }

  });
});
