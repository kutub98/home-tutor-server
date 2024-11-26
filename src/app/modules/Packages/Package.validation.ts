import { z } from 'zod';

const createServiceValidationSchema = z.object({
  body: z.array(
    z.object({
      img: z.string(),
      packageName: z.string(),
      packageDetails: z.string(),
      packageInfo: z.array(z.string()),
      status: z.enum(['approved', 'delete', 'pending']).optional(),
    }),
  ),
});

export const PackageValidation = {
  createServiceValidationSchema,
};
