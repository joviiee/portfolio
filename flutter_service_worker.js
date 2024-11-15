'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"flutter_bootstrap.js": "6933e2e8ec3d5d87090e6021c739e5a5",
"favicon.ico": "35c37bbb0f0a0802a31c71f8b3fc97d9",
"site.webmanifest": "3722a86e1c6b2d1e310599ecb6402c83",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"apple-touch-icon.png": "29a60f8e86f4ff12b8b47ebb9e0406e2",
"main.dart.js": "dd20ab8939e0d5348fc811a371d01199",
"android-chrome-192x192.png": "fd3e824ffde9dde5c8d96cdffc285755",
"version.json": "f633dac77c94a46e2c032d30851cbbb5",
"favicon-32x32.png": "1a3ed673c82de35a54108179ed298e24",
"index.html": "9644a5197eabdd10592dd7f8adf9e55b",
"/": "9644a5197eabdd10592dd7f8adf9e55b",
"android-chrome-512x512.png": "4330186349312828d15fae30efdf7de2",
"favicon-16x16.png": "f9233fcaff2ae14ce615828a8930e650",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/AssetManifest.bin.json": "bb2acffe059764d56a1e6d98049863d6",
"assets/NOTICES": "03c113d3341b7320af8f80d0f603a380",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "0f216bbf66ba845e523a78d6722c2900",
"assets/AssetManifest.json": "fa3b928d48c7d190a308b3c6806f3761",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/FontManifest.json": "26a2abbb159d0a7962ed766b56f13c51",
"assets/assets/images/smote.png": "f489cf457379f457cc7163caeb28951b",
"assets/assets/images/clustering.png": "01642783fd3cc1ae22f18d85b4222eec",
"assets/assets/images/california.png": "fa9e70cdfda982beab032f67cb58b534",
"assets/assets/images/portfolio.png": "ceb1582d9e2ba3f9900b2b15fa8e6af6",
"assets/assets/images/titanic.png": "1618f775634cc5dd7e1a3d3780bb3806",
"assets/assets/images/personality_pred.png": "d297b85a7c7f45893488c169cb4c3d23",
"assets/assets/images/hr.png": "0f029331794ecbe898f8ce27f8c2df87",
"assets/assets/fonts/Inkfree.ttf": "73428cd1ad823d01d77b642ee6104415",
"assets/assets/fonts/Inter_28pt-Light.ttf": "3ea4007efbbb2f30c2c73275eef5c2b0",
"assets/assets/fonts/JimNightshade-Regular.ttf": "9be86d0d0d87706ba36c18742ed8ef4c",
"assets/assets/logos/tech/django.png": "0f2ad6827a157eb5bd84cc1fbb7e61b5",
"assets/assets/logos/tech/flutter.png": "8efb797d33c586ef3cb71d4083dd1fdb",
"assets/assets/logos/tech/react.png": "11a3b80361cb535e4d718ea519b696ba",
"assets/assets/logos/tech/python.png": "eb1d40d00b548388140a4f3b98c7ea6c",
"assets/assets/logos/tech/matplotlib.png": "a62a2c4cf9b039d642fddc9a86a6344d",
"assets/assets/logos/tech/spacy.png": "f845c4e6fb6584c8a2a50ac08b7ddeb3",
"assets/assets/logos/tech/dart.png": "918e7c35823c7ad268ba831c6e7eaa64",
"assets/assets/logos/tech/sklearn.png": "12e6d98b4faadf71d2170dcc3d204974",
"assets/assets/logos/tech/css.png": "55548e135848c37c24e27824dd584556",
"assets/assets/logos/tech/git.png": "5b2255699fcb506b570720cdbc8ade1b",
"assets/assets/logos/tech/pandas.png": "f0e5a0a4a54c345473d2b8ed61015815",
"assets/assets/logos/tech/pytorch.png": "0d1a0bb976aac2df1757dd4ae48bd07e",
"assets/assets/logos/tech/tensorflow.png": "b2101c5fdb4f0c6863b6196dfea17ea7",
"assets/assets/logos/tech/docker.png": "7a51b6accb8dde65e841640345bf3e6c",
"assets/assets/logos/tech/scipy.png": "7b9cbff323789a632bb8f91426181976",
"assets/assets/logos/tech/html.png": "27b0afc8d7069fad77a6ece74eeb7e83",
"assets/assets/logos/tech/numpy.png": "965cd34f1541308bbe1119d16166b2a6",
"assets/assets/logos/skills/ml.png": "12cffb85206b7c7f6764b5f582ecd082",
"assets/assets/logos/skills/webdev.png": "6c73ade4a8ebd8e571dadca0bb6434c8",
"assets/assets/logos/skills/control.png": "479f2043955555fdc41dc89a4eb637b4",
"assets/assets/logos/skills/eda.png": "9bd8e8e73f80c7216ad7c50ad80eb18b",
"assets/assets/logos/social_media/githubb.png": "1b9b9f71269e504156ce9d89a00f2551",
"assets/assets/logos/social_media/github.png": "9181c9cf2ee47b4265ac43d46f09bea5",
"assets/assets/logos/social_media/linkedin.png": "9f03b54abd1a557a0ac435e9cec7ea17",
"assets/assets/logos/social_media/instagram.png": "4f7cb5fbb28d0f9ddc97641f8b288735",
"assets/assets/logos/social_media/telegram.png": "817d585a7dd0775dbc9b41927bd043ca",
"assets/assets/logos/social_media/whatsapp.png": "19455d676899e370bd5cc0bab6b41c6f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
