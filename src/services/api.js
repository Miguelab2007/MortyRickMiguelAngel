const BASE_URL = 'https://rickandmortyapi.com/api/character';

/**
 * Fetches all characters from the API by paginating through all pages.
 * @returns {Promise<Array>} A flat array containing all characters.
 */
export const getAllCharacters = async () => {
  try {
    let allCharacters = [];
    let nextUrl = BASE_URL;

    while (nextUrl) {
      const response = await fetch(nextUrl);
      if (!response.ok) throw new Error('Error fetching characters');
      const data = await response.json();
      allCharacters = [...allCharacters, ...data.results];
      nextUrl = data.info.next;
    }

    return allCharacters;
  } catch (error) {
    console.error('API Error (getAllCharacters):', error);
    throw error;
  }
};

/**
 * Fetches a single character by its ID.
 * @param {string|number} id The character ID.
 * @returns {Promise<Object>} The character data.
 */
export const getCharacterById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) throw new Error(`Character with ID ${id} not found`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`API Error (getCharacterById - ID: ${id}):`, error);
    throw error;
  }
};
