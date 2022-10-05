<template>
  <div>
    <v-app-bar dark app style="background-color:#7CCCF7">
      <v-toolbar-title>
        <v-icon left @click="toggleNavigationBar()" style="margin-left: 3px; margin-bottom: 3px">reorder</v-icon>
        
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon large>
          <v-icon >user</v-icon>
      </v-btn>
      
    </v-app-bar>
    

  </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      checkDialog: false,
    };
  },
  computed: {
    ...mapGetters({
      profile: 'auth/profile'
    })
  },
  created() {
  },
  methods: {
    toggleNavigationBar() {
      this.$root.$emit("toggleNavigationBar");
    }
  }
};
</script>

