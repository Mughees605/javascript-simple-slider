var x = 0;
var array = ["https://pbs.twimg.com/profile_images/655066410087940096/QSUlrrlm.png","https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Small_Flag_of_the_United_Nations_ZP.svg/488px-Small_Flag_of_the_United_Nations_ZP.svg.png","http://c.tribune.com.pk/2016/03/1072773-ShahidAfridiAFP-1458915667-196-640x480.jpg"]; 
 x = array.length;
function slider(num){
  if(x == 0){
    x = array.length;
  }
  x = x - num;
  document.getElementById('demo').src = array[x];
}