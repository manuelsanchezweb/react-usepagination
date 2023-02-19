# Hook casero: usePagination

## Licencia

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## Como fúnciona

Encontrarás los estados y métodos que vamos a necesitar en toda paginación en el archivo `usePagination.tsx`.

```javascript
// src/hooks/usePagination.tsx
interface PaginationState {
  currentPage: number;
  pageSize: number;
  total: number;
}

interface PaginationActions {
  nextPage: () => void;
  prevPage: () => void;
  jumpToPage: (page: number) => void;
}
```

```javascript
const nextPage = () => {
  setState((prevState) => {
    const currentPage = prevState.currentPage + 1;
    return { ...prevState, currentPage };
  });
};

const prevPage = () => {
  setState((prevState) => {
    const currentPage = prevState.currentPage - 1;
    return { ...prevState, currentPage };
  });
};

const jumpToPage = (page: number) => {
  setState((prevState) => {
    return { ...prevState, currentPage: page };
  });
};
```

Échale ahora un vistazo a los archivos/páginas `PaginationSinFetch.tsx` y `PaginationConFetch.tsx` para ver cómo aplicar el hook.

## Autores

- [@manuelsanchezweb](https://www.github.com/manuelsanchezweb)

## Installation

Es un proyecto hecho con Create Vite, así que lo puedes instalar fácilmente con un `npm i` y `npm run dev`.
