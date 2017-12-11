const expect = require('expect');
const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const text = 'Text';
    const from = 'Fred';
    const message = generateMessage(from, text);
    expect(message.from).toBe('Fred');
    expect(message.text).toBe('Text');
    expect(typeof message.createdAt).toBe('number');
  });
});
describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    const from = 'Fred';
    const lat = 21;
    const lng = 22;
    const url = `https://google.com/maps?q=${lat},${lng}`;
    const message = generateLocationMessage(from, lat, lng);
    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({ from, url });
  });
});
