const codes = document.querySelectorAll('.code');

codes.forEach((code, index) => {
    code.addEventListener('keydown', (e) => {
        // Handle number inputs
        if (e.key >= 0 && e.key <= 9) {
            codes[index].value = '';  // Clear the current input
            setTimeout(() => codes[index + 1]?.focus(), 10);  // Focus the next input after typing
        } 
        // Handle backspace
        else if (e.key === 'Backspace') {
            codes[index].value = '';  // Clear the current input
            setTimeout(() => codes[index - 1]?.focus(), 10);  // Focus the previous input on backspace
        }
    });

    // Add focus event for Cypress testing
    code.addEventListener('focus', () => {
        code.classList.add('focused');
    });

    // Remove focus event when blurred
    code.addEventListener('blur', () => {
        code.classList.remove('focused');
    });
});
