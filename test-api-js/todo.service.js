class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T2",
            "description": "D1",
            "done": false
        },{
            "title": "T3",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        // Your code here
        this.todos.todo.push(todo);
        const lastElement = this.todos.todo[this.todos.todo.length-1];
        return lastElement;
       /* this.todos.push({
        "title": "T4",
        "description": "D1",
        "done": true})*/
        
    }

    delete_todo(id){
        // Your code here
        deleteElement = this.todos.filter(element => element.title != 'T1');
        console.log(deleteElement);
    }

    update_todo(id, todo){
        // Your code here
        findobject = this.todos.findIndex( search => search.title == "T1");
        this.todos[findobject].title = "T12";
        console.log(this.todos[findobject])

    }
}


module.exports= todoservice;