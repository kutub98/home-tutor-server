export interface ITutorDetails {
  tuitionRelated?: {
    availabilityInformation?: IAvailability[];
    otherInformation?: IOtherInformation;
    experienceInformation?: IExperience[];
  };
  educationRelated?: IEducationDetails[];
  personal?: IPersonalDetails;
}

export interface IGuardianDetails {
  personal: IGuardianPersonalDetails;
  additionalDetails?: IGuardianAdditionalDetails;
  emergencyInformation?: IEmergencyInformation;
}

// Common sub-interfaces
export interface IAvailability {
  availableDays?: (
    | 'Saturday'
    | 'Sunday'
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
  )[];
  time?: string;
  city: string;
  location?: 'Chattogram';
  preferred?: string;
  expectedSalary?: number;
  tutoringStyles?: string;
  tutoringMethod?: string;
}

export interface IOtherInformation {
  preferredCategories?: string[];
  preferredClasses?: string[];
  preferredSubjects?: string[];
  placeOfTutoring?: string[];
}

export interface IExperience {
  totalExperience?: number;
  experienceDetails?: string;
}

export interface IEducationDetails {
  levelOfEducation?: string;
  examDegreeTitle?: string;
  majorOrGroup?: string;
  institute?: string;
  currentInstitute?: 'Yes' | 'No';
  curriculum?: string;
  idCard?: number;
  result?: number;
  yearOfPassing?: number;
  fromDate?: string;
  toDate?: string;
}

export interface IPersonalDetails {
  primaryInformation?: {
    name: string; // Mandatory username
    additionalNumber?: string;
    address?: string;
    gender?: 'Male' | 'Female' | 'Others';
    dateOfBirth?: string;
    religion?: 'Islam' | 'Hinduism' | 'Christianity' | 'Buddhism';
    identityType?: {
      passport?: number;
      nationalId?: number;
    };
    nationality?: string;
    facebookProfileLink?: string;
    linkedInProfileLink?: string;
    fathersName?: string;
    fathersNumber?: string;
    mothersName?: string;
    mothersNumber?: string;
    overview?: string;
  };
  emergencyInformation?: IEmergencyInformation;
}

export interface IGuardianPersonalDetails {
  name: string;
  contactNumber: string;
  email: string;
  gender: 'Male' | 'Female';
  facebookOrLinkedInProfileLink?: string;
  city?: string;
  location?: string;
  detailsAddress?: string;
}

export interface IGuardianAdditionalDetails {
  youAre?: string;
  howDidYouHearAboutUs?: string;
}

export interface IEmergencyInformation {
  name?: string;
  relation?: string;
  number?: string;
  address?: string;
}

export interface IUser {
  username: string;
  email: string;
  img?: string;
  password: string;
  confirmPassword: string;
  role: 'admin' | 'tutor' | 'guardian';
  tutor?: ITutorDetails;
  guardian?: IGuardianDetails;
}
