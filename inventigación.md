# 1) ¿Qué es una transacción? ¿Para qué se usan?

Una **transacción** es un conjunto de operaciones sobre la base de datos que se tratan como una sola unidad de trabajo. En SQLite, una transacción normalmente comienza con `BEGIN` y termina con `COMMIT` si todo sale bien, o con `ROLLBACK` si hay que deshacer los cambios. Esto evita que la base quede “a medias” cuando ocurre un error. 
## ¿Para qué se usan?
Se usan para:

- **Mantener la integridad de los datos**.
- **Evitar cambios parciales** si una operación falla.
- **Agrupar varias instrucciones** que deben ejecutarse juntas.
- **Controlar mejor la concurrencia** cuando varios procesos acceden a la base. :contentReference[oaicite:1]{index=1}

### Ejemplo
Si en una app bancaria se descuenta dinero de una cuenta y luego se abona a otra, ambas operaciones deberían ir en la misma transacción. Si una falla, se hace `ROLLBACK` y ninguna queda aplicada.

sql:
BEGIN;
UPDATE cuentas SET saldo = saldo - 100 WHERE id = 1;
UPDATE cuentas SET saldo = saldo + 100 WHERE id = 2;
COMMIT;

# 2) ¿Cómo puedo evitar que el comando para crear una tabla no falle si es que la tabla ya está creada?

En SQLite se usa IF NOT EXISTS dentro de CREATE TABLE. La documentación oficial indica que, si ya existe una tabla o vista con ese nombre, el comando no hace nada y no devuelve error.

### Ejemplo

CREATE TABLE IF NOT EXISTS alumnos (
    id INTEGER PRIMARY KEY,
    nombre TEXT NOT NULL,
    edad INTEGER
);

# 3) ¿Qué es un trigger o disparador? Da dos ejemplos de cuándo es bueno usarlos.

Un trigger o disparador es una acción automática que la base de datos ejecuta cuando ocurre un evento específico, por ejemplo un INSERT, UPDATE o DELETE sobre una tabla. En SQLite, los triggers son de tipo FOR EACH ROW, es decir, se ejecutan por cada fila afectada.

## ¿Cuándo conviene usarlos?

### Ejemplo 1: Auditoría de cambios

Es útil cuando quieres guardar un historial de modificaciones. Por ejemplo, si alguien cambia el salario de un empleado, el trigger puede registrar quién lo cambió, cuándo y cuál era el valor anterior.

Por qué conviene: porque automatiza el registro y no depende de que el programador recuerde hacerlo desde la aplicación.

### Ejemplo 2: Actualizar una fecha de modificación

Se puede usar un trigger para que cada vez que un registro sea actualizado, se modifique automáticamente una columna como updated_at.

Por qué conviene: porque mantiene consistencia en la base sin repetir lógica en muchos lugares del código.

### ejemplo en SQL:

CREATE TRIGGER IF NOT EXISTS actualizar_fecha
AFTER UPDATE ON alumnos
FOR EACH ROW
BEGIN
    UPDATE alumnos
    SET updated_at = CURRENT_TIMESTAMP
    WHERE id = NEW.id;
END;

# 4) ¿Qué es SQL Injection? ¿Qué implicaciones tiene? Busca 3 noticias de talla mundial relacionadas con esto, escribe un párrafo de cada una y escribe el enlace a la noticia.

## ¿Qué es SQL Injection?

SQL Injection es un tipo de ataque en el que un atacante inserta o “inyecta” código SQL malicioso a través de entradas de usuario para que la aplicación lo ejecute en la base de datos. OWASP explica que una explotación exitosa puede permitir leer datos sensibles, modificar registros, ejecutar operaciones administrativas e incluso, en ciertos casos, interactuar con el sistema operativo.

## Implicaciones

Las implicaciones son graves:

- robo de datos personales o financieros,
- alteración o borrado de información,
- acceso no autorizado,
- daño reputacional para la empresa,
- sanciones legales y regulatorias,
- interrupción de servicios.

