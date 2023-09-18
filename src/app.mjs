class Users {
  constructor(name, members, img) {
    this.name = name;
    this.members = members;
    this.img = img;
    this.loggin = false;
  }
  isLogin() {
    this.loggin = true;
    return this;
  }
  isLogout() {
    this.loggin = false;
    return this;
  }
}

var a = 10;

export { a, Users };
