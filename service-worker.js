/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/2020/02/14/部落格介紹/index.html","ab8d3458220befcf948062bc01f29760"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/2021/04/02/前端P.01 - 網頁三兄弟/index.html","a1dbac53fce6127e33f4a8c8c066951c"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/2021/04/02/前端P.02 - ECMA組織/index.html","47dca83f0520dc5b0b610ab46a065db3"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/2021/04/02/前端P.03 - 分析解釋型、弱型別/index.html","77393faf06cda57ce67935be8b4b8ea8"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/2021/04/02/前端P.04 - JIT & V8/index.html","a48fef6abd80d3861d3b2f1ad9259d0a"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/2021/04/02/前端P.05 - TypeScript/index.html","c2c3b7586da0a70eefbe7beb6f7fdd7b"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/2021/04/02/前端P.06 - WebAssembly/index.html","0cc8022f901866344ff332ff176ec52c"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/2021/04/02/前端P.07 - jQuery & AJAX歷史/index.html","fd0fcff26a974e875a708bf7a026b618"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/2021/04/02/前端P.08 - AJAX & 跨域/index.html","b7c900624df063346d7e37eef977bc2f"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/2021/04/02/前端P.09 - 同步和異步/index.html","ba40f5bb75b4377e5f9d05d00ebe6710"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/2021/04/02/前端P.10 - Scope/index.html","9997ee4496041e5be789d57339652923"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/2021/04/02/前端P.11 - 模組/index.html","73ca5e77e0e2ad308704dfe6b4d1bddd"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/2021/04/02/前端P.12 - NodeJS/index.html","2b76c1b6e0c2621a93615293a532064b"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/2021/04/02/前端P.13 - WebPack/index.html","d1041fcef443473541556f2db2c4e6f6"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/2021/04/02/前端P.14 - 單元測試Mocha/index.html","eecf0f84fb95df18233754bf2022b937"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/2021/04/02/讀書P.01 - 人類簡史/index.html","0446e1a43258c9df2f810d13f1e04791"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/2021/04/02/通訊P.01 - 協定/index.html","1a4e17e9adfdc747bc2fca9ee21f9df9"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/2021/04/02/通訊P.02 - OSI七層模型/index.html","8541c800ba4b91aeb23536363075a3bf"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/2021/04/02/通訊P.03 - 實體層、介質/index.html","f9a593c22f745f5b0795fade87b7aba4"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/2021/04/02/通訊P.04 - 實體層、傳輸技術/index.html","6acc2c134eaeb3965b5e1e664983b19f"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/2021/04/02/通訊P.05 - 資料鏈結層/index.html","0de66bfe5b08521ca8c8ac3c946ce1e7"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/about/index.html","31a78093e2c702e65f91c8464479b6f3"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/archives/2020/02/index.html","ebaf6826c1d2670b6c53f585fed8e911"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/archives/2020/index.html","7582888c602596491b218d4d52609c68"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/archives/2021/04/index.html","b273173bec777f72ce5f82f4714c9c68"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/archives/2021/04/page/2/index.html","99342ed164863a83e784e443901a73df"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/archives/2021/index.html","c842f28490c44219a7177d40a35f02e9"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/archives/2021/page/2/index.html","35ff287f3ad34e80c0048661749061a9"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/archives/index.html","b37cc8942c2376e64a1680441c654bcd"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/archives/page/2/index.html","1b1479080ce6fa98ea01b70cf0b23d72"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/archives/page/3/index.html","9c673502bc6d973036b30555d9d096fc"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/categories/index.html","e4f1a72ec8c5e15399918f715759a935"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/categories/前端系列/index.html","1e6c17a82e3a77db01b2d747537e367d"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/categories/前端系列/page/2/index.html","e860df8977adcc5503501b1210d06e0f"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/categories/基本文件/index.html","0542a5e9f287a3e1bd666bf6fa2f3a6b"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/categories/讀書心得系列/index.html","fae3023f2239011ad59762eb23c23e80"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/categories/通訊協定系列/index.html","f105bc0a93c4279767e7363d0ca8f098"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/css/index.css","7d115e890f3fcc3bd156fa2858ced940"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/css/sakula/botui-theme-default.css","52d28c26ff2c5515baccdcd3907bd80f"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/css/sakula/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/css/sakula/style.css","6cb2d5d6b51ac16969496c1c6ffe5207"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/img/avatar.png","ee89bc1bdc0076c3d6f08fda3729f48f"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/img/favicon.png","fd7c135d10bc8759c0095bde359a215f"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/img/pwa/images/icons/icon-128x128.png","2e8412fd7f6b953e755943ae39a5723f"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/img/pwa/images/icons/icon-144x144.png","0cb05b247542c45d9bb7fc713bd08285"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/img/pwa/images/icons/icon-152x152.png","942f95f859dedfb8dc132385d0c7cf09"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/img/pwa/images/icons/icon-192x192.png","bced64be84b76012a362535dcf0ea230"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/img/pwa/images/icons/icon-384x384.png","4600bdad03f7cddf8293076bee5d13f1"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/img/pwa/images/icons/icon-512x512.png","6d60b8631f53ff44b7f7629a1b0ce384"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/img/pwa/images/icons/icon-72x72.png","0863b2cfdf20acc3ba79be542a2db3f0"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/img/pwa/images/icons/icon-96x96.png","fd93dace4701a5bcf97dd238de4ecb26"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/index.html","e8d2eeb4ef26e2d4e03fd976f39fd40e"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/js/botui.js","5449fc409b671a0be60c7b3f7a477ce2"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/js/main.js","36ac5c5196d2a4ac259c49270207bf68"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/js/self.js","511962e6a9a94b6d05e905c23a79897a"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/js/utils.js","b187f4047fb0a32ad026b2804dc0e966"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/page/2/index.html","7cf57a16b4f4ca95e1ba1e3e874b929a"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/page/3/index.html","d59564279e217b971edad6936016d172"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/16PSK/index.html","19e750ce47560f463dee78e9de07d4c5"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/1G/index.html","a33be40934f1423f9908f90ead74372e"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/2-4G/index.html","88ca291f0a396ac843a0d3d1e9ca32b9"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/2G/index.html","9229128384f37c8dc0e254c65f9629ea"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/3G/index.html","98dcc849b9e1b412f3e0836b89f4c708"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/4G/index.html","59c333ab02af2bf274f1e84e7e1b5f11"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/5G/index.html","a9044ef9374441ae67f7dc1413ed7087"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/AJAX/index.html","bfb89aac2772a2c0aa13cea8fd59209f"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/AM/index.html","de5082db324d7b59ceb7a6c4b29cbf07"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/AMD/index.html","f3919d3e4a9f8514ed3943a7185f9038"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/ARP/index.html","c58a38488e9f87cd4bb80ebc9171da21"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/ARPA/index.html","f6a175dcdd4ff8515a5ee37d5358cb7e"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/ARP攻擊/index.html","8ae01b8beba06beb0cc50054d9359ac9"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/ARP緩存表/index.html","49d04b8d1aaab3fe6e288a646088f960"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/ASK/index.html","5654c53eb2a2f4f63077875e90c30900"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/Async/index.html","efe1a2e91272adb367d30334ab0ad1e1"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/Await/index.html","4ff2a95eafeb6193a0f519b98371e56b"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/BPSK/index.html","d294fb5b0f86a2a449c39457870926ad"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/Bable/index.html","66040cf1649e2d70cdf34adc7638451e"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/C/index.html","e780a91e85abe8c51b52845145734977"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/CCITT/index.html","e2d39b438ad01e0a1413ef6a252fbd4e"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/CDMA/index.html","3c557121bb7251d897e11c441d35d9c9"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/CI-CD/index.html","6f7f1cb86aa8059f8bbb6d01e53b68de"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/CI/index.html","646cee91899f7100aa13cd876dbb58cb"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/CMD/index.html","bd56355f5d31dab112ee3f9f1df21fd3"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/CORS/index.html","b014b10bc4b4b009543e0d443b4f6d3b"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/CRC/index.html","ddb2087000290a58a9943870c4413daa"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/CSMA-CD/index.html","efe853951e38bf04c7dbe4153bbb9a91"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/CSMA-CS/index.html","1eace26b126bbe961e97e14c145d5b26"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/CSS/index.html","e3267bc67f44c60a376790cfa8159a0b"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/CallBack/index.html","196d3a3ab30229f5cd1110a99dc2141c"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/CodeStyle/index.html","d55de44d83ec05018cf7133c18e53e16"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/CommonJS/index.html","2fa890c59fb9bb48e6297a28c50912d5"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/DSAP/index.html","8e1a0927042600331096f018900df027"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/ECMA/index.html","aa0083f627219492edfea995cbf920d7"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/ECMAScript/index.html","657d5e8263006d568fdfcb486c86a8cc"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/ES5/index.html","53459fbb0cb4f85e4eb5aa75fc902d79"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/ES6/index.html","d574acf1a0c0069f46fdce11f13874f5"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/FDMA/index.html","73b125611f6ee0556bb69094fab93b42"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/FM/index.html","d6778f1e84dd4c644bde9b9e5664afd6"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/FSK/index.html","27eb3d603a5ce4c485609828a56772de"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/GC/index.html","fca74aed81a158a81b32eb8b4aa15f15"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/Google/index.html","9f119cff40b8151c3bdf47822c47c5d9"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/Hoisting/index.html","fcb9c7dc3640eff64fd3f8ddccdae15f"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/Html/index.html","79bf08ac410377faf1b6dcc432c6ba7b"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/IE/index.html","8ee8950b15ef08216d64623e6a422c76"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/IEEE/index.html","6aa72b6f3f190553b7771d7e268b606a"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/IEEE802-11/index.html","bfb4792f9989b85582d433d90c44e846"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/IEEE802/index.html","4bd22c39603c419e37e5c4b5f2e0741d"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/ISM/index.html","8e32b14c038bfa9a15d2878b0dba5c24"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/ISO-31-1/index.html","2b69aa1fa1a55df78e21f21a75ebd0ea"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/ISO/index.html","cdeae03293f9528db4018c672df3b26e"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/ITU/index.html","d6e691bc43d92972979c9cc187f5f8e1"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/JIT/index.html","8dc141987349ed6df39c8464f5406fc5"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/JSONP/index.html","7178dd1d19314456c7ea39a357d9e73a"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/JavaScript/index.html","7a5a2ccd3a5f4010cd6c22671585606b"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/LLC/index.html","9131c544619124df21d3e7c7a1b86e32"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/MAC/index.html","3c20a2387b4cd313527ff6707f88e9ce"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/MACAddress/index.html","82040f49df24ad04f41e11bd072106a4"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/Mocha/index.html","fd270cf842c45d29f7f1e43a33e79c88"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/NVM/index.html","cf39f62edd14aa7b27926284cb925cbd"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/Netscape/index.html","9d975a70271a7e30e8d3b885f6a071be"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/NodeJS/index.html","aed6d5d37a8bca13c9eef7376a69353b"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/OFDM/index.html","8b2f04d91a34b95786cd15532e6494f5"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/OSI/index.html","d35e7f62665958102958d445af28c449"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/PM/index.html","c178070ca090b7a48e1619d66ff0157a"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/PSK/index.html","4cb3f7a8559bae64c821387c96d66b8d"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/Promise/index.html","3f631b44a0df3a3b7a5b9c77a174f585"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/Proxy/index.html","e2769a4a51b031110afa0a0a7dd7631f"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/QAM/index.html","bd4e9d84c64697f16fe58e55514f689f"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/QPSK/index.html","60b9cf8ddf2cd2ebf326be45a289685d"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/RJ45/index.html","fe632448d7b3f0ad28c632f19073784e"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/RS-232C編碼/index.html","e29dd954ca9bc4157da29e969ea3df10"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/RequireJS/index.html","7892f704c961b159e25f8d9ec8d343b1"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/SSAP/index.html","effa9fe3a6d0118692e567177b8e18e7"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/STP/index.html","c53177b7b6fb66831dcd74552f033c7a"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/Scope/index.html","1a481d082398ea18c5ce3207ecb262b0"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/ServerJS/index.html","22818a50ef5f9a19fb6f32b1aee96d07"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/TCP-IP協定/index.html","6093eeea64815273e504e3a534c9b49e"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/TDMA/index.html","25161edeb2f46dccf4497be54863f2e8"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/TypeScript/index.html","d391f8c600777b545ad6048fefff0145"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/UTP/index.html","26e04a17ac49cbb75370a4071fb3147f"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/Uglify/index.html","4fbd87f69ae7c091c1425530d7f4f680"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/V8/index.html","957437ad5004cc783856b9b86d32e3ae"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/VSCode/index.html","9435969b89bbad5aef7489523eb08bd4"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/W3C/index.html","7241c2883680d2dcd0cab44e8ff34858"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/WebAssembly/index.html","5541d1c633839ed1b39cf33ddc0f9dd4"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/WebPack/index.html","43f107a6e17b9605ad7feb9276ae5005"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/WebSocket/index.html","3ee948319cd72c92f0c7d25b94138f12"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/WiFi/index.html","ad024d6b15fda52021d56a9687d88d35"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/WiFi探針/index.html","783b6b9216f41cdc61ea4c62e2e1650c"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/XMLHttpRequest/index.html","dca4aca39ec6f5357fcea6eed0653842"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/apply/index.html","25a7d459ad1680cd92e42726844e4ec0"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/bind/index.html","7e5093c68d5af56a51b1534397e71f7a"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/call/index.html","01674e35f640adee00af0cff647498f0"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/const/index.html","781268e2822856467933801939443f93"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/export/index.html","4bef7e29cf6082154a57c962fd76ba08"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/exports/index.html","c2925d2afbae782eff171e984703dc39"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/import/index.html","418e4c87efee1f3320c21b7d20362fa1"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/index.html","61c4d31c48ad2d8356fe5dc82711b2d2"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/jQuery/index.html","8bc4ecdc6a07d2f5aee0ea3b8bd62782"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/let/index.html","01ff49d7f51a683059b31eba8ab36a88"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/npm/index.html","85fe43a0bec451e86df7a888a6c46366"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/packeage-json/index.html","9a4b9bd4859c03ecdca0878b108df4c9"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/require/index.html","a23ef0b351c220b966ac596a3b19990b"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/runtime/index.html","bb5847f3df87f7424d94db7a7c2c3792"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/seaJS/index.html","23ae28c0800a6260d7aa595471d04d34"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/this/index.html","b6ece792b1a82ee136396f761750bbf8"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/tsc/index.html","323fdfc1f73e658a4749fdb1c1be647d"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/tsconfig-json/index.html","8ac663ab0b7e269b285a94078ed6d3e8"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/var/index.html","bbcf9a9e8feefb9d0fb3b87e34b017ce"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/中頻/index.html","80eb775d19a034bf95ad8e39b0017c6d"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/交流電/index.html","13aca97759fdb1373793c4beb66d7707"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/人流監控/index.html","315b059cdae001c5c7bd8c2c46d91aff"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/人類/index.html","f534db755e94dc2adb0281e69b30bc35"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/介質/index.html","5ff53c456fedafdec025bf086f66ac1f"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/傳輸層/index.html","dc6eda59201435c7cefe7b0a6cbeee9c"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/光纖/index.html","c44fb8151e6a965c57c1f87ce86cace8"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/全雙工/index.html","086f700812983af79b7892ceacda6b85"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/前端歷史/index.html","8e4cfa9f9e49e1d83f24aa7c716df98a"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/半雙工/index.html","6326f819b3c5871f22f3573a46180841"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/協定/index.html","9663756fa90c282e064f387c21e84d21"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/厄斯特/index.html","0c922ec91c74935d4d23505dabf313f6"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/可見光/index.html","489e33d7ae3fdd026943d8f4238ba059"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/同步/index.html","ea3fc1cb7e2ceb3d4c7701421e9eca49"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/同軸電纜/index.html","a6b5087c085d4d03f3bf5458417ee0a5"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/單元測試/index.html","20d7978514ef6e592b8be272dc4fabbc"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/單工/index.html","086feb938cbe9b397caaa0b5b2baaebf"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/嚴格模式/index.html","8624ccd88a150388363fb5e8ab546a13"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/國際電信聯盟/index.html","bfdd8214e08c3098981aab0212b2b7e0"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/基頻/index.html","14ad05a1d99cfda0373796abc27b9f14"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/多工/index.html","1ba31b5ec6aaa1ad690a920722bb4cc4"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/大腦/index.html","f37173ef338492ec38376161ac2e51b5"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/定位輔助/index.html","3e5120202b03a39e9e3dd8794732c9c2"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/實體層/index.html","bdbc790c964344bd884b9c4c1a661987"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/封包交換/index.html","3fa9e4bc8f36a2d0b2619fa0f7181de3"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/射頻/index.html","14930c30d7d01ca102c4ff74c00d499e"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/尼安德特人/index.html","a13cc556246bb9eb15743a0fc315595b"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/差動式曼徹斯特編碼/index.html","9b186de453a1216dfde0c848182cf94a"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/差動式零補差編碼/index.html","ad26f2effcd5cc42fa0f33ee2b383b6f"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/廣告投射/index.html","dc755a72ef128aa99724ca9e67af2fe3"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/弱型別/index.html","8a3ca8f8d2695232c32541df6c5f5e9f"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/強型別/index.html","15cccce14e1a8ac68f1b1691e51b2d5a"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/應用層/index.html","f231283003dd2778c316fcb2d1d857e1"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/抽象檔案-d-ts/index.html","59eb9e3febae59c7ee21365f8694dfe0"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/數位/index.html","a699ea1a2d639573f645cc9ae40bae85"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/時間/index.html","ae9164da084722cf96ba414a91a3a6d9"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/智人/index.html","6aa4c2a898882160ab8a758c7492a060"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/曼徹斯特編碼/index.html","0fdb88d0c33379f8549f63499a3a2992"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/會議層/index.html","e5d03ad5f3fce1a8fbe3754a97b730e3"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/有線通訊/index.html","a73bcb5e3da0e5d67abe406e3359534c"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/汙染變數/index.html","f386520e876a90e577bd509216ff094e"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/法拉第/index.html","5fb818f43129a50f3e4796931a3d2234"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/瀏覽器/index.html","aafdb47f09458417ef315941e7e7bfdf"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/無線通訊/index.html","f420dbeea08d2ee081746775cd0b9fca"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/特斯拉/index.html","87b0114938c6767275825d7ddbe0530a"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/異步/index.html","2bedfce352ca5a4583aca93046c23dcd"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/磁場/index.html","26e2776334b6219cdba9a211a84f8e5d"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/第一次瀏覽器大戰/index.html","86c94128c580250a1f2269646fac1373"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/第六代WiFi/index.html","9c35bfc40e6525d3f20193dd5e410326"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/網路層/index.html","f82ef8bd3e4b55cc1b39a4868f0cde78"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/線路交換/index.html","54f5b6b1975d74dfa4e1de9c561d03a4"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/緩存/index.html","016391a1596b870a98f76f66258d37d9"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/聲波/index.html","a81a8bbadf01c7462abe94dfcf043fda"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/能階/index.html","5a7aab06b6e85340f33a20ca183f5d21"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/腳本語言/index.html","46825540fa61cc1a4a0d9494762e9024"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/行為監控/index.html","9fbe4127effd19aeacd79b16e9f5ef37"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/表現層/index.html","91bf0d4d7518a85a0c7919290ef530fa"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/解釋型/index.html","b2018387dc3426a1bb491e90c10f2982"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/詐騙資料/index.html","fd72c0da0a4d707f420337774816aba8"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/調變/index.html","cbb2d8804cb44484f560c8e76fdc8e0a"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/資安保護/index.html","8894278b6e545ce1c59b204d9cb5ae29"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/資料鏈結層/index.html","9483ff4b070fe58c5381fb917a9ea182"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/跨域/index.html","f629dd72b40ebf9feb4f522b9d489cda"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/身分證/index.html","3b0ece40268ea78fd4d905f8fe32ee0e"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/通道訪問控制/index.html","cf9f7085f9842eb5486945307059da3f"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/銫原子/index.html","92995cdb12ba7296a0d84f0bd7296306"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/閉包/index.html","2310744ffc6cdf1d9bf6c913309205bd"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/雙工/index.html","eab9aaee85706ad763ef4e6ca71a9992"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/雙絞銅線/index.html","6f3745cc70e0bf9e82b077f6e155ec4e"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/雜訊/index.html","05e4a32e476f494ceb4b408a0eeccf95"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/電場/index.html","e71499c5710bd1392ef1d21a90d27e43"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/電磁波/index.html","c91466c536bd8650ef11062acaffb3be"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/電視/index.html","31855d16b7c53c4c39e232db62cf4c7b"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/靜態優化/index.html","9c1afa479f4b98bf0414cea9b7e34075"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/頻譜/index.html","c78a04c35f800c619ec7a69c40158da1"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/類比/index.html","7d8a6ab9e877ead4301a06d46ab7b736"],["C:/Users/jlthu/Desktop/Lucas/HexoTemp/public/tags/馬克士威/index.html","13b70268ff4628ba8b765a5e7932995a"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







