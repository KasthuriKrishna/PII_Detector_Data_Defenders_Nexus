// Function to create and display a custom dialog
function showCustomDialog(message, onConfirm, onCancel) {
  // Create the dialog container
  const dialog = document.createElement('div');
  dialog.style.position = 'fixed';
  dialog.style.top = '50%';
  dialog.style.left = '50%';
  dialog.style.transform = 'translate(-50%, -50%)';
  dialog.style.zIndex = '1000';
  dialog.style.width = '400px';
  dialog.style.backgroundColor = '#fff';
  dialog.style.borderRadius = '8px';
  dialog.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
  dialog.style.padding = '20px';
  dialog.style.textAlign = 'center';

  // Add a warning image
  const warningImage = document.createElement('img');
  warningImage.src = 'data:image/png;base64,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'; // Replace with a warning image URL
  warningImage.alt = 'Warning';
  warningImage.style.width = '80px'; // Set desired width
  warningImage.style.height = '80px';
  warningImage.style.marginBottom = '20px';
  dialog.appendChild(warningImage);

  // Add the warning message
  const messageText = document.createElement('p');
  messageText.textContent = message;
  messageText.style.fontSize = '16px';
  messageText.style.marginBottom = '20px';
  dialog.appendChild(messageText);

  // Create button container
  const buttonContainer = document.createElement('div');
  buttonContainer.style.display = 'flex';
  buttonContainer.style.justifyContent = 'space-around';

  // Create "Verify PII" button
  const confirmButton = document.createElement('button');
  confirmButton.textContent = 'Verify PII';
  confirmButton.style.backgroundColor = '#4CAF50';
  confirmButton.style.color = 'white';
  confirmButton.style.border = 'none';
  confirmButton.style.padding = '10px 20px';
  confirmButton.style.borderRadius = '4px';
  confirmButton.style.cursor = 'pointer';
  confirmButton.addEventListener('click', () => {
    document.body.removeChild(dialog);
    if (onConfirm) onConfirm();
  });
  buttonContainer.appendChild(confirmButton);

  // Create "Cancel" button
  const cancelButton = document.createElement('button');
  cancelButton.textContent = 'Cancel';
  cancelButton.style.b
  ackgroundColor = '#f44336';
  cancelButton.style.color = 'white';
  cancelButton.style.border = 'none';
  cancelButton.style.padding = '10px 20px';
  cancelButton.style.borderRadius = '4px';
  cancelButton.style.cursor = 'pointer';
  cancelButton.addEventListener('click', () => {
    document.body.removeChild(dialog);
    if (onCancel) onCancel();
  });
  buttonContainer.appendChild(cancelButton);

  dialog.appendChild(buttonContainer);

  // Add the dialog to the body
  document.body.appendChild(dialog);
}

window.addEventListener("message", (event) => {
  // Ensure the message is coming from the expected origin
  if (event.origin === "http://localhost:3000") {
    const { action, maskedFilePath, weburl } = event.data;
    if (action === "fileDownloaded") {
      console.log("File downloaded:", maskedFilePath);

      // Handle further processing without redirecting the user
      // For example, log the download and continue with other extension functionalities
      handleRecentDownload(weburl,maskedFilePath);
    }
  }
});

function handleRecentDownload(weburl, maskedFilePath) {
  const fileName = maskedFilePath.split('\\').pop();
  console.log("Masked File Path:", maskedFilePath);
  console.log("Extracted File Name:", fileName);

  // Send a message to the background script to search for the file
  chrome.runtime.sendMessage(
    { action: "searchFile", fileName },
    (response) => {
      if (response?.results?.length > 0) {
        // File already exists in downloads
        console.log("File already exists in downloads:", response.results[0].filename);

        // Use the existing file
        const filePath = response.results[0].filename;
        const retrievedFile = new File([filePath], fileName, { type: "application/pdf" });
        console.log("Retrieved File:", retrievedFile);

        // Attach the file to Gmail compose window
        console.log("from exisiting file");
        attachFileToGmail(retrievedFile, fileName);
      } else {
        // File not found, fetch and download
        fetchAndDownloadFile(weburl, maskedFilePath, fileName);
      }
    }
  );
}

