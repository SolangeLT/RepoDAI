from fastapi import FastAPI
from utils import generar_guid
from models import CursoDTO, AlumnoDTO

app = FastAPI()


# Diccionario para almacenar los cursos en memoria,
# con el id del curso como clave y el objeto con el
# ID y el nombre del curso como valor.
#
# Ejemplo de cómo se vería el diccionario de cursos en memoria:
#
# [ 
#   "3b060499-60f7-45f2-96b9-87a59e0fcdb6": {
#     "id": "3b060499-60f7-45f2-96b9-87a59e0fcdb6",
#     "nombre": "Introducción a Python"
#   },
#   "d9c8e5a1-2b3f-4c6a-9e7d-8f1a2b3c4d5e": {
#     "id": "d9c8e5a1-2b3f-4c6a-9e7d-8f1a2b3c4d5e",
#     "nombre": "Introducción a JavaScript"
#   }
# ]

# Ahora el de alumnos con un diccionario igual, pero ahora va a tener un arreglo
# de cursos inscritos, por ejemplo:
#
# alumnos_en_memoria = {
#   "a1b2c3d4-e5f6-7g89-0a1b-2c3d4e5f6g7": {
#     "id": "a1b2c3d4-e5f6-7g89-0a1b-2c3d4e5f6g7",
#     "nombre": "Fabián",
#     "cursos_inscritos": [
#       "3b060499-60f7-45f2-96b9-87a59e0fcdb6",
#       "d9c8e5a1-2b3f-4c6a-9e7d-8f1a2b3c4d5e"
#     ]
#   },
#   "h1i2j3k4-l5m6-7n89-0o1p-2q3r4s5t6u7": {
#     "id": "h1i2j3k4-l5m6-7n89-0o1p-2q3r4s5t6u7",
#     "nombre": "Samuel",
#     "cursos_inscritos": [
#       "3b060499-60f7-45f2-96b9-87a59e0fcdb6"
#     ]
#   }
# }

###########################################
#                 Cursos                 #
###########################################

cursos_en_memoria = {} 

@app.post("/v1/curso")
def crear_curso(curso: CursoDTO):
    id_generado = generar_guid()
    cursos_en_memoria[id_generado] = {"id": id_generado, "nombre": curso.nombre}
    return cursos_en_memoria[id_generado]

@app.get("/v1/cursos")
def cursos_disponibles():
    return list(cursos_en_memoria.values())

@app.get("/v1/curso/{curso_id}")
def buscar_cursoID(curso_id: str):
    curso = cursos_en_memoria.get(curso_id)
    if curso == None:
        return {"error": "Curso no encontrado"}

    return curso


###########################################
#                 Alumnos                 #
###########################################

alumnos_en_memoria = {}

@app.get("/v1/alumnos")
def alumnos():
    return list(alumnos_en_memoria.values())


@app.get("/v1/alumno/{alumno_id}")
def buscar_alumnoID(alumno_id: str):
    alumno = alumnos_en_memoria.get(alumno_id)
    if alumno == None:
        return {"error": "Alumno no encontrado"}

    return alumno

@app.post("/v1/alumno")
def crear_alumno(alumno: AlumnoDTO):
    id_generado = generar_guid()
    alumnos_en_memoria[id_generado] = {
        "id": id_generado,
        "nombre": alumno.nombre,
        "cursos_inscritos": alumno.cursos_inscritos
    }
    return alumnos_en_memoria[id_generado]
   

@app.patch("/v1/alumno/{alumno_id}")
def actualizar_cursos(alumno_id: str, alumno: AlumnoDTO):
    if alumnos_en_memoria[alumno_id] == None:
        return {"error": "Alumno no encontrado"}
    alumnos_en_memoria[alumno_id]["cursos_inscritos"] = alumno.cursos_inscritos
    return alumnos_en_memoria[alumno_id]