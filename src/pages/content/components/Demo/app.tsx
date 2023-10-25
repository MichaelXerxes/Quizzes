import { useEffect, useState } from "react";

export default function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [textContent, setTextContent] = useState("");
  const [itemDetails, setItemDetails] = useState([]);
  const [currentURL, setCurrentURL] = useState(window.location.href);
  const [clickedElement, setClickedElement] = useState(null)
  const [lowerEstimate, setLowerEstimate] = useState("");
  const [upperEstimate, setUpperEstimate] = useState("");

  useEffect(() => {
    console.log(window.location.href);
  }, [clickedElement]);


  useEffect(() => {
    document.addEventListener('click', function(event) {
      const clickedElement1 = event.target;
      setTimeout(() => setClickedElement(clickedElement1), 2000)
      console.log('Clicked element:', clickedElement1);
    });
  }, []);


  useEffect(() => {
    console.log("content view loaded");

    const element = document.querySelector(".firstLine");
    setTextContent(element ? element.textContent.trim() : "Element not found");

    const lowerEstimateSpan = document.querySelector(
        ".sc-1x62phi-4.NMRks .sc-6uuz4h-0.jGIyMz:first-child"
    );
    const upperEstimateSpan = document.querySelector(
        ".sc-1x62phi-4.NMRks .sc-6uuz4h-0.jGIyMz:last-child"
    );

    setLowerEstimate(
        lowerEstimateSpan
            ? lowerEstimateSpan.textContent
            : "Lower estimate not found"
    );
    setUpperEstimate(
        upperEstimateSpan
            ? upperEstimateSpan.textContent
            : "Upper estimate not found"
    );

    function handleMessage(message) {
      if (message.type === "ITEM_RESPONSE" && message.data) {
        setItemDetails(message.data);
      }
    }

    if (element && chrome) {
      chrome.runtime.onMessage.addListener(handleMessage);

      chrome.runtime.sendMessage({
        type: "ITEM",
        payload: element.textContent.trim(),
      });
    }

    // Cleanup listener on unmount
    return () => {
      if (chrome) {
        chrome.runtime.onMessage.removeListener(handleMessage);
      }
    };
  }, [window.location.href, chrome?.tabs, currentURL, chrome, clickedElement]);


  chrome.tabs?.onUpdated?.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url) {
      setCurrentURL(changeInfo.url);
    }
  });

  const toastStyle = {
    position: "fixed",
    zIndex: "13212",
    top: "10px",
    right: "10px",
    backgroundColor: "#fff",
    color: "#000",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    maxWidth: "400px",
    overflowY: "auto",
    maxHeight: "600px",
  };

  const closeButtonStyle = {
    position: "absolute",
    right: "5px",
    top: "5px",
    cursor: "pointer",
  };

  if (!isVisible || itemDetails.length === 0) {
    return null;
  }

  return (
    <div style={toastStyle}>
      <span style={closeButtonStyle} onClick={() => setIsVisible(false)}>
        x
      </span>
      <span>
        <b>{textContent}</b>
      </span>
      <p>
        Estimate: {lowerEstimate} - {upperEstimate}
      </p>
      <h4 style={{ marginTop: "15px" }}>Similar items sold:</h4>
      {itemDetails.map((item, index) => (
        <div key={index} style={{ marginBottom: "15px" }}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <img
              src={item.image.image_desktop_src}
              alt={item.image.image_alt_text}
              style={{ width: "100%", marginBottom: "10px" }}
            />
          </a>
          <p>
            <b>Title:</b> {item.title_primary_txt}
          </p>
          <p>
            <b>Date sold:</b> {item.end_date}
          </p>
          <p>
            <b>Price Realised:</b> {item.price_realised_txt}
          </p>
        </div>
      ))}
    </div>
  );
}
