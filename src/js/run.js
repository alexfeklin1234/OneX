// load 
if (localStorage.cache == 'delete') {
  window.location.href = "/mini_apps/cache/delete_cache_app/run.html";
}



document.getElementById("text_editor_value").value = localStorage.save_text_in_text_editor; 

if (localStorage.type_texteditor_text_type == 'verdana') {
  document.getElementsByClassName('text_editor_value')[0].style= "font-family: Verdana; font-size: 20;";
  
}

if (localStorage.type_texteditor_text_type == 'geneva') {
  document.getElementsByClassName('text_editor_value')[0].style= "font-family: Geneva; font-size: 20;";
  
}


if (localStorage.type_texteditor_text_type == 'Times_New_Roman') {
  document.getElementsByClassName('text_editor_value')[0].style= "font-family: Times New Roman; font-size: 20;";
  
}



// save background
setInterval(() => {
  // background
  if (localStorage.background == 'regular') {
    document.body.style= "background-image: url(../../img/wallpapers/1.jpg);";
  }
  if (localStorage.background == 'hello') {
    document.body.style= "background-image: url(../../img/wallpapers/hello.gif);";
  }
  if (localStorage.background == 'city') {
    document.body.style= "background-image: url(../../img/wallpapers/city.gif);";
  }
  if (localStorage.background == 'neoncity') {
    document.body.style= "background-image: url(../../img/wallpapers/neoncity.gif);";
  }
  if (localStorage.background == 'forest') {
    document.body.style= "background-image: url(../../img/wallpapers/forest.jpg);";
  }

  let mydate = new Date()
  let hour = mydate.getHours();
  let min = mydate.getMinutes();
  let sec = mydate.getSeconds();
  document.getElementById("timenow").innerHTML = hour + " : " + min + " : " + sec;
}, 1);




// terminal run
function runterminalcode() {
    let terminalcode = document.getElementById("terminalcode").value;  
    if (terminalcode == 'say =>') {
      terminalcode_command_say = prompt('What you want to say?')
      alert(terminalcode_command_say)
    }
  }
  


// save text
function savetext() {
  localStorage.save_text_in_text_editor = document.getElementById("text_editor_value").value; 

}


// save background
function regular_background() {
  document.body.style= "background-image: url(../../img/wallpapers/1.jpg);";
  localStorage.background = 'regular'
}

function hello_background() {
  document.body.style= "background-image: url(../../img/wallpapers/hello.gif);";
  localStorage.background = 'hello'
}

function city_background() {
  document.body.style= "background-image: url(../../img/wallpapers/city.gif);";
  localStorage.background = 'city'
}

function neoncity_background() {
  document.body.style= "background-image: url(../../img/wallpapers/neoncity.gif);";
  localStorage.background = 'neoncity'
}
  
function forest_background() {
  document.body.style= "background-image: url(../../img/wallpapers/forest.jpg);";
  localStorage.background = 'forest'
}

function reboot() {
  window.location.href = "/loading.html";    
}
  

















