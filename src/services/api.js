const BASE_URL = 'https://rickandmortyapi.com/api/character';

// Mapeador de traducciones para los campos de la API
const traduccionesAPI = {
  nombre: 'name',
  estado: 'status',
  especie: 'species',
  tipo: 'type',
  genero: 'gender',
  origen: 'origin',
  ubicacion: 'location',
  imagen: 'image',
  episodios: 'episode',
  enlace: 'url',
  creado: 'created'
};

// Diccionario de estados en español
const estadosES = {
  'Alive': 'Vivo',
  'Dead': 'Muerto',
  'unknown': 'Desconocido'
};

// Diccionario de géneros en español
const generosES = {
  'Male': 'Masculino',
  'Female': 'Femenino',
  'Genderless': 'Sin género',
  'unknown': 'Desconocido'
};

/**
 * Traduce un objeto de personaje de la API al español.
 * @param {Object} personaje - El objeto del personaje de la API.
 * @returns {Object} El objeto del personaje con propiedades traducidas.
 */
export const traducirPersonaje = (personaje) => {
  return {
    id: personaje.id,
    nombre: personaje.name,
    estado: estadosES[personaje.status] || personaje.status,
    especie: personaje.species,
    tipo: personaje.type || 'Desconocido',
    genero: generosES[personaje.gender] || personaje.gender,
    origen: {
      nombre: personaje.origin?.name || 'Desconocido',
      url: personaje.origin?.url || ''
    },
    ubicacion: {
      nombre: personaje.location?.name || 'Desconocido',
      url: personaje.location?.url || ''
    },
    imagen: personaje.image,
    episodios: personaje.episode,
    enlace: personaje.url,
    creado: personaje.created,
    // Mantener datos originales por si es necesario
    _original: personaje
  };
};

/**
 * Obtiene todos los personajes de la API con paginación a través de todas las páginas.
 * @returns {Promise<Array>} Un array plano que contiene todos los personajes traducidos.
 */
export const getAllCharacters = async () => {
  try {
    let allCharacters = [];
    let nextUrl = BASE_URL;

    while (nextUrl) {
      const response = await fetch(nextUrl);
      if (!response.ok) throw new Error('Error al obtener los personajes');
      const data = await response.json();
      const personajesTraducidos = data.results.map(traducirPersonaje);
      allCharacters = [...allCharacters, ...personajesTraducidos];
      nextUrl = data.info.next;
    }

    return allCharacters;
  } catch (error) {
    console.error('Error de API (getAllCharacters):', error);
    throw error;
  }
};

/**
 * Obtiene un personaje individual por su ID.
 * @param {string|number} id - El ID del personaje.
 * @returns {Promise<Object>} Los datos del personaje traducido.
 */
export const getCharacterById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) throw new Error(`Personaje con ID ${id} no encontrado`);
    const data = await response.json();
    return traducirPersonaje(data);
  } catch (error) {
    console.error(`Error de API (getCharacterById - ID: ${id}):`, error);
    throw error;
  }
};
