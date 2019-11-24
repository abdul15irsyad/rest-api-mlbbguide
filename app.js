const express = require('express');
const bodyParser = require('body-parser');
const hero = require('./routes/Hero');
const skill = require('./routes/Skill');
const auth = require('./routes/auth');
const authMiddleware = require('./middleware/authMiddleware');

require('dotenv').config();

const app = express();
const port = process.env.PORT|| 3003;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',function(req,res){
  res.send(`server running on port http://localhost:${port}`);
});

// register JWT
app.use('/api/auth', auth);

// authenticatoin with JWT
app.use(authMiddleware);

app.use('/api/hero', hero);
app.use('/api/skill', skill);


app.listen(port,()=>console.log(`server running on port http://localhost:${port}`));