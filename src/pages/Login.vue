<template>
  <v-app
    id="login"
    class="primary">
    <v-content
      >
      <v-container fluid fill-height>
        <v-layout align-end justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-1 pa-3" style="border-top-left-radius: 10px;border-top-right-radius: 10px;">
              <v-card-text class="mb-0 pb-0">
                <div class="layout column align-center">
                  <h1 class="flex my-4 primary--text">CSL Task</h1>
                </div>
                <v-form>
                  <v-text-field
                    append-icon="alternate_email"
                    label="Email"
                    type="text"
                    v-model="loginForm.username"
                    :error="error"
                    :rules="[rules.username]"
                    outlined
                  />
                  <v-text-field
                    :type="hidePassword ? 'password' : 'text'"
                    :append-icon="hidePassword ? 'visibility_off' : 'visibility'"
                    label="Password"
                    id="password"
                    :rules="[rules.password]"
                    v-model="loginForm.password"
                    :error="error"
                    @click:append="hidePassword = !hidePassword"
                    outlined
                  />
                </v-form>
                  <div style="color: red; margin-top: 10px;" v-if="loginResponse['message']">* {{loginResponse['message']}}</div>
              </v-card-text>
              <v-card-actions>
                
                <v-btn block color="primary" @click="login" :loading="loading">
                  Login
                </v-btn>
              </v-card-actions>
              <div class="text-end">
                <router-link :to="{ name: 'register' }">
                  Register an account
                </router-link>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-snackbar v-model="showResult" :timeout="2000" top>{{ result }}</v-snackbar>
    </v-content>
  </v-app>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      hidePassword: true,
      error: false,
      showResult: false,
      result: "",
      rules: {
        username:  value => !!value || "Required",
        password:  value => !!value || "Required"
      }
    };
  },
  computed: {
    ...mapGetters({
      profile: 'user/profile',
      loading: 'user/lding',
      loginResponse: 'user/loginResponse'
    })
  },
  mounted() {
  },
  methods: {
    login() {
      if(this.loginForm['username'] && this.loginForm['password']) {
        this.doLogin(this.loginForm);
      } else {
        this.setResponseLogin({ message: 'Invalid user and password' });
      }
    },
    ...mapActions('user', [
      'doLogin',
      'setLoading',
      'setResponseLogin'
    ])
  }
};
</script>

<style scoped lang="css">
.ls-lang{
  position: absolute;
  top: 20px;
  right: 20px;
}
#login {
  height: 50%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  z-index: 0;
}
</style>
