// Datos de las provincias y restaurantes
const provincesData = [
  {
    id: 'capinota',
    name: 'Capinota',
    image: 'https://i.ibb.co/FbVJMG3T/557628007-18079672975993153-8546013523933081595-n.jpg',
    description: 'Descubre los mejores restaurantes de Capinota',
    restaurants: [
      {
        id: 'cap1',
        name: 'Balneario Restaurant Wasa Mayu',
        location: 'Capinota',
        locationUrl: 'https://maps.app.goo.gl/rLTLL9gWFu88qwYo9',
        schedule: 'Domingos y Feriados',
        hours: '9:00 AM - 6:00 PM',
        image: 'https://i.ibb.co/RGN3Yhcw/Whats-App-Image-2025-10-12-at-22-29-04.jpg',
        menu: [
          { name: 'Pique Macho', price: '40/80' },
          { name: 'Charque', price: '40/80' },
          { name: 'Planchita', price: '50/100' },
          { name: 'Chuleta', price: '18/20' }
        ]
      },
      {
        id: 'cap4',
        name: 'La Casona del Buen Gusto',
        location: 'Capinota - Urbanización Los Álamos',
        schedule: 'Domingos y Feriados',
        hours: '10:00 AM - 6:00 PM',
        image: 'https://images.unsplash.com/photo-1593844686522-419da891349a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMHJlc3RhdXJhbnR8ZW58MHx8fHwxNzYwMzQ3OTU4fDA&ixlib=rb-4.1.0&q=85',
        menu: [
          { name: 'Pique', price: 80 },
          { name: 'Charque', price: 100 },
          { name: 'Planchita', price: 100 },
          { name: 'Broaster de Pacú', price: 70 },
          { name: 'Pato', price: 100 },
          { name: 'Lambreado de Conejo', price: 100 },
          { name: 'Chancho a la Caja China', price: 100 }
        ]
      },
      {
        id: 'cap5',
        name: 'Restaurant Doña Nancy',
        location: 'Capinota',
        schedule: 'Lunes a Domingo',
        hours: 'L-S: 8:00 AM - 9:00 PM | Dom: 3:00 PM - 9:00 PM',
        image: 'https://i.ibb.co/tM00cNBG/Whats-App-Image-2025-10-08-at-23-25-59.jpg',
        menu: [
          { name: 'Caldos (8AM-11AM): Kawi, Changa, Patas', price: 'Var.' },
          { name: 'Almuerzo Completo (11:30AM-1:30PM)', price: 'Var.' },
          { name: 'Pollo Spiedo (3PM-9PM)', price: 'Var.' },
          { name: 'Pollo Broaster (3PM-9PM)', price: 'Var.' }
        ]
      },
      {
        id: 'cap6',
        name: 'Restaurant Madis',
        location: 'Capinota',
        schedule: 'Lunes a Domingo',
        hours: '7:00 AM - 6:00 PM',
        image: 'https://images.unsplash.com/photo-1638043139484-1534e2c14bcb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHxib2xpdmlhbiUyMHRyYWRpdGlvbmFsJTIwZm9vZHxlbnwwfHx8fDE3NjAzNDc5NTJ8MA&ixlib=rb-4.1.0&q=85',
        menu: [
          { name: 'Almuerzo Completo (7AM-3PM)', price: 'Var.' },
          { name: 'Asado (12PM-6PM)', price: 25 },
          { name: 'Chuleta (12PM-6PM)', price: 25 },
          { name: 'Milanesa (12PM-6PM)', price: 20 },
          { name: 'Silpancho (12PM-6PM)', price: 20 },
          { name: 'Pescado/Cabañita/Paichi', price: 'Var.' },
          { name: 'Pollo a la Plancha', price: 'Var.' }
        ]
      },
      {
        id: 'cap7',
        name: 'Pensión',
        location: 'Capinota',
        schedule: 'Lunes a Domingo',
        hours: '10:30 AM - 10:00 PM',
        image: 'https://images.unsplash.com/photo-1569072412439-e8cd5d6f22df?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHw0fHxib2xpdmlhbiUyMHRyYWRpdGlvbmFsJTIwZm9vZHxlbnwwfHx8fDE3NjAzNDc5NTJ8MA&ixlib=rb-4.1.0&q=85',
        menu: [
          { name: 'Pollo Broaster', price: '14/20' }
        ]
      },
      {
        id: 'cap8',
        name: 'Pollos Locos',
        location: 'Capinota',
        schedule: 'Martes a Domingo',
        hours: '5:00 PM - 12:00 AM',
        image: 'https://images.pexels.com/photos/34271463/pexels-photo-34271463.jpeg',
        menu: [
          { name: 'Pollo Broaster', price: '15/30/120' },
          { name: 'Pollo Spiedo', price: '15/30/120' },
          { name: 'Pizzas', price: '45/55/70' },
          { name: 'Pizza Loco', price: 80 },
          { name: 'Área de Juegos', price: '✓' }
        ]
      },
    ]
  },
  {
    id: 'sicaya',
    name: 'Sicaya',
    image: 'https://i.ibb.co/bMVfVDtt/469233134-1139491847616448-8951907966568680331-n.jpg',
    description: 'Disfruta de la gastronomía de Sicaya',
    restaurants: [
      {
        id: 'sic1',
        name: 'Pensión Doña Emiliana',
        location: 'Orcoma',
        locationUrl: 'https://maps.app.goo.gl/?link=https://www.google.com/maps/search/Pensi%C3%B3n+Do%C3%B1a+Emiliana+Orcoma',
        schedule: 'Lunes a Viernes',
        hours: '10:00 AM - 8:00 PM',
        image: 'https://images.unsplash.com/photo-1569072412439-e8cd5d6f22df',
        menu: [
          { name: 'Picante de Pollo', price: 15 },
          { name: 'Saice', price: 15 },
          { name: 'Lenteja', price: 15 }
        ]
      },
      {
        id: 'sic2',
        name: 'Pensión Doña Lilian',
        location: 'Sicaya',
        locationUrl: 'https://maps.app.goo.gl/?link=https://www.google.com/maps/search/Pensi%C3%B3n+Do%C3%B1a+Lilian+Sicaya',
        schedule: 'Lunes a Viernes',
        hours: '4:00 PM - 9:30 PM',
        image: 'https://images.pexels.com/photos/34271463/pexels-photo-34271463.jpeg',
        menu: [
          { name: 'Pollo Broaster', price: 15 }
        ]
      }
    ]
  },
  {
    id: 'santivanes',
    name: 'Santivañes',
    image: 'https://i.ibb.co/9HqPhpqB/maxresdefault.jpg',
    description: 'Explora los sabores de Santivañes',
    restaurants: [
      {
        id: 'san3',
        name: 'Pensión Doña Candi',
        location: 'Santivañes',
        schedule: 'Lunes a Sábado: 11:00 AM - 2:00 PM | Domingos: 10:00 AM - 6:00 PM',
        hours: 'Horarios especiales por día',
        image: 'https://images.unsplash.com/photo-1569072412439-e8cd5d6f22df?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHw0fHxib2xpdmlhbiUyMHRyYWRpdGlvbmFsJTIwZm9vZHxlbnwwfHx8fDE3NjAzNDc5NTJ8MA&ixlib=rb-4.1.0&q=85',
        menu: [
          { name: 'Almuerzo Completo (L-S)', price: 13 },
          { name: 'Charque Kan (Dom)', price: 60 },
          { name: 'Pampaku de Pato (Dom)', price: '45/50' },
          { name: 'Pato Dorado (Dom)', price: 45 },
          { name: 'Laping (Dom)', price: 25 }
        ]
      },
      {
        id: 'san4',
        name: 'Restaurant',
        location: 'Santivañes',
        schedule: 'Sábado y Domingo',
        hours: '8:00 AM - 9:00 PM',
        image: 'https://images.unsplash.com/photo-1638043139484-1534e2c14bcb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHxib2xpdmlhbiUyMHRyYWRpdGlvbmFsJTIwZm9vZHxlbnwwfHx8fDE3NjAzNDc5NTJ8MA&ixlib=rb-4.1.0&q=85',
        menu: [
          { name: 'Kawi', price: 13 },
          { name: 'Pata', price: 15 },
          { name: 'Caldo de Pollo', price: 13 },
          { name: 'Silpancho (2PM-9PM)', price: 13 },
          { name: 'Chuleta (2PM-9PM)', price: 13 }
        ]
      },
      {
        id: 'san5',
        name: 'Restaurant Don Elias',
        location: 'Santivañes',
        schedule: 'Domingos',
        hours: '10:00 AM - 7:00 PM',
        image: 'https://images.pexels.com/photos/34271463/pexels-photo-34271463.jpeg',
        menu: [
          { name: 'Charque', price: '50/70' },
          { name: 'Pique', price: '30/50' }
        ]
      },
      {
        id: 'san6',
        name: 'THEBAZ Fast Food',
        location: 'Plaza Principal Santivañes',
        schedule: 'Martes a Domingo',
        hours: 'Ma-Vi: 12:00 PM - 9:00 PM | Sa-Do: 3:00 PM - 9:00 PM',
        image: 'https://images.unsplash.com/photo-1679682843442-939f44a2e99c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHw0fHx0cmFkaXRpb25hbCUyMHJlc3RhdXJhbnR8ZW58MHx8fHwxNzYwMzQ3OTU4fDA&ixlib=rb-4.1.0&q=85',
        menu: [
          { name: 'Alitas', price: '20/25' },
          { name: 'Pipocas de Pollo', price: '18/22' },
          { name: 'Pollo a la Canasta', price: '19/30' },
          { name: 'Pollo Broaster', price: '17/30' },
          { name: 'Papa Frita', price: 6 },
          { name: 'Arroz', price: 6 },
          { name: 'Plátano', price: 6 }
        ]
      },
      {
        id: 'san7',
        name: 'Churrasquería Leña y Carbón',
        location: 'Plaza Principal Santivañes',
        schedule: 'Lunes a Domingo',
        hours: 'L-V: 11:30 AM - 2:00 PM | Sa-Do: 11:30 AM - 6:00 PM',
        image: 'https://images.pexels.com/photos/34218157/pexels-photo-34218157.jpeg',
        menu: [
          { name: 'Almuerzo Completo (L-V)', price: 15 },
          { name: 'Queperi al Horno (Sa-Do)', price: '30/50' },
          { name: 'Costilla de Res (Sa-Do)', price: 70 },
          { name: 'Punta de Res (Sa-Do)', price: 60 },
          { name: 'Ojo de Res (Sa-Do)', price: 60 },
          { name: 'Lechón (Sa-Do)', price: 50 },
          { name: 'Mixtos (Sa-Do)', price: 120 }
        ]
      }
    ]
  }
];

