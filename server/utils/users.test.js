const expect = require('expect');
const { Users } = require('./users');

describe('Users', () => {

    var users;

    beforeEach(() => {
        users = new Users();

        users.users = [{
                id: '1',
                name: 'Mike',
                room: 'Node course'
            },
            {
                id: '2',
                name: 'Gigi',
                room: 'React course'
            },
            {
                id: '3',
                name: 'Gelu',
                room: 'Node course'
            }
        ]
    });

    it('should add new users', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Ion',
            room: 'The office fans'
        };

        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('shoud return names for node course', () => {
        var userList = users.getUserList('Node course');
        expect(userList).toEqual(['Mike', 'Gelu']);
    });

    it('shoud return names for react course', () => {
        var userList = users.getUserList('React course');
        expect(userList).toEqual(['Gigi']);
    });

    it('should remove the user', () => {
        users.removeUser('1');
        expect(users.users).toEqual([{
                id: '2',
                name: 'Gigi',
                room: 'React course'
            },
            {
                id: '3',
                name: 'Gelu',
                room: 'Node course'
            }
        ])
    });

    it('should not remove the user', () => {
        users.removeUser('333');

        expect(users.users).toEqual([{
                id: '1',
                name: 'Mike',
                room: 'Node course'
            },
            {
                id: '2',
                name: 'Gigi',
                room: 'React course'
            },
            {
                id: '3',
                name: 'Gelu',
                room: 'Node course'
            }
        ])
    });

    it('should find the user', () => {
        var user = users.getUser('1');
        expect(user).toEqual({
            id: '1',
            name: 'Mike',
            room: 'Node course'
        });
    });

    it('should not find the user', () => {
        var user = users.getUser('111');
        expect(user).toEqual(undefined);
        expect(user).toNotExist();
    });
});