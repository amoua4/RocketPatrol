class Rocket extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture) {
        super(scene, x, y, texture)
        scene.add.existing(this);
        this.firing = false;
    }

    update() {
        if(this.firing) {
            this.y -= 2; 
            if(this.y < 0){
                this.reset();
            }
        }
    }
//dasfadsf
    reset(){
        this.x = game.config.width / 2;
        this.y = 431;
        this.firing = false;
    }
}