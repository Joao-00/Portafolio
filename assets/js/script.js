function enviarFormulario() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let asunto = document.getElementById('asunto').value;
  let coments = document.getElementById('coments').value;
  
  if (name != "" || email != "" || asunto != "" || coments != "") {
    alert("¡Datos enviados con éxito! La página se refrescará.");
  }
}

