
function runterminalcode() {
    let terminalcode = document.getElementById("terminalcode").value;  
    if (terminalcode == 'say =>') {
      terminalcode_command_say = prompt('What you want to say?')
      alert(terminalcode_command_say)
    }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  // computer app
  // Получить модальный
  var computer_app_modal = document.getElementById("computer_app_modal");
  
  // Получить кнопку, которая открывает модальный
  var computer_app_btn = document.getElementById("computer_app_btn");
  
  // Получить элемент <span>, который закрывает модальный
  var computer_app_modal_close = document.getElementsByClassName("computer_app_modal_close")[0];
  
  // Когда пользователь нажимает на кнопку, откройте модальный
  computer_app_btn.onclick = function() {
      computer_app_modal.style.display = "block";
  }
  
  // Когда пользователь нажимает на <span> (x), закройте модальное окно
  computer_app_modal_close.onclick = function() {
      computer_app_modal.style.display = "none";
  }
  
  // Когда пользователь щелкает в любом месте за пределами модального, закройте его
  window.onclick = function(event) {
    if (event.target == computer_app_modal) {
      computer_app_modal.style.display = "none";
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