const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req);
  if (req.url === "/") {
    res.end("welcome to our home page ");
    return;
  }
  if (req.url === "/about") {
    res.end("Here is Our short history");
    return;
  }
  res.end(`
  <h1>Oops! </h1>
  <p>We can't seem to find the page you are looking for </p>
  <a href="/">back to home</a>
  `);
  // if/else if/else
});

server.listen(5000);
