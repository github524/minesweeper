// global variables
let container = document.getElementById("container");
let go = document.getElementById("go");
let menuBar = document.getElementById('menuBar')
let msgContainer = document.getElementById('msgContainer')
let endGameMsg = document.getElementById('endGameMsg')
let fireworks = document.getElementById("fireworks")
let sqRoot = 0;
let choice = 0;
let mineBoxArray = []
let boardBoxesArray = []
let boxZero;
let numOfMines = 0;
let countdown;
let containerHeight;
let containerSize;

// event handlers
go.addEventListener("click", createGame);

// clear the board and reset the game
function resetGame() {
    // reset global variables and clear out arrays
    mineBoxArray = []
    countdown = 0;
    boxZero = 0;
    msgContainer.style.display = '';
    
    boardBoxesArray = [];
    container.style.width = '';

  // while the board has a box in it, remove the box
  while (container.firstChild) {
    container.removeChild(container.firstChild);
    // hide the board
    container.style.backgroundColor = "white";

  } // end while loop

}

function createGame() {
  // clear the grid
  resetGame();

  // find value of board, ie: number of boxes in grid
  choice = parseInt(document.getElementById("board").value);
  // hide fireworks
  fireworks.style.display = "";

    // find value for number of mines
  numOfMines = parseInt(document.getElementById('numOfMines').value);
  //find square root of board size
  sqRoot = parseInt(Math.sqrt(choice));
  // Variables
  let newBox; // box created during the loop
  // loop through all boxes
  for (let i = 1; i <= choice; i++) {
    //create a new div each iteration
    newBox = document.createElement("div");
    // assign unique ID's and class names to each
    newBox.id = i;
    // newBox.className = 'gameBox'
    // give a number to each box textContent ,change later
    newBox.textContent = 0;
    newBox.style.cursor = 'pointer';
    newBox.style.border = '1px solid white'
    // add all the boxes to the html in the grid/ container
    container.appendChild(newBox);
    // push all boxes into a global variable, array
    boardBoxesArray.push(newBox)


  } // end for

  // set the container width, ie: the size of the game board
  // TO DO: change this to be more dynamic
  // TO DO: individual box width will need ot be dynamic also
  
  

    if (choice === 81) {
      containerSize = "417px";
      } else if(choice === 100) {
          containerSize = "450px";
      } else {
          containerSize = "500px";
      }  

  container.style.width = containerSize;
  msgContainer.style.width =containerSize;
  menuBar.style.width =containerSize;
  container.style.backgroundColor = "DodgerBlue";
  container.className = 'w3-animate-zoom';


  countdown = (choice - boxZero) - numOfMines

  // Select random boxes that have mines
  for (i = 0; i < numOfMines; i++) {
    rndIndex2 = Math.floor(Math.random() * choice) + 1;
    if(mineBoxArray.includes(rndIndex2)) {
        numOfMines +=1
        rndIndex2 = Math.floor(Math.random() * choice) + 1;
    } else {
        
        mineBoxArray.push(rndIndex2)
    } // end if   
    
} //end for loop



    for (let i = 0; i < mineBoxArray.length; i++) {
        // let boxString = mineBoxArray[i]
        let boxId = parseInt(mineBoxArray[i])
    
let right =document.getElementById(boxId + 1)
let down = document.getElementById(boxId + sqRoot)
let downR = document.getElementById(boxId + sqRoot + 1)
let left = document.getElementById(boxId - 1)
let upOne = document.getElementById(boxId - sqRoot)
let downL = document.getElementById(boxId + sqRoot - 1)
let upL = document.getElementById(boxId - (sqRoot + 1))
let upR = document.getElementById(boxId - (sqRoot - 1))


    if (boxId === 1) {
        // get first box
        topLeftCorner()
      } else if (boxId > 1 && boxId < sqRoot) {
        // get 2-5
        eitherSide()
        threeBelow();
      } else if (boxId === sqRoot) {
        // get 6
        topRightCorner();
      } else if (boxId === choice - (sqRoot - 1)) {
        //get bottom left corner 31
        threeRightCorner();
      } else if (boxId % sqRoot === 1) {
        //get left column 7-25
        threeRightCorner();
        downAndDownRight()
      } else if (boxId === choice) {
        // get bottom right corner, 36
        bottomRightCorner();
      } else if (boxId % sqRoot === 0) {
        //right column 12 - 30
        bottomRightCorner();
        downAndDownLeft()
      } else if (boxId > choice - (sqRoot + 1) && boxId < choice) {
        // get bottom row, 32-35
        threeAbove();
        eitherSide();
      } else {
        // default for all boxes not on the edge of the board
        threeAbove();
        threeBelow();
        eitherSide();
      }

      

 

function threeBelow() {
  down.textContent = parseInt(down.textContent) + 1;
  downR.textContent = parseInt(downR.textContent) + 1;
  downL.textContent = parseInt(downL.textContent) + 1;
}
function threeAbove() {
  upOne.textContent = parseInt(upOne.textContent) + 1;
  upR.textContent = parseInt(upR.textContent) + 1;
  upL.textContent = parseInt(upL.textContent) + 1;
}
function eitherSide() {
  right.textContent = parseInt(right.textContent) + 1;;
  left.textContent = parseInt(left.textContent) + 1;;
}
function threeRightCorner() {
  right.textContent = parseInt(right.textContent) + 1;
  upOne.textContent = parseInt(upOne.textContent) + 1;
  upR.textContent = parseInt(upR.textContent) + 1;
}

function bottomRightCorner() {
  left.textContent = parseInt(left.textContent) + 1;
  upOne.textContent = parseInt(upOne.textContent) + 1;
  upL.textContent = parseInt(upL.textContent) + 1;
}

function topRightCorner(){
    left.textContent = parseInt(left.textContent) + 1;
    down.textContent = parseInt(down.textContent) + 1;
    downL.textContent = parseInt(downL.textContent) + 1;
}

function topLeftCorner() {
    right.textContent = parseInt(right.textContent) + 1;
    down.textContent = parseInt(down.textContent) + 1;
    downR.textContent = parseInt(downR.textContent) + 1;
}

function downAndDownRight() {
    down.textContent = parseInt(down.textContent) + 1;
    downR.textContent = parseInt(downR.textContent) + 1;
}

function downAndDownLeft() {
    down.textContent = parseInt(down.textContent) + 1;
    downL.textContent = parseInt(downL.textContent) + 1;
}


} // end for


for(let i = 0; i < mineBoxArray.length; i++) {
    let mineBox = document.getElementById(mineBoxArray[i])
    mineBox.textContent = 'x'
    mineBox.className = 'blackBox'


}
// manage the boxes with a zero (0)
let zeroArray = []
for(let i = 0; i < boardBoxesArray.length; i++){
    if(boardBoxesArray[i].textContent === '0'){
        boardBoxesArray[i].className = 'whiteBox'
        boardBoxesArray[i].style.color = 'white'
        boxZero += 1
        boardBoxesArray[i].style.cursor = 'not-allowed'
        
        zeroArray.push(boardBoxesArray[i].id)

} else {
    boardBoxesArray[i].className = 'blackBox'
    // --------------------------

    // Add event listenr for clicks on the boxes to start the game
    boardBoxesArray[i].addEventListener("click", startGame);

    // --------------------------
}

} // end for loop

// pass an array of the boxes on the board to neighbours function
        neighbours(zeroArray)

containerHeight = container.clientHeight
availableBoxes = document.getElementsByClassName('blackBox')


} // end createGame function


