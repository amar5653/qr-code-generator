const inputBox = document.getElementById("input-box");
const img = document.getElementById("qr-img");
const imgBox = document.querySelector(".img-box");
const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";


function createQRCode(){
    if(inputBox.value.length > 0){
        img.src=url + inputBox.value;
        imgBox.classList.add("show-img");
    }else{
   inputBox.classList.add("error");
   setTimeout(()=>{
    inputBox.classList.remove("remove");
   },1000)
    }
}