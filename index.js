const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // เรียกใช้ไฟล์ในโฟลเดอร์ public

app.post('/webhook', (req, res) => {
  const url = req.body.url;
  const cleanedURL = cleanURL(url);
  res.send(cleanedURL);
});

function cleanURL(url) {
  let cleanedURL = url.replace(/&zone=Europe\/Rome&os=ios/g, "").replace(/&zone=Europe\/Rome&os=Android/g, "");
  cleanedURL = cleanedURL.replace("https://spdmteam.com/key-system-1?hwid=", "");
  return cleanedURL;
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});