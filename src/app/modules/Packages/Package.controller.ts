import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ServiceOfPackage } from './Package.service';



const createPackage = catchAsync(async (req, res) => {
  const result = await ServiceOfPackage.createPackage(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Service created Successfully',
    data: result,
  });
});

const findePackageById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ServiceOfPackage.findePackageById(id);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Successfully retrive single Package',
    success: true,
    data: result,
  });
});

const getAllPackages = catchAsync(async (req, res) => {
  const result = await ServiceOfPackage.getAllPackages();
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Successfully retrived All Package',
    success: true,
    data: result,
  });
});

const updatePackageById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ServiceOfPackage.updatePackageById(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Successfully update Service',
    data: result,
  });
});
const deletePackageById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ServiceOfPackage.deletePackageById(id);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Successfully update Service',
    data: result,
  });
});

export const PackageController = {
  createPackage,
  getAllPackages,
  findePackageById,
  updatePackageById,
  deletePackageById,
};
