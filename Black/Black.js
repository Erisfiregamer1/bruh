import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "/index.esm.js";

export default class Black extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("idle", "21f120f55eb0cf129b674e3425d70a5e.svg", {
        x: 36.725010000000026,
        y: 40.24976872446538
      }),
      new Costume("idle2", "e934751858fe541583bd7b9e1980ba2a.svg", {
        x: 35.85984574192801,
        y: 39.95992584823668
      }),
      new Costume("idle3", "343e3fc65d7627dbca93e51006e93f2e.svg", {
        x: 35.56984809090912,
        y: 39.38475669647346
      }),
      new Costume("idle4", "34f630bd619cb8530d8846e676bdcd61.svg", {
        x: 36.27764153887131,
        y: 39.09474904545445
      }),
      new Costume("idle5", "8027a4b53c121aa55b1e7e7ee15e8b8d.svg", {
        x: 38.032715720689424,
        y: 39.30365948863624
      }),
      new Costume("idle6", "28e9002bf090b16c8ecec76d17be1d07.svg", {
        x: 37.51390065579926,
        y: 40.24750999999998
      }),
      new Costume("WalkFront", "03c901f087cee25ed96f91de8b18d644.svg", {
        x: 36.73293712358344,
        y: 40.24976999999993
      }),
      new Costume("WalkFront2", "ad6f2694ace51de44a79a60c1b27f4ed.svg", {
        x: 36.732924999999994,
        y: 40.823509741807726
      }),
      new Costume("WalkFront3", "ac505402f99616d813964548de2ce324.svg", {
        x: 36.73290499999999,
        y: 41.110379612711625
      }),
      new Costume("WalkFront4", "ad09f828695f2e955cdc496e88404f88.svg", {
        x: 36.73287499999998,
        y: 40.82350974180781
      }),
      new Costume("WalkFront5", "79085e305e20f42ad101b00851ca4bbe.svg", {
        x: 36.73290499999999,
        y: 40.53663987090388
      }),
      new Costume("WalkFront6", "5f69b26cd87dfc5933ad7f4bee462c07.svg", {
        x: 36.732924999999994,
        y: 40.249769999999984
      }),
      new Costume("crouch2", "5ee3cba214035519d2f1ae1d46353b82.svg", {
        x: 34.417592431273306,
        y: 35.31017880853247
      }),
      new Costume("crouch", "c9c0d0ca496b3e9125b2706fe7632aa3.svg", {
        x: 23.02166288609638,
        y: 17.23275068894847
      }),
      new Costume("midair", "9d969ba4ec68912f693b3c49a772b880.svg", {
        x: 36.72501,
        y: 40.24977000000001
      }),
      new Costume("midair2", "d0a3a70817420715c922c2da901e5218.svg", {
        x: 31.29507923863639,
        y: 36.82034004545454
      }),
      new Costume("land", "8210f17bde2bb59a94ae3bbf09aae5f5.svg", {
        x: 35.7293719686258,
        y: 39.962009923712145
      }),
      new Costume("punch1", "345f5d27d5eea49e427dce3aa6a0da93.svg", {
        x: 22.90580945454542,
        y: 39.386069965909115
      }),
      new Costume("punch2", "552049da926a96f2e52bc158869f3cde.svg", {
        x: 25.957900000000052,
        y: 34.234689063967465
      }),
      new Costume("punch3", "bf3d153b79ebaa8c2a0dbe76e2e602f3.svg", {
        x: 25.957900000000137,
        y: 27.129027849945714
      }),
      new Costume("punch4", "f452ae674b81ee8df0f394bb8fc4ae6d.svg", {
        x: 25.95790000000025,
        y: 26.851840377563377
      }),
      new Costume("punch5", "d517016a777c9099590a9517210de573.svg", {
        x: 19.9120001818182,
        y: 37.3419701888638
      }),
      new Costume("punch6", "e6288e0b27479edf9ed03173d7d8132f.svg", {
        x: 30.391209749999973,
        y: 37.9465699090909
      }),
      new Costume("auto", "ab21e45e4e834e111d31d550209e259e.svg", {
        x: 25.957899999999995,
        y: 36.82578828268612
      }),
      new Costume("auto2", "7541ea7c0a16b39a77013f5a9b0d9353.svg", {
        x: 22.847518193038127,
        y: 46.07533355074915
      }),
      new Costume("auto3", "d61df29b0ce176e5131277ceeead546f.svg", {
        x: 20.256575163873634,
        y: 46.411822630830585
      }),
      new Costume("auto4", "02fb333445cdd2f651358d7efa81dfdf.svg", {
        x: 20.25656987248604,
        y: 46.41182208875222
      }),
      new Costume("auto5", "f8e15e5cf2c0a1ef61db66f139271f75.svg", {
        x: 26.719300883419095,
        y: 41.004483546145025
      }),
      new Costume("high kick1", "fcb89d36e2d9271dda004e26aef4e33c.svg", {
        x: 30.538838181818164,
        y: 36.53806690909079
      }),
      new Costume("high kick2", "75136b25887d120f8baa70f848fb1b3e.svg", {
        x: 25.585148620934234,
        y: 35.306992546086434
      }),
      new Costume("high kick4", "9234f48b6b828019f7ad3046db804d5f.svg", {
        x: 20.967204863636425,
        y: 33.76045151809208
      }),
      new Costume("high kick3", "449eccf3f90c714932fcf5966838e1c4.svg", {
        x: 21.999639363636334,
        y: 33.14183246660684
      }),
      new Costume("high kick5", "171c2acf4b7a9343e831923e69ffbeef.svg", {
        x: 23.13234731818187,
        y: 36.54422923631884
      }),
      new Costume("high kick6", "e6c9384d88a8692fa70110c75fbf5695.svg", {
        x: 31.15745536363633,
        y: 38.70322704545458
      }),
      new Costume("hurt head", "338889aed155bc3e4f5ac874064bc3ec.svg", {
        x: 29.773075579545463,
        y: 45.41751775518378
      }),
      new Costume("hurt head2", "bd3cfebd0406783c31291a523753df32.svg", {
        x: 32.62896520596016,
        y: 49.893269357356644
      }),
      new Costume("hurt torso", "09ae8b8014b7f2e157fb9973b9486928.svg", {
        x: 34.587785,
        y: 44.54939767444944
      }),
      new Costume("hurt torso2", "6aca3413e83ccd347dfca3d110adc54d.svg", {
        x: 34.58777499999999,
        y: 44.54939038239232
      }),
      new Costume("block torso", "51fe1b16c0a5c0cd4112963a3d05c1ce.svg", {
        x: 55.2489508127058,
        y: 35.81471427395394
      }),
      new Costume("block torso2", "aa91458ffe59636c7cc6df1bb77b98f3.svg", {
        x: 52.66794482954546,
        y: 36.67505476927383
      }),
      new Costume("block head", "dbdca32b3559e33ffbdfc69143360799.svg", {
        x: 40.16635022727269,
        y: 40.82332670454548
      }),
      new Costume("block head2", "31ad9ee081fe751965c01374cc15376b.svg", {
        x: 36.72501,
        y: 40.24977000000001
      }),
      new Costume("block crouch", "011d9ce69dc218ee9d0c6d6a23ec918f.svg", {
        x: 30.71369999999999,
        y: 18.093085000000002
      }),
      new Costume("air punch", "2944587dd4e4ef52f4343c8e60007f06.svg", {
        x: 51.373346272727275,
        y: 40.24977000000001
      }),
      new Costume("air punch2", "82aae2f5f3b2ef905f1a36bb78c1654f.svg", {
        x: 56.81389019028734,
        y: 39.92973751439999
      }),
      new Costume("air punch3", "54fe13b3ac69998a899e9351c71d2657.svg", {
        x: 50.331755312053815,
        y: 38.32957757200083
      }),
      new Costume("air punch4", "be96214b6e93958435277853165e575d.svg", {
        x: 24.56377554720669,
        y: 40.24976999999987
      }),
      new Costume("low kick", "16e1eb0cd2743fdad1f7f4abf109ffef.svg", {
        x: 36.89996521370256,
        y: 19.127190000000013
      }),
      new Costume("low kick2", "4a0c9919b89df22677aa71d0328b7b4b.svg", {
        x: 43.37505165270005,
        y: 16.737649215743716
      }),
      new Costume("low kick3", "0279772ed6af6c3198cf545441906b15.svg", {
        x: 45.498417984128736,
        y: 14.429949999999991
      }),
      new Costume("low kick4", "d8a84a4af4b72936a55c4f235f8c7b6c.svg", {
        x: 41.56770389868831,
        y: 45.218759489748265
      }),
      new Costume("low kick5", "394303ddc52cef34a550c677d414c84f.svg", {
        x: 57.133517895450154,
        y: 37.15639516201179
      }),
      new Costume("low kick6", "cb6c8f026536cc67410af01df4a354f4.svg", {
        x: 55.819101350564665,
        y: 34.23257191240472
      }),
      new Costume("low kick7", "2396a43f5af840e374651d8f9f3fc0cc.svg", {
        x: 36.80613966887134,
        y: 34.57522746972134
      }),
      new Costume("low kick8", "d87a84b5f715cef4cb8df2cbc912ca68.svg", {
        x: 35.366007689598774,
        y: 37.97516183667767
      }),
      new Costume("low kick9", "227272a13c435aa00e62733f5b67cde1.svg", {
        x: 34.356898750612515,
        y: 38.98225660700069
      }),
      new Costume("low kick10", "5495f5edff02fb72218fb83d5126bd78.svg", {
        x: 32.50083927272729,
        y: 36.82033999999999
      }),
      new Costume("low punch", "6246599c2a2c875f440b8bbf136245f8.svg", {
        x: 27.390327516976612,
        y: 17.23275000000001
      }),
      new Costume("low punch2", "eac496f9ce459c8c9822a7ae39c20fba.svg", {
        x: 24.143657516976617,
        y: 17.232749999999953
      }),
      new Costume("low punch3", "f391e3beb94f15c4cf9c2afb4046b9e3.svg", {
        x: 19.91199499999999,
        y: 17.23274999999998
      }),
      new Costume("low punch4", "041fd2429806a4b8ba7188049d0b3d0a.svg", {
        x: 19.91196499999998,
        y: 17.232749999999896
      }),
      new Costume("low punch5", "61df6d5fcb76557ea25ed0e04611cb0f.svg", {
        x: 19.91196500000001,
        y: 17.232749999999868
      }),
      new Costume("low punch6", "0e43024de91d1602b4ca96d9bea314ef.svg", {
        x: 23.02165500000001,
        y: 17.23274999999998
      }),
      new Costume("low punch7", "712f107d16713c511213bff25783df8f.svg", {
        x: 23.02165500000001,
        y: 17.23274999999998
      }),
      new Costume("hurt air", "fdfdbdf7d92cc0babcfee89e0cde5406.svg", {
        x: 33.97311500000001,
        y: 26.829704882053846
      }),
      new Costume("hurt air2", "1ed31ff95f1d16780134dadd9944ac5c.svg", {
        x: 29.7895683435583,
        y: 28.991679386503222
      }),
      new Costume("air kick", "9b0213d4df0d768a5b718dbc0447ed5f.svg", {
        x: 36.72500500000001,
        y: 40.24977000000001
      }),
      new Costume("air kick2", "cf67988c1162f7d4be0462ad72e93c7f.svg", {
        x: 43.89951866466055,
        y: 46.80942603346202
      }),
      new Costume("air kick3", "aeb5a3dc24d278dbddaca2c0b29629b0.svg", {
        x: 55.65889158540381,
        y: 38.50265116129415
      }),
      new Costume("air kick4", "28daf186edf127f079cfc68ebf42ac5d.svg", {
        x: 58.2364047944088,
        y: 33.28288254733559
      }),
      new Costume("air kick5", "c2d9a5693953f55ef0f06113b2a93996.svg", {
        x: 59.106615000000005,
        y: 33.323654031376805
      }),
      new Costume("air kick6", "3f5344f0e01f1a2e8ffea271c22add16.svg", {
        x: 56.21890571571447,
        y: 33.3236440313768
      }),
      new Costume("air kick7", "44b7c3d3874196348ff6492891caa633.svg", {
        x: 52.925052294477894,
        y: 35.48615999093232
      }),
      new Costume("lowpunch", "0b327c207c334ae92c931cbe77ec1c15.svg", {
        x: 22.32692277093787,
        y: 51.106505
      }),
      new Costume("lowpunch4", "2807e4dc2cec03179a0bd5bc97c504bc.svg", {
        x: 20.256569957495373,
        y: 51.47878499999999
      }),
      new Costume("lowpunch5", "1d6aac35d805d2b29d4990f61a99cad2.svg", {
        x: 20.256564957495385,
        y: 60.08763762125369
      }),
      new Costume("lowpunch6", "0c6547b92951d2bfcbc030f625ee0302.svg", {
        x: 27.055659738636365,
        y: 40.727974860579394
      }),
      new Costume("lowpunch2", "032eac997c2b53e3497d72df5816b8dd.svg", {
        x: 27.05566000000016,
        y: 23.870297616571293
      }),
      new Costume("lowpunch7", "a815b0da513831340b7021c35704f519.svg", {
        x: 27.055660000000046,
        y: 25.216601345580784
      }),
      new Costume("lowpunch8", "0187bac4b3afada4dc037276b4de6541.svg", {
        x: 21.78734,
        y: 37.34197288982875
      }),
      new Costume("parry", "7918c394b8a08704cadefb4d42c14573.svg", {
        x: 60.162842164772854,
        y: 67.42940214204543
      }),
      new Costume("hadouken", "0b6e2a3b68f6ea8d76f6602746f343af.svg", {
        x: 25.7031828117874,
        y: 38.1066369356254
      }),
      new Costume("charge", "7c297bf3ccf03c98d04f096156fd28f1.svg", {
        x: 25.397023133660724,
        y: 37.18814940098227
      }),
      new Costume("wallbounce", "9b308e94f25a988adda27237291ab114.svg", {
        x: 55.100344840293246,
        y: 24.24638110960865
      }),
      new Costume("The Spank", "eb70025264a1949bc6181b0b613b57aa.svg", {
        x: 35.893053762560726,
        y: 37.716481483577866
      }),
      new Costume("The Spank2", "6359d6715221c65b202567d28d750afc.svg", {
        x: 36.68146748704069,
        y: 37.716482836758985
      }),
      new Costume("The Spank3", "4420732953da0cd3180c89426c7011b2.svg", {
        x: 46.62809020342135,
        y: 30.390571380409654
      }),
      new Costume("The Spank4", "f2d86f427069caafc90d398dfb0bbfb6.svg", {
        x: 46.628089999999986,
        y: 30.390574472603134
      }),
      new Costume("The Spank5", "46c9a248d1d629719acae0bce1ab277f.svg", {
        x: 34.887204107473565,
        y: 34.5954460701534
      }),
      new Costume("The Spank6", "adb21a565756db291ab52116fefec20a.svg", {
        x: 28.31527680489944,
        y: 39.46135751295918
      }),
      new Costume("The Spank_Hit", "a2c2f6da628cb8f67075c56ed7652ad0.svg", {
        x: 25.95790000000008,
        y: 13.473163259885496
      }),
      new Costume("The Spank_Hit2", "ab3a855586747f008d00c9a5b44e67a5.svg", {
        x: 25.957900000000024,
        y: 15.738501612631126
      }),
      new Costume("The Spank_Hit3", "1ac32dea824475225731c968af3b48b5.svg", {
        x: 25.957899999999995,
        y: 14.938949082750781
      }),
      new Costume("Plant Plummet10", "5abd3c95a916bea9d4ff47902bbe859d.svg", {
        x: 45.46784017670777,
        y: 63.41641685520986
      }),
      new Costume("Grab", "db0595c337dc0725a0190588aa265dc6.svg", {
        x: 36.72501,
        y: 40.249769999999984
      }),
      new Costume("Grab2", "328dd5d2c2d2d839cd0448c679df47f3.svg", {
        x: 29.74187065325296,
        y: 41.09751077419955
      }),
      new Costume("Grab3", "5d696ac15858b9b45cab860f73d35280.svg", {
        x: 19.912000000000006,
        y: 37.23705887842817
      }),
      new Costume("Grab4", "2b9b34e58985b52c844a29a3c7c94edc.svg", {
        x: 19.912000000000006,
        y: 36.593650555738975
      }),
      new Costume("Grab5", "a72e58503953913680062374cd5ddd49.svg", {
        x: 26.43047454545453,
        y: 40.03530051136369
      }),
      new Costume("Throw", "cc0b1ed4e267a9f42ada554cad47451e.svg", {
        x: 21.57958501490438,
        y: 41.53412175041427
      }),
      new Costume("Throw2", "ce4905d6f864060ed8a84d38195a6b94.svg", {
        x: 28.228139147727234,
        y: 44.32222642835379
      }),
      new Costume("Throw3", "739834e4c61e52d6d42c81c1f1773f72.svg", {
        x: 29.943895909090884,
        y: 44.75116225181807
      }),
      new Costume("Throw4", "73beecf6f444341eb461bfd0e7611a6b.svg", {
        x: 29.943894999999998,
        y: 44.75115827454533
      }),
      new Costume("Throw5", "35704ca3aeb067ccc319cdd788c922a7.svg", {
        x: 29.943894999999998,
        y: 90.58528436009645
      }),
      new Costume("Throw6", "5bf00327212e76db64d9e96a776aa823.svg", {
        x: 29.94387499999999,
        y: 85.438015
      }),
      new Costume("Throw7", "28f88b749185ea72b1b766440f62f6e3.svg", {
        x: 26.430475,
        y: 40.03530000000001
      }),
      new Costume("Die", "e1c5cabbc8256009daaa4cf035012b49.svg", {
        x: 36.72501,
        y: 40.24977000000001
      }),
      new Costume("Die2", "89a8fff1293bb922aee4170181e092c3.svg", {
        x: 28.12165943181816,
        y: 35.948094715909036
      }),
      new Costume("Die3", "9965dc5f3849f73a9eba8742a1f84e10.svg", {
        x: 43.61666145077362,
        y: -7.570146382553986
      }),
      new Costume("Die4", "024d7c6ce31c98010ae5767652fe5682.svg", {
        x: 45.58610670678985,
        y: -9.971018395689981
      }),
      new Costume("Elemental Hammer", "7282d4be615ff8165ca780791c4a03a0.svg", {
        x: 36.68258584090907,
        y: 32.113560589519494
      }),
      new Costume("Elemental Hammer2", "6cb1d10b9336db6249482fb5c8f99255.svg", {
        x: 36.68255499999998,
        y: 25.31730672024881
      }),
      new Costume("Elemental Hammer3", "1ab8fb4075daec3dadfabe9bcefbe594.svg", {
        x: 41.40462107483714,
        y: 25.87857423083088
      }),
      new Costume("Elemental Hammer4", "d60a74d7ecfc51ea084c3154062526bf.svg", {
        x: 50.66981414710531,
        y: 25.30324905052575
      }),
      new Costume("Elemental Hammer5", "7db5eb65024328035cd9082eec2e53ff.svg", {
        x: 51.69289209473945,
        y: 25.59091184598026
      }),
      new Costume("Elemental Hammer6", "d5780e1b33a26acb1e898eaffffaa3e3.svg", {
        x: 37.72450802739934,
        y: 22.990302272727234
      }),
      new Costume("Elemental Hammer7", "ed3a3e5fa8c7d3e0d516f13e2c446206.svg", {
        x: 30.382540549445707,
        y: 43.63475863446712
      }),
      new Costume("Elemental Hammer8", "c10e24a688f003a6b92c3f260a1eea0b.svg", {
        x: 21.81224273987246,
        y: 99.22547058274044
      }),
      new Costume("Elemental Hammer9", "58a71abc3c280653d7f57bedc4aae3c0.svg", {
        x: 21.812245479744973,
        y: 98.35199870492092
      }),
      new Costume(
        "Elemental Hammer10",
        "19bc35ef67696d7348029b40ee209c84.svg",
        { x: 21.812245479744973, y: 99.66248928951369 }
      ),
      new Costume(
        "Elemental Hammer11",
        "37309b8cfa6385be8bce037a838d92b1.svg",
        { x: 27.8220148044023, y: 46.54988604548569 }
      ),
      new Costume("Hyper Visor", "fb68fbcbdc25a9e4feb50dd883ee28ec.svg", {
        x: 29.10793915719094,
        y: 28.264791607147203
      }),
      new Costume("Hyper Visor2", "e6712b74d58de4e1b9db8cd2ac130d5c.svg", {
        x: 28.9070789887393,
        y: 21.994901698189068
      }),
      new Costume("Hyper Visor3", "f5c22ecd482bd90bf96ea99d5233a8cd.svg", {
        x: 28.907080000000008,
        y: 21.99490000000003
      }),
      new Costume("Hyper Visor4", "f383be8fd76b781abdebc2c39ce4f362.svg", {
        x: 59.307950000000005,
        y: 62.145309999999995
      }),
      new Costume("Hyper Visor5", "b2acc0bf9acf0b3d5cd9fe79046340ec.svg", {
        x: 63.584284999999994,
        y: 63.584284999999994
      }),
      new Costume("Hyper Visor6", "2c90be5b435f19f309fd44d7bcc86559.svg", {
        x: 63.584270808984485,
        y: 63.584265
      }),
      new Costume("Hyper Visor7", "9c2d9a1d9134c8b6611775f730e3599b.svg", {
        x: 63.58422999999999,
        y: 63.584235000000135
      }),
      new Costume("Hyper Visor8", "77ea36e599c2bd58d43d6dd90634f03b.svg", {
        x: 63.58422999999999,
        y: 63.58422500000003
      }),
      new Costume("Hyper Visor9", "29c9cb771b277e011bad788d98580f2b.svg", {
        x: 63.58422999999999,
        y: 63.58420500000001
      }),
      new Costume("Hyper Visor10", "df15ceea8974a1f51a0a3514c8310e8a.svg", {
        x: 63.58422999999999,
        y: 63.584185000000005
      }),
      new Costume("Hyper Visor11", "b549a257379c209feab2147592fc3a55.svg", {
        x: 63.58422999999999,
        y: 63.58420500000001
      }),
      new Costume("Hyper Visor12", "dcd44224e539b66a699eab2fcde23f0b.svg", {
        x: 63.58422999999999,
        y: 66.56419062897275
      }),
      new Costume("Hyper Visor13", "3e532c3346a99e13ef49b40b148bb8b7.svg", {
        x: 63.58422999999999,
        y: 63.58419500000001
      }),
      new Costume("Hyper Visor14", "f8e5dd3c84ac8db6cd08a5856053c23f.svg", {
        x: 63.58422999999999,
        y: 63.584175
      }),
      new Costume("Hyper Visor15", "e76274ef57fe268c6ee2611a09a607f3.svg", {
        x: 53.05929997777977,
        y: 63.58414500000002
      }),
      new Costume("Hyper Visor16", "84ed8e102bd046141601b016a6efde59.svg", {
        x: 57.77262864805542,
        y: 63.58414500000016
      }),
      new Costume("Hyper Visor17", "6934e0af47030140fa9a08506da4967e.svg", {
        x: 37.542508145834745,
        y: 40.249769999999955
      }),
      new Costume("Launch_1", "16dc611e2c7e605ea47e46b308c4d5a5.svg", {
        x: 36.75176588884199,
        y: 48.15520140933032
      }),
      new Costume("Launch_2", "92a26297baf1d775e44baf6f814dd96c.svg", {
        x: 47.135852501996396,
        y: 43.01371853938767
      }),
      new Costume("Launch_3", "307692918e83c35b82f005a7653128c0.svg", {
        x: 59.703580689416384,
        y: 15.627032550823088
      }),
      new Costume("Launch_4", "7cf7ee1a0b85237d9a9e1757a5e8a1ff.svg", {
        x: 46.96669913950967,
        y: 47.8493399714508
      }),
      new Costume("Launch_5", "7c9caf3c4fde83bff9f67dc2d766662b.svg", {
        x: 33.982135,
        y: 52.8537356021472
      }),
      new Costume("Blackhand", "36f8b1da10ddcdba3bd8cf27c6b6edbe.svg", {
        x: 26.82713509090911,
        y: 40.249769999999984
      }),
      new Costume("Blackhand2", "a05a1b68fdcca73d070d67732e06965b.svg", {
        x: 27.961012170974612,
        y: 42.265434262155566
      }),
      new Costume("Blackhand3", "d399812df0bedf819c9847d700b7a531.svg", {
        x: 41.36464000000001,
        y: 40.24977000000001
      }),
      new Costume("Blackhand4", "87128365cdfd886b20e69f98f864bd46.svg", {
        x: 33.05813132589395,
        y: 36.22875831818186
      }),
      new Costume("Blackhand5", "769dbcf47d3c24f15d74a61f16a41e56.svg", {
        x: 34.29535547661152,
        y: 35.91944972727279
      }),
      new Costume("Blackhand6", "af7f3762086ea450cb368f3cf320d992.svg", {
        x: 29.92022099999997,
        y: 39.01253563636368
      }),
      new Costume("Intro_1", "3219a879f45622d11f8ac0d047340454.svg", {
        x: 90.4508784615933,
        y: 39.41518844318185
      }),
      new Costume("Intro_2", "9bb126381f2500e633e27b74c07a56ad.svg", {
        x: 62.909688625000086,
        y: 39.415189999999996
      }),
      new Costume("Intro_3", "dc1a36e6fa8b43f5b7fcfd0e277ab063.svg", {
        x: 40.899064145023715,
        y: 79.46537
      }),
      new Costume("Intro_4", "02771722ae8566bcb958bc27e5daa08e.svg", {
        x: 40.89906829004741,
        y: 79.4653692957808
      }),
      new Costume("Intro_5", "58b22c80812110e44e5949e8d773cee3.svg", {
        x: 36.05009277091648,
        y: 56.06238999999999
      }),
      new Costume("Intro_6", "d6c303ddea3cdf71bee67c11404b3e83.svg", {
        x: 35.6313009569962,
        y: 39.415189999999996
      }),
      new Costume("Intro_7", "a394ec8d96be2591784fe68c7acfbcdc.svg", {
        x: 36.52890841780811,
        y: 39.415189999999996
      }),
      new Costume("Intro_8", "c60ef9b37600e234c8d52452bc356337.svg", {
        x: 35.66743291780813,
        y: 39.570241689290214
      }),
      new Costume("Intro_9", "4596fd6ed00f9c9135ab56f78dc4654f.svg", {
        x: 34.23164041780811,
        y: 39.570251473225454
      }),
      new Costume("Intro_10", "11263f9d3f96971f1fff75edc3a700c7.svg", {
        x: 34.23164041780814,
        y: 39.4151916892902
      }),
      new Costume("Intro_11", "236c8d620a3fedfa24931af6d7359848.svg", {
        x: 36.15069299999999,
        y: 39.675452999999976
      }),
      new Costume("Slam1", "5749f353a0497fe75d5acf443b5d6dd7.svg", {
        x: 28.629864188265458,
        y: 35.02741254225563
      }),
      new Costume("Slam2", "7a382bb4b50928eb95e5b51e3f4394d1.svg", {
        x: 28.629864188265458,
        y: 33.71339173052121
      }),
      new Costume("Slam3", "95df795f00855cb55239ea80d55a85b9.svg", {
        x: 28.629864188265458,
        y: 32.92497751802583
      }),
      new Costume("Slam4", "1fe87ec7f08ac27e0cef1ac1c70094bf.svg", {
        x: 48.94863377289042,
        y: 50.31742042773038
      }),
      new Costume("Run_1", "13f018883fd42f742dda64c679d1456e.svg", {
        x: 48.90908455963458,
        y: 32.58160938558899
      }),
      new Costume("Run_2", "9e53777f9d21f384eed8bdeef97a69d3.svg", {
        x: 49.8391232095951,
        y: 31.58198118276931
      }),
      new Costume("Run_3", "b2787e421f58849517c77b652128dc2f.svg", {
        x: 45.241209302178106,
        y: 31.955037927354113
      }),
      new Costume("Run_4", "7f3f27770afd512e59488fd5326150a4.svg", {
        x: 24.823695380111815,
        y: 28.268269999999973
      }),
      new Costume("Run_5", "a807598d9a1392681f89974a07a846f3.svg", {
        x: 33.231004052585774,
        y: 29.94567992319844
      }),
      new Costume("Backdash", "54cb3279a49f10d2eab18249859b2ff1.svg", {
        x: 54.93980416997891,
        y: 41.9720028138172
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "game" }, this.whenIReceiveGame)
    ];

    this.vars.p45 = 3;
    this.vars.state19 = 0;
    this.vars.x28 = 15;
    this.vars.y28 = 0;
    this.vars.direction21 = -1;
    this.vars.frame22 = 93;
    this.vars.xSpeed19 = 0;
    this.vars.ySpeed19 = 0;
    this.vars.i19 = 1;
    this.vars.length19 = 13;
    this.vars.part19 = 0;
    this.vars.p46 = 3;
    this.vars.touching19 = 0;
    this.vars.h19 = 3;
    this.vars.hx19 = 15;
    this.vars.hy19 = 0;
    this.vars.hxSize19 = 0;
    this.vars.hySize19 = 0;
    this.vars.health19 = 100;
    this.vars.hDamage19 = 0;
    this.vars.p47 = 0;
    this.vars.state20 = 0;
    this.vars.x29 = 0;
    this.vars.y29 = 0;
    this.vars.direction22 = 0;
    this.vars.frame23 = 0;
    this.vars.xSpeed20 = 0;
    this.vars.ySpeed20 = 0;
    this.vars.i20 = 0;
    this.vars.length20 = 0;
    this.vars.part20 = 0;
    this.vars.p48 = 0;
    this.vars.touching20 = 0;
    this.vars.h20 = 0;
    this.vars.hx20 = 0;
    this.vars.hy20 = 0;
    this.vars.hxSize20 = 0;
    this.vars.hySize20 = 0;
    this.vars.health20 = 0;
    this.vars.hDamage20 = 0;
    this.vars.impact14 = 0;
    this.vars.p49 = 0;
    this.vars.state21 = 0;
    this.vars.x30 = 0;
    this.vars.y30 = 0;
    this.vars.direction23 = 0;
    this.vars.frame24 = 0;
    this.vars.xSpeed21 = 0;
    this.vars.ySpeed21 = 0;
    this.vars.i21 = 0;
    this.vars.length21 = 0;
    this.vars.part21 = 0;
    this.vars.p50 = 0;
    this.vars.touching21 = 0;
    this.vars.h21 = 0;
    this.vars.hx21 = 0;
    this.vars.hy21 = 0;
    this.vars.hxSize21 = 0;
    this.vars.hySize21 = 0;
    this.vars.health21 = 0;
    this.vars.hDamage21 = 0;
    this.vars.impact15 = 0;
    this.vars.commands9 = 0;
    this.vars.command9 = 0;
    this.vars.g = 0;
    this.vars.inputs19 = [false, false, false, false, false, false];
    this.vars.hurtboxY19 = [11.5, 3.5, -8.5];
    this.vars.hurtboxYSize19 = [7, 9, 15];
    this.vars.hurtboxXSize19 = [5, 10, 12];
    this.vars.inputs20 = [];
    this.vars.hurtboxY20 = [];
    this.vars.hurtboxYSize20 = [];
    this.vars.hurtboxXSize20 = [];
    this.vars.inputs21 = [];
    this.vars.hurtboxY21 = [];
    this.vars.hurtboxYSize21 = [];
    this.vars.hurtboxXSize21 = [];
    this.vars.inputNames9 = [];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *clone() {
    this.visible = false;
    this.vars.p45 = 1;
    for (let i = 0; i < this.stage.vars.OfPlayers; i++) {
      if (
        this.compare(
          this.stage.vars.playerCharacter[this.vars.p45 - 1],
          "Black"
        ) === 0
      ) {
        this.createClone();
      }
      this.vars.p45 += 1;
    }
  }

  *startAsClone() {
    this.visible = true;
    this.effects.color = this.stage.vars.playerColor[this.vars.p45 - 1];
    this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
    while (true) {
      if (this.compare(this.stage.vars.pauseMenu, 0) === 0) {
        this.goto(
          (this.stage.vars.playerX[this.vars.p45 - 1] +
            this.stage.vars.rumbleX -
            this.stage.vars.scrollX) *
            4,
          (this.stage.vars.playerY[this.vars.p45 - 1] +
            this.stage.vars.rumbleY) *
            4 -
            20
        );
        this.direction = this.stage.vars.playerDirection[this.vars.p45 - 1];
        yield* this.costumes2(
          this.stage.vars.playerState[this.vars.p45 - 1],
          this.stage.vars.playerFrame[this.vars.p45 - 1]
        );
        if (this.compare(this.vars.h19, 1) === 0) {
          this.effects.color =
            this.stage.vars.playerColor[this.vars.p45 - 1] +
            (this.stage.vars.gameframe % 8) * 3;
          this.effects.brightness = ((this.stage.vars.gameframe % 8) - 3) * 4;
          if (
            this.compare(this.stage.vars.playerEx[this.vars.p45 - 1], 0.001) < 0
          ) {
            this.vars.h19 = 0;
            this.stage.vars.playerEx.splice(this.vars.p45 - 1, 1, 0);
          } else {
            this.stage.vars.playerEx.splice(
              this.vars.p45 - 1,
              1,
              this.stage.vars.playerEx[this.vars.p45 - 1] - 0.005
            );
          }
          if (
            this.compare(this.stage.vars.playerState[this.vars.p45 - 1], 29) ===
            0
          ) {
            if (
              this.compare(this.stage.vars.playerFrame[this.vars.p45 - 1], 10) >
              0
            ) {
              this.stage.vars.playerFrame.splice(this.vars.p45 - 1, 1, 3);
              this.stage.vars.playerState.splice(this.vars.p45 - 1, 1, 20);
            }
          }
          if (
            this.compare(this.stage.vars.playerState[this.vars.p45 - 1], 13) ===
            0
          ) {
            this.stage.vars.hitboxHitstun.splice(this.vars.p45 - 1, 1, 16);
            this.stage.vars.hitboxXKnockback.splice(this.vars.p45 - 1, 1, 0.5);
            this.stage.vars.hitboxYKnockback.splice(this.vars.p45 - 1, 1, 0);
            if (
              this.compare(this.stage.vars.playerFrame[this.vars.p45 - 1], 6) >
              0
            ) {
              this.stage.vars.playerFrame.splice(this.vars.p45 - 1, 1, 3);
              this.stage.vars.playerState.splice(this.vars.p45 - 1, 1, 26);
            }
          }
          if (
            this.compare(this.stage.vars.playerState[this.vars.p45 - 1], 11) ===
            0
          ) {
            this.stage.vars.hitboxHitstun.splice(this.vars.p45 - 1, 1, 15);
            this.stage.vars.hitboxDamage.splice(this.vars.p45 - 1, 1, 8);
            this.stage.vars.hitboxXKnockback.splice(this.vars.p45 - 1, 1, 2.5);
            this.stage.vars.hitboxYKnockback.splice(this.vars.p45 - 1, 1, 4);
            if (
              this.compare(this.stage.vars.playerFrame[this.vars.p45 - 1], 4) >
              0
            ) {
              this.stage.vars.playerFrame.splice(this.vars.p45 - 1, 1, 4);
            }
          }
          if (
            this.compare(this.stage.vars.playerState[this.vars.p45 - 1], 14) ===
            0
          ) {
            this.stage.vars.hitboxHitstun.splice(this.vars.p45 - 1, 1, 8);
            if (
              this.compare(this.stage.vars.playerFrame[this.vars.p45 - 1], 3) >
              0
            ) {
              this.stage.vars.playerFrame.splice(this.vars.p45 - 1, 1, 0);
              this.stage.vars.playerState.splice(this.vars.p45 - 1, 1, 2);
            }
          }
        }
      }
      yield;
    }
  }

  *costumes2(s7, f6) {
    this.effects.color = this.stage.vars.playerColor[this.vars.p45 - 1];
    this.effects.brightness = 0;
    if (this.compare(s7, 0) === 0) {
      this.costume = (Math.floor(f6 / 3) % 6) + 1;
    } else {
      if (this.compare(s7, 1) === 0) {
        this.costume = (Math.floor(f6 / 2) % 6) + 7;
      } else {
        if (this.compare(s7, 1.1) === 0 || this.compare(s7, 1.2) === 0) {
          this.costume = "" + "Run_" + (Math.round((f6 / 1.5) % 5) + 1);
        } else {
          if (this.compare(s7, 1.3) === 0) {
            this.costume = "Backdash";
          } else {
            if (this.compare(s7, 2) === 0 || this.compare(s7, 2.1) === 0) {
              if (
                this.compare(
                  this.stage.vars.playerYSpeed[this.vars.p45 - 1],
                  -1
                ) > 0
              ) {
                this.costume = "midair";
              } else {
                this.costume = "midair2";
              }
            } else {
              if (this.compare(s7, 3) === 0) {
                this.costume = "crouch";
              } else {
                if (this.compare(s7, 4) === 0) {
                  if (this.compare(f6, 2) < 0) {
                    this.costume = "punch1";
                  } else {
                    if (this.compare(f6, 3) < 0) {
                      this.costume = "punch2";
                    } else {
                      if (this.compare(f6, 4) < 0) {
                        this.costume = "punch3";
                      } else {
                        if (this.compare(f6, 7) < 0) {
                          this.costume = "punch4";
                        } else {
                          if (this.compare(f6, 8) < 0) {
                            this.costume = "punch5";
                          } else {
                            this.costume = "punch6";
                          }
                        }
                      }
                    }
                  }
                } else {
                  if (this.compare(s7, 5) === 0) {
                    this.stage.vars.hitboxYKnockback.splice(
                      this.vars.p45 - 1,
                      1,
                      2.5
                    );
                    this.stage.vars.hitboxXKnockback.splice(
                      this.vars.p45 - 1,
                      1,
                      0
                    );
                    this.stage.vars.hitboxHitstun.splice(
                      this.vars.p45 - 1,
                      1,
                      8
                    );
                    this.stage.vars.hitboxDamage.splice(
                      this.vars.p45 - 1,
                      1,
                      4
                    );
                    if (this.compare(f6, 3) < 0) {
                      this.costume = "high kick1";
                    } else {
                      if (this.compare(f6, 4) < 0) {
                        this.costume = "high kick2";
                      } else {
                        if (this.compare(f6, 6) < 0) {
                          this.costume = "high kick4";
                          if (
                            this.compare(
                              this.sprites["Logic"].vars.impact19,
                              -5
                            ) > 0
                          ) {
                            if (
                              this.toBoolean(
                                this.stage.vars.currentInputs[
                                  this.vars.p45 * 6 - 1 - 1
                                ]
                              )
                            ) {
                              this.stage.vars.playerState.splice(
                                this.vars.p45 - 1,
                                1,
                                13
                              );
                              this.stage.vars.playerFrame.splice(
                                this.vars.p45 - 1,
                                1,
                                0
                              );
                            } else {
                              if (
                                this.toBoolean(
                                  this.stage.vars.currentInputs[
                                    this.vars.p45 * 6 - 1
                                  ]
                                )
                              ) {
                                this.stage.vars.playerState.splice(
                                  this.vars.p45 - 1,
                                  1,
                                  29
                                );
                                this.stage.vars.playerFrame.splice(
                                  this.vars.p45 - 1,
                                  1,
                                  0
                                );
                              }
                            }
                          }
                        } else {
                          if (this.compare(f6, 8) < 0) {
                            this.costume = "high kick3";
                          } else {
                            if (this.compare(f6, 10) < 0) {
                              this.costume = "high kick5";
                            } else {
                              this.costume = "high kick6";
                              this.stage.vars.playerFrame.splice(
                                this.vars.p45 - 1,
                                1,
                                19
                              );
                            }
                          }
                        }
                      }
                    }
                  } else {
                    if (this.compare(s7, 6) === 0) {
                      this.costume = "land";
                    } else {
                      if (this.compare(s7, 7) === 0) {
                        if (this.compare(f6, 7) < 0) {
                          this.costume = "hurt head";
                          this.effects.color =
                            this.stage.vars.playerColor[this.vars.p45 - 1] +
                            this.random(-10, 10) * 5;
                          this.effects.brightness = this.random(-5, 2) * 5;
                        } else {
                          this.costume = "hurt head2";
                          this.effects.brightness = 0;
                          this.effects.color = this.stage.vars.playerColor[
                            this.vars.p45 - 1
                          ];
                        }
                      } else {
                        if (this.compare(s7, 8) === 0) {
                          if (this.compare(f6, 5) < 0) {
                            this.costume = "hurt torso";
                            this.effects.color =
                              this.stage.vars.playerColor[this.vars.p45 - 1] +
                              this.random(-8, 8) * 5;
                            this.effects.brightness = this.random(-4, 1) * 5;
                          } else {
                            this.costume = "hurt torso2";
                            this.effects.brightness = 0;
                            this.effects.color = this.stage.vars.playerColor[
                              this.vars.p45 - 1
                            ];
                          }
                        } else {
                          if (this.compare(s7, 9) === 0) {
                            if (this.compare(f6, 4) < 0) {
                              this.costume = "block head";
                            } else {
                              this.costume = "block head2";
                            }
                          } else {
                            if (this.compare(s7, 10) === 0) {
                              if (this.compare(f6, 3) < 0) {
                                this.costume = "block torso";
                              } else {
                                this.costume = "block torso2";
                              }
                            } else {
                              if (this.compare(s7, 11) === 0) {
                                if (this.compare(f6, 4) < 0) {
                                  this.costume = "air punch";
                                } else {
                                  if (this.compare(f6, 5) < 0) {
                                    this.costume = "air punch2";
                                  } else {
                                    if (this.compare(f6, 8) < 0) {
                                      this.costume = "air punch3";
                                    } else {
                                      this.costume = "air punch4";
                                    }
                                  }
                                }
                              } else {
                                if (this.compare(s7, 12) === 0) {
                                  if (this.compare(f6, 1.5) < 0) {
                                    this.costume = "air kick";
                                    this.stage.vars.playerFrame.splice(
                                      this.vars.p45 - 1,
                                      1,
                                      this.stage.vars.playerFrame[
                                        this.vars.p45 - 1
                                      ] - 0.5
                                    );
                                  } else {
                                    if (this.compare(f6, 2) < 0) {
                                      this.costume = "air kick2";
                                      this.stage.vars.playerFrame.splice(
                                        this.vars.p45 - 1,
                                        1,
                                        this.stage.vars.playerFrame[
                                          this.vars.p45 - 1
                                        ] - 0.5
                                      );
                                    } else {
                                      if (this.compare(f6, 3) < 0) {
                                        this.costume = "air kick3";
                                      } else {
                                        if (this.compare(f6, 4) < 0) {
                                          this.costume = "air kick4";
                                          this.stage.vars.playerFrame.splice(
                                            this.vars.p45 - 1,
                                            1,
                                            this.stage.vars.playerFrame[
                                              this.vars.p45 - 1
                                            ] - 0.5
                                          );
                                        } else {
                                          if (this.compare(f6, 7) < 0) {
                                            this.costume = "air kick5";
                                          } else {
                                            if (this.compare(f6, 9) < 0) {
                                              this.costume = "air kick6";
                                            } else {
                                              this.costume = "air kick7";
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                } else {
                                  if (this.compare(s7, 13) === 0) {
                                    this.stage.vars.hitboxType.splice(
                                      this.vars.p45 - 1,
                                      1,
                                      "KD1"
                                    );
                                    this.stage.vars.hitboxXKnockback.splice(
                                      this.vars.p45 - 1,
                                      1,
                                      4
                                    );
                                    if (this.compare(f6, 2) < 0) {
                                      this.costume = "lowpunch";
                                    } else {
                                      if (this.compare(f6, 4) < 0) {
                                        this.costume = "lowpunch4";
                                      } else {
                                        if (this.compare(f6, 5) < 0) {
                                          this.costume = "lowpunch5";
                                        } else {
                                          if (this.compare(f6, 7) < 0) {
                                            this.costume = "lowpunch6";
                                            if (
                                              this.compare(
                                                this.sprites["Logic"].vars
                                                  .impact19,
                                                0
                                              ) < 0
                                            ) {
                                              this.stage.vars.playerX.splice(
                                                this.vars.p45 - 1,
                                                1,
                                                this.stage.vars.playerX[
                                                  this.vars.p45 - 1
                                                ] +
                                                  this.stage.vars
                                                    .playerDirection[
                                                    this.vars.p45 - 1
                                                  ] *
                                                    2
                                              );
                                            }
                                          } else {
                                            if (this.compare(f6, 9) < 0) {
                                              this.costume = "lowpunch2";
                                              if (
                                                this.compare(
                                                  this.sprites["Logic"].vars
                                                    .impact19,
                                                  0
                                                ) < 0
                                              ) {
                                                this.stage.vars.playerX.splice(
                                                  this.vars.p45 - 1,
                                                  1,
                                                  this.stage.vars.playerX[
                                                    this.vars.p45 - 1
                                                  ] +
                                                    this.stage.vars
                                                      .playerDirection[
                                                      this.vars.p45 - 1
                                                    ] *
                                                      1
                                                );
                                              }
                                            } else {
                                              if (this.compare(f6, 11) < 0) {
                                                this.costume = "lowpunch7";
                                              } else {
                                                this.costume = "lowpunch8";
                                                this.stage.vars.playerState.splice(
                                                  this.vars.p45 - 1,
                                                  1,
                                                  0
                                                );
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  } else {
                                    if (this.compare(s7, 14) === 0) {
                                      this.stage.vars.hitboxYKnockback.splice(
                                        this.vars.p45 - 1,
                                        1,
                                        5
                                      );
                                      if (this.compare(f6, 2) < 0) {
                                        this.costume = "low kick";
                                      } else {
                                        if (this.compare(f6, 3) < 0) {
                                          this.costume = "low kick3";
                                          this.stage.vars.playerYSpeed.splice(
                                            this.vars.p45 - 1,
                                            1,
                                            5
                                          );
                                        } else {
                                          if (this.compare(f6, 6) < 0) {
                                            this.costume = "low kick4";
                                          } else {
                                            if (this.compare(f6, 7) < 0) {
                                              this.costume = "low kick5";
                                            } else {
                                              if (this.compare(f6, 8) < 0) {
                                                this.costume = "low kick6";
                                              } else {
                                                if (this.compare(f6, 10) < 0) {
                                                  this.costume = "low kick7";
                                                } else {
                                                  if (
                                                    this.compare(f6, 11) < 0
                                                  ) {
                                                    this.costume = "low kick8";
                                                  } else {
                                                    if (
                                                      this.compare(f6, 12) < 0
                                                    ) {
                                                      this.costume =
                                                        "low kick9";
                                                    } else {
                                                      this.costume =
                                                        "low kick10";
                                                      this.stage.vars.playerState.splice(
                                                        this.vars.p45 - 1,
                                                        1,
                                                        2
                                                      );
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    } else {
                                      if (this.compare(s7, 15) === 0) {
                                        if (this.compare(f6, 8) < 0) {
                                          this.costume = "hurt air";
                                        } else {
                                          this.costume = "hurt air2";
                                        }
                                      } else {
                                        if (this.compare(s7, 16) === 0) {
                                          this.costume = "hadouken";
                                        } else {
                                          if (this.compare(s7, 17) === 0) {
                                            this.costume = "parry";
                                            this.effects.brightness =
                                              (this.stage.vars.gameframe % 3) *
                                              50;
                                          } else {
                                            if (this.compare(s7, 18) === 0) {
                                              this.stage.vars.hitboxDamage.splice(
                                                this.vars.p45 - 1,
                                                1,
                                                4
                                              );
                                              this.stage.vars.hitboxYKnockback.splice(
                                                this.vars.p45 - 1,
                                                1,
                                                3.5
                                              );
                                              this.stage.vars.hitboxHitstun.splice(
                                                this.vars.p45 - 1,
                                                1,
                                                10
                                              );
                                              if (this.compare(f6, 2) < 0) {
                                                this.costume = "low punch";
                                              } else {
                                                if (this.compare(f6, 2) < 0) {
                                                  this.costume = "low punch2";
                                                } else {
                                                  if (this.compare(f6, 3) < 0) {
                                                    this.costume = "low punch3";
                                                  } else {
                                                    if (
                                                      this.compare(f6, 4) < 0
                                                    ) {
                                                      this.costume =
                                                        "low punch4";
                                                      this.stage.vars.playerFrame.splice(
                                                        this.vars.p45 - 1,
                                                        1,
                                                        this.stage.vars
                                                          .playerFrame[
                                                          this.vars.p45 - 1
                                                        ] - 0.5
                                                      );
                                                    } else {
                                                      if (
                                                        this.compare(f6, 6) < 0
                                                      ) {
                                                        this.costume =
                                                          "low punch5";
                                                      } else {
                                                        this.costume =
                                                          "low punch6";
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            } else {
                                              if (this.compare(s7, 19) === 0) {
                                                if (this.compare(f6, 5) < 0) {
                                                  this.costume = "hurt torso";
                                                } else {
                                                  this.costume = "wallbounce";
                                                }
                                              } else {
                                                if (
                                                  this.compare(s7, 20) === 0
                                                ) {
                                                  if (
                                                    this.compare(
                                                      this.vars.i19,
                                                      1
                                                    ) === 0
                                                  ) {
                                                    this.stage.vars.hitboxDamage.splice(
                                                      this.vars.p45 - 1,
                                                      1,
                                                      4
                                                    );
                                                  } else {
                                                    this.stage.vars.hitboxDamage.splice(
                                                      this.vars.p45 - 1,
                                                      1,
                                                      8
                                                    );
                                                  }
                                                  if (this.compare(f6, 3) < 0) {
                                                    this.costume = "The Spank";
                                                    this.stage.vars.playerFrame.splice(
                                                      this.vars.p45 - 1,
                                                      1,
                                                      this.stage.vars
                                                        .playerFrame[
                                                        this.vars.p45 - 1
                                                      ] - 0.5
                                                    );
                                                    if (
                                                      this.toBoolean(
                                                        this.stage.vars
                                                          .currentInputs[
                                                          this.vars.p45 * 6 -
                                                            3 -
                                                            1
                                                        ]
                                                      )
                                                    ) {
                                                      this.vars.i19 = 1;
                                                    }
                                                  } else {
                                                    if (
                                                      this.compare(f6, 5) < 0
                                                    ) {
                                                      this.costume =
                                                        "The Spank2";
                                                      if (
                                                        this.toBoolean(
                                                          this.stage.vars
                                                            .currentInputs[
                                                            this.vars.p45 * 6 -
                                                              3 -
                                                              1
                                                          ]
                                                        )
                                                      ) {
                                                        this.vars.i19 = 1;
                                                      }
                                                    } else {
                                                      if (
                                                        this.compare(f6, 5) ===
                                                        0
                                                      ) {
                                                        if (
                                                          this.compare(
                                                            this.vars.i19,
                                                            1
                                                          ) === 0
                                                        ) {
                                                          this.stage.vars.playerYSpeed.splice(
                                                            this.vars.p45 - 1,
                                                            1,
                                                            4
                                                          );
                                                        }
                                                      }
                                                      if (
                                                        this.compare(f6, 12) < 0
                                                      ) {
                                                        this.costume =
                                                          "The Spank3";
                                                        if (
                                                          this.compare(
                                                            this.stage.vars
                                                              .rumbleX,
                                                            0
                                                          ) > 0
                                                        ) {
                                                          if (
                                                            this.compare(
                                                              this.stage.vars
                                                                .playerY[
                                                                this.vars.p45 -
                                                                  1
                                                              ],
                                                              0
                                                            ) > 0 ||
                                                            this.compare(
                                                              this.vars.i19,
                                                              1
                                                            ) === 0
                                                          ) {
                                                            this.stage.vars.playerState.splice(
                                                              this.vars.p45 - 1,
                                                              1,
                                                              22
                                                            );
                                                            this.stage.vars.playerFrame.splice(
                                                              this.vars.p45 - 1,
                                                              1,
                                                              0
                                                            );
                                                            this.stage.vars.playerY.splice(
                                                              this.vars.p45 - 1,
                                                              1,
                                                              5
                                                            );
                                                            this.vars.i19 = 1;
                                                          } else {
                                                            this.stage.vars.playerFrame.splice(
                                                              this.vars.p45 - 1,
                                                              1,
                                                              25
                                                            );
                                                          }
                                                        }
                                                      } else {
                                                        if (
                                                          this.compare(f6, 14) <
                                                          0
                                                        ) {
                                                          this.costume =
                                                            "The Spank4";
                                                          this.vars.i19 = 0;
                                                        } else {
                                                          if (
                                                            this.compare(
                                                              f6,
                                                              16
                                                            ) < 0
                                                          ) {
                                                            this.costume =
                                                              "The Spank5";
                                                          } else {
                                                            if (
                                                              this.compare(
                                                                f6,
                                                                18
                                                              ) < 0
                                                            ) {
                                                              this.costume =
                                                                "The Spank6";
                                                              if (
                                                                this.compare(
                                                                  this.stage
                                                                    .vars
                                                                    .playerY[
                                                                    this.vars
                                                                      .p45 - 1
                                                                  ],
                                                                  0
                                                                ) > 0
                                                              ) {
                                                                this.stage.vars.playerState.splice(
                                                                  this.vars
                                                                    .p45 - 1,
                                                                  1,
                                                                  2
                                                                );
                                                              } else {
                                                                this.stage.vars.playerState.splice(
                                                                  this.vars
                                                                    .p45 - 1,
                                                                  1,
                                                                  6
                                                                );
                                                                this.stage.vars.playerFrame.splice(
                                                                  this.vars
                                                                    .p45 - 1,
                                                                  1,
                                                                  -2
                                                                );
                                                              }
                                                            } else {
                                                              if (
                                                                this.compare(
                                                                  f6,
                                                                  27
                                                                ) < 0
                                                              ) {
                                                                this.costume =
                                                                  "The Spank_Hit";
                                                              } else {
                                                                if (
                                                                  this.compare(
                                                                    f6,
                                                                    29
                                                                  ) < 0
                                                                ) {
                                                                  this.costume =
                                                                    "The Spank_Hit2";
                                                                } else {
                                                                  if (
                                                                    this.compare(
                                                                      f6,
                                                                      35
                                                                    ) < 0
                                                                  ) {
                                                                    this.costume =
                                                                      "The Spank_Hit3";
                                                                  } else {
                                                                    if (
                                                                      this.compare(
                                                                        f6,
                                                                        37
                                                                      ) < 0
                                                                    ) {
                                                                      this.costume =
                                                                        "punch5";
                                                                    } else {
                                                                      if (
                                                                        this.compare(
                                                                          f6,
                                                                          38
                                                                        ) < 0
                                                                      ) {
                                                                        this.costume =
                                                                          "punch6";
                                                                      } else {
                                                                        this.stage.vars.playerState.splice(
                                                                          this
                                                                            .vars
                                                                            .p45 -
                                                                            1,
                                                                          1,
                                                                          0
                                                                        );
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
                                                } else {
                                                  if (
                                                    this.compare(s7, 21) === 0
                                                  ) {
                                                    this.stage.vars.hitboxDamage.splice(
                                                      this.vars.p45 - 1,
                                                      1,
                                                      2
                                                    );
                                                    this.stage.vars.hitboxHitstun.splice(
                                                      this.vars.p45 - 1,
                                                      1,
                                                      16
                                                    );
                                                    if (
                                                      this.compare(f6, 3) < 0
                                                    ) {
                                                      this.costume = "Grab1";
                                                    } else {
                                                      if (
                                                        this.compare(f6, 5) < 0
                                                      ) {
                                                        this.costume = "Grab2";
                                                      } else {
                                                        if (
                                                          this.compare(f6, 6) <
                                                          0
                                                        ) {
                                                          this.costume =
                                                            "Grab3";
                                                        } else {
                                                          if (
                                                            !(
                                                              this.compare(
                                                                this.stage.vars
                                                                  .playerX[
                                                                  this.stage.vars.playerState.indexOf(
                                                                    8
                                                                  ) +
                                                                    1 -
                                                                    1
                                                                ],
                                                                ""
                                                              ) === 0
                                                            ) &&
                                                            this.compare(
                                                              Math.abs(
                                                                this.stage.vars
                                                                  .playerX[
                                                                  this.vars
                                                                    .p45 - 1
                                                                ] -
                                                                  this.stage
                                                                    .vars
                                                                    .playerX[
                                                                    this.stage.vars.playerState.indexOf(
                                                                      8
                                                                    ) +
                                                                      1 -
                                                                      1
                                                                  ]
                                                              ),
                                                              30
                                                            ) < 0
                                                          ) {
                                                            this.stage.vars.playerFrame.splice(
                                                              this.vars.p45 - 1,
                                                              1,
                                                              12
                                                            );
                                                            this.stage.vars.playerState.splice(
                                                              this.vars.p45 - 1,
                                                              1,
                                                              22
                                                            );
                                                          }
                                                          if (
                                                            this.compare(
                                                              f6,
                                                              10
                                                            ) < 0
                                                          ) {
                                                            this.costume =
                                                              "Grab4";
                                                          } else {
                                                            this.costume =
                                                              "Grab5";
                                                            this.stage.vars.playerFrame.splice(
                                                              this.vars.p45 - 1,
                                                              1,
                                                              52
                                                            );
                                                          }
                                                        }
                                                      }
                                                    }
                                                  } else {
                                                    if (
                                                      this.compare(s7, 22) === 0
                                                    ) {
                                                      if (
                                                        this.compare(
                                                          this.vars.i19,
                                                          1
                                                        ) === 0
                                                      ) {
                                                        if (
                                                          this.compare(
                                                            f6,
                                                            1
                                                          ) === 0
                                                        ) {
                                                          this.stage.vars.playerYSpeed.splice(
                                                            this.vars.p45 - 1,
                                                            1,
                                                            6
                                                          );
                                                        }
                                                        if (
                                                          this.compare(
                                                            this.stage.vars
                                                              .playerY[
                                                              this.vars.p45 - 1
                                                            ],
                                                            3
                                                          ) > 0
                                                        ) {
                                                          this.stage.vars.playerYSpeed.splice(
                                                            this.stage.vars.playerState.indexOf(
                                                              19.1
                                                            ) +
                                                              1 -
                                                              1,
                                                            1,
                                                            0
                                                          );
                                                          this.stage.vars.playerXSpeed.splice(
                                                            this.stage.vars.playerState.indexOf(
                                                              19.1
                                                            ) +
                                                              1 -
                                                              1,
                                                            1,
                                                            this.stage.vars
                                                              .playerDirection[
                                                              this.vars.p45 - 1
                                                            ] * 2
                                                          );
                                                          this.stage.vars.playerX.splice(
                                                            this.stage.vars.playerState.indexOf(
                                                              19.1
                                                            ) +
                                                              1 -
                                                              1,
                                                            1,
                                                            this.stage.vars
                                                              .playerX[
                                                              this.vars.p45 - 1
                                                            ] +
                                                              this.stage.vars
                                                                .playerDirection[
                                                                this.vars.p45 -
                                                                  1
                                                              ] *
                                                                12
                                                          );
                                                          this.stage.vars.playerY.splice(
                                                            this.stage.vars.playerState.indexOf(
                                                              19.1
                                                            ) +
                                                              1 -
                                                              1,
                                                            1,
                                                            this.stage.vars
                                                              .playerY[
                                                              this.vars.p45 - 1
                                                            ] + -3
                                                          );
                                                          this.stage.vars.playerXSpeed.splice(
                                                            this.vars.p45 - 1,
                                                            1,
                                                            this.stage.vars
                                                              .playerDirection[
                                                              this.vars.p45 - 1
                                                            ] * 4
                                                          );
                                                          this.stage.vars.playerYSpeed.splice(
                                                            this.vars.p45 - 1,
                                                            1,
                                                            this.stage.vars
                                                              .playerYSpeed[
                                                              this.vars.p45 - 1
                                                            ] - 0.5
                                                          );
                                                          this.costume =
                                                            "Slam4";
                                                        } else {
                                                          this.stage.vars.rumbleY = -10;
                                                          this.stage.vars.rumbleX = 0;
                                                          this.stage.vars.playerState.splice(
                                                            this.vars.p45 - 1,
                                                            1,
                                                            2.1
                                                          );
                                                          this.stage.vars.playerXSpeed.splice(
                                                            this.vars.p45 - 1,
                                                            1,
                                                            this.stage.vars
                                                              .playerDirection[
                                                              this.vars.p45 - 1
                                                            ]
                                                          );
                                                          this.stage.vars.playerFrame.splice(
                                                            this.vars.p45 - 1,
                                                            1,
                                                            -3
                                                          );
                                                          this.stage.vars.playerYSpeed.splice(
                                                            this.vars.p45 - 1,
                                                            1,
                                                            3
                                                          );
                                                          this.stage.vars.playerYSpeed.splice(
                                                            this.stage.vars.playerState.indexOf(
                                                              19.1
                                                            ) +
                                                              1 -
                                                              1,
                                                            1,
                                                            3
                                                          );
                                                          this.stage.vars.playerXSpeed.splice(
                                                            this.stage.vars.playerState.indexOf(
                                                              19.1
                                                            ) +
                                                              1 -
                                                              1,
                                                            1,
                                                            this.stage.vars
                                                              .playerDirection[
                                                              this.vars.p45 - 1
                                                            ]
                                                          );
                                                          this.stage.vars.playerHealth.splice(
                                                            this.stage.vars.playerState.indexOf(
                                                              19.1
                                                            ) +
                                                              1 -
                                                              1,
                                                            1,
                                                            this.stage.vars
                                                              .playerHealth[
                                                              this.stage.vars.playerState.indexOf(
                                                                19.1
                                                              ) +
                                                                1 -
                                                                1
                                                            ] - 8
                                                          );
                                                          this.stage.vars.playerFrame.splice(
                                                            this.stage.vars.playerState.indexOf(
                                                              19.1
                                                            ) +
                                                              1 -
                                                              1,
                                                            1,
                                                            -2
                                                          );
                                                          this.stage.vars.playerState.splice(
                                                            this.stage.vars.playerState.indexOf(
                                                              19.1
                                                            ) +
                                                              1 -
                                                              1,
                                                            1,
                                                            15
                                                          );
                                                          this.vars.i19 = 0;
                                                        }
                                                      } else {
                                                        if (
                                                          this.compare(f6, 12) <
                                                          0
                                                        ) {
                                                          this.costume =
                                                            "Throw";
                                                        } else {
                                                          if (
                                                            this.compare(
                                                              f6,
                                                              23
                                                            ) < 0
                                                          ) {
                                                            this.costume =
                                                              "" +
                                                              "Throw" +
                                                              (Math.round(
                                                                f6 / 3
                                                              ) -
                                                                3);
                                                            this.stage.vars.playerY.splice(
                                                              this.stage.vars.playerState.indexOf(
                                                                8
                                                              ) +
                                                                1 -
                                                                1,
                                                              1,
                                                              this.stage.vars
                                                                .playerY[
                                                                this.stage.vars.playerState.indexOf(
                                                                  8
                                                                ) +
                                                                  1 -
                                                                  1
                                                              ] + 0.5
                                                            );
                                                            this.stage.vars.playerXSpeed.splice(
                                                              this.stage.vars.playerState.indexOf(
                                                                8
                                                              ) +
                                                                1 -
                                                                1,
                                                              1,
                                                              0
                                                            );
                                                            this.stage.vars.playerFrame.splice(
                                                              this.stage.vars.playerState.indexOf(
                                                                8
                                                              ) +
                                                                1 -
                                                                1,
                                                              1,
                                                              3
                                                            );
                                                          } else {
                                                            if (
                                                              this.compare(
                                                                f6,
                                                                30
                                                              ) < 0
                                                            ) {
                                                              this.costume =
                                                                "Throw5";
                                                              this.stage.vars.playerState.splice(
                                                                this.stage.vars.playerState.indexOf(
                                                                  8
                                                                ) +
                                                                  1 -
                                                                  1,
                                                                1,
                                                                19.1
                                                              );
                                                              this.stage.vars.playerYSpeed.splice(
                                                                this.stage.vars.playerState.indexOf(
                                                                  19.1
                                                                ) +
                                                                  1 -
                                                                  1,
                                                                1,
                                                                2
                                                              );
                                                              this.stage.vars.playerY.splice(
                                                                this.stage.vars.playerState.indexOf(
                                                                  19.1
                                                                ) +
                                                                  1 -
                                                                  1,
                                                                1,
                                                                this.stage.vars
                                                                  .playerY[
                                                                  this.vars
                                                                    .p45 - 1
                                                                ] + 5
                                                              );
                                                              this.stage.vars.playerXSpeed.splice(
                                                                this.stage.vars.playerState.indexOf(
                                                                  19.1
                                                                ) +
                                                                  1 -
                                                                  1,
                                                                1,
                                                                0
                                                              );
                                                              this.stage.vars.playerHealth.splice(
                                                                this.stage.vars.playerState.indexOf(
                                                                  19.1
                                                                ) +
                                                                  1 -
                                                                  1,
                                                                1,
                                                                this.stage.vars
                                                                  .playerHealth[
                                                                  this.stage.vars.playerState.indexOf(
                                                                    19.1
                                                                  ) +
                                                                    1 -
                                                                    1
                                                                ] - 2
                                                              );
                                                            } else {
                                                              if (
                                                                this.compare(
                                                                  f6,
                                                                  32
                                                                ) < 0
                                                              ) {
                                                                this.costume =
                                                                  "Throw6";
                                                                this.stage.vars.playerYSpeed.splice(
                                                                  this.stage.vars.playerState.indexOf(
                                                                    19.1
                                                                  ) +
                                                                    1 -
                                                                    1,
                                                                  1,
                                                                  4
                                                                );
                                                                this.stage.vars.playerXSpeed.splice(
                                                                  this.stage.vars.playerState.indexOf(
                                                                    19.1
                                                                  ) +
                                                                    1 -
                                                                    1,
                                                                  1,
                                                                  this.stage
                                                                    .vars
                                                                    .playerDirection[
                                                                    this.vars
                                                                      .p45 - 1
                                                                  ] * 3
                                                                );
                                                              } else {
                                                                this.costume =
                                                                  "Throw7";
                                                                this.stage.vars.playerState.splice(
                                                                  this.vars
                                                                    .p45 - 1,
                                                                  1,
                                                                  0
                                                                );
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    } else {
                                                      if (
                                                        this.compare(s7, 24) ===
                                                        0
                                                      ) {
                                                        if (
                                                          this.compare(f6, 4) <
                                                          0
                                                        ) {
                                                          this.costume = "Die";
                                                        } else {
                                                          if (
                                                            this.compare(
                                                              f6,
                                                              7
                                                            ) < 0
                                                          ) {
                                                            this.costume =
                                                              "Die2";
                                                          } else {
                                                            if (
                                                              this.compare(
                                                                f6,
                                                                10
                                                              ) < 0
                                                            ) {
                                                              this.costume =
                                                                "Die3";
                                                            } else {
                                                              this.costume =
                                                                "Die4";
                                                            }
                                                          }
                                                        }
                                                      } else {
                                                        if (
                                                          this.compare(
                                                            s7,
                                                            25
                                                          ) === 0
                                                        ) {
                                                          if (
                                                            this.compare(
                                                              f6,
                                                              4
                                                            ) < 0
                                                          ) {
                                                            this.costume =
                                                              "charge";
                                                          } else {
                                                            this.costume =
                                                              "hadouken";
                                                          }
                                                        } else {
                                                          if (
                                                            this.compare(
                                                              s7,
                                                              26
                                                            ) === 0
                                                          ) {
                                                            if (
                                                              this.compare(
                                                                this.sprites[
                                                                  "Logic"
                                                                ].vars.impact19,
                                                                0
                                                              ) > 0 &&
                                                              this.compare(
                                                                this.stage.vars
                                                                  .playerFrame[
                                                                  this.vars
                                                                    .p45 - 1
                                                                ],
                                                                10
                                                              ) < 0
                                                            ) {
                                                              this.stage.vars.playerFrame.splice(
                                                                this.vars.p45 -
                                                                  1,
                                                                1,
                                                                this.stage.vars
                                                                  .playerFrame[
                                                                  this.vars
                                                                    .p45 - 1
                                                                ] + 1
                                                              );
                                                            }
                                                            this.stage.vars.hitboxHitstun.splice(
                                                              this.vars.p45 - 1,
                                                              1,
                                                              16
                                                            );
                                                            this.stage.vars.hitboxYKnockback.splice(
                                                              this.vars.p45 - 1,
                                                              1,
                                                              6.5
                                                            );
                                                            this.stage.vars.hitboxDamage.splice(
                                                              this.vars.p45 - 1,
                                                              1,
                                                              16
                                                            );
                                                            if (
                                                              this.compare(
                                                                f6,
                                                                4
                                                              ) < 0
                                                            ) {
                                                              this.costume =
                                                                "Elemental Hammer";
                                                            } else {
                                                              if (
                                                                this.compare(
                                                                  f6,
                                                                  16
                                                                ) < 0
                                                              ) {
                                                                this.costume =
                                                                  "" +
                                                                  "Elemental Hammer" +
                                                                  Math.round(
                                                                    f6 / 2.5
                                                                  );
                                                              } else {
                                                                if (
                                                                  this.compare(
                                                                    f6,
                                                                    18
                                                                  ) < 0
                                                                ) {
                                                                  this.costume =
                                                                    "Elemental Hammer7";
                                                                } else {
                                                                  if (
                                                                    this.compare(
                                                                      f6,
                                                                      19
                                                                    ) < 0
                                                                  ) {
                                                                    this.costume =
                                                                      "Elemental Hammer8";
                                                                  } else {
                                                                    if (
                                                                      this.compare(
                                                                        f6,
                                                                        20
                                                                      ) < 0
                                                                    ) {
                                                                      this.costume =
                                                                        "Elemental Hammer9";
                                                                    } else {
                                                                      if (
                                                                        this.compare(
                                                                          f6,
                                                                          22
                                                                        ) < 0
                                                                      ) {
                                                                        this.costume =
                                                                          "Elemental Hammer10";
                                                                      } else {
                                                                        this.costume =
                                                                          "Elemental Hammer11";
                                                                        this.stage.vars.playerState.splice(
                                                                          this
                                                                            .vars
                                                                            .p45 -
                                                                            1,
                                                                          1,
                                                                          0
                                                                        );
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          } else {
                                                            if (
                                                              this.compare(
                                                                s7,
                                                                19.1
                                                              ) === 0
                                                            ) {
                                                              if (
                                                                this.compare(
                                                                  Math.abs(
                                                                    this.stage
                                                                      .vars
                                                                      .playerYSpeed[
                                                                      this.vars
                                                                        .p45 - 1
                                                                    ]
                                                                  ),
                                                                  Math.abs(
                                                                    this.stage
                                                                      .vars
                                                                      .playerXSpeed[
                                                                      this.vars
                                                                        .p45 - 1
                                                                    ] + 1
                                                                  ) * 1
                                                                ) > 0
                                                              ) {
                                                                if (
                                                                  this.compare(
                                                                    this.stage
                                                                      .vars
                                                                      .playerYSpeed[
                                                                      this.vars
                                                                        .p45 - 1
                                                                    ],
                                                                    0
                                                                  ) > 0
                                                                ) {
                                                                  this.costume =
                                                                    "Launch_1";
                                                                } else {
                                                                  this.costume =
                                                                    "Launch_5";
                                                                }
                                                              } else {
                                                                if (
                                                                  this.compare(
                                                                    Math.abs(
                                                                      this.stage
                                                                        .vars
                                                                        .playerYSpeed[
                                                                        this
                                                                          .vars
                                                                          .p45 -
                                                                          1
                                                                      ]
                                                                    ),
                                                                    Math.abs(
                                                                      this.stage
                                                                        .vars
                                                                        .playerXSpeed[
                                                                        this
                                                                          .vars
                                                                          .p45 -
                                                                          1
                                                                      ] + 0.5
                                                                    ) * 0.5
                                                                  ) > 0
                                                                ) {
                                                                  if (
                                                                    this.compare(
                                                                      this.stage
                                                                        .vars
                                                                        .playerYSpeed[
                                                                        this
                                                                          .vars
                                                                          .p45 -
                                                                          1
                                                                      ],
                                                                      0
                                                                    ) > 0
                                                                  ) {
                                                                    this.costume =
                                                                      "Launch_2";
                                                                  } else {
                                                                    this.costume =
                                                                      "Launch_4";
                                                                  }
                                                                } else {
                                                                  this.costume =
                                                                    "Launch_3";
                                                                }
                                                              }
                                                            } else {
                                                              if (
                                                                this.compare(
                                                                  s7,
                                                                  4.1
                                                                ) === 0
                                                              ) {
                                                                if (
                                                                  this.compare(
                                                                    f6,
                                                                    2
                                                                  ) < 0
                                                                ) {
                                                                  this.costume =
                                                                    "auto";
                                                                } else {
                                                                  if (
                                                                    this.compare(
                                                                      f6,
                                                                      3
                                                                    ) < 0
                                                                  ) {
                                                                    this.costume =
                                                                      "auto2";
                                                                  } else {
                                                                    if (
                                                                      this.compare(
                                                                        f6,
                                                                        5
                                                                      ) < 0
                                                                    ) {
                                                                      this.costume =
                                                                        "auto3";
                                                                    } else {
                                                                      if (
                                                                        this.compare(
                                                                          f6,
                                                                          9
                                                                        ) < 0
                                                                      ) {
                                                                        this.costume =
                                                                          "auto4";
                                                                      } else {
                                                                        this.costume =
                                                                          "auto5";
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              } else {
                                                                if (
                                                                  this.compare(
                                                                    s7,
                                                                    27
                                                                  ) === 0
                                                                ) {
                                                                  this.vars.h19 = 1;
                                                                  this.stage.vars.playerFrame.splice(
                                                                    this.vars
                                                                      .p45 - 1,
                                                                    1,
                                                                    -8
                                                                  );
                                                                  this.stage.vars.playerState.splice(
                                                                    this.vars
                                                                      .p45 - 1,
                                                                    1,
                                                                    6
                                                                  );
                                                                } else {
                                                                  if (
                                                                    this.compare(
                                                                      s7,
                                                                      28
                                                                    ) === 0
                                                                  ) {
                                                                    this.costume =
                                                                      "block crouch";
                                                                  } else {
                                                                    if (
                                                                      this.compare(
                                                                        s7,
                                                                        23
                                                                      ) === 0
                                                                    ) {
                                                                      if (
                                                                        this.compare(
                                                                          f6,
                                                                          4
                                                                        ) < 0
                                                                      ) {
                                                                        this.costume =
                                                                          "Hyper Visor";
                                                                      } else {
                                                                        if (
                                                                          this.compare(
                                                                            f6,
                                                                            6
                                                                          ) < 0
                                                                        ) {
                                                                          this.costume =
                                                                            "Hyper Visor2";
                                                                        } else {
                                                                          if (
                                                                            this.compare(
                                                                              f6,
                                                                              8
                                                                            ) <
                                                                            0
                                                                          ) {
                                                                            this.costume =
                                                                              "Hyper Visor3";
                                                                          } else {
                                                                            if (
                                                                              this.compare(
                                                                                f6,
                                                                                9
                                                                              ) <
                                                                              0
                                                                            ) {
                                                                              this.costume =
                                                                                "Hyper Visor4";
                                                                            } else {
                                                                              if (
                                                                                this.compare(
                                                                                  f6,
                                                                                  11
                                                                                ) <
                                                                                0
                                                                              ) {
                                                                                this.costume =
                                                                                  "Hyper Visor5";
                                                                              } else {
                                                                                if (
                                                                                  this.compare(
                                                                                    f6,
                                                                                    13
                                                                                  ) <
                                                                                  0
                                                                                ) {
                                                                                  this.costume =
                                                                                    "Hyper Visor6";
                                                                                } else {
                                                                                  if (
                                                                                    this.compare(
                                                                                      f6,
                                                                                      15
                                                                                    ) <
                                                                                    0
                                                                                  ) {
                                                                                    this.costume =
                                                                                      "Hyper Visor7";
                                                                                  } else {
                                                                                    if (
                                                                                      this.compare(
                                                                                        f6,
                                                                                        19
                                                                                      ) <
                                                                                      0
                                                                                    ) {
                                                                                      this.costume =
                                                                                        "Hyper Visor8";
                                                                                    } else {
                                                                                      if (
                                                                                        this.compare(
                                                                                          f6,
                                                                                          20
                                                                                        ) <
                                                                                        0
                                                                                      ) {
                                                                                        this.costume =
                                                                                          "Hyper Visor9";
                                                                                      } else {
                                                                                        if (
                                                                                          this.compare(
                                                                                            f6,
                                                                                            22
                                                                                          ) <
                                                                                          0
                                                                                        ) {
                                                                                          this.costume =
                                                                                            "Hyper Visor10";
                                                                                        } else {
                                                                                          if (
                                                                                            this.compare(
                                                                                              f6,
                                                                                              23
                                                                                            ) <
                                                                                            0
                                                                                          ) {
                                                                                            this.costume =
                                                                                              "Hyper Visor11";
                                                                                          } else {
                                                                                            if (
                                                                                              this.compare(
                                                                                                f6,
                                                                                                24
                                                                                              ) <
                                                                                              0
                                                                                            ) {
                                                                                              this.costume =
                                                                                                "Hyper Visor12";
                                                                                              if (
                                                                                                String(
                                                                                                  this.stage.vars.playerState.join(
                                                                                                    " "
                                                                                                  ) ??
                                                                                                    ""
                                                                                                ).includes(
                                                                                                  15
                                                                                                )
                                                                                              ) {
                                                                                                this.stage.vars.cutsceneColor = this.stage.vars.playerColor[
                                                                                                  this
                                                                                                    .vars
                                                                                                    .p45 -
                                                                                                    1
                                                                                                ];
                                                                                                yield* this.broadcastAndWait(
                                                                                                  "Black Lvl3"
                                                                                                );
                                                                                                this.stage.vars.playerHealth.splice(
                                                                                                  this.stage.vars.playerState.indexOf(
                                                                                                    15
                                                                                                  ) +
                                                                                                    1 -
                                                                                                    1,
                                                                                                  1,
                                                                                                  this
                                                                                                    .stage
                                                                                                    .vars
                                                                                                    .playerHealth[
                                                                                                    this.stage.vars.playerState.indexOf(
                                                                                                      15
                                                                                                    ) +
                                                                                                      1 -
                                                                                                      1
                                                                                                  ] -
                                                                                                    38
                                                                                                );
                                                                                                this.stage.vars.playerY.splice(
                                                                                                  this
                                                                                                    .vars
                                                                                                    .p45 -
                                                                                                    1,
                                                                                                  1,
                                                                                                  this
                                                                                                    .stage
                                                                                                    .vars
                                                                                                    .playerY[
                                                                                                    this.stage.vars.playerState.indexOf(
                                                                                                      15
                                                                                                    ) +
                                                                                                      1 -
                                                                                                      1
                                                                                                  ]
                                                                                                );
                                                                                                this.stage.vars.playerX.splice(
                                                                                                  this
                                                                                                    .vars
                                                                                                    .p45 -
                                                                                                    1,
                                                                                                  1,
                                                                                                  this
                                                                                                    .stage
                                                                                                    .vars
                                                                                                    .playerX[
                                                                                                    this.stage.vars.playerState.indexOf(
                                                                                                      15
                                                                                                    ) +
                                                                                                      1 -
                                                                                                      1
                                                                                                  ]
                                                                                                );
                                                                                                this.stage.vars.playerFrame.splice(
                                                                                                  this
                                                                                                    .vars
                                                                                                    .p45 -
                                                                                                    1,
                                                                                                  1,
                                                                                                  30
                                                                                                );
                                                                                              }
                                                                                            } else {
                                                                                              if (
                                                                                                this.compare(
                                                                                                  f6,
                                                                                                  25
                                                                                                ) <
                                                                                                0
                                                                                              ) {
                                                                                                this.costume =
                                                                                                  "Hyper Visor13";
                                                                                              } else {
                                                                                                if (
                                                                                                  this.compare(
                                                                                                    f6,
                                                                                                    28
                                                                                                  ) <
                                                                                                  0
                                                                                                ) {
                                                                                                  this.costume =
                                                                                                    "Hyper Visor14";
                                                                                                } else {
                                                                                                  if (
                                                                                                    this.compare(
                                                                                                      f6,
                                                                                                      30
                                                                                                    ) <
                                                                                                    0
                                                                                                  ) {
                                                                                                    this.stage.vars.playerState.splice(
                                                                                                      this
                                                                                                        .vars
                                                                                                        .p45 -
                                                                                                        1,
                                                                                                      1,
                                                                                                      0
                                                                                                    );
                                                                                                  } else {
                                                                                                    if (
                                                                                                      this.compare(
                                                                                                        f6,
                                                                                                        32
                                                                                                      ) <
                                                                                                      0
                                                                                                    ) {
                                                                                                      this.costume =
                                                                                                        "Hyper Visor15";
                                                                                                    } else {
                                                                                                      if (
                                                                                                        this.compare(
                                                                                                          f6,
                                                                                                          35
                                                                                                        ) <
                                                                                                        0
                                                                                                      ) {
                                                                                                        this.costume =
                                                                                                          "Hyper Visor16";
                                                                                                      } else {
                                                                                                        if (
                                                                                                          this.compare(
                                                                                                            f6,
                                                                                                            36
                                                                                                          ) <
                                                                                                          0
                                                                                                        ) {
                                                                                                          this.costume =
                                                                                                            "Hyper Visor17";
                                                                                                        } else {
                                                                                                          this.stage.vars.playerState.splice(
                                                                                                            this
                                                                                                              .vars
                                                                                                              .p45 -
                                                                                                              1,
                                                                                                            1,
                                                                                                            0
                                                                                                          );
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
                                                                    } else {
                                                                      if (
                                                                        this.compare(
                                                                          s7,
                                                                          29
                                                                        ) === 0
                                                                      ) {
                                                                        this.stage.vars.hitboxXKnockback.splice(
                                                                          this
                                                                            .vars
                                                                            .p45 -
                                                                            1,
                                                                          1,
                                                                          4
                                                                        );
                                                                        this.stage.vars.hitboxYKnockback.splice(
                                                                          this
                                                                            .vars
                                                                            .p45 -
                                                                            1,
                                                                          1,
                                                                          0
                                                                        );
                                                                        this.stage.vars.hitboxDamage.splice(
                                                                          this
                                                                            .vars
                                                                            .p45 -
                                                                            1,
                                                                          1,
                                                                          4
                                                                        );
                                                                        if (
                                                                          this.compare(
                                                                            f6,
                                                                            4
                                                                          ) < 0
                                                                        ) {
                                                                          this.stage.vars.playerFrame.splice(
                                                                            this
                                                                              .vars
                                                                              .p45 -
                                                                              1,
                                                                            1,
                                                                            4
                                                                          );
                                                                        } else {
                                                                          if (
                                                                            this.compare(
                                                                              f6,
                                                                              6
                                                                            ) <
                                                                            0
                                                                          ) {
                                                                            this.costume =
                                                                              "Blackhand";
                                                                            if (
                                                                              this.compare(
                                                                                this
                                                                                  .sprites[
                                                                                  "Logic"
                                                                                ]
                                                                                  .vars
                                                                                  .impact19,
                                                                                0
                                                                              ) <
                                                                              0
                                                                            ) {
                                                                              this.stage.vars.playerX.splice(
                                                                                this
                                                                                  .vars
                                                                                  .p45 -
                                                                                  1,
                                                                                1,
                                                                                this
                                                                                  .stage
                                                                                  .vars
                                                                                  .playerX[
                                                                                  this
                                                                                    .vars
                                                                                    .p45 -
                                                                                    1
                                                                                ] +
                                                                                  this
                                                                                    .stage
                                                                                    .vars
                                                                                    .playerDirection[
                                                                                    this
                                                                                      .vars
                                                                                      .p45 -
                                                                                      1
                                                                                  ] *
                                                                                    18
                                                                              );
                                                                            }
                                                                          } else {
                                                                            if (
                                                                              this.compare(
                                                                                f6,
                                                                                7
                                                                              ) <
                                                                              0
                                                                            ) {
                                                                              this.costume =
                                                                                "Blackhand2";
                                                                              if (
                                                                                this.compare(
                                                                                  this
                                                                                    .sprites[
                                                                                    "Logic"
                                                                                  ]
                                                                                    .vars
                                                                                    .impact19,
                                                                                  0
                                                                                ) <
                                                                                0
                                                                              ) {
                                                                                this.stage.vars.playerX.splice(
                                                                                  this
                                                                                    .vars
                                                                                    .p45 -
                                                                                    1,
                                                                                  1,
                                                                                  this
                                                                                    .stage
                                                                                    .vars
                                                                                    .playerX[
                                                                                    this
                                                                                      .vars
                                                                                      .p45 -
                                                                                      1
                                                                                  ] +
                                                                                    this
                                                                                      .stage
                                                                                      .vars
                                                                                      .playerDirection[
                                                                                      this
                                                                                        .vars
                                                                                        .p45 -
                                                                                        1
                                                                                    ] *
                                                                                      8
                                                                                );
                                                                              }
                                                                            } else {
                                                                              if (
                                                                                this.compare(
                                                                                  f6,
                                                                                  11
                                                                                ) <
                                                                                0
                                                                              ) {
                                                                                this.costume =
                                                                                  "Blackhand3";
                                                                                if (
                                                                                  this.compare(
                                                                                    this
                                                                                      .sprites[
                                                                                      "Logic"
                                                                                    ]
                                                                                      .vars
                                                                                      .impact19,
                                                                                    0
                                                                                  ) <
                                                                                  0
                                                                                ) {
                                                                                  if (
                                                                                    this.compare(
                                                                                      f6,
                                                                                      7
                                                                                    ) ===
                                                                                    0
                                                                                  ) {
                                                                                    this.stage.vars.playerDirection.splice(
                                                                                      this
                                                                                        .vars
                                                                                        .p45 -
                                                                                        1,
                                                                                      1,
                                                                                      this
                                                                                        .stage
                                                                                        .vars
                                                                                        .playerDirection[
                                                                                        this
                                                                                          .vars
                                                                                          .p45 -
                                                                                          1
                                                                                      ] *
                                                                                        -1
                                                                                    );
                                                                                  }
                                                                                }
                                                                              } else {
                                                                                if (
                                                                                  this.compare(
                                                                                    f6,
                                                                                    12
                                                                                  ) <
                                                                                  0
                                                                                ) {
                                                                                  this.costume =
                                                                                    "Blackhand4";
                                                                                } else {
                                                                                  if (
                                                                                    this.compare(
                                                                                      f6,
                                                                                      13
                                                                                    ) <
                                                                                    0
                                                                                  ) {
                                                                                    this.costume =
                                                                                      "Blackhand5";
                                                                                  } else {
                                                                                    this.costume =
                                                                                      "Blackhand6";
                                                                                    this.stage.vars.playerState.splice(
                                                                                      this
                                                                                        .vars
                                                                                        .p45 -
                                                                                        1,
                                                                                      1,
                                                                                      0
                                                                                    );
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      } else {
                                                                        if (
                                                                          this.compare(
                                                                            s7,
                                                                            -1
                                                                          ) ===
                                                                          0
                                                                        ) {
                                                                          this.stage.vars.playerFrame.splice(
                                                                            this
                                                                              .vars
                                                                              .p45 -
                                                                              1,
                                                                            1,
                                                                            this
                                                                              .stage
                                                                              .vars
                                                                              .playerFrame[
                                                                              this
                                                                                .vars
                                                                                .p45 -
                                                                                1
                                                                            ] +
                                                                              1
                                                                          );
                                                                          if (
                                                                            this.compare(
                                                                              f6,
                                                                              45
                                                                            ) <
                                                                            0
                                                                          ) {
                                                                            this.costume =
                                                                              "" +
                                                                              "Intro_" +
                                                                              ((f6 %
                                                                                2) +
                                                                                1);
                                                                          } else {
                                                                            if (
                                                                              this.compare(
                                                                                f6,
                                                                                47
                                                                              ) <
                                                                              0
                                                                            ) {
                                                                              this.costume =
                                                                                "Intro_3";
                                                                            } else {
                                                                              if (
                                                                                this.compare(
                                                                                  f6,
                                                                                  55
                                                                                ) <
                                                                                0
                                                                              ) {
                                                                                this.costume =
                                                                                  "Intro_4";
                                                                              } else {
                                                                                if (
                                                                                  this.compare(
                                                                                    f6,
                                                                                    57
                                                                                  ) <
                                                                                  0
                                                                                ) {
                                                                                  this.costume =
                                                                                    "Intro_5";
                                                                                } else {
                                                                                  if (
                                                                                    this.compare(
                                                                                      f6,
                                                                                      59
                                                                                    ) <
                                                                                    0
                                                                                  ) {
                                                                                    this.costume =
                                                                                      "Intro_6";
                                                                                  } else {
                                                                                    if (
                                                                                      this.compare(
                                                                                        f6,
                                                                                        61
                                                                                      ) <
                                                                                      0
                                                                                    ) {
                                                                                      this.costume =
                                                                                        "Intro_7";
                                                                                    } else {
                                                                                      if (
                                                                                        this.compare(
                                                                                          f6,
                                                                                          71
                                                                                        ) <
                                                                                        0
                                                                                      ) {
                                                                                        this.costume =
                                                                                          "Intro_8";
                                                                                      } else {
                                                                                        if (
                                                                                          this.compare(
                                                                                            f6,
                                                                                            73
                                                                                          ) <
                                                                                          0
                                                                                        ) {
                                                                                          this.costume =
                                                                                            "Intro_9";
                                                                                        } else {
                                                                                          if (
                                                                                            this.compare(
                                                                                              f6,
                                                                                              88
                                                                                            ) <
                                                                                            0
                                                                                          ) {
                                                                                            this.costume =
                                                                                              "Intro_10";
                                                                                          } else {
                                                                                            this.costume =
                                                                                              "Intro_11";
                                                                                            this.stage.vars.playerState.splice(
                                                                                              this
                                                                                                .vars
                                                                                                .p45 -
                                                                                                1,
                                                                                              1,
                                                                                              0
                                                                                            );
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
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

  *collision() {}

  *whenIReceiveGame() {
    if (this.compare("", "") === 0) {
      this.deleteThisClone();
    }
    yield* this.clone();
  }
}
