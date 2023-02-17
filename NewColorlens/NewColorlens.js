import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@1.4.1/dist/index.esm.js";

export default class NewColorlens extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Green", "1970292d50ddbe01e24c78a57f6daf72.svg", {
        x: 53.517855,
        y: 28.27303785055784
      }),
      new Costume("Red", "cc813d2384168110b253f4e6cef2bac7.svg", {
        x: 51.60643244463222,
        y: 24.633901484729705
      }),
      new Costume("Blue", "baab1c5198f7d75f532b8edf85065ee6.svg", {
        x: 52.54584737803583,
        y: 47.18022847357145
      }),
      new Costume("Yellow", "052933eb71e476b53733dcc50518dac7.svg", {
        x: 57.454228419622154,
        y: 32.46781836438072
      }),
      new Costume("Orange", "53bb333f243c804cf5535b27f3ece3a4.svg", {
        x: 61.35663060026411,
        y: 61.5451905194509
      }),
      new Costume("Purple", "347274680c9329364a32aad04d165fac.svg", {
        x: 65.5218388558778,
        y: 34.90953067253949
      }),
      new Costume("Black", "3ddd61b309139681255df7d6757903f4.svg", {
        x: 51.79271103691195,
        y: 27.48050036911917
      }),
      new Costume("Gray", "54905a90b05e87e4f370942b13e3f5ee.svg", {
        x: 49.35892663749016,
        y: 52.124330055663634
      }),
      new Costume("White", "2bf1c09c268aa08bcd234d23de11a9fb.svg", {
        x: 49.999533387150706,
        y: 32.17126179116781
      }),
      new Costume("Crimson", "0491e15cf2ef0a9a475255257665f7e8.svg", {
        x: 56.3550213183793,
        y: 75.23169716769111
      }),
      new Costume("Rainbow", "79175e81fe654686dac347d5bbb1221b.png", {
        x: 108,
        y: 88
      }),
      new Costume("Rainbow 2.0", "92dd304d6b34457c249e730cbff70620.png", {
        x: 103,
        y: 49
      }),
      new Costume("Rainbow 2.2", "1a2ee0fcb8e4961630c21f5b88554bcd.svg", {
        x: 51.60643068330907,
        y: 24.63390000000001
      }),
      new Costume("Pink", "86340f4502f9cc490b7bc2c996b6e45c.svg", {
        x: 51.60642204992723,
        y: 32.57933754124278
      }),
      new Costume("Gold", "76bfa58dad5d0eeff9fb51a688984153.svg", {
        x: 51.6064308397726,
        y: 38.96863031843634
      }),
      new Costume("Silver", "d9e522280f57ead1cbd3a956436f5ba1.svg", {
        x: 51.60643788969983,
        y: 35.76270787940447
      }),
      new Costume("Bronze", "07b0531155d1e4a30e6fae225c42f56b.svg", {
        x: 51.60643136661815,
        y: 33.24912204309297
      }),
      new Costume("Cyan", "09d46c552d598a0995fb98606bac8dee.svg", {
        x: 28.955736839244366,
        y: 83.99576143626012
      })
    ];

    this.sounds = [];

    this.triggers = [];

    this.vars.p59 = 0;
    this.vars.state26 = 0;
    this.vars.x35 = 0;
    this.vars.y35 = 0;
    this.vars.direction28 = 0;
    this.vars.frame29 = 0;
    this.vars.xSpeed26 = 0;
    this.vars.ySpeed26 = 0;
    this.vars.i28 = 0;
    this.vars.length26 = 0;
    this.vars.part26 = 0;
    this.vars.p60 = 0;
    this.vars.touching26 = 0;
    this.vars.h26 = 0;
    this.vars.hx26 = 0;
    this.vars.hy26 = 0;
    this.vars.hxSize26 = 0;
    this.vars.hySize26 = 0;
    this.vars.health26 = 0;
    this.vars.hDamage26 = 0;
    this.vars.impact19 = 0;
    this.vars.commands12 = 0;
    this.vars.command12 = 0;
    this.vars.hyKnockback3 = 0;
    this.vars.hxKnockback3 = 0;
    this.vars.hHitstun3 = 0;
    this.vars.inputs26 = [];
    this.vars.hurtboxY26 = [];
    this.vars.hurtboxYSize26 = [];
    this.vars.hurtboxXSize26 = [];
    this.vars.inputNames12 = [];
  }
}
