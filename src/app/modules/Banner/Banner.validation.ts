import { z } from 'zod';

export const createBannerValidationSchema = z.object({
  body: z.array(
    z.object({
      img: z.string(),
      BannerName: z.string().optional(),
      BannerDetailse: z.string(),
      status: z.enum(['approved', 'delete', 'pending']).optional(),
    })
  ),
});


export const updateBannerValidationSchema = z.object({
  body: z.object({
    img: z.string().optional(),
    BannerName: z.string().optional(),
    BannerDetailse: z.string().optional(),
    status: z.enum(['approved', 'delete',  'pending']).optional(),
  }),
});

export const ServiceValidations = {
  createBannerValidationSchema,
  updateBannerValidationSchema,
};