var op; //выбранный оператор
function func() {
  var result;
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);
  switch (op) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2) {
        result = num1 / num2;
      } else {
        result = 'infinity';
      }
      break;
    default:
      result = 'select operation';
  }

  document.getElementById("result").innerHTML = result;
}







  
  
  












  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  // mini apps app
  // Получить модальный
  var mini_apps_app_modal = document.getElementById("mini_apps_app_modal");
  
  // Получить кнопку, которая открывает модальный
  var mini_apps_app_btn = document.getElementById("mini_apps_app_btn");
  
  // Получить элемент <span>, который закрывает модальный
  var mini_apps_app_modal_close = document.getElementsByClassName("mini_apps_app_modal_close")[0];
  
  // Когда пользователь нажимает на кнопку, откройте модальный
  mini_apps_app_btn.onclick = function() {
    mini_apps_app_modal.style.display = "block";
  }
  
  // Когда пользователь нажимает на <span> (x), закройте модальное окно
  mini_apps_app_modal_close.onclick = function() {
    mini_apps_app_modal.style.display = "none";
  }
  
  // Когда пользователь щелкает в любом месте за пределами модального, закройте его
  window.onclick = function(event) {
    if (event.target == mini_apps_app_modal) {
      mini_apps_app_modal.style.display = "none";
    }
  }













  
  
  // terminal app
  // Получить модальный
  var terminal_app_modal = document.getElementById("terminal_app_modal");
  
  // Получить кнопку, которая открывает модальный
  var terminal_app_btn = document.getElementById("terminal_app_btn");
  
  // Получить элемент <span>, который закрывает модальный
  var terminal_app_modal_close = document.getElementsByClassName("terminal_app_modal_close")[0];
  
  // Когда пользователь нажимает на кнопку, откройте модальный
  terminal_app_btn.onclick = function() {
    terminal_app_modal.style.display = "block";
  }
  
  // Когда пользователь нажимает на <span> (x), закройте модальное окно
    terminal_app_modal_close.onclick = function() {
      terminal_app_modal.style.display = "none";
  }
  
  // Когда пользователь щелкает в любом месте за пределами модального, закройте его
  window.onclick = function(event) {
    if (event.target == terminal_app_modal) {
      terminal_app_modal.style.display = "none";
    }
  }

























    // settings app
  // Получить модальный
  var settings_app_modal = document.getElementById("settings_app_modal");
  
  // Получить кнопку, которая открывает модальный
  var settings_app_btn = document.getElementById("settings_app_btn");
  
  // Получить элемент <span>, который закрывает модальный
  var settings_app_modal_close = document.getElementsByClassName("settings_app_modal_close")[0];
  
  // Когда пользователь нажимает на кнопку, откройте модальный
  settings_app_btn.onclick = function() {
    settings_app_modal.style.display = "block";

  }
  
  // Когда пользователь нажимает на <span> (x), закройте модальное окно
  settings_app_modal_close.onclick = function() {
    settings_app_modal.style.display = "none";
  }
  
  // Когда пользователь щелкает в любом месте за пределами модального, закройте его
  window.onclick = function(event) {
    if (event.target == settings_app_modal) {
      settings_app_modal.style.display = "none";
    }
  }

  


















    // calculator app
  // Получить модальный
  var calculator_app_modal = document.getElementById("calculator_app_modal");
  
  // Получить кнопку, которая открывает модальный
  var calculator_app_btn = document.getElementById("calculator_app_btn");
  
  // Получить элемент <span>, который закрывает модальный
  var calculator_app_modal_close = document.getElementsByClassName("calculator_app_modal_close")[0];
  
  // Когда пользователь нажимает на кнопку, откройте модальный
  calculator_app_btn.onclick = function() {
    calculator_app_modal.style.display = "block";
    mini_apps_app_modal.style.display = "none";
  }
  
  // Когда пользователь нажимает на <span> (x), закройте модальное окно
  calculator_app_modal_close.onclick = function() {
    calculator_app_modal.style.display = "none";
  }
  
  // Когда пользователь щелкает в любом месте за пределами модального, закройте его
  window.onclick = function(event) {
    if (event.target == calculator_app_modal) {
      calculator_app_modal.style.display = "none";
    }
  }





















    // clock app
  // Получить модальный
  var clock_app_modal = document.getElementById("clock_app_modal");
  
  // Получить кнопку, которая открывает модальный
  var clock_app_btn = document.getElementById("clock_app_btn");
  
  // Получить элемент <span>, который закрывает модальный
  var clock_app_modal_close = document.getElementsByClassName("clock_app_modal_close")[0];
  
  // Когда пользователь нажимает на кнопку, откройте модальный
  clock_app_btn.onclick = function() {
    clock_app_modal.style.display = "block";
    mini_apps_app_modal.style.display = "none";
  }
  
  // Когда пользователь нажимает на <span> (x), закройте модальное окно
  clock_app_modal_close.onclick = function() {
    clock_app_modal.style.display = "none";
  }
  
  // Когда пользователь щелкает в любом месте за пределами модального, закройте его
  window.onclick = function(event) {
    if (event.target == clock_app_modal) {
      clock_app_modal.style.display = "none";
    }
  }









    // texteditor app
  // Получить модальный
  var texteditor_app_modal = document.getElementById("texteditor_app_modal");
  
  // Получить кнопку, которая открывает модальный
  var texteditor_app_btn = document.getElementById("texteditor_app_btn");
  
  // Получить элемент <span>, который закрывает модальный
  var texteditor_app_modal_close = document.getElementsByClassName("texteditor_app_modal_close")[0];
  
  // Когда пользователь нажимает на кнопку, откройте модальный
  texteditor_app_btn.onclick = function() {
    texteditor_app_modal.style.display = "block";
    mini_apps_app_modal.style.display = "none";
  }
  
  // Когда пользователь нажимает на <span> (x), закройте модальное окно
  texteditor_app_modal_close.onclick = function() {
    texteditor_app_modal.style.display = "none";
  }
  
  // Когда пользователь щелкает в любом месте за пределами модального, закройте его
  window.onclick = function(event) {
    if (event.target == texteditor_app_modal) {
      texteditor_app_modal.style.display = "none";
    }
  }







    // delete cache app
  // Получить модальный
  var delete_cache_app_modal = document.getElementById("delete_cache_app_modal");
  
  // Получить кнопку, которая открывает модальный
  var delete_cache_app_btn = document.getElementById("delete_cache_app_btn");
  
  // Получить элемент <span>, который закрывает модальный
  var delete_cache_app_modal_close = document.getElementsByClassName("delete_cache_app_modal_close")[0];
  
  // Когда пользователь нажимает на кнопку, откройте модальный
  delete_cache_app_btn.onclick = function() {
    delete_cache_app_modal.style.display = "block";
    mini_apps_app_modal.style.display = "none";
  }
  
  // Когда пользователь нажимает на <span> (x), закройте модальное окно
  delete_cache_app_modal_close.onclick = function() {
    delete_cache_app_modal.style.display = "none";
  }
  
  // Когда пользователь щелкает в любом месте за пределами модального, закройте его
  window.onclick = function(event) {
    if (event.target == delete_cache_app_modal) {
      delete_cache_app_modal.style.display = "none";
    }
  }



// text type
function texteditor_text_type_verdana() {
  localStorage.type_texteditor_text_type = 'verdana'
  document.getElementsByClassName('text_editor_value')[0].style= "font-family: Verdana; font-size: 20;";

}


function texteditor_text_type_geneva() {
  localStorage.type_texteditor_text_type = 'geneva'
  document.getElementsByClassName('text_editor_value')[0].style= "font-family: Geneva; font-size: 20;";

}


function texteditor_text_type_Times_New_Roman() {
  localStorage.type_texteditor_text_type = 'Times_New_Roman'
  document.getElementsByClassName('text_editor_value')[0].style= "font-family: Times New Roman; font-size: 20;";

}
 

 

