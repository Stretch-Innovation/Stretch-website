export const TEAM = [
  { slug: 'stijn-van-daele', name: 'Stijn van Daele', role: 'Founder / CEO' },
  { slug: 'jeroen-de-broyer', name: 'Jeroen De Broyer', role: 'Partner / CRO' },
  { slug: 'sara-blocqiuiaux', name: 'Sara Blocqiuiaux', role: 'Strategy Lead' },
  { slug: 'freek-matthijssen', name: 'Freek Matthijssen', role: 'Innovation Entrepreneur' },
  { slug: 'camille-sercu', name: 'Camille Sercu', role: 'Innovation Entrepreneur' },
  { slug: 'pierre-henri-vandenabeele', name: 'Pierre-Henri Vandenabeele', role: 'Growth Marketeer' },
  { slug: 'elias-marchal-el-abbassy', name: 'Elias Marchal El Abbassy', role: 'Growth Marketeer' },
  { slug: 'sarah-koster', name: 'Sarah Köster', role: 'Growth UX Designer' },
  { slug: 'arnaud-janssens-de-varebeke', name: 'Arnaud Janssens de Varebeke', role: 'Growth Innovation Entrepreneur' },
  { slug: 'dylan-van-loon', name: 'Dylan Van Loon', role: 'Business Developer' },
  { slug: 'yannick-bongaerts', name: 'Yannick Bongaerts', role: 'Junior Innovation Entrepreneur' },
  { slug: 'myrthe-van-geel', name: 'Myrthe Van Geel', role: 'Growth Entrepreneur' },
  { slug: 'lente-sylverans', name: 'Lente Sylverans', role: 'Growth Entrepreneur' },
  { slug: 'jordy-van-de-locht', name: 'Jordy Van De Locht', role: 'Growth Marketeer' },
  { slug: 'arthur-grisar', name: 'Arthur Grisar', role: 'Growth Entrepreneur' },
  { slug: 'anton-speleers', name: 'Anton Speleers', role: 'Growth Entrepreneur' },
  { slug: 'emma-dhooghe', name: "Emma D'hooghe", role: 'Growth Trainee' },
  { slug: 'gauthier-moortgat', name: 'Gauthier Moortgat', role: 'Growth Trainee' },
];

export function initials(name: string) {
  const parts = name.replace(/['’]/g, '').split(/[\s-]+/).filter(Boolean);
  const first = parts[0] || '';
  const last = parts.length > 1 ? parts[parts.length - 1] : '';
  return (first[0] || '').toUpperCase() + (last[0] || '').toUpperCase();
}
