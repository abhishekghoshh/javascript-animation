var score =0;
var failure=0;
var level =0;
var failed_no =0;

function create5(){
    for(var i=1;i<=5;i++)
    {
        var img = document.createElement("IMG");
        img.setAttribute("src","smiley_face.gif");
        img.setAttribute("width", "60");
        img.setAttribute("height", "60");
        var left_div=document.getElementById("leftside");
        var left_div_height = left_div.offsetHeight;
        
        var top_position = Math.floor(Math.random()*(left_div_height-60)); 
        var left_position= Math.floor(Math.random()*(left_div_height-60));
        img.style.top=top_position +"px";
        img.style.left=left_position+ "px";
        left_div.appendChild(img);
        
        img.addEventListener("click",display_right);
        function display_right(){
            alert("you found the wrong image");
            failure=1;
            show_score1();
            failed();
        }
        
        var cln_img = img.cloneNode(true);
        var right_div=document.getElementById("rightside");
        right_div.appendChild(cln_img);
    } 
    if(failure<1){clone_image();}
}

function clone_image(){
    var extra_img = document.createElement("IMG");
    extra_img.setAttribute("src","smiley_face.gif");
    extra_img.setAttribute("width", "60");
    extra_img.setAttribute("height", "60");
    var left_div=document.getElementById("leftside");
    var left_div_height = left_div.offsetHeight;
        
    var top_position = Math.floor(Math.random()*(left_div_height-60)); 
    var left_position= Math.floor(Math.random()*(left_div_height-60));
    extra_img.style.top=top_position +"px";
    extra_img.style.left=left_position+ "px";
    left_div.appendChild(extra_img);
    
    extra_img.addEventListener("click",display_right);
    function display_right(){
        if(failure<1)
            {
                alert("you found the extra image");
                left_div.removeChild(extra_img);
                create5();
                show_score(); 
            }
        else{
            alert("This is the extra image but you already hit the wrong image,Sorry!!");
        }
    }
}
function show_score(){
    level=level+1;
    var your_level="";
    var mult =0;
    if(level<6)
    {mult=4;
    your_level="beginer";}
    else {
        if(level<12)
            {mult=6;
            your_level="intermediate";}
        else
            {mult=7;
            your_level="pro"}
         }
    score = score+mult;
    alert("Your score is "+score+" xp\nYou are in "+your_level+" level");
    
}
function failed(){
    
    failed_no=failed_no+1;
    if(failed_no==1){
        var fail = document.getElementById("info");
        var text = document.createTextNode("You have failed");
        fail.appendChild(text);
    } 
}
function show_score1()
{
   alert("Your final score is "+score+" xp"); 
}
function removeAll(){
    score =0;
    failure=0;
    level =0;
    failed_no =0;
    
    var left_div=document.getElementById("leftside");
    while (left_div.hasChildNodes()) 
    {   
        left_div.removeChild(left_div.firstChild);
    }
    
    var right_div=document.getElementById("rightside");
    while (right_div.hasChildNodes()) 
    {   
        right_div.removeChild(right_div.firstChild);
    }
    
}


