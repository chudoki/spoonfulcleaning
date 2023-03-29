class Menu extends Phaser.Scene {
   constructor() {
      super("Menu");
   }
   preload() {
      this.load.audio('sunnyMorning', 'assets/SunnyMorning.wav')
      this.load.audio('gateServo', 'assets/gateservo.wav');
      this.load.audio('eatsfx', 'assets/eatsfx.wav');
      this.load.audio('jumpsfx', 'assets/jumpsfx.wav');
      this.load.audio('slidesfx', 'assets/slidesfx.wav');
      this.load.image('startButton', 'assets/buttons/startButton.png');
      this.load.image('howToButton', 'assets/buttons/howToButton.png')
      this.load.image('menuBg', 'assets/MenuBg.png');
      this.load.atlas('sheet', 'assets/atlases/matterObjects-0.png', 'assets/atlases/matterObjects.json');
      this.load.image('orangeButton', 'assets/sprites/orangeButton.png');
      this.load.image('orangeGate', 'assets/sprites/orangeGate.png');
      this.load.json("shapes", "assets/physicsObjects.json");
      this.load.tilemapTiledJSON("map", "assets/tilemaps/tiledV2.json");
      this.load.image(
         "tileset",
        // scoreboard tracks number of collectibles
         "assets/tileset.png"
      );
      this.load.spritesheet('tilesheet', "assets/tileset.png", {
         frameWidth: 32,
         frameHeight: 32
      });
      this.load.spritesheet('fW', 'assets/fWalk.png', { frameWidth: 48, frameHeight: 31 });
      this.load.image('bg', 'assets/background.png');
      this.load.image('Toy', 'assets/Toy.png');
      this.load.image('Food', 'assets/food.png');
      this.load.image('banner', 'assets/fBanner.png');


   }


   create() {
      this.frames = 1;
      // background
      this.bg = this.add.image(0, 0, 'menuBg').setOrigin(0, 0);
      // title
      this.title = this.add.image(640/2,360/2, 'banner');
      this.start = false;
      // button
      this.button = this.add.image(this.title.x-this.title.width/2+62, this.title.y+62, 'startButton');
      this.button.setInteractive();
      this.howButton = this.add.image(this.title.x+this.title.width/2-62, this.title.y+62,'howToButton');
      this.howButton.setInteractive();


   }
   update() {
      
      if (this.start == true) {
         this.scene.start('world1Scene');
         this.start = false;
      }
      if (this.howStart == true) {
         this.scene.start('tutorialScene');
         this.howStart = false;
      }
      
      this.button.on("pointerdown", () => {
         this.start = true;
      });

      this.howButton.on("pointerdown", () => {
         this.howStart = true;
      });
   }

}
