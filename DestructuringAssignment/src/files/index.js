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
  const { name, age: yearsOld, family: { mother : mom }, country = 'México' } = data;

  console.log(`My name is ${ name } and I'm ${ yearsOld } years old. My mother's name is ${ mom } and we live in ${ country }`);
};

printer(data);