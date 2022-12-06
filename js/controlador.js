var scene = document.getElementById('scene');
console.log(scene);
var parallaxInstance = new Parallax(scene);
console.log(parallaxInstance);
console.log("Parallax listo.");

pedidos = [{
    "id": "39-8567134",
    "nombre_propietario": "Tersina",
    "apellido_propietario": "Tomczak",
    "telefono_propietario": "625-218-7671",
    "direccion_propietario": "271 Chinook Trail",
    "nombre_destinatario": "Skipper",
    "apellido_destinatario": "Mountain",
    "telefono_destinatario": "645-145-4700",
    "direccion_destinatario": "81316 Bobwhite Crossing",
    "estado": "En camino",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "7:29 AM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 4.11,
    "dimensiones": "12x11x23",
    "pagado": true,
    "comentarios": "Entregar a Skipper Mountain, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 4.11, Dimensiones: 12x11x23. ¿El pedido está pagado? = true"
}, {
    "id": "54-4598433",
    "nombre_propietario": "Murielle",
    "apellido_propietario": "Cutmere",
    "telefono_propietario": "459-586-6686",
    "direccion_propietario": "4 Red Cloud Drive",
    "nombre_destinatario": "Brit",
    "apellido_destinatario": "Brownill",
    "telefono_destinatario": "242-428-6486",
    "direccion_destinatario": "39 Corben Avenue",
    "estado": "En conflicto",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "11:50 AM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 65.88,
    "dimensiones": "12x11x23",
    "pagado": true,
    "comentarios": "Entregar a Brit Brownill, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 65.88, Dimensiones: 12x11x23. ¿El pedido está pagado? = true"
}, {
    "id": "96-4657174",
    "nombre_propietario": "Janessa",
    "apellido_propietario": "Atkin",
    "telefono_propietario": "154-740-1954",
    "direccion_propietario": "68334 Manley Trail",
    "nombre_destinatario": "Jorie",
    "apellido_destinatario": "Ashborn",
    "telefono_destinatario": "470-490-0081",
    "direccion_destinatario": "39321 Towne Hill",
    "estado": "Entregado",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "3:46 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 98.48,
    "dimensiones": "2x5x4",
    "pagado": false,
    "comentarios": "Entregar a Jorie Ashborn, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 98.48, Dimensiones: 2x5x4. ¿El pedido está pagado? = false"
}, {
    "id": "36-4404663",
    "nombre_propietario": "Gaby",
    "apellido_propietario": "Proswell",
    "telefono_propietario": "247-344-1803",
    "direccion_propietario": "20 Bultman Road",
    "nombre_destinatario": "Alissa",
    "apellido_destinatario": "Filipson",
    "telefono_destinatario": "811-311-3619",
    "direccion_destinatario": "115 Lake View Center",
    "estado": "En bodega",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "11:19 AM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 74.48,
    "dimensiones": "2x5x4",
    "pagado": true,
    "comentarios": "Entregar a Alissa Filipson, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 74.48, Dimensiones: 2x5x4. ¿El pedido está pagado? = true"
}, {
    "id": "48-5396814",
    "nombre_propietario": "Frayda",
    "apellido_propietario": "Pettiford",
    "telefono_propietario": "268-272-6892",
    "direccion_propietario": "0 Eastlawn Avenue",
    "nombre_destinatario": "Natalee",
    "apellido_destinatario": "MacGorley",
    "telefono_destinatario": "695-288-7583",
    "direccion_destinatario": "70 Westend Road",
    "estado": "En conflicto",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "12:55 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 29.26,
    "dimensiones": "12x11x23",
    "pagado": true,
    "comentarios": "Entregar a Natalee MacGorley, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 29.26, Dimensiones: 12x11x23. ¿El pedido está pagado? = true"
}, {
    "id": "13-0389716",
    "nombre_propietario": "Curcio",
    "apellido_propietario": "MacCrann",
    "telefono_propietario": "714-874-0675",
    "direccion_propietario": "6656 Birchwood Crossing",
    "nombre_destinatario": "Krystyna",
    "apellido_destinatario": "Handsheart",
    "telefono_destinatario": "490-637-9737",
    "direccion_destinatario": "114 Dexter Place",
    "estado": "Entregado",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "5:32 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 89.99,
    "dimensiones": "2x5x4",
    "pagado": false,
    "comentarios": "Entregar a Krystyna Handsheart, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 89.99, Dimensiones: 2x5x4. ¿El pedido está pagado? = false"
}, {
    "id": "61-9019189",
    "nombre_propietario": "Frederique",
    "apellido_propietario": "Menci",
    "telefono_propietario": "479-405-6899",
    "direccion_propietario": "9067 Fallview Way",
    "nombre_destinatario": "Harv",
    "apellido_destinatario": "de la Tremoille",
    "telefono_destinatario": "895-471-5200",
    "direccion_destinatario": "76 Messerschmidt Road",
    "estado": "En conflicto",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "5:52 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 20.7,
    "dimensiones": "2x5x4",
    "pagado": true,
    "comentarios": "Entregar a Harv de la Tremoille, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 20.7, Dimensiones: 2x5x4. ¿El pedido está pagado? = true"
}, {
    "id": "25-5130547",
    "nombre_propietario": "Gae",
    "apellido_propietario": "Rosenkranc",
    "telefono_propietario": "436-600-8122",
    "direccion_propietario": "62401 Morning Avenue",
    "nombre_destinatario": "Hermann",
    "apellido_destinatario": "Blades",
    "telefono_destinatario": "116-880-8035",
    "direccion_destinatario": "87 Kinsman Street",
    "estado": "En conflicto",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "2:24 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 46.53,
    "dimensiones": "2x5x4",
    "pagado": true,
    "comentarios": "Entregar a Hermann Blades, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 46.53, Dimensiones: 2x5x4. ¿El pedido está pagado? = true"
}, {
    "id": "79-1882992",
    "nombre_propietario": "Broddie",
    "apellido_propietario": "Cogzell",
    "telefono_propietario": "397-946-8459",
    "direccion_propietario": "3120 Tennyson Terrace",
    "nombre_destinatario": "Ginni",
    "apellido_destinatario": "Sandwich",
    "telefono_destinatario": "687-124-9886",
    "direccion_destinatario": "0916 Shoshone Court",
    "estado": "En conflicto",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "7:48 AM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 89.15,
    "dimensiones": "2x5x4",
    "pagado": true,
    "comentarios": "Entregar a Ginni Sandwich, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 89.15, Dimensiones: 2x5x4. ¿El pedido está pagado? = true"
}, {
    "id": "70-7527613",
    "nombre_propietario": "Mavis",
    "apellido_propietario": "Swatradge",
    "telefono_propietario": "888-749-9510",
    "direccion_propietario": "817 Sachtjen Circle",
    "nombre_destinatario": "Karie",
    "apellido_destinatario": "Yankin",
    "telefono_destinatario": "675-779-4231",
    "direccion_destinatario": "377 Fairfield Crossing",
    "estado": "En bodega",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "8:21 AM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 26.73,
    "dimensiones": "2x5x4",
    "pagado": true,
    "comentarios": "Entregar a Karie Yankin, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 26.73, Dimensiones: 2x5x4. ¿El pedido está pagado? = true"
}, {
    "id": "12-8775609",
    "nombre_propietario": "Kennie",
    "apellido_propietario": "Skipton",
    "telefono_propietario": "476-527-5522",
    "direccion_propietario": "69586 Straubel Parkway",
    "nombre_destinatario": "Michele",
    "apellido_destinatario": "Stranahan",
    "telefono_destinatario": "706-732-2784",
    "direccion_destinatario": "402 Esch Trail",
    "estado": "En bodega",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "3:11 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 44.62,
    "dimensiones": "12x11x23",
    "pagado": true,
    "comentarios": "Entregar a Michele Stranahan, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 44.62, Dimensiones: 12x11x23. ¿El pedido está pagado? = true"
}, {
    "id": "64-0110123",
    "nombre_propietario": "Edmon",
    "apellido_propietario": "Hedden",
    "telefono_propietario": "253-387-5193",
    "direccion_propietario": "01 Red Cloud Trail",
    "nombre_destinatario": "Julie",
    "apellido_destinatario": "Skitteral",
    "telefono_destinatario": "140-325-4193",
    "direccion_destinatario": "2359 7th Center",
    "estado": "En conflicto",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "4:33 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 63.81,
    "dimensiones": "2x5x4",
    "pagado": false,
    "comentarios": "Entregar a Julie Skitteral, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 63.81, Dimensiones: 2x5x4. ¿El pedido está pagado? = false"
}, {
    "id": "57-3531178",
    "nombre_propietario": "Alleyn",
    "apellido_propietario": "Lacotte",
    "telefono_propietario": "809-206-7982",
    "direccion_propietario": "20 Lunder Point",
    "nombre_destinatario": "Revkah",
    "apellido_destinatario": "Charpin",
    "telefono_destinatario": "793-838-7172",
    "direccion_destinatario": "6186 Straubel Drive",
    "estado": "En conflicto",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "6:07 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 95.32,
    "dimensiones": "2x5x4",
    "pagado": true,
    "comentarios": "Entregar a Revkah Charpin, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 95.32, Dimensiones: 2x5x4. ¿El pedido está pagado? = true"
}, {
    "id": "52-5077788",
    "nombre_propietario": "Farah",
    "apellido_propietario": "Pinching",
    "telefono_propietario": "463-437-0127",
    "direccion_propietario": "9 Blue Bill Park Park",
    "nombre_destinatario": "Ellerey",
    "apellido_destinatario": "Dorsey",
    "telefono_destinatario": "198-657-8586",
    "direccion_destinatario": "7730 Grover Parkway",
    "estado": "En conflicto",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "9:08 AM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 68.71,
    "dimensiones": "12x5x6",
    "pagado": false,
    "comentarios": "Entregar a Ellerey Dorsey, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 68.71, Dimensiones: 12x5x6. ¿El pedido está pagado? = false"
}, {
    "id": "06-7099534",
    "nombre_propietario": "Nickolai",
    "apellido_propietario": "McCumskay",
    "telefono_propietario": "599-310-6264",
    "direccion_propietario": "067 Havey Way",
    "nombre_destinatario": "Graehme",
    "apellido_destinatario": "Jewar",
    "telefono_destinatario": "639-268-1122",
    "direccion_destinatario": "565 Hermina Terrace",
    "estado": "En bodega",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "5:47 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 67.36,
    "dimensiones": "12x11x23",
    "pagado": true,
    "comentarios": "Entregar a Graehme Jewar, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 67.36, Dimensiones: 12x11x23. ¿El pedido está pagado? = true"
}, {
    "id": "74-7894386",
    "nombre_propietario": "Guthrie",
    "apellido_propietario": "Tirte",
    "telefono_propietario": "843-550-5161",
    "direccion_propietario": "7 Sugar Drive",
    "nombre_destinatario": "Shari",
    "apellido_destinatario": "Grayham",
    "telefono_destinatario": "487-671-1967",
    "direccion_destinatario": "9 Anhalt Way",
    "estado": "En conflicto",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "4:28 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 60.4,
    "dimensiones": "2x5x4",
    "pagado": false,
    "comentarios": "Entregar a Shari Grayham, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 60.4, Dimensiones: 2x5x4. ¿El pedido está pagado? = false"
}, {
    "id": "93-5044075",
    "nombre_propietario": "Perry",
    "apellido_propietario": "Sartin",
    "telefono_propietario": "687-835-1726",
    "direccion_propietario": "397 Tennessee Junction",
    "nombre_destinatario": "Thorin",
    "apellido_destinatario": "Cockaday",
    "telefono_destinatario": "362-316-0169",
    "direccion_destinatario": "36 Atwood Point",
    "estado": "Entregado",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "7:02 AM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 50.15,
    "dimensiones": "12x11x23",
    "pagado": true,
    "comentarios": "Entregar a Thorin Cockaday, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 50.15, Dimensiones: 12x11x23. ¿El pedido está pagado? = true"
}, {
    "id": "20-3170335",
    "nombre_propietario": "Pepi",
    "apellido_propietario": "Milne",
    "telefono_propietario": "135-482-5258",
    "direccion_propietario": "5364 Wayridge Road",
    "nombre_destinatario": "Cullie",
    "apellido_destinatario": "Capron",
    "telefono_destinatario": "343-127-4184",
    "direccion_destinatario": "69875 Almo Hill",
    "estado": "En camino",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "10:51 AM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 63.02,
    "dimensiones": "2x5x4",
    "pagado": false,
    "comentarios": "Entregar a Cullie Capron, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 63.02, Dimensiones: 2x5x4. ¿El pedido está pagado? = false"
}, {
    "id": "09-7619251",
    "nombre_propietario": "Fergus",
    "apellido_propietario": "Houlaghan",
    "telefono_propietario": "740-654-4699",
    "direccion_propietario": "98682 Fairview Plaza",
    "nombre_destinatario": "Falito",
    "apellido_destinatario": "Veel",
    "telefono_destinatario": "889-828-5640",
    "direccion_destinatario": "67 Eastwood Trail",
    "estado": "En camino",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "1:40 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 53.03,
    "dimensiones": "12x11x23",
    "pagado": true,
    "comentarios": "Entregar a Falito Veel, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 53.03, Dimensiones: 12x11x23. ¿El pedido está pagado? = true"
}, {
    "id": "81-9847057",
    "nombre_propietario": "Pietra",
    "apellido_propietario": "Gong",
    "telefono_propietario": "287-504-3420",
    "direccion_propietario": "0558 Kedzie Hill",
    "nombre_destinatario": "Kandace",
    "apellido_destinatario": "Brawson",
    "telefono_destinatario": "780-420-3171",
    "direccion_destinatario": "637 Scofield Court",
    "estado": "En camino",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "8:59 AM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 87.46,
    "dimensiones": "12x5x6",
    "pagado": true,
    "comentarios": "Entregar a Kandace Brawson, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 87.46, Dimensiones: 12x5x6. ¿El pedido está pagado? = true"
}, {
    "id": "97-7533626",
    "nombre_propietario": "Elisa",
    "apellido_propietario": "Schwant",
    "telefono_propietario": "984-569-7965",
    "direccion_propietario": "241 Namekagon Way",
    "nombre_destinatario": "Star",
    "apellido_destinatario": "Doohan",
    "telefono_destinatario": "562-510-1371",
    "direccion_destinatario": "178 Miller Street",
    "estado": "En bodega",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "4:48 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 32.31,
    "dimensiones": "2x5x4",
    "pagado": true,
    "comentarios": "Entregar a Star Doohan, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 32.31, Dimensiones: 2x5x4. ¿El pedido está pagado? = true"
}, {
    "id": "78-9672804",
    "nombre_propietario": "Katusha",
    "apellido_propietario": "Hubbard",
    "telefono_propietario": "998-822-1386",
    "direccion_propietario": "67618 Pond Park",
    "nombre_destinatario": "Ardeen",
    "apellido_destinatario": "Tomasicchio",
    "telefono_destinatario": "879-172-4437",
    "direccion_destinatario": "94144 Elka Drive",
    "estado": "En camino",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "10:18 AM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 14.53,
    "dimensiones": "12x5x6",
    "pagado": true,
    "comentarios": "Entregar a Ardeen Tomasicchio, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 14.53, Dimensiones: 12x5x6. ¿El pedido está pagado? = true"
}, {
    "id": "73-4708543",
    "nombre_propietario": "Levey",
    "apellido_propietario": "Burgoin",
    "telefono_propietario": "599-168-7282",
    "direccion_propietario": "05 Swallow Park",
    "nombre_destinatario": "Tabor",
    "apellido_destinatario": "McGiffin",
    "telefono_destinatario": "934-625-6445",
    "direccion_destinatario": "99266 Mcguire Park",
    "estado": "En conflicto",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "3:57 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 14.13,
    "dimensiones": "12x5x6",
    "pagado": false,
    "comentarios": "Entregar a Tabor McGiffin, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 14.13, Dimensiones: 12x5x6. ¿El pedido está pagado? = false"
}, {
    "id": "17-9246868",
    "nombre_propietario": "Flin",
    "apellido_propietario": "Massot",
    "telefono_propietario": "231-167-1203",
    "direccion_propietario": "800 Dryden Junction",
    "nombre_destinatario": "Rudolph",
    "apellido_destinatario": "Pateman",
    "telefono_destinatario": "653-425-0662",
    "direccion_destinatario": "189 Nancy Parkway",
    "estado": "En bodega",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "6:50 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 75.04,
    "dimensiones": "2x5x4",
    "pagado": false,
    "comentarios": "Entregar a Rudolph Pateman, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 75.04, Dimensiones: 2x5x4. ¿El pedido está pagado? = false"
}, {
    "id": "23-5660877",
    "nombre_propietario": "Hershel",
    "apellido_propietario": "Shadfourth",
    "telefono_propietario": "447-891-9430",
    "direccion_propietario": "0 Fuller Lane",
    "nombre_destinatario": "Janetta",
    "apellido_destinatario": "Elesander",
    "telefono_destinatario": "622-742-9337",
    "direccion_destinatario": "219 Bartillon Parkway",
    "estado": "En conflicto",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "2:16 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 42.26,
    "dimensiones": "2x5x4",
    "pagado": true,
    "comentarios": "Entregar a Janetta Elesander, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 42.26, Dimensiones: 2x5x4. ¿El pedido está pagado? = true"
}, {
    "id": "25-4419620",
    "nombre_propietario": "Ludovico",
    "apellido_propietario": "Ziemens",
    "telefono_propietario": "449-674-1980",
    "direccion_propietario": "282 Cordelia Road",
    "nombre_destinatario": "Abner",
    "apellido_destinatario": "Mosedall",
    "telefono_destinatario": "883-833-3179",
    "direccion_destinatario": "93141 Morning Drive",
    "estado": "En conflicto",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "1:42 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 12.36,
    "dimensiones": "12x5x6",
    "pagado": false,
    "comentarios": "Entregar a Abner Mosedall, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 12.36, Dimensiones: 12x5x6. ¿El pedido está pagado? = false"
}, {
    "id": "34-9380693",
    "nombre_propietario": "Diann",
    "apellido_propietario": "Mateos",
    "telefono_propietario": "521-221-4169",
    "direccion_propietario": "6 Orin Court",
    "nombre_destinatario": "Emlynne",
    "apellido_destinatario": "Rosenbarg",
    "telefono_destinatario": "310-278-1588",
    "direccion_destinatario": "69 Transport Hill",
    "estado": "En conflicto",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "1:31 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 15.69,
    "dimensiones": "2x5x4",
    "pagado": true,
    "comentarios": "Entregar a Emlynne Rosenbarg, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 15.69, Dimensiones: 2x5x4. ¿El pedido está pagado? = true"
}, {
    "id": "78-6559854",
    "nombre_propietario": "Raynor",
    "apellido_propietario": "Arnot",
    "telefono_propietario": "806-319-3113",
    "direccion_propietario": "3336 Annamark Avenue",
    "nombre_destinatario": "Maddie",
    "apellido_destinatario": "McSherry",
    "telefono_destinatario": "163-140-9245",
    "direccion_destinatario": "32612 Clemons Road",
    "estado": "En camino",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "2:53 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 73.15,
    "dimensiones": "12x11x23",
    "pagado": true,
    "comentarios": "Entregar a Maddie McSherry, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 73.15, Dimensiones: 12x11x23. ¿El pedido está pagado? = true"
}, {
    "id": "18-7170620",
    "nombre_propietario": "Eleni",
    "apellido_propietario": "Bloxland",
    "telefono_propietario": "426-256-2413",
    "direccion_propietario": "05 Starling Circle",
    "nombre_destinatario": "Lutero",
    "apellido_destinatario": "Van der Mark",
    "telefono_destinatario": "335-868-2563",
    "direccion_destinatario": "190 Corscot Trail",
    "estado": "En conflicto",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "11:44 AM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 18.54,
    "dimensiones": "2x5x4",
    "pagado": true,
    "comentarios": "Entregar a Lutero Van der Mark, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 18.54, Dimensiones: 2x5x4. ¿El pedido está pagado? = true"
}, {
    "id": "65-3954701",
    "nombre_propietario": "Terrie",
    "apellido_propietario": "Rogez",
    "telefono_propietario": "155-656-7194",
    "direccion_propietario": "698 Jackson Trail",
    "nombre_destinatario": "Carleen",
    "apellido_destinatario": "McVeagh",
    "telefono_destinatario": "418-855-1315",
    "direccion_destinatario": "5 Erie Alley",
    "estado": "En bodega",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "1:55 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 50.3,
    "dimensiones": "12x5x6",
    "pagado": false,
    "comentarios": "Entregar a Carleen McVeagh, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 50.3, Dimensiones: 12x5x6. ¿El pedido está pagado? = false"
}, {
    "id": "29-5765187",
    "nombre_propietario": "Teador",
    "apellido_propietario": "MacShirie",
    "telefono_propietario": "749-771-8252",
    "direccion_propietario": "0148 Waxwing Plaza",
    "nombre_destinatario": "Maynord",
    "apellido_destinatario": "Fardy",
    "telefono_destinatario": "746-818-3471",
    "direccion_destinatario": "4716 Sauthoff Crossing",
    "estado": "En camino",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "12:19 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 86.22,
    "dimensiones": "12x11x23",
    "pagado": false,
    "comentarios": "Entregar a Maynord Fardy, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 86.22, Dimensiones: 12x11x23. ¿El pedido está pagado? = false"
}, {
    "id": "83-8702986",
    "nombre_propietario": "Bonnibelle",
    "apellido_propietario": "Oag",
    "telefono_propietario": "878-266-3227",
    "direccion_propietario": "36 Tennyson Hill",
    "nombre_destinatario": "Homere",
    "apellido_destinatario": "Di Baudi",
    "telefono_destinatario": "296-502-9006",
    "direccion_destinatario": "17580 Orin Avenue",
    "estado": "En conflicto",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "5:20 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 65.79,
    "dimensiones": "12x5x6",
    "pagado": false,
    "comentarios": "Entregar a Homere Di Baudi, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 65.79, Dimensiones: 12x5x6. ¿El pedido está pagado? = false"
}, {
    "id": "51-3574245",
    "nombre_propietario": "Silvester",
    "apellido_propietario": "Daverin",
    "telefono_propietario": "295-326-8269",
    "direccion_propietario": "9200 Birchwood Court",
    "nombre_destinatario": "Priscilla",
    "apellido_destinatario": "Baglan",
    "telefono_destinatario": "870-757-5656",
    "direccion_destinatario": "71759 Brickson Park Alley",
    "estado": "En conflicto",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "11:38 AM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 42.97,
    "dimensiones": "12x11x23",
    "pagado": true,
    "comentarios": "Entregar a Priscilla Baglan, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 42.97, Dimensiones: 12x11x23. ¿El pedido está pagado? = true"
}, {
    "id": "54-3224145",
    "nombre_propietario": "Aluin",
    "apellido_propietario": "Monro",
    "telefono_propietario": "859-977-9461",
    "direccion_propietario": "11198 Oakridge Terrace",
    "nombre_destinatario": "Kamila",
    "apellido_destinatario": "Bowstead",
    "telefono_destinatario": "858-888-6575",
    "direccion_destinatario": "86839 Hooker Center",
    "estado": "En camino",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "6:22 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 39.36,
    "dimensiones": "12x11x23",
    "pagado": false,
    "comentarios": "Entregar a Kamila Bowstead, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 39.36, Dimensiones: 12x11x23. ¿El pedido está pagado? = false"
}, {
    "id": "77-8764211",
    "nombre_propietario": "Cassondra",
    "apellido_propietario": "Matuszak",
    "telefono_propietario": "893-445-8487",
    "direccion_propietario": "1 Hagan Center",
    "nombre_destinatario": "Cathleen",
    "apellido_destinatario": "Lardeux",
    "telefono_destinatario": "394-568-0569",
    "direccion_destinatario": "331 Maple Wood Center",
    "estado": "En camino",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "2:09 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 71.02,
    "dimensiones": "2x5x4",
    "pagado": true,
    "comentarios": "Entregar a Cathleen Lardeux, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 71.02, Dimensiones: 2x5x4. ¿El pedido está pagado? = true"
}, {
    "id": "85-2419979",
    "nombre_propietario": "Octavia",
    "apellido_propietario": "Eagleston",
    "telefono_propietario": "505-985-3457",
    "direccion_propietario": "66915 Grayhawk Avenue",
    "nombre_destinatario": "Isabella",
    "apellido_destinatario": "Estrella",
    "telefono_destinatario": "990-770-3448",
    "direccion_destinatario": "24 Dakota Road",
    "estado": "En camino",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "8:46 AM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 38.13,
    "dimensiones": "2x5x4",
    "pagado": false,
    "comentarios": "Entregar a Isabella Estrella, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 38.13, Dimensiones: 2x5x4. ¿El pedido está pagado? = false"
}, {
    "id": "53-7275729",
    "nombre_propietario": "Duff",
    "apellido_propietario": "O'Keenan",
    "telefono_propietario": "430-652-0825",
    "direccion_propietario": "327 Clemons Way",
    "nombre_destinatario": "Jeramey",
    "apellido_destinatario": "Quartermain",
    "telefono_destinatario": "493-747-6793",
    "direccion_destinatario": "68197 Dennis Avenue",
    "estado": "En bodega",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "2:57 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 5.43,
    "dimensiones": "12x11x23",
    "pagado": false,
    "comentarios": "Entregar a Jeramey Quartermain, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 5.43, Dimensiones: 12x11x23. ¿El pedido está pagado? = false"
}, {
    "id": "30-8152360",
    "nombre_propietario": "L;urette",
    "apellido_propietario": "Jickells",
    "telefono_propietario": "426-506-0133",
    "direccion_propietario": "5430 Heath Way",
    "nombre_destinatario": "Randolf",
    "apellido_destinatario": "Espy",
    "telefono_destinatario": "581-208-6891",
    "direccion_destinatario": "951 Meadow Valley Parkway",
    "estado": "Entregado",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "4:51 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 70.15,
    "dimensiones": "12x5x6",
    "pagado": false,
    "comentarios": "Entregar a Randolf Espy, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 70.15, Dimensiones: 12x5x6. ¿El pedido está pagado? = false"
}, {
    "id": "29-3077194",
    "nombre_propietario": "Vinnie",
    "apellido_propietario": "Leverton",
    "telefono_propietario": "831-127-0867",
    "direccion_propietario": "47 Morningstar Park",
    "nombre_destinatario": "Emmery",
    "apellido_destinatario": "Caddens",
    "telefono_destinatario": "842-447-9992",
    "direccion_destinatario": "049 Logan Place",
    "estado": "Entregado",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "7:15 AM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 35.27,
    "dimensiones": "12x5x6",
    "pagado": false,
    "comentarios": "Entregar a Emmery Caddens, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 35.27, Dimensiones: 12x5x6. ¿El pedido está pagado? = false"
}, {
    "id": "82-9700754",
    "nombre_propietario": "Myrta",
    "apellido_propietario": "Noah",
    "telefono_propietario": "626-517-9712",
    "direccion_propietario": "6 Oxford Drive",
    "nombre_destinatario": "Stacia",
    "apellido_destinatario": "Clyburn",
    "telefono_destinatario": "676-456-9652",
    "direccion_destinatario": "2606 Northland Circle",
    "estado": "En camino",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "2:15 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 44.07,
    "dimensiones": "2x5x4",
    "pagado": true,
    "comentarios": "Entregar a Stacia Clyburn, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 44.07, Dimensiones: 2x5x4. ¿El pedido está pagado? = true"
}, {
    "id": "61-1132418",
    "nombre_propietario": "Elias",
    "apellido_propietario": "McAmish",
    "telefono_propietario": "686-806-2067",
    "direccion_propietario": "47 Moose Drive",
    "nombre_destinatario": "Rube",
    "apellido_destinatario": "Affleck",
    "telefono_destinatario": "553-135-4587",
    "direccion_destinatario": "2282 Sugar Court",
    "estado": "En bodega",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "9:53 AM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 76.03,
    "dimensiones": "12x11x23",
    "pagado": true,
    "comentarios": "Entregar a Rube Affleck, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 76.03, Dimensiones: 12x11x23. ¿El pedido está pagado? = true"
}, {
    "id": "70-9707425",
    "nombre_propietario": "Nelie",
    "apellido_propietario": "Stendall",
    "telefono_propietario": "650-421-6299",
    "direccion_propietario": "036 Green Ridge Road",
    "nombre_destinatario": "Fons",
    "apellido_destinatario": "McQuilliam",
    "telefono_destinatario": "633-467-9658",
    "direccion_destinatario": "02335 Transport Avenue",
    "estado": "En camino",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "12:18 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 89.06,
    "dimensiones": "12x11x23",
    "pagado": true,
    "comentarios": "Entregar a Fons McQuilliam, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 89.06, Dimensiones: 12x11x23. ¿El pedido está pagado? = true"
}, {
    "id": "88-8281824",
    "nombre_propietario": "Jessica",
    "apellido_propietario": "Turn",
    "telefono_propietario": "448-853-8109",
    "direccion_propietario": "03 Village Alley",
    "nombre_destinatario": "Kerr",
    "apellido_destinatario": "Puttan",
    "telefono_destinatario": "808-186-6956",
    "direccion_destinatario": "81 Dayton Point",
    "estado": "En camino",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "6:04 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 27.07,
    "dimensiones": "2x5x4",
    "pagado": true,
    "comentarios": "Entregar a Kerr Puttan, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 27.07, Dimensiones: 2x5x4. ¿El pedido está pagado? = true"
}, {
    "id": "04-2710444",
    "nombre_propietario": "Moyra",
    "apellido_propietario": "Tomasutti",
    "telefono_propietario": "139-730-2721",
    "direccion_propietario": "02 Canary Lane",
    "nombre_destinatario": "Gabbie",
    "apellido_destinatario": "Danshin",
    "telefono_destinatario": "751-648-4816",
    "direccion_destinatario": "502 Ohio Trail",
    "estado": "En bodega",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "1:05 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 17.6,
    "dimensiones": "12x11x23",
    "pagado": false,
    "comentarios": "Entregar a Gabbie Danshin, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 17.6, Dimensiones: 12x11x23. ¿El pedido está pagado? = false"
}, {
    "id": "07-7171753",
    "nombre_propietario": "Audra",
    "apellido_propietario": "Rablin",
    "telefono_propietario": "945-680-5346",
    "direccion_propietario": "89705 Nancy Point",
    "nombre_destinatario": "Romy",
    "apellido_destinatario": "Cornewall",
    "telefono_destinatario": "898-190-6900",
    "direccion_destinatario": "805 Muir Circle",
    "estado": "En bodega",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "8:44 AM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 1.74,
    "dimensiones": "12x5x6",
    "pagado": false,
    "comentarios": "Entregar a Romy Cornewall, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 1.74, Dimensiones: 12x5x6. ¿El pedido está pagado? = false"
}, {
    "id": "47-4768839",
    "nombre_propietario": "Devlin",
    "apellido_propietario": "Goodday",
    "telefono_propietario": "884-652-3211",
    "direccion_propietario": "99 Stone Corner Junction",
    "nombre_destinatario": "Carlene",
    "apellido_destinatario": "Arkle",
    "telefono_destinatario": "345-458-7496",
    "direccion_destinatario": "1 Sunbrook Drive",
    "estado": "En bodega",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "3:45 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 23.61,
    "dimensiones": "12x5x6",
    "pagado": true,
    "comentarios": "Entregar a Carlene Arkle, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 23.61, Dimensiones: 12x5x6. ¿El pedido está pagado? = true"
}, {
    "id": "53-3458898",
    "nombre_propietario": "Lockwood",
    "apellido_propietario": "Rawes",
    "telefono_propietario": "931-380-7739",
    "direccion_propietario": "932 Milwaukee Hill",
    "nombre_destinatario": "Kissee",
    "apellido_destinatario": "Offield",
    "telefono_destinatario": "500-539-6873",
    "direccion_destinatario": "9 Pierstorff Avenue",
    "estado": "Entregado",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "3:43 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 63.29,
    "dimensiones": "2x5x4",
    "pagado": true,
    "comentarios": "Entregar a Kissee Offield, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 63.29, Dimensiones: 2x5x4. ¿El pedido está pagado? = true"
}, {
    "id": "11-9491785",
    "nombre_propietario": "Virge",
    "apellido_propietario": "Baseke",
    "telefono_propietario": "723-169-9466",
    "direccion_propietario": "40 Northfield Alley",
    "nombre_destinatario": "Woodie",
    "apellido_destinatario": "Handford",
    "telefono_destinatario": "380-758-6906",
    "direccion_destinatario": "35334 Mallard Pass",
    "estado": "En bodega",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "12:23 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 10.96,
    "dimensiones": "12x5x6",
    "pagado": false,
    "comentarios": "Entregar a Woodie Handford, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 10.96, Dimensiones: 12x5x6. ¿El pedido está pagado? = false"
}, {
    "id": "14-5778188",
    "nombre_propietario": "Daniela",
    "apellido_propietario": "MacHoste",
    "telefono_propietario": "214-869-4063",
    "direccion_propietario": "2868 Blaine Junction",
    "nombre_destinatario": "Court",
    "apellido_destinatario": "Carletto",
    "telefono_destinatario": "896-847-4976",
    "direccion_destinatario": "6767 Brickson Park Lane",
    "estado": "En conflicto",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "10:08 AM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 88.91,
    "dimensiones": "12x11x23",
    "pagado": true,
    "comentarios": "Entregar a Court Carletto, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 88.91, Dimensiones: 12x11x23. ¿El pedido está pagado? = true"
}, {
    "id": "03-8065972",
    "nombre_propietario": "Irvine",
    "apellido_propietario": "Jimeno",
    "telefono_propietario": "169-339-9100",
    "direccion_propietario": "230 Blaine Way",
    "nombre_destinatario": "Maribel",
    "apellido_destinatario": "Rogister",
    "telefono_destinatario": "170-821-6810",
    "direccion_destinatario": "015 Independence Point",
    "estado": "En conflicto",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "6:06 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 55.8,
    "dimensiones": "12x5x6",
    "pagado": true,
    "comentarios": "Entregar a Maribel Rogister, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 55.8, Dimensiones: 12x5x6. ¿El pedido está pagado? = true"
}, {
    "id": "13-7640567",
    "nombre_propietario": "Mikaela",
    "apellido_propietario": "Smurfit",
    "telefono_propietario": "679-436-9175",
    "direccion_propietario": "02620 Oriole Drive",
    "nombre_destinatario": "Josepha",
    "apellido_destinatario": "Harbidge",
    "telefono_destinatario": "926-897-5695",
    "direccion_destinatario": "193 Elgar Circle",
    "estado": "En conflicto",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "2:37 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 44.37,
    "dimensiones": "12x5x6",
    "pagado": false,
    "comentarios": "Entregar a Josepha Harbidge, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 44.37, Dimensiones: 12x5x6. ¿El pedido está pagado? = false"
}, {
    "id": "52-7842812",
    "nombre_propietario": "Dallis",
    "apellido_propietario": "Hardaway",
    "telefono_propietario": "810-422-0880",
    "direccion_propietario": "0 Merry Terrace",
    "nombre_destinatario": "Barbaraanne",
    "apellido_destinatario": "Noel",
    "telefono_destinatario": "622-512-4304",
    "direccion_destinatario": "62217 Ilene Hill",
    "estado": "En conflicto",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "2:39 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 76.07,
    "dimensiones": "2x5x4",
    "pagado": false,
    "comentarios": "Entregar a Barbaraanne Noel, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 76.07, Dimensiones: 2x5x4. ¿El pedido está pagado? = false"
}, {
    "id": "28-6049457",
    "nombre_propietario": "Fredrika",
    "apellido_propietario": "Kubala",
    "telefono_propietario": "592-129-5839",
    "direccion_propietario": "93 Caliangt Court",
    "nombre_destinatario": "Teressa",
    "apellido_destinatario": "Reneke",
    "telefono_destinatario": "469-405-4196",
    "direccion_destinatario": "23 Arapahoe Way",
    "estado": "Entregado",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "10:40 AM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 45.66,
    "dimensiones": "2x5x4",
    "pagado": true,
    "comentarios": "Entregar a Teressa Reneke, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 45.66, Dimensiones: 2x5x4. ¿El pedido está pagado? = true"
}, {
    "id": "56-3664689",
    "nombre_propietario": "Miran",
    "apellido_propietario": "Griffithe",
    "telefono_propietario": "774-440-4106",
    "direccion_propietario": "1 Debra Alley",
    "nombre_destinatario": "Virgina",
    "apellido_destinatario": "Gillam",
    "telefono_destinatario": "917-136-8833",
    "direccion_destinatario": "3 Scoville Court",
    "estado": "Entregado",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "3:04 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 84.31,
    "dimensiones": "2x5x4",
    "pagado": true,
    "comentarios": "Entregar a Virgina Gillam, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 84.31, Dimensiones: 2x5x4. ¿El pedido está pagado? = true"
}, {
    "id": "89-9807506",
    "nombre_propietario": "Bartholomeus",
    "apellido_propietario": "Dufoure",
    "telefono_propietario": "808-248-8101",
    "direccion_propietario": "0 Starling Circle",
    "nombre_destinatario": "Zora",
    "apellido_destinatario": "Ricoald",
    "telefono_destinatario": "605-967-1811",
    "direccion_destinatario": "4 Sage Pass",
    "estado": "En camino",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "11:42 AM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 74.45,
    "dimensiones": "12x5x6",
    "pagado": true,
    "comentarios": "Entregar a Zora Ricoald, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 74.45, Dimensiones: 12x5x6. ¿El pedido está pagado? = true"
}, {
    "id": "80-4642462",
    "nombre_propietario": "Wren",
    "apellido_propietario": "Pile",
    "telefono_propietario": "286-755-2345",
    "direccion_propietario": "685 American Center",
    "nombre_destinatario": "Winonah",
    "apellido_destinatario": "Lindsell",
    "telefono_destinatario": "204-289-2614",
    "direccion_destinatario": "185 Doe Crossing Place",
    "estado": "En bodega",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "11:07 AM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 82.98,
    "dimensiones": "12x11x23",
    "pagado": true,
    "comentarios": "Entregar a Winonah Lindsell, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 82.98, Dimensiones: 12x11x23. ¿El pedido está pagado? = true"
}, {
    "id": "68-3131196",
    "nombre_propietario": "Patti",
    "apellido_propietario": "McNea",
    "telefono_propietario": "447-346-4717",
    "direccion_propietario": "77 Daystar Drive",
    "nombre_destinatario": "Phoebe",
    "apellido_destinatario": "Farrans",
    "telefono_destinatario": "466-750-2185",
    "direccion_destinatario": "27890 5th Point",
    "estado": "En bodega",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "1:28 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 73.6,
    "dimensiones": "12x5x6",
    "pagado": true,
    "comentarios": "Entregar a Phoebe Farrans, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 73.6, Dimensiones: 12x5x6. ¿El pedido está pagado? = true"
}, {
    "id": "58-8531341",
    "nombre_propietario": "Wini",
    "apellido_propietario": "Skayman",
    "telefono_propietario": "172-549-1704",
    "direccion_propietario": "592 Schmedeman Road",
    "nombre_destinatario": "Dunstan",
    "apellido_destinatario": "Marham",
    "telefono_destinatario": "424-330-0235",
    "direccion_destinatario": "448 Sundown Avenue",
    "estado": "En conflicto",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "1:37 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 53.19,
    "dimensiones": "12x5x6",
    "pagado": true,
    "comentarios": "Entregar a Dunstan Marham, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 53.19, Dimensiones: 12x5x6. ¿El pedido está pagado? = true"
}, {
    "id": "04-8996342",
    "nombre_propietario": "Conny",
    "apellido_propietario": "Prestedge",
    "telefono_propietario": "780-582-0629",
    "direccion_propietario": "78 Susan Street",
    "nombre_destinatario": "Gavrielle",
    "apellido_destinatario": "Lawranson",
    "telefono_destinatario": "618-284-2451",
    "direccion_destinatario": "61615 Vera Pass",
    "estado": "Entregado",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "7:42 AM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 31.85,
    "dimensiones": "2x5x4",
    "pagado": false,
    "comentarios": "Entregar a Gavrielle Lawranson, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 31.85, Dimensiones: 2x5x4. ¿El pedido está pagado? = false"
}, {
    "id": "26-8633479",
    "nombre_propietario": "Teriann",
    "apellido_propietario": "Fenby",
    "telefono_propietario": "373-752-5751",
    "direccion_propietario": "512 Delaware Point",
    "nombre_destinatario": "Wilek",
    "apellido_destinatario": "Jollie",
    "telefono_destinatario": "210-252-0620",
    "direccion_destinatario": "30584 Elka Lane",
    "estado": "Entregado",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "3:07 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 85.49,
    "dimensiones": "2x5x4",
    "pagado": false,
    "comentarios": "Entregar a Wilek Jollie, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 85.49, Dimensiones: 2x5x4. ¿El pedido está pagado? = false"
}, {
    "id": "73-3968773",
    "nombre_propietario": "Berty",
    "apellido_propietario": "Ingleson",
    "telefono_propietario": "586-138-1344",
    "direccion_propietario": "3 Sachtjen Place",
    "nombre_destinatario": "Lars",
    "apellido_destinatario": "Wilbud",
    "telefono_destinatario": "643-898-2952",
    "direccion_destinatario": "9506 Monica Point",
    "estado": "Entregado",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "1:29 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 84.64,
    "dimensiones": "2x5x4",
    "pagado": true,
    "comentarios": "Entregar a Lars Wilbud, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 84.64, Dimensiones: 2x5x4. ¿El pedido está pagado? = true"
}, {
    "id": "20-1949385",
    "nombre_propietario": "Simonette",
    "apellido_propietario": "Lunge",
    "telefono_propietario": "943-956-5923",
    "direccion_propietario": "944 Marcy Point",
    "nombre_destinatario": "Sher",
    "apellido_destinatario": "Dix",
    "telefono_destinatario": "240-617-6113",
    "direccion_destinatario": "5785 Knutson Point",
    "estado": "En bodega",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "3:39 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 12.21,
    "dimensiones": "12x11x23",
    "pagado": false,
    "comentarios": "Entregar a Sher Dix, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 12.21, Dimensiones: 12x11x23. ¿El pedido está pagado? = false"
}, {
    "id": "76-7476217",
    "nombre_propietario": "Fayre",
    "apellido_propietario": "Haddon",
    "telefono_propietario": "559-506-3421",
    "direccion_propietario": "97 Talisman Parkway",
    "nombre_destinatario": "Cassaundra",
    "apellido_destinatario": "Jobbins",
    "telefono_destinatario": "550-895-7548",
    "direccion_destinatario": "3998 Stephen Drive",
    "estado": "En conflicto",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "2:04 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 43.53,
    "dimensiones": "2x5x4",
    "pagado": true,
    "comentarios": "Entregar a Cassaundra Jobbins, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 43.53, Dimensiones: 2x5x4. ¿El pedido está pagado? = true"
}, {
    "id": "49-7309235",
    "nombre_propietario": "Way",
    "apellido_propietario": "McCarthy",
    "telefono_propietario": "875-495-8868",
    "direccion_propietario": "68252 Hoffman Lane",
    "nombre_destinatario": "Tracey",
    "apellido_destinatario": "Newcom",
    "telefono_destinatario": "504-671-5330",
    "direccion_destinatario": "093 Granby Junction",
    "estado": "En conflicto",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "8:44 AM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 99.03,
    "dimensiones": "12x11x23",
    "pagado": true,
    "comentarios": "Entregar a Tracey Newcom, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 99.03, Dimensiones: 12x11x23. ¿El pedido está pagado? = true"
}, {
    "id": "49-4189736",
    "nombre_propietario": "Oralie",
    "apellido_propietario": "Souza",
    "telefono_propietario": "448-102-7752",
    "direccion_propietario": "25963 Morning Point",
    "nombre_destinatario": "Greta",
    "apellido_destinatario": "Emblow",
    "telefono_destinatario": "321-112-1637",
    "direccion_destinatario": "11568 Goodland Junction",
    "estado": "En conflicto",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "3:30 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 79.17,
    "dimensiones": "2x5x4",
    "pagado": true,
    "comentarios": "Entregar a Greta Emblow, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 79.17, Dimensiones: 2x5x4. ¿El pedido está pagado? = true"
}, {
    "id": "88-3022745",
    "nombre_propietario": "Cirstoforo",
    "apellido_propietario": "Brideaux",
    "telefono_propietario": "646-253-0879",
    "direccion_propietario": "975 Loftsgordon Parkway",
    "nombre_destinatario": "Jacqueline",
    "apellido_destinatario": "Ivoshin",
    "telefono_destinatario": "753-975-6325",
    "direccion_destinatario": "18309 Laurel Trail",
    "estado": "En camino",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "5:11 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 67.12,
    "dimensiones": "12x11x23",
    "pagado": false,
    "comentarios": "Entregar a Jacqueline Ivoshin, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 67.12, Dimensiones: 12x11x23. ¿El pedido está pagado? = false"
}, {
    "id": "31-4402471",
    "nombre_propietario": "Hyatt",
    "apellido_propietario": "Christmas",
    "telefono_propietario": "506-763-3835",
    "direccion_propietario": "0967 Haas Drive",
    "nombre_destinatario": "Alisun",
    "apellido_destinatario": "Sedcole",
    "telefono_destinatario": "572-886-5148",
    "direccion_destinatario": "27184 Dorton Place",
    "estado": "En bodega",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "12:04 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 79.16,
    "dimensiones": "12x5x6",
    "pagado": false,
    "comentarios": "Entregar a Alisun Sedcole, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 79.16, Dimensiones: 12x5x6. ¿El pedido está pagado? = false"
}, {
    "id": "84-2462591",
    "nombre_propietario": "Ulises",
    "apellido_propietario": "Flippen",
    "telefono_propietario": "916-160-9166",
    "direccion_propietario": "00 Texas Park",
    "nombre_destinatario": "Sheila",
    "apellido_destinatario": "Wildgoose",
    "telefono_destinatario": "180-537-6746",
    "direccion_destinatario": "5089 Miller Way",
    "estado": "Entregado",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "4:34 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 88.3,
    "dimensiones": "2x5x4",
    "pagado": false,
    "comentarios": "Entregar a Sheila Wildgoose, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 88.3, Dimensiones: 2x5x4. ¿El pedido está pagado? = false"
}, {
    "id": "84-5596143",
    "nombre_propietario": "Arturo",
    "apellido_propietario": "Dillway",
    "telefono_propietario": "486-881-1694",
    "direccion_propietario": "22 Killdeer Terrace",
    "nombre_destinatario": "Marleen",
    "apellido_destinatario": "Mc Andrew",
    "telefono_destinatario": "105-940-3661",
    "direccion_destinatario": "2933 Garrison Lane",
    "estado": "En camino",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "6:07 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 73.1,
    "dimensiones": "12x11x23",
    "pagado": true,
    "comentarios": "Entregar a Marleen Mc Andrew, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 73.1, Dimensiones: 12x11x23. ¿El pedido está pagado? = true"
}, {
    "id": "41-9723088",
    "nombre_propietario": "Selina",
    "apellido_propietario": "Winslade",
    "telefono_propietario": "268-894-2868",
    "direccion_propietario": "9135 Londonderry Junction",
    "nombre_destinatario": "Johnnie",
    "apellido_destinatario": "Mort",
    "telefono_destinatario": "781-855-0349",
    "direccion_destinatario": "39448 Forest Run Court",
    "estado": "En bodega",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "1:10 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 56.71,
    "dimensiones": "12x11x23",
    "pagado": false,
    "comentarios": "Entregar a Johnnie Mort, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 56.71, Dimensiones: 12x11x23. ¿El pedido está pagado? = false"
}, {
    "id": "48-4371308",
    "nombre_propietario": "Micaela",
    "apellido_propietario": "Korn",
    "telefono_propietario": "571-791-9407",
    "direccion_propietario": "20213 Waubesa Point",
    "nombre_destinatario": "Silvan",
    "apellido_destinatario": "Pettegre",
    "telefono_destinatario": "127-774-8932",
    "direccion_destinatario": "00 Warrior Lane",
    "estado": "En bodega",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "6:09 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 23.86,
    "dimensiones": "12x11x23",
    "pagado": true,
    "comentarios": "Entregar a Silvan Pettegre, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 23.86, Dimensiones: 12x11x23. ¿El pedido está pagado? = true"
}, {
    "id": "55-3403953",
    "nombre_propietario": "Lombard",
    "apellido_propietario": "Pantecost",
    "telefono_propietario": "134-687-9523",
    "direccion_propietario": "4 Truax Circle",
    "nombre_destinatario": "Cherilyn",
    "apellido_destinatario": "Ambrosio",
    "telefono_destinatario": "406-929-8356",
    "direccion_destinatario": "00382 Delaware Crossing",
    "estado": "En bodega",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "2:11 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 71.12,
    "dimensiones": "12x11x23",
    "pagado": true,
    "comentarios": "Entregar a Cherilyn Ambrosio, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 71.12, Dimensiones: 12x11x23. ¿El pedido está pagado? = true"
}, {
    "id": "08-7524333",
    "nombre_propietario": "Raviv",
    "apellido_propietario": "Tomblings",
    "telefono_propietario": "289-404-9575",
    "direccion_propietario": "93265 Carey Plaza",
    "nombre_destinatario": "Marylin",
    "apellido_destinatario": "Hardey",
    "telefono_destinatario": "616-871-4333",
    "direccion_destinatario": "385 Westport Circle",
    "estado": "Entregado",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "1:28 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 21.45,
    "dimensiones": "12x5x6",
    "pagado": false,
    "comentarios": "Entregar a Marylin Hardey, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 21.45, Dimensiones: 12x5x6. ¿El pedido está pagado? = false"
}, {
    "id": "96-3795481",
    "nombre_propietario": "Shoshana",
    "apellido_propietario": "Corgenvin",
    "telefono_propietario": "279-100-5839",
    "direccion_propietario": "5758 Kingsford Avenue",
    "nombre_destinatario": "Arlyne",
    "apellido_destinatario": "Rudinger",
    "telefono_destinatario": "768-120-6506",
    "direccion_destinatario": "9 Moose Point",
    "estado": "En bodega",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "12:11 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 82.24,
    "dimensiones": "12x11x23",
    "pagado": true,
    "comentarios": "Entregar a Arlyne Rudinger, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 82.24, Dimensiones: 12x11x23. ¿El pedido está pagado? = true"
}, {
    "id": "76-9984633",
    "nombre_propietario": "Tory",
    "apellido_propietario": "Ikins",
    "telefono_propietario": "913-945-8909",
    "direccion_propietario": "418 Crescent Oaks Pass",
    "nombre_destinatario": "Terrill",
    "apellido_destinatario": "Trodler",
    "telefono_destinatario": "448-868-1029",
    "direccion_destinatario": "12 2nd Street",
    "estado": "En bodega",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "5:13 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 16.43,
    "dimensiones": "2x5x4",
    "pagado": true,
    "comentarios": "Entregar a Terrill Trodler, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 16.43, Dimensiones: 2x5x4. ¿El pedido está pagado? = true"
}, {
    "id": "82-5191872",
    "nombre_propietario": "Bogart",
    "apellido_propietario": "Pinnere",
    "telefono_propietario": "389-278-4092",
    "direccion_propietario": "53 Chive Plaza",
    "nombre_destinatario": "Minny",
    "apellido_destinatario": "Crunkhurn",
    "telefono_destinatario": "988-126-8262",
    "direccion_destinatario": "08 Hoard Terrace",
    "estado": "En camino",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "12:04 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 93.6,
    "dimensiones": "12x11x23",
    "pagado": false,
    "comentarios": "Entregar a Minny Crunkhurn, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 93.6, Dimensiones: 12x11x23. ¿El pedido está pagado? = false"
}, {
    "id": "34-3566177",
    "nombre_propietario": "Dayna",
    "apellido_propietario": "Climar",
    "telefono_propietario": "307-870-2646",
    "direccion_propietario": "8 Kensington Avenue",
    "nombre_destinatario": "Gayel",
    "apellido_destinatario": "Father",
    "telefono_destinatario": "644-853-2693",
    "direccion_destinatario": "25 Arapahoe Court",
    "estado": "En bodega",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "5:56 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 17.31,
    "dimensiones": "12x11x23",
    "pagado": true,
    "comentarios": "Entregar a Gayel Father, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 17.31, Dimensiones: 12x11x23. ¿El pedido está pagado? = true"
}, {
    "id": "92-9851024",
    "nombre_propietario": "Lolly",
    "apellido_propietario": "Rosenberger",
    "telefono_propietario": "964-710-6669",
    "direccion_propietario": "17 Pleasure Lane",
    "nombre_destinatario": "Carmel",
    "apellido_destinatario": "Mitroshinov",
    "telefono_destinatario": "532-185-6018",
    "direccion_destinatario": "848 Bunker Hill Terrace",
    "estado": "En conflicto",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "12:53 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 82.67,
    "dimensiones": "12x5x6",
    "pagado": false,
    "comentarios": "Entregar a Carmel Mitroshinov, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 82.67, Dimensiones: 12x5x6. ¿El pedido está pagado? = false"
}, {
    "id": "99-7078123",
    "nombre_propietario": "Barney",
    "apellido_propietario": "Alexsandrovich",
    "telefono_propietario": "504-898-4007",
    "direccion_propietario": "65338 Pine View Pass",
    "nombre_destinatario": "Elita",
    "apellido_destinatario": "Pallant",
    "telefono_destinatario": "372-682-7779",
    "direccion_destinatario": "477 Elka Lane",
    "estado": "En bodega",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "3:06 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 3.5,
    "dimensiones": "12x11x23",
    "pagado": true,
    "comentarios": "Entregar a Elita Pallant, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 3.5, Dimensiones: 12x11x23. ¿El pedido está pagado? = true"
}, {
    "id": "48-8439910",
    "nombre_propietario": "Frederick",
    "apellido_propietario": "McCullum",
    "telefono_propietario": "101-568-0408",
    "direccion_propietario": "7573 Linden Way",
    "nombre_destinatario": "Neddie",
    "apellido_destinatario": "Jotcham",
    "telefono_destinatario": "416-245-7202",
    "direccion_destinatario": "9204 Sunfield Alley",
    "estado": "En conflicto",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "8:58 AM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 94.76,
    "dimensiones": "12x11x23",
    "pagado": false,
    "comentarios": "Entregar a Neddie Jotcham, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 94.76, Dimensiones: 12x11x23. ¿El pedido está pagado? = false"
}, {
    "id": "78-2575462",
    "nombre_propietario": "Meryl",
    "apellido_propietario": "Sincock",
    "telefono_propietario": "463-776-3926",
    "direccion_propietario": "358 Fair Oaks Alley",
    "nombre_destinatario": "Ekaterina",
    "apellido_destinatario": "Sabben",
    "telefono_destinatario": "262-293-6497",
    "direccion_destinatario": "356 Green Trail",
    "estado": "En bodega",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "2:35 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 61.32,
    "dimensiones": "12x5x6",
    "pagado": false,
    "comentarios": "Entregar a Ekaterina Sabben, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 61.32, Dimensiones: 12x5x6. ¿El pedido está pagado? = false"
}, {
    "id": "84-3610624",
    "nombre_propietario": "Dalenna",
    "apellido_propietario": "Loyd",
    "telefono_propietario": "253-684-3804",
    "direccion_propietario": "0574 Almo Circle",
    "nombre_destinatario": "Malcolm",
    "apellido_destinatario": "Mustarde",
    "telefono_destinatario": "157-896-1561",
    "direccion_destinatario": "21998 Hoffman Crossing",
    "estado": "En conflicto",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "5:04 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 29.49,
    "dimensiones": "12x5x6",
    "pagado": false,
    "comentarios": "Entregar a Malcolm Mustarde, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 29.49, Dimensiones: 12x5x6. ¿El pedido está pagado? = false"
}, {
    "id": "34-1129027",
    "nombre_propietario": "Cordie",
    "apellido_propietario": "Waleran",
    "telefono_propietario": "314-871-5932",
    "direccion_propietario": "3 Monument Alley",
    "nombre_destinatario": "Ilaire",
    "apellido_destinatario": "Reditt",
    "telefono_destinatario": "188-248-0283",
    "direccion_destinatario": "2 South Avenue",
    "estado": "En bodega",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "10:55 AM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 74.57,
    "dimensiones": "2x5x4",
    "pagado": false,
    "comentarios": "Entregar a Ilaire Reditt, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 74.57, Dimensiones: 2x5x4. ¿El pedido está pagado? = false"
}, {
    "id": "33-2544363",
    "nombre_propietario": "Trenna",
    "apellido_propietario": "Quarton",
    "telefono_propietario": "718-690-7108",
    "direccion_propietario": "2 Anhalt Street",
    "nombre_destinatario": "Fenelia",
    "apellido_destinatario": "Stoad",
    "telefono_destinatario": "252-579-8506",
    "direccion_destinatario": "33 Dwight Hill",
    "estado": "Entregado",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "2:18 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 30.07,
    "dimensiones": "2x5x4",
    "pagado": true,
    "comentarios": "Entregar a Fenelia Stoad, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 30.07, Dimensiones: 2x5x4. ¿El pedido está pagado? = true"
}, {
    "id": "07-4173103",
    "nombre_propietario": "Hanna",
    "apellido_propietario": "Scarisbrick",
    "telefono_propietario": "254-628-0844",
    "direccion_propietario": "24 American Drive",
    "nombre_destinatario": "Tammie",
    "apellido_destinatario": "Gerin",
    "telefono_destinatario": "920-731-1538",
    "direccion_destinatario": "02050 Sullivan Hill",
    "estado": "En conflicto",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "12:35 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 53.1,
    "dimensiones": "12x11x23",
    "pagado": false,
    "comentarios": "Entregar a Tammie Gerin, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 53.1, Dimensiones: 12x11x23. ¿El pedido está pagado? = false"
}, {
    "id": "65-9510039",
    "nombre_propietario": "Ollie",
    "apellido_propietario": "Kiff",
    "telefono_propietario": "664-898-7999",
    "direccion_propietario": "075 Gina Hill",
    "nombre_destinatario": "Maurice",
    "apellido_destinatario": "Murford",
    "telefono_destinatario": "517-690-5215",
    "direccion_destinatario": "71831 Buell Junction",
    "estado": "Entregado",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "12:53 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 7.77,
    "dimensiones": "12x5x6",
    "pagado": true,
    "comentarios": "Entregar a Maurice Murford, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 7.77, Dimensiones: 12x5x6. ¿El pedido está pagado? = true"
}, {
    "id": "03-0089104",
    "nombre_propietario": "Nicola",
    "apellido_propietario": "Baxendale",
    "telefono_propietario": "299-987-7091",
    "direccion_propietario": "51 Sloan Terrace",
    "nombre_destinatario": "Dillon",
    "apellido_destinatario": "Halstead",
    "telefono_destinatario": "666-711-3652",
    "direccion_destinatario": "9 Upham Parkway",
    "estado": "Entregado",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "9:51 AM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 7.33,
    "dimensiones": "12x11x23",
    "pagado": true,
    "comentarios": "Entregar a Dillon Halstead, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 7.33, Dimensiones: 12x11x23. ¿El pedido está pagado? = true"
}, {
    "id": "11-1352744",
    "nombre_propietario": "Sandra",
    "apellido_propietario": "Brombell",
    "telefono_propietario": "736-241-7427",
    "direccion_propietario": "1 Maywood Park",
    "nombre_destinatario": "Otho",
    "apellido_destinatario": "Kunkler",
    "telefono_destinatario": "738-974-1006",
    "direccion_destinatario": "8 Milwaukee Way",
    "estado": "En bodega",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "1:41 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 84.34,
    "dimensiones": "12x11x23",
    "pagado": false,
    "comentarios": "Entregar a Otho Kunkler, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 84.34, Dimensiones: 12x11x23. ¿El pedido está pagado? = false"
}, {
    "id": "87-3434500",
    "nombre_propietario": "Sandie",
    "apellido_propietario": "Holsey",
    "telefono_propietario": "116-233-7527",
    "direccion_propietario": "952 Acker Hill",
    "nombre_destinatario": "Zolly",
    "apellido_destinatario": "Keeping",
    "telefono_destinatario": "238-860-7682",
    "direccion_destinatario": "8 Macpherson Drive",
    "estado": "Entregado",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "11:37 AM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 64.53,
    "dimensiones": "12x5x6",
    "pagado": true,
    "comentarios": "Entregar a Zolly Keeping, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 64.53, Dimensiones: 12x5x6. ¿El pedido está pagado? = true"
}, {
    "id": "36-2786221",
    "nombre_propietario": "Donall",
    "apellido_propietario": "O'Fihillie",
    "telefono_propietario": "258-741-3348",
    "direccion_propietario": "0 Farragut Park",
    "nombre_destinatario": "Micaela",
    "apellido_destinatario": "Clerc",
    "telefono_destinatario": "418-622-5548",
    "direccion_destinatario": "271 Lotheville Center",
    "estado": "En conflicto",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "6:44 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 43.74,
    "dimensiones": "12x5x6",
    "pagado": false,
    "comentarios": "Entregar a Micaela Clerc, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 43.74, Dimensiones: 12x5x6. ¿El pedido está pagado? = false"
}, {
    "id": "85-9588429",
    "nombre_propietario": "Che",
    "apellido_propietario": "Yedy",
    "telefono_propietario": "795-661-4379",
    "direccion_propietario": "18 Northfield Plaza",
    "nombre_destinatario": "Florie",
    "apellido_destinatario": "Scawton",
    "telefono_destinatario": "883-351-7978",
    "direccion_destinatario": "7947 Gale Trail",
    "estado": "En camino",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "1:41 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 58.35,
    "dimensiones": "12x11x23",
    "pagado": false,
    "comentarios": "Entregar a Florie Scawton, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 58.35, Dimensiones: 12x11x23. ¿El pedido está pagado? = false"
}, {
    "id": "99-3680684",
    "nombre_propietario": "Maddalena",
    "apellido_propietario": "McTrustie",
    "telefono_propietario": "237-353-9637",
    "direccion_propietario": "8480 Esch Street",
    "nombre_destinatario": "Aurora",
    "apellido_destinatario": "Fewings",
    "telefono_destinatario": "806-630-6715",
    "direccion_destinatario": "72 Luster Street",
    "estado": "Entregado",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "8:37 AM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 89.02,
    "dimensiones": "12x5x6",
    "pagado": false,
    "comentarios": "Entregar a Aurora Fewings, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 89.02, Dimensiones: 12x5x6. ¿El pedido está pagado? = false"
}, {
    "id": "01-3382340",
    "nombre_propietario": "Rea",
    "apellido_propietario": "Phateplace",
    "telefono_propietario": "292-494-2703",
    "direccion_propietario": "303 Grasskamp Hill",
    "nombre_destinatario": "Dore",
    "apellido_destinatario": "Caws",
    "telefono_destinatario": "466-443-1513",
    "direccion_destinatario": "5 Straubel Parkway",
    "estado": "Entregado",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "4:24 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 10.02,
    "dimensiones": "12x5x6",
    "pagado": true,
    "comentarios": "Entregar a Dore Caws, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 10.02, Dimensiones: 12x5x6. ¿El pedido está pagado? = true"
}, {
    "id": "73-5617936",
    "nombre_propietario": "Julie",
    "apellido_propietario": "Padgham",
    "telefono_propietario": "523-100-4560",
    "direccion_propietario": "595 Chinook Junction",
    "nombre_destinatario": "Magda",
    "apellido_destinatario": "Newcome",
    "telefono_destinatario": "949-430-3310",
    "direccion_destinatario": "86694 Derek Pass",
    "estado": "En bodega",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "11:44 AM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 91.19,
    "dimensiones": "12x5x6",
    "pagado": false,
    "comentarios": "Entregar a Magda Newcome, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 91.19, Dimensiones: 12x5x6. ¿El pedido está pagado? = false"
}, {
    "id": "91-2426748",
    "nombre_propietario": "Flori",
    "apellido_propietario": "Seally",
    "telefono_propietario": "101-428-7587",
    "direccion_propietario": "16586 Walton Road",
    "nombre_destinatario": "Anny",
    "apellido_destinatario": "Stoke",
    "telefono_destinatario": "297-722-6516",
    "direccion_destinatario": "54 Kipling Street",
    "estado": "En bodega",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "5:07 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 97.16,
    "dimensiones": "12x5x6",
    "pagado": true,
    "comentarios": "Entregar a Anny Stoke, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 97.16, Dimensiones: 12x5x6. ¿El pedido está pagado? = true"
}, {
    "id": "62-8680758",
    "nombre_propietario": "Ax",
    "apellido_propietario": "Dugall",
    "telefono_propietario": "195-654-6363",
    "direccion_propietario": "2795 Ryan Plaza",
    "nombre_destinatario": "Elvina",
    "apellido_destinatario": "Gue",
    "telefono_destinatario": "452-896-3780",
    "direccion_destinatario": "47 Petterle Point",
    "estado": "En camino",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "6:31 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 49.34,
    "dimensiones": "12x11x23",
    "pagado": false,
    "comentarios": "Entregar a Elvina Gue, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 49.34, Dimensiones: 12x11x23. ¿El pedido está pagado? = false"
}, {
    "id": "94-4720475",
    "nombre_propietario": "Crawford",
    "apellido_propietario": "Rumbelow",
    "telefono_propietario": "469-314-3888",
    "direccion_propietario": "011 Acker Road",
    "nombre_destinatario": "Nert",
    "apellido_destinatario": "Swett",
    "telefono_destinatario": "268-254-0028",
    "direccion_destinatario": "314 Prentice Street",
    "estado": "Entregado",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "5:26 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 84.37,
    "dimensiones": "12x5x6",
    "pagado": false,
    "comentarios": "Entregar a Nert Swett, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 84.37, Dimensiones: 12x5x6. ¿El pedido está pagado? = false"
}, {
    "id": "75-5436263",
    "nombre_propietario": "Gianni",
    "apellido_propietario": "Moring",
    "telefono_propietario": "494-771-4547",
    "direccion_propietario": "25025 Waxwing Parkway",
    "nombre_destinatario": "Tully",
    "apellido_destinatario": "Soigoux",
    "telefono_destinatario": "262-955-9646",
    "direccion_destinatario": "226 Myrtle Lane",
    "estado": "En conflicto",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "1:32 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 33.26,
    "dimensiones": "12x11x23",
    "pagado": false,
    "comentarios": "Entregar a Tully Soigoux, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 33.26, Dimensiones: 12x11x23. ¿El pedido está pagado? = false"
}, {
    "id": "43-0182487",
    "nombre_propietario": "Codie",
    "apellido_propietario": "Copelli",
    "telefono_propietario": "376-794-2447",
    "direccion_propietario": "6646 Mariners Cove Lane",
    "nombre_destinatario": "Ashely",
    "apellido_destinatario": "Fidelus",
    "telefono_destinatario": "518-380-2193",
    "direccion_destinatario": "48537 Redwing Parkway",
    "estado": "En bodega",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "1:31 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "C.O.D.",
    "peso": 63.17,
    "dimensiones": "12x5x6",
    "pagado": false,
    "comentarios": "Entregar a Ashely Fidelus, antes de la fecha 12/2/2022. Tipo de envío C.O.D., Peso: 63.17, Dimensiones: 12x5x6. ¿El pedido está pagado? = false"
}, {
    "id": "24-8580854",
    "nombre_propietario": "Reade",
    "apellido_propietario": "Fillon",
    "telefono_propietario": "644-794-0353",
    "direccion_propietario": "9 Hallows Terrace",
    "nombre_destinatario": "Ricki",
    "apellido_destinatario": "Ritelli",
    "telefono_destinatario": "761-961-7924",
    "direccion_destinatario": "95714 Pleasure Alley",
    "estado": "En camino",
    "fecha_bodega": "12/1/2022",
    "hora_bodega": "12:40 PM",
    "fecha_limite": "12/2/2022",
    "tipo_envio": "Estándar",
    "peso": 19.0,
    "dimensiones": "2x5x4",
    "pagado": true,
    "comentarios": "Entregar a Ricki Ritelli, antes de la fecha 12/2/2022. Tipo de envío Estándar, Peso: 19.0, Dimensiones: 2x5x4. ¿El pedido está pagado? = true"
}]

