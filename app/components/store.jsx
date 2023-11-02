import create from "zustand";

const useStore = create((set) => ({
  storeData: {
    1: {
      name: "Café Bar 500 Noches",
      description: "Descripción de la Tienda 1",
      srcImagen: "logos/500Noches.svg",
    },
    6: {
      name: "Sarajevo Café Jardín",
      description: "Descripción de la Tienda 2",
      srcImagen: "logos/Sarajevo.svg",
    },
    5: {
      name: "San Juan Leñero",
      description: "Descripción de la Tienda 2",
      srcImagen: "logos/SanJuanLeñero.svg",
    },
    4: {
      name: "Peruano Cevichería",
      description: "Descripción de la Tienda 2",
      srcImagen: "logos/Peruano.svg",
    },
    2: {
      name: "La Nación del taco",
      description: "Descripción de la Tienda 2",
      srcImagen: "logos/LaNacionDelTaco.svg",
    },
    3: {
      name: "Merendero Madero",
      description: "Descripción de la Tienda 2",
      srcImagen: "logos/MerenderoMadero.svg",
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
