function fadeIn() {
    var obj = document.querySelectorAll(".description :is(h1,h2,li)"), i=1;
    Array.prototype.forEach.call(obj, function(obj) {
      setTimeout(function(){obj.style.animationPlayState = "running"}, 100*i)
      i++;
  })
};