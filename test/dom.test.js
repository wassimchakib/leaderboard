/**
 * @jest-environment jsdom
 */

const dom = require('../src/modules/dom.js');

describe('Check list items', () => {
  beforeAll(() => {
    document.body.innerHTML = `
    <ul class="list-score">
    </ul>
    <div class="add-score">
      <form>
        <input type="text" name="name" placeholder="Your name" />
        <input type="number" name="score" placeholder="Your score" />
        <div class="submit-btn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    `;
  });
  test('Test list item', () => {
    const spy = jest.spyOn(dom, 'submitForm');
    dom.submitForm();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
