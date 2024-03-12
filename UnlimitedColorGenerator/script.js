// Generate a random hex number

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    color = "#";
    for (let i=0; i<6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
        
    }
    return color;
};

let intervalId;

function startChangingColor() {
     if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000);
     }
    function changeBgColor() {
      let newColor = randomColor();
        document.body.style.backgroundColor = newColor;
        h2.textContent = `${newColor}`;
        console.log(newColor);
    }
}
function stopChangingColor() {
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);

const colorCode = document.querySelector("#colorCode");
 const h2 = document.createElement("h2");
 colorCode.appendChild(h2);

 