new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
  },
  methods: {
    startGame: function () {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack: function () {
      var max = 10;
      var min = 3;
      var damage = Math.max(Math.floor(Math.random() * max) + 1, min);
      this.monsterHealth -= damage;

      if (this.monsterHealth <= 0) {
        alert('You won!')
        this.gameIsRunning = false;
        return;
      }

      max = 12;
      min = 5
      damage = Math.max(Math.floor(Math.random() * max) + 1, min);
      this.playerHealth -= damage;

      if (this.playerHealth <= 0) {
        alert('You lost!')
        this.gameIsRunning = false;
      }
    },
    specialAttack: function () {

    },
    heal: function () {

    },
    giveUp: function () {

    }
  }
})
