import packageJson from "./package.json";

/**
 * After changing, please reload the extension at `chrome://extensions`
 */
const manifest: chrome.runtime.ManifestV3 = {
  manifest_version: 3,
  name: "SpeyScore",
  version: packageJson.version,
  description: packageJson.description,
  permissions: [
    "https://*.youtube.com/*",
    "activeTab",
    "storage",
    "webNavigation",
    "<all_urls>" as any,
    "tabs",
    "https://apim.christies.com/" as any,
    "https://www.bonhams.com/*" as any,
    "https://cars.bonhams.com/*" as any,
    "https://carsonline.bonhams.com/*" as any,
  ],
  options_page: "src/pages/options/index.html",
  host_permissions: [
    "https://*.youtube.com/*",
    "https://cars.bonhams.com/*",
    "https://carsonline.bonhams.com/*",
    "https://www.bonhams.com/*",
  ],
  background: {
    service_worker: "src/pages/background/index.js",
    type: "module",
  },
  action: {
    default_popup: "src/pages/popup/index.html",
    default_icon: "SpeyLogo32x32.png",
  },
  icons: {
    "64": "SpeyLogo64x64.png",
    "128": "SpeyLogo128x128.png",
  },
  content_scripts: [
    {
      matches: [
        "http://*/*",
        "https://*/*",
        "<all_urls>",
        "https://*.youtube.com/*",
        "https://cars.bonhams.com/*",
        "https://carsonline.bonhams.com/*",
        "https://www.bonhams.com/*",
      ],
      js: ["src/pages/content/index.js"],
      run_at: "document_idle",
      // KEY for cache invalidation
      css: ["assets/css/contentStyle<KEY>.chunk.css"],
    },
  ],
  devtools_page: "src/pages/devtools/index.html",
  web_accessible_resources: [
    {
      resources: [
        "assets/js/*.js",
        "assets/css/*.css",
        "icon-128.png",
        "icon-34.png",
        "SpeyLogo32x32.png",
        "SpeyLogo64x64.png",
        "SpeyLogo128x128.png",
      ],
      matches: ["*://*/*"],
    },
  ],
};

export default manifest;
