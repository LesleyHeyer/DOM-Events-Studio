// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init(){

    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const flightStatus = document.getElementById("flightStatus");
    const takeOffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const missionAbortButton = document.getElementById("missionAbort");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");

    let imgObj = document.getElementById("rocket");
    imgObj.style.position = 'absolute';
    imgObj.style.left = '0px';
    imgObj.style.bottom = '0px';
    let movement;

    const shuttleBackground = document.getElementById("shuttleBackground");


    function confirmTakeOff() {
        let response = window.confirm("Is the shuttle ready?");
        if (response) {
          flightStatus.innerHTML = "Shuttle in flight."
          shuttleBackground.style.backgroundColor = "blue"
          shuttleHeight.innerHTML = "10000" 
        } 
      } 
      takeOffButton.addEventListener("click", confirmTakeOff);

      function landingConfirm() {
        let alert = window.confirm("The shuttle is landing. Landing gear engaged.");
        if (alert) {
          flightStatus.innerHTML = "The shuttle has landed."
          shuttleBackground.style.backgroundColor = ""
          shuttleHeight.innerHTML = "0"
        } 
      } 
      landingButton.addEventListener("click", landingConfirm);

      function abortConfirm() {
        let alertAbort = window.alert("Confirm that you want to abort the mission.");
          flightStatus.innerHTML = "Mission Aborted."
          shuttleBackground.style.backgroundColor = ""
          shuttleHeight.innerHTML = "0"
      } 
      missionAbortButton.addEventListener("click", abortConfirm);


      function upDirection(){
          let x = Number(shuttleHeight.innerHTML);
          shuttleHeight.innerHTML = (x + 10000).toString();
          movement = parseInt(imgObj.style.bottom) + 10 + 'px';
          imgObj.style.bottom = movement;
          
      }
      upButton.addEventListener("click", upDirection);

      function downDirection(){
        let x = Number(shuttleHeight.innerHTML);
        if (x >= 10000) {
        shuttleHeight.innerHTML = (x - 10000).toString();
        movement = parseInt(imgObj.style.bottom) - 10 + 'px';
        imgObj.style.bottom = movement;
        }
    }
      downButton.addEventListener("click", downDirection);

      leftButton.addEventListener("click", function() {
        movement = parseInt(imgObj.style.left) - 10 + 'px';
        imgObj.style.left = movement;
      });

      
      rightButton.addEventListener("click", function() {
        movement = parseInt(imgObj.style.left) + 10 + 'px';
        imgObj.style.left = movement;
      });
}

window.addEventListener("load", init);


