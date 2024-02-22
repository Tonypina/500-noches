import React from "react";
const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "POSICIÓN", uid: "position", sortable: true},
  {name: "UBICACIÓN", uid: "location", sortable: true},
  {name: "RESTAURANTE", uid: "restaurant", sortable: true},
  {name: "ACCIONES", uid: "actions"},
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

export {columns, restaurantOptions, locationOptions};
