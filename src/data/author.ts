import fotoLinkedin from '../assets/images/foto_linkedin.jpeg';

export const author = {
  name: 'Ismael Villalba',
  avatar: { src: fotoLinkedin }, // aseguramos compatibilidad con el .src
  url: '', // vacío para que no apunte a nada
};

export type Author = typeof author;

