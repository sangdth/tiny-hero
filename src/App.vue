<template>
  <div id="app">
    <router-view></router-view>
    <div class="container">
      <hr>
      <h3 class="is-size-3">Instruction</h3>
      <ul>
        <li>- Press Start game.</li>
        <li>- Use 'Attack' button to fight.</li>
        <li>- Around 30%HP, you will have Special mode.</li>
        <li>- Heal feature is work in progress.</li>
        <li>- Press Give up button to restart the game.</li>
      </ul>
      <br>
      <hr>
      <h3 class="is-size-3">Contact</h3>
      <p>Github: <a href="https://github.com/sangdth/tiny-hero">https://github.com/sangdth/tiny-hero</a></p>
      <p>Twitter: <a href="https://twitter.com/SangDth">https://twitter.com/SangDth</a></p>
      <br>
      <hr>
      <h3 class="is-size-3">Credit</h3>
      <p>Use 100% CSS framework from <a href="http://bulma.io/love/">Bulma.io</a></p>
      <p>I'm learning VueJS, so of course it is built on <a href="https://vuejs.org/"></a>VueJS.</p>
      <p>Running on <a href="https://expressjs.com/">ExpressJS</a> tiny server, powered by <a href="https://heroku.com/">free Heroku.</a></p>
      <br>
      <hr>
      <h3 class="is-size-3">License</h3>
      <p>This software is licensed to you under <strong>BSD 3 + strong patents</strong> (Like React.)</p>
      <p>P/S: Just to protect me from "patent trolls."</p>
      <br>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>
