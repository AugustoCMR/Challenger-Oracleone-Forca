let header = document.querySelector(".header");
let menu = document.querySelector(".gameMenu");
let rodape = document.querySelector(".rodape");
let tela = document.querySelector("canvas");
let pincel = tela.getContext("2d");
let mostraLinha = document.querySelector(".letrasCorretas");
let mostraErros = document.querySelector(".letrasErradas");
let mostraRepetidos = document.querySelector(".letraRepetida");

mostraRepetidos.classList.add("invisivel");

let palavras = ["CACHORRO","TUCANO", "MACACO", "RINOCERONTE", "JACARE","LARANJA","ABACAXI","GOIABA","MORANGO","BANANA", "AZUL","VERMELHO","AMARELO","ROXO","PRETO"];

let palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)]

let letrasErradas = []
let letrasCorretas = []
var morte = 0

var boneco = [
	'cabeca',
	'corpo',
	'bracoesquerdo',
	'bracodireito',
	'pernaesquerda',
	'pernadireita',	
]

function criaBoneco(parte) {
	pincel.lineWidth=10;
	
	switch(parte) {
		case "cabeca":
			pincel.fillStyle="blue";
			pincel.beginPath();
			pincel.arc(837, 300, 30, 0, 2*3.14);
			pincel.fill();
			pincel.fillStyle="white";
			pincel.beginPath();
			pincel.arc(837,300,25,0,2*3.14);
			pincel.fill();
			break

		case "corpo":
			pincel.fillStyle="blue";
			pincel.fillRect(833,328,10,110);
			break

		case "bracoesquerdo":
			pincel.strokeStyle="blue";
			pincel.beginPath();
			pincel.moveTo(836,359);
			pincel.lineTo(799,390);
			pincel.stroke();
			break

		case "bracodireito":
			pincel.strokeStyle="blue";
			pincel.beginPath();
			pincel.moveTo(836,359);
			pincel.lineTo(878,390);
			pincel.stroke();
			break

		case "pernaesquerda":
			pincel.strokeStyle="blue";
			pincel.beginPath();
			pincel.moveTo(837,435);
			pincel.lineTo(806,462);
			pincel.stroke();
			break

		case "pernadireita":
			pincel.strokeStyle="blue";
			pincel.moveTo(837,435);
			pincel.lineTo(868, 460);
			pincel.stroke();
			break
	}
}

document.querySelector(".fake-input").value = "";

document.querySelector("html").addEventListener("click", () => {
	document.querySelector(".fake-input").focus();
}); 

var iniciar = document.querySelector(".btn-iniciar")

iniciar.addEventListener("click", function () {

	header.classList.add("invisivel");
	menu.classList.add("invisivel");
	rodape.classList.add("invisivel");
	tela.classList.remove("invisivel");
	let mensagem = "";
	

	pincel.fillStyle="blue";
	pincel.fillRect(600, 541, 500, 10);
	pincel.fillRect(682, 230, 10, 320);
	pincel.fillRect(688,230,150,10)
	pincel.fillRect(833,230, 10, 40)

	document.addEventListener("keydown", (evento) => {
	let codigo = evento.keyCode;



	if(isLetra(codigo)) {
		const letra = evento.key.toUpperCase();
		if(letrasErradas.includes(letra)) {
			avisoLetraRepetida();
		} else {
			if(palavraAleatoria.includes(letra)) {
				letrasCorretas.push(letra);
				
			} else {
				letrasErradas.push(letra);
				criaBoneco(boneco[morte]);
				morte++
				if(morte == 6) {
					mensagemDerrota();
					
				}


			}
		}

		atualizarJogo();
		if(mostraLinha.textContent == palavraAleatoria){
			mensagemVitoria();	
	}		
}

	});

}) 

function atualizarJogo() {
	mostrarLetrasErradas();
	mostrarLetrasCorretas();	
}

function mensagemDerrota() {
	mensagem = "Fim de jogo!<br> Você perdeu!<br> ☠️";
	document.querySelector("#mensagem").innerHTML = mensagem
	document.querySelector(".popup-container").style.display = "flex";	
}

function mensagemVitoria() {
	mensagem = "Parabéns! <br> Você ganhou! <br> &#x1F60E"
	document.querySelector("#mensagem").innerHTML = mensagem
	document.querySelector(".popup-container").style.display = "flex";
}

function mostrarLetrasCorretas() {
	let container = document.querySelector(".letrasCorretas");
	container.innerHTML= "";
	palavraAleatoria.split("").forEach((letra) => {

		if(letrasCorretas.includes(letra)) {
			container.innerHTML += `<span>${letra}</span>`;
		} else {
			container.innerHTML += `<span> __</span>`;
		}
	});

}

function mostrarLetrasErradas() {
	let div = document.querySelector(".letrasErradas");
	div.innerHTML = "";
	letrasErradas.forEach((letra) => {
		div.innerHTML += `<span>${letra}</span>`;

	});
}

function avisoLetraRepetida() {
	let aviso = document.querySelector(".letraRepetida");
	aviso.classList.remove("invisivel");
	setTimeout(() => {
		aviso.classList.add("invisivel");
	}, 2000);
}
 
function isLetra(codigo) {
	return codigo >= 65 && codigo <=90;
}

function reniciarJogo() {
	window.location.reload();
}