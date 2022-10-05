<template>
  <div>
    <v-navigation-drawer v-model="toggle" fixed app v-bind:width="250">
      <v-toolbar dark style="background-color: #7CCCF7" class="toolbar">
        <router-link :to="{ name: 'profile' }">
          <v-icon>person</v-icon>
        </router-link>
        <router-link :to="{ name: 'profile' }" class="text">CSL Task</router-link>
      </v-toolbar>
      <v-card>
        <v-card-text class="pt-12 pb-5">
          <v-avatar size="42px" color="white">
            <v-icon large>person</v-icon>
          </v-avatar>
          <span class="pl-2">User</span>
        </v-card-text>
      </v-card>
      <v-list dense>
        <v-list-item
          @click="changeRoute('profile')"
        >
          <v-list-item-content>
            <v-list-item-title>
              <h3>
                <v-icon>person</v-icon> 
                <span class="pl-4">Profile</span>
              </h3>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          @click="changeRoute('user')"
        >
          <v-list-item-content>
            <v-list-item-title>
              <h3>
                <v-icon>group</v-icon> 
                <span class="pl-4">Users</span>
              </h3>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          @click="logout()"
        >
          <v-list-item-content>
            <v-list-item-title>
              <h3>
                <v-icon >power_settings_new</v-icon> 
                <span class="pl-4">Logout</span>
              </h3>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
  </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      dialog: false,
      toggle: false
    };
  },
  computed: {
      ...mapGetters({
        profile: 'auth/profile'
      })
  },
  mounted() {
    if(window.innerWidth>1262){
      this.toggle = true;
    }
    this.$root.$on('toggleNavigationBar',() => {
      this.toggle = !this.toggle;
    });
  },
  methods: {
    changeRoute(routeName) {
      
        this.$router.push({ name: routeName });
    },
    logout() {
      
      window.localStorage.clear();
      this.$router.push({ name: 'login' });
    }
  }
};
</script>
