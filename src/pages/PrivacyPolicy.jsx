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
      lastUpdated: 'Dernière mise à jour : Septembre 2026',
      intro: "Chez Iris, nous accordons une importance capitale à la protection de vos données personnelles. Cette politique décrit précisément quelles données sont traitées, où elles transitent, et avec qui elles sont partagées lorsque vous utilisez l'application Iris et notre site web.",
      sections: [
        {
          title: "1. Ce qui est traité sur nos serveurs",
          text: "Iris est une application de bureau qui se connecte à un backend hébergé (Render) et à une base de données hébergée (Neon) pour fonctionner. Concrètement : le contenu de vos emails (sujet, corps, expéditeur) est transmis à notre backend pour être analysé, catégorisé et affiché dans l'application, puis stocké dans notre base de données. Vos identifiants de connexion aux services tiers (jetons OAuth Gmail/Outlook, mot de passe d'application Apple) sont chiffrés avant d'être stockés sur nos serveurs. Votre mot de passe Iris est hashé (non réversible), jamais stocké en clair."
        },
        {
          title: "2. Intelligence artificielle : partage avec OpenAI",
          text: "Pour générer les résumés, réponses suggérées, plans d'action et l'extraction de créneaux de rendez-vous, le sujet et le corps de l'email concerné sont transmis à l'API d'OpenAI (hébergée aux États-Unis) au moment de la demande. Cette fonctionnalité est au cœur du produit et ne peut pas être désactivée sans désactiver les fonctionnalités IA elles-mêmes."
        },
        {
          title: "3. Connexion aux services tiers (Gmail, Outlook, calendriers)",
          text: "Lorsque vous connectez Gmail, Outlook, Google Calendar, Apple Calendar ou Outlook Calendar, Iris obtient une autorisation OAuth (ou un mot de passe d'application pour Apple) qui est chiffrée puis stockée sur nos serveurs — pas uniquement sur votre machine — afin de pouvoir synchroniser vos emails et créer des événements en votre nom sans que vous ayez à vous reconnecter à chaque fois."
        },
        {
          title: "4. Transferts internationaux",
          text: "Notre backend est hébergé aux États-Unis (Render, région Oregon). OpenAI, Google et Microsoft traitent également une partie des données dans le cadre de leurs propres infrastructures, qui peuvent être situées hors de l'Union européenne. Nous travaillons à formaliser les garanties appropriées (clauses contractuelles types ou équivalent) pour ces transferts."
        },
        {
          title: "5. Données collectées sur le site web",
          text: "Notre site internet ne collecte pas de données personnelles de suivi publicitaire. Si vous remplissez notre formulaire optionnel d'amélioration d'Iris (Google Forms), les informations sont fournies de manière volontaire."
        },
        {
          title: "6. Vos droits",
          text: "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données. Vous pouvez supprimer votre compte depuis les paramètres de l'application, ou nous contacter directement à irisapp42@outlook.com pour exercer ces droits."
        }
      ],
      back: "Retour à l'accueil",
      copyright: "© 2025-2026 Iris. Tous droits réservés."
    },
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: September 2026',
      intro: "At Iris, protecting your personal data is a top priority. This policy describes precisely what data is processed, where it travels, and who it is shared with when you use the Iris application and our website.",
      sections: [
        {
          title: "1. What is processed on our servers",
          text: "Iris is a desktop application that connects to a hosted backend (Render) and a hosted database (Neon) to function. Concretely: the content of your emails (subject, body, sender) is sent to our backend to be analyzed, categorized, and displayed in the app, then stored in our database. Your third-party credentials (Gmail/Outlook OAuth tokens, Apple app-specific password) are encrypted before being stored on our servers. Your Iris password is hashed (not reversible), never stored in plain text."
        },
        {
          title: "2. Artificial intelligence: sharing with OpenAI",
          text: "To generate summaries, suggested replies, action plans, and meeting slot extraction, the subject and body of the relevant email are sent to OpenAI's API (hosted in the United States) at the time of the request. This is core to the product and cannot be disabled without disabling the AI features themselves."
        },
        {
          title: "3. Connecting third-party services (Gmail, Outlook, calendars)",
          text: "When you connect Gmail, Outlook, Google Calendar, Apple Calendar, or Outlook Calendar, Iris obtains an OAuth authorization (or an app-specific password for Apple) which is encrypted and stored on our servers — not only on your machine — so it can sync your emails and create events on your behalf without you having to reconnect every time."
        },
        {
          title: "4. International transfers",
          text: "Our backend is hosted in the United States (Render, Oregon region). OpenAI, Google, and Microsoft also process part of the data within their own infrastructure, which may be located outside the European Union. We are working to formalize the appropriate safeguards (standard contractual clauses or equivalent) for these transfers."
        },
        {
          title: "5. Data collected on the website",
          text: "Our website does not collect advertising tracking data. If you fill out our optional improvement questionnaire (Google Forms), the information is provided voluntarily."
        },
        {
          title: "6. Your rights",
          text: "In accordance with GDPR, you have the right to access, rectify, erase, and port your data. You can delete your account from the application's settings, or contact us directly at irisapp42@outlook.com to exercise these rights."
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
