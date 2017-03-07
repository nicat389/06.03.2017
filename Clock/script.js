var h;
i=0;
// document.getElementsByClassName("clockwiseFirst")[0].style.transform="rotate(180deg)";
// document.getElementsByClassName("clockwiseSecond")[0].style.transform="rotate(180deg)";
// document.getElementsByClassName("clockwiseThird")[0].style.transform="rotate(180deg)";

            document.getElementsByClassName("clockwiseFirst")[0].style.transformOrigin="0 0";
             document.getElementsByClassName("clockwiseSecond")[0].style.transformOrigin="0 0";
             document.getElementsByClassName("clockwiseThird")[0].style.transformOrigin="0 0";
             

var time=new Date();
if(time.getHours()>12){
    h=time.getHours()-12;
}

else{
    h=time.getHours();
}
m= time.getMinutes();
i=time.getSeconds();

a=h*30+((m/10))*6+180;
b=m*6+((i/10))*1+180;
c=i*6+180;

console.log("aa="+m);

document.getElementsByClassName("clockwiseFirst")[0].style.transform="rotate("+c+"deg)";
document.getElementsByClassName("clockwiseSecond")[0].style.transform="rotate("+b+"deg)";
document.getElementsByClassName("clockwiseThird")[0].style.transform="rotate("+a+"deg)";
    console.log("saniye+"+i+"   deqiqe="+m+"    saat"+h);

function analogClock(){


    setTimeout(function() {
        
        document.getElementsByClassName("clockwiseFirst")[0].style.transform+="rotate(6deg)";
      
      if(i%15==0){
        document.getElementsByClassName("clockwiseSecond")[0].style.transform+="rotate(1deg)";
      }

        if(i==60){
        i=0;
        m++;
         
    
    }

   if(m%15==0){
        document.getElementsByClassName("clockwiseThird")[0].style.transform+="rotate(0.1deg)";        
        
       
    }
    if(m==60){
       
        m=0;
    }

    
    i++;
    console.log("saniye+"+i+"   deqiqe="+m+"    saat"+h);
    analogClock();    
    }, 1000);
}

analogClock();