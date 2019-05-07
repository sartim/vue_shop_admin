<template>
    <div id="login-page" class="row">
        <div class="col s12 z-depth-4 card-panel">
          <form class="login-form" name="form"  @submit.prevent="handleSubmit">
              <div class="row">
                <div class="input-field col s12 center">
                  <p class="center login-form-text">LOGIN</p>
                </div>
              </div>
              <div class="row margin">
                <div class="input-field col s12">
                  <i class="material-icons prefix pt-5">person_outline</i>
                  <input id="email" type="text" v-model="email" name="email" class="form-control" :class="{ 'is-invalid': submitted && !email }" />
                  <div v-show="submitted && !email" class="invalid-feedback">Email is required</div>
                  <label for="email">Email</label>
                </div>
              </div>
              <div class="row margin">
                <div class="input-field col s12">
                  <i class="material-icons prefix pt-5">lock_outline</i>
                  <input id="password" type="password" v-model="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && !password }" />
                  <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
                  <label for="password">Password</label>
                </div>
              </div>
              <div class="row">
                <div class="col s12 m12 l12 ml-2 mt-3">
                  <input type="checkbox" id="remember-me" />
                  <!--<label htmlFor="remember-me">Remember me</label>-->
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                    <button class="btn col s12" :disabled="loggingIn">Login</button>
                    <img v-show="loggingIn" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                </div>
              </div>
              <div class="row">
                <div class="input-field col s6 m6 l6">
                  <!--<p class="margin medium-small"><Link to="/register">Register</Link></p>-->
                </div>
                <div class="input-field col s6 m6 l6">
                  <p class="margin right-align medium-small"><a href="#">Forgot password ?</a></p>
                </div>
              </div>
          </form>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            email: '',
            password: '',
            submitted: false
        }
    },
    computed: {
        loggingIn () {
            return this.$store.state.authentication.status.loggingIn;
        }
    },
    beforeCreate() {
        document.body.style.height = "100%";
        document.body.style.display = "table-cell";
        document.body.style.backgroundColor = "#0098e1";
        document.body.style.verticalAlign = "middle";
        document.documentElement.style.display = "table";
        document.documentElement.style.margin = "auto";
    },
    created () {
        // reset login status
        this.$store.dispatch('authentication/logout');
    },
    methods: {
        handleSubmit (e) {
            this.submitted = true;
            const { email, password } = this;
            const { dispatch } = this.$store;
            if (email && password) {
                dispatch('authentication/login', { email, password });
            }
        }
    }
};
</script>