## Cómo se previene

OWASP recomienda principalmente usar prepared statements / parameterized queries, además de validación adecuada de entradas y mínimos privilegios en la base de datos.

### Noticia 1: Campaña “ResumeLooters” contra 65 sitios web

- enlace: https://www.securityweek.com/millions-of-user-records-stolen-from-65-websites-via-sql-injection-attacks/

En febrero de 2024 se reportó una campaña atribuida al grupo ResumeLooters, que comprometió 65 sitios legítimos de empleo y retail usando SQL injection y ataques XSS. Según el reporte, los atacantes robaron datos de más de dos millones de personas, incluyendo información de buscadores de empleo. El caso muestra que SQL Injection sigue siendo un vector real y masivo, especialmente cuando los sitios procesan formularios con datos personales sensibles

### Noticia 2: Ataque a Sony Pictures vinculado a SQL Injection

- enlace: https://www.reuters.com/article/technology/second-accused-lulzsec-hacker-arrested-in-sony-pictures-breach-idUSBRE87S036/

Reuters informó sobre el caso relacionado con la intrusión a Sony Pictures, donde la acusación federal describió el uso de un ataque de SQL injection para obtener información confidencial de los sistemas de la empresa. Este caso se volvió mundialmente conocido porque involucró a una empresa de entretenimiento enorme y evidenció cómo una mala protección de entradas puede terminar en exposición de datos y en investigaciones criminales internacionales.

### Noticia 3: Caso Heartland Payment Systems

- enlace: https://www.reuters.com/article/world/heartland-pays-amex-36-million-over-2008-data-breach-idUS579554199/

Reuters reportó que el Departamento de Justicia de Estados Unidos señaló que atacantes lograron entrar a Heartland Payment Systems mediante ataques de SQL injection. El caso fue especialmente grave porque involucró una empresa de procesamiento de pagos, lo que elevó el impacto económico y de confianza pública. Además, Reuters informó sobre un acuerdo de Heartland con American Express derivado del incidente, lo que deja claro que SQL Injection no solo causa daños técnicos: también puede traducirse en costos legales y financieros millonarios.

# 5) ¿Qué es un ORM y qué diferencias existen con escribir sentencias de SQL comunes?

Un ORM (Object-Relational Mapper) es una herramienta que permite trabajar con la base de datos usando objetos del lenguaje de programación en lugar de escribir directamente todo el SQL a mano. La documentación de SQLAlchemy explica que el ORM se construye sobre un núcleo SQL y permite mapear objetos del programa a tablas de la base de datos, automatizando operaciones de persistencia como INSERT, UPDATE y DELETE.

## Diferencias entre usar ORM y escribir SQL común

1. Nivel de abstracción
- Con SQL común: escribes instrucciones como SELECT, INSERT, UPDATE o DELETE manualmente.
- Con ORM: trabajas con clases y objetos, y la herramienta genera gran parte del SQL por ti.

2. Facilidad de desarrollo
- SQL común: da más control fino, pero requiere más trabajo manual.
- ORM: acelera el desarrollo en muchas aplicaciones porque reduce código repetitivo.

3. Portabilidad
- SQL común: a veces depende más del motor específico.
- ORM: puede facilitar mover una aplicación entre distintos motores de base de datos, aunque no siempre elimina todas las diferencias.

4. Seguridad

Un ORM bien usado puede ayudar a prevenir SQL Injection porque suele utilizar parámetros y bindings. OWASP indica que las consultas parametrizadas son una defensa principal, y en el caso de Laravel su documentación señala que Eloquent ORM protege por defecto parametrizando consultas. Aun así, usar un ORM no vuelve una aplicación invulnerable si el desarrollador inserta SQL inseguro manualmente.

5. Rendimiento y control
- SQL común: suele dar más control para optimizar consultas complejas.
- ORM: puede ser más cómodo, pero a veces genera consultas menos eficientes si no se usa bien. Esto no significa que el ORM sea malo, sino que hay que entender qué está haciendo por debajo.
