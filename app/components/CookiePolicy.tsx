'use client';
import React, { useEffect } from 'react';

const CookiePolicy = () => {
  useEffect(() => {
    const loadIubendaScript = () => {
      const s = document.createElement('script');
      s.src = 'https://cdn.iubenda.com/iubenda.js';
      s.async = true;
      document.body.appendChild(s);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('load', loadIubendaScript);
    }
  }, []);

  return (
    <a
      href="https://www.iubenda.com/privacy-policy/15147801/cookie-policy"
      className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe"
      title="Política de Cookies"
    >
      Política de Cookies
    </a>
  );
};

export default CookiePolicy;
