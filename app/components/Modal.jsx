<Modal className="p-6" isOpen={isOpen} onOpenChange={onOpenChange} title="Nueva Vacante">
 
  <ModalContent>
  {(onClose) => (
    <>
      <ModalHeader className="flex flex-col gap-1">
        Agregar Nueva Vacante
      </ModalHeader>
      
      <Input
      className="mb-4"
        autoFocus
        variant="bordered"
        label="Posición"
        placeholder="Ingrese la posición"
        value={newVacant.position}
        onChange={(e) => setNewVacant({...newVacant, position: e.target.value})}
      />
      <Input
      className="mb-4"
        autoFocus
        variant="bordered"
        label="Ubicación"
        placeholder="Ingrese la ubicación"
        value={newVacant.location}
        onChange={(e) => setNewVacant({...newVacant, location: e.target.value})}
      />
      <Input
      className="mb-4"
        autoFocus
        variant="bordered"
        label="Restaurante"
        placeholder="Ingrese el nombre del restaurante"
        value={newVacant.restaurant}
        onChange={(e) => setNewVacant({...newVacant, restaurant: e.target.value})}
      />
      <Textarea
      className="mb-4"
        autoFocus
        variant="bordered"
        label="Descripción"
        placeholder="Ingrese la descripción de la vacante"
        value={newVacant.description}
        onChange={(e) => setNewVacant({...newVacant, description: e.target.value})}
      />
      <ModalFooter>
        <Button color="danger" onClick={() => {
          setNewVacant({
            position: '',
            location: '',
            restaurant: '',
            description: ''
          });
          
          onClose()
        }}>Cancelar</Button>
        <Button onClick={handleAddNewVacant}>Guardar Vacante</Button>
      </ModalFooter>
    </>
  )}
  </ModalContent>
</Modal>