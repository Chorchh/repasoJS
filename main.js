// 1. Hacer un menu (navbar) que tenga un logo el icono de menu y adentro 4 enlaces que esten ocultos. Hacer un addEventListener al menu para desplegar los elementos.

// 2. Validacion de forms,
//    Hacer un form que tenga email y contraseña y que valide que el email sea un email y la contraseña tenga mayuscula, minuscula, un numero y un simbolo. Si da error, renderizar en el html el texto con un error. Ej, Email invalido / La contraseña tiene que tener una mayuscula, minuscula, un numero y simbolo

// 3. Hacer un input y un boton de enviar. Crear una funcion para pintar en el html lo que escribamos en el input cuando aprentemos el boton de enviar. Y que los datos persistan en el local storage

// 4. Tenemos el siguiente array de objetos, renderizar cada objeto en una card. (Que queden lindas)


// Array de Pelis
let peliculas = [
    {
      id: 1,
      titulo: 'El señor de los anillos: La comunidad del anillo',
      descripcion:
        'Un hobbit de la Comarca y ocho compañeros emprenden un viaje para destruir el poderoso Anillo Único y salvar la Tierra Media del Señor Oscuro Sauron.',
      director: 'Peter Jackson',
      anio: 2001,
      imagen:
        'https://m.media-amazon.com/images/M/MV5BMzgyNjdjOWMtMjAyYy00NzQ4LWIwYTQtZDk2ZDQzYWVlN2IwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_FMjpg_UX720_.jpg',
    },
    {
      id: 2,
      titulo: 'Volver al futuro',
      descripcion:
        'Marty McFly, un estudiante de secundaria de 17 años, es enviado accidentalmente treinta años al pasado en un DeLorean que viaja en el tiempo, inventado por su gran amigo, el excéntrico científico Doc Brown.',
      director: 'Robert Zemeckis',
      anio: 1985,
      imagen:
        'https://m.media-amazon.com/images/M/MV5BYjQxMTIyMWUtMmMyMS00MGNmLTkzNzktOTM2YzMyZmRjYTYzXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg',
    },
    {
      id: 3,
      titulo: 'Harry Potter y la piedra filosofal',
      descripcion:
        'Un niño huérfano se inscribe en una escuela de magia y hechicería, donde aprende la verdad sobre sí mismo, su familia y el terrible mal que acecha al mundo mágico.',
      director: 'Chris Columbus',
      anio: 2001,
      imagen:
        'https://m.media-amazon.com/images/M/MV5BMzFiZjhjODUtMWJhZi00ZDk5LThjY2ItZjNjYjc0OGVjY2FmXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg',
    },
    {
      id: 4,
      titulo: 'Spiderman',
      descripcion:
        'Al ser mordido por una araña modificada genéticamente, un chico de instituto tímido y estudioso adquiere habilidades de araña que al final tendrá que usar para luchar contra el mal como un superhéroe tras una tragedia familiar.',
      director: 'Sam Raimin',
      anio: 2002,
      imagen:
        'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX511_.jpg',
    },
    {
      id: 5,
      titulo: 'Fight Club',
      descripcion:
        'Un oficinista insomne y un desentendido fabricante de jabones forman un club de lucha clandestino que se convierte en mucho más.',
      director: 'David Fincher',
      anio: 1999,
      imagen:
        'https://m.media-amazon.com/images/M/MV5BNzJhZjg3MWQtNDk1Zi00ZjMzLWI1ZjUtNmE2MDg0ZDU4MzZlXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg',
    },
    {
      id: 6,
      titulo: 'El Origen',
      descripcion:
        'A un ladrón que roba secretos corporativos a través del uso de la tecnología de compartir sueños, se le da la tarea de implantar una idea en la mente de un jefe de una gran empresa.',
      director: 'Christopher "EL REY" Nolan',
      anio: 2010,
      imagen:
        'https://m.media-amazon.com/images/M/MV5BMTUzMzUyOTktNmYyNS00YTA1LWIxNmQtMGIzZDYxZGI3OTliXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg',
    },
  ];



//   EJ 1
const lista = document.getElementById("lista");
const input = document.getElementById("toggle-menu");

input.addEventListener("click", () => {
    lista.classList.toggle("mostrar");
});


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
  const symbol = /[.*+-?^${}()|[]\_@]/g;

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
