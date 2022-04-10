class Play extends Phaser.Scene {
    constructor() {
        super("play");
    }

    preload() {
        this.load.image('starfield', 'assets/starfield.png');
        this.load.image('rocket', 'assets/rocket.png');
        this.load.image('ship', 'assets/ship.png');
    }

    create() {

        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        this.starfield = this.add.tileSprite(0,0, game.config.width, game.config.height, 'starfield').setOrigin(0,0);

        this.p1Rocket = new Rocket(this, game.config.width/2, 431, 'rocket').setOrigin(0.5,0);
        this.p1Rocket.reset();

        this.ShipA = new Ship(this, 300, 300, 'ship');
        this.ShipB = new Ship(this, 400, 150, 'ship');
        this.ShipC = new Ship(this, 100, 200, 'ship');


        //green UI background
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00FF00).setOrigin(0,0);
        
        //white borders
        this.add.rectangle(0,0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0,0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0.0);
        this.add.rectangle(0,0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0,0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0,0);
    }

    update() {
        this.starfield.tilePositionX -= 2; //tile sprite motion

        const movementSpeed = 2;
        if(keyLeft.isDown){
            this.p1Rocket.x -= movementSpeed;
        }

        if(keyRight.isDown){
            this.p1Rocket.x += movementSpeed;
        }

        if(Phaser.Input.Keyboard.JustDown(keyF)) {
            this.p1Rocket.firing = true;
        }

        this.ShipA.update();
        this.ShipB.update();
        this.ShipC.update();


        this.p1Rocket.update();
    }
}