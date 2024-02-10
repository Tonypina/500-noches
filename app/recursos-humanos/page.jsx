"use client"

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Textarea,
  Input,
  Modal,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  useDisclosure,
  ModalHeader,
  ModalContent,
  ModalFooter,
} from "@nextui-org/react";

import {PlusIcon} from "../icons/PlusIcon";
import {VerticalDotsIcon} from "../icons/VerticalDotsIcon";
import {SearchIcon} from "../icons/SearchIcon";
import {ChevronDownIcon} from "../icons/ChevronDownIcon";
import {columns, restaurantOptions, locationOptions} from "./data";
import {capitalize} from "./utils";
import useVacants from "../hooks/useVacants";

const INITIAL_VISIBLE_COLUMNS = ["position", "location", "restaurant", "actions"];

export default function RecursosHumanos() {
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
  const [restaurantFilter, setRestaurantFilter] = React.useState("all");
  const [locationFilter, setLocationFilter] = React.useState("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: "age",
    direction: "ascending",
  });
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const { vacants, loading, error } = useVacants();

  const [newVacant, setNewVacant] = React.useState({
    position: '',
    location: '',
    restaurant: '',
    description: '',
  });

  const [page, setPage] = React.useState(1);

  const pages = Math.ceil(vacants.length / rowsPerPage);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredvacants = [...vacants];

    if (hasSearchFilter) {
      filteredvacants = filteredvacants.filter((position) =>
        position.position.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }
    if (restaurantFilter !== "all" && Array.from(restaurantFilter).length !== restaurantOptions.length) {
      filteredvacants = filteredvacants.filter((position) =>
        Array.from(restaurantFilter).includes(position.restaurant),
      );
    }
    if (locationFilter !== "all" && Array.from(locationFilter).length !== locationOptions.length) {
      filteredvacants = filteredvacants.filter((position) =>
        Array.from(locationFilter).includes(position.location),
      );
    }

    return filteredvacants;
  }, [vacants, filterValue, restaurantFilter, locationFilter]);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((position, columnKey) => {
    const cellValue = position[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <position
            avatarProps={{radius: "full", size: "sm", src: position.avatar}}
            classNames={{
              description: "text-default-500",
            }}
            description={position.email}
            name={cellValue}
          >
            {position.email}
          </position>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
            <p className="text-bold text-tiny capitalize text-default-500">{position.team}</p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize border-none gap-1 text-default-600"
            color={statusColorMap[position.status]}
            size="sm"
            variant="dot"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex justify-end items-center gap-2">
            <Dropdown className="bg-background border-1 border-default-200">
              <DropdownTrigger>
                <Button isIconOnly radius="full" size="sm" variant="light">
                  <VerticalDotsIcon className="text-default-400" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem>Ver</DropdownItem>
                <DropdownItem>Editar</DropdownItem>
                <DropdownItem>Eliminar</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onRowsPerPageChange = React.useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);


  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);


  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            classNames={{
              base: "w-full sm:max-w-[44%]",
              inputWrapper: "border-1",
            }}
            placeholder="Búsqueda por nombre..."
            size="sm"
            startContent={<SearchIcon className="text-default-300" />}
            value={filterValue}
            variant="bordered"
            onClear={() => setFilterValue("")}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  size="sm"
                  variant="flat"
                >
                  Ubicación
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={locationFilter}
                selectionMode="multiple"
                onSelectionChange={setLocationFilter}
              >
                {locationOptions.map((location) => (
                  <DropdownItem key={location.uid} className="capitalize">
                    {capitalize(location.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  size="sm"
                  variant="flat"
                >
                  Restaurantes
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={restaurantFilter}
                selectionMode="multiple"
                onSelectionChange={setRestaurantFilter}
              >
                {restaurantOptions.map((restaurant) => (
                  <DropdownItem key={restaurant.uid} className="capitalize">
                    {capitalize(restaurant.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  size="sm"
                  variant="flat"
                >
                  Columnas
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Button
              className="bg-foreground text-background"
              endContent={<PlusIcon />}
              size="sm"
              onClick={onOpen}
            >
              Agregar nuevo
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">Vacantes totales: {vacants.length}</span>
          <label className="flex items-center text-default-400 text-small">
            Filas por página:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    restaurantFilter,
    locationFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    vacants.length,
    hasSearchFilter,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <Pagination
          showControls
          classNames={{
            cursor: "bg-foreground text-background",
          }}
          color="default"
          isDisabled={hasSearchFilter}
          page={page}
          total={pages}
          variant="light"
          onChange={setPage}
        />
        <span className="text-small text-default-400">
          {selectedKeys === "all"
            ? "Todos los items seleccionados"
            : `${selectedKeys.size} de ${items.length} seleccionados`}
        </span>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  const classNames = React.useMemo(
    () => ({
      wrapper: ["max-h-[382px]", "max-w-3xl"],
      th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
      td: [
        // changing the rows border radius
        // first
        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[first=true]:last:before:rounded-none",
        // middle
        "group-data-[middle=true]:before:rounded-none",
        // last
        "group-data-[last=true]:first:before:rounded-none",
        "group-data-[last=true]:last:before:rounded-none",
      ],
    }),
    [],
  );

  const handleAddNewVacant = async () => {

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
        console.log(response);

        setNewVacant({
          position: '',
          location: '',
          restaurant: '',
          description: ''
        });
      })
  };

  return (
    <main className=" p-20">

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

        { !loading && (
          <Table
          isCompact
          removeWrapper
          aria-label="Example table with custom cells, pagination and sorting"
          bottomContent={bottomContent}
          bottomContentPlacement="outside"
          checkboxesProps={{
              classNames: {
              wrapper: "after:bg-foreground after:text-background text-background",
              },
          }}
          classNames={classNames}
          selectedKeys={selectedKeys}
          selectionMode="multiple"
          sortDescriptor={sortDescriptor}
          topContent={topContent}
          topContentPlacement="outside"
          onSelectionChange={setSelectedKeys}
          onSortChange={setSortDescriptor}
          >
          <TableHeader columns={headerColumns}>
              {(column) => (
              <TableColumn
                  key={column.uid}
                  align={column.uid === "actions" ? "center" : "start"}
                  allowsSorting={column.sortable}
              >
                  {column.name}
              </TableColumn>
              )}
          </TableHeader>
          <TableBody emptyContent={"No se encontraron vacantes "} items={sortedItems}>
              {(item) => (
              <TableRow key={item.id}>
                  {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
              </TableRow>
              )}
          </TableBody>
          </Table>
        )}
    </main>
  );
}
