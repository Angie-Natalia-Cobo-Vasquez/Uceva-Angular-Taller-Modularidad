# Uceva Angular: taller de modularidad

Aplicación académica desarrollada con Angular 20 para practicar la organización
de una aplicación por módulos, componentes, servicios e interfaces tipadas. El
proyecto usa componentes basados en `NgModule`; no utiliza componentes standalone.

## Requisitos

- Node.js 20 o superior y npm.
- Git.
- Angular CLI 20 (opcional, porque los scripts usan la CLI instalada localmente).

Comprueba las versiones con:

```bash
node --version
npm --version
npx ng version
```

## Instalación y ejecución

Desde la carpeta que contiene `package.json`:

```bash
npm install
npm start
```

La aplicación queda disponible en `http://localhost:4200/`. La ruta inicial
redirige a `/home`. También están disponibles `/users`, `/products`, `/games` y `/movies`.

Para crear una compilación de producción:

```bash
npm run build
```

## Arquitectura del proyecto

```text
src/app/
├── core/                 Configuración e interfaces transversales
├── modules/
│   ├── home/              Página de inicio y acceso a los módulos
│   ├── users/             Usuarios, tabla, página y servicio
│   ├── products/          Productos, tabla, página y servicio
│   ├── games/             Juegos, tabla, página y servicio HTTP
│   ├── movies/            Películas, tabla, página y servicio (Core)
│   └── shared/            Componentes reutilizables
├── app-routing-module.ts  Rutas lazy-loaded de los módulos
└── app-module.ts          Módulo raíz
```

Los módulos de `users`, `products` y `movies` obtienen datos de archivos de
configuración en `core/config`. El módulo `games` consulta en tiempo real la
API pública [FreeToGame](https://www.freetogame.com/api/games) mediante
`HttpClient` y representa su respuesta con `Game`; la URL de la API también
está centralizada en `core/config/games.config.ts`.

## Pruebas

El proyecto utiliza Jest y `jest-preset-angular`:

```bash
npm test                 # Ejecuta las pruebas una vez
npm run test:watch       # Modo observación
npm run test:coverage    # Reporte de cobertura
```

## Documentación con Compodoc

Compodoc genera documentación HTML a partir del código TypeScript y sus
comentarios JSDoc. La configuración está en `tsconfig.doc.json` y analiza
`src/**/*.ts`, excluyendo las especificaciones.

```bash
npm run compodoc
```

El resultado se genera en la carpeta `documentation/`. Abre
`documentation/index.html` en el navegador para consultar módulos, componentes,
servicios, interfaces y gráficos de dependencias.

## Modelos con Quicktype.io

La interfaz `Game` corresponde a la respuesta de la API de FreeToGame. Para
regenerar o comprobar el modelo usando [Quicktype.io](https://quicktype.io/):

1. Solicita el JSON desde `https://www.freetogame.com/api/games`.
2. Pégalo en Quicktype.
3. Selecciona **TypeScript**, nombra el tipo raíz `Game` y activa la opción de
	generar interfaces.
4. Compara el resultado con
	`src/app/modules/games/interfaces/game.interface.ts`.

El modelo debe conservar los campos `id`, `title`, `thumbnail`,
`short_description`, `game_url`, `genre`, `platform`, `publisher`, `developer`,
`release_date` y `freetogame_profile_url`, porque son los consumidos por la
tabla de juegos. Quicktype se utiliza como apoyo para inferir y validar el
contrato; la interfaz fuente del proyecto se mantiene bajo control de Git.

## Generación con Angular CLI

Los módulos y componentes nuevos deben conservar el esquema no-standalone:

```bash
npx ng generate module modules/example --routing
npx ng generate component modules/example/components/example --standalone=false
```

Mantén la separación `pages`, `components`, `services` e `interfaces` dentro de
cada módulo para conservar la modularidad del taller.

## Commits

Usa [Conventional Commits](https://www.conventionalcommits.org/) con uno de los
prefijos definidos para el taller:

```text
feat: agrega una funcionalidad
fix: corrige un error
refactor: reorganiza código sin cambiar el comportamiento
docs: actualiza documentación
test: agrega o modifica pruebas
chore: realiza tareas de mantenimiento
```