// 2) Вивести усі ключі та значення обєкту --------------------------

const temp = {
  a: 'Hello world',
  b: {
    user: {
      name: 'John',
      surname: 'Doe',
    },
    job: {
      address: 'Washington st. 7',
    },
  },
  c: {
    car: {
      mark: {
        year: 1988,
        name: 'Toyota',
      },
      count: 3127,
    },
  },
};

// Answer

// recursion
function logTree(obj) {
  // реккурсія
  const keys = Object.keys(obj);

  for (const key of keys) {
    const val = obj[key];
    const isObj = isObject(val);
    if (isObj) {
      logTree(val);
    } else {
      console.log(key + ' -> ' + val);
    }
  }
  return true;
}

// without recursion
function logTree2(obj) {
  let queue = [obj];

  while (queue.length) {
    let o = queue.shift();

    Object.keys(o).some(function (k) {
      if (isObject(o[k])) queue.push(o[k]);
      else console.log(k + ' -> ' + o[k]);
    });
  }
}

// helper
function isObject(object) {
  return object != null && typeof object === 'object';
}

// testing
logTree(temp);
logTree2(temp);
