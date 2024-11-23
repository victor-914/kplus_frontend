import "../styles/globals.css";
import Head from "next/head";
import { Helmet } from "react-helmet";
import React from "react";
import Navbar from "../components/Navbar";
import theme from "../utils/theme";
import { ThemeProvider } from "@mui/material";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "../assets/logobg.png";
import "react-toastify/dist/ReactToastify.css";
import { WidgetLoader } from "react-cloudinary-upload-widget";
import { ToastContainer } from "react-toastify";
import "./page-loader.css";
import NProgress from "nprogress";
import Router from "next/router";
import Footer from "../components/new/components/Footer";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor } from "../utils/favoriteStore";


NProgress.configure({ easing: "ease", speed: 500 });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
function MyApp({ Component, pageProps }) {
  return (
    <>
      

    
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css"
          rel="stylesheet"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kplus Reliable</title>
        <meta name="description" content="En" />
      </Helmet>
      <ToastContainer />

      <Provider store={store}>
        < PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <WidgetLoader />
          <Navbar />
          <FloatingWhatsApp
            phoneNumber="+2348120908844"
            accountName="Kplus Reliable"
            statusMessage="Talk with a Realtor"
            allowEsc
            allowClickAway
            notification
            notificationSound
            avatar={logo.src}
          />
          <Component {...pageProps} />
        </ThemeProvider>
        </PersistGate>

      </Provider>
      <Footer />
    </>
  );
}

export default MyApp;
