// var HelloWorldLayer = cc.Layer.extend({
//   sprite: null,
//   ctor: function () {
//     //////////////////////////////
//     // 1. super init first
//     this._super();

//     /////////////////////////////
//     // 2. add a menu item with "X" image, which is clicked to quit the program
//     //    you may modify it.
//     // ask the window size
//     var size = cc.winSize;

//     /////////////////////////////
//     // 3. add your codes below...
//     // add a label shows "Hello World"
//     // create and initialize a label
//     var helloLabel = new cc.LabelTTF("first game", "Arial", 38);
//     // * position the label on the center of the screen
//     helloLabel.x = size.width / 2;
//     helloLabel.y = size.height / 2 + 200;
//     // * add the label as a child to this layer
//     this.addChild(helloLabel, 5);

//     // *moving sprite
//     var moveTo = cc.moveTo(2, size.width, size.height);

//     // *rotating
//     var rotateBy = cc.rotateBy(2, 40);

//     // *fading effects
//     //   var fadeIn = cc.fadeIn(2);

//     // *creatin sequence
//     var seq = cc.sequence(rotateBy, moveTo);

//     // * repeat the sequence
//     // var repeat_seq = cc.repeatForever(seq);

//     // * add "HelloWorld" splash screen"
//     this.sprite = new cc.Sprite(res.HelloWorld_png);
//     this.sprite.attr({
//       x: size.width / 2,
//       y: size.height / 2,
//     });
//     // *running the action
//     // this.sprite.runAction(moveTo);

//     // *changing the anchor point
//     this.sprite.setAnchorPoint(0,0);

//     // *setting the scale of sprite
//     // this.sprite.setScale(0.5);

//     // *rotating
//     // this.sprite.runAction(rotateBy);

// // *     fading
//     // this.sprite.runAction(fadeOut(1));
//     // this.sprite.runAction(fadeIn);

// // *    running a sequence
//     this.sprite.runAction(seq);

//     this.addChild(this.sprite, 0);

//      return true;
//   },
// });

var initialized = false;

var FirstLayer = cc.Layer.extend({
  sprite: null,
  ctor: function () {
    //////////////////////////////
    // 1. super init first
    this._super();

    var size = cc.winSize;

    /////////////////////////////
    var helloLabel = new cc.LabelTTF("Starting Screen", "Arial", 38);
    // * position the label on the center of the screen
    helloLabel.x = size.width / 2;
    helloLabel.y = size.height / 2 + 200;
    // * add the label as a child to this layer
    this.addChild(helloLabel, 5);

    // * creting menu
    var menuItem1 = new cc.MenuItemFont("Start", play);
    var menu = new cc.Menu(menuItem1);
    menu.alignItemsVertically();
    this.addChild(menu, 1);

    return true;
  },
});

var play = function () {
  var scene = new SecondScene();
  cc.director.pushScene(scene);
};

var FirstScene = cc.Scene.extend({
  onEnter: function () {
    this._super();
    if (initialized === false) {
      initialized = true;
      var layer = new FirstLayer();
      this.addChild(layer);
    }
  },
});
