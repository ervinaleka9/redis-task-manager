# Implementación de una aplicación CRUD con Redis y Docker

Este proyecto implementa una aplicación de gestión de tareas (CRUD) utilizando Node.js, Redis y Docker. Está diseñado como parte de un trabajo académico para demostrar el uso de Redis como sistema de almacenamiento clave-valor en una arquitectura distribuida, ligera y de bajo consumo.

# Características principales
- Redis como sistema de almacenamiento en memoria
- Contenedores gestionados con Docker y Docker Compose
- Tests automatizados con Vitest
- RedisInsight para visualización de datos

# Estructura del proyecto

```
├── app/
│   ├── index.js
│   ├── routes.js
│   └── redisClient.js
├── tests/
│   └── task.test.js
├── Dockerfile
├── docker-compose.yml
└── README.md
```

## Instalación y ejecución

1. Clonar el repositorio:
```bash
git clone https://github.com/ervinaleka9/redis-task-manager.git
cd redis-task-manager
```

2. Iniciar el entorno con Docker:
```bash
docker-compose up --build
```
- RedisInsight estará en `http://localhost:8001`

3. Comandos en Redis CLI
  Crear una tarea (Create)
  HSET task:1234 id "1234" title "Hacer el informe" deadline "2025-05-01" status "pending"

  Leer una tarea (Read)
  HGETALL task:1234

  Actualizar una tarea (Update)
  HSET task:1234 status "done"

  Eliminar una tarea (Delete)
  DEL task:1234

  Listar todas las tareas almacenadas
  KEYS task:*

## Pruebas

Ejecutar los tests con:

```bash
npm install
npm run test
```

## Autor
Ervina Leka 

