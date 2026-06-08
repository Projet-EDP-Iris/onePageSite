import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LegalPages.css';

function PrivacyPolicy() {
  const [locale, setLocale] = useState('fr');

  useEffect(() => {
    const storedLocale = localStorage.getItem('iris-locale');
    if (storedLocale === 'en' || storedLocale === 'fr') {
      setLocale(storedLocale);
    }
  }, []);

  const content = {
    fr: {
      title: 'Politique de Confidentialité',
      lastUpdated: 'Dernière mise à jour : Juin 2026',
      intro: "Chez Iris, nous accordons une importance capitale à la protection de vos données personnelles et au respect de votre vie privée. Cette politique décrit comment vos données sont traitées lorsque vous utilisez notre site web et notre application locale.",
      sections: [
        {
          title: "1. Traitement local des données (Le cœur d'Iris)",
          text: "L'application Iris fonctionne localement sur votre appareil. L'analyse de vos e-mails, la détection des rendez-vous et des tâches, ainsi que les suggestions de réponses sont exécutées directement et uniquement sur votre machine. Aucune de ces données n'est transférée, stockée ou analysée sur nos serveurs. Vos e-mails restent strictement privés."
        },
        {
          title: "2. Connexion aux services tiers (Google, Calendriers)",
          text: "Lorsque vous associez vos comptes Gmail ou Google Agenda à l'application Iris, la synchronisation s'effectue directement depuis votre machine à l'aide de protocoles sécurisés. Vos jetons d'accès et d'autorisation (tokens OAuth) sont stockés de manière chiffrée sur votre ordinateur et ne nous sont jamais partagés."
        },
        {
          title: "3. Données collectées sur le site web",
          text: "Notre site internet ne collecte pas de données personnelles de suivi. Si vous décidez de remplir notre formulaire optionnel d'amélioration d'Iris (Google Forms), les informations saisies sont fournies de manière anonyme et volontaire afin de nous aider à améliorer l'outil."
        },
        {
          title: "4. Vos droits et contrôle des données",
          text: "Conformément au RGPD et aux réglementations applicables sur la vie privée, vous disposez d'un contrôle total et exclusif sur vos données. Comme toutes vos données sont stockées en local sur votre appareil, vous pouvez les effacer instantanément et définitivement à tout moment en désinstallant l'application ou en réinitialisant ses données de stockage."
        }
      ],
      back: "Retour à l'accueil",
      copyright: "© 2025-2026 Iris. Tous droits réservés."
    },
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: June 2026',
      intro: "At Iris, protecting your personal data and respecting your privacy is our top priority. This policy outlines how your data is handled when you use our website and local application.",
      sections: [
        {
          title: "1. Local Data Processing (The Core of Iris)",
          text: "The Iris application runs locally on your device. The analysis of your emails, detection of meetings and tasks, as well as response suggestions are processed directly and solely on your machine. None of this data is transferred, stored, or analyzed on our servers. Your emails remain strictly private."
        },
        {
          title: "2. Connection to Third-Party Services (Google, Calendars)",
          text: "When you link your Gmail or Google Calendar accounts with Iris, synchronization happens directly from your machine using secure protocols. Your access and authorization tokens (OAuth tokens) are stored in an encrypted format on your computer and are never shared with us."
        },
        {
          title: "3. Data Collected on the Website",
          text: "Our website does not collect personal tracking data. If you decide to fill out our optional improvement questionnaire (Google Forms), the information provided is voluntary and anonymous, solely used to help us improve the tool."
        },
        {
          title: "4. Your Rights and Data Control",
          text: "In compliance with GDPR and applicable privacy regulations, you have full and exclusive control over your data. Since all your data is stored locally on your device, you can instantly and permanently delete it at any time by uninstalling the application or clearing its local storage data."
        }
      ],
      back: "Back to Home",
      copyright: "© 2025-2026 Iris. All rights reserved."
    }
  };

  const t = content[locale];

  return (
    <div className="legal-page-container">
      <header className="legal-header">
        <Link to="/" className="legal-logo">Iris</Link>
        <Link to="/" className="back-home-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          {t.back}
        </Link>
      </header>

      <main className="legal-card">
        <h1 className="legal-title">{t.title}</h1>
        <div className="legal-date">{t.lastUpdated}</div>
        
        <p className="legal-intro">{t.intro}</p>

        {t.sections.map((section, idx) => (
          <section key={idx} className="legal-section">
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </section>
        ))}

        <footer className="legal-footer">
          {t.copyright}
        </footer>
      </main>
    </div>
  );
}

export default PrivacyPolicy;
