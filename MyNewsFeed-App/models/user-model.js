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
      if (username === null) {
         throw new Error('username can not be null!');
      }
      if (username === '') {
         throw new Error('username can not be empty!');
      }
    this._username = username;
  }

  get email() {
    return this._email;
  }

  set email(email) {
    if (email === null) {
        throw new Error('email can not be null!');
    }
    if (email === '') {
        throw new Error('email can not be empty!');
    }
    this._email = email;
  }

  get password() {
    return this._password;
  }

  set password(password) {
    if (password === null) {
        throw new Error('password can not be null!');
    }
    if (password === '') {
        throw new Error('password can not be empty!');
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

  set userJoined(date) {
    if (date === null) {
        throw new Error('date can not be null!');
    }
    if (date === '') {
        throw new Error('date can not be empty!');
    }
    this._userJoined = date;
  }
  get userFeeds() {
    return this._userFeeds;
  }

  set userFeeds(array) {
    if (array === null) {
        throw new Error('userFeeds can not be null!');
    }
    this._userFeeds = array;
  }

  get userArticles() {
    return this._userArticles;
  }

  set userArticles(array) {
    if (array === null) {
        throw new Error('articles can not be null!');
    }
    this._userArticles = array;
  }
  get admin() {
    return this._admin;
  }

  set admin(isAdmin) {
    if (isAdmin === null) {
        throw new Error('Admin is null!');
    }
    if (isAdmin === undefined) {
        throw new Error('Admin is undefined!');
    }

    if (isAdmin === '') {
        throw new Error('Admin can not be empty!');
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
  User,
};
