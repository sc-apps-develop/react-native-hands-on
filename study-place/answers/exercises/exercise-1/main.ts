// NOTE: TypeScript単体の実行環境がないため、VSCode上では実行できない

interface Person {
  name: string;
  age: number;
};

const outputPerson = (person: Person): void => {
  const { name, age } = person;
  console.log(name + "(" + age.toString() + ")");

  // こんな書き方もあります（詳しくはテンプレートリテラルで調べてみて）
  // console.log(`${name} (${age.toString()})`);

}

const person1: Person = {
  name: "太郎",
  age: 20
}

outputPerson(person1);