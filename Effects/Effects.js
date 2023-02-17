import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@1.4.1/dist/index.esm.js";

export default class Effects extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Block", "e65c8d05a5c8fc1cd3231e5d0ac5fbff.png", {
        x: 3,
        y: 4
      }),
      new Costume("Block2", "ffc87fc562132c7c1af9103c1c98654d.png", {
        x: 4,
        y: 5
      }),
      new Costume("Block3", "95093019c677b9f406b512531bb89a1d.png", {
        x: 4,
        y: 5
      }),
      new Costume("Hit", "4ae1413bd56f40e58e213a3a052b7004.png", {
        x: 6,
        y: 7
      }),
      new Costume("Hit2", "a076c52b019e5387148d1843738dddaa.png", {
        x: 7,
        y: 8
      }),
      new Costume("Hit3", "65dc326901948d8875e0f8e31fe5e2c8.png", {
        x: 8,
        y: 9
      }),
      new Costume("Tint", "13acf40fcbcd9463222708eed62bebf8.png", {
        x: 480,
        y: 360
      }),
      new Costume("Particle", "de23476539a89fa90fc2eb6f37d4b0ec.svg", {
        x: 2.335064999999986,
        y: -4.855700000000013
      }),
      new Costume("Land", "a49e825ccda790943fa7ad1abff06919.svg", {
        x: 8.122070000000008,
        y: 1.4493050000000096
      }),
      new Costume("Land2", "3ddc3ff55579d496642f3ef87f9e1480.svg", {
        x: 18.485706363636297,
        y: 0.26748681818185105
      }),
      new Costume("Land3", "23acfc45a155fdd368334723394c2ccf.svg", {
        x: 19.84934272727267,
        y: -2.0052404545454294
      }),
      new Costume("Land4", "9500204674e1efb9ddaa851db8341ebc.svg", {
        x: 21.212979090909016,
        y: -5.459785909090897
      }),
      new Costume("Jump", "a49e825ccda790943fa7ad1abff06919.svg", {
        x: 8.122070000000008,
        y: 1.4493050000000096
      }),
      new Costume("Jump2", "fd6a73e554aa4aeb6bfe59ec6554ea71.svg", {
        x: 7.212969090909098,
        y: 4.2674768181818195
      }),
      new Costume("Jump3", "6c8d8fec1fced024255b7727851ffc87.svg", {
        x: 5.576595454545441,
        y: 7.812927344837988
      }),
      new Costume("Jump4", "70954f55005ff32ac62c029927f0803b.svg", {
        x: 4.940231818181815,
        y: 8.540200072110707
      }),
      new Costume("Jump5", "b3e9a340757f0c4c974f0cb02113b053.svg", {
        x: 4.394777272727254,
        y: 9.176563708474333
      }),
      new Costume("Input", "bb2ae413be118bb228b91c2e705ad0e6.png", {
        x: 14,
        y: 14
      }),
      new Costume("Input2", "c879676b260611c79c4c789fc778bcaa.png", {
        x: 27,
        y: 22
      }),
      new Costume("Input3", "21f064f5f182bf6e23de5e68c78ae0fe.png", {
        x: 45,
        y: 32
      }),
      new Costume("Input4", "12203182056d2986e4d62ab5a822d430.png", {
        x: 59,
        y: 35
      }),
      new Costume("Input5", "268e95bcf6f629f0eff6b915b2cdb021.png", {
        x: 68,
        y: 51
      }),
      new Costume("Cosmetic Flame", "e5159f455fb3e770ab60109189c1cd45.svg", {
        x: 28.749001530406673,
        y: 17.900730537837546
      }),
      new Costume("Cosmetic Flame2", "cc4e314554588b01125b824b87b578c1.svg", {
        x: 16.819702316197805,
        y: 22.42130406820445
      }),
      new Costume("Cosmetic Flame3", "13b0363bf276ff75887fc4515d38b2b2.svg", {
        x: -7.181739999999991,
        y: 35.85905420120932
      }),
      new Costume("Cosmetic Flame4", "8b3264997b982025527c1abed5f58453.svg", {
        x: -5.591200354234843,
        y: 37.14856984549684
      }),
      new Costume("Cosmetic Flame5", "c4f60a73ba3999cfbfc5634dabd9d465.svg", {
        x: -3.325275202649408,
        y: 37.145222605101765
      }),
      new Costume("Flame", "eb701fc38d63fe95c9b5e61a83096f08.svg", {
        x: 19.855600091173613,
        y: 45.281214584962555
      }),
      new Costume("Water droplet", "f3340f514461579ecbb35adb644536ff.svg", {
        x: 13.44216973110747,
        y: 44.586416308575735
      }),
      new Costume("Water Smoke", "43f5f56bac2827198b0f27603d33ce8e.svg", {
        x: 24.640969029468977,
        y: 42.542155060436585
      }),
      new Costume(
        "Electric Explosion1",
        "fee50d573beefb4cbf4199815c1147f3.svg",
        { x: 8.122070000000008, y: 1.4492950000000064 }
      ),
      new Costume(
        "Electric Explosion2",
        "03555be9636bc5bad96684be1873af6a.svg",
        { x: 27.749139999999926, y: 21.61580926905515 }
      ),
      new Costume(
        "Electric Explosion3",
        "24ed20c647d1252e4548051896b0afe0.svg",
        { x: 37.66056499999999, y: 39.437365 }
      ),
      new Costume(
        "Electric Explosion4",
        "50ed739d71006748fe26f2c08f6424d4.svg",
        { x: 41.888600000000025, y: 43.97092313636358 }
      ),
      new Costume(
        "Electric Explosion5",
        "f0ae0333788400d301dbffbcb1082782.svg",
        { x: 42.758099999999985, y: 45.19219500000003 }
      ),
      new Costume(
        "Electric Explosion6",
        "c44662c48361c849adddd782dcfaadd9.svg",
        { x: 19.531649999999956, y: 45.19219500000003 }
      ),
      new Costume("Cloud", "6761901a76e38c3bd3aef8b0451f2bf2.svg", {
        x: 24.633440000000007,
        y: 13.653850000000006
      }),
      new Costume("Dash Effect", "b68b01eb2bdf080889079b4f878e9f15.svg", {
        x: 28.69801000000001,
        y: 14.279169999999993
      }),
      new Costume("Dash Effect2", "8ebd2483fb21b4d1130d7ee2a9eadd32.svg", {
        x: 29.874261609636307,
        y: 22.338194726175033
      }),
      new Costume("Dash Effect3", "4addb834d5cfe960ee19297c61dd7aa7.svg", {
        x: 21.374539372884357,
        y: 29.08775656710594
      }),
      new Costume("Dash Effect4", "80db502c101dff2bac982fda239a34ba.svg", {
        x: 15.054460299984953,
        y: 33.284274865773824
      }),
      new Costume("Dust", "ef6d170909301db6dfd50f64e15917f3.svg", {
        x: 10.43786,
        y: 6.60718
      }),
      new Costume("Dust2", "a4612261d714ff0db1bfe20933d90c46.svg", {
        x: 7.682288823393037,
        y: 8.10718
      }),
      new Costume("Dust3", "edbe82b00c20674ab01c2eb0e36eb1ba.svg", {
        x: 5.320388112088409,
        y: 6.60718
      }),
      new Costume("Dust4", "446c4f945f1632ffdc52a6dbf529ca8f.svg", {
        x: 1.903731445421755,
        y: 3.190513333333314
      }),
      new Costume("Ready?", "0e2a59c7a0aebb38dc6b77cce6902df5.svg", {
        x: 33.62997055053708,
        y: 10.981250000000017
      }),
      new Costume("Go!", "b4f4fd4151cf52d7f2401e865d64a1d9.svg", {
        x: 15.879985809326172,
        y: 10.75
      }),
      new Costume("Fight!", "68f66efeb3142d67f9ac9446bdc31446.svg", {
        x: 28.68997573852539,
        y: 10.75
      }),
      new Costume("Do Something", "1734e0e8075b8c9190d255de93bf74dc.svg", {
        x: 41.90754757876957,
        y: 10.5
      }),
      new Costume("Do Something2", "8666d704d8a7cfee8d4f030d7c14f3b4.svg", {
        x: 43.38129966479349,
        y: 10.75
      }),
      new Costume("Water Splash", "2945fed3cfc6c2a29bb4867d68c33fa4.svg", {
        x: 24.915409506025952,
        y: 17.778850000000006
      }),
      new Costume("Water Splash2", "8e1a505fe85b198c529edec00add2744.svg", {
        x: 31.97613298041773,
        y: 36.981089817634825
      }),
      new Costume("Water Splash3", "8dc0e8576c05984a17cf322aa0b55320.svg", {
        x: 39.15475411829473,
        y: 39.19305491343866
      }),
      new Costume("Water Splash4", "ba07cc515c6231734387bb4d54ec804d.svg", {
        x: 46.659084841122336,
        y: 41.0860668157427
      }),
      new Costume("Water Splash5", "05224eef5d91440bbe55be655f5421b1.svg", {
        x: 46.65909122778055,
        y: 41.086066616579586
      }),
      new Costume("HE Normal1_1", "631759602671d0da744583dcc009f2c9.svg", {
        x: 13.551240000000007,
        y: 17.00899499999997
      }),
      new Costume("HE Normal1_2", "e90f17955439ec541b4be544976a60fe.svg", {
        x: 17.88457333333335,
        y: 17.008995
      }),
      new Costume("HE Normal2", "c39a2f54c5bca131af95e8c726f76a16.svg", {
        x: 13.339415000000002,
        y: 16.880145
      }),
      new Costume("HE Normal3_1", "46c3963ca02c9798b96bdf9fc40d6775.svg", {
        x: 13.743799999999993,
        y: 18.335890000000006
      }),
      new Costume("HE Normal3_2", "23390c9f23810f47408f09645f5cbbb9.svg", {
        x: 17.542716756849813,
        y: 16.75006666666664
      }),
      new Costume("HE Normal3_3", "268ee719a72bca6f291cc3cc51121752.svg", {
        x: 17.37604675684983,
        y: 16.75006666666667
      }),
      new Costume("HE Normal3_4", "a3df9763137fe2588e88167ec1b71a0a.svg", {
        x: 17.376036756849828,
        y: 16.750056666666666
      }),
      new Costume("HE Fire_1", "90cd7854bc05c25f78f0ae00c3bec5de.svg", {
        x: 12.010543230428027,
        y: 16.409506183359724
      }),
      new Costume("HE Fire_2", "8ef0ddc5f0a69df2e51531aef3321bcb.svg", {
        x: 11.224503862526689,
        y: 17.343953243018632
      }),
      new Costume("Size", "14e46ec3e2ba471c2adfe8f119052307.svg", {
        x: 0,
        y: 0
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "game" }, this.whenIReceiveGame),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Main Menu" },
        this.whenIReceiveMainMenu
      )
    ];

    this.vars.x8 = 0;
    this.vars.y8 = 0;
    this.vars.frame3 = 0;
    this.vars.type4 = 0;
    this.vars.value2 = 0;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *startAsClone() {
    this.costume = "Size";
    this.vars.x8 = this.stage.vars.effectX[1 - 1];
    this.vars.y8 = this.stage.vars.effectY[1 - 1];
    this.vars.value2 = this.stage.vars.effectValue[1 - 1];
    this.vars.type4 = this.stage.vars.effectType[1 - 1];
    this.stage.vars.effectX.splice(1 - 1, 1);
    this.stage.vars.effectY.splice(1 - 1, 1);
    this.stage.vars.effectType.splice(1 - 1, 1);
    this.stage.vars.effectValue.splice(1 - 1, 1);
    this.vars.frame3 = 0;
    this.visible = true;
    this.effects.clear();
    this.size = 800;
    if (this.compare(this.vars.type4, 1) === 0) {
      this.effects.brightness = 95;
      this.effects.color = 0;
      this.costume = "Hit";
      this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
      for (let i = 0; i < 6; i++) {
        this.goto(
          (this.vars.x8 + this.stage.vars.rumbleX - this.stage.vars.scrollX) *
            4,
          (this.vars.y8 + this.stage.vars.rumbleY) * 4
        );
        this.costume = Math.floor(this.vars.frame3 / 2) + 4;
        this.vars.frame3 += 1;
        yield;
      }
      this.deleteThisClone();
    } else {
      if (this.compare(this.vars.type4, 2) === 0) {
        this.effects.brightness = 50;
        this.effects.color = this.stage.vars.playerColor[this.vars.value2 - 1];
        this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
        for (let i = 0; i < 6; i++) {
          this.goto(
            (this.vars.x8 + this.stage.vars.rumbleX - this.stage.vars.scrollX) *
              4,
            (this.vars.y8 + this.stage.vars.rumbleY) * 4
          );
          this.size = 800;
          this.costume = Math.floor(this.vars.frame3 / 2) + 1;
          this.vars.frame3 += 1;
          yield;
        }
        this.deleteThisClone();
      } else {
        if (this.compare(this.vars.type4, 3) === 0) {
          this.effects.color = this.stage.vars.playerColor[
            this.vars.value2 - 1
          ];
          this.effects.brightness = 50;
          this.costume = "Tint";
          this.effects.ghost = 0;
          for (let i = 0; i < 10; i++) {
            this.effects.ghost += 10;
            this.goto(0, 0);
            this.vars.frame3 += 1;
            yield;
          }
          this.deleteThisClone();
        } else {
          if (this.compare(this.vars.type4, 4) === 0) {
            this.vars.type4 = this.random(4, 4.9);
            this.size = 1000;
            this.effects.color = this.stage.vars.playerColor[
              this.vars.value2 - 1
            ];
            this.effects.brightness = 90;
            this.costume = "Particle";
            this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
            for (let i = 0; i < 2; i++) {
              this.goto(
                (this.vars.x8 +
                  this.stage.vars.rumbleX -
                  this.stage.vars.scrollX) *
                  4,
                (this.vars.y8 + this.stage.vars.rumbleY) * 4
              );
              this.size += -200;
              this.vars.y8 += 2;
              this.vars.x8 += (4.45 - this.vars.type4) * 10;
              yield;
            }
            for (let i = 0; i < 2; i++) {
              this.goto(
                (this.vars.x8 +
                  this.stage.vars.rumbleX -
                  this.stage.vars.scrollX) *
                  4,
                (this.vars.y8 + this.stage.vars.rumbleY) * 4
              );
              this.size += -150;
              this.vars.y8 += 1;
              this.vars.x8 += (4.45 - this.vars.type4) * 5;
              yield;
            }
            for (let i = 0; i < 6; i++) {
              this.goto(
                (this.vars.x8 +
                  this.stage.vars.rumbleX -
                  this.stage.vars.scrollX) *
                  4,
                (this.vars.y8 + this.stage.vars.rumbleY) * 4
              );
              this.size += -50;
              this.vars.y8 += -1;
              this.vars.x8 += (4.45 - this.vars.type4) * 5;
              yield;
            }
            this.deleteThisClone();
          } else {
            if (this.compare(this.vars.type4, 5) === 0) {
              this.size = 400;
              this.effects.brightness = 80;
              this.effects.color = this.stage.vars.playerColor[
                this.vars.value2 - 1
              ];
              this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
              for (let i = 0; i < 1; i++) {
                this.goto(
                  (this.vars.x8 +
                    this.stage.vars.rumbleX -
                    this.stage.vars.scrollX) *
                    4,
                  (this.vars.y8 + this.stage.vars.rumbleY) * 4 - 46
                );
                this.costume = Math.floor(this.vars.frame3) + 9;
                this.vars.frame3 += 1;
                this.effects.ghost += 5;
                yield;
              }
              for (let i = 0; i < 7; i++) {
                this.goto(
                  (this.vars.x8 +
                    this.stage.vars.rumbleX -
                    this.stage.vars.scrollX) *
                    4,
                  (this.vars.y8 + this.stage.vars.rumbleY) * 4 - 46
                );
                this.costume = Math.floor(this.vars.frame3 / 2) + 9;
                this.vars.frame3 += 1;
                this.effects.ghost += 2.5;
                yield;
              }
              this.deleteThisClone();
            } else {
              if (this.compare(this.vars.type4, 6) === 0) {
                this.size = 400;
                this.effects.brightness = 80;
                this.effects.color = this.stage.vars.playerColor[
                  this.vars.value2 - 1
                ];
                this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
                this.effects.ghost = 10;
                for (let i = 0; i < 5; i++) {
                  this.goto(
                    (this.vars.x8 +
                      this.stage.vars.rumbleX -
                      this.stage.vars.scrollX) *
                      4,
                    (this.vars.y8 + this.stage.vars.rumbleY) * 4 - 46
                  );
                  this.costume = Math.floor(this.vars.frame3) + 13;
                  this.vars.frame3 += 1;
                  this.effects.ghost += 5;
                  yield;
                }
                for (let i = 0; i < 5; i++) {
                  this.goto(
                    (this.vars.x8 +
                      this.stage.vars.rumbleX -
                      this.stage.vars.scrollX) *
                      4,
                    (this.vars.y8 + this.stage.vars.rumbleY) * 4 - 46
                  );
                  this.costume = "Jump5";
                  this.effects.ghost += 10;
                  yield;
                }
                this.deleteThisClone();
              } else {
                if (this.compare(this.vars.type4, 7) === 0) {
                  this.size = 400;
                  this.effects.color = this.stage.vars.playerColor[
                    this.vars.value2 - 1
                  ];
                  this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
                  this.effects.ghost = 10;
                  for (let i = 0; i < 5; i++) {
                    this.goto(
                      (this.vars.x8 +
                        this.stage.vars.rumbleX -
                        this.stage.vars.scrollX) *
                        4,
                      (this.vars.y8 + this.stage.vars.rumbleY) * 4 - 46
                    );
                    this.costume = Math.floor(this.vars.frame3) + 18;
                    this.vars.frame3 += 1;
                    yield;
                  }
                  this.deleteThisClone();
                } else {
                  if (this.compare(this.vars.type4, 8) === 0) {
                    this.size = 400;
                    this.effects.color = this.stage.vars.playerColor[
                      this.vars.value2 - 1
                    ];
                    this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
                    this.effects.ghost = 10;
                    for (let i = 0; i < 5; i++) {
                      this.goto(
                        (this.vars.x8 +
                          this.stage.vars.rumbleX -
                          this.stage.vars.scrollX) *
                          4,
                        (this.vars.y8 + this.stage.vars.rumbleY) * 4 - 46
                      );
                      this.direction =
                        this.stage.vars.playerDirection[this.vars.value2 - 1] *
                        90;
                      this.costume = Math.floor(this.vars.frame3) + 23;
                      this.vars.frame3 += 1;
                      yield;
                    }
                    this.deleteThisClone();
                  } else {
                    if (this.compare(this.vars.type4, 9) === 0) {
                      if (
                        this.compare(this.stage.vars.map, "Dense Forest") === 0
                      ) {
                        this.stage.vars.map = "Scorched Forest";
                      }
                      this.size = 1000;
                      this.costume = "Flame";
                      this.effects.color = this.stage.vars.playerColor[
                        this.vars.value2 - 1
                      ];
                      this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
                      this.effects.ghost = 20;
                      for (let i = 0; i < 150; i++) {
                        this.goto(
                          (this.vars.x8 +
                            this.stage.vars.rumbleX -
                            this.stage.vars.scrollX) *
                            4,
                          (this.vars.y8 + this.stage.vars.rumbleY) * 4 - 46
                        );
                        this.direction += 90;
                        this.size += 1.5;
                        this.effects.ghost += 0.5;
                        this.effects.brightness += 0.5;
                        yield;
                      }
                      this.deleteThisClone();
                    } else {
                      if (this.compare(this.vars.type4, 10) === 0) {
                        this.size = 150;
                        this.costume = "Water droplet";
                        this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
                        this.effects.ghost = 1;
                        for (let i = 0; i < 10; i++) {
                          this.vars.frame3 += 1;
                          this.goto(
                            (this.vars.x8 +
                              this.stage.vars.rumbleX -
                              this.stage.vars.scrollX) *
                              4,
                            (this.vars.y8 + this.stage.vars.rumbleY) * 4 -
                              46 -
                              this.vars.frame3 * 15
                          );
                          this.size += -10;
                          yield;
                        }
                        this.deleteThisClone();
                      } else {
                        if (this.compare(this.vars.type4, 11) === 0) {
                          this.size = 150;
                          this.costume = "Water Smoke";
                          this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
                          this.effects.ghost = 70;
                          for (let i = 0; i < 20; i++) {
                            this.vars.frame3 += 1;
                            this.goto(
                              (this.vars.x8 +
                                this.stage.vars.rumbleX -
                                this.stage.vars.scrollX) *
                                4,
                              (this.vars.y8 + this.stage.vars.rumbleY) * 4 - 46
                            );
                            this.size += 5;
                            this.effects.ghost += 1.5;
                            yield;
                          }
                          this.deleteThisClone();
                        } else {
                          if (this.compare(this.vars.type4, 12) === 0) {
                            this.size = 1000;
                            this.costume = "Electric Explosion1";
                            this.rotationStyle =
                              Sprite.RotationStyle.LEFT_RIGHT;
                            this.effects.ghost = 0;
                            for (let i = 0; i < 12; i++) {
                              this.goto(
                                (this.vars.x8 +
                                  this.stage.vars.rumbleX -
                                  this.stage.vars.scrollX) *
                                  4,
                                (this.vars.y8 + this.stage.vars.rumbleY) * 4
                              );
                              this.costume =
                                Math.floor(this.vars.frame3 / 2) + 31;
                              this.vars.frame3 += 1;
                              yield;
                            }
                            for (let i = 0; i < 8; i++) {
                              this.goto(
                                (this.vars.x8 +
                                  this.stage.vars.rumbleX -
                                  this.stage.vars.scrollX) *
                                  4,
                                (this.vars.y8 + this.stage.vars.rumbleY) * 4
                              );
                              this.vars.frame3 += 1;
                              yield;
                            }
                            for (let i = 0; i < 30; i++) {
                              this.vars.frame3 += 1;
                              this.goto(
                                (this.vars.x8 +
                                  this.stage.vars.rumbleX -
                                  this.stage.vars.scrollX) *
                                  4,
                                (this.vars.y8 + this.stage.vars.rumbleY) * 4
                              );
                              this.effects.ghost +=
                                (this.vars.frame3 - 20) * 0.5;
                              yield;
                            }
                            this.deleteThisClone();
                          } else {
                            if (this.compare(this.vars.type4, 13) === 0) {
                              this.size = 400;
                              this.costume = "Cloud";
                              this.rotationStyle =
                                Sprite.RotationStyle.DONT_ROTATE;
                              this.effects.ghost = 2;
                              this.moveAhead();
                              for (let i = 0; i < 10; i++) {
                                this.size = (500 * 4 + this.size) / 5;
                                this.goto(
                                  (this.vars.x8 +
                                    this.stage.vars.rumbleX -
                                    this.stage.vars.scrollX) *
                                    4,
                                  (this.vars.y8 + this.stage.vars.rumbleY) * 4
                                );
                                this.vars.frame3 += 1;
                                yield;
                              }
                              this.size = 500;
                              for (let i = 0; i < 20; i++) {
                                this.goto(
                                  (this.vars.x8 +
                                    this.stage.vars.rumbleX -
                                    this.stage.vars.scrollX) *
                                    4,
                                  (this.vars.y8 + this.stage.vars.rumbleY) * 4
                                );
                                this.vars.frame3 += 1;
                                yield;
                              }
                              for (let i = 0; i < 10; i++) {
                                this.goto(
                                  (this.vars.x8 +
                                    this.stage.vars.rumbleX -
                                    this.stage.vars.scrollX) *
                                    4,
                                  (this.vars.y8 + this.stage.vars.rumbleY) * 4
                                );
                                this.vars.frame3 += 1;
                                this.effects.ghost =
                                  (this.vars.frame3 - 30) * 10;
                                yield;
                              }
                              this.deleteThisClone();
                            } else {
                              if (this.compare(this.vars.type4, 14) === 0) {
                                this.size = 400;
                                this.costume = "Water Smoke";
                                this.rotationStyle =
                                  Sprite.RotationStyle.LEFT_RIGHT;
                                this.effects.ghost = 0;
                                this.effects.brightness = 90;
                                this.effects.color = 60;
                                for (let i = 0; i < 10; i++) {
                                  this.goto(
                                    (this.vars.x8 +
                                      this.stage.vars.rumbleX -
                                      this.stage.vars.scrollX) *
                                      4,
                                    (this.vars.y8 + this.stage.vars.rumbleY) *
                                      4 -
                                      54
                                  );
                                  this.size += 25;
                                  this.effects.ghost += 5;
                                  yield;
                                }
                                this.deleteThisClone();
                              } else {
                                if (this.compare(this.vars.type4, 15) === 0) {
                                  this.size = 200;
                                  this.costume = "Dash Effect";
                                  this.rotationStyle =
                                    Sprite.RotationStyle.LEFT_RIGHT;
                                  this.effects.ghost = 5;
                                  this.direction = this.stage.vars.playerDirection[
                                    this.vars.value2 - 1
                                  ];
                                  this.effects.color = this.stage.vars.playerColor[
                                    this.vars.value2 - 1
                                  ];
                                  for (let i = 0; i < 4; i++) {
                                    this.goto(
                                      (this.vars.x8 +
                                        this.stage.vars.rumbleX -
                                        this.stage.vars.scrollX) *
                                        4,
                                      (this.vars.y8 + this.stage.vars.rumbleY) *
                                        4 -
                                        40
                                    );
                                    this.costume = this.vars.frame3 + 38;
                                    this.vars.frame3 += 1;
                                    yield;
                                  }
                                  this.deleteThisClone();
                                } else {
                                  if (this.compare(this.vars.type4, 16) === 0) {
                                    this.size = 1000;
                                    this.costume = "Dust";
                                    this.rotationStyle =
                                      Sprite.RotationStyle.LEFT_RIGHT;
                                    this.effects.ghost = 5;
                                    this.direction = this.stage.vars.playerDirection[
                                      this.vars.value2 - 1
                                    ];
                                    for (let i = 0; i < 8; i++) {
                                      this.goto(
                                        (this.vars.x8 +
                                          this.stage.vars.rumbleX -
                                          this.stage.vars.scrollX) *
                                          4,
                                        (this.vars.y8 +
                                          this.stage.vars.rumbleY) *
                                          4 -
                                          40
                                      );
                                      this.costume =
                                        Math.floor(this.vars.frame3 / 2) + 42;
                                      this.effects.whirl = this.vars.frame3 * 9;
                                      this.vars.frame3 += 1;
                                      yield;
                                    }
                                    this.deleteThisClone();
                                  } else {
                                    if (
                                      String(this.vars.type4 ?? "").includes(
                                        "Prompt"
                                      )
                                    ) {
                                      this.size = 400;
                                      this.costume =
                                        45 +
                                        (String(this.vars.type4 ?? "")[7 - 1] ??
                                          "");
                                      this.direction = 90;
                                      this.rotationStyle =
                                        Sprite.RotationStyle.ALL_AROUND;
                                      this.visible = true;
                                      for (let i = 0; i < 20; i++) {
                                        this.goto(
                                          (this.vars.x8 +
                                            this.stage.vars.rumbleX) *
                                            4,
                                          (this.vars.y8 +
                                            this.stage.vars.rumbleY) *
                                            4 -
                                            40
                                        );
                                        this.effects.ghost =
                                          Math.sin(
                                            this.degToRad(this.vars.frame3 * 2)
                                          ) * 200;
                                        this.effects.whirl =
                                          Math.sin(
                                            this.degToRad(this.vars.frame3)
                                          ) * 50;
                                        this.vars.frame3 += 1;
                                        this.size = (600 + this.size * 2) / 3;
                                        this.vars.y8 =
                                          (20 + this.vars.y8 * 29) / 30;
                                        this.direction +=
                                          (this.vars.frame3 - 7.5) * 0.5;
                                        yield;
                                      }
                                      this.deleteThisClone();
                                    } else {
                                      if (
                                        this.compare(this.vars.type4, 21) === 0
                                      ) {
                                        this.size = 200;
                                        this.costume = "Water Splash";
                                        this.rotationStyle =
                                          Sprite.RotationStyle.LEFT_RIGHT;
                                        this.effects.ghost = 5;
                                        this.direction = this.stage.vars.playerDirection[
                                          this.vars.value2 - 1
                                        ];
                                        for (let i = 0; i < 8; i++) {
                                          this.goto(
                                            (this.vars.x8 +
                                              this.stage.vars.rumbleX -
                                              this.stage.vars.scrollX) *
                                              4,
                                            (this.vars.y8 +
                                              this.stage.vars.rumbleY) *
                                              4 -
                                              40
                                          );
                                          this.costume = Math.ceil(
                                            this.vars.frame3 / 2 + 50.5
                                          );
                                          this.vars.frame3 += 1;
                                          yield;
                                        }
                                        this.deleteThisClone();
                                      } else {
                                        if (
                                          this.compare(
                                            this.vars.type4,
                                            "Normal1"
                                          ) === 0
                                        ) {
                                          this.visible = true;
                                          this.size = this.vars.value2 * 150;
                                          this.rotationStyle =
                                            Sprite.RotationStyle.ALL_AROUND;
                                          this.direction = this.random(
                                            180,
                                            -180
                                          );
                                          this.effects.ghost = 0;
                                          this.costume =
                                            "" +
                                            "HE Normal1_" +
                                            this.random(1, 2);
                                          for (let i = 0; i < 6; i++) {
                                            this.goto(
                                              (this.vars.x8 +
                                                this.stage.vars.rumbleX -
                                                this.stage.vars.scrollX) *
                                                4,
                                              (this.vars.y8 +
                                                this.stage.vars.rumbleY) *
                                                4 -
                                                2
                                            );
                                            this.size += 20;
                                            this.effects.ghost +=
                                              this.vars.frame3 * 5;
                                            this.vars.frame3 += 1;
                                            yield;
                                          }
                                          this.deleteThisClone();
                                        } else {
                                          if (
                                            this.compare(
                                              this.vars.type4,
                                              "Normal2"
                                            ) === 0
                                          ) {
                                            this.visible = true;
                                            this.size = this.vars.value2 * 150;
                                            this.rotationStyle =
                                              Sprite.RotationStyle.LEFT_RIGHT;
                                            this.effects.ghost = 0;
                                            this.costume = "HE Normal2";
                                            for (let i = 0; i < 4; i++) {
                                              this.size += 20;
                                              this.effects.ghost += 30;
                                              this.goto(
                                                (this.vars.x8 +
                                                  this.stage.vars.rumbleX -
                                                  this.stage.vars.scrollX) *
                                                  4,
                                                (this.vars.y8 +
                                                  this.stage.vars.rumbleY) *
                                                  4 -
                                                  2
                                              );
                                              this.vars.y8 +=
                                                this.vars.frame3 *
                                                this.vars.value2 *
                                                3;
                                              yield;
                                            }
                                            this.deleteThisClone();
                                          } else {
                                            if (
                                              this.compare(
                                                this.vars.type4,
                                                "Normal3"
                                              ) === 0
                                            ) {
                                              this.visible = true;
                                              this.size =
                                                this.vars.value2 * 150;
                                              this.rotationStyle =
                                                Sprite.RotationStyle.ALL_AROUND;
                                              this.direction = this.random(
                                                180,
                                                -180
                                              );
                                              this.effects.ghost = 0;
                                              for (let i = 0; i < 4; i++) {
                                                this.costume =
                                                  "" +
                                                  "HE Normal3_" +
                                                  (this.vars.frame3 + 1);
                                                this.goto(
                                                  (this.vars.x8 +
                                                    this.stage.vars.rumbleX -
                                                    this.stage.vars.scrollX) *
                                                    4,
                                                  (this.vars.y8 +
                                                    this.stage.vars.rumbleY) *
                                                    4 -
                                                    2
                                                );
                                                this.vars.frame3 += 1;
                                                yield;
                                              }
                                              this.deleteThisClone();
                                            } else {
                                              if (
                                                this.compare(
                                                  this.vars.type4,
                                                  "Fire1"
                                                ) === 0
                                              ) {
                                                this.visible = true;
                                                this.size =
                                                  this.vars.value2 * 150;
                                                this.rotationStyle =
                                                  Sprite.RotationStyle.ALL_AROUND;
                                                this.direction = 90;
                                                this.effects.ghost = 0;
                                                this.costume =
                                                  "" +
                                                  "HE Fire_" +
                                                  this.random(1, 2);
                                                for (let i = 0; i < 2; i++) {
                                                  this.goto(
                                                    (this.vars.x8 +
                                                      this.stage.vars.rumbleX -
                                                      this.stage.vars.scrollX) *
                                                      4,
                                                    (this.vars.y8 +
                                                      this.stage.vars.rumbleY) *
                                                      4 -
                                                      2
                                                  );
                                                  yield;
                                                }
                                                for (let i = 0; i < 2; i++) {
                                                  this.size +=
                                                    this.vars.value2 * -10;
                                                  this.goto(
                                                    (this.vars.x8 +
                                                      this.stage.vars.rumbleX -
                                                      this.stage.vars.scrollX) *
                                                      4,
                                                    (this.vars.y8 +
                                                      this.stage.vars.rumbleY) *
                                                      4 -
                                                      2
                                                  );
                                                  this.effects.ghost += 10;
                                                  yield;
                                                }
                                                for (let i = 0; i < 2; i++) {
                                                  this.size +=
                                                    this.vars.value2 * -10;
                                                  this.goto(
                                                    (this.vars.x8 +
                                                      this.stage.vars.rumbleX -
                                                      this.stage.vars.scrollX) *
                                                      4,
                                                    (this.vars.y8 +
                                                      this.stage.vars.rumbleY) *
                                                      4 -
                                                      2
                                                  );
                                                  this.effects.ghost += 10;
                                                  yield;
                                                }
                                                for (let i = 0; i < 2; i++) {
                                                  this.size +=
                                                    this.vars.value2 * -10;
                                                  this.goto(
                                                    (this.vars.x8 +
                                                      this.stage.vars.rumbleX -
                                                      this.stage.vars.scrollX) *
                                                      4,
                                                    (this.vars.y8 +
                                                      this.stage.vars.rumbleY) *
                                                      4 -
                                                      2
                                                  );
                                                  this.effects.ghost += 10;
                                                  yield;
                                                }
                                                for (let i = 0; i < 2; i++) {
                                                  this.size +=
                                                    this.vars.value2 * -10;
                                                  this.goto(
                                                    (this.vars.x8 +
                                                      this.stage.vars.rumbleX -
                                                      this.stage.vars.scrollX) *
                                                      4,
                                                    (this.vars.y8 +
                                                      this.stage.vars.rumbleY) *
                                                      4 -
                                                      2
                                                  );
                                                  this.effects.ghost += 10;
                                                  yield;
                                                }
                                                for (let i = 0; i < 2; i++) {
                                                  this.size +=
                                                    this.vars.value2 * -10;
                                                  this.goto(
                                                    (this.vars.x8 +
                                                      this.stage.vars.rumbleX -
                                                      this.stage.vars.scrollX) *
                                                      4,
                                                    (this.vars.y8 +
                                                      this.stage.vars.rumbleY) *
                                                      4 -
                                                      2
                                                  );
                                                  this.effects.ghost += 10;
                                                  yield;
                                                }
                                              } else {
                                                null;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  *whenIReceiveGame() {
    if (this.compare("", "") === 0) {
      this.deleteThisClone();
    }
    while (true) {
      if (this.compare(this.stage.vars.map, "Scorched forest") === 0) {
        this.visible = true;
        this.costume = "Tint";
        this.effects.color = 10;
        this.effects.ghost =
          70 + Math.cos(this.degToRad(this.stage.vars.gameframe)) * 15;
        this.effects.brightness =
          Math.cos(this.degToRad(this.stage.vars.gameframe * 10)) * 2;
      } else {
        this.effects.clear();
        this.visible = false;
      }
      this.goto(0, 0);
      yield;
    }
  }

  *whenIReceiveMainMenu() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.deleteThisClone();
  }
}
