import express from 'express';
var router   = express.Router()
import { check, validationResult } from 'express-validator';
import brandController from '../controller/brandController';
router.get('/brand-list', brandController.getAllBrand);
router.get('/brand/:brandId', brandController.brandDetail);




module.exports = router;
   