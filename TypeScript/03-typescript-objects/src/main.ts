let stringArr =['one', 'two', 'Dave']

let guitars =['Strat', 'Les Paul', 5150]

let mixedData =['Evh', 1984, true]

stringArr[0] = 'Json'

console.log(stringArr)

stringArr.push('heu')

console.log(stringArr);

guitars.unshift('Jhon')

console.log(guitars);

let test = []

let bands:string[] =[]
bands.push('Van Halen')

console.log(bands);


let myTuple: [string, number, boolean] =['Dave', 42, true]

let mixed = ['John', 1, false]

myTuple[1] =42

console.log(myTuple);


// objects

let muObject: object

muObject=[]
console.log(typeof muObject);

muObject = bands
muObject = {}
console.log(muObject);

const exampleObj = {
    prop1: 'Dave',
    prop2: true
}

exampleObj.prop1 = 'John'

interface Guitarist {
    name?:string,
    active: boolean,
    albums: (string | number)[]
}


let evh: Guitarist = {
    name: 'Eddie',
    active:false,
    albums: [1984, 5150, 'OU812']
}

console.log(typeof evh.name, typeof evh.active,typeof evh.albums, );


let jp: Guitarist = {
    active:true,
    albums: ['I', 'II', 'IV']

}

console.log(jp);


const greetGuitarist = (guitarist:Guitarist)=>{
    if(guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`
    }
    return 'Hello!'
}

console.log(greetGuitarist(jp));

enum Grade {
    U = 1,
    D,
    C,
    B,
    A,
}

console.log(Grade.C)








