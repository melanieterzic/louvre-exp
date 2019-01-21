// JavaScript Document

$(document).ready(function(e) {
		
	var CANVAS					= $('#canvas')[0];
	var CTX				= CANVAS.getContext('2d');
	var clavier = new Clavier();
	var droite=300, haut=550, flip=true, frame=0, frame2=0, widthS=218, heightS=379, LineLenght=7, widthS2=390, heightS2=648, LineLenght2=5;
	var scene=0, xpave=100, xpierre=1790, xpierre2=1200, xpuit=1900; 
	var xfondpuit=-728, xpierre3=250, xroche=-730, xcasque=0, xsoleil=0;
	var xfondtunnel=-4000, xplafond=-4000, xplafond2=-4000, xplafond3=-4000, xlumiere2=-4000, xcolonne=-4000;
	var xfalse1=-1100, xfalse2=-100, xplan1=-2000, xplan2=1000, xplan3=-1050, xvraie=-2100;

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
	var soleil 			= new Image();
	fondpuit.src            = '../../assets/img/fondpuit.png';
	pierre3.src            = '../../assets/img/pierre3.png';
	roche.src            = '../../assets/img/roche.png';
	casque.src            = '../../assets/img/casque.png';
	soleil.src            = '../../assets/img/soleil.png';

	// ************** DECOR 3 *****************
	var fondtunnel 			= new Image();
	var plafond 			= new Image();
	var colonne 			= new Image();
	var plafond2 			= new Image();
	var plafond3 			= new Image();
	var lumiere2 			= new Image();
	
	fondtunnel.src            = '../../assets/img/background.png';
	plafond.src            = '../../assets/img/plafond.png';
	plafond2.src            = '../../assets/img/plafond2.png';
	plafond3.src            = '../../assets/img/plafond3.png';
	lumiere2.src            = '../../assets/img/degrade.png';
	colonne.src            = '../../assets/img/colonne.png';

	// ************** DECOR 4 *****************
		var false1 			= new Image();
		var false2 			= new Image();
		var plan1 			= new Image();
		var plan2 			= new Image();
		var plan3 			= new Image();
		var vraie 			= new Image();
		
		false1.src            = '../../assets/img/false1.png';
		false2.src            = '../../assets/img/false2.png';
		plan1.src            = '../../assets/img/plan1.png';
		plan2.src            = '../../assets/img/plan2.png';
		plan3.src            = '../../assets/img/plan3.png';
		vraie.src            = '../../assets/img/vraie.png';

	// ************** PERSO *****************
	var perso					= new Object( { 'pic':new Image(), 'x':0, 'y':0, 'angle':0 } );
	perso.pic.src				= '../../assets/img/spritesheet2.png';

	var perso2					= new Object( { 'pic':new Image(), 'x':0, 'y':0, 'angle':0 } );
	perso2.pic.src				= '../../assets/img/spritesheet.png';

	perso.pic.onload=function(){ setInterval(boucle,25); };

	function boucle(){
		if (clavier.haut){
			scene = 1;
		}

		// ************** SCENE 1 *****************

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
			}
		}
		if (frame >= 21) frame=0;
		if (frame2 >= 25) frame2=0;

		// ************** SCENE 2 *****************

		if (scene == 2){
			CTX.save();
			CTX.clearRect(0,0,CANVAS.width, CANVAS.height);
			CTX.drawImage(fondpuit,xfondpuit,0,2648,1230);
			CTX.drawImage(pierre3,xpierre3,650,1854,530);
			CTX.drawImage(soleil,xsoleil,0,1385,1230);
			CTX.drawImage(fondtunnel,xfondtunnel,0,3840,1200);
			CTX.drawImage(colonne,xcolonne,0,1810,1200);
			CTX.drawImage(plafond,xplafond,0,3840,1200);
			CTX.drawImage(plafond2,xplafond2,0,3840,1200);
			CTX.drawImage(perso2.pic,(frame2%LineLenght2)*widthS2,Math.floor(frame2/LineLenght2)*heightS2,widthS2,heightS2,850,500,widthS2,heightS2);
			CTX.drawImage(plafond3,xplafond3,0,3840,1200);
			CTX.drawImage(lumiere2,xlumiere2,0,3840,1200);
			CTX.translate(droite,haut);
			CTX.restore();
			CTX.drawImage(roche,xroche,0,2648,1230);

			if (clavier.gauche){

				xlumiere2=xlumiere2+9;
				xplafond3=xplafond3+9;
				xplafond2=xplafond2+9;
				xplafond=xplafond+9;
				xcolonne=xcolonne+9;
				xfondtunnel=xfondtunnel+9;

				xfondpuit=xfondpuit+9;
				xpierre3=xpierre3+9;
				xsoleil=xsoleil+9;
				xroche=xroche+9;

				droite-=5;
				flip=false;
				position=2;
				frame2++;
				if(xfondpuit > 3060){
					CTX.save();
					CTX.clearRect(0,0,CANVAS.width, CANVAS.height);
					scene=3;
				}
			}

		}

		// ************** SCENE 3 *****************

		if (scene == 3){
			CTX.save();
			CTX.clearRect(0,0,CANVAS.width, CANVAS.height);
			CTX.drawImage(plan3,xplan3,1000,2938,123);
			CTX.drawImage(plan2,xplan2,1040,404,82);
			CTX.drawImage(plan1,xplan1,1000,367,76);
			CTX.drawImage(false2,xfalse2,100,715,554);
			CTX.drawImage(false1,xfalse1,100,715,554);
			CTX.drawImage(vraie,xvraie,100,715,554);
			CTX.drawImage(perso2.pic,(frame2%LineLenght2)*widthS2,Math.floor(frame2/LineLenght2)*heightS2,widthS2,heightS2,850,500,widthS2,heightS2);
			CTX.translate(droite,haut);
			CTX.restore();

			if (clavier.gauche){

				xplan3=xplan3+9;
				xplan2=xplan2+9;
				xplan1=xplan1+9;
				xfalse2=xfalse2+9;
				xfalse1=xfalse1+9;
				xvraie=xvraie+9;

				droite-=5;
				flip=false;
				position=2;
				frame2++;
			}

		}



		

	}
});