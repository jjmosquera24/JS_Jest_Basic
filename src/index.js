const cities = ["Ciudad de Mexico", "Bogotá", "Lima", "Buenos Aires"];

const randomString = () => {
  const string = cities[Math.floor(Math.random() * cities.length)];
  return string;
};

module.exports = randomString;
