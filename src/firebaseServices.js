import firebase from "./firebaseConnect";

const db = firebase.ref("/todolist");

class firebaseServices {
  getAll() {
    return db;
  }

  create(item) {
    return db.push(item);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new firebaseServices();