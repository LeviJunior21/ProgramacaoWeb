// Questão 1: Busca do endereço residencial de Silvio Santos. 

const { error } = require("console");
const http = require("https")

const dono = {
    "proprietario": "Silvio Santos",
    "endereco": {
        "cep":'hacked, pay to recover',
        "logradouro": 'hacked, pay to recover',
        "complemento": 'hacked, pay to recover',
        "bairro": 'hacked, pay to recover',
        "localidade": 'hacked, pay to recover',
        "uf": '',
        "geo": {
            "lat": "-23.61919020307765",
            "lng": "-46.70793551534256"
        }
    }
}

/**
 * Realiza uma requisição http para buscar informações do endereço do usuário através do CEP.
 * 
 * @param {string} cep - CEP do usuário.
 * @returns {Promise<Object>} - Retorna uma promessa que resolve com os dados do endereço. 
 */
const getEndereco = cep => {
    const url = `https://viacep.com.br/ws/${cep}/json`

    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = "";

            res.on('data', dados => {
                resultado += dados;
            });

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado));
                } catch (error) {
                    reject(error);
                }
            });
        });
    });
}

/**
 * Retorna o endereço do usuário através do CEP. 
 * 
 * @param {string} cep - CEP do usuário. 
 * @returns {Promise<string>} - Informações da maradia do usuário. 
 */
const resultado = (cep) => getEndereco(cep).then(res => {
    let resultado = "";
    const {cep, logradouro, complemento, bairro, localidade, uf} = res;
    
    dono.endereco.cep = cep;
    dono.endereco.logradouro = logradouro;
    dono.endereco.complemento = complemento;
    dono.endereco.bairro = bairro;
    dono.endereco.localidade = localidade;
    dono.uf = uf;
 
    resultado = `${dono.proprietario} - ${dono.endereco.cep} - ${dono.endereco.bairro} - ${dono.endereco.localidade} (${dono.endereco.geo.lat}, ${dono.endereco.geo.lng})`;
    
    return resultado;
});

const cep = "05650000";

resultado(cep)
    .then(res => console.log(res))
    .catch(err => console.log(`Ocorreu um erro ${err}`));


// Questão 2: Data de apresentação de TCC. 
    
/**
 * Checa se o TCC pode ser apresentado através do dia de entrega e o dia da apresentação do TCC. 
 * 
 * @param {number} diaEntrega - Dia da entrega maior que 0 e menor que 25.
 * @param {number} diaApresentacao - Dia da apresentação maior que 0 e menor que 25.
 */
const apresentarTCC = (diaEntrega, diaApresentacao) => {
    let diasRestantes = diaApresentacao - diaEntrega;

    if (diaEntrega > 0 && diaEntrega < 25 && diaApresentacao > 0 && diaApresentacao < 25) {
        if (diasRestantes > 3) {
            console.log("Muito bem! O aluno está apto a apresentar até o natal!");
        } 
        else {
            console.log("O trabalho está muito ruim!");

            if (diaApresentacao + 2 > 24) {
                console.log("Não deu! Só no próximo ano agora.");
            } else {
                console.log("TCC Apresentado!");
            }
        }
     } else {
        console.log("Eu odeio o prof. Florovsky!");
    }
}


apresentarTCC(13, 19);
apresentarTCC(22, 23);
apresentarTCC(21, 22);


// Questão 3: 

/**
 * Deixa um texto em maiúsculo após 500ms. 
 * 
 * @param {string} texto - Texto de entrada. 
 * @returns {Promise<string>} - Retorna uma promessa com o texto em maiúsculo. 
 */
const colocarTodasLetrasEmMaiusculoEm500ms = (texto) => {
    return new Promise((resolve, reject) => {        
        if (typeof texto !== 'string') {
            reject("A entrada não é uma string.");
            return;
        }

        setTimeout(() => {
            textoMaiusculo = texto.toUpperCase();
            resolve(textoMaiusculo);
        }, 500);
    });
}

/**
 * Deixa um texto em maiúsculo após 500ms. 
 * 
 * @param {string} texto - Texto de entrada. 
 */
const inverteTodasLetras = (texto) => {    
    colocarTodasLetrasEmMaiusculoEm500ms(texto).then(res => {
        console.log(res.split("").reverse().join(""));
    }).catch((err) => console.error(err));
}

inverteTodasLetras("levi");


// Questão 4: 

/**
 * Deixa um texto em maiúsculo após 500ms. 
 * 
 * @param {string} texto - Texto de entrada. 
 */
const inverteTodasLetrasAsync = async(texto) => {
    try {
        const resultado = await colocarTodasLetrasEmMaiusculoEm500ms(texto);
        console.log(resultado.split("").reverse().join(""));
    } catch (err) {
        console.error(err);
    }
}

inverteTodasLetrasAsync(1234);


// Questão 5: 

const crypto = require("crypto");

// Criptografia de dados
const criptografarMensagem = (texto, chaveSecreta) => {
    const algorithm = 'aes-256-cbc';
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, Buffer.from(chaveSecreta), iv);
    let encrypted = cipher.update(texto, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    // Retorna o IV junto com o texto criptografado
    return `${iv.toString('hex')}:${encrypted}`;
}
    
// Função para descriptografar dados
const decritografar = (textoCriptografado, chaveSecreta) => { 
    const algorithm = 'aes-256-cbc';
    const [ivHex, encrypted] = textoCriptografado.split(':');
    const iv = Buffer.from(ivHex, 'hex');
    const decipher = crypto.createDecipheriv(algorithm, Buffer.from(chaveSecreta), iv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

const chaveCriptografia = "keyCriptografia--KeyCriptografia";

const processarNumeros = (numeros, callbackFunction) => {
    let numerosPares = numeros.filter(numero => numero % 2 == 0);
    let crypto = numerosPares.map(numeroPar => criptografarMensagem(numeroPar.toString(), chaveCriptografia));
    callbackFunction(crypto);
}


processarNumeros([1,2,3,4], res => {
    console.log(res);
    console.log(res.map(valorCriptografado => Number(decritografar(valorCriptografado, chaveCriptografia))));
});
