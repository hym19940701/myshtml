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
    height = obj.offsetHeight + speed
    obj.style.height=height+'px'
  },10)
}
// 频道二级菜单
var dropdownmenus=document.getElementsByClassName('dropdownmenus')[0];
//频道
var channel=document.getElementsByClassName('channel')[0];
//小三角
var b=channel.getElementsByTagName('b')[0];
// channel.addEventListener('mouseover',function(){
//   animat(dropdownmenus,200,5)
//   dropdownmenus.onmouseover=function(){
//     dropdownmenus.onmouseout=function(){

//         dropdownmenus.style.height=0
//         clearInterval(dropdownmenus.timer)
//     }
//   }
// },false)
channel.onmouseover=function(){
  b.className='';
  b.className='active-triangle';
  animat(dropdownmenus,200,5)
};
channel.onmouseout=function(){
  b.className='';
  b.className='default-triangle';
  clearInterval(dropdownmenus.timer)
  dropdownmenus.style.height=0
};


