import { create } from "zustand";

const useStore = create((set) => ({
  storeData: {
    "cafe-500-noches": {
      name: "Café Bar 500 Noches",
      description: "Descripción de la Tienda 1",
      srcImagen: "logos/500Noches.svg",
      descripcion: "Descripción",
      platillo1: "/restaurantes/nacionDelTaco/tacos1.png",
    },
    sarajevo: {
      name: "Sarajevo Café Jardín",
      description: "Descripción de la Tienda 2",
      srcImagen: "logos/Sarajevo.svg",
      descripcion: "Descripción",
      platillo1: "/restaurantes/nacionDelTaco/tacos1.png",
    },
    "san-juan-leñero": {
      name: "San Juan Leñero",
      description: "Descripción de la Tienda 2",
      srcImagen: "logos/SanJuanLeñero.svg",
      descripcion: "Descripción",
      platillo1: "/restaurantes/nacionDelTaco/tacos1.png",
    },
    peruano: {
      name: "Peruano Cevichería",
      description: "Descripción de la Tienda 2",
      srcImagen: "logos/Peruano.svg",
      descripcion: "Descripción",
      platillo1: "/restaurantes/nacionDelTaco/tacos1.png",
    },
    "la-nacion-del-taco": {
      name: "La Nación del taco",
      description: "Descripción de la Tienda 2",
      srcImagen: "logos/LaNacionDelTaco.svg",
      descripcion: "Descripción",
      platillo1: "/restaurantes/nacionDelTaco/tacos1.png",
    },
    "merendero-madero": {
      name: "Merendero Madero",
      description: "Descripción de la Tienda 2",
      srcImagen: "logos/MerenderoMadero.svg",
      descripcion: "Descripción",
      platillo1: "/restaurantes/nacionDelTaco/tacos1.png",
    },
  },
  selectedStore: null, // Almacenará la tienda seleccionada
  setSelectedStore: (storeId) => {
    // Almacenamos la tienda seleccionada en el estado
    const storeInfo = useStore.getState().storeData[storeId];
    set({ selectedStore: storeInfo });
  },
}));

export default useStore;
