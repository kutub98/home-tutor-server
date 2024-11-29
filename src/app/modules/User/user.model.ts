// models/User.ts
import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './user.interface';

const availabilitySchema = new Schema({
  availableDays: [
    {
      type: String,
      enum: [
        'Saturday',
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
      ],
    },
  ],
  time: { type: String },
  city: { type: String, required: true },
  location: { type: String, enum: ['Chattogram'] },
  preferred: { type: String },
  expectedSalary: { type: Number },
  tutoringStyles: { type: String },
  tutoringMethod: { type: String },
});

const otherInformationSchema = new Schema({
  preferredCategories: [{ type: String }],
  preferredClasses: [{ type: String }],
  preferredSubjects: [{ type: String }],
  placeOfTutoring: [{ type: String }],
});

const experienceSchema = new Schema({
  totalExperience: { type: Number },
  experienceDetails: { type: String },
});

const educationSchema = new Schema({
  levelOfEducation: { type: String },
  examDegreeTitle: { type: String },
  majorOrGroup: { type: String },
  institute: { type: String },
  currentInstitute: { type: String, enum: ['Yes', 'No'] },
  curriculum: { type: String },
  idCard: { type: Number },
  result: { type: Number },
  yearOfPassing: { type: Number },
  fromDate: { type: String },
  toDate: { type: String },
});

const primaryInformationSchema = new Schema({
  name: { type: String, required: true },
  additionalNumber: { type: String },
  address: { type: String },
  gender: { type: String, enum: ['Male', 'Female', 'Others'] },
  dateOfBirth: { type: String },
  religion: {
    type: String,
    enum: ['Islam', 'Hinduism', 'Christianity', 'Buddhism'],
  },
  identityType: {
    passport: { type: Number },
    nationalId: { type: Number },
  },
  nationality: { type: String },
  facebookProfileLink: { type: String },
  linkedInProfileLink: { type: String },
  fathersName: { type: String },
  fathersNumber: { type: String },
  mothersName: { type: String },
  mothersNumber: { type: String },
  overview: { type: String },
});

const emergencyInformationSchema = new Schema({
  name: { type: String },
  relation: { type: String },
  number: { type: String },
  address: { type: String },
});

const tutorSchema = new Schema({
  tuitionRelated: {
    availabilityInformation: [availabilitySchema],
    otherInformation: otherInformationSchema,
    experienceInformation: [experienceSchema],
  },
  educationRelated: [educationSchema],
  personal: {
    primaryInformation: primaryInformationSchema,
    emergencyInformation: emergencyInformationSchema,
  },
});

const guardianPersonalSchema = new Schema({
  name: { type: String, required: true },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female'], required: true },
  facebookOrLinkedInProfileLink: { type: String },
  city: { type: String },
  location: { type: String },
  detailsAddress: { type: String },
});

const guardianSchema = new Schema({
  personal: guardianPersonalSchema,
  additionalDetails: {
    youAre: { type: String },
    howDidYouHearAboutUs: { type: String },
  },
  emergencyInformation: emergencyInformationSchema,
});

const userSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  img: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'tutor', 'guardian'],
    required: true,
  },
  tutor: tutorSchema,
  guardian: guardianSchema,
});

export const User = mongoose.model<IUser & Document>('User', userSchema);
