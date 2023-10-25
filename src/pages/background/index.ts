import reloadOnUpdate from "virtual:reload-on-update-in-background-script";

console.log("hello2");

reloadOnUpdate("pages/background");

/**
 * Extension reloading is necessary because the browser automatically caches the css.
 * If you do not use the css of the content script, please delete it.
 */
reloadOnUpdate("pages/content/style.scss");

console.log("background loaded2");

function getResultsFromChristies(keyword, callback) {
  const headers = {
    Accept: "application/vnd.christies.v1+json",
    "Accept-Language":
      "en-GB,en-US;q=0.9,en;q=0.8,de-CH;q=0.7,de-AT;q=0.6,de;q=0.5,fr-FR;q=0.4,fr;q=0.3",
    Origin: "https://www.christies.com",
    Referer: "https://www.christies.com/",
  };

  console.log("Searching...");
  fetch(
    "https://apim.christies.com/search-client?keyword=" +
      encodeURIComponent(keyword) +
      "&page=1&is_past_lots=True&sortby=relevance&language=en&geocountrycode=PL&show_on_loan=true&datasourceId=182f8bb2-d729-4a38-b539-7cf1a901cf2e",
    { method: "GET", headers: headers }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log("data");
      console.log("data " + JSON.stringify(data));
      if (data?.lots) {
        console.log("Sending response")
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
          var activeTabId = tabs[0].id;
          console.log("Active tab ID:", activeTabId);
          chrome.tabs.sendMessage(activeTabId, {
            type: "ITEM_RESPONSE",
            data: data.lots
          });
        });

        callback({ type: "ITEM_RESPONSE", data: data.lots })
      }
    })
    .catch((error) => {
      console.log("error");
      console.error("Error fetching data from API:", error);
      callback({ type: "ITEM_RESPONSE", error: "Error fetching data" });
    });
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "ITEM") {
    console.log("Received:", message.payload);
    if (message.payload) {
      getResultsFromChristies(message.payload, sendResponse);
      // This line is important for async sendResponse usage.
      return true; // indicates the response is sent asynchronously
    }
  }
});
