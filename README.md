# SASS Template

Version | Objectif | Domaine | Cadre | Démo
------- | -------- | ------- | ----- | ----
2.0 | Andragogie | Développement | Laboratoire | [Sass Template](https://demo.elodiebayet.com/sass-template)

Reupload et correction du support 'Sass Template' daté d'avril 2020.

---


## Présentation

Ce projet est une **ressource pédagogique** qui sert d'exemple de développement avec SCSS/Sass.

Ce support était fourni aux stagiaires ayant accompli le cours "HTML/CSS".


### Objectifs

- Apprendre la décomposition des styles CSS
- Découvrir la dynamique de développement proposée par **Sass**
- Respecter une structure et une organisation pertinentes de fichiers


### Prérequis

Cours 
1. "WWW"
1. "HTML/CSS"
1. "JavaScript"
1. "Node.js"


### Exploitation

Ce projet peut être utilisé dans un cadre d'apprentissage individuel et privé. Il ne convient pas pour une utilisation publique ou professionnelle.


---


## Installation

Clônez ce _repository_ dans un répertoire local sur votre machine.

Installez :
- [Node.js / NPM](https://nodejs.org/en/download/)
- [Sass CLI](https://sass-lang.com/documentation/cli/dart-sass)
```sh
npm install -g sass
```

Ajoutez les extensions VS Code :
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass)


---


## Contenu

### Template

* [Sélection linguistique](/index.html) Page de sélection linguistique
* [Textes](/textes.html) Exemples typographiques, titres, paragraphes, listes et autres implémentations textuelles
* [Éléments](/elements.html) Boutons, liens, blocs dédiés ou conceptuels
* [Formulaire](/formulaire.html) Éléments de formulaire
* [Indisponible](/indisponibile.html) Page d'erreur interne


### Scss

```sh
sass
├── base/ : "Structure fondamentale de l'interface"
│   ├── _base.scss : "forwards pour la compilation"
│   ├── _composition.scss
│   ├── _normalize.scss
│   ├── _typography.scss
├── components/ : "Structure des blocs et éléments spécifiques"
│   ├── _classical.scss
│   ├── _components.scss : "forwards pour la compilation"
│   ├── _evolved.scss
├── themes/ : "Couleurs, esthétisme, stylisation"
│   ├── _base.scss
│   ├── _components.scss
│   ├── _theme.scss : "forwards pour la compilation"
├── utils/ : "Développements réutilisables, variables, fonctions, etc."
│   ├── _mixins.scss
│   ├── _placeholders.scss
│   ├── _utils.scss : "forwards pour la compilation"
│   ├── _variables.scss
├── index.scss : "styles dédiés à la page racine"
├── unavailable.scss : "styles dédiés à la page d'erreur" 
├── * : "fichiers d'import pour la compilation"
```


---


## Remarques

La syntaxe **BEM** – *bloc - element - modificator* – n'est pas respectée car elle engendre des noms de classes bien trop longs. Ce template n'est pas conçu pour une utilisation industrielle.

Le `<footer id="uifoot">` ne permet pas l'intégration d'une structure de sous-menu (`.navigation.expand`).


### Ressources

Les ressources externes **JavaScript** sont à votre disposition gracieusement et **leur utilisation est autorisée**. Mais notez bien que ces ressources sont **susceptibles d'évoluer sans avertissement** car elles ne font pas l'objet d'une librairie publique.

En revanche, l'utilisation des ressources externes `.png`, `.jpg`, `.svg` figurant dans `/trademark` **est formellement interdite**. Si vous souhaitez utiliser et publier ce projet, **veuillez replacer ces images par vos logos et icônes**.


### Références

- [HTML 5](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content)
- [JavaScript ES6 2020](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting)
- [NPM](https://www.npmjs.com/)
- [Sass](https://sass-lang.com/)
- [Sass CLI](https://www.npmjs.com/package/sass)
