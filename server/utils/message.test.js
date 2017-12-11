const expect = require('expect');
const { generateMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const text = 'Text';
    const from = 'Fred';
    const res = generateMessage(from, text);
    expect(res.from).toBe('Fred');
    expect(res.text).toBe('Text');
    expect(typeof res.createdAt).toBe('number');
  });
});
