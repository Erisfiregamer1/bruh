import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@1.4.1/dist/index.esm.js";

export default class Red extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("idle", "5776972105a2a8af069fa895579565cf.svg", {
        x: 33.485590683309056,
        y: 37.52364499999999
      }),
      new Costume("idle2", "021c54585319bd1751df637a84c163f7.svg", {
        x: 34.881116421220554,
        y: 35.805020618327575
      }),
      new Costume("idle3", "91c596bb3c13841bb7d29e679ca77f2c.svg", {
        x: 35.9131875284001,
        y: 35.33630561832766
      }),
      new Costume("idle4", "0be103059aeb06113fae8e3f4af65391.svg", {
        x: 34.416781434460574,
        y: 35.02382736368847
      }),
      new Costume("idle5", "72841b803f7fc5826a26222094262def.svg", {
        x: 32.644626794923255,
        y: 36.117494690836196
      }),
      new Costume("idle6", "2c4298e678a222cf34014d261e70aa01.svg", {
        x: 33.409713765697774,
        y: 36.898690890950746
      }),
      new Costume("WalkFront", "2bb5ab91cab5b2b31e1936054a45ba8a.svg", {
        x: 27.392287626788004,
        y: 39.55474585440996
      }),
      new Costume("WalkFront2", "48d9fb3b094865d16dbab7596b8f3ae1.svg", {
        x: 27.57207208482373,
        y: 40.64840469083609
      }),
      new Costume("WalkFront3", "2f0d8e5bf03f8fd3cad89557aff21d86.svg", {
        x: 35.69646650100634,
        y: 46.741717254066145
      }),
      new Costume("WalkFront4", "b350132aff16095f996b4fa75c424003.svg", {
        x: 34.071022102277595,
        y: 45.17933407250845
      }),
      new Costume("WalkFront5", "3936303a8ec01124edfc9ef1670f51bb.svg", {
        x: 27.392287049927177,
        y: 41.89831290893457
      }),
      new Costume("WalkFront6", "b2cea50554381126753303727cb6fe06.svg", {
        x: 27.39228568330907,
        y: 39.554745
      }),
      new Costume("crouch2", "bd58aea39a344c16abb9eff85031af5e.svg", {
        x: 34.14787259764222,
        y: 30.649149800458417
      }),
      new Costume("crouch", "48f661b9f33040c18f138ed36ab72260.svg", {
        x: 31.96053561832767,
        y: 15.025297273769155
      }),
      new Costume("midair", "4abe3c1fba65d322fc73c567447aca0f.svg", {
        x: 33.4855856833091,
        y: 37.52364499999999
      }),
      new Costume("midair2", "f3f3032bdffba861a30f8613eeb4f5c5.svg", {
        x: 36.18264598845721,
        y: 37.52364499999999
      }),
      new Costume("land", "57a32dee9e01066993fec4fc2bede04d.svg", {
        x: 34.147875,
        y: 30.64914999999999
      }),
      new Costume("punch1", "7aa0aee8d80320b5fafca7ac32929640.svg", {
        x: 23.45261150149088,
        y: 37.52364499999999
      }),
      new Costume("punch2", "3a9c657ee58ebab0eac9de150ef8cc2e.svg", {
        x: 21.265320000000003,
        y: 34.17931999999999
      }),
      new Costume("punch3", "d0e1f2d5eb3fad85bdbfdc7ef4691e5b.svg", {
        x: 21.265320000000003,
        y: 34.17931999999999
      }),
      new Costume("punch4", "1e61adaaaa9ab396171754ae934e875b.svg", {
        x: 21.265320000000003,
        y: 34.17931999999999
      }),
      new Costume("punch5", "3a37114fa2240f3507855e14b40fb322.svg", {
        x: 21.265320000000003,
        y: 35.84897983332189
      }),
      new Costume("punch6", "1cdb5b9e0e381f43db5a29e975f278aa.svg", {
        x: 23.58688501659654,
        y: 35.0900437121264
      }),
      new Costume("auto", "a0cd3834d37608fe5baac49ac863aa49.svg", {
        x: 21.265320000000003,
        y: 34.17931999999999
      }),
      new Costume("auto2", "39bb68df0d2094a23338f81bd31719e7.svg", {
        x: 21.265323636363632,
        y: 30.834995272727213
      }),
      new Costume("auto3", "983d72bcb25e54de4343a0d67ce89878.svg", {
        x: 21.265320000000003,
        y: 30.834995272727184
      }),
      new Costume("auto4", "f950a1945a7ae997ad4707e4ac0eec55.svg", {
        x: 21.265320000000003,
        y: 30.83499527272707
      }),
      new Costume("auto5", "0edfa99cebdb949a6c6bf1ff88db46e9.svg", {
        x: 26.518242501490903,
        y: 37.24495127272726
      }),
      new Costume("high kick1", "807cbe877e420719e6f2f3bf0d11be0a.svg", {
        x: 40.66120940281155,
        y: 36.27364499999999
      }),
      new Costume("high kick2", "dec14a3971c20880a3679dd3297d9237.svg", {
        x: 44.991548428855026,
        y: 34.02364499999999
      }),
      new Costume("high kick4", "2289936741b0de2bf7826f8630dc0908.svg", {
        x: 44.99154026030172,
        y: 34.02364499999999
      }),
      new Costume("high kick3", "34e077dc7fe673d647474e93175221cc.svg", {
        x: 44.991537630150816,
        y: 34.02364499999999
      }),
      new Costume("high kick5", "bd622107920ca9539c044340a1fc3e7b.svg", {
        x: 44.9915463150754,
        y: 34.02364499999999
      }),
      new Costume("high kick6", "0220675e1ff6321435eabaa0cdc8261f.svg", {
        x: 36.24153631507539,
        y: 37.27364499999999
      }),
      new Costume("hurt head", "a1c288db8df9750894586144f234197a.svg", {
        x: 46.26746830541239,
        y: 37.42972431612782
      }),
      new Costume("hurt head2", "aa1b83b8328016b5c6266e1f67c3ff20.svg", {
        x: 34.89811664069279,
        y: 37.52364499999999
      }),
      new Costume("hurt torso", "85137f144380804193160eab9b2fa82e.svg", {
        x: 26.808561364441744,
        y: 29.15366969635903
      }),
      new Costume("hurt torso2", "75b80e6332fe74958b97dca78ad772f7.svg", {
        x: 29.864040154437106,
        y: 31.585573338478326
      }),
      new Costume("block torso", "096adcb63875391ec3545cdfe9bcbb8d.svg", {
        x: 35.378433689696124,
        y: 32.9779916047535
      }),
      new Costume("block torso2", "bde7f21ab38638872357bab9ffc80266.svg", {
        x: 36.07733257657463,
        y: 37.704851719560736
      }),
      new Costume("block head", "30b111baa34fee6eadf8980870ec28e1.svg", {
        x: 34.89811499999999,
        y: 37.52364499999999
      }),
      new Costume("block head2", "ec7ab231c8caa2cb8f047cb39adf4ea2.svg", {
        x: 37.212210324896176,
        y: 37.76367460278698
      }),
      new Costume("block crouch", "e51be18c0c267cd601b15bcce5368c50.svg", {
        x: 28.96847796242335,
        y: 15.698978850752496
      }),
      new Costume("air punch", "b3ea7e507da0562f9132d69ca8a42a3b.svg", {
        x: 33.64615397206896,
        y: 34.68545100700243
      }),
      new Costume("air punch2", "b1a6bce02cbb88c85b7dfd195f3a8d70.svg", {
        x: 26.157535000000024,
        y: 34.685451387885394
      }),
      new Costume("air punch3", "32b64ee553b3a1c0b73a3fc67e0e2d02.svg", {
        x: 26.157535000000024,
        y: 33.68545379596179
      }),
      new Costume("air punch4", "e6b3a52f962294374fe6e58277044936.svg", {
        x: 26.15751499999999,
        y: 33.68546069394273
      }),
      new Costume("air punch5", "d3ae9d0fca38100eb5bbcf9cf3062e52.svg", {
        x: 31.625804625786543,
        y: 34.73357096564547
      }),
      new Costume("low kick", "e87082a4af10ec360f8db3f75828434e.svg", {
        x: 31.991478548234113,
        y: 15.025284999999997
      }),
      new Costume("low kick2", "e431ebbd834f6ef5b34d075a3a306a7d.svg", {
        x: 30.321820322382763,
        y: 14.873509999999953
      }),
      new Costume("low kick3", "f27ab549cbf2d5d5e2f5e72e13293866.svg", {
        x: 59.4649805508771,
        y: 14.114573712126457
      }),
      new Costume("low kick4", "9814cd4c1997ddaff5da5bb3614018af.svg", {
        x: 59.768551774022285,
        y: 14.114575000000002
      }),
      new Costume("low kick5", "82439466f1c996d739480f02fa87cd13.svg", {
        x: 57.339955652826774,
        y: 14.114564999999999
      }),
      new Costume("low kick6", "64bb157d31dc7ace9da209ee13c41dbd.svg", {
        x: 42.07984820115854,
        y: 11.837751883535788
      }),
      new Costume("low kick7", "fc500727824393463cab42c030f3e98f.svg", {
        x: 42.252389428555034,
        y: 11.230607106080328
      }),
      new Costume("low kick8", "e4838bc13f787c6b28efe3f403ef2bcf.svg", {
        x: 36.16238154135203,
        y: 9.409147909103325
      }),
      new Costume("low kick9", "fa2b13945422a67face414722ddc261e.svg", {
        x: 37.80648507958844,
        y: 11.534171606046073
      }),
      new Costume("low kick10", "642aeb318b08f706d50a724b1dbc6875.svg", {
        x: 27.198129915984794,
        y: 14.266348712126444
      }),
      new Costume("low punch", "a67a8fcd8e78090761b1e62465ecef05.svg", {
        x: 33.24148677408547,
        y: 15.525295
      }),
      new Costume("low punch2", "bfb1a35fc4dcc5d077642787cf4f3e56.svg", {
        x: 21.265306774085474,
        y: 13.242920039008908
      }),
      new Costume("low punch3", "1b73d6ba117e33c75c0287ae154a11fc.svg", {
        x: 21.52806534537237,
        y: 13.437323842321433
      }),
      new Costume("low punch4", "fedb6b2503941138aa312dc957b6a9d9.svg", {
        x: 31.991486774085473,
        y: 15.025295
      }),
      new Costume("hurt air", "1f0906de125f666b552e05f427338098.svg", {
        x: 34.204449404107635,
        y: 26.2828789628675
      }),
      new Costume("hurt air2", "d126e66c82158af62e5f5d1d7d04b710.svg", {
        x: 31.190249992529942,
        y: 32.158249344454504
      }),
      new Costume("air kick", "8150ef7f65b6e6f53f8f9ab93ca25b35.svg", {
        x: 27.48558068330908,
        y: 30.773644999999988
      }),
      new Costume("air kick2", "d88e6a4e49803b66ad704a3584cda245.svg", {
        x: 28.657545,
        y: 30.773644999999988
      }),
      new Costume("air kick3", "b9508083cc6268acbde79821bd4340af.svg", {
        x: 29.157545,
        y: 30.023644999999988
      }),
      new Costume("air kick4", "4c9af67403e76b80e2b5f41e679aba8b.svg", {
        x: 54.12282659277821,
        y: 23.10194418450388
      }),
      new Costume("air kick5", "6e82ebb738c24e87a9857b3f0d6a6d6b.svg", {
        x: 55.81918968551321,
        y: 23.052626731069154
      }),
      new Costume("air kick6", "652d34c327d3c8d6ea6ddcc9bb4a7c75.svg", {
        x: 56.1186733331715,
        y: 23.831110494190426
      }),
      new Costume("air kick7", "e6617eb66f61b655bff0aa7c9b9cdf19.svg", {
        x: 45.77720087890145,
        y: 26.58585535143095
      }),
      new Costume("lowpunch", "6d7d604b2693413232351965da198798.svg", {
        x: 25.1670321818182,
        y: 34.731195000000014
      }),
      new Costume("lowpunch4", "c4e1c6296b413c274a3f1fc9eafc9750.svg", {
        x: 29.116310986836396,
        y: 35.45826520795919
      }),
      new Costume("lowpunch5", "69c24a73eb17b0f9d0af1ffab721ae65.svg", {
        x: 28.597126011763947,
        y: 41.79230910075006
      }),
      new Costume("lowpunch6", "78eedda7d9cabe515b18a47d7f124a69.svg", {
        x: 17.22198218511417,
        y: 41.34031938330415
      }),
      new Costume("lowpunch2", "67f114872c5147ab572ba6c0ca25b2fe.svg", {
        x: 17.606249442069725,
        y: 48.52289362315324
      }),
      new Costume("lowpunch7", "1e5fe4524b52de510b63ddb33879e1d8.svg", {
        x: 16.61233999999999,
        y: 33.522896633523686
      }),
      new Costume("lowpunch8", "e8c9620711587c9a4721eb601177d11e.svg", {
        x: 25.385844337771914,
        y: 30.523644999999988
      }),
      new Costume("parry", "e68c7a5701ebe947837987fca48339d4.svg", {
        x: 21.265319999999974,
        y: 34.731195634889275
      }),
      new Costume("hadouken", "ce3b62a7a80d62daf5ac4ee99f94dea1.svg", {
        x: 31.127725712357574,
        y: 33.188776666727705
      }),
      new Costume("AfterBurn1", "515f1766922a6fc38fc550ce73606755.svg", {
        x: 31.127724257583537,
        y: 33.18877226076029
      }),
      new Costume("AfterBurn2", "955b2da47eb8411d4c44cbf892dd8e5c.svg", {
        x: 31.127732802809476,
        y: 33.188777854792875
      }),
      new Costume("AfterBurn3", "041a791a61b1b2caf06ea104c9b3d6eb.svg", {
        x: 31.127732802809476,
        y: 33.188777854792875
      }),
      new Costume("AfterBurn4", "aba3f92eaf7a9c58db725ac563ef1a4d.svg", {
        x: 31.127729893261403,
        y: 33.188779042858016
      }),
      new Costume("AfterBurn5", "ae57ab1d03b35022eac106323b4f6b8d.svg", {
        x: 31.12772552893935,
        y: 35.68877582495577
      }),
      new Costume("AfterBurn6", "c415794c2d9c0b59a4fa84c8ea4d044a.svg", {
        x: 31.12772354522602,
        y: 35.688770594032576
      }),
      new Costume("charge", "674ae6e1b5772d3726f326c971a3fb9c.svg", {
        x: 32.88018060071266,
        y: 31.72840468987357
      }),
      new Costume("wallbounce", "e8da143d027c96cb6957b512dd6787da.svg", {
        x: 45.91312529305196,
        y: 29.15367416595865
      }),
      new Costume("B.U.C.1", "8a9c12dd94fd2bb82ce0a02bde07ef09.svg", {
        x: 31.76467849138345,
        y: 29.998914363636374
      }),
      new Costume("B.U.C.2", "51ff274cccd443c1c561dc5262625294.svg", {
        x: 30.907203085710847,
        y: 31.328762765407333
      }),
      new Costume("B.U.C.3", "c6752b9a43ccded30ba2b9997a1f2220.svg", {
        x: 28.713475139965453,
        y: 48.07146267779095
      }),
      new Costume("B.U.C.4", "a03b62cd30ed2b2a8c5bf3de86476248.svg", {
        x: 29.580964999999992,
        y: 48.75762171627241
      }),
      new Costume("B.U.C.5", "929f5a909d1ad69f4bb30fdcc9d77a26.svg", {
        x: 29.580963065364926,
        y: 48.98392330744602
      }),
      new Costume("B.U.C.6", "c3892476040e0f0c6b0e1e9ca8a4ac19.svg", {
        x: 21.6195586998206,
        y: 40.683007643568885
      }),
      new Costume("B.U.C.7", "a869f58fdde98629e6b9c4173c52e599.svg", {
        x: 26.317492063456967,
        y: 40.68300292327774
      }),
      new Costume("B.U.C._Die", "c69c6e3471917c00823ad2a154a8b163.svg", {
        x: 34.216548998943324,
        y: 48.48164081133467
      }),
      new Costume("B.U.C._Die2", "d09f9899f9e634829811ed225b462d6f.svg", {
        x: 36.52263761881687,
        y: 40.55304066645476
      }),
      new Costume("B.U.C._Die3", "8e70596384d00c22e0dd5960f91694b3.svg", {
        x: 37.549534831327065,
        y: 26.678546960927235
      }),
      new Costume("Grab1", "3fe7bbf0f991217c01b802b5677e378b.svg", {
        x: 32.22037949012727,
        y: 37.52364499999999
      }),
      new Costume("Grab2", "8a0d86338e1ab79cecd310bac567990e.svg", {
        x: 27.665632877981807,
        y: 37.52364499999999
      }),
      new Costume("Grab3", "b5773d2e3e33967f6c7f6f7b32f48b79.svg", {
        x: 21.265322877981816,
        y: 37.52364499999999
      }),
      new Costume("Grab4", "35b93711445283f33f153db57f7519c6.svg", {
        x: 21.265322877981816,
        y: 37.52364499999999
      }),
      new Costume("Grab5", "ea0370be39b19fd31d6b63d426c2527a.svg", {
        x: 21.265322877981816,
        y: 37.52364499999999
      }),
      new Costume("Throw", "8831de9481867ac8929be456e263fb0b.svg", {
        x: 21.265322877981816,
        y: 37.52364499999999
      }),
      new Costume("Throw2", "b9fcb6357d2b6ee24c22e7f5ef3cb48a.svg", {
        x: 25.37459143007169,
        y: 35.93723723106058
      }),
      new Costume("Throw3", "5ab964cad1ce2931fc7f9f7eb4ca1362.svg", {
        x: 35.0038445469454,
        y: 34.23410889772728
      }),
      new Costume("Throw4", "fed0996dcbf2a9e0bd9d149176f86f99.svg", {
        x: 35.0038445469454,
        y: 34.23410889772728
      }),
      new Costume("Throw5", "10016beeb8a0e2a73aa71c9955a36cc8.svg", {
        x: 68.68746660908815,
        y: 34.23410889772728
      }),
      new Costume("Throw6", "f1512ea2eff955133e317227959a2d80.svg", {
        x: 64.37253756060596,
        y: 30.663072566643137
      }),
      new Costume("Throw7", "e5c0c13cecac066db7ea48107c486db8.svg", {
        x: 41.036251445688606,
        y: 37.191733734313516
      }),
      new Costume("Die", "a788111697f95cd7ff365a41656391de.svg", {
        x: 31.81342331967278,
        y: 29.998914363636345
      }),
      new Costume("Die2", "1e439284167bb3131ba7ef368e4fecc2.svg", {
        x: 24.76191696871433,
        y: 28.655268607281187
      }),
      new Costume("Die3", "2b91016d6e0c59a1960716f961a34e49.svg", {
        x: 40.79780681818184,
        y: -3.9310701839987985
      }),
      new Costume("Die4", "41e3f9cdda946e38cc8ea2ee78f45af3.svg", {
        x: 42.842712360370285,
        y: -0.48229852191659006
      }),
      new Costume("Flaming Pulse", "d064f37b65f1e88f8853f9ea2d02608c.svg", {
        x: 31.76468,
        y: 33.21173596282253
      }),
      new Costume("Flaming Pulse2", "de839b2db351b841a70a67198ca79d91.svg", {
        x: 36.43787412774179,
        y: 33.21173596282253
      }),
      new Costume("Flaming Pulse3", "fb13b43e9744009b4e77b315e4dddee0.svg", {
        x: 40.218972869096746,
        y: 33.21173596282253
      }),
      new Costume("Flaming Pulse4", "bd26bf2d6fc205611facd719f65d771d.svg", {
        x: 42.85781465221271,
        y: 33.21173596282253
      }),
      new Costume("Flaming Pulse5", "0c872db09296b48fda5705eea67176ab.svg", {
        x: 44.902343497939256,
        y: 33.21173596282253
      }),
      new Costume("Flaming Pulse6", "c1ed0eda9cbeed56591bb56110ddf4f3.svg", {
        x: 54.89983908857562,
        y: 34.833658992838366
      }),
      new Costume("Flaming Pulse7", "ce974fab554410a13789efb659f032b6.svg", {
        x: 63.868884908431596,
        y: 33.95743349091882
      }),
      new Costume("Flaming Pulse8", "fa48ba0716fabb1c78ff4e8ec7d08f52.svg", {
        x: 59.48776541367354,
        y: 33.957430284982905
      }),
      new Costume("Flaming Pulse9", "bb703d0befd33659827cfcffced2c391.svg", {
        x: 41.50893500000001,
        y: 33.957429198516024
      }),
      new Costume("Flaming Pulse10", "62b60554ca3f6de86e897d06a9474a99.svg", {
        x: 41.508925000000005,
        y: 33.95742839703206
      }),
      new Costume("Flaming Pulse11", "3faa8cb676f1dbabaccce5b422be2216.svg", {
        x: 32.36415605338675,
        y: 33.72667477120976
      }),
      new Costume("Ultra Rushdown", "d3db67bcac46451bf094bf1fcf0f806e.svg", {
        x: 38.097620000000006,
        y: 39.020849999999996
      }),
      new Costume("Ultra Rushdown2", "be46b0f11df7e3b5b205dd8fb89b8d7a.svg", {
        x: 38.097620000000006,
        y: 39.020849999999996
      }),
      new Costume("Ultra Rushdown3", "f846719993a18ac2fdc8548e659e0008.svg", {
        x: 38.097620000000006,
        y: 39.020849999999996
      }),
      new Costume("Ultra Rushdown4", "46c9ab6f5808da658edb76f641e6241b.svg", {
        x: 38.097620000000006,
        y: 39.97395316943684
      }),
      new Costume("Ultra Rushdown5", "00721eae8aaaab603bac6bd4d182b525.svg", {
        x: 71.77714572457356,
        y: 37.96457352704377
      }),
      new Costume("Ultra Rushdown6", "bc35ba61ce1906397378b5040a7e37c1.svg", {
        x: 71.16292024736799,
        y: 37.39972774309939
      }),
      new Costume("Ultra Rushdown7", "95aabcdcb42c951da049189ff270a235.svg", {
        x: 60.19735497727274,
        y: 37.433649429078685
      }),
      new Costume("Ultra Rushdown8", "f4592bc7c34109c78d35d07fb212de3e.svg", {
        x: 23.75491500000001,
        y: 36.86879211477731
      }),
      new Costume("Ultra Rushdown9", "f61eb2a18c9be80b21978cfeab1e0dd2.svg", {
        x: 71.77713717372066,
        y: 37.964571468108204
      }),
      new Costume("Ultra Rushdown10", "41aa36d45ce3a56841a7fcdbbd0614e1.svg", {
        x: 67.77381561100427,
        y: 37.399724797186906
      }),
      new Costume("Ultra Rushdown11", "859e5a49e949566a3b2e63d3cd636eed.svg", {
        x: 28.4270268656783,
        y: 37.433645002281935
      }),
      new Costume("Ultra Rushdown12", "c46f8de91ddeb4ff6da6650112d337c7.svg", {
        x: 23.754905000000036,
        y: 36.868789615918274
      }),
      new Costume("Ultra Rushdown13", "e91b0144181da65da17cbcf162e57c82.svg", {
        x: 27.365454999999997,
        y: 31.395364999999998
      }),
      new Costume("Ultra Rushdown14", "9e7ea4b5e94cfcc5383cbca7e24b9849.svg", {
        x: 30.561385,
        y: 39.629499144357
      }),
      new Costume("Ultra Rushdown15", "09897534ca4615ec1d01994ad1b3976a.svg", {
        x: 32.428671828807495,
        y: 67.47469
      }),
      new Costume("Ultra Rushdown16", "023f0080fd6976cfdb19468c553f740e.svg", {
        x: 33.48257585006269,
        y: 71.14622002272728
      }),
      new Costume("Ultra Rushdown17", "63db540d6587f88d01e233f9f381ed10.svg", {
        x: 33.44135389962918,
        y: 81.03110854545463
      }),
      new Costume("Hard Knuckle", "1a598843c2fab829056de1ac4bb75773.svg", {
        x: 55.58022579645612,
        y: 47.406908600664536
      }),
      new Costume("Hard Knuckle2", "b374a4dcd714767a95c253736db27f12.svg", {
        x: 43.16147190742146,
        y: 50.819322997957784
      }),
      new Costume("Hard Knuckle3", "81cb2b49bcab54251df6f21f65e7c70f.svg", {
        x: 35.807102268800634,
        y: 49.933097969281505
      }),
      new Costume("Hard Knuckle4", "6d5204121445bbbf50df8b7b955a40b6.svg", {
        x: 28.01702344304104,
        y: 44.210763770946585
      }),
      new Costume("Hard Knuckle5", "63a38cb527775664958c5816656f54ba.svg", {
        x: 31.913425511893536,
        y: 43.50841821333708
      }),
      new Costume("Hard Knuckle6", "8e78138cf2a2ecb5701e0b7fed68ec9f.svg", {
        x: 32.61576727930901,
        y: 44.32689346984924
      }),
      new Costume("Hard Knuckle7", "d52e4f77d96099eb004e49c702b67933.svg", {
        x: 26.258979176941892,
        y: 36.333945521110024
      }),
      new Costume("Reflector", "6e193719fe28504557e3afba49d6f4be.svg", {
        x: 26.239554457527248,
        y: 37.52364499999999
      }),
      new Costume("Reflector2", "43307f913e093767f380e15be82ee3a7.svg", {
        x: 21.265319742282855,
        y: 36.603215073908274
      }),
      new Costume("Reflector3", "5ff4629352c2142691cf48bb3d5824b4.svg", {
        x: 22.18601846955559,
        y: 36.603206814496275
      }),
      new Costume("Reflector4", "d96a87ae963dc91a678316557108f36f.svg", {
        x: 23.176085000000057,
        y: 33.06453500000001
      }),
      new Costume("Reflector5", "fc978bed3ba4c3a7fd2f6145a9588b52.svg", {
        x: 21.26529500000018,
        y: 30.556291454545487
      }),
      new Costume("Reflector6", "3ba5b218eae95c931e2bcaced9cebbb3.svg", {
        x: 21.301006181818366,
        y: 30.277597727272763
      }),
      new Costume("Reflector7", "480f119b21191768d25b0953d90e4388.svg", {
        x: 21.301006181818366,
        y: 30.277597727272735
      }),
      new Costume("Reflector8", "9fc556858e73215d0305787bf8a5458e.svg", {
        x: 22.219644863874777,
        y: 36.96625754545457
      }),
      new Costume("Launch_1", "bf486b83931f831fb09c5460e5c890e6.svg", {
        x: 39.71199562102174,
        y: 40.095129358755315
      }),
      new Costume("Launch_2", "85f03fd78f9fffeb77e112a324c593aa.svg", {
        x: 41.9683829295233,
        y: 38.328362830775205
      }),
      new Costume("Launch_3", "5a027e26ea35263daffef3bf008da8b2.svg", {
        x: 46.00787865545351,
        y: 21.774760276809133
      }),
      new Costume("Launch_4", "90d03b97032113d85ed798162a975e0e.svg", {
        x: 44.16584298110689,
        y: 43.29248899234335
      }),
      new Costume("Launch_5", "819a4286eacbe4a7547802de96288366.svg", {
        x: 34.41211946445307,
        y: 47.511071363636376
      }),
      new Costume("Run_1", "033f990b71699dd0cb4f02a29c10133e.svg", {
        x: 42.059228082683006,
        y: 25.964259999999996
      }),
      new Costume("Run_2", "bf412b0eaa2c4555fd2a11961906143f.svg", {
        x: 41.48153398363587,
        y: 25.964259999999996
      }),
      new Costume("Run_3", "894e2b8567579883f70beca32c61ad95.svg", {
        x: 38.99620856560276,
        y: 22.36980971199486
      }),
      new Costume("Run_4", "7e2c44229e4dd839511e472ae0fa4f0d.svg", {
        x: 25.288349760331386,
        y: 19.254619750395563
      }),
      new Costume("Run_5", "ff58009cb9132190337711fe6558a2b8.svg", {
        x: 33.80221627508095,
        y: 17.816839884797957
      }),
      new Costume("Run_6", "36d3f9c8a7aff030b662953cdd700c60.svg", {
        x: 42.059228082683006,
        y: 25.964259999999996
      }),
      new Costume("Run_7", "add7ab291453965d153edd5aabedff28.svg", {
        x: 41.481531336215255,
        y: 25.964259999999996
      }),
      new Costume("Run_8", "d6304a9a9abd8885d513c260d6a571cc.svg", {
        x: 38.99620856560276,
        y: 22.36980971199486
      }),
      new Costume("Run_9", "f177118d0bd91c51e896f4e903db8a6d.svg", {
        x: 25.288350527751675,
        y: 19.254619750395563
      }),
      new Costume("Run_10", "ab5d1b97f857bd19478bb16d5212f0d2.svg", {
        x: 33.80221025876338,
        y: 17.81683988479793
      }),
      new Costume("Backdash", "c085a57f3fd22ff74eee011b782c43a8.svg", {
        x: 60.82158917570587,
        y: 31.78716526426149
      }),
      new Costume("Fire Boost", "50ce699d805251bcd1929f78a401d65b.svg", {
        x: 25.809567492639417,
        y: 37.52364499999999
      }),
      new Costume("Fire Boost2", "a567abce989606ba36e8bbcfb210282b.svg", {
        x: 21.26532499999999,
        y: 37.52364499999999
      }),
      new Costume("Fire Boost3", "c51d0a271ea8ed8d746bebf0284c3942.svg", {
        x: 21.26532363848918,
        y: 37.92250961279677
      }),
      new Costume("Fire Boost4", "50be58cf443d380d0af8c0ff527a7550.svg", {
        x: 23.242346591325656,
        y: 37.92249961279671
      }),
      new Costume("Fire Boost5", "37249ac27687b30d5f51969ec5d58bb3.svg", {
        x: 114.72173215103037,
        y: 17.81683680633202
      }),
      new Costume("Fire Boost6", "b129d533b657744dfbd6090295c9306d.svg", {
        x: 102.0194342363036,
        y: 17.816836806331963
      }),
      new Costume("Fire Boost7", "2b45d5c1fa3d0db9fdf862f1f6d04c7f.svg", {
        x: 45.54846674923576,
        y: 17.816824999999938
      }),
      new Costume("Fire Boost8", "b191e5071300b386edb98e2edcce6261.svg", {
        x: 42.2634331049029,
        y: 15.836847835111627
      }),
      new Costume("Fire Boost9", "f3eb0dffda0d83b4a326af06e3658d51.svg", {
        x: 41.09246651687411,
        y: 15.83685008035684
      }),
      new Costume("Fire Boost10", "0ccb0dda3ba82dc0a3568e7a9dfdd092.svg", {
        x: 41.09246005662288,
        y: 15.836852915468455
      }),
      new Costume("Fire Boost11", "5c050e3fce4baf54d0a88406a10f30ae.svg", {
        x: 34.22106071731986,
        y: 20.150123326385597
      }),
      new Costume("Ultra Rushdown18", "5e9fdf6baf1bdb24456deee7ab3e4511.svg", {
        x: 57.811064999999985,
        y: 34.36144775120698
      }),
      new Costume("Ultra Rushdown19", "e69d6f4cdd822ad8b3ca362c1aef42c8.svg", {
        x: 58.81105499999998,
        y: 35.361450334942646
      }),
      new Costume("Ultra Rushdown20", "82decae06ab8056ebb7a1513d2bb2646.svg", {
        x: 34.22106071731986,
        y: 20.150122904735866
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "game" }, this.whenIReceiveGame)
    ];

    this.vars.p17 = 3;
    this.vars.state5 = 0;
    this.vars.x14 = 15;
    this.vars.y14 = 0;
    this.vars.direction7 = -1;
    this.vars.frame8 = 93;
    this.vars.xSpeed5 = 0;
    this.vars.ySpeed5 = 0;
    this.vars.i5 = 2;
    this.vars.length5 = 13;
    this.vars.part5 = 0;
    this.vars.p18 = 3;
    this.vars.touching5 = 0;
    this.vars.h5 = 3;
    this.vars.hx5 = 0;
    this.vars.hy5 = 0;
    this.vars.hxSize5 = 0;
    this.vars.hySize5 = 0;
    this.vars.health5 = 100;
    this.vars.hDamage5 = 0;
    this.vars.p19 = 0;
    this.vars.state6 = 0;
    this.vars.x15 = 0;
    this.vars.y15 = 0;
    this.vars.direction8 = 0;
    this.vars.frame9 = 0;
    this.vars.xSpeed6 = 0;
    this.vars.ySpeed6 = 0;
    this.vars.i6 = 0;
    this.vars.length6 = 0;
    this.vars.part6 = 0;
    this.vars.p20 = 0;
    this.vars.touching6 = 0;
    this.vars.h6 = 0;
    this.vars.hx6 = 0;
    this.vars.hy6 = 0;
    this.vars.hxSize6 = 0;
    this.vars.hySize6 = 0;
    this.vars.health6 = 0;
    this.vars.hDamage6 = 0;
    this.vars.impact4 = 0;
    this.vars.p21 = 0;
    this.vars.state7 = 0;
    this.vars.x16 = 0;
    this.vars.y16 = 0;
    this.vars.direction9 = 0;
    this.vars.frame10 = 0;
    this.vars.xSpeed7 = 0;
    this.vars.ySpeed7 = 0;
    this.vars.i7 = 0;
    this.vars.length7 = 0;
    this.vars.part7 = 0;
    this.vars.p22 = 0;
    this.vars.touching7 = 0;
    this.vars.h7 = 0;
    this.vars.hx7 = 0;
    this.vars.hy7 = 0;
    this.vars.hxSize7 = 0;
    this.vars.hySize7 = 0;
    this.vars.health7 = 0;
    this.vars.hDamage7 = 0;
    this.vars.impact5 = 0;
    this.vars.commands3 = 0;
    this.vars.command3 = 0;
    this.vars.inputs5 = [false, false, false, false, false, false];
    this.vars.hurtboxY5 = [11.5, 3.5, -8.5];
    this.vars.hurtboxYSize5 = [7, 9, 15];
    this.vars.hurtboxXSize5 = [5, 10, 12];
    this.vars.inputs6 = [];
    this.vars.hurtboxY6 = [];
    this.vars.hurtboxYSize6 = [];
    this.vars.hurtboxXSize6 = [];
    this.vars.inputs7 = [];
    this.vars.hurtboxY7 = [];
    this.vars.hurtboxYSize7 = [];
    this.vars.hurtboxXSize7 = [];
    this.vars.inputNames3 = [];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *clone() {
    this.visible = false;
    this.vars.p17 = 1;
    for (let i = 0; i < this.stage.vars.OfPlayers; i++) {
      if (
        this.compare(
          this.stage.vars.playerCharacter[this.vars.p17 - 1],
          "Red"
        ) === 0
      ) {
        this.createClone();
      }
      this.vars.p17 += 1;
    }
  }

  *startAsClone() {
    this.visible = true;
    this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
    while (true) {
      this.effects.color = this.stage.vars.playerColor[this.vars.p17 - 1];
      if (this.compare(this.stage.vars.pauseMenu, 0) === 0) {
        this.goto(
          (this.stage.vars.playerX[this.vars.p17 - 1] +
            this.stage.vars.rumbleX -
            this.stage.vars.scrollX) *
            4,
          (this.stage.vars.playerY[this.vars.p17 - 1] +
            this.stage.vars.rumbleY) *
            4 -
            20
        );
        this.direction = this.stage.vars.playerDirection[this.vars.p17 - 1];
        yield* this.costumes2(
          this.stage.vars.playerState[this.vars.p17 - 1],
          this.stage.vars.playerFrame[this.vars.p17 - 1]
        );
        if (
          this.compare(this.stage.vars.playerY[this.vars.p17 - 1], 1) < 0 &&
          String(
            this.stage.vars.playerCommands[this.vars.p17 - 1] ?? ""
          ).includes("lx") &&
            !(
              this.compare(
                this.stage.vars.playerState[this.vars.p17 - 1],
                29
              ) === 0
            )
        ) {
          this.stage.vars.playerState.splice(this.vars.p17 - 1, 1, 29);
          this.stage.vars.playerFrame.splice(this.vars.p17 - 1, 1, 0);
          this.stage.vars.playerCommands.splice(this.vars.p17 - 1, 1, "l");
        }
        if (this.compare(this.vars.h5, 1) === 0) {
          this.effects.color =
            this.stage.vars.playerColor[this.vars.p17 - 1] +
            (this.stage.vars.gameframe % 8) * 5;
          this.effects.brightness = (this.stage.vars.gameframe % 8) * 2;
          this.stage.vars.hitboxDamage.splice(
            this.vars.p17 - 1,
            1,
            this.stage.vars.hitboxDamage[this.vars.p17 - 1] * 2
          );
          if (
            this.compare(this.stage.vars.playerEx[this.vars.p17 - 1], 0.001) < 0
          ) {
            this.vars.h5 = 0;
            this.stage.vars.playerEx.splice(this.vars.p17 - 1, 1, 0);
          } else {
            this.stage.vars.playerEx.splice(
              this.vars.p17 - 1,
              1,
              this.stage.vars.playerEx[this.vars.p17 - 1] - 0.01
            );
          }
          if (
            this.compare(this.stage.vars.playerState[this.vars.p17 - 1], 22) ===
            0
          ) {
            if (
              this.compare(this.stage.vars.playerFrame[this.vars.p17 - 1], 20) >
              0
            ) {
              this.vars.i5 = 1;
              this.stage.vars.playerState.splice(this.vars.p17 - 1, 1, 20);
              this.stage.vars.playerFrame.splice(this.vars.p17 - 1, 1, 3);
              this.stage.vars.playerDirection.splice(
                this.vars.p17 - 1,
                1,
                this.stage.vars.playerDirection[this.vars.p17 - 1] * -1
              );
            }
          }
          if (
            this.compare(this.stage.vars.playerState[this.vars.p17 - 1], 20) ===
            0
          ) {
            if (this.compare(this.vars.i5, 1) === 0) {
              this.stage.vars.hitboxDamage.splice(this.vars.p17 - 1, 1, 8);
              this.stage.vars.hitboxHitstun.splice(this.vars.p17 - 1, 1, 5);
              if (
                this.compare(
                  this.stage.vars.playerFrame[this.vars.p17 - 1],
                  5
                ) > 0
              ) {
                this.stage.vars.playerY.splice(this.vars.p17 - 1, 1, 8);
                this.stage.vars.playerState.splice(this.vars.p17 - 1, 1, 26);
                this.stage.vars.playerFrame.splice(this.vars.p17 - 1, 1, 12);
              }
            } else {
              null;
            }
          }
          if (
            this.compare(this.stage.vars.playerState[this.vars.p17 - 1], 26) ===
            0
          ) {
            if (this.compare(this.vars.i5, 1) === 0) {
              this.stage.vars.hitboxDamage.splice(this.vars.p17 - 1, 1, 8);
              this.stage.vars.hitboxHitstun.splice(this.vars.p17 - 1, 1, 5);
              if (
                this.compare(
                  this.stage.vars.playerFrame[this.vars.p17 - 1],
                  16
                ) > 0
              ) {
                this.stage.vars.playerState.splice(this.vars.p17 - 1, 1, 25);
                this.stage.vars.playerFrame.splice(this.vars.p17 - 1, 1, 5);
                this.vars.i5 = 0;
              }
            } else {
              null;
            }
          }
        }
      }
      yield;
    }
  }

  *costumes2(s3, f2) {
    this.effects.brightness = 0;
    if (this.compare(s3, 0) === 0) {
      this.costume = (Math.floor(f2 / 2) % 6) + 1;
    } else {
      if (this.compare(s3, 1) === 0) {
        this.costume = (Math.floor(f2 / 2) % 6) + 7;
      } else {
        if (this.compare(s3, 1.1) === 0 || this.compare(s3, 1.2) === 0) {
          this.costume = "" + "Run_" + (Math.round((f2 / 1.5) % 10) + 1);
        } else {
          if (this.compare(s3, 1.3) === 0) {
            this.costume = "Backdash";
          } else {
            if (this.compare(s3, 2) === 0) {
              if (
                this.compare(
                  this.stage.vars.playerYSpeed[this.vars.p17 - 1],
                  -1
                ) > 0
              ) {
                this.costume = "midair";
              } else {
                this.costume = "midair2";
              }
            } else {
              if (this.compare(s3, 2.1) === 0) {
                if (
                  this.compare(
                    this.stage.vars.playerYSpeed[this.vars.p17 - 1],
                    -1
                  ) > 0
                ) {
                  this.costume = "midair";
                } else {
                  this.costume = "B.U.C.7";
                }
              } else {
                if (this.compare(s3, 3) === 0) {
                  this.costume = "crouch";
                } else {
                  if (this.compare(s3, 4) === 0) {
                    if (this.compare(f2, 2) < 0) {
                      this.costume = "punch1";
                    } else {
                      if (this.compare(f2, 3) < 0) {
                        this.costume = "punch2";
                      } else {
                        if (this.compare(f2, 4) < 0) {
                          this.costume = "punch3";
                        } else {
                          if (this.compare(f2, 6) < 0) {
                            this.costume = "punch4";
                          } else {
                            if (this.compare(f2, 7) < 0) {
                              this.costume = "punch5";
                            } else {
                              this.costume = "punch6";
                            }
                          }
                        }
                      }
                    }
                  } else {
                    if (this.compare(s3, 5) === 0) {
                      if (this.compare(f2, 3) < 0) {
                        this.costume = "high kick1";
                        if (
                          this.compare(this.sprites["Logic"].vars.impact19, 0) <
                          0
                        ) {
                          this.stage.vars.playerX.splice(
                            this.vars.p17 - 1,
                            1,
                            this.stage.vars.playerX[this.vars.p17 - 1] +
                              this.stage.vars.playerDirection[
                                this.vars.p17 - 1
                              ] *
                                4
                          );
                        }
                      } else {
                        if (this.compare(f2, 4) < 0) {
                          this.costume = "high kick2";
                          this.stage.vars.hitboxDamage.splice(
                            this.vars.p17 - 1,
                            1,
                            8
                          );
                          this.stage.vars.hitboxYKnockback.splice(
                            this.vars.p17 - 1,
                            1,
                            3
                          );
                          this.stage.vars.hitboxXKnockback.splice(
                            this.vars.p17 - 1,
                            1,
                            3
                          );
                        } else {
                          if (this.compare(f2, 6) < 0) {
                            this.costume = "high kick4";
                          } else {
                            if (this.compare(f2, 8) < 0) {
                              this.costume = "high kick3";
                            } else {
                              if (this.compare(f2, 10) < 0) {
                                this.costume = "high kick5";
                              } else {
                                this.costume = "high kick6";
                                this.stage.vars.playerFrame.splice(
                                  this.vars.p17 - 1,
                                  1,
                                  19
                                );
                              }
                            }
                          }
                        }
                      }
                    } else {
                      if (this.compare(s3, 6) === 0) {
                        this.costume = "land";
                      } else {
                        if (this.compare(s3, 7) === 0) {
                          if (this.compare(f2, 7) < 0) {
                            this.costume = "hurt head";
                          } else {
                            this.costume = "hurt head2";
                          }
                        } else {
                          if (this.compare(s3, 8) === 0) {
                            if (this.compare(f2, 5) < 0) {
                              this.costume = "hurt torso";
                            } else {
                              this.costume = "hurt torso2";
                            }
                          } else {
                            if (this.compare(s3, 9) === 0) {
                              if (this.compare(f2, 5) < 0) {
                                this.costume = "block head";
                              } else {
                                this.costume = "block head2";
                              }
                            } else {
                              if (this.compare(s3, 10) === 0) {
                                if (this.compare(f2, 4) < 0) {
                                  this.costume = "block torso";
                                } else {
                                  this.costume = "block torso2";
                                }
                              } else {
                                if (this.compare(s3, 11) === 0) {
                                  if (this.compare(f2, 4) < 0) {
                                    this.costume = "air punch";
                                  } else {
                                    if (this.compare(f2, 5) < 0) {
                                      this.costume = "air punch2";
                                    } else {
                                      if (this.compare(f2, 7) < 0) {
                                        this.costume = "air punch3";
                                      } else {
                                        if (this.compare(f2, 8) < 0) {
                                          this.costume = "air punch4";
                                        } else {
                                          this.costume = "air punch5";
                                        }
                                      }
                                    }
                                  }
                                } else {
                                  if (this.compare(s3, 12) === 0) {
                                    if (this.compare(f2, 2) < 0) {
                                      this.costume = "air kick";
                                    } else {
                                      if (this.compare(f2, 3) < 0) {
                                        this.costume = "air kick2";
                                      } else {
                                        if (this.compare(f2, 4) < 0) {
                                          this.costume = "air kick3";
                                        } else {
                                          if (this.compare(f2, 6) < 0) {
                                            this.costume = "air kick4";
                                            this.stage.vars.hitboxXKnockback.splice(
                                              this.vars.p17 - 1,
                                              1,
                                              2.5
                                            );
                                            this.stage.vars.hitboxYKnockback.splice(
                                              this.vars.p17 - 1,
                                              1,
                                              1
                                            );
                                          } else {
                                            if (this.compare(f2, 7) < 0) {
                                              this.costume = "air kick5";
                                            } else {
                                              if (this.compare(f2, 9) < 0) {
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
                                    if (this.compare(s3, 13) === 0) {
                                      this.stage.vars.hitboxXKnockback.splice(
                                        this.vars.p17 - 1,
                                        1,
                                        4
                                      );
                                      this.stage.vars.hitboxYKnockback.splice(
                                        this.vars.p17 - 1,
                                        1,
                                        2.5
                                      );
                                      this.stage.vars.hitboxDamage.splice(
                                        this.vars.p17 - 1,
                                        1,
                                        8
                                      );
                                      if (this.compare(f2, 2) < 0) {
                                        this.costume = "lowpunch";
                                      } else {
                                        if (this.compare(f2, 4) < 0) {
                                          this.costume = "lowpunch4";
                                        } else {
                                          if (this.compare(f2, 6) < 0) {
                                            this.costume = "lowpunch5";
                                            if (
                                              this.compare(
                                                this.sprites["Logic"].vars
                                                  .impact19,
                                                0
                                              ) < 0
                                            ) {
                                              this.stage.vars.playerX.splice(
                                                this.vars.p17 - 1,
                                                1,
                                                this.stage.vars.playerX[
                                                  this.vars.p17 - 1
                                                ] +
                                                  this.stage.vars
                                                    .playerDirection[
                                                    this.vars.p17 - 1
                                                  ] *
                                                    4
                                              );
                                            }
                                          } else {
                                            if (this.compare(f2, 7) < 0) {
                                              this.costume = "lowpunch6";
                                              if (
                                                this.compare(
                                                  this.sprites["Logic"].vars
                                                    .impact19,
                                                  0
                                                ) < 0
                                              ) {
                                                this.stage.vars.playerX.splice(
                                                  this.vars.p17 - 1,
                                                  1,
                                                  this.stage.vars.playerX[
                                                    this.vars.p17 - 1
                                                  ] +
                                                    this.stage.vars
                                                      .playerDirection[
                                                      this.vars.p17 - 1
                                                    ] *
                                                      4
                                                );
                                              }
                                            } else {
                                              if (this.compare(f2, 11) < 0) {
                                                this.costume = "lowpunch2";
                                                if (
                                                  this.compare(
                                                    this.sprites["Logic"].vars
                                                      .impact19,
                                                    0
                                                  ) < 0
                                                ) {
                                                  this.stage.vars.playerX.splice(
                                                    this.vars.p17 - 1,
                                                    1,
                                                    this.stage.vars.playerX[
                                                      this.vars.p17 - 1
                                                    ] +
                                                      this.stage.vars
                                                        .playerDirection[
                                                        this.vars.p17 - 1
                                                      ] *
                                                        1
                                                  );
                                                }
                                              } else {
                                                if (this.compare(f2, 14) < 0) {
                                                  this.costume = "lowpunch7";
                                                } else {
                                                  this.costume = "lowpunch8";
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    } else {
                                      if (this.compare(s3, 14) === 0) {
                                        if (this.compare(f2, 2) < 0) {
                                          this.costume = "low kick";
                                        } else {
                                          if (this.compare(f2, 3) < 0) {
                                            this.costume = "low kick2";
                                          } else {
                                            if (this.compare(f2, 5) < 0) {
                                              this.costume = "low kick3";
                                              this.stage.vars.hitboxXKnockback.splice(
                                                this.vars.p17 - 1,
                                                1,
                                                1
                                              );
                                              this.stage.vars.hitboxYKnockback.splice(
                                                this.vars.p17 - 1,
                                                1,
                                                4
                                              );
                                              this.stage.vars.hitboxHitstun.splice(
                                                this.vars.p17 - 1,
                                                1,
                                                15
                                              );
                                              this.stage.vars.hitboxDamage.splice(
                                                this.vars.p17 - 1,
                                                1,
                                                6
                                              );
                                            } else {
                                              if (this.compare(f2, 7) < 0) {
                                                this.costume = "low kick4";
                                              } else {
                                                if (this.compare(f2, 9) < 0) {
                                                  this.costume = "low kick5";
                                                } else {
                                                  if (
                                                    this.compare(f2, 11) < 0
                                                  ) {
                                                    this.costume = "low kick6";
                                                  } else {
                                                    if (
                                                      this.compare(f2, 13) < 0
                                                    ) {
                                                      this.costume =
                                                        "low kick7";
                                                    } else {
                                                      if (
                                                        this.compare(f2, 14) < 0
                                                      ) {
                                                        this.costume =
                                                          "low kick8";
                                                      } else {
                                                        if (
                                                          this.compare(f2, 15) <
                                                          0
                                                        ) {
                                                          this.costume =
                                                            "low kick9";
                                                        } else {
                                                          if (
                                                            this.compare(
                                                              f2,
                                                              16
                                                            ) < 0
                                                          ) {
                                                            this.costume =
                                                              "low kick9";
                                                          } else {
                                                            this.costume =
                                                              "low kick10";
                                                            this.stage.vars.playerFrame.splice(
                                                              this.vars.p17 - 1,
                                                              1,
                                                              18
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
                                      } else {
                                        if (this.compare(s3, 15) === 0) {
                                          if (this.compare(f2, 8) < 0) {
                                            this.costume = "hurt air";
                                          } else {
                                            this.costume = "hurt air2";
                                          }
                                        } else {
                                          if (this.compare(s3, 16) === 0) {
                                            this.costume = "hadouken";
                                          } else {
                                            if (this.compare(s3, 17) === 0) {
                                              this.costume = "parry";
                                              this.effects.brightness =
                                                (this.stage.vars.gameframe %
                                                  3) *
                                                50;
                                            } else {
                                              if (this.compare(s3, 18) === 0) {
                                                if (this.compare(f2, 2) < 0) {
                                                  this.costume = "low punch";
                                                } else {
                                                  if (this.compare(f2, 3) < 0) {
                                                    this.costume = "low punch2";
                                                  } else {
                                                    if (
                                                      this.compare(f2, 5) < 0
                                                    ) {
                                                      this.costume =
                                                        "low punch3";
                                                    } else {
                                                      this.costume =
                                                        "low punch4";
                                                    }
                                                  }
                                                }
                                              } else {
                                                if (
                                                  this.compare(s3, 19) === 0
                                                ) {
                                                  if (this.compare(f2, 5) < 0) {
                                                    this.costume = "hurt torso";
                                                  } else {
                                                    this.costume = "wallbounce";
                                                  }
                                                } else {
                                                  if (
                                                    this.compare(s3, 20) === 0
                                                  ) {
                                                    this.stage.vars.hitboxYKnockback.splice(
                                                      this.vars.p17 - 1,
                                                      1,
                                                      7
                                                    );
                                                    this.stage.vars.hitboxXKnockback.splice(
                                                      this.vars.p17 - 1,
                                                      1,
                                                      2
                                                    );
                                                    this.stage.vars.hitboxDamage.splice(
                                                      this.vars.p17 - 1,
                                                      1,
                                                      10
                                                    );
                                                    this.stage.vars.hitboxHitstun.splice(
                                                      this.vars.p17 - 1,
                                                      1,
                                                      10
                                                    );
                                                    if (
                                                      this.compare(f2, 3) < 0
                                                    ) {
                                                      this.costume = "B.U.C.1";
                                                    } else {
                                                      if (
                                                        this.compare(f2, 5) < 0
                                                      ) {
                                                        this.costume =
                                                          "B.U.C.2";
                                                      } else {
                                                        if (
                                                          this.compare(f2, 6) <
                                                          0
                                                        ) {
                                                          this.costume =
                                                            "B.U.C.3";
                                                          this.stage.vars.playerYSpeed.splice(
                                                            this.vars.p17 - 1,
                                                            1,
                                                            7
                                                          );
                                                          this.stage.vars.playerXSpeed.splice(
                                                            this.vars.p17 - 1,
                                                            1,
                                                            this.stage.vars
                                                              .playerDirection[
                                                              this.vars.p17 - 1
                                                            ] * 4
                                                          );
                                                        } else {
                                                          this.stage.vars.playerYSpeed.splice(
                                                            this.vars.p17 - 1,
                                                            1,
                                                            this.stage.vars
                                                              .playerYSpeed[
                                                              this.vars.p17 - 1
                                                            ] - 0.25
                                                          );
                                                          if (
                                                            this.compare(
                                                              f2,
                                                              10
                                                            ) < 0
                                                          ) {
                                                            this.costume =
                                                              "B.U.C.4";
                                                            this.stage.vars.playerXSpeed.splice(
                                                              this.vars.p17 - 1,
                                                              1,
                                                              this.stage.vars
                                                                .playerDirection[
                                                                this.vars.p17 -
                                                                  1
                                                              ] * 2
                                                            );
                                                          } else {
                                                            if (
                                                              this.compare(
                                                                f2,
                                                                12
                                                              ) < 0
                                                            ) {
                                                              this.costume =
                                                                "B.U.C.5";
                                                              if (
                                                                this.compare(
                                                                  this.sprites[
                                                                    "Logic"
                                                                  ].vars
                                                                    .impact19,
                                                                  -10
                                                                ) > 0
                                                              ) {
                                                                this.stage.vars.playerState.splice(
                                                                  this.vars
                                                                    .p17 - 1,
                                                                  1,
                                                                  2
                                                                );
                                                              }
                                                            } else {
                                                              if (
                                                                this.compare(
                                                                  f2,
                                                                  15
                                                                ) < 0
                                                              ) {
                                                                this.costume =
                                                                  "B.U.C.6";
                                                              } else {
                                                                this.costume =
                                                                  "B.U.C.7";
                                                                if (
                                                                  this.compare(
                                                                    this.stage
                                                                      .vars
                                                                      .playerY[
                                                                      this.vars
                                                                        .p17 - 1
                                                                    ],
                                                                    1
                                                                  ) < 0
                                                                ) {
                                                                  this.stage.vars.playerYSpeed.splice(
                                                                    this.vars
                                                                      .p17 - 1,
                                                                    1,
                                                                    0
                                                                  );
                                                                  this.stage.vars.playerY.splice(
                                                                    this.vars
                                                                      .p17 - 1,
                                                                    1,
                                                                    0
                                                                  );
                                                                  this.stage.vars.playerState.splice(
                                                                    this.vars
                                                                      .p17 - 1,
                                                                    1,
                                                                    6
                                                                  );
                                                                  this.stage.vars.playerFrame.splice(
                                                                    this.vars
                                                                      .p17 - 1,
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
                                                  } else {
                                                    if (
                                                      this.compare(s3, 21) === 0
                                                    ) {
                                                      this.stage.vars.hitboxDamage.splice(
                                                        this.vars.p17 - 1,
                                                        1,
                                                        2
                                                      );
                                                      this.stage.vars.hitboxHitstun.splice(
                                                        this.vars.p17 - 1,
                                                        1,
                                                        16
                                                      );
                                                      if (
                                                        this.compare(f2, 3) < 0
                                                      ) {
                                                        this.costume = "Grab1";
                                                      } else {
                                                        if (
                                                          this.compare(f2, 5) <
                                                          0
                                                        ) {
                                                          this.costume =
                                                            "Grab2";
                                                        } else {
                                                          if (
                                                            this.compare(
                                                              f2,
                                                              6
                                                            ) < 0
                                                          ) {
                                                            this.costume =
                                                              "Grab3";
                                                          } else {
                                                            if (
                                                              !(
                                                                this.compare(
                                                                  this.stage
                                                                    .vars
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
                                                                  this.stage
                                                                    .vars
                                                                    .playerX[
                                                                    this.vars
                                                                      .p17 - 1
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
                                                                this.vars.p17 -
                                                                  1,
                                                                1,
                                                                10
                                                              );
                                                              this.stage.vars.playerState.splice(
                                                                this.vars.p17 -
                                                                  1,
                                                                1,
                                                                22
                                                              );
                                                            }
                                                            if (
                                                              this.compare(
                                                                f2,
                                                                10
                                                              ) < 0
                                                            ) {
                                                              this.costume =
                                                                "Grab4";
                                                            } else {
                                                              this.costume =
                                                                "Grab5";
                                                              this.stage.vars.playerFrame.splice(
                                                                this.vars.p17 -
                                                                  1,
                                                                1,
                                                                52
                                                              );
                                                            }
                                                          }
                                                        }
                                                      }
                                                    } else {
                                                      if (
                                                        this.compare(s3, 22) ===
                                                        0
                                                      ) {
                                                        if (
                                                          this.compare(f2, 12) <
                                                          0
                                                        ) {
                                                          this.costume =
                                                            "Throw";
                                                        } else {
                                                          if (
                                                            this.compare(
                                                              f2,
                                                              21
                                                            ) < 0
                                                          ) {
                                                            this.costume =
                                                              "" +
                                                              "Throw" +
                                                              (Math.round(
                                                                f2 / 3
                                                              ) -
                                                                3);
                                                            this.stage.vars.playerXSpeed.splice(
                                                              this.stage.vars.playerState.indexOf(
                                                                8
                                                              ) +
                                                                1 -
                                                                1,
                                                              1,
                                                              this.stage.vars
                                                                .playerDirection[
                                                                this.vars.p17 -
                                                                  1
                                                              ] * -0.5
                                                            );
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
                                                                f2,
                                                                23
                                                              ) < 0
                                                            ) {
                                                              this.costume =
                                                                "Throw5";
                                                              this.stage.vars.playerYSpeed.splice(
                                                                this.stage.vars.playerState.indexOf(
                                                                  8
                                                                ) +
                                                                  1 -
                                                                  1,
                                                                1,
                                                                2
                                                              );
                                                              this.stage.vars.playerXSpeed.splice(
                                                                this.stage.vars.playerState.indexOf(
                                                                  8
                                                                ) +
                                                                  1 -
                                                                  1,
                                                                1,
                                                                this.stage.vars
                                                                  .playerDirection[
                                                                  this.vars
                                                                    .p17 - 1
                                                                ] * -16
                                                              );
                                                              this.stage.vars.playerState.splice(
                                                                this.stage.vars.playerState.indexOf(
                                                                  8
                                                                ) +
                                                                  1 -
                                                                  1,
                                                                1,
                                                                19
                                                              );
                                                              this.stage.vars.playerHealth.splice(
                                                                this.stage.vars.playerState.indexOf(
                                                                  19
                                                                ) +
                                                                  1 -
                                                                  1,
                                                                1,
                                                                this.stage.vars
                                                                  .playerHealth[
                                                                  this.stage.vars.playerState.indexOf(
                                                                    19
                                                                  ) +
                                                                    1 -
                                                                    1
                                                                ] - 5
                                                              );
                                                            } else {
                                                              if (
                                                                this.compare(
                                                                  f2,
                                                                  28
                                                                ) < 0
                                                              ) {
                                                                this.costume =
                                                                  "Throw6";
                                                              } else {
                                                                if (
                                                                  this.compare(
                                                                    f2,
                                                                    30
                                                                  ) < 0
                                                                ) {
                                                                  this.costume =
                                                                    "Throw7";
                                                                } else {
                                                                  this.costume =
                                                                    "Throw7";
                                                                  this.stage.vars.playerState.splice(
                                                                    this.vars
                                                                      .p17 - 1,
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
                                                          this.compare(
                                                            s3,
                                                            24
                                                          ) === 0
                                                        ) {
                                                          if (
                                                            this.compare(
                                                              f2,
                                                              4
                                                            ) < 0
                                                          ) {
                                                            this.costume =
                                                              "Die";
                                                          } else {
                                                            if (
                                                              this.compare(
                                                                f2,
                                                                7
                                                              ) < 0
                                                            ) {
                                                              this.costume =
                                                                "Die2";
                                                            } else {
                                                              if (
                                                                this.compare(
                                                                  f2,
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
                                                              s3,
                                                              25
                                                            ) === 0
                                                          ) {
                                                            if (
                                                              this.compare(
                                                                f2,
                                                                3
                                                              ) < 0
                                                            ) {
                                                              this.costume =
                                                                "charge";
                                                            } else {
                                                              if (
                                                                this.compare(
                                                                  f2,
                                                                  15
                                                                ) < 0
                                                              ) {
                                                                this.costume =
                                                                  "" +
                                                                  "AfterBurn" +
                                                                  Math.round(
                                                                    (f2 / 2) % 2
                                                                  );
                                                              } else {
                                                                if (
                                                                  this.compare(
                                                                    f2,
                                                                    17
                                                                  ) < 0
                                                                ) {
                                                                  this.costume =
                                                                    "AfterBurn3";
                                                                } else {
                                                                  if (
                                                                    this.compare(
                                                                      f2,
                                                                      18
                                                                    ) < 0
                                                                  ) {
                                                                    this.costume =
                                                                      "AfterBurn4";
                                                                  } else {
                                                                    if (
                                                                      this.compare(
                                                                        f2,
                                                                        20
                                                                      ) < 0
                                                                    ) {
                                                                      this.costume =
                                                                        "AfterBurn5";
                                                                    } else {
                                                                      this.costume =
                                                                        "AfterBurn6";
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          } else {
                                                            if (
                                                              this.compare(
                                                                s3,
                                                                26
                                                              ) === 0
                                                            ) {
                                                              if (
                                                                this.compare(
                                                                  this.sprites[
                                                                    "Logic"
                                                                  ].vars
                                                                    .impact19,
                                                                  0
                                                                ) > 0 &&
                                                                this.compare(
                                                                  this.stage
                                                                    .vars
                                                                    .playerFrame[
                                                                    this.vars
                                                                      .p17 - 1
                                                                  ],
                                                                  10
                                                                ) < 0
                                                              ) {
                                                                this.stage.vars.playerFrame.splice(
                                                                  this.vars
                                                                    .p17 - 1,
                                                                  1,
                                                                  this.stage
                                                                    .vars
                                                                    .playerFrame[
                                                                    this.vars
                                                                      .p17 - 1
                                                                  ] + 1
                                                                );
                                                              }
                                                              this.stage.vars.hitboxXKnockback.splice(
                                                                this.vars.p17 -
                                                                  1,
                                                                1,
                                                                16
                                                              );
                                                              this.stage.vars.hitboxDamage.splice(
                                                                this.vars.p17 -
                                                                  1,
                                                                1,
                                                                16
                                                              );
                                                              if (
                                                                this.compare(
                                                                  f2,
                                                                  4
                                                                ) < 0
                                                              ) {
                                                                this.costume =
                                                                  "Flaming Pulse";
                                                              } else {
                                                                if (
                                                                  this.compare(
                                                                    f2,
                                                                    15
                                                                  ) < 0
                                                                ) {
                                                                  this.costume =
                                                                    "" +
                                                                    "Flaming Pulse" +
                                                                    Math.round(
                                                                      f2 / 2.5
                                                                    );
                                                                } else {
                                                                  if (
                                                                    this.compare(
                                                                      f2,
                                                                      17
                                                                    ) < 0
                                                                  ) {
                                                                    this.costume =
                                                                      "Flaming Pulse7";
                                                                    if (
                                                                      this.compare(
                                                                        this
                                                                          .sprites[
                                                                          "Logic"
                                                                        ].vars
                                                                          .impact19,
                                                                        0
                                                                      ) < 0
                                                                    ) {
                                                                      this.stage.vars.playerX.splice(
                                                                        this
                                                                          .vars
                                                                          .p17 -
                                                                          1,
                                                                        1,
                                                                        this
                                                                          .stage
                                                                          .vars
                                                                          .playerX[
                                                                          this
                                                                            .vars
                                                                            .p17 -
                                                                            1
                                                                        ] +
                                                                          this
                                                                            .stage
                                                                            .vars
                                                                            .playerDirection[
                                                                            this
                                                                              .vars
                                                                              .p17 -
                                                                              1
                                                                          ] *
                                                                            16
                                                                      );
                                                                    } else {
                                                                      this.stage.vars.playerX.splice(
                                                                        this
                                                                          .vars
                                                                          .p17 -
                                                                          1,
                                                                        1,
                                                                        this
                                                                          .stage
                                                                          .vars
                                                                          .playerX[
                                                                          this
                                                                            .vars
                                                                            .p17 -
                                                                            1
                                                                        ] +
                                                                          this
                                                                            .stage
                                                                            .vars
                                                                            .playerDirection[
                                                                            this
                                                                              .vars
                                                                              .p17 -
                                                                              1
                                                                          ] *
                                                                            -2
                                                                      );
                                                                    }
                                                                  } else {
                                                                    if (
                                                                      this.compare(
                                                                        f2,
                                                                        18
                                                                      ) < 0
                                                                    ) {
                                                                      this.costume =
                                                                        "Flaming Pulse8";
                                                                      if (
                                                                        this.compare(
                                                                          this
                                                                            .sprites[
                                                                            "Logic"
                                                                          ].vars
                                                                            .impact19,
                                                                          0
                                                                        ) < 0
                                                                      ) {
                                                                        this.stage.vars.playerX.splice(
                                                                          this
                                                                            .vars
                                                                            .p17 -
                                                                            1,
                                                                          1,
                                                                          this
                                                                            .stage
                                                                            .vars
                                                                            .playerX[
                                                                            this
                                                                              .vars
                                                                              .p17 -
                                                                              1
                                                                          ] +
                                                                            this
                                                                              .stage
                                                                              .vars
                                                                              .playerDirection[
                                                                              this
                                                                                .vars
                                                                                .p17 -
                                                                                1
                                                                            ] *
                                                                              8
                                                                        );
                                                                      } else {
                                                                        this.stage.vars.playerX.splice(
                                                                          this
                                                                            .vars
                                                                            .p17 -
                                                                            1,
                                                                          1,
                                                                          this
                                                                            .stage
                                                                            .vars
                                                                            .playerX[
                                                                            this
                                                                              .vars
                                                                              .p17 -
                                                                              1
                                                                          ] +
                                                                            this
                                                                              .stage
                                                                              .vars
                                                                              .playerDirection[
                                                                              this
                                                                                .vars
                                                                                .p17 -
                                                                                1
                                                                            ] *
                                                                              -1
                                                                        );
                                                                      }
                                                                    } else {
                                                                      if (
                                                                        this.compare(
                                                                          f2,
                                                                          20
                                                                        ) < 0
                                                                      ) {
                                                                        this.costume =
                                                                          "Flaming Pulse9";
                                                                      } else {
                                                                        if (
                                                                          this.compare(
                                                                            f2,
                                                                            22
                                                                          ) < 0
                                                                        ) {
                                                                          this.costume =
                                                                            "Flaming Pulse10";
                                                                        } else {
                                                                          this.costume =
                                                                            "Flaming Pulse11";
                                                                          this.stage.vars.playerState.splice(
                                                                            this
                                                                              .vars
                                                                              .p17 -
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
                                                                  s3,
                                                                  19.1
                                                                ) === 0
                                                              ) {
                                                                if (
                                                                  this.compare(
                                                                    Math.abs(
                                                                      this.stage
                                                                        .vars
                                                                        .playerYSpeed[
                                                                        this
                                                                          .vars
                                                                          .p17 -
                                                                          1
                                                                      ]
                                                                    ),
                                                                    Math.abs(
                                                                      this.stage
                                                                        .vars
                                                                        .playerXSpeed[
                                                                        this
                                                                          .vars
                                                                          .p17 -
                                                                          1
                                                                      ] + 1
                                                                    ) * 1
                                                                  ) > 0
                                                                ) {
                                                                  if (
                                                                    this.compare(
                                                                      this.stage
                                                                        .vars
                                                                        .playerYSpeed[
                                                                        this
                                                                          .vars
                                                                          .p17 -
                                                                          1
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
                                                                        this
                                                                          .stage
                                                                          .vars
                                                                          .playerYSpeed[
                                                                          this
                                                                            .vars
                                                                            .p17 -
                                                                            1
                                                                        ]
                                                                      ),
                                                                      Math.abs(
                                                                        this
                                                                          .stage
                                                                          .vars
                                                                          .playerXSpeed[
                                                                          this
                                                                            .vars
                                                                            .p17 -
                                                                            1
                                                                        ] + 0.5
                                                                      ) * 0.5
                                                                    ) > 0
                                                                  ) {
                                                                    if (
                                                                      this.compare(
                                                                        this
                                                                          .stage
                                                                          .vars
                                                                          .playerYSpeed[
                                                                          this
                                                                            .vars
                                                                            .p17 -
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
                                                                    s3,
                                                                    4.1
                                                                  ) === 0
                                                                ) {
                                                                  this.stage.vars.hitboxXKnockback.splice(
                                                                    this.vars
                                                                      .p17 - 1,
                                                                    1,
                                                                    0.5
                                                                  );
                                                                  this.stage.vars.hitboxDamage.splice(
                                                                    this.vars
                                                                      .p17 - 1,
                                                                    1,
                                                                    4
                                                                  );
                                                                  this.stage.vars.hitboxHitstun.splice(
                                                                    this.vars
                                                                      .p17 - 1,
                                                                    1,
                                                                    9
                                                                  );
                                                                  if (
                                                                    this.compare(
                                                                      f2,
                                                                      2
                                                                    ) < 0
                                                                  ) {
                                                                    this.costume =
                                                                      "auto";
                                                                  } else {
                                                                    if (
                                                                      this.compare(
                                                                        f2,
                                                                        3
                                                                      ) < 0
                                                                    ) {
                                                                      this.costume =
                                                                        "auto2";
                                                                      if (
                                                                        this.compare(
                                                                          this
                                                                            .sprites[
                                                                            "Logic"
                                                                          ].vars
                                                                            .impact19,
                                                                          0
                                                                        ) < 0
                                                                      ) {
                                                                        this.stage.vars.playerX.splice(
                                                                          this
                                                                            .vars
                                                                            .p17 -
                                                                            1,
                                                                          1,
                                                                          this
                                                                            .stage
                                                                            .vars
                                                                            .playerX[
                                                                            this
                                                                              .vars
                                                                              .p17 -
                                                                              1
                                                                          ] +
                                                                            this
                                                                              .stage
                                                                              .vars
                                                                              .playerDirection[
                                                                              this
                                                                                .vars
                                                                                .p17 -
                                                                                1
                                                                            ] *
                                                                              4
                                                                        );
                                                                      } else {
                                                                        this.stage.vars.playerX.splice(
                                                                          this
                                                                            .vars
                                                                            .p17 -
                                                                            1,
                                                                          1,
                                                                          this
                                                                            .stage
                                                                            .vars
                                                                            .playerX[
                                                                            this
                                                                              .vars
                                                                              .p17 -
                                                                              1
                                                                          ] +
                                                                            this
                                                                              .stage
                                                                              .vars
                                                                              .playerDirection[
                                                                              this
                                                                                .vars
                                                                                .p17 -
                                                                                1
                                                                            ] *
                                                                              -0.5
                                                                        );
                                                                      }
                                                                    } else {
                                                                      if (
                                                                        this.compare(
                                                                          f2,
                                                                          5
                                                                        ) < 0
                                                                      ) {
                                                                        this.costume =
                                                                          "auto3";
                                                                      } else {
                                                                        if (
                                                                          this.compare(
                                                                            f2,
                                                                            8
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
                                                                      s3,
                                                                      27
                                                                    ) === 0
                                                                  ) {
                                                                    this.vars.h5 = 1;
                                                                    this.stage.vars.playerFrame.splice(
                                                                      this.vars
                                                                        .p17 -
                                                                        1,
                                                                      1,
                                                                      -8
                                                                    );
                                                                    this.stage.vars.playerState.splice(
                                                                      this.vars
                                                                        .p17 -
                                                                        1,
                                                                      1,
                                                                      6
                                                                    );
                                                                  } else {
                                                                    if (
                                                                      this.compare(
                                                                        s3,
                                                                        28
                                                                      ) === 0
                                                                    ) {
                                                                      this.costume =
                                                                        "block crouch";
                                                                    } else {
                                                                      if (
                                                                        this.compare(
                                                                          s3,
                                                                          23
                                                                        ) === 0
                                                                      ) {
                                                                        if (
                                                                          this.compare(
                                                                            this
                                                                              .sprites[
                                                                              "Logic"
                                                                            ]
                                                                              .vars
                                                                              .impact19,
                                                                            0
                                                                          ) >
                                                                            0 &&
                                                                          this.compare(
                                                                            this
                                                                              .stage
                                                                              .vars
                                                                              .playerFrame[
                                                                              this
                                                                                .vars
                                                                                .p17 -
                                                                                1
                                                                            ],
                                                                            10
                                                                          ) < 0
                                                                        ) {
                                                                          this.stage.vars.playerFrame.splice(
                                                                            this
                                                                              .vars
                                                                              .p17 -
                                                                              1,
                                                                            1,
                                                                            this
                                                                              .stage
                                                                              .vars
                                                                              .playerFrame[
                                                                              this
                                                                                .vars
                                                                                .p17 -
                                                                                1
                                                                            ] +
                                                                              1
                                                                          );
                                                                        }
                                                                        if (
                                                                          this.compare(
                                                                            f2,
                                                                            3
                                                                          ) < 0
                                                                        ) {
                                                                          this.costume =
                                                                            "Ultra Rushdown";
                                                                        } else {
                                                                          if (
                                                                            this.compare(
                                                                              f2,
                                                                              5
                                                                            ) <
                                                                            0
                                                                          ) {
                                                                            this.costume =
                                                                              "Ultra Rushdown2";
                                                                          } else {
                                                                            if (
                                                                              this.compare(
                                                                                f2,
                                                                                7
                                                                              ) <
                                                                              0
                                                                            ) {
                                                                              this.costume =
                                                                                "Ultra Rushdown3";
                                                                            } else {
                                                                              if (
                                                                                this.compare(
                                                                                  f2,
                                                                                  9
                                                                                ) <
                                                                                0
                                                                              ) {
                                                                                this.costume =
                                                                                  "Ultra Rushdown4";
                                                                              } else {
                                                                                if (
                                                                                  this.compare(
                                                                                    f2,
                                                                                    49
                                                                                  ) <
                                                                                  0
                                                                                ) {
                                                                                  this.costume =
                                                                                    "" +
                                                                                    "Ultra Rushdown" +
                                                                                    (((f2 -
                                                                                      9) %
                                                                                      8) +
                                                                                      5);
                                                                                } else {
                                                                                  if (
                                                                                    this.compare(
                                                                                      f2,
                                                                                      53
                                                                                    ) <
                                                                                    0
                                                                                  ) {
                                                                                    this.costume =
                                                                                      "Ultra Rushdown13";
                                                                                  } else {
                                                                                    if (
                                                                                      this.compare(
                                                                                        f2,
                                                                                        55
                                                                                      ) <
                                                                                      0
                                                                                    ) {
                                                                                      this.costume =
                                                                                        "Ultra Rushdown14";
                                                                                    } else {
                                                                                      if (
                                                                                        this.compare(
                                                                                          f2,
                                                                                          57
                                                                                        ) <
                                                                                        0
                                                                                      ) {
                                                                                        this.costume =
                                                                                          "Ultra Rushdown15";
                                                                                      } else {
                                                                                        this.stage.vars.playerCommands.splice(
                                                                                          this
                                                                                            .vars
                                                                                            .p17 -
                                                                                            1,
                                                                                          1,
                                                                                          "Lvl3"
                                                                                        );
                                                                                        if (
                                                                                          this.compare(
                                                                                            f2,
                                                                                            59
                                                                                          ) <
                                                                                          0
                                                                                        ) {
                                                                                          this.costume =
                                                                                            "Ultra Rushdown16";
                                                                                        } else {
                                                                                          if (
                                                                                            this.compare(
                                                                                              f2,
                                                                                              61
                                                                                            ) <
                                                                                            0
                                                                                          ) {
                                                                                            this.costume =
                                                                                              "Ultra Rushdown17";
                                                                                          } else {
                                                                                            this.stage.vars.playerState.splice(
                                                                                              this
                                                                                                .vars
                                                                                                .p17 -
                                                                                                1,
                                                                                              1,
                                                                                              30
                                                                                            );
                                                                                            this.stage.vars.playerYSpeed.splice(
                                                                                              this
                                                                                                .vars
                                                                                                .p17 -
                                                                                                1,
                                                                                              1,
                                                                                              3
                                                                                            );
                                                                                            this.stage.vars.playerY.splice(
                                                                                              this
                                                                                                .vars
                                                                                                .p17 -
                                                                                                1,
                                                                                              1,
                                                                                              20
                                                                                            );
                                                                                            this.stage.vars.playerFrame.splice(
                                                                                              this
                                                                                                .vars
                                                                                                .p17 -
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
                                                                      } else {
                                                                        if (
                                                                          this.compare(
                                                                            s3,
                                                                            29
                                                                          ) ===
                                                                          0
                                                                        ) {
                                                                          this.stage.vars.hitboxXKnockback.splice(
                                                                            this
                                                                              .vars
                                                                              .p17 -
                                                                              1,
                                                                            1,
                                                                            0
                                                                          );
                                                                          this.stage.vars.hitboxYKnockback.splice(
                                                                            this
                                                                              .vars
                                                                              .p17 -
                                                                              1,
                                                                            1,
                                                                            -1
                                                                          );
                                                                          this.stage.vars.hitboxDamage.splice(
                                                                            this
                                                                              .vars
                                                                              .p17 -
                                                                              1,
                                                                            1,
                                                                            5
                                                                          );
                                                                          this.stage.vars.hitboxHitstun.splice(
                                                                            this
                                                                              .vars
                                                                              .p17 -
                                                                              1,
                                                                            1,
                                                                            7
                                                                          );
                                                                          if (
                                                                            this.compare(
                                                                              f2,
                                                                              6
                                                                            ) <
                                                                            0
                                                                          ) {
                                                                            this.stage.vars.playerFrame.splice(
                                                                              this
                                                                                .vars
                                                                                .p17 -
                                                                                1,
                                                                              1,
                                                                              6
                                                                            );
                                                                          } else {
                                                                            if (
                                                                              this.compare(
                                                                                f2,
                                                                                9
                                                                              ) <
                                                                              0
                                                                            ) {
                                                                              this.costume =
                                                                                "Reflector";
                                                                            } else {
                                                                              if (
                                                                                this.compare(
                                                                                  f2,
                                                                                  10
                                                                                ) <
                                                                                0
                                                                              ) {
                                                                                this.costume =
                                                                                  "Reflector2";
                                                                              } else {
                                                                                if (
                                                                                  this.compare(
                                                                                    f2,
                                                                                    11
                                                                                  ) <
                                                                                  0
                                                                                ) {
                                                                                  this.costume =
                                                                                    "Reflector3";
                                                                                } else {
                                                                                  if (
                                                                                    this.compare(
                                                                                      f2,
                                                                                      12
                                                                                    ) <
                                                                                    0
                                                                                  ) {
                                                                                    this.costume =
                                                                                      "Reflector4";
                                                                                  } else {
                                                                                    if (
                                                                                      this.compare(
                                                                                        f2,
                                                                                        13
                                                                                      ) <
                                                                                      0
                                                                                    ) {
                                                                                      this.costume =
                                                                                        "Reflector5";
                                                                                    } else {
                                                                                      if (
                                                                                        this.compare(
                                                                                          f2,
                                                                                          14
                                                                                        ) <
                                                                                        0
                                                                                      ) {
                                                                                        this.costume =
                                                                                          "Reflector6";
                                                                                      } else {
                                                                                        if (
                                                                                          this.compare(
                                                                                            f2,
                                                                                            15
                                                                                          ) <
                                                                                          0
                                                                                        ) {
                                                                                          this.costume =
                                                                                            "Reflector7";
                                                                                        } else {
                                                                                          this.costume =
                                                                                            "Reflector8";
                                                                                          this.stage.vars.playerState.splice(
                                                                                            this
                                                                                              .vars
                                                                                              .p17 -
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
                                                                        } else {
                                                                          if (
                                                                            this.compare(
                                                                              s3,
                                                                              30
                                                                            ) ===
                                                                            0
                                                                          ) {
                                                                            if (
                                                                              this.compare(
                                                                                f2,
                                                                                -3
                                                                              ) <
                                                                              0
                                                                            ) {
                                                                              this.costume =
                                                                                "" +
                                                                                "Ultra Rushdown" +
                                                                                ((f2 %
                                                                                  2) +
                                                                                  18);
                                                                              this.stage.vars.playerCommands.splice(
                                                                                this
                                                                                  .vars
                                                                                  .p17 -
                                                                                  1,
                                                                                1,
                                                                                "Lvl3"
                                                                              );
                                                                            } else {
                                                                              if (
                                                                                this.compare(
                                                                                  f2,
                                                                                  0
                                                                                ) <
                                                                                0
                                                                              ) {
                                                                                this.costume =
                                                                                  "Ultra Rushdown20";
                                                                                if (
                                                                                  this.compare(
                                                                                    f2,
                                                                                    -3
                                                                                  ) >
                                                                                  0
                                                                                ) {
                                                                                  this.stage.vars.playerCommands.splice(
                                                                                    this
                                                                                      .vars
                                                                                      .p17 -
                                                                                      1,
                                                                                    1,
                                                                                    ""
                                                                                  );
                                                                                  this.stage.vars.playerState.splice(
                                                                                    this
                                                                                      .vars
                                                                                      .p17 -
                                                                                      1,
                                                                                    1,
                                                                                    2
                                                                                  );
                                                                                }
                                                                              } else {
                                                                                this.stage.vars.hitboxXKnockback.splice(
                                                                                  this
                                                                                    .vars
                                                                                    .p17 -
                                                                                    1,
                                                                                  1,
                                                                                  4
                                                                                );
                                                                                this.stage.vars.hitboxYKnockback.splice(
                                                                                  this
                                                                                    .vars
                                                                                    .p17 -
                                                                                    1,
                                                                                  1,
                                                                                  -12
                                                                                );
                                                                                this.stage.vars.hitboxDamage.splice(
                                                                                  this
                                                                                    .vars
                                                                                    .p17 -
                                                                                    1,
                                                                                  1,
                                                                                  10
                                                                                );
                                                                                if (
                                                                                  this.compare(
                                                                                    f2,
                                                                                    5
                                                                                  ) <
                                                                                  0
                                                                                ) {
                                                                                  this.stage.vars.playerFrame.splice(
                                                                                    this
                                                                                      .vars
                                                                                      .p17 -
                                                                                      1,
                                                                                    1,
                                                                                    5
                                                                                  );
                                                                                } else {
                                                                                  if (
                                                                                    this.compare(
                                                                                      f2,
                                                                                      6
                                                                                    ) <
                                                                                    0
                                                                                  ) {
                                                                                    this.costume =
                                                                                      "Hard Knuckle";
                                                                                  } else {
                                                                                    if (
                                                                                      this.compare(
                                                                                        f2,
                                                                                        8
                                                                                      ) <
                                                                                      0
                                                                                    ) {
                                                                                      this.costume =
                                                                                        "Hard Knuckle2";
                                                                                    } else {
                                                                                      if (
                                                                                        this.compare(
                                                                                          f2,
                                                                                          10
                                                                                        ) <
                                                                                        0
                                                                                      ) {
                                                                                        this.costume =
                                                                                          "Hard Knuckle3";
                                                                                      } else {
                                                                                        if (
                                                                                          this.compare(
                                                                                            f2,
                                                                                            12
                                                                                          ) <
                                                                                          0
                                                                                        ) {
                                                                                          this.costume =
                                                                                            "Hard Knuckle4";
                                                                                        } else {
                                                                                          if (
                                                                                            this.compare(
                                                                                              f2,
                                                                                              13
                                                                                            ) <
                                                                                            0
                                                                                          ) {
                                                                                            this.costume =
                                                                                              "Hard Knuckle5";
                                                                                          } else {
                                                                                            if (
                                                                                              this.compare(
                                                                                                f2,
                                                                                                16
                                                                                              ) <
                                                                                              0
                                                                                            ) {
                                                                                              this.costume =
                                                                                                "Hard Knuckle6";
                                                                                            } else {
                                                                                              if (
                                                                                                this.compare(
                                                                                                  f2,
                                                                                                  19
                                                                                                ) <
                                                                                                0
                                                                                              ) {
                                                                                                this.costume =
                                                                                                  "Hard Knuckle7";
                                                                                              } else {
                                                                                                this.stage.vars.playerState.splice(
                                                                                                  this
                                                                                                    .vars
                                                                                                    .p17 -
                                                                                                    1,
                                                                                                  1,
                                                                                                  2
                                                                                                );
                                                                                                this.stage.vars.playerCommands.splice(
                                                                                                  this
                                                                                                    .vars
                                                                                                    .p17 -
                                                                                                    1,
                                                                                                  1,
                                                                                                  ""
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
                                                                          } else {
                                                                            if (
                                                                              this.compare(
                                                                                s3,
                                                                                32
                                                                              ) ===
                                                                              0
                                                                            ) {
                                                                              if (
                                                                                this.compare(
                                                                                  f2,
                                                                                  -8
                                                                                ) <
                                                                                0
                                                                              ) {
                                                                                this.costume =
                                                                                  "Fire Boost7";
                                                                              } else {
                                                                                if (
                                                                                  this.compare(
                                                                                    f2,
                                                                                    -6
                                                                                  ) <
                                                                                  0
                                                                                ) {
                                                                                  this.costume =
                                                                                    "Fire Boost8";
                                                                                } else {
                                                                                  if (
                                                                                    this.compare(
                                                                                      f2,
                                                                                      -3
                                                                                    ) <
                                                                                    0
                                                                                  ) {
                                                                                    this.costume =
                                                                                      "Fire Boost9";
                                                                                  } else {
                                                                                    if (
                                                                                      this.compare(
                                                                                        f2,
                                                                                        0
                                                                                      ) <
                                                                                      0
                                                                                    ) {
                                                                                      this.costume =
                                                                                        "Fire Boost10";
                                                                                    } else {
                                                                                      if (
                                                                                        this.compare(
                                                                                          f2,
                                                                                          2
                                                                                        ) <
                                                                                        0
                                                                                      ) {
                                                                                        this.costume =
                                                                                          "Fire Boost";
                                                                                      } else {
                                                                                        if (
                                                                                          this.compare(
                                                                                            f2,
                                                                                            3
                                                                                          ) <
                                                                                          0
                                                                                        ) {
                                                                                          this.costume =
                                                                                            "Fire Boost2";
                                                                                        } else {
                                                                                          if (
                                                                                            this.compare(
                                                                                              f2,
                                                                                              5
                                                                                            ) <
                                                                                            0
                                                                                          ) {
                                                                                            this.costume =
                                                                                              "Fire Boost3";
                                                                                          } else {
                                                                                            if (
                                                                                              this.compare(
                                                                                                f2,
                                                                                                6
                                                                                              ) <
                                                                                              0
                                                                                            ) {
                                                                                              this.costume =
                                                                                                "Fire Boost4";
                                                                                            } else {
                                                                                              if (
                                                                                                this.compare(
                                                                                                  f2,
                                                                                                  16
                                                                                                ) <
                                                                                                0
                                                                                              ) {
                                                                                                this.costume =
                                                                                                  "" +
                                                                                                  "Fire Boost" +
                                                                                                  ((f2 %
                                                                                                    2) +
                                                                                                    5);
                                                                                              } else {
                                                                                                this.costume =
                                                                                                  "Fire Boost11";
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
