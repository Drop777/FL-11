function Fighter (properties) {
    let name = properties.name;
    let damage = properties.damage;
    let hp = properties.hp;
    let agility = properties.agility;
    let wins = 0;
    let losses = 0;
    const MAX_HEALTH = 100;
    this.getName = function () {
        return name;
    }
    this.getDamage = function() {
        return damage;
    }
    this.getAgility = function() {
        return agility;
    }
    this.getHealth = function() {
        return hp;
    }
    this.reduceHealth = function(hpAmount) {
        hp -= hpAmount;
    }
    this.addHealth = function(hpAmount) {
        hp += hpAmount;
    }
    this.setHealth = function(hpAmount) {
        hp = hpAmount;
    }
    this.getWins = function() {
        return wins;
    }
    this.getLosses = function() {
        return losses;
    }
    this.addWin = function() {
        wins += 1;
    }
    this.addLoss = function() {
        losses += 1;
    }
    this.attack = function (defFighter) {
        let chance = Math.round(Math.random() * MAX_HEALTH);
        let successRate = MAX_HEALTH - defFighter.getAgility();
        if ( chance <= successRate && defFighter.getHealth() > 0) {
            defFighter.reduceHealth(this.getDamage()); 
            console.log(`${this.getName()} make ${this.getDamage()} to ${defFighter.getName()} `)
        } else {
            console.log(`${this.getName()} attack missed`);
        }
    }
    this.logCombatHistory = function() {
        console.log(`Name: ${this.getName()}, Wins: ${this.getWins()}, Losses: ${this.getLosses()} `)
    }
    this.heal = function(hpHeal) {
        if(hpHeal + this.getHealth() > MAX_HEALTH){
            this.setHealth(MAX_HEALTH);
        } else {
            this.addHealth(hpHeal);
        }
    }
    this.dealDamage = function (hpDamage) {
        if(hpDamage - this.getHealth() < 0) {
            this.setHealth(0);
        } else {
            this.reduceHealth(hpDamage);
        }
    }

}

function battle(fighter1, fighter2) {
    const bool = true;
    if(fighter1.getHealth() <= 0) {
        console.log(`${fighter1.getName()} is dead and can't fight, press F`);
    } else if (fighter2.getHealth() <= 0) {
        console.log(`${fighter2.getName()} is dead and can't fight, press F`)
    } else {
        do {
            fighter1.attack(fighter2);
            console.log(fighter2.getHealth());
            if (fighter2.getHealth() <= 0) {
                break;
            }
            fighter2.attack(fighter1);
            console.log(fighter1.getHealth());
            if (fighter1.getHealth() <= 0) {
                break;
            }
        } while (bool)
    }
    if(fighter1.getHealth() < 0 ) {
        fighter1.addLoss();
        fighter2.addWin();
    } else {
        fighter1.addWin();
        fighter2.addLoss();
    }
}


const fighter1 = new Fighter({ name: 'John', damage: 20, hp: 100, agility: 20 })
const fighter2 = new Fighter({ name: 'Loci', damage: 21, hp: 100, agility: 20 })

battle(fighter1, fighter2)

fighter1.logCombatHistory();
// fighter2.heal(60);
battle(fighter1, fighter2)

battle(fighter1, fighter2)

