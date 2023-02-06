import "../styles/globals.css";
import { useState, useEffect, Suspense, lazy } from "react";
import anime from "animejs";
import Splash from "./splash";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Splash />;
  }

  return <Component {...pageProps} />;
}

export default MyApp;