function sh_rastreo (){
    document.getElementById("sec-1").style.display = "none";
    document.getElementById("sec-2").style.display = "none";
    document.getElementById("sec-3").style.display = "none";
    document.getElementById("sec-4").style.display = "block";
}

function rastrearPedido() {
    var encontrado = false;

    numGuia = document.getElementById("guia-input").value
    if (numGuia === null) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '¡No has ingresado un número de guía!',
        })
    } else {
        pedidos.forEach(pedido  => {
            console.log(typeof pedido.id)
            console.log(typeof numGuia)
            if (pedido.id === numGuia) {
                console.log("Encontrado")
                document.getElementById("guia-info").innerHTML = `
                 <div class="input-group my-3 d-flex flex-column text-start">
                            <p class="mb-0 fw-bold text-dark">Estado: <span class="fw-normal" id="guia_estado">${pedido.estado}</span></p>
                            <p class="mb-0 fw-bold text-dark">Nombre Propietario: <span class="fw-normal" id="nombre_propietario">${pedido.nombre_propietario} ${pedido.apellido_propietario}</span></p>
                            <p class="mb-0 fw-bold text-dark">Teléfono Propietario: <span class="fw-normal" id="tel_propietario">${pedido.telefono_propietario}</span></p>
                            <p class="mb-0 fw-bold text-dark">Dirección Propietario: <span class="fw-normal" id="dir_propietario">${pedido.direccion_propietario}</span></p>
                            <p class="mb-0 fw-bold text-dark">Nombre Destinatario: <span class="fw-normal" id="nombre_dest">${pedido.nombre_destinatario} ${pedido.apellido_destinatario}</span></p>
                            <p class="mb-0 fw-bold text-dark">Dirección Destinatario: <span class="fw-normal" id="dir_dest">${pedido.telefono_destinatario}</span></p>
                            <p class="mb-0 fw-bold text-dark">Fecha Bodega: <span class="fw-normal" id="fecha_bodega">${pedido.fecha_bodega}</span></p>                         
                            <p class="mb-0 fw-bold text-dark">Hora Bodega: <span class="fw-normal" id="hora_bodega">${pedido.hora_bodega}</span></p>
                            <p class="mb-0 fw-bold text-dark">Fecha Límite Entrega: <span class="fw-normal" id="fecha_lim">${pedido.fecha_limite}</span></p>
                            <p class="mb-0 fw-bold text-dark">Tipo Envío: <span class="fw-normal" id="tipo_envio">${pedido.tipo_envio}</span></p>
                            <p class="mb-0 fw-bold text-dark">Peso: <span class="fw-normal" id="peso_orden">${pedido.peso}</span></p>
                            <p class="mb-0 fw-bold text-dark">Dimensiones: <span class="fw-normal" id="dim">${pedido.dimensiones}</span></p>
                            <p class="mb-0 fw-bold text-dark">Pagado: <span class="fw-normal" id="pagado">${pedido.pagado ? "Sí" : "No"}</span></p>
                            <p class="mb-0 fw-bold text-dark">Comentarios : <span class="fw-normal" id="com">${pedido.comentarios}</span></p>
                        </div>`
                encontrado = true
                return true
            }
        })
        if (!encontrado) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡No se ha encontrado el número de guía!',
            })
        }
    }
}




