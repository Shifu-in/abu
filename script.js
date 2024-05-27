document.addEventListener('DOMContentLoaded', function() {
    const startMiningButton = document.getElementById('start-mining');
    const checkResourcesButton = document.getElementById('check-resources');
    const waterCountElement = document.getElementById('water-count');
    const levelCountElement = document.getElementById('level-count');

    let waterCount = 0;
    let levelCount = 1;

    startMiningButton.addEventListener('click', function() {
        waterCount += 10; // Increment water count
        updateResources();
    });

    checkResourcesButton.addEventListener('click', function() {
        alert(`Water: ${waterCount}, Level: ${levelCount}`);
    });

    function updateResources() {
        waterCountElement.textContent = waterCount;
        levelCountElement.textContent = levelCount;
    }
});
