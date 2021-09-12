function gameStateFactory() {
    let state = {
        gameOver: false,
        lives: 1,
        score: 0,
        ammo: 10,
        damage: 10,
        wizard: {
            x: 100,
            y: 200,
            width: 82,
            height: 100,
            speed: 6,
            gravity: 2,
        },
        keys: {},
        bugStats: {
            nextBugCreation: 0,
            maxCreationInterval: 1500,
            speed: 3,
            width: 50,
            height: 50,
            score: 500
        },
        fireBallStats: {
            height: 40,
            width: 40,
            speed: 10,
            nextFireBallCreation: 0,
            attackInterval: 1000,
        },
        lifeStats: {
            height: 50,
            width: 50,
            speed: 8,
            nextCreation: 0,
            maxInterval: 30000,
            minInterval: 20000,
        },
        fireAmmoStats:{
            height: 50,
            width: 50,
            speed: 6,
            nextCreation: 0,
            maxInterval: 20000,
            minInterval: 10000,
        },
        firePowerStats:{
            height: 50,
            width: 50,
            speed: 6,
            nextCreation: 0,
            maxInterval: 50000,
            minInterval: 20000,
        },
        fireSpeedStats:{
            height: 50,
            width: 50,
            speed: 8,
            nextCreation: 0,
            maxInterval: 60000,
            minInterval: 30000,
        },
        deathStats:{
            height: 50,
            width: 50,
            speed: 12,
            nextCreation: 0,
            maxInterval: 50000,
            minInterval: 20000,
        },
        nightStats:{
            height: 50,
            width: 50,
            speed: 4,
            nextCreation: 0,
            maxInterval: 10000,
            minInterval: 5000,
        },
        dayStats:{
            height: 50,
            width: 50,
            speed: 4,
            nextCreation: 0,
            maxInterval: 10000,
            minInterval: 5000,
        },
        speedBonusStats:{
            height: 50,
            width: 50,
            speed: 7,
            nextCreation: 0,
            maxInterval: 60000,
            minInterval: 30000,
        },
    };

    return function () {
        return state;
    }
}