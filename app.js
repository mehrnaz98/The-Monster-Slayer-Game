const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  methods: {
    attackMonster() {
      const attackValue = Math.floor(Math.random() * (12 - 5)) + 5;
    },
  },
});

app.mount("#game");
