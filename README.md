# Exercice 5

Maintenant que nous avons des composants "mySkills" et "skill", nous allons remplacer les données statiques par des données qui proviennent d'un serveur.

Un serveur est déjà fourni dans le dossier `serveur`, il faut juste l'installer :
```
cd serveur
npm install
node index.js
```

Le but de cet exercice est de :
- installer la librairie 'Axios' (https://www.npmjs.com/package/axios). Utiliser la partie "Installing using npm" et "performing a get request"

La route du serveur est la suivante : `http://localhost:3000/getSkills` en GET 

- Utiliser axios pour aller récuperer des données, au chargement du composant 'mySkills'

```
name: '',
methods: {
  ...
},
data () {
  return {
    ...
  }
},
created () {
  // ICI, j'utilise Axios pour récuperer les données du serveur et je les injecte dans les data de mon composant et donc de mes composants enfants
}
```
