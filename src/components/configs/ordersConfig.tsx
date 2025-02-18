export type order = {
    id: string,
    price: number,
    orderDate: Date,
    deliveryDate: Date,
};

export const Orders : order[] = [
    {
        id: "1",
        price: 1000,
        orderDate: new Date(2025, 1, 13),
        deliveryDate: new Date(2025, 1, 15),
    },
    {
        id: "2",
        price: 5000,
        orderDate: new Date(2025, 1, 12),
        deliveryDate: new Date(2025, 1, 15),
    },
    {
        id: "3",
        price: 3000,
        orderDate: new Date(2025, 1, 11),
        deliveryDate: new Date(2025, 1, 16),
    },
    {
        id: "4",
        price: 2500,
        orderDate: new Date(2025, 1, 13),
        deliveryDate: new Date(2025, 1, 15),
    },
    {
        id: "5",
        price: 3700,
        orderDate: new Date(2025, 1, 13),
        deliveryDate: new Date(2025, 1, 15),
    },
];