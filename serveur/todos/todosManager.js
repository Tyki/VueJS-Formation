/**
 * Cette classe va permettre de gérer la todo-list, elle va fournir les méthodes CRUD.
 * A la connexion, le serveur node va donc créer une instance de cette classe et la stocker en session, et y fera appel
 */


class TodoList {
    constructor() {
        this.list = [];
    }

    /**
     * Méthode d'ajout d'une todo
     * @param nom Nom de la todo
     * @param description Description de la todo
     */
    addTodo(nom,description) {
        let todoToAdd = new Todo(this.getNextId(),nom,description); //Nouvelle instance de type Todo
        this.list.push(todoToAdd);
    }

    /**
     * Méthode pour récupérer un objet de type Todo selon un id fournit
     * @param id id (pas l'indes!) de la todo dans la list
     * @returns {*} : Soit false si on ne trouve rien, soit la todo demandée
     */
    getTodo(id) {
        let index = this.getIndexOf(id); //Recupération de l'index dans la liste par rapport à l'id de la todo
        if(index==-1) {
            return false;
        }
        return this.list[index];
    }

    /**
     * Methode de mise à jour du'ne todo
     * @param id : Id de la todo
     * @param nom : Nom de la todo
     * @param description : description de la todo
     * @returns {boolean} : true si la mise à jour a été effectuée, false sinon
     */
    updateTodo(id,nom,description) {
        let todo = this.getTodo(id);
        if(!todo) {
            return false;
        }
        todo.nom = nom;
        todo.description=description;
        return true;

    }

    /**
     * Methode de suppression d'une todo par rapport à un id fournit
     * @param id : id de la Todo
     * @returns {boolean} true si la todo a été supprimée, false sinon
     */
    deleteTodo(id) {
        let index = this.getIndexOf(id);
        if(index==-1) {
            return false;
        }
        this.list.splice(index,1);
        return true;
    }

    /**
     * Methode pour récupérer le prochain id à attribuer à une todo (ce n'est pas un index de liste)
     * La méthdoe va lire l'id de la dernière todo stockée actuellement et incrémenter de 1 puis retourner cette valeur
     * @returns {*} l'id de la prochaine todo à ajouter
     */
    getNextId() {
        if(this.list.length == 0) {
            return 0;
        }
        let lastTodo = this.list[this.list.length-1];
        return lastTodo.id+1;
    }

    /**
     * Methode pour récupérer l'index dans la liste d'une todo par son indentifiant (id)
     * @param id : id de la Todo recherchée
     * @returns {number} soit l'index de la todo dans la liste ou alors -1 si elle n'est pas trouvée
     */
    getIndexOf(id) {
        let i=0;
        while(i<this.list.length && this.list[i].id!=id) {
            i++;
        }
        return i<this.list.length ? i : -1;
    }

    /**
     * Methode pour connaitre le nombre de todo actuellement stockées
     * @returns {*} : Le nombre de todo
     */
    getNumberOfTodos() {
        return this.list.length;
    }

    /**
     * Cette méthode permet d'obtenir une sous-liste de la liste de todo
     * @param offset : Point de départ (numero de todo)
     * @param size Nombre de todos à récupérer
     * @returns {Array.<T>} Sous liste de todos
     */
    getAllTodosByLimit(offset=0,size = 6) {
        //Necessiter de parser en int, car opérations
        var realOffset = parseInt(offset);
        var realSize = parseInt(size);
        return this.list.slice(realOffset,realOffset+realSize);
    };
}

/**
 * Cette classe va permettre de gérer une todo (id : identifiant de todo, nom et description...)
 */
class Todo  {
    constructor(id,nom,description) {
        this.id = id;
        this.nom = nom;
        this.description = description;
    }
}


module.exports = {
    TodoList : TodoList,
    Todo : Todo,
};
