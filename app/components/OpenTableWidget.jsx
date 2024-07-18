import { useEffect } from 'react';

const OpenTableWidget = ({ tabId, openTableSrc }) => {
  useEffect(() => {
    // Creamos el elemento div contenedor del widget
    const container = document.createElement('div');
    container.id = `opentable-widget-container-${tabId}`; // ID único basado en la pestaña

    // Creamos el elemento script del widget
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = openTableSrc;
    script.async = true;

    // Agregamos el script al contenedor
    container.appendChild(script);

    // Buscamos el contenedor de la pestaña actual y agregamos el widget
    const tabContainer = document.getElementById(`opentable-widget-container-${tabId}`);
    if (tabContainer) {
      tabContainer.appendChild(container);
    }

    // Limpiamos el contenedor al desmontar el componente
    return () => {
      if (tabContainer) {
        tabContainer.removeChild(container);
      }
    };
  }, [tabId]);

  return <div id={`opentable-widget-container-${tabId}`} className=''/>;
};

export default OpenTableWidget;
