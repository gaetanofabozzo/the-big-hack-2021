const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

// the __dirname is the current directory from where the script is running
// app.use(express.static(__dirname));


// send the user to index html page inspite of the url
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'app', 'index.html'));
// });

// console.log(path.join(__dirname, 'build', 'app', 'index.html'));

app.use(express.static(path.join(__dirname, 'build', 'app')))

const server = app.listen(port, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Server app listening at http://%s:%s`, host, port);
});