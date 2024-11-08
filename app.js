let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector('#resetBtn');
let newButton = document.querySelector('#newButton');
let massageContiner = document.querySelector('.msg-continer');
let massage = document.querySelector('#winner')

let turn0 = true //playerX, playerO

let winPattern =[[0,1,2],[1,4,7],[0,4,8],[0,3,6],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

boxes.forEach((box) => {
   box.addEventListener('click', () => {
     console.log("Box got click");
     if(turn0) {
      box.innerText = "X";
      turn0 = false;
     }else {
      box.innerText = "0";
      turn0 = true;
     }
     box.disabled = true;
     checkWinner();
   });
});

const disableBoxes = () => {
    for(box of boxes){
      box.disabled= true
    }
}

const enableBoxes = () => {
  for(let box of boxes){
    box.disabled= false;
    box.innerText= "";
  }
}

const showWinner = (winner) =>{
  massage.innerText = `Congulation, Winner is ${winner}`
  massageContiner.classList.remove('hide');
  disableBoxes();
}

const checkWinner = () => {
  for(let pattern of winPattern){
    let positionOne = boxes[pattern[0]].innerText;
    let positionTwo = boxes[pattern[1]].innerText;
    let positionThree = boxes[pattern[2]].innerText;

    if(positionOne != "" && positionTwo != "" && positionThree != ""){
        if(positionOne === positionTwo && positionTwo === positionThree){
          console.log ("Winner", positionOne);
          showWinner(positionOne);
        }
    }
    // console.log(pattern[0], pattern [1], pattern[2]);
    // console.log(boxes[pattern[0]], boxes[pattern [1]], boxes[pattern[2]]);
  }
}

const resetGame = () => { 
  turn0 = true;
  enableBoxes();
  massageContiner.classList.add('hide');
}

newButton.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);