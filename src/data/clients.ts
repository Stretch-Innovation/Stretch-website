export interface ClientLogo {
  name: string;
  file: string;
}

export const clientLogos: ClientLogo[] = [
  { name: 'Vandemoortele', file: 'Vandemoortele logo.png' },
  { name: 'Brouwerij Van Steenberge', file: 'Brouwerij Van Steenberge logo.png' },
  { name: 'Easybell', file: 'Easybell logo.png' },
  { name: 'Anders Beton', file: 'Anders Beton logo.png' },
  { name: 'H.Essers', file: 'H.Essers logo.png' },
  { name: 'Aqualex', file: 'Aqualex logo.png' },
  { name: 'benogroup', file: 'benogroup logo.png' },
  { name: 'Coeck', file: 'Coeck logo.png' },
  { name: 'dstny', file: 'dstny logo.png' },
  { name: 'Eco3', file: 'Eco3 logo.png' },
  { name: 'efficy', file: 'efficy logo.png' },
  { name: 'Homerun', file: 'Homerun logo.png' },
  { name: 'Hubo', file: 'Hubo logo.png' },
  { name: 'Relu', file: 'Relu logo.png' },
  { name: 'Spotable', file: 'Spotable logo.svg' },
  { name: 'Xwift', file: 'Xwift logo.png' },
];

export function clientLogoSrc(file: string): string {
  return `/logos/clients/${encodeURIComponent(file)}`;
}