var sesion_iniciada = false

function facebook () {
    window.open("https://www.facebook.com/profile.php?id=100070947710040","_blank");
}

function instagram () {
    window.open("https://www.instagram.com/","_blank");
}

function twitter () {
    window.open("https://twitter.com/","_blank");
}

function youtube () {
    window.open("https://www.youtube.com/","_blank");
}


function registrar () {

}


function iniciarSesion () {
    sesion_iniciada = true
    document.getElementById("sec-1").style.display = "none";
    sesionIniciada();
    document.getElementById("nav-acciones").innerHTML = `<li class="nav-item" id="cierre-sesion">
                    <a class="nav-link color-link" aria-current="page" onclick="cargarAcciones()">Cerrar Sesión</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link color-link" href="#" tabindex="-1" aria-disabled="true" onclick="trabajaConNosotros()">Trabaja con nosotros</a>
                </li>
                <li class="nav-item dropdown navI1">
                    <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdownMenuLink" role="button"
                       data-bs-toggle="dropdown" aria-expanded="false">
                        Redes sociales
                    </a>
                    <ul class="dropdown-menu bg-custom2" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item text-light"
                               href="https://www.facebook.com/SmartMarket-105036392025665/">Facebook</a></li>
                        <li><a class="dropdown-item text-light" href="https://twitter.com/SmartMarketHn">Twitter</a>
                        </li>
                        <li><a class="dropdown-item text-light" href="https://www.instagram.com/__smartmarket__/">Instagram</a>
                        </li>
                        <li><a class="dropdown-item text-light"
                               href="https://www.youtube.com/channel/UCLIBZHe3GFknl-S9F4lBGvA">Youtube</a></li>
                    </ul>
                </li>`
}


