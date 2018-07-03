var draggable = document.getElementById('drag');
var main = document.getElementById('main');
function createDraggable(e) {
  var draggable = document.createElement('div');
  var container = document.createElement('div');
  var exit = document.createElement('div');
  draggable.classList.add("draggable");
  container.classList.add('container');
  exit.classList.add('exit');
  exit.classList.add('hide');

  draggable.ondragstart = function () {
    return false;
  }
  draggable.addEventListener('mousedown',function (e) {
    e.stopPropagation();
    function checkRange(main,draggable,e) {
      return (e.pageX >= main.getBoundingClientRect().left + draggable.offsetWidth/2) && (e.pageX <= main.getBoundingClientRect().right - draggable.offsetWidth/2)
      && (e.pageY >= main.getBoundingClientRect().top + draggable.offsetHeight/2) && (e.pageY <= main.getBoundingClientRect().bottom - draggable.offsetHeight/2);
    }
    function moveAt(e) {

      if (checkRange(main,draggable,e)) {
        if (draggable.getBoundingClientRect().right >= main.getBoundingClientRect().right-10) {
          draggable.classList.add('reverse');
        } else {
          draggable.classList.remove('reverse');
        }
      draggable.style.left = e.pageX - draggable.offsetWidth / 2 + 'px';
      draggable.style.top = e.pageY - draggable.offsetHeight / 2 + 'px';
    }
    }
    main.onmousemove = function (e) {
      moveAt(e);
    }
    this.onmouseup = function () {
      main.onmousemove = null;
      this.onmouseup = null;
    }
  })

  draggable.addEventListener('dblclick',function (e) {
    e.stopPropagation();
    this.children[1].classList.add('hide');
  })
  draggable.addEventListener('click',function (e) {
    e.stopPropagation();
    this.children[1].classList.remove("hide");
  })
  exit.addEventListener('click',function (e) {
    e.stopPropagation();
    draggable.remove();
  })

  draggable.appendChild(container);
  draggable.appendChild(exit);

  container.innerHTML = "lorem";
  exit.innerHTML = "X";
  main.appendChild(draggable);
  draggable.style.left = e.pageX + 'px';
  draggable.style.top = e.pageY  + 'px';
}
  main.addEventListener('dblclick',function (e) {
  createDraggable(e);
})
