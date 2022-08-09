/**
 * Noah Manoucheri
 * 7/24/2022 1:07 AM
 * Controls the layout of all canvases
 */

"use strict"; //catch some common coding errors

/* Global variables */
//holds the future x coords for all inventories
//    as well as dimensions
var username = "";
const layouts = {
  inventory: {},
  viewer: {},
  notes: {},
};
var items = {
  giraffe: {
    name: "Crest of Dreven",
    thumbnail: "./media/woodenGiraffe/giraffe.png",
    model: "./media/woodenGiraffe/giraffe.stl",
    notes: "./media/woodenGiraffe/giraffe.txt",
    display: (s) => {
      s.ambientMaterial(207, 185, 151);
      s.ambientLight(200);
      s.noStroke();
      s.directionalLight(150, 100, 100, -100, -100, -100);
      s.model(items.giraffe.model);
    },
  },
  "sending stone": {
    name: "Sending Stone",
    thumbnail: "./media/sendingStone/sendingStone.png",
    model: null,
    notes: "./media/sendingStone/sendingStone.txt",
    //logs are object stored in a array like this setup:
    //{ sender: senderName, senderID: senderID, recipient: recipient, recipientID: recipientID, msg: message }
    //holds all chat logs
    //whenever a new member is added they get added to this
    /** user: { 
     *        sender: username,
              senderID: id,
              recipient: recipient,
              recipientID: recipient,
              msg: note, }
    */
    //TODO: impliment chat functionality
    members: {}, //holds all members
  },
  decree: {
    name: "Message from Anglemount",
    thumbnail: "./media/messages/noteThumb.png",
    model: "./media/messages/note.stl",
    texture: "./media/messages/note.png",
    notes: "./media/messages/note.txt",
    display: (s) => {
      s.ambientLight(200);
      s.ambientMaterial(207, 185, 151);
      s.textureMode(s.NORMAL)
      s.noStroke();
      s.directionalLight(150, 100, 100, -100, -100, -100);
      s.texture(items.decree.texture);
      s.model(items.decree.model);
    },
  },
  regendaleCrest: {
    name: "Crest of Regendale",
    thumbnail: "./media/sword/swordThumb.png",
    model: "./media/sword/sword.obj",
    texture: "./media/sword/sword.png",
    notes: "./media/sword/sword.txt",
    display: (s) => {
      s.texture(items.regendaleCrest.texture);
      s.ambientLight(200);
      s.noStroke();
      s.directionalLight(150, 100, 100, -100, -100, -100);
      s.model(items.regendaleCrest.model);
    },
  },
  vial: {
    name: "Crest of Hailsport",
    thumbnail: "./media/vial/vialThumb.png",
    model: "./media/vial/vial.obj",
    model2: "./media/vial/liquid.obj",
    texture: "./media/vial/vial.png",
    notes: "./media/vial/vial.txt",
    display: (s) => {
      s.texture(items.vial.texture);
      s.noStroke();
      s.directionalLight(150, 100, 100, -100, -100, -100);
      s.ambientLight(100);
      s.push();
      s.scale(0.5);
      s.translate(0, -110, 0)
      s.model(items.vial.model2);
      s.pop();
      s.model(items.vial.model);
    },
  },
  ear: {
    name: "Crest of Corendeck",
    thumbnail: "./media/ear/earThumb.png",
    model: "./media/ear/ear.obj",
    texture: "./media/ear/ear.png",
    notes: "./media/ear/ear.txt",
    display: (s) => {
      s.texture(items.ear.texture);
      s.noStroke();
      s.directionalLight(150, 100, 100, -100, -100, -100);
      s.ambientLight(200);
      s.push();
      s.rotateY(150);
      s.rotateZ(180);
      s.model(items.ear.model);
      s.pop();
    },
  },
  obelisk: {
    name: "Crest of Anglemount",
    thumbnail: "./media/obelisk/obeliskThumb.png",
    model: "./media/obelisk/obelisk.obj",
    notes: "./media/obelisk/obelisk.txt",
    display: (s) => {
      s.specularMaterial(40);
      s.shininess(.5)
      s.ambientLight(100);
      s.noStroke();
      s.directionalLight(150, 100, 100, -100, -100, -100);
      s.model(items.obelisk.model);
    },
  },
  journal: {
    name: "Old Journal",
    thumbnail: "./media/journal/journalThumb.png",
    model: "./media/journal/journal.obj",
    texture: "./media/journal/journal.png",
    notes: "./media/journal/journal.txt",
    display: (s) => {
      s.texture(items.journal.texture);
      s.ambientLight(200);
      s.noStroke();
      s.directionalLight(150, 100, 100, -100, -100, -100);
      s.model(items.journal.model);
    },
  },
  brokeSword: {
    name: "Broken Sword",
    thumbnail: "./media/sword/swordThumb.png",
    model: "./media/sword/sword.obj",
    texture: "./media/sword/swordBroken.png",
    notes: "./media/sword/swordBroken.txt",
    display: (s) => {
      s.texture(items.brokeSword.texture);
      s.ambientLight(200);
      s.noStroke();
      s.directionalLight(150, 100, 100, -100, -100, -100);
      s.model(items.brokeSword.model);
    },
  },
  decreeCOR: {
    name: "Message from Corendeck",
    thumbnail: "./media/contracts/corendeck/noteThumb.png",
    model: "./media/contracts/note.stl",
    texture: "./media/messages/note.png",
    notes: "./media/contracts/corendeck/note.txt",
    display: (s) => {
      s.ambientLight(200);
      s.ambientMaterial(107, 200, 151);
      s.textureMode(s.NORMAL)
      s.noStroke();
      s.directionalLight(150, 100, 100, -100, -100, -100);
      s.texture(items.decreeCOR.texture);
      s.model(items.decreeCOR.model);
    },
  },
  decreeDRE: {
    name: "Message from Dreven",
    thumbnail: "./media/contracts/dreven/noteThumb.png",
    model: "./media/contracts/note.stl",
    texture: "./media/messages/note.png",
    notes: "./media/contracts/dreven/note.txt",
    display: (s) => {
      s.ambientLight(200);
      s.ambientMaterial(215, 100, 180);
      s.textureMode(s.NORMAL)
      s.noStroke();
      s.directionalLight(150, 100, 100, -100, -100, -100);
      s.texture(items.decreeDRE.texture);
      s.model(items.decreeDRE.model);
    },
  },
  decreeHAL: {
    name: "Message from Hailsport",
    thumbnail: "./media/contracts/hailsport/noteThumb.png",
    model: "./media/contracts/note.stl",
    texture: "./media/messages/note.png",
    notes: "./media/contracts/hailsport/note.txt",
    display: (s) => {
      s.ambientLight(200);
      s.ambientMaterial(140, 105, 201);
      s.textureMode(s.NORMAL)
      s.noStroke();
      s.directionalLight(150, 100, 100, -100, -100, -100);
      s.texture(items.decreeHAL.texture);
      s.model(items.decreeHAL.model);
    },
  },
  decreeREG: {
    name: "Message from Regendale",
    thumbnail: "./media/contracts/regendale/noteThumb.png",
    model: "./media/contracts/note.stl",
    texture: "./media/messages/note.png",
    notes: "./media/contracts/regendale/note.txt",
    display: (s) => {
      s.ambientLight(200);
      s.ambientMaterial(230, 105, 101);
      s.textureMode(s.NORMAL)
      s.noStroke();
      s.directionalLight(150, 100, 100, -100, -100, -100);
      s.texture(items.decreeREG.texture);
      s.model(items.decreeREG.model);
    },
  },
  brokenVial: {
    name: "Broken Vial",
    thumbnail: "./media/brokenVial/vialThumb.png",
    model: "./media/brokenVial/vial.obj",
    texture: "./media/brokenVial/vial.png",
    notes: "./media/brokenVial/vial.txt",
    display: (s) => {
      s.texture(items.brokenVial.texture);
      s.noStroke();
      s.directionalLight(150, 100, 100, -100, -100, -100);
      s.ambientLight(100);
      s.model(items.brokenVial.model);
    },
  },
  brokenEar: {
    name: "Dead Ear",
    thumbnail: "./media/ear/earThumb.png",
    model: "./media/ear/ear.obj",
    texture: "./media/brokenEar/ear.png",
    notes: "./media/brokenEar/ear.txt",
    display: (s) => {
      s.texture(items.brokenEar.texture);
      s.noStroke();
      s.directionalLight(150, 100, 100, -100, -100, -100);
      s.ambientLight(200);
      s.push();
      s.rotateY(150);
      s.rotateZ(180);
      s.model(items.brokenEar.model);
      s.pop();
    },
  },
};
var ui = [];

