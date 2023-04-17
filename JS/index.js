console.log('Hola Mundo')
// TIPOS DE DATOS
//String: Cadena de caracteres. 'a'
//Boolean: true false.
//Null: nulo. "Es definida"
//Number: 1 10 100
//Undefined "No definido"
//Object: objeto.
//Arreglo, contiene varios datos de distintos tipos
//lista, contiene carios datos del mismo tipo

//Variables
//Palabras reservadas: var let const
//Tratamos de evitar el uso de var
//var miPrimeraVariable="lala"

//Mutabilidad----------------------------
let miPrimeraVariable="Mi primera variable"
//console.log(miPrimeraVariable)
miPrimeraVariable="Esto ha cambiado"
//console.log(miPrimeraVariable)
//---------------------------------------

let miBoolean=true
let otroBoolean=false

let num1=0
let num2=12
let num3=-25
//console.log(miPrimeraVariable,miBoolean,num1,num2,num3)

let undef
//console.log(undef)

let nulo=null
//console.log('nulo',nulo)

//Objetos
//Es una agrupacion de datos, estos hacen sentido entre si.
const miPrimerObjeto={} //Vacio
//poseen propiedades
const miObjeto={
    unNumero:12,
    unString:"Esta cadena de caracteres",
    unaCondicion:true,
}
//console.log(miObjeto)

const arrVacio=[]
const arr=[1,2,"hola","mundo",miObjeto]
//console.log(arrVacio,arr)
arr.push(5)
arrVacio.push(3)
arrVacio.push(8)
arrVacio.push("jelous")
arrVacio.push(miPrimeraVariable)
//console.log(arrVacio)

const suma=1+2
const resta=1-2
const multiplicar=2*3
const division=9/3
const modulo=10%3
//console.log(suma,resta,multiplicar,division,modulo)
/*
let num=5
//num++
//console.log(num)
//num--
//num--
//console.log(num)
num+=5
console.log(num)
num-=5
console.log(num)
num*=5
console.log(num)
num/=2
console.log(num)*/
//OPERADORES DE COMPARACION

const resultado1 = 5==="5" //Igualdad estricta
//console.log(resultado1)
const resultado2 = 5=="5" //Igualdad no estricta
//console.log(resultado2)
const resultado3= 5<6
//console.log("5<6?: "+resultado3)
const resultado4=5>6
//console.log("5>6?: "+resultado4)
const resultado5=5>=5
//console.log("5>=5? "+resultado5)
const resultado6=5<=5
//console.log("5<=5? "+resultado6)

const resultado7=5!=='5'
//console.log("5!=='5' "+resultado7) //Desigualdad estricta
const resultado8=5!='5'
//console.log("5!='5' "+resultado8) //Desigualdad no estricta

//OPERADORES LOGICOS
// or ||, and &&, not !

const resultadoOr = false || true || 'Hola' || 'Mundo' //Esto es posible solo con el or
//console.log(resultadoOr)
const resultadoAnd = false && true
//console.log(resultadoAnd)
const resultadoNot = !true
//console.log(resultadoNot)

//CONTROL DE FLUJO
//IF
const edad=6
if(edad>5 && edad<18) console.log('Puede pasar')
else console.log('No puede pasar')

let x=1
while(x>11){
    console.log(x)
    x++
}
//SWITCH
let opcion='E'
switch(opcion){
    case 'A':
        console.log('Soy el caso A')
        break
    case 'B':
        console.log('Soy el caso B')
        break
    case 'C':
        console.log('Soy el caso C')
        break
    case 'D':
        console.log('Soy el caso D')
        break
    default:
        console.log('En caso de que ninguno aplique')
        break
}
//FOR
for(let i=1;i<=10;i++){
    console.log(i)
}

//ACCEDER A LOS ELEMENTOS DE UN ARREGLO

const numeros=['A','B','C','D','E','F','G','H','I','J']
for(let i=0;i<numeros.length;i++){
    console.log(numeros[i])
}