/**Ejercicio 2
    a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el
texto en mayúscula (utilizar toUpperCase).
   */

var palabra = "educación";

console.log(palabra);

console.log(palabra.toUpperCase());

/**
b. Crear una variable de tipo string con al menos 10 caracteres y generar un
nuevo string con los primeros 5 caracteres guardando el resultado en una
nueva variable (utilizar substring).
 */

var palabra2 = "comunicacion";

console.log(palabra2);

var palabra2Acotada = palabra2.substring(0,5)

console.log(palabra2Acotada);

/**
c. Crear una variable de tipo string con al menos 10 caracteres y generar un
nuevo string con los últimos 3 caracteres guardando el resultado en una nueva
variable (utilizar substring).
 */

var frase = "Una coquita bien fria";

console.log(frase);

var finalFrase = frase.substring(18,21);

console.log(finalFrase)

/** 
d. Crear una variable de tipo string con al menos 10 caracteres y generar un
nuevo string con la primera letra en mayúscula y las demás en minúscula.
Guardar el resultado en una nueva variable (utilizar substring, toUpperCase,
toLowerCase y el operador +).
 */

var frase2 = "un budin de banana";

var frase2Modificada = frase2.substring(0,1).toUpperCase() + frase2.substring(1).toLowerCase();

console.log(frase2Modificada);

/**
e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio
en blanco. Encontrar la posición del primer espacio en blanco y guardarla en
una variable (utilizar indexOf).
 */

var frase3 = "Sacar la pizza del horno";

console.log(frase3);

var posicionPrimerEspacio = frase3.indexOf(" ");

console.log(posicionPrimerEspacio);

/**
f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres
y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores
para generar un nuevo string que tenga la primera letra de ambas palabras en
mayúscula y las demás letras en minúscula (utilizar indexOf, substring,
toUpperCase, toLowerCase y el operador +).
 */

let frase4 = "escribiendo codigo";

console.log(frase4.indexOf("co"));

let frase4Modificada = frase4.substring(0,1).toUpperCase() + frase4.substring(1,11).toLowerCase() + " " + frase4.substring(12,13).toUpperCase() + frase4.substring(13,18).toLowerCase(); 

console.log(frase4Modificada);

