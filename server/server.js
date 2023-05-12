const express = require('express');
const app = express();


// Set the port number to use, either from an environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Start the server listening on the specified port
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});