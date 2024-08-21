import { create } from "zustand";

const useStore = create((set) => ({
  storeData: {
    "cafe-500-noches": {  
      titleFont: "font-georgia",
      textFont: "font-montserrat",
      name: <p className="">CAFE BAR <span className="text-red">500</span> NOCHES</p>,
      eslogan: <p>Un lugar para el <span className="italic text-red">arte</span> de <span className="text-gold">ser y compartir</span></p>,
      colors: {
        1: "text-black",
        2: "text-red",
        3: "text-gold",
      },
      srcImagen: "/logos/500Noches.svg",
      descripcion:
        <p>Un lugar dedicado a los encuentros, al tiempo y a la platica. Un lugar que a través del la música en vivo, la decoración, la gastronomía, el café, el vino y el ambiente, creamos momentos contigo, <span className="text-gold">Café Bar 500 Noches</span> está dedicado para ti.</p>,
      hero_image: "/restaurantes/500Noches/hero.jpg",
      galeria1: "/restaurantes/500Noches/galeria1.JPG",
      galeria2: "/restaurantes/500Noches/galeria2.JPG",
      galeria3: "/restaurantes/500Noches/galeria3.JPG",
      galeria4: "/restaurantes/500Noches/galeria4.JPG",
      platillos: [
        {
          image: "/restaurantes/500Noches/platillo1.JPG",
          name: "Salmón Alicia",
          description: "A la plancha con risotto de hongos, acompañado de ensaladilla de hojas y salsa de vino blanco."
        },
        {
          image: "/restaurantes/500Noches/platillo2.JPG",
          name: "Tabla Mixta",
          description: "Selección de quesos y carnes frías, pan, frutas y aderezos."
        },
        {
          image: "/restaurantes/500Noches/platillo3.JPG",
          name: "Borges",
          description: "Espagueti con salsa cremosa de espinaca, acompañada con camarones a la plancha y queso parmesano."
        },
        {
          image: "/restaurantes/500Noches/platillo4.JPG",
          name: "Tapas",
          description: ""
        },
        {
          image: "/restaurantes/500Noches/platillo5.JPG",
          name: "Ensalada Leonora",
          description: "Mix de lechugas, queso de cabra, nuez, arándanos, vinagreta de durazno y galleta de parmesano."
        },
      ],
      platillos_image: '/texturas/papel.jpg',
      border_img: "/texturas/ruptura.png", 
      comentarios_image: "/texturas/papel_2.jpg",
      comentarios: [
        {
          nombrePersona: "Viridiana Gallehos Hdez",
          comentario:
            "¡Me encanta este lugar, es de mis favoritos! Tiene un ambiente muy agradable para toda ocasión, he ido en las mañanas y por la noche y nunca me ha quedado a deber nada. La comida es deliciosa, la atención por parte de los meseros es muy atenta. Los precios me parecen justos por la calidad que recibes. Recomendado 100%",
          tienda: "Celaya",
        },
        {
          nombrePersona: "Nat Camargo",
          comentario:
            "Para desayunar recomiendo mucho los molletes con chicharrón  prensado porque la porción  es grande y tienen muy buen sabor el queso y el chicharrón, también  los chilaquiles con arrachera divorciados, las salsas con muy buen sazón. El ambiente 10/10 muy tranquilo y con buena música.  Buen lugar para desayunar en León.",
          tienda: "León",
        },
        {
          nombrePersona: "Fernando Gonzalez",
          comentario:
            "Ambiente muy cálido con música que crea un ambiente muy bonito. Qué invita a disfrutar de un buen vino. Acudimos por primera vez y pedimos un tabla de carnes, mezcal y cerveza artesanal, por cierto La recomendación del mesero fue  muy buena. La pasamos de lo mejor.",
          tienda: "San Cristóbal",
        },
      ],
      tabs_style: {
        tabs_border: "border-b-solid border-b-2 border-b-gold",
        active_tab: "bg-gold rounded text-white",
        map_border: "border-solid border-3 border-gold"
      },
      menuSrc: "/restaurantes/500Noches/menus",
      tabs: [
        {
          id: "celaya",
          label: "Celaya",
          content: "Contenido de la pestaña Celaya",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.6655368508445!2d-100.83445202500843!3d20.519932781005146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842cbaf73079ce95%3A0xe718806dd592f9ce!2sCaf%C3%A9%20Bar%20500%20Noches%20Celaya!5e0!3m2!1ses-419!2smx!4v1699634615003!5m2!1ses-419!2smx",
          direction: "Alberto Durero #100 Col. Renacimiento",
          mail: "info@grupo500noches.com.mx",
          phone: "461-173-0818",
          facebook: "https://facebook.com/500nochescelaya",
          instagram: "https://instagram.com/cafebar500noches_",
          tiktok: "https://tiktok.com/@cafebar500noches",
        },
        {
          id: "noches-leon",
          label: "León",
          content: "Contenido de la pestaña Noches León",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3213.396797025032!2d-101.69124984555559!3d21.152992532059997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbf48e9da755b%3A0xfa0f08b074a974b9!2sCaf%C3%A9%20Bar%20500%20Noches%20Le%C3%B3n!5e0!3m2!1ses-419!2smx!4v1699635276698!5m2!1ses-419!2smx",
          direction: "Av. Paseo del Juncal #215, Villas del Juncal León, Gto. C.P. 37180",
          mail: "info@grupo500noches.com.mx",
          phone: "477-405-5807",
          facebook: "https://facebook.com/500nochesleon",
          instagram: "https://instagram.com/cafebar500noches_",
          tiktok: "https://tiktok.com/@cafebar500noches",
        },
        {
          id: "san-luis-potosi",
          label: "San Luis Potosí",
          content: "Contenido de la pestaña San Luis Potos",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2113.9719670915806!2d-101.02140308051855!3d22.145449056782407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842a995868e26757%3A0x9fa51e738790307!2sCaf%C3%A9%20Bar%20500%20Noches%20San%20Luis!5e0!3m2!1ses-419!2smx!4v1699635327178!5m2!1ses-419!2smx",
          direction: "C. Huasteca 300, Lomas de San Luis 1ra Sección",
          mail: "info@grupo500noches.com.mx",
          phone: "444-445-3049",
          facebook: "https://facebook.com/500nochessanluis",
          instagram: "https://instagram.com/cafebar500noches_",
          tiktok: "https://tiktok.com/@cafebar500noches",
        },
        {
          id: "mazatlan",
          label: "Mazatlán",
          content: "Contenido de la pestaña Mazatlán",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.0091982415115!2d-106.44901362492487!3d23.27911547899491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8698abc7f87db0d5%3A0x3b84e0bf42f08466!2sCaf%C3%A9%20Bar%20500%20Noches%20Mazatl%C3%A1n!5e0!3m2!1ses-419!2smx!4v1699635548954!5m2!1ses-419!2smx",
          direction: "Av. de la Marina 6107, Marina Mazatlán",
          mail: "info@grupo500noches.com.mx",
          phone: "669-441-2146",
          facebook: "https://facebook.com/500nochesmazatlan",
          instagram: "https://instagram.com/cafebar500noches_",
          tiktok: "https://tiktok.com/@cafebar500noches",
        },
        {
          id: "merida",
          label: "Mérida",
          content: "Contenido de la pestaña Mérida",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.61340446515!2d-89.61184282499431!3d21.00812848063601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f56773fbf9d9aeb%3A0x44a2ef9489835c83!2sCaf%C3%A9%20Bar%20500%20Noches%20M%C3%A9rida!5e0!3m2!1ses-419!2smx!4v1699635578463!5m2!1ses-419!2smx",
          direction: "Av. Líbano 54, México Nte",
          mail: "info@grupo500noches.com.mx",
          phone: "999-369-0282",
          facebook: "https://facebook.com/500nochesmerida",
          instagram: "https://instagram.com/cafebar500noches_",
          tiktok: "https://tiktok.com/@cafebar500noches",
        },
        {
          id: "tuxtla",
          label: "Tuxtla Gutiérrez",
          content: "Contenido de la pestaña Mérida",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.4469253195816!2d-93.1418357251061!3d16.754425884028826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd902474cb5d5%3A0x49943b4ba6667eea!2sCaf%C3%A9%20Bar%20500%20Noches%20Tuxtla!5e0!3m2!1ses-419!2smx!4v1699635626851!5m2!1ses-419!2smx",
          direction: "Plaza Dorada, Blvd. Belisario Dominguez 1057 Santa Elena, 29060, Tuxtla Gutiérrez, Chiapas",
          mail: "info@grupo500noches.com.mx",
          phone: "",
          facebook: "https://facebook.com/500nochestuxtla",
          instagram: "https://instagram.com/cafebar500noches_",
          tiktok: "https://tiktok.com/@cafebar500noches",
        },
        {
          id: "san-cristobal",
          label: "San Cristóbal de las Casas",
          content: "Contenido de la pestaña San Cristobal",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.823999416794!2d-92.64064922510654!3d16.73563128404464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ed453e0f6924ab%3A0x50da7bd0198ab1dc!2sCaf%C3%A9%20Bar%20500%20Noches!5e0!3m2!1ses-419!2smx!4v1699635663638!5m2!1ses-419!2smx",
          direction: "Andador Miguel Hidalgo 6D, Zona Centro, 29200. San Cristóbal de las Casas, Chiapas",
          mail: "info@grupo500noches.com.mx",
          phone: "967-141-1426",
          facebook: "https://facebook.com/500nochessancristobal",
          instagram: "https://instagram.com/cafebar500noches_",
          tiktok: "https://tiktok.com/@cafebar500noches",
        },
      ],
    },
    sarajevo: {
      titleFont: "font-adam",
      textFont: "font-montserrat",
      name: <p className="tracking-widest">SARAJEVO CAFE JARDIN</p>,
      eslogan: <p><span className="font-bridge text-xlg text-[#D45D52]">Fluye</span> con la <span className="font-bridge text-xlg text-[#D45D52]">armonía</span> del espacio</p>,
      colors: {
        1: "text-black",
        2: "text-[#D45D52]",
        3: "text-[#849072]",
      },
      srcImagen: "/logos/Sarajevo_blanco.svg",
      descripcion:
        "Sarajevo nace con la idea de crear un espacio de tranquilidad, un lugar pensado para disfrutar de un ambiente relajado, alejándose un poco del centro y del bullicio, busca crear una atmósfera que, entre su vegetación, la luminosidad y los espacios, te puedas transportar a otro rincón.",
      hero_image: "/restaurantes/sarajevo/hero.jpg",
      galeria1: "/restaurantes/sarajevo/galeria1.JPG",
      galeria2: "/restaurantes/sarajevo/galeria2.JPG",
      galeria3: "/restaurantes/sarajevo/galeria3.JPG",
      galeria4: "/restaurantes/sarajevo/galeria4.JPG",
      plants: [
        "/texturas/planta1.png",
        "/texturas/planta2.png",
      ],
      platillos: [
        {
          image: "/restaurantes/sarajevo/platillo1.JPG",
          name: "Tosta de Tomates Cherry",
          description: "Avocato, ricotta cheese, tomatoes and seeds."
        },
        {
          image: "/restaurantes/sarajevo/platillo2.JPG",
          name: "Huevos en Salsa Morita",
          description: "Huevos estrellados con salsa de chile morita acompañados de frijoles, aguacate y tostadas de maíz horneadas."
        },
        {
          image: "/restaurantes/sarajevo/platillo3.JPG",
          name: "Huevos Rancheros",
          description: "Huevos estrellados sobre tortilla de maíz con frijoles y hierbasanta, con salsa ranchera y chile habanero tatemado."
        },
        {
          image: "/restaurantes/sarajevo/platillo4.JPG",
          name: "Tiradito de Chicharrón",
          description: "Trozos crujientes de pork belly con ensalada de jitomate."
        },
        {
          image: "/restaurantes/sarajevo/platillo5.JPG",
          name: "Cazuela de Huevos",
          description: "Huevos estrellados sobre guiso de papas, chile poblano, pimientos asados y nopales."
        },
        {
          image: "/restaurantes/sarajevo/platillo6.JPG",
          name: "Lasagna Blanca",
          description: "Capas de pasta con guiso cremoso de pollo, verduras y hierbas, con queso gratinado. acompañada con ensalada verde y vinagreta de balsámico."
        },
      ],
      platillos_image: '/texturas/tablones.jpg',
      comentarios_image: "/texturas/195.jpg",
      comentarios: [
        {
          nombrePersona: "Mario Cabañas",
          comentario:
            "Increíble lugar, súper bonito y agradable. Los huevitos que pedí estaban buenísimos, los molletes, de los mejores que he probado. Es obligatorio desayunar aquí.",
          tienda: "Café Jardin",
        },
        {
          nombrePersona: "Mica",
          comentario:
            "Mi restaurante favorito de San Cristóbal. Me encantó todo, la comida es deliciosa, el ambiente con la música en vivo hace el lugar incluso más atractivo. Sin duda volveré y lo recomendaré mucho ❤️",
          tienda: "Café Jardin",
        },
        {
          nombrePersona: "Frigo Salinas",
          comentario:
            "¡Excelente lugar! Fuimos a cenar y todo muy bien, la atención es buena,la comida es muy rica, el tiempo en servir considero es rápido y te dan sugerencias si no sabes que pedir.",
          tienda: "Café Jardin",
        },
      ],
      tabs_style: {
        tabs_border: "border-b-solid border-b-2 border-b-gold",
        active_tab: "bg-gold rounded text-white",
        map_border: "border-solid border-3 border-gold"
      },
      menuSrc: "/restaurantes/sarajevo/menus",
      tabs: [
        {
          id: "jardin",
          label: "San Cristóbal de las Casas",
          content: "Contenido de la pestaña jardín",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.752863787192!2d-92.63577262510644!3d16.739178484041627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ed45acbb7c6a41%3A0x10c6b24b0b114b27!2sSarajevo%20Caf%C3%A9%20Jardin!5e0!3m2!1ses-419!2smx!4v1699635971935!5m2!1ses-419!2smx",
          direction: "Flavio A. Paniagua 32, Barrio de Guadalupe, 29230 San Cristóbal de las Casas, Chiapas",
          mail: "info@grupo500noches.com.mx",
          phone: "967-133-0415",
          facebook: "https://facebook.com/sarajevocafejardinsc",
          instagram: "https://instagram.com/sarajevo_cafejardin_sc",
          tiktok: "",
        },
      ],
    },
    "san-juan-lenero": {
      titleFont: "font-georgia",
      textFont: "font-raleway",
      name: <p className="font-bridge">San Juan Leñero</p>,
      eslogan: <p className="font-georgia">Influenciados por la cocina <span className="text-gold text-xlg">mediterranea</span></p>,
      colors: {
        1: "text-black",
        2: "text-red",
        3: "text-gold",
      },
      srcImagen: "/logos/SanJuanLeneroBlanco.svg",
      descripcion:
        <p>En nuestro idioma habitan sílabas <span className="text-red">volcánicas</span> que, cuando se desprenden de nuestra boca, pueden provocar <span className="text-red">pasiones</span> incontrolables para el viento… Y en nuestra cocina hay ingredientes que abrazan tan fuerte que nos hacen <span className="text-red">sentir</span> que los corazones alrededor de la mesa laten al mismo tiempo.</p>,
      hero_image: "/restaurantes/sanJuanLenero/hero.jpg",
      galeria1: "/restaurantes/sanJuanLenero/galeria1.JPG",
      galeria2: "/restaurantes/sanJuanLenero/galeria2.JPG",
      galeria3: "/restaurantes/sanJuanLenero/galeria3.JPG",
      galeria4: "/restaurantes/sanJuanLenero/galeria4.JPG",
      platillos_image: "/texturas/bg_charcoal.jpg",
      platillos: [
        {
          image: "/restaurantes/sanJuanLenero/platillo1.JPG",
          name: "Rack de Cordero",
          description: "Acompañado con puré de zanahoria, espárragos a la parrilla y salsa en su jugo."
        },
        {
          image: "/restaurantes/sanJuanLenero/platillo2.JPG",
          name: "Flan con Dulce de Leche",
          description: "Flan de huevo y crema, azúcar quemada, acompañado con dulce de leche."
        },
        {
          image: "/restaurantes/sanJuanLenero/platillo3.JPG",
          name: "Camarones Adobados",
          description: "Camarones Adobados"
        },
        {
          image: "/restaurantes/sanJuanLenero/platillo4.JPG",
          name: "Ensalada Capresse",
          description: "DescripciónBouquet de hojas, albahaca italiana, mozzarella fresca, tomates aliñados con vinagre de Módena y aceite de albahaca."
        },
        {
          image: "/restaurantes/sanJuanLenero/platillo5.JPG",
          name: "Tabla de Quesos",
          description: "Selección de quesos importados, compota de temporada, frutos y pan."
        },
        {
          image: "/restaurantes/sanJuanLenero/platillo6.JPG",
          name: "Cortes a la Parrilla",
          description: ""
        },
      ],
      tabs_style: {
        tabs_border: "border-b-solid border-b-2 border-b-gold",
        active_tab: "bg-gold rounded text-white",
        map_border: "border-solid border-3 border-gold"
      },
      menuSrc: "/restaurantes/sanJuanLenero/menus",
      tabs: [
        {
          id: "tuxtla",
          label: "Tuxtla Gutierréz",
          content: "Contenido de la pestaña tuxtla",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.14966585488!2d-93.14002415433066!3d16.753844997300053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd933c4a0fe89%3A0xb3d46713f03b7acc!2sSan%20Juan%20Le%C3%B1ero%20Asador!5e0!3m2!1ses-419!2smx!4v1699636137304!5m2!1ses-419!2smx",
          openTableSrc: "//www.opentable.com.mx/widget/reservation/loader?rid=1197784&type=standard&theme=wide&color=6&dark=false&iframe=true&domain=commx&lang=es-MX&newtab=false&ot_source=Restaurant%20website&cfe=true",
          direction: "Esquina con Paseo de las Fuentes, Lib Sur, Pte. S/N, Santa Elena 29060, Tuxtla Gutiérrez, Chiapas",
          mail: "sanjuanasador@gmail.com",
          phone: "961-456-8468",
          facebook: "https://facebook.com/sanjuanlenerotuxtlagtz",
          instagram: "https://instagram.com/sanjuanlenerotuxtlagtz",
          tiktok: "https://tiktok.com/@sanjuanleneroasador",
        },
        {
          id: "mazatlan",
          label: "Mazatlán",
          content: "Contenido de la pestaña tuxtla",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.0022932674383!2d-106.44894362492475!3d23.27936637899467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8698ab3c39b43b03%3A0xd4f2acde59c95b72!2sSan%20Juan%20Le%C3%B1ero%20Asador!5e0!3m2!1ses-419!2smx!4v1699636177582!5m2!1ses-419!2smx",
          openTableSrc: "//www.opentable.com.mx/widget/reservation/loader?rid=1268224&type=standard&theme=wide&color=6&dark=false&iframe=true&domain=commx&lang=es-MX&newtab=false&ot_source=Restaurant%20website&cfe=true",
          direction: "Av. De la Marina 6107 Local 2",
          mail: "info@grupo500noches.com.mx",
          phone: "669-329-2715",
          facebook: "https://facebook.com/sanjuanleneromazatlan",
          instagram: "https://instagram.com/sanjuanleneromazatlan",
          tiktok: "https://tiktok.com/@sanjuanleneroasador",
        },
      ],
      comentarios_image: "/texturas/195.jpg",
      comentarios: [
        {
          nombrePersona: "Andrés",
          comentario:
            "Lugar muy bueno para un buen corte, la carne en su punto!...la Heineken bien fría!...buen ambiente, Staff super atento, baños impecables!!..valet parking...ke más puedes pedir?...si te gustan los cortes...este es el lugar!!...felicidades!!",
          tienda: "Mazatlán",
        },
        {
          nombrePersona: "Emilio Gonzalez Fernandez",
          comentario:
            "El lugar está increible, muy buena el ambiente y decoración. La comida de 100... Pidan la crema de tomate asados está espectacular. Tienen una ludoteca super completa para los que tienen niños. Te permite comer tranquilo y que los niños de diviertan. 200% recomendado.",
          tienda: "Mazatlán",
        },
        {
          nombrePersona: "Marcos Cancino",
          comentario:
            "Pequeño pero bello. La atención esmerada y los platillos también, La picaña jugosa, en su punto.",
          tienda: "Mazatlán",
        },
      ],
    },
    "cinema-stereo": {
      titleFont: "font-montserrat",
      textFont: "font-news-goth",
      name: <p className="font-montserrat">Cinema Stereo</p>,
      eslogan: <p>Un tributo a la <span className="text-[#ff0080]">música</span> , una atmósfera donde vivirás experiencias que <span className="text-[#ff0080]">estimularán</span> todos tus sentidos.</p>,
      colors: {
        1: "text-black",
        2: "text-gold",
        3: "text-main",
      },
      srcImagen: "/logos/CinemaStereo.svg",
      descripcion:
        <p>Cinema Stereo, es un espacio que celebra a la música, es un homenaje a las historias hechas películas, a los sucesos que nos han marcado, es un homenaje a esta generación: 80s, 90s y 00s.</p>,
      hero_image: "/restaurantes/cinemaStereo/hero.jpg",
      galeria1: "/restaurantes/cinemaStereo/galeria1.jpg",
      galeria2: "/restaurantes/cinemaStereo/galeria2.jpg",
      galeria3: "/restaurantes/cinemaStereo/galeria3.jpg",
      galeria4: "/restaurantes/cinemaStereo/galeria4.jpg",
      platillos_image: "/texturas/brown.jpg",
      platillos: [
        {
          image: "/restaurantes/cinemaStereo/platillo1.jpg",
          name: "Menphis",
          description: "Pan artesanal con carne de res, queso americano, lechuga y jitomate."
        },
        {
          image: "/restaurantes/cinemaStereo/platillo2.jpg",
          name: "Tabla de Quesos y Carnes Frías",
          description: "Selección de quesos y carnes frías, pan, frutas y aderezos."
        },
        {
          image: "/restaurantes/cinemaStereo/platillo3.jpg",
          name: "Bagel Jack",
          description: "Panecillo con forma de rosca relleno con jamón serrano acompañado de una ensalada de lechuga, tomate cherry, aceituna, nuez, espinaca y vinagreta."
        },
        {
          image: "/restaurantes/cinemaStereo/platillo5.jpg",
          name: "Napolitana",
          description: "300 gr. de carne de res empanizada con salsa pomodoro gratinada con papas a la francesa y ensalada."
        },
        {
          image: "/restaurantes/cinemaStereo/platillo6.jpg",
          name: "Bjork",
          description: "Queso mozzarella, pepperoni."
        },
      ],
      tabs_style: {
        tabs_border: "border-b-solid border-b-2 border-b-main",
        active_tab: "bg-main rounded text-white",
        map_border: "border-solid border-3 border-main"
      },
      menuSrc: "/restaurantes/cinemaStereo/menus",
      tabs: [
        {
          id: "cinema-stereo",
          label: "León",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.9715797585413!2d-101.6908150255624!3d21.153529280527135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbf8895f1024d%3A0xe940d633e1d8e381!2sCinema%20Stereo!5e0!3m2!1ses-419!2smx!4v1721263447106!5m2!1ses-419!2smx",
          direction: "Paseo del Juncal 1030 Local 14A Col. Villas del Juncal León, Gto. C.P. 37180",
          mail: "info@grupo500noches.com.mx",
          phone: "477-498-4351",
          facebook: "https://facebook.com/cinemastereocafebar",
          instagram: "https://instagram.com/cinemastereoleon",
          tiktok: "https://tiktok.com/@cinema.stereo.caf",
        },
      ],
      comentarios_image: "/texturas/195.jpg",
      comentarios: [
        {
          nombrePersona: "Comensal",
          comentario:
            "Excelente lugar, la comida también excelente, la atención excelente, música en vivo excelente, definitivamente volvería ✨",
          tienda: "Guanajuato",
        },
        {
          nombrePersona: "Comensal",
          comentario:
            "Muy buen ambiente, los covers que canta la banda muy buenos, y excelente servicio.",
          tienda: "Guanajuato",
        },
        {
          nombrePersona: "Comensal",
          comentario:
            "Como siempre, ir al Cinema es un deleite, todo conjuga, la ambientación, la banda de casa, la música de fondo, la comida, las bebidas, la ubicación del lugar, y la excelente atención de la mayoría de los colaboradores, súper recomendado.",
          tienda: "Guanajuato",
        },
      ],
    },
    "buho-cafe": {
      titleFont: "font-black-coffee",
      textFont: "font-roboto",
      name: "Búho Café",
      eslogan: <p>Creamos un <span className="font-black-coffee text-xlg text-[#92C2D6]">ambiente relajado</span> para toda la familia.</p>,
      colors: {
        1: "text-black",
        2: "text-[#D45D52]",
        3: "text-[#849072]",
      },
      srcImagen: "/logos/BuhoCafeBlanco.svg",
      descripcion:
        <p><span className="font-black-coffee text-[#92C2D6]">Búho Café</span> es un espacio dirigido a la familia, pensado principalmente para que los <span className="font-black-coffee text-[#92C2D6]">niños</span> tuvieran un espacio donde jugar, convivir, divertirse y disfrutar. Pensando en crear un espacio sencillo, agradable y cómodo, Búho también propone que tanto los papás como la <span className="font-black-coffee text-[#92C2D6]">familia</span> puedan convivir, ya sea desde una pizza, unos churros o uno de los tantos juegos de mesa.</p>,
      buho: [
        "/texturas/buho.png",
        "/texturas/nube.png",
      ],
      hero_image: "/restaurantes/buhoCafe/hero.jpg",
      galeria1: "/restaurantes/buhoCafe/galeria1.JPG",
      galeria2: "/restaurantes/buhoCafe/galeria2.JPG",
      galeria3: "/restaurantes/buhoCafe/galeria3.JPG",
      galeria4: "/restaurantes/buhoCafe/galeria4.JPG",
      platillos_image: '/texturas/azul.jpg',
      platillos: [
        {
          image: "/restaurantes/buhoCafe/platillo1.JPG",
          name: "Hot Cakes",
          description: "De cajeta, frutas"
        },
        {
          image: "/restaurantes/buhoCafe/platillo2.JPG",
          name: "Churros",
          description: ""
        },
        {
          image: "/restaurantes/buhoCafe/platillo3.JPG",
          name: "Tapas",
          description: ""
        },
        {
          image: "/restaurantes/buhoCafe/platillo4.JPG",
          name: "Quesadillas",
          description: "Deliciosa tortilla de maíz con queso Oaxaca, acompañada de escabeche de verduras."
        },
        {
          image: "/restaurantes/buhoCafe/platillo5.JPG",
          name: "Torta de Chilaquiles",
          description: "Con huevo"
        },
      ],
      menuSrc: "/restaurantes/buhoCafe/menus",
      tabs: [
        {
          id: "san-cristobal",
          label: "San Cristóbal de las Casas",
          content: "Contenido de la pestaña san cristobal",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.8345465859634!2d-92.64992012484971!3d16.735105284045108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ed456f9e165f59%3A0x80abd43d8bdbc66e!2zQsO6aG8gQ2Fmw6k!5e0!3m2!1ses-419!2smx!4v1711592307036!5m2!1ses-419!2smx",
          direction: "Prolongacion Baja California #1, Col. San Ramón.",
          mail: "info@grupo500noches.com.mx",
          phone: "967-362-7993",
          facebook: "https://facebook.com/buhocafe",
          instagram: "https://instagram.com/buhocafesc",
          tiktok: "",
        },
      ],
      tabs_style: {
        tabs_border: "border-b-solid border-b-2 border-b-gold",
        active_tab: "bg-gold rounded text-white",
        map_border: "border-solid border-3 border-gold"
      },
      comentarios_image: "/texturas/195.jpg",
      comentarios: [
        {
          nombrePersona: "Andrés",
          comentario:
            "Lugar muy bueno para un buen corte, la carne en su punto!...la Heineken bien fría!...buen ambiente, Staff super atento, baños impecables!!..valet parking...ke más puedes pedir?...si te gustan los cortes...este es el lugar!!...felicidades!!",
          tienda: "Mazatlán",
        },
        {
          nombrePersona: "Emilio Gonzalez Fernandez",
          comentario:
            "El lugar está increible, muy buena el ambiente y decoración. La comida de 100... Pidan la crema de tomate asados está espectacular. Tienen una ludoteca super completa para los que tienen niños. Te permite comer tranquilo y que los niños de diviertan. 200% recomendado.",
          tienda: "Mazatlán",
        },
        {
          nombrePersona: "Vic GraDe",
          comentario:
            "Los cortes no tienen madre, exquisitos. No te los puedes perder!! Su mixologia muy buena sin llegar a excelente. La atencion del staff de lo mejor, ambiente y decoración de 10.",
          tienda: "Mazatlán",
        },
      ],
    },
    "merendero-madero": {
      titleFont: "font-black-burger",
      textFont: "font-helvetica",
      name: "Merendero Madero",
      eslogan: <p>Dedicado a la <span className="text-[#C98921]">tradición</span> y a al gente, un punto de <span className="text-[#C98921]">reunión</span> para todos los gustos.</p>,
      colors: {
        1: "text-black",
        2: "text-[#C98921]",
        3: "text-[#849072]",
      },
      srcImagen: "/logos/MerenderoMadero.svg",
      descripcion: <p>Un espacio de diversión, de colores, de amigos, de reuniones, un luagr para la familia y para hacer de él, una tradición. Un espacio que, a través de la sencillez y las costumbres que nos emanan, busca ser un sitio de encuentro para todo tipo de persona.</p>,
      hero_image: "/restaurantes/merendero/hero.jpg",
      galeria1: "/restaurantes/merendero/galeria1.JPG",
      galeria2: "/restaurantes/merendero/galeria2.JPG",
      galeria3: "/restaurantes/merendero/galeria3.JPG",
      galeria4: "/restaurantes/merendero/galeria4.JPG",
      platillos: [
        {
          image: "/restaurantes/merendero/platillo2.jpg",
          name: "Margarita Fresa",
          description: ""
        },
        {
          image: "/restaurantes/merendero/platillo3.jpg",
          name: "Margarita Mango",
          description: ""
        },
        {
          image: "/restaurantes/merendero/platillo4.jpg",
          name: "Nachos Merendero",
          description: "Orden de totopos acompañados con queso cheddar, queso gratinado, carne molida, pico de gallo y jalapeños."
        },
        {
          image: "/restaurantes/merendero/platillo5.jpg",
          name: "Tostada de Pierna",
          description: ""
        },
        {
          image: "/restaurantes/merendero/platillo6.jpg",
          name: "Aguachile Tropic",
          description: "Camarón reposado en limón con pepino, cebolla, cilantro, chile, mango y jícama."
        },
      ],
      platillos_image: '/texturas/papel.jpg',
      menuSrc: "/restaurantes/merendero/menus",
      tabs: [
        {
          id: "madero",
          label: "León",
          content: "Contenido de la pestaña merendero",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.830712869926!2d-101.67562202499109!3d21.119314280552764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbf08799576fd%3A0x8ff78940798e8315!2sMerendero%20Madero!5e0!3m2!1ses-419!2smx!4v1699636372831!5m2!1ses-419!2smx",
          direction: "Francisco I. Madero 835, Centro",
          mail: "info@grupo500noches.com.mx",
          phone: "477-578-2051",
          facebook: "https://facebook.com/merenderomadero",
          instagram: "https://instagram.com/merenderomadero",
          tiktok: "",
        },
      ],
      tabs_style: {
        tabs_border: "border-b-solid border-b-2 border-b-gold",
        active_tab: "bg-gold rounded text-white",
        map_border: "border-solid border-3 border-gold"
      },
      comentarios_image: "/texturas/195.jpg",
      comentarios: [
        {
          nombrePersona: "Cecilia Garcia",
          comentario:
            "Siempre es un lugar al que me gusta ir por lo bonito de sus instalaciones y porque me gusta mucho que puedes pedir, sentarte y elegir de cualquier restaurante que esté dentro del mismo complejo, la comida rica, el ambiente también y  buen servicio, lo único quizás las sillas no tan cómodas para estar más de 4 horas, pero por lo demás todo bien... si quieren ir a comer cecina esta es mi mejor recomendación, reciben TC y efectivo, tienen acceso a silla de ruedas y el estacionamiento es independiente hay que pagar y hay uno al lado y varios cercanos",
          tienda: "León",
        },
        {
          nombrePersona: "Carlos Carrillo",
          comentario:
            "De las mejores opciones para comer si vas en grupo porque hay de todo: pizza, pasta, sushi, hamburguesas, comida mexicana, cervezaz, vino, postres, etc. El ambiente es relajado y la decoración linda. Los precios son rango $, el ticket por persona es de $120-150 y la relación con la calidad es bastante buena. Buen servicio y atención, cualquier mesero te toma la orden de cualquier restaurante. Aceptan tarjeta, no hay opciones veganas pero sí vegetarianas (pocas) y tienen área infantil.",
          tienda: "León",
        },
        {
          nombrePersona: "Fando Parga",
          comentario:
            "Un lugar escondido que alberga en su interior un espacio, relajado y cómodo para tomar una cita o salir con los amigos. Tienen bastante variedad, desde pizza hasta sushi, incluso hay una pequeña área para niños. Los precios son bastantes accesibles y en sabor está bien. Altamente recomendable si andas en el centro de León",
          tienda: "León",
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
