// Пример без использования DI
class UserService {
  constructor() {
    this.db = new Database();
  }

  getUsers() {
    return this.db.getUsers();
  }
}

// Пример с использованием DI
class UserService {
  constructor(database) {
    this.db = database;
  }

  getUsers() {
    return this.db.getUsers();
  }
}

// Создаем экземпляр Database и передаем его в конструктор UserService
const db = new Database();
const userService = new UserService(db);
