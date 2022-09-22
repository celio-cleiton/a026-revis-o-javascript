function logar() {
  var email = document.getElementById('email').value
  var senha = document.getElementById('password').value

  if (email === 'admin@gmail.com' && senha === 'admin') {
    window.location.href = '/pages/sistema.html' // o caminho no navegador
    alert('Sucessfully logged in')
  } else {
    alert('Incorrect Login or Password')
  }
}
