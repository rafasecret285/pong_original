//variáveis da bola
let xBola = 300;
let yBola = 200;
let diametro = 13;
let raio = diametro / 2
//velocidade da bola
let velocidadeXBola = 6;
let velocidadeYBola = 6;
//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;
//variáveis da raquete oponente
let xRaqueteOponente = 585
let yRaqueteOponente = 150
let velocidadeYOponente;
//Placar do Jogo
let meusPontos = 0;
let pontosOponente = 0;
//sons do jogo
let raquetada;
let ponto;
let trilha;


let colidiu = false;

function setup() {
  createCanvas(600, 400);
  trilha.loop()
}

function draw() {
  background(0);
  mostraBola();
  movimentaBola();
  colisaoBorda();
  mostraRaquete(xRaquete,yRaquete);
  movimentaMinhaRaquete();
  //colisaoRaquete();
  movimentaRaqueteOponente();
  colisaoRaqueteBiblioteca(xRaquete,yRaquete);
  colisaoRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente);
  mostraRaquete(xRaqueteOponente,yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
  
}

function mostraBola(){
  circle(xBola,yBola,diametro);
}

function movimentaBola(){
  xBola += velocidadeXBola;
  yBola += velocidadeYBola; 
}

function colisaoBorda(){
  if(xBola + raio > width || xBola - raio < 0){
    velocidadeXBola *= -1;
  } 
  if(yBola - raio < 0 || yBola + raio > height){
    velocidadeYBola *=-1;
  }
}

function mostraRaquete(x,y){
  rect(x,y,comprimentoRaquete,alturaRaquete);
}

function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 5
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 5
  }
}

function colisaoRaquete(){
  if(xBola - raio < xRaquete + comprimentoRaquete
    && yBola - raio < yRaquete +alturaRaquete
    && yBola + raio > yRaquete){
    velocidadeXBola *= -1;
    raquetada.play();
  }
}

function movimentaRaqueteOponente(){
  if(keyIsDown(87)){
    yRaqueteOponente -=5
  }
  if(keyIsDown(83)){
    yRaqueteOponente +=5
  }
}

function colisaoRaqueteBiblioteca(x,y){
colidiu = collideRectCircle(x,y,comprimentoRaquete, alturaRaquete,xBola,yBola,raio);
  if(colidiu){
    velocidadeXBola *= -1
    raquetada.play()
  }
}

function incluiPlacar(){
  stroke(255)
  fill(color(255,140,0))
  textAlign(CENTER)
  rect(150,10,40,20)
  rect(450,10,40,20)
  //texto
  textSize(16)
  fill(255)
  text(meusPontos,170,26,);
  text(pontosOponente,470,26);
}

function marcaPonto(){
  if(xBola > 590){
    meusPontos += 1
    ponto.play()
  }
  if(xBola < 10){
    pontosOponente += 1
    ponto.play()
  }
}

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}








