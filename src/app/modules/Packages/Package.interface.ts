

export interface IPackage {
  packageName: string;
  packageDetails: string;
  packageInfo: [string];
  img: string;
  status?: 'pending' | 'delete' | 'approved';
}
