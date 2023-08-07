// Задание 1  на проверку знаний:
// При помощи map поменяйте "JS" на 'I like JS":

const tasks = [ 
  { id: 1, title: "HTML&CSS", isDone: true }, 
  { id: 2, title: "JS", isDone: true }, 
  { id: 3, title: "ReactJS", isDone: false } 
] 

const updatedTasks = tasks.map(task => {
  if (task.title === "JS") {
    return { ...task, title: "I like JS" };
  }
  return task;
});

// Задание 2  на проверку знаний:
// Добавь объект {id: 4, title: "Next", isDone: false } в тот же самый массив.

const newTask = { id: 4, title: "Next", isDone: false };
tasks.push(newTask);