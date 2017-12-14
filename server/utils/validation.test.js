const expect = require('expect');

const { isRealString } = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    const str = isRealString(1231243);
    expect(str).toBeFalsy();
  });
  it('should reject string with only spaces', () => {
    const str = isRealString('     ');
    expect(str).toBeFalsy();
  });
  it('should allow string with non-space characters', () => {
    const str = isRealString('  Fred  ');
    expect(str).toBeTruthy();
  });
});
