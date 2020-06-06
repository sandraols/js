const displayTasks = () => {
    if(window.localStorage.getItem('task')) {
        const taskArray = JSON.parse(window.localStorage.getItem('task'));
        const taskHtmlString = taskArray.map(task => `<li>${task}</li>`).join('');
        $('#todos').html(taskHtmlString);
    }
}
const addTask = () => {
    const task = $('#input').val();
    if(task) {
        const taskArray = JSON.parse(window.localStorage.getItem('task')) || [];
        taskArray.push(task);
        window.localStorage.setItem('task', JSON.stringify(taskArray));
        displayTasks();
    }
};
displayTasks();
$('#input').keyup(function(e){
    if(e.keyCode == 13)
    {
        addTask();
    }
});
$('#button').click(function(){
    addTask();
})