function cargarAcciones () {
    sesion_iniciada = false
    document.getElementById("sec-2").style.display = "none";
    document.getElementById("sec-3").style.display = "none";
    document.getElementById("sec-4").style.display = "none";
    document.getElementById("sec-1").style.display = "block";


    document.getElementById("nav-acciones").innerHTML = `
   <li class="nav-item">
                    <a class="nav-link color-link" aria-current="page" onclick="cargarAcciones()">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link color-link" onclick="servicios()">Servicios</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link color-link" onclick="sh_rastreo()">Rastrear pedido</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link color-link" href="#" tabindex="-1" aria-disabled="true" onclick="trabajaConNosotros()">Trabaja con nosotros</a>
                </li>
                <li class="nav-item dropdown navI1">
                    <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdownMenuLink" role="button"
                       data-bs-toggle="dropdown" aria-expanded="false">
                        Redes sociales
                    </a>
                    <ul class="dropdown-menu bg-custom2" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item text-light"
                               href="https://www.facebook.com/SmartMarket-105036392025665/">Facebook</a></li>
                        <li><a class="dropdown-item text-light" href="https://twitter.com/SmartMarketHn">Twitter</a>
                        </li>
                        <li><a class="dropdown-item text-light" href="https://www.instagram.com/__smartmarket__/">Instagram</a>
                        </li>
                        <li><a class="dropdown-item text-light"
                               href="https://www.youtube.com/channel/UCLIBZHe3GFknl-S9F4lBGvA">Youtube</a></li>
                    </ul>
                </li>`

}


