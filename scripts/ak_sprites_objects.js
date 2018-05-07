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
                gravity: 0
            });
            this.add("2d");

            this.on("hit.sprite", function(collision) {
                if (collision.obj.isA("AlexFist")) this.destroy();
            });

        }
    });

    Q.Sprite.extend("StarBlock", {
        init: function(p) {
            this._super(p, {
                sheet: 'escenary',
				frame: 8,
                gravity: 0
            });
            this.add("2d");

            this.on("hit.sprite", function(collision) {
                if (collision.obj.isA("AlexFist")) this.destroy();
            });

        }
    });

    Q.Sprite.extend("Rock", {
        init: function(p) {
            this._super(p, {
                sheet: 'escenary',
				frame: 7,
                gravity: 0
            });
            this.add("2d");
            this.on("hit.sprite", function(collision) {
                if (collision.obj.isA("AlexFist")) this.destroy();
            });
        }
    });
}