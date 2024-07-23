const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());
app.use('/share', require('./share/index'));
app.use('/reactBoosting', require('./reactBoosting/index'));

app.use('/postIDget', require('./postIDget/index'));
app.use('/fbidOnsite', require('./fbidOnsite/index'));
app.use('/TACgetter', require('./TACgetter/index'));

const server = app.listen(port, () => {
  console.log(`Your API server is running on http://localhost:${port}`);
  console.log('Bonummaster  api services is running!');
  console.log('2 router are now active');
});

server.on('error', (error) => {
  console.error('Server error:', error);
});
