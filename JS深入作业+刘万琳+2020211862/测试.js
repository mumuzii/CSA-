/*let value = true;
console.log(typeof value); // boolean

value = String(value); // 现在，值是一个字符串形式的 "true"
console.log(value, typeof value); // string


let value = true;
console.log(typeof value); // boolean

value = value + ''; // 现在，值是一个字符串形式的 "true"
console.log(value, typeof value); // string


const _consoleLog = (string, ...args) => {
	console.log(string, args);
}
_consoleLog('a', 'b', 'c', 'd', 'e'); // 'a' [ 'b', 'c', 'd', 'e' ]

const age = 30
const nameStr = 'name'
const user = {     	 // 一个对象
  [nameStr]: "John", // 键 "name"，值 "John"
  age,     		     // 键 "age"，值 30 (相当于: age: age)
};
console.log(user)
console.log(user.name)
console.log(user['age'])
delete user.age;
console.log(user['age'])

const user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  const clone = Object.assign({}, user);
  clone.name = 'hgk';
  console.log(user.name, clone.name);
  console.log(user.sizes === clone.sizes); // true，同一个对象
  
  // user 和 clone 共享 sizes 对象
  user.sizes.width++; // 在这里改变一个属性的值
  console.log(user.sizes.width, clone.sizes.width); // 51

let user = { // **** 这里我们使用了 let ******
    name: "John",
    age: 30,
    sayHi() {
      console.log(`我是：${this.name}`);
    }
  };
  const boss = {
    name: 'boss'
  }
  const admin = user; // 用户翻身当管理员
  user = boss; // 我们居然让 boss 去当 user 了
  admin.sayHi(); // 噢哟！不错呦，叫对了。
  

  const user = { name: "John" };
const admin = { name: "Admin" };

const sayHi = function() {
  console.log(`我是：${this.name}`);
}

// 在两个对象中使用的是相同的函数
user.f = sayHi;
admin.f = sayHi;

// 它们调用时有不同的 this 值。
// 函数内部的 "this" 是 ***点之前*** 的这个对象。
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin（使用点或方括号语法来访问这个方法，都没有关系。）
*/
function User(name) {
  this.name = name;
  this.isAdmin = false;
  this.sayHi = function() {
    console.log( "My name is: " + this.name );
  };
}

const user = new User("Jack");

console.log(user.name); // Jack
console.log(user.isAdmin); // false
user.sayHi()