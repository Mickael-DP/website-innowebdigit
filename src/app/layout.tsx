import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Mickael DALLE PASQUALINE-InnoWeb Digital',
	description: "Bienvenue sur le site d'InnoWeb Digital",
	icons: [
		{
			rel: 'icon',
			href: '/logoweb.ico',
			url: '/logoweb.ico',
		},
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<Head>
				<script
					dangerouslySetInnerHTML={{
						__html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TXMWHZGP');
            `,
					}}
				/>
        <meta name='robots 'content='index, follow' />
			</Head>
			<body className={inter.className}>
				<noscript>
					<iframe
						src='https://www.googletagmanager.com/ns.html?id=GTM-TXMWHZGP'
						height='0'
						width='0'
						style={{ display: 'none', visibility: 'hidden' }}></iframe>
				</noscript>
				{children}
			</body>
		</html>
	);
}