function neighbours(array){
    let zeroNeighboursArray = []
for(let i = 0; i < array.length; i++) {   

        let intValue = parseInt(array[i])


        if (intValue === 1) {
        // get first box
        right = intValue + 1;
        down  = intValue +  parseInt(sqRoot);
        downR = intValue +  parseInt(sqRoot) + 1;

        zeroNeighboursArray.push(right, down, downR)

      } else if (intValue> 1 && intValue< sqRoot) {
        // get 2-5
        right = intValue + 1;
        left  = intValue - 1;
        down  = intValue +  parseInt(sqRoot);
        downR = intValue +  parseInt(sqRoot) + 1;
        downL = intValue +  parseInt(sqRoot) - 1;

        zeroNeighboursArray.push(right, left, down, downR, downL)

      } else if (intValue=== sqRoot) {
        // get 6
        down  = intValue +  parseInt(sqRoot);
        downL = intValue +  parseInt(sqRoot) - 1;
        left  = intValue - 1;

        zeroNeighboursArray.push(down, downL, left)

      } else if (intValue=== choice - (sqRoot - 1)) {
        //get bottom left corner 31
        right = intValue + 1;
        upOne = intValue -  parseInt(sqRoot);
        upR   = intValue - (parseInt(sqRoot) - 1);
        
        zeroNeighboursArray.push(right, upOne, upR)

      } else if (intValue % sqRoot === 1) {
        //get left column 7-25
        upOne = intValue -  parseInt(sqRoot);
        upR   = intValue - (parseInt(sqRoot) - 1);
        down  = intValue +  parseInt(sqRoot);
        downR = intValue +  parseInt(sqRoot) + 1;
        right = intValue + 1;

        zeroNeighboursArray.push(upOne, upR, down, downR, right)

      } else if (intValue=== choice) {
        // get bottom right corner, 36
        upOne = intValue -  parseInt(sqRoot);
        left  = intValue - 1;
        upL   = intValue - (parseInt(sqRoot) + 1);
        
        zeroNeighboursArray.push(upL, left, upOne)

      } else if (intValue% sqRoot === 0) {
        //right column 12 - 30
        down  = intValue +  parseInt(sqRoot);
        left  = intValue - 1;
        upOne = intValue -  parseInt(sqRoot);
        downL = intValue +  parseInt(sqRoot) - 1;
        upL   = intValue - (parseInt(sqRoot) + 1);

        zeroNeighboursArray.push(down, left, upOne, downL, upL)

      } else if (intValue> choice - (sqRoot + 1) && intValue< choice) {
        // get bottom row, 32-35
        right = intValue + 1;
        left  = intValue - 1;
        upOne = intValue -  parseInt(sqRoot);
        upL   = intValue - (parseInt(sqRoot) + 1);
        upR   = intValue - (parseInt(sqRoot) - 1);
      
        zeroNeighboursArray.push(right, left, upOne, upL, upR)

      } else {
        // default for all boxes not on the edge of the board
        right = intValue + 1;
        down  = intValue +  parseInt(sqRoot);
        downR = intValue +  parseInt(sqRoot) + 1;
        left  = intValue - 1;
        upOne = intValue -  parseInt(sqRoot);
        downL = intValue +  parseInt(sqRoot) - 1;
        upL   = intValue - (parseInt(sqRoot) + 1);
        upR   = intValue - (parseInt(sqRoot) - 1);

        zeroNeighboursArray.push(right, down, downR, left, upOne, downL,upL, upR)
      }


} // end for

    // style each neighbour of a zero box to background white
    for(let i = 0; i < zeroNeighboursArray.length; i++){
        
    let boxByZero = document.getElementById(zeroNeighboursArray[i])
    boxByZero.className = 'whiteBox';
    boxByZero.style.cursor = ''
    boxByZero.removeEventListener('click',startGame)
        
    } // end for


} // end nextToZero function






