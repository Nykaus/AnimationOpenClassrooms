jQuery(function($){
	//Ajout des balises
	for (var cptCol = 1; cptCol <= 17; cptCol++) {
		for (var cptRow = 1; cptRow<= 8;cptRow++) {
			$("#logo").append('<div class="carre c'+cptCol+' r'+cptRow+'"></div>');

		}
	}
	
	var letter= $("h1").find("div.rouge");
	letter.html(letter.text().replace(/(\w)/g,"<span>$&</span>"));
	
	var letter= $("h1").find("div.noir");
	letter.html(letter.text().replace(/(\w)/g,"<span>$&</span>"));

	//Style du logo
	var posFirstRow=59;
	for (var cptRow = 0; cptRow< 8;cptRow++) {
		$(".r"+(cptRow+1)).css({"top":((cptRow*20)+posFirstRow)+"px"});
	}

	var posEndCol=487;
	for (var cptCol = 0; cptCol< 17;cptCol++) {
		$(".c"+(cptCol+1)).css({"left":(posEndCol-(cptCol*20))+"px"});
	}


	//Animation 
	var scene     = $("#scene");
	var carre = scene.find(".carre");
	var col1  = scene.find(".c1");
	var Timeline = new TimelineLite();
	var animLogo={top:"22px",left:"-20px",rotation: "+=100", ease:Sine.easeInOut };
	var tempsDecale = 0;
	//Creation de l'animation du logo carre par carre
	for (var cptCol = 1; cptCol <= 17; cptCol++) {
		for (var cptRow = 1; cptRow<= 8;cptRow++) {
			var colCurrent =$(".c"+cptCol+".r"+cptRow);
			var tagTrame='#debut';
			//ajout d'un decalage de temps par rapport à la première animation
			if(cptCol!=1){
				tempsDecale=cptCol*0.05;
				tagTrame=tagTrame+"+="+tempsDecale;
			}
			Timeline.from(colCurrent,1,animLogo,tagTrame);
		}
	}
	Timeline.staggerFrom($("h1 span"),1,{autoAlpha:0, rotationY: "+=100", ease:Sine.easeInOut},0.25,"#debut+=0.04")
			.from($(".lineNoir"),0.3,{width:0},"#line")
			.from($("p"),1.5,{autoAlpha:0},"#Txt")
			.pause();


	$("#play").click(function(){
		Timeline.timeScale(2).play();
	});

	$("#retour").click(function(){
		Timeline.timeScale(3).reverse();

});

});