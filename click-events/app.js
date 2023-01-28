let button = document.querySelector("#degistir").addEventListener("click",function run(){
    let label = document.querySelector("#icerik");
    let yazi = document.querySelector("#form-text").value;
    label.innerHTML = yazi;
});

