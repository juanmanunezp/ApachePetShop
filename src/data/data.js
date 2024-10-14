const products = [
    {
        id: "CA18",
        name: "Collar ajustable para perro",
        description: "Collar resistente, ajustable, con cierre de seguridad.",
        price: 15.99,
        img: "",
        category: "perro"
    },
    {
        id: "PE91",
        name: "Juguete mordedor de goma para perro",
        description: "Juguete duradero para perros, ideal para morder y jugar al aire libre.",
        price: 9.99,
        img: "",
        category: "perro"
    },
    {
        id: "NA5",
        name: "Suéter de lana para gato",
        description: "Suéter cómodo y calentito para gatos, ideal para días fríos.",
        price: 12.50,
        img: "",
        category: "gato"
    },
    {
        id: "R53",
        name: "Juguete ratón de peluche para gato",
        description: "Juguete suave con forma de ratón, ideal para el entretenimiento de gatos.",
        price: 6.99,
        img: "",
        category: "gato"
    },
    {
        id: "O20",
        name: "Ración premium para perro",
        description: "Alimento balanceado para perros adultos, sabor pollo y arroz.",
        price: 45.00,
        img: "",
        category: "raciones"
    },
    {
        id: "L24",
        name: "Ración premium para gato",
        description: "Alimento seco para gatos, alto en proteínas y con omega 3.",
        price: 38.00,
        img: "",
        category: "raciones"
    }
];

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export { getProducts }