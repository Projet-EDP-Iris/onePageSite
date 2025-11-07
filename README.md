# Site Web One-Page IRIS

## À propos
Ce site web one-page a été créé dans le cadre du projet étudiant IRIS. Développé par des étudiants développeurs, il présente une interface simple et efficace pour notre projet.

## Structure du Projet
```
onePageSite/
│
├── onepage.html    # Page principale du site
└── style.css       # Fichiers de styles CSS
```

## Installation

### Prérequis
- Git installé sur votre machine
- Un navigateur web moderne

### Cloner le Projet

#### Windows
```bash
# Ouvrez PowerShell ou CMD et exécutez
git clone https://github.com/Projet-EDP-Iris/onePageSite.git
cd onePageSite
```

#### macOS/Linux
```bash
# Ouvrez le Terminal et exécutez
git clone https://github.com/Projet-EDP-Iris/onePageSite.git
cd onePageSite
```

### Lancement du Projet
Pour visualiser le site, il suffit d'ouvrir le fichier `onepage.html` dans votre navigateur préféré.

## Politique de Commits

### Format des Messages de Commit
```
<type>(<portée>): <description>

[corps]

[footer]
```

#### Types de Commit
- `feat` : Nouvelle fonctionnalité
- `fix` : Correction de bug
- `docs` : Modification de la documentation
- `style` : Formatage, point-virgules manquants, etc.
- `refactor` : Refactorisation du code
- `test` : Ajout ou modification de tests
- `chore` : Modifications diverses ne touchant pas au code source

Exemple :
```
feat(navbar): ajouter menu responsive

- Ajout d'un menu hamburger pour mobile
- Implementation de la transition d'ouverture/fermeture
```

## Politique de Branches

### Convention de Nommage
- Pour les nouvelles fonctionnalités : `feature/nom-de-la-feature`
- Pour les corrections de bugs : `fix/nom-du-bug`
- Pour la documentation : `docs/sujet-de-la-doc`

### Exemple de Création de Branche
```bash
# Pour une nouvelle fonctionnalité
git checkout -b feature/carousel-accueil

# Pour une correction
git checkout -b fix/correction-navbar

# Pour la documentation
git checkout -b docs/guide-installation
```

### Workflow
1. Créer une nouvelle branche depuis `main`
2. Développer la fonctionnalité
3. Commiter les changements selon la politique de commits
4. Pousser la branche sur le dépôt distant
5. Créer une Pull Request vers `main`
6. Attendre la review et les validations nécessaires
7. Merger dans `main`

## Contact
Pour toute question concernant le projet, veuillez contacter l'équipe IRIS via le dépôt GitHub.

---
© 2025 Projet IRIS - Tous droits réservés