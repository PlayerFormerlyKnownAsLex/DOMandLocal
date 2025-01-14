 const clickCountDisplay = document.getElementById('click-count');
        const header = document.getElementById('header');
        const button = document.getElementById('click-button');
       
//1.Add a comment here explaining the let clickCount variable  
        let clickCount = localStorage.getItem('clickCount') ? parseInt(localStorage.getItem('clickCount')) : 0;

        // Update display on load
        clickCountDisplay.textContent = clickCount;
        updateUI();

//2.
/*
This is the script that determines what will happen if the button is clicked.
On line 21, the "clickCount" variable will increment.
On line 22, "setItem" updates the clickCount variable.
On line 23, 
On line 24, the updateUI() function is called.
*/
        button.addEventListener('click', () => {
            clickCount++;
            localStorage.setItem('clickCount', clickCount);
            clickCountDisplay.textContent = clickCount;
            updateUI();
        });

//3. 
/*
When function "updateUI()" is called, the following happens:
First, it randomly calls two different String values from an array out of five total values for each array.
Secondly, it updates the color and text present on the website based on what values from the arrays were picked.
*/
        function updateUI() {
            const colors = ['#FF5733', '#33FF57', '#3357FF', '#F5A623', '#E91E63'];
            const texts = [
                'Keep going!',
                'Great job!',
                'You are amazing!',
                'Fantastic!',
                'Click click hooray!'
            ];

            const randomIndex = Math.floor(Math.random() * colors.length);
            document.body.style.backgroundColor = colors[randomIndex];
            header.textContent = texts[randomIndex];
        }
