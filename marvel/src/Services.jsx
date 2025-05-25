const ts = 1748040097;
const apikey = "7ca8ee63be8d14eef8e8a1cc80e84bc4";
const hash = "55924f884fcc645678f36699b8e8be51";
const baseUrl = `https://gateway.marvel.com/v1/public/characters`;

export async function getCharacters(offset = 0, limit = 10, name = "") {
  const url = name
    ? `${baseUrl}?ts=${ts}&apikey=${apikey}&hash=${hash}&limit=${limit}&nameStartsWith=${name}`
    : `${baseUrl}?ts=${ts}&apikey=${apikey}&hash=${hash}&offset=${offset}&limit=${limit}`;

  const response = await fetch(url)
    .then((data) => data.json())
    .then((json) => json.data.results);

  return response;
}

export async function getCharacterById(id) {
  const response = await fetch(
    `${baseUrl}/${id}?ts=${ts}&apikey=${apikey}&hash=${hash}`
  )
    .then((data) => data.json())
    .then((json) => json.data.results[0]);

  return response;
}
