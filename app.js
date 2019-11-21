const express = require('express');
const bodyParser = require('body-parser');
const hero = require('./routes/Hero');
const skill = require('./routes/Skill');

const app = express();
const port = process.env.PORT|| 3003;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/hero', hero);
app.use('/skill', skill);

app.get('/',function(req,res){
  res.send('Try Sequelize JS');
});

app.listen(port,()=>{
  console.log('server running on port http://localhost:' + port);
});
