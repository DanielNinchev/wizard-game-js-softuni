function gameFactory() {
    let getState = gameStateFactory();

    let { wizard, bugStats, fireBallStats, lifeStats, firePowerStats, fireAmmoStats, fireSpeedStats, deathStats, dayStats, nightStats, speedBonusStats } = getState();

    let startScreen = document.querySelector('.start-screen');
    let scoreScreen = document.querySelector('.score-screen');
    let playScreen = document.querySelector('.play-screen');
    let wizardElement = createWizard(wizard.x, wizard.y);

    playScreen.appendChild(wizardElement);

    let factory = {
        startScreen,
        playScreen,
        scoreScreen,
        wizardElement,
        createBug: () => {
            let bugElement = document.createElement('div');

            bugElement.classList.add('bug');
            bugElement.style.width = bugStats.width + 'px';
            bugElement.style.height = bugStats.height + 'px';

            bugElement.style.left = playScreen.offsetWidth - bugStats.width + 'px';
            bugElement.style.top = (playScreen.offsetHeight - bugStats.height) * Math.random() + 'px';

            playScreen.appendChild(bugElement);
        },
        createFireBall: () => {
            let fireBallElement = document.createElement('div');

            fireBallElement.classList.add('fireBall');

            fireBallElement.style.width = fireBallStats.width + 'px';
            fireBallElement.style.height = fireBallStats.height + 'px';

            fireBallElement.style.left = wizardElement.style.left;
            fireBallElement.style.top = wizardElement.style.top;

            playScreen.appendChild(fireBallElement);
        },
        createLifeBonus: () => {
            let lifeBonusElement = document.createElement('div');

            lifeBonusElement.classList.add('life');
            lifeBonusElement.style.width = lifeStats.width + 'px';
            lifeBonusElement.style.height = lifeStats.height + 'px';
            lifeBonusElement.style.left = playScreen.offsetWidth - lifeStats.width + 'px';
            lifeBonusElement.style.top = (playScreen.offsetHeight - lifeStats.height) * Math.random() + 'px';

            playScreen.appendChild(lifeBonusElement);
        },
        createSpeedBonus: () => {
            let speedBonusElement = document.createElement('div');

            speedBonusElement.classList.add('speedBonus');
            speedBonusElement.style.width = speedBonusStats.width + 'px';
            speedBonusElement.style.height = speedBonusStats.height + 'px';
            speedBonusElement.style.left = playScreen.offsetWidth - speedBonusStats.width + 'px';
            speedBonusElement.style.top = (playScreen.offsetHeight - speedBonusStats.height) * Math.random() + 'px';

            playScreen.appendChild(speedBonusElement);
        },
        createFirePowerBonus: () => {
            let firePowerBonus = document.createElement('div');

            firePowerBonus.classList.add('firePower');
            firePowerBonus.style.width = firePowerStats.width + 'px';
            firePowerBonus.style.height = firePowerStats.height + 'px';
            firePowerBonus.style.left = playScreen.offsetWidth - firePowerStats.width + 'px';
            firePowerBonus.style.top = (playScreen.offsetHeight - firePowerStats.height) * Math.random() + 'px';

            playScreen.appendChild(firePowerBonus);
        },
        createFireAmmoBonus: () => {
            let fireAmmoBonus = document.createElement('div');

            fireAmmoBonus.classList.add('fireAmmo');
            fireAmmoBonus.style.width = fireAmmoStats.width + 'px';
            fireAmmoBonus.style.height = fireAmmoStats.height + 'px';
            fireAmmoBonus.style.left = playScreen.offsetWidth - fireAmmoStats.width + 'px';
            fireAmmoBonus.style.top = (playScreen.offsetHeight - fireAmmoStats.height) * Math.random() + 'px';

            playScreen.appendChild(fireAmmoBonus);
        },
        createFireSpeedBonus: () => {
            let fireSpeedBonus = document.createElement('div');

            fireSpeedBonus.classList.add('fireSpeed');
            fireSpeedBonus.style.width = fireSpeedStats.width + 'px';
            fireSpeedBonus.style.height = fireSpeedStats.height + 'px';
            fireSpeedBonus.style.left = playScreen.offsetWidth - fireSpeedStats.width + 'px';
            fireSpeedBonus.style.top = (playScreen.offsetHeight - fireSpeedStats.height) * Math.random() + 'px';

            playScreen.appendChild(fireSpeedBonus);
        },
        createDayBonus: () => {
            let dayElement = document.createElement('div');

            dayElement.classList.add('day');
            dayElement.style.width = dayStats.width + 'px';
            dayElement.style.height = dayStats.height + 'px';
            dayElement.style.left = playScreen.offsetWidth - dayStats.width + 'px';
            dayElement.style.top = (playScreen.offsetHeight - dayStats.height) * Math.random() + 'px';

            playScreen.appendChild(dayElement);
        },
        createNightBonus: () => {
            let nightElement = document.createElement('div');

            nightElement.classList.add('night');
            nightElement.style.width = nightStats.width + 'px';
            nightElement.style.height = nightStats.height + 'px';
            nightElement.style.left = playScreen.offsetWidth - nightStats.width + 'px';
            nightElement.style.top = (playScreen.offsetHeight - nightStats.height) * Math.random() + 'px';

            playScreen.appendChild(nightElement);
        },
        createDeathElement: () => {
            let deathElement = document.createElement('div');

            deathElement.classList.add('death');
            deathElement.style.width = deathStats.width + 'px';
            deathElement.style.height = deathStats.height + 'px';
            deathElement.style.left = playScreen.offsetWidth - deathStats.width + 'px';
            deathElement.style.top = (playScreen.offsetHeight - deathStats.height) * Math.random() + 'px';

            playScreen.appendChild(deathElement);
        },
    };

    return factory;
}

function createWizard(posX, posY) {
    let wizardElement = document.createElement(`div`);
    wizardElement.classList.add(`wizard`);
    wizardElement.style.top = posY + 'px';
    wizardElement.style.left = posX + 'px';

    return wizardElement;
}
