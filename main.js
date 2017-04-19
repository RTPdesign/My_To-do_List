var addTodo = () => //Global, calls html
{
    var task = document.getElementById('task');
    myTodo.add(task.value);

    task.value = '';
}


var Todo = function(List)
{
    var count = 0;
    

    var toggleClassName = function(event){
        console.log(event.target.className);
        if(event.target.className === 'completed') {
            event.target.className = '';
        }
        else{
            event.target.className = 'completed';
        }
    };

    var addTodo = (task) =>
    {
        //Creates items
        let taskLi = document.createElement('li');
        let check = document.createElement('input');
        let label = document.createElement('label');
        let textElement = document.createTextNode(' - ' + task);
        let removeButton = document.createElement('button');

        removeButton.innerHTML = 'Remove Task';
        check.type = "checkbox";
        check.addEventListener('click', function(event){
            if(event.target.parentElement.className === 'completed') {
            event.target.parentElement.className = '';
        }
        else{
            event.target.parentElement.className = 'completed';
        }
        });

        // Add event listener on the label
        removeButton.addEventListener('click', function(event){
        List.removeChild(event.target.parentElement);
        });


        //Tells items where to go and append to
        label.appendChild(check);
        label.appendChild(textElement);
        taskLi.appendChild(label);
        List.appendChild(taskLi);
        taskLi.appendChild(removeButton);

        ++count;
        
    }

    return {
        add: addTodo
    }
}

//Gets the ol with id=todo
var todoNode = document.getElementById('todo');
var myTodo = new Todo(todoNode);
document.getElementById('btn').addEventListener('click', addTodo);