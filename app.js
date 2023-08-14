box=document.getElementById("box")
let empty="";
box.value=empty;
let mybtn7=document.getElementById("seven")
let mybtn8=document.getElementById("eight")
let mybtn9=document.getElementById("nine")
let mybtn4=document.getElementById("four")
let mybtn5=document.getElementById("five")
let mybtn6=document.getElementById("six")
let mybtn1=document.getElementById("one")
let mybtn2=document.getElementById("two")
let mybtn3=document.getElementById("three")
let mybtn0=document.getElementById("zero")
let mybtn_decimal=document.getElementById("decimal")
let mybtn_equal=document.getElementById("equal")
let mybtn_divide=document.getElementById("divide")
let mybtn_into=document.getElementById("into")
let mybtn_minus=document.getElementById("minus")
let mybtn_plus=document.getElementById("plus")
let mybtn_clear=document.getElementById("clear")

mybtn7.addEventListener("click",()=>{
    box.value+=mybtn7.textContent
})
mybtn8.addEventListener("click",()=>{
    box.value+=mybtn8.textContent
})
mybtn9.addEventListener("click",()=>{
    box.value+=mybtn9.textContent
})
mybtn_into.addEventListener("click",()=>{
    box.value+='*'
})
mybtn4.addEventListener("click",()=>{
    box.value+=mybtn4.textContent
})
mybtn5.addEventListener("click",()=>{
    box.value+=mybtn5.textContent
})
mybtn6.addEventListener("click",()=>{
    box.value+=mybtn6.textContent
})
mybtn_minus.addEventListener("click",()=>{
    box.value+=mybtn_minus.textContent
})
mybtn1.addEventListener("click",()=>{
    box.value+=mybtn1.textContent
})
mybtn2.addEventListener("click",()=>{
    box.value+=mybtn2.textContent
})
mybtn3.addEventListener("click",()=>{
    box.value+=mybtn3.textContent
})
mybtn_plus.addEventListener("click",()=>{
    box.value+=mybtn_plus.textContent
})
mybtn0.addEventListener("click",()=>{
    box.value+=mybtn0.textContent
})
mybtn_decimal.addEventListener("click",()=>{
    box.value+=mybtn_decimal.textContent
})
mybtn_divide.addEventListener("click",()=>{
    box.value+=mybtn_divide.textContent
})
mybtn_equal.addEventListener("click",()=>{
    box.value=eval( box.value);
})
mybtn_clear.addEventListener("click",()=>{
    box.value=empty;
})
