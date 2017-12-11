## Formation VueJS

Commencons par qu'est-ce que VueJS?

VueJS est un framework frontend Javascript crée par Evan You. Il travaillait pour Google, plus précisement dans l'équipe qui développait Angular. Il a quitté l'équipe car le développement d'Angular ne lui plaisait pas et il a voulu produire son propre framework. C'est comme ca que VueJS est né.

Ok, ca consite en quoi?

D'après leur site, VueJS est un framework évolution qui permet de construire des interfaces utilisateur. En pratique il s'agira d'un framework qui simplifie le rendu des pages, en manipulant le DOM HTML d'une facon extremement optimisée afin de mettre à jour le strict nécessaire. Une fonctionnalité intéressante est le *Two Way Binding*. Si la donnée est mise à jour, l'affichage est automatiquement à jour, sans avoir à déclencher quoi que ce soir.

# Commencons !

Je vous propose de faire un hello world. Pour cela, il va falloir créer un fichier **index.html** dans lequel nous allons recuperer la lib Vue. Je suis cool, je vous l'ai déjà préparé.

Dans notre *body*, nous allons rajouter ceci :

```
<div id="app">
  {{ message }}
</div>
```
et nous déclarons un objet Vue, dans une balise script :
```
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue !'
  }
})
```

> Ok, j'ai bien mon "Hello Vue qui s'affiche, c'est tout?

Et bien non, ici les données et le DOM sont maintenance "couplés" l'un à l'autre et sont réactifs. Admettons que au bout d'un certain temps, la donnée change, l'affichage sera directement mis à jour ! Vu que nous avons affecté notre objet dans une variable, nous pouvons modifier ses données.

Faisons un test : ouvrez votre console et faites un `app.message = 'Salut'`. L'affichage devrait changer vers ce que vous avez saisi, sans avoir rien à faire ! En jQuery (Aie, cette lib me fait mal), il aurait été nécessaire de faire un selecteur pour changer la valeur dans le DOM.

# Continue, tu m'intéresses !

Les diffèrents exercices se trouvent sur les branches de ce repository. Vous y trouverez des exercices sur du *Two way data binding*, la découverte des *life cycle hooks* et bien d'autres choses.

# Documentation

[Documentation francaise de VueJS](https://fr.vuejs.org/v2/guide/index.html)
