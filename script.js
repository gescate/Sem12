document.querySelector(".boton").onclick = function () {
  document.querySelector(".container").classList.toggle("show");
}

//document.querySelector(".boton1").onclick = function(){
//    document.querySelector(".container1").classList.toggle("show1");
//}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//reto 3



function Modal(options) {
  this.element = document.querySelector(options.element)
  this.elementClose = this.element.querySelector('.js_close')
  this.elementAccept = this.element.querySelector('.js_aprob')
  this.elementCancel = this.element.querySelector('.js_jalado')

  this.registerEvents(options)
}

Modal.prototype.open = function () {
  this.element.classList.add('is-active')
}

Modal.prototype.close = function () {
  this.element.classList.remove('is-active')
}

Modal.prototype.registerEvents = function (options) {
  this.elementClose.onclick = () => {
    this.close()
  }

  this.elementAccept.onclick = () => {
    options.cbAccept()
  }


  this.elementCancel.onclick = () => {
    options.cbCancel()

  }
}  
  const modal1 = new Modal({
    element: '.js_modal',
    cbAccept: function () {
      console.log('20!')
    },
    cbCancel: function () {
      console.log('jalado')
  }
  })

  const modal2 = new Modal({
    element: '.js_modal2',
    cbAccept: function () {
      console.log('pasaste')
    },
    cbCancel: function () {
      console.log('repetiste')
  }
  })



const button = document.querySelector(".reto1");

button.onclick = function () {
modal1.open ()  
}

const button2 = document.querySelector(".reto2");

button2.onclick = function () {
modal2.open ()  
}