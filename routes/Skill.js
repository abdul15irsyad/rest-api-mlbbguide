const express = require('express');
const router = express.Router();
const model = require('../models/index');

// get one skill
router.get('/:id',async (req,res,next)=>{
  try{
    var skill = await model.Skill.findOne({
      attributes: [['id','id_skill'],'nama_skill','deskripsi','gambar_skill','heroId'],
      where: {
        id: req.params.id
      }
    });
    if(skill){
      var hero = await model.Hero.findOne({
        where: {
          id: skill.dataValues.heroId
        }
      });
      // skill.dataValues.nama_hero = hero.dataValues.nama_hero;
      res.status(200).json({
        status: true,
        message: 'get a skill from '+hero.dataValues.nama_hero+'',
        data: skill
      })
    }else{
      res.status(400).json({
        status: false,
        message: 'skill not found',
        data: {}
      });
    }
  }catch(err){
    res.status(400).json({
      status: false,
      message: err.message,
      data: {}
    });
  }
});

// edit a skill
router.patch('/:id',async (req,res,next)=>{
  try{
    var skill = await model.Skill.findOne({
      where: {
        id: req.params.id
      }
    });
    if(skill){
      var updateSkill = await model.Skill.update({
        nama_skill: req.body.nama_skill,
        deskripsi: req.body.deskripsi
      },{
        where: {
          id: skill.dataValues.id
        }
      });
      res.status(200).json({
        status: true,
        message: 'success update skill',
        data: {}
      });
    }else{
      res.status(400).json({
        status: false,
        message: 'skill not found',
        data: {}
      });
    }
  }catch(err){
    res.status(400).json({
      status: false,
      message: err.message,
      data: {}
    });
  }
});

// delete skill
router.delete('/:id',async (req,res,next)=>{
  try{
    var skill = await model.Skill.findOne({
      where: {
        id: req.params.id
      }
    });
    if(skill){
      var deleteSkill = await model.Skill.destroy({
        where: {
          id: skill.dataValues.id
        }
      });
      res.status(200).json({
        status: true,
        message: 'success delete skill',
        data: {}
      });
    }else{
      res.status(400).json({
        status: false,
        message: 'skill not found',
        data: {}
      });
    }
  }catch(err){
    res.status(400).json({
      status: false,
      message: err.message,
      data: {}
    });
  }
});

module.exports = router;