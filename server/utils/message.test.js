var expect = require('expect');
var { generateMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        const from = 'aFrom';
        const text = 'aText for the message';
        let msg = generateMessage(from, text);

        expect(msg).toExist();
        expect(msg.from).toBe(from);
        expect(msg.text).toBe(text);
        expect(msg.createdAt).toBeA('number');
        expect(msg).toInclude({
            from,
            text
        });
    });
});