<template>
    <div>
        <v-card>
            <v-card-title>Users</v-card-title>
            <v-card-text>
                <v-data-table
                    :headers="headers"
                    :items="users"
                    :items-per-page="5"
                    class="elevation-1"
                >
                    <template v-slot:item.avatar="{ item }">
                    <img :src="item.avatar" alt="" srcset="" max-width="30">
                    </template>
                    <template v-slot:item.option="{ item }">
                        <v-btn icon color="error" @click="deleteUser(item)">
                        <v-icon>close</v-icon>
                    </v-btn>
                    <v-btn icon color="success" @click="editUser(item)">
                        <v-icon>edit</v-icon>
                    </v-btn>
                    </template>
                </v-data-table>
            </v-card-text>
        </v-card>
        <v-dialog v-model="checkEdit" max-width="400">
        <v-card>
            <v-card-title class="headline lighten-2 card-title" primary-title>
            <strong>Edit</strong>
            <v-spacer></v-spacer>
            <v-icon class="dialog-close-icon" @click="checkEdit = false">close</v-icon>
            </v-card-title>
            <v-card-text>
            <v-form v-model="isFormValid" ref="formData">
                <div class="my-content">
                <v-row>
                    <v-col cols="12" >
                    <v-text-field
                        v-model="userForm.first_name"
                        label="First name"
                        type="text"
                        required
                        dense
                        outlined
                    ></v-text-field>
                    </v-col>
                    <v-col cols="12" >
                    <v-text-field
                        v-model="userForm.last_name"
                        label="Last Name"
                        type="text"
                        required
                        dense
                        outlined
                    ></v-text-field>
                    </v-col>
                    <v-col cols="12" >
                    <v-text-field
                        v-model="userForm.email_name"
                        label="Email"
                        type="text"
                        required
                        dense
                        outlined
                    ></v-text-field>
                    </v-col>
                </v-row>
                </div>

                <v-row>
                        <v-col cols="6">
                            <v-btn
                            color="error"
                            block
                            @click="clear()"
                            >Cancel</v-btn>
                        </v-col>
                        <v-col cols="6">
                            <v-btn
                            color="primary"
                            block
                            @click="editU()"
                            >Edit</v-btn>
                        </v-col>
                        </v-row>
            </v-form>
            </v-card-text>
        </v-card>
        </v-dialog>
    </div>
    </template>
    
      <script>
      
      import { mapGetters, mapActions } from 'vuex'
      
      export default {
        data() {
          return {
            userForm: {
                id: 0,
                first_name:'',
                last_name:'',
                email: '',
                avatar: ''
            },
            checkEdit: false,
            headers: [
                { text: 'Photo', value: 'avatar' },
                { text: 'First Name', value: 'first_name' },
                { text: 'Last Name', value: 'last_name' },
                { text: 'Email', value: 'email' },
                { text: 'Option', value: 'option', align: 'end' }
            ]
          };
        },
        computed: {
          ...mapGetters({
            users: 'user/users',
            loading: 'user/lding',
            loginResponse: 'user/loginResponse'
          })
        },
        created() {
            this.getUser();
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
                });
            } else {
              this.setResponseLogin({ message: 'Invalid user and password' });
            }
          },
          ...mapActions('user', [
            'doUpdateUser',
            'doDeleteUser',
            'getUser',
            'setLoading',
            'setResponseLogin'
          ]),
          clear() {
            this.userForm = {
                id: 0,
                first_name:'',
                last_name:'',
                email: '',
                avatar: ''
            }
            this.checkEdit = false;
          },
          editU() {
            this.doUpdateUser(userForm).then((res) => {
                this.setLoading( false);
                var response = res['data'];
                this.setResponseLogin(response);
                this.getUser();
            })
            .catch(() => {
                this.setLoading( false);
                this.setResponseLogin({ message: 'Register failed' });
            });
          },
          editUser(item){
            this.userForm = {
                id:  item['id'],
                first_name: item['first_name'],
                last_name: item['last_name'],
                email: item['email'],
                avatar: item['avatar']
            };
            this.checkEdit = true;
          },
          deleteUser(item) {
            this.doDeleteUser(item).then((res) => {
                this.setLoading( false);
                var response = res['data'];
                this.setResponseLogin(response);
                this.getUser();
            })
            .catch(() => {
                this.setLoading( false);
                this.setResponseLogin({ message: 'Register failed' });
            });
          }
        }
      };
      </script>
      