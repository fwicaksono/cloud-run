const express = require('express');
const app = express();

app.get("/", (req, res) => {
	res.send('Please give me a better place!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('Server listening on port ${PORT}...');
});
