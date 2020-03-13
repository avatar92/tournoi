const express = require("express");
const router = express.Router();


const Tournoi = require('../../models/Tournoi')
const Match = require('../../models/Match')
const Equipe = require('../../models/Equipe')


//@route /api/addEquipe
//@desc route to add equipe
//@access public
router.post('/addEquipe',(req,res)=>{
    const newEquipe=new Equipe({
        title:req.body.title,
        nombreJoueur:req.nombreJoueur
    })
    newEquipe.save().then(equipe=>res.status(200).json(equipe)).catch(e=>console.log(e))
})
//@route /api/all
//@desc fetch all equipe
//@access public
router.get('/all',(req,res)=>{
    Equipe.find().then(equipes=>res.status(200).send(equipes))
})







module.exports = router;
