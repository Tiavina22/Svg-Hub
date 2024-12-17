export type LogoCategory = 'Framework' | 'Langage' | 'Service' | 'Database' | 'Tool';

export interface Logo {
  id: string;
  name: string;
  category: LogoCategory;
  svg: string;
}