// JavaScript Document

$(document).ready(function(e) {
		
	var CANVAS					= $('#canvas')[0];
	var CTX				= CANVAS.getContext('2d');
	var clavier = new Clavier();
	var droite=300, haut=550, flip=true, frame=0, widthS=218, heightS=379, LineLenght=7;
	var scene=0, xpave=100, xpierre=1790, xpierre2=1200, xpuit=1900; 
	var xfondpuit=0, xpierre3=250, xroche=-730, xcasque=0, xaquarelle=0, xsoleil=0;

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

	var fondpuit 			= new Image();
	var pierre3 			= new Image();
	var roche 			= new Image();
	var casque 			= new Image();
	var aquarelle 			= new Image();
	var soleil 			= new Image();
	fondpuit.src            = '../../assets/img/fond_puit.png';
	pierre3.src            = '../../assets/img/pierre3.png';
	roche.src            = '../../assets/img/roche.png';
	casque.src            = '../../assets/img/casque.png';
	aquarelle.src            = '../../assets/img/aquarelle.png';
	soleil.src            = '../../assets/img/soleil.png';

	// ************** PERSO *****************
	var perso					= new Object( { 'pic':new Image(), 'x':0, 'y':0, 'angle':0 } );
	perso.pic.src				= '../../assets/img/spritesheet2.png';
	
	perso.pic.onload=function(){ setInterval(boucle,25); };

	function boucle(){

		if (clavier.haut){
			scene = 1;
		}

		if(scene == 1){
			CTX.save();
			CTX.clearRect(0,0,CANVAS.width, CANVAS.height);
			CTX.drawImage(pierre2,xpierre2,730,1199,167);
			CTX.drawImage(puit,xpuit,670,455,234);
			CTX.drawImage(pierre,xpierre,830,782,126);
			CTX.drawImage(pave,xpave,850,2467,162);
			CTX.translate(droite, haut);
			if (flip) {CTX.scale(-1,1); CTX.translate(0,0);}
			CTX.drawImage(perso.pic, (frame%LineLenght)*widthS,Math.floor(frame/LineLenght)*heightS,widthS,heightS,0,0,widthS,heightS);
			CTX.restore();
			if (clavier.droite && xpave>=-1000){
				xpave=xpave-12;
				xpierre=xpierre-12;
				xpierre2=xpierre2-12;
				xpuit=xpuit-12;
				droite+=1;
				flip=true;
				frame++;
			}
			else if(xpave < -999){
				scene=2;
				droite=-1000;
				gauche=1000;
			}
		}
		if (frame >= 21) frame=0;

		if (scene == 2){
			CTX.save();
			CTX.clearRect(0,0,CANVAS.width, CANVAS.height);
			CTX.drawImage(fondpuit,xfondpuit,0,2648,1230);
			CTX.drawImage(pierre3,xpierre3,700,1854,530);
			CTX.drawImage(soleil,xsoleil,0,1385,1230);
			CTX.drawImage(aquarelle,xaquarelle,0,2648,1224);
			CTX.drawImage(roche,xroche,0,2648,1230);
			CTX.drawImage(perso.pic, (frame%LineLenght)*widthS,Math.floor(frame/LineLenght)*heightS,widthS,heightS,0,0,widthS,heightS);
			//CTX.translate(droite, haut);
			CTX.restore();
			if (clavier.gauche){
				droite-=5;
				flip=false;
				position=2;
				frame++;
			}
		}



		

	}
});