export type product = {
    id: number,
    imgPath: string,
    price: number,
    productName: string,
};

export const products : product[] = [
    {
        id: 1,
        imgPath: "/src/assets/boots.jpeg",
        price: 1000,
        productName: "Кроссовки Nike"
    },
    {
        id: 2,
        imgPath: "/src/assets/boots.jpeg",
        price: 2000,
        productName: "Кроссовки Puma"
    },
    {
        id: 4,
        imgPath: "/src/assets/boots.jpeg",
        price: 1000,
        productName: "Кроссовки Nike"
    },
    {
        id: 3,
        imgPath: "/src/assets/boots.jpeg",
        price: 2000,
        productName: "Кроссовки Puma"
    }
];
