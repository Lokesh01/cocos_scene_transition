var initialized2 = false;

var SecondLayer = cc.Layer.extend({
  sprite: null,
  ctor: function () {
    //////////////////////////////
    // 1. super init first
    this._super();

    var size = cc.winSize;

    /////////////////////////////
    var helloLabel = new cc.LabelTTF("Second Screen", "Arial", 38);
    // * position the label on the center of the screen
    helloLabel.x = size.width / 2;
    helloLabel.y = size.height / 2 + 200;
    // * add the label as a child to this layer
    this.addChild(helloLabel, 5);

    // *creating menu
    var menuItem2 = new cc.MenuItemFont("End", play2);
    var menu = new cc.Menu(menuItem2);
    menu.alignItemsVertically();
    this.addChild(menu, 1);

    return true;
  },
});

var play2 = function () {
  var scene = new EndScene();
  cc.director.pushScene(scene);
};

var SecondScene = cc.Scene.extend({
  onEnter: function () {
    this._super();
    if (initialized2 === false) {
      initialized2 = true;
      var layer = new SecondLayer();
      this.addChild(layer);
    }
  },
});
