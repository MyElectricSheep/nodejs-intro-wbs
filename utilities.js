const addRainbows = (text) => `🌈 ${text} 🌈`;
const addUnicorns = (text) => `🦄 ${text} 🦄`;

const thisIsASecret = "I like ice cream";

// module.exports = addRainbows; // default export

module.exports = {
  addRainbows,
  addUnicorns,
}; // named exports
