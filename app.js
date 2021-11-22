const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");

plusButton.addEventListener("click", function(){
    // console.log('plus button clicked')
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("placeholder", "Value 1");
    document.body.appendChild(x);
    var plus = document.createElement("P");
    var sign = document.createTextNode("+");
    plus.appendChild(sign);
    document.body.appendChild(plus);
    var y = document.createElement("INPUT");
    y.setAttribute("type", "text");
    y.setAttribute("placeholder", "Value 2");
    document.body.appendChild(y);
})

minusButton.addEventListener("click", function(){
    // console.log('plus button clicked')
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("placeholder", "Value 1");
    document.body.appendChild(x);
    var minus = document.createElement("P");
    var sign = document.createTextNode("-");
    minus.appendChild(sign);
    document.body.appendChild(minus);
    var y = document.createElement("INPUT");
    y.setAttribute("type", "text");
    y.setAttribute("placeholder", "Value 2");
    document.body.appendChild(y);
})

multiplyButton.addEventListener("click", function(){
    // console.log('plus button clicked')
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("placeholder", "Value 1");
    document.body.appendChild(x);
    var multiply = document.createElement("P");
    var sign = document.createTextNode("*");
    multiply.appendChild(sign);
    document.body.appendChild(multiply);
    var y = document.createElement("INPUT");
    y.setAttribute("type", "text");
    y.setAttribute("placeholder", "Value 2");
    document.body.appendChild(y);
})

divideButton.addEventListener("click", function(){
    // console.log('plus button clicked')
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("placeholder", "Value 1");
    document.body.appendChild(x);
    var divide = document.createElement("P");
    var sign = document.createTextNode("/");
    divide.appendChild(sign);
    document.body.appendChild(divide);
    var y = document.createElement("INPUT");
    y.setAttribute("type", "text");
    y.setAttribute("placeholder", "Value 2");
    document.body.appendChild(y);
})