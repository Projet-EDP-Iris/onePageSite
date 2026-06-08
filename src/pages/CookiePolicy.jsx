import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LegalPages.css';

function CookiePolicy() {
  const [locale, setLocale] = useState('fr');

  useEffect(() => {
    const storedLocale = localStorage.getItem('iris-locale');
    if (storedLocale === 'en' || storedLocale === 'fr') {
      setLocale(storedLocale);
    }
  }, []);

  const content = {
    fr: {
      title: 'Politique des Cookies',
      lastUpdated: 'Dernière mise à jour : Juin 2026',
      intro: "Cette politique explique comment nous utilisons les cookies et technologies similaires (telles que le stockage local) sur le site web d'Iris pour assurer son bon fonctionnement.",
      sections: [
        {
          title: "1. Qu'est-ce qu'un cookie ?",
          text: "Un cookie est un petit fichier texte ou une donnée stockée sur votre navigateur ou appareil lors de la visite d'un site. Il permet au site de mémoriser certaines préférences ou de fonctionner correctement."
        },
        {
          title: "2. Les technologies que nous utilisons",
          text: "Sur notre site, nous n'utilisons aucun cookie de suivi publicitaire intrusif. Nous utilisons uniquement le stockage local de votre navigateur (localStorage) pour mémoriser vos préférences essentielles :",
          list: [
            "iris-locale : Permet de mémoriser votre choix de langue (FR ou EN) pour que le site s'affiche dans votre langue préférée lors de vos prochaines visites.",
            "hasSeenQuestionnaire : Permet de se souvenir si vous avez déjà vu (ou fermé) le questionnaire d'amélioration d'Iris afin de ne pas vous l'afficher de façon répétitive."
          ]
        },
        {
          title: "3. Absence de cookies tiers et publicitaires",
          text: "Nous ne partageons aucune donnée de navigation avec des régies publicitaires et n'utilisons aucun cookie de ciblage tiers. Notre priorité est de vous fournir un service respectueux de votre vie privée."
        },
        {
          title: "4. Gestion de vos préférences",
          text: "Vous pouvez à tout moment configurer votre navigateur pour bloquer les cookies ou vider le stockage local. Veuillez noter que la suppression de ces données réinitialisera votre choix de langue par défaut et réaffichera le questionnaire lors de votre prochaine visite."
        }
      ],
      back: "Retour à l'accueil",
      copyright: "© 2025-2026 Iris. Tous droits réservés."
    },
    en: {
      title: 'Cookie Policy',
      lastUpdated: 'Last updated: June 2026',
      intro: "This policy explains how we use cookies and similar technologies (such as local storage) on the Iris website to ensure its proper functioning.",
      sections: [
        {
          title: "1. What is a cookie?",
          text: "A cookie is a small text file or data item stored on your browser or device when visiting a website. It allows the site to remember certain preferences or function correctly."
        },
        {
          title: "2. The technologies we use",
          text: "On our website, we do not use any intrusive advertising tracking cookies. We only use your browser's local storage (localStorage) to remember your essential preferences:",
          list: [
            "iris-locale: Remembers your language choice (FR or EN) so the site displays in your preferred language during future visits.",
            "hasSeenQuestionnaire: Remembers if you have already seen (or closed) the Iris improvement questionnaire so we don't display it to you repeatedly."
          ]
        },
        {
          title: "3. No third-party or advertising cookies",
          text: "We do not share any navigation data with advertising networks and do not use any third-party targeting cookies. Our priority is to provide a service that respects your privacy."
        },
        {
          title: "4. Managing your preferences",
          text: "You can configure your browser at any time to block cookies or clear local storage. Please note that clearing this data will reset your default language preference and display the questionnaire again on your next visit."
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
        <Link to="/#footer" className="legal-logo">Iris</Link>
        <Link to="/#footer" className="back-home-btn">
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
            {section.list && (
              <ul>
                {section.list.map((item, itemIdx) => (
                  <li key={itemIdx}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <footer className="legal-footer">
          {t.copyright}
        </footer>
      </main>
    </div>
  );
}

export default CookiePolicy;
