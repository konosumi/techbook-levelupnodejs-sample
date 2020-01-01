
function Person() {
  this.age = 0;

  function growUp() {
    // 何もしなければ、thisはgrowUp自身を指す
    this.age++;
    console.log('function this age:', this.age);
  };

  // 普通に実行すると、関数内のthisは関数自身となる
  // function this age: NaN
  setTimeout(growUp, 500);

  // growUpのthisを現在のオブジェクト(Person)に束縛する
  // function this age: 1
  setTimeout(growUp.bind(this), 600);
 
  setTimeout(() => {
    // アロー関数はthisを持たないので、Personのthisが参照される
    this.age++;
    // arrow func age: 2
    console.log('arrow func age:', this.age);
  }, 700);
}

const p = new Person();
