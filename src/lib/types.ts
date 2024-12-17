export type LogoCategory = 'Framework' | 'Language' | 'Service' | 'Database' | 'Tool';

export interface Logo {
  id: string;
  name: string;
  category: LogoCategory;
  svg: string;
}