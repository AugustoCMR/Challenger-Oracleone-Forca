/*let tela = document.querySelector("canvas");
let pincel = tela.getContext("2d"); */

pincel.fillStyle = "lightgrey";
pincel.fillRect(500,100,1200,800)

function pegaCordenada(evento) {
	let x = evento.pageX - tela.offsetLeft;
	let y = evento.pageY - tela.offsetTop;
	console.log(x + "," + y);
	

}

//837,275
pincel.fillStyle="blue";
pincel.fillRect(600, 541, 500, 10);
pincel.fillRect(682, 230, 10, 320);
pincel.fillRect(688,230,150,10)
pincel.fillRect(833,230, 10, 40)

//Cabeça
pincel.fillStyle="blue";
pincel.beginPath();
pincel.arc(837, 300, 30, 0, 2*3.14)
pincel.fill();

pincel.fillStyle="white";
pincel.beginPath();
pincel.arc(837,300,25,0,2*3.14)
pincel.fill();

//body
pincel.fillStyle="blue";
pincel.fillRect(833,328,10,110)

pincel.strokeStyle = "blue";
pincel.lineWidth = 10;
pincel.beginPath();

//braço esquerdo
pincel.moveTo(836,359)
pincel.lineTo(799,390)
pincel.stroke();

//braço direito
pincel.moveTo(836,359)
pincel.lineTo(878,390)
pincel.stroke();

//perna direita
pincel.moveTo(837,435);
pincel.lineTo(868, 457);
pincel.stroke(); 

//perna esquerda 
pincel.moveTo(837,435);
pincel.lineTo(806,462);
pincel.stroke();










tela.onclick = pegaCordenada;