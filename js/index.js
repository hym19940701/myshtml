/**
 * Created by hasee on 2017/10/10.
 */
function animat(obj, attr, target, speed) {
  target = target || 0;
  speed = speed || 1;
  var attrs = ['width', 'height', 'top', 'left'];
  attr = attrs[attrs.indexOf(attr)];
  // 将每个属性的首字母变为大写
  function titleCase(s) {
    return s.toLowerCase().replace(/\b([\w|']+)\b/g, function (word) {
      //return word.slice(0, 1).toUpperCase() + word.slice(1);
      return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
    });
  }

  var offset = 'offset' + titleCase(attr)


  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
    if (target - obj[offset] < speed) {
      obj.style[attr] = target + 'px';
      clearInterval(obj.timer)
    }
    var changeStyle = obj[offset] + speed;
    obj.style[attr] = changeStyle + 'px'
  }, 10)
}
// 频道二级菜单
var dropdownmenus = document.getElementsByClassName('dropdownmenus')[0];
//频道
var channel = document.getElementsByClassName('channel')[0];
//小三角
var b = channel.getElementsByTagName('b')[0];
channel.onmouseover = function () {
  b.className = '';
  b.className = 'active-triangle';
  animat(dropdownmenus, 'height', 200, 5)
};
channel.onmouseout = function () {
  b.className = '';
  b.className = 'default-triangle';
  clearInterval(dropdownmenus.timer)
  dropdownmenus.style.height = 0
};


