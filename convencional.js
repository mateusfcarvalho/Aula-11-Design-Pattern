class Pessoa{
    constructor (name, idade) {
        this.name = name
        this.idade= idade
    }
    getName ( ) {
        return this.name
    }
    getIdade ( ) {
        return this.idade
    }  
}

const pessoa = new Pessoa ('Mateus', 22)

console.log (pessoa.getName ( ))
console.log (pessoa.getIdade ( ))