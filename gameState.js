function gameStateFactory() {
    let state = {
        gameOver: false,
        score: 0,
        wizard: {
            x: 100,
            y: 200,
            width: 82,
            height: 100,
            speed: 6,
            gravity: 2
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
            attackSpeed: 400,
        }
    };

    return function () {
        return state;
    }
}