//your JS code here. If required.
const codes = document.querySelectorAll('.code');

codes.forEach((code, index) => {
    code.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {
            codes[index].value = '';  // Clear the current input
            setTimeout(() => codes[index + 1]?.focus(), 10);  // Focus the next input after typing
        } else if (e.key === 'Backspace') {
            setTimeout(() => codes[index - 1]?.focus(), 10);  // Focus the previous input on backspace
        }
    });
});
