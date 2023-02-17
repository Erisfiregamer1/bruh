import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@1.4.1/dist/index.esm.js";

export default class Cutscenes extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("N/A", "14e46ec3e2ba471c2adfe8f119052307.svg", {
        x: 0,
        y: 0
      }),
      new Costume("K.O.1", "44ebe27363a29ef14a5fa7434904edf2.svg", {
        x: 94.33332166666662,
        y: 41.809368359374986
      }),
      new Costume("K.O.4", "42066f3ece954584e7113a0e551d4051.svg", {
        x: 94.33331999999999,
        y: 41.80945957099624
      }),
      new Costume("K.O.2", "2689cda1f36d0feaa8bde6f014b601b2.svg", {
        x: 94.33331999999999,
        y: 41.80945830820332
      }),
      new Costume("K.O.3", "1620fb79d035b33725270a1f6df4ec71.svg", {
        x: 94.33331999999999,
        y: 41.80945830820332
      }),
      new Costume("Black Lvl3_1", "4d501a62bc7ccc19b48fb9a2f87eab24.svg", {
        x: 251.5,
        y: 189
      }),
      new Costume("Black Lvl3_2", "577086668a59ab251d690223d1803e8a.svg", {
        x: 251.5,
        y: 189
      }),
      new Costume("Black Lvl3_3", "1695db06c8166beed1d7413f6bf59fde.svg", {
        x: 251.5,
        y: 189
      }),
      new Costume("Black Lvl3_4", "dc9e4714ec53468c844f72cc21658e3b.svg", {
        x: 251.5,
        y: 189
      }),
      new Costume("Black Lvl3_5", "524611838bd254d15904f698a228cb59.svg", {
        x: 251.5,
        y: 189
      }),
      new Costume("Black Lvl3_6", "dcb04d3446518d47b9ccbcfeb799ca40.svg", {
        x: 251.5,
        y: 189
      }),
      new Costume("Black Lvl3_7", "dca412d7b932b52081b86362a5f61e0c.svg", {
        x: 251.5,
        y: 189
      }),
      new Costume("Black Lvl3_8", "5b570140fffbc7ccb22d4fdad5fdb30e.svg", {
        x: 251.5,
        y: 189
      }),
      new Costume("Red Lvl3_1", "147d7008127b7029f3b3d464282d5f7d.svg", {
        x: 33.8390331993634,
        y: 37.52364499999999
      }),
      new Costume("Red Lvl3_2", "f018cc50b6d475335331198a4c2fb32b.svg", {
        x: 34.02968746332712,
        y: 39.75580228199084
      }),
      new Costume("Red Lvl3_3", "46f1f88789fb68ce8622167b30640e36.svg", {
        x: 34.20499180231141,
        y: 40.19082999999998
      }),
      new Costume("Red Lvl3_4", "34bd85158f6756b32417d81f651d6e56.svg", {
        x: 34.5344069660604,
        y: 38.54377118703326
      }),
      new Costume("Red Lvl3_5", "fa9be15a304bd4ffda69be9fc2b5bcf9.svg", {
        x: 34.5344069660604,
        y: 38.54377118703326
      }),
      new Costume("Red Lvl3_6", "8477802407ac2cc81f5a68bf6bcc59ca.svg", {
        x: 34.53440376837182,
        y: 28.300121187033255
      }),
      new Costume("Red Lvl3_7", "b7d3272c6ee92907108f96afaea8942a.svg", {
        x: 37.93174621259939,
        y: 28.300121187033255
      }),
      new Costume("Red Lvl3_8", "190dd49fcf0eb44f91633ee5aeb05252.svg", {
        x: 38.75527561908271,
        y: 28.300121187033255
      }),
      new Costume("Red Lvl3_9", "cfd3441790d0e955104dafa310a1bb61.svg", {
        x: 44.26675133282586,
        y: 65.25876151445567
      }),
      new Costume("Red Lvl3_10", "03123ff5438a6717a1efd8efa730ff08.svg", {
        x: 45.26674669306371,
        y: 66.2587615144557
      }),
      new Costume("Red Lvl3_11", "aad05df87ad8b0682920b541584c0515.svg", {
        x: 39.58202542708747,
        y: 54.27548140264196
      }),
      new Costume("Red Lvl3_12", "6ab7bb8f0925f65e713efe3d362bca37.svg", {
        x: 30.0522920756637,
        y: 67.208495
      }),
      new Costume("Red Lvl3_13", "406643aeeb2832ee3b636d86d7e9aa0a.svg", {
        x: 29.55228622699093,
        y: 44.95847499999999
      }),
      new Costume("Red Lvl3_14", "94aea35c98d087507c93a1ae2eb2dca2.svg", {
        x: 27.00695622699095,
        y: 65.95846639985223
      }),
      new Costume("Red Lvl3_15", "3278f7fffe3027225816141c5e250e75.svg", {
        x: 39.157182132042294,
        y: 41.568117083516825
      }),
      new Costume("Red Lvl3_16", "e94944bf18fef1cab4626142b2dbf7f4.svg", {
        x: 46.811094999999995,
        y: 34.361450167471304
      }),
      new Costume("Red Lvl3_17", "debfa898691d706048e384e6f1e40381.svg", {
        x: 57.81107499999999,
        y: 34.36145516747132
      }),
      new Costume("Red Lvl3_18", "5e9fdf6baf1bdb24456deee7ab3e4511.svg", {
        x: 57.811064999999985,
        y: 34.36144775120698
      }),
      new Costume("Gridplate", "797b03bdb8cf6ccfc30c0692d533d998.png", {
        x: 480,
        y: 360
      }),
      new Costume("Grasslands", "adfd067cae7f8397bf775405785c2ff5.svg", {
        x: 248.5,
        y: 188
      }),
      new Costume("Dense Forest", "c2d2a84892d6f65da35fedfaba7b1604.png", {
        x: 480,
        y: 360
      }),
      new Costume("Scorched Forest", "181e1d43b924a8b7b5967947cb6d1daf.svg", {
        x: 248,
        y: 192.5
      }),
      new Costume("Green", "ff5a0175e48abbf712f42585122df26a.svg", {
        x: 38.51783499999999,
        y: 43.27303355167351
      }),
      new Costume("Red", "c396b9484586411eee6f5b782dcd445a.svg", {
        x: 28.887136132382324,
        y: 39.41966652530519
      }),
      new Costume("Blue", "744f26a6021d40af2ac0232a3037023f.svg", {
        x: 37.54584574167211,
        y: 62.18022325350533
      }),
      new Costume("Yellow", "00d975d3d6de1381cc766e4a79c24f35.svg", {
        x: 44.058711518428936,
        y: 50.45989636625879
      }),
      new Costume("Orange", "7183c869b6b0ae3ef6eb96df269172dc.svg", {
        x: 31.442031666666708,
        y: 23.241912639132494
      }),
      new Costume("Black", "8879eac5614989ca868c0d98bf15dcef.svg", {
        x: 36.72500491853188,
        y: 42.54820508146801
      }),
      new Costume("Cyan", "73af93d0c7e8e169c8538e55c109ef38.svg", {
        x: 30.63740371376403,
        y: 87.09756250268549
      })
    ];

    this.sounds = [new Sound("pop", "83a9787d4cb6f3b7632b4ddfebf74367.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Black Lvl3" },
        this.whenIReceiveBlackLvl3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Black Lvl3" },
        this.whenIReceiveBlackLvl4
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "K.O." }, this.whenIReceiveKO),
      new Trigger(Trigger.BROADCAST, { name: "K.O." }, this.whenIReceiveKO2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Red Lvl3" },
        this.whenIReceiveRedLvl3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Red Lvl3" },
        this.whenIReceiveRedLvl4
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "Map" }, this.whenIReceiveMap),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Win Screen" },
        this.whenIReceiveWinScreen
      )
    ];

    this.vars.id3 = 1;
  }

  *whenIReceiveBlackLvl3() {
    this.visible = true;
    this.costume = "Black Lvl3_1";
    this.size = 100;
    for (let i = 0; i < 30; i++) {
      this.effects.color = this.stage.vars.cutsceneColor;
      yield;
    }
    for (let i = 0; i < 2; i++) {
      this.costume = "N/A";
      this.size += 150;
      this.costume = "Black Lvl3_1";
      yield;
    }
    this.costume = "Black Lvl3_2";
    for (let i = 0; i < 15; i++) {
      null;
      yield;
    }
    for (let i = 0; i < 3; i++) {
      this.costumeNumber += 1;
      for (let i = 0; i < 2; i++) {
        null;
        yield;
      }
      yield;
    }
    yield* this.wait(0.2);
    for (let i = 0; i < 3; i++) {
      this.costumeNumber += 1;
      yield;
    }
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }

  *whenIReceiveBlackLvl4() {
    this.effects.brightness = 0;
    this.goto(0, 0);
    while (true) {
      this.moveAhead();
      for (let i = 0; i < 1; i++) {
        this.effects.brightness += -25;
        yield;
      }
      for (let i = 0; i < 1; i++) {
        this.effects.brightness = 0;
        yield;
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveKO() {
    this.visible = true;
    this.effects.clear();
    this.direction = 90;
    this.costume = "K.O.1";
    this.size = 900;
    for (let i = 0; i < 30; i++) {
      this.size = (this.size * 3 + 180) / 4;
      this.costume =
        "" + "K.O." + Math.floor(((this.timer * this.random(20, 25)) % 4) + 1);
      yield;
    }
    for (let i = 0; i < 4; i++) {
      this.effects.ghost += 20;
      this.costume =
        "" + "K.O." + Math.floor(((this.timer * this.random(20, 25)) % 4) + 1);
      yield;
    }
    this.effects.clear();
    this.visible = false;
  }

  *whenIReceiveKO2() {
    this.effects.ghost = 50;
    this.effects.brightness = 25;
    for (let i = 0; i < 5; i++) {
      this.effects.brightness += -5;
      this.effects.ghost += -8;
      yield;
    }
  }

  *whenIReceiveRedLvl3() {
    this.visible = true;
    this.costume = this.stage.vars.map;
    this.createClone();
    this.costume = "Red Lvl3_1";
    this.size = 300;
    this.direction = 90;
    for (let i = 0; i < 4; i++) {
      this.effects.color = this.stage.vars.cutsceneColor;
      yield;
    }
    this.costumeNumber += 1;
    for (let i = 0; i < 2; i++) {
      null;
      yield;
    }
    for (let i = 0; i < 3; i++) {
      for (let i = 0; i < 1; i++) {
        null;
        yield;
      }
      this.costumeNumber += 1;
      yield;
    }
    for (let i = 0; i < 3; i++) {
      null;
      yield;
    }
    for (let i = 0; i < 2; i++) {
      this.costumeNumber += 1;
      this.direction += 1;
      yield;
    }
    for (let i = 0; i < 2; i++) {
      for (let i = 0; i < 2; i++) {
        this.direction += 0.5;
        yield;
      }
      this.costumeNumber += 1;
      this.direction += 0.5;
      yield;
    }
    for (let i = 0; i < 5; i++) {
      for (let i = 0; i < 1; i++) {
        this.costume = "Red Lvl3_9";
        yield;
      }
      this.costumeNumber += 1;
      yield;
    }
    for (let i = 0; i < 4; i++) {
      for (let i = 0; i < 2; i++) {
        null;
        yield;
      }
      this.costumeNumber += 1;
      yield;
    }
    for (let i = 0; i < 8; i++) {
      null;
      yield;
    }
    for (let i = 0; i < 2; i++) {
      for (let i = 0; i < 1; i++) {
        null;
        yield;
      }
      this.costumeNumber += 1;
      yield;
    }
    for (let i = 0; i < 10; i++) {
      for (let i = 0; i < 1; i++) {
        this.costume = "Red Lvl3_17";
        yield;
      }
      this.costumeNumber += 1;
      yield;
    }
    this.direction = 90;
    /* TODO: Implement stop other scripts in sprite */ null;
    this.broadcast("Map");
    this.visible = false;
  }

  *whenIReceiveRedLvl4() {
    while (true) {
      this.moveAhead();
      for (let i = 0; i < 3; i++) {
        this.effects.color += 4;
        yield;
      }
      for (let i = 0; i < 1; i++) {
        this.effects.color += -12;
        yield;
      }
      yield;
    }
  }

  *startAsClone() {
    this.visible = true;
    if (this.compare(this.vars.id3, 1) === 0) {
      this.costume = this.stage.vars.playerCharacter[
        this.stage.vars.winner - 1
      ];
      this.goto(-100, -100);
      this.size = 300;
      for (let i = 0; i < 60; i++) {
        this.goto((this.x * 4 + 0) / 5, (this.y * 4 + 0) / 5);
        this.size = (this.size * 3 + 180) / 4;
        yield;
      }
    } else {
      this.moveAhead();
      this.moveBehind(2);
      this.effects.clear();
      this.goto(0, 0);
      this.direction = 90;
      this.size = 100;
      this.costume = this.stage.vars.map;
      if (this.compare(this.stage.vars.map, "Grasslands") === 0) {
        this.effects.brightness =
          -17 +
          35 *
            Math.cos(
              this.degToRad(
                (new Date().getHours() + new Date().getMinutes() / 60 + 11.4) *
                  15
              )
            );
      } else {
        this.effects.brightness = 0;
      }
    }
  }

  *whenIReceiveMap() {
    this.deleteThisClone();
  }

  *whenIReceiveWinScreen() {
    this.vars.id3 = 0;
    this.createClone();
    this.vars.id3 = 1;
    this.createClone();
    while (!this.keyPressed("any")) {
      if (this.keyPressed("enter")) {
        this.broadcast("Main Menu");
      }
      yield;
    }
    this.broadcast("game");
  }
}
