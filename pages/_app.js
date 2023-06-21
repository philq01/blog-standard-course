import '../styles/globals.css';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import {DM_Sans,DM_Serif_Display} from '@next/font/google';

const dm_Sans = DM_Sans({
  weight: ['400','500','700'],
  subsets: ['latin'],
  variable: "--font-dm-sans"
});
const dm_Serif = DM_Serif_Display({
  weight: ['400'],
  subsets: ['latin'],
  variable: "--font-dm-serif"
});

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
return ( 

<UserProvider>
        <main
          className={`${dm_Sans.variable} ${dm_Serif.variable} font-body`}
        >
          {getLayout(<Component {...pageProps} />, pageProps)}
        </main>
</UserProvider>
);
}

export default MyApp;
