    let currentPlayer = "❌"; 

    const buttons = document.querySelectorAll(".call");

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        if (button.textContent === "") { 
          button.textContent = currentPlayer; 
          currentPlayer = currentPlayer === "❌" ? "⭕" : "❌";
        }
      });
    });
