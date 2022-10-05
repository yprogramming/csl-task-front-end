<template>
  <div>
    <v-app>
      <toolbar/>
      <navigation/>
      <v-content>
        <router-view />
      </v-content>
    </v-app>
  </div>
</template>

<script>

import { mapActions } from 'vuex'
  
export default {
  name: "Home",
  components: {},
  data() {
    return {
      checkLogin: false
    };
  },
  created() {
      this.getProfile();
  },
  methods: {
    ...mapActions('user', [
      'getProfile'
    ])
  }
};
</script>
<style scoped>
</style>