// Datos de los platos con imágenes e ingredientes
const dishesData = {
  'Silpancho': {
    image: 'https://i.ibb.co/xq7Q1JMC/imagen-2025-10-30-060314547.png',
    ingredients: ['Carne de res molida', 'Arroz blanco', 'Papa cocida', 'Huevo frito', 'Tomate', 'Cebolla', 'Locoto'],
    description: 'Plato típico cochabambino con carne empanizada'
  },
  'Pique Macho': {
    image: 'https://i.ibb.co/4Rb0stRx/imagen-2025-10-30-060523215.png',
    ingredients: ['Carne de res', 'Salchicha', 'Papa frita', 'Cebolla', 'Tomate', 'Locoto', 'Huevo'],
    description: 'Plato abundante con carnes mixtas y papas fritas'
  },
  'Mondongo': {
    image: 'https://i.ibb.co/S4k6pYHz/imagen-2025-10-30-060609707.png',
    ingredients: ['Mondongo', 'Mote de maíz', 'Papa', 'Ají colorado'],
    description: 'Sopa espesa tradicional con mondongo'
  },
  'Chicharrón': {
    image: 'https://i.ibb.co/PG59Tn75/imagen-2025-10-30-060815859.png',
    ingredients: ['Carne de cerdo', 'Mote de maíz', 'Chuño', 'Llajwa'],
    description: 'Cerdo frito crujiente con mote'
  },
  'Salchipapa': {
    image: 'https://i.ibb.co/PHhhx2Q/imagen-2025-10-30-060842365.png',
    ingredients: ['Salchicha', 'Papa frita', 'Salsas', 'Cebolla'],
    description: 'Combinación de salchichas y papas fritas'
  },
  'Planchita': {
    image: 'https://i.ibb.co/XZ9GsQMw/imagen-2025-10-30-060644375.png',
    ingredients: ['Carnes mixtas', 'Chorizo', 'Papa', 'Queso'],
    description: 'Parrillada personal en planchita caliente'
  },
  'Chuleta': {
    image: 'https://i.ibb.co/gZPZ0fN0/278940194-719992552519930-1435797874842505230-n.jpg',
    ingredients: ['Chuleta de cerdo', 'Arroz', 'Papa frita', 'Ensalada'],
    description: 'Chuleta de cerdo frita con guarniciones'
  },
  'Pollo Broaster': {
    image: 'https://i.ibb.co/KzDHP0DR/imagen-2025-10-30-060220158.png',
    ingredients: ['Pollo', 'Harina especiada', 'Papa frita', 'Ensalada'],
    description: 'Pollo frito estilo broaster'
  },
  'Saice': {
    image: 'https://images.unsplash.com/photo-1740993382497-65dba6c7a689',
    ingredients: ['Carne molida', 'Cebolla', 'Ají', 'Arveja', 'Zanahoria', 'Comino', 'Orégano'],
    description: 'Carne molida en salsa especiada, típico de Tarija',
    calories: '500-700 kcal',
    protein: 'Alto',
    deliveryAvailable: true,
    preparationTime: '30-40 min'
  },
  'Lenteja': {
    image: 'https://images.unsplash.com/photo-1714062105923-5cb2a3a07499',
    ingredients: ['Lentejas', 'Zanahoria', 'Papa', 'Cebolla', 'Arroz'],
    description: 'Guiso nutritivo de lentejas con vegetales',
    calories: '400-600 kcal',
    protein: 'Medio',
    deliveryAvailable: true,
    preparationTime: '45-60 min'
  },
  'Ají de Lengua': {
    image: 'https://images.unsplash.com/photo-1748309280994-bb23a2f600cc',
    ingredients: ['Lengua de res', 'Ají amarillo', 'Papa', 'Cebolla', 'Ajo', 'Arroz'],
    description: 'Lengua en salsa de ají amarillo',
    calories: '600-800 kcal',
    protein: 'Alto',
    deliveryAvailable: true,
    preparationTime: '90-120 min'
  },
  'Caldo de Cardán': {
    image: 'https://images.unsplash.com/photo-1627880872609-f7ddd76616c2',
    ingredients: ['Cordero', 'Papa', 'Zanahoria', 'Chuño', 'Hierbas aromáticas'],
    description: 'Sopa de cordero con vegetales andinos',
    calories: '500-700 kcal',
    protein: 'Alto',
    deliveryAvailable: true,
    preparationTime: '90-120 min'
  },
  'Trucha a la Plancha': {
    image: 'https://images.unsplash.com/photo-1600699899970-b1c9fadd8f9e',
    ingredients: ['Trucha fresca', 'Ajo', 'Limón', 'Arroz'],
    description: 'Trucha fresca a la plancha'
  }
};