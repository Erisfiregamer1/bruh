import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@1.4.1/dist/index.esm.js";

export default class Logic extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "d4630ca5e80ac0f4898a76c43c1877d4.png", {
        x: 23,
        y: 13
      })
    ];

    this.sounds = [
      new Sound("Jump1", "066c006d2f6e9ac2a066b731c977a5d8.wav"),
      new Sound("Dash1", "97e730c1ae4333a31db978bd77f71f81.wav"),
      new Sound("Dash2", "2672e54ee7e4f9188d47d9a42179625a.wav"),
      new Sound("Dash3", "dbe6693f27d2ae91c2056c0580ecc4dc.wav"),
      new Sound("Dash4", "0b89f36da7f404fb6d3770db1524f4cf.wav"),
      new Sound("Block2", "6b9251e0a0132a17c8f59dbc41fa8e68.mp3"),
      new Sound("Block1", "550dd312a4baeaa5dab8ff2fa8b633d3.mp3"),
      new Sound("Hit0", "39d3824133a5ede3aadee33a114fdd5c.mp3"),
      new Sound("Hit1", "0332a896dff730dbb51d72b0063f8687.wav"),
      new Sound("Hit2", "6656a815aad1296f878420d0ea66c73b.wav"),
      new Sound("Hit3", "654f3b0d19e7ddfe29d1509b975d1662.wav"),
      new Sound("Hit4", "3d19e304f0ab12fec97f5a6c7ab797cc.wav"),
      new Sound("Hit5", "beecddbdd5b8000f76718d3ed3c95743.wav"),
      new Sound("Hit6", "3344563d53ac3dd8f61a59b812a683bc.wav"),
      new Sound("Hit7", "477aab955fe8a13d2635a5a416493457.wav")
    ];

    this.triggers = [
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(Trigger.BROADCAST, { name: "game" }, this.whenIReceiveGame),
      new Trigger(
        Trigger.BROADCAST,
        { name: "freeze game" },
        this.whenIReceiveFreezeGame
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Black Lvl3" },
        this.whenIReceiveBlackLvl3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Charset" },
        this.whenIReceiveCharset
      ),
      new Trigger(Trigger.BROADCAST, { name: "Intro" }, this.whenIReceiveIntro),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Red Lvl3" },
        this.whenIReceiveRedLvl3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "game end" },
        this.whenIReceiveGameEnd
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Main Menu" },
        this.whenIReceiveMainMenu
      )
    ];

    this.vars.p59 = 2;
    this.vars.state26 = 0;
    this.vars.x35 = -25.5;
    this.vars.y35 = 0;
    this.vars.direction28 = 1;
    this.vars.frame29 = 74;
    this.vars.xSpeed26 = 0;
    this.vars.ySpeed26 = 0;
    this.vars.i28 = 14;
    this.vars.length26 = 18;
    this.vars.part26 = 0;
    this.vars.p60 = 3;
    this.vars.touching26 = 1;
    this.vars.h26 = 11;
    this.vars.hx26 = 0;
    this.vars.hy26 = 0;
    this.vars.hxSize26 = 0;
    this.vars.hySize26 = 0;
    this.vars.health26 = 90;
    this.vars.hDamage26 = 0;
    this.vars.impact19 = -81;
    this.vars.commands12 = 0;
    this.vars.command12 = 0;
    this.vars.hyKnockback3 = 2;
    this.vars.hxKnockback3 = 2;
    this.vars.hHitstun3 = 10;
    this.vars.hType = 0;
    this.vars.inputs26 = [false, false, false, false, false, false];
    this.vars.hurtboxY26 = [1, -10];
    this.vars.hurtboxYSize26 = [9, 13];
    this.vars.hurtboxXSize26 = [9, 11.5];
    this.vars.inputNames12 = ["r", "l", "u", "d", "z", "x"];
  }

  *clone() {
    this.stage.vars.playerFreeze = [];
    this.stage.vars.playerX = [];
    this.stage.vars.playerY = [];
    this.stage.vars.playerXSpeed = [];
    this.stage.vars.playerYSpeed = [];
    this.stage.vars.playerDirection = [];
    this.stage.vars.playerState = [];
    this.stage.vars.playerFrame = [];
    this.stage.vars.playerHealth = [];
    this.stage.vars.playerEx = [];
    this.stage.vars.playerCommands = [];
    this.vars.inputs26 = [];
    this.stage.vars.hitboxX = [];
    this.stage.vars.hitboxY = [];
    this.stage.vars.hitboxXSize = [];
    this.stage.vars.hitboxYSize = [];
    this.stage.vars.hitboxDamage = [];
    this.stage.vars.hitboxHitstun = [];
    this.stage.vars.hitboxXKnockback = [];
    this.stage.vars.hitboxYKnockback = [];
    this.stage.vars.hitboxType = [];
    this.stage.vars.hitCooldown = [];
    for (let i = 0; i < 6; i++) {
      this.vars.inputs26.push(0);
    }
    this.vars.p59 = 1;
    for (let i = 0; i < this.stage.vars.OfPlayers; i++) {
      this.vars.p59 += 1;
      this.stage.vars.playerX.push((this.vars.p59 - 2.5) * 48);
      this.stage.vars.playerY.push(0);
      this.stage.vars.playerXSpeed.push(0);
      this.stage.vars.playerYSpeed.push(0);
      this.stage.vars.playerDirection.push((this.vars.p59 - 2.5) * -2);
      this.stage.vars.playerCommands.push("");
      this.stage.vars.playerState.push(0);
      this.stage.vars.playerFrame.push(0);
      this.stage.vars.playerHealth.push(
        this.stage.vars.healthMultiplier *
          this.stage.vars.characterHealth[
            this.stage.vars.characterOrder.indexOf(
              this.stage.vars.playerCharacter[this.vars.p59 - 1 - 1]
            ) +
              1 -
              1
          ]
      );
      this.stage.vars.playerEx.push(0.5);
      this.stage.vars.hitboxX.push(0);
      this.stage.vars.hitboxY.push(0);
      this.stage.vars.hitboxXSize.push(0);
      this.stage.vars.hitboxYSize.push(0);
      this.stage.vars.hitboxDamage.push(0);
      this.stage.vars.hitboxHitstun.push(0);
      this.stage.vars.hitboxXKnockback.push(0);
      this.stage.vars.hitboxYKnockback.push(0);
      this.stage.vars.playerFreeze.push(0);
      this.stage.vars.hitboxType.push(0);
      this.stage.vars.hitCooldown.push(0);
    }
  }

  *tick(p4) {
    this.vars.x35 = this.stage.vars.playerX[p4 - 1];
    this.vars.y35 = this.stage.vars.playerY[p4 - 1];
    this.vars.xSpeed26 = this.stage.vars.playerXSpeed[p4 - 1];
    this.vars.ySpeed26 = this.stage.vars.playerYSpeed[p4 - 1];
    this.vars.direction28 = this.stage.vars.playerDirection[p4 - 1];
    this.vars.state26 = this.stage.vars.playerState[p4 - 1];
    this.vars.frame29 = this.stage.vars.playerFrame[p4 - 1];
    this.vars.health26 = this.stage.vars.playerHealth[p4 - 1];
    this.vars.commands12 = this.stage.vars.playerCommands[p4 - 1];
    this.vars.hx26 = 0;
    this.vars.hy26 = 0;
    this.vars.hxSize26 = 0;
    this.vars.hySize26 = 0;
    this.vars.hDamage26 = 0;
    this.vars.hType = 0;
    if (this.compare(this.stage.vars.hitCooldown[this.vars.p59 - 1], 0) > 0) {
      this.stage.vars.hitCooldown.splice(
        this.vars.p59 - 1,
        1,
        this.stage.vars.hitCooldown[this.vars.p59 - 1] - 1
      );
    }
    if (
      this.compare(this.stage.vars.playerFreeze[this.vars.p59 - 1], 1) === 0
    ) {
      this.stage.vars.playerFreeze.splice(this.vars.p59 - 1, 1, 0);
    } else {
      if (this.compare(this.vars.state26, 0) === 0) {
        this.warp(this.idle)();
      } else {
        if (this.compare(this.vars.state26, 1) === 0) {
          this.warp(this.walk)();
        } else {
          if (this.compare(this.vars.state26, 1.1) === 0) {
            this.warp(this.run)();
          } else {
            if (this.compare(this.vars.state26, 1.2) === 0) {
              this.warp(this.dash)(1);
            } else {
              if (this.compare(this.vars.state26, 1.3) === 0) {
                this.warp(this.dash)(2);
              } else {
                if (this.compare(this.vars.state26, 2) === 0) {
                  this.warp(this.midair)();
                } else {
                  if (this.compare(this.vars.state26, 2.1) === 0) {
                    this.warp(this.freefall)();
                  } else {
                    if (this.compare(this.vars.state26, 3) === 0) {
                      this.warp(this.crouch)();
                    } else {
                      if (this.compare(this.vars.state26, 4) === 0) {
                        this.warp(this.jab)();
                      } else {
                        if (this.compare(this.vars.state26, 4.1) === 0) {
                          this.warp(this.auto)();
                        } else {
                          if (this.compare(this.vars.state26, 5) === 0) {
                            this.warp(this.kick)();
                          } else {
                            if (this.compare(this.vars.state26, 6) === 0) {
                              this.warp(this.land)();
                            } else {
                              if (this.compare(this.vars.state26, 7) === 0) {
                                this.warp(this.flinchHead)();
                              } else {
                                if (this.compare(this.vars.state26, 8) === 0) {
                                  this.warp(this.flinchTorso)();
                                } else {
                                  if (
                                    this.compare(this.vars.state26, 9) === 0
                                  ) {
                                    this.warp(this.blockHead)();
                                  } else {
                                    if (
                                      this.compare(this.vars.state26, 10) === 0
                                    ) {
                                      this.warp(this.blockTorso)();
                                    } else {
                                      if (
                                        this.compare(this.vars.state26, 11) ===
                                        0
                                      ) {
                                        this.warp(this.airPunch)();
                                      } else {
                                        if (
                                          this.compare(
                                            this.vars.state26,
                                            12
                                          ) === 0
                                        ) {
                                          this.warp(this.airKick)();
                                        } else {
                                          if (
                                            this.compare(
                                              this.vars.state26,
                                              13
                                            ) === 0
                                          ) {
                                            this.warp(this.autoFinisher)();
                                          } else {
                                            if (
                                              this.compare(
                                                this.vars.state26,
                                                14
                                              ) === 0
                                            ) {
                                              this.warp(this.lowKick)();
                                            } else {
                                              if (
                                                this.compare(
                                                  this.vars.state26,
                                                  15
                                                ) === 0
                                              ) {
                                                this.warp(this.hurtAir)();
                                              } else {
                                                if (
                                                  this.compare(
                                                    this.vars.state26,
                                                    16
                                                  ) === 0
                                                ) {
                                                  this.warp(this.hadouken)();
                                                } else {
                                                  if (
                                                    this.compare(
                                                      this.vars.state26,
                                                      17
                                                    ) === 0
                                                  ) {
                                                    this.warp(this.parry)();
                                                  } else {
                                                    if (
                                                      this.compare(
                                                        this.vars.state26,
                                                        18
                                                      ) === 0
                                                    ) {
                                                      this.warp(
                                                        this.lowPunch
                                                      )();
                                                    } else {
                                                      if (
                                                        this.compare(
                                                          this.vars.state26,
                                                          19
                                                        ) === 0
                                                      ) {
                                                        this.warp(
                                                          this.wallbouce
                                                        )();
                                                      } else {
                                                        if (
                                                          this.compare(
                                                            this.vars.state26,
                                                            19.1
                                                          ) === 0
                                                        ) {
                                                          this.warp(
                                                            this.launch
                                                          )();
                                                        } else {
                                                          if (
                                                            this.compare(
                                                              this.vars.state26,
                                                              20
                                                            ) === 0
                                                          ) {
                                                            this.warp(
                                                              this.specialInput
                                                            )(1);
                                                          } else {
                                                            if (
                                                              this.compare(
                                                                this.vars
                                                                  .state26,
                                                                21
                                                              ) === 0
                                                            ) {
                                                              this.warp(
                                                                this
                                                                  .specialInput
                                                              )(2);
                                                            } else {
                                                              if (
                                                                this.compare(
                                                                  this.vars
                                                                    .state26,
                                                                  22
                                                                ) === 0
                                                              ) {
                                                                this.warp(
                                                                  this
                                                                    .specialInput
                                                                )(3);
                                                              } else {
                                                                if (
                                                                  this.compare(
                                                                    this.vars
                                                                      .state26,
                                                                    24
                                                                  ) === 0
                                                                ) {
                                                                  this.warp(
                                                                    this.death
                                                                  )();
                                                                } else {
                                                                  if (
                                                                    this.compare(
                                                                      this.vars
                                                                        .state26,
                                                                      25
                                                                    ) === 0
                                                                  ) {
                                                                    this.warp(
                                                                      this
                                                                        .superInput
                                                                    )(1);
                                                                  } else {
                                                                    if (
                                                                      this.compare(
                                                                        this
                                                                          .vars
                                                                          .state26,
                                                                        26
                                                                      ) === 0
                                                                    ) {
                                                                      this.warp(
                                                                        this
                                                                          .superInput
                                                                      )(2);
                                                                    } else {
                                                                      if (
                                                                        this.compare(
                                                                          this
                                                                            .vars
                                                                            .state26,
                                                                          27
                                                                        ) === 0
                                                                      ) {
                                                                        this.warp(
                                                                          this
                                                                            .superInput
                                                                        )(3);
                                                                      } else {
                                                                        if (
                                                                          this.compare(
                                                                            this
                                                                              .vars
                                                                              .state26,
                                                                            28
                                                                          ) ===
                                                                          0
                                                                        ) {
                                                                          this.warp(
                                                                            this
                                                                              .blockCrouch
                                                                          )();
                                                                        } else {
                                                                          if (
                                                                            this.compare(
                                                                              this
                                                                                .vars
                                                                                .state26,
                                                                              29
                                                                            ) ===
                                                                            0
                                                                          ) {
                                                                            this.warp(
                                                                              this
                                                                                .groundCommandAttack
                                                                            )();
                                                                          } else {
                                                                            if (
                                                                              this.compare(
                                                                                this
                                                                                  .vars
                                                                                  .state26,
                                                                                30
                                                                              ) ===
                                                                              0
                                                                            ) {
                                                                              this.warp(
                                                                                this
                                                                                  .airCommandAttack
                                                                              )();
                                                                            } else {
                                                                              if (
                                                                                this.compare(
                                                                                  this
                                                                                    .vars
                                                                                    .state26,
                                                                                  23
                                                                                ) ===
                                                                                0
                                                                              ) {
                                                                                this.warp(
                                                                                  this
                                                                                    .lvl3
                                                                                )();
                                                                              } else {
                                                                                if (
                                                                                  this.compare(
                                                                                    this
                                                                                      .vars
                                                                                      .state26,
                                                                                    31
                                                                                  ) ===
                                                                                  0
                                                                                ) {
                                                                                  this.warp(
                                                                                    this
                                                                                      .extraCommandAttack
                                                                                  )();
                                                                                } else {
                                                                                  if (
                                                                                    this.compare(
                                                                                      this
                                                                                        .vars
                                                                                        .state26,
                                                                                      32
                                                                                    ) ===
                                                                                    0
                                                                                  ) {
                                                                                    this.warp(
                                                                                      this
                                                                                        .backInput
                                                                                    )();
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
    this.stage.vars.newData.push(this.vars.x35);
    this.stage.vars.newData.push(this.vars.y35);
    this.stage.vars.newData.push(this.vars.xSpeed26);
    this.stage.vars.newData.push(this.vars.ySpeed26);
    this.stage.vars.newData.push(this.vars.direction28);
    this.stage.vars.newData.push(this.vars.state26);
    this.stage.vars.newData.push(this.vars.frame29);
    this.stage.vars.newData.push(this.vars.health26);
    this.stage.vars.newData.push(this.vars.commands12);
    this.stage.vars.newData.push(this.vars.hx26);
    this.stage.vars.newData.push(this.vars.hy26);
    this.stage.vars.newData.push(this.vars.hxSize26);
    this.stage.vars.newData.push(this.vars.hySize26);
    this.stage.vars.newData.push(this.vars.hDamage26);
    this.stage.vars.newData.push(this.vars.hxKnockback3);
    this.stage.vars.newData.push(this.vars.hyKnockback3);
    this.stage.vars.newData.push(this.vars.hHitstun3);
    this.stage.vars.newData.push(this.vars.hType);
    if (this.compare(p4, 1) === 0) {
      this.vars.length26 = this.stage.vars.newData.length;
    }
  }

  *idle() {
    if (this.compare(this.vars.y35, 0) > 0) {
      this.vars.state26 = 2;
    } else {
      this.warp(this.stateUpdate)(0);
      if (this.toBoolean(this.vars.inputs26[5 - 1])) {
        if (this.toBoolean(this.vars.inputs26[4 - 1])) {
          this.warp(this.lowPunch)();
        } else {
          this.warp(this.jab)();
        }
      } else {
        if (this.toBoolean(this.vars.inputs26[6 - 1])) {
          if (this.toBoolean(this.vars.inputs26[4 - 1])) {
            this.warp(this.lowKick)();
          } else {
            this.warp(this.kick)();
          }
        } else {
          if (this.toBoolean(this.vars.inputs26[3 - 1])) {
            this.vars.ySpeed26 = 5;
            this.warp(this.midair)();
            this.vars.frame29 = -1;
          } else {
            if (this.toBoolean(this.vars.inputs26[4 - 1])) {
              this.warp(this.crouch)();
            } else {
              if (
                this.toBoolean(this.vars.inputs26[1 - 1]) ||
                this.toBoolean(this.vars.inputs26[2 - 1])
              ) {
                this.warp(this.walk)();
              } else {
                if (this.compare(this.vars.frame29, 5) > 0) {
                  this.vars.commands12 = "";
                }
                this.warp(this.changeDirection)();
                this.warp(this.friction)();
              }
            }
          }
        }
      }
    }
  }

  *jab() {
    this.warp(this.stateUpdate)(4);
    if (this.compare(this.vars.frame29, 8) > 0) {
      this.warp(this.idle)();
      this.vars.commands12 = "";
    } else {
      this.warp(this.friction)();
      if (
        this.compare(this.vars.frame29, 1) > 0 &&
        this.compare(this.vars.frame29, 4) < 0
      ) {
        this.warp(this.addHitbox)(10, -5, 17, 4, 2, 0, 0, 6, 0);
      }
      if (this.compare(this.vars.frame29, 4) > 0) {
        if (
          this.compare(this.vars.impact19, -6) < 0 &&
          this.toBoolean(this.vars.inputs26[5 - 1]) &&
            !this.toBoolean(this.vars.inputs26[4 - 1])
        ) {
          this.vars.frame29 = 0;
        }
        this.warp(this.lastLettersOf)(
          2,
          this.stage.vars.playerCommands[this.vars.p59 - 1]
        );
        if (this.compare(this.vars.command12, "zz") === 0) {
          this.vars.state26 = 4.1;
          this.vars.frame29 = 0;
        }
      }
    }
  }

  *stateUpdate(s) {
    if (!(this.compare(s, this.vars.state26) === 0)) {
      this.vars.frame29 = 0;
    }
    this.vars.state26 = s;
    this.vars.frame29 += 1;
  }

  *walk() {
    this.warp(this.stateUpdate)(1);
    if (this.toBoolean(this.vars.inputs26[5 - 1])) {
      this.warp(this.jab)();
    } else {
      if (this.toBoolean(this.vars.inputs26[6 - 1])) {
        this.warp(this.kick)();
      } else {
        if (this.toBoolean(this.vars.inputs26[3 - 1])) {
          this.vars.ySpeed26 = 5;
          this.warp(this.midair)();
          this.vars.frame29 = -1;
        } else {
          if (this.toBoolean(this.vars.inputs26[4 - 1])) {
            this.warp(this.crouch)();
          } else {
            if (this.compare(this.vars.frame29, 5) > 0) {
              this.vars.commands12 = "";
            }
            this.warp(this.changeDirection)();
            if (
              !(
                this.toBoolean(this.vars.inputs26[1 - 1]) ||
                this.toBoolean(this.vars.inputs26[2 - 1])
              )
            ) {
              this.warp(this.idle)();
            } else {
              if (this.toBoolean(this.vars.inputs26[1 - 1])) {
                this.vars.xSpeed26 += 2;
                if (!(this.compare(this.stage.vars.OfPlayers, 2) === 0)) {
                  this.vars.direction28 = 1;
                }
                if (this.compare(this.vars.direction28, 0) < 0) {
                  this.vars.frame29 += -2;
                }
              } else {
                this.vars.xSpeed26 += -2;
                if (!(this.compare(this.stage.vars.OfPlayers, 2) === 0)) {
                  this.vars.direction28 = -1;
                }
                if (this.compare(this.vars.direction28, 0) > 0) {
                  this.vars.frame29 += -2;
                }
              }
              this.warp(this.friction)();
            }
          }
        }
      }
    }
  }

  *inputs(p5) {
    if (this.compare(this.vars.impact19, "Intro") === 0) {
      this.vars.inputs26.splice(1 - 1, 1, "false");
      this.vars.inputs26.splice(2 - 1, 1, "false");
      this.vars.inputs26.splice(3 - 1, 1, "false");
      this.vars.inputs26.splice(4 - 1, 1, "false");
      this.vars.inputs26.splice(5 - 1, 1, "false");
      this.vars.inputs26.splice(6 - 1, 1, "false");
      if (!(this.compare(this.stage.vars.playerState[p5 - 1], -1) === 0)) {
        this.stage.vars.playerState.splice(p5 - 1, 1, 0);
      }
    } else {
      if (this.compare(p5, 1) === 0) {
        if (this.compare(this.stage.vars.cpuPlayerPlayer1, 1) === 0) {
          this.stage.vars.currentInputs.splice(
            1 - 1,
            1,
            this.compare(
              this.stage.vars.playerX[2 - 1],
              this.stage.vars.playerX[1 - 1]
            ) > 0
          );
          this.stage.vars.currentInputs.splice(
            2 - 1,
            1,
            this.compare(
              this.stage.vars.playerX[1 - 1],
              this.stage.vars.playerX[2 - 1]
            ) > 0
          );
          this.stage.vars.currentInputs.splice(
            3 - 1,
            1,
            this.compare(this.random(1, 10), 1) === 0
          );
          this.stage.vars.currentInputs.splice(
            4 - 1,
            1,
            this.compare(this.random(1, 8), 1) === 0
          );
          this.stage.vars.currentInputs.splice(
            5 - 1,
            1,
            this.compare(this.random(1, 8), 1) === 0 &&
              this.compare(
                Math.abs(
                  this.stage.vars.playerX[1 - 1] -
                    this.stage.vars.playerX[2 - 1]
                ),
                16
              ) < 0
          );
          this.stage.vars.currentInputs.splice(
            6 - 1,
            1,
            this.compare(this.random(1, 10), 1) === 0 &&
              this.compare(
                Math.abs(
                  this.stage.vars.playerX[1 - 1] -
                    this.stage.vars.playerX[2 - 1]
                ),
                24
              ) < 0
          );
          this.vars.inputs26.splice(
            1 - 1,
            1,
            this.stage.vars.currentInputs[1 - 1]
          );
          this.vars.inputs26.splice(
            2 - 1,
            1,
            this.stage.vars.currentInputs[2 - 1]
          );
          this.vars.inputs26.splice(
            3 - 1,
            1,
            this.stage.vars.currentInputs[3 - 1]
          );
          this.vars.inputs26.splice(
            4 - 1,
            1,
            this.stage.vars.currentInputs[4 - 1]
          );
          this.vars.inputs26.splice(
            5 - 1,
            1,
            this.stage.vars.currentInputs[5 - 1]
          );
          this.vars.inputs26.splice(
            6 - 1,
            1,
            this.stage.vars.currentInputs[6 - 1]
          );
        }
      }
      if (this.compare(p5, 2) === 0) {
        if (this.compare(this.stage.vars.cpuPlayerPlayer2, 1) === 0) {
          this.stage.vars.currentInputs.splice(
            7 - 1,
            1,
            this.compare(
              this.stage.vars.playerX[1 - 1],
              this.stage.vars.playerX[2 - 1]
            ) > 0
          );
          this.stage.vars.currentInputs.splice(
            8 - 1,
            1,
            this.compare(
              this.stage.vars.playerX[2 - 1],
              this.stage.vars.playerX[1 - 1]
            ) > 0
          );
          this.stage.vars.currentInputs.splice(
            9 - 1,
            1,
            this.compare(this.random(1, 10), 1) === 0
          );
          this.stage.vars.currentInputs.splice(
            10 - 1,
            1,
            this.compare(this.random(1, 8), 1) === 0
          );
          this.stage.vars.currentInputs.splice(
            11 - 1,
            1,
            this.compare(this.random(1, 8), 1) === 0 &&
              this.compare(
                Math.abs(
                  this.stage.vars.playerX[1 - 1] -
                    this.stage.vars.playerX[2 - 1]
                ),
                16
              ) < 0
          );
          this.stage.vars.currentInputs.splice(
            12 - 1,
            1,
            this.compare(this.random(1, 10), 1) === 0 &&
              this.compare(
                Math.abs(
                  this.stage.vars.playerX[1 - 1] -
                    this.stage.vars.playerX[2 - 1]
                ),
                24
              ) < 0
          );
          this.vars.inputs26.splice(
            7 - 1,
            1,
            this.stage.vars.currentInputs[7 - 1]
          );
          this.vars.inputs26.splice(
            8 - 1,
            1,
            this.stage.vars.currentInputs[8 - 1]
          );
          this.vars.inputs26.splice(
            9 - 1,
            1,
            this.stage.vars.currentInputs[9 - 1]
          );
          this.vars.inputs26.splice(
            10 - 1,
            1,
            this.stage.vars.currentInputs[10 - 1]
          );
          this.vars.inputs26.splice(
            11 - 1,
            1,
            this.stage.vars.currentInputs[11 - 1]
          );
          this.vars.inputs26.splice(
            12 - 1,
            1,
            this.stage.vars.currentInputs[12 - 1]
          );
        }
      }
      if (this.compare(this.stage.vars.mobile2, 0) > 0) {
        this.vars.inputs26.splice(
          1 - 1,
          1,
          this.stage.vars.mobile[p5 * 8 - 5 - 1]
        );
        this.vars.inputs26.splice(
          2 - 1,
          1,
          this.stage.vars.mobile[p5 * 8 - 6 - 1]
        );
        this.vars.inputs26.splice(
          3 - 1,
          1,
          this.stage.vars.mobile[p5 * 8 - 7 - 1]
        );
        this.vars.inputs26.splice(
          4 - 1,
          1,
          this.stage.vars.mobile[p5 * 8 - 4 - 1]
        );
        this.vars.inputs26.splice(
          5 - 1,
          1,
          this.stage.vars.mobile[p5 * 8 - 3 - 1]
        );
        this.vars.inputs26.splice(
          6 - 1,
          1,
          this.stage.vars.mobile[p5 * 8 - 2 - 1]
        );
      } else {
        this.vars.inputs26.splice(
          1 - 1,
          1,
          this.stage.vars.currentInputs[p5 * 6 - 5 - 1]
        );
        this.vars.inputs26.splice(
          2 - 1,
          1,
          this.stage.vars.currentInputs[p5 * 6 - 4 - 1]
        );
        this.vars.inputs26.splice(
          3 - 1,
          1,
          this.stage.vars.currentInputs[p5 * 6 - 3 - 1]
        );
        this.vars.inputs26.splice(
          4 - 1,
          1,
          this.stage.vars.currentInputs[p5 * 6 - 2 - 1]
        );
        this.vars.inputs26.splice(
          5 - 1,
          1,
          this.stage.vars.currentInputs[p5 * 6 - 1 - 1]
        );
        this.vars.inputs26.splice(
          6 - 1,
          1,
          this.stage.vars.currentInputs[p5 * 6 - 1]
        );
      }
    }
  }

  *crouch() {
    this.warp(this.stateUpdate)(3);
    if (!this.toBoolean(this.vars.inputs26[4 - 1])) {
      this.warp(this.idle)();
    } else {
      if (this.toBoolean(this.vars.inputs26[5 - 1])) {
        this.warp(this.lowPunch)();
      } else {
        if (this.toBoolean(this.vars.inputs26[6 - 1])) {
          this.warp(this.lowKick)();
        } else {
          this.warp(this.friction)();
        }
      }
    }
  }

  *midair() {
    this.warp(this.stateUpdate)(2);
    if (this.compare(this.vars.frame29, 0) === 0) {
      this.warp(this.addEffect)(
        this.stage.vars.playerX[this.vars.p59 - 1],
        4.5,
        6,
        this.vars.p59
      );
    }
    if (this.toBoolean(this.vars.inputs26[4 - 1])) {
      this.vars.ySpeed26 = -4;
    }
    this.vars.y35 += this.vars.ySpeed26;
    this.vars.ySpeed26 += -0.5;
    if (!(this.compare(this.vars.y35, 0) > 0)) {
      this.vars.ySpeed26 = 0;
      this.vars.y35 = 0;
      if (this.toBoolean(this.vars.inputs26[4 - 1])) {
        this.warp(this.crouch)();
      } else {
        this.warp(this.land)();
      }
    } else {
      if (this.toBoolean(this.vars.inputs26[5 - 1])) {
        this.warp(this.airPunch)();
      } else {
        if (this.toBoolean(this.vars.inputs26[6 - 1])) {
          this.warp(this.airKick)();
        } else {
          if (this.toBoolean(this.vars.inputs26[1 - 1])) {
            this.vars.xSpeed26 += 2;
          }
          if (this.toBoolean(this.vars.inputs26[2 - 1])) {
            this.vars.xSpeed26 += -2;
          }
          this.warp(this.friction)();
        }
      }
    }
  }

  *land() {
    this.warp(this.stateUpdate)(6);
    if (this.compare(this.vars.frame29, 3) > 0) {
      this.warp(this.idle)();
      this.vars.xSpeed26 = Math.round(this.vars.xSpeed26 * 2) / 2;
    } else {
      this.warp(this.changeDirection)();
      this.warp(this.collision)();
      if (this.compare(this.vars.frame29, 1) === 0) {
        this.warp(this.addEffect)(
          this.stage.vars.playerX[this.vars.p59 - 1],
          4.5,
          5,
          this.vars.p59
        );
      }
    }
  }

  *friction() {
    if (this.compare(Math.abs(this.vars.xSpeed26), 0.5) < 0) {
      this.vars.xSpeed26 = 0;
    }
    if (this.compare(this.vars.xSpeed26, 0) > 0) {
      this.vars.xSpeed26 += -0.5;
      if (
        this.compare(this.vars.state26, 1) > 0 &&
        this.compare(this.vars.state26, 2) < 0
      ) {
        if (
          this.compare(
            this.vars.xSpeed26,
            this.stage.vars.characterRunSpeed[
              this.stage.vars.characterOrder.indexOf(
                this.stage.vars.playerCharacter[this.vars.p59 - 1]
              ) +
                1 -
                1
            ]
          ) > 0
        ) {
          this.vars.xSpeed26 = this.stage.vars.characterRunSpeed[
            this.stage.vars.characterOrder.indexOf(
              this.stage.vars.playerCharacter[this.vars.p59 - 1]
            ) +
              1 -
              1
          ];
        }
      } else {
        if (this.compare(this.vars.state26, 1) === 0) {
          if (
            this.compare(
              this.vars.xSpeed26,
              this.stage.vars.characterWalkSpeed[
                this.stage.vars.characterOrder.indexOf(
                  this.stage.vars.playerCharacter[this.vars.p59 - 1]
                ) +
                  1 -
                  1
              ]
            ) > 0
          ) {
            this.vars.xSpeed26 = this.stage.vars.characterWalkSpeed[
              this.stage.vars.characterOrder.indexOf(
                this.stage.vars.playerCharacter[this.vars.p59 - 1]
              ) +
                1 -
                1
            ];
          }
        } else {
          if (this.compare(this.vars.xSpeed26, 2) > 0) {
            this.vars.xSpeed26 = 2;
          }
        }
      }
    }
    if (this.compare(this.vars.xSpeed26, 0) < 0) {
      this.vars.xSpeed26 += 0.5;
      if (
        this.compare(this.vars.state26, 1) > 0 &&
        this.compare(this.vars.state26, 2) < 0
      ) {
        if (
          this.compare(
            this.stage.vars.characterRunSpeed[
              this.stage.vars.characterOrder.indexOf(
                this.stage.vars.playerCharacter[this.vars.p59 - 1]
              ) +
                1 -
                1
            ] * -1,
            this.vars.xSpeed26
          ) > 0
        ) {
          this.vars.xSpeed26 =
            this.stage.vars.characterRunSpeed[
              this.stage.vars.characterOrder.indexOf(
                this.stage.vars.playerCharacter[this.vars.p59 - 1]
              ) +
                1 -
                1
            ] * -1;
        }
      } else {
        if (this.compare(this.vars.state26, 1) === 0) {
          if (
            this.compare(
              this.stage.vars.characterWalkSpeed[
                this.stage.vars.characterOrder.indexOf(
                  this.stage.vars.playerCharacter[this.vars.p59 - 1]
                ) +
                  1 -
                  1
              ] * -1,
              this.vars.xSpeed26
            ) > 0
          ) {
            this.vars.xSpeed26 =
              this.stage.vars.characterWalkSpeed[
                this.stage.vars.characterOrder.indexOf(
                  this.stage.vars.playerCharacter[this.vars.p59 - 1]
                ) +
                  1 -
                  1
              ] * -1;
          }
        } else {
          if (this.compare(-2, this.vars.xSpeed26) > 0) {
            this.vars.xSpeed26 = -2;
          }
        }
      }
    }
    this.warp(this.collision)();
  }

  *kick() {
    this.warp(this.stateUpdate)(5);
    if (this.compare(this.vars.frame29, 18) > 0) {
      this.warp(this.idle)();
    } else {
      this.warp(this.friction)();
      if (
        this.compare(
          this.stage.vars.playerCharacter[this.vars.p59 - 1],
          "Cyan"
        ) === 0
      ) {
        if (this.compare(this.vars.frame29, 5) === 0) {
          this.warp(this.addHitbox)(32, -6, 40, 24, 8, 8, 4, 10, "High");
        }
      } else {
        if (
          this.compare(
            this.stage.vars.playerCharacter[this.vars.p59 - 1],
            "Yellow"
          ) === 0 ||
          this.compare(
            this.stage.vars.playerCharacter[this.vars.p59 - 1],
            "Black"
          ) === 0
        ) {
          if (this.compare(this.vars.frame29, 3) === 0) {
            this.warp(this.addHitbox)(10, -11, 16, 12, 4, 1, 0, 16, 0);
          }
        } else {
          if (this.compare(this.vars.frame29, 3) === 0) {
            this.warp(this.addHitbox)(10, -8, 18, 12, 6, 2, 2, 10, 0);
          }
        }
      }
    }
  }

  *flinchHead() {
    this.warp(this.stateUpdate)(7);
    if (this.compare(this.vars.frame29, 10) > 0) {
      this.warp(this.idle)();
    } else {
      this.warp(this.collision)();
      this.vars.commands12 = "";
    }
  }

  *rectTouching(x1, y1, xsize1, ysize1, x2, y2, xsize2, ysize2) {
    this.vars.touching26 = 0;
    if (this.compare(Math.abs(x1 - x2), (xsize1 + xsize2) / 2) < 0) {
      if (this.compare(Math.abs(y1 - y2), (ysize1 + ysize2) / 2) < 0) {
        this.vars.touching26 = 1;
      }
    }
  }

  *detectHits(p6) {
    this.vars.h26 = 1;
    for (let i = 0; i < this.stage.vars.hitboxX.length; i++) {
      this.vars.i28 = 1;
      for (let i = 0; i < this.stage.vars.hurtboxX.length; i++) {
        if (!(this.compare(this.vars.h26, p6) === 0)) {
          if (
            this.compare(this.stage.vars.hitboxXSize[this.vars.h26 - 1], 0) > 0
          ) {
            this.warp(this.rectTouching)(
              this.stage.vars.hurtboxX[this.vars.i28 - 1],
              this.vars.hurtboxY26[this.vars.i28 - 1],
              this.vars.hurtboxXSize26[this.vars.i28 - 1],
              this.vars.hurtboxYSize26[this.vars.i28 - 1],
              this.stage.vars.hitboxX[this.vars.h26 - 1],
              this.stage.vars.hitboxY[this.vars.h26 - 1],
              this.stage.vars.hitboxXSize[this.vars.h26 - 1],
              this.stage.vars.hitboxYSize[this.vars.h26 - 1]
            );
            if (this.compare(this.vars.touching26, 1) === 0) {
              if (
                !(
                  this.compare(this.stage.vars.hitCooldown[p6 - 1], 0) > 0 &&
                  ((this.compare(this.stage.vars.playerState[p6 - 1], 6) > 0 &&
                    this.compare(11, this.stage.vars.playerState[p6 - 1]) >
                      0) ||
                    this.compare(this.stage.vars.playerState[p6 - 1], 15) === 0)
                )
              ) {
                this.stage.vars.hitCooldown.splice(
                  p6 - 1,
                  1,
                  Math.ceil(
                    this.stage.vars.hitboxHitstun[this.vars.h26 - 1] / 5
                  )
                );
                if (this.compare(this.stage.vars.hitCooldown[p6 - 1], 10) > 0) {
                  this.stage.vars.hitCooldown.splice(p6 - 1, 1, 10);
                }
                this.stage.vars.hitCooldown.splice(
                  p6 - 1,
                  1,
                  this.stage.vars.hitCooldown[p6 - 1] +
                    String(
                      this.stage.vars.hitboxType[this.vars.h26 - 1] ?? ""
                    ).includes("SH1") *
                      5
                );
                if (
                  this.compare(this.stage.vars.playerFreeze[p6 - 1], 0) === 0 &&
                  (this.compare(this.stage.vars.playerState[p6 - 1], 9) === 0 ||
                    this.compare(this.stage.vars.playerState[p6 - 1], 10) ===
                      0 ||
                    this.compare(this.stage.vars.playerState[p6 - 1], 1) ===
                      0 ||
                      (this.compare(this.stage.vars.playerState[p6 - 1], 3) ===
                        0 &&
                        this.toBoolean(
                          this.stage.vars.currentInputs[
                            Math.abs(
                              this.stage.vars.playerDirection[p6 - 1] % -3
                            ) +
                              (p6 - 1) * 6 -
                              1
                          ]
                        )))
                ) {
                  this.warp(this.blockSound)(
                    this.stage.vars.hitboxDamage[this.vars.h26 - 1]
                  );
                } else {
                  this.warp(this.hitSound)(
                    this.stage.vars.hitboxDamage[this.vars.h26 - 1]
                  );
                }
                if (
                  this.compare(
                    this.stage.vars.playerState[this.vars.h26 - 1],
                    21
                  ) === 0
                ) {
                  this.stage.vars.playerState.splice(p6 - 1, 1, 8);
                  this.stage.vars.playerY.splice(p6 - 1, 1, 0);
                  this.stage.vars.playerHealth.splice(
                    p6 - 1,
                    1,
                    this.stage.vars.playerHealth[p6 - 1] -
                      this.stage.vars.hitboxDamage[this.vars.h26 - 1]
                  );
                  this.vars.impact19 = this.stage.vars.hitboxDamage[
                    this.vars.h26 - 1
                  ];
                  this.warp(this.rumble)(
                    this.stage.vars.hitboxDamage[this.vars.h26 - 1]
                  );
                  this.warp(this.addEffect)(
                    this.stage.vars.hitboxX[this.vars.h26 - 1],
                    this.stage.vars.hitboxY[this.vars.h26 - 1],
                    "Normal2",
                    1.2
                  );
                  this.stage.vars.playerFrame.splice(p6 - 1, 1, -2);
                  return;
                } else {
                  if (
                    (this.compare(this.stage.vars.playerY[p6 - 1], 0) > 0 ||
                      (String(
                        this.stage.vars.hitboxType[this.vars.h26 - 1] ?? ""
                      ).includes("Low") &&
                        this.compare(
                          this.stage.vars.hitboxYKnockback[this.vars.h26 - 1],
                          1
                        ) > 0) ||
                      this.compare(
                        this.stage.vars.hitboxYKnockback[this.vars.h26 - 1],
                        2
                      ) > 0) &&
                    !(
                      this.compare(this.stage.vars.playerFreeze[p6 - 1], 0) ===
                        0 &&
                      (this.compare(this.stage.vars.playerState[p6 - 1], 9) ===
                        0 ||
                        this.compare(
                          this.stage.vars.playerState[p6 - 1],
                          10
                        ) === 0 ||
                        this.compare(this.stage.vars.playerState[p6 - 1], 1) ===
                          0 ||
                          (this.compare(
                            this.stage.vars.playerState[p6 - 1],
                            3
                          ) === 0 &&
                            this.toBoolean(
                              this.stage.vars.currentInputs[
                                Math.abs(
                                  this.stage.vars.playerDirection[p6 - 1] % -3
                                ) +
                                  (p6 - 1) * 6 -
                                  1
                              ]
                            )))
                    )
                  ) {
                    this.stage.vars.playerFrame.splice(
                      p6 - 1,
                      1,
                      10 - this.stage.vars.hitboxHitstun[this.vars.h26 - 1]
                    );
                    if (
                      String(
                        this.stage.vars.hitboxType[this.vars.h26 - 1] ?? ""
                      ).includes("KD1")
                    ) {
                      this.stage.vars.playerFrame.splice(p6 - 1, 1, 0);
                      this.stage.vars.playerState.splice(p6 - 1, 1, 19.1);
                    } else {
                      this.stage.vars.playerState.splice(p6 - 1, 1, 15);
                    }
                    this.stage.vars.playerYSpeed.splice(
                      p6 - 1,
                      1,
                      this.stage.vars.hitboxYKnockback[this.vars.h26 - 1]
                    );
                    this.stage.vars.playerXSpeed.splice(
                      p6 - 1,
                      1,
                      this.stage.vars.hitboxXKnockback[this.vars.h26 - 1] *
                        this.stage.vars.playerDirection[this.vars.h26 - 1]
                    );
                    this.stage.vars.playerHealth.splice(
                      p6 - 1,
                      1,
                      this.stage.vars.playerHealth[p6 - 1] -
                        this.stage.vars.hitboxDamage[this.vars.h26 - 1]
                    );
                    this.vars.impact19 = this.stage.vars.hitboxDamage[
                      this.vars.h26 - 1
                    ];
                    this.warp(this.rumble)(
                      this.stage.vars.hitboxDamage[this.vars.h26 - 1]
                    );
                    this.warp(this.addEffect)(
                      this.stage.vars.hitboxX[this.vars.h26 - 1],
                      this.stage.vars.hitboxY[this.vars.h26 - 1],
                      "Normal1",
                      1
                    );
                    this.stage.vars.playerEx.splice(
                      this.vars.h26 - 1,
                      1,
                      this.stage.vars.playerEx[this.vars.h26 - 1] + 0.05
                    );
                    this.stage.vars.playerEx.splice(
                      p6 - 1,
                      1,
                      this.stage.vars.playerEx[p6 - 1] + 0.1
                    );
                    this.stage.vars.playerCommands.splice(p6 - 1, 1, "");
                    return;
                  } else {
                    if (
                      this.compare(this.stage.vars.playerFreeze[p6 - 1], 0) ===
                        0 &&
                      (this.compare(this.stage.vars.playerState[p6 - 1], 9) ===
                        0 ||
                        this.compare(
                          this.stage.vars.playerState[p6 - 1],
                          10
                        ) === 0 ||
                        this.compare(this.stage.vars.playerState[p6 - 1], 1) ===
                          0 ||
                          (this.compare(
                            this.stage.vars.playerState[p6 - 1],
                            3
                          ) === 0 &&
                            this.toBoolean(
                              this.stage.vars.currentInputs[
                                Math.abs(
                                  this.stage.vars.playerDirection[p6 - 1] % -3
                                ) +
                                  (p6 - 1) * 6 -
                                  1
                              ]
                            )))
                    ) {
                      if (
                        this.toBoolean(
                          this.stage.vars.previousInputs[
                            Math.abs(
                              this.stage.vars.playerDirection[p6 - 1] % -3
                            ) +
                              (p6 - 1) * 6 -
                              1
                          ]
                        ) &&
                        !this.toBoolean(
                          this.stage.vars.currentInputs[
                            Math.abs(
                              this.stage.vars.playerDirection[p6 - 1] % -3
                            ) +
                              (p6 - 1) * 6 -
                              1
                          ]
                        )
                      ) {
                        if (
                          this.compare(
                            this.stage.vars.playerState[p6 - 1],
                            3
                          ) === 0
                        ) {
                          this.stage.vars.playerState.splice(p6 - 1, 1, 28);
                          this.warp(this.addEffect)(
                            this.stage.vars.playerX[p6 - 1],
                            this.stage.vars.playerY[p6 - 1] + -10,
                            2,
                            p6
                          );
                          this.stage.vars.playerEx.splice(
                            p6 - 1,
                            1,
                            this.stage.vars.playerEx[p6 - 1] + 0.1
                          );
                          this.vars.impact19 = this.stage.vars.hitboxDamage[
                            this.vars.h26 - 1
                          ];
                        } else {
                          this.stage.vars.playerState.splice(p6 - 1, 1, 17);
                          this.warp(this.addEffect)(0, 0, 3, p6);
                          this.vars.impact19 = 5;
                          this.stage.vars.playerEx.splice(
                            p6 - 1,
                            1,
                            this.stage.vars.playerEx[p6 - 1] + 0.5
                          );
                        }
                      } else {
                        if (
                          String(
                            this.stage.vars.hitboxType[this.vars.h26 - 1] ?? ""
                          ).includes("High")
                        ) {
                          this.stage.vars.playerState.splice(p6 - 1, 1, 9);
                          this.warp(this.addEffect)(
                            this.stage.vars.playerX[p6 - 1],
                            this.stage.vars.playerY[p6 - 1],
                            2,
                            p6
                          );
                        } else {
                          this.stage.vars.playerState.splice(p6 - 1, 1, 10);
                          this.warp(this.addEffect)(
                            this.stage.vars.playerX[p6 - 1],
                            this.stage.vars.playerY[p6 - 1] + -6,
                            2,
                            p6
                          );
                        }
                        this.vars.impact19 = this.stage.vars.hitboxDamage[
                          this.vars.h26 - 1
                        ];
                        this.stage.vars.playerFrame.splice(
                          p6 - 1,
                          1,
                          4 -
                            Math.round(
                              this.stage.vars.hitboxHitstun[this.vars.h26 - 1] /
                                1.5
                            )
                        );
                        this.stage.vars.playerEx.splice(
                          p6 - 1,
                          1,
                          this.stage.vars.playerEx[p6 - 1] + 0.1
                        );
                        this.stage.vars.playerCommands.splice(
                          this.vars.h26 - 1,
                          1,
                          "" +
                            "BS" +
                            this.stage.vars.playerCommands[this.vars.h26 - 1]
                        );
                        return;
                      }
                    } else {
                      this.stage.vars.playerFrame.splice(
                        p6 - 1,
                        1,
                        8 - this.stage.vars.hitboxHitstun[this.vars.h26 - 1]
                      );
                      this.stage.vars.playerState.splice(p6 - 1, 1, 8);
                      if (
                        String(
                          this.stage.vars.hitboxType[this.vars.h26 - 1] ?? ""
                        ).includes("High")
                      ) {
                        this.stage.vars.playerState.splice(p6 - 1, 1, 7);
                        this.stage.vars.playerFrame.splice(
                          p6 - 1,
                          1,
                          11 - this.stage.vars.hitboxHitstun[this.vars.h26 - 1]
                        );
                      }
                      this.stage.vars.playerXSpeed.splice(
                        p6 - 1,
                        1,
                        this.stage.vars.hitboxXKnockback[this.vars.h26 - 1] *
                          this.stage.vars.playerDirection[this.vars.h26 - 1]
                      );
                      this.stage.vars.playerHealth.splice(
                        p6 - 1,
                        1,
                        this.stage.vars.playerHealth[p6 - 1] -
                          this.stage.vars.hitboxDamage[this.vars.h26 - 1]
                      );
                      this.vars.impact19 = this.stage.vars.hitboxDamage[
                        this.vars.h26 - 1
                      ];
                      this.warp(this.rumble)(
                        this.stage.vars.hitboxDamage[this.vars.h26 - 1]
                      );
                      this.warp(this.addEffect)(
                        this.stage.vars.hitboxX[this.vars.h26 - 1],
                        this.stage.vars.hitboxY[this.vars.h26 - 1],
                        "Normal1",
                        1
                      );
                      this.stage.vars.playerEx.splice(
                        this.vars.h26 - 1,
                        1,
                        this.stage.vars.playerEx[this.vars.h26 - 1] + 0.05
                      );
                      this.stage.vars.playerEx.splice(
                        p6 - 1,
                        1,
                        this.stage.vars.playerEx[p6 - 1] + 0.1
                      );
                      this.stage.vars.playerCommands.splice(p6 - 1, 1, "");
                      if (
                        String(
                          this.stage.vars.hitboxType[this.vars.h26 - 1] ?? ""
                        ).includes("KD1")
                      ) {
                        this.stage.vars.playerFrame.splice(p6 - 1, 1, -1);
                        this.stage.vars.playerState.splice(p6 - 1, 1, 19.1);
                        return;
                      } else {
                        if (
                          this.compare(
                            this.stage.vars.hitboxYKnockback[this.vars.h26 - 1],
                            -5
                          ) < 0
                        ) {
                          this.stage.vars.playerState.splice(p6 - 1, 1, 24);
                          this.stage.vars.playerFrame.splice(p6 - 1, 1, 14);
                          return;
                        }
                        return;
                      }
                    }
                  }
                  this.stage.vars.playerFrame.splice(p6 - 1, 1, 0);
                  return;
                }
              }
            }
          }
        }
        this.vars.i28 += 1;
      }
      this.vars.h26 += 1;
    }
    this.vars.h26 = 1;
    for (let i = 0; i < this.stage.vars.projectileType.length; i++) {
      this.vars.i28 = 1;
      for (let i = 0; i < this.stage.vars.hurtboxX.length; i++) {
        if (
          !(
            this.compare(
              this.stage.vars.projectileOwner[this.vars.h26 - 1],
              p6
            ) === 0 ||
            this.compare(
              this.stage.vars.projectileType[this.vars.h26 - 1],
              0
            ) === 0
          )
        ) {
          this.warp(this.rectTouching)(
            this.stage.vars.hurtboxX[this.vars.i28 - 1],
            this.vars.hurtboxY26[this.vars.i28 - 1],
            this.vars.hurtboxXSize26[this.vars.i28 - 1],
            this.vars.hurtboxYSize26[this.vars.i28 - 1],
            this.stage.vars.projectileX[this.vars.h26 - 1],
            this.stage.vars.projectileY[this.vars.h26 - 1],
            this.stage.vars.projectileHitboxX[this.vars.h26 - 1],
            this.stage.vars.projectileHitboxY[this.vars.h26 - 1]
          );
          if (this.compare(this.vars.touching26, 1) === 0) {
            if (!(this.compare(this.stage.vars.hitCooldown[p6 - 1], 0) > 0)) {
              this.stage.vars.hitCooldown.splice(
                p6 - 1,
                1,
                Math.round(
                  (String(
                    this.stage.vars.projectileStats[
                      this.stage.vars.projectileType[this.vars.h26 - 1] - 1
                    ] ?? ""
                  )[2 - 1] ?? "") / 3
                )
              );
              if (
                this.compare(this.stage.vars.playerState[p6 - 1], 17) === 0 ||
                this.compare(this.stage.vars.playerState[p6 - 1], 1) === 0 ||
                  this.compare(this.stage.vars.playerState[p6 - 1], 10) === 0
              ) {
                if (
                  this.compare(this.stage.vars.playerState[p6 - 1], 17) === 0 ||
                  !(
                    this.toBoolean(
                      this.stage.vars.currentInputs[p6 * 6 - 5 - 1]
                    ) ||
                    this.toBoolean(
                      this.stage.vars.currentInputs[p6 * 6 - 4 - 1]
                    )
                  )
                ) {
                  this.stage.vars.playerState.splice(p6 - 1, 1, 17);
                  this.warp(this.addEffect)(
                    this.stage.vars.playerX[p6 - 1],
                    0,
                    4,
                    p6
                  );
                  this.stage.vars.playerFrame.splice(p6 - 1, 1, -5);
                  if (
                    this.compare(
                      this.stage.vars.projectileType[this.vars.h26 - 1],
                      11
                    ) === 0 ||
                    this.compare(
                      this.stage.vars.projectileType[this.vars.h26 - 1],
                      9
                    ) === 0
                  ) {
                    null;
                  } else {
                    this.stage.vars.projectileDirection.splice(
                      this.vars.h26 - 1,
                      1,
                      this.stage.vars.playerDirection[p6 - 1]
                    );
                    this.stage.vars.projectileFrame.splice(
                      this.vars.h26 - 1,
                      1,
                      0
                    );
                    this.stage.vars.projectileOwner.splice(
                      this.vars.h26 - 1,
                      1,
                      p6
                    );
                  }
                } else {
                  this.stage.vars.playerState.splice(p6 - 1, 1, 10);
                  this.warp(this.addEffect)(
                    this.stage.vars.playerX[p6 - 1],
                    this.stage.vars.playerY[p6 - 1] + -6,
                    2,
                    p6
                  );
                  this.vars.impact19 = this.stage.vars.hitboxDamage[
                    this.vars.h26 - 1
                  ];
                  this.stage.vars.playerFrame.splice(
                    p6 - 1,
                    1,
                    Math.round(
                      (String(
                        this.stage.vars.projectileStats[
                          this.stage.vars.projectileType[this.vars.h26 - 1] - 1
                        ] ?? ""
                      )[2 - 1] ?? "") * -0.5
                    )
                  );
                  if (
                    this.compare(
                      this.stage.vars.projectileType[this.vars.h26 - 1],
                      11
                    ) === 0 ||
                    this.compare(
                      this.stage.vars.projectileType[this.vars.h26 - 1],
                      9
                    ) === 0
                  ) {
                    null;
                  } else {
                    this.warp(this.removeProjectile)(this.vars.h26);
                  }
                  return;
                }
              } else {
                if (
                  !(
                    this.compare(
                      this.stage.vars.projectileType[this.vars.h26 - 1],
                      9
                    ) === 0
                  ) &&
                  this.compare(this.stage.vars.playerFrame[p6 - 1], 13) < 0 &&
                    this.compare(
                      this.stage.vars.playerCharacter[p6 - 1],
                      "Red"
                    ) === 0 &&
                      this.compare(this.stage.vars.playerState[p6 - 1], 29) ===
                        0
                ) {
                  this.warp(this.addEffect)(
                    this.stage.vars.playerX[p6 - 1] +
                      this.stage.vars.playerDirection[p6 - 1] * 10,
                    4,
                    4,
                    p6
                  );
                  if (this.compare(this.vars.i28, 4) === 0) {
                    this.warp(this.addEffect)(
                      this.stage.vars.playerX[p6 - 1] +
                        this.stage.vars.playerDirection[p6 - 1] * 16,
                      4,
                      16,
                      p6
                    );
                    this.warp(this.removeProjectile)(this.vars.h26);
                    this.warp(this.rumble)(5);
                    this.vars.impact19 = 3;
                    this.stage.vars.playerEx.splice(
                      p6 - 1,
                      1,
                      this.stage.vars.playerEx[p6 - 1] + 0.15
                    );
                  } else {
                    this.stage.vars.playerFrame.splice(p6 - 1, 1, 10);
                    this.stage.vars.projectileFrame.splice(
                      this.vars.h26 - 1,
                      1,
                      this.stage.vars.projectileFrame[this.vars.h26 - 1] + 16
                    );
                    this.stage.vars.projectileDirection.splice(
                      this.vars.h26 - 1,
                      1,
                      this.stage.vars.playerDirection[p6 - 1] * -2.5
                    );
                    this.stage.vars.projectileOwner.splice(
                      this.vars.h26 - 1,
                      1,
                      p6
                    );
                    this.warp(this.rumble)(3);
                    this.stage.vars.playerEx.splice(
                      p6 - 1,
                      1,
                      this.stage.vars.playerEx[p6 - 1] + 0.1
                    );
                  }
                  return;
                } else {
                  this.stage.vars.playerState.splice(p6 - 1, 1, 8);
                  this.stage.vars.playerHealth.splice(
                    p6 - 1,
                    1,
                    this.stage.vars.playerHealth[p6 - 1] -
                      (String(
                        this.stage.vars.projectileStats[
                          this.stage.vars.projectileType[this.vars.h26 - 1] - 1
                        ] ?? ""
                      )[1 - 1] ?? "")
                  );
                  this.stage.vars.playerXSpeed.splice(
                    p6 - 1,
                    1,
                    this.stage.vars.projectileDirection[this.vars.h26 - 1] *
                      (String(
                        this.stage.vars.projectileStats[
                          this.stage.vars.projectileType[this.vars.h26 - 1] - 1
                        ] ?? ""
                      )[3 - 1] ?? "")
                  );
                  this.stage.vars.playerYSpeed.splice(
                    p6 - 1,
                    1,
                    String(
                      this.stage.vars.projectileStats[
                        this.stage.vars.projectileType[this.vars.h26 - 1] - 1
                      ] ?? ""
                    )[4 - 1] ?? ""
                  );
                  if (
                    this.compare(this.stage.vars.playerYSpeed[p6 - 1], 1) > 0 ||
                    this.compare(this.stage.vars.playerY[p6 - 1], 0) > 0
                  ) {
                    this.stage.vars.playerState.splice(p6 - 1, 1, 15);
                  }
                  this.vars.impact19 =
                    String(
                      this.stage.vars.projectileStats[
                        this.stage.vars.projectileType[this.vars.h26 - 1] - 1
                      ] ?? ""
                    )[1 - 1] ?? "";
                  this.warp(this.rumble)(
                    (String(
                      this.stage.vars.projectileStats[
                        this.stage.vars.projectileType[this.vars.h26 - 1] - 1
                      ] ?? ""
                    )[1 - 1] ?? "") + 1
                  );
                  this.warp(this.addEffect)(
                    this.stage.vars.projectileX[this.vars.h26 - 1],
                    this.stage.vars.projectileY[this.vars.h26 - 1],
                    "Normal1",
                    1
                  );
                  this.stage.vars.playerFrame.splice(
                    p6 - 1,
                    1,
                    8 -
                      (String(
                        this.stage.vars.projectileStats[
                          this.stage.vars.projectileType[this.vars.h26 - 1] - 1
                        ] ?? ""
                      )[2 - 1] ?? "")
                  );
                  if (
                    this.compare(
                      this.stage.vars.projectileType[this.vars.h26 - 1],
                      11
                    ) === 0 ||
                    this.compare(
                      this.stage.vars.projectileType[this.vars.h26 - 1],
                      9
                    ) === 0 ||
                      this.compare(
                        this.stage.vars.projectileType[this.vars.h26 - 1],
                        8
                      ) === 0 ||
                        this.compare(
                          this.stage.vars.projectileType[this.vars.h26 - 1],
                          7
                        ) === 0 ||
                          this.compare(
                            this.stage.vars.projectileType[this.vars.h26 - 1],
                            5
                          ) === 0
                  ) {
                    null;
                  } else {
                    this.warp(this.removeProjectile)(this.vars.h26);
                  }
                  return;
                }
              }
            }
          }
        }
        this.vars.i28 += 1;
      }
      this.vars.h26 += 1;
    }
  }

  *updateData() {
    this.vars.i28 = 0;
    for (let i = 0; i < this.stage.vars.OfPlayers; i++) {
      this.vars.i28 += 1;
      this.warp(this.part)(1);
      this.stage.vars.playerX.splice(this.vars.i28 - 1, 1, this.vars.part26);
      this.warp(this.part)(2);
      this.stage.vars.playerY.splice(this.vars.i28 - 1, 1, this.vars.part26);
      this.warp(this.part)(3);
      this.stage.vars.playerXSpeed.splice(
        this.vars.i28 - 1,
        1,
        this.vars.part26
      );
      this.warp(this.part)(4);
      this.stage.vars.playerYSpeed.splice(
        this.vars.i28 - 1,
        1,
        this.vars.part26
      );
      this.warp(this.part)(5);
      this.stage.vars.playerDirection.splice(
        this.vars.i28 - 1,
        1,
        this.vars.part26
      );
      this.warp(this.part)(6);
      this.stage.vars.playerState.splice(
        this.vars.i28 - 1,
        1,
        this.vars.part26
      );
      this.warp(this.part)(7);
      this.stage.vars.playerFrame.splice(
        this.vars.i28 - 1,
        1,
        this.vars.part26
      );
      this.warp(this.part)(8);
      this.stage.vars.playerHealth.splice(
        this.vars.i28 - 1,
        1,
        this.vars.part26
      );
      this.warp(this.part)(9);
      this.stage.vars.playerCommands.splice(
        this.vars.i28 - 1,
        1,
        this.vars.part26
      );
      this.warp(this.part)(10);
      this.stage.vars.hitboxX.splice(this.vars.i28 - 1, 1, this.vars.part26);
      this.warp(this.part)(11);
      this.stage.vars.hitboxY.splice(this.vars.i28 - 1, 1, this.vars.part26);
      this.warp(this.part)(12);
      this.stage.vars.hitboxXSize.splice(
        this.vars.i28 - 1,
        1,
        this.vars.part26
      );
      this.warp(this.part)(13);
      this.stage.vars.hitboxYSize.splice(
        this.vars.i28 - 1,
        1,
        this.vars.part26
      );
      this.warp(this.part)(14);
      this.stage.vars.hitboxDamage.splice(
        this.vars.i28 - 1,
        1,
        this.vars.part26
      );
      this.warp(this.part)(15);
      this.stage.vars.hitboxXKnockback.splice(
        this.vars.i28 - 1,
        1,
        this.vars.part26
      );
      this.warp(this.part)(16);
      this.stage.vars.hitboxYKnockback.splice(
        this.vars.i28 - 1,
        1,
        this.vars.part26
      );
      this.warp(this.part)(17);
      this.stage.vars.hitboxHitstun.splice(
        this.vars.i28 - 1,
        1,
        this.vars.part26
      );
      this.warp(this.part)(18);
      this.stage.vars.hitboxType.splice(this.vars.i28 - 1, 1, this.vars.part26);
    }
  }

  *part(item) {
    this.vars.part26 = this.stage.vars.newData[
      (this.vars.i28 - 1) * this.vars.length26 + item - 1
    ];
  }

  *playerticks() {
    if (!(this.compare(this.stage.vars.pauseMenu, 1) === 0)) {
      this.vars.p60 = 1;
      for (let i = 0; i < this.stage.vars.OfPlayers; i++) {
        this.warp(this.hurtbox)(this.vars.p60);
        this.warp(this.detectHits)(this.vars.p60);
        this.warp(this.inputs)(this.vars.p60);
        this.warp(this.commandInputs)(this.vars.p60);
        if (
          this.compare(this.stage.vars.playerState[this.vars.p60 - 1], 7) ===
            0 ||
          this.compare(this.stage.vars.playerState[this.vars.p60 - 1], 8) ===
            0 ||
            this.compare(this.stage.vars.playerState[this.vars.p60 - 1], 15) ===
              0 ||
              String(
                this.stage.vars.playerState[this.vars.p60 - 1] ?? ""
              ).includes(19)
        ) {
          this.stage.vars.playerCommands.splice(this.vars.p60 - 1, 1, "");
        }
        if (
          this.compare(this.vars.impact19, 1) < 0 ||
          this.compare(this.vars.impact19, "Intro") === 0
        ) {
          this.warp(this.tick)(this.vars.p60);
        }
        this.vars.p60 += 1;
      }
    }
  }

  *hurtbox(p7) {
    this.vars.p59 = p7;
    this.vars.state26 = this.stage.vars.playerState[p7 - 1];
    this.vars.frame29 = this.stage.vars.playerFrame[p7 - 1];
    this.vars.x35 = this.stage.vars.playerX[p7 - 1];
    this.vars.y35 = this.stage.vars.playerY[p7 - 1];
    this.vars.direction28 = this.stage.vars.playerDirection[p7 - 1];
    this.stage.vars.hurtboxX = [];
    this.vars.hurtboxY26 = [];
    this.vars.hurtboxXSize26 = [];
    this.vars.hurtboxYSize26 = [];
    if (this.compare(this.vars.state26, 0) === 0) {
      this.warp(this.addHurtbox)(0, 1, 9, 9);
      this.warp(this.addHurtbox)(0, -10, 11.5, 13);
    } else {
      if (
        this.compare(this.vars.state26, 0.9) > 0 &&
        this.compare(this.vars.state26, 2) < 0
      ) {
        this.warp(this.addHurtbox)(0, 1, 9, 9);
        this.warp(this.addHurtbox)(0, -10, 11.5, 13);
      } else {
        if (
          this.compare(this.vars.state26, 2) === 0 ||
          this.compare(this.vars.state26, 2.1) === 0
        ) {
          this.warp(this.addHurtbox)(0, 1, 9, 9);
          this.warp(this.addHurtbox)(0, -10, 11.5, 13);
        } else {
          if (this.compare(this.vars.state26, 3) === 0) {
            this.warp(this.addHurtbox)(2, -6, 8, 9);
            this.warp(this.addHurtbox)(0, -10.5, 12, 12);
          } else {
            if (
              this.compare(this.vars.state26, 4) === 0 ||
              this.compare(this.vars.state26, 4.1) === 0
            ) {
              this.warp(this.addHurtbox)(0, 1, 9, 9);
              this.warp(this.addHurtbox)(0, -10, 11.5, 13);
            } else {
              if (this.compare(this.vars.state26, 5) === 0) {
                this.warp(this.addHurtbox)(0, 1, 9, 9);
                this.warp(this.addHurtbox)(1, -10, 11.5, 13);
              } else {
                if (this.compare(this.vars.state26, 6) === 0) {
                  this.warp(this.addHurtbox)(0, -1, 9, 9);
                  this.warp(this.addHurtbox)(0, -10, 12, 13);
                } else {
                  if (this.compare(this.vars.state26, 7) === 0) {
                    this.warp(this.addHurtbox)(-2, 1, 9, 9);
                    this.warp(this.addHurtbox)(0, -10, 12, 13);
                  } else {
                    if (this.compare(this.vars.state26, 8) === 0) {
                      this.warp(this.addHurtbox)(1, 0.5, 9, 9);
                      this.warp(this.addHurtbox)(0, -10, 12, 13);
                    } else {
                      if (this.compare(this.vars.state26, 9) === 0) {
                        this.warp(this.addHurtbox)(0, 1, 9, 9);
                        this.warp(this.addHurtbox)(0, -10, 11.5, 13);
                      } else {
                        if (this.compare(this.vars.state26, 10) === 0) {
                          this.warp(this.addHurtbox)(0, 1, 9, 9);
                          this.warp(this.addHurtbox)(0, -10, 11.5, 13);
                        } else {
                          if (this.compare(this.vars.state26, 11) === 0) {
                            this.warp(this.addHurtbox)(0, 1, 9, 9);
                            this.warp(this.addHurtbox)(0, -10, 11.5, 13);
                          } else {
                            if (this.compare(this.vars.state26, 12) === 0) {
                              this.warp(this.addHurtbox)(0, 1, 9, 9);
                              this.warp(this.addHurtbox)(0, -10, 11.5, 13);
                            } else {
                              if (this.compare(this.vars.state26, 13) === 0) {
                                this.warp(this.addHurtbox)(1.5, 3.5, 8, 8);
                                this.warp(this.addHurtbox)(3, -5, 8, 8);
                                this.warp(this.addHurtbox)(0, -8, 12, 16);
                              } else {
                                if (this.compare(this.vars.state26, 14) === 0) {
                                  this.warp(this.addHurtbox)(1, 0, 5, 7);
                                  this.warp(this.addHurtbox)(0, -4, 10, 8);
                                  this.warp(this.addHurtbox)(1.5, -12, 16, 8);
                                } else {
                                  if (
                                    this.compare(this.vars.state26, 15) === 0
                                  ) {
                                    this.warp(this.addHurtbox)(0, 1, 9, 9);
                                    this.warp(this.addHurtbox)(
                                      0,
                                      -10,
                                      11.5,
                                      13
                                    );
                                  } else {
                                    if (
                                      this.compare(this.vars.state26, 16) === 0
                                    ) {
                                      null;
                                    } else {
                                      if (
                                        this.compare(this.vars.state26, 18) ===
                                        0
                                      ) {
                                        this.warp(this.addHurtbox)(2, -2, 8, 8);
                                        this.warp(this.addHurtbox)(
                                          0,
                                          -10,
                                          12,
                                          12
                                        );
                                      } else {
                                        if (
                                          String(
                                            this.vars.state26 ?? ""
                                          ).includes(19)
                                        ) {
                                          if (
                                            this.compare(this.vars.frame29, 6) <
                                            0
                                          ) {
                                            0;
                                          } else {
                                            this.warp(this.addHurtbox)(
                                              8.5,
                                              -2,
                                              9,
                                              8
                                            );
                                            this.warp(this.addHurtbox)(
                                              2,
                                              -7,
                                              14,
                                              10
                                            );
                                            this.warp(this.addHurtbox)(
                                              -7,
                                              -10,
                                              12,
                                              9
                                            );
                                          }
                                        } else {
                                          if (
                                            this.compare(
                                              this.vars.state26,
                                              20
                                            ) === 0
                                          ) {
                                            if (
                                              this.compare(
                                                this.vars.frame29,
                                                5
                                              ) < 0
                                            ) {
                                              this.warp(this.addHurtbox)(
                                                2,
                                                -3,
                                                9,
                                                8
                                              );
                                              this.warp(this.addHurtbox)(
                                                0,
                                                -10,
                                                12,
                                                12
                                              );
                                            } else {
                                              if (
                                                this.compare(
                                                  this.stage.vars
                                                    .playerCharacter[
                                                    this.vars.p59 - 1
                                                  ],
                                                  "Blue"
                                                ) === 0
                                              ) {
                                                if (
                                                  this.compare(
                                                    this.vars.frame29,
                                                    7
                                                  ) > 0
                                                ) {
                                                  this.warp(this.addHurtbox)(
                                                    -1,
                                                    2,
                                                    8,
                                                    8
                                                  );
                                                  this.warp(this.addHurtbox)(
                                                    -3,
                                                    -6,
                                                    12,
                                                    16
                                                  );
                                                } else {
                                                  null;
                                                }
                                              }
                                              if (
                                                this.compare(
                                                  this.stage.vars
                                                    .playerCharacter[
                                                    this.vars.p59 - 1
                                                  ],
                                                  "Red"
                                                ) === 0 ||
                                                this.compare(
                                                  this.stage.vars
                                                    .playerCharacter[
                                                    this.vars.p59 - 1
                                                  ],
                                                  "Black"
                                                ) === 0 ||
                                                  this.compare(
                                                    this.stage.vars
                                                      .playerCharacter[
                                                      this.vars.p59 - 1
                                                    ],
                                                    "Green"
                                                  ) === 0
                                              ) {
                                                if (
                                                  this.compare(
                                                    this.vars.frame29,
                                                    9
                                                  ) > 0
                                                ) {
                                                  this.warp(this.addHurtbox)(
                                                    1,
                                                    0,
                                                    8,
                                                    8
                                                  );
                                                  this.warp(this.addHurtbox)(
                                                    0,
                                                    -10,
                                                    12,
                                                    12
                                                  );
                                                } else {
                                                  null;
                                                }
                                              }
                                            }
                                          } else {
                                            if (
                                              this.compare(
                                                this.vars.state26,
                                                21
                                              ) === 0
                                            ) {
                                              this.warp(this.addHurtbox)(
                                                4,
                                                -1,
                                                8,
                                                8
                                              );
                                              this.warp(this.addHurtbox)(
                                                0,
                                                -10,
                                                12,
                                                12
                                              );
                                            } else {
                                              if (
                                                this.compare(
                                                  this.vars.state26,
                                                  24
                                                ) === 0
                                              ) {
                                                if (
                                                  this.compare(
                                                    this.stage.vars
                                                      .playerHealth[
                                                      this.vars.p59 - 1
                                                    ],
                                                    0
                                                  ) > 0
                                                ) {
                                                  if (
                                                    this.compare(
                                                      this.vars.frame29,
                                                      16
                                                    ) > 0
                                                  ) {
                                                    this.warp(this.addHurtbox)(
                                                      2,
                                                      -12,
                                                      28,
                                                      8
                                                    );
                                                  }
                                                }
                                              } else {
                                                if (
                                                  this.compare(
                                                    this.vars.state26,
                                                    29
                                                  ) === 0
                                                ) {
                                                  if (
                                                    this.compare(
                                                      this.stage.vars
                                                        .playerCharacter[
                                                        this.vars.p59 - 1
                                                      ],
                                                      "Red"
                                                    ) === 0
                                                  ) {
                                                    if (
                                                      this.compare(
                                                        this.vars.frame29,
                                                        9
                                                      ) > 0 &&
                                                      this.compare(
                                                        this.vars.frame29,
                                                        13
                                                      ) < 0
                                                    ) {
                                                      this.warp(
                                                        this.addHurtbox
                                                      )(2, 0, 9, 8);
                                                      this.warp(
                                                        this.addHurtbox
                                                      )(0, -10, 12, 12);
                                                      this.warp(
                                                        this.addHurtbox
                                                      )(0, 0, 0, 0);
                                                      this.warp(
                                                        this.addHurtbox
                                                      )(12, -5, 18, 9);
                                                    } else {
                                                      this.warp(
                                                        this.addHurtbox
                                                      )(2, 0, 9, 8);
                                                      this.warp(
                                                        this.addHurtbox
                                                      )(0, -10, 12, 12);
                                                      this.warp(
                                                        this.addHurtbox
                                                      )(0, 0, 0, 0);
                                                    }
                                                  }
                                                  if (
                                                    this.compare(
                                                      this.stage.vars
                                                        .playerCharacter[
                                                        this.vars.p59 - 1
                                                      ],
                                                      "Blue"
                                                    ) === 0 ||
                                                    this.compare(
                                                      this.stage.vars
                                                        .playerCharacter[
                                                        this.vars.p59 - 1
                                                      ],
                                                      "Black"
                                                    ) === 0
                                                  ) {
                                                    this.warp(this.addHurtbox)(
                                                      2,
                                                      0,
                                                      9,
                                                      8
                                                    );
                                                    this.warp(this.addHurtbox)(
                                                      0,
                                                      -10,
                                                      12,
                                                      12
                                                    );
                                                  }
                                                } else {
                                                  if (
                                                    this.compare(
                                                      this.vars.state26,
                                                      25
                                                    ) === 0
                                                  ) {
                                                    if (
                                                      this.compare(
                                                        this.vars.frame29,
                                                        4
                                                      ) > 0
                                                    ) {
                                                      this.warp(
                                                        this.addHurtbox
                                                      )(2, -3, 9, 8);
                                                      this.warp(
                                                        this.addHurtbox
                                                      )(0, -10, 12, 12);
                                                    } else {
                                                      null;
                                                    }
                                                  } else {
                                                    if (
                                                      this.compare(
                                                        this.vars.state26,
                                                        30
                                                      ) === 0
                                                    ) {
                                                      this.warp(
                                                        this.addHurtbox
                                                      )(2, -3, 9, 8);
                                                      this.warp(
                                                        this.addHurtbox
                                                      )(0, -10, 12, 12);
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
      }
    }
  }

  *addHurtbox(x3, y3, xsize, ysize) {
    this.stage.vars.hurtboxX.push(this.vars.x35 + x3 * this.vars.direction28);
    this.vars.hurtboxY26.push(this.vars.y35 + y3);
    this.vars.hurtboxXSize26.push(xsize);
    this.vars.hurtboxYSize26.push(ysize);
    if (this.compare(this.stage.vars.hitboxes, 1) === 0) {
      this.penColor = Color.rgb(0, 33, 255);
      yield* this.drawRect(x3 * this.vars.direction28, y3, xsize, ysize);
    }
  }

  *drawRect(x4, y4, xsize3, ysize3) {
    this.penDown = false;
    this.goto(
      (this.vars.x35 + x4 + xsize3 / -2 - this.stage.vars.scrollX) * 4,
      (this.vars.y35 + y4 + ysize3 / 2) * 4
    );
    this.penDown = true;
    this.goto(
      (this.vars.x35 + x4 + xsize3 / -2 - this.stage.vars.scrollX) * 4,
      (this.vars.y35 + y4 + ysize3 / -2) * 4
    );
    this.goto(
      (this.vars.x35 + x4 + xsize3 / 2 - this.stage.vars.scrollX) * 4,
      (this.vars.y35 + y4 + ysize3 / -2) * 4
    );
    this.goto(
      (this.vars.x35 + x4 + xsize3 / 2 - this.stage.vars.scrollX) * 4,
      (this.vars.y35 + y4 + ysize3 / 2) * 4
    );
    this.goto(
      (this.vars.x35 + x4 + xsize3 / -2 - this.stage.vars.scrollX) * 4,
      (this.vars.y35 + y4 + ysize3 / 2) * 4
    );
    this.penDown = false;
  }

  *addHitbox(
    x5,
    y5,
    xsize4,
    ysize4,
    damage,
    xKnockback,
    yKnockback,
    hitstun,
    type
  ) {
    this.vars.hx26 = this.vars.x35 + x5 * this.vars.direction28;
    this.vars.hy26 = this.vars.y35 + y5;
    this.vars.hxKnockback3 = xKnockback;
    this.vars.hyKnockback3 = yKnockback;
    this.vars.hHitstun3 = hitstun;
    this.vars.hxSize26 = xsize4;
    this.vars.hySize26 = ysize4;
    this.vars.hDamage26 = damage;
    this.vars.hType = type;
    if (this.compare(this.stage.vars.hitboxes, 1) === 0) {
      this.penColor = Color.rgb(255, 0, 0);
      this.warp(this.drawRect)(x5 * this.vars.direction28, y5, xsize4, ysize4);
    }
  }

  *whenKeySpacePressed() {
    this.stage.vars.hitboxes = (this.stage.vars.hitboxes + 1) % 2;
  }

  *flinchTorso() {
    this.warp(this.stateUpdate)(8);
    if (this.compare(this.vars.frame29, 7) > 0) {
      this.warp(this.idle)();
    } else {
      this.warp(this.collision)();
      this.vars.commands12 = "";
    }
  }

  *blockHead() {
    this.warp(this.stateUpdate)(9);
    if (this.compare(this.vars.frame29, 5) > 0) {
      this.warp(this.idle)();
    } else {
      this.warp(this.friction)();
    }
  }

  *blockTorso() {
    this.warp(this.stateUpdate)(10);
    if (this.compare(this.vars.frame29, 4) > 0) {
      this.warp(this.idle)();
    } else {
      this.warp(this.friction)();
    }
  }

  *airPunch() {
    this.warp(this.stateUpdate)(11);
    this.vars.y35 += this.vars.ySpeed26;
    this.vars.ySpeed26 += -0.5;
    if (!(this.compare(this.vars.y35, 0) > 0)) {
      this.vars.ySpeed26 = 0;
      this.vars.y35 = 0;
      this.warp(this.land)();
    } else {
      if (this.compare(this.vars.frame29, 8) > 0) {
        this.warp(this.midair)();
      } else {
        if (this.toBoolean(this.vars.inputs26[1 - 1])) {
          this.vars.xSpeed26 += 2;
        }
        if (this.toBoolean(this.vars.inputs26[2 - 1])) {
          this.vars.xSpeed26 += -2;
        }
        this.warp(this.friction)();
        if (
          this.compare(
            this.stage.vars.playerCharacter[this.vars.p59 - 1],
            "Cyan"
          ) === 0
        ) {
          if (this.compare(this.vars.frame29, 4) === 0) {
            this.warp(this.addHitbox)(26, -14, 40, 16, 4, 0, 2, 8, "SH1");
          }
        } else {
          if (this.compare(this.vars.frame29, 4) === 0) {
            this.warp(this.addHitbox)(11, -10, 16, 6, 4, 0, 2, 8, "SH1");
          }
          if (
            this.compare(this.vars.frame29, 4) > 0 &&
            this.compare(this.vars.frame29, 8) < 0
          ) {
            this.warp(this.addHitbox)(11, -10, 16, 6, 1, 0, 1, 6, "SH1");
          }
        }
      }
    }
  }

  *changeDirection() {
    if (this.compare(this.stage.vars.OfPlayers, 2) === 0) {
      if (
        this.compare(
          this.vars.x35,
          this.stage.vars.playerX[(this.vars.p59 % 2) + 1 - 1]
        ) > 0
      ) {
        this.vars.direction28 = -1;
      }
      if (
        this.compare(
          this.stage.vars.playerX[(this.vars.p59 % 2) + 1 - 1],
          this.vars.x35
        ) > 0
      ) {
        this.vars.direction28 = 1;
      }
    }
  }

  *collision() {
    this.vars.x35 += this.vars.xSpeed26;
    if (this.compare(this.vars.x35, 120) > 0) {
      this.vars.x35 = 120;
      if (
        this.compare(this.vars.xSpeed26, 2.5) > 0 &&
        (this.compare(this.vars.state26, 7) === 0 ||
          this.compare(this.vars.state26, 8) === 0 ||
            this.compare(this.vars.state26, 15) === 0 ||
              String(this.vars.state26 ?? "").includes(19))
      ) {
        this.vars.xSpeed26 = this.vars.xSpeed26 * -0.5;
        this.vars.ySpeed26 += 3;
        this.vars.state26 = 19;
        this.vars.frame29 = 0 - Math.round(Math.abs(this.vars.xSpeed26) / 6);
        this.warp(this.rumble)(4);
      }
    }
    if (this.compare(this.vars.x35, -120) < 0) {
      this.vars.x35 = -120;
      if (
        this.compare(this.vars.xSpeed26, -2.5) < 0 &&
        (this.compare(this.vars.state26, 7) === 0 ||
          this.compare(this.vars.state26, 8) === 0 ||
            this.compare(this.vars.state26, 15) === 0 ||
              String(this.vars.state26 ?? "").includes(19))
      ) {
        this.vars.xSpeed26 = this.vars.xSpeed26 * -0.5;
        this.vars.ySpeed26 += 3;
        this.vars.state26 = 19;
        this.vars.frame29 = 0 - Math.round(Math.abs(this.vars.xSpeed26) / 6);
        this.warp(this.rumble)(4);
      }
    }
    this.vars.i28 = 1;
    for (let i = 0; i < this.stage.vars.OfPlayers; i++) {
      if (!(this.compare(this.vars.p59, this.vars.i28) === 0)) {
        if (
          this.compare(
            Math.abs(
              this.vars.x35 - this.stage.vars.playerX[this.vars.i28 - 1]
            ),
            10
          ) < 0 &&
          this.compare(this.vars.y35, 0) === 0 &&
            this.compare(this.stage.vars.playerY[this.vars.i28 - 1], 0) === 0
        ) {
          if (
            this.compare(
              this.vars.x35,
              this.stage.vars.playerX[this.vars.i28 - 1]
            ) > 0
          ) {
            this.vars.xSpeed26 = 2;
          } else {
            if (
              this.compare(
                this.vars.x35,
                this.stage.vars.playerX[this.vars.i28 - 1]
              ) < 0
            ) {
              this.vars.xSpeed26 = -2;
            } else {
              this.vars.xSpeed26 = (this.vars.p59 - 1.5) * 4;
            }
          }
        }
      }
      this.vars.i28 += 1;
    }
  }

  *lowKick() {
    this.warp(this.stateUpdate)(14);
    if (
      this.compare(
        this.stage.vars.playerCharacter[this.vars.p59 - 1],
        "Yellow"
      ) === 0
    ) {
      if (this.compare(this.vars.frame29, 15) > 0) {
        this.warp(this.idle)();
      } else {
        this.warp(this.friction)();
        if (this.compare(this.vars.frame29, 4) === 0) {
          this.warp(this.addHitbox)(12, -12, 16, 10, 2, -1, -2, 5, 0);
        }
        if (this.compare(this.vars.frame29, 8) === 0) {
          this.warp(this.addHitbox)(12, -12, 16, 10, 2, 0, -2, 5, 0);
        }
        if (this.compare(this.vars.frame29, 11) === 0) {
          this.warp(this.addHitbox)(12, -11, 16, 12, 4, 0, 3.5, 12, 0);
        }
      }
    } else {
      if (this.compare(this.vars.frame29, 18) > 0) {
        this.warp(this.idle)();
      } else {
        this.warp(this.friction)();
        if (
          this.compare(this.vars.frame29, 2) > 0 &&
          this.compare(this.vars.frame29, 5) < 0
        ) {
          if (
            this.compare(
              this.stage.vars.playerCharacter[this.vars.p59 - 1],
              "Black"
            ) === 0
          ) {
            this.warp(this.addHitbox)(12, 0, 16, 30, 6, 0, 2, 15, 0);
          } else {
            this.warp(this.addHitbox)(12, -12, 16, 10, 2, 0, -2, 7, 0);
          }
        }
        if (
          !(
            this.compare(
              this.stage.vars.playerCharacter[this.vars.p59 - 1],
              "Black"
            ) === 0 ||
            this.compare(
              this.stage.vars.playerCharacter[this.vars.p59 - 1],
              "Red"
            ) === 0 ||
              this.compare(
                this.stage.vars.playerCharacter[this.vars.p59 - 1],
                "Orange"
              ) === 0
          )
        ) {
          if (
            this.compare(this.vars.frame29, 8) > 0 &&
            this.compare(this.vars.frame29, 12) < 0
          ) {
            this.warp(this.addHitbox)(12, -12, 16, 10, 4, 0.5, 3.5, 15, 0);
          }
        }
        if (
          this.compare(
            this.stage.vars.playerCharacter[this.vars.p59 - 1],
            "Black"
          ) === 0
        ) {
          this.vars.y35 += this.vars.ySpeed26;
          this.vars.ySpeed26 += -0.5;
          if (!(this.compare(this.vars.y35, 0) > 0)) {
            this.vars.ySpeed26 = 0;
            this.vars.y35 = 0;
          }
        }
      }
    }
  }

  *autoFinisher() {
    this.warp(this.stateUpdate)(13);
    if (this.compare(this.vars.frame29, 15) > 0) {
      this.warp(this.idle)();
      this.vars.commands12 = "";
    } else {
      this.warp(this.friction)();
      if (
        this.compare(
          this.stage.vars.playerCharacter[this.vars.p59 - 1],
          "Orange"
        ) === 0
      ) {
        if (
          this.compare(this.vars.frame29, 4) > 0 &&
          this.compare(this.vars.frame29, 11) < 0
        ) {
          this.warp(this.addHitbox)(12, -12, 16, 10, 6, 4, 3.5, 9, 0);
        }
      } else {
        if (this.compare(this.vars.frame29, 5) === 0) {
          if (
            this.compare(
              this.stage.vars.playerCharacter[this.vars.p59 - 1],
              "Cyan"
            ) === 0
          ) {
            this.warp(this.addHitbox)(28, -8, 40, 16, 6, 6, 3, 16, 0);
          } else {
            this.warp(this.addHitbox)(12, -4, 20, 16, 6, 2, 3, 16, 0);
          }
        }
      }
    }
  }

  *airKick() {
    this.warp(this.stateUpdate)(12);
    this.vars.y35 += this.vars.ySpeed26;
    this.vars.ySpeed26 += -0.5;
    if (!(this.compare(this.vars.y35, 0) > 0)) {
      this.vars.ySpeed26 = 0;
      this.vars.y35 = 0;
      this.warp(this.land)();
    } else {
      if (this.compare(this.vars.frame29, 9) > 0) {
        this.warp(this.midair)();
      } else {
        if (this.toBoolean(this.vars.inputs26[1 - 1])) {
          this.vars.xSpeed26 += 2;
        }
        if (this.toBoolean(this.vars.inputs26[2 - 1])) {
          this.vars.xSpeed26 += -2;
        }
        this.warp(this.friction)();
        if (
          this.compare(
            this.stage.vars.playerCharacter[this.vars.p59 - 1],
            "Black"
          ) === 0
        ) {
          if (
            this.compare(this.vars.frame29, 3.5) > 0 &&
            this.compare(this.vars.frame29, 7) < 0
          ) {
            this.vars.xSpeed26 += this.vars.direction28 * 3;
            this.warp(this.addHitbox)(10, -6, 20, 12, 6, 4, 2.5, 12, "HighSH1");
            this.warp(this.collision)();
          }
        } else {
          if (
            this.compare(this.vars.frame29, 3) > 0 &&
            this.compare(this.vars.frame29, 7) < 0
          ) {
            if (
              this.compare(
                this.stage.vars.playerCharacter[this.vars.p59 - 1],
                "Yellow"
              ) === 0
            ) {
              this.warp(this.addHitbox)(
                10,
                -8,
                20,
                16,
                5,
                0.5,
                -1,
                9,
                "HighSH1"
              );
            } else {
              this.warp(this.addHitbox)(12, -4, 16, 10, 4, 0, 1, 9, "HighSH1");
            }
          }
        }
      }
    }
  }

  *hurtAir() {
    yield* this.stateUpdate(15);
    this.vars.y35 += this.vars.ySpeed26;
    this.vars.ySpeed26 += -0.5;
    if (!(this.compare(this.vars.y35, 0) > 0)) {
      if (this.compare(this.vars.ySpeed26, -5) < 0) {
        this.vars.ySpeed26 = 0;
        this.vars.y35 = 0;
        yield* this.death();
        this.vars.frame29 = 12;
      } else {
        this.vars.ySpeed26 = 0;
        this.vars.y35 = 0;
        yield* this.land();
      }
    } else {
      if (this.compare(this.vars.frame29, 10) > 0) {
        yield* this.midair();
      } else {
        yield* this.collision();
        if (this.toBoolean(this.vars.inputs26[1 - 1])) {
          this.vars.xSpeed26 += 0.065;
        }
        if (this.toBoolean(this.vars.inputs26[2 - 1])) {
          this.vars.xSpeed26 += -0.065;
        }
        this.vars.commands12 = "";
      }
    }
  }

  *rumble(rumble) {
    if (this.compare(Math.abs(this.stage.vars.rumbleX), rumble) < 0) {
      this.stage.vars.rumbleX = Math.round(rumble);
    }
    if (this.compare(Math.abs(this.stage.vars.rumbleY), rumble) < 0) {
      this.stage.vars.rumbleY = Math.round(rumble);
    }
  }

  *hadouken() {
    this.warp(this.stateUpdate)(16);
    if (this.compare(this.vars.frame29, 8) > 0) {
      this.warp(this.idle)();
    } else {
      this.warp(this.friction)();
      this.vars.commands12 = "";
      this.vars.y35 += this.vars.ySpeed26;
      this.vars.ySpeed26 += -0.5;
      if (!(this.compare(this.vars.y35, 0) > 0)) {
        this.vars.ySpeed26 = 0;
        this.vars.y35 = 0;
      }
      if (
        this.compare(this.vars.frame29, 4) === 0 &&
        this.compare(this.vars.impact19, 0) < 0
      ) {
        this.warp(this.projectile)(
          3.5,
          -6,
          1,
          this.stage.vars.playerProjectile[this.vars.p59 - 1],
          0
        );
      }
    }
  }

  *resetEffectQueue() {
    this.stage.vars.effectX = [];
    this.stage.vars.effectY = [];
    this.stage.vars.effectType = [];
    this.stage.vars.effectValue = [];
  }

  *addEffect(x6, y6, type2, value) {
    this.stage.vars.effectX.push(x6);
    this.stage.vars.effectY.push(y6);
    this.stage.vars.effectType.push(type2);
    this.stage.vars.effectValue.push(value);
    this.sprites["Effects"].createClone();
  }

  *inputs2() {
    this.stage.vars.currentInputs.splice(1 - 1, 1, this.keyPressed("d"));
    this.stage.vars.currentInputs.splice(2 - 1, 1, this.keyPressed("a"));
    this.stage.vars.currentInputs.splice(3 - 1, 1, this.keyPressed("w"));
    this.stage.vars.currentInputs.splice(4 - 1, 1, this.keyPressed("s"));
    this.stage.vars.currentInputs.splice(5 - 1, 1, this.keyPressed("f"));
    this.stage.vars.currentInputs.splice(6 - 1, 1, this.keyPressed("g"));
    this.stage.vars.currentInputs.splice(
      7 - 1,
      1,
      this.keyPressed("right arrow")
    );
    this.stage.vars.currentInputs.splice(
      8 - 1,
      1,
      this.keyPressed("left arrow")
    );
    this.stage.vars.currentInputs.splice(9 - 1, 1, this.keyPressed("up arrow"));
    this.stage.vars.currentInputs.splice(
      10 - 1,
      1,
      this.keyPressed("down arrow")
    );
    this.stage.vars.currentInputs.splice(
      11 - 1,
      1,
      this.keyPressed("" + "," + "")
    );
    this.stage.vars.currentInputs.splice(
      12 - 1,
      1,
      this.keyPressed("" + "." + "")
    );
  }

  *parry() {
    this.warp(this.stateUpdate)(17);
    if (this.compare(this.vars.frame29, 1) > 0) {
      this.warp(this.idle)();
    } else {
      this.warp(this.friction)();
    }
  }

  *commandInputs(p8) {
    if (this.compare(this.stage.vars.playerDirection[p8 - 1], 0) > 0) {
      this.vars.inputNames12.splice(1 - 1, 1, "r");
      this.vars.inputNames12.splice(2 - 1, 1, "l");
    } else {
      this.vars.inputNames12.splice(1 - 1, 1, "l");
      this.vars.inputNames12.splice(2 - 1, 1, "r");
    }
    this.vars.i28 = 1;
    for (let i = 0; i < this.vars.inputs26.length; i++) {
      if (this.toBoolean(this.vars.inputs26[this.vars.i28 - 1])) {
        if (
          this.compare(
            this.stage.vars.previousInputs[(p8 - 1) * 6 + this.vars.i28 - 1],
            "false"
          ) === 0
        ) {
          this.stage.vars.playerCommands.splice(
            p8 - 1,
            1,
            "" +
              this.stage.vars.playerCommands[p8 - 1] +
              this.vars.inputNames12[this.vars.i28 - 1]
          );
        }
      }
      this.vars.i28 += 1;
      yield;
    }
    if (this.compare(this.stage.vars.pauseMenu, 0) === 0) {
      if (String(this.stage.vars.playerCommands[p8 - 1] ?? "").includes("BS")) {
        if (this.compare(this.stage.vars.playerState[p8 - 1], 4) < 0) {
          yield* this.lastLettersOf(
            String(this.stage.vars.playerCommands[p8 - 1] ?? "").length - 2,
            this.stage.vars.playerCommands[p8 - 1]
          );
          this.stage.vars.playerCommands.splice(p8 - 1, 1, this.vars.command12);
        }
        yield* this.lastLettersOf(1, this.stage.vars.playerCommands[p8 - 1]);
        if (this.compare(this.vars.command12, "x") === 0) {
          if (
            this.compare(this.stage.vars.playerState[p8 - 1], 4) === 0 ||
            this.compare(this.stage.vars.playerState[p8 - 1], 4.1) === 0
          ) {
            this.stage.vars.playerState.splice(p8 - 1, 1, 5);
            this.stage.vars.playerFrame.splice(p8 - 1, 1, 0);
            this.stage.vars.playerCommands.splice(p8 - 1, 1, "");
          }
          if (
            this.compare(this.stage.vars.playerState[p8 - 1], 18) === 0 ||
            (this.compare(this.stage.vars.playerState[p8 - 1], 5) === 0 &&
              this.toBoolean(this.stage.vars.currentInputs[p8 * 6 - 2 - 1]))
          ) {
            this.stage.vars.playerState.splice(p8 - 1, 1, 14);
            this.stage.vars.playerFrame.splice(p8 - 1, 1, 0);
            this.stage.vars.playerCommands.splice(p8 - 1, 1, "");
          }
          yield* this.lastLettersOf(
            String(this.stage.vars.playerCommands[p8 - 1] ?? "").length - 2,
            this.stage.vars.playerCommands[p8 - 1]
          );
          this.stage.vars.playerCommands.splice(p8 - 1, 1, this.vars.command12);
        }
      }
      if (
        String(this.stage.vars.playerState[p8 - 1] ?? "").includes(19) &&
        this.compare(this.stage.vars.playerFrame[p8 - 1], 12) > 0
      ) {
        if (this.compare(this.stage.vars.playerHealth[p8 - 1], 0) > 0) {
          if (
            this.toBoolean(this.stage.vars.currentInputs[p8 * 6 - 3 - 1]) &&
            !this.toBoolean(this.stage.vars.previousInputs[p8 * 6 - 3 - 1])
          ) {
            yield* this.addEffect(
              this.stage.vars.playerX[p8 - 1],
              this.stage.vars.playerY[p8 - 1],
              7,
              p8
            );
            this.stage.vars.playerYSpeed.splice(p8 - 1, 1, 3);
            this.stage.vars.playerState.splice(p8 - 1, 1, 2);
            this.stage.vars.playerFrame.splice(p8 - 1, 1, 0);
          }
        }
      }
      yield* this.lastLettersOf(4, this.stage.vars.playerCommands[p8 - 1]);
      if (this.compare(this.vars.command12, "ldrx") === 0) {
        if (this.compare(this.stage.vars.playerEx[p8 - 1], 0.95) > 0) {
          this.stage.vars.playerEx.splice(
            p8 - 1,
            1,
            this.stage.vars.playerEx[this.vars.p59 - 1] - 1
          );
          this.stage.vars.playerState.splice(p8 - 1, 1, 26);
          this.stage.vars.playerFrame.splice(p8 - 1, 1, 0);
          this.stage.vars.playerCommands.splice(p8 - 1, 1, "");
        }
      }
      yield* this.lastLettersOf(4, this.stage.vars.playerCommands[p8 - 1]);
      if (this.compare(this.vars.command12, "ldrz") === 0) {
        if (this.compare(this.stage.vars.playerEx[p8 - 1], 0.95) > 0) {
          this.stage.vars.playerEx.splice(
            p8 - 1,
            1,
            this.stage.vars.playerEx[this.vars.p59 - 1] - 1
          );
          this.stage.vars.playerState.splice(p8 - 1, 1, 25);
          this.stage.vars.playerFrame.splice(p8 - 1, 1, 0);
          this.stage.vars.playerCommands.splice(p8 - 1, 1, "");
        }
      }
      yield* this.lastLettersOf(4, this.stage.vars.playerCommands[p8 - 1]);
      if (this.compare(this.vars.command12, "rdlz") === 0) {
        if (this.compare(this.stage.vars.playerEx[p8 - 1], 2.95) > 0) {
          this.stage.vars.playerState.splice(p8 - 1, 1, 27);
          this.stage.vars.playerFrame.splice(p8 - 1, 1, 0);
          this.stage.vars.playerCommands.splice(p8 - 1, 1, "");
        }
      }
      yield* this.lastLettersOf(4, this.stage.vars.playerCommands[p8 - 1]);
      if (this.compare(this.vars.command12, "rdlx") === 0) {
        if (this.compare(this.stage.vars.playerEx[p8 - 1], 2.95) > 0) {
          this.stage.vars.playerEx.splice(
            p8 - 1,
            1,
            this.stage.vars.playerEx[this.vars.p59 - 1] - 3
          );
          this.stage.vars.playerState.splice(p8 - 1, 1, 23);
          this.stage.vars.playerFrame.splice(p8 - 1, 1, 0);
          this.stage.vars.playerCommands.splice(p8 - 1, 1, "");
        }
      }
      yield* this.lastLettersOf(3, this.stage.vars.playerCommands[p8 - 1]);
      if (this.compare(this.vars.command12, "dlz") === 0) {
        if (
          this.compare(this.stage.vars.playerCharacter[p8 - 1], "Blue") === 0 ||
          this.compare(this.stage.vars.playerCharacter[p8 - 1], "Red") === 0
        ) {
          this.stage.vars.playerState.splice(p8 - 1, 1, 32);
          this.stage.vars.playerFrame.splice(p8 - 1, 1, 0);
          this.stage.vars.playerCommands.splice(p8 - 1, 1, "");
        }
      }
      yield* this.lastLettersOf(3, this.stage.vars.playerCommands[p8 - 1]);
      if (this.compare(this.vars.command12, "drz") === 0) {
        this.stage.vars.playerState.splice(p8 - 1, 1, 16);
        this.stage.vars.playerFrame.splice(p8 - 1, 1, 0);
      }
      yield* this.lastLettersOf(3, this.stage.vars.playerCommands[p8 - 1]);
      if (this.compare(this.vars.command12, "drx") === 0) {
        this.stage.vars.playerState.splice(p8 - 1, 1, 20);
        this.stage.vars.playerFrame.splice(p8 - 1, 1, 0);
      }
      yield* this.lastLettersOf(3, this.stage.vars.playerCommands[p8 - 1]);
      if (this.compare(this.vars.command12, "dlx") === 0) {
        if (this.compare(this.stage.vars.playerY[p8 - 1], 0) === 0) {
          if (this.compare(this.stage.vars.playerState[p8 - 1], 22) === 0) {
            this.stage.vars.playerCommands.splice(p8 - 1, 1, "");
          } else {
            this.stage.vars.playerState.splice(p8 - 1, 1, 21);
            this.stage.vars.playerFrame.splice(p8 - 1, 1, 0);
          }
        }
      }
      yield* this.lastLettersOf(8, this.stage.vars.playerCommands[p8 - 1]);
      if (
        this.compare(this.vars.command12, "uuddrlrl") === 0 ||
        this.compare(this.vars.command12, "uuddlrlr") === 0
      ) {
        this.stage.vars.playerHealth.splice(
          p8 - 1,
          1,
          this.stage.vars.healthMultiplier *
            this.stage.vars.characterHealth[
              this.stage.vars.characterOrder.indexOf(
                this.stage.vars.playerCharacter[this.vars.p59 - 1]
              ) +
                1 -
                1
            ]
        );
        this.stage.vars.playerEx.splice(p8 - 1, 1, 3);
      }
      if (
        this.compare(this.stage.vars.playerHealth[this.vars.p59 - 1], 0.1) < 0
      ) {
        if (
          !(
            this.stage.vars.playerState.includes(23) ||
            this.stage.vars.playerCommands.includes("Lvl3")
          )
        ) {
          if (this.compare(this.stage.vars.gameframe, 0) > 0) {
            this.vars.impact19 = 25;
            yield* this.addEffect(0, 0, 3, 1);
            yield* this.addEffect(
              this.stage.vars.playerX[p8 - 1],
              this.stage.vars.playerY[p8 - 1],
              "Normal3",
              6
            );
            yield* this.rumble(10);
            this.broadcast("K.O.");
            this.stage.vars.gameframe = -300;
          }
          if (
            !(
              this.compare(
                this.stage.vars.playerState[this.vars.p59 - 1],
                24
              ) === 0
            )
          ) {
            if (
              this.compare(this.stage.vars.playerY[this.vars.p59 - 1], 0) > 0 ||
              this.compare(
                this.stage.vars.playerYSpeed[this.vars.p59 - 1],
                0.5
              ) > 0
            ) {
              if (
                !(
                  this.compare(
                    this.stage.vars.playerState[this.vars.p59 - 1],
                    19.1
                  ) === 0
                )
              ) {
                this.stage.vars.playerFrame.splice(this.vars.p59 - 1, 1, 4);
                this.stage.vars.playerState.splice(this.vars.p59 - 1, 1, 19);
              }
            } else {
              this.stage.vars.playerFrame.splice(this.vars.p59 - 1, 1, 0);
              this.stage.vars.playerState.splice(this.vars.p59 - 1, 1, 24);
            }
          }
        } else {
          if (
            this.stage.vars.playerState.includes(23) &&
            this.compare(this.vars.impact19, 12) > 0
          ) {
            this.vars.impact19 = 12;
            yield* this.addEffect(0, 0, 3, 1);
            yield* this.addEffect(
              this.stage.vars.playerX[p8 - 1],
              this.stage.vars.playerY[p8 - 1],
              "Normal3",
              6
            );
            yield* this.rumble(15);
            this.broadcast("K.O.");
            this.stage.vars.gameframe = -200;
          }
        }
      }
      if (this.compare(this.stage.vars.playerEx[this.vars.p59 - 1], 3) > 0) {
        this.stage.vars.playerEx.splice(this.vars.p59 - 1, 1, 3);
      }
      yield* this.lastLettersOf(2, this.stage.vars.playerCommands[p8 - 1]);
      if (this.compare(this.vars.command12, "rr") === 0) {
        if (this.compare(this.stage.vars.playerState[p8 - 1], 2) === 0) {
          this.stage.vars.playerState.splice(p8 - 1, 1, 1.2);
          this.stage.vars.playerFrame.splice(p8 - 1, 1, 0);
          this.stage.vars.playerCommands.splice(p8 - 1, 1, "");
          yield* this.addEffect(
            this.stage.vars.playerX[p8 - 1],
            this.stage.vars.playerY[p8 - 1],
            15,
            p8
          );
          yield* this.startSound("Dash1");
        } else {
          if (
            this.compare(this.stage.vars.playerState[p8 - 1], 0) === 0 ||
            this.compare(this.stage.vars.playerState[p8 - 1], 1) === 0
          ) {
            this.stage.vars.playerState.splice(p8 - 1, 1, 1.1);
            this.stage.vars.playerFrame.splice(p8 - 1, 1, 0);
            this.stage.vars.playerCommands.splice(p8 - 1, 1, "");
            yield* this.addEffect(
              this.stage.vars.playerX[p8 - 1],
              this.stage.vars.playerY[p8 - 1],
              15,
              p8
            );
            yield* this.startSound("Dash4");
          }
        }
      }
      yield* this.lastLettersOf(2, this.stage.vars.playerCommands[p8 - 1]);
      if (this.compare(this.vars.command12, "ll") === 0) {
        if (
          this.compare(this.stage.vars.playerState[p8 - 1], 2) === 0 ||
          this.compare(this.stage.vars.playerState[p8 - 1], 0) === 0 ||
            this.compare(this.stage.vars.playerState[p8 - 1], 1) === 0
        ) {
          this.stage.vars.playerState.splice(p8 - 1, 1, 1.3);
          this.stage.vars.playerFrame.splice(p8 - 1, 1, 0);
          this.stage.vars.playerCommands.splice(p8 - 1, 1, "");
          yield* this.addEffect(
            this.stage.vars.playerX[p8 - 1],
            this.stage.vars.playerY[p8 - 1],
            15,
            p8
          );
          yield* this.startSound("Dash1");
        }
      }
    }
  }

  *lastLettersOf(letters, text) {
    this.vars.i28 = String(text ?? "").length;
    this.vars.command12 = "";
    for (let i = 0; i < letters; i++) {
      this.vars.command12 =
        "" +
        (String(text ?? "")[this.vars.i28 - 1] ?? "") +
        this.vars.command12;
      this.vars.i28 += -1;
    }
  }

  *saveInputs() {
    this.stage.vars.previousInputs = [];
    this.vars.i28 = 1;
    for (let i = 0; i < this.stage.vars.currentInputs.length; i++) {
      this.stage.vars.previousInputs.push(
        this.stage.vars.currentInputs[this.vars.i28 - 1]
      );
      this.vars.i28 += 1;
    }
  }

  *projectile(x7, y7, direction2, type3, frame2) {
    this.vars.i28 = this.stage.vars.projectileType.indexOf(0) + 1;
    if (this.compare(this.vars.i28, 0) > 0) {
      this.stage.vars.projectileX.splice(
        this.vars.i28 - 1,
        1,
        this.vars.x35 + x7 * (direction2 * this.vars.direction28)
      );
      this.stage.vars.projectileY.splice(
        this.vars.i28 - 1,
        1,
        this.vars.y35 + y7
      );
      this.stage.vars.projectileDirection.splice(
        this.vars.i28 - 1,
        1,
        direction2 * this.vars.direction28
      );
      this.stage.vars.projectileType.splice(this.vars.i28 - 1, 1, type3);
      this.stage.vars.projectileOwner.splice(
        this.vars.i28 - 1,
        1,
        this.vars.p59
      );
      this.stage.vars.projectileFrame.splice(this.vars.i28 - 1, 1, frame2);
    }
  }

  *inititiateProjectiles() {
    this.stage.vars.projectileX = [];
    this.stage.vars.projectileY = [];
    this.stage.vars.projectileDirection = [];
    this.stage.vars.projectileType = [];
    this.stage.vars.projectileOwner = [];
    this.stage.vars.projectileFrame = [];
    for (let i = 0; i < 10; i++) {
      this.stage.vars.projectileX.push(0);
      this.stage.vars.projectileY.push(0);
      this.stage.vars.projectileDirection.push(0);
      this.stage.vars.projectileType.push(0);
      this.stage.vars.projectileOwner.push(0);
      this.stage.vars.projectileFrame.push(0);
    }
  }

  *removeProjectile(projectile) {
    this.stage.vars.projectileX.splice(projectile - 1, 1, 0);
    this.stage.vars.projectileY.splice(projectile - 1, 1, 0);
    this.stage.vars.projectileType.splice(projectile - 1, 1, 0);
    this.stage.vars.projectileOwner.splice(projectile - 1, 1, 0);
    this.stage.vars.projectileDirection.splice(projectile - 1, 1, 0);
    this.stage.vars.projectileFrame.splice(projectile - 1, 1, 0);
    this.stage.vars.projectileHitboxX.splice(projectile - 1, 1, 0);
    this.stage.vars.projectileHitboxY.splice(projectile - 1, 1, 0);
  }

  *whenIReceiveGame() {
    /* TODO: Implement stop other scripts in sprite */ null;
    if (this.compare(this.stage.vars.introAnimations, 1) === 0) {
      this.broadcast("Intro");
    }
    this.stage.vars.winner = 0;
    this.stage.vars.OfPlayers = 2;
    this.stage.vars.gameframe = 0;
    this.stage.vars.rumbleX = 0;
    this.stage.vars.rumbleY = 0;
    this.vars.impact19 = 0;
    yield* this.inititiateProjectiles();
    yield* this.clone();
    while (true) {
      this.clearPen();
      yield* this.resetEffectQueue();
      yield* this.inputs2();
      this.stage.vars.newData = [];
      yield* this.playerticks();
      if (
        this.compare(this.vars.impact19, 1) < 0 ||
        this.compare(this.vars.impact19, "Intro") === 0
      ) {
        if (this.compare(this.stage.vars.pauseMenu, 0) === 0) {
          yield* this.updateData();
        }
      }
      yield* this.saveInputs();
      this.vars.impact19 += -1;
      this.stage.vars.scrollX =
        (this.stage.vars.playerX[1 - 1] + this.stage.vars.playerX[2 - 1]) / 2;
      if (this.compare(this.stage.vars.scrollX, 68) > 0) {
        this.stage.vars.scrollX = 68;
      }
      if (this.compare(this.stage.vars.scrollX, -68) < 0) {
        this.stage.vars.scrollX = -68;
      }
      if (this.compare(this.stage.vars.rumbleX, 0) > 0) {
        this.stage.vars.rumbleX = (this.stage.vars.rumbleX - 1) * -1;
      } else {
        if (this.compare(0, this.stage.vars.rumbleX) > 0) {
          this.stage.vars.rumbleX = (this.stage.vars.rumbleX - -1) * -1;
        } else {
          null;
        }
      }
      if (this.compare(this.stage.vars.rumbleY, 0) > 0) {
        this.stage.vars.rumbleY = (this.stage.vars.rumbleY - 1) * -1;
      } else {
        if (this.compare(0, this.stage.vars.rumbleY) > 0) {
          this.stage.vars.rumbleY = (this.stage.vars.rumbleY - -1) * -1;
        } else {
          null;
        }
      }
      this.stage.vars.gameframe += 1;
      yield;
    }
  }

  *lowPunch() {
    yield* this.stateUpdate(18);
    if (this.compare(this.vars.frame29, 6) > 0) {
      yield* this.idle();
    } else {
      yield* this.friction();
      if (this.compare(this.vars.frame29, 2) === 0) {
        yield* this.addHitbox(10, -12, 16, 6, 2, 1, 0, 6, 0);
      }
      if (this.compare(this.vars.frame29, 4) > 0) {
        if (
          this.compare(this.vars.impact19, -2) < 0 &&
          this.toBoolean(this.vars.inputs26[5 - 1]) &&
            this.toBoolean(this.vars.inputs26[4 - 1])
        ) {
          this.vars.frame29 = 0;
        }
      }
    }
  }

  *wallbouce() {
    yield* this.stateUpdate(19);
    if (this.compare(this.vars.frame29, 3) > 0) {
      this.vars.y35 += this.vars.ySpeed26;
      this.vars.ySpeed26 += -0.5;
      if (!(this.compare(this.vars.y35, 0) > 0)) {
        if (this.compare(this.vars.ySpeed26, -5) < 0) {
          this.vars.ySpeed26 = 0;
          this.vars.y35 = 0;
          yield* this.death();
          this.vars.frame29 = 12;
        } else {
          this.vars.ySpeed26 = 0;
          this.vars.y35 = 0;
          yield* this.land();
        }
      } else {
        yield* this.collision();
        if (this.toBoolean(this.vars.inputs26[1 - 1])) {
          this.vars.xSpeed26 += 0.075;
        }
        if (this.toBoolean(this.vars.inputs26[2 - 1])) {
          this.vars.xSpeed26 += -0.075;
        }
        this.vars.commands12 = "";
      }
    }
  }

  *specialInput(_) {
    yield* this.stateUpdate(19 + _);
    if (this.compare(this.vars.frame29, 50) > 0) {
      yield* this.idle();
    } else {
      yield* this.friction();
      this.vars.y35 += this.vars.ySpeed26;
      this.vars.ySpeed26 += -0.5;
      if (!(this.compare(this.vars.y35, 0) > 0)) {
        this.vars.ySpeed26 = 0;
        this.vars.y35 = 0;
      }
      if (this.compare(_, 1) === 0) {
        if (
          this.compare(
            this.stage.vars.playerCharacter[this.vars.p59 - 1],
            "Green"
          ) === 0
        ) {
          if (this.compare(this.vars.frame29, 16) === 0) {
            yield* this.addHitbox(14, -4, 24, 16, 8, 8, -2.5, 18, 0);
          }
          if (this.compare(this.vars.frame29, 1) === 0) {
            yield* this.projectile(
              -72,
              -10,
              -0.5,
              this.stage.vars.playerProjectile[this.vars.p59 - 1],
              32
            );
          }
          if (
            this.compare(this.vars.frame29, 3) > 0 &&
            this.compare(this.vars.frame29, 10) < 0
          ) {
            yield* this.addHitbox(8, -2, 16, 32, 4, 1, 4.5, 30, 0);
          }
        } else {
          if (
            this.compare(this.vars.frame29, 4) > 0 &&
            this.compare(this.vars.frame29, 10) < 0
          ) {
            if (
              this.compare(
                this.stage.vars.playerCharacter[this.vars.p59 - 1],
                "Red"
              ) === 0
            ) {
              yield* this.addHitbox(10, 2, 12, 32, 8, 9, 3, 10, "HighKD1SH1");
              this.vars.xSpeed26 += this.vars.direction28 * 4;
              this.vars.ySpeed26 += 0.5;
              yield* this.collision();
            } else {
              if (
                this.compare(
                  this.stage.vars.playerCharacter[this.vars.p59 - 1],
                  "Black"
                ) === 0
              ) {
                yield* this.addHitbox(10, -6, 24, 12, 8, 9, 3, 10, "KD1");
                this.vars.xSpeed26 += this.vars.direction28 * 7.5;
                yield* this.collision();
              } else {
                yield* this.addHitbox(8, -2, 16, 16, 4, 0, 0, 8, "SH1");
              }
            }
          }
          if (
            this.compare(
              this.stage.vars.playerCharacter[this.vars.p59 - 1],
              "Blue"
            ) === 0
          ) {
            if (this.compare(this.vars.frame29, 14) === 0) {
              yield* this.addHitbox(12, -4, 16, 10, 10, 4, 2, 10, 0);
            }
          }
        }
        this.vars.commands12 = "";
      } else {
        if (this.compare(_, 2) === 0) {
          if (
            this.compare(this.vars.frame29, 4) > 0 &&
            this.compare(this.vars.frame29, 10) < 0
          ) {
            yield* this.addHitbox(10, -4, 18, 8, 4, 0, 0, 8, 0);
          }
          if (this.compare(this.vars.frame29, 10) < 0) {
            this.vars.commands12 = "";
          }
        } else {
          if (
            this.compare(
              this.stage.vars.playerCharacter[this.vars.p59 - 1],
              "Blue"
            ) === 0
          ) {
            if (this.compare(this.vars.frame29, 23) === 0) {
              yield* this.addHitbox(-14, -10, 24, 16, 10, -5, -6, 15, "KD1");
              yield* this.addEffect(
                this.vars.x35 - this.vars.direction28 * 30,
                0,
                21,
                this.vars.p59
              );
            }
          }
          if (
            this.compare(
              this.stage.vars.playerCharacter[this.vars.p59 - 1],
              "Red"
            ) === 0
          ) {
            if (this.compare(this.vars.frame29, 22) === 0) {
              yield* this.rumble(5);
              yield* this.addEffect(
                this.vars.x35,
                this.vars.y35 + 10,
                8,
                this.vars.p59
              );
              yield* this.addEffect(
                this.vars.x35,
                this.vars.y35 + 10,
                16,
                this.vars.p59
              );
            }
          }
          if (
            this.compare(
              this.stage.vars.playerCharacter[this.vars.p59 - 1],
              "Yellow"
            ) === 0
          ) {
            if (this.compare(this.vars.frame29, 27) === 0) {
              if (this.toBoolean(this.vars.inputs26[6 - 1])) {
                this.vars.x35 += this.vars.direction28 * -75;
                this.vars.y35 += 30;
                yield* this.airKick();
              }
            }
          }
        }
      }
    }
  }

  *death() {
    yield* this.stateUpdate(24);
    this.vars.commands12 = "";
    yield* this.collision();
    this.vars.xSpeed26 = this.vars.xSpeed26 * 0.85;
    if (this.compare(this.vars.health26, 0.05) > 0) {
      if (this.compare(this.vars.frame29, 30) > 0) {
        if (this.toBoolean(this.vars.inputs26[6 - 1])) {
          yield* this.lowKick();
          this.vars.frame29 = -2;
        } else {
          if (this.toBoolean(this.vars.inputs26[5 - 1])) {
            yield* this.lowPunch();
          } else {
            if (this.toBoolean(this.vars.inputs26[3 - 1])) {
              yield* this.land();
            } else {
              if (this.toBoolean(this.vars.inputs26[1 - 1])) {
                this.vars.direction28 = -1;
                this.vars.xSpeed26 = 0;
                yield* this.dash(2);
              } else {
                if (this.toBoolean(this.vars.inputs26[2 - 1])) {
                  this.vars.direction28 = 1;
                  this.vars.xSpeed26 = 0;
                  yield* this.dash(2);
                }
              }
            }
          }
        }
      }
    } else {
      if (this.compare(this.vars.frame29, 24) > 0) {
        this.vars.impact19 = 1;
      }
    }
  }

  *superInput(_2) {
    yield* this.stateUpdate(24 + _2);
    if (this.compare(this.vars.frame29, 75) > 0) {
      yield* this.idle();
    } else {
      yield* this.friction();
      this.vars.commands12 = "";
      this.vars.y35 += this.vars.ySpeed26;
      this.vars.ySpeed26 += -0.5;
      if (!(this.compare(this.vars.y35, 0) > 0)) {
        this.vars.ySpeed26 = 0;
        this.vars.y35 = 0;
      }
      if (this.compare(this.vars.frame29, 2) < 0) {
        this.broadcast("freeze game");
        yield* this.addEffect(this.vars.x35, this.vars.y35, 7, this.vars.p59);
      }
      if (this.compare(_2, 1) === 0) {
        if (
          this.compare(
            this.stage.vars.playerCharacter[this.vars.p59 - 1],
            "Orange"
          ) === 0
        ) {
          if (
            this.compare(this.vars.frame29, 5) > 0 &&
            this.compare(this.vars.frame29, 21) < 0
          ) {
            if (this.compare(this.vars.frame29 % 2, 0) === 0) {
              yield* this.projectile(
                -6 + this.vars.frame29 * 6,
                -6,
                0.5,
                this.stage.vars.playerProjectile[this.vars.p59 - 1],
                0
              );
            }
          }
          if (this.compare(this.vars.frame29, 24) > 0) {
            yield* this.idle();
          }
        } else {
          if (
            this.compare(this.vars.frame29, 3) > 0 &&
            this.compare(this.vars.frame29, 10) < 0
          ) {
            if (
              this.compare(
                this.stage.vars.playerCharacter[this.vars.p59 - 1],
                "Red"
              ) === 0
            ) {
              yield* this.addHitbox(
                26,
                -8,
                40,
                18,
                10 +
                  (this.compare(
                    this.vars.health26 / this.stage.vars.characterHealth[2 - 1],
                    0.5
                  ) <
                    0) *
                    14,
                (this.compare(
                  this.vars.health26 / this.stage.vars.characterHealth[2 - 1],
                  0.5
                ) <
                  0) *
                  16,
                (this.compare(
                  this.vars.health26 / this.stage.vars.characterHealth[2 - 1],
                  0.5
                ) <
                  0) *
                  16,
                16,
                0
              );
            } else {
              if (this.compare(this.vars.impact19, 0) < 0) {
                yield* this.projectile(
                  4,
                  -6,
                  1.5,
                  this.stage.vars.playerProjectile[this.vars.p59 - 1],
                  0
                );
              }
            }
          }
          this.vars.commands12 = "";
          if (
            this.compare(
              this.stage.vars.playerCharacter[this.vars.p59 - 1],
              "Yellow"
            ) === 0
          ) {
            if (
              this.compare(this.vars.frame29, 3) === 0 &&
              this.toBoolean(this.vars.inputs26[5 - 1])
            ) {
              yield* this.extraCommandAttack();
            }
          }
          if (
            this.compare(
              this.stage.vars.playerCharacter[this.vars.p59 - 1],
              "Red"
            ) === 0
          ) {
            if (this.compare(this.vars.frame29, 20) > 0) {
              yield* this.idle();
            }
          } else {
            if (this.compare(this.vars.frame29, 28) > 0) {
              yield* this.idle();
            }
          }
        }
      } else {
        if (this.compare(_2, 2) === 0) {
          if (
            this.compare(
              this.stage.vars.playerCharacter[this.vars.p59 - 1],
              "Orange"
            ) === 0
          ) {
            if (
              this.compare(this.vars.frame29, 13) > 0 &&
              this.compare(this.vars.frame29, 16) < 0
            ) {
              yield* this.addHitbox(18, 0, 24, 12, 2, 5, -2, 8, 0);
            }
            if (
              this.compare(this.vars.frame29, 15) > 0 &&
              this.compare(this.vars.frame29, 39) < 0
            ) {
              yield* this.addHitbox(39, 0, 12, 14, 1, 0, 1, 5, 0);
            }
            if (
              this.compare(this.vars.frame29, 38) > 0 &&
              this.compare(this.vars.frame29, 42) < 0
            ) {
              yield* this.addHitbox(39, 0, 14, 17, 4, -3, 2.5, 10, 0);
            }
          } else {
            if (
              this.compare(
                this.stage.vars.playerCharacter[this.vars.p59 - 1],
                "Green"
              ) === 0
            ) {
              if (this.compare(this.vars.frame29, 14) === 0) {
                this.vars.ySpeed26 = 3;
              }
              if (
                this.compare(this.vars.frame29, 15) > 0 &&
                this.compare(this.vars.frame29, 41) < 0
              ) {
                yield* this.addHitbox(
                  4,
                  -6,
                  34,
                  16,
                  1,
                  4 +
                    this.vars.inputs26[1 - 1] * this.vars.direction28 -
                    this.vars.inputs26[2 - 1] * this.vars.direction28,
                  this.vars.ySpeed26 + 1,
                  5,
                  0
                );
                yield* this.projectile(
                  10,
                  -16,
                  -1.5,
                  this.stage.vars.playerProjectile[this.vars.p59 - 1],
                  40
                );
                this.vars.ySpeed26 += 0.325;
                this.vars.x35 += this.vars.direction28 * 4;
                if (this.toBoolean(this.vars.inputs26[1 - 1])) {
                  this.vars.x35 += 1.5;
                }
                if (this.toBoolean(this.vars.inputs26[2 - 1])) {
                  this.vars.x35 += -1.5;
                }
              }
              if (
                this.compare(this.vars.frame29, 40) > 0 &&
                this.compare(this.vars.frame29, 46) < 0
              ) {
                yield* this.addHitbox(4, -6, 40, 20, 6, 3, 3, 15, 0);
              }
            } else {
              if (
                this.compare(this.vars.frame29, 15) > 0 &&
                this.compare(this.vars.frame29, 19) < 0
              ) {
                if (
                  this.compare(
                    this.stage.vars.playerCharacter[this.vars.p59 - 1],
                    "Yellow"
                  ) === 0
                ) {
                  yield* this.addHitbox(5, -12, 80, 8, 14, 0, 7, 45, 0);
                } else {
                  yield* this.addHitbox(14, -4, 24, 16, 12, 2, -2, 15, 0);
                }
              }
              this.vars.commands12 = "";
            }
          }
        } else {
          null;
        }
      }
    }
  }

  *whenIReceiveFreezeGame() {
    this.vars.impact19 = 10;
  }

  *auto() {
    yield* this.stateUpdate(4.1);
    if (this.compare(this.vars.frame29, 10) > 0) {
      yield* this.idle();
      this.vars.commands12 = "";
    } else {
      yield* this.friction();
      if (this.compare(this.vars.frame29, 2) < 0) {
        this.vars.commands12 = "";
      }
      if (
        this.compare(this.vars.frame29, 1) > 0 &&
        this.compare(this.vars.frame29, 4) < 0
      ) {
        yield* this.addHitbox(10, -5, 16, 4, 2, 0, 2, 8, 0);
      }
      if (this.compare(this.vars.frame29, 3) > 0) {
        yield* this.lastLettersOf(
          1,
          this.stage.vars.playerCommands[this.vars.p59 - 1]
        );
        if (this.compare(this.vars.command12, "z") === 0) {
          this.vars.state26 = 13;
          this.vars.frame29 = 0;
        }
      }
    }
  }

  *blockCrouch() {
    yield* this.stateUpdate(28);
    if (this.compare(this.vars.frame29, 5) > 0) {
      yield* this.idle();
    } else {
      yield* this.friction();
    }
  }

  *airCommandAttack() {
    yield* this.stateUpdate(30);
    this.vars.y35 += this.vars.ySpeed26;
    this.vars.ySpeed26 += -0.5;
    if (!(this.compare(this.vars.y35, 0) > 0)) {
      this.vars.ySpeed26 = 0;
      this.vars.y35 = 0;
      yield* this.land();
    } else {
      if (this.compare(this.vars.frame29, 25) > 0) {
        yield* this.midair();
      } else {
        if (this.toBoolean(this.vars.inputs26[1 - 1])) {
          this.vars.xSpeed26 += 2;
        }
        if (this.toBoolean(this.vars.inputs26[2 - 1])) {
          this.vars.xSpeed26 += -2;
        }
        yield* this.friction();
        if (
          this.compare(this.vars.frame29, 10) > 0 &&
          this.compare(this.vars.frame29, 14) < 0
        ) {
          yield* this.addHitbox(10, -8, 24, 20, 8, 0, 1, 10, "SH1");
        }
        if (
          this.compare(
            this.stage.vars.playerCharacter[this.vars.p59 - 1],
            "Red"
          ) === 0 &&
          this.compare(this.vars.frame29, -3) < 0
        ) {
          if (this.compare(this.vars.frame29, -4) === 0) {
            yield* this.addHitbox(40, -20, 80, 64, 6, 4, 6, 20, "KD1");
            yield* this.addEffect(
              this.vars.x35 + this.vars.direction28 * 60,
              0,
              9,
              this.vars.p59
            );
            yield* this.rumble(20);
          } else {
            yield* this.rumble((15 + this.stage.vars.rumbleX * 3) / 4);
            yield* this.addEffect(
              this.vars.x35 + this.vars.direction28 * this.random(55, 63),
              0,
              16,
              this.vars.p59
            );
            yield* this.addHitbox(40, -20, 80, 64, 1, -0.5, 0, 5, "Low");
            this.vars.ySpeed26 = 0.1;
          }
        }
        if (this.compare(this.vars.frame29, 16) === 0) {
          if (String(this.vars.commands12 ?? "").includes("Lvl3")) {
            if (
              this.compare(
                this.stage.vars.playerCharacter[this.vars.p59 - 1],
                "Red"
              ) === 0
            ) {
              if (
                this.compare(
                  this.stage.vars.playerState[(this.vars.p59 % 2) + 1 - 1],
                  24
                ) === 0
              ) {
                this.stage.vars.cutsceneColor = this.stage.vars.playerColor[
                  this.vars.p59 - 1
                ];
                this.broadcast("Red Lvl3");
              }
            }
          }
        }
        if (this.compare(this.vars.frame29, 17) === 0) {
          if (String(this.vars.commands12 ?? "").includes("Lvl3")) {
            if (
              this.compare(
                this.stage.vars.playerCharacter[this.vars.p59 - 1],
                "Red"
              ) === 0
            ) {
              if (
                this.compare(
                  this.stage.vars.playerState[(this.vars.p59 % 2) + 1 - 1],
                  24
                ) === 0
              ) {
                this.vars.frame29 = -20;
              }
            }
          }
        }
      }
    }
  }

  *groundCommandAttack() {
    yield* this.stateUpdate(29);
    this.vars.y35 += this.vars.ySpeed26;
    this.vars.ySpeed26 += -0.5;
    if (!(this.compare(this.vars.y35, 0) > 0)) {
      this.vars.ySpeed26 = 0;
      this.vars.y35 = 0;
    }
    if (this.compare(this.vars.frame29, 25) > 0) {
      yield* this.idle();
    } else {
      yield* this.friction();
      if (
        this.compare(this.vars.frame29, 10) > 0 &&
        this.compare(this.vars.frame29, 14) < 0
      ) {
        if (
          this.compare(
            this.stage.vars.playerCharacter[this.vars.p59 - 1],
            "Blue"
          ) === 0
        ) {
          yield* this.addHitbox(6, -8, 12, 16, 3, 0, -5, 16, "SH1");
        } else {
          yield* this.addHitbox(12, -4, 24, 14, 8, 0, 0, 10, "SH1");
        }
      }
    }
  }

  *lvl3() {
    yield* this.stateUpdate(23);
    if (this.compare(this.vars.frame29, 75) > 0) {
      yield* this.idle();
    } else {
      yield* this.friction();
      this.vars.commands12 = "";
      this.vars.y35 += this.vars.ySpeed26;
      this.vars.ySpeed26 += -0.5;
      if (!(this.compare(this.vars.y35, 0) > 0)) {
        this.vars.ySpeed26 = 0;
        this.vars.y35 = 0;
      }
      if (this.compare(this.vars.frame29, 2) < 0) {
        this.broadcast("freeze game");
        yield* this.addEffect(this.vars.x35, this.vars.y35, 7, this.vars.p59);
      }
      if (
        this.compare(
          this.stage.vars.playerCharacter[this.vars.p59 - 1],
          "Orange"
        ) === 0
      ) {
        if (this.compare(this.vars.frame29, 33) === 0) {
          this.vars.health26 += -10;
          yield* this.projectile(6, 3, 1, 9, 0);
        }
      } else {
        if (
          this.compare(
            this.stage.vars.playerCharacter[this.vars.p59 - 1],
            "Red"
          ) === 0
        ) {
          if (this.compare(this.vars.frame29, 11) === 0) {
            yield* this.addEffect(
              this.vars.x35,
              this.vars.y35,
              9,
              this.vars.p59
            );
          }
          if (
            this.compare(this.vars.frame29, 10) > 0 &&
            this.compare(this.vars.frame29, 50) < 0
          ) {
            if (this.compare((this.vars.frame29 - 9) % 4, 2) === 0) {
              yield* this.addEffect(
                this.vars.x35,
                this.vars.y35,
                8,
                this.vars.p59
              );
              yield* this.addHitbox(16, -6, 20, 12, 2, 0, 0, 4, 0);
            }
          }
          if (
            this.compare(this.vars.frame29, 54) > 0 &&
            this.compare(this.vars.frame29, 60) < 0
          ) {
            yield* this.addHitbox(16, -2, 22, 32, 10, 0, 5, 10, "KD1");
          }
        } else {
          if (
            this.compare(
              this.stage.vars.playerCharacter[this.vars.p59 - 1],
              "Yellow"
            ) === 0
          ) {
            if (
              this.compare(this.vars.frame29, 7) > 0 &&
              this.compare(this.vars.frame29, 24) < 0
            ) {
              if (this.compare((this.vars.frame29 - 8) % 2, 0) === 0) {
                yield* this.addHitbox(12, -4, 24, 16, 2, 0, 1, 8, 0);
              }
            }
            if (
              this.compare(this.vars.frame29, 23) > 0 &&
              this.compare(this.vars.frame29, 26) < 0
            ) {
              yield* this.addHitbox(12, -2, 24, 16, 6, 3.5, 2.5, 8, 0);
            }
            if (
              this.compare(this.vars.frame29, 30) === 0 ||
              this.compare(this.vars.frame29, 36) === 0 ||
                this.compare(this.vars.frame29, 42) === 0
            ) {
              this.vars.direction28 = this.vars.direction28 * -1;
              this.vars.x35 =
                this.stage.vars.playerX[
                  this.stage.vars.playerState.indexOf(15) + 1 - 1
                ] +
                this.vars.direction28 * -20;
              this.vars.y35 =
                this.stage.vars.playerY[
                  this.stage.vars.playerState.indexOf(15) + 1 - 1
                ] + 6;
              this.vars.ySpeed26 = 0;
              if (this.compare(this.vars.frame29, 42) === 0) {
                this.vars.y35 += 6;
                this.vars.ySpeed26 = 2;
              }
            }
            if (
              this.compare(this.vars.frame29, 32) === 0 ||
              this.compare(this.vars.frame29, 38) === 0
            ) {
              yield* this.addHitbox(10, -8, 32, 18, 5, 5, 3, 8, 0);
            }
            if (this.compare(this.vars.frame29, 48) === 0) {
              yield* this.addHitbox(0, -12, 16, 25, 4, 6, -18, 2, 0);
              this.vars.ySpeed26 = -20;
            }
            if (this.compare(this.vars.frame29, 50) === 0) {
              yield* this.addEffect(this.vars.x35, 0, 12, this.vars.p59);
              this.vars.y35 = 0;
            }
            if (
              this.compare(this.vars.frame29, 63) === 0 ||
              this.compare(this.vars.frame29, 64) === 0
            ) {
              yield* this.addHitbox(8, -4, 48, 24, 18, 0, 1, 50, 0);
              this.vars.xSpeed26 = this.vars.direction28 * 32;
              yield* this.collision();
            }
            if (this.compare(this.vars.frame29, 66) === 0) {
              this.broadcast("freeze game");
            }
            if (this.compare(this.vars.frame29, 74) === 0) {
              yield* this.addEffect(
                this.stage.vars.playerX[
                  this.stage.vars.playerState.indexOf(7) + 1 - 1
                ],
                0,
                14,
                0
              );
              yield* this.rumble(10);
            }
          } else {
            if (
              this.compare(
                this.stage.vars.playerCharacter[this.vars.p59 - 1],
                "Blue"
              ) === 0
            ) {
              if (this.compare(this.vars.frame29, 4) === 0) {
                yield* this.addHitbox(18, -2, 24, 12, 1, -2, 2, 4, 0);
              }
              if (
                this.compare(this.vars.frame29, 6) > 0 &&
                this.compare(this.vars.frame29, 47) < 0
              ) {
                if (this.compare((this.vars.frame29 - 7) % 4, 1) === 0) {
                  if (this.compare(this.vars.impact19, 1) < 0) {
                    yield* this.projectile(-34, -6, -0.5, 3, 36);
                    yield* this.projectile(-34, -6, 0.5, 3, 36);
                  }
                  yield* this.addEffect(
                    this.vars.x35 + this.random(-4, 4),
                    this.vars.y35,
                    10,
                    this.vars.p59
                  );
                  yield* this.addEffect(
                    this.vars.x35,
                    this.vars.y35,
                    11,
                    this.vars.p59
                  );
                  yield* this.addHitbox(0, -2, 32, 24, 3, 1, 3, 4, 0);
                  this.vars.ySpeed26 = 2.5;
                }
              }
            } else {
              if (
                this.compare(
                  this.stage.vars.playerCharacter[this.vars.p59 - 1],
                  "Green"
                ) === 0
              ) {
                if (this.compare(this.vars.frame29, 4) === 0) {
                  yield* this.addHitbox(18, -2, 36, 16, 4, 0, 1, 11, "High");
                }
                if (this.compare(this.vars.frame29, 9) === 0) {
                  yield* this.addHitbox(17, -6, 38, 12, 4, 0, 0, 13, 0);
                }
                if (this.compare(this.vars.frame29, 14) === 0) {
                  yield* this.addHitbox(18, -6, 40, 16, 10, -1, 0, 24, 0);
                }
                if (this.compare(this.vars.frame29, 30) === 0) {
                  yield* this.addHitbox(18, -2, 36, 16, 6, 0, 1, 11, 0);
                }
                if (this.compare(this.vars.frame29, 34) === 0) {
                  yield* this.addHitbox(18, -2, 36, 16, 4, 0, 1, 11, 0);
                }
                if (
                  this.compare(this.vars.frame29, 34) > 0 &&
                  this.compare(this.vars.frame29, 48) < 0
                ) {
                  if (this.compare(this.vars.frame29 % 8, 7) === 0) {
                    yield* this.addHitbox(18, -2, 36, 16, 4, 0, 1, 8, "High");
                  }
                  if (this.compare(this.vars.frame29 % 8, 3) === 0) {
                    yield* this.addHitbox(18, -2, 36, 16, 4, 0, 1, 8, 0);
                  }
                }
                if (this.compare(this.vars.frame29, 52) === 0) {
                  yield* this.addHitbox(18, -2, 36, 16, 20, 20, 3, 18, 0);
                }
              } else {
                if (
                  this.compare(
                    this.stage.vars.playerCharacter[this.vars.p59 - 1],
                    "Black"
                  ) === 0
                ) {
                  if (this.compare(this.vars.frame29, 20) === 0) {
                    yield* this.addHitbox(24, -2, 46, 12, 8, 2, 2.5, 6, 0);
                  }
                  if (this.compare(this.vars.frame29, 31) === 0) {
                    yield* this.addHitbox(12, -2, 20, 12, 16, 10, 2, 20, 0);
                  }
                } else {
                  if (
                    this.compare(this.vars.frame29, 24) > 0 &&
                    this.compare(this.vars.frame29, 28) < 0
                  ) {
                    yield* this.addHitbox(16, -2, 24, 24, 36, 3, 2.5, 16, 0);
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  *launch() {
    yield* this.stateUpdate(19.1);
    this.vars.y35 += this.vars.ySpeed26;
    this.vars.ySpeed26 += -0.5;
    if (!(this.compare(this.vars.y35, 0) > 0)) {
      this.vars.ySpeed26 = 0;
      this.vars.y35 = 0;
      yield* this.death();
      this.vars.frame29 = 12;
    } else {
      yield* this.collision();
      this.vars.commands12 = "";
    }
  }

  *extraCommandAttack() {
    yield* this.stateUpdate(31);
    this.vars.y35 += this.vars.ySpeed26;
    this.vars.ySpeed26 += -0.5;
    if (!(this.compare(this.vars.y35, 0) > 0)) {
      this.vars.ySpeed26 = 0;
      this.vars.y35 = 0;
    }
    if (
      (this.compare(
        this.stage.vars.playerCharacter[this.vars.p59 - 1],
        "Yellow"
      ) === 0 &&
        this.compare(this.vars.frame29, 24) > 0) ||
      this.compare(this.vars.frame29, 30) > 0
    ) {
      yield* this.idle();
    } else {
      yield* this.friction();
      if (
        this.compare(
          this.stage.vars.playerCharacter[this.vars.p59 - 1],
          "Yellow"
        ) === 0
      ) {
        if (this.compare(this.vars.frame29, 7) === 0) {
          yield* this.addEffect(
            this.vars.x35 + this.vars.direction28 * 32,
            0,
            13,
            this.vars.p59
          );
        }
        if (
          this.compare(this.vars.frame29, 8) > 0 &&
          this.compare(this.vars.frame29, 19) < 0
        ) {
          yield* this.addHitbox(20, 6, 48, 40, 1, 0, 1.25, 4, "Low");
          yield* this.addEffect(
            this.vars.x35 + this.vars.direction28 * this.random(10, 48),
            0,
            "Normal3",
            5
          );
        }
        if (this.compare(this.vars.frame29, 20) === 0) {
          yield* this.addHitbox(20, 6, 48, 48, 16, 6, -2, 20, "KD1");
          yield* this.addEffect(
            this.vars.x35 + this.vars.direction28 * this.random(10, 48),
            0,
            "Normal3",
            10
          );
        }
      }
    }
  }

  *whenIReceiveBlackLvl3() {
    this.vars.impact19 = 65;
  }

  *run() {
    yield* this.stateUpdate(1.1);
    if (this.toBoolean(this.vars.inputs26[5 - 1])) {
      if (
        this.compare(
          this.stage.vars.playerCharacter[this.vars.p59 - 1],
          "Orange"
        ) === 0
      ) {
        yield* this.autoFinisher();
        this.vars.frame29 = 4;
      } else {
        yield* this.jab();
      }
    } else {
      if (this.toBoolean(this.vars.inputs26[6 - 1])) {
        yield* this.kick();
      } else {
        if (this.toBoolean(this.vars.inputs26[3 - 1])) {
          this.vars.ySpeed26 = 5;
          yield* this.midair();
          this.vars.frame29 = -1;
        } else {
          if (this.toBoolean(this.vars.inputs26[4 - 1])) {
            yield* this.crouch();
          } else {
            yield* this.changeDirection();
            if (
              !(
                this.toBoolean(this.vars.inputs26[1 - 1]) ||
                this.toBoolean(this.vars.inputs26[2 - 1])
              )
            ) {
              yield* this.idle();
            } else {
              if (this.toBoolean(this.vars.inputs26[1 - 1])) {
                this.vars.xSpeed26 += 2;
                if (!(this.compare(this.stage.vars.OfPlayers, 2) === 0)) {
                  this.vars.direction28 = 1;
                }
                if (this.compare(this.vars.direction28, 0) < 0) {
                  this.vars.frame29 += -2;
                }
              } else {
                this.vars.xSpeed26 += -2;
                if (!(this.compare(this.stage.vars.OfPlayers, 2) === 0)) {
                  this.vars.direction28 = -1;
                }
                if (this.compare(this.vars.direction28, 0) > 0) {
                  this.vars.frame29 += -2;
                }
              }
              yield* this.friction();
            }
          }
        }
      }
    }
  }

  *dash(_3) {
    yield* this.stateUpdate(Math.round((1.1 + _3 / 10) * 10) / 10);
    if (this.compare(this.vars.frame29, 4) > 0) {
      if (this.compare(this.vars.y35, 0) > 0) {
        yield* this.freefall();
      } else {
        yield* this.idle();
      }
    }
    this.vars.ySpeed26 = 0;
    this.vars.y35 += this.vars.ySpeed26;
    if (!(this.compare(this.vars.y35, 0) > 0) && this.compare(_3, 1) === 0) {
      this.vars.ySpeed26 = 0;
      this.vars.y35 = 0;
      if (this.toBoolean(this.vars.inputs26[4 - 1])) {
        yield* this.crouch();
      } else {
        yield* this.land();
      }
    } else {
      if (this.toBoolean(this.vars.inputs26[5 - 1])) {
        if (
          this.compare(
            this.stage.vars.playerCharacter[this.vars.p59 - 1],
            "Red"
          ) === 0
        ) {
          yield* this.airCommandAttack();
        } else {
          yield* this.airPunch();
        }
      } else {
        if (this.toBoolean(this.vars.inputs26[6 - 1])) {
          yield* this.airKick();
        } else {
          if (this.compare(_3, 1) === 0) {
            this.vars.xSpeed26 = this.vars.direction28 * 6;
          } else {
            this.vars.xSpeed26 = this.vars.direction28 * -6;
          }
          yield* this.friction();
          yield* this.collision();
        }
      }
    }
  }

  *freefall() {
    yield* this.stateUpdate(2.1);
    if (this.toBoolean(this.vars.inputs26[4 - 1])) {
      this.vars.ySpeed26 = -4;
    }
    this.vars.y35 += this.vars.ySpeed26;
    this.vars.ySpeed26 += -0.5;
    if (
      this.compare(
        this.stage.vars.playerCharacter[this.vars.p59 - 1],
        "Orange"
      ) === 0
    ) {
      yield* this.collision();
      if (this.toBoolean(this.vars.inputs26[3 - 1])) {
        this.vars.ySpeed26 += 0.4;
      }
    }
    if (!(this.compare(this.vars.y35, 0) > 0)) {
      this.vars.ySpeed26 = 0;
      this.vars.y35 = 0;
      if (this.toBoolean(this.vars.inputs26[4 - 1])) {
        yield* this.crouch();
      } else {
        yield* this.land();
      }
    } else {
      if (this.toBoolean(this.vars.inputs26[5 - 1])) {
        yield* this.airPunch();
      } else {
        if (this.toBoolean(this.vars.inputs26[6 - 1])) {
          yield* this.airKick();
        } else {
          if (this.toBoolean(this.vars.inputs26[1 - 1])) {
            this.vars.xSpeed26 += 2;
          }
          if (this.toBoolean(this.vars.inputs26[2 - 1])) {
            this.vars.xSpeed26 += -2;
          }
          this.vars.commands12 = 0;
          yield* this.friction();
        }
      }
    }
  }

  *backInput() {
    yield* this.stateUpdate(32);
    this.vars.y35 += this.vars.ySpeed26;
    this.vars.ySpeed26 += -0.5;
    if (!(this.compare(this.vars.y35, 0) > 0)) {
      this.vars.ySpeed26 = 0;
      this.vars.y35 = 0;
    }
    if (
      this.compare(
        this.stage.vars.playerCharacter[this.vars.p59 - 1],
        "Red"
      ) === 0 &&
      (this.compare(this.vars.frame29, 18) > 0 ||
        this.compare(this.vars.frame29, -1) === 0)
    ) {
      if (this.compare(this.vars.y35, 0) > 0) {
        yield* this.freefall();
      } else {
        yield* this.run();
      }
    } else {
      if (this.compare(this.vars.frame29, 30) > 0) {
        yield* this.idle();
      } else {
        if (
          this.compare(
            this.stage.vars.playerCharacter[this.vars.p59 - 1],
            "Red"
          ) === 0
        ) {
          if (
            (this.toBoolean(this.vars.inputs26[5 - 1]) ||
              this.toBoolean(this.vars.inputs26[6 - 1])) &&
            this.compare(this.vars.frame29, 8) > 0
          ) {
            this.vars.xSpeed26 = this.vars.direction28 * 6;
            this.vars.ySpeed26 = 2.5;
            this.vars.frame29 = -12;
            yield* this.addEffect(
              this.vars.x35,
              this.vars.y35,
              8,
              this.vars.p59
            );
            yield* this.addHitbox(-12, -10, 32, 15, 1, 16, 1.5, 5, 0);
          }
          if (
            this.compare(this.vars.frame29, -9) > 0 &&
            this.compare(this.vars.frame29, -6) < 0
          ) {
            yield* this.addHitbox(10, -8, 32, 12, 6, 3, 3, 10, 0);
            yield* this.friction();
          }
          if (this.compare(this.vars.frame29, 0) < 0) {
            yield* this.collision();
            this.vars.xSpeed26 =
              this.vars.direction28 * (5 + this.vars.frame29 / -2);
          }
          if (this.compare(this.vars.frame29, 5) === 0) {
            yield* this.addHitbox(8, -6, 12, 18, 2, -2, 1.5, 5, 0);
          }
          if (
            this.compare(this.vars.frame29, 5) > 0 &&
            this.compare(this.vars.frame29, 17) < 0
          ) {
            yield* this.collision();
            this.vars.xSpeed26 =
              this.vars.direction28 * (7 + this.vars.frame29 / 3);
            yield* this.addHitbox(-20, -10, 16, 8.5, 0.5, 11, 1.5, 3, 0);
            if (this.toBoolean(this.vars.inputs26[1 - 1])) {
              this.vars.xSpeed26 += 2;
            }
            if (this.toBoolean(this.vars.inputs26[2 - 1])) {
              this.vars.xSpeed26 += -2;
            }
            if (this.toBoolean(this.vars.inputs26[3 - 1])) {
              this.vars.ySpeed26 += 0.8;
            }
            if (this.toBoolean(this.vars.inputs26[4 - 1])) {
              this.vars.ySpeed26 += -0.5;
            }
          }
        } else {
          if (
            this.compare(
              this.stage.vars.playerCharacter[this.vars.p59 - 1],
              "Blue"
            ) === 0
          ) {
            if (this.compare(this.vars.frame29, 6) === 0) {
              if (this.stage.vars.projectileOwner.includes(this.vars.p59)) {
                yield* this.projectile(-3.5, -10, -2, 3, 36);
                yield* this.projectile(3.5, -10, 2, 3, 36);
                yield* this.rumble(4);
              } else {
                yield* this.addHitbox(4, -15, 24, 6, 8, 0, 5, 10, "L");
                yield* this.addEffect(
                  this.vars.x35 + this.vars.direction28 * 3,
                  -5,
                  21,
                  this.vars.p59
                );
                yield* this.projectile(3.5, -6, 1, 11, 0);
                yield* this.rumble(4);
              }
            }
            if (this.compare(this.vars.frame29, 12) > 0) {
              yield* this.idle();
            }
          } else {
            yield* this.friction();
          }
        }
      }
    }
  }

  *whenIReceiveCharset() {
    this.stage.vars.hitboxes = 0;
  }

  *whenIReceiveIntro() {
    for (let i = 0; i < 30; i++) {
      this.vars.impact19 = "Intro";
      while (!(this.compare(this.stage.vars.pauseMenu, 0) === 0)) {
        yield;
      }
      yield;
    }
    yield* this.addEffect(0, 0, "Prompt1", 0);
    for (let i = 0; i < 60; i++) {
      this.vars.impact19 = "Intro";
      while (!(this.compare(this.stage.vars.pauseMenu, 0) === 0)) {
        yield;
      }
      yield;
    }
    yield* this.addEffect(0, 0, "" + "Prompt" + this.random(2, 4), 0);
    this.vars.impact19 = 0;
  }

  *whenIReceiveRedLvl3() {
    this.vars.impact19 = 80;
  }

  *whenIReceiveGameEnd() {
    yield* this.wait(3);
    this.stage.vars.gameframe = -300;
    if (this.compare(this.stage.vars.playerHealth[1 - 1], 0) > 0) {
      this.broadcast("Win Screen");
      this.stage.vars.winner = 1;
      /* TODO: Implement stop other scripts in sprite */ null;
    } else {
      if (this.compare(this.stage.vars.playerHealth[2 - 1], 0) > 0) {
        this.broadcast("Win Screen");
        this.stage.vars.winner = 2;
        /* TODO: Implement stop other scripts in sprite */ null;
      } else {
        this.stage.vars.winner = 0;
        this.stage.vars.playerHealth.splice(1 - 1, 1, 1);
        this.stage.vars.playerHealth.splice(2 - 1, 1, 1);
        yield* this.addEffect(0, 0, "Prompt5", 0);
      }
    }
  }

  *hitSound(damage2) {
    if (this.compare(damage2, 16) > 0) {
      yield* this.startSound("Hit7");
    } else {
      yield* this.startSound("" + "Hit" + Math.ceil((damage2 + 0.5) / 2.5));
    }
  }

  *blockSound(damage3) {
    if (this.compare(damage3, 4) > 0) {
      yield* this.startSound("Block2");
    } else {
      yield* this.startSound("Block1");
    }
  }

  *whenIReceiveMainMenu() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}
