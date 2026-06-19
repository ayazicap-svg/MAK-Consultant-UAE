import React from 'react';

const SEO = () => {
  // Injecting JSON-LD structured data schema dynamically for compliance & search crawlers
  React.useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FinancialService",
      "name": "MAK Consultant FZE LLC",
      "description": "Premium corporate advisory, corporate tax transitions, and VAT compliance solutions in the UAE.",
      "url": window.location.origin,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'jsonld-schema';
    
    // Avoid duplicating schema elements on hot-reloads
    const existingScript = document.getElementById('jsonld-schema');
    if (!existingScript) {
      document.head.appendChild(script);
    }

    return () => {
      const currentScript = document.getElementById('jsonld-schema');
      if (currentScript) {
        currentScript.remove();
      }
    };
  }, []);

  return null;
};

export default SEO;