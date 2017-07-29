class User {
  constructor(fullName, username, email,
    password, urlProfilePicture, admin) {
    this.fullName = fullName;
    this.username = username;
    this.email = email;
    this.password = password;
    this.urlProfilePicture = urlProfilePicture;
    this.userJoined = new Date().toDateString();
    this.admin = admin;
    this.userFeeds = [];
    this.userArticles = [];
  }

  get fullName() {
    return this._fullName;
  }

  set fullName(fullName) {
    this._fullName = fullName;
  }

  get username() {
    return this._username;
  }

  set username(username) {
      if(username === null) {
         throw "username can not be null!"; 
      }
      if(username === '') {
         throw "username can not be empty!"; 
      }
    this._username = username;
  }

  get email() {
    return this._email;
  }

  set email(email) {
    if(email === null) {
        throw "email can not be null!"; 
    }
    if(email === '') {
        throw "email can not be empty!"; 
    }
    this._email = email;
  }

  get password() {
    return this._password;
  }

  set password(password) {
    if(password === null) {
        throw "password can not be null!"; 
    }
    if(password === "") {
        throw "password can not be empty!"; 
    }
    this._password = password;
  }

  get urlProfilePicture() {
    return this._urlProfilePicture;
  }

  set urlProfilePicture(urlProfilePicture) {
    this._urlProfilePicture = urlProfilePicture;
  }

  get userJoined() {
    return this._userJoined;
  }

<<<<<<< HEAD
  // set userJoined(date) {
  //   this._userJoined = new Date().toDateString();
  // }

  get admin() {
    return this._admin;
  }

  set admin(isAdmin) {
    this._admin = isAdmin;
  }

=======
  set userJoined(date) {
    if(date === null) {
        throw "date can not be null!"; 
    }
    if(date === '') {
        throw "date can not be empty!"; 
    }
    this._userJoined = date;
  }
>>>>>>> 1a0265c77d98e0568fb2ea2e2de4e76ed0ced880
  get userFeeds() {
    return this._userFeeds;
  }

  set userFeeds(array) {
    if(array === null) {
        throw "userFeeds can not be null!"; 
    }
    this._userFeeds = array;
  }

  get userArticles() {
    return this._userArticles;
  }

  set userArticles(array) {
    if(array === null) {
        throw "articles can not be null!"; 
    }
    this._userArticles = array;
  }
  get admin() {
    return this._admin;
  }

  set admin(isAdmin) {
    if(isAdmin === null) {
        throw "Admin is null!"; 
    }
    if(isAdmin === undefined) {
        throw "Admin is undefined!"; 
    }
    
    if(isAdmin === "") {
        throw "Admin can not be empty!"; 
    }
    
    this._admin = isAdmin;
  }
  
  toObject() {
    return {
      fullName: this.fullName,
      username: this.username,
      email: this.email,
      password: this.password,
      urlProfilePicture: this.urlProfilePicture,
      userJoined: this.userJoined,
      userFeeds: this.userFeeds,
      userArticles: this.userArticles,
      admin: this.admin,
    };
  }
}

module.exports = {
  User
};
