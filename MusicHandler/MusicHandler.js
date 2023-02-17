import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "/index.esm.js";

export default class MusicHandler extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "b3f912321a94f692080cf556f215446d.svg", {
        x: 38.375,
        y: 39.10693929619467
      })
    ];

    this.sounds = [
      new Sound(
        "Colorlens Menu (Stage 1)",
        "090792f30bd7e575625fe1eddc7ee21e.mp3"
      ),
      new Sound(
        "Colorlens Menu (Stage 2)",
        "fd8a0b843776fc769c34bd36262704e5.mp3"
      ),
      new Sound(
        "Colorlens Menu (Stage 3)",
        "d9950abb891643685dfd6d6543f77b18.mp3"
      ),
      new Sound("Ex2", "c225f242bd421a45187af2a98d06870a.mp3"),
      new Sound("Catch My Fist", "3aeb252dda5c2d10dd2f7eaeae60b6cb.mp3"),
      new Sound(
        "Intro Bit (Grassland)",
        "426d9d537e3023ec8f8dfdb304876835.wav"
      ),
      new Sound("Intro Bit (Forest)", "8583518c6bf4f3a505a291d14d76feaa.wav"),
      new Sound(
        "Rainy Beats (No loop)",
        "5804795a4cd9777ad298787563e21c32.mp3"
      ),
      new Sound("Rainy Beats", "f8b095b6fa6aba8a8093096de4f2ba64.mp3")
    ];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Main Menu" },
        this.whenIReceiveMainMenu
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Character Select" },
        this.whenIReceiveCharacterSelect
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Settings" },
        this.whenIReceiveSettings
      ),
      new Trigger(Trigger.BROADCAST, { name: "Pause" }, this.whenIReceivePause),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Resume" },
        this.whenIReceiveResume
      ),
      new Trigger(Trigger.BROADCAST, { name: "game" }, this.whenIReceiveGame),
      new Trigger(Trigger.BROADCAST, { name: "game" }, this.whenIReceiveGame2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Resume" },
        this.whenIReceiveResume2
      ),
      new Trigger(Trigger.BROADCAST, { name: "game" }, this.whenIReceiveGame3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "game end" },
        this.whenIReceiveGameEnd
      ),
      new Trigger(Trigger.BROADCAST, { name: "game" }, this.whenIReceiveGame4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Main Menu" },
        this.whenIReceiveMainMenu2
      )
    ];

    this.audioEffects.volume = 50;

    this.vars.mid = 0;
  }

  *startAsClone() {
    this.audioEffects.volume = 0;
    this.visible = false;
    while (true) {
      if (String(this.vars.mid ?? "").includes("Menu")) {
        yield* this.playSoundUntilDone(
          String(this.vars.mid ?? "")[1 - 1] ?? ""
        );
      } else {
        if (String(this.stage.vars.song ?? "").includes(this.vars.mid)) {
          yield* this.playSoundUntilDone(this.vars.mid);
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.vars.mid = "1 Menu";
    this.createClone();
    this.vars.mid = "2 Menu";
    this.createClone();
    this.vars.mid = "3 Menu";
    this.createClone();
    this.vars.mid = 0;
  }

  *whenIReceiveMainMenu() {
    if (this.compare(this.vars.mid, "1 Menu") === 0) {
      for (let i = 0; i < 20; i++) {
        this.audioEffects.volume += this.stage.vars.musicVolume / 20;
        yield;
      }
    } else {
      for (let i = 0; i < 20; i++) {
        this.audioEffects.volume += this.stage.vars.musicVolume / -20;
        yield;
      }
      this.audioEffects.volume = 0;
    }
  }

  *whenIReceiveCharacterSelect() {
    if (this.compare(this.vars.mid, "3 Menu") === 0) {
      for (let i = 0; i < 10; i++) {
        this.audioEffects.volume += this.stage.vars.musicVolume / 10;
        yield;
      }
    } else {
      for (let i = 0; i < 10; i++) {
        this.audioEffects.volume += this.stage.vars.musicVolume / -10;
        yield;
      }
      this.audioEffects.volume = 0;
    }
  }

  *whenIReceiveSettings() {
    if (this.compare(this.vars.mid, "2 Menu") === 0) {
      for (let i = 0; i < 10; i++) {
        this.audioEffects.volume += this.stage.vars.musicVolume / 10;
        yield;
      }
    } else {
      for (let i = 0; i < 10; i++) {
        this.audioEffects.volume += this.stage.vars.musicVolume / -10;
        yield;
      }
      this.audioEffects.volume = 0;
    }
  }

  *whenIReceivePause() {
    if (this.compare(this.vars.mid, "1 Menu") === 0) {
      this.audioEffects.volume = this.stage.vars.musicVolume / 2;
    } else {
      this.audioEffects.volume = 0;
    }
  }

  *whenIReceiveResume() {
    this.audioEffects.volume = 0;
  }

  *whenIReceiveGame() {
    if (this.compare(this.vars.mid, 0) === 0) {
      this.audioEffects.volume = this.stage.vars.musicVolume;
      this.stage.vars.song = this.stage.vars.songList[
        this.random(1, this.stage.vars.songList.length) - 1
      ];
      if (this.compare(this.stage.vars.song, "Ex2") === 0) {
        if (this.compare(this.stage.vars.map, "Grasslands") === 0) {
          yield* this.startSound("Intro Bit (Grassland)");
        } else {
          if (this.compare(this.stage.vars.map, "Dense Forest") === 0) {
            yield* this.startSound("Intro Bit (Forest)");
          } else {
            null;
          }
        }
      }
      while (true) {
        yield* this.playSoundUntilDone(this.stage.vars.song);
        yield;
      }
    }
  }

  *whenIReceiveGame2() {
    this.stopAllSounds();
    if (String(this.stage.vars.song ?? "").includes(this.vars.mid)) {
      this.audioEffects.volume = this.stage.vars.musicVolume;
    } else {
      this.audioEffects.volume = 0;
    }
  }

  *whenIReceiveResume2() {
    if (String(this.stage.vars.song ?? "").includes(this.vars.mid)) {
      this.audioEffects.volume = this.stage.vars.musicVolume;
    } else {
      this.audioEffects.volume = 0;
    }
    if (this.compare(this.vars.mid, 0) === 0) {
      this.audioEffects.volume = this.stage.vars.musicVolume;
    }
  }

  *whenIReceiveGame3() {
    if (this.compare(this.vars.mid, 0) === 0) {
      this.audioEffects.volume = this.stage.vars.musicVolume;
    } else {
      this.audioEffects.volume = 0;
    }
  }

  *whenIReceiveGameEnd() {
    if (this.compare(this.vars.mid, 0) === 0) {
      /* TODO: Implement stop other scripts in sprite */ null;
      for (let i = 0; i < 90; i++) {
        this.audioEffects.volume += this.stage.vars.musicVolume / -90;
        yield;
      }
    }
  }

  *whenIReceiveGame4() {
    while (true) {
      if (
        this.compare(this.vars.mid, 0) === 0 &&
        this.compare(this.stage.vars.pauseMenu, 0) === 0
      ) {
        this.audioEffects.volume = this.stage.vars.musicVolume;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.musicVolume = 50;
    while (true) {
      if (
        this.compare(this.vars.mid, 0) === 0 &&
        this.compare(this.stage.vars.pauseMenu, 0) === 0
      ) {
        this.audioEffects.volume = this.stage.vars.musicVolume;
      }
      yield;
    }
  }

  *whenIReceiveMainMenu2() {
    if (this.compare(this.vars.mid, 0) === 0) {
      /* TODO: Implement stop other scripts in sprite */ null;
      this.audioEffects.volume = 0;
    }
  }
}
