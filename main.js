const windows = document.querySelector('.window');
const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const pushButton = button.textContent;
        //Clear the window.
        if (button.id === 'clear' || windows.textContent === 'Error!') {
            windows.textContent = '0';
            return;
        };
        //Delete one number in the window.
        if (button.id === 'delete') {
            if (windows.textContent.length === 1){
                windows.textContent = '0';
            } else {
                windows.textContent = windows.textContent.slice(0, -1);
            };
            return;
        };
        //Button equal.
        if (button.id ==='equal') {
            try {
                windows.textContent = eval(windows.textContent);
            } catch {
                windows.textContent = 'Error!'
            };
            return;
        };


        
        //Initial cero.
        if (windows.textContent === '0') {
            windows.textContent = pushButton;
        } else {
            windows.textContent += pushButton;
        };



    });
});