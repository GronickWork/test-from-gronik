export default async function getSeminarsData(url, id) {
  const response = await fetch(url);
  const data = await response.json();
  return data[id];
}
