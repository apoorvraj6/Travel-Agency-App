const express = require('express');

const {createPackage,updatePackage,deletePackge} = require('../Controllers/package.Controllers')
const {getAllBookings} = require('../Controllers/booking.Controller')

const router = express.Router();

router.post('/packages',createPackage);

router.put('/packages/:id',updatePackage)

router.delete('/packages/:id',deletePackge)


router.get('/bookings',getAllBookings)

module.exports = router;