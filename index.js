const fs = require('fs');
const path = require('path');
const axios = require('axios');
const { createWriteStream } = require('fs');

// Function to download a file from a URL
const downloadFile = async (url, folderPath) => {
    try {
        // Get the filename from the URL
        const filename = path.basename(url);
        const filePath = path.join(folderPath, filename);

        // Make a GET request to download the file
        const response = await axios({
            url,
            method: 'GET',
            responseType: 'stream'
        });

        // Create a write stream to save the file
        const writer = createWriteStream(filePath);

        // Pipe the response data to the write stream
        response.data.pipe(writer);

        return new Promise((resolve, reject) => {
            writer.on('finish', () => resolve(filename));
            writer.on('error', reject);
        });
    } catch (error) {
        console.error(`Failed to download ${url}. Reason: ${error.message}`);
    }
};

// Function to download files from a list of URLs
const downloadFilesFromList = async (urlFile, folderPath) => {
    // Ensure the folder exists
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }

    // Read URLs from the file
    const urls = fs.readFileSync(urlFile, 'utf-8').split('\n').filter(Boolean);

    // Download each file
    for (const url of urls) {
        const filename = await downloadFile(url, folderPath);
        if (filename) {
            console.log(`Downloaded: ${filename}`);
        }
    }
};

// Specify the path to your text file containing URLs and the destination folder
const urlFile = 'urls.txt';  // Replace with the path to your URL file
const folderPath = 'downloads';  // Replace with the desired download folder

// Start the download process
downloadFilesFromList(urlFile, folderPath);
