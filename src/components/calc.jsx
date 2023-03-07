export function Calc(){
    document.getElementById("button").addEventListener("click", function(){
        let number1 = document.getElementById("number1").value
        let number2 = document.getElementById("number2").value
        let awnser = document.getElementById("awnser")
        awnser.innerHTML =` The awnser is ${parseInt(number1) + parseInt(number2)}`
    })
}