export interface IBanner {
  img: string;
  BannerName: string;
  BannerDetailse: string;
  status?: 'approved' | 'delete' | 'pending';
}
