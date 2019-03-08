const router = require('express').Router();
const bodyParser = require('body-parser');
const userController = require('../controllers/userController');

// MODULES OF BODY PARSER TO HAVE MAJOR SKILLS SEND DATA
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.get('/', (req, res) => {
  res.send('Hi API User');
});

/** @ROUTES OF APIS */
router.post('/newUser', userController.newUser);
router.get('/usersList', userController.userList);
module.exports = router;
