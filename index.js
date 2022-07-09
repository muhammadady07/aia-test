const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require('./routes/flickrPhoto/index')(app);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});
app.listen(port, () => {
  console.log(`listen on port:${port}`);
});