import * as SQLite from 'expo-sqlite';

let db: SQLite.SQLiteDatabase | null = null;

// Función para inicializar la base de datos
export const openDB = async () => {
  try {
    db = await SQLite.openDatabaseAsync('medidas.db');
    console.log('Base de datos abierta correctamente.');
  } catch (error) {
    console.error('Error al abrir la base de datos:', error);
  }
};

export const setupDatabase = async () => {
  if (!db) await openDB();
  db?.execAsync(
    `CREATE TABLE IF NOT EXISTS medidas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        peso TEXT,
        estatura TEXT,
        cuello TEXT,
        cintura TEXT,
        cadera TEXT,
        brazo TEXT,
        muslo TEXT,
        pantorrilla TEXT,
        pecho TEXT
    );`
  )
  .then(() => console.log('Tabla creada correctamente'))
  .catch(error => console.error('Error al crear la tabla:', error));
};

// Función para insertar datos
export const insertMedidas = async (
  peso: string,
  estatura: string,
  cuello: string,
  cintura: string,
  cadera: string,
  brazo: string,
  muslo: string,
  pantorrilla: string,
  pecho: string
) => {
  if (!db) await openDB();
  db?.runAsync(
    `INSERT INTO medidas (peso, estatura, cuello, cintura, cadera, brazo, muslo, pantorrilla, pecho) 
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);`,
    [peso, estatura, cuello, cintura, cadera, brazo, muslo, pantorrilla, pecho]
  )
  .then(() => console.log('Medidas guardadas correctamente'))
  .catch(error => console.error('Error al guardar medidas:', error));
};
