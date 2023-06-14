var i=0;
document.querySelector('#push').onclick = function(){
    var input_value = document.querySelector("#input").value;
    if(document.querySelector('#input').value.length == 0){
        alert("Kindly Enter Task Name!")
    }

    else{
        var time = new Date();
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <div class="taskname">
                <input type="text" id="input2" value="${input_value}">
                <input type="text" id="input4" value="${time}">
                </div>
                <div class="box">
                    <button class="done">
                        Done
                    </button>
                    <button class="delete">
                        Delete
                    </button>
                </div>
            </div>
        `;
        

        
        
        document.querySelector('#input').value = "";
        var completed_tasks = document.querySelectorAll(".done");
        for(var i=0; i<completed_tasks.length; i++){
            completed_tasks[i].onclick = function(){
                document.querySelector('#done').innerHTML += `
                <div class="task">
                    <div class="taskname">
                    <input type="text" id="input3" value="${input_value}">
                    <input type="text" id="input4" value="${time}">
                    </div>
                    <div class="box">
                        <button class="delete">
                            Delete
                        </button>
                    </div>
                </div>
            `;

                this.parentNode.parentNode.remove();

                var completed_tasks = document.querySelectorAll(".delete");
                for(var i=0; i<completed_tasks.length; i++){
                    completed_tasks[i].onclick = function(){
                this.parentNode.parentNode.remove();
            }
        }

                
            }
        
    }
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.parentNode.remove();
            }
        }
        
    }
}