//used to add inventory to the html document
var layout = (s) => {
  let windowPosition = []; //holds where on screen the canvas is
  let padding; //space between UI elements
  let thumbnails = [];

  s.preload = () => {
    //giraffe
    items.giraffe.thumbnail = s.loadImage(items.giraffe.thumbnail);
    thumbnails.push(items.giraffe.thumbnail);
    items.giraffe.model = s.loadModel(items.giraffe.model, true);
    items.giraffe.notes = s.loadStrings(items.giraffe.notes);
    //sending stone
    items["sending stone"].thumbnail = s.loadImage(
      items["sending stone"].thumbnail
    );
    thumbnails.push(items["sending stone"].thumbnail);
    items["sending stone"].notes = s.loadStrings(items["sending stone"].notes);
    //Anglmount note
    items.decree.thumbnail = s.loadImage(items.decree.thumbnail);
    thumbnails.push(items.decree.thumbnail);
    items.decree.model = s.loadModel(items.decree.model, true);
    items.decree.texture = s.loadImage(items.decree.texture);
    items.decree.notes = s.loadStrings(items.decree.notes);
    //crest of regendale
    items.regendaleCrest.thumbnail = s.loadImage(items.regendaleCrest.thumbnail);
    thumbnails.push(items.regendaleCrest.thumbnail);
    items.regendaleCrest.model = s.loadModel(items.regendaleCrest.model, true);
    items.regendaleCrest.texture = s.loadImage(items.regendaleCrest.texture);
    items.regendaleCrest.notes = s.loadStrings(items.regendaleCrest.notes);
    //crest of hailsport
    items.vial.thumbnail = s.loadImage(items.vial.thumbnail);
    thumbnails.push(items.vial.thumbnail);
    items.vial.model = s.loadModel(items.vial.model, true);
    items.vial.model2 = s.loadModel(items.vial.model2, true);
    items.vial.texture = s.loadImage(items.vial.texture);
    items.vial.notes = s.loadStrings(items.vial.notes);
    //crest of corendeck
    items.ear.thumbnail = s.loadImage(items.ear.thumbnail);
    thumbnails.push(items.ear.thumbnail);
    items.ear.model = s.loadModel(items.ear.model, true);
    items.ear.texture = s.loadImage(items.ear.texture);
    items.ear.notes = s.loadStrings(items.ear.notes);
    //crest of anglemount
    items.obelisk.thumbnail = s.loadImage(items.obelisk.thumbnail);
    thumbnails.push(items.obelisk.thumbnail);
    items.obelisk.model = s.loadModel(items.obelisk.model, true);
    items.obelisk.notes = s.loadStrings(items.obelisk.notes);
    //old journal
    items.journal.thumbnail = s.loadImage(items.journal.thumbnail);
    thumbnails.push(items.journal.thumbnail);
    items.journal.model = s.loadModel(items.journal.model, true);
    items.journal.texture = s.loadImage(items.journal.texture);
    items.journal.notes = s.loadStrings(items.journal.notes);
    //broken swords
    items.brokeSword.thumbnail = s.loadImage(items.brokeSword.thumbnail);
    thumbnails.push(items.brokeSword.thumbnail);
    items.brokeSword.model = s.loadModel(items.brokeSword.model, true);
    items.brokeSword.texture = s.loadImage(items.brokeSword.texture);
    items.brokeSword.notes = s.loadStrings(items.brokeSword.notes);
    //Corendeck note
    items.decreeCOR.thumbnail = s.loadImage(items.decreeCOR.thumbnail);
    thumbnails.push(items.decreeCOR.thumbnail);
    items.decreeCOR.model = s.loadModel(items.decreeCOR.model, true);
    items.decreeCOR.texture = s.loadImage(items.decreeCOR.texture);
    items.decreeCOR.notes = s.loadStrings(items.decreeCOR.notes);
    //Dreven note
    items.decreeDRE.thumbnail = s.loadImage(items.decreeDRE.thumbnail);
    thumbnails.push(items.decreeDRE.thumbnail);
    items.decreeDRE.model = s.loadModel(items.decreeDRE.model, true);
    items.decreeDRE.texture = s.loadImage(items.decreeDRE.texture);
    items.decreeDRE.notes = s.loadStrings(items.decreeDRE.notes);
    //Hailsport note
    items.decreeHAL.thumbnail = s.loadImage(items.decreeHAL.thumbnail);
    thumbnails.push(items.decreeHAL.thumbnail);
    items.decreeHAL.model = s.loadModel(items.decreeHAL.model, true);
    items.decreeHAL.texture = s.loadImage(items.decreeHAL.texture);
    items.decreeHAL.notes = s.loadStrings(items.decreeHAL.notes);
    //Regendale note
    items.decreeREG.thumbnail = s.loadImage(items.decreeREG.thumbnail);
    thumbnails.push(items.decreeREG.thumbnail);
    items.decreeREG.model = s.loadModel(items.decreeREG.model, true);
    items.decreeREG.texture = s.loadImage(items.decreeREG.texture);
    items.decreeREG.notes = s.loadStrings(items.decreeREG.notes);
    //broken vial
    items.brokenVial.thumbnail = s.loadImage(items.brokenVial.thumbnail);
    thumbnails.push(items.brokenVial.thumbnail);
    items.brokenVial.model = s.loadModel(items.brokenVial.model, true);
    items.brokenVial.texture = s.loadImage(items.brokenVial.texture);
    items.brokenVial.notes = s.loadStrings(items.brokenVial.notes);
    //broken ear
    items.brokenEar.thumbnail = s.loadImage(items.brokenEar.thumbnail);
    thumbnails.push(items.brokenEar.thumbnail);
    items.brokenEar.model = s.loadModel(items.brokenEar.model, true);
    items.brokenEar.texture = s.loadImage(items.brokenEar.texture);
    items.brokenEar.notes = s.loadStrings(items.brokenEar.notes);
    //UI elements
    ui.push(s.loadImage("./media/ui/inventory.png"));
    ui.push(s.loadImage("./media/ui/notes.png"));
    ui.push(s.loadImage("./media/ui/chat.png"));
  };

  /**
   * addElements:
   * @param {string} item
   * @param {int} x
   * @param {int} y
   * @param {int} width
   * @param {int} height
   * adds dimensions for a UI elements to the layouts object
   */
  s.addElements = (item, x, y, width, height) => {
    layouts[item].x = x;
    layouts[item].y = y;
    layouts[item].width = width;
    layouts[item].height = height;
  };

  /**
   * setup :
   */
  s.setup = () => {
    //set up canvas position and size
    s.cnv = s.createCanvas(
      window.innerHeight * 0.979,
      window.innerHeight * 0.979
    );
    s.cnv.position(
      (window.innerWidth - s.width) / 2,
      (window.innerHeight - s.height) / 2
    );
    windowPosition.push(
      (window.innerWidth - s.width) / 2,
      (window.innerHeight - s.height) / 2
    );
    padding = s.width * 0.05;

    /*****ADDS LAYOUT DIMENSIONS*****/
    s.addElements(
      "inventory",
      windowPosition[0] + padding,
      windowPosition[1] + padding,
      s.width * 0.9,
      s.height * 0.35
    );
    s.addElements(
      "viewer",
      windowPosition[0] + padding,
      windowPosition[1] + s.height * 0.45,
      s.width * 0.44,
      s.height * 0.5
    );
    s.addElements(
      "notes",
      windowPosition[0] + s.width * 0.51,
      windowPosition[1] + s.height * 0.45,
      s.width * 0.44,
      s.height * 0.5
    );

    //resize thumbnails to fit boxes
    thumbnails.forEach((img) => {
      img = img.resize(
        layouts.inventory.height * 0.3,
        layouts.inventory.height * 0.3
      );
    });

    //afterwards start other programs
    createInventroy();
    createViewer();
    createNotes();
    createChat();
  };

  /**
   * draw :
   */
  s.draw = () => {
    //draws border
    s.background(49)
    s.stroke(255);
    s.noFill();
    //outlines
    //chat/viewer
    if (!messaging) {
      s.rect(0 + padding, 0 + s.height * 0.45, s.width * 0.44, s.height * 0.5);
    }
  };
};
//switches variable into a new p5 element
var programLayout = new p5(layout, "layout");
