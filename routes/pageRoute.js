const express = require('express');
const pageController = require('../controllers/pageController');

const router = express.Router();

router.route('/').get(pageController.getIndexPage);
router.route('/about').get(pageController.getAboutPage);
router.route('/service').get(pageController.getServicePage);
router.route('/pricing').get(pageController.getPricePage);
router.route('/contact').get(pageController.getContactPage);

module.exports = router;