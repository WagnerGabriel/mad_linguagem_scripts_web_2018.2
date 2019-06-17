//Função simples
var x = 10;
function exibeMsg(msg) {
    console.log(msg);
}
//call fn
exibeMsg('Hello Word');
var nmFuncao = 'exibeMsg';
exibeMsg("Uma outra chamada de fun\u00E7\u00E3o " + nmFuncao);
//Funções com argumentos opcionais
var soma = 10;
function contador(valor) {
    if (valor === void 0) { valor = 1; }
    soma += valor;
    console.log(soma);
}
contador();
contador(5);
contador(10);
function contador2(valor) {
    soma += valor;
    console.log(soma);
}
contador2();
