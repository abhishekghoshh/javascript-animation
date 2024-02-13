$(function(){
    var timeDuration=10000;
    $("#rndm").click(function(){
        for(i =0;i<10;i++){
            for(j=0;j<10;j++){
                // setTimeout(chall(i,j), timeDuration);
                console.log(`iteration for ${i} , ${j}`);
                sleep(1000);
            }
        }
    });
    // function chall(i,j){
    //     console.log(`iteration for ${i} , ${j}`);
    // }
    function sleep(milliseconds) { 
        let timeStart = new Date().getTime(); 
        while (true) { 
            let elapsedTime = new Date().getTime() - timeStart; 
            if (elapsedTime > milliseconds) { 
                break; 
            } 
        } 
    } 
});