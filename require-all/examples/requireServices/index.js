const { UserService, TaskService, AlienService } = require('./services/index');

const users = UserService.getAll();
const tasks = TaskService.getAll();
const aliens = AlienService.getAll();

console.log(`Users: `, users);
console.log(`Tasks: `, tasks);
console.log(`Aliens: `, aliens);