var initialized3 = false;

var EndLayer = cc.Layer.extend({
  sprite: null,
  ctor: function () {
    //////////////////////////////
    // 1. super init first
    this._super();

    var size = cc.winSize;

    /////////////////////////////
    var helloLabel = new cc.LabelTTF("End Screen", "Arial", 38);
    // * position the label on the center of the screen
    helloLabel.x = size.width / 2;
    helloLabel.y = size.height / 2 + 200;
    // * add the label as a child to this layer
    this.addChild(helloLabel, 5);

    // *creating menu
    var menuItem2 = new cc.MenuItemFont("Play Again", pop);
    var menu = new cc.Menu(menuItem2);
    menu.alignItemsVertically();
    this.addChild(menu, 1);

    return true;
  },
});

var pop = function () {
  initialized3 = false;
  cc.director.popScene();
};

var EndScene = cc.Scene.extend({
  onEnter: function () {
    this._super();
    if (initialized3 === false) {
      initialized3 = true;
      var layer = new EndLayer();
      this.addChild(layer);
    }
  },
});
