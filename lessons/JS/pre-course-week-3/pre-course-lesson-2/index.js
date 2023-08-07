// Задание 1  на проверку знаний:
// Выведи адреса Юзеров:

const users = [ 
  { 
      id: 1, 
      name: 'John', 
      surName: 'Doe', 
      address: '123 Main St' 
  }, 
  { 
      id: 2, 
      name: 'Jane', 
      surName: 'Smith', 
      address: '456 Elm St' 
  }, 
  { 
      id: 3, 
      name: 'Tom', 
      surName: 'Johnson', 
      address: '789 Oak St' 
  } 
]; 

users.forEach(user => {
  console.log(user.address);
});

// Задание 2  на проверку знаний:
// Выведи только тех юзеров у кого id не больше 2. Используй тот же массив.

const filteredUsers = users.filter(user => user.id <= 2);
const addresses = filteredUsers.map(user => user.address);

addresses.forEach(address => {
  console.log(address);
});