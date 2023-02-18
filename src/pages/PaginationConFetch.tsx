import { useEffect, useState } from "react";
import usePagination from "../hooks/usePagination";

const PaginationConFetch = () => {
  const [elementsArray, setElementsArray] = useState([]);

  const initialState = {
    currentPage: 1,
    pageSize: 10,
    total: elementsArray.length,
  };
  const [state, actions] = usePagination(initialState);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("data.json");
      const data = await response.json();
      setElementsArray(data);
    };
    fetchData();
  }, []);

  // Con esto tomamos el index del primer y último elemento de la pagina actual y creamos una nueva array en la que mostramos solo esos elementos.
  const start = (state.currentPage - 1) * state.pageSize; // 0 en la primera
  const end = state.currentPage * state.pageSize; // 10 en la primera (excluye el último numero)
  const elementsToDisplay = elementsArray.slice(start, end);

  // Con esto desactivamos los botones de prev y next en caso de que no podamos ir más a la izquierda o la derecha.
  const isPrevDisabled = state.currentPage === 1;
  const isNextDisabled =
    state.currentPage === Math.ceil(elementsArray.length / state.pageSize);

  return (
    <>
      <div className="elements">
        {elementsToDisplay.map((element: any, index: any) => (
          <div key={index}>{element}</div>
        ))}
      </div>
      {/* Pagination  */}
      <div className="pagination">
        <div className="pagination__buttons">
          <button onClick={actions.prevPage} disabled={isPrevDisabled}>
            Página anterior
          </button>
          <button onClick={actions.nextPage} disabled={isNextDisabled}>
            Siguiente página
          </button>
        </div>
        <p>Página actual: {state.currentPage}</p>
        <p>Número max de elementos por página: {state.pageSize}</p>
        <p>Número total de elementos: {elementsArray.length}</p>
      </div>
    </>
  );
};

export default PaginationConFetch;
