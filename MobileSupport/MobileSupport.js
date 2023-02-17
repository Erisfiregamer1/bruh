import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@1.4.1/dist/index.esm.js";

export default class MobileSupport extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Enable ON", "3ae5e053988510f3f887624a78116674.svg", {
        x: 23.875003256173102,
        y: 47.55809999999997
      }),
      new Costume(
        "Enable JoyStick (unused)",
        "620580ced76ba02979bb2e31b82074be.svg",
        { x: 23.874994999999984, y: 49.30809999999997 }
      ),
      new Costume("Enable OFF", "610b81d36a0a87096b51ae7c3dbb670e.svg", {
        x: 23.875003256173102,
        y: 23.875004999999987
      }),
      new Costume("Up", "f22dc5ddfc95664a7fb2ad28d8f7b0ef.svg", {
        x: 23.875004999999987,
        y: 23.875004999999987
      }),
      new Costume("Down", "a6549b4c4599a616cddef7bfeff32da7.svg", {
        x: 23.874994999999984,
        y: 23.875004999999987
      }),
      new Costume("Left", "c354bf724d64a92b2b4e57562edbaac6.svg", {
        x: 23.874995000000013,
        y: 23.875004999999987
      }),
      new Costume("Right", "6098fce0ed5b07f532e96bc89f44f575.svg", {
        x: 23.874995000000013,
        y: 23.87500499999996
      }),
      new Costume("Attack1", "4aefd15c357c098b8c0066cd438bed67.svg", {
        x: 23.874975000000035,
        y: 23.87500499999996
      }),
      new Costume("Attack2", "1d2892af117bde3bebadb5aa99b3c355.svg", {
        x: 23.874975000000035,
        y: 23.87500499999996
      }),
      new Costume("Stick 1", "a833ca5d66bb057780b957e6e3dffdd5.svg", {
        x: 20.875,
        y: 20.87499999999997
      }),
      new Costume("Stick Base", "a3586594d1cddbbfa7be922cdacf26c8.svg", {
        x: 23.874975000000006,
        y: 23.875004999999987
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "game" }, this.whenIReceiveGame),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Settings" },
        this.whenIReceiveSettings
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Main Menu" },
        this.whenIReceiveMainMenu
      )
    ];

    this.vars.id2 = 0;
    this.vars.P = 3;
  }

  *whenthisspriteclicked() {
    if (this.compare(this.vars.id2, 0) === 0) {
      if (this.compare(this.stage.vars.mobile2, 0) === 0) {
        this.stage.vars.mobile2 = 1;
        this.costume = "Enable ON";
      } else {
        this.stage.vars.mobile2 = 0;
        this.costume = "Enable OFF";
      }
    }
  }

  *whenIReceiveGame() {
    if (!null) {
      this.deleteThisClone();
    }
    if (this.compare(this.stage.vars.mobile2, 1) === 0) {
      this.stage.vars.mobile = [];
      this.vars.id2 = 0;
      this.costume = "Up";
      this.vars.P = 1;
      for (let i = 0; i < this.stage.vars.OfPlayers; i++) {
        this.vars.id2 = 0;
        for (let i = 0; i < 4; i++) {
          this.vars.id2 += 1;
          this.stage.vars.mobile.push("");
          this.stage.vars.mobile.push("");
          this.stage.vars.mobile.push("");
          this.stage.vars.mobile.push("");
          this.createClone();
          yield;
        }
        this.vars.id2 = 7;
        this.createClone();
        this.vars.id2 = 8;
        this.createClone();
        this.vars.P += 1;
        yield;
      }
      this.vars.id2 = 0;
    }
  }

  *startAsClone() {
    this.size = 100;
    while (true) {
      this.visible = true;
      if (this.compare(this.vars.id2, 1) === 0) {
        this.costume = "Up";
        this.goto(-170 + (this.vars.P - 1) * 340, -80);
        if (this.mouse.down && this.touching("mouse")) {
          this.stage.vars.mobile.splice(1 + (this.vars.P - 1) * 8 - 1, 1, 1);
          this.effects.brightness = 20;
        } else {
          this.stage.vars.mobile.splice(1 + (this.vars.P - 1) * 8 - 1, 1, 0);
          this.effects.clear();
        }
      } else {
        if (this.compare(this.vars.id2, 2) === 0) {
          this.costume = "Left";
          this.goto(-220 + (this.vars.P - 1) * 340, -130);
          if (this.mouse.down && this.touching("mouse")) {
            this.stage.vars.mobile.splice(2 + (this.vars.P - 1) * 8 - 1, 1, 1);
            this.effects.brightness = 20;
          } else {
            this.stage.vars.mobile.splice(2 + (this.vars.P - 1) * 8 - 1, 1, 0);
            this.effects.clear();
          }
        } else {
          if (this.compare(this.vars.id2, 3) === 0) {
            this.costume = "Right";
            this.goto(-120 + (this.vars.P - 1) * 340, -130);
            if (this.mouse.down && this.touching("mouse")) {
              this.stage.vars.mobile.splice(
                3 + (this.vars.P - 1) * 8 - 1,
                1,
                1
              );
              this.effects.brightness = 20;
            } else {
              this.stage.vars.mobile.splice(
                3 + (this.vars.P - 1) * 8 - 1,
                1,
                0
              );
              this.effects.clear();
            }
          } else {
            if (this.compare(this.vars.id2, 4) === 0) {
              this.costume = "Attack1";
              this.goto(-115 + (this.vars.P - 1) * 175, -80);
              if (this.mouse.down && this.touching("mouse")) {
                this.stage.vars.mobile.splice(
                  5 + (this.vars.P - 1) * 8 - 1,
                  1,
                  1
                );
              } else {
                this.stage.vars.mobile.splice(
                  5 + (this.vars.P - 1) * 8 - 1,
                  1,
                  0
                );
                this.effects.clear();
              }
            } else {
              if (this.compare(this.vars.id2, 7) === 0) {
                this.costume = "Attack2";
                this.goto(-60 + (this.vars.P - 1) * 175, -80);
                if (this.mouse.down && this.touching("mouse")) {
                  this.stage.vars.mobile.splice(
                    6 + (this.vars.P - 1) * 8 - 1,
                    1,
                    1
                  );
                  this.effects.brightness = 20;
                } else {
                  this.stage.vars.mobile.splice(
                    6 + (this.vars.P - 1) * 8 - 1,
                    1,
                    0
                  );
                  this.effects.clear();
                }
              } else {
                if (this.compare(this.vars.id2, 8) === 0) {
                  this.costume = "Down";
                  this.goto(-170 + (this.vars.P - 1) * 340, -130);
                  if (this.mouse.down && this.touching("mouse")) {
                    this.stage.vars.mobile.splice(
                      4 + (this.vars.P - 1) * 8 - 1,
                      1,
                      1
                    );
                    this.effects.brightness = 20;
                  } else {
                    this.stage.vars.mobile.splice(
                      4 + (this.vars.P - 1) * 8 - 1,
                      1,
                      0
                    );
                    this.effects.clear();
                  }
                }
              }
            }
          }
        }
      }
      yield;
    }
  }

  *whenIReceiveSettings() {
    this.vars.id2 = 0;
    if (this.compare(this.stage.vars.mobile2, 1) === 0) {
      this.costume = "Enable ON";
    } else {
      this.costume = "Enable OFF";
    }
    this.goto(210, -150);
    this.visible = true;
  }

  *whenIReceiveMainMenu() {
    this.size = 100;
    this.visible = false;
    this.deleteThisClone();
  }
}
