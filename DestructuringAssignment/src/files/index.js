const data = {
  name: 'DR-Edward',
  age: 26,
  family: {
    mother: "Jane Smith",
    father: "Harry Smith",
    sister: "Samantha Smith"
  },
};

const printer = (data) => {
  const { name, age, family } = data;
  const { mother } = family;

  console.log(`My name is ${ name } and I'm ${ age } years old. My mother's name is ${ mother }`);
};

printer(data);