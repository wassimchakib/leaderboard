/**
 * @jest-environment jsdom
 */
// eslint-disable-next-line import/named
import { submitForm } from '../src/modules/dom.js';

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
    const ul = document.querySelector('.list-score');
    const e = {
      preventDefault: () => {},
      target: {
        name: { value: 'wassim' },
        score: { value: '120' },
      },
    };
    submitForm(e);
    expect(ul.children.length).toBe(1);
    expect(ul.children[0].textContent).toBe('wassim: 120');
  });

  test('Add second list item', () => {
    const ul = document.querySelector('.list-score');
    const e = {
      preventDefault: () => {},
      target: {
        name: { value: 'James' },
        score: { value: '150' },
      },
    };
    submitForm(e);
    expect(ul.children.length).toBe(2);
    expect(ul.children[0].textContent).toBe('wassim: 120');
  });

  test('Add third list item', () => {
    const ul = document.querySelector('.list-score');
    const e = {
      preventDefault: () => {},
      target: {
        name: { value: 'David' },
        score: { value: '180' },
      },
    };
    submitForm(e);
    expect(ul.children.length).toBe(3);
    expect(ul.children[0].textContent).toBe('wassim: 120');
  });
});
