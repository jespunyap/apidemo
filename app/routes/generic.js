var router = require('express').Router()
const fs = require('node:fs');

  router.get('/search', function(req, res) {
    res.json({ message: 'Vas a buscar un genèric' })
  })
  router.get('/', function(req, res) {
    //res.json({ message: 'Estàs connectat a la nosatra API al recurs genèric' })

    
    fs.readFile('resources/prova.txt', 'utf8', (err, data) => {
      if (err) {
        //console.error(err);
        return;
      }
      res.json({message: data});
      //console.log(data);
    });

  })
  router.get('/:id', function(req, res) {
    //res.json({ message: 'Vas a obtenir el genèric amb id ' + req.params.id })
    fs.readFile('resources/'+req.params.id+'.json', 'utf8', (err, data) => {
        if (err) {
          //console.error(err);
          res.sendStatus(404);
          return;
        }
        res.json(JSON.parse(data));
        //console.log(data);
      });
  })
  router.post('/', function(req, res) {
    res.json({ message: 'Vas a afegir un genèric' })
  })
  router.put('/:id', function(req, res) {
    res.json({ message: 'Vas a actualizar un genèric amb id ' + req.params.id })
  })
  router.delete('/:id', function(req, res) {
    res.json({ message: 'Vas a esborrar el genèric amb id ' + req.params.id})
  })
  module.exports = router