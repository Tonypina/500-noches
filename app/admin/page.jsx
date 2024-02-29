"use client"

import React, { useState } from "react";

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
import {columns} from "./data";
import {capitalize} from "./utils";
import useUsers from "../hooks/useUsers";

const INITIAL_VISIBLE_COLUMNS = ["name", "email", "actions"];

export default function Admin() {
    const [filterValue, setFilterValue] = React.useState("");
    const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
    const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [sortDescriptor, setSortDescriptor] = React.useState({
        column: "age",
        direction: "ascending",
    });
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [isFilled, setIsFilled] = useState(false);

    const { 
        users,
        singleUser,
        setSingleUser,
        loading, 
        singleLoading, 
        error, 
        handleAddNewUser, 
        handleDropUser, 
        handleReadUser, 
        handleUpdateUser 
    } = useUsers();

    const [type, setType] = useState("new");

    const [newUser, setNewUser] = React.useState({
        name: '',
        email: '',
        password: '',
    });

    const [page, setPage] = React.useState(1);

    const pages = Math.ceil(users.length / rowsPerPage);

    const hasSearchFilter = Boolean(filterValue);

    const headerColumns = React.useMemo(() => {
        if (visibleColumns === "all") return columns;

        return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
    }, [visibleColumns]);

    const filteredItems = React.useMemo(() => {
        let filteredusers = [...users];

        if (hasSearchFilter) {
        filteredusers = filteredusers.filter((position) =>
            position.position.toLowerCase().includes(filterValue.toLowerCase()),
        )}

        return filteredusers;
    }, [users, filterValue, hasSearchFilter]);

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

    const renderCell = React.useCallback((user, columnKey) => {
        const cellValue = user[columnKey];

        switch (columnKey) {
        case "name":
            return (
            <user
                avatarProps={{radius: "full", size: "sm", src: user.avatar}}
                classNames={{
                description: "text-default-500",
                }}
                description={user.email}
                name={cellValue}
            >
                {user.email}
            </user>
            );
        case "role":
            return (
            <div className="flex flex-col">
                <p className="text-bold text-small capitalize">{cellValue}</p>
                <p className="text-bold text-tiny capitalize text-default-500">{user.team}</p>
            </div>
            );
        case "status":
            return (
            <Chip
                className="capitalize border-none gap-1 text-default-600"
                color={statusColorMap[user.status]}
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
                    <DropdownItem onClick={async () => {
                    setType("read");
                    await handleReadUser(user.id)
                    onOpen()
                    }}>Ver</DropdownItem>
                    <DropdownItem onClick={async () => {
                    setType("update");
                    await handleReadUser(user.id)
                    onOpen()
                    }}>Editar</DropdownItem>
                    <DropdownItem onClick={() => handleDropUser(user.id)}>Eliminar</DropdownItem>
                </DropdownMenu>
                </Dropdown>
            </div>
            );
        default:
            return cellValue;
        }
    }, [handleDropUser, handleReadUser, onOpen]);

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
        <>
            <h2 className="flex-col text-main text-md md:text-lg font-bold pt-5">
                Administración de <span className="text-gold">usuarios</span>
            </h2>
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
                    onClick={() => {
                        setType("new")
                        onOpen()
                    }}
                    >
                    Agregar nuevo
                    </Button>
                </div>
                </div>
                <div className="flex justify-between items-center">
                <span className="text-default-400 text-small">Usuarios totales: {users.length}</span>
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
        </>
        );
    }, [
        filterValue,
        visibleColumns,
        onSearchChange,
        onRowsPerPageChange,
        users.length,
        onOpen
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

        const handleInputValue = (index) => {
        if (type === "new")
            return newUser[index]

        return singleUser[index]
        }

        const handleInputOnChange = (e, index) => {
        if (type === "new")
            setNewUser({...newUser, [index]: e.target.value})
        else 
            setSingleUser({...singleUser, [index]: e.target.value})  
        }

        const handleSubmit = () => {
        if (type === "new")
            handleAddNewUser(newUser, setNewUser)

        if (type === "update")
            handleUpdateUser(singleUser)
        } 

        return (
        <main className=" p-20">

            <Modal className="p-6" isOpen={isOpen} onOpenChange={onOpenChange} title="Nuevo Usuario">
                { !singleLoading && (
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">
                        {type === "new" && (
                        <>Agregar Nuevo Usuario</>
                        )}
                        {type === "read" && (
                        <>Detalles Del Usuario</>
                        )}
                        {type === "update" && (
                        <>Editar Usuario</>
                        )}
                    </ModalHeader>
                    
                    <Input
                    className="mb-4"
                        disabled={type === "read"}
                        autoFocus
                        variant="bordered"
                        label="Nombre"
                        placeholder="Ingrese el nombre"
                        value={handleInputValue("name")}
                        onChange={(e) => handleInputOnChange(e, "name")}
                    />
                    <Input
                    className="mb-4"
                        disabled={type === "read"}
                        autoFocus
                        variant="bordered"
                        label="Correo Electrónico"
                        placeholder="Ingrese el email"
                        value={handleInputValue("email")}
                        onChange={(e) => handleInputOnChange(e, "email")}
                    />
                    <Input
                    className="mb-4"
                        disabled={type === "read"}
                        autoFocus
                        variant="bordered"
                        label="Contraseña"
                        placeholder="Ingrese la contraseña"
                        value={handleInputValue("password")}
                        onChange={(e) => handleInputOnChange(e, "password")}
                    />

                    <ModalFooter>
                        <Button color="danger" onClick={() => {
                        setNewUser({
                            name: '',
                            email: '',
                            password: ''
                        });
                        
                        onClose()
                        }}>Cancelar</Button>
                        <Button disabled={type === "read"} onClick={() => {
                        handleSubmit()
                        onClose()
                        }}>Guardar Usuario</Button>
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
                )}
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
