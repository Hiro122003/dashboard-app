import { Inter, Poppins, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const poppins = Poppins({
  subsets: ['latin'],
  weight: '900',
});

export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
});
