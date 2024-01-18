
let btn = document.getElementById("btn")

btn.addEventListener("click", clickBtn)

function clickBtn(){
    let num1 = document.getElementById("num1").value
let num2 = document.getElementById("num2").value
document.getElementById("ans").innerText = parseInt(num1) + parseInt(num2)
   console.log(num1, num2)
}
