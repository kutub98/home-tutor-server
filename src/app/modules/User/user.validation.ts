import { z } from 'zod';

// Validation for creating a user
export const createUserValidationSchema = z.object({
  body: z.object({
    username: z.string().min(1, 'Username is required'),
    img: z.string().optional(),
    email: z.string().email('Invalid email format'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    role: z.enum(['admin', 'tutor', 'guardian']).optional(),
    tutor: z
      .object({
        tuitionRelated: z
          .object({
            availabilityInformation: z
              .array(
                z.object({
                  availableDays: z
                    .array(
                      z.enum([
                        'Saturday',
                        'Sunday',
                        'Monday',
                        'Tuesday',
                        'Wednesday',
                        'Thursday',
                        'Friday',
                      ]),
                    )
                    .optional(),
                  time: z.string().optional(),
                  city: z.string().min(1, 'City is required'),
                  location: z.enum(['Chattogram']).optional(),
                  preferred: z.string().optional(),
                  expectedSalary: z.number().optional(),
                  tutoringStyles: z.string().optional(),
                  tutoringMethod: z.string().optional(),
                }),
              )
              .optional(),
            otherInformation: z
              .object({
                preferredCategories: z.array(z.string()).optional(),
                preferredClasses: z.array(z.string()).optional(),
                preferredSubjects: z.array(z.string()).optional(),
                placeOfTutoring: z.array(z.string()).optional(),
              })
              .optional(),
            experienceInformation: z
              .array(
                z.object({
                  totalExperience: z.number().optional(),
                  experienceDetails: z.string().optional(),
                }),
              )
              .optional(),
          })
          .optional(),
        educationRelated: z
          .array(
            z.object({
              levelOfEducation: z.string().optional(),
              examDegreeTitle: z.string().optional(),
              majorOrGroup: z.string().optional(),
              institute: z.string().optional(),
              currentInstitute: z.enum(['Yes', 'No']).optional(),
              curriculum: z.string().optional(),
              idCard: z.number().optional(),
              result: z.number().optional(),
              yearOfPassing: z.number().optional(),
              fromDate: z.string().optional(),
              toDate: z.string().optional(),
            }),
          )
          .optional(),
        personal: z
          .object({
            primaryInformation: z
              .object({
                name: z.string().min(1, 'Name is required'),
                additionalNumber: z.string().optional(),
                address: z.string().optional(),
                gender: z.enum(['Male', 'Female', 'Others']).optional(),
                dateOfBirth: z.string().optional(),
                religion: z
                  .enum(['Islam', 'Hinduism', 'Christianity', 'Buddhism'])
                  .optional(),
                identityType: z
                  .object({
                    passport: z.number().optional(),
                    nationalId: z.number().optional(),
                  })
                  .optional(),
                nationality: z.string().optional(),
                facebookProfileLink: z.string().optional(),
                linkedInProfileLink: z.string().optional(),
                fathersName: z.string().optional(),
                fathersNumber: z.string().optional(),
                mothersName: z.string().optional(),
                mothersNumber: z.string().optional(),
                overview: z.string().optional(),
              })
              .optional(),
            emergencyInformation: z
              .object({
                name: z.string().optional(),
                relation: z.string().optional(),
                number: z.string().optional(),
                address: z.string().optional(),
              })
              .optional(),
          })
          .optional(),
      })
      .optional(),
    guardian: z
      .object({
        personal: z
          .object({
            name: z.string().min(1, 'Name is required'),
            contactNumber: z.string().min(1, 'Contact number is required'),
            email: z.string().email('Invalid email format'),
            gender: z.enum(['Male', 'Female']).optional(),
            facebookOrLinkedInProfileLink: z.string().optional(),
            city: z.string().optional(),
            location: z.string().optional(),
            detailsAddress: z.string().optional(),
          })
          .optional(),
        additionalDetails: z
          .object({
            youAre: z.string().optional(),
            howDidYouHearAboutUs: z.string().optional(),
          })
          .optional(),
        emergencyInformation: z
          .object({
            name: z.string().optional(),
            relation: z.string().optional(),
            number: z.string().optional(),
            address: z.string().optional(),
          })
          .optional(),
      })
      .optional(),
  }),
});

// Validation for updating a user
export const updateUserValidationSchema = z.object({
  body: z.object({
    username: z.string().optional(),
    email: z.string().email('Invalid email format').optional(),
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters long')
      .optional(),
    img: z.string().optional(),
    role: z
      .enum(['admin', 'tutor', 'guardian', 'moderator', 'vip', 'general'])
      .optional(),
    tutor: z.any().optional(), // Adjust further if needed
    guardian: z.any().optional(), // Adjust further if needed
  }),
});
