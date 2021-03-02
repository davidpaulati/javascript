console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

//atalho CTRL+K+C comentario em bloco
//atalho CTRL+K+U comentarios desfeitos

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    
);

listaDeDestinos.push(`Curitiba`);// push adicionando itens na lista
console.log("Destinos possíveis: ");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);//splice deleta um item da lista
console.log(listaDeDestinos);


console.log(listaDeDestinos[1]);
