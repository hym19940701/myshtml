/**
 * Created by hasee on 2017/10/10.
 */
// console.log(123)
var mySwiper = new Swiper ('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  autoplay: 1000,

  // 如果需要分页器
  pagination: '.swiper-pagination',

  // 如果需要前进后退按钮
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',

  // 如果需要滚动条
  scrollbar: '.swiper-scrollbar',
})
