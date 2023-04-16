//Ejercicio 1: Crear una llamada asincronica simulando una espera
function esperar(tiempo) {
  return new Promise((resolve) => {
  setTimeout(() => {
  resolve(`Esperado ${tiempo} ms`);
  }, tiempo);
  });
  }

// // Escribir en la consola:
//  esperar(2000)
//   .then((resultado) => {
//   console.log(resultado);
//   })
//   .catch((error) => {
//   console.error('Error:', error);
//   });
  
function hola2(){
  return "hola"
}

// // Escribir en la consola:
// hola2()

//Ejercicio 2: Modificar el ejercicio 1 con async / await


async function esperar2(tiempo) {
  try {
    const esperando2 = await new Promise(resolve => {
      setTimeout(() => {
        resolve(`Esperando ${tiempo} segundos`);
      }, tiempo);
    });
    console.log(esperando2);
  }
  catch(error) {
    console.error('Error:', error);
  }

}
// // Escribir en la consola:
// esperar2(2000)

// Ejercicio 3: Datos del usuario

//devuelve un string
function obtenerUsuario(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(getNombreUsuario(id));
    }, 5000);
  });
}

//devuelve un array de strings
function obtenerPublicaciones(idUsuario) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(getPublicaciones(idUsuario));
    }, 2000);
  });
}

async function obtenerInfoCompletaUsuario(idUsuario) {
try {
const usuario = await obtenerUsuario(idUsuario);
const publicaciones = await obtenerPublicaciones(idUsuario);
console.log(`Nombre de usuario: ${usuario}`);
console.log(`Publicaciones del usuario: ${publicaciones.join(', ')}`);
} catch (error) {
console.error('Error:', error);
}
}

// // Escribir en la consola:
//obtenerInfoCompletaUsuario(user2);


let listaUsuarios = [{"id":"user1", "nombre": "Pedro", "publicaciones": ["pedro1", "pedro2", "pedro3"]}, {"id":"user2", "nombre": "José", "publicaciones": ["José1", "José2", "José3"]}, {"id":"user3", "nombre": "Juan", "publicaciones": ["Juan1", "Juan2", "Juan3"]}]
function getNombreUsuario(id) {
  let nombreUsuario = null;
  listaUsuarios.forEach(usuario => {
    if (usuario.id === id) {
      nombreUsuario = usuario.nombre;
    }
  });
  return nombreUsuario;
}

function getPublicaciones(id) {
  let publicaciones = null;
  listaUsuarios.forEach(usuario => {
    if (usuario.id === id) {
      publicaciones = usuario.publicaciones;
    }
  });
  return publicaciones;
}

// Ejercicio 4: Modificar el ejercicio anterior para hacer las llamadas en simultaneo.

async function obtenerInfoCompletaUsuario1(idUsuario) {
  Promise.all([obtenerUsuario(idUsuario), obtenerPublicaciones(idUsuario)])
  .then(resultados => {
    resultados.forEach(resultado => console.log(resultado));
  })
  .catch(error => {
    console.error('Error:', error);
  });
  }