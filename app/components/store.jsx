import { create } from "zustand";

const useStore = create((set) => ({
  storeData: {
    "cafe-500-noches": {
      name: "Café Bar 500 Noches",
      description: "Descripción de la Tienda 1",
      srcImagen: "logos/500Noches.svg",
      descripcion: "Descripción",
      platillo1: "/restaurantes/nacionDelTaco/tacos1.png",
      tabs: [
        {
          id: "celaya",
          label: "Celaya",
          content: "Contenido de la pestaña Celaya",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.6655368508445!2d-100.83445202500843!3d20.519932781005146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842cbaf73079ce95%3A0xe718806dd592f9ce!2sCaf%C3%A9%20Bar%20500%20Noches%20Celaya!5e0!3m2!1ses-419!2smx!4v1699634615003!5m2!1ses-419!2smx",
        },
        {
          id: "noches-leon",
          label: "Noches León",
          content: "Contenido de la pestaña Noches León",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3213.396797025032!2d-101.69124984555559!3d21.152992532059997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbf48e9da755b%3A0xfa0f08b074a974b9!2sCaf%C3%A9%20Bar%20500%20Noches%20Le%C3%B3n!5e0!3m2!1ses-419!2smx!4v1699635276698!5m2!1ses-419!2smx",
        },
        {
          id: "san-luis-potosí",
          label: "San Luis Potosí",
          content: "Contenido de la pestaña San Luis Potos",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2113.9719670915806!2d-101.02140308051855!3d22.145449056782407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842a995868e26757%3A0x9fa51e738790307!2sCaf%C3%A9%20Bar%20500%20Noches%20San%20Luis!5e0!3m2!1ses-419!2smx!4v1699635327178!5m2!1ses-419!2smx",
        },
        {
          id: "mazatlan",
          label: "Mazatlán",
          content: "Contenido de la pestaña Mazatlán",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.0091982415115!2d-106.44901362492487!3d23.27911547899491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8698abc7f87db0d5%3A0x3b84e0bf42f08466!2sCaf%C3%A9%20Bar%20500%20Noches%20Mazatl%C3%A1n!5e0!3m2!1ses-419!2smx!4v1699635548954!5m2!1ses-419!2smx",
        },
        {
          id: "merida",
          label: "Mérida",
          content: "Contenido de la pestaña Mérida",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.61340446515!2d-89.61184282499431!3d21.00812848063601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f56773fbf9d9aeb%3A0x44a2ef9489835c83!2sCaf%C3%A9%20Bar%20500%20Noches%20M%C3%A9rida!5e0!3m2!1ses-419!2smx!4v1699635578463!5m2!1ses-419!2smx",
        },
        {
          id: "tuxtla",
          label: "Tuxtla",
          content: "Contenido de la pestaña Mérida",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.4469253195816!2d-93.1418357251061!3d16.754425884028826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd902474cb5d5%3A0x49943b4ba6667eea!2sCaf%C3%A9%20Bar%20500%20Noches%20Tuxtla!5e0!3m2!1ses-419!2smx!4v1699635626851!5m2!1ses-419!2smx",
        },
        {
          id: "san-cristobal",
          label: "San Cristóbal",
          content: "Contenido de la pestaña San Cristobal",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.823999416794!2d-92.64064922510654!3d16.73563128404464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ed453e0f6924ab%3A0x50da7bd0198ab1dc!2sCaf%C3%A9%20Bar%20500%20Noches!5e0!3m2!1ses-419!2smx!4v1699635663638!5m2!1ses-419!2smx",
        },
      ],
    },
    sarajevo: {
      name: "Sarajevo Café Jardín",
      description: "Descripción de la Tienda 2",
      srcImagen: "logos/Sarajevo.svg",
      descripcion: "Descripción",
      platillo1: "/restaurantes/nacionDelTaco/tacos1.png",
      tabs: [
        {
          id: "jardín",
          label: "Café Jardín",
          content: "Contenido de la pestaña jardín",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.752863787192!2d-92.63577262510644!3d16.739178484041627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ed45acbb7c6a41%3A0x10c6b24b0b114b27!2sSarajevo%20Caf%C3%A9%20Jardin!5e0!3m2!1ses-419!2smx!4v1699635971935!5m2!1ses-419!2smx",
        },
      ],
    },
    "san-juan-leñero": {
      name: "San Juan Leñero",
      description: "Descripción de la Tienda 2",
      srcImagen: "logos/SanJuanLeñero.svg",
      descripcion: "Descripción",
      platillo1: "/restaurantes/nacionDelTaco/tacos1.png",
      tabs: [
        {
          id: "tuxtla",
          label: "Tuxtla",
          content: "Contenido de la pestaña tuxtla",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.14966585488!2d-93.14002415433066!3d16.753844997300053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd933c4a0fe89%3A0xb3d46713f03b7acc!2sSan%20Juan%20Le%C3%B1ero%20Asador!5e0!3m2!1ses-419!2smx!4v1699636137304!5m2!1ses-419!2smx",
        },
        {
          id: "mazatlan",
          label: "Mazatlán",
          content: "Contenido de la pestaña tuxtla",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.0022932674383!2d-106.44894362492475!3d23.27936637899467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8698ab3c39b43b03%3A0xd4f2acde59c95b72!2sSan%20Juan%20Le%C3%B1ero%20Asador!5e0!3m2!1ses-419!2smx!4v1699636177582!5m2!1ses-419!2smx",
        },
      ],
    },
    peruano: {
      name: "Peruano Cevichería",
      description: "Descripción de la Tienda 2",
      srcImagen: "logos/Peruano.svg",
      descripcion: "Descripción",
      platillo1: "/restaurantes/nacionDelTaco/tacos1.png",
      tabs: [
        {
          id: "cevicheria",
          label: "Peruano Cevichería",
          content: "Contenido de la pestaña cevichería",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.4542073947155!2d-92.6398101008495!3d16.735692584044585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ed453e0f735afb%3A0x84bfc035d61a26ce!2sPeruano%20Cevicheria%20y%20Cocina%20peruana!5e0!3m2!1ses-419!2smx!4v1699636244065!5m2!1ses-419!2smx",
        },
      ],
    },
    "la-nacion-del-taco": {
      name: "La Nación del taco",
      description: "Descripción de la Tienda 2",
      srcImagen: "logos/LaNacionDelTaco.svg",
      descripcion: "Descripción",
      platillo1: "/restaurantes/nacionDelTaco/tacos1.png",
      tabs: [
        {
          id: "-",
          label: "-",
          content: "Contenido de la pestaña -",
        },
      ],
    },
    "merendero-madero": {
      name: "Merendero Madero",
      description: "Descripción de la Tienda 2",
      srcImagen: "logos/MerenderoMadero.svg",
      descripcion: "Descripción",
      platillo1: "/restaurantes/nacionDelTaco/tacos1.png",
      tabs: [
        {
          id: "madero",
          label: "Merendero Madero",
          content: "Contenido de la pestaña merendero",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.830712869926!2d-101.67562202499109!3d21.119314280552764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbf08799576fd%3A0x8ff78940798e8315!2sMerendero%20Madero!5e0!3m2!1ses-419!2smx!4v1699636372831!5m2!1ses-419!2smx",
        },
      ],
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
