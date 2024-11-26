import express from 'express';

import validateRequest from '../../middlewares/validateRequest';
import { PackageValidation } from './Package.validation';
import { PackageController } from './Package.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(PackageValidation.createServiceValidationSchema),
  PackageController.createPackage,
);
router.get('/', PackageController.getAllPackages);
router.get('/:id', PackageController.findePackageById);
router.patch('/:id', PackageController.updatePackageById);
router.delete('/:id', PackageController.deletePackageById);

export const PackageRouter = router;
