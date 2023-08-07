/// ИТОГОВОЕ Задание на проверку знаний:

// Дана переменная dayOfWeek, которая содержит день недели на английском языке. Используя switch,===,=,||,if else напишите код, который выводит на экран сообщение, соответствующее дню недели:

// (Если что встретилось непонятно-новенькое,к примеру || -гуглим)

// Если dayOfWeek равна "Monday", "Tuesday", "Wednesday", "Thursday" или "Friday", выведите на экран сообщение "Будний день".
// Если dayOfWeek равна "Saturday" или "Sunday", выведите на экран сообщение "Выходной день".
// Если значение переменной dayOfWeek не соответствует ни одному из вышеперечисленных случаев, выведите на экран сообщение "Некорректное значение дня недели".

// 1

let dayOfWeek = "Monday";

switch (dayOfWeek) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("Будний день");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Выходной день");
    break;
  default:
    console.log("Некорректное значение дня недели");
    break;
}

// 2

let dayOfWeek = "Monday";

if (dayOfWeek === "Monday" || dayOfWeek === "Tuesday" || dayOfWeek === "Wednesday" || dayOfWeek === "Thursday" || dayOfWeek === "Friday") {
  console.log("Будний день");
} else if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
  console.log("Выходной день");
} else {
  console.log("Некорректное значение дня недели");
}