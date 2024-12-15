chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "uploadFile") {
    console.log("File data received in background.js:");
    console.log("Name:", message.fileName);
    console.log("Type:", message.fileType);

    // Convert the Base64 string back to a Blob
    const byteString = atob(message.fileData.split(",")[1]); // Decode base64
    const mimeString = message.fileType;
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uintArray = new Uint8Array(arrayBuffer);

    for (let i = 0; i < byteString.length; i++) {
      uintArray[i] = byteString.charCodeAt(i);
    }

    const fileBlob = new Blob([arrayBuffer], { type: mimeString });
    const formData = new FormData();
    formData.append("file", fileBlob, message.fileName);

    // Send the file to the endpoint
    const endpointUrl = "http://127.0.0.1:5000/scan_and_upload";
    fetch(endpointUrl, {
      method: "POST",
      body: formData, // Send FormData
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from the server:", data);
        sendResponse({ success: true, data: data });
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
        sendResponse({ success: false, error: error.message });
      });

    // Return true to indicate asynchronous sendResponse
    return true;
  }
  if (message.action === "searchFile") {
    // Use Chrome's Downloads API to search for the file
    chrome.downloads.search({ filenameRegex: message.fileName }, (results) => {
      sendResponse({ results });
    });

    // Return true to indicate an asynchronous response
    return true;
  }
});
