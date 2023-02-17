import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@1.4.1/dist/index.esm.js";

export default class Orange extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("idle", "94ac870d0f18aa4b44647a0def55aeef.svg", {
        x: 55.322618776554975,
        y: 69.99051510499851
      }),
      new Costume("idle2", "f9eadcc8dbcae79ff9c77483bc621d12.svg", {
        x: 50.52337911476906,
        y: 76.53933825127689
      }),
      new Costume("idle3", "b4c6b50421d7dc8527fcde3a5a342061.svg", {
        x: 46.05418624767674,
        y: 78.77394180140298
      }),
      new Costume("idle4", "d70834590988cdb1b6a0313b3eca05b7.svg", {
        x: 43.377507876886284,
        y: 76.91178502340799
      }),
      new Costume("idle5", "ddf5923a0d47d518d4ebf062b6f96adb.svg", {
        x: 39.364643950763394,
        y: 68.94997317046867
      }),
      new Costume("teleport", "2c63fb5748ab397d57306fcde5e3e3f5.svg", {
        x: 58.20931599855618,
        y: 77.17486964131598
      }),
      new Costume("WalkFront", "3a9c78f60dc085e27b27da8488d85f3a.svg", {
        x: 39.364647020391175,
        y: 72.7453617380983
      }),
      new Costume("WalkFront2", "ac530190171c9ab459162244af8c4ff4.svg", {
        x: 39.364652611141736,
        y: 79.44060480481554
      }),
      new Costume("WalkFront3", "a171334ba248355018485ddf338149fb.svg", {
        x: 39.364652611141736,
        y: 81.67235239709544
      }),
      new Costume("WalkFront4", "3fc973862ade995cb0a9bb89430dd7f4.svg", {
        x: 39.36464749299162,
        y: 79.44061110187015
      }),
      new Costume("WalkFront5", "05789ae7edbbe3997bc18d3f0ec13af6.svg", {
        x: 39.36463213854128,
        y: 72.74535943935469
      }),
      new Costume("WalkFront6", "9e046bf6ddc0aebb08794a18554ad8ed.svg", {
        x: 39.36461249299174,
        y: 71.1840275605276
      }),
      new Costume("crouch2", "541a02ebfc642d99c6b319b94b8cec9f.svg", {
        x: 49.630686188592904,
        y: 62.0330052109867
      }),
      new Costume("crouch", "9502122c78e35e4a30069a496442cded.svg", {
        x: 46.506239278774615,
        y: 51.76696680854391
      }),
      new Costume("midair", "b48a6c507c95c853e0592b8e86a92cd2.svg", {
        x: 46.059881466712454,
        y: 79.44059795956981
      }),
      new Costume("midair2", "aa4e047719eea00224d837b986a87d71.svg", {
        x: 43.602850298174474,
        y: 82.50796319667457
      }),
      new Costume("land", "2cfe337057267d4d4c8d7e205d517cac.svg", {
        x: 48.291643944878274,
        y: 63.818386623984324
      }),
      new Costume("punch1", "1b545158109bd142920dc678ae7ab15e.svg", {
        x: 39.3646472566914,
        y: 70.06726091913966
      }),
      new Costume("punch2", "ce1a536093c4069cc747606ca77678aa.svg", {
        x: 26.19235367335523,
        y: 60.91711091913969
      }),
      new Costume("punch3", "0bef898942c1ae899ce109e1a69a6f2a.svg", {
        x: 26.861877117987433,
        y: 60.917107398924614
      }),
      new Costume("punch4", "c4ca2af6efb8ce56947a965aa84b07c3.svg", {
        x: 26.582686502900685,
        y: 60.91711387870954
      }),
      new Costume("punch5", "a557c2bda35f681b627dce98ef141d91.svg", {
        x: 25.974167138541333,
        y: 67.83550943935478
      }),
      new Costume("punch6", "2321f3a82ff4e72c45d460b7a4e7b9b6.svg", {
        x: 37.35606903184174,
        y: 74.7539450667873
      }),
      new Costume("auto", "3a9c26f27bc23d8e0ec866b07267a4a1.svg", {
        x: 22.71890060435547,
        y: 60.91710091913957
      }),
      new Costume("auto2", "1569c6251a5691477b313079d8de95e3.svg", {
        x: 17.292814442596068,
        y: 63.91371441884658
      }),
      new Costume("auto3", "15c44aa9063906d1061ab7f183ec2fd3.svg", {
        x: 19.301386010629813,
        y: 69.04673677844428
      }),
      new Costume("auto4", "eb71192403f4a050775bb09a00dc0239.svg", {
        x: 16.41104789863749,
        y: 67.26133280893679
      }),
      new Costume("auto5", "aa871e52ebe1e15562dfa3e25aae4781.svg", {
        x: 16.411046784090928,
        y: 60.56607990514442
      }),
      new Costume("high kick1", "270a42f676ad2c46d316df9b0851d75b.svg", {
        x: 43.26770483351157,
        y: 66.53760621203601
      }),
      new Costume("high kick2", "08e398466f80f4636d7532c6db818c03.svg", {
        x: 62.37305416527056,
        y: 56.235015456955864
      }),
      new Costume("high kick4", "eea9cc64477d4e6947f86b828730b86d.svg", {
        x: 68.8064783487545,
        y: 56.313282137308974
      }),
      new Costume("high kick3", "72487ba5e01baca3183da38ec3c04dd6.svg", {
        x: 66.1398107393093,
        y: 57.979950377575875
      }),
      new Costume("high kick5", "97471281bc431602d712bea19883b559.svg", {
        x: 43.267700151427306,
        y: 66.53760394538914
      }),
      new Costume("high kick6", "ed661e56d26a8d93b64a28f1086f0bb4.svg", {
        x: 43.267707575713644,
        y: 66.53760447269457
      }),
      new Costume("hurt head", "24a040bbb98b645256019b7d533603d5.svg", {
        x: 65.24583610445566,
        y: 58.26535182397818
      }),
      new Costume("hurt head2", "e11ff50e79c8d15793370863f24e5055.svg", {
        x: 56.76442810277706,
        y: 59.97662305366515
      }),
      new Costume("hurt torso", "dbe18f20d43d4cb4e7049b7f27729da3.svg", {
        x: 30.208457575681052,
        y: 54.896481056874066
      }),
      new Costume("hurt torso2", "48b989b2b30033ecc99c68909e4a7231.svg", {
        x: 44.974155520711236,
        y: 68.3716086988596
      }),
      new Costume("block torso", "7b3a59ec3c58116b78b4c22634554540.svg", {
        x: 60.051591896167,
        y: 60.87036003747261
      }),
      new Costume("block torso2", "97dc56e6a8a5324beca444396e3e10d7.svg", {
        x: 60.051587014317164,
        y: 70.32829460069082
      }),
      new Costume("block head", "c73a850948ade1d9f792311986f0556d.svg", {
        x: 42.201747173217,
        y: 67.15386951216104
      }),
      new Costume("block head2", "556b4c4e2ea83cb4e7240925b91628fd.svg", {
        x: 55.322615236300294,
        y: 69.99050795956981
      }),
      new Costume("block crouch", "87a779d5c212fed5cef158d562611a1e.svg", {
        x: 54.70198719676381,
        y: 51.766966479784884
      }),
      new Costume("air punch", "699e3dc0fb718f1cee17f61edb0374bd.svg", {
        x: 32.8930481967669,
        y: 83.56041132567138
      }),
      new Costume("air punch2", "e9b1810bee22955aa40c1114562b4df6.svg", {
        x: 27.38217425727953,
        y: 70.18847274328157
      }),
      new Costume("air punch3", "720b7041195cb9838a1341ec752710be.svg", {
        x: 37.609505073442335,
        y: 76.55685862756746
      }),
      new Costume("air punch4", "4e2e96585866b7226a48b295dae1048e.svg", {
        x: 32.830869999999976,
        y: 76.34565424452336
      }),
      new Costume("air punch5", "3095341e7f2990e09964a3d84e2306e8.svg", {
        x: 27.620210614688943,
        y: 78.17932838464989
      }),
      new Costume("air punch6", "e5b149dc20b2b340e526435f3767eb6c.svg", {
        x: 31.073672038178785,
        y: 79.2889320170321
      }),
      new Costume("low kick", "42c5f01a3abb847191239bbffc0ab4d1.svg", {
        x: 29.30685385589564,
        y: 45.71625522301389
      }),
      new Costume("low kick2", "c04d105d6ee961fddcccfa3a1d84ff5d.svg", {
        x: 23.73743104512465,
        y: 45.716251640274265
      }),
      new Costume("low kick3", "9d40e6166417a862a64e3d090f90c6b9.svg", {
        x: 24.081114540759245,
        y: 45.7162556690416
      }),
      new Costume("low kick4", "c086cb79388a9fa4451122f62d72d6ea.svg", {
        x: 24.253839703060606,
        y: 45.71625350356237
      }),
      new Costume("low kick5", "9cd93c2f43c125b6581e1f7446d70fc9.svg", {
        x: 29.34799000000001,
        y: 49.847459752681345
      }),
      new Costume("low kick6", "e5f2309f4c37c42b12a83ae162a2180e.svg", {
        x: 43.36029680772856,
        y: 53.28082594465941
      }),
      new Costume("low punch", "a41db649f2c9bcc8f9d8fefa9912255a.svg", {
        x: 51.83347396924904,
        y: 51.766966479784884
      }),
      new Costume("low punch2", "b878315859b0fe4c871aa3cc4104fc21.svg", {
        x: 41.9985777419638,
        y: 51.76695795956982
      }),
      new Costume("low punch3", "84f614ad318ba950834cad8039a9759d.svg", {
        x: 40.357540118150155,
        y: 51.7669614797849
      }),
      new Costume("low punch4", "c04c103d6619c8ddafdc1036c693c40b.svg", {
        x: 44.86519444084573,
        y: 51.76695795956982
      }),
      new Costume("hurt air", "bfa1f8c88424d226715898f36ac0756a.svg", {
        x: 71.25143443780433,
        y: 80.06435325633069
      }),
      new Costume("hurt air2", "33b27b630dcf4f78f7e117ccea9eb150.svg", {
        x: 62.03927979870349,
        y: 89.60723515301605
      }),
      new Costume("air kick", "2e3558473f4ee28f2abe4f494cd717e6.svg", {
        x: 43.6028417905884,
        y: 82.5079674988289
      }),
      new Costume("air kick2", "6224a2d68dce9bd936c926b41499af81.svg", {
        x: 42.440081225115335,
        y: 81.06317176350787
      }),
      new Costume("air kick3", "84c9650e22cbdf5d2a9dd821d9f6e088.svg", {
        x: 44.738806771591356,
        y: 80.29447958963785
      }),
      new Costume("air kick4", "0863ff15a3f5baf39e271966abc5b1f8.svg", {
        x: 58.26762608765296,
        y: 79.96479936956622
      }),
      new Costume("air kick5", "307c918d23b006af15bd43ab868aaceb.svg", {
        x: 64.41442163547632,
        y: 79.9648052406148
      }),
      new Costume("air kick6", "5c16e993028a85fbb0dc30370f9d0342.svg", {
        x: 64.41442085883872,
        y: 79.96480841353826
      }),
      new Costume("air kick7", "918a5e8aa371c1433a4ef549b8946dfc.svg", {
        x: 60.77656032743508,
        y: 86.73502337450043
      }),
      new Costume("lowpunch", "8b77469ac1b0b10895a4f4e23eae96e5.svg", {
        x: 45.74328850316482,
        y: 69.99051443935473
      }),
      new Costume("lowpunch4", "850676c77b27902dd39a648d5c9320ce.svg", {
        x: 54.75246118732528,
        y: 67.79033502335626
      }),
      new Costume("lowpunch5", "615715b696172e46fbbd86ce1c5a78ae.svg", {
        x: 50.62006588128585,
        y: 57.11426620835016
      }),
      new Costume("lowpunch6", "db2060b3360f2dc28b8082f251b2a017.svg", {
        x: 59.0766138059339,
        y: 45.32385425247301
      }),
      new Costume("lowpunch2", "4f674df6c377d08ec6bcafa71dadde42.svg", {
        x: 59.07661023630027,
        y: 45.32385295956982
      }),
      new Costume("lowpunch7", "7a6bd0369d5113a884fe5a92c8b47518.svg", {
        x: 45.427990931918686,
        y: 54.299494921050325
      }),
      new Costume("lowpunch8", "4fa005dc1416f478d361c9987e574ec5.svg", {
        x: 44.55635582705082,
        y: 67.03300035849429
      }),
      new Costume("parry", "d43b4497128758a6a99fdd0e4a2e455a.svg", {
        x: 42.27509440391893,
        y: 52.8644422937878
      }),
      new Costume("hadouken", "3647d049c0e86d2a09e9edea2e3bedbb.svg", {
        x: 19.77897999999999,
        y: 63.14885755191963
      }),
      new Costume("charge", "789cca384631cd8802c1af32edfed9ff.svg", {
        x: 44.779523021585305,
        y: 66.27330070118641
      }),
      new Costume("wallbounce", "7c0af715e16997b504b2e431771907b2.svg", {
        x: 44.11792313671981,
        y: 65.24802911345046
      }),
      new Costume("Plant Plummet", "a37ed4b66c8b923e1236157d5ef51ec2.svg", {
        x: 46.5995968535895,
        y: 85.17175088816323
      }),
      new Costume("Plant Plummet2", "3109d4d689ab17ea8b114b3a8a12b84d.svg", {
        x: 57.72994664755885,
        y: 81.27753225540457
      }),
      new Costume("Plant Plummet3", "ee34290c41abd46c7a717012be8be7bb.svg", {
        x: 61.39264164755883,
        y: 81.27754225540457
      }),
      new Costume("Plant Plummet4", "170bef08421a77cf1e1ca12342cafa01.svg", {
        x: 37.934322636369956,
        y: 82.01004560934253
      }),
      new Costume("Plant Plummet5", "fcefc9bd0e1b372390eb9f5ab6e91684.svg", {
        x: 25.218791959278576,
        y: 78.13272950446726
      }),
      new Costume("Plant Plummet6", "faa9912e0054ccb00a3f5f1dc693d2bd.svg", {
        x: 24.55284665266646,
        y: 62.03124489491647
      }),
      new Costume("Plant Plummet7", "e28f9f2791420af3ccd9d9579c877441.svg", {
        x: 24.55284499999999,
        y: 62.03124669045076
      }),
      new Costume("Plant Plummet8", "bfd56f1624d2dc19688063bd438e0c76.svg", {
        x: 24.552834999999988,
        y: 69.68959018478698
      }),
      new Costume("Plant Plummet9", "0658c776c005e791483a7b7cbf0ca808.svg", {
        x: 43.60284768588261,
        y: 82.50796374824336
      }),
      new Costume("Grab", "229b96dbebaadb0083f86ea1e6ca4c66.svg", {
        x: 63.129276945359464,
        y: 70.77117509844564
      }),
      new Costume("Grab2", "75f127890033c50fb60f0c27e07cf067.svg", {
        x: 66.25193887951377,
        y: 70.38084930933036
      }),
      new Costume("Grab3", "cba21578d355d9505f9b374fa04aeacb.svg", {
        x: 38.97242941376052,
        y: 67.38862795956983
      }),
      new Costume("Grab4", "9f6738ac5f4dd5130aa6fbcc5055b919.svg", {
        x: 24.853300000000047,
        y: 65.43697529162738
      }),
      new Costume("Grab5", "82652aa74c5cac49e1e3d95ad549a424.svg", {
        x: 25.702985509027542,
        y: 68.16930861866076
      }),
      new Costume("Throw", "72e9b4cc7337753dc831cd4999e53b17.svg", {
        x: 24.85329999999999,
        y: 66.17009532887313
      }),
      new Costume("Throw2", "b0bc409f0083fe46b8c51b9fa66e0866.svg", {
        x: 24.853300000000104,
        y: 66.75245954140742
      }),
      new Costume("Throw3", "1286a948bcf065b22bd4a9a95e533f76.svg", {
        x: 40.28993593924662,
        y: 77.41981261545
      }),
      new Costume("Throw4", "b9082e7c049e238e77ff1197fe0d9b1c.svg", {
        x: 59.60960190777172,
        y: 75.54162858181745
      }),
      new Costume("Throw5", "4ee5720d61de8056fd379e64447818aa.svg", {
        x: 75.95217399703284,
        y: 88.28328
      }),
      new Costume("Throw6", "bf3106f6021610d9fdf074c20db7e767.svg", {
        x: 69.62970847447548,
        y: 90.92892804222471
      }),
      new Costume("Throw7", "66eaf12a795e4fd194abe3cbbd32b47d.svg", {
        x: 56.70906155884029,
        y: 99.66987166739116
      }),
      new Costume("Throw8", "c3db27714241bf77050f44c4593b244f.svg", {
        x: 43.62903996699009,
        y: 96.66147450218448
      }),
      new Costume("Die", "5d722495a23aebe1e1406a8d0c4f29ab.svg", {
        x: 38.25979186027831,
        y: 68.72882964019557
      }),
      new Costume("Die2", "475e38edc6c0d8d2ebb4a2e1c8010ccb.svg", {
        x: 33.757838220699995,
        y: 72.65454096154767
      }),
      new Costume("Die3", "48d577f79de6aa174775ca1832eee577.svg", {
        x: 41.09722307449317,
        y: 16.976074656912687
      }),
      new Costume("Die4", "c090758dcb1dc2a1cda5acb68bc53ab5.svg", {
        x: 46.8950921010227,
        y: 13.381307995567596
      }),
      new Costume("Hatslam", "4bcddcb34d5bd0dee5801d958a103e0a.svg", {
        x: 55.322615236300294,
        y: 69.99050795956981
      }),
      new Costume("Hatslam2", "76051ef074bbf826494c85dbdb08e02b.svg", {
        x: 55.32261035445043,
        y: 69.99050943935472
      }),
      new Costume("Hatslam3", "b2067aab404471ed4cda8a8753a94cf0.svg", {
        x: 43.19351869496225,
        y: 75.66164057892105
      }),
      new Costume("Hatslam4", "623eaf1ea64fb2323c801667d714abbe.svg", {
        x: 34.821982171270065,
        y: 79.03564759521879
      }),
      new Costume("Hatslam5", "7299b9804abf715c79a292ece4a26660.svg", {
        x: 34.821979999999996,
        y: 32.28694309795955
      }),
      new Costume("Hatslam6", "7b171b9c32b33e92f991b9627007652a.svg", {
        x: 34.821979999999996,
        y: 30.840329999999994
      }),
      new Costume("Hatslam7", "5c8cebf4b4671410d01614c9bb1fe6cd.svg", {
        x: 29.064855128505087,
        y: 36.27761460085634
      }),
      new Costume("Hatslam8", "31dc9a275a0c100237675e8a8ed479d2.svg", {
        x: 25.633970000000005,
        y: 71.22685391894856
      }),
      new Costume("Hatslam9", "607955e87d0420160f147f5fcdc07c52.svg", {
        x: 35.600240169725225,
        y: 71.9011792972033
      }),
      new Costume("Hat Toss", "e8d40de19c8fd61dbac03be57c403b6a.svg", {
        x: 69.70023180556069,
        y: 49.261883738557884
      }),
      new Costume("Hat Toss2", "04973850aa82b34df0a09837059416e5.svg", {
        x: 73.64507409923817,
        y: 47.77347574338549
      }),
      new Costume("Hat Toss3", "04c411023171daae03f1662d8e7cfd9d.svg", {
        x: 46.31285857490985,
        y: 42.975935577640655
      }),
      new Costume("Hat Toss4", "0257a8e6866af8daca9075101df34424.svg", {
        x: 25.633968574909858,
        y: 39.89390432692619
      }),
      new Costume("Hat Toss5", "dd98065a6003f156e57d3722014b0fef.svg", {
        x: 25.633968574909858,
        y: 38.21656902170153
      }),
      new Costume("Hat Toss6", "dc906858af622991b5d6e8a201b328a0.svg", {
        x: 25.633968574909858,
        y: 39.893908604421625
      }),
      new Costume("Hat Toss7", "3de53b87d6a0c47c9c5cd6e577b6710c.svg", {
        x: 25.633968574909858,
        y: 38.21657299274895
      }),
      new Costume("Hat Toss8", "8b4ddc5e54cd2eac10da51cc3356c546.svg", {
        x: 25.633970000000005,
        y: 65.22686175684575
      }),
      new Costume("Hat Toss9", "31dc9a275a0c100237675e8a8ed479d2.svg", {
        x: 25.633970000000005,
        y: 71.22685391894856
      }),
      new Costume("Hat Toss10", "607955e87d0420160f147f5fcdc07c52.svg", {
        x: 35.60024198173022,
        y: 71.90118427749547
      }),
      new Costume("Mega Boomie", "31dc9a275a0c100237675e8a8ed479d2.svg", {
        x: 25.633970000000005,
        y: 71.22685391894856
      }),
      new Costume("Mega Boomie2", "a06dabbf14610f7c441ff05b2d3f7285.svg", {
        x: 28.212076486989417,
        y: 40.3744793109484
      }),
      new Costume("Mega Boomie3", "e39d936f376c6567b478e10a6e1000c0.svg", {
        x: 29.746519403248698,
        y: 36.27761330583513
      }),
      new Costume("Mega Boomie4", "a1a66f7ff022dad0cd9ca8e5b5fd5f6e.svg", {
        x: 26.239221308941808,
        y: 37.154437829411734
      }),
      new Costume("Mega Boomie5", "fa2a5c41ae4e42ce1afadf4fef7319da.svg", {
        x: 25.633971308941824,
        y: 31.45507842616297
      }),
      new Costume("Mega Boomie6", "bdd21a63b0c8abf52cde1e5c83343b2c.svg", {
        x: 25.633971308941824,
        y: 30.139841640797925
      }),
      new Costume("Mega Boomie7", "3e7960a0f1049ea10acbb777395d8212.svg", {
        x: 25.633971308941824,
        y: 31.016666164374527
      }),
      new Costume("Mega Boomie8", "e4b599914c5337e717abdc04f2384d62.svg", {
        x: 33.55446041381484,
        y: 76.89903934439278
      }),
      new Costume("Mega Boomie9", "d34451bb14baed1db75e1aff1690dc69.svg", {
        x: 33.55446041381484,
        y: 76.89903474375123
      }),
      new Costume("Mega Boomie10", "bea48ad180fbe5d5c233345bea42e968.svg", {
        x: 33.55446041381484,
        y: 77.89904014310977
      }),
      new Costume("Mega Boomie11", "ce7699c87508407e19cc838ff0501c48.svg", {
        x: 33.55446041381484,
        y: 37.40984014310976
      }),
      new Costume("Launch_1", "b739ef9fa4ba7a1d8351abbb7b378e56.svg", {
        x: 63.17039375051377,
        y: 70.98641499710544
      }),
      new Costume("Launch_2", "f14dbfc54ee4e52f931e815236e192f9.svg", {
        x: 70.8802939130374,
        y: 50.678875853150146
      }),
      new Costume("Launch_3", "21cbefc04c6efb1e52de3f0f7ed2d578.svg", {
        x: 80.6865651894366,
        y: 23.477228914642808
      }),
      new Costume("Launch_4", "ea8510f2d9e82524ed6ffbed283a87b0.svg", {
        x: 73.67567470746553,
        y: 53.554880925166984
      }),
      new Costume("Launch_5", "1b829b674eb26e37fe12ee6f66d09823.svg", {
        x: 66.46762883370386,
        y: 52.87439723826708
      }),
      new Costume("Run_1", "36a230973d6dd8947be6bca75170f4fb.svg", {
        x: 55.32261035445043,
        y: 73.58496972735993
      }),
      new Costume("Run_2", "f2c3c40436b71944fac0052ab67f2d56.svg", {
        x: 55.322615472600575,
        y: 73.10570088073894
      }),
      new Costume("Run_3", "cb77d6c6efd57dfac6fca2ea0132d75a.svg", {
        x: 55.32260570890085,
        y: 70.46976866750572
      }),
      new Costume("Run_4", "44f36ca13187e3748de17873430bf354.svg", {
        x: 55.322590354450426,
        y: 66.87530915134955
      }),
      new Costume("Run_5", "904d1f3eeb6cb366916f62ed81e8845f.svg", {
        x: 55.32259047260055,
        y: 70.70939622634518
      }),
      new Costume("Run_6", "625df57969776b447e52f5865e473c8e.svg", {
        x: 55.32259511815013,
        y: 66.8753114797849
      }),
      new Costume("Backdash", "b12f632ffbde5bf2fcdd518bb98e9f14.svg", {
        x: 55.32260523630029,
        y: 73.1057029595698
      }),
      new Costume("Intro_1", "e0fc7976df3ec1c78730ddf6e53c6fe7.svg", {
        x: 25.482579236165407,
        y: 43.49950819614622
      }),
      new Costume("Intro_2", "7896a485fddacf6425f9d879094694d8.svg", {
        x: 26.23257947246563,
        y: 39.99951115571611
      }),
      new Costume("Intro_3", "19cd0e46cce1bdc86dbd22fc3a55c6a1.svg", {
        x: 26.232574826915965,
        y: 39.99951559507093
      }),
      new Costume("Intro_4", "984dc4cf18ea59e28178d578c845d6c2.svg", {
        x: 49.63068011815014,
        y: 62.0329964797849
      }),
      new Costume("Intro_5", "5eccb7ad028fa7ccabff0acd1a9cd964.svg", {
        x: 55.32261023630028,
        y: 69.99051295956981
      }),
      new Costume("Intro_6", "a745fd3f751ec22f73ff73bd59f2b67f.svg", {
        x: 52.6960043420803,
        y: 69.20575031950268
      }),
      new Costume("Intro_7", "2b8c289a25659612ed309a99864eacb6.svg", {
        x: 49.67720004251862,
        y: 68.54558674793826
      }),
      new Costume("Intro_8", "90747e044d46dff39c46f7a5480dfef9.svg", {
        x: 55.57261047260056,
        y: 69.99051591913964
      }),
      new Costume("Intro_9", "c99f7e1a9f211ecc942d214c65678ecd.svg", {
        x: 56.265503367905126,
        y: 70.00543642773948
      }),
      new Costume("Intro_10", "68b5e02347d4a5f230c19837337b5e2b.svg", {
        x: 56.3226155907507,
        y: 69.99050739892455
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "game" }, this.whenIReceiveGame)
    ];

    this.vars.p39 = 3;
    this.vars.state16 = 0;
    this.vars.x25 = 15;
    this.vars.y25 = 0;
    this.vars.direction18 = -1;
    this.vars.frame19 = 93;
    this.vars.xSpeed16 = 0;
    this.vars.ySpeed16 = 0;
    this.vars.i16 = 1;
    this.vars.length16 = 13;
    this.vars.part16 = 0;
    this.vars.p40 = 3;
    this.vars.touching16 = 0;
    this.vars.h16 = 3;
    this.vars.hx16 = 15;
    this.vars.hy16 = 0;
    this.vars.hxSize16 = 0;
    this.vars.hySize16 = 0;
    this.vars.health16 = 100;
    this.vars.hDamage16 = 0;
    this.vars.p41 = 0;
    this.vars.state17 = 0;
    this.vars.x26 = 0;
    this.vars.y26 = 0;
    this.vars.direction19 = 0;
    this.vars.frame20 = 0;
    this.vars.xSpeed17 = 0;
    this.vars.ySpeed17 = 0;
    this.vars.i17 = 0;
    this.vars.length17 = 0;
    this.vars.part17 = 0;
    this.vars.p42 = 0;
    this.vars.touching17 = 0;
    this.vars.h17 = 0;
    this.vars.hx17 = 0;
    this.vars.hy17 = 0;
    this.vars.hxSize17 = 0;
    this.vars.hySize17 = 0;
    this.vars.health17 = 0;
    this.vars.hDamage17 = 0;
    this.vars.impact12 = 0;
    this.vars.p43 = 0;
    this.vars.state18 = 0;
    this.vars.x27 = 0;
    this.vars.y27 = 0;
    this.vars.direction20 = 0;
    this.vars.frame21 = 0;
    this.vars.xSpeed18 = 0;
    this.vars.ySpeed18 = 0;
    this.vars.i18 = 0;
    this.vars.length18 = 0;
    this.vars.part18 = 0;
    this.vars.p44 = 0;
    this.vars.touching18 = 0;
    this.vars.h18 = 0;
    this.vars.hx18 = 0;
    this.vars.hy18 = 0;
    this.vars.hxSize18 = 0;
    this.vars.hySize18 = 0;
    this.vars.health18 = 0;
    this.vars.hDamage18 = 0;
    this.vars.impact13 = 0;
    this.vars.commands8 = 0;
    this.vars.command8 = 0;
    this.vars.inputs16 = [false, false, false, false, false, false];
    this.vars.hurtboxY16 = [11.5, 3.5, -8.5];
    this.vars.hurtboxYSize16 = [7, 9, 15];
    this.vars.hurtboxXSize16 = [5, 10, 12];
    this.vars.inputs17 = [];
    this.vars.hurtboxY17 = [];
    this.vars.hurtboxYSize17 = [];
    this.vars.hurtboxXSize17 = [];
    this.vars.inputs18 = [];
    this.vars.hurtboxY18 = [];
    this.vars.hurtboxYSize18 = [];
    this.vars.hurtboxXSize18 = [];
    this.vars.inputNames8 = [];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *clone() {
    this.visible = false;
    this.vars.p39 = 1;
    for (let i = 0; i < this.stage.vars.OfPlayers; i++) {
      if (
        this.compare(
          this.stage.vars.playerCharacter[this.vars.p39 - 1],
          "Orange"
        ) === 0
      ) {
        this.createClone();
      }
      this.vars.p39 += 1;
    }
  }

  *startAsClone() {
    this.visible = true;
    this.effects.color = this.stage.vars.playerColor[this.vars.p39 - 1];
    this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
    while (true) {
      if (this.compare(this.stage.vars.pauseMenu, 0) === 0) {
        this.goto(
          (this.stage.vars.playerX[this.vars.p39 - 1] +
            this.stage.vars.rumbleX -
            this.stage.vars.scrollX) *
            4,
          (this.stage.vars.playerY[this.vars.p39 - 1] +
            this.stage.vars.rumbleY) *
            4 -
            20
        );
        this.direction = this.stage.vars.playerDirection[this.vars.p39 - 1];
        yield* this.costumes2(
          this.stage.vars.playerState[this.vars.p39 - 1],
          this.stage.vars.playerFrame[this.vars.p39 - 1]
        );
        if (this.compare(this.vars.h16, 1) === 0) {
          this.effects.color =
            this.stage.vars.playerColor[this.vars.p39 - 1] +
            (this.stage.vars.gameframe % 8) * -4;
          this.effects.brightness = ((this.stage.vars.gameframe % 8) - 3) * 4;
          if (
            this.compare(this.stage.vars.playerState[this.vars.p39 - 1], 29) ===
            0
          ) {
            if (this.compare(this.vars.i16, 3) === 0) {
              this.stage.vars.hitboxXKnockback.splice(this.vars.p39 - 1, 1, 1);
              this.stage.vars.playerYSpeed.splice(this.vars.p39 - 1, 1, 1);
              this.stage.vars.hitboxHitstun.splice(this.vars.p39 - 1, 1, 6);
              this.stage.vars.playerFrame.splice(
                this.vars.p39 - 1,
                1,
                this.stage.vars.playerFrame[this.vars.p39 - 1] + 0.5
              );
              if (
                this.compare(
                  this.stage.vars.playerFrame[this.vars.p39 - 1],
                  16
                ) > 0
              ) {
                this.stage.vars.playerState.splice(this.vars.p39 - 1, 1, 0);
                this.vars.i16 = 0;
              }
            } else {
              if (
                this.toBoolean(
                  this.stage.vars.currentInputs[this.vars.p39 * 6 - 1 - 1]
                )
              ) {
                if (
                  this.compare(
                    this.stage.vars.playerFrame[this.vars.p39 - 1],
                    13
                  ) > 0
                ) {
                  this.stage.vars.playerFrame.splice(this.vars.p39 - 1, 1, 3);
                  this.stage.vars.playerState.splice(this.vars.p39 - 1, 1, 21);
                }
              }
            }
          }
          if (
            this.compare(this.stage.vars.playerState[this.vars.p39 - 1], 13) ===
            0
          ) {
            if (this.compare(this.vars.i16, 1) === 0) {
              this.stage.vars.hitboxDamage.splice(this.vars.p39 - 1, 1, 2);
              this.stage.vars.hitboxHitstun.splice(this.vars.p39 - 1, 1, 4);
              this.stage.vars.hitboxXKnockback.splice(this.vars.p39 - 1, 1, 1);
              if (
                this.compare(
                  this.stage.vars.playerFrame[this.vars.p39 - 1],
                  7
                ) > 0
              ) {
                this.stage.vars.playerState.splice(this.vars.p39 - 1, 1, 5);
                this.stage.vars.playerFrame.splice(this.vars.p39 - 1, 1, 2);
                this.vars.i16 = 2;
              }
            } else {
              this.stage.vars.hitboxXKnockback.splice(this.vars.p39 - 1, 1, 0);
              this.stage.vars.hitboxYKnockback.splice(this.vars.p39 - 1, 1, 0);
              this.stage.vars.hitboxHitstun.splice(this.vars.p39 - 1, 1, 6);
              if (
                this.toBoolean(
                  this.stage.vars.currentInputs[this.vars.p39 * 6 - 1 - 1]
                )
              ) {
                if (
                  this.compare(
                    this.stage.vars.playerFrame[this.vars.p39 - 1],
                    4
                  ) > 0
                ) {
                  this.stage.vars.playerFrame.splice(this.vars.p39 - 1, 1, -2);
                  this.stage.vars.playerState.splice(this.vars.p39 - 1, 1, 29);
                }
              }
            }
          }
          if (
            this.compare(this.stage.vars.playerState[this.vars.p39 - 1], 5) ===
            0
          ) {
            if (this.compare(this.vars.i16, 2) === 0) {
              if (
                this.compare(
                  this.stage.vars.playerFrame[this.vars.p39 - 1],
                  5
                ) > 0
              ) {
                this.stage.vars.playerState.splice(this.vars.p39 - 1, 1, 0);
                this.vars.i16 = 0;
              }
            } else {
              if (
                this.toBoolean(
                  this.stage.vars.currentInputs[
                    this.vars.p39 * 6 -
                      (3 +
                        (this.stage.vars.playerDirection[this.vars.p39 - 1] %
                          3)) -
                      1
                  ]
                )
              ) {
                this.stage.vars.playerFrame.splice(this.vars.p39 - 1, 1, 9);
                this.stage.vars.playerState.splice(this.vars.p39 - 1, 1, 29);
                this.vars.i16 = 3;
              } else {
                this.stage.vars.playerState.splice(this.vars.p39 - 1, 1, 13);
                this.stage.vars.playerFrame.splice(this.vars.p39 - 1, 1, 8);
                this.vars.i16 = 1;
              }
            }
          }
          if (
            this.compare(this.stage.vars.playerState[this.vars.p39 - 1], 22) ===
            0
          ) {
            this.stage.vars.playerFrame.splice(
              this.vars.p39 - 1,
              1,
              this.stage.vars.playerFrame[this.vars.p39 - 1] + 0.5
            );
            if (
              this.compare(this.stage.vars.playerFrame[this.vars.p39 - 1], 24) >
              0
            ) {
              this.stage.vars.playerState.splice(this.vars.p39 - 1, 1, 30);
              this.stage.vars.playerY.splice(this.vars.p39 - 1, 1, 18);
              this.stage.vars.playerYSpeed.splice(this.vars.p39 - 1, 1, 3);
              this.stage.vars.playerFrame.splice(this.vars.p39 - 1, 1, 0);
            }
          }
          if (
            this.compare(this.stage.vars.playerState[this.vars.p39 - 1], 11) ===
            0
          ) {
            if (this.compare(this.sprites["Logic"].vars.impact19, 0) > 0) {
              this.stage.vars.playerFrame.splice(
                this.vars.p39 - 1,
                1,
                this.stage.vars.playerFrame[this.vars.p39 - 1] + 3
              );
            }
            this.stage.vars.hitboxHitstun.splice(this.vars.p39 - 1, 1, 5);
          }
          this.stage.vars.playerEx.splice(this.vars.p39 - 1, 1, 3);
        }
      }
      yield;
    }
  }

  *costumes2(s6, f5) {
    this.effects.brightness = 0;
    if (this.compare(s6, 0) === 0) {
      if (this.compare(f5 % 30, 14) > 0) {
        this.costume = Math.round(5 - (Math.floor(f5 / 3.75) % 4));
      } else {
        this.costume = (Math.floor(f5 / 3.75) % 4) + 1;
      }
    } else {
      if (this.compare(s6, 1) === 0) {
        this.costume = (Math.floor(f5 / 2) % 6) + 7;
      } else {
        if (this.compare(s6, 1.1) === 0 || this.compare(s6, 1.2) === 0) {
          if (this.compare(Math.round((f5 / 2) % 8) + 1, 4) === 0) {
            this.costume = "Run_6";
          } else {
            this.costume = "" + "Run_" + (Math.round((f5 / 2) % 4) + 1);
          }
        } else {
          if (this.compare(s6, 1.3) === 0) {
            this.costume = "Backdash";
          } else {
            if (this.compare(s6, 2) === 0) {
              if (
                this.compare(
                  this.stage.vars.playerYSpeed[this.vars.p39 - 1],
                  -1
                ) > 0
              ) {
                this.costume = "midair";
              } else {
                this.costume = "midair2";
              }
            } else {
              if (this.compare(s6, 2.1) === 0) {
                if (this.compare(Math.round((f5 / 1.2) % 6) + 1, 4.8) === 0) {
                  this.costume = "Run_6";
                } else {
                  this.costume = "" + "Run_" + (Math.round((f5 / 1.2) % 5) + 1);
                }
              } else {
                if (this.compare(s6, 3) === 0) {
                  this.costume = "crouch";
                } else {
                  if (this.compare(s6, 4) === 0) {
                    if (this.compare(f5, 2) < 0) {
                      this.costume = "punch1";
                    } else {
                      if (this.compare(f5, 3) < 0) {
                        this.costume = "punch2";
                      } else {
                        if (this.compare(f5, 4) < 0) {
                          this.costume = "punch3";
                        } else {
                          if (this.compare(f5, 6) < 0) {
                            this.costume = "punch4";
                          } else {
                            if (this.compare(f5, 7) < 0) {
                              this.costume = "punch5";
                            } else {
                              this.costume = "punch6";
                            }
                          }
                        }
                      }
                    }
                  } else {
                    if (this.compare(s6, 5) === 0) {
                      this.stage.vars.hitboxYKnockback.splice(
                        this.vars.p39 - 1,
                        1,
                        4
                      );
                      this.stage.vars.hitboxXKnockback.splice(
                        this.vars.p39 - 1,
                        1,
                        1.5
                      );
                      if (this.compare(f5, 3) < 0) {
                        this.costume = "high kick1";
                        if (
                          this.compare(this.sprites["Logic"].vars.impact19, 0) <
                          0
                        ) {
                          this.stage.vars.playerX.splice(
                            this.vars.p39 - 1,
                            1,
                            this.stage.vars.playerX[this.vars.p39 - 1] +
                              this.stage.vars.playerDirection[
                                this.vars.p39 - 1
                              ] *
                                5
                          );
                        }
                      } else {
                        if (this.compare(f5, 4) < 0) {
                          this.costume = "high kick2";
                        } else {
                          if (this.compare(f5, 6) < 0) {
                            this.costume = "high kick4";
                          } else {
                            if (this.compare(f5, 8) < 0) {
                              this.costume = "high kick3";
                            } else {
                              if (this.compare(f5, 10) < 0) {
                                this.costume = "high kick5";
                              } else {
                                this.costume = "high kick6";
                                this.stage.vars.playerFrame.splice(
                                  this.vars.p39 - 1,
                                  1,
                                  19
                                );
                              }
                            }
                          }
                        }
                      }
                    } else {
                      if (this.compare(s6, 6) === 0) {
                        this.costume = "land";
                      } else {
                        if (this.compare(s6, 7) === 0) {
                          if (this.compare(f5, 7) < 0) {
                            this.costume = "hurt head";
                          } else {
                            this.costume = "hurt head2";
                          }
                        } else {
                          if (this.compare(s6, 8) === 0) {
                            if (this.compare(f5, 5) < 0) {
                              this.costume = "hurt torso";
                            } else {
                              this.costume = "hurt torso2";
                            }
                          } else {
                            if (this.compare(s6, 9) === 0) {
                              if (this.compare(f5, 4) < 0) {
                                this.costume = "block head";
                              } else {
                                this.costume = "block head2";
                              }
                            } else {
                              if (this.compare(s6, 10) === 0) {
                                if (this.compare(f5, 3) < 0) {
                                  this.costume = "block torso";
                                } else {
                                  this.costume = "block torso2";
                                }
                              } else {
                                if (this.compare(s6, 11) === 0) {
                                  if (this.compare(f5, 4) < 0) {
                                    this.costume = "air punch";
                                  } else {
                                    if (this.compare(f5, 5) < 0) {
                                      this.costume = "air punch2";
                                      this.stage.vars.hitboxHitstun.splice(
                                        this.vars.p39 - 1,
                                        1,
                                        9
                                      );
                                      if (
                                        this.compare(
                                          this.sprites["Logic"].vars.impact19,
                                          0
                                        ) > 0
                                      ) {
                                        if (
                                          this.compare(
                                            this.stage.vars.playerYSpeed[
                                              this.vars.p39 - 1
                                            ],
                                            0
                                          ) < 0
                                        ) {
                                          this.stage.vars.playerYSpeed.splice(
                                            this.vars.p39 - 1,
                                            1,
                                            1.5
                                          );
                                        } else {
                                          null;
                                        }
                                      }
                                    } else {
                                      if (
                                        this.compare(
                                          this.sprites["Logic"].vars.impact19,
                                          -10
                                        ) < 0
                                      ) {
                                        this.stage.vars.playerFrame.splice(
                                          this.vars.p39 - 1,
                                          1,
                                          this.stage.vars.playerFrame[
                                            this.vars.p39 - 1
                                          ] + -0.5
                                        );
                                      }
                                      this.stage.vars.hitboxDamage.splice(
                                        this.vars.p39 - 1,
                                        1,
                                        2
                                      );
                                      this.stage.vars.hitboxXKnockback.splice(
                                        this.vars.p39 - 1,
                                        1,
                                        2
                                      );
                                      if (this.compare(f5, 6) < 0) {
                                        this.costume = "air punch3";
                                      } else {
                                        if (this.compare(f5, 7) < 0) {
                                          this.costume = "air punch4";
                                        } else {
                                          if (this.compare(f5, 8) < 0) {
                                            this.costume = "air punch5";
                                          } else {
                                            this.costume = "air punch6";
                                          }
                                        }
                                      }
                                    }
                                  }
                                } else {
                                  if (this.compare(s6, 12) === 0) {
                                    this.stage.vars.hitboxYKnockback.splice(
                                      this.vars.p39 - 1,
                                      1,
                                      3.5
                                    );
                                    if (this.compare(f5, 2) < 0) {
                                      this.costume = "air kick";
                                    } else {
                                      if (this.compare(f5, 3) < 0) {
                                        this.costume = "air kick2";
                                      } else {
                                        if (this.compare(f5, 4) < 0) {
                                          this.costume = "air kick3";
                                        } else {
                                          if (this.compare(f5, 6) < 0) {
                                            this.costume = "air kick4";
                                          } else {
                                            if (this.compare(f5, 7) < 0) {
                                              this.costume = "air kick5";
                                            } else {
                                              if (this.compare(f5, 9) < 0) {
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
                                    if (this.compare(s6, 13) === 0) {
                                      if (this.compare(f5, 2) < 0) {
                                        this.costume = "lowpunch";
                                      } else {
                                        if (this.compare(f5, 4) < 0) {
                                          this.costume = "lowpunch4";
                                        } else {
                                          if (this.compare(f5, 5) < 0) {
                                            this.costume = "lowpunch5";
                                          } else {
                                            if (this.compare(f5, 7) < 0) {
                                              this.costume = "lowpunch6";
                                              if (
                                                this.compare(
                                                  this.sprites["Logic"].vars
                                                    .impact19,
                                                  0
                                                ) < 0
                                              ) {
                                                this.stage.vars.playerX.splice(
                                                  this.vars.p39 - 1,
                                                  1,
                                                  this.stage.vars.playerX[
                                                    this.vars.p39 - 1
                                                  ] +
                                                    this.stage.vars
                                                      .playerDirection[
                                                      this.vars.p39 - 1
                                                    ] *
                                                      8
                                                );
                                              }
                                            } else {
                                              if (this.compare(f5, 12) < 0) {
                                                this.costume = "lowpunch2";
                                                if (
                                                  this.compare(
                                                    this.sprites["Logic"].vars
                                                      .impact19,
                                                    0
                                                  ) < 0
                                                ) {
                                                  this.stage.vars.playerX.splice(
                                                    this.vars.p39 - 1,
                                                    1,
                                                    this.stage.vars.playerX[
                                                      this.vars.p39 - 1
                                                    ] +
                                                      this.stage.vars
                                                        .playerDirection[
                                                        this.vars.p39 - 1
                                                      ] *
                                                        3
                                                  );
                                                }
                                              } else {
                                                if (this.compare(f5, 14) < 0) {
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
                                      if (this.compare(s6, 14) === 0) {
                                        this.stage.vars.hitboxXKnockback.splice(
                                          this.vars.p39 - 1,
                                          1,
                                          4
                                        );
                                        this.stage.vars.hitboxYKnockback.splice(
                                          this.vars.p39 - 1,
                                          1,
                                          2
                                        );
                                        this.stage.vars.hitboxDamage.splice(
                                          this.vars.p39 - 1,
                                          1,
                                          4
                                        );
                                        if (this.compare(f5, 2) < 0) {
                                          this.costume = "low kick";
                                        } else {
                                          if (this.compare(f5, 3) < 0) {
                                            this.costume = "low kick2";
                                          } else {
                                            if (this.compare(f5, 5) < 0) {
                                              this.costume = "low kick3";
                                            } else {
                                              if (this.compare(f5, 6) < 0) {
                                                this.costume = "low kick4";
                                              } else {
                                                if (this.compare(f5, 7) < 0) {
                                                  this.costume = "low kick5";
                                                } else {
                                                  if (this.compare(f5, 8) < 0) {
                                                    this.costume = "low kick6";
                                                  } else {
                                                    this.stage.vars.playerState.splice(
                                                      this.vars.p39 - 1,
                                                      1,
                                                      3
                                                    );
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      } else {
                                        if (this.compare(s6, 15) === 0) {
                                          if (this.compare(f5, 8) < 0) {
                                            this.costume = "hurt air";
                                          } else {
                                            this.costume = "hurt air2";
                                          }
                                        } else {
                                          if (this.compare(s6, 16) === 0) {
                                            this.costume = "hadouken";
                                          } else {
                                            if (this.compare(s6, 17) === 0) {
                                              this.costume = "parry";
                                              this.effects.brightness =
                                                (this.stage.vars.gameframe %
                                                  3) *
                                                50;
                                            } else {
                                              if (this.compare(s6, 18) === 0) {
                                                if (this.compare(f5, 2) < 0) {
                                                  this.costume = "low punch";
                                                } else {
                                                  if (this.compare(f5, 3) < 0) {
                                                    this.costume = "low punch2";
                                                  } else {
                                                    if (
                                                      this.compare(f5, 5) < 0
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
                                                  this.compare(s6, 19) === 0
                                                ) {
                                                  if (this.compare(f5, 5) < 0) {
                                                    this.costume = "hurt torso";
                                                  } else {
                                                    this.costume = "wallbounce";
                                                  }
                                                } else {
                                                  if (
                                                    this.compare(s6, 20) === 0
                                                  ) {
                                                    if (
                                                      this.compare(f5, 5) < 0
                                                    ) {
                                                      this.costume = "teleport";
                                                      if (
                                                        this.toBoolean(
                                                          this.stage.vars
                                                            .currentInputs[
                                                            this.vars.p39 * 6 -
                                                              1 -
                                                              1
                                                          ]
                                                        )
                                                      ) {
                                                        if (
                                                          this.compare(
                                                            this.stage.vars
                                                              .playerHealth[
                                                              this.vars.p39 - 1
                                                            ],
                                                            95
                                                          ) < 0
                                                        ) {
                                                          this.stage.vars.playerHealth.splice(
                                                            this.vars.p39 - 1,
                                                            1,
                                                            this.stage.vars
                                                              .playerHealth[
                                                              this.vars.p39 - 1
                                                            ] + 0.1
                                                          );
                                                        }
                                                        this.stage.vars.playerFrame.splice(
                                                          this.vars.p39 - 1,
                                                          1,
                                                          2
                                                        );
                                                        this.effects.brightness = 50;
                                                      } else {
                                                        this.effects.brightness = 0;
                                                      }
                                                    } else {
                                                      if (
                                                        this.toBoolean(
                                                          this.stage.vars
                                                            .currentInputs[
                                                            this.vars.p39 * 6 -
                                                              1
                                                          ]
                                                        )
                                                      ) {
                                                        this.stage.vars.playerX.splice(
                                                          this.vars.p39 - 1,
                                                          1,
                                                          this.stage.vars
                                                            .playerX[
                                                            this.vars.p39 - 1
                                                          ] +
                                                            this.stage.vars
                                                              .playerDirection[
                                                              this.vars.p39 - 1
                                                            ] *
                                                              32
                                                        );
                                                        this.stage.vars.playerY.splice(
                                                          this.vars.p39 - 1,
                                                          1,
                                                          12
                                                        );
                                                        this.stage.vars.playerState.splice(
                                                          this.vars.p39 - 1,
                                                          1,
                                                          30
                                                        );
                                                        this.stage.vars.playerYSpeed.splice(
                                                          this.vars.p39 - 1,
                                                          1,
                                                          2
                                                        );
                                                        this.stage.vars.playerFrame.splice(
                                                          this.vars.p39 - 1,
                                                          1,
                                                          6
                                                        );
                                                      } else {
                                                        if (
                                                          this.toBoolean(
                                                            this.stage.vars
                                                              .currentInputs[
                                                              this.vars.p39 *
                                                                6 -
                                                                3 -
                                                                1
                                                            ]
                                                          )
                                                        ) {
                                                          this.stage.vars.playerX.splice(
                                                            this.vars.p39 - 1,
                                                            1,
                                                            this.stage.vars
                                                              .playerX[
                                                              this.vars.p39 - 1
                                                            ] +
                                                              this.stage.vars
                                                                .playerDirection[
                                                                this.vars.p39 -
                                                                  1
                                                              ] *
                                                                16
                                                          );
                                                          this.stage.vars.playerY.splice(
                                                            this.vars.p39 - 1,
                                                            1,
                                                            28
                                                          );
                                                          this.stage.vars.playerYSpeed.splice(
                                                            this.vars.p39 - 1,
                                                            1,
                                                            3
                                                          );
                                                          this.stage.vars.playerState.splice(
                                                            this.vars.p39 - 1,
                                                            1,
                                                            2
                                                          );
                                                        } else {
                                                          if (
                                                            this.toBoolean(
                                                              this.stage.vars
                                                                .currentInputs[
                                                                this.vars.p39 *
                                                                  6 -
                                                                  5 -
                                                                  1
                                                              ]
                                                            )
                                                          ) {
                                                            this.stage.vars.playerX.splice(
                                                              this.vars.p39 - 1,
                                                              1,
                                                              this.stage.vars
                                                                .playerX[
                                                                this.vars.p39 -
                                                                  1
                                                              ] +
                                                                (40 +
                                                                  this.stage
                                                                    .vars
                                                                    .playerDirection[
                                                                    this.vars
                                                                      .p39 - 1
                                                                  ] *
                                                                    8)
                                                            );
                                                            this.stage.vars.playerY.splice(
                                                              this.vars.p39 - 1,
                                                              1,
                                                              8
                                                            );
                                                            this.stage.vars.playerYSpeed.splice(
                                                              this.vars.p39 - 1,
                                                              1,
                                                              1
                                                            );
                                                            this.stage.vars.playerState.splice(
                                                              this.vars.p39 - 1,
                                                              1,
                                                              2
                                                            );
                                                          } else {
                                                            if (
                                                              this.toBoolean(
                                                                this.stage.vars
                                                                  .currentInputs[
                                                                  this.vars
                                                                    .p39 *
                                                                    6 -
                                                                    4 -
                                                                    1
                                                                ]
                                                              )
                                                            ) {
                                                              this.stage.vars.playerX.splice(
                                                                this.vars.p39 -
                                                                  1,
                                                                1,
                                                                this.stage.vars
                                                                  .playerX[
                                                                  this.vars
                                                                    .p39 - 1
                                                                ] +
                                                                  (-40 +
                                                                    this.stage
                                                                      .vars
                                                                      .playerDirection[
                                                                      this.vars
                                                                        .p39 - 1
                                                                    ] *
                                                                      8)
                                                              );
                                                              this.stage.vars.playerY.splice(
                                                                this.vars.p39 -
                                                                  1,
                                                                1,
                                                                8
                                                              );
                                                              this.stage.vars.playerYSpeed.splice(
                                                                this.vars.p39 -
                                                                  1,
                                                                1,
                                                                1
                                                              );
                                                              this.stage.vars.playerState.splice(
                                                                this.vars.p39 -
                                                                  1,
                                                                1,
                                                                2
                                                              );
                                                            } else {
                                                              this.stage.vars.playerX.splice(
                                                                this.vars.p39 -
                                                                  1,
                                                                1,
                                                                this.stage.vars
                                                                  .playerX[
                                                                  this.vars
                                                                    .p39 - 1
                                                                ] +
                                                                  this.stage
                                                                    .vars
                                                                    .playerDirection[
                                                                    this.vars
                                                                      .p39 - 1
                                                                  ] *
                                                                    32
                                                              );
                                                              this.stage.vars.playerY.splice(
                                                                this.vars.p39 -
                                                                  1,
                                                                1,
                                                                12
                                                              );
                                                              this.stage.vars.playerState.splice(
                                                                this.vars.p39 -
                                                                  1,
                                                                1,
                                                                2
                                                              );
                                                              this.stage.vars.playerYSpeed.splice(
                                                                this.vars.p39 -
                                                                  1,
                                                                1,
                                                                2
                                                              );
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  } else {
                                                    if (
                                                      this.compare(s6, 21) === 0
                                                    ) {
                                                      this.stage.vars.hitboxDamage.splice(
                                                        this.vars.p39 - 1,
                                                        1,
                                                        2
                                                      );
                                                      this.stage.vars.hitboxHitstun.splice(
                                                        this.vars.p39 - 1,
                                                        1,
                                                        16
                                                      );
                                                      if (
                                                        this.compare(f5, 3) < 0
                                                      ) {
                                                        this.costume = "Grab1";
                                                      } else {
                                                        if (
                                                          this.compare(f5, 5) <
                                                          0
                                                        ) {
                                                          this.costume =
                                                            "Grab2";
                                                        } else {
                                                          if (
                                                            this.compare(
                                                              f5,
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
                                                                      .p39 - 1
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
                                                                this.vars.p39 -
                                                                  1,
                                                                1,
                                                                11
                                                              );
                                                              this.stage.vars.playerState.splice(
                                                                this.vars.p39 -
                                                                  1,
                                                                1,
                                                                22
                                                              );
                                                            }
                                                            if (
                                                              this.compare(
                                                                f5,
                                                                10
                                                              ) < 0
                                                            ) {
                                                              this.costume =
                                                                "Grab4";
                                                            } else {
                                                              this.costume =
                                                                "Grab5";
                                                              this.stage.vars.playerFrame.splice(
                                                                this.vars.p39 -
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
                                                        this.compare(s6, 22) ===
                                                        0
                                                      ) {
                                                        if (
                                                          this.compare(f5, 12) <
                                                          0
                                                        ) {
                                                          this.costume =
                                                            "Throw";
                                                        } else {
                                                          if (
                                                            this.compare(
                                                              f5,
                                                              18
                                                            ) < 0
                                                          ) {
                                                            this.costume =
                                                              "" +
                                                              "Throw" +
                                                              (Math.round(
                                                                f5 / 2.5
                                                              ) -
                                                                3);
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
                                                                f5,
                                                                20
                                                              ) < 0
                                                            ) {
                                                              this.costume =
                                                                "Throw5";
                                                              this.stage.vars.playerYSpeed.splice(
                                                                this.vars.p39 -
                                                                  1,
                                                                1,
                                                                2
                                                              );
                                                              this.stage.vars.playerYSpeed.splice(
                                                                this.stage.vars.playerState.indexOf(
                                                                  8
                                                                ) +
                                                                  1 -
                                                                  1,
                                                                1,
                                                                5.5
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
                                                                    .p39 - 1
                                                                ] * -0.5
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
                                                                ] - 3
                                                              );
                                                            } else {
                                                              if (
                                                                this.compare(
                                                                  f5,
                                                                  24
                                                                ) < 0
                                                              ) {
                                                                this.costume =
                                                                  "Throw6";
                                                              } else {
                                                                if (
                                                                  this.compare(
                                                                    f5,
                                                                    26
                                                                  ) < 0
                                                                ) {
                                                                  this.costume =
                                                                    "Throw7";
                                                                } else {
                                                                  if (
                                                                    this.compare(
                                                                      f5,
                                                                      28
                                                                    ) < 0
                                                                  ) {
                                                                    this.costume =
                                                                      "Throw8";
                                                                  } else {
                                                                    this.stage.vars.playerState.splice(
                                                                      this.vars
                                                                        .p39 -
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
                                                            s6,
                                                            24
                                                          ) === 0
                                                        ) {
                                                          if (
                                                            this.compare(
                                                              f5,
                                                              4
                                                            ) < 0
                                                          ) {
                                                            this.costume =
                                                              "Die";
                                                          } else {
                                                            if (
                                                              this.compare(
                                                                f5,
                                                                7
                                                              ) < 0
                                                            ) {
                                                              this.costume =
                                                                "Die2";
                                                            } else {
                                                              if (
                                                                this.compare(
                                                                  f5,
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
                                                              s6,
                                                              25
                                                            ) === 0
                                                          ) {
                                                            if (
                                                              this.compare(
                                                                f5,
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
                                                                s6,
                                                                26
                                                              ) === 0
                                                            ) {
                                                              if (
                                                                this.compare(
                                                                  f5,
                                                                  10
                                                                ) < 0
                                                              ) {
                                                                this.stage.vars.playerFrame.splice(
                                                                  this.vars
                                                                    .p39 - 1,
                                                                  1,
                                                                  10
                                                                );
                                                              } else {
                                                                if (
                                                                  this.compare(
                                                                    f5,
                                                                    12
                                                                  ) < 0
                                                                ) {
                                                                  this.costume =
                                                                    "Hat Toss";
                                                                } else {
                                                                  if (
                                                                    this.compare(
                                                                      f5,
                                                                      14
                                                                    ) < 0
                                                                  ) {
                                                                    this.costume =
                                                                      "Hat Toss2";
                                                                  } else {
                                                                    if (
                                                                      this.compare(
                                                                        f5,
                                                                        15
                                                                      ) < 0
                                                                    ) {
                                                                      this.costume =
                                                                        "Hat Toss3";
                                                                    } else {
                                                                      if (
                                                                        this.compare(
                                                                          f5,
                                                                          40
                                                                        ) < 0
                                                                      ) {
                                                                        this.costume =
                                                                          "" +
                                                                          "Hat Toss" +
                                                                          ((f5 %
                                                                            4) +
                                                                            4);
                                                                      } else {
                                                                        if (
                                                                          this.compare(
                                                                            f5,
                                                                            42
                                                                          ) < 0
                                                                        ) {
                                                                          this.costume =
                                                                            "Hat Toss8";
                                                                        } else {
                                                                          if (
                                                                            this.compare(
                                                                              f5,
                                                                              43
                                                                            ) <
                                                                            0
                                                                          ) {
                                                                            this.costume =
                                                                              "Hat Toss9";
                                                                          } else {
                                                                            if (
                                                                              this.compare(
                                                                                f5,
                                                                                44
                                                                              ) <
                                                                              0
                                                                            ) {
                                                                              this.costume =
                                                                                "Hat Toss10";
                                                                            } else {
                                                                              this.stage.vars.playerState.splice(
                                                                                this
                                                                                  .vars
                                                                                  .p39 -
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
                                                                  s6,
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
                                                                          .p39 -
                                                                          1
                                                                      ]
                                                                    ),
                                                                    Math.abs(
                                                                      this.stage
                                                                        .vars
                                                                        .playerXSpeed[
                                                                        this
                                                                          .vars
                                                                          .p39 -
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
                                                                          .p39 -
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
                                                                            .p39 -
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
                                                                            .p39 -
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
                                                                            .p39 -
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
                                                                    s6,
                                                                    4.1
                                                                  ) === 0
                                                                ) {
                                                                  this.stage.vars.hitboxDamage.splice(
                                                                    this.vars
                                                                      .p39 - 1,
                                                                    1,
                                                                    4
                                                                  );
                                                                  if (
                                                                    this.compare(
                                                                      f5,
                                                                      2
                                                                    ) < 0
                                                                  ) {
                                                                    this.costume =
                                                                      "auto";
                                                                  } else {
                                                                    if (
                                                                      this.compare(
                                                                        f5,
                                                                        3
                                                                      ) < 0
                                                                    ) {
                                                                      this.costume =
                                                                        "auto2";
                                                                    } else {
                                                                      if (
                                                                        this.compare(
                                                                          f5,
                                                                          5
                                                                        ) < 0
                                                                      ) {
                                                                        this.costume =
                                                                          "auto3";
                                                                      } else {
                                                                        if (
                                                                          this.compare(
                                                                            f5,
                                                                            8
                                                                          ) < 0
                                                                        ) {
                                                                          this.costume =
                                                                            "auto4";
                                                                        } else {
                                                                          if (
                                                                            this.compare(
                                                                              f5,
                                                                              9
                                                                            ) <
                                                                            0
                                                                          ) {
                                                                            this.costume =
                                                                              "auto5";
                                                                          } else {
                                                                            this.stage.vars.playerFrame.splice(
                                                                              this
                                                                                .vars
                                                                                .p39 -
                                                                                1,
                                                                              1,
                                                                              0
                                                                            );
                                                                            this.stage.vars.playerState.splice(
                                                                              this
                                                                                .vars
                                                                                .p39 -
                                                                                1,
                                                                              1,
                                                                              6
                                                                            );
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                } else {
                                                                  if (
                                                                    this.compare(
                                                                      s6,
                                                                      27
                                                                    ) === 0
                                                                  ) {
                                                                    this.vars.h16 = 1;
                                                                    this.stage.vars.playerFrame.splice(
                                                                      this.vars
                                                                        .p39 -
                                                                        1,
                                                                      1,
                                                                      -8
                                                                    );
                                                                    this.stage.vars.playerState.splice(
                                                                      this.vars
                                                                        .p39 -
                                                                        1,
                                                                      1,
                                                                      6
                                                                    );
                                                                  } else {
                                                                    if (
                                                                      this.compare(
                                                                        s6,
                                                                        28
                                                                      ) === 0
                                                                    ) {
                                                                      this.costume =
                                                                        "block crouch";
                                                                    } else {
                                                                      if (
                                                                        this.compare(
                                                                          s6,
                                                                          29
                                                                        ) === 0
                                                                      ) {
                                                                        this.stage.vars.hitboxYKnockback.splice(
                                                                          this
                                                                            .vars
                                                                            .p39 -
                                                                            1,
                                                                          1,
                                                                          -1
                                                                        );
                                                                        this.stage.vars.hitboxDamage.splice(
                                                                          this
                                                                            .vars
                                                                            .p39 -
                                                                            1,
                                                                          1,
                                                                          6
                                                                        );
                                                                        if (
                                                                          this.compare(
                                                                            f5,
                                                                            6
                                                                          ) < 0
                                                                        ) {
                                                                          this.stage.vars.playerFrame.splice(
                                                                            this
                                                                              .vars
                                                                              .p39 -
                                                                              1,
                                                                            1,
                                                                            6
                                                                          );
                                                                        } else {
                                                                          if (
                                                                            this.compare(
                                                                              f5,
                                                                              7
                                                                            ) <
                                                                            0
                                                                          ) {
                                                                            this.costume =
                                                                              "Hatslam";
                                                                          } else {
                                                                            if (
                                                                              this.compare(
                                                                                f5,
                                                                                9
                                                                              ) <
                                                                              0
                                                                            ) {
                                                                              this.costume =
                                                                                "Hatslam2";
                                                                            } else {
                                                                              if (
                                                                                this.compare(
                                                                                  f5,
                                                                                  11
                                                                                ) <
                                                                                0
                                                                              ) {
                                                                                this.costume =
                                                                                  "Hatslam3";
                                                                              } else {
                                                                                if (
                                                                                  this.compare(
                                                                                    f5,
                                                                                    12
                                                                                  ) <
                                                                                  0
                                                                                ) {
                                                                                  this.costume =
                                                                                    "Hatslam4";
                                                                                } else {
                                                                                  if (
                                                                                    this.compare(
                                                                                      f5,
                                                                                      13
                                                                                    ) <
                                                                                    0
                                                                                  ) {
                                                                                    this.costume =
                                                                                      "Hatslam5";
                                                                                  } else {
                                                                                    if (
                                                                                      this.compare(
                                                                                        f5,
                                                                                        16
                                                                                      ) <
                                                                                      0
                                                                                    ) {
                                                                                      this.costume =
                                                                                        "Hatslam6";
                                                                                    } else {
                                                                                      if (
                                                                                        this.compare(
                                                                                          f5,
                                                                                          18
                                                                                        ) <
                                                                                        0
                                                                                      ) {
                                                                                        this.costume =
                                                                                          "Hatslam7";
                                                                                      } else {
                                                                                        if (
                                                                                          this.compare(
                                                                                            f5,
                                                                                            20
                                                                                          ) <
                                                                                          0
                                                                                        ) {
                                                                                          this.costume =
                                                                                            "Hatslam8";
                                                                                        } else {
                                                                                          this.costume =
                                                                                            "Hatslam9";
                                                                                          this.stage.vars.playerState.splice(
                                                                                            this
                                                                                              .vars
                                                                                              .p39 -
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
                                                                        if (
                                                                          this.compare(
                                                                            s6,
                                                                            30
                                                                          ) ===
                                                                          0
                                                                        ) {
                                                                          this.stage.vars.hitboxXKnockback.splice(
                                                                            this
                                                                              .vars
                                                                              .p39 -
                                                                              1,
                                                                            1,
                                                                            16
                                                                          );
                                                                          this.stage.vars.hitboxYKnockback.splice(
                                                                            this
                                                                              .vars
                                                                              .p39 -
                                                                              1,
                                                                            1,
                                                                            -8
                                                                          );
                                                                          this.stage.vars.hitboxDamage.splice(
                                                                            this
                                                                              .vars
                                                                              .p39 -
                                                                              1,
                                                                            1,
                                                                            10
                                                                          );
                                                                          if (
                                                                            this.compare(
                                                                              f5,
                                                                              3
                                                                            ) <
                                                                            0
                                                                          ) {
                                                                            this.stage.vars.playerFrame.splice(
                                                                              this
                                                                                .vars
                                                                                .p39 -
                                                                                1,
                                                                              1,
                                                                              3
                                                                            );
                                                                          } else {
                                                                            if (
                                                                              this.compare(
                                                                                f5,
                                                                                4
                                                                              ) <
                                                                              0
                                                                            ) {
                                                                              this.costume =
                                                                                "Plant Plummet";
                                                                            } else {
                                                                              if (
                                                                                this.compare(
                                                                                  f5,
                                                                                  6
                                                                                ) <
                                                                                0
                                                                              ) {
                                                                                this.costume =
                                                                                  "Plant Plummet2";
                                                                              } else {
                                                                                if (
                                                                                  this.compare(
                                                                                    f5,
                                                                                    9
                                                                                  ) <
                                                                                  0
                                                                                ) {
                                                                                  this.costume =
                                                                                    "Plant Plummet3";
                                                                                } else {
                                                                                  if (
                                                                                    this.compare(
                                                                                      f5,
                                                                                      10
                                                                                    ) <
                                                                                    0
                                                                                  ) {
                                                                                    this.costume =
                                                                                      "Plant Plummet4";
                                                                                  } else {
                                                                                    if (
                                                                                      this.compare(
                                                                                        f5,
                                                                                        12
                                                                                      ) <
                                                                                      0
                                                                                    ) {
                                                                                      this.costume =
                                                                                        "Plant Plummet5";
                                                                                    } else {
                                                                                      if (
                                                                                        this.compare(
                                                                                          f5,
                                                                                          13
                                                                                        ) <
                                                                                        0
                                                                                      ) {
                                                                                        this.costume =
                                                                                          "Plant Plummet6";
                                                                                      } else {
                                                                                        if (
                                                                                          this.compare(
                                                                                            f5,
                                                                                            16
                                                                                          ) <
                                                                                          0
                                                                                        ) {
                                                                                          this.costume =
                                                                                            "Plant Plummet7";
                                                                                        } else {
                                                                                          if (
                                                                                            this.compare(
                                                                                              f5,
                                                                                              18
                                                                                            ) <
                                                                                            0
                                                                                          ) {
                                                                                            this.costume =
                                                                                              "Plant Plummet8";
                                                                                          } else {
                                                                                            this.costume =
                                                                                              "Plant Plummet9";
                                                                                            this.stage.vars.playerState.splice(
                                                                                              this
                                                                                                .vars
                                                                                                .p39 -
                                                                                                1,
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
                                                                          }
                                                                        } else {
                                                                          if (
                                                                            this.compare(
                                                                              s6,
                                                                              23
                                                                            ) ===
                                                                            0
                                                                          ) {
                                                                            this.stage.vars.hitboxXKnockback.splice(
                                                                              this
                                                                                .vars
                                                                                .p39 -
                                                                                1,
                                                                              1,
                                                                              -2
                                                                            );
                                                                            this.stage.vars.hitboxYKnockback.splice(
                                                                              this
                                                                                .vars
                                                                                .p39 -
                                                                                1,
                                                                              1,
                                                                              2
                                                                            );
                                                                            this.stage.vars.hitboxDamage.splice(
                                                                              this
                                                                                .vars
                                                                                .p39 -
                                                                                1,
                                                                              1,
                                                                              0
                                                                            );
                                                                            if (
                                                                              this.compare(
                                                                                f5,
                                                                                2
                                                                              ) <
                                                                              0
                                                                            ) {
                                                                              this.costume =
                                                                                "Mega Boomie";
                                                                            } else {
                                                                              if (
                                                                                this.compare(
                                                                                  f5,
                                                                                  4
                                                                                ) <
                                                                                0
                                                                              ) {
                                                                                this.costume =
                                                                                  "Mega Boomie2";
                                                                              } else {
                                                                                if (
                                                                                  this.compare(
                                                                                    f5,
                                                                                    6
                                                                                  ) <
                                                                                  0
                                                                                ) {
                                                                                  this.costume =
                                                                                    "Mega Boomie3";
                                                                                } else {
                                                                                  if (
                                                                                    this.compare(
                                                                                      f5,
                                                                                      8
                                                                                    ) <
                                                                                    0
                                                                                  ) {
                                                                                    this.costume =
                                                                                      "Mega Boomie4";
                                                                                  } else {
                                                                                    if (
                                                                                      this.compare(
                                                                                        f5,
                                                                                        16
                                                                                      ) <
                                                                                      0
                                                                                    ) {
                                                                                      this.costume =
                                                                                        "" +
                                                                                        "Mega Boomie" +
                                                                                        (5 +
                                                                                          (f5 %
                                                                                            3));
                                                                                      this.stage.vars.playerFrame.splice(
                                                                                        this
                                                                                          .vars
                                                                                          .p39 -
                                                                                          1,
                                                                                        1,
                                                                                        f5 -
                                                                                          0.5
                                                                                      );
                                                                                    } else {
                                                                                      if (
                                                                                        this.compare(
                                                                                          f5,
                                                                                          17
                                                                                        ) <
                                                                                        0
                                                                                      ) {
                                                                                        this.costume =
                                                                                          "Mega Boomie8";
                                                                                      } else {
                                                                                        if (
                                                                                          this.compare(
                                                                                            f5,
                                                                                            19
                                                                                          ) <
                                                                                          0
                                                                                        ) {
                                                                                          this.costume =
                                                                                            "Mega Boomie9";
                                                                                        } else {
                                                                                          if (
                                                                                            this.compare(
                                                                                              f5,
                                                                                              34
                                                                                            ) <
                                                                                            0
                                                                                          ) {
                                                                                            this.costume =
                                                                                              "Mega Boomie10";
                                                                                          } else {
                                                                                            this.costume =
                                                                                              "Mega Boomie11";
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
                                                                                s6,
                                                                                -1
                                                                              ) ===
                                                                              0
                                                                            ) {
                                                                              this.stage.vars.playerFrame.splice(
                                                                                this
                                                                                  .vars
                                                                                  .p39 -
                                                                                  1,
                                                                                1,
                                                                                f5 +
                                                                                  1
                                                                              );
                                                                              this.visible = true;
                                                                              if (
                                                                                this.compare(
                                                                                  f5,
                                                                                  15
                                                                                ) <
                                                                                0
                                                                              ) {
                                                                                this.visible = false;
                                                                              } else {
                                                                                if (
                                                                                  this.compare(
                                                                                    f5,
                                                                                    19
                                                                                  ) <
                                                                                  0
                                                                                ) {
                                                                                  this.costume =
                                                                                    "midair2";
                                                                                  this.y +=
                                                                                    50 -
                                                                                    (f5 -
                                                                                      15) *
                                                                                      12;
                                                                                  this.effects.brightness =
                                                                                    50 -
                                                                                    (f5 -
                                                                                      15) *
                                                                                      12;
                                                                                } else {
                                                                                  if (
                                                                                    this.compare(
                                                                                      f5,
                                                                                      21
                                                                                    ) <
                                                                                    0
                                                                                  ) {
                                                                                    this.effects.brightness = 0;
                                                                                    this.costume =
                                                                                      "Intro_1";
                                                                                  } else {
                                                                                    if (
                                                                                      this.compare(
                                                                                        f5,
                                                                                        23
                                                                                      ) <
                                                                                      0
                                                                                    ) {
                                                                                      this.costume =
                                                                                        "Intro_2";
                                                                                    } else {
                                                                                      if (
                                                                                        this.compare(
                                                                                          f5,
                                                                                          29
                                                                                        ) <
                                                                                        0
                                                                                      ) {
                                                                                        this.costume =
                                                                                          "Intro_3";
                                                                                      } else {
                                                                                        if (
                                                                                          this.compare(
                                                                                            f5,
                                                                                            31
                                                                                          ) <
                                                                                          0
                                                                                        ) {
                                                                                          this.costume =
                                                                                            "Intro_4";
                                                                                        } else {
                                                                                          if (
                                                                                            this.compare(
                                                                                              f5,
                                                                                              51
                                                                                            ) <
                                                                                            0
                                                                                          ) {
                                                                                            this.costume =
                                                                                              "" +
                                                                                              "Intro_" +
                                                                                              (5 +
                                                                                                ((f5 /
                                                                                                  2) %
                                                                                                  6));
                                                                                          } else {
                                                                                            if (
                                                                                              this.compare(
                                                                                                f5,
                                                                                                53
                                                                                              ) <
                                                                                              0
                                                                                            ) {
                                                                                              this.costume =
                                                                                                "Hatslam";
                                                                                            } else {
                                                                                              this.stage.vars.playerState.splice(
                                                                                                this
                                                                                                  .vars
                                                                                                  .p39 -
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
