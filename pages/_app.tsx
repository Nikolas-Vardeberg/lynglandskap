import 'styles/index.css'

import { PreviewBanner } from 'components/preview/PreviewBanner'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Footer } from 'components/Footer'
import sanityCli from 'sanity.cli'
import { Navigation } from 'components/Navigation'


export default function App({ Component, pageProps }: AppProps) {
  const { route } = useRouter()
  const isSanityStudio = route.startsWith('/studio')
  const navigation = pageProps?.global?.navigation
  const footer = pageProps?.global?.footer

  return (
    <>
      {!isSanityStudio && (
        <Head>
          <title>{pageProps?.page?.title}</title>
          <link rel="icon" href='/favicon-1.png' />
        </Head>
      )}

      {pageProps?.preview && <PreviewBanner />}
      {!isSanityStudio && <Navigation menu={navigation?.menu} />}
      <Component {...pageProps} />
      {!isSanityStudio && <Footer {...footer} />}
    </>
  )
}
