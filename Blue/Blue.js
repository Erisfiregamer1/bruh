import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "/index.esm.js";

export default class Blue extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("idle", "6469bc7a20944602bd1407b0317abbb7.svg", {
        x: 35.28918611250819,
        y: 59.60488738025806
      }),
      new Costume("idle2", "41852e48c9cafecd0b6750a59c836455.svg", {
        x: 35.289181483344265,
        y: 59.03610322621148
      }),
      new Costume("idle3", "5f821b45600fcf516d1e662ff33f571e.svg", {
        x: 35.28918611250819,
        y: 57.89854753786025
      }),
      new Costume("idle4", "17d28f7243d98851908a184b56473067.svg", {
        x: 35.289175741672096,
        y: 58.467319893904985
      }),
      new Costume("WalkFront", "dd2608646449dc88f8ce84b00a52b76d.svg", {
        x: 32.02183510713388,
        y: 57.76457741501331
      }),
      new Costume("WalkFront2", "9ea428d9646e34cbb36da59adcf57616.svg", {
        x: 32.021840149491936,
        y: 59.45645042939702
      }),
      new Costume("WalkFront3", "0b00d63f48e563bcce2c995cee2b7b68.svg", {
        x: 32.021832867971796,
        y: 61.447179335229634
      }),
      new Costume("WalkFront4", "867552872b500b658bfb1d99325760b8.svg", {
        x: 32.02183425062634,
        y: 62.035266858972975
      }),
      new Costume("WalkFront5", "b00edff12038c2f3710f91341453ac8a.svg", {
        x: 32.02183854218859,
        y: 58.62257014514786
      }),
      new Costume("WalkFront6", "6d1da6fc67ea8f8efc7932f831a0045f.svg", {
        x: 32.02183141687544,
        y: 58.62256905805914
      }),
      new Costume("crouch2", "e68af5dc64c993195480b012e8f2543c.svg", {
        x: 31.5711736741074,
        y: 55.070699841594106
      }),
      new Costume("crouch", "1b89f9503fb674b0789daf8acabcaa1c.svg", {
        x: 32.59653634777973,
        y: 34.45985834822608
      }),
      new Costume("midair", "c3dd243f586e0cefa6ee42a515848b5d.svg", {
        x: 35.289175741672096,
        y: 59.60488325350536
      }),
      new Costume("midair2", "ee3008d3d0f28063efbd42711447573b.svg", {
        x: 36.768196319322044,
        y: 57.84058557126724
      }),
      new Costume("land", "0fa220ebbaffc7776573eeb244ca8650.svg", {
        x: 29.885739203243133,
        y: 53.9170513187601
      }),
      new Costume("punch1", "0a16cb02f34a651aa0ed0338769e3225.svg", {
        x: 35.28918037083605,
        y: 59.604884126752665
      }),
      new Costume("punch2", "4cff002af8ce7dcbf789b0a5f063a45e.svg", {
        x: 41.143369602109715,
        y: 57.71609368925898
      }),
      new Costume("punch3", "0cee525b0c98ace2a0f26ab8e2ff1a83.svg", {
        x: 42.56532913964165,
        y: 57.716105550291985
      }),
      new Costume("punch4", "a57dc1c379b2906efd3d502ec6d31fa0.svg", {
        x: 41.71215464264495,
        y: 57.71610031373565
      }),
      new Costume("punch5", "fa2c036314c749b5f3e498585acee88f.svg", {
        x: 35.28917074167211,
        y: 59.60488325350536
      }),
      new Costume("punch6", "fef4e7dbcfa6e9919733734f342c1cc6.svg", {
        x: 35.28917537083606,
        y: 59.604884126752665
      }),
      new Costume("auto", "143e4224530dbaa180deee615146d096.svg", {
        x: 41.71216420648875,
        y: 57.71610562747131
      }),
      new Costume("auto2", "a3cf388296f3b9b9313ca5e202b6ed28.svg", {
        x: 29.09253975151634,
        y: 30.02913827473205
      }),
      new Costume("auto3", "bcdffee8be535033ef621b3a0862106b.svg", {
        x: 33.19659407963485,
        y: 39.19676829181137
      }),
      new Costume("auto4", "6735555e30714a30316d81c32ac2c824.svg", {
        x: 24.7929444800655,
        y: 46.957795795289
      }),
      new Costume("auto5", "f57ea0cb8adddd609a25c216784d3cec.svg", {
        x: 22.21680055231616,
        y: 68.9667373250948
      }),
      new Costume("high kick1", "88cbd163adde33272b85523b0910e945.svg", {
        x: 45.796370895065735,
        y: 58.4971445522159
      }),
      new Costume("high kick2", "4c9c44323489ea9bf723b123f76065f8.svg", {
        x: 50.177426993303726,
        y: 58.497138666983616
      }),
      new Costume("high kick4", "a124e6c2cae892b3e3541bf153c74c4f.svg", {
        x: 51.31499435892002,
        y: 58.497134466793455
      }),
      new Costume("high kick3", "589905713f2ab11556c20b789e3fc033.svg", {
        x: 48.64028638680588,
        y: 58.49715410688481
      }),
      new Costume("high kick5", "578dd34d20ccbcdabf9938e76e56efec.svg", {
        x: 41.53049036821989,
        y: 58.4971586603272
      }),
      new Costume("high kick6", "52ebba0f4bbf1e5d709a64ad643d57cc.svg", {
        x: 37.600673092493,
        y: 59.1750300371811
      }),
      new Costume("hurt head", "5c6c724ae54d695e359d6243e6ea0b44.svg", {
        x: 57.04962687176723,
        y: 58.15775323521868
      }),
      new Costume("hurt head2", "9b0dc9febb752304f36caa62b6801c0b.svg", {
        x: 45.262029307698015,
        y: 62.38415668106086
      }),
      new Costume("hurt torso", "6e84c3d863fad121e3feb02ab701067a.svg", {
        x: 27.29007850277887,
        y: 36.12065875663296
      }),
      new Costume("hurt torso2", "79b5d5a7f8481872d7b79b4cf4874856.svg", {
        x: 28.789192820721638,
        y: 41.90193889403997
      }),
      new Costume("block torso", "35edeee5fc672e1dd101e88d12fb3f46.svg", {
        x: 19.46703544357638,
        y: 42.35294954172292
      }),
      new Costume("block torso2", "2383b34353590b9f7bacd353e1412f89.svg", {
        x: 19.160934999999995,
        y: 56.08630557755096
      }),
      new Costume("block head", "096e613fa5fc103fe580848b61f9df01.svg", {
        x: 39.21058422000209,
        y: 44.50016062798707
      }),
      new Costume("block crouch", "a3dd996e83e7656971cbf624cf61665c.svg", {
        x: 24.472075568181822,
        y: 21.108347373404428
      }),
      new Costume("block head2", "271766114d4fc7d127f3d995e1d57991.svg", {
        x: 35.405010037591126,
        y: 54.422171264373034
      }),
      new Costume("air punch", "86693ffa50897150a54722893c53c215.svg", {
        x: 35.630624175617925,
        y: 57.84057898469632
      }),
      new Costume("air punch2", "17a7466f8367f495447519d0e460fb9a.svg", {
        x: 27.224827162494392,
        y: 54.962441171633515
      }),
      new Costume("air punch3", "d92b8cd79544cdb50ae0090f7eb658ab.svg", {
        x: 27.165536999494407,
        y: 54.74210736026332
      }),
      new Costume("air punch4", "57035a424e267875a7c4b0d98862e9ba.svg", {
        x: 36.76818575164023,
        y: 57.84058199234816
      }),
      new Costume("low kick", "e9299bc506fbfa86217589dd85aa7954.svg", {
        x: 32.59653514422743,
        y: 34.459860062791336
      }),
      new Costume("low kick2", "fcc54cf42df9941f6aa402b7e32fe5bc.svg", {
        x: 32.59652514422743,
        y: 35.712849037815005
      }),
      new Costume("low kick3", "f6dadbc7d9abeb0b912d89a526c57b12.svg", {
        x: 19.042704999999984,
        y: 25.59346843685458
      }),
      new Costume("low kick4", "940159510b3a766865d8bdc8ea80f681.svg", {
        x: 19.042704999999984,
        y: 13.515345227884268
      }),
      new Costume("low kick5", "4589143fda2a24e4f673a0472a9e41af.svg", {
        x: 25.158285537184042,
        y: 11.240217104687218
      }),
      new Costume("low kick6", "7dc3c22246980700771c961869387a4f.svg", {
        x: 16.721646640399626,
        y: 13.515350227884255
      }),
      new Costume("low kick7", "812ade6f6aa50f70bb6b106ea5e41531.svg", {
        x: 16.721644999999995,
        y: 13.48382674411954
      }),
      new Costume("low kick8", "bc2e3883abdfc0b37b031d977c8dbfb2.svg", {
        x: 19.042705000000012,
        y: 40.622954655313066
      }),
      new Costume("low kick9", "67958a7bd46740fc75069b6971d03c42.svg", {
        x: 19.042705000000012,
        y: 41.21879017773662
      }),
      new Costume("low punch", "cc4211ba8ee4ea6af489991a0a3da762.svg", {
        x: 32.59652528845484,
        y: 34.45986012558268
      }),
      new Costume("low punch2", "d670ff194fc8299027f05774f16fa100.svg", {
        x: 36.862390327131635,
        y: 34.459860313956824
      }),
      new Costume("low punch3", "5330dcdc67d180d98e17237222f3c29f.svg", {
        x: 35.72482372685636,
        y: 34.45986012558268
      }),
      new Costume("low punch4", "434a24d118709342577aa43b26e30654.svg", {
        x: 32.59652514422743,
        y: 34.459860062791336
      }),
      new Costume("hurt air", "4c4b3a6602d474f73e77e69dbc94b166.svg", {
        x: 50.468876941383485,
        y: 60.73423240807443
      }),
      new Costume("hurt air2", "b708bdde3061a2b98574b54b86930b66.svg", {
        x: 44.790005417131454,
        y: 60.93720298770573
      }),
      new Costume("air kick", "cf96b15bd31a47afe62957a120f9b499.svg", {
        x: 35.289170370836075,
        y: 59.604884126752665
      }),
      new Costume("air kick2", "862d18772fc8a1fe7cb8e2f6e9a07d5b.svg", {
        x: 37.32186917184623,
        y: 59.604884126752665
      }),
      new Costume("air kick3", "1502bee01d94a9ec0e62ab66d65b1f34.svg", {
        x: 37.32186999999999,
        y: 59.604884126752665
      }),
      new Costume("air kick4", "af9f66577b07172fca2ba924ef56851a.svg", {
        x: 35.28916537083603,
        y: 59.604884126752665
      }),
      new Costume("air kick5", "7754888a953bbf195f232178c2199438.svg", {
        x: 39.270653707267,
        y: 57.32975013030834
      }),
      new Costume("air kick6", "13747000f82a08bfa1e5d612a8a4c19d.svg", {
        x: 42.11456537083603,
        y: 55.33900912675267
      }),
      new Costume("air kick7", "d4cbb3ceb344c71a7adfef1e50c7f7a7.svg", {
        x: 40.408210528438275,
        y: 56.19218404795157
      }),
      new Costume("lowpunch", "7b1870a6f32117c9d7f722b5a29e50d7.svg", {
        x: 28.101754999999997,
        y: 56.28773266326165
      }),
      new Costume("lowpunch4", "cedd965a7871a321914c76497ddc4743.svg", {
        x: 24.21207499999997,
        y: 51.821852873056
      }),
      new Costume("lowpunch5", "a76ed6d8f13c5a3268f78b2916bce1a6.svg", {
        x: 39.70139102272725,
        y: 49.28817350598277
      }),
      new Costume("lowpunch6", "8d5c36b7b0b56450f84f6cdfa91ac582.svg", {
        x: 46.00672593683126,
        y: 56.81830644208539
      }),
      new Costume("lowpunch2", "2ad296421a1ff9be7bb7e47c380ad9fc.svg", {
        x: 44.972216897727236,
        y: 56.81830964021388
      }),
      new Costume("lowpunch7", "4c635a2f7c096b9479879f0ff1edb4bd.svg", {
        x: 35.66191207954549,
        y: 61.64586769067738
      }),
      new Costume("lowpunch8", "5fae0e1ba8b3a5f555bde0a7d5e58c2a.svg", {
        x: 35.28917111250817,
        y: 59.60488238025806
      }),
      new Costume("parry", "f2f7a594b908d403eed5c0e4d58ca0f3.svg", {
        x: 27.539132642201736,
        y: 45.726213021776005
      }),
      new Costume("Dash", "ccff74133a5ff9a7de79be53e11f54ee.svg", {
        x: 53.70047367483818,
        y: 45.74101172611279
      }),
      new Costume("hadouken", "483702cb7309fed02beebdd4e8dcada0.svg", {
        x: 35.28918037083605,
        y: 59.604884126752665
      }),
      new Costume("charge", "d194d4412eb19f6a5329a81f6439a2f5.svg", {
        x: 35.4216642820449,
        y: 55.86561675382346
      }),
      new Costume("wallbounce", "94a0ca6e8e11dfb92eb33af316924f93.svg", {
        x: 46.95053251046403,
        y: 48.99058339988457
      }),
      new Costume("Hydro Pump", "bdeb7828c5bbe9a9fbb1ee0dd06809bf.svg", {
        x: 27.539134999999987,
        y: 45.726218334804685
      }),
      new Costume("Hydro Pump2", "436805ba3efe7f02ba02882758e3bcbd.svg", {
        x: 28.188193227912848,
        y: 45.72621166960937
      }),
      new Costume("Hydro Pump3", "7435f9841926dedc05d25fc3e6165044.svg", {
        x: 35.33604174071067,
        y: 63.30133612675377
      }),
      new Costume("Hydro Pump4", "4dd18b0edab2dba8e1f6965849560db9.svg", {
        x: 33.873106344817984,
        y: 69.67877155736078
      }),
      new Costume("Hydro Pump5", "000241903286770d4c4a972c9ae62d54.svg", {
        x: 35.32961060640031,
        y: 67.39924010664429
      }),
      new Costume("Hydro Pump6", "a0827094328d74a9140699c82011cc71.svg", {
        x: 44.392694215849104,
        y: 67.5133553979074
      }),
      new Costume("Hydro Pump7", "6958878dfad2b658c6e7f4f515b83ed7.svg", {
        x: 43.186666010622616,
        y: 66.52796799281155
      }),
      new Costume("Hydro Pump8", "00730002f4eb32c637cfa841d65bff9a.svg", {
        x: 42.76828169555685,
        y: 67.52750649474658
      }),
      new Costume("Hydro Pump9", "ff6a256d74a3477687b9b1d5e8ce264c.svg", {
        x: 27.485030060507484,
        y: 67.52750101399582
      }),
      new Costume("Grab1", "6965375ed3a3f0eadc94492f78eb8350.svg", {
        x: 35.28917111250817,
        y: 59.60488238025806
      }),
      new Costume("Grab2", "93569c891ba47417d0a69f72358e4556.svg", {
        x: 37.09933446945536,
        y: 59.60488150701076
      }),
      new Costume("Grab3", "7871c2f3433126efea4b2a012f441f04.svg", {
        x: 26.962457131958132,
        y: 60.32893882820777
      }),
      new Costume("Grab4", "133e8300233817953d06395e094174d7.svg", {
        x: 26.6004301638998,
        y: 60.3289397014551
      }),
      new Costume("Grab5", "29aebab0d8a706119797132a43974534.svg", {
        x: 35.28917648334425,
        y: 59.60488150701076
      }),
      new Costume("Throw", "21c88bfddf7f13e389c87b715838eaf6.svg", {
        x: 26.600425534735848,
        y: 60.32893882820777
      }),
      new Costume("Throw2", "479b4ae391b0aa9f49079f7382abe5f7.svg", {
        x: 25.787975491432377,
        y: 57.9043828034245
      }),
      new Costume("Throw3", "50e3e60661fccc47e3875b54ff5a80bd.svg", {
        x: 22.21969937211591,
        y: 59.07251218367931
      }),
      new Costume("Throw4", "0f2fbbbd4c07b47cc68067ebe9aaebc7.svg", {
        x: 49.70625084080547,
        y: 54.60918632946945
      }),
      new Costume("Throw5", "d74b728a8d083beb63b6105e2476d24e.svg", {
        x: 78.93946835462984,
        y: 52.19964873184679
      }),
      new Costume("Throw6", "8cb9572777182521b06a84922707361e.svg", {
        x: 79.77928329044255,
        y: 35.18276607045243
      }),
      new Costume("Throw7", "ed1d557f114473f48b925ed940d0f4ea.svg", {
        x: 73.62474943890439,
        y: 47.85387460086625
      }),
      new Costume("Die", "2d43ce76758a5e4e87e98c0871abb3e3.svg", {
        x: 29.843916935427245,
        y: 61.77551425121874
      }),
      new Costume("Die2", "eadf6f43037bb14f0f41dea09b5b942a.svg", {
        x: 23.294388903312722,
        y: 55.903867799886356
      }),
      new Costume("Die3", "c7969f0d95fd36131f34200b39c7c0c5.svg", {
        x: 43.85927567775727,
        y: 15.899507070818288
      }),
      new Costume("Die4", "fa4a590d43b93284e699e5f66fc1a873.svg", {
        x: 42.67430155523908,
        y: 8.969275921739012
      }),
      new Costume("Splash Kick", "41f98bce386f34b8e7b7f9b96aba43cf.svg", {
        x: 27.539125000000013,
        y: 45.7262133348047
      }),
      new Costume("Splash Kick2", "a5227ba8838c9f0db4501db57024f556.svg", {
        x: 35.72891789891409,
        y: 58.01370459628856
      }),
      new Costume("Splash Kick3", "65038a99627d568bb5b71a5b659c1709.svg", {
        x: 54.539057481447855,
        y: 58.01370945410608
      }),
      new Costume("Splash Kick4", "95aced8fa35376dab87c248446694983.svg", {
        x: 54.94992263786199,
        y: 57.22571034131323
      }),
      new Costume("Splash Kick5", "3cc7d942a5bae49327c95488beede61b.svg", {
        x: 54.00053163830634,
        y: 58.203949742560454
      }),
      new Costume("Splash Kick6", "5c89badd59b4d6928b27fc597bf76b7c.svg", {
        x: 49.8964980787747,
        y: 60.93997287166437
      }),
      new Costume("Meteor Stomp", "b79c88af9265b68b96107c0bab722d3d.svg", {
        x: 49.89649583050473,
        y: 60.93997118839424
      }),
      new Costume("Meteor Stomp2", "ec73c265f2bd377b9f7d17056528ca50.svg", {
        x: 48.830161472058506,
        y: 55.60822807040205
      }),
      new Costume("Meteor Stomp3", "23985694cf2c93549addfeae3eb44a02.svg", {
        x: 51.43740093397477,
        y: 53.0527717644611
      }),
      new Costume("Meteor Stomp4", "ec83651435a62735baef2ffe64c720c5.svg", {
        x: 55.65012782277245,
        y: 59.450855040599166
      }),
      new Costume("Meteor Stomp5", "6955633323a234c1f6db95d43fd8d683.svg", {
        x: 53.78077926861047,
        y: 61.491452586582625
      }),
      new Costume("Meteor Stomp6", "0fe0d55194f77ccf98a4339923662f80.svg", {
        x: 48.53079624902705,
        y: 59.0440373578368
      }),
      new Costume("TsunamI Swirl", "55b5e9212af94ddb82389594730cc100.svg", {
        x: 33.04294307364907,
        y: 65.68546406167806
      }),
      new Costume("TsunamI Swirl2", "cdb668f5a8cf98164f97c3af23e533cd.svg", {
        x: 20.797905513637204,
        y: 61.91610660962711
      }),
      new Costume("TsunamI Swirl3", "865421acc4fea5b80140bd1adbe98da3.svg", {
        x: 34.591223240909926,
        y: 58.68858275880859
      }),
      new Costume("TsunamI Swirl4", "36c10259f012f9c6e06c2a4b4d08879f.svg", {
        x: 19.865823840218695,
        y: 61.9161039197904
      }),
      new Costume("TsunamI Swirl5", "6f234fdfcc33e101f03f5d79de9d4615.svg", {
        x: 35.02372324090993,
        y: 58.68858972216262
      }),
      new Costume("TsunamI Swirl6", "10aaa84ee39ce0fec3aa83fc2052fe65.svg", {
        x: 20.797906172037784,
        y: 61.91609986631735
      }),
      new Costume("Step on dem toes", "04dc0dc3a995e0760bc8a9ea7d4369eb.svg", {
        x: 35.289175741672096,
        y: 59.60488325350536
      }),
      new Costume("Step on dem toes2", "e02f354832e1f4ee28bdfc5450c2053e.svg", {
        x: 32.861253858927,
        y: 53.8038009578065
      }),
      new Costume("Step on dem toes3", "1e77f1674eb793c3b5bf95c0f80ccc9c.svg", {
        x: 30.373113449223382,
        y: 50.96021191625914
      }),
      new Costume("Step on dem toes4", "6466473a36717847050f15172154ac6b.svg", {
        x: 27.252897750138004,
        y: 45.060866286117516
      }),
      new Costume("Step on dem toes5", "5eacbddffd022a0ba8516462018d9181.svg", {
        x: 27.21720769519058,
        y: 45.95081398126777
      }),
      new Costume("Step on dem toes6", "d856ec6d6cb59e619988cfdb5b527935.svg", {
        x: 30.973521551678772,
        y: 53.13817192708848
      }),
      new Costume("Launch_1", "9dea2430ceac2bdcbbe07dd33b1e5e78.svg", {
        x: 52.278640072964805,
        y: 54.14856489603599
      }),
      new Costume("Launch_2", "3c36a6fbb1945bb65169ea9240e30aa9.svg", {
        x: 54.779301768134815,
        y: 49.35429892002017
      }),
      new Costume("Launch_3", "6645a6d0282891b159400008d936af00.svg", {
        x: 67.82368223913787,
        y: 0.46328852912370166
      }),
      new Costume("Launch_4", "0a3c73ca973aee3cd5c21d3aaeceada7.svg", {
        x: 36.11769508047357,
        y: 47.351673594170734
      }),
      new Costume("Launch_5", "0bc053bdb4a2dabaeaa8f26f69a3b209.svg", {
        x: 17.374591105837823,
        y: 52.07747994300095
      }),
      new Costume("Run_1", "139e85e24782498113785671fa1b72c6.svg", {
        x: 38.434958274153644,
        y: 56.01042947251091
      }),
      new Costume("Run_2", "c4697499864d41795d355fa906624034.svg", {
        x: 42.861705,
        y: 55.051923253505336
      }),
      new Costume("Run_3", "9381129f7f1a852ba3fb7c1a111a75c7.svg", {
        x: 36.94383172613831,
        y: 52.41599412675265
      }),
      new Costume("Run_4", "3beaf843597b8e9c88da4243049fb4eb.svg", {
        x: 28.98436190963608,
        y: 50.49895198717127
      }),
      new Costume("Run_5", "64e3cdb0d8752048e56549f5c3bdd619.svg", {
        x: 28.358225618302015,
        y: 50.498953253505334
      }),
      new Costume("Run_6", "5a108a9687c408d3d21eba39b29cf784.svg", {
        x: 29.223989999999986,
        y: 50.498953253505334
      }),
      new Costume("Backdash", "828b57080dce74a4676dff972837c6ec.svg", {
        x: 48.154704852072825,
        y: 57.31767977453279
      }),
      new Costume("Intro1", "7206caf1aaf7dafa7bc991d8746e8cb4.svg", {
        x: 62.54316,
        y: 44.41220442919126
      }),
      new Costume("Intro2", "ac2f246546440b181c83cd133dfd23ab.svg", {
        x: 63.54316000000003,
        y: 42.7455482211343
      }),
      new Costume("Intro3", "e0127c3f552e2bd24921520e1584a299.svg", {
        x: 62.44363999999999,
        y: 42.7455482211343
      }),
      new Costume("Geysertrap1", "5f995dc60ffbad717e7396ac677712da.svg", {
        x: 28.783745224502127,
        y: 53.28272766762143
      }),
      new Costume("Geysertrap2", "9e2fac8b88f1c2125fda05c6543f7533.svg", {
        x: 28.21174467820842,
        y: 54.14072848706195
      }),
      new Costume("Geysertrap3", "ef4f1d6f358ad411c4ba3a1f371607c9.svg", {
        x: 25.452935000000053,
        y: 45.8467199612503
      }),
      new Costume("Geysertrap4", "8dcf879209a9b6e3bf86a6d058465600.svg", {
        x: 25.452945000000028,
        y: 36.51689453706308
      }),
      new Costume("Geysertrap5", "8d1fa14669cfab63f2e99f28bb4f824b.svg", {
        x: 26.310945819440605,
        y: 21.822693120268042
      }),
      new Costume("Geysertrap6", "a69b2c23c5fc80dd2964285686952e17.svg", {
        x: 26.310945819440576,
        y: 25.25470029467749
      }),
      new Costume("Geysertrap7", "b127cca44f83684feb6cd684b0fd49cb.svg", {
        x: 26.310945819440576,
        y: 26.97070193355856
      }),
      new Costume("Geysertrap8", "bfae7863f6857e864254b334fb37d8b7.svg", {
        x: 25.452934999999997,
        y: 45.84671610335269
      }),
      new Costume("Geysertrap9", "72f802ad4196739fca5917810ac8e00b.svg", {
        x: 27.567172995871232,
        y: 55.88688057584366
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "game" }, this.whenIReceiveGame)
    ];

    this.vars.p23 = 3;
    this.vars.state8 = 0;
    this.vars.x17 = 15;
    this.vars.y17 = 0;
    this.vars.direction10 = -1;
    this.vars.frame11 = 93;
    this.vars.xSpeed8 = 0;
    this.vars.ySpeed8 = 0;
    this.vars.i8 = 0;
    this.vars.length8 = 13;
    this.vars.part8 = 0;
    this.vars.p24 = 3;
    this.vars.touching8 = 0;
    this.vars.h8 = 3;
    this.vars.hx8 = 15;
    this.vars.hy8 = 0;
    this.vars.hxSize8 = 0;
    this.vars.hySize8 = 0;
    this.vars.health8 = 100;
    this.vars.hDamage8 = 0;
    this.vars.p25 = 0;
    this.vars.state9 = 0;
    this.vars.x18 = 0;
    this.vars.y18 = 0;
    this.vars.direction11 = 0;
    this.vars.frame12 = 0;
    this.vars.xSpeed9 = 0;
    this.vars.ySpeed9 = 0;
    this.vars.i9 = 0;
    this.vars.length9 = 0;
    this.vars.part9 = 0;
    this.vars.p26 = 0;
    this.vars.touching9 = 0;
    this.vars.h9 = 0;
    this.vars.hx9 = 0;
    this.vars.hy9 = 0;
    this.vars.hxSize9 = 0;
    this.vars.hySize9 = 0;
    this.vars.health9 = 0;
    this.vars.hDamage9 = 0;
    this.vars.impact6 = 90;
    this.vars.p27 = 0;
    this.vars.state10 = 0;
    this.vars.x19 = 0;
    this.vars.y19 = 0;
    this.vars.direction12 = 0;
    this.vars.frame13 = 0;
    this.vars.xSpeed10 = 0;
    this.vars.ySpeed10 = 0;
    this.vars.i10 = 0;
    this.vars.length10 = 0;
    this.vars.part10 = 0;
    this.vars.p28 = 0;
    this.vars.touching10 = 0;
    this.vars.h10 = 0;
    this.vars.hx10 = 0;
    this.vars.hy10 = 0;
    this.vars.hxSize10 = 0;
    this.vars.hySize10 = 0;
    this.vars.health10 = 0;
    this.vars.hDamage10 = 0;
    this.vars.impact7 = 0;
    this.vars.commands4 = 0;
    this.vars.command4 = 0;
    this.vars.p31 = 0;
    this.vars.state12 = 0;
    this.vars.x21 = 0;
    this.vars.y21 = 0;
    this.vars.direction14 = 0;
    this.vars.frame15 = 0;
    this.vars.xSpeed12 = 0;
    this.vars.ySpeed12 = 0;
    this.vars.i12 = 0;
    this.vars.length12 = 0;
    this.vars.part12 = 0;
    this.vars.p32 = 0;
    this.vars.touching12 = 0;
    this.vars.h12 = 0;
    this.vars.hx12 = 0;
    this.vars.hy12 = 0;
    this.vars.hxSize12 = 0;
    this.vars.hySize12 = 0;
    this.vars.health12 = 0;
    this.vars.hDamage12 = 0;
    this.vars.impact9 = 0;
    this.vars.commands6 = 0;
    this.vars.command6 = 0;
    this.vars.skc = 0;
    this.vars.inputs8 = [false, false, false, false, false, false];
    this.vars.hurtboxY8 = [11.5, 3.5, -8.5];
    this.vars.hurtboxYSize8 = [7, 9, 15];
    this.vars.hurtboxXSize8 = [5, 10, 12];
    this.vars.inputs9 = [];
    this.vars.hurtboxY9 = [];
    this.vars.hurtboxYSize9 = [];
    this.vars.hurtboxXSize9 = [];
    this.vars.inputs10 = [];
    this.vars.hurtboxY10 = [];
    this.vars.hurtboxYSize10 = [];
    this.vars.hurtboxXSize10 = [];
    this.vars.inputNames4 = [];
    this.vars.inputs12 = [];
    this.vars.hurtboxY12 = [];
    this.vars.hurtboxYSize12 = [];
    this.vars.hurtboxXSize12 = [];
    this.vars.inputNames6 = [];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *clone() {
    this.visible = false;
    this.vars.p23 = 1;
    for (let i = 0; i < this.stage.vars.OfPlayers; i++) {
      if (
        this.compare(
          this.stage.vars.playerCharacter[this.vars.p23 - 1],
          "Blue"
        ) === 0
      ) {
        this.createClone();
      }
      this.vars.p23 += 1;
    }
  }

  *startAsClone() {
    this.visible = true;
    this.effects.color = this.stage.vars.playerColor[this.vars.p23 - 1];
    this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
    while (true) {
      if (this.compare(this.stage.vars.pauseMenu, 0) === 0) {
        this.goto(
          (this.stage.vars.playerX[this.vars.p23 - 1] +
            this.stage.vars.rumbleX -
            this.stage.vars.scrollX) *
            4,
          (this.stage.vars.playerY[this.vars.p23 - 1] +
            this.stage.vars.rumbleY) *
            4 -
            20
        );
        this.direction = this.stage.vars.playerDirection[this.vars.p23 - 1];
        yield* this.costumes2(
          this.stage.vars.playerState[this.vars.p23 - 1],
          this.stage.vars.playerFrame[this.vars.p23 - 1]
        );
        if (
          this.compare(this.stage.vars.playerState[this.vars.p23 - 1], 5) === 0
        ) {
          if (
            this.toBoolean(
              this.stage.vars.currentInputs[
                this.vars.p23 * 6 -
                  (3 +
                    (this.stage.vars.playerDirection[this.vars.p23 - 1] % 3)) -
                  1
              ]
            )
          ) {
            this.stage.vars.playerFrame.splice(this.vars.p23 - 1, 1, 0);
            this.stage.vars.playerState.splice(this.vars.p23 - 1, 1, 29);
          }
        }
        if (
          this.compare(this.stage.vars.playerState[this.vars.p23 - 1], 12) === 0
        ) {
          if (
            this.toBoolean(
              this.stage.vars.currentInputs[this.vars.p23 * 6 - 3 - 1]
            )
          ) {
            this.stage.vars.playerYSpeed.splice(this.vars.p23 - 1, 1, 1);
            this.stage.vars.playerFrame.splice(this.vars.p23 - 1, 1, 0);
            this.stage.vars.playerState.splice(this.vars.p23 - 1, 1, 30);
            this.stage.vars.playerCommands.splice(this.vars.p23 - 1, 1, "");
          }
        }
        if (this.compare(this.vars.h8, 1) === 0) {
          this.effects.fisheye =
            Math.cos(this.degToRad(this.stage.vars.gameframe * 10)) * 12;
          this.effects.whirl =
            Math.cos(this.degToRad(this.stage.vars.gameframe * 5)) * 15;
          this.effects.brightness = 10;
          this.stage.vars.hitboxDamage.splice(
            this.vars.p23 - 1,
            1,
            Math.round(this.stage.vars.hitboxDamage[this.vars.p23 - 1] * 1.5)
          );
          this.stage.vars.playerEx.splice(this.vars.p23 - 1, 1, 3);
          if (
            this.compare(this.stage.vars.playerState[this.vars.p23 - 1], 5) ===
            0
          ) {
            this.stage.vars.hitboxHitstun.splice(this.vars.p23 - 1, 1, 4);
            this.stage.vars.hitboxXKnockback.splice(this.vars.p23 - 1, 1, 30);
          }
        }
      }
      yield;
    }
  }

  *costumes2(s4, f3) {
    this.effects.brightness = 0;
    if (this.compare(s4, 0) === 0) {
      this.costume = (Math.floor(f3 / 4) % 4) + 1;
    } else {
      if (this.compare(s4, 1) === 0) {
        this.costume = (Math.floor(f3 / 2) % 6) + 5;
      } else {
        if (this.compare(s4, 1.1) === 0 || this.compare(s4, 1.2) === 0) {
          if (this.compare(Math.round((f3 / 2) % 8) + 1, 4) === 0) {
            this.costume = "Run_6";
          } else {
            this.costume = "" + "Run_" + (Math.round((f3 / 2) % 4) + 1);
          }
        } else {
          if (this.compare(s4, 1.3) === 0) {
            this.costume = "Backdash";
          } else {
            if (this.compare(s4, 2) === 0 || this.compare(s4, 2.1) === 0) {
              if (
                this.compare(
                  this.stage.vars.playerYSpeed[this.vars.p23 - 1],
                  -1
                ) > 0
              ) {
                this.costume = "midair";
              } else {
                this.costume = "midair2";
              }
            } else {
              if (this.compare(s4, 3) === 0) {
                this.costume = "crouch";
              } else {
                if (this.compare(s4, 4) === 0) {
                  if (this.compare(f3, 2) < 0) {
                    this.costume = "punch1";
                  } else {
                    if (this.compare(f3, 3) < 0) {
                      this.costume = "punch2";
                    } else {
                      if (this.compare(f3, 4) < 0) {
                        this.costume = "punch3";
                      } else {
                        if (this.compare(f3, 6) < 0) {
                          this.costume = "punch4";
                        } else {
                          if (this.compare(f3, 7) < 0) {
                            this.costume = "punch5";
                          } else {
                            this.costume = "punch6";
                          }
                        }
                      }
                    }
                  }
                } else {
                  if (this.compare(s4, 5) === 0) {
                    if (this.compare(f3, 3) < 0) {
                      this.costume = "high kick1";
                      if (
                        this.compare(this.sprites["Logic"].vars.impact19, 0) < 0
                      ) {
                        this.stage.vars.playerXSpeed.splice(
                          this.vars.p23 - 1,
                          1,
                          this.stage.vars.playerDirection[this.vars.p23 - 1] * 3
                        );
                      }
                    } else {
                      if (this.compare(f3, 4) < 0) {
                        this.costume = "high kick2";
                        if (
                          this.compare(this.sprites["Logic"].vars.impact19, 0) <
                          0
                        ) {
                          this.stage.vars.playerXSpeed.splice(
                            this.vars.p23 - 1,
                            1,
                            this.stage.vars.playerDirection[this.vars.p23 - 1] *
                              1
                          );
                        }
                        this.stage.vars.hitboxXKnockback.splice(
                          this.vars.p23 - 1,
                          1,
                          7
                        );
                        this.stage.vars.hitboxYKnockback.splice(
                          this.vars.p23 - 1,
                          1,
                          -5
                        );
                      } else {
                        if (this.compare(f3, 6) < 0) {
                          this.costume = "high kick4";
                        } else {
                          if (this.compare(f3, 7) < 0) {
                            this.costume = "high kick3";
                          } else {
                            if (this.compare(f3, 10) < 0) {
                              this.costume = "high kick5";
                            } else {
                              this.costume = "high kick6";
                              this.stage.vars.playerFrame.splice(
                                this.vars.p23 - 1,
                                1,
                                19
                              );
                            }
                          }
                        }
                      }
                    }
                  } else {
                    if (this.compare(s4, 6) === 0) {
                      this.costume = "land";
                    } else {
                      if (this.compare(s4, 7) === 0) {
                        if (this.compare(f3, 7) < 0) {
                          this.costume = "hurt head";
                        } else {
                          this.costume = "hurt head2";
                        }
                      } else {
                        if (this.compare(s4, 8) === 0) {
                          if (this.compare(f3, 5) < 0) {
                            this.costume = "hurt torso";
                          } else {
                            this.costume = "hurt torso2";
                          }
                        } else {
                          if (this.compare(s4, 9) === 0) {
                            if (this.compare(f3, 4) < 0) {
                              this.costume = "block head";
                            } else {
                              this.costume = "block head2";
                            }
                          } else {
                            if (this.compare(s4, 10) === 0) {
                              if (this.compare(f3, 3) < 0) {
                                this.costume = "block torso";
                              } else {
                                this.costume = "block torso2";
                              }
                            } else {
                              if (this.compare(s4, 11) === 0) {
                                if (this.compare(f3, 4) < 0) {
                                  this.costume = "air punch";
                                } else {
                                  if (this.compare(f3, 5) < 0) {
                                    this.costume = "air punch2";
                                    this.stage.vars.hitboxYKnockback.splice(
                                      this.vars.p23 - 1,
                                      1,
                                      2.5
                                    );
                                  } else {
                                    if (this.compare(f3, 8) < 0) {
                                      this.costume = "air punch3";
                                    } else {
                                      this.costume = "air punch4";
                                    }
                                  }
                                }
                              } else {
                                if (this.compare(s4, 12) === 0) {
                                  if (this.compare(f3, 2) < 0) {
                                    this.costume = "air kick";
                                  } else {
                                    if (this.compare(f3, 3) < 0) {
                                      this.costume = "air kick2";
                                    } else {
                                      if (this.compare(f3, 4) < 0) {
                                        this.costume = "air kick3";
                                      } else {
                                        if (this.compare(f3, 6) < 0) {
                                          this.costume = "air kick4";
                                        } else {
                                          if (this.compare(f3, 7) < 0) {
                                            this.costume = "air kick5";
                                          } else {
                                            if (this.compare(f3, 9) < 0) {
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
                                  if (this.compare(s4, 13) === 0) {
                                    this.stage.vars.hitboxXKnockback.splice(
                                      this.vars.p23 - 1,
                                      1,
                                      8
                                    );
                                    this.stage.vars.hitboxYKnockback.splice(
                                      this.vars.p23 - 1,
                                      1,
                                      0
                                    );
                                    if (this.compare(f3, 2) < 0) {
                                      this.costume = "lowpunch";
                                    } else {
                                      if (this.compare(f3, 4) < 0) {
                                        this.costume = "lowpunch4";
                                      } else {
                                        if (this.compare(f3, 5) < 0) {
                                          this.costume = "lowpunch5";
                                          if (
                                            this.compare(
                                              this.sprites["Logic"].vars
                                                .impact19,
                                              0
                                            ) < 0
                                          ) {
                                            this.stage.vars.playerX.splice(
                                              this.vars.p23 - 1,
                                              1,
                                              this.stage.vars.playerX[
                                                this.vars.p23 - 1
                                              ] +
                                                this.stage.vars.playerDirection[
                                                  this.vars.p23 - 1
                                                ] *
                                                  4
                                            );
                                          }
                                        } else {
                                          if (this.compare(f3, 7) < 0) {
                                            this.costume = "lowpunch6";
                                            if (
                                              this.compare(
                                                this.sprites["Logic"].vars
                                                  .impact19,
                                                0
                                              ) < 0
                                            ) {
                                              this.stage.vars.playerX.splice(
                                                this.vars.p23 - 1,
                                                1,
                                                this.stage.vars.playerX[
                                                  this.vars.p23 - 1
                                                ] +
                                                  this.stage.vars
                                                    .playerDirection[
                                                    this.vars.p23 - 1
                                                  ] *
                                                    4
                                              );
                                            }
                                          } else {
                                            if (this.compare(f3, 11) < 0) {
                                              this.costume = "lowpunch2";
                                              if (
                                                this.compare(
                                                  this.sprites["Logic"].vars
                                                    .impact19,
                                                  0
                                                ) < 0
                                              ) {
                                                this.stage.vars.playerX.splice(
                                                  this.vars.p23 - 1,
                                                  1,
                                                  this.stage.vars.playerX[
                                                    this.vars.p23 - 1
                                                  ] +
                                                    this.stage.vars
                                                      .playerDirection[
                                                      this.vars.p23 - 1
                                                    ] *
                                                      1
                                                );
                                              }
                                            } else {
                                              if (this.compare(f3, 14) < 0) {
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
                                    if (this.compare(s4, 14) === 0) {
                                      if (this.compare(f3, 2) < 0) {
                                        this.costume = "low kick";
                                      } else {
                                        if (this.compare(f3, 3) < 0) {
                                          this.costume = "low kick2";
                                        } else {
                                          if (this.compare(f3, 5) < 0) {
                                            this.costume = "low kick3";
                                            this.stage.vars.hitboxDamage.splice(
                                              this.vars.p23 - 1,
                                              1,
                                              3
                                            );
                                          } else {
                                            if (this.compare(f3, 7) < 0) {
                                              this.costume = "low kick4";
                                            } else {
                                              if (this.compare(f3, 9) < 0) {
                                                this.costume = "low kick5";
                                              } else {
                                                if (this.compare(f3, 11) < 0) {
                                                  this.costume = "low kick6";
                                                  this.stage.vars.hitboxDamage.splice(
                                                    this.vars.p23 - 1,
                                                    1,
                                                    5
                                                  );
                                                  this.stage.vars.hitboxXKnockback.splice(
                                                    this.vars.p23 - 1,
                                                    1,
                                                    3
                                                  );
                                                  this.stage.vars.hitboxYKnockback.splice(
                                                    this.vars.p23 - 1,
                                                    1,
                                                    2
                                                  );
                                                } else {
                                                  if (
                                                    this.compare(f3, 13) < 0
                                                  ) {
                                                    this.costume = "low kick7";
                                                  } else {
                                                    if (
                                                      this.compare(f3, 14) < 0
                                                    ) {
                                                      this.costume =
                                                        "low kick8";
                                                    } else {
                                                      if (
                                                        this.compare(f3, 15) < 0
                                                      ) {
                                                        this.costume =
                                                          "low kick9";
                                                      } else {
                                                        this.stage.vars.playerFrame.splice(
                                                          this.vars.p23 - 1,
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
                                    } else {
                                      if (this.compare(s4, 15) === 0) {
                                        if (this.compare(f3, 8) < 0) {
                                          this.costume = "hurt air";
                                        } else {
                                          this.costume = "hurt air2";
                                        }
                                      } else {
                                        if (this.compare(s4, 16) === 0) {
                                          this.costume = "hadouken";
                                        } else {
                                          if (this.compare(s4, 17) === 0) {
                                            this.costume = "parry";
                                            this.effects.brightness =
                                              (this.stage.vars.gameframe % 3) *
                                              50;
                                            if (
                                              this.compare(
                                                this.sprites["Logic"].vars
                                                  .impact19,
                                                6
                                              ) < 0 &&
                                              this.compare(
                                                this.sprites["Logic"].vars
                                                  .impact19,
                                                0
                                              ) > 0
                                            ) {
                                              this.stage.vars.playerX.splice(
                                                this.vars.p23 - 1,
                                                1,
                                                this.stage.vars.playerX[
                                                  this.vars.p23 - 1
                                                ] +
                                                  this.stage.vars
                                                    .playerDirection[
                                                    this.vars.p23 - 1
                                                  ] *
                                                    8
                                              );
                                              this.costume = "Dash";
                                            }
                                            if (
                                              this.compare(
                                                this.sprites["Logic"].vars
                                                  .impact19,
                                                0
                                              ) === 0
                                            ) {
                                              this.stage.vars.playerDirection.splice(
                                                this.vars.p23 - 1,
                                                1,
                                                this.stage.vars.playerDirection[
                                                  this.vars.p23 - 1
                                                ] * -1
                                              );
                                            }
                                          } else {
                                            if (this.compare(s4, 18) === 0) {
                                              if (this.compare(f3, 2) < 0) {
                                                this.costume = "low punch";
                                              } else {
                                                if (this.compare(f3, 3) < 0) {
                                                  this.costume = "low punch2";
                                                } else {
                                                  if (this.compare(f3, 5) < 0) {
                                                    this.costume = "low punch3";
                                                  } else {
                                                    this.costume = "low punch4";
                                                  }
                                                }
                                              }
                                            } else {
                                              if (this.compare(s4, 19) === 0) {
                                                if (this.compare(f3, 5) < 0) {
                                                  this.costume = "hurt torso";
                                                } else {
                                                  this.costume = "wallbounce";
                                                }
                                              } else {
                                                if (
                                                  this.compare(s4, 20) === 0
                                                ) {
                                                  if (this.compare(f3, 3) < 0) {
                                                    this.costume = "Hydro Pump";
                                                  } else {
                                                    if (
                                                      this.compare(f3, 5) < 0
                                                    ) {
                                                      this.costume =
                                                        "Hydro Pump2";
                                                    } else {
                                                      if (
                                                        this.compare(f3, 7) < 0
                                                      ) {
                                                        this.stage.vars.hitboxXKnockback.splice(
                                                          this.vars.p23 - 1,
                                                          1,
                                                          4
                                                        );
                                                        this.stage.vars.playerYSpeed.splice(
                                                          this.vars.p23 - 1,
                                                          1,
                                                          2.5
                                                        );
                                                        if (
                                                          this.compare(
                                                            this.sprites[
                                                              "Logic"
                                                            ].vars.impact19,
                                                            0
                                                          ) < 0
                                                        ) {
                                                          this.stage.vars.playerX.splice(
                                                            this.vars.p23 - 1,
                                                            1,
                                                            this.stage.vars
                                                              .playerX[
                                                              this.vars.p23 - 1
                                                            ] +
                                                              this.stage.vars
                                                                .playerDirection[
                                                                this.vars.p23 -
                                                                  1
                                                              ] *
                                                                4
                                                          );
                                                        }
                                                        this.costume =
                                                          "Hydro Pump3";
                                                      } else {
                                                        if (
                                                          this.compare(f3, 14) <
                                                          0
                                                        ) {
                                                          this.costume =
                                                            "" +
                                                            "Hydro Pump" +
                                                            (Math.round(
                                                              f3 / 2.5
                                                            ) +
                                                              2);
                                                          if (
                                                            this.compare(
                                                              this.sprites[
                                                                "Logic"
                                                              ].vars.impact19,
                                                              0
                                                            ) < 0
                                                          ) {
                                                            this.stage.vars.playerX.splice(
                                                              this.vars.p23 - 1,
                                                              1,
                                                              this.stage.vars
                                                                .playerX[
                                                                this.vars.p23 -
                                                                  1
                                                              ] +
                                                                this.stage.vars
                                                                  .playerDirection[
                                                                  this.vars
                                                                    .p23 - 1
                                                                ] *
                                                                  4
                                                            );
                                                          }
                                                        } else {
                                                          if (
                                                            this.compare(
                                                              f3,
                                                              15
                                                            ) < 0
                                                          ) {
                                                            this.costume =
                                                              "Hydro Pump8";
                                                            this.stage.vars.playerYSpeed.splice(
                                                              this.vars.p23 - 1,
                                                              1,
                                                              1.5
                                                            );
                                                            this.stage.vars.playerXSpeed.splice(
                                                              this.vars.p23 - 1,
                                                              1,
                                                              this.stage.vars
                                                                .playerDirection[
                                                                this.vars.p23 -
                                                                  1
                                                              ] * -2
                                                            );
                                                            if (
                                                              this.compare(
                                                                this.vars.skc,
                                                                1
                                                              ) === 0
                                                            ) {
                                                              this.stage.vars.hitboxHitstun.splice(
                                                                this.vars.p23 -
                                                                  1,
                                                                1,
                                                                6
                                                              );
                                                              this.stage.vars.playerFrame.splice(
                                                                this.vars.p23 -
                                                                  1,
                                                                1,
                                                                0
                                                              );
                                                              this.stage.vars.playerState.splice(
                                                                this.vars.p23 -
                                                                  1,
                                                                1,
                                                                30
                                                              );
                                                              this.stage.vars.playerYSpeed.splice(
                                                                this.vars.p23 -
                                                                  1,
                                                                1,
                                                                8
                                                              );
                                                              this.vars.skc = 0;
                                                            }
                                                          } else {
                                                            if (
                                                              this.compare(
                                                                f3,
                                                                16
                                                              ) < 0
                                                            ) {
                                                              this.costume =
                                                                "Hydro Pump8";
                                                              this.stage.vars.playerXSpeed.splice(
                                                                this.vars.p23 -
                                                                  1,
                                                                1,
                                                                this.stage.vars
                                                                  .playerDirection[
                                                                  this.vars
                                                                    .p23 - 1
                                                                ] * -1
                                                              );
                                                              if (
                                                                this.compare(
                                                                  this.sprites[
                                                                    "Logic"
                                                                  ].vars
                                                                    .impact19,
                                                                  0
                                                                ) < 0
                                                              ) {
                                                                this.vars.i8 =
                                                                  this.stage.vars.projectileType.indexOf(
                                                                    0
                                                                  ) + 1;
                                                                if (
                                                                  this.compare(
                                                                    this.vars
                                                                      .i8,
                                                                    0
                                                                  ) > 0
                                                                ) {
                                                                  this.stage.vars.projectileX.splice(
                                                                    this.vars
                                                                      .i8 - 1,
                                                                    1,
                                                                    this.stage
                                                                      .vars
                                                                      .playerX[
                                                                      this.vars
                                                                        .p23 - 1
                                                                    ] +
                                                                      this.stage
                                                                        .vars
                                                                        .playerDirection[
                                                                        this
                                                                          .vars
                                                                          .p23 -
                                                                          1
                                                                      ] *
                                                                        5
                                                                  );
                                                                  this.stage.vars.projectileY.splice(
                                                                    this.vars
                                                                      .i8 - 1,
                                                                    1,
                                                                    this.stage
                                                                      .vars
                                                                      .playerY[
                                                                      this.vars
                                                                        .p23 - 1
                                                                    ] - 10
                                                                  );
                                                                  this.stage.vars.projectileDirection.splice(
                                                                    this.vars
                                                                      .i8 - 1,
                                                                    1,
                                                                    this.stage
                                                                      .vars
                                                                      .playerDirection[
                                                                      this.vars
                                                                        .p23 - 1
                                                                    ] * 2
                                                                  );
                                                                  this.stage.vars.projectileType.splice(
                                                                    this.vars
                                                                      .i8 - 1,
                                                                    1,
                                                                    this.stage
                                                                      .vars
                                                                      .playerProjectile[
                                                                      this.vars
                                                                        .p23 - 1
                                                                    ]
                                                                  );
                                                                  this.stage.vars.projectileOwner.splice(
                                                                    this.vars
                                                                      .i8 - 1,
                                                                    1,
                                                                    this.vars
                                                                      .p23
                                                                  );
                                                                  this.stage.vars.projectileFrame.splice(
                                                                    this.vars
                                                                      .i8 - 1,
                                                                    1,
                                                                    37
                                                                  );
                                                                }
                                                                this.vars.i8 =
                                                                  this.stage.vars.projectileType.indexOf(
                                                                    0
                                                                  ) + 1;
                                                                if (
                                                                  this.compare(
                                                                    this.vars
                                                                      .i8,
                                                                    0
                                                                  ) > 0
                                                                ) {
                                                                  this.stage.vars.projectileX.splice(
                                                                    this.vars
                                                                      .i8 - 1,
                                                                    1,
                                                                    this.stage
                                                                      .vars
                                                                      .playerX[
                                                                      this.vars
                                                                        .p23 - 1
                                                                    ] +
                                                                      this.stage
                                                                        .vars
                                                                        .playerDirection[
                                                                        this
                                                                          .vars
                                                                          .p23 -
                                                                          1
                                                                      ] *
                                                                        5
                                                                  );
                                                                  this.stage.vars.projectileY.splice(
                                                                    this.vars
                                                                      .i8 - 1,
                                                                    1,
                                                                    this.stage
                                                                      .vars
                                                                      .playerY[
                                                                      this.vars
                                                                        .p23 - 1
                                                                    ] - 5
                                                                  );
                                                                  this.stage.vars.projectileDirection.splice(
                                                                    this.vars
                                                                      .i8 - 1,
                                                                    1,
                                                                    this.stage
                                                                      .vars
                                                                      .playerDirection[
                                                                      this.vars
                                                                        .p23 - 1
                                                                    ] * 2
                                                                  );
                                                                  this.stage.vars.projectileType.splice(
                                                                    this.vars
                                                                      .i8 - 1,
                                                                    1,
                                                                    this.stage
                                                                      .vars
                                                                      .playerProjectile[
                                                                      this.vars
                                                                        .p23 - 1
                                                                    ]
                                                                  );
                                                                  this.stage.vars.projectileOwner.splice(
                                                                    this.vars
                                                                      .i8 - 1,
                                                                    1,
                                                                    this.vars
                                                                      .p23
                                                                  );
                                                                  this.stage.vars.projectileFrame.splice(
                                                                    this.vars
                                                                      .i8 - 1,
                                                                    1,
                                                                    37
                                                                  );
                                                                }
                                                              }
                                                            } else {
                                                              if (
                                                                this.compare(
                                                                  f3,
                                                                  24
                                                                ) < 0
                                                              ) {
                                                                this.costume =
                                                                  "Hydro Pump9";
                                                                this.stage.vars.playerXSpeed.splice(
                                                                  this.vars
                                                                    .p23 - 1,
                                                                  1,
                                                                  this.stage
                                                                    .vars
                                                                    .playerDirection[
                                                                    this.vars
                                                                      .p23 - 1
                                                                  ] * -1
                                                                );
                                                              } else {
                                                                this.costume =
                                                                  "Hydro Pump9";
                                                                this.stage.vars.playerState.splice(
                                                                  this.vars
                                                                    .p23 - 1,
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
                                                } else {
                                                  if (
                                                    this.compare(s4, 21) === 0
                                                  ) {
                                                    this.stage.vars.hitboxDamage.splice(
                                                      this.vars.p23 - 1,
                                                      1,
                                                      2
                                                    );
                                                    this.stage.vars.hitboxHitstun.splice(
                                                      this.vars.p23 - 1,
                                                      1,
                                                      16
                                                    );
                                                    if (
                                                      this.compare(f3, 3) < 0
                                                    ) {
                                                      this.costume = "Grab1";
                                                    } else {
                                                      if (
                                                        this.compare(f3, 5) < 0
                                                      ) {
                                                        this.costume = "Grab2";
                                                      } else {
                                                        if (
                                                          this.compare(f3, 6) <
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
                                                                    .p23 - 1
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
                                                              this.vars.p23 - 1,
                                                              1,
                                                              10
                                                            );
                                                            this.stage.vars.playerState.splice(
                                                              this.vars.p23 - 1,
                                                              1,
                                                              22
                                                            );
                                                          }
                                                          if (
                                                            this.compare(
                                                              f3,
                                                              10
                                                            ) < 0
                                                          ) {
                                                            this.costume =
                                                              "Grab4";
                                                          } else {
                                                            this.costume =
                                                              "Grab5";
                                                            this.stage.vars.playerFrame.splice(
                                                              this.vars.p23 - 1,
                                                              1,
                                                              52
                                                            );
                                                          }
                                                        }
                                                      }
                                                    }
                                                  } else {
                                                    if (
                                                      this.compare(s4, 22) === 0
                                                    ) {
                                                      if (
                                                        this.compare(f3, 12) < 0
                                                      ) {
                                                        this.costume = "Throw";
                                                      } else {
                                                        if (
                                                          this.compare(f3, 21) <
                                                          0
                                                        ) {
                                                          this.costume =
                                                            "" +
                                                            "Throw" +
                                                            (Math.round(
                                                              f3 / 3
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
                                                              this.vars.p23 - 1
                                                            ] * -1
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
                                                            ] + 1
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
                                                              f3,
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
                                                              -3.5
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
                                                                this.vars.p23 -
                                                                  1
                                                              ] * -15
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
                                                          } else {
                                                            if (
                                                              this.compare(
                                                                f3,
                                                                28
                                                              ) < 0
                                                            ) {
                                                              this.costume =
                                                                "Throw6";
                                                            } else {
                                                              if (
                                                                this.compare(
                                                                  f3,
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
                                                                    .p23 - 1,
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
                                                        this.compare(s4, 24) ===
                                                        0
                                                      ) {
                                                        if (
                                                          this.compare(f3, 4) <
                                                          0
                                                        ) {
                                                          this.costume = "Die";
                                                        } else {
                                                          if (
                                                            this.compare(
                                                              f3,
                                                              7
                                                            ) < 0
                                                          ) {
                                                            this.costume =
                                                              "Die2";
                                                          } else {
                                                            if (
                                                              this.compare(
                                                                f3,
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
                                                            s4,
                                                            25
                                                          ) === 0
                                                        ) {
                                                          if (
                                                            this.compare(
                                                              f3,
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
                                                              s4,
                                                              26
                                                            ) === 0
                                                          ) {
                                                            if (
                                                              this.compare(
                                                                f3,
                                                                12
                                                              ) < 0
                                                            ) {
                                                              this.broadcast(
                                                                "freeze game"
                                                              );
                                                              this.stage.vars.playerFrame.splice(
                                                                this.vars.p23 -
                                                                  1,
                                                                1,
                                                                12
                                                              );
                                                            } else {
                                                              this.stage.vars.hitboxYKnockback.splice(
                                                                this.vars.p23 -
                                                                  1,
                                                                1,
                                                                5
                                                              );
                                                              this.stage.vars.hitboxXKnockback.splice(
                                                                this.vars.p23 -
                                                                  1,
                                                                1,
                                                                2
                                                              );
                                                              this.stage.vars.hitboxDamage.splice(
                                                                this.vars.p23 -
                                                                  1,
                                                                1,
                                                                12
                                                              );
                                                              this.stage.vars.hitboxHitstun.splice(
                                                                this.vars.p23 -
                                                                  1,
                                                                1,
                                                                12
                                                              );
                                                              if (
                                                                this.compare(
                                                                  f3,
                                                                  14
                                                                ) < 0
                                                              ) {
                                                                this.costume =
                                                                  "Splash Kick";
                                                              } else {
                                                                if (
                                                                  this.compare(
                                                                    f3,
                                                                    16
                                                                  ) < 0
                                                                ) {
                                                                  this.costume =
                                                                    "Splash Kick2";
                                                                  this.stage.vars.playerYSpeed.splice(
                                                                    this.vars
                                                                      .p23 - 1,
                                                                    1,
                                                                    3.5
                                                                  );
                                                                  this.stage.vars.playerXSpeed.splice(
                                                                    this.vars
                                                                      .p23 - 1,
                                                                    1,
                                                                    this.stage
                                                                      .vars
                                                                      .playerDirection[
                                                                      this.vars
                                                                        .p23 - 1
                                                                    ] * 4
                                                                  );
                                                                } else {
                                                                  if (
                                                                    this.compare(
                                                                      f3,
                                                                      18
                                                                    ) < 0
                                                                  ) {
                                                                    this.costume =
                                                                      "Splash Kick3";
                                                                    this.stage.vars.playerXSpeed.splice(
                                                                      this.vars
                                                                        .p23 -
                                                                        1,
                                                                      1,
                                                                      this.stage
                                                                        .vars
                                                                        .playerDirection[
                                                                        this
                                                                          .vars
                                                                          .p23 -
                                                                          1
                                                                      ] * 2
                                                                    );
                                                                    if (
                                                                      this.compare(
                                                                        Math.abs(
                                                                          this
                                                                            .stage
                                                                            .vars
                                                                            .rumbleX
                                                                        ),
                                                                        0
                                                                      ) > 0
                                                                    ) {
                                                                      this.vars.skc = 1;
                                                                    }
                                                                  } else {
                                                                    if (
                                                                      this.compare(
                                                                        f3,
                                                                        22
                                                                      ) < 0
                                                                    ) {
                                                                      this.costume =
                                                                        "Splash Kick4";
                                                                    } else {
                                                                      if (
                                                                        this.compare(
                                                                          f3,
                                                                          28
                                                                        ) < 0
                                                                      ) {
                                                                        this.costume =
                                                                          "Splash Kick5";
                                                                        if (
                                                                          this.compare(
                                                                            this
                                                                              .vars
                                                                              .skc,
                                                                            1
                                                                          ) ===
                                                                          0
                                                                        ) {
                                                                          this.stage.vars.playerYSpeed.splice(
                                                                            this
                                                                              .vars
                                                                              .p23 -
                                                                              1,
                                                                            1,
                                                                            5
                                                                          );
                                                                          this.stage.vars.playerY.splice(
                                                                            this
                                                                              .vars
                                                                              .p23 -
                                                                              1,
                                                                            1,
                                                                            5
                                                                          );
                                                                          this.stage.vars.playerState.splice(
                                                                            this
                                                                              .vars
                                                                              .p23 -
                                                                              1,
                                                                            1,
                                                                            20
                                                                          );
                                                                          this.stage.vars.playerFrame.splice(
                                                                            this
                                                                              .vars
                                                                              .p23 -
                                                                              1,
                                                                            1,
                                                                            7
                                                                          );
                                                                        } else {
                                                                          this.vars.skc = 0;
                                                                        }
                                                                      } else {
                                                                        this.costume =
                                                                          "Splash Kick6";
                                                                        if (
                                                                          this.compare(
                                                                            this
                                                                              .stage
                                                                              .vars
                                                                              .playerY[
                                                                              this
                                                                                .vars
                                                                                .p23 -
                                                                                1
                                                                            ],
                                                                            1
                                                                          ) < 0
                                                                        ) {
                                                                          this.stage.vars.playerYSpeed.splice(
                                                                            this
                                                                              .vars
                                                                              .p23 -
                                                                              1,
                                                                            1,
                                                                            0
                                                                          );
                                                                          this.stage.vars.playerY.splice(
                                                                            this
                                                                              .vars
                                                                              .p23 -
                                                                              1,
                                                                            1,
                                                                            0
                                                                          );
                                                                          this.stage.vars.playerState.splice(
                                                                            this
                                                                              .vars
                                                                              .p23 -
                                                                              1,
                                                                            1,
                                                                            6
                                                                          );
                                                                          this.stage.vars.playerFrame.splice(
                                                                            this
                                                                              .vars
                                                                              .p23 -
                                                                              1,
                                                                            1,
                                                                            -2
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
                                                              this.compare(
                                                                s4,
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
                                                                        .p23 - 1
                                                                    ]
                                                                  ),
                                                                  Math.abs(
                                                                    this.stage
                                                                      .vars
                                                                      .playerXSpeed[
                                                                      this.vars
                                                                        .p23 - 1
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
                                                                        .p23 - 1
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
                                                                          .p23 -
                                                                          1
                                                                      ]
                                                                    ),
                                                                    Math.abs(
                                                                      this.stage
                                                                        .vars
                                                                        .playerXSpeed[
                                                                        this
                                                                          .vars
                                                                          .p23 -
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
                                                                          .p23 -
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
                                                                  s4,
                                                                  4.1
                                                                ) === 0
                                                              ) {
                                                                this.stage.vars.hitboxYKnockback.splice(
                                                                  this.vars
                                                                    .p23 - 1,
                                                                  1,
                                                                  2.5
                                                                );
                                                                this.stage.vars.hitboxDamage.splice(
                                                                  this.vars
                                                                    .p23 - 1,
                                                                  1,
                                                                  4
                                                                );
                                                                if (
                                                                  this.compare(
                                                                    f3,
                                                                    2
                                                                  ) < 0
                                                                ) {
                                                                  this.costume =
                                                                    "auto";
                                                                } else {
                                                                  if (
                                                                    this.compare(
                                                                      f3,
                                                                      3
                                                                    ) < 0
                                                                  ) {
                                                                    this.costume =
                                                                      "auto2";
                                                                    this.stage.vars.playerXSpeed.splice(
                                                                      this.vars
                                                                        .p23 -
                                                                        1,
                                                                      1,
                                                                      this.stage
                                                                        .vars
                                                                        .playerDirection[
                                                                        this
                                                                          .vars
                                                                          .p23 -
                                                                          1
                                                                      ] * 4
                                                                    );
                                                                  } else {
                                                                    if (
                                                                      this.compare(
                                                                        f3,
                                                                        5
                                                                      ) < 0
                                                                    ) {
                                                                      this.costume =
                                                                        "auto3";
                                                                    } else {
                                                                      if (
                                                                        this.compare(
                                                                          f3,
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
                                                                    s4,
                                                                    27
                                                                  ) === 0
                                                                ) {
                                                                  this.vars.h8 = 1;
                                                                  this.stage.vars.playerFrame.splice(
                                                                    this.vars
                                                                      .p23 - 1,
                                                                    1,
                                                                    -8
                                                                  );
                                                                  this.stage.vars.playerState.splice(
                                                                    this.vars
                                                                      .p23 - 1,
                                                                    1,
                                                                    6
                                                                  );
                                                                } else {
                                                                  if (
                                                                    this.compare(
                                                                      s4,
                                                                      28
                                                                    ) === 0
                                                                  ) {
                                                                    this.costume =
                                                                      "block crouch";
                                                                  } else {
                                                                    if (
                                                                      this.compare(
                                                                        s4,
                                                                        30
                                                                      ) === 0
                                                                    ) {
                                                                      this.stage.vars.hitboxYKnockback.splice(
                                                                        this
                                                                          .vars
                                                                          .p23 -
                                                                          1,
                                                                        1,
                                                                        -5
                                                                      );
                                                                      this.stage.vars.hitboxDamage.splice(
                                                                        this
                                                                          .vars
                                                                          .p23 -
                                                                          1,
                                                                        1,
                                                                        8
                                                                      );
                                                                      if (
                                                                        this.compare(
                                                                          f3,
                                                                          5
                                                                        ) < 0
                                                                      ) {
                                                                        this.stage.vars.playerFrame.splice(
                                                                          this
                                                                            .vars
                                                                            .p23 -
                                                                            1,
                                                                          1,
                                                                          5
                                                                        );
                                                                      } else {
                                                                        if (
                                                                          this.compare(
                                                                            f3,
                                                                            6
                                                                          ) < 0
                                                                        ) {
                                                                          this.costume =
                                                                            "Meteor Stomp";
                                                                        } else {
                                                                          if (
                                                                            this.compare(
                                                                              f3,
                                                                              8
                                                                            ) <
                                                                            0
                                                                          ) {
                                                                            this.costume =
                                                                              "Meteor Stomp2";
                                                                          } else {
                                                                            if (
                                                                              this.compare(
                                                                                f3,
                                                                                10
                                                                              ) <
                                                                              0
                                                                            ) {
                                                                              this.costume =
                                                                                "Meteor Stomp3";
                                                                            } else {
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
                                                                                0
                                                                              ) {
                                                                                this.stage.vars.playerFrame.splice(
                                                                                  this
                                                                                    .vars
                                                                                    .p23 -
                                                                                    1,
                                                                                  1,
                                                                                  18
                                                                                );
                                                                                this.stage.vars.playerYSpeed.splice(
                                                                                  this
                                                                                    .vars
                                                                                    .p23 -
                                                                                    1,
                                                                                  1,
                                                                                  3
                                                                                );
                                                                                this.stage.vars.playerState.splice(
                                                                                  this
                                                                                    .vars
                                                                                    .p23 -
                                                                                    1,
                                                                                  1,
                                                                                  20
                                                                                );
                                                                                return;
                                                                              }
                                                                              if (
                                                                                this.compare(
                                                                                  f3,
                                                                                  12
                                                                                ) <
                                                                                0
                                                                              ) {
                                                                                this.costume =
                                                                                  "Meteor Stomp4";
                                                                                this.stage.vars.playerYSpeed.splice(
                                                                                  this
                                                                                    .vars
                                                                                    .p23 -
                                                                                    1,
                                                                                  1,
                                                                                  -8
                                                                                );
                                                                              } else {
                                                                                if (
                                                                                  this.compare(
                                                                                    f3,
                                                                                    16
                                                                                  ) <
                                                                                  0
                                                                                ) {
                                                                                  this.costume =
                                                                                    "Meteor Stomp5";
                                                                                } else {
                                                                                  if (
                                                                                    this.compare(
                                                                                      f3,
                                                                                      18
                                                                                    ) <
                                                                                    0
                                                                                  ) {
                                                                                    this.costume =
                                                                                      "Meteor Stomp6";
                                                                                  } else {
                                                                                    this.stage.vars.playerState.splice(
                                                                                      this
                                                                                        .vars
                                                                                        .p23 -
                                                                                        1,
                                                                                      1,
                                                                                      6
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
                                                                        this.compare(
                                                                          s4,
                                                                          23
                                                                        ) === 0
                                                                      ) {
                                                                        if (
                                                                          this.compare(
                                                                            f3,
                                                                            4
                                                                          ) < 0
                                                                        ) {
                                                                          this.costume =
                                                                            "TsunamI Swirl";
                                                                        } else {
                                                                          if (
                                                                            this.compare(
                                                                              f3,
                                                                              7
                                                                            ) <
                                                                            0
                                                                          ) {
                                                                            this.costume =
                                                                              "TsunamI Swirl2";
                                                                          } else {
                                                                            if (
                                                                              this.compare(
                                                                                f3,
                                                                                67
                                                                              ) <
                                                                              0
                                                                            ) {
                                                                              this.costume =
                                                                                "" +
                                                                                "TsunamI Swirl" +
                                                                                ((((f3 -
                                                                                  7) /
                                                                                  2) %
                                                                                  4) +
                                                                                  3);
                                                                            } else {
                                                                              this.stage.vars.playerState.splice(
                                                                                this
                                                                                  .vars
                                                                                  .p23 -
                                                                                  1,
                                                                                1,
                                                                                2
                                                                              );
                                                                            }
                                                                          }
                                                                        }
                                                                      } else {
                                                                        if (
                                                                          this.compare(
                                                                            s4,
                                                                            29
                                                                          ) ===
                                                                          0
                                                                        ) {
                                                                          this.stage.vars.hitboxYKnockback.splice(
                                                                            this
                                                                              .vars
                                                                              .p23 -
                                                                              1,
                                                                            1,
                                                                            -5
                                                                          );
                                                                          this.stage.vars.hitboxDamage.splice(
                                                                            this
                                                                              .vars
                                                                              .p23 -
                                                                              1,
                                                                            1,
                                                                            3
                                                                          );
                                                                          if (
                                                                            this.compare(
                                                                              this
                                                                                .stage
                                                                                .vars
                                                                                .infiniStomp,
                                                                              1
                                                                            ) ===
                                                                            0
                                                                          ) {
                                                                            this.stage.vars.hitboxHitstun.splice(
                                                                              this
                                                                                .vars
                                                                                .p23 -
                                                                                1,
                                                                              1,
                                                                              1 /
                                                                                0
                                                                            );
                                                                          } else {
                                                                            this.stage.vars.hitboxHitstun.splice(
                                                                              this
                                                                                .vars
                                                                                .p23 -
                                                                                1,
                                                                              1,
                                                                              14
                                                                            );
                                                                          }
                                                                          if (
                                                                            this.compare(
                                                                              f3,
                                                                              5
                                                                            ) <
                                                                            0
                                                                          ) {
                                                                            this.stage.vars.playerFrame.splice(
                                                                              this
                                                                                .vars
                                                                                .p23 -
                                                                                1,
                                                                              1,
                                                                              5
                                                                            );
                                                                          } else {
                                                                            if (
                                                                              this.compare(
                                                                                f3,
                                                                                6
                                                                              ) <
                                                                              0
                                                                            ) {
                                                                              this.costume =
                                                                                "Step on dem toes";
                                                                            } else {
                                                                              if (
                                                                                this.compare(
                                                                                  f3,
                                                                                  9
                                                                                ) <
                                                                                0
                                                                              ) {
                                                                                this.costume =
                                                                                  "Step on dem toes2";
                                                                              } else {
                                                                                if (
                                                                                  this.compare(
                                                                                    f3,
                                                                                    11
                                                                                  ) <
                                                                                  0
                                                                                ) {
                                                                                  this.costume =
                                                                                    "Step on dem toes3";
                                                                                } else {
                                                                                  if (
                                                                                    this.compare(
                                                                                      f3,
                                                                                      12
                                                                                    ) <
                                                                                    0
                                                                                  ) {
                                                                                    this.costume =
                                                                                      "Step on dem toes4";
                                                                                  } else {
                                                                                    if (
                                                                                      this.compare(
                                                                                        f3,
                                                                                        16
                                                                                      ) <
                                                                                      0
                                                                                    ) {
                                                                                      this.costume =
                                                                                        "Step on dem toes5";
                                                                                    } else {
                                                                                      if (
                                                                                        this.compare(
                                                                                          f3,
                                                                                          18
                                                                                        ) <
                                                                                        0
                                                                                      ) {
                                                                                        this.costume =
                                                                                          "Step on dem toes6";
                                                                                      } else {
                                                                                        this.stage.vars.playerState.splice(
                                                                                          this
                                                                                            .vars
                                                                                            .p23 -
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
                                                                        } else {
                                                                          if (
                                                                            this.compare(
                                                                              s4,
                                                                              -1
                                                                            ) ===
                                                                            0
                                                                          ) {
                                                                            this.stage.vars.playerFrame.splice(
                                                                              this
                                                                                .vars
                                                                                .p23 -
                                                                                1,
                                                                              1,
                                                                              this
                                                                                .stage
                                                                                .vars
                                                                                .playerFrame[
                                                                                this
                                                                                  .vars
                                                                                  .p23 -
                                                                                  1
                                                                              ] +
                                                                                1
                                                                            );
                                                                            if (
                                                                              this.compare(
                                                                                f3,
                                                                                15
                                                                              ) <
                                                                              0
                                                                            ) {
                                                                              this.costume =
                                                                                "" +
                                                                                "Intro" +
                                                                                (1 +
                                                                                  (Math.round(
                                                                                    f3 /
                                                                                      2
                                                                                  ) %
                                                                                    3));
                                                                              this.x +=
                                                                                (-198 +
                                                                                  f3 *
                                                                                    12) *
                                                                                this
                                                                                  .stage
                                                                                  .vars
                                                                                  .playerDirection[
                                                                                  this
                                                                                    .vars
                                                                                    .p23 -
                                                                                    1
                                                                                ];
                                                                            } else {
                                                                              if (
                                                                                this.compare(
                                                                                  f3,
                                                                                  21
                                                                                ) <
                                                                                0
                                                                              ) {
                                                                                this.costume =
                                                                                  "Backdash";
                                                                                this.x +=
                                                                                  (-42 +
                                                                                    f3 *
                                                                                      2) *
                                                                                  this
                                                                                    .stage
                                                                                    .vars
                                                                                    .playerDirection[
                                                                                    this
                                                                                      .vars
                                                                                      .p23 -
                                                                                      1
                                                                                  ];
                                                                              } else {
                                                                                this.stage.vars.playerState.splice(
                                                                                  this
                                                                                    .vars
                                                                                    .p23 -
                                                                                    1,
                                                                                  1,
                                                                                  0
                                                                                );
                                                                              }
                                                                            }
                                                                          } else {
                                                                            if (
                                                                              this.compare(
                                                                                s4,
                                                                                32
                                                                              ) ===
                                                                              0
                                                                            ) {
                                                                              this.costume =
                                                                                "" +
                                                                                "Geysertrap" +
                                                                                (1 +
                                                                                  Math.floor(
                                                                                    f3 /
                                                                                      1.5
                                                                                  ));
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
