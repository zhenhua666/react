/* 
  unbeforunload() 页面刷新或关闭前触发的事件，可以禁止onunload事件的触发 
  onunload是页面刷新或关闭后触发
*/

const now = new Date().getTime();
//从缓存中获取用户上次推出的时间戳
const leaveTime = parseInt(localStorage.getItem('leaveTime'),10);
const refresh = (now - leaveTime) <= 5000;
alert(refresh ? '刷新':'重新登陆');

window.onunload = function(e){
    localStorage.setItem('leaveTime',new Date().getTime())
}

localStorage.setItem('myCat','Tom')

localStorage.getItem('myCat')

localStorage.removeItem('myCat')

localStorage.clear();

