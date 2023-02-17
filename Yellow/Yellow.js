import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@1.4.1/dist/index.esm.js";

export default class Yellow extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("idle", "aefdd391c6d449968364ebe0673fa349.svg", {
        x: 39.04884023219114,
        y: 45.98425499999996
      }),
      new Costume("idle2", "d86dd6144a145f45b2601ca04a918908.svg", {
        x: 33.297162455792204,
        y: 43.10841348236727
      }),
      new Costume("idle3", "5ff36d01989c30f3f894bc1cc51c0c01.svg", {
        x: 31.859250848739293,
        y: 41.95807848236723
      }),
      new Costume("idle4", "62b9a7ae85a4d8b308d6d95b0983fb96.svg", {
        x: 31.859246839244292,
        y: 41.95807999999997
      }),
      new Costume("idle5", "3e15d6f866cf52edb81f8a22a06d857e.svg", {
        x: 33.29715341962216,
        y: 43.108405000000005
      }),
      new Costume("idle6", "5fa1062bb2058040b2d8dd8c814cd72c.svg", {
        x: 40.199176839244245,
        y: 45.98425499999996
      }),
      new Costume("WalkFront", "580db896408459e9a95e68e379255124.svg", {
        x: 32.43440134868928,
        y: 44.83391839294694
      }),
      new Costume("WalkFront2", "6e3481836270e9bc1d78665b34bf99c3.svg", {
        x: 32.43439837666588,
        y: 52.88627624937132
      }),
      new Costume("WalkFront3", "2feb6ee9590b1c8ad18b3e2cee035151.svg", {
        x: 34.747517713478146,
        y: 53.461442276448935
      }),
      new Costume("WalkFront4", "7aef3d0501128c8d7a3237aaedd63b66.svg", {
        x: 36.55534589270562,
        y: 48.57250499999992
      }),
      new Costume("WalkFront5", "f5a1a77465c6f3c3a70a14ce77055f50.svg", {
        x: 32.43439367848839,
        y: 45.984256607053
      }),
      new Costume("WalkFront6", "46a71a183d22c7e7b59ffad7681753c5.svg", {
        x: 32.434396839244215,
        y: 44.83391999999998
      }),
      new Costume("crouch2", "98d0d2780b49daa1de867dbe383995c7.svg", {
        x: 30.756821749824155,
        y: 40.4029894873743
      }),
      new Costume("crouch", "b4b0634ffe1580a2a5709bfc91d4ea54.svg", {
        x: 29.558563419622146,
        y: 14.062414999999987
      }),
      new Costume("midair", "a8b2398545d1f433280fa0c640fae69b.svg", {
        x: 39.04883841962214,
        y: 45.98425499999999
      }),
      new Costume("midair2", "2abdbda79c7a6b6ca6da879d2991d3d6.svg", {
        x: 30.359920133120113,
        y: 40.52015611649796
      }),
      new Costume("land", "b20b05b88a124e6dfaf0b74b595e270f.svg", {
        x: 39.04883841962214,
        y: 41.67049272355101
      }),
      new Costume("punch1", "4914fe236a213a752c4be18d82e10602.svg", {
        x: 37.03574935727934,
        y: 41.670492723551035
      }),
      new Costume("punch2", "f90ce8a127bf694f63b52146be6d0dc3.svg", {
        x: 24.66962831342383,
        y: 41.67049499999996
      }),
      new Costume("punch3", "6489fecdee7bdfe909cde6e5105edd5d.svg", {
        x: 24.669628419622114,
        y: 41.67049499999999
      }),
      new Costume("punch4", "2a951e5e2d84e5b40431ee85091976eb.svg", {
        x: 25.14942698006803,
        y: 42.33944708445148
      }),
      new Costume("punch5", "cbbd95f0abf174b8db2683d8c7c83f4a.svg", {
        x: 29.463188839119397,
        y: 42.62703021424218
      }),
      new Costume("punch6", "36a7f75e7b2c023a767480b959da793d.svg", {
        x: 33.87232368788335,
        y: 44.83391839294694
      }),
      new Costume("auto", "377ee6afc2cfebec91cc12e2a16ed746.svg", {
        x: 25.149428542738377,
        y: 42.33944814693044
      }),
      new Costume("auto2", "8505ee672cec7dee126feb58b5d53fa8.svg", {
        x: 21.422435258866358,
        y: 41.6704949999999
      }),
      new Costume("auto3", "cbb050fd1f2be79ba3f0f15e3eec7805.svg", {
        x: 21.83331943516407,
        y: 41.670494999999875
      }),
      new Costume("auto4", "0ce7f8f55c84b257507ae056673de911.svg", {
        x: 21.833319435164128,
        y: 41.67049499999982
      }),
      new Costume("auto5", "34e70fe6ac6671c80d76a0a6c87a46eb.svg", {
        x: 21.246031887842463,
        y: 42.33945106247893
      }),
      new Costume("high kick1", "61364ac40fd4a1e4eb8995400dc9c51b.svg", {
        x: 41.58439315537382,
        y: 45.24344392868775
      }),
      new Costume("high kick2", "2588dd7b2c2e9f773dcbd326a2dd812c.svg", {
        x: 48.251526839244235,
        y: 45.121504999999985
      }),
      new Costume("high kick4", "161ce877cd0e91edfa0bc554f42b7900.svg", {
        x: 49.68944759806064,
        y: 45.121504999999985
      }),
      new Costume("high kick3", "52eb5a2211e9e1515f49dcbed2404712.svg", {
        x: 49.68944841962218,
        y: 45.12150500000001
      }),
      new Costume("high kick5", "92791b2dcf400614e3e289dcbcbb6cd5.svg", {
        x: 45.088105606650714,
        y: 46.8470074552898
      }),
      new Costume("high kick6", "fd64c8d443273d81872df86203d636df.svg", {
        x: 39.04883841962214,
        y: 45.98425499999999
      }),
      new Costume("hurt head", "86530a40f5af75d51b8a79955eab2dc3.svg", {
        x: 48.411749367633064,
        y: 44.61701761693581
      }),
      new Costume("hurt head2", "6258a14015a10bce067edad80daf0010.svg", {
        x: 48.506127266221824,
        y: 44.61675575126279
      }),
      new Costume("hurt torso", "36fc9fa46904334d58bffce2f2175ac1.svg", {
        x: 18.76440500000001,
        y: 30.209614643824693
      }),
      new Costume("hurt torso2", "62c90ff2e194f977465ccce2ea29c1e9.svg", {
        x: 25.728115367663662,
        y: 32.53539860985495
      }),
      new Costume("block torso", "23239ead625b4234e2b0feb8e36f60e9.svg", {
        x: 33.2971553843569,
        y: 35.918809688285705
      }),
      new Costume("block torso2", "eb292b701f5025d79c74b27cea6a271a.svg", {
        x: 36.17299690198951,
        y: 43.39599763413062
      }),
      new Costume("block head", "cb177b4e712a7a0dfbcc87084d9faf4b.svg", {
        x: 45.088105606650714,
        y: 45.98425499999999
      }),
      new Costume("block head2", "f661c178600b2bec6de76d582ac987b1.svg", {
        x: 42.787432392544645,
        y: 45.98425499999999
      }),
      new Costume("block crouch", "e300658479a8e12c2b24a802ab9c3950.svg", {
        x: 37.676402695837595,
        y: 21.904499979335924
      }),
      new Costume("air punch", "953ec72b0c21b881821508061eb85462.svg", {
        x: 28.695803419622138,
        y: 42.82082933060403
      }),
      new Costume("air punch2", "b97f74728d2ca5f50b5fe55a31917107.svg", {
        x: 32.684743343237386,
        y: 42.82082999999989
      }),
      new Costume("air punch3", "b249a41cf9ad9cd2a73f3eb08e8a8a0d.svg", {
        x: 35.74054695625756,
        y: 42.820829999999916
      }),
      new Costume("air punch4", "5e08205908fc9d834ffc79ac2fac7f68.svg", {
        x: 25.262370000000004,
        y: 40.520156785893874
      }),
      new Costume("low kick1", "19c82950b4f17ce742b159cea2dba10e.svg", {
        x: 37.610919668993546,
        y: 20.67685049055507
      }),
      new Costume("low kick2", "594f2d16f3a89a1c752ce77b0a9c657d.svg", {
        x: 55.44113424856678,
        y: 18.951345089420357
      }),
      new Costume("low kick3", "48657f15d0284b7fe432ed20dd86a6ae.svg", {
        x: 55.44113341962213,
        y: 18.951345000000003
      }),
      new Costume("low kick4", "821d0d4a805deee839845e42e76f56d0.svg", {
        x: 55.44113341962213,
        y: 18.951335
      }),
      new Costume("low kick5", "f6eb854127e7d4746d99af141f9f060a.svg", {
        x: 55.44113341962213,
        y: 18.951324999999997
      }),
      new Costume("low kick6", "cba8e476acc4cb7d684038558522261f.svg", {
        x: 59.75489411569325,
        y: 18.951314999999965
      }),
      new Costume("low kick7", "0b5b12bb1e7b84a842dffd2fe7756725.svg", {
        x: 60.617646570983055,
        y: 18.951304999999962
      }),
      new Costume("low kick8", "fd7c3b24f58d37a1a77180bd5742b6ac.svg", {
        x: 61.48039902627286,
        y: 18.95129499999996
      }),
      new Costume("low kick9", "25d9509ed1039309f6baa0e14e2355e7.svg", {
        x: 55.44113341962213,
        y: 18.951314999999994
      }),
      new Costume("low kick10", "cbbb518c98fc3e45c318fec199a7a59a.svg", {
        x: 55.441130258866394,
        y: 18.95129499999993
      }),
      new Costume("low kick11", "6f6b0871cebd425028f73ee4803c8473.svg", {
        x: 55.4411286784885,
        y: 18.951294999999902
      }),
      new Costume("low kick12", "54affa05e25720894bcd4b91c1b8ebec.svg", {
        x: 45.375681786396314,
        y: 17.225790089420286
      }),
      new Costume("low punch", "714f4962a6f9e10d93b9e4d375da3100.svg", {
        x: 29.558560258866436,
        y: 14.06241499999993
      }),
      new Costume("low punch2", "f3975106d5a59ae994a3a64c9682a6ef.svg", {
        x: 28.940440258866516,
        y: 14.062414999999845
      }),
      new Costume("low punch3", "30491b97830ebbda38f08ab2dc084144.svg", {
        x: 30.60865115995105,
        y: 13.774830848236661
      }),
      new Costume("low punch4", "9de66e9299753939070a6d8176592ba1.svg", {
        x: 28.940439999999995,
        y: 14.062414999999987
      }),
      new Costume("hurt air", "0ecf56afa1f9db44a1a797892d684df3.svg", {
        x: 23.746511085185745,
        y: 45.197857277132215
      }),
      new Costume("hurt air2", "3881452dcf4ae8cdbb054d71f4d8a11b.svg", {
        x: 25.04072336336506,
        y: 44.19546250230417
      }),
      new Costume("air kick", "bd429e5cabcb5268248ca2497079beb9.svg", {
        x: 39.04883841962214,
        y: 45.98425499999999
      }),
      new Costume("air kick2", "318abddc7be4dae4b5490bf94c82071d.svg", {
        x: 40.81853535864175,
        y: 44.833919999999864
      }),
      new Costume("air kick3", "71f9bafa19bdc3bc5ee30f4def77d511.svg", {
        x: 38.25358299590539,
        y: 41.55881057390559
      }),
      new Costume("air kick4", "683e0142a9f91dbcd6a11cb3b7f5dace.svg", {
        x: 40.77187084607928,
        y: 38.54177336549964
      }),
      new Costume("air kick5", "7485425a132b2856a8afebd407233baa.svg", {
        x: 40.600178159306466,
        y: 38.20654558234037
      }),
      new Costume("air kick6", "a7cda7a9b174c61a71bae8d6bb4c10b0.svg", {
        x: 30.708006452973336,
        y: 40.21790344759083
      }),
      new Costume("air kick7", "0cc879197f215881e02554a363903d0d.svg", {
        x: 34.71787484090902,
        y: 40.52015499999993
      }),
      new Costume("lowpunch", "fdc5aae09074890922a594b2f857bef8.svg", {
        x: 21.833319999999986,
        y: 41.67049499999999
      }),
      new Costume("lowpunch4", "35285567b331b5273cf896a1c5d6e391.svg", {
        x: 21.833320000000043,
        y: 40.84872664740456
      }),
      new Costume("lowpunch5", "e2d5e7789e6ceb2da1062e6df46bc40a.svg", {
        x: 24.064404999999994,
        y: 39.41062999999997
      }),
      new Costume("lowpunch6", "4f7faeae18b79ced5cdc6debe28b8fb1.svg", {
        x: 23.864858685425503,
        y: 43.31973999999991
      }),
      new Costume("lowpunch2", "6c44f43ae33b4d63f82764197029b0ad.svg", {
        x: 23.483530945740796,
        y: 44.83292
      }),
      new Costume("lowpunch7", "185d7b29b5c4faf94a6a0906654a21ac.svg", {
        x: 23.483529728704042,
        y: 45.1815394492381
      }),
      new Costume("lowpunch8", "50c9af8a11faabc5a4297baac597d511.svg", {
        x: 21.833319999999986,
        y: 41.67049499999999
      }),
      new Costume("parry", "2115b94af4132f8ab7049a0afb437acc.svg", {
        x: 30.708898018487503,
        y: 41.38290857178774
      }),
      new Costume("hadouken", "cd9df706de4d2ff6c8d0c4359fd6c222.svg", {
        x: 26.58645999620012,
        y: 43.70101877014139
      }),
      new Costume("charge", "72f45cfa8447abe2ce7c6c45dca154e0.svg", {
        x: 42.75349937155963,
        y: 36.532025711443254
      }),
      new Costume("wallbounce", "e908d8c770a0661834774ee3997561ee.svg", {
        x: 47.66544305935298,
        y: 34.66505253945411
      }),
      new Costume("Lightning Thrust", "4201b021d406f93c26603551333194e6.svg", {
        x: 38.850321867183396,
        y: 41.04649656404706
      }),
      new Costume("Lightning Thrust2", "a996d08c7fcada09cc3c3295e8051cde.svg", {
        x: 39.850318302809995,
        y: 41.04650520718499
      }),
      new Costume("Lightning Thrust3", "f9b52e33e046337573a0b26d58645aef.svg", {
        x: 75.63189793904306,
        y: 29.265328752186832
      }),
      new Costume("Lightning Thrust4", "fa3d7d2131f224619a72fb816de95056.svg", {
        x: 77.63191,
        y: 29.26533251005702
      }),
      new Costume("Lightning Thrust5", "a1e92b62be8ecb21744b0e9d977e0c85.svg", {
        x: 47.66544155964047,
        y: 34.665054968085485
      }),
      new Costume("Lightning Thrust6", "09296b006fa3cf10dfa592471d3e6308.svg", {
        x: 30.60031821781328,
        y: 41.04650432156896
      }),
      new Costume("Grab1", "eecbbc74553b63de4c214d9f6db89f7a.svg", {
        x: 43.298836839244274,
        y: 45.98425499999996
      }),
      new Costume("Grab2", "f98ff9c92dfd735c682bb9e27ee8af43.svg", {
        x: 50.798835258866376,
        y: 46.484254999999905
      }),
      new Costume("Grab3", "a10992683fe3ba78792839bc3c9b7bbb.svg", {
        x: 19.162575258866383,
        y: 40.48425499999985
      }),
      new Costume("Grab4", "4b8616ae30b1c01b5b648aa8f8b6cd40.svg", {
        x: 19.162575258866468,
        y: 40.48425499999976
      }),
      new Costume("Grab5", "5d85ca2b5907051906ccab6105cf996b.svg", {
        x: 29.798838419622143,
        y: 43.48425500000002
      }),
      new Costume("Throw", "4b8616ae30b1c01b5b648aa8f8b6cd40.svg", {
        x: 19.162575258866468,
        y: 40.48425499999976
      }),
      new Costume("Throw2", "fd3730047ac766e0e190b59f5f5c1d95.svg", {
        x: 19.162575258866525,
        y: 38.6827445654024
      }),
      new Costume("Throw3", "2893db4c345a02bf09e5410d82b941dd.svg", {
        x: 19.162575258866553,
        y: 41.18275278138492
      }),
      new Costume("Throw4", "ca9a087539e962b5603aa39283cf017d.svg", {
        x: 19.16257525886664,
        y: 42.883896613828114
      }),
      new Costume("Throw5", "bbcf560419930f572b8d48e3f070fece.svg", {
        x: 42.11736500000001,
        y: 46.2509988012838
      }),
      new Costume("Throw6", "28d392f1fba05a57afe8c4d7ee407ae2.svg", {
        x: 31.13043434461136,
        y: 46.99876856478937
      }),
      new Costume("Throw7", "b2462c66699eee33f2cc674c880b8d3f.svg", {
        x: 30.350001117771825,
        y: 46.01761416326812
      }),
      new Costume("Die", "b54d222e26defe8d75ae15388affae45.svg", {
        x: 34.647615157366886,
        y: 43.92953312189093
      }),
      new Costume("Die2", "cf925d51cd138f34bea6f6e8e406aa99.svg", {
        x: 22.697444957305947,
        y: 40.20928261190613
      }),
      new Costume("Die3", "7d554e48d379bbfc813185858083fffe.svg", {
        x: 43.509056156280565,
        y: 7.6098881674386405
      }),
      new Costume("Die4", "2dc6330b83fb4be587f1f57e6c5e6267.svg", {
        x: 43.80944200395032,
        y: 10.468772563380867
      }),
      new Costume("Zlam", "587942560d774718c4562de56f981305.svg", {
        x: 35.838867044080445,
        y: 31.249272632388596
      }),
      new Costume("Zlam2", "4403f8885e0b48abe6c0fa534b0bd139.svg", {
        x: 35.937012426130195,
        y: 89.64186585897984
      }),
      new Costume("Zlam3", "2dade4874392cc0d2ba4d2b214605d08.svg", {
        x: 22.571911055575356,
        y: 54.41448086926384
      }),
      new Costume("Zlam4", "2ff2ea7f7a0de4cd805feee4a8a9b380.svg", {
        x: 22.571921055575245,
        y: 54.4144806440825
      }),
      new Costume("Zlam5", "49ad4e2502afb7e1ac887cb6621d8da0.svg", {
        x: 22.571921055575217,
        y: 53.86296708222363
      }),
      new Costume("Zlam6", "251c001e28a997ea4f4f63a1e0e1f300.svg", {
        x: 24.113365817318794,
        y: 61.650362334526676
      }),
      new Costume("Zlam7", "49674a1d2e752ba950f9fd15d1e3be33.svg", {
        x: 17.288687599175717,
        y: 54.06946010150446
      }),
      new Costume("Zlam8", "16c20bc3934ada845c9dc6e75f0ff052.svg", {
        x: 127.85141044800895,
        y: 42.113153807542915
      }),
      new Costume("Zlam9", "7537bc55b8fc2c51447bf43adcc387ab.svg", {
        x: 130.45364074131476,
        y: 21.819288821099008
      }),
      new Costume("Thunder Spin", "d84ae65eb3e4faedd1d8df621c1662fe.svg", {
        x: 62.246457603705295,
        y: 46.72652500000001
      }),
      new Costume("Thunder Spin2", "c6fdad312d6f1856ce7feecd8a2b3e7f.svg", {
        x: 25.535128631801,
        y: 60.216188715706906
      }),
      new Costume("Thunder Spin3", "42e5201811f1a299f014d35418bee7c5.svg", {
        x: 43.83333225094907,
        y: 48.6666655842825
      }),
      new Costume("Thunder Spin4", "d0468ee11e0a2e848ad039add4d71d53.svg", {
        x: 65.7381858636362,
        y: 67.63370575332478
      }),
      new Costume("Thunder Spin5", "bff79e34d8dc5167b7f15b23af0292a7.svg", {
        x: 71.62244000000001,
        y: 71.44451999999997
      }),
      new Costume("Thunder Spin6", "115a341aef3d50cdf0595bba17344ffd.svg", {
        x: 71.62244999999999,
        y: 71.44452999999993
      }),
      new Costume("Air Spike", "7e000eeb1ddcf88a697ffd06bd22475d.svg", {
        x: 46.07244897525911,
        y: 54.41447318321238
      }),
      new Costume("Air Spike2", "45696f4b5500543f16e46a207864a37f.svg", {
        x: 43.92460393122033,
        y: 54.41447954963721
      }),
      new Costume("Air Spike3", "e085d9d9ac0b962c02577aaa32ec4381.svg", {
        x: 51.194959121512454,
        y: 54.41447273284966
      }),
      new Costume("Air Spike4", "62478239dd270d884d8829cdf1d39e92.svg", {
        x: 29.600604437469798,
        y: 37.46405443115563
      }),
      new Costume("Air Spike5", "a989b9f7ea1e213181be37d50f24eaaa.svg", {
        x: 31.1317622536246,
        y: 36.166593678348704
      }),
      new Costume("Air Spike6", "7a85403d45410e662a10c0ad5162bba2.svg", {
        x: 31.587783526566994,
        y: 42.1366473657406
      }),
      new Costume("Air Spike7", "453ef86675b286a49baf98f47b91121e.svg", {
        x: 30.921121060215057,
        y: 42.88389621320934
      }),
      new Costume("Air Spike8", "54bb44aa452a9e5f79a62c8888e552aa.svg", {
        x: 30.35991999999999,
        y: 40.52015499999982
      }),
      new Costume("Spark Shock", "3f23b04c62585e240681f887d8c4d152.svg", {
        x: 21.833319999999986,
        y: 41.67049499999999
      }),
      new Costume("Spark Shock2", "391dd479753d446474be2439bc450de2.svg", {
        x: 27.032862505452414,
        y: 37.51465855109063
      }),
      new Costume("Spark Shock3", "a286ab34d510f783a639450f8108ecf9.svg", {
        x: 30.226688863080568,
        y: 41.670494999999846
      }),
      new Costume("Spark Shock4", "3afee91de04e1feb5ab96af66443765a.svg", {
        x: 57.00920683924426,
        y: 36.759049999999974
      }),
      new Costume("Spark Shock5", "8be6fa281b471c2438509d8348b903ea.svg", {
        x: 54.734406993108905,
        y: 36.759049999999974
      }),
      new Costume("Spark Shock6", "4c147af332dd82e4769057583cacf362.svg", {
        x: 29.28324841962214,
        y: 44.626321270743915
      }),
      new Costume("Spark Shock7", "b5677f0184c836316c3987fa579aad32.svg", {
        x: 29.28324841962214,
        y: 44.626321270743915
      }),
      new Costume("Spark Shock8", "8f50f4a0c5291d613084c8b3fe084512.svg", {
        x: 36.14859239520621,
        y: 55.48781521616621
      }),
      new Costume("Spark Shock9", "558735f08d63bd1b97b1f2ba12d832e0.svg", {
        x: 36.14859000000001,
        y: 55.48781318321237
      }),
      new Costume("Spark Shock10", "0f0ae2c988d3951481054d932b2f1956.svg", {
        x: 52.63349497206863,
        y: 35.41582297608093
      }),
      new Costume("Spark Shock11", "aec304507c76d2c5b93c1765ea8e4154.svg", {
        x: 57.38785038084279,
        y: 37.33825212311939
      }),
      new Costume("Spark Shock12", "a66d1f9705e1942c572c8746a0962210.svg", {
        x: 39.56551480416837,
        y: 27.68279177757003
      }),
      new Costume("Spark Shock13", "24b468ae5a95c270cb04ba5019f7cd40.svg", {
        x: 30.90693500000009,
        y: 20.569408885201796
      }),
      new Costume("Spark Shock14", "c4d91f42bb4c21eac333a01cadd65091.svg", {
        x: 48.10820391238187,
        y: 52.87111714812423
      }),
      new Costume("Spark Shock15", "debcc53e0a417967f510193a19c6b2a4.svg", {
        x: 51.379297917275665,
        y: 52.87112142688383
      }),
      new Costume("Spark Shock16", "ea17b13ae773bfe4df0dcaae03df1913.svg", {
        x: 51.0700959502318,
        y: 59.74029468074454
      }),
      new Costume("Spark Shock17", "f02990f21fe9eec96bb8cf861d7a2630.svg", {
        x: 43.283527367928286,
        y: 59.740294386523345
      }),
      new Costume("Spark Shock18", "6c3b743da6f46821266a0b201c864d69.svg", {
        x: 43.2835233341668,
        y: 59.740294239412776
      }),
      new Costume("Spark Shock19", "b0d8f852ce3e20295a901ff5a52203aa.svg", {
        x: 34.26182794727811,
        y: 14.842686384842636
      }),
      new Costume("Launch_1", "b1176144c800eb1b0278cd3c43cedc73.svg", {
        x: 43.70800248851188,
        y: 43.577668056605035
      }),
      new Costume("Launch_2", "9c92943166b0a9cc10ccba9b3b970f4b.svg", {
        x: 47.23018761994962,
        y: 32.73783545110129
      }),
      new Costume("Launch_3", "92aee37d205fe80d79591ffb0adbfe41.svg", {
        x: 55.33040767059194,
        y: 2.0621896818342407
      }),
      new Costume("Launch_4", "e32a9cd8cece0d0e0a558c9db5fe67d3.svg", {
        x: 29.267366103395375,
        y: 42.29753933514567
      }),
      new Costume("Launch_5", "9a8695200debea64b228a51f2d97b2a7.svg", {
        x: 22.95126528426863,
        y: 48.28029152988134
      }),
      new Costume("Lightning Cloud_1", "73de281a5b8f9b16de55d3f006e52b22.svg", {
        x: 36.188761274740244,
        y: 40.95056438280815
      }),
      new Costume("Lightning Cloud_2", "f00de26b8b0a778b6122d4b81ac0af2c.svg", {
        x: 24.52059396326402,
        y: 36.95547289154817
      }),
      new Costume("Lightning Cloud_3", "c0956a041d23ed306bb0ec5c414d87c7.svg", {
        x: 26.75876824146289,
        y: 37.23524592632299
      }),
      new Costume("Lightning Cloud_4", "34c0bfdc3bd8be98812d98f43374bd8d.svg", {
        x: 52.957211304876125,
        y: 54.45672541303986
      }),
      new Costume("Lightning Cloud_5", "e528e4aae8174f258a23335f850beb9e.svg", {
        x: 54.35606539337874,
        y: 51.65897286516875
      }),
      new Costume("Lightning Cloud_6", "e0355c6acd7d3f53ff5f96cd16889b78.svg", {
        x: 49.86009548052698,
        y: 47.33083321822534
      }),
      new Costume("Run_1", "1d2859fde723968320be271449669090.svg", {
        x: 51.87369942123195,
        y: 31.12719528800514
      }),
      new Costume("Run_2", "589068d89b329daf3f1a633d73330a22.svg", {
        x: 48.33448865166977,
        y: 28.012004750395448
      }),
      new Costume("Run_3", "e81cf570db553279ae99b99c89934e53.svg", {
        x: 38.09750446081674,
        y: 26.574224884797815
      }),
      new Costume("Run_4", "28b26e38d7488f0ae8b9abb531be86dd.svg", {
        x: 51.467572987957226,
        y: 27.05346499999993
      }),
      new Costume("Backdash", "1535c44b52973451dc2ef16c91dabc1e.svg", {
        x: 22.827035440274784,
        y: 57.65793626656574
      }),
      new Costume("Intro_1", "e3da62fd41a52f4fe6b911d6a509387a.svg", {
        x: 27.830816111846303,
        y: 30.937205568061557
      }),
      new Costume("Intro_2", "7e8364d47217f213c233567d34d303c0.svg", {
        x: 27.83081181565683,
        y: 30.928670769290505
      }),
      new Costume("Intro_3", "3af4a0e1f08436c5c684cfceb3053f0a.svg", {
        x: 46.96117445621104,
        y: 8.374057548950816
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "game" }, this.whenIReceiveGame)
    ];

    this.vars.p31 = 3;
    this.vars.state12 = 0;
    this.vars.x21 = 15;
    this.vars.y21 = 0;
    this.vars.direction14 = -1;
    this.vars.frame15 = 93;
    this.vars.xSpeed12 = 0;
    this.vars.ySpeed12 = 0;
    this.vars.i12 = 2;
    this.vars.length12 = 13;
    this.vars.part12 = 0;
    this.vars.p32 = 3;
    this.vars.touching12 = 0;
    this.vars.h12 = 0;
    this.vars.hx12 = 15;
    this.vars.hy12 = 0;
    this.vars.hxSize12 = 0;
    this.vars.hySize12 = 0;
    this.vars.health12 = 100;
    this.vars.hDamage12 = 0;
    this.vars.p33 = 0;
    this.vars.state13 = 0;
    this.vars.x22 = 0;
    this.vars.y22 = 0;
    this.vars.direction15 = 0;
    this.vars.frame16 = 0;
    this.vars.xSpeed13 = 0;
    this.vars.ySpeed13 = 0;
    this.vars.i13 = 0;
    this.vars.length13 = 0;
    this.vars.part13 = 0;
    this.vars.p34 = 0;
    this.vars.touching13 = 0;
    this.vars.h13 = 0;
    this.vars.hx13 = 0;
    this.vars.hy13 = 0;
    this.vars.hxSize13 = 0;
    this.vars.hySize13 = 0;
    this.vars.health13 = 0;
    this.vars.hDamage13 = 0;
    this.vars.impact9 = 0;
    this.vars.p35 = 0;
    this.vars.state14 = 0;
    this.vars.x23 = 0;
    this.vars.y23 = 0;
    this.vars.direction16 = 0;
    this.vars.frame17 = 0;
    this.vars.xSpeed14 = 0;
    this.vars.ySpeed14 = 0;
    this.vars.i14 = 0;
    this.vars.length14 = 0;
    this.vars.part14 = 0;
    this.vars.p36 = 0;
    this.vars.touching14 = 0;
    this.vars.h14 = 0;
    this.vars.hx14 = 0;
    this.vars.hy14 = 0;
    this.vars.hxSize14 = 0;
    this.vars.hySize14 = 0;
    this.vars.health14 = 0;
    this.vars.hDamage14 = 0;
    this.vars.impact10 = 0;
    this.vars.commands6 = 0;
    this.vars.command6 = 0;
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
    this.vars.inputs12 = [false, false, false, false, false, false];
    this.vars.hurtboxY12 = [11.5, 3.5, -8.5];
    this.vars.hurtboxYSize12 = [7, 9, 15];
    this.vars.hurtboxXSize12 = [5, 10, 12];
    this.vars.inputs13 = [];
    this.vars.hurtboxY13 = [];
    this.vars.hurtboxYSize13 = [];
    this.vars.hurtboxXSize13 = [];
    this.vars.inputs14 = [];
    this.vars.hurtboxY14 = [];
    this.vars.hurtboxYSize14 = [];
    this.vars.hurtboxXSize14 = [];
    this.vars.inputNames6 = [];
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
    this.vars.p31 = 1;
    for (let i = 0; i < this.stage.vars.OfPlayers; i++) {
      if (
        this.compare(
          this.stage.vars.playerCharacter[this.vars.p31 - 1],
          "Yellow"
        ) === 0
      ) {
        this.createClone();
      }
      this.vars.p31 += 1;
    }
  }

  *startAsClone() {
    this.visible = true;
    this.effects.color = this.stage.vars.playerColor[this.vars.p31 - 1];
    this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
    while (true) {
      if (this.compare(this.stage.vars.pauseMenu, 0) === 0) {
        this.goto(
          (this.stage.vars.playerX[this.vars.p31 - 1] +
            this.stage.vars.rumbleX -
            this.stage.vars.scrollX) *
            4,
          (this.stage.vars.playerY[this.vars.p31 - 1] +
            this.stage.vars.rumbleY) *
            4 -
            20
        );
        this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
        this.direction = this.stage.vars.playerDirection[this.vars.p31 - 1];
        yield* this.costumes2(
          this.stage.vars.playerState[this.vars.p31 - 1],
          this.stage.vars.playerFrame[this.vars.p31 - 1]
        );
        if (
          String(
            this.stage.vars.playerCommands[this.vars.p31 - 1] ?? ""
          ).includes("urz")
        ) {
          this.stage.vars.playerYSpeed.splice(this.vars.p31 - 1, 1, 2);
          this.stage.vars.playerFrame.splice(this.vars.p31 - 1, 1, 0);
          this.stage.vars.playerState.splice(this.vars.p31 - 1, 1, 30);
          this.stage.vars.playerCommands.splice(this.vars.p31 - 1, 1, "");
        }
        if (
          String(
            this.stage.vars.playerCommands[this.vars.p31 - 1] ?? ""
          ).includes("lz")
        ) {
          this.stage.vars.playerYSpeed.splice(this.vars.p31 - 1, 1, 3.5);
          this.stage.vars.playerFrame.splice(this.vars.p31 - 1, 1, 0);
          this.stage.vars.playerState.splice(this.vars.p31 - 1, 1, 29);
          this.stage.vars.playerCommands.splice(this.vars.p31 - 1, 1, "");
        }
        if (this.compare(this.vars.h12, 1) === 0) {
          this.effects.ghost = (this.stage.vars.gameframe % 4) * 6;
          if (this.compare(this.sprites["Logic"].vars.impact19, 1) < 0) {
            if (
              this.compare(
                this.stage.vars.playerState[this.vars.p31 - 1],
                1
              ) === 0 ||
              this.compare(
                this.stage.vars.playerState[this.vars.p31 - 1],
                2
              ) === 0 ||
                this.compare(
                  this.stage.vars.playerState[this.vars.p31 - 1],
                  11
                ) === 0 ||
                  this.compare(
                    this.stage.vars.playerState[this.vars.p31 - 1],
                    12
                  ) === 0 ||
                    this.compare(
                      this.stage.vars.playerState[this.vars.p31 - 1],
                      30
                    ) === 0
            ) {
              this.stage.vars.playerX.splice(
                this.vars.p31 - 1,
                1,
                this.stage.vars.playerX[this.vars.p31 - 1] +
                  this.stage.vars.playerXSpeed[this.vars.p31 - 1] * 1
              );
            }
          }
          this.stage.vars.playerEx.splice(this.vars.p31 - 1, 1, 3);
          if (
            this.toBoolean(
              this.stage.vars.currentInputs[this.vars.p31 * 6 - 3 - 1]
            ) &&
            this.compare(this.stage.vars.playerFrame[this.vars.p31 - 1], 3) <
              0 &&
              this.compare(this.stage.vars.playerY[this.vars.p31 - 1], 1) < 0
          ) {
            if (
              !(
                this.compare(
                  this.stage.vars.playerState[this.vars.p31 - 1],
                  7
                ) === 0 ||
                this.compare(
                  this.stage.vars.playerState[this.vars.p31 - 1],
                  8
                ) === 0 ||
                  this.compare(
                    this.stage.vars.playerState[this.vars.p31 - 1],
                    15
                  ) === 0 ||
                    this.compare(
                      this.stage.vars.playerState[this.vars.p31 - 1],
                      19
                    ) === 0
              )
            ) {
              this.stage.vars.playerYSpeed.splice(this.vars.p31 - 1, 1, 4);
              this.stage.vars.playerState.splice(this.vars.p31 - 1, 1, 2);
            }
          }
          if (
            this.compare(this.sprites["Logic"].vars.impact19, 2) > 0 &&
            (this.toBoolean(
              this.stage.vars.currentInputs[this.vars.p31 * 6 - 1 - 1]
            ) ||
              this.toBoolean(
                this.stage.vars.currentInputs[this.vars.p31 * 6 - 1]
              ))
          ) {
            if (
              !(
                this.compare(
                  this.stage.vars.playerState[this.vars.p31 - 1],
                  7
                ) === 0 ||
                this.compare(
                  this.stage.vars.playerState[this.vars.p31 - 1],
                  8
                ) === 0 ||
                  this.compare(
                    this.stage.vars.playerState[this.vars.p31 - 1],
                    15
                  ) === 0 ||
                    this.compare(
                      this.stage.vars.playerState[this.vars.p31 - 1],
                      19
                    ) === 0 ||
                      this.compare(
                        this.stage.vars.playerState[this.vars.p31 - 1],
                        25
                      ) === 0 ||
                        this.compare(
                          this.stage.vars.playerState[this.vars.p31 - 1],
                          23
                        ) === 0 ||
                          this.compare(
                            this.stage.vars.playerState[this.vars.p31 - 1],
                            26
                          ) === 0
              )
            ) {
              if (
                this.compare(this.stage.vars.playerY[this.vars.p31 - 1], 0) > 0
              ) {
                this.stage.vars.playerState.splice(this.vars.p31 - 1, 1, 2);
              } else {
                this.stage.vars.playerState.splice(this.vars.p31 - 1, 1, 0);
              }
            }
          }
          if (
            this.compare(this.stage.vars.playerState[this.vars.p31 - 1], 4) ===
            0
          ) {
            this.stage.vars.hitboxHitstun.splice(this.vars.p31 - 1, 1, 4);
            if (
              this.compare(this.stage.vars.playerFrame[this.vars.p31 - 1], 2) >
              0
            ) {
              this.stage.vars.playerFrame.splice(this.vars.p31 - 1, 1, 0);
              this.stage.vars.playerState.splice(this.vars.p31 - 1, 1, 4.1);
            }
          } else {
            if (
              this.compare(
                this.stage.vars.playerState[this.vars.p31 - 1],
                4.1
              ) === 0
            ) {
              if (this.compare(this.vars.i12, 3) === 0) {
                this.stage.vars.hitboxHitstun.splice(this.vars.p31 - 1, 1, 4);
                if (
                  this.compare(
                    this.stage.vars.playerFrame[this.vars.p31 - 1],
                    2
                  ) > 0
                ) {
                  this.stage.vars.playerState.splice(this.vars.p31 - 1, 1, 13);
                  this.stage.vars.playerFrame.splice(this.vars.p31 - 1, 1, 4);
                  this.vars.i12 = 0;
                }
              } else {
                this.stage.vars.hitboxHitstun.splice(this.vars.p31 - 1, 1, 4);
                if (
                  this.compare(
                    this.stage.vars.playerFrame[this.vars.p31 - 1],
                    2
                  ) > 0
                ) {
                  this.stage.vars.playerFrame.splice(this.vars.p31 - 1, 1, 0);
                  this.stage.vars.playerState.splice(this.vars.p31 - 1, 1, 4);
                  this.vars.i12 += 1;
                }
              }
            } else {
              if (
                this.compare(
                  this.stage.vars.playerState[this.vars.p31 - 1],
                  5
                ) === 0
              ) {
                this.stage.vars.hitboxHitstun.splice(this.vars.p31 - 1, 1, 4);
                this.stage.vars.hitboxXKnockback.splice(
                  this.vars.p31 - 1,
                  1,
                  1
                );
              } else {
                if (
                  this.compare(
                    this.stage.vars.playerState[this.vars.p31 - 1],
                    11
                  ) === 0
                ) {
                  this.stage.vars.hitboxHitstun.splice(this.vars.p31 - 1, 1, 6);
                  this.stage.vars.hitboxYKnockback.splice(
                    this.vars.p31 - 1,
                    1,
                    2.5
                  );
                  this.stage.vars.hitboxXKnockback.splice(
                    this.vars.p31 - 1,
                    1,
                    4.5
                  );
                } else {
                  if (
                    this.compare(
                      this.stage.vars.playerState[this.vars.p31 - 1],
                      12
                    ) === 0
                  ) {
                    this.stage.vars.hitboxYKnockback.splice(
                      this.vars.p31 - 1,
                      1,
                      -2
                    );
                    this.stage.vars.hitboxXKnockback.splice(
                      this.vars.p31 - 1,
                      1,
                      4
                    );
                  } else {
                    if (
                      this.compare(
                        this.stage.vars.playerState[this.vars.p31 - 1],
                        13
                      ) === 0
                    ) {
                      this.stage.vars.hitboxHitstun.splice(
                        this.vars.p31 - 1,
                        1,
                        6
                      );
                      if (
                        this.compare(
                          this.stage.vars.playerFrame[this.vars.p31 - 1],
                          7
                        ) > 0
                      ) {
                        this.stage.vars.playerFrame.splice(
                          this.vars.p31 - 1,
                          1,
                          this.stage.vars.playerFrame[this.vars.p31 - 1] + 2
                        );
                      }
                    } else {
                      if (
                        this.compare(
                          this.stage.vars.playerState[this.vars.p31 - 1],
                          14
                        ) === 0
                      ) {
                        this.stage.vars.playerFrame.splice(
                          this.vars.p31 - 1,
                          1,
                          this.stage.vars.playerFrame[this.vars.p31 - 1] + 1
                        );
                        this.stage.vars.hitboxHitstun.splice(
                          this.vars.p31 - 1,
                          1,
                          4
                        );
                      } else {
                        if (
                          this.compare(
                            this.stage.vars.playerState[this.vars.p31 - 1],
                            26
                          ) === 0
                        ) {
                          this.stage.vars.hitboxYKnockback.splice(
                            this.vars.p31 - 1,
                            1,
                            -90
                          );
                          this.stage.vars.hitboxXKnockback.splice(
                            this.vars.p31 - 1,
                            1,
                            0
                          );
                          this.stage.vars.hitboxHitstun.splice(
                            this.vars.p31 - 1,
                            1,
                            20
                          );
                        } else {
                          if (
                            this.compare(
                              this.stage.vars.playerState[this.vars.p31 - 1],
                              22
                            ) === 0
                          ) {
                            if (
                              this.compare(
                                this.stage.vars.playerFrame[this.vars.p31 - 1],
                                19
                              ) > 0
                            ) {
                              this.stage.vars.playerState.splice(
                                this.vars.p31 - 1,
                                1,
                                29
                              );
                              this.stage.vars.playerFrame.splice(
                                this.vars.p31 - 1,
                                1,
                                8
                              );
                              this.stage.vars.playerYSpeed.splice(
                                this.vars.p31 - 1,
                                1,
                                2
                              );
                              this.stage.vars.playerX.splice(
                                this.vars.p31 - 1,
                                1,
                                this.stage.vars.playerX[this.vars.p31 - 1] -
                                  this.stage.vars.playerDirection[
                                    this.vars.p31 - 1
                                  ] *
                                    16
                              );
                              this.vars.i12 = "ex";
                            }
                          } else {
                            if (
                              this.compare(
                                this.stage.vars.playerState[this.vars.p31 - 1],
                                29
                              ) === 0
                            ) {
                              if (this.compare(this.vars.i12, "ex") === 0) {
                                this.stage.vars.hitboxXKnockback.splice(
                                  this.vars.p31 - 1,
                                  1,
                                  3
                                );
                                this.stage.vars.hitboxHitstun.splice(
                                  this.vars.p31 - 1,
                                  1,
                                  10
                                );
                                if (
                                  this.compare(
                                    this.stage.vars.playerFrame[
                                      this.vars.p31 - 1
                                    ],
                                    14
                                  ) > 0
                                ) {
                                  this.stage.vars.playerState.splice(
                                    this.vars.p31 - 1,
                                    1,
                                    30
                                  );
                                  this.stage.vars.playerFrame.splice(
                                    this.vars.p31 - 1,
                                    1,
                                    -90
                                  );
                                  this.stage.vars.playerYSpeed.splice(
                                    this.vars.p31 - 1,
                                    1,
                                    3
                                  );
                                }
                              }
                            } else {
                              if (
                                this.compare(
                                  this.stage.vars.playerState[
                                    this.vars.p31 - 1
                                  ],
                                  20
                                ) === 0
                              ) {
                                this.stage.vars.hitboxHitstun.splice(
                                  this.vars.p31 - 1,
                                  1,
                                  4
                                );
                                this.stage.vars.hitboxYKnockback.splice(
                                  this.vars.p31 - 1,
                                  1,
                                  3
                                );
                              } else {
                                if (
                                  this.compare(
                                    this.stage.vars.playerState[
                                      this.vars.p31 - 1
                                    ],
                                    30
                                  ) === 0
                                ) {
                                  if (this.compare(this.vars.i12, "ex") === 0) {
                                    this.stage.vars.hitboxXKnockback.splice(
                                      this.vars.p31 - 1,
                                      1,
                                      0
                                    );
                                    if (
                                      this.compare(
                                        this.stage.vars.playerFrame[
                                          this.vars.p31 - 1
                                        ],
                                        14
                                      ) > 0
                                    ) {
                                      this.stage.vars.playerState.splice(
                                        this.vars.p31 - 1,
                                        1,
                                        26
                                      );
                                      this.stage.vars.playerFrame.splice(
                                        this.vars.p31 - 1,
                                        1,
                                        7
                                      );
                                      this.stage.vars.playerYSpeed.splice(
                                        this.vars.p31 - 1,
                                        1,
                                        3
                                      );
                                      this.vars.i12 = 0;
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
      yield;
    }
  }

  *costumes2(s5, f4) {
    this.effects.brightness = 0;
    if (this.compare(s5, 0) === 0) {
      this.costume = (Math.floor(f4 / 4) % 6) + 1;
    } else {
      if (this.compare(s5, 1) === 0) {
        this.costume = (Math.floor(f4 / 2) % 6) + 7;
      } else {
        if (this.compare(s5, 1.1) === 0 || this.compare(s5, 1.2) === 0) {
          this.costume = "" + "Run_" + (Math.round((f4 / 1.2) % 4) + 1);
        } else {
          if (this.compare(s5, 1.3) === 0) {
            this.costume = "Backdash";
          } else {
            if (this.compare(s5, 2) === 0 || this.compare(s5, 2.1) === 0) {
              if (
                this.compare(
                  this.stage.vars.playerYSpeed[this.vars.p31 - 1],
                  -1
                ) > 0
              ) {
                this.costume = "midair";
              } else {
                this.costume = "midair2";
              }
            } else {
              if (this.compare(s5, 3) === 0) {
                this.costume = "crouch";
              } else {
                if (this.compare(s5, 4) === 0) {
                  if (this.compare(f4, 2) < 0) {
                    this.costume = "punch1";
                  } else {
                    if (this.compare(f4, 3) < 0) {
                      this.costume = "punch2";
                    } else {
                      if (this.compare(f4, 4) < 0) {
                        this.costume = "punch3";
                      } else {
                        if (this.compare(f4, 6) < 0) {
                          this.costume = "punch4";
                        } else {
                          if (this.compare(f4, 7) < 0) {
                            this.costume = "punch5";
                          } else {
                            this.costume = "punch6";
                          }
                        }
                      }
                    }
                  }
                } else {
                  if (this.compare(s5, 5) === 0) {
                    if (this.compare(f4, 3) < 0) {
                      this.costume = "high kick1";
                    } else {
                      if (this.compare(f4, 4) < 0) {
                        this.costume = "high kick2";
                      } else {
                        if (this.compare(f4, 6) < 0) {
                          this.costume = "high kick4";
                        } else {
                          if (this.compare(f4, 9) < 0) {
                            this.costume = "high kick3";
                          } else {
                            if (this.compare(f4, 12) < 0) {
                              this.costume = "high kick5";
                            } else {
                              this.costume = "high kick6";
                              this.stage.vars.playerFrame.splice(
                                this.vars.p31 - 1,
                                1,
                                19
                              );
                            }
                          }
                        }
                      }
                    }
                  } else {
                    if (this.compare(s5, 6) === 0) {
                      this.costume = "land";
                    } else {
                      if (this.compare(s5, 7) === 0) {
                        if (this.compare(f4, 7) < 0) {
                          this.costume = "hurt head";
                        } else {
                          this.costume = "hurt head2";
                        }
                      } else {
                        if (this.compare(s5, 8) === 0) {
                          if (this.compare(f4, 5) < 0) {
                            this.costume = "hurt torso";
                          } else {
                            this.costume = "hurt torso2";
                          }
                        } else {
                          if (this.compare(s5, 9) === 0) {
                            if (this.compare(f4, 4) < 0) {
                              this.costume = "block head";
                            } else {
                              this.costume = "block head2";
                            }
                          } else {
                            if (this.compare(s5, 10) === 0) {
                              if (this.compare(f4, 3) < 0) {
                                this.costume = "block torso";
                              } else {
                                this.costume = "block torso2";
                              }
                            } else {
                              if (this.compare(s5, 11) === 0) {
                                if (this.compare(f4, 4) < 0) {
                                  this.costume = "air punch";
                                } else {
                                  if (this.compare(f4, 5) < 0) {
                                    this.costume = "air punch2";
                                  } else {
                                    if (this.compare(f4, 8) < 0) {
                                      this.costume = "air punch3";
                                    } else {
                                      this.costume = "air punch4";
                                    }
                                  }
                                }
                              } else {
                                if (this.compare(s5, 12) === 0) {
                                  if (this.compare(f4, 2) < 0) {
                                    this.costume = "air kick";
                                  } else {
                                    if (this.compare(f4, 3) < 0) {
                                      this.costume = "air kick2";
                                    } else {
                                      if (this.compare(f4, 4) < 0) {
                                        this.costume = "air kick3";
                                      } else {
                                        if (this.compare(f4, 6) < 0) {
                                          this.costume = "air kick4";
                                        } else {
                                          if (this.compare(f4, 7) < 0) {
                                            this.costume = "air kick5";
                                          } else {
                                            if (this.compare(f4, 8) < 0) {
                                              this.costume = "air kick6";
                                            } else {
                                              this.costume = "air kick7";
                                              this.stage.vars.playerFrame.splice(
                                                this.vars.p31 - 1,
                                                1,
                                                19
                                              );
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                } else {
                                  if (this.compare(s5, 13) === 0) {
                                    this.stage.vars.hitboxXKnockback.splice(
                                      this.vars.p31 - 1,
                                      1,
                                      1
                                    );
                                    this.stage.vars.hitboxYKnockback.splice(
                                      this.vars.p31 - 1,
                                      1,
                                      4.5
                                    );
                                    this.stage.vars.hitboxHitstun.splice(
                                      this.vars.p31 - 1,
                                      1,
                                      24
                                    );
                                    if (this.compare(f4, 2) < 0) {
                                      this.costume = "lowpunch";
                                    } else {
                                      if (this.compare(f4, 4) < 0) {
                                        this.costume = "lowpunch4";
                                      } else {
                                        if (this.compare(f4, 5) < 0) {
                                          this.costume = "lowpunch5";
                                        } else {
                                          if (this.compare(f4, 7) < 0) {
                                            this.costume = "lowpunch6";
                                          } else {
                                            if (this.compare(f4, 10) < 0) {
                                              this.costume = "lowpunch2";
                                            } else {
                                              if (this.compare(f4, 13) < 0) {
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
                                    if (this.compare(s5, 14) === 0) {
                                      this.costume =
                                        "" + "low kick" + Math.floor(f4 / 1.2);
                                    } else {
                                      if (this.compare(s5, 15) === 0) {
                                        if (this.compare(f4, 8) < 0) {
                                          this.costume = "hurt air";
                                        } else {
                                          this.costume = "hurt air2";
                                        }
                                      } else {
                                        if (this.compare(s5, 16) === 0) {
                                          this.costume = "hadouken";
                                        } else {
                                          if (this.compare(s5, 17) === 0) {
                                            this.costume = "parry";
                                            this.effects.brightness =
                                              (this.stage.vars.gameframe % 3) *
                                              50;
                                          } else {
                                            if (this.compare(s5, 18) === 0) {
                                              if (this.compare(f4, 2) < 0) {
                                                this.costume = "low punch";
                                              } else {
                                                if (this.compare(f4, 3) < 0) {
                                                  this.costume = "low punch2";
                                                  this.stage.vars.hitboxYKnockback.splice(
                                                    this.vars.p31 - 1,
                                                    1,
                                                    2
                                                  );
                                                  this.stage.vars.hitboxXKnockback.splice(
                                                    this.vars.p31 - 1,
                                                    1,
                                                    -0.5
                                                  );
                                                  this.stage.vars.hitboxHitstun.splice(
                                                    this.vars.p31 - 1,
                                                    1,
                                                    7
                                                  );
                                                } else {
                                                  if (this.compare(f4, 5) < 0) {
                                                    this.costume = "low punch3";
                                                  } else {
                                                    this.costume = "low punch4";
                                                  }
                                                }
                                              }
                                            } else {
                                              if (this.compare(s5, 19) === 0) {
                                                if (this.compare(f4, 5) < 0) {
                                                  this.costume = "hurt torso";
                                                } else {
                                                  this.costume = "wallbounce";
                                                }
                                              } else {
                                                if (
                                                  this.compare(s5, 20) === 0
                                                ) {
                                                  this.stage.vars.hitboxDamage.splice(
                                                    this.vars.p31 - 1,
                                                    1,
                                                    6
                                                  );
                                                  this.stage.vars.hitboxHitstun.splice(
                                                    this.vars.p31 - 1,
                                                    1,
                                                    20
                                                  );
                                                  if (this.compare(f4, 3) < 0) {
                                                    this.costume =
                                                      "Lightning Thrust";
                                                    this.stage.vars.playerYSpeed.splice(
                                                      this.vars.p31 - 1,
                                                      1,
                                                      1
                                                    );
                                                  } else {
                                                    if (
                                                      this.compare(f4, 5) < 0
                                                    ) {
                                                      this.costume =
                                                        "Lightning Thrust2";
                                                    } else {
                                                      if (
                                                        this.compare(f4, 9) < 0
                                                      ) {
                                                        this.costume =
                                                          "" +
                                                          "Lightning Thrust" +
                                                          ((Math.round(f4 / 3) %
                                                            2) +
                                                            3);
                                                        if (
                                                          this.compare(
                                                            this.sprites[
                                                              "Logic"
                                                            ].vars.impact19,
                                                            0
                                                          ) < 0
                                                        ) {
                                                          this.stage.vars.playerX.splice(
                                                            this.vars.p31 - 1,
                                                            1,
                                                            this.stage.vars
                                                              .playerX[
                                                              this.vars.p31 - 1
                                                            ] +
                                                              this.stage.vars
                                                                .playerDirection[
                                                                this.vars.p31 -
                                                                  1
                                                              ] *
                                                                20
                                                          );
                                                        } else {
                                                          if (
                                                            String(
                                                              this.stage.vars.playerState.join(
                                                                " "
                                                              ) ?? ""
                                                            ).includes(9) ||
                                                            String(
                                                              this.stage.vars.playerState.join(
                                                                " "
                                                              ) ?? ""
                                                            ).includes(10) ||
                                                              String(
                                                                this.stage.vars.playerState.join(
                                                                  " "
                                                                ) ?? ""
                                                              ).includes(28)
                                                          ) {
                                                            this.stage.vars.playerFrame.splice(
                                                              this.vars.p31 - 1,
                                                              1,
                                                              5
                                                            );
                                                            this.stage.vars.playerState.splice(
                                                              this.vars.p31 - 1,
                                                              1,
                                                              19
                                                            );
                                                            this.stage.vars.playerXSpeed.splice(
                                                              this.vars.p31 - 1,
                                                              1,
                                                              this.stage.vars
                                                                .playerDirection[
                                                                this.vars.p31 -
                                                                  1
                                                              ] * 2
                                                            );
                                                            this.stage.vars.playerYSpeed.splice(
                                                              this.vars.p31 - 1,
                                                              1,
                                                              3
                                                            );
                                                          }
                                                        }
                                                      } else {
                                                        if (
                                                          this.compare(f4, 12) <
                                                          0
                                                        ) {
                                                          this.costume =
                                                            "Lightning Thrust5";
                                                          if (
                                                            this.compare(
                                                              this.sprites[
                                                                "Logic"
                                                              ].vars.impact19,
                                                              0
                                                            ) < 0
                                                          ) {
                                                            this.stage.vars.playerX.splice(
                                                              this.vars.p31 - 1,
                                                              1,
                                                              this.stage.vars
                                                                .playerX[
                                                                this.vars.p31 -
                                                                  1
                                                              ] +
                                                                this.stage.vars
                                                                  .playerDirection[
                                                                  this.vars
                                                                    .p31 - 1
                                                                ] *
                                                                  4
                                                            );
                                                          }
                                                        } else {
                                                          if (
                                                            this.compare(
                                                              f4,
                                                              15
                                                            ) < 0
                                                          ) {
                                                            this.costume =
                                                              "Lightning Thrust6";
                                                          } else {
                                                            this.costume =
                                                              "Lightning Thrust6";
                                                            this.stage.vars.playerState.splice(
                                                              this.vars.p31 - 1,
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
                                                    this.compare(s5, 21) === 0
                                                  ) {
                                                    this.stage.vars.hitboxDamage.splice(
                                                      this.vars.p31 - 1,
                                                      1,
                                                      2
                                                    );
                                                    this.stage.vars.hitboxHitstun.splice(
                                                      this.vars.p31 - 1,
                                                      1,
                                                      16
                                                    );
                                                    if (
                                                      this.compare(f4, 3) < 0
                                                    ) {
                                                      this.costume = "Grab1";
                                                    } else {
                                                      if (
                                                        this.compare(f4, 5) < 0
                                                      ) {
                                                        this.costume = "Grab2";
                                                      } else {
                                                        if (
                                                          this.compare(f4, 6) <
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
                                                                    .p31 - 1
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
                                                              this.vars.p31 - 1,
                                                              1,
                                                              10
                                                            );
                                                            this.stage.vars.playerState.splice(
                                                              this.vars.p31 - 1,
                                                              1,
                                                              22
                                                            );
                                                          }
                                                          if (
                                                            this.compare(
                                                              f4,
                                                              10
                                                            ) < 0
                                                          ) {
                                                            this.costume =
                                                              "Grab4";
                                                          } else {
                                                            this.costume =
                                                              "Grab5";
                                                            this.stage.vars.playerFrame.splice(
                                                              this.vars.p31 - 1,
                                                              1,
                                                              52
                                                            );
                                                          }
                                                        }
                                                      }
                                                    }
                                                  } else {
                                                    if (
                                                      this.compare(s5, 22) === 0
                                                    ) {
                                                      if (
                                                        this.compare(f4, 12) < 0
                                                      ) {
                                                        this.costume = "Throw";
                                                      } else {
                                                        if (
                                                          this.compare(f4, 21) <
                                                          0
                                                        ) {
                                                          this.costume =
                                                            "" +
                                                            "Throw" +
                                                            (Math.round(
                                                              f4 / 3
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
                                                              this.vars.p31 - 1
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
                                                              f4,
                                                              23
                                                            ) < 0
                                                          ) {
                                                            this.costume =
                                                              "Throw5";
                                                            this.stage.vars.playerXSpeed.splice(
                                                              this.stage.vars.playerState.indexOf(
                                                                8
                                                              ) +
                                                                1 -
                                                                1,
                                                              1,
                                                              this.stage.vars
                                                                .playerDirection[
                                                                this.vars.p31 -
                                                                  1
                                                              ] * -12
                                                            );
                                                            this.stage.vars.playerHealth.splice(
                                                              this.stage.vars.playerState.indexOf(
                                                                8
                                                              ) +
                                                                1 -
                                                                1,
                                                              1,
                                                              this.stage.vars
                                                                .playerHealth[
                                                                this.stage.vars.playerState.indexOf(
                                                                  8
                                                                ) +
                                                                  1 -
                                                                  1
                                                              ] - 4
                                                            );
                                                          } else {
                                                            if (
                                                              this.compare(
                                                                f4,
                                                                28
                                                              ) < 0
                                                            ) {
                                                              this.costume =
                                                                "Throw6";
                                                              this.stage.vars.playerYSpeed.splice(
                                                                this.stage.vars.playerState.indexOf(
                                                                  8
                                                                ) +
                                                                  1 -
                                                                  1,
                                                                1,
                                                                5
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
                                                                    .p31 - 1
                                                                ] * -8
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
                                                                  f4,
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
                                                                    .p31 - 1,
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
                                                        this.compare(s5, 24) ===
                                                        0
                                                      ) {
                                                        if (
                                                          this.compare(f4, 4) <
                                                          0
                                                        ) {
                                                          this.costume = "Die";
                                                        } else {
                                                          if (
                                                            this.compare(
                                                              f4,
                                                              7
                                                            ) < 0
                                                          ) {
                                                            this.costume =
                                                              "Die2";
                                                          } else {
                                                            if (
                                                              this.compare(
                                                                f4,
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
                                                            s5,
                                                            25
                                                          ) === 0
                                                        ) {
                                                          if (
                                                            this.compare(
                                                              f4,
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
                                                              s5,
                                                              26
                                                            ) === 0
                                                          ) {
                                                            this.stage.vars.hitboxDamage.splice(
                                                              this.vars.p31 - 1,
                                                              1,
                                                              14
                                                            );
                                                            this.stage.vars.hitboxHitstun.splice(
                                                              this.vars.p31 - 1,
                                                              1,
                                                              30
                                                            );
                                                            if (
                                                              this.compare(
                                                                f4,
                                                                3
                                                              ) < 0
                                                            ) {
                                                              this.costume =
                                                                "Zlam";
                                                            } else {
                                                              if (
                                                                this.compare(
                                                                  f4,
                                                                  5
                                                                ) < 0
                                                              ) {
                                                                this.stage.vars.playerYSpeed.splice(
                                                                  this.vars
                                                                    .p31 - 1,
                                                                  1,
                                                                  18
                                                                );
                                                                this.costume =
                                                                  "Zlam2";
                                                              } else {
                                                                if (
                                                                  this.compare(
                                                                    f4,
                                                                    6
                                                                  ) < 0
                                                                ) {
                                                                  this.stage.vars.playerYSpeed.splice(
                                                                    this.vars
                                                                      .p31 - 1,
                                                                    1,
                                                                    2
                                                                  );
                                                                  this.costume =
                                                                    "Zlam3";
                                                                } else {
                                                                  if (
                                                                    this.compare(
                                                                      f4,
                                                                      12
                                                                    ) < 0
                                                                  ) {
                                                                    this.stage.vars.playerYSpeed.splice(
                                                                      this.vars
                                                                        .p31 -
                                                                        1,
                                                                      1,
                                                                      0.5
                                                                    );
                                                                    this.costume =
                                                                      "" +
                                                                      "Zlam" +
                                                                      (((f4 /
                                                                        2) %
                                                                        2) +
                                                                        4);
                                                                  } else {
                                                                    if (
                                                                      this.compare(
                                                                        f4,
                                                                        14
                                                                      ) < 0
                                                                    ) {
                                                                      this.stage.vars.playerYSpeed.splice(
                                                                        this
                                                                          .vars
                                                                          .p31 -
                                                                          1,
                                                                        1,
                                                                        -2
                                                                      );
                                                                      this.costume =
                                                                        "Zlam6";
                                                                    } else {
                                                                      if (
                                                                        this.compare(
                                                                          f4,
                                                                          16
                                                                        ) < 0
                                                                      ) {
                                                                        this.stage.vars.playerYSpeed.splice(
                                                                          this
                                                                            .vars
                                                                            .p31 -
                                                                            1,
                                                                          1,
                                                                          -20
                                                                        );
                                                                        this.costume =
                                                                          "Zlam7";
                                                                        if (
                                                                          this.compare(
                                                                            this
                                                                              .stage
                                                                              .vars
                                                                              .playerY[
                                                                              this
                                                                                .vars
                                                                                .p31 -
                                                                                1
                                                                            ],
                                                                            0
                                                                          ) > 0
                                                                        ) {
                                                                          this.stage.vars.playerFrame.splice(
                                                                            this
                                                                              .vars
                                                                              .p31 -
                                                                              1,
                                                                            1,
                                                                            14
                                                                          );
                                                                        }
                                                                      } else {
                                                                        if (
                                                                          this.compare(
                                                                            f4,
                                                                            18
                                                                          ) < 0
                                                                        ) {
                                                                          this.costume =
                                                                            "Zlam8";
                                                                        } else {
                                                                          if (
                                                                            this.compare(
                                                                              f4,
                                                                              20
                                                                            ) <
                                                                            0
                                                                          ) {
                                                                            this.costume =
                                                                              "Zlam9";
                                                                          } else {
                                                                            this.stage.vars.playerState.splice(
                                                                              this
                                                                                .vars
                                                                                .p31 -
                                                                                1,
                                                                              1,
                                                                              2
                                                                            );
                                                                            this.stage.vars.playerYSpeed.splice(
                                                                              this
                                                                                .vars
                                                                                .p31 -
                                                                                1,
                                                                              1,
                                                                              3
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
                                                                s5,
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
                                                                        .p31 - 1
                                                                    ]
                                                                  ),
                                                                  Math.abs(
                                                                    this.stage
                                                                      .vars
                                                                      .playerXSpeed[
                                                                      this.vars
                                                                        .p31 - 1
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
                                                                        .p31 - 1
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
                                                                          .p31 -
                                                                          1
                                                                      ]
                                                                    ),
                                                                    Math.abs(
                                                                      this.stage
                                                                        .vars
                                                                        .playerXSpeed[
                                                                        this
                                                                          .vars
                                                                          .p31 -
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
                                                                          .p31 -
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
                                                                  s5,
                                                                  4.1
                                                                ) === 0
                                                              ) {
                                                                this.stage.vars.hitboxHitstun.splice(
                                                                  this.vars
                                                                    .p31 - 1,
                                                                  1,
                                                                  9
                                                                );
                                                                this.stage.vars.hitboxDamage.splice(
                                                                  this.vars
                                                                    .p31 - 1,
                                                                  1,
                                                                  2
                                                                );
                                                                if (
                                                                  this.compare(
                                                                    f4,
                                                                    2
                                                                  ) < 0
                                                                ) {
                                                                  this.costume =
                                                                    "auto";
                                                                } else {
                                                                  if (
                                                                    this.compare(
                                                                      f4,
                                                                      3
                                                                    ) < 0
                                                                  ) {
                                                                    this.costume =
                                                                      "auto2";
                                                                  } else {
                                                                    if (
                                                                      this.compare(
                                                                        f4,
                                                                        5
                                                                      ) < 0
                                                                    ) {
                                                                      this.costume =
                                                                        "auto3";
                                                                    } else {
                                                                      if (
                                                                        this.compare(
                                                                          f4,
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
                                                                    s5,
                                                                    27
                                                                  ) === 0
                                                                ) {
                                                                  this.vars.h12 = 1;
                                                                  this.stage.vars.playerFrame.splice(
                                                                    this.vars
                                                                      .p31 - 1,
                                                                    1,
                                                                    -8
                                                                  );
                                                                  this.stage.vars.playerState.splice(
                                                                    this.vars
                                                                      .p31 - 1,
                                                                    1,
                                                                    6
                                                                  );
                                                                } else {
                                                                  if (
                                                                    this.compare(
                                                                      s5,
                                                                      28
                                                                    ) === 0
                                                                  ) {
                                                                    this.costume =
                                                                      "block crouch";
                                                                  } else {
                                                                    if (
                                                                      this.compare(
                                                                        s5,
                                                                        29
                                                                      ) === 0
                                                                    ) {
                                                                      this.stage.vars.playerXSpeed.splice(
                                                                        this
                                                                          .vars
                                                                          .p31 -
                                                                          1,
                                                                        1,
                                                                        this
                                                                          .stage
                                                                          .vars
                                                                          .playerDirection[
                                                                          this
                                                                            .vars
                                                                            .p31 -
                                                                            1
                                                                        ] * 4
                                                                      );
                                                                      this.stage.vars.hitboxXKnockback.splice(
                                                                        this
                                                                          .vars
                                                                          .p31 -
                                                                          1,
                                                                        1,
                                                                        3
                                                                      );
                                                                      this.stage.vars.hitboxYKnockback.splice(
                                                                        this
                                                                          .vars
                                                                          .p31 -
                                                                          1,
                                                                        1,
                                                                        3
                                                                      );
                                                                      this.stage.vars.hitboxDamage.splice(
                                                                        this
                                                                          .vars
                                                                          .p31 -
                                                                          1,
                                                                        1,
                                                                        6
                                                                      );
                                                                      if (
                                                                        this.compare(
                                                                          f4,
                                                                          5
                                                                        ) < 0
                                                                      ) {
                                                                        this.stage.vars.playerFrame.splice(
                                                                          this
                                                                            .vars
                                                                            .p31 -
                                                                            1,
                                                                          1,
                                                                          5
                                                                        );
                                                                      } else {
                                                                        this.stage.vars.playerCommands.splice(
                                                                          this
                                                                            .vars
                                                                            .p31 -
                                                                            1,
                                                                          1,
                                                                          ""
                                                                        );
                                                                        if (
                                                                          this.compare(
                                                                            f4,
                                                                            10
                                                                          ) < 0
                                                                        ) {
                                                                          this.costume =
                                                                            "Thunder Spin";
                                                                        } else {
                                                                          if (
                                                                            this.compare(
                                                                              f4,
                                                                              11
                                                                            ) <
                                                                            0
                                                                          ) {
                                                                            this.costume =
                                                                              "Thunder Spin2";
                                                                          } else {
                                                                            if (
                                                                              this.compare(
                                                                                f4,
                                                                                12
                                                                              ) <
                                                                              0
                                                                            ) {
                                                                              this.costume =
                                                                                "Thunder Spin3";
                                                                            } else {
                                                                              if (
                                                                                this.compare(
                                                                                  f4,
                                                                                  14
                                                                                ) <
                                                                                0
                                                                              ) {
                                                                                this.costume =
                                                                                  "Thunder Spin4";
                                                                              } else {
                                                                                if (
                                                                                  this.compare(
                                                                                    f4,
                                                                                    16
                                                                                  ) <
                                                                                  0
                                                                                ) {
                                                                                  this.costume =
                                                                                    "Thunder Spin5";
                                                                                } else {
                                                                                  this.costume =
                                                                                    "Thunder Spin6";
                                                                                  this.stage.vars.playerState.splice(
                                                                                    this
                                                                                      .vars
                                                                                      .p31 -
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
                                                                    } else {
                                                                      if (
                                                                        this.compare(
                                                                          s5,
                                                                          30
                                                                        ) === 0
                                                                      ) {
                                                                        this.stage.vars.hitboxXKnockback.splice(
                                                                          this
                                                                            .vars
                                                                            .p31 -
                                                                            1,
                                                                          1,
                                                                          6
                                                                        );
                                                                        this.stage.vars.hitboxYKnockback.splice(
                                                                          this
                                                                            .vars
                                                                            .p31 -
                                                                            1,
                                                                          1,
                                                                          -5
                                                                        );
                                                                        this.stage.vars.hitboxHitstun.splice(
                                                                          this
                                                                            .vars
                                                                            .p31 -
                                                                            1,
                                                                          1,
                                                                          9
                                                                        );
                                                                        if (
                                                                          this.compare(
                                                                            f4,
                                                                            6
                                                                          ) < 0
                                                                        ) {
                                                                          this.stage.vars.playerFrame.splice(
                                                                            this
                                                                              .vars
                                                                              .p31 -
                                                                              1,
                                                                            1,
                                                                            6
                                                                          );
                                                                        } else {
                                                                          if (
                                                                            this.compare(
                                                                              f4,
                                                                              9
                                                                            ) <
                                                                            0
                                                                          ) {
                                                                            this.costume =
                                                                              "Air Spike";
                                                                          } else {
                                                                            if (
                                                                              this.compare(
                                                                                f4,
                                                                                11
                                                                              ) <
                                                                              0
                                                                            ) {
                                                                              this.costume =
                                                                                "Air Spike2";
                                                                            } else {
                                                                              if (
                                                                                this.compare(
                                                                                  f4,
                                                                                  12
                                                                                ) <
                                                                                0
                                                                              ) {
                                                                                this.costume =
                                                                                  "Air Spike3";
                                                                              } else {
                                                                                if (
                                                                                  this.compare(
                                                                                    f4,
                                                                                    14
                                                                                  ) <
                                                                                  0
                                                                                ) {
                                                                                  this.costume =
                                                                                    "Air Spike4";
                                                                                } else {
                                                                                  if (
                                                                                    this.compare(
                                                                                      f4,
                                                                                      16
                                                                                    ) <
                                                                                    0
                                                                                  ) {
                                                                                    this.costume =
                                                                                      "Air Spike5";
                                                                                  } else {
                                                                                    if (
                                                                                      this.compare(
                                                                                        f4,
                                                                                        18
                                                                                      ) <
                                                                                      0
                                                                                    ) {
                                                                                      this.costume =
                                                                                        "Air Spike6";
                                                                                    } else {
                                                                                      if (
                                                                                        this.compare(
                                                                                          f4,
                                                                                          20
                                                                                        ) <
                                                                                        0
                                                                                      ) {
                                                                                        this.costume =
                                                                                          "Air Spike7";
                                                                                      } else {
                                                                                        this.costume =
                                                                                          "Air Spike8";
                                                                                        this.stage.vars.playerState.splice(
                                                                                          this
                                                                                            .vars
                                                                                            .p31 -
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
                                                                      } else {
                                                                        if (
                                                                          this.compare(
                                                                            s5,
                                                                            23
                                                                          ) ===
                                                                          0
                                                                        ) {
                                                                          if (
                                                                            this.compare(
                                                                              f4,
                                                                              8
                                                                            ) <
                                                                            0
                                                                          ) {
                                                                            this.costume =
                                                                              "Spark Shock";
                                                                          } else {
                                                                            if (
                                                                              this.compare(
                                                                                f4,
                                                                                24
                                                                              ) <
                                                                              0
                                                                            ) {
                                                                              this.costume =
                                                                                "" +
                                                                                "Spark Shock" +
                                                                                (((f4 -
                                                                                  8) %
                                                                                  8) +
                                                                                  2);
                                                                              if (
                                                                                this.compare(
                                                                                  f4,
                                                                                  23
                                                                                ) ===
                                                                                0
                                                                              ) {
                                                                                if (
                                                                                  !String(
                                                                                    this.stage.vars.playerState.join(
                                                                                      " "
                                                                                    ) ??
                                                                                      ""
                                                                                  ).includes(
                                                                                    8
                                                                                  )
                                                                                ) {
                                                                                  this.stage.vars.playerState.splice(
                                                                                    this
                                                                                      .vars
                                                                                      .p31 -
                                                                                      1,
                                                                                    1,
                                                                                    0
                                                                                  );
                                                                                }
                                                                              }
                                                                            } else {
                                                                              if (
                                                                                this.compare(
                                                                                  f4,
                                                                                  25
                                                                                ) <
                                                                                0
                                                                              ) {
                                                                                this.costume =
                                                                                  "lowpunch2";
                                                                              } else {
                                                                                if (
                                                                                  this.compare(
                                                                                    f4,
                                                                                    29
                                                                                  ) <
                                                                                  0
                                                                                ) {
                                                                                  this.costume =
                                                                                    "lowpunch7";
                                                                                } else {
                                                                                  if (
                                                                                    this.compare(
                                                                                      f4,
                                                                                      30
                                                                                    ) <
                                                                                    0
                                                                                  ) {
                                                                                    this.costume =
                                                                                      "Spark Shock14";
                                                                                  } else {
                                                                                    if (
                                                                                      this.compare(
                                                                                        f4,
                                                                                        31
                                                                                      ) <
                                                                                      0
                                                                                    ) {
                                                                                      this.costume =
                                                                                        "Spark Shock15";
                                                                                    } else {
                                                                                      if (
                                                                                        this.compare(
                                                                                          f4,
                                                                                          32
                                                                                        ) <
                                                                                        0
                                                                                      ) {
                                                                                        this.costume =
                                                                                          "Spark Shock16";
                                                                                      } else {
                                                                                        if (
                                                                                          this.compare(
                                                                                            f4,
                                                                                            33
                                                                                          ) <
                                                                                          0
                                                                                        ) {
                                                                                          this.costume =
                                                                                            "Spark Shock17";
                                                                                        } else {
                                                                                          if (
                                                                                            this.compare(
                                                                                              f4,
                                                                                              36
                                                                                            ) <
                                                                                            0
                                                                                          ) {
                                                                                            this.costume =
                                                                                              "Spark Shock18";
                                                                                          } else {
                                                                                            if (
                                                                                              this.compare(
                                                                                                f4,
                                                                                                38
                                                                                              ) <
                                                                                              0
                                                                                            ) {
                                                                                              this.costume =
                                                                                                "air punch";
                                                                                            } else {
                                                                                              if (
                                                                                                this.compare(
                                                                                                  f4,
                                                                                                  39
                                                                                                ) <
                                                                                                0
                                                                                              ) {
                                                                                                this.costume =
                                                                                                  "air punch2";
                                                                                              } else {
                                                                                                if (
                                                                                                  this.compare(
                                                                                                    f4,
                                                                                                    42
                                                                                                  ) <
                                                                                                  0
                                                                                                ) {
                                                                                                  this.costume =
                                                                                                    "air punch3";
                                                                                                } else {
                                                                                                  if (
                                                                                                    this.compare(
                                                                                                      f4,
                                                                                                      47
                                                                                                    ) <
                                                                                                    0
                                                                                                  ) {
                                                                                                    this.costume =
                                                                                                      "" +
                                                                                                      "Zlam" +
                                                                                                      (((f4 /
                                                                                                        2) %
                                                                                                        2) +
                                                                                                        4);
                                                                                                  } else {
                                                                                                    if (
                                                                                                      this.compare(
                                                                                                        f4,
                                                                                                        48
                                                                                                      ) <
                                                                                                      0
                                                                                                    ) {
                                                                                                      this.costume =
                                                                                                        "Zlam6";
                                                                                                    } else {
                                                                                                      if (
                                                                                                        this.compare(
                                                                                                          f4,
                                                                                                          50
                                                                                                        ) <
                                                                                                        0
                                                                                                      ) {
                                                                                                        this.costume =
                                                                                                          "Zlam7";
                                                                                                      } else {
                                                                                                        if (
                                                                                                          this.compare(
                                                                                                            f4,
                                                                                                            58
                                                                                                          ) <
                                                                                                          0
                                                                                                        ) {
                                                                                                          this.costume =
                                                                                                            "Spark Shock19";
                                                                                                        } else {
                                                                                                          if (
                                                                                                            this.compare(
                                                                                                              f4,
                                                                                                              60
                                                                                                            ) <
                                                                                                            0
                                                                                                          ) {
                                                                                                            this.costume =
                                                                                                              "Spark Shock10";
                                                                                                          } else {
                                                                                                            if (
                                                                                                              this.compare(
                                                                                                                f4,
                                                                                                                63
                                                                                                              ) <
                                                                                                              0
                                                                                                            ) {
                                                                                                              this.costume =
                                                                                                                "Spark Shock11";
                                                                                                            } else {
                                                                                                              if (
                                                                                                                this.compare(
                                                                                                                  f4,
                                                                                                                  65
                                                                                                                ) <
                                                                                                                0
                                                                                                              ) {
                                                                                                                this.costume =
                                                                                                                  "Spark Shock12";
                                                                                                              } else {
                                                                                                                this.costume =
                                                                                                                  "Spark Shock13";
                                                                                                                if (
                                                                                                                  this.compare(
                                                                                                                    f4,
                                                                                                                    75
                                                                                                                  ) ===
                                                                                                                  0
                                                                                                                ) {
                                                                                                                  this.stage.vars.playerState.splice(
                                                                                                                    this.stage.vars.playerState.indexOf(
                                                                                                                      7
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
                                                                                                                    1
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
                                                                            }
                                                                          }
                                                                        } else {
                                                                          if (
                                                                            this.compare(
                                                                              s5,
                                                                              31
                                                                            ) ===
                                                                            0
                                                                          ) {
                                                                            if (
                                                                              this.compare(
                                                                                f4,
                                                                                3
                                                                              ) <
                                                                              0
                                                                            ) {
                                                                              this.costume =
                                                                                "Lightning Cloud_1";
                                                                            } else {
                                                                              if (
                                                                                this.compare(
                                                                                  f4,
                                                                                  4
                                                                                ) <
                                                                                0
                                                                              ) {
                                                                                this.costume =
                                                                                  "Lightning Cloud_2";
                                                                              } else {
                                                                                if (
                                                                                  this.compare(
                                                                                    f4,
                                                                                    7
                                                                                  ) <
                                                                                  0
                                                                                ) {
                                                                                  this.costume =
                                                                                    "Lightning Cloud_3";
                                                                                } else {
                                                                                  if (
                                                                                    this.compare(
                                                                                      f4,
                                                                                      9
                                                                                    ) <
                                                                                    0
                                                                                  ) {
                                                                                    this.costume =
                                                                                      "Lightning Cloud_4";
                                                                                  } else {
                                                                                    if (
                                                                                      this.compare(
                                                                                        f4,
                                                                                        11
                                                                                      ) <
                                                                                      0
                                                                                    ) {
                                                                                      this.costume =
                                                                                        "Lightning Cloud_5";
                                                                                    } else {
                                                                                      this.costume =
                                                                                        "Lightning Cloud_6";
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          } else {
                                                                            if (
                                                                              this.compare(
                                                                                s5,
                                                                                -1
                                                                              ) ===
                                                                              0
                                                                            ) {
                                                                              this.stage.vars.playerFrame.splice(
                                                                                this
                                                                                  .vars
                                                                                  .p31 -
                                                                                  1,
                                                                                1,
                                                                                f4 +
                                                                                  1
                                                                              );
                                                                              if (
                                                                                this.compare(
                                                                                  f4,
                                                                                  29
                                                                                ) <
                                                                                0
                                                                              ) {
                                                                                this.x +=
                                                                                  this
                                                                                    .stage
                                                                                    .vars
                                                                                    .playerDirection[
                                                                                    this
                                                                                      .vars
                                                                                      .p31 -
                                                                                      1
                                                                                  ] *
                                                                                  (Math.sin(
                                                                                    this.degToRad(
                                                                                      f4 *
                                                                                        15 +
                                                                                        80
                                                                                    )
                                                                                  ) *
                                                                                    500);
                                                                                this.costume =
                                                                                  "" +
                                                                                  "Run_" +
                                                                                  (Math.round(
                                                                                    (f4 /
                                                                                      1) %
                                                                                      4
                                                                                  ) +
                                                                                    1);
                                                                                if (
                                                                                  this.compare(
                                                                                    Math.sin(
                                                                                      this.degToRad(
                                                                                        f4 *
                                                                                          15
                                                                                      )
                                                                                    ) *
                                                                                      500 *
                                                                                      this
                                                                                        .stage
                                                                                        .vars
                                                                                        .playerDirection[
                                                                                        this
                                                                                          .vars
                                                                                          .p31 -
                                                                                          1
                                                                                      ],
                                                                                    0
                                                                                  ) >
                                                                                  0
                                                                                ) {
                                                                                  this.direction = -1;
                                                                                } else {
                                                                                  this.direction = 1;
                                                                                }
                                                                              } else {
                                                                                if (
                                                                                  this.compare(
                                                                                    f4,
                                                                                    43
                                                                                  ) <
                                                                                  0
                                                                                ) {
                                                                                  this.direction -=
                                                                                    f4 *
                                                                                    60;
                                                                                  this.x +=
                                                                                    this
                                                                                      .stage
                                                                                      .vars
                                                                                      .playerDirection[
                                                                                      this
                                                                                        .vars
                                                                                        .p31 -
                                                                                        1
                                                                                    ] *
                                                                                      230 +
                                                                                    this
                                                                                      .stage
                                                                                      .vars
                                                                                      .playerDirection[
                                                                                      this
                                                                                        .vars
                                                                                        .p31 -
                                                                                        1
                                                                                    ] *
                                                                                      (Math.sin(
                                                                                        this.degToRad(
                                                                                          f4 *
                                                                                            10 +
                                                                                            210
                                                                                        )
                                                                                      ) *
                                                                                        200);
                                                                                  this.y +=
                                                                                    Math.cos(
                                                                                      this.degToRad(
                                                                                        f4 *
                                                                                          15 +
                                                                                          180
                                                                                      )
                                                                                    ) *
                                                                                    100;
                                                                                  this.rotationStyle =
                                                                                    Sprite.RotationStyle.ALL_AROUND;
                                                                                  if (
                                                                                    this.compare(
                                                                                      this
                                                                                        .stage
                                                                                        .vars
                                                                                        .playerDirection[
                                                                                        this
                                                                                          .vars
                                                                                          .p31 -
                                                                                          1
                                                                                      ],
                                                                                      1
                                                                                    ) ===
                                                                                    0
                                                                                  ) {
                                                                                    this.costume =
                                                                                      "Intro_1";
                                                                                  } else {
                                                                                    this.costume =
                                                                                      "Intro_2";
                                                                                  }
                                                                                } else {
                                                                                  if (
                                                                                    this.compare(
                                                                                      f4,
                                                                                      45
                                                                                    ) <
                                                                                    0
                                                                                  ) {
                                                                                    this.costume =
                                                                                      "Intro_3";
                                                                                    this.x +=
                                                                                      (20 +
                                                                                        (f4 -
                                                                                          43) *
                                                                                          -15) *
                                                                                      this
                                                                                        .stage
                                                                                        .vars
                                                                                        .playerDirection[
                                                                                        this
                                                                                          .vars
                                                                                          .p31 -
                                                                                          1
                                                                                      ];
                                                                                  } else {
                                                                                    if (
                                                                                      this.compare(
                                                                                        f4,
                                                                                        48
                                                                                      ) <
                                                                                      0
                                                                                    ) {
                                                                                      this.costume =
                                                                                        "Spark Shock19";
                                                                                    } else {
                                                                                      if (
                                                                                        this.compare(
                                                                                          f4,
                                                                                          50
                                                                                        ) <
                                                                                        0
                                                                                      ) {
                                                                                        this.costume =
                                                                                          "crouch2";
                                                                                      } else {
                                                                                        this.stage.vars.playerState.splice(
                                                                                          this
                                                                                            .vars
                                                                                            .p31 -
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
    this.vars.h12 = 0;
    yield* this.clone();
  }
}
