import React, { useState, useEffect } from 'react';
import { getAllRespondent } from '../api/form.api';

const TuComponente = () => {
  const [respondents, setRespondents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllRespondent();
        // Actualiza el estado con los datos obtenidos
        setRespondents(response.data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    // Llama a la función al montar el componente
    fetchData();
  }, []);

  return (
    <div>
      <h1>Lista de Respondentes</h1>
      <ul>
        {respondents.map(respondent => (
          <li key={respondent.id}>
            <p>ID: {respondent.id}</p>
            <p>Teléfono: {respondent.phone_number}</p>
            <p>pregunta: {respondent.phone_number}</p>
            
            <ul>
              
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TuComponente;