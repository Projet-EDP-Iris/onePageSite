import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LegalPages.css';
import './BugReport.css';

const content = {
  fr: {
    back: "Retour à l'accueil",
    title: 'Signaler un bug',
    subtitle: 'Décrivez le problème rencontré et notre équipe vous répondra rapidement.',
    email: 'Votre email *',
    bugTitle: 'Titre du bug *',
    description: 'Description *',
    descriptionPlaceholder: 'Décrivez le problème rencontré...',
    steps: 'Étapes pour reproduire *',
    stepsPlaceholder: '1. Ouvrir Iris\n2. Cliquer sur...',
    severity: 'Sévérité',
    severityOptions: { low: 'Faible', medium: 'Moyen', high: 'Élevé', critical: 'Critique' },
    screenshot: 'Capture d\'écran (optionnel)',
    submit: 'Envoyer le rapport',
    sending: 'Envoi en cours...',
    successTitle: 'Bug signalé avec succès !',
    successMsg: 'Merci, notre équipe va examiner votre rapport.',
    backHome: 'Retour à l\'accueil',
    errorMsg: 'Une erreur est survenue. Veuillez réessayer.',
    copyright: '© 2025-2026 Iris. Tous droits réservés.',
  },
  en: {
    back: 'Back to home',
    title: 'Report a Bug',
    subtitle: 'Describe the issue you encountered and our team will get back to you quickly.',
    email: 'Your email *',
    bugTitle: 'Bug title *',
    description: 'Description *',
    descriptionPlaceholder: 'Describe the issue you encountered...',
    steps: 'Steps to reproduce *',
    stepsPlaceholder: '1. Open Iris\n2. Click on...',
    severity: 'Severity',
    severityOptions: { low: 'Low', medium: 'Medium', high: 'High', critical: 'Critical' },
    screenshot: 'Screenshot (optional)',
    submit: 'Send report',
    sending: 'Sending...',
    successTitle: 'Bug reported successfully!',
    successMsg: 'Thank you, our team will review your report.',
    backHome: 'Back to home',
    errorMsg: 'An error occurred. Please try again.',
    copyright: '© 2025-2026 Iris. All rights reserved.',
  },
};

function BugReport() {
  const [locale, setLocale] = useState('fr');
  const [form, setForm] = useState({
    email: '', title: '', description: '', steps: '', severity: 'medium', screenshotFile: null,
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('iris-locale');
    if (stored === 'en' || stored === 'fr') setLocale(stored);
    window.scrollTo(0, 0);
  }, []);

  const t = content[locale] || content.fr;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch('https://irisbackend-ar0m.onrender.com/api/v1/bug-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: form.email,
          title: form.title,
          description: form.description,
          steps: form.steps,
          severity: form.severity,
          screenshot_filename: form.screenshotFile?.name ?? null,
        }),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setForm({ email: '', title: '', description: '', steps: '', severity: 'medium', screenshotFile: null });
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="legal-page-container">
      <div className="legal-header">
        <Link to="/" className="legal-logo">Iris</Link>
        <Link to="/" className="back-home-btn">← {t.back}</Link>
      </div>

      <div className="legal-card">
        <h1 className="legal-title">{t.title}</h1>
        <p className="legal-intro">{t.subtitle}</p>

        {status === 'success' ? (
          <div className="br-success">
            <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <polyline points="9 12 11 14 15 10" />
            </svg>
            <h2>{t.successTitle}</h2>
            <p>{t.successMsg}</p>
            <Link to="/" className="back-home-btn">{t.backHome}</Link>
          </div>
        ) : (
          <form className="br-form" onSubmit={handleSubmit}>
            <div className="br-row">
              <div className="br-field">
                <label>{t.email}</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
                />
              </div>
              <div className="br-field">
                <label>{t.bugTitle}</label>
                <input
                  type="text"
                  required
                  value={form.title}
                  onChange={(e) => setForm(f => ({ ...f, title: e.target.value }))}
                />
              </div>
            </div>

            <div className="br-field">
              <label>{t.description}</label>
              <textarea
                required
                rows={4}
                placeholder={t.descriptionPlaceholder}
                value={form.description}
                onChange={(e) => setForm(f => ({ ...f, description: e.target.value }))}
              />
            </div>

            <div className="br-field">
              <label>{t.steps}</label>
              <textarea
                required
                rows={4}
                placeholder={t.stepsPlaceholder}
                value={form.steps}
                onChange={(e) => setForm(f => ({ ...f, steps: e.target.value }))}
              />
            </div>

            <div className="br-row">
              <div className="br-field">
                <label>{t.severity}</label>
                <select
                  value={form.severity}
                  onChange={(e) => setForm(f => ({ ...f, severity: e.target.value }))}
                >
                  <option value="low">{t.severityOptions.low}</option>
                  <option value="medium">{t.severityOptions.medium}</option>
                  <option value="high">{t.severityOptions.high}</option>
                  <option value="critical">{t.severityOptions.critical}</option>
                </select>
              </div>
              <div className="br-field">
                <label>{t.screenshot}</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setForm(f => ({ ...f, screenshotFile: e.target.files?.[0] ?? null }))}
                />
              </div>
            </div>

            {status === 'error' && <p className="br-error">{t.errorMsg}</p>}

            <button type="submit" className="br-submit" disabled={loading}>
              {loading ? t.sending : t.submit}
            </button>
          </form>
        )}

        <div className="legal-footer">{t.copyright}</div>
      </div>
    </div>
  );
}

export default BugReport;
