document.addEventListener('DOMContentLoaded', function() {
    const startMiningButton = document.getElementById('start-mining');
    const checkResourcesButton = document.getElementById('check-resources');
    const waterCountElement = document.getElementById('water-count');
    const levelCountElement = document.getElementById('level-count');

    let waterCount = 0;
    let levelCount = 1;

    // Initialize Telegram Web App
    const tg = window.Telegram.WebApp;
    tg.expand();

    startMiningButton.addEventListener('click', function() {
        waterCount += 10; // Increment water count
        updateResources();
        // Send data to Telegram Bot
        sendToTelegramBot('start_mining', { water: waterCount, level: levelCount });
    });

    checkResourcesButton.addEventListener('click', function() {
        alert(`Water: ${waterCount}, Level: ${levelCount}`);
        // Send data to Telegram Bot
        sendToTelegramBot('check_resources', { water: waterCount, level: levelCount });
    });

    function updateResources() {
        waterCountElement.textContent = waterCount;
        levelCountElement.textContent = levelCount;
    }

    function sendToTelegramBot(action, data) {
        fetch(`https://api.telegram.org/bot6744290975:AAH8uVUlpxaNy2hEsIrlpZ7ntixDerfeQ4Q/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: tg.initDataUnsafe.user.id,
                text: `Action: ${action}, Data: ${JSON.stringify(data)}`
            })
        }).then(response => response.json())
          .then(result => {
              console.log('Message sent to bot:', result);
          })
          .catch(error => {
              console.error('Error sending message to bot:', error);
          });
    }
});
