import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@1.4.1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
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
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.KEY_PRESSED, { key: "-" }, this.whenKeyPressed),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Charset" },
        this.whenIReceiveCharset
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "game" }, this.whenIReceiveGame),
      new Trigger(Trigger.BROADCAST, { name: "game" }, this.whenIReceiveGame2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Main Menu" },
        this.whenIReceiveMainMenu
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Resume" },
        this.whenIReceiveResume
      ),
      new Trigger(Trigger.BROADCAST, { name: "Pause" }, this.whenIReceivePause),
      new Trigger(Trigger.BROADCAST, { name: "Dev" }, this.whenIReceiveDev),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Un-Dev" },
        this.whenIReceiveUnDev
      ),
      new Trigger(Trigger.BROADCAST, { name: "game" }, this.whenIReceiveGame3),
      new Trigger(Trigger.BROADCAST, { name: "game" }, this.whenIReceiveGame4),
      new Trigger(Trigger.KEY_PRESSED, { key: "7" }, this.whenKey7Pressed)
    ];

    this.vars.OfPlayers = 2;
    this.vars.scrollX = -18.094999999999995;
    this.vars.hitboxes = 0;
    this.vars.rumbleX = 0;
    this.vars.rumbleY = 0;
    this.vars.gameframe = 1626;
    this.vars.over = 0;
    this.vars.p1 = "Green";
    this.vars.p2 = "Red";
    this.vars.map = "Grasslands";
    this.vars.e = 2;
    this.vars.pauseMenu = 0;
    this.vars.cpuPlayerPlayer1 = 0;
    this.vars.mobile2 = 0;
    this.vars.song = "Ex2";
    this.vars.devMode = 0;
    this.vars.stageF = 2;
    this.vars.infiniteHealth = 0;
    this.vars.infiniteEx = 0;
    this.vars.absoluteChaos = 0;
    this.vars.infiniStomp = 0;
    this.vars.introAnimations = 0;
    this.vars.cpuPlayerPlayer2 = 0;
    this.vars.cutsceneColor = 115;
    this.vars.healthMultiplier = 1;
    this.vars.musicVolume = 50;
    this.vars.winner = 0;
    this.vars.alivePlayers = 2;
    this.vars.playerX = [-10.68999999999999, -25.5];
    this.vars.playerY = [0, 0];
    this.vars.playerDirection = [-1, 1];
    this.vars.playerState = [0, 0];
    this.vars.playerFrame = [71, 74];
    this.vars.playerXSpeed = [0, 0];
    this.vars.playerYSpeed = [0, 0];
    this.vars.newData = [
      -10.68999999999999,
      0,
      0,
      0,
      -1,
      0,
      71,
      92,
      0,
      0,
      0,
      0,
      0,
      0,
      2,
      2,
      10,
      0,
      -25.5,
      0,
      0,
      0,
      1,
      0,
      74,
      90,
      0,
      0,
      0,
      0,
      0,
      0,
      2,
      2,
      10,
      0
    ];
    this.vars.hurtboxX = [-25.5, -25.5];
    this.vars.hitboxX = [0, 0];
    this.vars.hitboxY = [0, 0];
    this.vars.hitboxXSize = [0, 0];
    this.vars.hitboxYSize = [0, 0];
    this.vars.playerHealth = [92, 90];
    this.vars.hitboxDamage = [0, 0];
    this.vars.effectX = [];
    this.vars.effectY = [];
    this.vars.effectType = [];
    this.vars.effectValue = [];
    this.vars.playerColor = [0, 115, 32];
    this.vars.currentInputs = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ];
    this.vars.playerCommands = [0, 0];
    this.vars.previousInputs = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ];
    this.vars.projectileX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.vars.projectileY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.vars.projectileType = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.vars.projectileFrame = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.vars.projectileOwner = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.vars.projectileDirection = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.vars.playerCharacter = ["Green", "Red"];
    this.vars.hitboxXKnockback = [2, 2];
    this.vars.hitboxYKnockback = [2, 2];
    this.vars.hitboxHitstun = [10, 10];
    this.vars.playerProjectile = [5, 2];
    this.vars.projectileStats = [
      4801,
      6910,
      3432,
      4900,
      1552,
      2691,
      400,
      8905,
      3202,
      4720,
      2203
    ];
    this.vars.playerEx = [1.5, 3];
    this.vars.mobile = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ];
    this.vars.alphabetConverter = ["a", "b", "c", "d", "e", "f", "g"];
    this.vars.projectileHitboxX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.vars.projectileHitboxY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.vars.playerFreeze = [0, 0];
    this.vars.songList = ["Catch My Fist", "Ex2", "Rainy Beats"];
    this.vars.maps = [
      "Gridplate",
      "Grasslands",
      "Dense Forest",
      "Scorched Forest"
    ];
    this.vars.characterOrder = [
      "Green",
      "Red",
      "Blue",
      "Yellow",
      "Orange",
      "Black",
      "Cyan"
    ];
    this.vars.characterRunSpeed = [4.15, 5.5, 4, 10, 5, 3.8, 4.85];
    this.vars.characterJumpHeight = [5, 5, 5.2, 5, 5.5, 5, 5];
    this.vars.characterWalkSpeed = [2, 2, 1.75, 2.5, 2, 1.5, 2.5];
    this.vars.hitboxType = [0, 0];
    this.vars.characterHealth = [100, 102, 100, 95, 99, 107, 98];
    this.vars.hitCooldown = [0, 0];

    this.watchers.p1 = new Watcher({
      label: "P1",
      style: "normal",
      visible: false,
      value: () => this.vars.p1,
      x: 347,
      y: 78
    });
    this.watchers.p2 = new Watcher({
      label: "P2",
      style: "normal",
      visible: false,
      value: () => this.vars.p2,
      x: 504,
      y: 75
    });
    this.watchers.cpuPlayerPlayer1 = new Watcher({
      label: "CPU Player (Player 1)",
      style: "slider",
      visible: false,
      value: () => this.vars.cpuPlayerPlayer1,
      setValue: value => {
        this.vars.cpuPlayerPlayer1 = value;
      },
      x: 240,
      y: -102
    });
    this.watchers.devMode = new Watcher({
      label: "Dev Mode",
      style: "slider",
      visible: false,
      value: () => this.vars.devMode,
      setValue: value => {
        this.vars.devMode = value;
      },
      x: 240,
      y: -63
    });
    this.watchers.infiniteHealth = new Watcher({
      label: "Infinite Health",
      style: "slider",
      visible: false,
      value: () => this.vars.infiniteHealth,
      setValue: value => {
        this.vars.infiniteHealth = value;
      },
      x: 240,
      y: 180
    });
    this.watchers.infiniteEx = new Watcher({
      label: "Infinite EX",
      style: "slider",
      visible: false,
      value: () => this.vars.infiniteEx,
      setValue: value => {
        this.vars.infiniteEx = value;
      },
      x: 240,
      y: 142
    });
    this.watchers.absoluteChaos = new Watcher({
      label: "Absolute Chaos",
      style: "slider",
      visible: false,
      value: () => this.vars.absoluteChaos,
      setValue: value => {
        this.vars.absoluteChaos = value;
      },
      x: 240,
      y: 105
    });
    this.watchers.infiniStomp = new Watcher({
      label: "Infini-Stomp",
      style: "slider",
      visible: false,
      value: () => this.vars.infiniStomp,
      setValue: value => {
        this.vars.infiniStomp = value;
      },
      x: 240,
      y: 68
    });
    this.watchers.introAnimations = new Watcher({
      label: "Intro Animations",
      style: "slider",
      visible: false,
      value: () => this.vars.introAnimations,
      setValue: value => {
        this.vars.introAnimations = value;
      },
      x: 240,
      y: -24
    });
    this.watchers.cpuPlayerPlayer2 = new Watcher({
      label: "CPU Player (Player 2)",
      style: "slider",
      visible: false,
      value: () => this.vars.cpuPlayerPlayer2,
      setValue: value => {
        this.vars.cpuPlayerPlayer2 = value;
      },
      x: 240,
      y: -141
    });
    this.watchers.healthMultiplier = new Watcher({
      label: "Health Multiplier",
      style: "slider",
      visible: false,
      value: () => this.vars.healthMultiplier,
      setValue: value => {
        this.vars.healthMultiplier = value;
      },
      x: 240,
      y: 54
    });
    this.watchers.musicVolume = new Watcher({
      label: "Music Volume",
      style: "slider",
      visible: false,
      value: () => this.vars.musicVolume,
      setValue: value => {
        this.vars.musicVolume = value;
      },
      x: 573,
      y: 180
    });
    this.watchers.playerHealth = new Watcher({
      label: "Player Health",
      style: "normal",
      visible: false,
      value: () => this.vars.playerHealth,
      x: 423,
      y: 180,
      width: 100,
      height: 93
    });
    this.watchers.playerEx = new Watcher({
      label: "Player EX",
      style: "normal",
      visible: false,
      value: () => this.vars.playerEx,
      x: 523,
      y: 180,
      width: 100,
      height: 93
    });
    this.watchers.maps = new Watcher({
      label: "Maps",
      style: "normal",
      visible: false,
      value: () => this.vars.maps,
      x: 576,
      y: -41,
      width: 142,
      height: 137
    });
  }

  *playerSetup() {
    for (let i = 0; i < this.vars.OfPlayers; i++) {
      this.vars.playerCharacter.push("");
      this.vars.playerProjectile.push("");
    }
  }

  *whenKeyPressed() {
    this.vars.playerHealth.splice(this.random(1, 2) - 1, 1, 0);
  }

  *whenIReceiveCharset() {
    this.vars.playerProjectile = [];
    this.vars.playerCharacter = [];
    yield* this.playerSetup();
    this.vars.playerCharacter.splice(1 - 1, 1, this.vars.p1);
    this.vars.playerCharacter.splice(2 - 1, 1, this.vars.p2);
    yield* this.projectileSetup();
  }

  *projectileSetup() {
    this.vars.e = 0;
    for (let i = 0; i < this.vars.OfPlayers; i++) {
      this.vars.e += 1;
      if (
        this.compare(this.vars.playerCharacter[this.vars.e - 1], "Green") === 0
      ) {
        this.vars.playerProjectile.splice(this.vars.e - 1, 1, 5);
      }
      if (
        this.compare(this.vars.playerCharacter[this.vars.e - 1], "Red") === 0
      ) {
        this.vars.playerProjectile.splice(this.vars.e - 1, 1, 2);
      }
      if (
        this.compare(this.vars.playerCharacter[this.vars.e - 1], "Blue") === 0
      ) {
        this.vars.playerProjectile.splice(this.vars.e - 1, 1, 3);
      }
      if (
        this.compare(this.vars.playerCharacter[this.vars.e - 1], "Yellow") === 0
      ) {
        this.vars.playerProjectile.splice(this.vars.e - 1, 1, 4);
      }
      if (
        this.compare(this.vars.playerCharacter[this.vars.e - 1], "Orange") === 0
      ) {
        this.vars.playerProjectile.splice(this.vars.e - 1, 1, 8);
      }
      if (
        this.compare(this.vars.playerCharacter[this.vars.e - 1], "Black") === 0
      ) {
        this.vars.playerProjectile.splice(this.vars.e - 1, 1, 10);
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.vars.playerFreeze = [];
    this.vars.gameframe = 0;
    this.vars.pauseMenu = 0;
    this.vars.infiniteEx = 0;
    this.vars.infiniteHealth = 0;
    this.vars.absoluteChaos = 0;
    this.vars.infiniStomp = 0;
    this.vars.healthMultiplier = 1;
    this.broadcast("Un-Dev");
  }

  *freezePlayers() {
    this.vars.stageF = 0;
    for (let i = 0; i < this.vars.OfPlayers; i++) {
      this.vars.stageF += 1;
      if (
        !(this.compare(this.vars.playerState[this.vars.stageF - 1], 23) === 0)
      ) {
        if (
          !(
            (this.compare(this.vars.playerState[this.vars.stageF - 1], 6) > 0 &&
              this.compare(this.vars.playerState[this.vars.stageF - 1], 11) <
                0) ||
            this.compare(this.vars.playerState[this.vars.stageF - 1], 15) ===
              0 ||
              this.compare(this.vars.playerState[this.vars.stageF - 1], 19) ===
                0 ||
                this.compare(
                  this.vars.playerState[this.vars.stageF - 1],
                  28
                ) === 0
          )
        ) {
          if (
            !(
              this.compare(this.vars.playerState[this.vars.stageF - 1], 24) ===
                0 &&
              this.compare(this.vars.playerFrame[this.vars.stageF - 1], 17) < 0
            )
          ) {
            this.vars.playerFreeze.splice(this.vars.stageF - 1, 1, 1);
          }
        }
      }
      this.vars.playerCommands.splice(this.vars.stageF - 1, 1, "");
      if (this.compare(this.vars.playerState[this.vars.stageF - 1], 1) === 0) {
        this.vars.playerFrame.splice(this.vars.stageF - 1, 1, 1);
        this.vars.playerState.splice(this.vars.stageF - 1, 1, 6);
      }
    }
  }

  *whenIReceiveGame() {
    while (true) {
      this.vars.playerEx.splice(
        1 - 1,
        1,
        Math.round(this.vars.playerEx[1 - 1] * 200) / 200
      );
      this.vars.playerEx.splice(
        2 - 1,
        1,
        Math.round(this.vars.playerEx[2 - 1] * 200) / 200
      );
      if (this.vars.playerState.includes(23)) {
        yield* this.freezePlayers();
      }
      if (this.compare(this.vars.infiniteHealth, 1) === 0) {
        yield* this.infinite("Health");
      }
      if (this.compare(this.vars.infiniteEx, 1) === 0) {
        yield* this.infinite("EX");
      }
      if (this.compare(this.vars.absoluteChaos, 1) === 0) {
        this.vars.stageF = this.random(1, this.vars.OfPlayers);
        this.vars.hitboxDamage.splice(
          this.vars.stageF - 1,
          1,
          Math.ceil(
            this.vars.hitboxDamage[this.vars.stageF - 1] * this.random(0.1, 3)
          )
        );
        this.vars.playerProjectile.splice(
          this.vars.stageF - 1,
          1,
          this.random(1, 8)
        );
        this.vars.hitboxHitstun.splice(
          this.random(1, this.vars.OfPlayers) - 1,
          1,
          this.random(12, 4)
        );
        this.vars.hitboxXKnockback.splice(
          this.random(1, this.vars.OfPlayers) - 1,
          1,
          this.random(30, -10)
        );
        this.vars.hitboxYKnockback.splice(
          this.random(1, this.vars.OfPlayers) - 1,
          1,
          this.random(12, -10)
        );
      }
      yield;
    }
  }

  *whenIReceiveGame2() {
    if (this.compare(this.vars.devMode, 1) === 0) {
      this.watchers.playerHealth.visible = true;
      this.watchers.playerEx.visible = true;
    }
  }

  *whenIReceiveMainMenu() {
    this.watchers.playerHealth.visible = false;
    this.watchers.playerEx.visible = false;
    this.broadcast("Un-Dev");
  }

  *whenIReceiveResume() {
    if (this.compare(this.vars.devMode, 1) === 0) {
      this.watchers.playerHealth.visible = true;
      this.watchers.playerEx.visible = true;
    }
  }

  *whenIReceivePause() {
    this.watchers.playerHealth.visible = false;
    this.watchers.playerEx.visible = false;
  }

  *whenIReceiveDev() {
    this.watchers.infiniteHealth.visible = true;
    this.watchers.absoluteChaos.visible = true;
    this.watchers.infiniteEx.visible = true;
    if (
      this.compare(/* no username */ "", "Erisfiregamer1") === 0 ||
      this.compare(/* no username */ "", "Yuski347") === 0
    ) {
      this.watchers.infiniStomp.visible = true;
    }
  }

  *whenIReceiveUnDev() {
    this.watchers.infiniteHealth.visible = false;
    this.watchers.absoluteChaos.visible = false;
    this.watchers.infiniteEx.visible = false;
    this.watchers.infiniStomp.visible = false;
  }

  *infinite(stat) {
    this.vars.stageF = 0;
    for (let i = 0; i < this.vars.OfPlayers; i++) {
      this.vars.stageF += 1;
      if (this.compare(stat, "Health") === 0) {
        this.vars.playerHealth.splice(this.vars.stageF - 1, 1, 100);
      } else {
        if (this.compare(stat, "EX") === 0) {
          this.vars.playerEx.splice(this.vars.stageF - 1, 1, 3);
        } else {
          null;
        }
      }
    }
  }

  *whenIReceiveGame3() {
    if (this.compare(this.vars.introAnimations, 1) === 0) {
      for (let i = 0; i < 2; i++) {
        this.vars.playerState.splice(1 - 1, 1, -1);
        this.vars.playerState.splice(2 - 1, 1, -1);
        yield;
      }
    }
    yield* this.wait(1);
    while (true) {
      yield* this.playerCheck();
      if (this.compare(this.vars.alivePlayers, 1) === 0) {
        yield* this.broadcastAndWait("game end");
        return;
      }
      yield;
    }
  }

  *whenIReceiveGame4() {
    while (true) {
      this.costume = this.vars.map;
      if (this.compare(this.vars.map, "Grasslands") === 0) {
        this.effects.brightness =
          -12 +
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
      yield;
    }
  }

  *whenKey7Pressed() {
    if (this.compare(/* no username */ "", "yuski347") === 0) {
      this.broadcast("game");
    }
  }

  *playerCheck() {
    this.vars.e = 0;
    this.vars.alivePlayers = 0;
    for (let i = 0; i < this.vars.OfPlayers; i++) {
      this.vars.e += 1;
      if (this.compare(this.vars.playerHealth[this.vars.e - 1], 0) > 0) {
        this.vars.alivePlayers += 1;
      }
    }
  }
}
