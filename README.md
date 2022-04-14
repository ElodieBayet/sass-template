# SASS Template

Date | Reviewed | Purpose | Discipline | Example
---- | -------- | ------- | ---------- | -------
2020.04 | 2022.04 | Pedagogy | HTML/CSS | [Sass-Template](https://demo.elodiebayet.com/sass-template)


## **Avant-propos**

Le but est de montrer **comment développer une application web basique**. Il ne s'agit pas d'un _modèle_ ni d'un _template_ intégrable mais bien **d'un simple exemple**. Il n'y aura pas de _versions ultérieures_ – sauf corrections de bugs, d'erreurs, ou de coquilles laissés par mégarde – ce projet ne va pas _évoluer_.

---

## Sommaire 
0. [Présentation](#0---présentation)
    * [0.0 - Objectifs](#00---objectifs)
    * [0.1 - Évolution](#01---évolution)
    * [0.2 - Exploitation](#02---exploitation)
1. [Démarrage](#1---démarrage)
    * [1.0 - Prérequis](#10---prérequis)
    * [1.1 - Installations](#11---installations)
    * [1.2 - Lancement](#12---lancement)
2. [Structure](#2---structure)
    * [2.0 - Dossiers et fichiers](#20---dossiers-et-fichiers)
    * [2.1 - Document HTML](#21---document-html)
3. [Développement](#3---développement)
    * [3.0 - Décomposition](#30---décomposition)
    * [3.1 - Compilation](#31---compilation)
4. [Remarques](#4---remarques)

---

## 0 - Présentation

Exemple d'élaboration d'un template **Sass** basique, utilisable pour des démos et des side-projects simples.


### 0.0 - Objectifs

- Apprendre la décomposition des styles CSS
- Découvrir la dynamique de développement proposée par **Sass**
- Observer une structure et une organisation pertinentes de fichiers


### 0.1 - Évolution

Sauf un quelconque défaut laissé par mégarde, ce projet ne doit pas évoluer vers une modélisation plus avancée. Il constitue **une ressource pédagogique** de base destinée à l'apprentissage de concepts parfois obscurs pour des néophytes.


### 0.2 - Exploitation

Ce projet n'est utilisable que dans un cadre d'apprentissage individuel et privé. Il ne convient pas pour une utilisation publique ou professionnelle.

#### Images

Les images employées dans ce projet et répertoriées dans le dossier `assets/` sont soumises aux droits d'auteur et protégées par la [Sofam](https://www.sofam.be/) – auteure n° 72/55. Aucune reproduction, communication publique, réutilisation partielle ou entière des images **n'est autorisée**.

---

## 1 - Démarrage

Installations et configurations nécessaires au bon fonctionnement du projet.


### 1.0 - Prérequis

* Un gestionnaire de packages et d'environnement tel que **[Node.js / NPM](https://nodejs.org/en/download/)**
* Un outil de server local léger tel que **[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)**


### 1.1 - Installations

Le **[CLI de SASS](https://sass-lang.com/documentation/cli/dart-sass)**, globalement :

```sh
npm install -g sass
```

L'utilitaire **[npm-run-all](https://www.npmjs.com/package/npm-run-all)** d'exécution multiple de scripts, localement dans les dépendance de développement :

```sh
npm install --save-dev npm-run-all
```

### 1.2 - Lancement

Lancer la commande de compilation surveillée :

```sh
npm run dev
```

Ensuite, lancer `Go Live`, puis se rendre à l'adresse `127.0.0.1:5500` (peut varier selon le port) avec un navigateur.

---

## 2 - Structure

Descriptions et schémas des différentes structures pour la résolution du projet.


### 2.0 - Dossiers et fichiers

* `assets/` _ressources statiques (png, jpg, svg)_
    - `figures/` _images ou photos générales pour intégration_
    - `icons/` _icônes, symboles, pictos, etc. indépendants de la marque_
    - `trademark/` _logos, icônes, etc. propres à la marque_
* `public/` _code source frontend (css, js)_
    - `css/` _résultats compliés en CSS, mappés et étendus_
    - `js/`
* `sass/` _code source original en Scss_
    - `base/`
    - `components/`
    - `pages/`
    - `themes/`
    - `utils/`
* `_manifest.json` _manifest de l'application_


### 2.1 - Document HTML

La structure HTML minimale liée au template. Les sections `<header id="uihead">` et `<footer id="uifoot">` sont partiellement modulables mais strictes en terme de structure.

* `<header#uihead>`
    - `.inner`
        - `.headline`
            - `.applogo`
                - `.icon`
                - `.title`
            - `<p>` (optionel, si baseline ou sloggan)
        - `.navigation`[`.expand` (optionel)]
            - `<nav.mainmenu>`
            - `<nav.langmenu>`|`<nav.socialmenu>` (optionel)
    - `.egde` (optionel, 2x si effet design)
    - `<button>`
* `<main>`
    - `<header>`
        - `<h1>`
        - `.share` (optionnel)
    - `<section>` | `<article>` | `<div>` | {n} blocks sections par thématiques liées à la page
        - `<div>` {n} boites comportementales ou dédiées
* `<footer#uifoot>`
    - `.headline`
        - `<div>`
            - `.applogo`
                - `.icon`
                - `.title`
            - `<p>` (optionel, si baseline ou sloggan)
        - `<nav.socialmenu>` (optionel)
    - `.navigation` (optionel)
        - `<nav.mainmenu>`
        - `<nav.secondmenu>` (optionel)
        - `<nav.langmenu>` (optionel)

---

## 3 - Développement

Il n'y a aucun _vendor_, ni _librairie tierce_ dans ce projet. Les spécificités liées au _layouting_ sont considérés comme des _pages_ (cf. dossier `pages/`), tandis que le layout principal demeure la préoccupation du traitement commun (cf. fichier `common.scss`). Les fichiers sont donc découpés et classés selon leur préoccupation respective.


### 3.0 - Décomposition

1. `utils/` _modèles, variables, mixins, fnctions, etc._
    - `_index_.scss` _exporte les fichiers pour l'import local_
    - `_setup.scss` _configuration pour l'interface_
    - _etc._
2. `base/` 
    - `_index_.scss` _exporte les fichiers pour la compilation – **!** ordre à respecter_
    - `_fonts.scss` _règles @font-faces_
    - `_normalize_.scss` _normalisation de balises_
    - `_typography.scss` _titres, textes et paragraphes communs_
    - `_composition.scss` _structure et layout principal_
3. `components/`
    - `_index_.scss` _exporte les fichiers pour la compilation – **!** ordre à respecter_
    - `_classical.scss` _éléments classiques_
    - `_interactive.scss` _éléments interactifs_
    - `_advanced.scss` _éléments spécifiques et stylisation avancée_
4. `pages/` _pages spécifiques ou composants individuels_
    - `(nom-de-la-page).scss` _layout du composant_
    - `theme_(nom-de-la-page).scss` _design du composant_
5. `themes/` _design de base_
    - `_index_.scss` _exporte les fichiers pour la compilation_
    - `_original_base.scss` _design thématique pour la base_
    - `_original_components.scss` _design thématique pour les composants_

Les sous-fichiers sont répartis dans les fichiers :
* `common.scss` _importe `base/_index.scss` et `components/_index.scss`_
* `theme.scss` _importe `theme/_index_.scss`_
* `name-of-module.scss` _importe `pages/_nom-de-la-page.scss` et `pages/_nom-de-la-page.scss`_

Les fichiers ci-dessous constituent des feuilles de styles définitives :
* `root.scss` _css uniques pour la page racine_
* `unavailable.scss` _css uniques pour la page d'erreur interne_


### 3.1 - Compilation

Il y a deux modes de compilation :

1. `npm run dev` : lance la compilation avec surveilance en parallèle pour le développement, avec les `mapped` et `expanded`. Les fichiers CSS de destination se trouvent dans `public/css/`
2. `npm run dist` : lance la compilation en séquentiel pour la distribution, avec les option `no mapped source` et `compressed`. Les fichiers CSS de destination se trouvent dans `dist/`

---

## 4 - Remarques

- Le principe de nommage **BEM** – _bloc - élément - modificateur_ – n'est pas respecté car trop verbeux, et ce template n'est pas destiné à un usage universel ou en entreprise.
- La rêgle `@import` est signalée sur [Sass/At-Rules/@import](https://sass-lang.com/documentation/at-rules/import) comme étant en phase de dépréciation. La rêgle `@use` est donc privilégiée.
- Le `<footer id="uifoot">` ne permet pas l'intégration d'une structure de sous-menu (`.navigation.expand`).
- La balise `<ul>` du `<nav class="socialmenu">` dans `<footer id="uifoot">` n'exploite pas la propriété `display: flex` car l'élément `<nav class="socialmenu">` lui-même est déjà un 'flex-item' et empêche la gestion simplifiée de l'espacement par `justify-content: space-between`;