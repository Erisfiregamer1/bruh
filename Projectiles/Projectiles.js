import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@1.4.1/dist/index.esm.js";

export default class Projectiles extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume('"Magic"', "16cfbc77ff08a123ceacd10a177f9cd7.png", {
        x: 6,
        y: 6
      }),
      new Costume("Fire1", "893970bf4dc2b31ec5db28ae92aca422.png", {
        x: 6,
        y: 6
      }),
      new Costume("Water1", "e9daac5e43f9b0ef3d0d47e6db225d07.png", {
        x: 13,
        y: 5
      }),
      new Costume("Water2", "3849aa11f3e0146ce33dc853d9d75cc9.png", {
        x: 16,
        y: 5
      }),
      new Costume("Thunder", "255a1f6e165b24ce08772cdd8f6eeefd.png", {
        x: 29,
        y: 4
      }),
      new Costume("Thunder2", "3258ae1df8741f44fed3b300b8cf02b3.png", {
        x: 29,
        y: 3
      }),
      new Costume("Leaf", "06096056d8dbde841bde7debee9de245.png", {
        x: 12,
        y: 6
      }),
      new Costume("Wind", "3c82bebdb0823f9cd3fd600a9c6a76b3.svg", {
        x: 7.758439999999979,
        y: 5.778850000000006
      }),
      new Costume("Wind2", "1951f3cfacf4f2da2af3106881b4e584.svg", {
        x: 7.7584399999999505,
        y: 4.378850000000028
      }),
      new Costume("Wind3", "6e40817a0ef5fecfd9e256e8023a8658.svg", {
        x: 7.758440000000007,
        y: 3.078850000000017
      }),
      new Costume("Wind4", "56ddcc226c46a6d0e92fcd9855cd49a8.svg", {
        x: 7.758439999999979,
        y: 1.078850000000017
      }),
      new Costume("Data1", "e3750ea2dd9173f7c53bc6a494db0f6c.png", {
        x: 15,
        y: 18
      }),
      new Costume("Data2", "f8441985e43f9b46b18f74b12a24caae.png", {
        x: 15,
        y: 18
      }),
      new Costume("Data3", "98a87452f7d5ed3309e312ce0847b50b.png", {
        x: 18,
        y: 15
      }),
      new Costume("Data4", "194d7ea7030e8e1cbbb91877764b6aea.png", {
        x: 18,
        y: 15
      }),
      new Costume("Explosion1", "7a8bcb9238c9021901b3dd38e5059775.png", {
        x: 12,
        y: 12
      }),
      new Costume("Laser", "0480fc641d6442afddb70fb7092b2bd2.png", {
        x: 16,
        y: 2
      }),
      new Costume("Geyser", "3fafb35135bf307f34aef25b47e36ecd.svg", {
        x: 17.98491450602583,
        y: -6.971149999999994
      }),
      new Costume("Geyser2", "ddf070cce1fd3a3a90254c610a068c9f.svg", {
        x: 24.915403518077767,
        y: 17.778850000000006
      }),
      new Costume("Geyser3", "c78223b7ab87127bade74039a8a35980.svg", {
        x: 24.915407906088944,
        y: 51.40384999999998
      }),
      new Costume("Geyser4", "98c00ef9826efe3c71bf71909820127d.svg", {
        x: 44.040308878460934,
        y: 110.94530060687784
      }),
      new Costume("Geyser5", "43df7ad6c080cf953c7abc0a478f421a.svg", {
        x: 42.040308878460905,
        y: 110.94530460701567
      }),
      new Costume("Geyser6", "1f90fa8307ec863a08d5da6d57afe00e.svg", {
        x: 16.540308878460962,
        y: 110.9453086071535
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "game" }, this.whenIReceiveGame),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Main Menu" },
        this.whenIReceiveMainMenu
      )
    ];

    this.vars.id = 13;
    this.vars.x9 = 0;
    this.vars.y9 = 0;
    this.vars.frame4 = 0;
    this.vars.direction3 = 0;
  }

  *startAsClone() {
    this.effects.clear();
    while (true) {
      yield* this.tick();
      yield* this.display();
      yield;
    }
  }

  *clone() {
    this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
    this.visible = false;
    this.vars.id = 1;
    this.stage.vars.projectileHitboxY = [];
    this.stage.vars.projectileHitboxX = [];
    for (let i = 0; i < 12; i++) {
      this.createClone();
      this.vars.id += 1;
      this.stage.vars.projectileHitboxX.push("");
      this.stage.vars.projectileHitboxY.push("");
    }
  }

  *remove() {
    this.stage.vars.projectileX.splice(this.vars.id - 1, 1, 0);
    this.stage.vars.projectileY.splice(this.vars.id - 1, 1, 0);
    this.stage.vars.projectileDirection.splice(this.vars.id - 1, 1, 0);
    this.stage.vars.projectileFrame.splice(this.vars.id - 1, 1, 0);
    this.stage.vars.projectileOwner.splice(this.vars.id - 1, 1, 0);
    this.stage.vars.projectileType.splice(this.vars.id - 1, 1, 0);
    this.stage.vars.projectileHitboxX.splice(this.vars.id - 1, 1, "");
    this.stage.vars.projectileHitboxY.splice(this.vars.id - 1, 1, "");
    this.size = 800;
    this.effects.clear();
    this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
  }

  *tick() {
    if (this.compare(this.stage.vars.pauseMenu, 0) === 0) {
      if (
        this.compare(this.sprites["Logic"].vars.impact19, 1) < 0 &&
        !(this.compare(this.vars.id, 9) === 0)
      ) {
        this.vars.x9 = this.stage.vars.projectileX[this.vars.id - 1];
        this.vars.y9 = this.stage.vars.projectileY[this.vars.id - 1];
        this.vars.direction3 = this.stage.vars.projectileDirection[
          this.vars.id - 1
        ];
        this.vars.frame4 = this.stage.vars.projectileFrame[this.vars.id - 1];
        if (
          this.compare(this.stage.vars.projectileType[this.vars.id - 1], 1) ===
          0
        ) {
          this.vars.x9 += this.vars.direction3 * 4;
          this.vars.frame4 += 1;
          this.stage.vars.projectileHitboxX.splice(this.vars.id - 1, 1, 8);
          this.stage.vars.projectileHitboxY.splice(this.vars.id - 1, 1, 8);
          if (this.compare(this.vars.frame4, 30) > 0) {
            this.warp(this.remove)();
          }
        } else {
          if (
            this.compare(
              this.stage.vars.projectileType[this.vars.id - 1],
              2
            ) === 0
          ) {
            this.vars.x9 += this.vars.direction3 * 4;
            this.vars.frame4 += 1;
            this.stage.vars.projectileHitboxX.splice(this.vars.id - 1, 1, 8);
            this.stage.vars.projectileHitboxY.splice(this.vars.id - 1, 1, 8);
            if (this.compare(this.vars.frame4, 30) > 0) {
              this.warp(this.remove)();
            }
          } else {
            if (
              this.compare(
                this.stage.vars.projectileType[this.vars.id - 1],
                3
              ) === 0
            ) {
              this.vars.x9 += this.vars.direction3 * 3;
              this.vars.frame4 += 1;
              this.stage.vars.projectileHitboxX.splice(this.vars.id - 1, 1, 10);
              this.stage.vars.projectileHitboxY.splice(this.vars.id - 1, 1, 8);
              if (this.compare(this.vars.frame4, 45) > 0) {
                this.warp(this.remove)();
              }
            } else {
              if (
                this.compare(
                  this.stage.vars.projectileType[this.vars.id - 1],
                  4
                ) === 0
              ) {
                if (this.compare(this.vars.direction3, "D") === 0) {
                  this.vars.y9 += -16;
                  this.vars.frame4 += 1;
                  this.stage.vars.projectileHitboxX.splice(
                    this.vars.id - 1,
                    1,
                    8
                  );
                  this.stage.vars.projectileHitboxY.splice(
                    this.vars.id - 1,
                    1,
                    32
                  );
                  if (this.compare(this.vars.frame4, 9) > 0) {
                    this.stage.vars.projectileDirection.splice(
                      this.vars.id - 1,
                      1,
                      0
                    );
                  }
                } else {
                  this.vars.x9 += this.vars.direction3 * 16;
                  this.vars.frame4 += 1;
                  this.stage.vars.projectileHitboxX.splice(
                    this.vars.id - 1,
                    1,
                    20
                  );
                  this.stage.vars.projectileHitboxY.splice(
                    this.vars.id - 1,
                    1,
                    8
                  );
                }
                if (this.compare(this.vars.frame4, 10) > 0) {
                  this.stage.vars.projectileDirection.splice(
                    this.vars.id - 1,
                    1,
                    0
                  );
                  this.warp(this.remove)();
                }
              } else {
                if (
                  this.compare(
                    this.stage.vars.projectileType[this.vars.id - 1],
                    5
                  ) === 0
                ) {
                  this.vars.x9 += this.vars.direction3 * 4;
                  this.vars.y9 += this.vars.frame4 / 8 - 1;
                  this.vars.frame4 += 1;
                  this.stage.vars.projectileHitboxX.splice(
                    this.vars.id - 1,
                    1,
                    10
                  );
                  this.stage.vars.projectileHitboxY.splice(
                    this.vars.id - 1,
                    1,
                    8
                  );
                  if (this.compare(this.vars.frame4, 45) > 0) {
                    this.warp(this.remove)();
                  }
                } else {
                  if (
                    this.compare(
                      this.stage.vars.projectileType[this.vars.id - 1],
                      6
                    ) === 0
                  ) {
                    this.vars.x9 += this.vars.direction3 * 10;
                    this.vars.frame4 += 1;
                    this.stage.vars.projectileHitboxX.splice(
                      this.vars.id - 1,
                      1,
                      14
                    );
                    this.stage.vars.projectileHitboxY.splice(
                      this.vars.id - 1,
                      1,
                      12
                    );
                    if (this.compare(this.vars.frame4, 8) > 0) {
                      this.warp(this.remove)();
                    }
                  } else {
                    if (
                      this.compare(
                        this.stage.vars.projectileType[this.vars.id - 1],
                        7
                      ) === 0
                    ) {
                      this.vars.x9 += this.vars.direction3 * 5;
                      this.vars.frame4 += 1;
                      this.stage.vars.projectileHitboxX.splice(
                        this.vars.id - 1,
                        1,
                        10
                      );
                      this.stage.vars.projectileHitboxY.splice(
                        this.vars.id - 1,
                        1,
                        10
                      );
                      if (
                        !(
                          this.compare(
                            this.stage.vars.playerX[
                              this.stage.vars.playerState.indexOf(8) + 1 - 1
                            ],
                            ""
                          ) === 0
                        )
                      ) {
                        if (
                          !(
                            this.compare(
                              this.stage.vars.playerX[
                                this.stage.vars.playerState.indexOf(8) + 1 - 1
                              ],
                              ""
                            ) === 0
                          ) &&
                          this.compare(
                            Math.abs(
                              this.vars.x9 -
                                this.stage.vars.playerX[
                                  this.stage.vars.playerState.indexOf(8) + 1 - 1
                                ]
                            ),
                            30
                          ) < 0
                        ) {
                          this.stage.vars.playerX.splice(
                            this.stage.vars.projectileOwner[this.vars.id - 1] -
                              1,
                            1,
                            this.stage.vars.playerX[
                              this.stage.vars.playerState.indexOf(8) + 1 - 1
                            ] +
                              this.vars.direction3 * -20
                          );
                          this.warp(this.remove)();
                        }
                      }
                      if (this.compare(this.vars.frame4, 12) > 0) {
                        this.warp(this.remove)();
                      }
                    } else {
                      if (
                        this.compare(
                          this.stage.vars.projectileType[this.vars.id - 1],
                          8
                        ) === 0
                      ) {
                        if (this.compare(this.vars.frame4, 0) === 0) {
                          this.vars.x9 += this.vars.direction3 * 25;
                        }
                        this.vars.frame4 += 1;
                        this.stage.vars.projectileHitboxX.splice(
                          this.vars.id - 1,
                          1,
                          10 + this.vars.frame4 * 1.5
                        );
                        this.stage.vars.projectileHitboxY.splice(
                          this.vars.id - 1,
                          1,
                          10 + this.vars.frame4 * 1.5
                        );
                        if (this.compare(this.vars.frame4, 8) > 0) {
                          this.warp(this.remove)();
                        }
                      } else {
                        if (
                          this.compare(
                            this.stage.vars.projectileType[this.vars.id - 1],
                            9
                          ) === 0
                        ) {
                          this.vars.frame4 += 1;
                          this.stage.vars.projectileHitboxX.splice(
                            this.vars.id - 1,
                            1,
                            50 + this.vars.frame4 * 0.25
                          );
                          this.stage.vars.projectileHitboxY.splice(
                            this.vars.id - 1,
                            1,
                            50 + this.vars.frame4 * 0.25
                          );
                          if (this.compare(this.vars.frame4, 70) > 0) {
                            this.warp(this.remove)();
                          }
                        } else {
                          if (
                            this.compare(
                              this.stage.vars.projectileType[this.vars.id - 1],
                              10
                            ) === 0
                          ) {
                            if (this.compare(this.vars.frame4, 0) === 0) {
                              this.vars.y9 += 5;
                              this.vars.x9 += this.vars.direction3 * 5;
                            }
                            this.vars.x9 += this.vars.direction3 * 6;
                            this.vars.frame4 += 1;
                            this.stage.vars.projectileHitboxX.splice(
                              this.vars.id - 1,
                              1,
                              16
                            );
                            this.stage.vars.projectileHitboxY.splice(
                              this.vars.id - 1,
                              1,
                              3
                            );
                            if (this.compare(this.vars.frame4, 20) > 0) {
                              this.warp(this.remove)();
                            }
                          } else {
                            if (
                              this.compare(
                                this.stage.vars.projectileType[
                                  this.vars.id - 1
                                ],
                                11
                              ) === 0
                            ) {
                              if (this.compare(this.vars.frame4, 3) === 0) {
                                this.vars.frame4 = 2;
                                if (
                                  this.compare(
                                    Math.abs(
                                      this.stage.vars.playerX[
                                        (this.stage.vars.projectileOwner[
                                          this.vars.id - 1
                                        ] %
                                          2) +
                                          1 -
                                          1
                                      ] - this.vars.x9
                                    ),
                                    20
                                  ) < 0
                                ) {
                                  this.vars.frame4 = 3;
                                  this.vars.y9 += 5;
                                }
                              }
                              this.vars.frame4 += 1;
                              if (this.compare(this.vars.frame4, 4) > 0) {
                                this.stage.vars.projectileHitboxX.splice(
                                  this.vars.id - 1,
                                  1,
                                  30
                                );
                                this.stage.vars.projectileHitboxY.splice(
                                  this.vars.id - 1,
                                  1,
                                  80
                                );
                                if (this.compare(this.vars.frame4, 20) > 0) {
                                  this.warp(this.remove)();
                                }
                              } else {
                                this.stage.vars.projectileHitboxX.splice(
                                  this.vars.id - 1,
                                  1,
                                  0
                                );
                                this.stage.vars.projectileHitboxY.splice(
                                  this.vars.id - 1,
                                  1,
                                  0
                                );
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
        this.stage.vars.projectileX.splice(this.vars.id - 1, 1, this.vars.x9);
        this.stage.vars.projectileY.splice(this.vars.id - 1, 1, this.vars.y9);
        this.stage.vars.projectileDirection.splice(
          this.vars.id - 1,
          1,
          this.vars.direction3
        );
        this.stage.vars.projectileFrame.splice(
          this.vars.id - 1,
          1,
          this.vars.frame4
        );
        if (this.compare(this.stage.vars.hitboxes, 1) === 0) {
          this.penColor = Color.rgb(255, 195, 0);
          this.warp(this.drawRect)(
            0,
            0,
            this.stage.vars.projectileHitboxX[this.vars.id - 1],
            this.stage.vars.projectileHitboxY[this.vars.id - 1]
          );
        }
      }
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *display() {
    this.vars.frame4 = this.stage.vars.projectileFrame[this.vars.id - 1];
    this.goto(
      (this.stage.vars.projectileX[this.vars.id - 1] -
        this.stage.vars.scrollX) *
        4,
      this.stage.vars.projectileY[this.vars.id - 1] * 4
    );
    this.size = 800;
    this.effects.ghost = 0;
    this.effects.clear();
    this.visible = true;
    if (
      this.compare(this.stage.vars.projectileType[this.vars.id - 1], 1) === 0
    ) {
      this.effects.color = this.stage.vars.playerColor[
        this.stage.vars.projectileOwner[this.vars.id - 1] - 1
      ];
      this.costume = '"Magic"';
      this.direction = this.stage.vars.projectileDirection[this.vars.id - 1];
      if (this.compare(this.vars.frame4, 6) < 0) {
        this.effects.ghost = 100 - this.vars.frame4 * 20;
      }
      if (this.compare(this.vars.frame4, 25) > 0) {
        this.effects.ghost = (this.vars.frame4 - 25) * 20;
      }
    } else {
      if (
        this.compare(this.stage.vars.projectileType[this.vars.id - 1], 2) === 0
      ) {
        this.costume = "Fire1";
        this.direction = this.stage.vars.projectileDirection[this.vars.id - 1];
        if (this.compare(this.vars.frame4, 6) < 0) {
          this.effects.ghost = 100 - this.vars.frame4 * 20;
        }
        if (this.compare(this.vars.frame4, 25) > 0) {
          this.effects.ghost = (this.vars.frame4 - 25) * 20;
        }
      } else {
        if (
          this.compare(this.stage.vars.projectileType[this.vars.id - 1], 3) ===
          0
        ) {
          this.costume =
            "" + "Water" + ((Math.round(this.vars.frame4 / 2) % 2) + 1);
          this.direction = this.stage.vars.projectileDirection[
            this.vars.id - 1
          ];
          if (this.compare(this.vars.frame4, 6) < 0) {
            this.effects.ghost = 100 - this.vars.frame4 * 20;
          }
          if (this.compare(this.vars.frame4, 40) > 0) {
            this.effects.ghost = (this.vars.frame4 - 40) * 20;
          }
        } else {
          if (
            this.compare(
              this.stage.vars.projectileType[this.vars.id - 1],
              4
            ) === 0
          ) {
            this.costume = "" + "Thunder" + ((this.vars.frame4 % 2) + 1);
            if (this.compare(this.vars.direction3, "D") === 0) {
              this.direction = 180;
              this.rotationStyle = Sprite.RotationStyle.ALL_AROUND;
            } else {
              this.direction = this.stage.vars.projectileDirection[
                this.vars.id - 1
              ];
            }
            if (this.compare(this.vars.frame4, 5) < 0) {
              this.effects.ghost = 100 - this.vars.frame4 * 25;
            }
            if (this.compare(this.vars.frame4, 7) > 0) {
              this.effects.ghost = (this.vars.frame4 - 7) * 50;
            }
          } else {
            if (
              this.compare(
                this.stage.vars.projectileType[this.vars.id - 1],
                5
              ) === 0
            ) {
              this.costume = "Leaf";
              this.direction = this.stage.vars.projectileDirection[
                this.vars.id - 1
              ];
            } else {
              if (
                this.compare(
                  this.stage.vars.projectileType[this.vars.id - 1],
                  6
                ) === 0
              ) {
                this.effects.brightness = 80;
                this.effects.ghost = 30;
                this.costume = "" + "Wind" + (((this.vars.frame4 / 2) % 4) + 1);
                this.direction = this.stage.vars.projectileDirection[
                  this.vars.id - 1
                ];
              } else {
                if (
                  this.compare(
                    this.stage.vars.projectileType[this.vars.id - 1],
                    7
                  ) === 0
                ) {
                  this.size = 300 - this.vars.frame4 * 10;
                  this.costume = "" + "Data" + ((this.vars.frame4 % 4) + 1);
                  this.direction = this.stage.vars.projectileDirection[
                    this.vars.id - 1
                  ];
                  this.effects.ghost = (this.vars.frame4 * 5) % 101;
                } else {
                  if (
                    this.compare(
                      this.stage.vars.projectileType[this.vars.id - 1],
                      8
                    ) === 0
                  ) {
                    this.size = 400 + this.vars.frame4 * 50;
                    this.costume = "Explosion1";
                    this.effects.ghost = (this.vars.frame4 - 3) * 20;
                  } else {
                    if (
                      this.compare(
                        this.stage.vars.projectileType[this.vars.id - 1],
                        9
                      ) === 0
                    ) {
                      if (this.compare(this.vars.frame4, 4) < 0) {
                        this.size = 400 + this.vars.frame4 * 500;
                        this.costume = "Explosion1";
                      } else {
                        this.size = 2000 + this.vars.frame4 * 5;
                        this.costume = "Explosion1";
                        this.direction = this.stage.vars.projectileDirection[
                          this.vars.id - 1
                        ];
                        this.effects.ghost = (this.vars.frame4 - 10) * 1.5;
                        this.effects.brightness = (this.vars.frame4 - 10) * 1.5;
                      }
                    } else {
                      if (
                        this.compare(
                          this.stage.vars.projectileType[this.vars.id - 1],
                          10
                        ) === 0
                      ) {
                        this.size = 400;
                        this.effects.color = this.stage.vars.playerColor[
                          this.stage.vars.projectileOwner[this.vars.id - 1] - 1
                        ];
                        this.effects.brightness =
                          ((this.vars.frame4 % 4) * 3 +
                            2 -
                            this.vars.frame4 * 0.5) *
                          5;
                        this.effects.ghost =
                          ((this.vars.frame4 % 4) * 3 -
                            this.vars.frame4 * -0.5) *
                          5;
                        this.costume = "Laser";
                        this.direction = this.stage.vars.projectileDirection[
                          this.vars.id - 1
                        ];
                      } else {
                        if (
                          this.compare(
                            this.stage.vars.projectileType[this.vars.id - 1],
                            11
                          ) === 0
                        ) {
                          this.size = 400;
                          this.effects.color = this.stage.vars.playerColor[
                            this.stage.vars.projectileOwner[this.vars.id - 1] -
                              1
                          ];
                          this.direction = this.stage.vars.projectileDirection[
                            this.vars.id - 1
                          ];
                          if (this.compare(this.vars.frame4, 4) < 0) {
                            this.effects.ghost = 85;
                            this.costume = "Geyser";
                          } else {
                            this.effects.ghost = 0;
                            if (this.compare(this.vars.frame4, 6) < 0) {
                              this.costume =
                                "" + "Geyser" + (this.vars.frame4 - 1);
                            } else {
                              if (this.compare(this.vars.frame4, 19) < 0) {
                                this.costume =
                                  "" +
                                  "Geyser" +
                                  (((this.vars.frame4 / 2) % 2) + 4);
                              } else {
                                this.costume = "Geyser6";
                              }
                            }
                          }
                        } else {
                          this.visible = false;
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
    /* TODO: Implement stop other scripts in sprite */ null;
    yield* this.clone();
  }

  *drawRect(x10, y10, xsize5, ysize5) {
    this.penDown = false;
    this.goto(
      (this.vars.x9 + x10 + xsize5 / -2 - this.stage.vars.scrollX) * 4,
      (this.vars.y9 + y10 + ysize5 / 2) * 4
    );
    this.penDown = true;
    this.goto(
      (this.vars.x9 + x10 + xsize5 / -2 - this.stage.vars.scrollX) * 4,
      (this.vars.y9 + y10 + ysize5 / -2) * 4
    );
    this.goto(
      (this.vars.x9 + x10 + xsize5 / 2 - this.stage.vars.scrollX) * 4,
      (this.vars.y9 + y10 + ysize5 / -2) * 4
    );
    this.goto(
      (this.vars.x9 + x10 + xsize5 / 2 - this.stage.vars.scrollX) * 4,
      (this.vars.y9 + y10 + ysize5 / 2) * 4
    );
    this.goto(
      (this.vars.x9 + x10 + xsize5 / -2 - this.stage.vars.scrollX) * 4,
      (this.vars.y9 + y10 + ysize5 / 2) * 4
    );
    this.penDown = false;
  }

  *whenIReceiveMainMenu() {
    if (this.compare("", "") === 0) {
      this.deleteThisClone();
    }
  }
}