cargarAcciones();

mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaW9ubWJjIiwiYSI6ImNsYTdvazZyeDAyMnUzcHAydnVnM2c4cXAifQ.7ZvWxaq47EkfPY-LUOA7zw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-87.1857, 14.0656],
    zoom: 14,
});

const size = 200;

// This implements `StyleImageInterface`
// to draw a pulsing dot icon on the map.
const pulsingDot = {
    width: size,
    height: size,
    data: new Uint8Array(size * size * 4),

// Cuando se carga el mapa se dibuja el icono pulsante
    onAdd: function () {
        const canvas = document.createElement('canvas');
        canvas.width = this.width;
        canvas.height = this.height;
        this.context = canvas.getContext('2d');
    },

// LLamar a la función de dibujo
    render: function () {
        const duration = 1000;
        const t = (performance.now() % duration) / duration;

        const radius = (size / 2) * 0.3;
        const outerRadius = (size / 2) * 0.7 * t + radius;
        const context = this.context;

// Dibuja el circulo exterior
        context.clearRect(0, 0, this.width, this.height);
        context.beginPath();
        context.arc(
            this.width / 2,
            this.height / 2,
            outerRadius,
            0,
            Math.PI * 2
        );
        context.fillStyle = `rgba(255, 200, 200, ${1 - t})`;
        context.fill();

// Draw the inner circle.
        context.beginPath();
        context.arc(
            this.width / 2,
            this.height / 2,
            radius,
            0,
            Math.PI * 2
        );
        context.fillStyle = 'rgba(255, 100, 100, 1)';
        context.strokeStyle = 'white';
        context.lineWidth = 2 + 4 * (1 - t);
        context.fill();
        context.stroke();

// Update this image's data with data from the canvas.
        this.data = context.getImageData(
            0,
            0,
            this.width,
            this.height
        ).data;

// Continuously repaint the map, resulting
// in the smooth animation of the dot.
        map.triggerRepaint();

// Return `true` to let the map know that the image was updated.
        return true;
    }
};

map.on('load', () => {
    map.addImage('pulsing-dot', pulsingDot, { pixelRatio: 2 });

    map.addSource('dot-point', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-87.1857, 14.0656] // icon position [lng, lat]
                    }
                }
            ]
        }
    });
    map.addLayer({
        'id': 'layer-with-pulsing-dot',
        'type': 'symbol',
        'source': 'dot-point',
        'layout': {
            'icon-image': 'pulsing-dot'
        }
    });
});



function servicios() {
    document.getElementById("sec-1").style.display = "none";
    document.getElementById("sec-3").style.display = "none";
    document.getElementById("sec-4").style.display = "none";
    document.getElementById("sec-2").style.display = "block";
}

function trabajaConNosotros() {
    document.getElementById("sec-1").style.display = "none";
    document.getElementById("sec-2").style.display = "none";
    document.getElementById("sec-4").style.display = "none";
    document.getElementById("sec-3").style.display = "block";
}

document.getElementById("btn-work").addEventListener("click", alerta);

function alerta () {
    Swal.fire(
        '¡Formulario enviado!',
        '¡Nos estaremos comunicando contigo!',
        'success'
    )

    cargarAcciones()
}




