function gameFactory() {
    let getState = gameStateFactory();

    let { wizard, bugStats, fireBallStats, lifeStats } = getState();

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
        }
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
