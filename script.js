let heartCount = parseInt(document.getElementById('heart-count').innerText); 


let heartIcons = document.querySelectorAll('.fa-heart'); 

for (let icon of heartIcons) {
    icon.addEventListener('click', function() {
        heartCount++;  
        document.getElementById('heart-count').innerText = heartCount;  
        
    });
}


// copy button 
let copyCount = parseInt(document.getElementById('copy-count').innerText); 
let buttons = document.querySelectorAll('.flex-1');

for (let button of buttons) {  
    button.addEventListener('click', function() {
        copyCount ++;
        document.getElementById('copy-count').innerText = copyCount;
        const targetId = button.getAttribute('data-target');
        const textToCopy = document.getElementById(targetId).innerText;
        navigator.clipboard.writeText(textToCopy).then(function() {
            alert('The text has been copied to the clipboard!');
        }).catch(function(error) {
            alert('An error occurred while copying: ' + error);
        });
    });
}
