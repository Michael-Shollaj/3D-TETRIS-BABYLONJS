class GameOver {
    private _advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("myUI");
    private _titleFront : BABYLON.GUI.TextBlock;
    private _titleBack : BABYLON.GUI.TextBlock;
    public _score : BABYLON.GUI.TextBlock;
    private _line : BABYLON.GUI.Line;
    private _font : string;
    private _start : BABYLON.GUI.TextBlock;

    constructor(score: number) { //menu, ui
        this._font = "Agency FB";    

        this._start = new BABYLON.GUI.TextBlock("start");
        this._start.text = "C L I C K    A N Y W H E R E    T O    P L A Y    A G A I N";
        this._start.color = "white";
        this._start.fontFamily = this._font;
        this._start.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
        this._start.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
        this._start.fontSize = 30;
        this._advancedTexture.addControl(this._start);

        this._titleBack = new BABYLON.GUI.TextBlock("titleFront");
        this._titleBack.text = "GAME OVER";
        this._titleBack.color = "purple";
        this._titleBack.fontSize = 275;
        this._titleBack.fontFamily = this._font;
        this._titleBack.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
        this._titleBack.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
        this._titleBack.top = -220;
        this._titleBack.left = -10;
        this._advancedTexture.addControl(this._titleBack);

        this._titleFront = new BABYLON.GUI.TextBlock("titleFront");
        this._titleFront.text = "GAME OVER";
        this._titleFront.color = "white";
        this._titleFront.fontSize = 275;
        this._titleFront.fontFamily = this._font;
        this._titleFront.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
        this._titleFront.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
        this._titleFront.top = -230;
        this._titleBack.left = 10;
        this._advancedTexture.addControl(this._titleFront);

        this._line = new BABYLON.GUI.Line();
        this._line.color = "white";
        this._line.lineWidth = 20;
        this._line.x1 = 0;
        this._line.y1 = 700;
        this._line.x2 = 2000;
        this._line.y2 = 700;
        this._line.alpha = 0.2;
        this._advancedTexture.addControl(this._line);

        this._score = new BABYLON.GUI.TextBlock("score");
        this._score.text = "Score : " + score;
        this._score.fontFamily = this._font;
        this._score.color = "cyan";
        this._score.fontSize = 50;
        this._score.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
        this._score.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
        this._score.left = 0;
        this._score.top = 150;
        this._advancedTexture.addControl(this._score);
    }

    public hide() {
        this._titleFront.dispose();
        this._titleBack.dispose();
        this._start.dispose();
        this._line.dispose();
        this._score.dispose();
    }
}