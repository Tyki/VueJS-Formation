# Exercice 3

Nous avons vu comment créer des composants, afficher des données, comment les récuperer depuis une saisie. 

Maintenant il est temps d'organiser nos pages correctement.
Nous allons mettre en place le systeme de routing de Vue qui s'appelle `vue-router`

La documentation se trouve ici : https://router.vuejs.org/en/essentials/getting-started.html

Le but de cet exercice est de :
- créer un nouveau composant `Home` dans le fichier Home.vue qui va contenir notre page d'accueil . C'est à dire déplacer l'utilisation des composants : "myContent, myRightCol" dans ce nouveau composant.

- Créer un second composant `secondPage` dans le fichier SecondPage.vue qui va contenir un simple "Je suis sur la seconde page".

- Importer nos deux nouveaux composants dans le fichier de routing "router/index.js" et déclarer sur :
 > sur la route "/", le composant "home"
 > sur la route "/second", le composant "secondPage"
(https://router.vuejs.org/en/essentials/getting-started.html)

Le format d'enregistrement est le suivant : 
```
{
  name: 'NomDuComposant',
  component: Composant,
  path: '/url/reliée/au/composant'
}
```

- Mettre en place le routing dans le fichier "App.vue"
(https://router.vuejs.org/en/essentials/getting-started.html) > "Router-view"

Le router view doit etre placé de façon à ce que le header et le footer ne soient appelés qu'une seule fois.
(Le "router-view" doit donc être placé dans le fichier App.vue, pour l'exercice)

- Rajouter des a href vers ces urls dans le composant "header"
(utilisation des "router-link")
