import { IPackage } from "./Package.interface";
import { Package } from "./Package.modal";



const createPackage = async (packageService: IPackage) => {
  return await Package.create(packageService);
};

const findePackageById = async (PackageId: string) => {
  return await Package.findById(PackageId);
};

const getAllPackages = async () => {
  return await Package.find();
};

const updatePackageById = async (
  PackageId: string,
  payload: Partial<IPackage>,
) => {
  const result = await Package.findByIdAndUpdate(PackageId, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deletePackageById = async (PackageId: string) => {
  const result = await Package.findByIdAndDelete(PackageId);

  return result;
};

export const ServiceOfPackage = {
  createPackage,
  getAllPackages,
  updatePackageById,
  deletePackageById,
  findePackageById,
};
