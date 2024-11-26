import mongoose, { Schema } from 'mongoose';
import { IPackage } from './Package.interface';



const PackageSchema: Schema<IPackage> = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  packageName: {
    type: String,
    required: true,
  },
  packageDetails: {
    type: String,
    required: true,
  },
  packageInfo: {
    type: [String],
    required: true,
  },
  status: {
    type: String,
    enum: ['approved', 'delete', 'pending'],
    default: 'pending',
  },
});

export const Package = mongoose.model<IPackage>('Package', PackageSchema);
