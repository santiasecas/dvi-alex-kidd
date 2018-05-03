/*
 * Proyecto final de DVI
 * Desarrollo de una demo del juego Alex Kidd con Quintus
 * Curso: 2017/18
 * Alumnos: Santi Baidez Ayuste & Jorge Díez Sánchez-Caballero & Daniel García Baameiro & Eduardo Gonzalo Montero
 *
 */

Quintus.AKScenes = function(Q) {
	Q.scene("level1", function(stage) {
		Q.audio.play("main-theme.ogg", { loop: true});
		Q.stageTMX("level1.tmx",stage);
	});
}