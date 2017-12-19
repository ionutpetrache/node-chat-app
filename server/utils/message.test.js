var expect = require('expect');
var { generateMessage, generateLocationMessage } = require('./message');

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

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        const from = 'A User';
        const lat = 1;
        const long = 2;
        let result = generateLocationMessage(from, lat, long);

        expect(result).toExist();
        expect(result.from).toBe(from);
        expect(result.url).toBe(`https://google.com/maps?q=${lat},${long}`);
    });
});