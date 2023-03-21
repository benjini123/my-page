import { Footer } from "benja/components/footer";
import { Navbar } from "benja/components/navbar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;700;900&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" type="image/png" sizes="16x16" href="/media/logo.png" />
      <Head />
      <body>
        <Navbar></Navbar>
        <Main />
        <Footer className="footer"></Footer>
        <NextScript />
      </body>
    </Html>
  );
}
