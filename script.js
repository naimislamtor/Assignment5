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
let buttons = document.querySelectorAll('.flex1');

for (let button of buttons) {  
    button.addEventListener('click', function() {
        copyCount ++;
        document.getElementById('copy-count').innerText = copyCount;
        const targetId = button.getAttribute('data-target');
        const textToCopy = document.getElementById(targetId).innerText;
        navigator.clipboard.writeText(textToCopy).then(function() {
            alert(`The number has been copied: ${textToCopy}`);
        }).catch(function(error) {
            alert('An error occurred while copying: ' + error);
        });
    });
}



// calling button 
let coinCount = parseInt(document.getElementById('coin-count').innerText);  
let callButtons = document.querySelectorAll('.btn-call');

for (let button of callButtons) {
    button.addEventListener('click', function() {
        const serviceName = button.closest('.card').querySelector('h4') ? button.closest('.card').querySelector('h4').innerText : "Unknown Service"; 
        const serviceNumber = button.closest('.card').querySelector('h2').innerText;

        if (coinCount >= 20) {
            coinCount -= 20;

            document.getElementById('coin-count').innerText = coinCount;

            const localTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' , second: '2-digit', hour12: false });

            const transactionContainer = document.querySelector('.transaction-container');
            const transaction = document.createElement('div');
            transaction.classList.add('transaction', 'flex', 'justify-between', 'mt-3', 'w-full', 'items-center', 'p-4', 'bg-[#FAFAFA]', 'rounded-lg');

            transaction.innerHTML = `
                <div class="name-number">
                    <h2 class="font-semibold text-[18px] text-[#111111]">${serviceName}</h2>
                    <p class="text-[18px] text-[#5C5C5C]">${serviceNumber}</p>
                </div>
                <p class="text-[18px] text-[#111111]">${localTime}</p>
            `;

            transactionContainer.appendChild(transaction); 
            alert(`📞 Calling ${serviceName} ${serviceNumber}...`);
        } else {
            alert('❌ Insufficient coins! You need 20 coins to make a call.');
        }
    });
}

document.getElementById('clear-history').addEventListener('click', function() {
    const transactionContainer = document.querySelector('.transaction-container');
    transactionContainer.innerHTML = ''; 
});
