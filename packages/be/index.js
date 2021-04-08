const express = require('express');

const port = process.env.PORT || 5000;
const app = express();

app.listen(port, err => {
  if (err) {
    // eslint-ignore-no-console
    console.error(`ERROR: ${err.message}`);
  } else {
    console.info(`Listening on port ${port}`);
  }
});