function fetchAndDownloadFile(weburl, maskedFilePath, fileName) {
  fetch(`http://127.0.0.1:5000/download/${maskedFilePath}`)
    .then(response => response.blob())
    .then(blob => {
      const fileUrl = URL.createObjectURL(blob);

      // Use the Chrome Downloads API to download the file
      chrome.downloads.download(
        {
          url: fileUrl,
          filename: fileName,
          saveAs: false
        },
        (downloadId) => {
          if (downloadId) {
            console.log("Download started with ID:", downloadId);

            // Attach the file to Gmail compose window
            console.log("fetching from backend");
            attachFileToGmail(blob, fileName);
          } else {
            console.error("Download failed.");
          }
        }
      );
    })
    .catch(error => {
      console.error("Error fetching the file:", error);
    });
}


function attachFileToGmail(blob, fileName) {
  // Find Gmail's file input element
  const gmailFileInput = document.querySelector('input[type="file"]');
  if (gmailFileInput) {
    console.log("Gmail file input found:", gmailFileInput);

    // Create a new File object
    const file = new File([blob], fileName, { type: blob.type });

    // Simulate a user selecting the file
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);

    gmailFileInput.files = dataTransfer.files;

    // Dispatch a 'change' event to notify Gmail about the file
    const event = new Event("change", { bubbles: true });
    gmailFileInput.dispatchEvent(event);

    console.log("File uploaded to Gmail successfully!");
  } else {+
    console.error("Gmail file input not found!");
  }
}

document.addEventListener("change", (event) => {
  if (event.target && event.target.type === "file") {
    console.log("File input detected:", event.target);
    const websiteUrl = window.location.href;
    console.log("Website URL:", websiteUrl);

    const files = event.target.files;
    if (files.length > 0) {
      for (const file of files) {
        console.log("File selected:", file.name, file.type, file.size);

        const timestamp = new Date().toISOString();
        console.log("Timestamp:", timestamp);

        // Store file details in Chrome's local storage
        const fileData = {
          fileName: file.name,
          websiteUrl: websiteUrl,
          timestamp: timestamp,
        };
        chrome.storage.local.get({ fileRecords: [] }, (result) => {
          const updatedRecords = [...result.fileRecords, fileData];
          chrome.storage.local.set({ fileRecords: updatedRecords }, () => {
            console.log("File data stored in local storage:", updatedRecords);
          });
        });

        // Read file content
        const reader = new FileReader();
        reader.onload = () => {
          console.log("File read successfully:", file.name);

          // Send the file to the background script for processing
          chrome.runtime.sendMessage(
            {
              action: "uploadFile",
              fileName: file.name,
              fileType: file.type,
              fileData: reader.result,
            },
            (response) => {
              console.log("Response from background.js:", response);

              if (response.data.pii_detected === 1) {
                // Show a warning and open inspection page
                showCustomDialog(
                  "Warning: Personally Identifiable Information detected in the uploaded file.",
                  () => {
                    console.log("User chose to verify PII.");
                    const piiListString = encodeURIComponent(
                      JSON.stringify(response.data?.pii_list || {})
                    );
                    const filePath = encodeURIComponent(response.data?.file_path || "");

                    const newWindow = window.open(
                      `http://localhost:3000/inspect?pii_list=${piiListString}&file_path=${filePath}&website_url=${encodeURIComponent(
                        websiteUrl
                      )}`,
                      "_blank"
                    );
                    
                  },
                  () => {
                    console.log("User chose to cancel.");
                  }
                );
              }
            }
          );
        };

        reader.readAsDataURL(file); // Convert the file to base64
      }
    }
  }
});
