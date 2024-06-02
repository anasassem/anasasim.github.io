'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b5b9f0dfb6422b29bd2c2a8201b243ea",
".git/config": "77a3dcf125473260fe0a2d62e92c255f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9e511107b1cb01364469e22640310fd3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c961bb26ad7a1f918c1347e44e8c66ad",
".git/logs/refs/heads/main": "6408b3c572c570623706cf4fe0e18d53",
".git/logs/refs/remotes/origin/main": "933f268f07cc453ced6959048aafa930",
".git/objects/00/aef9f18c7edc58ea19df2a2028626ed96b61de": "c06458fc0167b9931907ea236d06ff67",
".git/objects/01/a736ab0f2c149bef0fdef42275839aed476bc0": "ad7399637faefbc5b6e9d7ce8e94cc5d",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/07/f5832750477dc8bfe7572bd05c49f9cde94729": "19c25244e35362e87b9d55e48e0d958c",
".git/objects/0b/400aad752edfdd7210558604afc26110426b5e": "7c5db9e879df673d58851905cde0d655",
".git/objects/0e/98b5b1ccb9516105e89aee3baa168cd23b6454": "b39058364a1b8aac5eb27168592e0a4a",
".git/objects/0e/fdb547ce9ac414f44f32e79de5a90c8beb4eb9": "ec5e86602f49617431726638597895b7",
".git/objects/14/7d2ce148114b6b88a372f6e264ed31e9d11634": "e695f2a7f90a2d684e9d5395dfb14f69",
".git/objects/14/c4d1f21d74b6b9a24270b9b5eaec352f8aaccb": "44d94dff5669743737fdd5df36e7b035",
".git/objects/15/175d16a956b69384badad96ad6b88921d7d99c": "ee16ff06abf4e30943d711ce5a30810f",
".git/objects/15/997ea3e1c50d948d554d1fa190d2733b9fd0d0": "96030445aa801fe017be1c2609fab230",
".git/objects/16/574a243539b9d2184f322d6e0f51717cf411b9": "380c7e9906e5d3f4e2ee423d76dde8f0",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/19/c3a58e8db0cbab31ae64aa67433ba3e8d20511": "b47dfb12c8f6ca1371e186fff3266730",
".git/objects/1c/95b6b7d12bd196f52e5559c0ac0a3bf39f898d": "4895f364dacc32d5b29b36f53df553ed",
".git/objects/1d/98889d0e2a8eda59fce1f98e2883c5359e2de6": "2149c2fec8c75879c1e182b9a2d367d2",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/bce4294c5bb215f8635ab6084eb630d3fecefc": "489e6b975522e0016354c85339850021",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/66b86a895bdf46c5629aa0289155a00c71ea58": "e2076f472f724f7b35345559bbcd91c5",
".git/objects/22/d2087a8a97d817698d9a779b6c166e7a884b16": "0a6684ea904c376b5c7b713191f941d5",
".git/objects/23/f1b5d40e8aefeeb5a645459babc9034059e8c7": "5ffaa19b984a30804163613a78ab1a55",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/2b37c4030c48a9374c3a6d4b86326c3fa81d98": "a2f5df32f17ef69a2277b2f4dc763bcc",
".git/objects/2f/5bb3d1df3d4c73b1476d0252404f00b96adc1e": "5f91cce73ae9ecd90cf001b696651957",
".git/objects/32/7291518f32e687f9f95f6d610abf1ae85bcbba": "f0324116cd5771c1a2b652f3ea3002d9",
".git/objects/3c/de6d14e6672f73d9fa9d505cb71c321c72c7ec": "a36bea884a923bfc5a62bf1ffa0d6a76",
".git/objects/3e/045f2aa64d956b936e306df9787d2b5f5b4c28": "4520692c2b6af5f98b0e4af2d8a85f1e",
".git/objects/3f/e2a9fbf4fd3117d2d11740229cba0172bc1f53": "0851599a7c3ffc72fcf539758a5a5c75",
".git/objects/42/2b7ec44dadcfd6daad9a5ae0505b89d7b9761a": "ca3ace8d1811bb5caedf2d1cdd685af3",
".git/objects/43/f3dfbded58dd2b2a66e7638312bb42c129fbb4": "377c4f4c4390c6e6d19a7dc41a52ef8d",
".git/objects/44/435fb1b723bf84b112c606cf7734e5ba705724": "737138d8fe6e546f4fdbb6e7ad3d2999",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/61ccdd6e8112f7c14bce18818596b920543bef": "24da81cc129ea16e8c6b643aff24d061",
".git/objects/46/f2988f2c8a92267529a7b6abd68ad61656c233": "d5698b18eb5d873bce834855e5219aad",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/f968b9ea95b0cf66a5cfb62f077d09cd27908b": "0d1dbbf98603c9c1c30460af9b9ff121",
".git/objects/4f/61e7217663e02518a767a39397fd46bceb296a": "86524f5c0c5e04b5c00948df637ae129",
".git/objects/52/5f80166364582eef4a94ea493a097e6ece48dd": "df01d244097f012e24e2621c223d486a",
".git/objects/55/bb8cb498c8ea9769ce432798a062d0de98e601": "3a2dc2237927347bede8af045ef45c3b",
".git/objects/56/c8d06523ec5d72e798a3d5c23519c37e103fc1": "50991b5124a80a00e0f8f4dbef04746d",
".git/objects/57/eccdea6a4a2874c43b00bc3eb141a867ac0c87": "f4f50358c3c6cb78ea87bf540f0225bd",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/59/fb9ca42dfc6ed04eb10b5a42b01c89c7c28a43": "9367320c9e2064412a6cfa21d0ca5264",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5a/b6c7cf6d1efc5a48aad8f88f99b2296a1803e8": "374ecfc7227c32818d70c0e217771c22",
".git/objects/5c/f62a00bd89181cccf7586277cbbbd88e2af1c4": "f21cd9a350a710d861c1c27ce3ce8647",
".git/objects/63/3e8ecec720b07cc640933d5aa347c77e4903e3": "391a0100a0f2cbf813d91afdae164226",
".git/objects/63/45fc3c517ea918aafffaae36fc85e6365e7d7f": "fd7543a36724094759caafb3e348d7da",
".git/objects/64/3c83932d0fe55d22bbc84863c69c29a2c601f8": "6bfa9da1db497dfa3545962f87ae3910",
".git/objects/66/b01926612f13ce6cad72bc8936fc8d459da5a6": "77eef0e8aa448841086257ab6609d35c",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6a/7e2c1c0aa103e571d081a7017b527a90a66ad3": "5bd2ea002894fbd3522a1bffba8ef1e4",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/70/b3bf409d9ade1b43d5f8991bf35006768e4310": "89917bdb21f2a306bfe8bd02eea9980c",
".git/objects/70/fd9e0b9e6a973fb9287d74db14697f45c20e09": "41cc30c10aa6deef2c6b1e7858f13cdb",
".git/objects/71/1cf059be654b5eba2bda18af883006d3d21718": "239672431e572952680459dd45bad266",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/75/dda7c725b9a8912cdb583adb50d5b9b80ebbc6": "c4c695518077e26395afe2232199e4a9",
".git/objects/77/4afb5e2fd2cb98d008c014a4922d6ba0f3a43e": "4f449eaba079aa4b80e879f8082535cf",
".git/objects/7f/52abf2d074a998d6974366116449eaa91d9bd3": "5a2b1ad1c686fe801c2bab5d4b1fa777",
".git/objects/80/2ca84182b23103ef1c4e11970e6e064f1aa4d2": "d5ea7296d98fc4bc5bce24efbc6af885",
".git/objects/80/37bf434effc9142e2995103ae58dc998bd9a52": "fe18eede4084ea1cfbb38f5dee9c9b74",
".git/objects/80/b5892cfedd3f1386fd5678c464c86ab3c6ec5e": "bff42a4ad7c69c34b5032629d9a1551f",
".git/objects/82/d418162adc075e7f614d194d245d19d4434063": "7126838e6655e96982b7e8c88ff18f33",
".git/objects/82/de45a0c9ed1ee6bc04f58df2eccfae99fb313b": "e53eaaa7f9911c33a3aad55cb99f622f",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/c206523fe78db0af65699d699bc64a726343a4": "473a6d34f8c09478b249015100bc8b94",
".git/objects/90/c53ba9d6f9c09a360f43231bf4376d723cadb8": "0424ed596f3e3ef5fd3db4806b1a4bf7",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/9c/2eb92782023fcce42920f06d636bc48031738e": "447ae2c04612d5a39d2c83b5cf15d063",
".git/objects/a3/bcf3a30b21a13816dfee4a57db32e570940f1a": "bec097fe4195414b820050ccf1853b7c",
".git/objects/ad/09bcc13880db26f1d212722921f5128aedc151": "6382e0557cc8d710190928cd05561dd6",
".git/objects/af/4008ec07e9e0416b804e33c92e71612cbed0be": "70c482d5eb63d324000dd1d66da2913a",
".git/objects/af/5890efb47662030fc6dc81c02e2ea7a6aaa3de": "bb3a860560198be46615c02287580e8b",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b2/9384e4167eda7028687ee958c7e374ec243e30": "7b0e6097638e2653402fd689653bd843",
".git/objects/b4/2d6c36f476cd45f06f2e3f06c660d492e6beb2": "dff53593fd61c952b75fb7026ca947a4",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/4a2476037b08e186ef3307a5aba9d3cb1982dd": "56200b05d53d4f41d1a4c471964d6dcd",
".git/objects/bd/ab1dd656da7210db8bcc4039eaa761c4dffada": "e9a92f195334bce8a73ac9a8be47fdfa",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/ca/00ff2df34311ca07bc27f30c7d7f19f5489feb": "e34f8bca0f4153c1d282d8ddb5f54984",
".git/objects/d1/7403208fb1de0ee688db5e5c7c238796c0ebbf": "af4af19df6ab572798e91c0dcd7fb802",
".git/objects/d3/80ac0a82ecacf3f49ee4be585cdafaf43d0cda": "a9b66a8ff5a31e23ac70b14a34ed2d47",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/22d588292b0a8bc7cd18cfcff91d41dade8fd3": "b3dccc059e84b4edefea68b389398ee4",
".git/objects/d8/c5dfea757e72b0ad232e91d1cbe91052a50b67": "4e2562ed576959efd79d88256d4eff68",
".git/objects/da/03b44e34dcf6db143ca9d8fa4427d3234f35bb": "81312cbf12abbb76db3ea75b2b0c8205",
".git/objects/dc/da766b401caff5daba538a7f0d9cac98822f49": "25af2d3c064ddace82673f95c1fc71f7",
".git/objects/de/e295273ce06f1f253d6613da2008e2536abc65": "7956325e3b2326ee223370717793d7c3",
".git/objects/e0/f8d9f33548511b706563d9310f02bd1eb5227f": "9a3562c793797adb6b9c7f288936d73f",
".git/objects/e5/757f03d0080c582f6d35390c68a826cc017750": "78df453c7dfc53042acb3e6ed2348bef",
".git/objects/e7/10d63c3157c6e6ebe0c0d50681e917a777d4c0": "2b23a6ec98ba2734ceb53cd113ed765a",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/72c13f651dcec0cb764984667b7d9a2094b694": "0feff0bf9deedd3e1fe9f37cc016b187",
".git/objects/ea/2f964c427fb9ec9f297fcd9d8de8679252b39f": "b782b426b4023751a126dcf2b6d68859",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/86dee855cfd16881dddc825eab699d1529607b": "454417fadadb123058dcc113832d4fd4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/6845fbf0709310a261ef5dcd0548d08ed77a2f": "4e7bce125c7e47912da5c4a32785f45f",
".git/objects/fa/44fd6953df9d1aaed213e5427aad4654afa784": "b188ec6688ecade29254fbb1dc5095c8",
".git/objects/fc/2c0830b46e4ff93382cdc45db95070b8ed169b": "77bca3d9a9396609a5ea161152d0ce78",
".git/objects/fc/4741934def703da19cb0e4573221c56bf23231": "2251358a9473d23fe382c635d9491ec5",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/ff/c6ee574d200e1b079a4c5046b585cac78f66ad": "aa343fd19a34e8dc940e47e381ed3d19",
".git/refs/heads/main": "926f621ec96dc183bc7794a9847715cb",
".git/refs/remotes/origin/main": "926f621ec96dc183bc7794a9847715cb",
"assets/AssetManifest.bin": "89e63659a0bb03dd113466683a409e72",
"assets/AssetManifest.bin.json": "1c57a2c930942ea7c22694cb2f67f198",
"assets/AssetManifest.json": "162574858e9ed8def729fa9badd92a3f",
"assets/assets/background.png": "850816efb0b1c1156f70a5a8ef51cab2",
"assets/assets/coupon.png": "c56910d78f23ebb43fdfc28823aae127",
"assets/assets/eyewater.png": "d5eec26480e0045393edabefd9e16db4",
"assets/assets/mnsa.png": "176a71f9ad63b76d8c180113e23c7786",
"assets/assets/notfeel.png": "cbc91189764ab63dc253ad6c18c243b7",
"assets/assets/photo.png": "9e707cae0ed375571ab85ee39c595a27",
"assets/assets/quiet.png": "30241d8bb9e38dbf3d67ad610eafd979",
"assets/assets/story.png": "a07c589526223c6b30f14677e8b488b1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c1ca25a31897323a30a52b14f1a0699b",
"assets/NOTICES": "3d1c9078f3e3712205a05a5d66d0ec81",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a5242bd00910fb05549cad9eb5d970b6",
"/": "a5242bd00910fb05549cad9eb5d970b6",
"main.dart.js": "591e867564e83657b9544c536ca94200",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
