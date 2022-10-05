<template>
    <div>
        <h2>User profile</h2>
        <v-row justify="center">
            <v-col cols="12" sm="8" md="6">
                <v-card
                class="mx-auto my-12"
            >
                <template slot="progress">
                <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                ></v-progress-linear>
                </template>
            
                <v-img
                height="250"
                :src="profile.avatar"
                ></v-img>
            
                <v-card-title>{{profile.first_name}} {{profile.last_name}}</v-card-title>
            
                <v-card-text>
            
                <div class="my-4 text-subtitle-1">
                    Email: {{profile.email}}
                </div>
            
                <div>Detail: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </v-card-text>
            
                <v-divider class="mx-4"></v-divider>
            
                <v-card-title>Tonight's availability</v-card-title>
            
                <v-card-text>
                
                </v-card-text>
            </v-card>
            </v-col>
        </v-row>
    </div>

</template>

  <script>
  
  import { mapGetters, mapActions } from 'vuex'
  
  export default {
    data() {
      return {
      };
    },
    computed: {
      ...mapGetters({
        profile: 'user/profile'
      })
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
  