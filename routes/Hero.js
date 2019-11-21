const express = require('express');
const router = express.Router();
const model = require('../models/index');

// get all heroes
router.get('/', async (req,res,next)=>{
  try{
    var heroes = await model.Hero.findAll({
      attributes: [['id','id_hero'],'nama_hero','gambar_hero']
    });
    if(heroes.length != 0){
      for await (var hero of heroes){
        var skills = await model.Skill.findAll({
          attributes: [['id','id_skill'],'nama_skill','deskripsi','gambar_skill'],
          where: {
            'heroId': hero.dataValues.id_hero
          }
        })
        var hero_role = await model.Hero_Role.findAll({
          attributes: [['roleId','id_role']],
          where: {
            'heroId': hero.dataValues.id_hero
          }
        });
        hero.dataValues.role = [];
        for await (var hr of hero_role){
          var role = await model.Role.findOne({
            where: {
              id: hr.dataValues.id_role
            }
          });
          hero.dataValues.role.push(role.dataValues.role);
        }
        hero.dataValues.skills = skills;
      }
      res.status(200).json({
        'status': true,
        'message': 'get all heroes',
        'data': heroes
      });
    }else{
      res.status(204).json({
        'status': true,
        'message': 'no heroes',
        'data': {}
      });
    }
  }catch(err){
    res.status(400).json({
      'status': false,
      'message': err.message,
      'data': {}
    });
  }
});

// get one hero
router.get('/:id', async (req,res,next)=>{
  try{
    var hero = await model.Hero.findOne({
      attributes: [['id','id_hero'],'nama_hero','gambar_hero'],
      where:{
        'id': req.params.id
      }
    });
    if(hero){
      var skills = await model.Skill.findAll({
        attributes: [['id','id_skill'],'nama_skill','deskripsi','gambar_skill'],
        where: {
          'heroId': hero.dataValues.id_hero
        }
      })
      var hero_role = await model.Hero_Role.findAll({
        attributes: [['roleId','id_role']],
        where: {
          'heroId': hero.dataValues.id_hero
        }
      });
      hero.dataValues.role = [];
      for await (var hr of hero_role){
        var role = await model.Role.findOne({
          where: {
            id: hr.dataValues.id_role
          }
        });
        hero.dataValues.role.push(role.dataValues.role);
      }
      hero.dataValues.skills = skills;
      res.status(200).json({
        'status': true,
        'message': 'get hero '+hero.dataValues.nama_hero+'',
        'data': hero
      });
    }else{
      res.status(200).json({
        'status': true,
        'message': 'hero not found',
        'data': {}
      });
    }
  }catch(err){
    res.status(400).json({
      'status': false,
      'message': err.message,
      'data': {}
    });
  }
});

// create a hero
router.post('/', async (req,res,next)=>{
  try{
    var hero = await model.Hero.create({
      nama_hero: req.body.nama_hero,
      gambar_hero: req.body.gambar_hero,
    });
    var roles = [];
    for await (var rb of req.body.role){
      var hero_role = await model.Hero_Role.create({
        heroId: hero.dataValues.id,
        roleId: rb
      });
      roles.push(hero_role.dataValues);
    }
    var skills = [];
    for await (var sb of req.body.skill){
      var skill = await model.Skill.create({
        nama_skill: sb.nama_skill,
        deskripsi: sb.deskripsi,
        gambar_skill: sb.gambar_skill,
        heroId: hero.dataValues.id
      });
      skills.push(skill.dataValues);
    }
    if(hero&&skills.length!=0&&roles.length!=0){
      res.status(201).json({
        'status': true,
        'message': 'success create hero',
        'data': {
          'id_hero': hero.dataValues.id,
          'nama_hero': hero.dataValues.nama_hero,
          'gambar_hero': hero.dataValues.gambar_hero
        }
      });
    }else{
      res.status(400).json({
        'status': false,
        'message': 'failed create hero',
        'data': {}
      });
    }
  }catch(err){
    res.status(400).json({
      'status': false,
      'message': err.message,
      'data': {}
    });
  }
});

// add skills to a hero
router.post('/:id/skill', async (req,res,next)=>{
  try{
    var hero = await model.Hero.findOne({
      attributes: ['id','nama_hero','gambar_hero'],
      where:{
        'id': req.params.id
      }
    });
    if(hero){
      var skill = await model.Skill.create({
        nama_skill: req.body.nama_skill,
        deskripsi: req.body.deskripsi,
        gambar_skill: req.body.gambar_skill,
        heroId: req.params.id
      });
      res.status(201).json({
        'status': true,
        'message': 'success add skill to '+hero.dataValues.nama_hero+'',
        'data': {}
      });
    }else{
      res.status(400).json({
        'status': false,
        'message': 'hero not found',
        'data': {}
      });
    }
  }catch(err){
    res.status(400).json({
      'status': false,
      'message': err.message,
      'data': {}
    });
  }
});

// edit a hero
router.patch('/:id', async (req,res,next)=>{
  try{
    var hero = await model.Hero.findOne({
      where: {
        id: req.params.id
      }
    })
    if(hero){
      var updateHero = await model.Hero.update({
        nama_hero: req.body.nama_hero,
        gambar_hero: req.body.gambar_hero,
      },{
        where: {
          id: hero.dataValues.id
        }
      });
      res.status(200).json({
        'status': true,
        'message': 'success update hero'+hero.dataValues.nama_hero+'',
        'data': {}
      });
    }else{
      res.status(400).json({
        'status': false,
        'message': 'hero not found',
        'data': {}
      });
    }
  }catch(err){
    res.status(400).json({
      'status': false,
      'message': err.message,
      'data': {}
    });
  }
});

// delete hero
router.delete('/:id',async (req,res,next)=>{
  try{
    var hero = await model.Hero.findOne({
      where: {
        id: req.params.id
      }
    });
    if(hero){
      var deleteHero = await model.Hero.destroy({
        where: {
          id: hero.dataValues.id
        }
      });
      res.status(200).json({
        'status': true,
        'message': 'success delete hero '+hero.dataValues.nama_hero+'',
        'data': {}
      });
    }else{
      res.status(400).json({
        'status': false,
        'message': 'hero not found',
        'data': {}
      });
    }
  }catch(err){
    res.status(400).json({
      'status': false,
      'message': err.message,
      'data': {}
    });
  }
});

module.exports = router;