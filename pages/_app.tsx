import './styles.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  //@ts-ignore
  return <Component {...pageProps} />
}