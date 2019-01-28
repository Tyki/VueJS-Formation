# Backend : Gestionnaire de todos

*(Auteur : **Malo Gasquet**)*

Rendu pour le TP NodeJS, API REST

Cette partie présente les différentes informations concernant la partie backend en NodeJS. Pour plus d'informations, n'hésitez pas également à consulter le [readme concernant le frontend](../frontend/README.md)

## Sommaire

- [Instructions d'installation et de lancement](#instructions-dinstallation-et-de-lancement)

- [Développement](#développement)

  - [Module de gestion de la todo-list](#)
  - [Middleware d'initilisation de la liste](#module-de-gestion-de-la-todo-list)
  - [Routes](#routes)
  - [Modules externes utilisés](#modules-externes-utilisés)
  
## Instructions d'installation et de lancement

 - Pour installer cette API node, rendez vous dans le dossier backend et éxécutez la commande suivante :

    *npm install*

- Pour le lancement :

  *node index.js*

La console devrait alors afficher le message suivant : "API de gestion de todos lancée!"

## Développement

Cette section va présenter le module de gestion des todos qui a été développé puis expliquer le middleware gérant la liste des todos, puis les différentes actions réalisées via les routes, et enfin, présenter les différents modules externes utilisés.

### Module de gestion de la todo-list

Le module de gestion de la liste des todos définie deux classes js :

La classe Todo défini par un id, un nom et une description.
Le nom correspond à ce qui sera affiché de la liste, la description est le détail de la tâche.

La classe TodoList qui possède une liste contenant des instances de la classe Todo
Cette classe définie différentes méthodes pour ajouter, mettre à jour, supprimer, récupérer des todos (méthodes CRUD)

Le module exporte donc ces deux classes.
(Un objet du type TodoList sera stockée en session)

### Middleware d'initilisation de la liste

Au niveau du router (index.js) il semble important de noter la présence du middleware permettant d'initialiser la session

Ce middleware, regarde si la session possède une TodoList, si ce n'est pas le cas elle l'initiliase.

Il permet également d'injecter le prototype (comprotemtn) de la TodoList dans l'objet contenu dans la session afin de pouvoir appeler les méthodes de TodoList directement depuis ce fichier de routage.

### Routes

L'API est utilisable via différente routes :

- /listTodos : Permet de récupérer toutes les instances Todo contenues dans la TodoList

- /listTodos/:offset/:size : Permet de récupérer un certain nombre d'instances Todo contenues dans la TodoList à partir d'un point donné (offset) et un nombre donné (size)

- /addTodo : Permet d'ajouter une todo (en post) les paramètres à envoyer sont "nom" et "description"

- /getTodo/:id : Permet de récupérer une instance de Todo contenue dans la TodoList selon son id (attention,  **il s'agit de l'id de la todo et non pas de son index dans la liste de la TodoList**)

- /todosSize : Permet de récupérer le nombre d'instance de Todo contenues actuellement contenues dans la TodoList

- /updateTodo : Permet de mettre à jour une todo (en post) les paramètres à envoyer sont "id", "nom" et "description" (renvoi true/false selon le succès de l'opération)

- /deleteTodo : Permet de supprimer une todo (en post) le paramètre à envoyer est "id" (renvoi true/false selon le succès de l'opération)

Toutes les réponses renvoient des données sous le format json

### Modules externes utilisés

Pour réaliser cette APi, différents modules externes ont été utilisés :

- express et express-session : Pour la gestion de l'application et de la session

- body-parser : Pour la gestion des requêtes post

- cors : Pour la gestion des requêtes d'origine extérieure






