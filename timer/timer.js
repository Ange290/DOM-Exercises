function timer(){
    let sec = document.getElementById('second');
    let subBtn = document.getElementById('left');
    let addBtn  = document.getElementById('right');
 let currentTime = document.getElementById('currentTime');
 let start = document.getElementById('start');
 let reset = document.getElementById('reset')

 // substraction button
 let countDown;

 let sc = parseInt(currentTime.textContent);
    subBtn.addEventListener('click', function(){
       subBtn.disabled = false;
        clearInterval(countDown);
        countDown = setInterval(()=>{
             sc--;
            currentTime.textContent = sc + 's';
            if(sc >= 0){
            
                clearInterval(countDown)
            }
            if(sc == 0){
                    sc = 0;
                currentTime.textContent = sc + 's';
                subBtn.disabled = true;
            }
        },1000)
    });

    //addition button
     let countUp;
    addBtn.addEventListener('click', function(){
       
        clearInterval(countUp);
        countUp =setInterval(()=>{
            sc++;
            currentTime.textContent = sc + 's';
            if(sc <= 60){
              
                clearInterval(countUp);
            }
            if(sc == 60){
                  sc =0;
                currentTime.textContent = sc + 's';
            }
        },1000)
    })

    //start button
    let startCount;
    let running = false;
    let originalTime;
    start.addEventListener('click', function(){
        if(!running){

             originalTime = sc;
        addBtn.disabled = true;
        subBtn.disabled = true;
        reset.disabled = true;
        
        start.textContent = 'STOP';
        clearInterval(startCount);
        startCount = setInterval(()=>{
            sc--;
            currentTime.textContent = sc + 's';
            if(sc <= 0  ){
                clearInterval(startCount);          
          
                alert('Time is up!!!!');
                sc = 0;
                currentTime.textContent = sc + 's';
                resetButtons();
            }
        },1000)
        running = true;
    }else{
        clearInterval(startCount);
        sc = originalTime;
        currentTime.textContent = sc + 's';
          resetButtons();
    }



    });
    function resetButtons() {
    addBtn.disabled = false;
    subBtn.disabled = false;
    reset.disabled = false;
    start.textContent = "START";
    running = false;
}
            reset.addEventListener('click',function(){
            clearInterval(startCount);
            clearInterval(countDown);
            clearInterval(countUp);
            sc = 0;
            currentTime.textContent = sc + 's';
        
    })
   
}
timer();