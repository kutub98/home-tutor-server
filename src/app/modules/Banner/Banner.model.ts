// models/Service.ts
import mongoose, { Schema } from 'mongoose';
import { IBanner } from './Banner.interface';

const bannerSchema: Schema<IBanner> = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  BannerName: {
    type: String,
    required: true,
  },

  BannerDetailse: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['approved', 'delete', 'pending'],
    default: 'pending',
  },
});

export const Banner = mongoose.model<IBanner>('Banner', bannerSchema);

