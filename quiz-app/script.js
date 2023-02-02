const quiz = new Quiz(sorular);
const ui = new UI();

ui.btn_start.addEventListener("click", () =>{
        startTimer(5);
        ui.quiz_box.classList.add("active");
        setTimeout(startTimerLine,1000);
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
})

ui.next_btn.addEventListener("click", ()=>{
    quiz.soruIndex +=1 ;
    if(quiz.sorular.length > (quiz.soruIndex + 1)){
        clearInterval(counter);
        clearInterval(counterline);
        startTimer(5);
        setTimeout(startTimerLine,1000);
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisiniGoster(quiz.soruIndex + 1 , quiz.sorular.length);
        ui.next_btn.classList.remove("show");

    }
    else if(quiz.sorular.length == (quiz.soruIndex + 1)){
        clearInterval(counter);
        clearInterval(counterline);
        startTimer(5);
        setTimeout(startTimerLine,1000);
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisiniGoster(quiz.soruIndex + 1 , quiz.sorular.length);
        ui.next_btn.classList.remove("show");
        ui.next_btn.innerHTML = "Quizi bitir";
    }
    else{
        clearInterval(counter);
        clearInterval(counterline);
        ui.quiz_box.classList.remove("active");
        ui.skor_box.classList.add("active");
        ui.skoruGoster(quiz.sorular.length , quiz.dogruCevapSayisi);

    }

})

ui.btn_quit.addEventListener("click",function(){
    window.location.reload();
})

ui.btn_replay.addEventListener("click",function(){
    quiz.soruIndex = 0;
    quiz.dogruCevapSayisi = 0; 
    ui.btn_start.click();
    ui.skor_box.classList.remove("active");
    ui.next_btn.classList.remove("show")
    ui.next_btn.textContent = "Sonraki Soru";
})

function optionSelected(option){
    clearInterval(counter);
    clearInterval(counterline);
    let cevap = option.querySelector("span b").textContent.trim();
    let soru = quiz.soruGetir();

    if(soru.cevabiKontrolEt(cevap)){
        quiz.dogruCevapSayisi += 1; 
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", ui.correctIcon);
    } 
    else{
        option.classList.add("incorrect"); 
        option.insertAdjacentHTML("beforeend", ui.inCorrectIcon);

    }
    for(let i = 0; i < ui.option_list.children.length; i++){
        ui.option_list.children[i].classList.add("disabled");
    }
    ui.next_btn.classList.add("show");
    
}


let counter;
function startTimer(time){
    counter = setInterval(timer,1000);
    function timer(){
        ui.time_second.textContent = time;
        time--;

        if(time < 0){
            clearInterval(counter);

            ui.time_text.textContent = "Süre Bitti";
            let cevap =  quiz.soruGetir().dogruCevap.trim();

            for(let option of ui.option_list.children){
                if(option.querySelector("span b").textContent.trim() == cevap){
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend", ui.correctIcon);
                }
                else{
                    option.classList.add("incorrect");        
                    option.insertAdjacentHTML("beforeend", ui.inCorrectIcon);

                }
                option.classList.add("disabled");
            }
            ui.next_btn.classList.add("show");
        }
    }

}


let counterline;
function startTimerLine() {
    let line_width = 0;

    counterline = setInterval(timer,9);
    function timer(){
        line_width += 1;
        ui.time_line.style.width = line_width +"px";

        if(line_width >549){
            clearInterval(counterline);
        }
        }
}