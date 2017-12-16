const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {
  let users;
  beforeEach(() => {
    users = new Users();
    users.users = [
      {
        id: '1',
        name: 'Fred',
        room: 'Node'
      },
      {
        id: '2',
        name: 'Clara',
        room: 'React'
      },
      {
        id: '3',
        name: 'Tom',
        room: 'Node'
      }
    ];
  });

  it('should add new user', () => {
    const users = new Users();
    const user = {
      id: '123',
      name: 'Fred',
      room: 'Node-room'
    };
    const resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toMatchObject([user]);
  });

  it('should return names for node course', () => {
    const userList = users.getUserList('Node');

    expect(userList).toEqual(expect.arrayContaining(['Fred', 'Tom']));
  });

  it('should return names for react course', () => {
    const userList = users.getUserList('React');

    expect(userList).toEqual(expect.arrayContaining(['Clara']));
  });

  it('should remove a user', () => {
    const userId = users.users[0].id;
    const user = users.removeUser(userId);
    expect(user.id).toBe(userId);
    expect(users.users).not.toEqual(
      expect.arrayContaining([
        {
          id: '1',
          name: 'Fred',
          room: 'Node'
        }
      ])
    );
  });
  it('not remove a user', () => {
    const userId = '99';
    const user = users.removeUser(userId);
    expect(user).toBeFalsy;
    expect(users.users.length).toBe(3);
  });
  it('should find user', () => {
    const userId = '2';
    const user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });
  it('should not find user', () => {
    const userId = '99';
    const user = users.getUser(userId);

    expect(user).toBeFalsy;
  });
});
