/**
 * Created by hasee on 2017/10/10.
 */
function animat (obj,target,speed){
  target=target||0;
  speed=speed||3
  var height
  clearInterval(obj.timer)
  obj.timer=setInterval(function(){
     if(obj.offsetHeight<target) {
        height = obj.offsetHeight + speed
     }
       obj.style.height=height+'px'
  },10)
  return obj
}
var test=document.getElementsByClassName('dropdownmenus')[0];
var channel=document.getElementsByClassName('channel')[0];
channel.onmouseover=function(){
  animat(test,200,5)
}
channel.onmouseout=function(){
  test.style.height=0
  clearInterval(animat().timer)
}
