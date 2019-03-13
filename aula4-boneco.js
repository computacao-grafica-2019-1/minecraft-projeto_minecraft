var esquerdoNormal = true; 
var direitoNormal = true;
var rotacaoD = 0; 
var rotacaoE = 0;

function setup() {
  createCanvas(400, 400);
}

//
function bracoEsquerdo(){
  if(esquerdoNormal == true){
    esquerdoNormal = false;
    rotacaoE = -45;
  }
  else{
  	esquerdoNormal = true;
    rotacaoE = 0;
  }
}

//Levantar o braço direito
function bracoDireito(){
  if(direitoNormal == true){
    direitoNormal = false;
    rotacaoD = -45;
  }
  else{
  	direitoNormal = true;
    rotacaoD = 0;
  }
}

function draw() {
  background(255);
  
  //Cabeça
	push();
	translate(200,100);
	rect(-25, 0, 50, -50);
	pop();
	
	//Tronco
	push();
	translate(200,50);
  rect(-50, 50+15, 100, 100);
	pop();
  
	//Braço Direito
	push();
	translate(135,130);
  if (key == 'd'){
  	bracoDireito();
  }
  rotate(radians(rotacaoD));
  rect(-70, -15, 70, 30);
	pop();
	
  //Braço esquerdo
  push();
	translate(265,130);
  if (key == 'e'){
  	bracoEsquerdo();
  }
  rotate(radians(rotacaoE));
  rect(0, -15, 70, 30); 
  pop();
	
	//Perna Direita
	push();
	translate(165,230);
	rect(-15, 0, 30, 70);
	pop();
	
	//Perna Esquerda
  push();
  translate(235,230);
  rect(-15, 0, 30, 70);
  pop();
  
	key = '';
}
