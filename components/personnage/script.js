// JavaScript Document

$(document).ready(function(e) {
		
	var CANVAS					= $('#canvas')[0];
	var CTX				= CANVAS.getContext('2d');
	var clavier = new Clavier();
	var droite=300, haut=550, flip=true, frame=0, widthS=218, heightS=379, LineLenght=7, xpave=100, xpierre=1790, xpierre2=1200, xpuit=1900;
	var scene1=true, scene2=false, scene3=false, scene4=false ; 
	// ************** DECOR 1 *****************
	var pave 			= new Image();
	var puit 			= new Image();
	var pierre 			= new Image();
	var pierre2 			= new Image();
	pave.src            = '../../assets/img/pave.png';
	puit.src            = '../../assets/img/puit.png';
	pierre.src            = '../../assets/img/pierre.png';
	pierre2.src            = '../../assets/img/pierre2.png';

	// ************** DECOR 2 *****************

	var pave 			= new Image();
	var puit 			= new Image();
	var pierre 			= new Image();
	var pierre2 			= new Image();
	pave.src            = '../../assets/img/pave.png';
	puit.src            = '../../assets/img/puit.png';
	pierre.src            = '../../assets/img/pierre.png';
	pierre2.src            = '../../assets/img/pierre2.png';

	// ************** PERSO *****************
	var perso					= new Object( { 'pic':new Image(), 'x':0, 'y':0, 'angle':0 } );
	perso.pic.src				= '../../assets/img/spritesheet2.png';
	
	//pave.onload=function() {setInterval(boucle, 20);};
	//pierre.onload=function() {setInterval(boucle, 20);};
	//pierre2.onload=function() {setInterval(boucle, 20);};
	//puit.onload=function() {setInterval(boucle, 20);};
	perso.pic.onload=function(){ setInterval(boucle,25); };

	function boucle(){
		CTX.save();
		CTX.clearRect(0,0,CANVAS.width, CANVAS.height);

		if (clavier.droite && xpave>=-1000){
			xpave=xpave-12;
			xpierre=xpierre-12;
			xpierre2=xpierre2-12;
			xpuit=xpuit-12;
			droite+=1;
			flip=true;
			frame++;
		}
		else if(xpave <= -999){
			scene1=false;
			scene2=true;
		}
		/*
		else if (clavier.gauche){
			droite-=5;
			flip=false;
			position=2;
			frame++;
		}*/
		if (frame >= 21) frame=0;

		if(scene1 == true){
			CTX.drawImage(pierre2,xpierre2,730,1199,167);
			CTX.drawImage(puit,xpuit,670,455,234);
			CTX.drawImage(pierre,xpierre,830,782,126);
			CTX.drawImage(pave,xpave,850,2467,162);
			CTX.translate(droite, haut);
			if (flip) {CTX.scale(-1,1); CTX.translate(0,0);}
			CTX.drawImage(perso.pic, (frame%LineLenght)*widthS,Math.floor(frame/LineLenght)*heightS,widthS,heightS,0,0,widthS,heightS);
			CTX.restore();
		}
		else if (scene2 == true){

		}



	}
});