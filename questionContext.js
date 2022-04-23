// 3) Що буде виведено в консоль ------------------------------------

const user = {
  name: 'ALex',
  age: 21,
  info: () => {
    console.log(this);
    console.log(this.name + ', ' + this.age);
  },
};

// user.info();

// answer
// it points one level up (in out case global scope), so we need
// change arrow function to regulat one
// info() {...}
// https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/

const user2 = {
  name: 'ALex',
  age: 21,
  info() {
    console.log(this.name + ', ' + this.age);
  },
  info2: function () {
    console.log(this.name + ', ' + this.age);
  },
};

user2.info();
user2.info2();
