'use client'
import { useState, useEffect } from 'react';

const useVacants = () => {
  const [vacants, setVacants] = useState([]);
  const [locations, setLocations] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [singleVacant, setSingleVacant] = useState({
    position: "",
    location: "",
    restaurant: "",
    description: "",
  });
  const [loading, setLoading] = useState(true);
  const [singleLoading, setSingleLoading] = useState(false);
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
  }, [loading]);

  const handleDropVacant = (id) => {
    setLoading(true)
    fetch('/api/vacants/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
        setLoading(false)
      })
  }
  
  const handleAddNewVacant = async (newVacant, setNewVacant) => {

    setLoading(true)

    fetch('/api/vacants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        position: newVacant.position,
        location: newVacant.location,
        restaurant: newVacant.restaurant,
        description: newVacant.description,
      }),
    })
      .then(response => {

        setNewVacant({
          position: '',
          location: '',
          restaurant: '',
          description: ''
        });

        setLoading(false)
      })
  }

  
  const handleReadVacant = async (id) => {

    setSingleLoading(true)

    fetch('/api/vacants/' + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(async response => {
        const jsonData = await response.json();

        setSingleVacant({
          id: jsonData.vacant.id,
          position: jsonData.vacant.position,
          location: jsonData.vacant.location,
          restaurant: jsonData.vacant.restaurant,
          description: jsonData.vacant.description,
        })

        setSingleLoading(false)
      })
  }

  const handleUpdateVacant = async (changes) => {

    setLoading(true)

    fetch('/api/vacants/' + changes.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(changes),
    })
      .then(response => {

        setLoading(false)
      })
  }

  return { vacants, locations, restaurants, loading, singleVacant, setSingleVacant, singleLoading, error, handleAddNewVacant, handleDropVacant, handleReadVacant, handleUpdateVacant };
};

export default useVacants;
