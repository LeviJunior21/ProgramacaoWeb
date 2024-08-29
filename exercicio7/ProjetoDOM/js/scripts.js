//Etapa 1: Modificar o conteúdo de parágrafos. Se algum dos inputs não estiver preenchido, não modifique o seu respectivo texto.
//Dica01: Utilize a propriedade "textContent" para modificar o texto de um parágrafo.
//Dica02: Utilize a propriedade "value" para recuperar a informação preenchida nos campos de input.
const alterarTextos = () => {
    let valor1 = document.getElementById("input1").value;
    let valor2 = document.getElementById("input2").value;
    let valor3 = document.getElementById("input3").value;
    document.getElementById("texto1").textContent = valor1? valor1 : "Texto 1";
    document.getElementById("texto2").textContent = valor2? valor2 : "Texto 2";
    document.getElementById("texto3").textContent = valor3? valor3 : "Texto 3";
}

//Etapa 2: Adicionar e remover elementos no final da lista de itens
//Dica01: Utilize o método createElement para criar li
//Dica02: Utilize a propriedade "textContent" do li para modificar o seu conteúdo
//Dica03: Utilize a propriedade "ul.children.length" para saber a quantidade de itens na lista
//Dica04: Utilize a propriedade "ul.appendChild" para adicionar o li na lista
function adicionarItem() {
    let lista = document.getElementById("listaItens");
    let nextChild = lista.children.length + 1;
    let li = document.createElement("li");
    li.textContent = `Item ${nextChild.toString()}`;
    lista.appendChild(li);
}

//Dica05: Utilize as propriedades "ul.removeChild" e "ul.lastChild" para fazer remoções de li na lista
//Dica06: Lembre-se de só deixar remover se a lista tiver pelo menos um elemento
function removerItem() {
    let lista = document.getElementById("listaItens");
    if (lista.hasChildNodes()) {
        lista.removeChild(lista.lastChild);
    }
}

//Etapa 3: Modificar estilos de inputs do tipo text
//Obrigatório: Uso de callback function para alterar a cor de fundo de todos os inputs
//Dica01: Utilize a propriedade "style.backgroundColor" para modificar a cor de fundo dos inputs
function mudarCorFundo() {
    const inputs = document.querySelectorAll('input[type="text"]');
    let corFundo = document.getElementById("inputCor").value;
    inputs.forEach(input => {input.style.backgroundColor = corFundo})
}

//Etapa 4: Ocultar e Exibir Elementos
//Dica01: Utilize a propriedade "style.display" e o valor da variável estilo para ocultar ou exibir a imagem
function ocultarImagem() {
    estilo = 'none'
    document.getElementById("imagem").style.display = estilo;
}

function exibirImagem() {
    estilo = 'block'
    document.getElementById("imagem").style.display = estilo;
}

//Etapa 5: Mover elementos na página
//Dica01: Utilize apenas as propriedades "box.style.left" e "box.style.top" para fazer a movimentação do elemento
function mover(direcao) {
    const box = document.getElementById('divDeslizavel');
    let left = parseInt(window.getComputedStyle(box).left) || 0;
    let top = parseInt(window.getComputedStyle(box).top) || 0;
    
    let step = 10;

    switch (direcao) {
        case 'esquerda':
            box.style.left = `${left - step}px`;
            break;
        case 'direita':
            box.style.right = `${left + step}px`;
            break;
        case 'cima':
            box.style.top = `${top - step}px`;
            break;
        case 'baixo':
            box.style.top = `${top + step}px`;
            break;
    }
}

//Exercício 6: Trocar Classe de Elementos
//Dica01: Utilize a propriedade "p.classList.toggle" para fazer a alternância
function alternarClasse() {
    const p = document.getElementById('classeParagrafo');
    p.classList.toggle('classeAzul');
    p.classList.toggle('classeVermelha');

    if (p.className == "classeAzul") {
        p.textContent = "Este parágrafo é da classe azul.";
    } else {
        p.textContent = "Este parágrafo é da classe vermelha.";
    }
}

//Exercício 7: Galeria de Imagens com Zoom
//Dica01: Utilize a função replace para substitutir o 100 por 300 no valor de src da imagem
function mostrarImagemMaior(img) {
    const imagemMaior = document.getElementById('imagem-maior');
    imagemMaior.src = img.src.replace("100", "300");
}

// Exercício 8: Validação de Formulário
//Obrigatório: É preciso aplicar estratégias de validação dos valores dos quatro campos do formulário.
//Pelo menos: não aceitar nome vazio, o cpf precisa estar mascarado e com 14 dígitos, 
//o email precisa ter pelo menos um @ e um ponto duas posições após o @ e a senha não deve conter menos que 8 caracteres.
function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const erro = document.getElementById('mensagem-erro');
    
    erro.textContent = '';
    return true;
}

// Exercício 9: Contador Incremental
//Dica01: Utilize a propriedade "textContent" para modificar o texto de um parágrafo.
//Desafio01: Implemente a geração da música "Um Elefante Incomodaa Muita Gente"
//quando o número de versos for maior que 9, a função deve colocar reticência (...) para o caso
//do número de "incomodam" ser maior ou igual a 10.
let contador = 0;
function incrementar() {
    contador++;
}

function decrementar() {
    contador--;
}

function geraMusicaElefante(numVersos){

}

// Exercício 10: Filtrar Itens de uma Lista com callback e arrow function
//Dica01: Utilize a propriedade "textContent" para modificar o texto de um parágrafo.
//Desafio02: Transforme a lista de itens em objetos (professor: nome, area, laboratorio, disciplina) e utilize o filtro para atuar considerando todos os atributos do projeto.
function filtrarItens() {
    const filtro = document.getElementById('filtro').value.toLowerCase();
    const itens = document.getElementById('lista-professores').getElementsByTagName('li');

    //Converter o comando de repetição abaixo em uma callback que recebe como parâmetro uma arrow function
    for (let i = 0; i < itens.length; i++) {
        let item = itens[i].textContent || itens[i].innerText;
        if (item.toLowerCase().indexOf(filtro) > -1) {
            itens[i].style.display = "";
        } else {
            itens[i].style.display = "none";
        }
    }
}
