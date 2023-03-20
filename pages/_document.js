import { Html, Head, Main, NextScript } from 'next/document'
// import favicon from "../public/assets/images/brand/favicon.ico"

export default function Document() {
  return (
    <Html lang="en">
      {/* <title>Sash - Dashboard</title> */}
      <link rel="icon" href={"../../../assets/images/brand/favicon.ico"} />
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600&display=swap" />
      <link href="https://nextjs.spruko.com/sash/preview/assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" id="bootstrapLink"/>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
