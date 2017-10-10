/**
 * Created by hasee on 2017/10/10.
 */
function animat (obj,target,speed){
  target=target||0;
  speed=speed||1
  var height
  clearInterval(obj.timer)
  obj.timer=setInterval(function(){
     if(target-obj.offsetHeight<speed) {
       obj.style.height=target+'px'
       clearInterval(obj.timer)
     }
     // console.log(obj.offsetHeight-target)
    height = obj.offsetHeight + speed
    obj.style.height=height+'px'
  },10)
}
var dropdownmenus=document.getElementsByClassName('dropdownmenus')[0];
var channel=document.getElementsByClassName('channel')[0];
channel.addEventListener('mouseover',function(){
  animat(dropdownmenus,200,5)
  dropdownmenus.onmouseover=function(){
    dropdownmenus.onmouseout=function(){
      console.log(dropdownmenus.children[0])
        dropdownmenus.style.height=0
        clearInterval(dropdownmenus.timer)
    }
  }
},false)


