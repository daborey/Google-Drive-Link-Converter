function convertLink() {
    // Get the input value
    const inputLink = document.getElementById("googleDriveLink").value;
    
    // Regular expression to extract the FILE_ID from the Google Drive link
    const regex = /\/d\/([a-zA-Z0-9_-]+)\//;
    const match = inputLink.match(regex);
  
    if (match && match[1]) {
      const fileId = match[1];
      
      // Create the direct download link
      const directLink = `https://drive.google.com/uc?id=${fileId}`;
  
      // Show the converted link
      document.getElementById("convertedLink").innerText = directLink;
      document.getElementById("output").style.display = "block";
    } else {
      // Show error if the link is not in the correct format
      alert("Please enter a valid Google Drive share link.");
      document.getElementById("output").style.display = "none";
    }
  }
  