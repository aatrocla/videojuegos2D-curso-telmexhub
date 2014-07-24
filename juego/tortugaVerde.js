//crear el grupo de animaciones para la tortuga verde
Q.animations("animacionesTortugaVerde",{
	caminar: {
		frames:[0, 1],
		rate: 1 / 2,
		loop: true
	},
	enconchar: {}
});

Q.Sprite.extend("TortugaVerde",{
	init: function(p){
		this._super(p,{
			sprite: "animacionesTortugaVerde",
			sheet: "tortugaVerde",
			frame: 0,
			vx:120
		});
		this.add("2d, aiBounce, animation");
		this.play("caminar");
		//escucha el evento bump.top
		this.on("bump.top", this, "aConcha");
	},
	aConcha:function(colision){
		//Detectar si es mario el que le cayó encima
		if( colision.obj.isA("Jugador") ){
			
		}
	},
	step: function(){
		//voltear cuando va a la derecha, vx+
		if(this.p.vx > 0){
			this.p.flip = "x";
		}
		
		//no voltear cuando va a la izquierda vx-
		if(this.p.vx < 0){
			this.p.flip = false;
		}
	}
});