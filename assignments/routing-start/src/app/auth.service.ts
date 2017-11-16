// this is a little faux service to immulate an actual authentication comp/module
export class AuthService {
  loggedIn = false;
  // track logged in state

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    })
    return promise;
  }
  // this method is simulating an api call to a service to complete the authentication of a user

  login() {
    this.loggedIn = true;
  }
  // login method

  logout() {
    this.loggedIn = false;
  }
  // logout method, faking the behaviour of the auth state of a user
}
