import React from "react";
const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "POSICIÓN", uid: "position", sortable: true},
  {name: "UBICACIÓN", uid: "location", sortable: true},
  {name: "RESTAURANTE", uid: "restaurant", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];

const positions = [
  {
    id: 1,
    position: "Pinche de Chef",
    location: "Chiapas",
    restaurant: "500 Noches Café"
  },
];

const restaurantOptions = [
  {name: "Active", uid: "active"},
  {name: "Paused", uid: "paused"},
  {name: "Vacation", uid: "vacation"},
];

const locationOptions = [
  {name: "Active", uid: "active"},
  {name: "Paused", uid: "paused"},
  {name: "Vacation", uid: "vacation"},
];

export {columns, positions, restaurantOptions, locationOptions};
