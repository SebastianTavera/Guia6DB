# Guía 6 – Bases de Datos NoSQL: Introducción, Tipos y MongoDB

Práctica de laboratorio de **Teoría de Bases de Datos** (Unidad: Desarrollo de Bases de Datos, semana 14, 2026-2).

## Resumen

En esta práctica se exploran las bases de datos NoSQL: su motivación (Big Data, escalabilidad horizontal, datos no estructurados), sus cuatro modelos principales (documento, clave-valor, columnar y grafo) y el teorema CAP. Sobre esa base se construye una base de datos `universidad` en **MongoDB Atlas** con la colección `estudiantes`, se practican operaciones CRUD, consultas con operadores y agregaciones, y finalmente se compara la experiencia con una tabla equivalente en MySQL.

## Estructura del proyecto

| Carpeta | Contenido |
|---|---|
| `00_Aula_Invertida_Tarea_Previa/` | Equivalencias SQL → MongoDB y cuadro comparativo de MongoDB, Redis, Cassandra y Firebase |
| `01_Actividad_Cuadro_Comparativo_RDBMS_vs_NoSQL/` | Tabla comparativa SQL vs MongoDB en 8 dimensiones |
| `02_Actividad_Configuracion_MongoDB_Atlas/` | Cluster en Atlas, BD `universidad`, colección `estudiantes` y 10 documentos |
| `03_Actividad_Operaciones_CRUD/` | `find()`, `updateOne()`/`updateMany()`, `deleteOne()`/`deleteMany()` |
| `04_Actividad_Consultas_Avanzadas_Agregaciones/` | Operadores `$gt`, `$lt`, `$in`, `$regex` y pipeline con `$match`, `$group`, `$sort` |
| `05_Actividad_Migracion_y_Comparacion/` | Exportación a JSON y comparación con MySQL |
| `informe/` | Informe final (`Practica6_NombreEquipo.pdf`) |

Cada actividad tiene:
- `scripts/`: scripts de MongoDB / SQL comentados.
- `imagenes/`: capturas de pantalla que sirven como evidencia.

## Herramientas

MongoDB Atlas, MySQL 8.x, MySQL Workbench, VS Code, Python 3.x.
