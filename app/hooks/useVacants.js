'use client'
import { useState, useEffect } from 'react';

const useVacants = () => {
  const [vacants, setVacants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/vacants');
        if (!response.ok) {
          throw new Error('Error al obtener la infomación');
        }
        const jsonData = await response.json();
        setVacants(jsonData.vacants);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
  return { vacants, loading, error };
};

export default useVacants;
