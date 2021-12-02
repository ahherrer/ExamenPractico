//..Punto 1:
/* let num1 = 5;
let num2 = 8;

if (num2 > num1) {
    console.log("numero 1 no es mayor que numero 2")

}

if (num2 > 0) {
    console.log("numero 2 es positivo");
}

if (num1 < 0 || num1 != 0) {
    console.log("numero 1 es negativo o diferente de cero")
}


if(num1 + 1 < num2){
    console.log("Incrementar en 1 unidad el valor denumero1 no lo hace mayor oigual que numero2");
} */

//..PUNTO 2:
/* var factorial = 1;
var numero = 5;
for (let i = 1; i <= numero; i++) {
    factorial = factorial * i;
}
console.log("El factorial del numero " + numero + " es : " + factorial); */

//..PUNTO 3:
/* console.log(esPar(3));

function esPar(a) {
    if (a % 2 == 0) {
        var respuesta = "El numero " + a + " es par";
    } else {
        var respuesta = "El numero " + a + " es impar";

    }
    return respuesta;


} */

//..PUNTO 4:

/* function esPalindromo(str) {
    const newStr = str.replace(/[\W_]/g, "").toLowerCase();
    const reversar = newStr.split("").reverse().join("");

    return newStr == reversar ? "es palindromo" : "no es palindromo"
}

console.log(esPalindromo("amad a la dama")); 
 */

//..PUNTO 5:
/* class Person{
    //propiedades
    nombre;
    edad;

    //Constructor
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    //metodos
    obtDetalles() {
        
        return "Nombre: " + this.nombre + " ,Edad: " + this.edad;
        //return console.log(this.nombre);
        //console.log(this.edad);

    }

}
let person1 = new Person("Andres", "12");
console.log(person1.obtDetalles());

class Estudiante extends Person {
    //propiedades
    calificacion;

    constructor(nombre, edad, calificacion) {
        super(nombre, edad);
        this.calificacion = calificacion;

    }

    obtDetalles() {
        return super.obtDetalles() + " ,Calificacion: " + this.calificacion;

    }

}
const estudiante = new Estudiante("Ana", 12, 4.5);
console.log(estudiante.obtDetalles());

class Profesor extends Person{
    //propiedades
    asignatura;
    nivel;

    constructor(nombre , edad , asignatura = "JS", nivel = "basico"){
        super(nombre, edad);
        this.asignatura = asignatura;
        this.nivel = nivel;
    }

    obtDetalles(){
        return super.obtDetalles() + " ,Asignatura: " + this.asignatura + " ,Nivel: " + this.nivel;
  
    } 
} 
const profesor = new Profesor("Carlos", 20, "Ciencia", "Alto");
console.log(profesor.obtDetalles()); */

//class Grupo {
//    //propiedades
//    profesorProm= {profesor1:"p1", profesor2:"p2" };
//    estudiantes = new Array[3];

//    constructor(profesorProm, estudiantes){
       
//    } 
//}

//..BONUS..

function combinaciones(texto){
    if (typeof texto != 'string'){
        throw TypeError("No es una cadena de texto");
    }

    if (texto.length <=2){
        return texto.length === 2 ? [texto, texto[1] + texto[0]] : [texto];
    }

    return texto.split("").reduce((a, c, i) => 
    a.concat(combinaciones(texto.slice(0 , i) + texto.slice(i +1)).map(v => c + v)),[]);
}

try{
    console.log(combinaciones('casa'));
}catch (e){
    console.log('Error: ${e.message}');
}
