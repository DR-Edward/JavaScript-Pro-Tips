const data = {
  name: 'DR-Edward',
  age: 26,
  family: {
    mother: "Jane Smith",
    father: "Harry Smith",
    sister: "Samantha Smith"
  },
  languajes: [ 'JavaScript', 'PHP', 'Java' ],
};

const printer = (data) => {
  const { name, age: yearsOld, family: { mother : mom }, country = 'México', languajes } = data;

  const mostLiked = languajes[0];

  console.log(`My name is ${ name } and I'm ${ yearsOld } years old. My mother's name is ${ mom } and we live in ${ country }. My favorite programing languaje is ${ mostLiked }`);
};

printer(data);