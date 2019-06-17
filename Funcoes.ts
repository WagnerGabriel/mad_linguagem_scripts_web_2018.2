//Função simples
let x = 10;
function exibeMsg(msg:string):void {
    console.log(msg)
}
//call fn
exibeMsg('Hello Word')
let nmFuncao:string ='exibeMsg';
exibeMsg(`Uma outra chamada de função ${nmFuncao}`)
//Funções com argumentos opcionais

let soma = 10;

function contador(valor:number = 1): void{
    soma += valor
    console.log(soma)
}

contador();
contador(5);
contador(10);


function contador2(valor?:number): void{
    console.log(valor);
    soma += valor |1;
    console.log(soma)
}


contador2();

//arrow function com expressão ternária
//
let  parOuImpar:(valor:number) => string;
parOuImpar = (valor) =>
    (valor % 2 ==0) ? "Par" : "Impar";
console.log(parOuImpar(2))