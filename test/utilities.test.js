import checkInput from '../src/modules/utilities.js';

describe('Check input string', () => {
  test(' checkinput("") ==> false', () => {
    // Arrange
    const text = '';

    // Act
    const result = checkInput(text);

    // Assert
    expect(result).toBeFalsy();
  });

  test(' checkinput("   ") ==> false', () => {
    // Arrange
    const text = '   ';

    // Act
    const result = checkInput(text);

    // Assert
    expect(result).toBeFalsy();
  });

  test(' checkinput("test") ==> true', () => {
    // Arrange
    const text = 'test';

    // Act
    const result = checkInput(text);

    // Assert
    expect(result).toBeTruthy();
  });
});