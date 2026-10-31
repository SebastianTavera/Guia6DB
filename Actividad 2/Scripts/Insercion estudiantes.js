// Seleccionar la base de datos universidad (se crea automáticamente con la primera inserción)
use('universidad');

// Limpiar la colección previa si existe
db.estudiantes.drop();

// Insertar los 10 documentos adaptados de la Guía 5
db.estudiantes.insertMany([
  {
    _id: 1031422990,
    nombre: "Juan Manuel Gamez Nieto",
    edad: 18,
    carrera: "Ingenieria de software",
    promedio: 4.28,
    materias: [
      "Teoria de bases de datos",
      "Taller de programacion",
      "Probabilidad y estadistica",
      "Taller de investigacion cuantitativa",
      "Filosofia"
    ]
  },
  {
    _id: 1011765342,
    nombre: "Esteban Salvador Guzman",
    edad: 35,
    carrera: "Ingenieria de software",
    promedio: 4.07,
    materias: [
      "Teoria de bases de datos",
      "Taller de programacion",
      "Probabilidad y estadistica"
    ]
  },
  {
    _id: 1028886975,
    nombre: "Joan Sebastian Romaña Tavera",
    edad: 18,
    carrera: "Ingenieria de software",
    promedio: 4.17,
    materias: [
      "Teoria de bases de datos",
      "Taller de programacion",
      "Taller de investigacion cuantitativa"
    ]
  },
  {
    _id: 1030281186,
    nombre: "Andres Felipe Dueñas Martinez",
    edad: 19,
    carrera: "Ingenieria de software",
    promedio: 3.70,
    materias: [
      "Taller de investigacion cuantitativa"
    ]
  },
  {
    _id: 1122151498,
    nombre: "Andres Eduardo Viafara Marchena",
    edad: 19,
    carrera: "Ingenieria de software",
    promedio: 4.30,
    materias: [
      "Taller de investigacion cuantitativa"
    ]
  },
  {
    _id: 1000000001,
    nombre: "Laura Camila Rojas Pinto",
    edad: 20,
    carrera: "Ingenieria de software",
    promedio: 4.70,
    materias: [
      "Teoria de bases de datos",
      "Taller de programacion"
    ]
  },
  {
    _id: 1000000002,
    nombre: "Carlos Eduardo Mejia Ruiz",
    edad: 21,
    carrera: "Ingenieria de software",
    promedio: 2.70,
    materias: [
      "Teoria de bases de datos",
      "Probabilidad y estadistica"
    ]
  },
  {
    _id: 1000000003,
    nombre: "Sofia Valentina Castro Leon",
    edad: 19,
    carrera: "Psicologia",
    promedio: null,
    materias: []
  },
  {
    _id: 1000000004,
    nombre: "Mariana Gomez Lopez",
    edad: 22,
    carrera: "Enfermeria",
    promedio: 4.50,
    materias: [
      "Anatomia General",
      "Bioetica y Salud"
    ]
  },
  {
    _id: 1000000005,
    nombre: "Daniel Alejandro Castro Vasquez",
    edad: 23,
    carrera: "Administracion de empresas",
    promedio: 3.40,
    materias: [
      "Contabilidad Financiera",
      "Gestion Administrativa"
    ]
  }
]);

// Consulta de comprobación final
db.estudiantes.find();