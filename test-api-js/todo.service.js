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

    delete_todo(){
        // Your code here

    //     // deleteElement = this.todos.todo.filter(element => element.title != 'T1');
    // //     this.todos.todo.pop(id);
    // //    deletedElement = this.todos.todo[filter(element => element.title = 'T2')]
    // //         // element => element.title != 'T1'
    // //     return deletedElement;
    // delete this.todos.todo.filter(element => element.title = "T2");
    // return 
    this.todos.todo.pop();
    const remainEle= this.todos.todo[this.todos.todo.length-1];
    return remainEle;
    }

    update_todo(id){
       // Your code here
        // findobject = this.todos.todo.findIndex( search => search.title == "T1");
        // this.todos.todo[findobject].title = "T12";
        // console.log(this.todos.todo[findobject]);
        const arrayIndex = this.todos.todo.findIndex((ele => ele.title = id ));
        this.todos.todo[arrayIndex].done = true;
        
        // this.todos.todo[arrayIndex].id2 = "T12";
        return this.todos.todo[arrayIndex];

    }
}


module.exports= todoservice;