// startGame Function for clicking on boxes to ge here:
function startGame() {
    //when you click on a box...
    container.classList.remove("w3-animate-zoom");

    // if you click on a mine...
    if(this.textContent === 'x'){
        this.style.border = '';
        this.className = "w3-spin boom"
        this.removeEventListener('click',startGame)
        this.style.cursor = ''
        this.classList.remove("blackBox");
        numOfMines -= 1
        msgContainer.style.display = 'block'
        endGameMsg.textContent = 'GAME OVER :('
        // endGameMsg.style.lineHeight = containerHeight + "px";

            for(let i =0; i<boardBoxesArray.length; i++){
        boardBoxesArray[i].removeEventListener('click',startGame)

    }
    } else {
        this.className = 'whiteBox'
        this.removeEventListener('click',startGame)
        this.style.cursor = ''
        // this.classList.remove("blackBox");

    }
        // availableBoxes = document.getElementsByClassName('blackBox')
        countdown = availableBoxes.length - numOfMines

    if( countdown === 0){
        msgContainer.style.display = 'block'
        endGameMsg.textContent = 'CONGRATULATIONS !!'
        document.getElementById("fireworks").style.display = "block";
        for(let i =0; i<boardBoxesArray.length; i++){
        boardBoxesArray[i].removeEventListener('click',startGame)

    }
    }


}