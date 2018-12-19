// JavaScript Document

$(document).ready(function(e) {
		
	var CANVAS					= $('#canvas')[0];
	var CTX				= CANVAS.getContext('2d');
	var CANVAS_centre			= new Object( { 'x':CANVAS.width/2, 'y':CANVAS.height/2 } );
	
	var FPS						= Math.floor(1000 / 50);
	var ENTER_FRAME				= null;
	
	var clavier = new Clavier();
	var droite=0, haut=0, flip=false, position=2, inc=0;
	var mario					= new Object( { 'pic':new Image(), 'x':0, 'y':0, 'angle':0 } );
    //var walk = new Animation(mario, 3, 0, 29);
    //var mario					= new Object( { 'pic':new Image(), 'x':39, 'y':0 );
	
	// Chargement de l'image
	mario.pic.src				= '../../assets/img/spritesheet.png';// Path par rapport au document HTML, pas par rapport au document JS
	mario.pic.onload=function(){
		setInterval(boucle, 20);
	};

	function boucle(){
		
		CTX.save();
		CTX.clearRect(0,0,CANVAS.width, CANVAS.height);
		if (clavier.droite){
			droite+=5;
			position=2;
			flip=true;
			inc++;
		}
		else if (clavier.gauche){
			droite-=5;
			flip=false;
			position=2;
			inc++;
		}
		if (inc > 6) inc=0;
		
		
		CTX.translate(droite, haut);
		if (flip) {CTX.scale(-1,1); CTX.translate(-32,0);}
		CTX.drawImage(mario.pic, inc*221,position*375,221,375,38,0,221,375);
		
		
		CTX.restore();

	}
});