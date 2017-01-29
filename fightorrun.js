//Pre-Alpha is the version before the Alpha version, Alpha is the version before the Beta version, Beta is the version before the Gamma version, Release Candidate is the version just before the release. ... Alpha and beta testing are two of the stages that a software must undergo testing.
//Var Setup
var health = 100;
var dmg = 5;
var birdhp = 10;
var en = 1;
var followers = 0;
var level = 1;
var weapon = 'none';
var helmet = 'none';
var geardmgbonus = 0;
var gearhpbonus = 0;
var townname = 'none';
var stopgame = function () {
    alert('The game will now close!');
};
//Save and Load Functions
function save() {
    localStorage.setItem('en', JSON.stringify(en));
    localStorage.setItem('level', JSON.stringify(level));
}
function load() {
    en = JSON.parse(localStorage.getItem('en'));
    level = JSON.parse(localStorage.getItem('level'));
}

//First Fight
    var en1 = function () {
        //Fight setup
        alert('You decide to find something to fight aganist...');
        alert('You spot a small bird');
        var en12 = prompt('What do you use? stone or stick?');
    if (en12 === 'stone') {
        alert('You accuired a stone!');
        alert('You dealt ' + dmg + ' DMG to the bird!');
        birdhp = birdhp - dmg;
        alert('The bird has ' + birdhp + 'HP left!');
        alert('You smash the bird with your stone again, killing it!');
    }
    if (en12 === 'stick') {
        alert('You accquired a stick!');
        alert('You dealt ' + dmg + ' DMG to the bird!');
        birdhp = birdhp - dmg;
        alert('The bird has ' + birdhp + 'HP left!');
        alert('You smash the bird with your stick again, killing it!');
    }
    alert('You walk away feeling so so very proud of yourself, but more is to come...');
    en = 2;
    start();
};

//Second Fight | 2 Branchs
var en2 = function () {
    var en2run = function () {
        alert('You escape and gain nothing but cuts...');
        en = 3;
        start();  
    };
    var w1dead = function () {
        alert('You killed the wolf!');
        en = 3;
        followers = 2;
        start();
    };
    var wolf1dmg = 10;
    var wolf1hp = 20;
    var en2q1 = prompt('Would you like to: view stats or battle?');
    if (en2q1 === 'view stats') {
        alert('You have:' + followers + ' Followers,' + health + ' Health, and ' + dmg + ' Damage');
        en2();
    }
    if (en2q1 === 'battle') {
        alert('You hear a howl in the distance.');
        var en2q2 = prompt('Do you search or run?');
        //If answer was search
        if (en2q2 === 'search') {
            
            //Setup
            alert('You decide to find the source of the sound.');
            alert('You spot a small Gray Wolf!');
            var en2sq1 = prompt('Do you check wolf stats or attack?');
            
            //If check stats of wolf
            if (en2sq1 === 'check wolf stats') {
                alert('Wolf has: ' + wolf1dmg + 'DMG and ' + wolf1hp + 'HP');
                alert('It will take you ' + wolf1hp / dmg + ' Hits to kill the wolf.');
                health = health - wolf1dmg;
                alert('The wolf attacks you! You have ' + health + 'HP left!');
                var en2q3 = prompt('Do you fight back? (yes or no)');
                if (en2q3 === 'yes') {
                    while (wolf1hp > 0) {
                        wolf1hp = wolf1hp - dmg;
                        alert('You attack the wolf! You did ' + dmg + 'DMG! The wolf has ' + wolf1hp + 'HP left!');
                        if (wolf1hp === 0) {
                            w1dead();
                        }
                    }
                }
                if (en2q3 === 'no') {
                    en2run();
                }
            }
            
            //If answer was attack | doesnt get stats ever
            if (en2sq1 === 'attack') {
                health = health - wolf1dmg;
                alert('The wolf attacked you! You have ' + health + 'HP left!');
                var en2aq1 = prompt('Do you fight back or run?');
                if (en2aq1 === 'run') {
                    en2run();
                }
                if (en2aq1 === 'fight back') {
                    while (wolf1hp > 0) {
                        wolf1hp = wolf1hp - dmg;
                        alert('You attack the wolf! You did ' + dmg + 'DMG! The wolf has ' + wolf1hp + 'HP left!');
                        if (wolf1hp === 0) {
                            w1dead();
                        }
                    }
                }
            }
        }
        
        //If answer to Q1 was run
        if (en2q2 === 'run') {
            alert('You sprint away!');
            alert('But, you feel like you\' being watched...');
            var en2run1 = prompt('Do you search for whats watching you or keep running? (answer with search or run)');
            if (en2run1 === 'search') {
                alert('A wolf pounces on you as you search!');
                var en2q5 = prompt('Do you attack or run from the wolf? (answer attack or run)');
                if (en2q5 === 'attack') {
                     while (wolf1hp > 0) {
                        wolf1hp = wolf1hp - dmg;
                        alert('You attack the wolf! You did ' + dmg + 'DMG! The wolf has ' + wolf1hp + 'HP left!');
                        if (wolf1hp === 0) {
                            w1dead();
                        }
                    }
                }
                if (en2q5 === 'run') {
                    alert('You escape just in time!');
                    en2run();
                }
            }
            if (en2run1 === 'run') {
                en2run();
            }
        }
    }
};

//Third Scene | Introduces Towns and Weapons/Gear

//Start of Game and Battle Assigner
function start() {
    if (level === 1) {
        var startt = prompt('Do you fight? (type yes)(or type save to save your game)(or type load to load your game)(or type close to close the game!)');
        if (startt === 'yes') {
            
            //Starts Battle 1
            if (en === 1) {
                en1();
            }
            
            //If already did Battle 1 will go to Battle 2
            if (en === 2) {
                followers = 1;
                alert('From your sucess in the first battle, you gained 1 Follower! You only need 99 More!');
                en2();
            }
            
            //If already did battle 2 will go to battle 3
            if (en === 3) {
                alert('You have ' + followers + ' Followers!');
                alert('You are level 1! To reach level 2, complete this battle!');
            }
        }
        if (startt === 'save') {
            save();
            alert('Game successfully saved!');
            start();
        }
        if (startt === 'load') {
            load();
            alert('Game successfully loaded!');
            start();
        if (startt === 'close') {
            stopgame();
        }
        }
    }
}

//Intro
var intro = function () {
    alert('Fight or Run | A Game Thing');
    alert('To win gain 100 followers');
    var loadgame = prompt('Do you want to load a previous game? Yes or no? Or type close to close the game!');
    if (loadgame === 'yes') {
        load();
        start();
    }
    if (loadgame === 'close') {
        stopgame();
    }
    if (loadgame === 'no') {
        start();
    }
};
    intro();