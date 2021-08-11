import getHealth from '../player';

describe('function getHealth', () => {
  test('Should return status HEALTHY for value 50 and bigger', () => {
    expect(getHealth({ name: 'Маг', health: 80 })).toBe('healthy');
  });
  test('Should return status HEALTHY for value 50 and bigger', () => {
    expect(getHealth({ name: 'Маг', health: 51 })).toBe('healthy');
  });
  test('Should return status WOUNDED for value between 15 and 50', () => {
    expect(getHealth({ name: 'Маг', health: 50 })).toBe('wounded');
  });
  test('Should return status WOUNDED for value between 15 and 50', () => {
    expect(getHealth({ name: 'Маг', health: 30 })).toBe('wounded');
  });
  test('Should return status CRITICAL for value lower 15', () => {
    expect(getHealth({ name: 'Маг', health: 15 })).toBe('critical');
  });
  test('Should return status CRITICAL for value lower 15', () => {
    expect(getHealth({ name: 'Маг', health: 2 })).toBe('critical');
  });
});
