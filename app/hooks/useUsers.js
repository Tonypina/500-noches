'use client'
import { useState, useEffect } from 'react';

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(true);
  const [singleLoading, setSingleLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/users');
        if (!response.ok) {
          throw new Error('Error al obtener la infomación');
        }
        const jsonData = await response.json();
        setUsers(jsonData.users);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [loading]);

  const handleDropUser = (id) => {
    setLoading(true)
    fetch('/api/users/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
        setLoading(false)
      })
  }
  
  const handleAddNewUser = async (newUser, setNewUser) => {

    setLoading(true)

    fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
      }),
    })
      .then(response => {

        setNewUser({
          name: '',
          email: '',
          password: ''
        });

        setLoading(false)
      })
  }

  
  const handleReadUser = async (id) => {

    setSingleLoading(true)

    fetch('/api/users/' + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(async response => {
        const jsonData = await response.json();

        setSingleUser({
          id: jsonData.user.id,
          name: jsonData.user.name,
          email: jsonData.user.email,
          password: "",
        })

        setSingleLoading(false)
      })
  }

  const handleUpdateUser = async (changes) => {

    setLoading(true)

    fetch('/api/users/' + changes.id, {
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

  return { users, loading, singleUser, setSingleUser, singleLoading, error, handleAddNewUser, handleDropUser, handleReadUser, handleUpdateUser };
};

export default useUsers;
