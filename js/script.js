const bitacora = [
    {
        id:1,
        titulo: 'Registro',
        detalles: {
            hora: '10:00 AM',
            fecha: '10 de agosto de 2023',
            campos: {
                anterior: [],
                actual: {
                    id: 1,
                    nombres: 'Juan',
                    apellidos: 'Hernandez'
                }
            }
        },
        descripcion: 'Se ingresaron nuevos datos en la tabla persona'

    },
    {
        id:1,
        titulo: 'ModificaciÃ³n',
        detalles: {
            hora: '10:00 AM',
            fecha: '10 de agosto de 2023',
            campos: {
                anterior: [
                    {
                        id: 1,
                        nombres: 'Juan',
                        apellidos: 'Hernandez'
                    }
                ],
                actual: {
                    id: 1,
                    nombres: 'Juann Carlos',
                    apellidos: 'Hernandez'
                }
            }
        },
        descripcion: 'Se modificaron datos en la tabla persona'

    }
]