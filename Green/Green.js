import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@1.4.1/dist/index.esm.js";

export default class Green extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("idle", "d5d7b3e6ec37fa5f4b69d74a0b470807.svg", {
        x: 33.51779500000001,
        y: 39.27302285055782
      }),
      new Costume("idle2", "ac15a92d1a8fba71175aebb38be4221d.svg", {
        x: 33.07764628654857,
        y: 40.135803834331824
      }),
      new Costume("idle3", "945fa099e0b353d437c03906344af01c.svg", {
        x: 33.517765000000026,
        y: 41.20893340691734
      }),
      new Costume("idle4", "ac6af09cb972675d7b761fb98fc042df.svg", {
        x: 32.02825396088991,
        y: 42.53167570848569
      }),
      new Costume("idle5", "6719480d436e4c2f4b1d83a1157f6d86.svg", {
        x: 33.14991316771139,
        y: 41.96759302101782
      }),
      new Costume("idle6", "0286f877e8971aa0922e6dc9bacdfd2d.svg", {
        x: 34.09295330352654,
        y: 39.27301640223129
      }),
      new Costume("WalkFront", "6a995c03c15dd9aaa5f644fc01166b20.svg", {
        x: 33.51773499999999,
        y: 40.46010216741524
      }),
      new Costume("WalkFront2", "aa7445a4d491ab903b6d4d4674b27d21.svg", {
        x: 33.51024726781068,
        y: 44.61487712222893
      }),
      new Costume("WalkFront3", "25a9270ce29d4d7a09e6a11817f4a373.svg", {
        x: 33.49621562942849,
        y: 47.879350628716196
      }),
      new Costume("WalkFront4", "8bb8d637aca8a4bf97f757963ced89dc.svg", {
        x: 33.31236585424051,
        y: 46.69226341520567
      }),
      new Costume("WalkFront5", "a34730a2d892ac78f59d9483e77dd7e0.svg", {
        x: 32.59807967703148,
        y: 45.26500034526936
      }),
      new Costume("WalkFront6", "f2074f65d01c19e5405a7602fcb046aa.svg", {
        x: 34.103787683489315,
        y: 42.48548626074893
      }),
      new Costume("crouch2", "a86e239a2fb5ec9a51315dc2e7c6872f.svg", {
        x: 24.665888060735966,
        y: 31.85376806815796
      }),
      new Costume("crouch", "8b9e6da71ec5ae518913e2fd18944725.svg", {
        x: 30.007755000000003,
        y: 16.718487850557807
      }),
      new Costume("midair", "4ae2f8d28ac16f28b0d9e7861bf30067.svg", {
        x: 34.40809557388798,
        y: 42.8342651461098
      }),
      new Costume("midair2", "90430c09ce2ced19d3659e95eb6672ea.svg", {
        x: 34.30823976300377,
        y: 45.87141364741677
      }),
      new Costume("land", "8be7503523e581011249eb120aebc5b1.svg", {
        x: 33.517785,
        y: 36.305320937597884
      }),
      new Costume("punch1", "93981a06691aefb2b5b822d1d1d95980.svg", {
        x: 24.52902677087326,
        y: 37.86525331381401
      }),
      new Costume("punch2", "d6ea35868cecab615e61951f9b234143.svg", {
        x: 19.917534999999987,
        y: 37.732058369049156
      }),
      new Costume("punch3", "578bdc023b5aea1024f4c839066b1b71.svg", {
        x: 19.917505000000034,
        y: 37.73205656968938
      }),
      new Costume("punch4", "fdb685bc3d1af1f8887394ac1f27fa6b.svg", {
        x: 19.91751500000001,
        y: 37.732060502809304
      }),
      new Costume("punch5", "00acfb9de37f4c78fcf5e833fc9545d4.svg", {
        x: 23.380145634172237,
        y: 38.50532653186005
      }),
      new Costume("punch6", "f1e7a6565ca0777715c59ad16d42a089.svg", {
        x: 25.59651246051061,
        y: 37.35999700960812
      }),
      new Costume("auto", "fb8b120f95ba81411138c72603c139fd.svg", {
        x: 19.91753990198302,
        y: 37.86525428209845
      }),
      new Costume("auto2", "fa51116d31723d4b0fd313bc6cbd7a7b.svg", {
        x: 29.032737384718132,
        y: 32.269794528418515
      }),
      new Costume("auto3", "89b778cbb85f6cad2f14195be051113e.svg", {
        x: 26.0893160692886,
        y: 28.41727615687597
      }),
      new Costume("auto4", "fd48eb816ddc4cf8e27c7032da643972.svg", {
        x: 26.0893160692886,
        y: 32.26979428911801
      }),
      new Costume("auto5", "bbb0ddbea4c9ba6888391652b66da341.svg", {
        x: 22.095463126005455,
        y: 38.15392488809806
      }),
      new Costume("high kick1", "4508c38385b67a1222e9cf6a84b3c385.svg", {
        x: 40.343500000000006,
        y: 39.56979785055785
      }),
      new Costume("high kick2", "f5dafca6b56f9fc521462b4c56b7d184.svg", {
        x: 55.478779756095804,
        y: 35.11824278558052
      }),
      new Costume("high kick4", "5e2fa1bb79c4f40157d66b6bee3d416a.svg", {
        x: 49.54337617408004,
        y: 35.1182349539049
      }),
      new Costume("high kick3", "136763667a391261804b77767abe166c.svg", {
        x: 48.104578706672896,
        y: 36.310622482889556
      }),
      new Costume("high kick5", "fc2049294106caea5ffa90257e621f86.svg", {
        x: 43.917971834260726,
        y: 41.29074490183342
      }),
      new Costume("high kick6", "8b9ac417fed04ec6ea9c9bf069098b79.svg", {
        x: 35.31163422352199,
        y: 41.290748055960165
      }),
      new Costume("hurt head", "8e1c472bc9f73459cced6f096a2b9848.svg", {
        x: 54.43041060952726,
        y: 41.39698949133225
      }),
      new Costume("hurt head2", "2f2eb8479cf52def3e48ba34ae175b03.svg", {
        x: 50.141575746011966,
        y: 40.87832788620719
      }),
      new Costume("hurt torso", "40c3d877adf86ffb18e22a64a515c0ab.svg", {
        x: 23.459872695099847,
        y: 36.61597730090219
      }),
      new Costume("hurt torso2", "cdf64567405ef732d76bbdd07c756639.svg", {
        x: 26.809914822924185,
        y: 35.60810310099498
      }),
      new Costume("block torso", "c3e9da9a75b18d4b843ab22146cc463f.svg", {
        x: 36.90239489110715,
        y: 40.825413511132666
      }),
      new Costume("block torso2", "5d0fa65782fff71cf029dc301587dae7.svg", {
        x: 39.92427247731396,
        y: 37.671398831787144
      }),
      new Costume("block head", "de90fab6ef2dff95d1f3d8d8b7f3f3d6.svg", {
        x: 38.99448752330642,
        y: 37.561620356093385
      }),
      new Costume("block head2", "6b1823b1660a31357e2275d0add7a499.svg", {
        x: 30.314538784029054,
        y: 37.67139570111567
      }),
      new Costume("block crouch", "b796ad05e79da5cde81a846e93624a04.svg", {
        x: 31.99625499999999,
        y: 16.87197153887115
      }),
      new Costume("air punch", "582981996b0b59996029ef1c92ddeee0.svg", {
        x: 53.55300214836558,
        y: 41.16578331240913
      }),
      new Costume("air punch2", "0408a0a93ef7519060754ec2db094166.svg", {
        x: 60.671962952023364,
        y: 36.89886257631133
      }),
      new Costume("air punch3", "c09cf609ef1e32a53e5b755b0367d716.svg", {
        x: 26.09537856365381,
        y: 36.89885570111562
      }),
      new Costume("air punch4", "07cef259734420a880bc992983d5e0c0.svg", {
        x: 24.317915,
        y: 36.89886285055783
      }),
      new Costume("low kick", "71bfe62472dc9e9aee6c4506afb6184f.svg", {
        x: 23.427589208511904,
        y: 17.608796275003584
      }),
      new Costume("low kick2", "e2a825247b595eb14db2f36aa0932172.svg", {
        x: 61.41417516499186,
        y: 19.38942855167346
      }),
      new Costume("low kick3", "e22e2b393d75b481022773e6a773b7c5.svg", {
        x: 66.89680240569416,
        y: 19.75115514863765
      }),
      new Costume("low kick4", "28d9319405a48befd9376311d60bbc63.svg", {
        x: 68.12647565087269,
        y: 18.973849478755966
      }),
      new Costume("low kick5", "988f12aae88ec1a77e6f318b82c66e41.svg", {
        x: 68.1264735148813,
        y: 18.97384197048558
      }),
      new Costume("low kick6", "af91f9150cb740ec9580950eba153971.svg", {
        x: 63.67492591776332,
        y: 18.973834926214067
      }),
      new Costume("low kick7", "63811a5ef5bebd570230313e98c4ca08.svg", {
        x: 51.34306062505266,
        y: 18.97383992621397
      }),
      new Costume("low kick8", "7ed3fd1143ce33b3fd636ab959514d72.svg", {
        x: 50.755129595452274,
        y: 19.41442809691233
      }),
      new Costume("low kick9", "d4d8b53e68831e046dfcdfed24829227.svg", {
        x: 50.75512411323578,
        y: 25.06716
      }),
      new Costume("low kick10", "ca8f9bd1c219615d29c37b06bafce833.svg", {
        x: 39.24721798634715,
        y: 27.3050605500776
      }),
      new Costume("low punch", "45a4c5c0e8aa3e175de8692013e42f98.svg", {
        x: 30.007745,
        y: 16.718487850557807
      }),
      new Costume("low punch2", "f69634ff0c2b390533ca92c802eb8838.svg", {
        x: 30.007734999999997,
        y: 16.42440870223092
      }),
      new Costume("low punch3", "cad5cc0b12a22ba45f18271da8e28088.svg", {
        x: 30.007714999999962,
        y: 16.718489252789084
      }),
      new Costume("low punch4", "3b24a93cf04445bf5dfba80cb2561a43.svg", {
        x: 30.007745,
        y: 16.718487850557807
      }),
      new Costume("hurt air", "e4c56988d305a111815bf799efc0c3f4.svg", {
        x: 47.4190643316731,
        y: 42.08486450113193
      }),
      new Costume("hurt air2", "fb0aa1d3c4e1d9c99789392388b377ec.svg", {
        x: 42.4062487487852,
        y: 40.80660064932985
      }),
      new Costume("air kick", "5e35014089508997b5f7b0bcb28c075c.svg", {
        x: 37.87051942901738,
        y: 41.382150302023405
      }),
      new Costume("air kick2", "154bde9720bd75df8f0101138b1c24c2.svg", {
        x: 46.472277028516146,
        y: 41.38215681529226
      }),
      new Costume("air kick3", "1d324a63815046218422304daadb8d10.svg", {
        x: 48.345038679557746,
        y: 40.882020332330455
      }),
      new Costume("air kick4", "eb30bfd3ca24b2aac4af17d4fbebd925.svg", {
        x: 40.996148724661936,
        y: 45.08881981212551
      }),
      new Costume("air kick5", "8aa1d8cbcdff6e431cd3d99dacde59cc.svg", {
        x: 48.004511297741715,
        y: 45.08881204680253
      }),
      new Costume("air kick6", "c04167c805e7a94022e0f3b7e542a335.svg", {
        x: 49.004784660023006,
        y: 45.088818581904434
      }),
      new Costume("air kick7", "228c8e9ff5e180e1f7af5c26d5b9f7c9.svg", {
        x: 42.25293946462432,
        y: 46.589227601925074
      }),
      new Costume("lowpunch", "4b8d3d2b38032fd1e760575c760fc88e.svg", {
        x: 40.343500000000006,
        y: 39.56979355167357
      }),
      new Costume("lowpunch4", "b85729eb0e19660e35f327a44e47f65f.svg", {
        x: 45.03005654725317,
        y: 39.86271118643472
      }),
      new Costume("lowpunch5", "62ff6db0a45a6e759235c900ab6b490f.svg", {
        x: 51.241256233392704,
        y: 44.501684631310184
      }),
      new Costume("lowpunch6", "b3dfc1e42c019f9f150014f1e896cc9a.svg", {
        x: 45.67597111446048,
        y: 54.188239427714365
      }),
      new Costume("lowpunch2", "81315ff4f47bd9aad330b376a40f6f81.svg", {
        x: 45.67596780122332,
        y: 56.556795819199905
      }),
      new Costume("lowpunch7", "bf2ab9230e846ab086055cca61e48735.svg", {
        x: 45.39993821546477,
        y: 53.4835670375991
      }),
      new Costume("lowpunch8", "1a360b6da9225724aafac2094f307c91.svg", {
        x: 40.20890908192095,
        y: 48.36749642068219
      }),
      new Costume("parry", "dca6b3cdcbfdf69248affa214f0b9563.svg", {
        x: 27.85764396988708,
        y: 30.744789882901387
      }),
      new Costume("hadouken", "0c77bfd773dafd29980f244cd2c9b0db.svg", {
        x: 37.94130000000001,
        y: 41.29562866219399
      }),
      new Costume("charge", "d360e1accb2441e66b4f02f3ac20087e.svg", {
        x: 25.882717941567307,
        y: 36.98186504793904
      }),
      new Costume("wallbounce", "a82d4b91347dfe5c980d95910328a496.svg", {
        x: 44.66395905939794,
        y: 34.72647068348755
      }),
      new Costume("Plant Plummet", "31784496e636627a57290a74c9b32948.svg", {
        x: 33.517775,
        y: 36.05178936862717
      }),
      new Costume("Plant Plummet2", "fdf75f8549e8eea58820a113cb03de89.svg", {
        x: 33.517765000000026,
        y: 30.35268563093615
      }),
      new Costume("Plant Plummet3", "b385e10d08b7392a919d38ff4b2dbdf4.svg", {
        x: 29.775803262804345,
        y: 55.63821798464633
      }),
      new Costume("Plant Plummet4", "c8c3c970d6b46f795f28106edd9b4e62.svg", {
        x: 53.635395284995866,
        y: 41.871471837026945
      }),
      new Costume("Plant Plummet5", "fe50328201a2c353af7b1164784e4e00.svg", {
        x: 46.945141007286935,
        y: 59.7169258453586
      }),
      new Costume("Plant Plummet6", "1961d95407bb21596aebef6bd6537fa8.svg", {
        x: 47.50247111095433,
        y: 53.877888241764225
      }),
      new Costume("Plant Plummet7", "b014e701ca96a9061617804526713084.svg", {
        x: 49.841159676419494,
        y: 59.76134032755216
      }),
      new Costume("Plant Plummet8", "d179a7283b1db5a7d6fc9566bc1c9345.svg", {
        x: 43.898542368410006,
        y: 69.36301982700445
      }),
      new Costume("Plant Plummet9", "43254092ab59f74f4f852dbdb4efb4b1.svg", {
        x: 43.818261941468336,
        y: 66.86231401212854
      }),
      new Costume("Plant Plummet10", "5abd3c95a916bea9d4ff47902bbe859d.svg", {
        x: 45.46784017670777,
        y: 63.41641685520986
      }),
      new Costume("Grab", "01ffde14d8ce6a0b35b2c860da23a7e3.svg", {
        x: 33.517775,
        y: 39.273020701115655
      }),
      new Costume("Grab2", "a30d47ea069653d27e224eee23fd4c5b.svg", {
        x: 37.60049336248966,
        y: 39.27301570111564
      }),
      new Costume("Grab3", "d9cd3731992070161fa928387bca4466.svg", {
        x: 19.625919058032025,
        y: 39.27301925278911
      }),
      new Costume("Grab4", "fdd56910e1fdd5140e20dfb5bac16a9c.svg", {
        x: 19.625919058032025,
        y: 39.273017103346916
      }),
      new Costume("Grab5", "018cf96939ca795bf2eea44b86dbeef6.svg", {
        x: 24.185799101766435,
        y: 39.27301495390472
      }),
      new Costume("Throw", "fdd56910e1fdd5140e20dfb5bac16a9c.svg", {
        x: 19.625919058032025,
        y: 39.273017103346916
      }),
      new Costume("Throw2", "4cf65dc30ebe2bff1cda33e37c704c58.svg", {
        x: 19.625919058032025,
        y: 39.27301495390472
      }),
      new Costume("Throw3", "5a48a44f683f7230edeeffdd7b697d5a.svg", {
        x: 34.54286531171425,
        y: 39.27301570111564
      }),
      new Costume("Throw4", "b6e786e58053166a1605cdea44ca7804.svg", {
        x: 48.02975465933224,
        y: 38.95502335709597
      }),
      new Costume("Throw5", "a856f1a0a7f4289df5759a8efdc0ad12.svg", {
        x: 71.21190473179189,
        y: 33.148906358496845
      }),
      new Costume("Throw6", "2abcd0661bba39e93fa603989b38f94d.svg", {
        x: 72.00002881990534,
        y: 27.441657432063835
      }),
      new Costume("Throw7", "bf10696474be9a7d43b562eff8835238.svg", {
        x: 34.56084333473618,
        y: 35.19028733862598
      }),
      new Costume("Die", "09c49357927aee6ddbb7dd114888f0e5.svg", {
        x: 33.517785,
        y: 39.27302285055782
      }),
      new Costume("Die2", "96c732f8e221224f0a6049f02be45bba.svg", {
        x: 29.668552622114248,
        y: 40.60598356032756
      }),
      new Costume("Die3", "8fc5022c6010c83695b1890b6aa6f48b.svg", {
        x: 36.97951645880616,
        y: 23.722774796083087
      }),
      new Costume("Die4", "546275ccf5134ad950fede0b939e2f20.svg", {
        x: 39.675136132050994,
        y: -8.31036013398284
      }),
      new Costume("Leaf Leap", "41f14a43a486fe3427b7ca110c4e0df1.svg", {
        x: 27.766081964734724,
        y: 21.06335565766244
      }),
      new Costume("Leaf Leap2", "f2882283ca5ff93317b86361621a338b.svg", {
        x: 31.583228292394523,
        y: 31.991550617561927
      }),
      new Costume("Leaf Leap3", "841ce343d3b8dc04c35b414816511014.svg", {
        x: 61.64279515413466,
        y: 31.421202817227595
      }),
      new Costume("Leaf Leap4", "e1c58c158ae13758171da7b28a5d7b4b.svg", {
        x: 58.49974018984574,
        y: 16.07455856964222
      }),
      new Costume("Leaf Leap5", "a98e158ee407c2afa4b432f11828ca6f.svg", {
        x: 60.66180499999993,
        y: 6.113792729527091
      }),
      new Costume("Leaf Leap6", "438d5574ea473ef0049008cdc0e54cf2.svg", {
        x: 58.49974,
        y: 16.07455999999999
      }),
      new Costume("Leaf Leap7", "1e9205a0e1524d3556a40d72d51b44a3.svg", {
        x: 57.62615105819947,
        y: 30.912321856387138
      }),
      new Costume("Leaf Leap8", "e254c5cfabbb4ef02d80e6a7fda4cf1f.svg", {
        x: 20.679557474728995,
        y: 50.69465274393528
      }),
      new Costume("Vine Whip1", "10281268544b7dcbd29a47499cfeefae.svg", {
        x: 27.857624999999985,
        y: 46.877059933447185
      }),
      new Costume("Vine Whip2", "f2d4f4eee13eef6dd4528592c7f43036.svg", {
        x: 65.69712325424052,
        y: 30.74478570111566
      }),
      new Costume("Vine Whip3", "77a8d5af72b407f2381d664f67576bb3.svg", {
        x: 78.12502770953137,
        y: 27.301719382898256
      }),
      new Costume("Vine Whip4", "fc1e47f1839f962a9af6723be3c53e49.svg", {
        x: 51.11881709064582,
        y: 30.744791364616816
      }),
      new Costume("Vine Whip5", "6c5f362d2d84ba2ce48a9804c4a3f572.svg", {
        x: 52.11881709064582,
        y: 65.60363745272852
      }),
      new Costume("Vine Whip6", "cfaeb0b3dddb9e8fbb2e0f573c7306c0.svg", {
        x: 53.86881709064582,
        y: 68.5164557078371
      }),
      new Costume("Vine Whip7", "2319be1cadf8bc46edb62a835d49e06b.svg", {
        x: 84.18486999999999,
        y: 34.040621492063394
      }),
      new Costume("Vine Whip8", "f4c04a049d42020fdad1978fe4252216.svg", {
        x: 76.43486999999999,
        y: 35.44355454317227
      }),
      new Costume("Vine Whip9", "ca0d3d96836d37fc510aa7d0b697472a.svg", {
        x: 39.85762,
        y: 23.365961395435534
      }),
      new Costume("Vine Whip10", "4724bcce0d11296ff1a63777f1d35a8b.svg", {
        x: 39.85762,
        y: 22.86596096382027
      }),
      new Costume("Vine Whip11", "e5edf811f1947b20886e65a7c902d00a.svg", {
        x: 39.85762,
        y: 27.865964784192357
      }),
      new Costume("Vine Whip12", "304b5dd45efec951be8eb0158f518134.svg", {
        x: 90.947125,
        y: 84.52093500000002
      }),
      new Costume("Vine Whip13", "daf95270ac3f6ae778eb436a1007db24.svg", {
        x: 95.46206378200222,
        y: 77.97838413852303
      }),
      new Costume("Vine Whip14", "f36ec7e3f05c3dfc0ea0dc183f166a65.svg", {
        x: 49.08069999999998,
        y: 60.89915477842432
      }),
      new Costume("Vine Whip15", "19bbe7704b4fdc7793852b3c8f29e378.svg", {
        x: 39.85762,
        y: 25.265176624220203
      }),
      new Costume("Vine Whip16", "b51736813e0b6f80b4382d0922b45401.svg", {
        x: 39.85762,
        y: 25.99281752164407
      }),
      new Costume("Vine Whip17", "e768657962372e152cdcfaae37a6b10d.svg", {
        x: 39.85762,
        y: 22.053550584125787
      }),
      new Costume("Vine Whip18", "c77557bf087b6b8bb40b8f68199f5234.svg", {
        x: 39.85762,
        y: 18.30355565530226
      }),
      new Costume("Vine Whip19", "327665c2b1fce247d852d78c0fcdc1ae.svg", {
        x: 34.60762,
        y: 30.059167294799295
      }),
      new Costume("Vine Whip20", "5ba381236b261695b4911e1f15f31280.svg", {
        x: 30.504302195901914,
        y: 34.72395150613272
      }),
      new Costume("Vine Whip21", "acb2c691fc331726e483316ed731d4e1.svg", {
        x: 51.1655907582805,
        y: 34.43391333333332
      }),
      new Costume("Vine Whip22", "28d45d731e29f26db67b08b4043a2967.svg", {
        x: 104.49298197679406,
        y: 35.636884636715735
      }),
      new Costume("Vine Whip23", "915ae466d2195e3050a2247a1bc51a8f.svg", {
        x: 77.84809214169655,
        y: 33.6386118073645
      }),
      new Costume("Vine Whip24", "33f25ea340c335fcc22cbcf778a59b98.svg", {
        x: 79.68806000000001,
        y: 34.43390500000001
      }),
      new Costume("Vine Whip25", "7fff323c272ef5b77e720a5ad87a6417.svg", {
        x: 44.49889480373824,
        y: 35.18390500000004
      }),
      new Costume("Vine Whip26", "28d45d731e29f26db67b08b4043a2967.svg", {
        x: 104.49298197679406,
        y: 35.636884636715735
      }),
      new Costume("Vine Whip27", "ef09f8a7197e73b7db8833bd9998b4df.svg", {
        x: 30.938060000000036,
        y: 26.492296687808135
      }),
      new Costume("Vine Whip28", "5ca9685c8e17794843180f71bf98fca1.svg", {
        x: 23.411903333333356,
        y: 26.49229924852557
      }),
      new Costume("Vine Whip29", "3602e9e38a0be870e9ad85afaa795bc2.svg", {
        x: 23.745236666666727,
        y: 42.64920213260535
      }),
      new Costume("Vine Whip30", "99e2779615477666618be103deeaa2ca.svg", {
        x: 20.440885000000037,
        y: 47.41049111156636
      }),
      new Costume("Vine Whip31", "32805ac87c0d7d86223a1db6e89830b3.svg", {
        x: 20.440885000000065,
        y: 38.19876067539613
      }),
      new Costume("Vine Whip32", "476e9fc1e5e0994b31077047b249664a.svg", {
        x: 34.56084499999997,
        y: 35.190280701115654
      }),
      new Costume("Launch_1", "03c32850933333071d9eceea2cc7946a.svg", {
        x: 35.06549928369992,
        y: 42.67659322994953
      }),
      new Costume("Launch_2", "83040d7aec27d3dc633234bfc1ed7181.svg", {
        x: 37.053615320258416,
        y: 39.95161604188496
      }),
      new Costume("Launch_3", "e48acb7bb5b20d2e5d3978e81b25a3f9.svg", {
        x: 44.48012234372678,
        y: 6.812150649717836
      }),
      new Costume("Launch_4", "d2d621baba1ae702bbf3da3390e59703.svg", {
        x: 28.74896319253034,
        y: 27.582547515867248
      }),
      new Costume("Launch_5", "203eff80079feae4437b294f765a7abd.svg", {
        x: 13.358178571325709,
        y: 30.95135964980159
      }),
      new Costume("RunStart_1", "7a791d1761de6fefc66c06704cc12ced.svg", {
        x: 34.301728026254125,
        y: 27.414817850557796
      }),
      new Costume("RunStart_2", "65813d4e941d03b956641a0283dd3f59.svg", {
        x: 40.55989930230976,
        y: 34.21717719559098
      }),
      new Costume("RunStart_3", "d14394164dcc7cd85f8e1ae512df1d0d.svg", {
        x: 42.84838310520732,
        y: 31.768323477798788
      }),
      new Costume("Run_1", "a36fcc81df6c3881c98d3e5f537df60d.svg", {
        x: 44.426455500676525,
        y: 30.952052456874924
      }),
      new Costume("Run_2", "87cf638d30a7ce4a6c91d0cf5c871b42.svg", {
        x: 48.7576452170772,
        y: 29.863675800477182
      }),
      new Costume("Run_3", "af3d7b9dd1a97158b1d551549923f108.svg", {
        x: 39.19347798295391,
        y: 30.407863335369882
      }),
      new Costume("Run_4", "f2ff029823aa61d2c34c47c39ce0679c.svg", {
        x: 25.453581742566826,
        y: 24.784493551673506
      }),
      new Costume("Run_5", "aa6dab90325250c4fa401786dc5a3e29.svg", {
        x: 32.18472035950839,
        y: 26.48503580501429
      }),
      new Costume("Run_6", "ffaa968be8319d3828c27fe8caffa99c.svg", {
        x: 25.453587922976368,
        y: 24.7845028505578
      }),
      new Costume("Backdash", "d8b2d35466302d8e0ea6de940e0f7990.svg", {
        x: 46.19081450079108,
        y: 40.83821486099367
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "game" }, this.whenIReceiveGame)
    ];

    this.vars.p57 = 3;
    this.vars.state25 = 0;
    this.vars.x34 = 15;
    this.vars.y34 = 0;
    this.vars.direction27 = -1;
    this.vars.frame28 = 93;
    this.vars.xSpeed25 = 0;
    this.vars.ySpeed25 = 0;
    this.vars.i27 = 1;
    this.vars.length25 = 13;
    this.vars.part25 = 0;
    this.vars.p58 = 3;
    this.vars.touching25 = 0;
    this.vars.h25 = 3;
    this.vars.hx25 = 15;
    this.vars.hy25 = 0;
    this.vars.hxSize25 = 0;
    this.vars.hySize25 = 0;
    this.vars.health25 = 100;
    this.vars.hDamage25 = 0;
    this.vars.p13 = 0;
    this.vars.state3 = 0;
    this.vars.x12 = 0;
    this.vars.y12 = 0;
    this.vars.direction5 = 0;
    this.vars.frame6 = 0;
    this.vars.xSpeed3 = 0;
    this.vars.ySpeed3 = 0;
    this.vars.i3 = 0;
    this.vars.length3 = 0;
    this.vars.part3 = 0;
    this.vars.p14 = 0;
    this.vars.touching3 = 0;
    this.vars.h3 = 0;
    this.vars.hx3 = 0;
    this.vars.hy3 = 0;
    this.vars.hxSize3 = 0;
    this.vars.hySize3 = 0;
    this.vars.health3 = 0;
    this.vars.hDamage3 = 0;
    this.vars.impact18 = 0;
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
    this.vars.inputs25 = [false, false, false, false, false, false];
    this.vars.hurtboxY25 = [11.5, 3.5, -8.5];
    this.vars.hurtboxYSize25 = [7, 9, 15];
    this.vars.hurtboxXSize25 = [5, 10, 12];
    this.vars.inputs3 = [];
    this.vars.hurtboxY3 = [];
    this.vars.hurtboxYSize3 = [];
    this.vars.hurtboxXSize3 = [];
    this.vars.inputs26 = [];
    this.vars.hurtboxY26 = [];
    this.vars.hurtboxYSize26 = [];
    this.vars.hurtboxXSize26 = [];
    this.vars.inputNames12 = [];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *clone() {
    this.visible = false;
    this.vars.p57 = 1;
    for (let i = 0; i < this.stage.vars.OfPlayers; i++) {
      if (
        this.compare(
          this.stage.vars.playerCharacter[this.vars.p57 - 1],
          "Green"
        ) === 0
      ) {
        this.createClone();
      }
      this.vars.p57 += 1;
    }
  }

  *startAsClone() {
    this.visible = true;
    this.effects.color = this.stage.vars.playerColor[this.vars.p57 - 1];
    this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
    while (true) {
      if (this.compare(this.stage.vars.pauseMenu, 0) === 0) {
        this.goto(
          (this.stage.vars.playerX[this.vars.p57 - 1] +
            this.stage.vars.rumbleX -
            this.stage.vars.scrollX) *
            4,
          (this.stage.vars.playerY[this.vars.p57 - 1] +
            this.stage.vars.rumbleY) *
            4 -
            20
        );
        this.direction = this.stage.vars.playerDirection[this.vars.p57 - 1];
        yield* this.costumes2(
          this.stage.vars.playerState[this.vars.p57 - 1],
          this.stage.vars.playerFrame[this.vars.p57 - 1]
        );
        if (this.compare(this.vars.h25, 1) === 0) {
          this.effects.color =
            this.stage.vars.playerColor[this.vars.p57 - 1] +
            (this.stage.vars.gameframe % 8) * 3;
          this.effects.brightness = ((this.stage.vars.gameframe % 8) - 3) * 4;
          if (
            this.compare(this.stage.vars.playerState[this.vars.p57 - 1], 13) ===
            0
          ) {
            this.stage.vars.hitboxXKnockback.splice(this.vars.p57 - 1, 1, 0.5);
            this.stage.vars.hitboxYKnockback.splice(this.vars.p57 - 1, 1, 6);
            if (
              this.compare(this.stage.vars.playerFrame[this.vars.p57 - 1], 8) >
              0
            ) {
              this.stage.vars.playerFrame.splice(this.vars.p57 - 1, 1, 4);
              this.stage.vars.playerState.splice(this.vars.p57 - 1, 1, 20);
            }
          }
          if (
            this.compare(this.stage.vars.playerState[this.vars.p57 - 1], 25) ===
            0
          ) {
            if (
              this.compare(this.stage.vars.playerFrame[this.vars.p57 - 1], 10) >
              0
            ) {
              this.stage.vars.playerState.splice(this.vars.p57 - 1, 1, 2);
            }
          }
          if (
            this.compare(this.stage.vars.playerState[this.vars.p57 - 1], 11) ===
            0
          ) {
            this.stage.vars.playerState.splice(this.vars.p57 - 1, 1, 25);
            this.stage.vars.playerFrame.splice(this.vars.p57 - 1, 1, 8);
          }
          if (
            this.compare(this.stage.vars.playerState[this.vars.p57 - 1], 12) ===
            0
          ) {
            this.stage.vars.playerState.splice(this.vars.p57 - 1, 1, 26);
            this.stage.vars.playerFrame.splice(this.vars.p57 - 1, 1, 36);
          }
          if (
            this.compare(this.stage.vars.playerState[this.vars.p57 - 1], 26) ===
            0
          ) {
            if (
              this.compare(this.stage.vars.playerFrame[this.vars.p57 - 1], 44) >
              0
            ) {
              this.stage.vars.playerState.splice(this.vars.p57 - 1, 1, 0);
            }
          }
          if (
            this.compare(this.stage.vars.playerState[this.vars.p57 - 1], 5) ===
            0
          ) {
            if (this.compare(this.vars.i27, 2) === 0) {
              if (
                this.compare(
                  this.stage.vars.playerFrame[this.vars.p57 - 1],
                  9
                ) > 0
              ) {
                this.stage.vars.playerState.splice(this.vars.p57 - 1, 1, 0);
                this.vars.i27 = 0;
              }
            } else {
              this.stage.vars.playerState.splice(this.vars.p57 - 1, 1, 14);
              this.stage.vars.playerFrame.splice(this.vars.p57 - 1, 1, 9);
              this.vars.i27 = 1;
            }
          }
          if (
            this.compare(this.stage.vars.playerState[this.vars.p57 - 1], 14) ===
            0
          ) {
            if (this.compare(this.vars.i27, 1) === 0) {
              this.stage.vars.hitboxHitstun.splice(this.vars.p57 - 1, 1, 6);
              this.stage.vars.hitboxYKnockback.splice(this.vars.p57 - 1, 1, 3);
              if (
                this.compare(
                  this.stage.vars.playerFrame[this.vars.p57 - 1],
                  12
                ) > 0
              ) {
                this.stage.vars.playerState.splice(this.vars.p57 - 1, 1, 5);
                this.stage.vars.playerFrame.splice(this.vars.p57 - 1, 1, 2);
                this.vars.i27 = 2;
              }
            }
          }
          if (
            this.compare(this.stage.vars.playerState[this.vars.p57 - 1], 22) ===
            0
          ) {
            if (
              this.compare(this.stage.vars.playerFrame[this.vars.p57 - 1], 16) >
              0
            ) {
              this.stage.vars.playerFrame.splice(this.vars.p57 - 1, 1, 12);
              this.stage.vars.playerState.splice(this.vars.p57 - 1, 1, 20);
              this.stage.vars.playerX.splice(
                this.vars.p57 - 1,
                1,
                this.stage.vars.playerX[this.vars.p57 - 1] +
                  this.stage.vars.playerDirection[this.vars.p57 - 1] * 20
              );
              this.stage.vars.playerDirection.splice(
                this.vars.p57 - 1,
                1,
                this.stage.vars.playerDirection[this.vars.p57 - 1] * -1
              );
            }
          }
          if (
            this.compare(this.stage.vars.playerState[this.vars.p57 - 1], 18) ===
            0
          ) {
            this.stage.vars.hitboxXKnockback.splice(this.vars.p57 - 1, 1, 3);
            if (
              this.compare(this.stage.vars.playerFrame[this.vars.p57 - 1], 1) >
              0
            ) {
              this.stage.vars.playerXSpeed.splice(
                this.vars.p57 - 1,
                1,
                this.stage.vars.playerDirection[this.vars.p57 - 1] * 2
              );
            }
          }
          this.stage.vars.playerEx.splice(this.vars.p57 - 1, 1, 3);
        }
      }
      yield;
    }
  }

  *costumes2(s2, f) {
    this.effects.brightness = 0;
    if (this.compare(s2, 0) === 0) {
      this.costume = (Math.floor(f / 2) % 6) + 1;
    } else {
      if (this.compare(s2, 1) === 0) {
        this.costume = (Math.floor(f / 2) % 6) + 7;
      } else {
        if (this.compare(s2, 1.1) === 0 || this.compare(s2, 1.2) === 0) {
          if (this.compare(Math.round((f / 2) % 8) + 1, 4) === 0) {
            this.costume = "Run_6";
          } else {
            this.costume = "" + "Run_" + (Math.round((f / 2) % 4) + 1);
          }
        } else {
          if (this.compare(s2, 1.3) === 0) {
            this.costume = "Backdash";
          } else {
            if (this.compare(s2, 2) === 0) {
              if (
                this.compare(
                  this.stage.vars.playerYSpeed[this.vars.p57 - 1],
                  -1
                ) > 0
              ) {
                this.costume = "midair";
              } else {
                this.costume = "midair2";
              }
            } else {
              if (this.compare(s2, 2.1) === 0) {
                if (
                  this.compare(
                    this.stage.vars.playerYSpeed[this.vars.p57 - 1],
                    -1
                  ) > 0
                ) {
                  this.costume = "midair";
                } else {
                  this.costume = "lowpunch8";
                }
              } else {
                if (this.compare(s2, 3) === 0) {
                  this.costume = "crouch";
                } else {
                  if (this.compare(s2, 4) === 0) {
                    if (this.compare(f, 2) < 0) {
                      this.costume = "punch1";
                    } else {
                      if (this.compare(f, 3) < 0) {
                        this.costume = "punch2";
                      } else {
                        if (this.compare(f, 4) < 0) {
                          this.costume = "punch3";
                        } else {
                          if (this.compare(f, 6) < 0) {
                            this.costume = "punch4";
                          } else {
                            if (this.compare(f, 7) < 0) {
                              this.costume = "punch5";
                            } else {
                              this.costume = "punch6";
                            }
                          }
                        }
                      }
                    }
                  } else {
                    if (this.compare(s2, 5) === 0) {
                      if (this.compare(f, 3) < 0) {
                        this.costume = "high kick1";
                        if (
                          this.compare(this.sprites["Logic"].vars.impact19, 0) <
                          0
                        ) {
                          this.stage.vars.playerX.splice(
                            this.vars.p57 - 1,
                            1,
                            this.stage.vars.playerX[this.vars.p57 - 1] +
                              this.stage.vars.playerDirection[
                                this.vars.p57 - 1
                              ] *
                                3
                          );
                        }
                      } else {
                        if (this.compare(f, 4) < 0) {
                          this.costume = "high kick2";
                          if (
                            this.compare(
                              this.sprites["Logic"].vars.impact19,
                              0
                            ) < 0
                          ) {
                            this.stage.vars.playerX.splice(
                              this.vars.p57 - 1,
                              1,
                              this.stage.vars.playerX[this.vars.p57 - 1] +
                                this.stage.vars.playerDirection[
                                  this.vars.p57 - 1
                                ] *
                                  3
                            );
                          }
                        } else {
                          if (this.compare(f, 6) < 0) {
                            this.costume = "high kick4";
                          } else {
                            if (this.compare(f, 8) < 0) {
                              this.costume = "high kick3";
                            } else {
                              if (this.compare(f, 10) < 0) {
                                this.costume = "high kick5";
                              } else {
                                this.costume = "high kick6";
                                this.stage.vars.playerFrame.splice(
                                  this.vars.p57 - 1,
                                  1,
                                  19
                                );
                              }
                            }
                          }
                        }
                      }
                    } else {
                      if (this.compare(s2, 6) === 0) {
                        this.costume = "land";
                      } else {
                        if (this.compare(s2, 7) === 0) {
                          if (this.compare(f, 7) < 0) {
                            this.costume = "hurt head";
                          } else {
                            this.costume = "hurt head2";
                          }
                        } else {
                          if (this.compare(s2, 8) === 0) {
                            if (this.compare(f, 5) < 0) {
                              this.costume = "hurt torso";
                            } else {
                              this.costume = "hurt torso2";
                            }
                          } else {
                            if (this.compare(s2, 9) === 0) {
                              if (this.compare(f, 4) < 0) {
                                this.costume = "block head";
                              } else {
                                this.costume = "block head2";
                              }
                            } else {
                              if (this.compare(s2, 10) === 0) {
                                if (this.compare(f, 3) < 0) {
                                  this.costume = "block torso";
                                } else {
                                  this.costume = "block torso2";
                                }
                              } else {
                                if (this.compare(s2, 11) === 0) {
                                  if (this.compare(f, 4) < 0) {
                                    this.costume = "air punch";
                                  } else {
                                    if (this.compare(f, 5) < 0) {
                                      this.costume = "air punch2";
                                    } else {
                                      if (this.compare(f, 8) < 0) {
                                        this.costume = "air punch3";
                                      } else {
                                        this.costume = "air punch4";
                                      }
                                    }
                                  }
                                } else {
                                  if (this.compare(s2, 12) === 0) {
                                    if (this.compare(f, 2) < 0) {
                                      this.costume = "air kick";
                                    } else {
                                      if (this.compare(f, 3) < 0) {
                                        this.costume = "air kick2";
                                      } else {
                                        if (this.compare(f, 4) < 0) {
                                          this.costume = "air kick3";
                                        } else {
                                          if (this.compare(f, 6) < 0) {
                                            this.costume = "air kick4";
                                          } else {
                                            if (this.compare(f, 7) < 0) {
                                              this.costume = "air kick5";
                                            } else {
                                              if (this.compare(f, 9) < 0) {
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
                                    if (this.compare(s2, 13) === 0) {
                                      if (this.compare(f, 2) < 0) {
                                        this.costume = "lowpunch";
                                      } else {
                                        if (this.compare(f, 4) < 0) {
                                          this.costume = "lowpunch4";
                                        } else {
                                          if (this.compare(f, 5) < 0) {
                                            this.costume = "lowpunch5";
                                          } else {
                                            if (this.compare(f, 7) < 0) {
                                              this.costume = "lowpunch6";
                                              if (
                                                this.compare(
                                                  this.sprites["Logic"].vars
                                                    .impact19,
                                                  0
                                                ) < 0
                                              ) {
                                                this.stage.vars.playerX.splice(
                                                  this.vars.p57 - 1,
                                                  1,
                                                  this.stage.vars.playerX[
                                                    this.vars.p57 - 1
                                                  ] +
                                                    this.stage.vars
                                                      .playerDirection[
                                                      this.vars.p57 - 1
                                                    ] *
                                                      2
                                                );
                                              }
                                            } else {
                                              if (this.compare(f, 11) < 0) {
                                                this.costume = "lowpunch2";
                                                if (
                                                  this.compare(
                                                    this.sprites["Logic"].vars
                                                      .impact19,
                                                    0
                                                  ) < 0
                                                ) {
                                                  this.stage.vars.playerX.splice(
                                                    this.vars.p57 - 1,
                                                    1,
                                                    this.stage.vars.playerX[
                                                      this.vars.p57 - 1
                                                    ] +
                                                      this.stage.vars
                                                        .playerDirection[
                                                        this.vars.p57 - 1
                                                      ] *
                                                        1
                                                  );
                                                }
                                              } else {
                                                if (this.compare(f, 14) < 0) {
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
                                      if (this.compare(s2, 14) === 0) {
                                        if (this.compare(f, 2) < 0) {
                                          this.costume = "low kick";
                                        } else {
                                          if (this.compare(f, 3) < 0) {
                                            this.costume = "low kick2";
                                          } else {
                                            if (this.compare(f, 5) < 0) {
                                              this.costume = "low kick3";
                                            } else {
                                              if (this.compare(f, 7) < 0) {
                                                this.costume = "low kick4";
                                              } else {
                                                if (this.compare(f, 9) < 0) {
                                                  this.costume = "low kick5";
                                                } else {
                                                  if (this.compare(f, 11) < 0) {
                                                    this.costume = "low kick6";
                                                  } else {
                                                    if (
                                                      this.compare(f, 13) < 0
                                                    ) {
                                                      this.costume =
                                                        "low kick7";
                                                    } else {
                                                      if (
                                                        this.compare(f, 15) < 0
                                                      ) {
                                                        this.costume =
                                                          "low kick8";
                                                      } else {
                                                        if (
                                                          this.compare(f, 17) <
                                                          0
                                                        ) {
                                                          this.costume =
                                                            "low kick9";
                                                        } else {
                                                          this.costume =
                                                            "low kick10";
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
                                        if (this.compare(s2, 15) === 0) {
                                          if (this.compare(f, 8) < 0) {
                                            this.costume = "hurt air";
                                          } else {
                                            this.costume = "hurt air2";
                                          }
                                        } else {
                                          if (this.compare(s2, 16) === 0) {
                                            this.costume = "hadouken";
                                          } else {
                                            if (this.compare(s2, 17) === 0) {
                                              this.costume = "parry";
                                              this.effects.brightness =
                                                (this.stage.vars.gameframe %
                                                  3) *
                                                50;
                                            } else {
                                              if (this.compare(s2, 18) === 0) {
                                                if (this.compare(f, 2) < 0) {
                                                  this.costume = "low punch";
                                                } else {
                                                  if (this.compare(f, 3) < 0) {
                                                    this.costume = "low punch2";
                                                  } else {
                                                    if (
                                                      this.compare(f, 5) < 0
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
                                                  this.compare(s2, 19) === 0
                                                ) {
                                                  if (this.compare(f, 5) < 0) {
                                                    this.costume = "hurt torso";
                                                  } else {
                                                    this.costume = "wallbounce";
                                                  }
                                                } else {
                                                  if (
                                                    this.compare(s2, 20) === 0
                                                  ) {
                                                    if (
                                                      this.compare(f, 1) === 0
                                                    ) {
                                                      if (
                                                        this.compare(
                                                          this.stage.vars
                                                            .playerEx[
                                                            this.vars.p57 - 1
                                                          ],
                                                          0.45
                                                        ) > 0
                                                      ) {
                                                        this.stage.vars.playerEx.splice(
                                                          this.vars.p57 - 1,
                                                          1,
                                                          this.stage.vars
                                                            .playerEx[
                                                            this.vars.p57 - 1
                                                          ] - 0.5
                                                        );
                                                      } else {
                                                        this.stage.vars.playerXSpeed.splice(
                                                          this.vars.p57 - 1,
                                                          1,
                                                          this.stage.vars
                                                            .playerDirection[
                                                            this.vars.p57 - 1
                                                          ] * -4
                                                        );
                                                        this.stage.vars.playerState.splice(
                                                          this.vars.p57 - 1,
                                                          1,
                                                          12
                                                        );
                                                        this.stage.vars.playerYSpeed.splice(
                                                          this.vars.p57 - 1,
                                                          1,
                                                          3
                                                        );
                                                        this.stage.vars.playerFrame.splice(
                                                          this.vars.p57 - 1,
                                                          1,
                                                          -2
                                                        );
                                                      }
                                                    }
                                                    if (
                                                      this.compare(f, 3) < 0
                                                    ) {
                                                      this.costume =
                                                        "Plant Plummet";
                                                    } else {
                                                      if (
                                                        this.compare(f, 5) < 0
                                                      ) {
                                                        this.costume =
                                                          "Plant Plummet2";
                                                      } else {
                                                        if (
                                                          this.compare(f, 6) < 0
                                                        ) {
                                                          this.costume =
                                                            "Plant Plummet3";
                                                          this.stage.vars.playerYSpeed.splice(
                                                            this.vars.p57 - 1,
                                                            1,
                                                            5
                                                          );
                                                          this.stage.vars.playerXSpeed.splice(
                                                            this.vars.p57 - 1,
                                                            1,
                                                            this.stage.vars
                                                              .playerDirection[
                                                              this.vars.p57 - 1
                                                            ] * 4
                                                          );
                                                        } else {
                                                          if (
                                                            this.compare(
                                                              f,
                                                              12
                                                            ) < 0
                                                          ) {
                                                            this.costume =
                                                              "" +
                                                              "Plant Plummet" +
                                                              (Math.round(
                                                                f / 2
                                                              ) -
                                                                -1);
                                                          } else {
                                                            if (
                                                              this.compare(
                                                                f,
                                                                16
                                                              ) < 0
                                                            ) {
                                                              this.costume =
                                                                "Plant Plummet8";
                                                            } else {
                                                              if (
                                                                this.compare(
                                                                  f,
                                                                  18
                                                                ) < 0
                                                              ) {
                                                                this.costume =
                                                                  "Plant Plummet9";
                                                                this.stage.vars.playerXSpeed.splice(
                                                                  this.vars
                                                                    .p57 - 1,
                                                                  1,
                                                                  this.stage
                                                                    .vars
                                                                    .playerDirection[
                                                                    this.vars
                                                                      .p57 - 1
                                                                  ] * 4
                                                                );
                                                              } else {
                                                                if (
                                                                  this.compare(
                                                                    f,
                                                                    27
                                                                  ) < 0
                                                                ) {
                                                                  this.costume =
                                                                    "Plant Plummet10";
                                                                } else {
                                                                  this.costume =
                                                                    "Plant Plummet10";
                                                                  this.stage.vars.playerState.splice(
                                                                    this.vars
                                                                      .p57 - 1,
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
                                                      this.compare(s2, 21) === 0
                                                    ) {
                                                      this.stage.vars.hitboxDamage.splice(
                                                        this.vars.p57 - 1,
                                                        1,
                                                        2
                                                      );
                                                      this.stage.vars.hitboxHitstun.splice(
                                                        this.vars.p57 - 1,
                                                        1,
                                                        16
                                                      );
                                                      if (
                                                        this.compare(f, 3) < 0
                                                      ) {
                                                        this.costume = "Grab1";
                                                      } else {
                                                        if (
                                                          this.compare(f, 5) < 0
                                                        ) {
                                                          this.costume =
                                                            "Grab2";
                                                        } else {
                                                          if (
                                                            this.compare(f, 6) <
                                                            0
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
                                                                      .p57 - 1
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
                                                                this.vars.p57 -
                                                                  1,
                                                                1,
                                                                12
                                                              );
                                                              this.stage.vars.playerState.splice(
                                                                this.vars.p57 -
                                                                  1,
                                                                1,
                                                                22
                                                              );
                                                            }
                                                            if (
                                                              this.compare(
                                                                f,
                                                                10
                                                              ) < 0
                                                            ) {
                                                              this.costume =
                                                                "Grab4";
                                                            } else {
                                                              this.costume =
                                                                "Grab5";
                                                              this.stage.vars.playerFrame.splice(
                                                                this.vars.p57 -
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
                                                        this.compare(s2, 22) ===
                                                        0
                                                      ) {
                                                        if (
                                                          this.compare(f, 12) <
                                                          0
                                                        ) {
                                                          this.costume =
                                                            "Throw";
                                                        } else {
                                                          if (
                                                            this.compare(
                                                              f,
                                                              23
                                                            ) < 0
                                                          ) {
                                                            this.costume =
                                                              "" +
                                                              "Throw" +
                                                              (Math.round(
                                                                f / 3
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
                                                                this.vars.p57 -
                                                                  1
                                                              ] * -0.5
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
                                                                f,
                                                                25
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
                                                                3
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
                                                                    .p57 - 1
                                                                ] * -10
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
                                                                ] - 4
                                                              );
                                                            } else {
                                                              if (
                                                                this.compare(
                                                                  f,
                                                                  28
                                                                ) < 0
                                                              ) {
                                                                this.costume =
                                                                  "Throw6";
                                                              } else {
                                                                if (
                                                                  this.compare(
                                                                    f,
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
                                                                      .p57 - 1,
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
                                                            s2,
                                                            24
                                                          ) === 0
                                                        ) {
                                                          if (
                                                            this.compare(f, 4) <
                                                            0
                                                          ) {
                                                            this.costume =
                                                              "Die";
                                                          } else {
                                                            if (
                                                              this.compare(
                                                                f,
                                                                7
                                                              ) < 0
                                                            ) {
                                                              this.costume =
                                                                "Die2";
                                                            } else {
                                                              if (
                                                                this.compare(
                                                                  f,
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
                                                              s2,
                                                              25
                                                            ) === 0
                                                          ) {
                                                            if (
                                                              this.compare(
                                                                f,
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
                                                                s2,
                                                                26
                                                              ) === 0
                                                            ) {
                                                              if (
                                                                this.compare(
                                                                  f,
                                                                  11
                                                                ) < 0
                                                              ) {
                                                                this.stage.vars.playerFrame.splice(
                                                                  this.vars
                                                                    .p57 - 1,
                                                                  1,
                                                                  11
                                                                );
                                                              } else {
                                                                if (
                                                                  this.compare(
                                                                    f,
                                                                    13
                                                                  ) < 0
                                                                ) {
                                                                  this.costume =
                                                                    "Leaf Leap";
                                                                } else {
                                                                  if (
                                                                    this.compare(
                                                                      f,
                                                                      16
                                                                    ) < 0
                                                                  ) {
                                                                    this.costume =
                                                                      "Leaf Leap2";
                                                                  } else {
                                                                    if (
                                                                      this.compare(
                                                                        f,
                                                                        40
                                                                      ) < 0
                                                                    ) {
                                                                      this.costume =
                                                                        "" +
                                                                        "Leaf Leap" +
                                                                        ((f %
                                                                          4) +
                                                                          3);
                                                                    } else {
                                                                      if (
                                                                        this.compare(
                                                                          f,
                                                                          42
                                                                        ) < 0
                                                                      ) {
                                                                        this.costume =
                                                                          "Leaf Leap7";
                                                                      } else {
                                                                        if (
                                                                          this.compare(
                                                                            f,
                                                                            44
                                                                          ) < 0
                                                                        ) {
                                                                          this.costume =
                                                                            "Leaf Leap8";
                                                                        } else {
                                                                          this.stage.vars.playerState.splice(
                                                                            this
                                                                              .vars
                                                                              .p57 -
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
                                                                  s2,
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
                                                                          .p57 -
                                                                          1
                                                                      ]
                                                                    ),
                                                                    Math.abs(
                                                                      this.stage
                                                                        .vars
                                                                        .playerXSpeed[
                                                                        this
                                                                          .vars
                                                                          .p57 -
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
                                                                          .p57 -
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
                                                                            .p57 -
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
                                                                            .p57 -
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
                                                                            .p57 -
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
                                                                    s2,
                                                                    4.1
                                                                  ) === 0
                                                                ) {
                                                                  if (
                                                                    this.compare(
                                                                      f,
                                                                      2
                                                                    ) < 0
                                                                  ) {
                                                                    this.costume =
                                                                      "auto";
                                                                  } else {
                                                                    if (
                                                                      this.compare(
                                                                        f,
                                                                        3
                                                                      ) < 0
                                                                    ) {
                                                                      this.costume =
                                                                        "auto2";
                                                                    } else {
                                                                      if (
                                                                        this.compare(
                                                                          f,
                                                                          5
                                                                        ) < 0
                                                                      ) {
                                                                        this.costume =
                                                                          "auto3";
                                                                      } else {
                                                                        if (
                                                                          this.compare(
                                                                            f,
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
                                                                      s2,
                                                                      27
                                                                    ) === 0
                                                                  ) {
                                                                    this.vars.h25 = 1;
                                                                    this.stage.vars.playerFrame.splice(
                                                                      this.vars
                                                                        .p57 -
                                                                        1,
                                                                      1,
                                                                      -8
                                                                    );
                                                                    this.stage.vars.playerState.splice(
                                                                      this.vars
                                                                        .p57 -
                                                                        1,
                                                                      1,
                                                                      6
                                                                    );
                                                                  } else {
                                                                    if (
                                                                      this.compare(
                                                                        s2,
                                                                        28
                                                                      ) === 0
                                                                    ) {
                                                                      this.costume =
                                                                        "block crouch";
                                                                    } else {
                                                                      if (
                                                                        this.compare(
                                                                          s2,
                                                                          23
                                                                        ) === 0
                                                                      ) {
                                                                        if (
                                                                          this.compare(
                                                                            f,
                                                                            17
                                                                          ) < 0
                                                                        ) {
                                                                          this.costume =
                                                                            "" +
                                                                            "Vine Whip" +
                                                                            f;
                                                                        } else {
                                                                          if (
                                                                            this.compare(
                                                                              f,
                                                                              21
                                                                            ) <
                                                                            0
                                                                          ) {
                                                                            this.costume =
                                                                              "Vine Whip17";
                                                                          } else {
                                                                            if (
                                                                              this.compare(
                                                                                f,
                                                                                31
                                                                              ) <
                                                                              0
                                                                            ) {
                                                                              this.costume =
                                                                                "" +
                                                                                "Vine Whip" +
                                                                                (Math.floor(
                                                                                  f /
                                                                                    2
                                                                                ) +
                                                                                  9);
                                                                            } else {
                                                                              if (
                                                                                this.compare(
                                                                                  f,
                                                                                  35
                                                                                ) <
                                                                                0
                                                                              ) {
                                                                                this.costume =
                                                                                  "" +
                                                                                  "Vine Whip" +
                                                                                  ((Math.floor(
                                                                                    f /
                                                                                      2 +
                                                                                      1
                                                                                  ) %
                                                                                    4) +
                                                                                    22);
                                                                              } else {
                                                                                if (
                                                                                  this.compare(
                                                                                    f,
                                                                                    47
                                                                                  ) <
                                                                                  0
                                                                                ) {
                                                                                  this.costume =
                                                                                    "" +
                                                                                    "Vine Whip" +
                                                                                    ((f %
                                                                                      4) +
                                                                                      22);
                                                                                } else {
                                                                                  if (
                                                                                    this.compare(
                                                                                      f,
                                                                                      63
                                                                                    ) <
                                                                                    0
                                                                                  ) {
                                                                                    this.costume =
                                                                                      "" +
                                                                                      "Vine Whip" +
                                                                                      Math.floor(
                                                                                        f /
                                                                                          2 +
                                                                                          1
                                                                                      );
                                                                                  } else {
                                                                                    this.stage.vars.playerState.splice(
                                                                                      this
                                                                                        .vars
                                                                                        .p57 -
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

  *collision() {}

  *whenIReceiveGame() {
    if (this.compare("", "") === 0) {
      this.deleteThisClone();
    }
    yield* this.clone();
  }
}
