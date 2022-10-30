const router = require('express').Router();
const File = require('../models/file');

// : for dynamic value
router.get('/:uuid', async(req,res) =>{

    try{
        const file = await File.findOne({uuid: req.params.uuid});
        if(!file){
            return res.render('download' , {error:'Link has been expired upload again!'});
        };
        return res.render('download',{
            uuid: File.uuid,
            fileName: File.fileName,
            fileSize: File.size,
            downloadLink:`${process.env.APP_BASE_URL}/files/download/${File.uuid}`
        });

    } catch(err){
        return res.render('download' , {error:'something is wrong!!!!!!'})
    }
})


module.exports = router;