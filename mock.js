const recetasDB = [
    { id: 1, titulo: "Tortilla Campestre", ingredientes: ['huevo', 'tomate'], desc: "Saltea los tomates y mézclalos con el huevo batido.", tags: ['vegetariano', 'sin-gluten', 'rapido'] },
    { id: 2, titulo: "Arroz con Pollo", ingredientes: ['arroz', 'pollo'], desc: "Cocina el arroz y mezcla con pollo salteado.", tags: ['sin-lacteos', 'halal', 'completo'] },
    { id: 3, titulo: "Torrijas", ingredientes: ['pan', 'leche'], desc: "Remoja el pan en leche y pásalo por la sartén.", tags: ['vegetariano', 'dulce'] },
    { id: 4, titulo: "Pasta con Queso", ingredientes: ['pasta', 'queso'], desc: "Mezcla pasta con queso y hornea.", tags: ['vegetariano', 'rapido'] },
    { id: 5, titulo: "Ensalada Fresca", ingredientes: ['lechuga', 'tomate'], desc: "Mezcla ingredientes frescos con aceite.", tags: ['vegano', 'sin-gluten', 'ligero'] },
    { id: 6, titulo: "Pollo al Horno", ingredientes: ['pollo', 'patata'], desc: "Hornea el pollo con patatas.", tags: ['halal', 'sin-lacteos'] },
    { id: 7, titulo: "Arroz con Verduras", ingredientes: ['arroz', 'zanahoria'], desc: "Saltea verduras y añade arroz.", tags: ['vegano', 'economico'] },
    { id: 8, titulo: "Sándwich Mixto", ingredientes: ['pan', 'queso'], desc: "Calienta pan con queso.", tags: ['vegetariano', 'rapido'] },
    { id: 9, titulo: "Huevos Revueltos", ingredientes: ['huevo'], desc: "Cocina los huevos removiendo.", tags: ['vegetariano', 'sin-gluten', 'rapido'] },
    { id: 10, titulo: "Batido de Plátano", ingredientes: ['plátano', 'leche'], desc: "Mezcla todo en batidora.", tags: ['vegetariano', 'dulce', 'rapido'] },
    { id: 11, titulo: "Pasta con Tomate", ingredientes: ['pasta', 'tomate'], desc: "Cuece pasta y añade tomate.", tags: ['vegano', 'economico'] },
    { id: 12, titulo: "Arroz Frito", ingredientes: ['arroz', 'huevo'], desc: "Saltea arroz con huevo.", tags: ['sin-lacteos'] },
    { id: 13, titulo: "Verduras Salteadas", ingredientes: ['zanahoria', 'pimiento'], desc: "Saltea verduras con aceite.", tags: ['vegano', 'sin-gluten'] },
    { id: 14, titulo: "Pollo con Arroz", ingredientes: ['pollo', 'arroz'], desc: "Cocina pollo y mezcla con arroz.", tags: ['halal'] },
    { id: 15, titulo: "Tostadas con Tomate", ingredientes: ['pan', 'tomate'], desc: "Unta tomate en pan tostado.", tags: ['vegano', 'rapido'] },
    { id: 16, titulo: "Ensalada de Arroz", ingredientes: ['arroz', 'tomate'], desc: "Mezcla arroz frío con tomate.", tags: ['vegano', 'ligero'] },
    { id: 17, titulo: "Puré de Patata", ingredientes: ['patata'], desc: "Hierve y aplasta las patatas.", tags: ['vegetariano', 'sin-gluten'] },
    { id: 18, titulo: "Pollo a la Plancha", ingredientes: ['pollo'], desc: "Cocina pollo a la plancha.", tags: ['halal', 'proteico'] },
    { id: 19, titulo: "Sopa de Verduras", ingredientes: ['zanahoria', 'patata'], desc: "Hierve verduras en agua.", tags: ['vegano', 'ligero'] },
    { id: 20, titulo: "Pan con Aceite", ingredientes: ['pan'], desc: "Añade aceite de oliva al pan.", tags: ['vegano', 'rapido'] },

    // NUEVAS
    { id: 21, titulo: "Lentejas Caseras", ingredientes: ['lentejas', 'zanahoria'], desc: "Cuece lentejas con verduras.", tags: ['vegano', 'economico', 'completo'] },
    { id: 22, titulo: "Pollo con Verduras", ingredientes: ['pollo', 'zanahoria'], desc: "Saltea pollo con verduras.", tags: ['halal', 'saludable'] },
    { id: 23, titulo: "Arroz con Huevo", ingredientes: ['arroz', 'huevo'], desc: "Mezcla arroz cocido con huevo.", tags: ['rapido', 'economico'] },
    { id: 24, titulo: "Crema de Zanahoria", ingredientes: ['zanahoria'], desc: "Cuece y tritura zanahorias.", tags: ['vegano', 'ligero'] },
    { id: 25, titulo: "Pasta Vegetal", ingredientes: ['pasta', 'zanahoria'], desc: "Cuece pasta con verduras.", tags: ['vegano'] },
    { id: 26, titulo: "Pollo con Tomate", ingredientes: ['pollo', 'tomate'], desc: "Cocina pollo con tomate.", tags: ['halal'] },
    { id: 27, titulo: "Ensalada de Patata", ingredientes: ['patata', 'tomate'], desc: "Mezcla patata cocida con tomate.", tags: ['vegano'] },
    { id: 28, titulo: "Tortilla de Patata", ingredientes: ['huevo', 'patata'], desc: "Mezcla huevo con patata frita.", tags: ['vegetariano'] },
    { id: 29, titulo: "Arroz con Lentejas", ingredientes: ['arroz', 'lentejas'], desc: "Cuece juntos arroz y lentejas.", tags: ['vegano', 'completo'] },
    { id: 30, titulo: "Pan con Plátano", ingredientes: ['pan', 'plátano'], desc: "Añade plátano al pan tostado.", tags: ['vegano', 'dulce'] }
];

const excedentesDB = {
    "pan": "Haz pan rallado, tostadas o crutones.",
    "plátano": "Ideal para bizcochos o batidos.",
    "leche": "Puedes hacer arroz con leche o natillas.",
    "arroz": "Haz arroz frito o ensalada de arroz.",
    "pollo": "Úsalo para croquetas o caldo.",
    "tomate": "Prepara salsa o gazpacho.",
    "patata": "Haz puré o tortillas.",
    "zanahoria": "Añade a sopas o cremas.",
    "queso": "Rállalo y congélalo.",
    "huevo": "Haz tortilla o huevos cocidos."
};

const filtrosDB = [
    { id: 'vegetariano', label: 'Vegetariano' },
    { id: 'vegano', label: 'Vegano' },
    { id: 'sin-lacteos', label: 'Sin Lácteos' },
    { id: 'sin-gluten', label: 'Sin Gluten' },
    { id: 'halal', label: 'Halal' }
];