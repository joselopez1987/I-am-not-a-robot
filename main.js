const checkbox = document.getElementById("checkbox");
const submitBtn = document.querySelector("button[type=submit]");

//disable checkbox
checkbox.disabled = true;
submitBtn.disabled = true;


const elements = document.querySelectorAll(".element");
const selectColor = document.getElementById("SelectColor");

console.log(elements);

//Asign color to Elements
elements.forEach(function(elements) {
    const color = getRandomColor();

    elements.style.backgroundColor = color;
    elements.innerHTML = color;
    selectColor.innerHTML = color;
});

//Generte random color Function
function getRandomColor() {
    const letter = "0123456789ABCDEF"
    let color = "#";
    for(let i = 0; i<6; i++){
        color += letter[Math.floor(Math.random() * 16)]
    }

    return color;
}


//Check if right color

elements.forEach(function(element){
    element.addEventListener('click', function(){
        if(element.innerHTML === selectColor.innerHTML)
        {
        alert("You are human!")
        checkbox.checkbox = true;
        submitBtn.disabled = false;
        submitBtn.classList.remove("btn-light");
        submitBtn.classList.add("btn-success");
        console.log(submitBtn);
        }else{
            alert("Please verify that you are human");
            location.reload(true);
            
        }
    })
})

console.log(getRandomColor());
