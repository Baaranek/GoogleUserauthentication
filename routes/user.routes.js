const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
  req.user 
  ? res.render('logged', {avatar: true, user: true, userName: req.user.displayName, image: req.user._json.picture,}  ) 
  : res.render('noPermission');
});

router.get('/no-permission', (req, res) => {
  req.user ? res.render('logged') : res.render('noPermission');
});

router.get('/profile', (req, res) => {
  req.user ? res.render('profile') : res.render('noPermission');
});

router.get('/profile/settings', (req, res) => {
  req.user ? res.render('settings') : res.render('noPermission');
});



module.exports = router;