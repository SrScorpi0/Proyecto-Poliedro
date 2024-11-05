/**5. For
a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un
bucle for de JavaScript para mostrar una alerta utilizando cada una de las
palabras. */
let comidas = ["hamburguesa","tarta","noquis","tortilla de papa","pizza"];

for (let i = 0; i < comidas.length; i++) {
    console.log(comidas[i]);
    }
    
/** b. Al array anterior convertir la primera letra de cada palabra en mayúscula y
mostrar una alerta por cada palabra modificada. */

function colocarMayusculaComidas(alimento) {
    return alimento.charAt(0).toUpperCase() + alimento.slice(1);
}

let comidasModificadas = comidas.map(colocarMayusculaComidas);

for (let i = 0; i < comidasModificadas.length; i++) {
    console.log(comidasModificadas[i]);
}

/** c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array
del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro
de la variable sentence. Al final mostrar una única alerta con la cadena
completa. */

let sentence = "";

for (let i = 0; i < comidas.length; i++) {
    sentence += comidas[i];
    if (i < comidas.length -1) {
        sentence += ", "
    }
}

console.log(sentence)

/**d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con
el número de la repetición, es decir que al final de la ejecución del bucle for
debería haber 10 elementos dentro del array, desde el número 0 hasta al
número 9. Mostrar por la consola del navegador el array final (utilizar
console.log). */

let numeros = [];

for (let i = 0; i < 10; i++) {
    numeros.push(i);
    
}

console.log(numeros)