'use client';
import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
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
      href="https://www.iubenda.com/privacy-policy/15147801"
      className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe"
      title="Política de Privacidade"
    >
      Política de Privacidade
    </a>
  );
};

export default PrivacyPolicy;
