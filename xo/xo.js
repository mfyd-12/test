    let currentPlayer = "❌"; 
    let xs=[]
    let os=[]
    const buttons = document.querySelectorAll(".call");

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        if (button.textContent === "") { 
          button.textContent = currentPlayer; 
             if(currentPlayer==="❌"){
              xs.push(currentPlayer)
            currentPlayer="O"
          }else{
            os.push(currentPlayer)
            currentPlayer="❌"
          }        
        }

if(button.textContent==="!")      });
    });
