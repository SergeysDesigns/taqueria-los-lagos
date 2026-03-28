/* ═══════════════════════════════════════════════════════════
   ✏️ EDIT THIS FILE FOR THE CLIENT
   ═══════════════════════════════════════════════════════════ */

const siteContent = {

  name: "Taqueria Los Lagos",
  nameAccent: "Los Lagos",
  tagline: "Family recipes passed down three generations. Made fresh daily with love, tradition, and a whole lot of salsa.",
  cuisine: "Auténtica Cocina Mexicana",
  location: "Roseville, CA",

  address: {
    street: "1234 Sunrise Blvd",
    city: "Roseville, CA 95747",
  },
  phone: "(916) 723-9466",

  hours: [
    "Monday – Thursday: 8am – 9pm",
    "Friday – Saturday: 8am – 10pm",
    "Sunday: 8am – 8pm",
  ],

  aboutHeading: "Three Generations of",
  aboutAccent: "Sabor",
  aboutText: [
    "What started as Abuela's kitchen in Jalisco now lives on in every plate we serve. Our tortillas are pressed by hand. Our salsas are stone-ground. Our carnitas simmer for hours until they fall apart.",
    "This isn't fast food — it's family food. Made the way it's supposed to be made.",
  ],

  images: {
    hero: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=1200&q=80",
    tacos: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&q=80",
    enchiladas: "https://images.unsplash.com/photo-1534352956036-cd81e27dd615?w=800&q=80",
    carnitas: "https://images.unsplash.com/photo-1564767655658-4e6b365884ff?w=800&q=80",
    salsa: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80",
  },

  signatureDishes: [
    { image: "tacos", name: "Tacos de Asada", desc: "Carne asada, cilantro, onion, handmade corn tortilla", price: "$2.75" },
    { image: "enchiladas", name: "Enchiladas Rancheras", desc: "Rolled tortillas, ranchero sauce, rice, beans & salad", price: "$12.99" },
    { image: "carnitas", name: "Carnitas Plate", desc: "Slow-braised pork, rice, beans, guacamole & salad", price: "$9.99" },
  ],

  menuCategories: [
    { id: "tacos", label: "Tacos" },
    { id: "plates", label: "Plates" },
    { id: "specials", label: "Specials" },
    { id: "breakfast", label: "Breakfast" },
  ],

  menuItems: {
    tacos: [
      { name: "Asada", desc: "Grilled steak", price: "2.75", popular: true },
      { name: "Pastor", desc: "Marinated pork", price: "2.75", popular: true },
      { name: "Carnitas", desc: "Shredded pork", price: "2.75" },
      { name: "Pollo", desc: "Chicken", price: "2.75" },
      { name: "Cabeza", desc: "Beef head", price: "2.75" },
      { name: "Chorizo", desc: "Sausage", price: "2.75" },
      { name: "Buche", desc: "Pork stomach", price: "2.75" },
      { name: "Tripa", desc: "Tripe", price: "2.99" },
      { name: "Carne Molida", desc: "Ground beef", price: "2.75" },
      { name: "Desebrada", desc: "Shredded beef", price: "2.75" },
    ],
    plates: [
      { name: "Enchiladas", desc: "Choice of meat, served with rice, beans & salad", price: "12.99", popular: true },
      { name: "Chile Relleno", desc: "Stuffed pepper with rice, beans & salad", price: "9.00" },
      { name: "Carnitas Plate", desc: "Served with rice, beans & salad", price: "9.99", popular: true },
      { name: "Filete", desc: "Fish filet with rice & beans", price: "14.50" },
      { name: "Quesadilla Suiza", desc: "Large flour tortilla with cheese & choice of meat", price: "10.20" },
      { name: "Mojarra", desc: "Whole fried tilapia", price: "15.50" },
      { name: "Camarones Rancheros", desc: "Shrimp, served with rice, beans & avocado", price: "15.50" },
      { name: "Steak Ranchero", desc: "Steak with salsa, rice, beans & salad", price: "13.99" },
      { name: "Chile Colorado", desc: "Pork or beef with rice, beans & salad", price: "14.99" },
      { name: "Huevos Rancheros Plate", desc: "Eggs with ranchero sauce, rice & beans", price: "10.99" },
    ],
    specials: [
      { name: "Super Nachos", desc: "Choice of meat, beans, cheese, guacamole & sour cream", price: "9.99", popular: true },
      { name: "Taquitos Dorados", desc: "With cueritos, lime, lettuce, sour cream, salsa & avocado", price: "12.50" },
      { name: "Burrito Chimichanga", desc: "Choice of meat, rice, beans, salad with guacamole & sour cream", price: "10.50" },
      { name: "Taco Salad", desc: "Choice of meat, beans, cheese, guacamole & sour cream", price: "10.25" },
      { name: "Birria", desc: "Traditional braised beef stew", price: "13.99", popular: true },
      { name: "Menudo", desc: "Traditional tripe soup (weekends)", price: "13.99" },
      { name: "Pozole", desc: "Pork & hominy soup", price: "13.99" },
      { name: "Shrimp Cocktail", desc: "Chilled shrimp in tomato sauce", price: "14.99" },
      { name: "Torta Ahogada", desc: "Choice of meat, Estilo Guadalajara", price: "10.50" },
      { name: "Tamales", desc: "Choice of meat: pork, chicken, or chile & cheese", price: "4.50" },
    ],
    breakfast: [
      { name: "Huevos Rancheros", desc: "Eggs with ranchero sauce, rice & beans", price: "10.99", popular: true },
      { name: "Chilaquiles", desc: "Tortilla chips in salsa with eggs", price: "10.99", popular: true },
      { name: "Breakfast Burrito", desc: "Eggs, choice of meat, beans, cheese", price: "8.99" },
      { name: "Chorizo & Eggs", desc: "Served with rice, beans & tortillas", price: "10.99" },
      { name: "Ham & Eggs", desc: "Served with rice, beans & tortillas", price: "10.99" },
      { name: "Bacon & Eggs", desc: "Served with rice, beans & tortillas", price: "10.99" },
      { name: "Steak & Eggs", desc: "Served with rice, beans & tortillas", price: "12.99" },
      { name: "Machaca & Eggs", desc: "Shredded beef with eggs, rice, beans & tortillas", price: "11.99" },
    ],
  },

  // ─── DRINKS (from menu board) ───
  drinks: [
    { name: "Aguas Frescas", price: "3.50" },
    { name: "Jarritos", price: "2.50" },
    { name: "Domestic Beer", price: "5.75" },
    { name: "Imported Beer", price: "6.50" },
    { name: "Michelada", price: "8.99" },
  ],

  orderPickupUrl: "#",
  orderDeliveryUrl: "#",
};

export default siteContent;
