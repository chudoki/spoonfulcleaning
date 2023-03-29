class Credits extends Phaser.Scene {
    preload() {
        this.load.image('HT_menuButton', 'assets/buttons/HT_MenuButton.png');
 
    }
    constructor() {
        super("creditsScene");
    }

    create() {
        this.canLeave = false;
        this.vischeck = 0;
        this.cameras.main.fadeIn(1000, 0, 0, 0);
        let spacing = 120;
        this.bg = this.add.image(0,0,'egbg').setOrigin(0, 0);
        let CreditStyle = {
            fontFamily: 'FFFFORWA',
            fontSize: "16px",
            align: 'center',
        }
        let TYStyle = {
            fontFamily: 'FFFFORWA',
            fontSize: "24px",
            align: 'center',
        }
        this.LeaveStyle = {
            fontFamily: 'FFFFORWA',
            fontSize: "16px",
            align: 'center',
        }

        this.credtext = [];
        this.credtext[1] = this.add.text(game.canvas.width / 2, game.canvas.height / 3.3 + spacing + 64, " \n ", TYStyle).setOrigin(0.5);
        this.credtext[2] = this.add.text(game.canvas.width / 2, game.canvas.height / 3.3 + spacing + 192, "Your mental health is \nthe most important thing, \nand cleaning your room \ncan wait if you need \nto focus on your well-being", TYStyle).setOrigin(0.5);

        this.exit = false;
        // KB input
        keyESC2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
        this.bg.setInteractive();

    }

    update() {
        for (let textinst in this.credtext) {
            if (textinst == 7 && this.credtext[textinst].y <= game.canvas.height/3 && this.canLeave === false) {
                this.canLeave = true;
                this.vischeck = 1;
                this.leaveText = this.add.text(game.canvas.width * 1/2 , game.canvas.height*1/2, "Press the ESC key\n to return to menu", this.LeaveStyle).setOrigin(0.5);
                this.timedEvent2 = this.time.addEvent({ delay: 600, callback: this.toggleVisibility, callbackScope: this });
                continue;
            }
            this.credtext[textinst].y -= 1;
        }


        if(this.canLeave === true){
            this.bg.on("pointerdown", () => { this.exit = true; });
            if(Phaser.Input.Keyboard.JustDown(keyESC2)) this.exit = true;

            if (Phaser.Input.Keyboard.JustDown(keyESC2) || this.exit) {
            this.scene.start('Menu');
            this.scene.stop();

            }
        }
        
    }
    toggleVisibility(){
        if(this.vischeck === 0){
            this.leaveText = this.add.text(game.canvas.width * 1/2 , game.canvas.height*1/2, "Press the ESC key\n to return to menu", this.LeaveStyle).setOrigin(0.5);
            this.vischeck = 1;
            this.timedEvent2 = this.time.addEvent({ delay: 600, callback: this.toggleVisibility, callbackScope: this });
        }
        else{
            this.leaveText.destroy();
            this.vischeck = 0;
            this.timedEvent2 = this.time.addEvent({ delay: 400, callback: this.toggleVisibility, callbackScope: this });
        }
        
    }
}