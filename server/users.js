class Users {
  constructor() {
    this.users = [];
  }

  add(user) {
    this.users.push(user);
  }

  get(id) {
    return this.users.find(user => user.id === id);
  }

  remove(id) {
    const targetUser = this.get(id);

    if (targetUser) {
      this.users = this.users.filter(user => user.id !== id);
    }

    return targetUser;
  }

  getByRoom(room) {
    return this.users.filter(user => user.room === room);
  }
}

module.exports = function() {
  return new Users();
};
