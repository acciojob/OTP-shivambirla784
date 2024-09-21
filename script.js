const codes = document.querySelectorAll('.code');

codes.forEach((code, index) => {
    code.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {
            codes[index].value = ''; // Clear the current input
            
            // Move to the next input and apply focus
            setTimeout(() => {
                codes[index].classList.remove('focused'); // Remove focus class from the current input
                if (codes[index + 1]) {
                    codes[index + 1].focus(); // Focus the next input
                    codes[index + 1].classList.add('focused'); // Add focus class to the next input
                }
            }, 10); 
        } 
        else if (e.key === 'Backspace') {
            codes[index].value = ''; // Clear the current input
            
            // Move to the previous input and apply focus
            setTimeout(() => {
                codes[index].classList.remove('focused'); // Remove focus class from the current input
                if (codes[index - 1]) {
                    codes[index - 1].focus(); // Focus the previous input
                    codes[index - 1].classList.add('focused'); // Add focus class to the previous input
                }
            }, 10); 
        }
    });

    // Ensure focus class is applied when an input gains focus
    code.addEventListener('focus', () => {
        code.classList.add('focused');
    });

    // Ensure focus class is removed when an input loses focus
    code.addEventListener('blur', () => {
        code.classList.remove('focused');
    });
});
