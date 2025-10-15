const textAreaEl = document.querySelector('#text-input');
const charCount = document.querySelector('#char-count');

textAreaEl.addEventListener('input', (e) => {
  let text = e.target.value;

  // If character count is greater than or equal to 50, trim the extra part
  if (text.length >= 50) {
    text = text.slice(0, 50); // trim extra input
    e.target.value = text;    // update textarea value
  }

  // Update count text
  charCount.textContent = `Character Count: ${text.length}/50`;

  // Make the text red if length reaches 50
  charCount.style.color = text.length === 50 ? 'red' : 'black';
});
