const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  'https://aia-test-zeta.vercel.app',
  'https://aia-fe.vercel.app',
];

// set allowed domain
app.use(
  cors({
    origin: function(origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
        'The CORS policy for this site does not ' +
        'allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  }),
);

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