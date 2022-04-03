// ==UserScript==
// @name         Spunch-r-place
// @namespace    non
// @homepageURL  non
// @version      1.0.0
// @description  SPUNCH
// @author       lordoffatcats
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// @license      GPL-3.0
// ==/UserScript==
if (window.top !== window.self) {
  window.addEventListener(
    "load",
    () => {
      document
        .getElementsByTagName("mona-lisa-embed")[0]
        .shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0]
        .shadowRoot.children[0].appendChild(
          (function () {
            const i = document.createElement("img");
            i.src = "https://github.com/lordoffatcats/r-place-spunch-overlay/blob/master/Spongeoverlay.png?raw=true";
            i.style =
              "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
            console.log(i);
            return i;
          })()
        );
    },
    false
  );
}
