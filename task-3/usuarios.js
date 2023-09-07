'use strict';

const app = Vue.createApp({
  data() {
    return {
      users: []
    }
  },
  mounted() {
    this.loadUsers()
  },
  methods: {
    async loadUsers() {
      const retorno = await fetch('https://reqres.in/api/users?per_page=10');
      const dadosSite = await retorno.json();
      this.users = dadosSite.data;
    }
  }
}).mount('#usuarios');
