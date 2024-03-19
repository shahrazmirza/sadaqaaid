import { Roboto } from 'next/font/google';
import './globals.css';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { Providers } from "./providers";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Sadaqa Aid',
  description: 'Charity Service in Australia and overseas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}> 
        <Providers>
          <Theme>
            {children}
          </Theme>
        </Providers>
      </body>
    </html>
  )
}
