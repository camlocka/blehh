# kem Website

This repository contains the kem website files. The website has been configured to run locally using a simple Express server.

## Prerequisites

Before running the website, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or higher)
- npm (comes with Node.js)

## Installation

1. Open a terminal or command prompt
2. Navigate to the project directory:
   ```
   cd path/to/kem.com
   ```
3. Install the required dependencies:
   ```
   npm install
   ```

## Running the Website

1. Start the server:
   ```
   npm start
   ```
2. Open your web browser and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure

- `niggerhunters.com/` - Contains all the website files (HTML, CSS, JavaScript, images)
- `server.js` - Simple Express server to serve the website locally
- `package.json` - Node.js project configuration

## Modifications Made

- Updated all file paths to use relative paths instead of absolute paths
- Created a simple Express server to serve the website locally
- Added an index.html page as the homepage

## Notes

- The website is configured to run on port 3000 by default. If you need to change this, edit the `port` variable in `server.js`.
- Some features may require an internet connection (e.g., loading Google Fonts, fetching data from Google Sheets).