import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@1.4.1/dist/index.esm.js";

export default class Cyan extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("idle", "7d166cdbb79ae98978af56e6da101d13.svg", {
        x: 25.564755132272353,
        y: 63.37373162684584
      }),
      new Costume("idle2", "27af280348a5de0bbecc54258195748d.svg", {
        x: 25.564755132272353,
        y: 65.60520934003594
      }),
      new Costume("idle3", "57ef1989ce2c8d0adcd80ea756e772f8.svg", {
        x: 25.564755132272353,
        y: 69.08334525740611
      }),
      new Costume("idle4", "7a31c9b4c58fd3de68c2b8b91a9e5f30.svg", {
        x: 25.564755132272353,
        y: 69.82985544174065
      }),
      new Costume("idle5", "a568e5ea66c148acbf7988a0cb684271.svg", {
        x: 25.564755132272353,
        y: 68.47239304293805
      }),
      new Costume("idle6", "f063da429ba662d6f6f39966bc929728.svg", {
        x: 25.564755132272353,
        y: 65.34186432629218
      }),
      new Costume("WalkFront", "8f8401ac0af8e9542c5061459889543a.svg", {
        x: 34.61642893790116,
        y: 70.26991621184558
      }),
      new Costume("WalkFront2", "9950d2d54e0f53c34a5cc47212cf3486.svg", {
        x: 35.06300604784329,
        y: 64.87372138792091
      }),
      new Costume("WalkFront3", "585a16c5cb59093d50068d1fedbb8339.svg", {
        x: 33.363564999999966,
        y: 57.10652367435114
      }),
      new Costume("WalkFront4", "00ee5fdabeef693b1499885c136c9a8b.svg", {
        x: 27.652013338520845,
        y: 56.1065215658015
      }),
      new Costume("WalkFront5", "98f3658b741a89a2f28eda18c01f08db.svg", {
        x: 27.40200999999999,
        y: 57.35652524015265
      }),
      new Costume("WalkFront6", "6723e3c0c590ecfa0421f0376d739cf7.svg", {
        x: 29.780516995811695,
        y: 71.5199119829626
      }),
      new Costume("crouch2", "c3a98378ff2c985b086fef28609b0247.svg", {
        x: 22.807760000000002,
        y: 58.42901223351849
      }),
      new Costume("crouch", "cf656ee06cb0b30e5dedeb9c52537402.svg", {
        x: 22.807760000000002,
        y: 29.310572465829267
      }),
      new Costume("midair", "cdab1b7720c3aa48ddd18d223d1b6ff9.svg", {
        x: 30.148202618419703,
        y: 69.12372662684584
      }),
      new Costume("midair2", "e5d2df28861f43911fd328f1df7f665d.svg", {
        x: 30.648202618419674,
        y: 75.12372662684584
      }),
      new Costume("land", "eedd8cafff302e431a880b4e339e0f16.svg", {
        x: 22.807760000000002,
        y: 58.42901162684585
      }),
      new Costume("punch1", "a46514f55fab6b120008f00fec775cab.svg", {
        x: 25.56475499999999,
        y: 59.37372662684584
      }),
      new Costume("punch2", "b3b0004221abfa3963008bc1be6946d3.svg", {
        x: 28.148615000000007,
        y: 30.75042617106004
      }),
      new Costume("punch3", "a297ab9e4817a014ab6490486921257d.svg", {
        x: 31.051281197782174,
        y: 33.22426641318731
      }),
      new Costume("punch4", "9764bf3915d13359b73a799aaf9941c4.svg", {
        x: 31.05127999999999,
        y: 33.224265224039385
      }),
      new Costume("punch5", "54f9653b0c8af21a20e09226273f67d3.svg", {
        x: 26.314750000000004,
        y: 52.92884186377768
      }),
      new Costume("punch6", "02b8ca72834d3506bb2f99ddaa74c7b7.svg", {
        x: 25.56475499999999,
        y: 64.37372662684584
      }),
      new Costume("auto", "b4cafb4798f4d41f77dc5e5960906470.svg", {
        x: 113.55092469800178,
        y: 65.12371988053751
      }),
      new Costume("auto2", "603d1dff567becc0d72e15abb81f18f0.svg", {
        x: 42.758367888305656,
        y: 36.75043234212012
      }),
      new Costume("auto3", "7b488961d24c35ac84fe056dd30a1df8.svg", {
        x: 26.763024257492305,
        y: 36.23362906698608
      }),
      new Costume("auto4", "6434ab1e2945d9a6a02e0b4290460a49.svg", {
        x: 51.51302283832817,
        y: 36.73343252161766
      }),
      new Costume("auto5", "a401a73c1412184068a05021788725a8.svg", {
        x: 45.800924698001864,
        y: 64.12372988053751
      }),
      new Costume("Heavy Swing1", "c55861123e6e75f63bf4a35ab80bd407.svg", {
        x: 80.74718423743269,
        y: 41.75042659871016
      }),
      new Costume("Heavy Swing2", "4ec1920e2d2f9d5aa4da019b4aa03c43.svg", {
        x: 133.68842334769167,
        y: 36.84300397298833
      }),
      new Costume("Heavy Swing3", "3e708fc700297cd5919a5df5dfd04197.svg", {
        x: 131.67964998032022,
        y: 40.606377814052365
      }),
      new Costume("Heavy Swing4", "d7ca7a37fe7ec0bc39d4af57e773594d.svg", {
        x: 37.981667738577215,
        y: 76.90081796162877
      }),
      new Costume("Heavy Swing5", "1479e9f03310edce8bfa496f22c92395.svg", {
        x: 25.564747005139765,
        y: 87.25232651422854
      }),
      new Costume("Heavy Swing6", "065e766bfb0a561d664d032639ea2393.svg", {
        x: 25.564744999999988,
        y: 78.63343291505286
      }),
      new Costume("Heavy Swing7", "9c95b6dc030244ed52a7c0cbadd8e1e1.svg", {
        x: 25.564734999999985,
        y: 66.38756148842407
      }),
      new Costume("Heavy Swing8", "3f06fb10434fdbf144d5502815130f89.svg", {
        x: 25.564744999999988,
        y: 63.838865851408286
      }),
      new Costume("hurt head", "68ad5d573b2fbba62b6c615857ddf242.svg", {
        x: 46.05773732961339,
        y: 49.9153051444321
      }),
      new Costume("hurt head2", "15b0ac545655879d012fa1bef4ff8713.svg", {
        x: 29.360011742876225,
        y: 51.767680538023995
      }),
      new Costume("hurt torso", "85c46b40191d88c6a18889a021fead3d.svg", {
        x: 24.59679,
        y: 65.53624459943404
      }),
      new Costume("hurt torso2", "ab9f0071ed35dcfc00ac821436523e35.svg", {
        x: 25.56472499999998,
        y: 63.854286056847386
      }),
      new Costume("block torso", "4920a505a43cdc85223a300ff36634c9.svg", {
        x: 34.25915460490367,
        y: 44.625458948918975
      }),
      new Costume("block torso2", "6e55a133d3545de35677c665d368c9fd.svg", {
        x: 66.526786082477,
        y: 104.06682500193008
      }),
      new Costume("block torso3", "a718493d7c094048c4a2d65ae493dd22.svg", {
        x: 25.56475499999999,
        y: 89.0679487102376
      }),
      new Costume("block head", "8ae47aedb9d85a146f284b93d7679053.svg", {
        x: 41.48853490408439,
        y: 56.33292142078167
      }),
      new Costume("block head2", "87601344363b8765ee5b6c9f1d5027d6.svg", {
        x: 64.46031841499604,
        y: 119.90968827382744
      }),
      new Costume("block crouch", "81759c8717854fb2dba9247eba7d957b.svg", {
        x: 32.23545761841973,
        y: 78.08852884756129
      }),
      new Costume("air punch", "4ae720c81ff2b4133b33882ba349e8ee.svg", {
        x: 63.0175368687043,
        y: 48.083756418863345
      }),
      new Costume("air punch2", "69bf2f12fbe334ebe5b7a43f24bc71a7.svg", {
        x: 44.32977779454973,
        y: 46.93571345170645
      }),
      new Costume("air punch3", "e5749a000f5e357555868b4aad3a9bdd.svg", {
        x: 46.39624100274443,
        y: 46.93571617106005
      }),
      new Costume("air punch4", "0c103e70dbde44e5e8fefb52fc27f4a2.svg", {
        x: 33.88215189864712,
        y: 48.980023117304455
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
      new Costume("lowpunch", "92e2f510eec1fcf0160fb51f169db0ad.svg", {
        x: 22.807760000000002,
        y: 43.24917467158156
      }),
      new Costume("lowpunch4", "37e33dcd7c874152d5c43db28b3440f8.svg", {
        x: 147.19887898298234,
        y: 159.60948822295163
      }),
      new Costume("lowpunch5", "fc8e35c6e8368124a98953c33ddc2891.svg", {
        x: 184.12050883821453,
        y: 115.3224696389976
      }),
      new Costume("lowpunch6", "9977d3680dbf4dd03634a072fd971488.svg", {
        x: 77.0011287976968,
        y: 93.87453969193697
      }),
      new Costume("lowpunch2", "e897a6179c2ae43a3e3e581d1d3331f0.svg", {
        x: 85.3148613987683,
        y: 50.58380298391265
      }),
      new Costume("lowpunch7", "f2e4d76895f22b4a50aa5b447aa322a8.svg", {
        x: 77.81220113340333,
        y: 50.30263741370831
      }),
      new Costume("lowpunch8", "3d24c98df978c691c56861b556212858.svg", {
        x: 59.71283676087421,
        y: 42.989642059690254
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
      new Costume("Die4", "b0e23ed70605012df3895c427460624d.svg", {
        x: 39.675146132051,
        y: -6.5463909665196525
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
      new Costume("Vine Whip", "46161510963b89df5687b9d824b2463b.svg", {
        x: 27.85764499999999,
        y: 30.744787850557827
      }),
      new Costume("Vine Whip2", "f2d4f4eee13eef6dd4528592c7f43036.svg", {
        x: 65.69712325424052,
        y: 30.74478570111566
      }),
      new Costume("Vine Whip3", "eda7ab5df62ff7ac60d97b9e76da08e3.svg", {
        x: 71.43486839087532,
        y: 30.80171707878381
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
      new Costume("Vine Whip16", "b5ff0ccdd4cfb9ddb3d9ddf121c49f80.svg", {
        x: 36.85762,
        y: 40.64789367847064
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
      new Costume("Run_1", "13d7fda836409316525ab96a420eeecd.svg", {
        x: 60.94465861355266,
        y: 67.5165836502405
      }),
      new Costume("Run_2", "c5ff3276985b3d5f82dcadafeb71df87.svg", {
        x: 61.125373857496356,
        y: 70.01657488053753
      }),
      new Costume("Run_3", "bb825b9d927893b9fa6f743520f88329.svg", {
        x: 53.87145752681997,
        y: 72.1803964638644
      }),
      new Costume("Run_4", "c04123d4ea1ea502a7a089164e80b6d6.svg", {
        x: 39.15463158250989,
        y: 71.68039777622725
      }),
      new Costume("Run_5", "0b7458e1e619d827ccc72e933128db88.svg", {
        x: 40.65463158250995,
        y: 67.68039777622725
      }),
      new Costume("Backdash", "b33db6aa44b21d4823121b661b1197f3.svg", {
        x: 48.898202618419646,
        y: 40.75042808553002
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "game" }, this.whenIReceiveGame)
    ];

    this.vars.p51 = 3;
    this.vars.state22 = 0;
    this.vars.x31 = 15;
    this.vars.y31 = 0;
    this.vars.direction24 = -1;
    this.vars.frame25 = 93;
    this.vars.xSpeed22 = 0;
    this.vars.ySpeed22 = 0;
    this.vars.i22 = 1;
    this.vars.length22 = 13;
    this.vars.part22 = 0;
    this.vars.p52 = 3;
    this.vars.touching22 = 0;
    this.vars.h22 = 3;
    this.vars.hx22 = 15;
    this.vars.hy22 = 0;
    this.vars.hxSize22 = 0;
    this.vars.hySize22 = 0;
    this.vars.health22 = 100;
    this.vars.hDamage22 = 0;
    this.vars.p53 = 0;
    this.vars.state23 = 0;
    this.vars.x32 = 0;
    this.vars.y32 = 0;
    this.vars.direction25 = 0;
    this.vars.frame26 = 0;
    this.vars.xSpeed23 = 0;
    this.vars.ySpeed23 = 0;
    this.vars.i23 = 0;
    this.vars.length23 = 0;
    this.vars.part23 = 0;
    this.vars.p54 = 0;
    this.vars.touching23 = 0;
    this.vars.h23 = 0;
    this.vars.hx23 = 0;
    this.vars.hy23 = 0;
    this.vars.hxSize23 = 0;
    this.vars.hySize23 = 0;
    this.vars.health23 = 0;
    this.vars.hDamage23 = 0;
    this.vars.impact16 = 0;
    this.vars.p55 = 0;
    this.vars.state24 = 0;
    this.vars.x33 = 0;
    this.vars.y33 = 0;
    this.vars.direction26 = 0;
    this.vars.frame27 = 0;
    this.vars.xSpeed24 = 0;
    this.vars.ySpeed24 = 0;
    this.vars.i24 = 0;
    this.vars.length24 = 0;
    this.vars.part24 = 0;
    this.vars.p56 = 0;
    this.vars.touching24 = 0;
    this.vars.h24 = 0;
    this.vars.hx24 = 0;
    this.vars.hy24 = 0;
    this.vars.hxSize24 = 0;
    this.vars.hySize24 = 0;
    this.vars.health24 = 0;
    this.vars.hDamage24 = 0;
    this.vars.impact17 = 0;
    this.vars.commands10 = 0;
    this.vars.command10 = 0;
    this.vars.inputs22 = [false, false, false, false, false, false];
    this.vars.hurtboxY22 = [11.5, 3.5, -8.5];
    this.vars.hurtboxYSize22 = [7, 9, 15];
    this.vars.hurtboxXSize22 = [5, 10, 12];
    this.vars.inputs23 = [];
    this.vars.hurtboxY23 = [];
    this.vars.hurtboxYSize23 = [];
    this.vars.hurtboxXSize23 = [];
    this.vars.inputs24 = [];
    this.vars.hurtboxY24 = [];
    this.vars.hurtboxYSize24 = [];
    this.vars.hurtboxXSize24 = [];
    this.vars.inputNames10 = [];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *clone() {
    this.visible = false;
    this.vars.p51 = 1;
    for (let i = 0; i < this.stage.vars.OfPlayers; i++) {
      if (
        this.compare(
          this.stage.vars.playerCharacter[this.vars.p51 - 1],
          "Cyan"
        ) === 0
      ) {
        this.createClone();
      }
      this.vars.p51 += 1;
    }
  }

  *startAsClone() {
    this.visible = true;
    this.effects.color = this.stage.vars.playerColor[this.vars.p51 - 1];
    this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
    while (true) {
      if (this.compare(this.stage.vars.pauseMenu, 0) === 0) {
        this.goto(
          (this.stage.vars.playerX[this.vars.p51 - 1] +
            this.stage.vars.rumbleX -
            this.stage.vars.scrollX) *
            4,
          (this.stage.vars.playerY[this.vars.p51 - 1] +
            this.stage.vars.rumbleY) *
            4 -
            20
        );
        this.direction = this.stage.vars.playerDirection[this.vars.p51 - 1];
        yield* this.costumes2(
          this.stage.vars.playerState[this.vars.p51 - 1],
          this.stage.vars.playerFrame[this.vars.p51 - 1]
        );
        if (this.compare(this.vars.h22, 1) === 0) {
          this.effects.color =
            this.stage.vars.playerColor[this.vars.p51 - 1] +
            (this.stage.vars.gameframe % 8) * 3;
          this.effects.brightness = ((this.stage.vars.gameframe % 8) - 3) * 4;
          if (
            this.compare(this.stage.vars.playerState[this.vars.p51 - 1], 13) ===
            0
          ) {
            this.stage.vars.hitboxXKnockback.splice(this.vars.p51 - 1, 1, 0.5);
            this.stage.vars.hitboxYKnockback.splice(this.vars.p51 - 1, 1, 6);
            if (
              this.compare(this.stage.vars.playerFrame[this.vars.p51 - 1], 8) >
              0
            ) {
              this.stage.vars.playerFrame.splice(this.vars.p51 - 1, 1, 4);
              this.stage.vars.playerState.splice(this.vars.p51 - 1, 1, 20);
            }
          }
          if (
            this.compare(this.stage.vars.playerState[this.vars.p51 - 1], 25) ===
            0
          ) {
            if (
              this.compare(this.stage.vars.playerFrame[this.vars.p51 - 1], 10) >
              0
            ) {
              this.stage.vars.playerState.splice(this.vars.p51 - 1, 1, 2);
            }
          }
          if (
            this.compare(this.stage.vars.playerState[this.vars.p51 - 1], 11) ===
            0
          ) {
            this.stage.vars.playerState.splice(this.vars.p51 - 1, 1, 25);
            this.stage.vars.playerFrame.splice(this.vars.p51 - 1, 1, 8);
          }
          if (
            this.compare(this.stage.vars.playerState[this.vars.p51 - 1], 12) ===
            0
          ) {
            this.stage.vars.playerState.splice(this.vars.p51 - 1, 1, 26);
            this.stage.vars.playerFrame.splice(this.vars.p51 - 1, 1, 36);
          }
          if (
            this.compare(this.stage.vars.playerState[this.vars.p51 - 1], 26) ===
            0
          ) {
            if (
              this.compare(this.stage.vars.playerFrame[this.vars.p51 - 1], 44) >
              0
            ) {
              this.stage.vars.playerState.splice(this.vars.p51 - 1, 1, 0);
            }
          }
          if (
            this.compare(this.stage.vars.playerState[this.vars.p51 - 1], 5) ===
            0
          ) {
            if (this.compare(this.vars.i22, 2) === 0) {
              if (
                this.compare(
                  this.stage.vars.playerFrame[this.vars.p51 - 1],
                  9
                ) > 0
              ) {
                this.stage.vars.playerState.splice(this.vars.p51 - 1, 1, 0);
                this.vars.i22 = 0;
              }
            } else {
              this.stage.vars.playerState.splice(this.vars.p51 - 1, 1, 14);
              this.stage.vars.playerFrame.splice(this.vars.p51 - 1, 1, 9);
              this.vars.i22 = 1;
            }
          }
          if (
            this.compare(this.stage.vars.playerState[this.vars.p51 - 1], 14) ===
            0
          ) {
            if (this.compare(this.vars.i22, 1) === 0) {
              this.stage.vars.hitboxHitstun.splice(this.vars.p51 - 1, 1, 6);
              this.stage.vars.hitboxYKnockback.splice(this.vars.p51 - 1, 1, 3);
              if (
                this.compare(
                  this.stage.vars.playerFrame[this.vars.p51 - 1],
                  12
                ) > 0
              ) {
                this.stage.vars.playerState.splice(this.vars.p51 - 1, 1, 5);
                this.stage.vars.playerFrame.splice(this.vars.p51 - 1, 1, 2);
                this.vars.i22 = 2;
              }
            }
          }
          if (
            this.compare(this.stage.vars.playerState[this.vars.p51 - 1], 22) ===
            0
          ) {
            if (
              this.compare(this.stage.vars.playerFrame[this.vars.p51 - 1], 16) >
              0
            ) {
              this.stage.vars.playerFrame.splice(this.vars.p51 - 1, 1, 12);
              this.stage.vars.playerState.splice(this.vars.p51 - 1, 1, 20);
              this.stage.vars.playerX.splice(
                this.vars.p51 - 1,
                1,
                this.stage.vars.playerX[this.vars.p51 - 1] +
                  this.stage.vars.playerDirection[this.vars.p51 - 1] * 20
              );
              this.stage.vars.playerDirection.splice(
                this.vars.p51 - 1,
                1,
                this.stage.vars.playerDirection[this.vars.p51 - 1] * -1
              );
            }
          }
          if (
            this.compare(this.stage.vars.playerState[this.vars.p51 - 1], 18) ===
            0
          ) {
            this.stage.vars.hitboxXKnockback.splice(this.vars.p51 - 1, 1, 3);
            if (
              this.compare(this.stage.vars.playerFrame[this.vars.p51 - 1], 1) >
              0
            ) {
              this.stage.vars.playerXSpeed.splice(
                this.vars.p51 - 1,
                1,
                this.stage.vars.playerDirection[this.vars.p51 - 1] * 2
              );
            }
          }
          this.stage.vars.playerEx.splice(this.vars.p51 - 1, 1, 3);
        }
      }
      yield;
    }
  }

  *costumes2(s8, f7) {
    this.effects.brightness = 0;
    if (this.compare(s8, 0) === 0) {
      this.costume = (Math.floor(f7 / 3) % 6) + 1;
    } else {
      if (this.compare(s8, 1) === 0) {
        this.costume = (Math.floor(f7 / 1.5) % 6) + 7;
      } else {
        if (this.compare(s8, 1.1) === 0 || this.compare(s8, 1.2) === 0) {
          this.costume = "" + "Run_" + (Math.floor((f7 / 1.5) % 5) + 1);
        } else {
          if (this.compare(s8, 1.3) === 0) {
            this.costume = "Backdash";
          } else {
            if (this.compare(s8, 2) === 0) {
              if (
                this.compare(
                  this.stage.vars.playerYSpeed[this.vars.p51 - 1],
                  -1
                ) > 0
              ) {
                this.costume = "midair";
              } else {
                this.costume = "midair2";
              }
            } else {
              if (this.compare(s8, 2.1) === 0) {
                this.costume = "lowpunch8";
              } else {
                if (this.compare(s8, 3) === 0) {
                  this.costume = "crouch";
                } else {
                  if (this.compare(s8, 4) === 0) {
                    if (this.compare(f7, 2) < 0) {
                      this.costume = "punch1";
                    } else {
                      if (this.compare(f7, 3) < 0) {
                        this.costume = "punch2";
                      } else {
                        if (this.compare(f7, 4) < 0) {
                          this.costume = "punch3";
                        } else {
                          if (this.compare(f7, 6) < 0) {
                            this.costume = "punch4";
                          } else {
                            if (this.compare(f7, 7) < 0) {
                              this.costume = "punch5";
                            } else {
                              this.costume = "punch6";
                            }
                          }
                        }
                      }
                    }
                  } else {
                    if (this.compare(s8, 5) === 0) {
                      this.costume = "" + "Heavy Swing" + Math.ceil(f7 / 1.4);
                      if (this.compare(f7, 12) < 0) {
                        null;
                      } else {
                        this.stage.vars.playerFrame.splice(
                          this.vars.p51 - 1,
                          1,
                          19
                        );
                      }
                    } else {
                      if (this.compare(s8, 6) === 0) {
                        this.costume = "land";
                      } else {
                        if (this.compare(s8, 7) === 0) {
                          if (this.compare(f7, 7) < 0) {
                            this.costume = "hurt head";
                          } else {
                            this.costume = "hurt head2";
                          }
                        } else {
                          if (this.compare(s8, 8) === 0) {
                            if (this.compare(f7, 5) < 0) {
                              this.costume = "hurt torso";
                            } else {
                              this.costume = "hurt torso2";
                            }
                          } else {
                            if (this.compare(s8, 9) === 0) {
                              if (this.compare(f7, 4) < 0) {
                                this.costume = "block head";
                              } else {
                                this.costume = "block head2";
                              }
                            } else {
                              if (this.compare(s8, 10) === 0) {
                                if (this.compare(f7, 3) < 0) {
                                  this.costume = "block torso";
                                } else {
                                  if (this.compare(f7, 4) < 0) {
                                    this.costume = "block torso2";
                                  } else {
                                    this.costume = "block torso3";
                                  }
                                }
                              } else {
                                if (this.compare(s8, 11) === 0) {
                                  if (this.compare(f7, 4) < 0) {
                                    this.costume = "air punch";
                                  } else {
                                    if (this.compare(f7, 5) < 0) {
                                      this.costume = "air punch2";
                                    } else {
                                      if (this.compare(f7, 8) < 0) {
                                        this.costume = "air punch3";
                                      } else {
                                        this.costume = "air punch4";
                                      }
                                    }
                                  }
                                } else {
                                  if (this.compare(s8, 12) === 0) {
                                    if (this.compare(f7, 2) < 0) {
                                      this.costume = "air kick";
                                    } else {
                                      if (this.compare(f7, 3) < 0) {
                                        this.costume = "air kick2";
                                      } else {
                                        if (this.compare(f7, 4) < 0) {
                                          this.costume = "air kick3";
                                        } else {
                                          if (this.compare(f7, 6) < 0) {
                                            this.costume = "air kick4";
                                          } else {
                                            if (this.compare(f7, 7) < 0) {
                                              this.costume = "air kick5";
                                            } else {
                                              if (this.compare(f7, 9) < 0) {
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
                                    if (this.compare(s8, 13) === 0) {
                                      if (this.compare(f7, 2) < 0) {
                                        this.costume = "lowpunch";
                                      } else {
                                        if (this.compare(f7, 4) < 0) {
                                          this.costume = "lowpunch4";
                                        } else {
                                          if (this.compare(f7, 5) < 0) {
                                            this.costume = "lowpunch5";
                                            if (
                                              this.compare(
                                                this.sprites["Logic"].vars
                                                  .impact19,
                                                0
                                              ) < 0
                                            ) {
                                              this.stage.vars.playerX.splice(
                                                this.vars.p51 - 1,
                                                1,
                                                this.stage.vars.playerX[
                                                  this.vars.p51 - 1
                                                ] +
                                                  this.stage.vars
                                                    .playerDirection[
                                                    this.vars.p51 - 1
                                                  ] *
                                                    1
                                              );
                                            }
                                          } else {
                                            if (this.compare(f7, 7) < 0) {
                                              this.costume = "lowpunch6";
                                            } else {
                                              if (this.compare(f7, 9) < 0) {
                                                this.costume = "lowpunch2";
                                              } else {
                                                if (this.compare(f7, 13) < 0) {
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
                                      if (this.compare(s8, 14) === 0) {
                                        if (this.compare(f7, 2) < 0) {
                                          this.costume = "low kick";
                                        } else {
                                          if (this.compare(f7, 3) < 0) {
                                            this.costume = "low kick2";
                                          } else {
                                            if (this.compare(f7, 5) < 0) {
                                              this.costume = "low kick3";
                                            } else {
                                              if (this.compare(f7, 7) < 0) {
                                                this.costume = "low kick4";
                                              } else {
                                                if (this.compare(f7, 9) < 0) {
                                                  this.costume = "low kick5";
                                                } else {
                                                  if (
                                                    this.compare(f7, 11) < 0
                                                  ) {
                                                    this.costume = "low kick6";
                                                  } else {
                                                    if (
                                                      this.compare(f7, 13) < 0
                                                    ) {
                                                      this.costume =
                                                        "low kick7";
                                                    } else {
                                                      if (
                                                        this.compare(f7, 15) < 0
                                                      ) {
                                                        this.costume =
                                                          "low kick8";
                                                      } else {
                                                        if (
                                                          this.compare(f7, 17) <
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
                                        if (this.compare(s8, 15) === 0) {
                                          if (this.compare(f7, 8) < 0) {
                                            this.costume = "hurt air";
                                          } else {
                                            this.costume = "hurt air2";
                                          }
                                        } else {
                                          if (this.compare(s8, 16) === 0) {
                                            this.costume = "hadouken";
                                          } else {
                                            if (this.compare(s8, 17) === 0) {
                                              this.costume = "parry";
                                              this.effects.brightness =
                                                (this.stage.vars.gameframe %
                                                  3) *
                                                50;
                                            } else {
                                              if (this.compare(s8, 18) === 0) {
                                                if (this.compare(f7, 2) < 0) {
                                                  this.costume = "low punch";
                                                } else {
                                                  if (this.compare(f7, 3) < 0) {
                                                    this.costume = "low punch2";
                                                  } else {
                                                    if (
                                                      this.compare(f7, 5) < 0
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
                                                  this.compare(s8, 19) === 0
                                                ) {
                                                  if (this.compare(f7, 5) < 0) {
                                                    this.costume = "hurt torso";
                                                  } else {
                                                    this.costume = "wallbounce";
                                                  }
                                                } else {
                                                  if (
                                                    this.compare(s8, 20) === 0
                                                  ) {
                                                    if (
                                                      this.compare(f7, 1) === 0
                                                    ) {
                                                      if (
                                                        this.compare(
                                                          this.stage.vars
                                                            .playerEx[
                                                            this.vars.p51 - 1
                                                          ],
                                                          0.45
                                                        ) > 0
                                                      ) {
                                                        this.stage.vars.playerEx.splice(
                                                          this.vars.p51 - 1,
                                                          1,
                                                          this.stage.vars
                                                            .playerEx[
                                                            this.vars.p51 - 1
                                                          ] - 0.5
                                                        );
                                                      } else {
                                                        this.stage.vars.playerXSpeed.splice(
                                                          this.vars.p51 - 1,
                                                          1,
                                                          this.stage.vars
                                                            .playerDirection[
                                                            this.vars.p51 - 1
                                                          ] * -4
                                                        );
                                                        this.stage.vars.playerState.splice(
                                                          this.vars.p51 - 1,
                                                          1,
                                                          12
                                                        );
                                                        this.stage.vars.playerYSpeed.splice(
                                                          this.vars.p51 - 1,
                                                          1,
                                                          3
                                                        );
                                                        this.stage.vars.playerFrame.splice(
                                                          this.vars.p51 - 1,
                                                          1,
                                                          -2
                                                        );
                                                      }
                                                    }
                                                    if (
                                                      this.compare(f7, 3) < 0
                                                    ) {
                                                      this.costume =
                                                        "Plant Plummet";
                                                    } else {
                                                      if (
                                                        this.compare(f7, 5) < 0
                                                      ) {
                                                        this.costume =
                                                          "Plant Plummet2";
                                                      } else {
                                                        if (
                                                          this.compare(f7, 6) <
                                                          0
                                                        ) {
                                                          this.costume =
                                                            "Plant Plummet3";
                                                          this.stage.vars.playerYSpeed.splice(
                                                            this.vars.p51 - 1,
                                                            1,
                                                            5
                                                          );
                                                          this.stage.vars.playerXSpeed.splice(
                                                            this.vars.p51 - 1,
                                                            1,
                                                            this.stage.vars
                                                              .playerDirection[
                                                              this.vars.p51 - 1
                                                            ] * 4
                                                          );
                                                        } else {
                                                          if (
                                                            this.compare(
                                                              f7,
                                                              12
                                                            ) < 0
                                                          ) {
                                                            this.costume =
                                                              "" +
                                                              "Plant Plummet" +
                                                              (Math.round(
                                                                f7 / 2
                                                              ) -
                                                                -1);
                                                          } else {
                                                            if (
                                                              this.compare(
                                                                f7,
                                                                16
                                                              ) < 0
                                                            ) {
                                                              this.costume =
                                                                "Plant Plummet8";
                                                            } else {
                                                              if (
                                                                this.compare(
                                                                  f7,
                                                                  18
                                                                ) < 0
                                                              ) {
                                                                this.costume =
                                                                  "Plant Plummet9";
                                                                this.stage.vars.playerXSpeed.splice(
                                                                  this.vars
                                                                    .p51 - 1,
                                                                  1,
                                                                  this.stage
                                                                    .vars
                                                                    .playerDirection[
                                                                    this.vars
                                                                      .p51 - 1
                                                                  ] * 4
                                                                );
                                                              } else {
                                                                if (
                                                                  this.compare(
                                                                    f7,
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
                                                                      .p51 - 1,
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
                                                      this.compare(s8, 21) === 0
                                                    ) {
                                                      this.stage.vars.hitboxDamage.splice(
                                                        this.vars.p51 - 1,
                                                        1,
                                                        2
                                                      );
                                                      this.stage.vars.hitboxHitstun.splice(
                                                        this.vars.p51 - 1,
                                                        1,
                                                        16
                                                      );
                                                      if (
                                                        this.compare(f7, 3) < 0
                                                      ) {
                                                        this.costume = "Grab1";
                                                      } else {
                                                        if (
                                                          this.compare(f7, 5) <
                                                          0
                                                        ) {
                                                          this.costume =
                                                            "Grab2";
                                                        } else {
                                                          if (
                                                            this.compare(
                                                              f7,
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
                                                                      .p51 - 1
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
                                                                this.vars.p51 -
                                                                  1,
                                                                1,
                                                                12
                                                              );
                                                              this.stage.vars.playerState.splice(
                                                                this.vars.p51 -
                                                                  1,
                                                                1,
                                                                22
                                                              );
                                                            }
                                                            if (
                                                              this.compare(
                                                                f7,
                                                                10
                                                              ) < 0
                                                            ) {
                                                              this.costume =
                                                                "Grab4";
                                                            } else {
                                                              this.costume =
                                                                "Grab5";
                                                              this.stage.vars.playerFrame.splice(
                                                                this.vars.p51 -
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
                                                        this.compare(s8, 22) ===
                                                        0
                                                      ) {
                                                        if (
                                                          this.compare(f7, 12) <
                                                          0
                                                        ) {
                                                          this.costume =
                                                            "Throw";
                                                        } else {
                                                          if (
                                                            this.compare(
                                                              f7,
                                                              23
                                                            ) < 0
                                                          ) {
                                                            this.costume =
                                                              "" +
                                                              "Throw" +
                                                              (Math.round(
                                                                f7 / 3
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
                                                                this.vars.p51 -
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
                                                                f7,
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
                                                                    .p51 - 1
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
                                                                  f7,
                                                                  28
                                                                ) < 0
                                                              ) {
                                                                this.costume =
                                                                  "Throw6";
                                                              } else {
                                                                if (
                                                                  this.compare(
                                                                    f7,
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
                                                                      .p51 - 1,
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
                                                            s8,
                                                            24
                                                          ) === 0
                                                        ) {
                                                          if (
                                                            this.compare(
                                                              f7,
                                                              4
                                                            ) < 0
                                                          ) {
                                                            this.costume =
                                                              "Die";
                                                          } else {
                                                            if (
                                                              this.compare(
                                                                f7,
                                                                7
                                                              ) < 0
                                                            ) {
                                                              this.costume =
                                                                "Die2";
                                                            } else {
                                                              if (
                                                                this.compare(
                                                                  f7,
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
                                                              s8,
                                                              25
                                                            ) === 0
                                                          ) {
                                                            if (
                                                              this.compare(
                                                                f7,
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
                                                                s8,
                                                                26
                                                              ) === 0
                                                            ) {
                                                              if (
                                                                this.compare(
                                                                  f7,
                                                                  11
                                                                ) < 0
                                                              ) {
                                                                this.stage.vars.playerFrame.splice(
                                                                  this.vars
                                                                    .p51 - 1,
                                                                  1,
                                                                  11
                                                                );
                                                              } else {
                                                                if (
                                                                  this.compare(
                                                                    f7,
                                                                    13
                                                                  ) < 0
                                                                ) {
                                                                  this.costume =
                                                                    "Leaf Leap";
                                                                } else {
                                                                  if (
                                                                    this.compare(
                                                                      f7,
                                                                      16
                                                                    ) < 0
                                                                  ) {
                                                                    this.costume =
                                                                      "Leaf Leap2";
                                                                  } else {
                                                                    if (
                                                                      this.compare(
                                                                        f7,
                                                                        40
                                                                      ) < 0
                                                                    ) {
                                                                      this.costume =
                                                                        "" +
                                                                        "Leaf Leap" +
                                                                        ((f7 %
                                                                          4) +
                                                                          3);
                                                                    } else {
                                                                      if (
                                                                        this.compare(
                                                                          f7,
                                                                          42
                                                                        ) < 0
                                                                      ) {
                                                                        this.costume =
                                                                          "Leaf Leap7";
                                                                      } else {
                                                                        if (
                                                                          this.compare(
                                                                            f7,
                                                                            44
                                                                          ) < 0
                                                                        ) {
                                                                          this.costume =
                                                                            "Leaf Leap8";
                                                                        } else {
                                                                          this.stage.vars.playerState.splice(
                                                                            this
                                                                              .vars
                                                                              .p51 -
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
                                                                  s8,
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
                                                                          .p51 -
                                                                          1
                                                                      ]
                                                                    ),
                                                                    Math.abs(
                                                                      this.stage
                                                                        .vars
                                                                        .playerXSpeed[
                                                                        this
                                                                          .vars
                                                                          .p51 -
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
                                                                          .p51 -
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
                                                                            .p51 -
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
                                                                            .p51 -
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
                                                                            .p51 -
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
                                                                    s8,
                                                                    4.1
                                                                  ) === 0
                                                                ) {
                                                                  if (
                                                                    this.compare(
                                                                      f7,
                                                                      2
                                                                    ) < 0
                                                                  ) {
                                                                    this.costume =
                                                                      "auto";
                                                                  } else {
                                                                    if (
                                                                      this.compare(
                                                                        f7,
                                                                        3
                                                                      ) < 0
                                                                    ) {
                                                                      this.costume =
                                                                        "auto2";
                                                                    } else {
                                                                      if (
                                                                        this.compare(
                                                                          f7,
                                                                          5
                                                                        ) < 0
                                                                      ) {
                                                                        this.costume =
                                                                          "auto3";
                                                                      } else {
                                                                        if (
                                                                          this.compare(
                                                                            f7,
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
                                                                      s8,
                                                                      27
                                                                    ) === 0
                                                                  ) {
                                                                    this.vars.h22 = 1;
                                                                    this.stage.vars.playerFrame.splice(
                                                                      this.vars
                                                                        .p51 -
                                                                        1,
                                                                      1,
                                                                      -8
                                                                    );
                                                                    this.stage.vars.playerState.splice(
                                                                      this.vars
                                                                        .p51 -
                                                                        1,
                                                                      1,
                                                                      6
                                                                    );
                                                                  } else {
                                                                    if (
                                                                      this.compare(
                                                                        s8,
                                                                        28
                                                                      ) === 0
                                                                    ) {
                                                                      this.costume =
                                                                        "block crouch";
                                                                    } else {
                                                                      if (
                                                                        this.compare(
                                                                          s8,
                                                                          23
                                                                        ) === 0
                                                                      ) {
                                                                        if (
                                                                          this.compare(
                                                                            f7,
                                                                            4
                                                                          ) < 0
                                                                        ) {
                                                                          this.costume =
                                                                            "Vine Whip";
                                                                        } else {
                                                                          if (
                                                                            this.compare(
                                                                              f7,
                                                                              6
                                                                            ) <
                                                                            0
                                                                          ) {
                                                                            this.costume =
                                                                              "Vine Whip2";
                                                                          } else {
                                                                            if (
                                                                              this.compare(
                                                                                f7,
                                                                                8
                                                                              ) <
                                                                              0
                                                                            ) {
                                                                              this.costume =
                                                                                "Vine Whip3";
                                                                            } else {
                                                                              if (
                                                                                this.compare(
                                                                                  f7,
                                                                                  9
                                                                                ) <
                                                                                0
                                                                              ) {
                                                                                this.costume =
                                                                                  "Vine Whip4";
                                                                              } else {
                                                                                if (
                                                                                  this.compare(
                                                                                    f7,
                                                                                    11
                                                                                  ) <
                                                                                  0
                                                                                ) {
                                                                                  this.costume =
                                                                                    "Vine Whip5";
                                                                                } else {
                                                                                  if (
                                                                                    this.compare(
                                                                                      f7,
                                                                                      18
                                                                                    ) <
                                                                                    0
                                                                                  ) {
                                                                                    this.costume =
                                                                                      "Vine Whip6";
                                                                                  } else {
                                                                                    if (
                                                                                      this.compare(
                                                                                        f7,
                                                                                        20
                                                                                      ) <
                                                                                      0
                                                                                    ) {
                                                                                      this.costume =
                                                                                        "Vine Whip7";
                                                                                    } else {
                                                                                      if (
                                                                                        this.compare(
                                                                                          f7,
                                                                                          22
                                                                                        ) <
                                                                                        0
                                                                                      ) {
                                                                                        this.costume =
                                                                                          "Vine Whip8";
                                                                                      } else {
                                                                                        if (
                                                                                          this.compare(
                                                                                            f7,
                                                                                            23
                                                                                          ) <
                                                                                          0
                                                                                        ) {
                                                                                          this.costume =
                                                                                            "Vine Whip9";
                                                                                        } else {
                                                                                          if (
                                                                                            this.compare(
                                                                                              f7,
                                                                                              25
                                                                                            ) <
                                                                                            0
                                                                                          ) {
                                                                                            this.costume =
                                                                                              "Vine Whip10";
                                                                                          } else {
                                                                                            if (
                                                                                              this.compare(
                                                                                                f7,
                                                                                                32
                                                                                              ) <
                                                                                              0
                                                                                            ) {
                                                                                              this.costume =
                                                                                                "Vine Whip11";
                                                                                            } else {
                                                                                              if (
                                                                                                this.compare(
                                                                                                  f7,
                                                                                                  33
                                                                                                ) <
                                                                                                0
                                                                                              ) {
                                                                                                this.costume =
                                                                                                  "Vine Whip12";
                                                                                              } else {
                                                                                                if (
                                                                                                  this.compare(
                                                                                                    f7,
                                                                                                    37
                                                                                                  ) <
                                                                                                  0
                                                                                                ) {
                                                                                                  this.costume =
                                                                                                    "Vine Whip13";
                                                                                                } else {
                                                                                                  if (
                                                                                                    this.compare(
                                                                                                      f7,
                                                                                                      38
                                                                                                    ) <
                                                                                                    0
                                                                                                  ) {
                                                                                                    this.costume =
                                                                                                      "Vine Whip14";
                                                                                                  } else {
                                                                                                    if (
                                                                                                      this.compare(
                                                                                                        f7,
                                                                                                        42
                                                                                                      ) <
                                                                                                      0
                                                                                                    ) {
                                                                                                      this.costume =
                                                                                                        "Vine Whip15";
                                                                                                    } else {
                                                                                                      if (
                                                                                                        this.compare(
                                                                                                          f7,
                                                                                                          44
                                                                                                        ) <
                                                                                                        0
                                                                                                      ) {
                                                                                                        this.costume =
                                                                                                          "Vine Whip16";
                                                                                                      } else {
                                                                                                        this.stage.vars.playerState.splice(
                                                                                                          this
                                                                                                            .vars
                                                                                                            .p51 -
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
