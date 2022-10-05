const router = require('express').Router();

router
  .route('/')
  .get()
  .post();

router
  .route('/:id')
  .get(getUserById)
  .put()
  .delete(deleteUser);

  const {
    getAllUser,
    getUserById,
    createUser,

  } = require('../../controllers/user-controller');

module.exports = router;