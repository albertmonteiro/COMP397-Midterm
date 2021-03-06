// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _playLabel: objects.Label;
        private _dice: createjs.Bitmap[];
        private _displayDice: createjs.Bitmap;
        private _roll: createjs.Bitmap;
        private _firstDice:number;
        private _secondDice:number;
        private _firstLabel:objects.Label;
        private _secondLabel:objects.Label;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // This method gives two default dices showing "1"
            this._initialize();
            
            // add the ROLL button to the PLAY scene
            this._roll = new objects.Button(
                "Roll",
                config.Screen.CENTER_X + 15,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._roll);
            
            // ROLL Button event listener
            this._roll.on("click", this._rollButtonClick, this);

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        // PRIVATE METHODS
        private _initialize():void
        {
            // Display default dice images with "1"
            this._dice = new Array<createjs.Bitmap>();
            for (var dice:number = 0; dice < 2; dice++)
            {
                this._dice[dice] = new createjs.Bitmap(assets.getResult("One"));
                this._dice[dice].x = 134 + (dice * 200);
                this._dice[dice].y = 130;
                this.addChild(this._dice[dice]);
            }
        }
        
        // ROLL Button click event handler
        private _rollButtonClick(event: createjs.MouseEvent) {
            this.removeChild(this._firstLabel);
            this.removeChild(this._secondLabel);
            // Generating two random values between 1 and 6
            this._firstDice = Math.floor((Math.random() * 6) + 1);
            this._secondDice = Math.floor((Math.random() * 6) + 1);
            console.log(this._firstDice + " AND " + this._secondDice);
            
            // Adding the first dice on the screen
            switch (this._firstDice) {
                    case 1:
                        // Display image
                        this._displayDice = new createjs.Bitmap(assets.getResult("One"));
                        this._displayDice.x = 134;
                        this._displayDice.y = 130;
                        this.addChild(this._displayDice);
                        // Display text
                        this._firstLabel = new objects.Label(
                        "1", "60px Consolas", "#000000",
                        config.Screen.CENTER_X = 134 + 50, config.Screen.CENTER_Y = 130 + 150);
                        this.addChild(this._firstLabel);
                        break;
                    case 2:
                        // Display image
                        this._displayDice = new createjs.Bitmap(assets.getResult("Two"));
                        this._displayDice.x = 134;
                        this._displayDice.y = 130;
                        this.addChild(this._displayDice);
                        // Display text
                        this._firstLabel = new objects.Label(
                        "2", "60px Consolas", "#000000",
                        config.Screen.CENTER_X = 134 + 250, config.Screen.CENTER_Y = 130 + 150);
                        this.addChild(this._firstLabel);
                        break;
                    case 3:
                        // Display image
                        this._displayDice = new createjs.Bitmap(assets.getResult("Three"));
                        this._displayDice.x = 134;
                        this._displayDice.y = 130;
                        this.addChild(this._displayDice);
                        // Display text
                        this._firstLabel = new objects.Label(
                        "3", "60px Consolas", "#000000",
                        config.Screen.CENTER_X = 134 + 50, config.Screen.CENTER_Y = 130 + 150);
                        this.addChild(this._firstLabel);
                        break;
                    case 4:
                        // Display image
                        this._displayDice = new createjs.Bitmap(assets.getResult("Four"));
                        this._displayDice.x = 134;
                        this._displayDice.y = 130;
                        this.addChild(this._displayDice);
                        // Display text
                        this._firstLabel = new objects.Label(
                        "4", "60px Consolas", "#000000",
                        config.Screen.CENTER_X = 134 + 50, config.Screen.CENTER_Y = 130 + 150);
                        this.addChild(this._firstLabel);
                        break;
                    case 5:
                        // Display image
                        this._displayDice = new createjs.Bitmap(assets.getResult("Five"));
                        this._displayDice.x = 134;
                        this._displayDice.y = 130;
                        this.addChild(this._displayDice);
                        // Display text
                        this._firstLabel = new objects.Label(
                        "5", "60px Consolas", "#000000",
                        config.Screen.CENTER_X = 134 + 50, config.Screen.CENTER_Y = 130 + 150);
                        this.addChild(this._firstLabel);
                        break;
                    case 6:
                        // Display image
                        this._displayDice = new createjs.Bitmap(assets.getResult("Six"));
                        this._displayDice.x = 134;
                        this._displayDice.y = 130;
                        this.addChild(this._displayDice);
                        // Display text
                        this._firstLabel = new objects.Label(
                        "6", "60px Consolas", "#000000",
                        config.Screen.CENTER_X = 134 + 50, config.Screen.CENTER_Y = 130 + 150);
                        this.addChild(this._firstLabel);
                        break;
                }
                
                // Adding the second dice on the screen
                switch (this._secondDice) {
                    case 1:
                        // Display image
                        this._displayDice = new createjs.Bitmap(assets.getResult("One"));
                        this._displayDice.x = 334;
                        this._displayDice.y = 130;
                        this.addChild(this._displayDice);
                        // Display text
                        this._secondLabel = new objects.Label(
                        "1", "60px Consolas", "#000000",
                        config.Screen.CENTER_X = 134 + 250, config.Screen.CENTER_Y = 130 + 150);
                        this.addChild(this._secondLabel);
                        break;
                    case 2:
                        // Display image
                        this._displayDice = new createjs.Bitmap(assets.getResult("Two"));
                        this._displayDice.x = 334;
                        this._displayDice.y = 130;
                        this.addChild(this._displayDice);
                        // Display text
                        this._secondLabel = new objects.Label(
                        "2", "60px Consolas", "#000000",
                        config.Screen.CENTER_X = 134 + 250, config.Screen.CENTER_Y = 130 + 150);
                        this.addChild(this._secondLabel);
                        break;
                    case 3:
                        // Display image
                        this._displayDice = new createjs.Bitmap(assets.getResult("Three"));
                        this._displayDice.x = 334;
                        this._displayDice.y = 130;
                        this.addChild(this._displayDice);
                        // Display text
                        this._secondLabel = new objects.Label(
                        "3", "60px Consolas", "#000000",
                        config.Screen.CENTER_X = 134 + 250, config.Screen.CENTER_Y = 130 + 150);
                        this.addChild(this._secondLabel);
                        break;
                    case 4:
                        // Display image
                        this._displayDice = new createjs.Bitmap(assets.getResult("Four"));
                        this._displayDice.x = 334;
                        this._displayDice.y = 130;
                        this.addChild(this._displayDice);
                        // Display text
                        this._secondLabel = new objects.Label(
                        "4", "60px Consolas", "#000000",
                        config.Screen.CENTER_X = 134 + 250, config.Screen.CENTER_Y = 130 + 150);
                        this.addChild(this._secondLabel);
                        break;
                    case 5:
                        // Display image
                        this._displayDice = new createjs.Bitmap(assets.getResult("Five"));
                        this._displayDice.x = 334;
                        this._displayDice.y = 130;
                        this.addChild(this._displayDice);
                        // Display text
                        this._secondLabel = new objects.Label(
                        "5", "60px Consolas", "#000000",
                        config.Screen.CENTER_X = 134 + 250, config.Screen.CENTER_Y = 130 + 150);
                        this.addChild(this._secondLabel);
                        break;
                    case 6:
                        // Display image
                        this._displayDice = new createjs.Bitmap(assets.getResult("Six"));
                        this._displayDice.x = 334;
                        this._displayDice.y = 130;
                        this.addChild(this._displayDice);
                        // Display text
                        this._secondLabel = new objects.Label(
                        "6", "60px Consolas", "#000000",
                        config.Screen.CENTER_X = 134 + 250, config.Screen.CENTER_Y = 130 + 150);
                        this.addChild(this._secondLabel);
                        break;
                }
        }
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}