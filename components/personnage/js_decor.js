// D'abord la classe Decor, qui permettra de générer le décor correspondant au niveau
// de numéro num
function Decor(num) {
	var CANVAS						= $('#decor')[0];
	var CANVAS2_CTX					= CANVAS.getContext('2d');
	
	var xml		   				    = null;
	
	var decor_img					= null;
	var tuile						= new Object( { 'larg': 0, 'haut':0, 'type':null } );
	
	var lignes						= 0;
	var colonnes					= 0;
	
	$.ajax({
		type: 'GET',
		url: 'xml/decor.xml',
		dataType: 'xml',
		success: place_decor,
		error: AJAX_erreur
	});
	
	function place_decor(p_xml){
		decor_img					= new Image();
		decor_img.src				= 'images/decor.png';
		decor_img.onload = function(){
			// Dimensions d'une tuile
			tuile.larg = parseInt($(p_xml).find('dalle').attr('largeur'));
			tuile.haut = parseInt($(p_xml).find('dalle').attr('hauteur'));
			
			// Nombre de tuiles dans le niveau, selon les lignes et les colonnes
			lignes   = $(p_xml).find('niveau').eq(num).find('decor').length;
			colonnes = $(p_xml).find('niveau').eq(num).find('decor').eq(0).attr('descr').length;
			
			var type;
		    
			
			CANVAS2_CTX.save();
			// On trace le deuxième élément de décor en haut à gauche, en coupant dans l'image
			// à partir de (tuile.larg,0) sur une largeur de tuile.larg et une hauteur de tuile.haut 
			CANVAS2_CTX.drawImage(decor_img,1*tuile.larg,0,tuile.larg,tuile.haut,0,0,tuile.larg,tuile.haut);
			CANVAS2_CTX.restore();
				
			
			
		};
	}
	
	function AJAX_erreur(xhr, ajaxOptions, thrownError) {
		console.log('----- AJAX_erreur : ');
		console.log('xhr = ' + xhr.status);
		console.log(xhr.responseText);
		console.log('ajaxOptions = ' + ajaxOptions);
		console.log('thrownError = ' + thrownError);
	};
}


$(document).ready(function(e) {
	
	var decor 					= new Decor(1);
	var CANVAS					= $('#canvas')[0];
	var CANVAS_CTX				= CANVAS.getContext('2d');
	var CANVAS_centre			= new Object( { 'x':CANVAS.width/2, 'y':CANVAS.height/2 } );
	
	var FPS						= Math.floor(1000 / 50); // Frame Par Seconde
	var ENTER_FRAME				= null;
	
	
	// VARIABLES PRIVEES
	var mario					= new Object( { 'pic':new Image(), 'x':0, 'y':0, 'angle':0 } );
	
	// Chargement de l'image
	mario.pic.src				= 'Images/mario-big-still.png';// Path par rapport au document HTML, pas par rapport au document JS
	
	// Une fois l'image chargée on déclenche la boucle
	mario.pic.onload = function() {
		// Récupération des coordonnées du centre de l'image
		mario.x = Math.floor(mario.pic.width / 2);
		mario.y = Math.floor(mario.pic.height / 2);
		// Lancement
		ENTER_FRAME = setInterval(Boucle, FPS);
	};
	
	// Boucle
	function Boucle() {
		
		//decor=new Decor(1);
		CANVAS_CTX.clearRect(0,0, CANVAS.width, CANVAS.height);
		CANVAS_CTX.save();
		CANVAS_CTX.translate(CANVAS_centre.x, CANVAS_centre.y);
		CANVAS_CTX.drawImage(mario.pic, -mario.x, -mario.y);
		CANVAS_CTX.restore();
		
	};
	
	
});

