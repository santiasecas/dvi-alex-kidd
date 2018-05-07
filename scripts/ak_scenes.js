/*
 * Proyecto final de DVI
 * Desarrollo de una demo del juego Alex Kidd con Quintus
 * Curso: 2017/18
 * Alumnos: Santi Baidez Ayuste & Jorge Díez Sánchez-Caballero & Daniel García Baameiro & Eduardo Gonzalo Montero
 *
 */

Quintus.AKScenes = function(Q) {
    Q.scene("level1", function(stage) {
        //Q.audio.play('main_theme.ogg',{loop: true});
        Q.stageTMX('level1.tmx', stage);
        var alex = stage.insert(new Q.Alex({ x: 100, y: 200 }));
        //stage.insert(new Q.Bird({ x: 200, y: 200 }));
        stage.insert(new Q.Scorpion({ x: 250, y: 500 }));

        //stage.insert(new Q.Frog({ x: 110, y: 200 }));

        //stage.insert(new Q.Question({ x: 200, y: 200 }));
        //stage.insert(new Q.StarBlock({ x: 232, y: 200 }));
        //stage.insert(new Q.Rock({ x: 264, y: 200 }));


        //PRIMER NIVEL DE OBJETOS
        let star1 = stage.insert(new Q.StarBlock({ x: 432, y: 224 }));
        let star2 = stage.insert(new Q.StarBlock({ x: 96, y: 336 }));
        let star3 = stage.insert(new Q.StarBlock({ x: 96, y: 368 }));
        let star4 = stage.insert(new Q.StarBlock({ x: 448, y: 448 }));

        let rock1 = stage.insert(new Q.Rock({ x: 96, y: 400 }));
        let rock2 = stage.insert(new Q.Rock({ x: 432, y: 432 }));
        let rock3 = stage.insert(new Q.Rock({ x: 272, y: 496 }));
        let rock4 = stage.insert(new Q.Rock({ x: 272, y: 528 }));


        //SEGUNDO NIVEL DE OBJETOS
        let star5 = stage.insert(new Q.StarBlock({ x: 466, y: 688 }));
        let star6 = stage.insert(new Q.StarBlock({ x: 466, y: 720 }));
        let star7 = stage.insert(new Q.StarBlock({ x: 48, y: 752 }));
        let star8 = stage.insert(new Q.StarBlock({ x: 368, y: 848 }));

        let rock5 = stage.insert(new Q.Rock({ x: 240, y: 720 }));
        let rock6 = stage.insert(new Q.Rock({ x: 240, y: 752 }));
        let rock7 = stage.insert(new Q.Rock({ x: 400, y: 752 }));
        let rock8 = stage.insert(new Q.Rock({ x: 48, y: 784 }));
        let rock9 = stage.insert(new Q.Rock({ x: 80, y: 784 }));
        let rock10 = stage.insert(new Q.Rock({ x: 432, y: 784 }));
        let rock11 = stage.insert(new Q.Rock({ x: 466, y: 816 }));


        //TERCER NIVEL DE OBJETOS





        stage.add("viewport").follow(alex, { x: false, y: true });
        stage.centerOn(256, 0);
    });
}