// https://dummyjson.com/users

export async function fetchCharacters(): Promise<any> {
  const response = await fetch("https://dummyjson.com/users");

  if (!response.ok) {
    throw new Error("Failed to fetch characters");
  }
  const results = await response.json();

  return results.users;
}
