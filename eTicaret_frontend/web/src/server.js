const express = require('express');
const cors = require('cors');

const app = express();


app.use(cors({
    origin: 'http://localhost:3000' 
  }));
  


app.listen(8080, () => {
  console.log('Sunucu çalışıyor...');
});
