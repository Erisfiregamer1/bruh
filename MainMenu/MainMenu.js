import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@1.4.1/dist/index.esm.js";

export default class MainMenu extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("bg", "82b68144be9db8dacd194ea3e6ad8a4d.svg", {
        x: 338.99444580762247,
        y: 186.0492356352088
      }),
      new Costume("thumb1", "fdf3c413d2c84f15fc157ab8178cc0e3.svg", {
        x: 203.876625,
        y: 145.95277
      }),
      new Costume("Start", "59fe9e04797e21c8ea2145481c2bc1ee.svg", {
        x: 51.248795856054585,
        y: 25.24351999999999
      }),
      new Costume("Settings", "a23fcaea652d8a1d01d93839a1deb22a.svg", {
        x: 51.24878896064695,
        y: 21.24351999999999
      }),
      new Costume("Character Select", "3f66ff38dedb54f42f65b230e4dfc08e.svg", {
        x: 244.806275,
        y: 181.18018
      }),
      new Costume("Choose", "a4dd5191ae59c83b436451e38d13b84e.svg", {
        x: 177.62984324832954,
        y: 171.46477795129408
      }),
      new Costume("Play", "03c988d027e774c07c46f22192c096dc.svg", {
        x: 51.24878896064695,
        y: 25.573091939918527
      }),
      new Costume("Green", "66f50b30bba2dc9692f99ecffc241fac.svg", {
        x: 31.253743388857856,
        y: 34.03755441063623
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
      }),
      new Costume("Colorlens Logo", "e6ed7712d213bd4c2e42f097023f81ef.svg", {
        x: 171.365655,
        y: 177.34599999999995
      }),
      new Costume("Settings Backdrop", "b8b24045cd5ecede0359a95a2aa7d075.svg", {
        x: 248.49099,
        y: 184.183185
      }),
      new Costume("Back", "61ade80f89538bc5fc254f277f78613e.svg", {
        x: 67.66515707881507,
        y: 34.87894694784279
      }),
      new Costume("thumb2", "b31b3d403ada92d9d0cdb7f0a96e1144.svg", {
        x: 203.876625,
        y: 145.95277
      })
    ];

    this.sounds = [new Sound("touch", "6389f51cb6380e9955ca06bd3a4a7632.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
      new Trigger(Trigger.CLONE_START, this.startAsClone4),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Character Select" },
        this.whenIReceiveCharacterSelect
      ),
      new Trigger(Trigger.BROADCAST, { name: "game" }, this.whenIReceiveGame),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Settings" },
        this.whenIReceiveSettings
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Main Menu" },
        this.whenIReceiveMainMenu
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Main Menu" },
        this.whenIReceiveMainMenu2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Delete All Clones" },
        this.whenIReceiveDeleteAllClones
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLONE_START, this.startAsClone5),
      new Trigger(Trigger.CLONE_START, this.startAsClone6)
    ];

    this.vars.i26 = 0;
  }

  *whenGreenFlagClicked() {
    yield* this.broadcastAndWait("Main Menu");
  }

  *doGameMenuFast() {
    this.vars.i26 = 0;
    this.costume = "bg";
    this.createClone();
    this.costume = "" + "thumb" + this.random(1, 2);
    this.createClone();
    this.costume = "Start";
    for (let i = 0; i < 2; i++) {
      this.createClone();
      this.costumeNumber += 1;
    }
    this.costume = "Colorlens Logo";
    this.createClone();
  }

  *startAsClone() {
    this.visible = true;
    while (true) {
      if (
        this.compare(this.costumeNumber, 6) === 0 ||
        this.compare(this.costumeNumber, 1) === 0 ||
          this.compare(this.costumeNumber, 5) === 0 ||
            this.compare(this.costumeNumber, 15) === 0 ||
              this.compare(this.costumeNumber, 16) === 0
      ) {
        this.goto(0, 0);
        this.effects.color += 0.5;
      }
      if (String(this.costume.name ?? "").includes("thumb")) {
        this.goto(0, 0);
        this.effects.clear();
      }
      if (this.compare(this.costumeNumber, 3) === 0) {
        this.goto(-115, -135);
      }
      if (this.compare(this.costumeNumber, 4) === 0) {
        this.goto(115, -135);
      }
      if (this.compare(this.costumeNumber, 7) === 0) {
        this.goto(0, -135);
      }
      if (this.compare(this.costumeNumber, 17) === 0) {
        this.goto(-180, 155);
      }
      if (this.compare(this.vars.i26, 1) === 0) {
        this.size = 150;
        this.goto(-85, -15);
        this.stage.vars.p1 = this.costume.name;
        if (this.keyPressed("d")) {
          yield* this.startSound("touch");
          this.costumeNumber += 1;
          if (this.compare(this.costumeNumber, 14) > 0) {
            this.costume = "Green";
          } else {
            if (this.compare(this.costumeNumber, 8) < 0) {
              this.costume = "Green";
            }
          }
          this.stage.vars.p1 = this.costume.name;
          yield* this.wait(0.1);
        }
        if (this.keyPressed("a")) {
          yield* this.startSound("touch");
          this.costume = this.costumeNumber - 1;
          if (this.compare(this.costumeNumber, 13) > 0) {
            this.costume = "Green";
          } else {
            if (this.compare(this.costumeNumber, 8) < 0) {
              this.costume = "Cyan";
            }
          }
          this.stage.vars.p1 = this.costume.name;
          yield* this.wait(0.1);
        }
      } else {
        if (this.compare(this.vars.i26, 2) === 0) {
          this.size = 150;
          this.goto(85, -15);
          this.direction = -90;
          this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
          this.stage.vars.p2 = this.costume.name;
          if (this.keyPressed("right arrow")) {
            yield* this.startSound("touch");
            this.costumeNumber += 1;
            if (this.compare(this.costumeNumber, 14) > 0) {
              this.costume = "Green";
            } else {
              if (this.compare(this.costumeNumber, 8) < 0) {
                this.costume = "Green";
              }
            }
            this.stage.vars.p2 = this.costume.name;
            yield* this.wait(0.1);
          }
          if (this.keyPressed("left arrow")) {
            yield* this.startSound("touch");
            this.costume = this.costumeNumber - 1;
            if (this.compare(this.costumeNumber, 14) > 0) {
              this.costume = "Green";
            } else {
              if (this.compare(this.costumeNumber, 8) < 0) {
                this.costume = "Cyan";
              }
            }
            this.stage.vars.p2 = this.costume.name;
            yield* this.wait(0.1);
          }
        }
      }
      yield;
    }
  }

  *startAsClone2() {
    this.visible = true;
    while (true) {
      if (
        !(
          this.compare(this.costumeNumber, 7) > 0 &&
          this.compare(this.costumeNumber, 17) < 0
        ) &&
        !(this.compare(this.costumeNumber, 6) === 0) &&
          !(this.compare(this.costumeNumber, 5) === 0) &&
            this.compare(this.costumeNumber, 2) > 0 &&
              !String(this.costume.name ?? "").includes("thumb")
      ) {
        if (this.touching("mouse")) {
          yield* this.startSound("touch");
          this.effects.brightness = 20;
          while (!!this.touching("mouse")) {
            yield;
          }
        } else {
          this.effects.brightness = 0;
        }
      }
      yield;
    }
  }

  *startAsClone3() {
    this.visible = true;
    while (true) {
      if (
        !(
          this.compare(this.costumeNumber, 7) > 0 &&
          this.compare(this.costumeNumber, 17) < 0
        ) &&
        !(this.compare(this.costumeNumber, 6) === 0) &&
          !(this.compare(this.costumeNumber, 5) === 0) &&
            this.compare(this.costumeNumber, 2) > 0 &&
              !String(this.costume.name ?? "").includes("thumb")
      ) {
        if (this.touching("mouse")) {
          this.size += (125 - this.size) * 0.25;
        } else {
          this.size += (100 - this.size) * 0.2;
        }
      }
      yield;
    }
  }

  *startAsClone4() {
    while (true) {
      while (!!this.mouse.down) {
        yield;
      }
      while (!this.mouse.down) {
        yield;
      }
      if (this.compare(this.costume.name, "Start") === 0) {
        if (this.touching("mouse") && this.mouse.down) {
          yield* this.broadcastAndWait("Character Select");
        }
      }
      if (this.compare(this.costume.name, "Settings") === 0) {
        if (this.touching("mouse") && this.mouse.down) {
          this.broadcast("Settings");
        }
      }
      if (this.compare(this.costume.name, "Play") === 0) {
        if (this.touching("mouse") && this.mouse.down) {
          this.broadcast("Charset");
          this.broadcast("game");
        }
      }
      if (this.compare(this.costume.name, "Back") === 0) {
        if (this.touching("mouse") && this.mouse.down) {
          this.broadcast("Main Menu");
        }
      }
      yield;
    }
  }

  *doCharacterSelectFast() {
    this.costume = "Character Select";
    for (let i = 0; i < 3; i++) {
      this.createClone();
      this.costumeNumber += 1;
      yield;
    }
    this.vars.i26 = 1;
    this.createClone();
    this.vars.i26 = 2;
    this.createClone();
    this.vars.i26 = 0;
    this.costume = "Back";
    this.createClone();
  }

  *whenIReceiveCharacterSelect() {
    if (!null) {
      this.deleteThisClone();
    }
    /*
    this.stage.watchers.p1.visible = true;
    this.stage.watchers.p2.visible = true;
    */
    yield* this.doCharacterSelectFast();
  }

  *whenIReceiveGame() {
    this.stage.watchers.p1.visible = false;
    this.stage.watchers.p2.visible = false;
    this.deleteThisClone();
  }

  *doSettingsFast() {
    this.costume = "Settings Backdrop";
    this.stage.watchers.cpuPlayerPlayer1.visible = true;
    this.stage.watchers.cpuPlayerPlayer2.visible = true;
    this.stage.watchers.devMode.visible = true;
    this.stage.watchers.introAnimations.visible = true;
    this.stage.watchers.healthMultiplier.visible = true;
    this.stage.watchers.musicVolume.visible = true;
    for (let i = 0; i < 2; i++) {
      this.createClone();
      this.costumeNumber += 1;
      yield;
    }
  }

  *whenIReceiveSettings() {
    if (!null) {
      this.deleteThisClone();
    }
    yield* this.doSettingsFast();
  }

  *whenIReceiveMainMenu() {
    this.broadcast("Delete All Clones");
    this.stage.watchers.p1.visible = false;
    this.stage.watchers.p2.visible = false;
    yield* this.doGameMenuFast();
  }

  *whenIReceiveMainMenu2() {
    this.stage.watchers.cpuPlayerPlayer1.visible = false;
    this.stage.watchers.cpuPlayerPlayer2.visible = false;
    this.stage.watchers.devMode.visible = false;
    this.stage.watchers.introAnimations.visible = false;
    this.stage.watchers.healthMultiplier.visible = false;
    this.stage.watchers.musicVolume.visible = false;
  }

  *whenIReceiveDeleteAllClones() {
    this.deleteThisClone();
  }

  *whenthisspriteclicked() {
    if (
      this.compare(this.vars.i26, 1) === 0 ||
      this.compare(this.vars.i26, 2) === 0
    ) {
      yield* this.startSound("touch");
      this.costumeNumber += 1;
      if (this.compare(this.costumeNumber, 12) > 0) {
        this.costume = "Green";
      } else {
        if (this.compare(this.costumeNumber, 8) < 0) {
          this.costume = "Green";
        }
      }
      if (this.compare(this.vars.i26, 1) === 0) {
        this.stage.vars.p1 = this.costume.name;
      } else {
        this.stage.vars.p2 = this.costume.name;
      }
      yield* this.wait(0.1);
    }
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.playerColor.splice(1 - 1, 1, 0);
    this.stage.vars.playerColor.splice(2 - 1, 1, 115);
  }

  *startAsClone5() {
    while (true) {
      if (this.compare(this.vars.i26, 0) > 0) {
        this.effects.brightness = this.random(0, -10);
        this.effects.color = this.stage.vars.playerColor[this.vars.i26 - 1];
      }
      yield;
    }
  }

  *startAsClone6() {
    while (true) {
      if (this.compare(this.vars.i26, 1) === 0) {
        if (this.keyPressed("w")) {
          this.stage.vars.playerColor.splice(
            1 - 1,
            1,
            this.stage.vars.playerColor[1 - 1] + 5
          );
          yield* this.wait(0.05);
        }
        if (this.keyPressed("s")) {
          this.stage.vars.playerColor.splice(
            1 - 1,
            1,
            this.stage.vars.playerColor[1 - 1] + -5
          );
          yield* this.wait(0.05);
        }
      } else {
        if (this.compare(this.vars.i26, 2) === 0) {
          if (this.keyPressed("up arrow")) {
            this.stage.vars.playerColor.splice(
              2 - 1,
              1,
              this.stage.vars.playerColor[2 - 1] + 5
            );
            yield* this.wait(0.05);
          }
          if (this.keyPressed("down arrow")) {
            this.stage.vars.playerColor.splice(
              2 - 1,
              1,
              this.stage.vars.playerColor[2 - 1] + -5
            );
            yield* this.wait(0.05);
          }
        }
      }
      yield;
    }
  }
}
