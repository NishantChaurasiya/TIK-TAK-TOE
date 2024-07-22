const boxes=document.querySelectorAll(".boxes");
const btnX=document.querySelector("#btnX");
const btnY=document.querySelector("#btnY");
const msg=document.querySelector(".msg");
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

let turnX=true;
btnX.setAttribute("class","turn")
boxes.forEach((box) => {
  box.addEventListener("click",()=>{
    if(turnX==true){
      box.innerText="X";
      turnX=false;
      btnX.classList.remove("turn");
      btnY.setAttribute("class","turn")
    }else{
      box.innerText="Y";
      turnX=true; 
      btnY.classList.remove("turn");
      btnX.setAttribute("class","turn")
    };
      box.disabled=true;  
      checkWinner();
  });
});
const checkWinner=()=>{
  for(let pattern of winPatterns ){
      let value1=boxes[pattern[0]].innerText;
      let value2=boxes[pattern[1]].innerText;
      let value3=boxes[pattern[2]].innerText;
      
      if(value1!=""&&value2!=""&&value3!=""){
        if(value1===value2&&value2===value3){
          console.log(`winner is ${value1}`)
          showWinner(value1);
        };
      };
  };
};
const showWinner=(winner)=>{
 msg.innerText=`congratulations, Winner is ${winner}`;
 msg.classList.remove("hide");
 disabledBtn();
}
const disabledBtn=()=>{
  for(let box of boxes){
    box.setAttribute("class","disabled");
    box.disabled=true;
  };
};
