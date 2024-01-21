// Convert all keys within an object from snake_case into camelCase

function convertObjToCamelCase(obj) {
  for (const key in obj) {
    const seperatedNames = key.split("_").map((keyPartial, index) => {
      if (index === 0) {
        return keyPartial;
      } else {
        return `${keyPartial[0].toUpperCase()}${keyPartial.substring(1)}`;
      }
    });

    const joinedName = seperatedNames.join("");

    if (seperatedNames.length > 1) {
      obj[joinedName] = obj[key];
      delete obj[key];
    }

    if (typeof obj[joinedName] === "object") {
      convertObjToCamelCase(obj[joinedName]);
    }
  }
}

const testObject = {
  ps_games: {
    metal_gear_solid: { play: 1 },
    crash_bandicoot: { play: 1 },
    soul_calibur: { play: 1 },
    star_wars: {
      play: 1,
      characters: [{ name: "han solo", super_power: "blaster" }],
    },
  },
};

convertObjToCamelCase(testObject);
console.log("testObject: ", testObject);

'{"ps_games":{"metal_gear_solid":{"play":1},"crash_bandicoot":{"play":1},"soul_calibur":{"play":1},"star_wars":{"play":1,"characters":[{"name":"han solo","super_power":"blaster"}]}}}'