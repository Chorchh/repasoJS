// 2. Validacion de forms,
//    Hacer un form que tenga email y contraseña y que valide que el email sea un email y la contraseña tenga mayuscula, minuscula, un numero y un simbolo. Si da error, renderizar en el html el texto con un error. Ej, Email invalido / La contraseña tiene que tener una mayuscula, minuscula, un numero y simbolo

// EJ 2
const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const ingresar = document.querySelector(".ingresar");
const msgEmail = document.querySelector(".msgEmail");
const msgPass = document.querySelector(".msgPass");

// validar email y pass
const emailValid = e => {
  e.preventDefault();

  const emailInput = email.value.trim();

  if(!emailInput.length){
    alert("El campo email esta vacio")
    return;
  } else if (/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,4})+$/.test(emailInput)){
    msgEmail.innerHTML = "email valido"
    email.style.border = "3px solid green"
  } else {
    msgEmail.innerHTML = "email incorrecto"
    email.style.border = "3px solid red"
  };
};


const passValid = e => {
  e.preventDefault();

  const passInput = password.value.trim();
  const lowerCase = /[a-z]/g;
  const upperCase = /[A-Z]/g;
  const number = /[0-9]/g;
  const symbol = /(?=.[!@#$%^&\-*])/g;

  if(passInput == "") {
    alert("El campo contraseña esta vacio");
    return;
  }


  if(!passInput.match(lowerCase)) {
    msgPass.textContent = "Debes incluir una minuscula";
  } else if (!passInput.match(upperCase)) {
    msgPass.textContent = "Debes incluir una mayuscula"
  } else if (!passInput.match(number)) {
    msgPass.textContent = "Debes incluir un numero"
  }  else if (!passInput.match(symbol)) {
    msgPass.textContent = "Debe incluir un simbolo"
  } else {
    msgPass.innerHTML = "contraseña correcta"
    password.style.border = "3px solid green"
  };
};



const init = () => {
  form.addEventListener("submit", emailValid);
  form.addEventListener("submit", passValid);

}

init();
