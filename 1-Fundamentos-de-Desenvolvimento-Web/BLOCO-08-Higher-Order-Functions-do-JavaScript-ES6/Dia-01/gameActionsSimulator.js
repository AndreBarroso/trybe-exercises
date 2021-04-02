const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const dragonAtack = () => {
      const minimun = 15;
      const maximun = dragon.strength;
      return Math.floor(Math.random()*(maximun - minimun) + minimun);
  };

  const warriorAtack  = () => {
    const minimun = warrior.strength;
    const maximun = warrior.weaponDmg*warrior.strength;
    return Math.floor(Math.random()*(maximun - minimun) + minimun);
  };

  const mageAttack = () => {
    const mageMana = mage.mana;
    const minDmg = mage.intelligence;
    const maxDmg = minDmg * 2;
    const turnStats = {
      manaSpent: 0,
      damageDealt: 'Not enough mana...',
    };
  
    if (mageMana > 15) {
      const mageDamage = Math.floor((Math.random() * (maxDmg - minDmg)) + minDmg);
      turnStats.manaSpent = 15;
      turnStats.damageDealt = mageDamage;
      return turnStats;
    }
      return turnStats;
  };


const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: (warriorATK) => {
    const currentlyDemangeCaused = warriorATK();
    dragon.healthPoints -= currentlyDemangeCaused;
    warrior.damage = currentlyDemangeCaused;
  },
  mageTurn: (mageATK) => {
    const currentlyDemangeCaused = mageATK();
    dragon.healthPoints -= currentlyDemangeCaused;
    mage.damage = currentlyDemangeCaused;
  },
  dragonTurn: (dragonATK) => {
    const currentlyDemangeCaused = dragonATK();
    mage.healthPoints -= currentlyDemangeCaused;
    warrior.healthPoints -= currentlyDemangeCaused;
    dragon.damage = currentlyDemangeCaused;
  },
  turn: function () {
    this.warriorTurn(warriorAtack);
    this.mageTurn(mageAttack);
    this.dragonTurn(dragonAtack);
    const battleMembers = {dragon, mage, warrior};
    return battleMembers;
  }
};


console.log(gameActions.turn());
