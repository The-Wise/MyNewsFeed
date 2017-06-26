'use strict';

module.exports =
 class User {
    constructor (username, name, email, password) {
        this.username = username;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    get username() {
        return this._username;
    }

    set username(username) {
        this._username = username;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get password() {
        return this._password;
    }

    set password(password) {
        this._password = password;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }
}

