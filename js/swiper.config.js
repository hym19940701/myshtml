/**
 * Created by hasee on 2017/10/10.
 */
// section区域轮播图
var swiper1 = new Swiper ('#swiper2', {
  direction: 'horizontal',
  loop: true,
  autoplay: 3000,
  pagination: '.swiper-pagination',
  // 如果需要前进后退按钮
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  // 如果需要滚动条
  scrollbar: '.swiper-scrollbar',
  autoplayDisableOnInteraction : false
})
// banner区域轮播图
var imgarr=[
  '少女时代的十年回忆',
  '张艺兴专辑同名主打《SHEEP》',
  '张艺兴新曲承包内地榜单',
  'Music is my way-历娜专访',
  'HUAWEI nova 2 手机特约呈现 张艺兴生日快闪',
  '就赖这些歌让我更想你了！',
  '用一秒跌进Eason’s Life',
  '送分题!这些声音一听就知道是谁!',
  '快到飞起的韩团二倍速舞蹈',
  '生日快乐，我的祖国！'
];
//自定义分页器样式
window.onload=function(){
  addimgarr()
};
window.onresize=function(){
  location.reload();
  window.onload=function(){
    addimgarr()
  }
};
function addimgarr() {
  var imgTitles=document.getElementsByClassName('swiper-pagination-bullet');
  for( var i in imgTitles){
    var a=document.createElement('a');
    a.innerHTML=imgarr[i];
    imgTitles[i].appendChild(a);
  }
}


var swiper2 = new Swiper ('#swiper1',{
  direction: 'horizontal',
  loop: true,
  autoplay: 5000,
  effect: 'fade',
  // 如果需要分页器
  pagination: '.swiper-pagination-banner',
  paginationElement : 'li',
  paginationClickable: true,
  autoplayDisableOnInteraction : false
  // paginationBulletRender: function (swiper, index) {
  //   return '<span>' + index + '</span>';
  // }
})

