// intial count 
 let count = 0

 // select value and buttons
 const btn = document.querySelectorAll('.btn')
 
 const value = document.querySelector('#value')
 
btn.forEach(function(na){
   na.addEventListener('click',function(e){
       const styles = e.currentTarget.classList;
       if(styles.contains('decrease')){
           count --;
       }else if(styles.contains('increase')){
        count ++;
       }else{
           count = 0;
       }
       if(count>0){
           value.style.color="green";
       }
       if(count < 0){
        value.style.color="red";
      }

      if(count === 0){
        value.style.color="black";
      }
       value.textContent=count;
   })
});

