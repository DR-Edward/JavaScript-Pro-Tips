const data = {
  name: 'DR-Edward',
  age: 26,
  family: {
    mother: "Jane Smith",
    father: "Harry Smith",
    sister: "Samantha Smith"
  },
  languages: [ 'JavaScript', 'PHP', 'Java', 'Python', 'Go', 'Dart' ],
};

const printer = (data) => {
  const { name, age: yearsOld, family: { mother : mom }, country = 'México', languages, } = data;

  const [ mostLiked, , lessUsed, ...toLearn ] = languages;

  console.log(`My name is ${ name } and I'm ${ yearsOld } years old. My mother's name is ${ mom } and we live in ${ country }. My favorite programing language is ${ mostLiked }, the unfavorite one is ${ lessUsed } and I want to learn ${ toLearn }`);
};

printer(data);