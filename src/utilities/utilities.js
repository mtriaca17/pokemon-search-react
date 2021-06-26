async function fetchPokemon(id) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const data = await res.json();
    return getPokeData(data);
  } catch (err) {
    return 'error';
  }
}

async function getPokeData(data) {
  const pokeInfo = {
    id: data.id,
    name: data.name,
    type: getTypes(data.types),
    sprites: getSprites(data.sprites),
  };
  return pokeInfo;
}

function getSprites(dataObj) {
  let spriteUrlArr = [];

  spriteUrlArr.push(dataObj.front_default);
  spriteUrlArr.push(dataObj.front_shiny);

  return spriteUrlArr;
}

function getTypes(arr) {
  let outputTypes = [];

  arr.forEach(item => {
    outputTypes.push(item.type.name);
  });

  return outputTypes;
}

function randNum() {
  return Math.floor(Math.random() * (893 - 1 + 1) + 1);
}

export { getPokeData, fetchPokemon, randNum };
