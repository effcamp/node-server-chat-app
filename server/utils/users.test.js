const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {
  it('should add new user', () => {
    const users = new Users();
    const user = {
      id: '123',
      name: 'Fred',
      room: 'Node-room'
    };
    const resUser = users.addUser(user.id, user.name, user.room);
    expect(users.user).toMatchObject([user]);
  });
});
