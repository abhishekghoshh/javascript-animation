var mainDiv=document.getElementById("container");
var div_height = mainDiv.offsetHeight;
var div_width = mainDiv.offsetWidth;
var inner_div_width=div_width/100; 

var innerDivHeight=new Array(100);
var innerDivLeft=new Array(100);
var myArray=new Array(100);
var i;

function rndm()
{
    while(mainDiv.hasChildNodes()) {
    mainDiv.removeChild(mainDiv.lastChild);
    }
    for(i=0;i<100;i++)
    {
        myArray[i]=div_height*i/100;
    }
    for(i=0;i<100;i++)
    {
        var x=Math.floor(Math.random()*100)
        var y=Math.floor(Math.random()*100)
        var temp=myArray[x];
        myArray[x]=myArray[y];
        myArray[y]=temp;
    }
    for(i=0;i<100;i++)
    {
        innerDivHeight[i]=myArray[i];
        innerDivLeft[i]=i*inner_div_width;
        var innerDivTop=div_height-innerDivHeight[i];
        var innerDiv=document.createElement("div");
        innerDiv.style.position="absolute";
        innerDiv.style.float="left";
        innerDiv.style.clear="both";
        innerDiv.style.backgroundColor = "blue";
        innerDiv.style.top=innerDivTop+"px";
        innerDiv.style.left=innerDivLeft[i]+"px";
        innerDiv.style.height=innerDivHeight[i]+"px";
        innerDiv.style.width=inner_div_width+"px";
        mainDiv.appendChild(innerDiv);
    }   
}

