var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            // This method gives two default dices showing "1"
            this._initialize();
            // add the ROLL button to the PLAY scene
            this._roll = new objects.Button("Roll", config.Screen.CENTER_X + 30, config.Screen.CENTER_Y + 180);
            this.addChild(this._roll);
            // ROLL Button event listener
            this._roll.on("click", this._rollButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
        };
        // PRIVATE METHODS
        Play.prototype._initialize = function () {
            this._dice = new Array();
            for (var dice = 0; dice < 2; dice++) {
                this._dice[dice] = new createjs.Bitmap(assets.getResult("One"));
                this._dice[dice].x = 134 + (dice * 200);
                this._dice[dice].y = 130;
                this.addChild(this._dice[dice]);
            }
        };
        // ROLL Button click event handler
        Play.prototype._rollButtonClick = function (event) {
            // Generating two random values between 1 and 6
            this._firstDice = Math.floor((Math.random() * 6) + 1);
            this._secondDice = Math.floor((Math.random() * 6) + 1);
            console.log(this._firstDice + " AND " + this._secondDice);
            // Adding the first dice on the screen
            switch (this._firstDice) {
                case 1:
                    this._displayDice = new createjs.Bitmap(assets.getResult("One"));
                    this._displayDice.x = 134;
                    this._displayDice.y = 130;
                    this.addChild(this._displayDice);
                    break;
                case 2:
                    this._displayDice = new createjs.Bitmap(assets.getResult("Two"));
                    this._displayDice.x = 134;
                    this._displayDice.y = 130;
                    this.addChild(this._displayDice);
                    break;
                case 3:
                    this._displayDice = new createjs.Bitmap(assets.getResult("Three"));
                    this._displayDice.x = 134;
                    this._displayDice.y = 130;
                    this.addChild(this._displayDice);
                    break;
                case 4:
                    this._displayDice = new createjs.Bitmap(assets.getResult("Four"));
                    this._displayDice.x = 134;
                    this._displayDice.y = 130;
                    this.addChild(this._displayDice);
                    break;
                case 5:
                    this._displayDice = new createjs.Bitmap(assets.getResult("Five"));
                    this._displayDice.x = 134;
                    this._displayDice.y = 130;
                    this.addChild(this._displayDice);
                    break;
                case 6:
                    this._displayDice = new createjs.Bitmap(assets.getResult("Six"));
                    this._displayDice.x = 134;
                    this._displayDice.y = 130;
                    this.addChild(this._displayDice);
                    break;
            }
            // Adding the second dice on the screen
            switch (this._secondDice) {
                case 1:
                    this._displayDice = new createjs.Bitmap(assets.getResult("One"));
                    this._displayDice.x = 334;
                    this._displayDice.y = 130;
                    this.addChild(this._displayDice);
                    break;
                case 2:
                    this._displayDice = new createjs.Bitmap(assets.getResult("Two"));
                    this._displayDice.x = 334;
                    this._displayDice.y = 130;
                    this.addChild(this._displayDice);
                    break;
                case 3:
                    this._displayDice = new createjs.Bitmap(assets.getResult("Three"));
                    this._displayDice.x = 334;
                    this._displayDice.y = 130;
                    this.addChild(this._displayDice);
                    break;
                case 4:
                    this._displayDice = new createjs.Bitmap(assets.getResult("Four"));
                    this._displayDice.x = 334;
                    this._displayDice.y = 130;
                    this.addChild(this._displayDice);
                    break;
                case 5:
                    this._displayDice = new createjs.Bitmap(assets.getResult("Five"));
                    this._displayDice.x = 334;
                    this._displayDice.y = 130;
                    this.addChild(this._displayDice);
                    break;
                case 6:
                    this._displayDice = new createjs.Bitmap(assets.getResult("Six"));
                    this._displayDice.x = 334;
                    this._displayDice.y = 130;
                    this.addChild(this._displayDice);
                    break;
            }
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map