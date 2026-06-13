const TEAM_PHOTO_EXT: Record<string, string> = {
  'arnaud-janssens-de-varebeke': 'png',
  'artem-poliakov': 'jpeg',
  'arthur-grisar': 'png',
  'betty-coppens': 'png',
  'camille-verbruggen': 'png',
  'cas-lambrechts': 'jpeg',
  'dylan-van-engeland': 'jpeg',
  'dylan-van-loon': 'jpeg',
  'elias-marchal-el-abbassy': 'png',
  'freek-matthijssen': 'png',
  'gauthier-moortgat': 'png',
  'ismail-laaroussi': 'jpeg',
  'jeroen-de-broyer': 'png',
  'jeroen-joosens': 'jpeg',
  'jordy-van-de-locht': 'jpeg',
  'kobe-jennes': 'png',
  'lente-sylverans': 'png',
  'myrthe-van-geel': 'jpeg',
  'noah-guerin': 'jpeg',
  'nouhaila-islah': 'png',
  'pierre-henri-vandenabeele': 'png',
  'sara-blocqiuiaux': 'png',
  'sarah-koster': 'png',
  'sophie-roozen': 'jpeg',
  'stijn-van-daele': 'png',
  'thomas-van-buynder': 'png',
  'tom-bouckaert': 'jpeg',
  'toon-vandersteene': 'png',
  'wout-dietvorst': 'jpeg',
  'yannick-bongaerts': 'png',
};

export function getTeamPhoto(slug: string): string | undefined {
  const ext = TEAM_PHOTO_EXT[slug];
  return ext ? `/assets/team/${slug}.${ext}` : undefined;
}

export const TEAM = [
  { slug: 'stijn-van-daele', name: 'Stijn van Daele', role: 'Founder / CEO' },
  { slug: 'jeroen-de-broyer', name: 'Jeroen De Broyer', role: 'Partner / CRO' },
  { slug: 'sara-blocqiuiaux', name: 'Sara Blocqiuiaux', role: 'Operation & Strategy Lead' },
  { slug: 'freek-matthijssen', name: 'Freek Matthijssen', role: 'Senior Growth Strategist' },
  { slug: 'pierre-henri-vandenabeele', name: 'Pierre-Henri Vandenabeele', role: 'Growth Marketeer' },
  { slug: 'elias-marchal-el-abbassy', name: 'Elias Marchal El Abbassy', role: 'Senior Growth Engineer' },
  { slug: 'sarah-koster', name: 'Sarah Köster', role: 'Growth UX Designer' },
  { slug: 'arnaud-janssens-de-varebeke', name: 'Arnaud Janssens de Varebeke', role: 'Growth Strategist' },
  { slug: 'dylan-van-loon', name: 'Dylan Van Loon', role: 'Business Developer' },
  { slug: 'yannick-bongaerts', name: 'Yannick Bongaerts', role: 'Growth Entrepreneur' },
  { slug: 'myrthe-van-geel', name: 'Myrthe Van Geel', role: 'Growth Entrepreneur' },
  { slug: 'lente-sylverans', name: 'Lente Sylverans', role: 'Growth Entrepreneur' },
  { slug: 'jordy-van-de-locht', name: 'Jordy Van De Locht', role: 'Senior Growth Engineer' },
  { slug: 'arthur-grisar', name: 'Arthur Grisar', role: 'Growth Entrepreneur' },
  { slug: 'camille-verbruggen', name: 'Camille Verbruggen', role: 'Junior Growth Entrepreneur' },
  { slug: 'gauthier-moortgat', name: 'Gauthier Moortgat', role: 'Growth Entrepreneur' },
  { slug: 'artem-poliakov', name: 'Artem Poliakov', role: 'Growth Entrepreneur' },
  { slug: 'betty-coppens', name: 'Betty Coppens', role: 'Growth Entrepreneur' },
  { slug: 'cas-lambrechts', name: 'Cas Lambrechts', role: 'Growth Engineer' },
  { slug: 'charlotte-oloton', name: 'Charlotte Oloton', role: 'Growth Entrepreneur' },
  { slug: 'dylan-van-engeland', name: 'Dylan Van Engeland', role: 'Growth Entrepreneur' },
  { slug: 'ismail-laaroussi', name: 'Ismail Laaroussi', role: 'Growth Entrepreneur' },
  { slug: 'jeroen-joosens', name: 'Jeroen Joosens', role: 'Senior Growth Strategist' },
  { slug: 'kobe-jennes', name: 'Kobe Jennes', role: 'Junior Growth Entrepreneur' },
  { slug: 'niels-palinckx', name: 'Niels Palinckx', role: 'Growth Entrepreneur' },
  { slug: 'noah-guerin', name: 'Noah Guerin', role: 'Growth Entrepreneur' },
  { slug: 'nouhaila-islah', name: 'Nouhaila Islah', role: 'Growth UX Designer' },
  { slug: 'sophie-roozen', name: 'Sophie Roozen', role: 'Office Manager' },
  { slug: 'thomas-van-buynder', name: 'Thomas Van Buynder', role: 'Junior Growth Entrepreneur' },
  { slug: 'tom-bouckaert', name: 'Tom Bouckaert', role: 'Growth Entrepreneur' },
  { slug: 'toon-vandersteene', name: 'Toon Vandersteene', role: 'Talent Acquisition Specialist' },
  { slug: 'wout-dietvorst', name: 'Wout Dietvorst', role: 'Growth Entrepreneur' },
];

export function initials(name: string) {
  const parts = name.replace(/['’]/g, '').split(/[\s-]+/).filter(Boolean);
  const first = parts[0] || '';
  const last = parts.length > 1 ? parts[parts.length - 1] : '';
  return (first[0] || '').toUpperCase() + (last[0] || '').toUpperCase();
}
