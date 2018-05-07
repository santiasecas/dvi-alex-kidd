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
                gravity: 0,
                gravity: 0,
                frame: 9

            });
            this.add("2d, animation, aiBounce");

            this.on("hit.sprite", function(collision) {
                if (collision.obj.isA("Alex")) console.log("Toco a Alex");
                else if (collision.obj.isA("AlexFist")) this.destroy();
            });

        }
    });

    Q.Sprite.extend("StarBlock", {
        init: function(p) {
            this._super(p, {
                sheet: 'escenary',
                gravity: 0,
                gravity: 0,
                frame: 8

            });
            this.add("2d, animation, aiBounce");

            this.on("hit.sprite", function(collision) {
                if (collision.obj.isA("Alex")) console.log("Toco a Alex");
                else if (collision.obj.isA("AlexFist")) this.destroy();
            });

        }
    });

    Q.Sprite.extend("Rock", {
        init: function(p) {
            this._super(p, {
                sheet: 'escenary',
                gravity: 0,
                gravity: 0,
                frame: 7

            });
            this.add("2d, animation, aiBounce");

            this.on("hit.sprite", function(collision) {
                if (collision.obj.isA("Alex")) console.log("Toco a Alex");
                else if (collision.obj.isA("AlexFist")) this.destroy();
            });

        }
    });
}