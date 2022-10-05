<template>
  <v-app
    id="login"
    class="primary">
    <v-content
      >
      <v-container fluid>
          <v-row justify="center">
            <v-col cols="12" sm="8" md="6">
              <v-card class="elevation-1 pa-3">
                <v-card-title>Register Account</v-card-title>
                  <v-card-text class="mb-0 pb-0">
                      
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
                              outlined
                              :rules="[rules.password]"
                              v-model="loginForm.password"
                              :error="error"
                              @click:append="hidePassword = !hidePassword"
                          />
                      </v-form>
                      <span>loginResponse</span>
                  </v-card-text>
                  <v-card-actions>
                      <v-row>
                          <v-col cols="6">
                              <v-btn block color="error">
                                  Cancel
                              </v-btn>
                          </v-col>
                          <v-col cols="6">
                              <v-btn block color="primary" @click="register" >
                                  Register
                              </v-btn>
                          </v-col>
                      </v-row>
                  </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
      </v-container>
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
      register() {
        if(this.loginForm['username'] && this.loginForm['password']) {
          this.setLoading( true);
          this.doRegister(this.loginForm).then((res) => {
              this.setLoading( false);
              var response = res['data'];
              console.log(response)
              this.setResponseLogin(response);
            })
            .catch(() => {
              this.setLoading( false);
              this.setResponseLogin({ message: 'Register failed' });
            });;
        } else {
          this.setResponseLogin({ message: 'Invalid user and password' });
        }
      },
      ...mapActions('user', [
        'doRegister',
        'setLoading',
        'setResponseLogin'
      ])
    }
  };
  </script>
  
  