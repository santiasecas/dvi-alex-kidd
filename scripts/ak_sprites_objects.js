/*
 * Proyecto final de DVI
 * Desarrollo de una demo del juego Alex Kidd con Quintus
 * Curso: 2017/18
 * Alumnos: Santi Baidez Ayuste & Jorge Díez Sánchez-Caballero & Daniel García Baameiro & Eduardo Gonzalo Montero
 *
 */

Quintus.AKSpritesObjects = function(Q) {
    Q.Sprite.extend("Question", {
        init: function(p) {
            this._super(p, {
                sheet: 'escenary',
				        frame: 9,
                gravity: 0,
                dropped: false
            });
            this.add("2d, drops");

            this.on("hit.sprite", function(collision) {
                if (collision.obj.isA("AlexFist")) {
                    this.drop(0);
                    this.destroy();
                }
            });
        }
    });

    Q.Sprite.extend("StarBlock", {
        init: function(p) {
            this._super(p, {
                sheet: 'escenary',
				        frame: 8,
                gravity: 0,
                dropped: false
            });
            this.add("2d, drops");

            this.on("hit.sprite", function(collision) {
                if (collision.obj.isA("AlexFist")) {
                    if((Math.random() * (10 - 1) + 1) < 7){
                      this.p.drop='sackLittle';
                    }else{
                      this.p.drop='sackBig';
                    }
                    this.destroy();
                    this.drop();
                }
            });
        }
    });

    Q.Sprite.extend("GhostBlock", {
        init: function(p) {
            this._super(p, {
                sheet: 'escenary',
				        frame: 16,
                gravity: 0,
                dropped: false
            });
            this.add("2d, drops");

            this.on("bump.top", function(collision) {
                if (collision.obj.isA("Alex")) {
                    this.drop(-32);
                }
            });
        }
    });

    Q.Sprite.extend("Rock", {
        init: function(p) {
            this._super(p, {
                sheet: 'escenary',
				        frame: 7,
                gravity: 0,
            });
            this.add("2d");
            this.on("hit.sprite", function(collision) {
                if (collision.obj.isA("AlexFist")) {
                    this.destroy();
                }
            });
        }
    });

    Q.Sprite.extend("SackLittle", {
        init: function(p) {
            this._super(p, {
                sheet: 'escenary',
                frame: 12,
                sensor: true,
                gravity: 0
            });
            this.add("2d");
            this.on("hit.sprite", function(collision) {
                if (collision.obj.isA("Alex")) {
                    Q.audio.play("coin.ogg");
                    console.log("saco");
					this.destroy();
                };
            });
        }
    });

    Q.Sprite.extend("SackBig", {
        init: function(p) {
            this._super(p, {
                sheet: 'escenary',
                frame: 11,
                sensor: true,
                gravity: 0
            });
            this.add("2d");
            this.on("hit.sprite", function(collision) {
                if (collision.obj.isA("Alex")){
					          this.destroy();
                    Q.audio.play("coin.ogg");
                };
            });
        }
    });

    Q.component("drops", {
        extend: {
            drop: function(offsetY) {
                if (!this.p.dropped) {
                    this.p.dropped = true;
                    if(this.p.drop === 'sackLittle') this.stage.insert(new Q.SackLittle({ x: this.p.x, y: this.p.y }));
                    if(this.p.drop === 'sackBig') this.stage.insert(new Q.SackBig({ x: this.p.x, y: this.p.y }));
                    if(this.p.drop === 'ghost') this.stage.insert(new Q.Ghost({ x: this.p.x, y: this.p.y+offsetY }));
                };
            },
        }
    })

	Q.Sprite.extend("Arrow",{
		init: function(p){
			this._super(p, {
				sheet: "arrow",
				sprite: "ArrowAnimation",
				x: 162,
				y: 212,
				gravity: 0
			});
			this.add("animation, tween");
			this.play("point");
		}
	});

	Q.animations("ArrowAnimation", {
		point: { frames: [0,1], rate: 1/2}
	});

	Q.Sprite.extend("Logo",{
		init: function(p){
			this._super(p, {
				sheet: "logo",
				sprite: "LogoAnimation",
				x: 256,
                y: 192,
                scale: 0.64,
				gravity: 0
			});
			this.add("animation");
			this.play("light");
		}
	});

	Q.animations("LogoAnimation", {
		light: { frames: [0,1], rate: 1/8}
	});

	Q.Sprite.extend("Rice",{
		init: function(p){
			this._super(p, {
				sheet: 'escenary',
                frame: 17,
				x: 32,
                y: 32,
				gravity: 0,
				sensor: true
			});
			this.on("hit.sprite", function(collision) {
                if (collision.obj.isA("Alex")) {
					Q.clearStages();
					Q.stageScene("creditos");
				}
            });
		}
	});

	Q.Sprite.extend("SmokeEnemyDie",{
		init: function(p){
			this._super(p, {
				sheet: 'enemyDie',
				sprite: 'SmokeEnemyDieAnimation',
				gravity: 0,
				sensor: true,
				type: Q.SPRITE_NONE,
				collisionMask: ''
			});
			this.add("animation");
			this.play("die");
			this.on("destroy", function(){
				this.destroy();
			});
		}
	});

	Q.animations("SmokeEnemyDieAnimation", {
		die: { frames: [0,1], rate: 1/2, loop: false,  trigger: "destroy"}
	});
}
