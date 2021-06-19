const {Router} = require('express');
const router = Router();

const ctrl = require('../controllers/controllers')

router.route('/user')
   
    .get(ctrl.pedirProductos)

    .post( ctrl.guardarProductos)

router.route('/user/delete/:id')
  
   // .put((req, res) =>{})
   .delete((req, res) =>{ res.send('entraste a edit y en  GET')})

module.exports = router