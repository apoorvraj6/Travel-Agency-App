const express = require('express');
const {getPackages, getPackageById} = require('../Controllers/package.Controllers')
const {createBooking} = require('../Controllers/booking.Controller')

const router = express.Router();

router.get('/packages',getPackages);
router.get('/packages/:id',getPackageById)

router.post('/bookings',createBooking);

module.exports = router;