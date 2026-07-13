const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

function ajustarCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

ajustarCanvas();

window.addEventListener("resize", ajustarCanvas);

const letras = [
    "W",
    "H",
    "A",
    "T",
    "",
    "S",
    "H",
    "O",
    "U",
    "L",
    "D",
    "",
    "I",
    "",
    "P",
    "L",
    "A",
    "Y"
];

const tamanhoFonte = 16;
const distanciaColunas = 140;
const distanciaLetras = 18;

let colunas = [];

function criarColunas(){
    colunas = [];

    const quantidade = Math.ceil(canvas.width / distanciaColunas);

    for(let i = 0; i < quantidade; i++){
        colunas.push({
            x: i * distanciaColunas + Math.random() * 40,
            y: Math.random() * -canvas.height,
            velocidade: 1 + Math.random() * 1.5
        });
    }
}

criarColunas();

function desenharMatrix(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.font = `bold ${tamanhoFonte}px Arial`;
    ctx.fillStyle = "#ffffff";

    colunas.forEach(coluna => {
        letras.forEach((letra, index) => {
            if(letra === "") return;

            const y = coluna.y + index * distanciaLetras;

            ctx.fillText(letra, coluna.x, y);
        });

        coluna.y += coluna.velocidade;

        if(coluna.y > canvas.height + 300){
            coluna.y = -400 - Math.random() * 600;
            coluna.velocidade = 1 + Math.random() * 1.5;
        }
    });

    requestAnimationFrame(desenharMatrix);
}

desenharMatrix();