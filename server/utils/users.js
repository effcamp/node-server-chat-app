// const users = [
//   {
//     id: '',
//     name: '',
//     room: ''
//   }
// ];

class Users {
  constructor(id, name, room) {
    this.users = [];
  }
  addUser(id, name, room) {
    const user = { id, name, room };
    this.users.push(user);
  }
  removeUser(id) {}
  getUser(id) {}
  getUserList(room) {}
}

module.exports = { Users };
