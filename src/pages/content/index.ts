console.log("content loaded2");

/**
 * @description
 * Chrome extensions don't support modules in content scripts.
 */
import("./components/Demo");

console.log(window.location.href);
