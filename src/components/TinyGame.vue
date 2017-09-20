<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">

          <div class="columns">
            <div class="column is-one-third">
              <figure class="image is-4by3">
                <img src="static/characters/goku.png">
              </figure></div>
            <div class="column">
              <h1 class="title">Goku</h1>
              <div class="tags has-addons">
                <span class="tag" :class="heroStatus">
                  <span class="icon">
                    <i class="fa fa-heart"></i>
                  </span>
                </span>
                <span class="tag is-dark">{{ heroHealth }}</span>
              </div>
            </div>
          </div>

          <progress class="progress is-small" :class="heroStatus" :value="heroHealth" max="100">{{ heroHealth }}</progress>

          <p class="field" v-if="isInGame">
            <a class="button is-warning is-small" @click="normalAttack">
              <span class="icon">
                <i class="fa fa-hand-grab-o"></i>
              </span>
              <span>Attack</span>
            </a>
            <a class="button is-small" :class="isSpecial ? 'is-danger' : 'is-static'" @click="specialAttack">
              <span class="icon">
                <i class="fa fa-bolt"></i>
              </span>
              <span>Special Attack</span>
            </a>
            <a class="button is-warning is-small" @click="getHeal">
              <span class="icon">
                <i class="fa fa-heart-o"></i>
              </span>
              <span>Heal</span>
            </a>
            <a class="button is-warning is-small" @click="giveUp">
              <span class="icon">
                <i class="fa fa-flag-o"></i>
              </span>
              <span>Give Up</span>
            </a>
          </p>

        </div>

        <div class="column has-text-right">
          <div class="columns">
            <div class="column">
              <h1 class="title">Mabu</h1>
              <div class="tags has-addons is-pulled-right">
                <span class="tag is-dark">{{ enemyHealth }}</span>
                <span class="tag" :class="enemyStatus">
                  <span class="icon">
                    <i class="fa fa-heart"></i>
                  </span>
                </span>
              </div>
            </div>
            <div class="column is-one-third">
              <figure class="image is-4by3">
                <img src="static/characters/mabu.png">
              </figure>
            </div>
          </div>

          <progress class="progress is-small" :class="enemyStatus" :value="enemyHealth" max="100">{{ enemyHealth }}</progress>
        </div>
      </div>
    </div>
    <br>
    <div class="container has-text-centered" v-if="!isInGame">
      <a href="#"class="button is-success is-large" @click="startGame">Start New Game</a>
    </div>

    <div class="modal" :class="{'is-active' : showWinner}">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{{ finalResult }}</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <!-- Content ... -->
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="startGame">Play Again</button>
          <button class="button" @click="showWinner = false">Cancel</button>
        </footer>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'tinygame',
  data() {
    return {
      heroHealth: 100,
      enemyHealth: 100,
      isInGame: false,
      isSpecial: false,
      specialTurn: 3,
      showWinner: false,
      finalResult: '',
    };
  },

  computed: {
    heroStatus() {
      return {
        'is-success': this.heroHealth >= 80,
        'is-warning': this.heroHealth <= 79,
        'is-danger': this.heroHealth <= 30,
      };
    },

    enemyStatus() {
      return {
        'is-success': this.enemyHealth >= 80,
        'is-warning': this.enemyHealth <= 79,
        'is-danger': this.enemyHealth <= 30,
      };
    },
  },

  methods: {
    startGame() {
      this.isInGame = true;
      this.heroHealth = 100;
      this.enemyHealth = 100;
      this.isSpecial = false;
      this.specialTurn = 3;
      this.finalResult = '';
      this.showWinner = false;
    },

    normalAttack() {
      this.checkStatus();
      this.enemyHealth -= this.calculateDamage(2, 5);
      this.heroHealth -= this.calculateDamage(1, 6);
    },

    specialAttack() {
      this.checkStatus();
      this.specialTurn -= 1;
      if (this.specialTurn === 0) {
        this.isSpecial = false;
      }

      this.enemyHealth -= this.calculateDamage(5, 20);
    },

    getHeal() {

    },

    giveUp() {
      this.isInGame = false;
    },

    calculateDamage(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },

    checkStatus() {
      if (this.heroHealth < 40 && this.specialTurn === 3) {
        this.isSpecial = true;
      }

      if (this.enemyHealth <= 0) {
        this.showWinner = true;
        this.finalResult = 'You won! Play more?;';
        this.isInGame = false;
      }

      if (this.heroHealth <= 0) {
        this.showWinner = true;
        this.finalResult = 'You lost! Play more?;';
        this.isInGame = false;
      }
    },

  },
};
</script>
