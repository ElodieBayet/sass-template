# SASS Template :: Exemple de développement avec SASS

Date | Reviewed | Purpose | Discipline | Example
---- | -------- | ------- | ---------- | -------
2020.04 | 2021.09 | Pedagogy | HTML/CSS | [Sass-Template](https://demo.elodiebayet.com/sass-template)


## **Avant-propos important**

Le but n'est pas de fournir publiquement un _modèle_ ou un _template_ intégrable, mais bien de montrer **comment développer quelque chose de similaire** en se servant de ce projet comme exemple de départ. Il n'y aura pas de _versions ultérieurs_, ce projet ne va pas _évoluer_ – sauf corrections bugs, erreurs, coquilles laissés par mégarde.

---

## Sommaire 
0. [0 - Présentation](#0---presentation)
    * [0.0 - Objectifs](#0.0---objectifs)
    * [0.1 - Contenu](#0.1---contenu)
    * [0.2 - Évolution](#0.2---evolution)
    * [0.3 - Utilisation](#0.3---utilisation)
1. [1 - Démarrage](#1---demarrage)
    * [1.0 - Prérequis](#1.0---prerequis)
    * [1.1 - Installation](#1.1---installation)
    * [1.2 - Lancement](#1.2---lancement)
2. [2 - Structure](#2---description-structurelle)
    * [2.0 - Dossiers et fichiers](#2.0---dossiers-et-fichiers)
    * [2.1 - Document HTML](#2.1---document-html)
3. [3 - Méthodologie](#3---methodologie)
    * [3.0 - Développement](#3.0---developpement)
    * [3.1 - Complilation](#3.1---compilation)
4. [4 - Remarques complémentaires](#4---remarques-complementaires)

---

## 0 - Présentation

Exemple d'élaboration d'un template **Sass** basique, utilisable pour des démos et des side-projects simples.


### 0.0 - Objectifs

- Apprendre la décomposition des styles CSS
- Découvrir la dynamique de développement proposée par **Sass**
- Observer une structure et une organisation pertinentes de fichiers


### 0.1 - Évolution

Sauf un quelconque défaut laissé par mégarde, ce projet ne doit pas évoluer vers une modélisation plus avancée. Il constitue **une ressource pédagogique** de base destinée à l'apprentissage de concepts parfois obscurs pour des néophytes.


### 0.2 - Utilisation

Ce projet n'est utilisable que dans un cadre d'apprentissage individuel et privé. Il ne convient pas pour une utilisation publique ou professionnelle.

#### Images

Certaines images employées dans ce projet – sauf celles listées dans **"Exceptions"** – sont soumises aux droits d'auteur et protégées par la [Sofam](https://www.sofam.be/) – auteure n° 72/55. Aucune reproduction, communication publique, réutilisation partielle ou entière des images **n'est autorisée**.

#### Exceptions

* les logos des technologies employés sur la page _Components_.

---

## 1 - Démarrage

Le projet requiert divers éléments et une certaine configuration pour fonctionner.


### 1.0 - Prérequis

* Un gestionnaire de packages et d'environnement tel que **[Node.js / NPM](https://nodejs.org/en/download/)**
* Le **[CLI de SASS](https://sass-lang.com/documentation/cli/dart-sass)** à installer globalement via `npm install -g sass`
* Un outil de server local léger tel que **[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)** (optionel)


### 1.1 - Installation

L'utilitaire **[npm-run-all](https://www.npmjs.com/package/npm-run-all)** d'exécution multiple de scripts doit être installer localement dans les dépendances de développement.

```sh
npm install npm-run-all --save-dev

# Ou, si vous avez cloné ce projet
npm install
```

### 1.2 - Lancement

Lancer `Go Live` (optionel), et la commande qui surveille les fichiers Sass en cours de développement
```sh
npm run dev
```

---

## 2 - Structure

Une structure spécifique est établie pour chaque partie, laquelle est utile à découvrir pour mieux comprendre le projet et sa résolution.


### 2.0 - Dossiers et fichiers

Il n'y a aucune _librairie tierce_ dans ce projet.

* `assets/` images, icônes, logos, etc.
    - `fig/`
    - `icons/`
    - `trademark/`
* `public/` code source frontend
    - `css/` résultats compliés en CSS _non minifiées_
    - `js/`
* `sass/` code source Sass
    - `base/`
    - `components/`
    - `pages/`
    - `themes/`
    - `utils/`
* `_manifest.json` en guise d'exemple (optionnel), à préfixer avec le nom de l'application
* `components.html`
* `index.html`
* `layout.html`
* `unavailable.html`


### 2.1 - Document HTML

La structure HTML minimale liée au template. Les sections `<header id="uihead">` et `<footer id="uifoot">` sont partiellement modulables mais strictes en terme de structure.

```
<header id="uihead">
    .inner
        .headline
            .applogo
                .icon
                .title
            <p> (optionel, si baseline ou sloggan)
        .navigation[.expand (optionel, si sous-menu)]
            <nav class="mainmenu">
            <nav class="langmenu|socialmenu"> (optionel)
    .egde (optionel, 2x si effet design)
    <button>
<main>
    <header>
        <h1>
        .share
    <section> | <article> | <div> | <*>
        <*>
<footer id="uifoot">
    .headline
        <div>
            .applogo
                .icon
                .title
            <p> (optionel, si baseline ou sloggan)
        <nav class="socialmenu"> (optionel)
    .navigation (optionel)
        <nav class="mainmenu">
        <nav class="secondmenu"> (optionel)
        <nav class="langmenu"> (optionel)
```

---

## 3 - Méthodologie

La résolution de ce projet s'appuie sur une certaine méthodologie. Pour commencer, il n'y a aucun *vendor*, ni *librairie tierce*. De plus, les spécificités liées au *layouting* sont considérés en tant que *pages* (cf. dossier `pages/`) ; Quant au layout principal, il demeure la préoccupation des traitements communs (cf. dossier `base/`).


### 3.0 - Développement

Ce template observe le principe des **CSS découpées** en séparant les préoccupations en **3 fichiers finaux**. 
* la **base** générale et commune
* les **composants** également communs
* et **l'esthétique**. 
Auxquelles peuvent s'ajouter des feuilles respectivement dédiées aux pages et donc à *utilité unique*.

Cette découpe minimale **permet au navigateur de lancer en même temps plusieurs requêtes de faibles tailles** au lieu d'en avoir une seule d'un poid conséquent.

Ce template permet quelques configurations de layout dans le fichier *utils/_setup.css* qui limite des déclarations excessives lorsqu'elles sont inutiles. Ce qui à pour avantage de limiter le poids des fichiers générés. 

#### Décomposition

Certains fichiers méritent un brève explication. Pour le reste, la décomposition respecte la *tradition*.

1. `utils/` ne présente que des modèles, aucune déclaration CSS non-fonctionnelle.
    - `_setup.scss` activer les soumenus ; activer l'effet *edge* en bordure de menu ; choisir le theme ;
    - `_index.scss` à importer dans chaque feuille nécessitant ces modèles
    - ...
2. `base/`
    - `_fonts.scss` règles @font-faces
    - `_normalize_.scss` normalisation des balises
    - `_typography.scss` titres, textes et paragraphes communs
    - `_composition.scss` structure et composition communes (*layouting*)
    - `_index.scss` importé par `base.scss` pour compilation – [!] présente un ordre précis d'import des feuilles susmentionnées.
3. `components/`
    - `_classical.scss` stylisation classique d'éléments contenu
    - `_interactive.scss` stylisation classique d'éléments interactifs
    - `_advanced.scss` stylisation spéciale d'éléments de contenu et de contenus dédiées
    - `_index.scss` importé par `components.scss` pour compilation – [!] présente un ordre précis d'import des feuilles susmentionnées.
4. `pages/`
    - `(*).scss` sont exploités par leur page HTML éponyme, feuilles directement compilées
5. `themes/`
    - `_neptune.scss` theme original lié au template
    - `_index.scss` importé par `theme.scss` pour compilation.


### 3.1 - Compilation

La compilation – via `dev` ou `dist` – génère au minimum 3 fichiers _.css_ distincts. Un pour chaque préoccupation à savoir _base_, _components_ et _theme_. Lesquels représentent chacun un dossier éponyme où figure un fichier *_index.scss* qui exporte les fichiers _.scss_ concernés. Seul le dossier _pages/_ contient des feuilles compilées individuellement et sans distinction effective. Quant au dossier _utils_ sont contenu n'est pas compilé en _.css_, il est simplement importé pendant la phase de compilation pour permettre à **Sass** d'implémenter les différentes zones variables ou d'appliquer certaines directives.

1. `npm run dev` : lance la compilation observée en temps réelle et en parallèle des fichiers ciblés par la directive `watch:*`. Ceux-ci demeurent _étendus_ et _mappés_ pour faciliter la lecture du résultat si besoin. S'utilise pendant qu'on travaille sur le projet.
2. `npm run dist` : lance la compilation séquentielle des fichiers ciblés par la directive `compile:*`. Ceux-ci sont _minimifiés_ et _non-mappé_. S'utilise à la fin, lorsqu'on veut exploiter les résultats CSS dans une intégration Fron-End.

La sortie de compilation pour le mode `dev` se fait dans le dossier _/public/css_. Et la sortie de compilation du mode `dist` se fait dans le dossier *_dist/*.

---

## 4 - Remarques

- Le principe de nommage **BEM** – _bloc - élément - modificateur_ – n'est pas respecté car trop verbeux, et ce template n'est pas destiné à un usage universel ou en entreprise.
- La rêgle `@import` est signalée sur [Sass/At-Rules/@import](https://sass-lang.com/documentation/at-rules/import) comme étant en phase de dépréciation. La rêgle `@use` est donc privilégiée.
- Le `<footer id="uifoot">` ne permet pas l'intégration d'une structure de sous-menu (`.navigation.expand`).
- La balise `<ul>` du `<nav class="socialmenu">` dans `<footer id="uifoot">` n'exploite pas la propriété `display: flex` car l'élément `<nav class="socialmenu">` lui-même est déjà un 'flex-item' et empêche la gestion simplifiée de l'espacement par `justify-content: space-between`;