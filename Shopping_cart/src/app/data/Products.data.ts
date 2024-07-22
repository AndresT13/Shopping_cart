import { ProductService } from './../services/product.service';
import { Product } from "../models/Products";

export const Products: Product[]= [
    {
        id: 1,
        name:  'Teclado Mecánico Asus RGB',
        description:  'Teclado mecánico con luces RGB cherry red',
        price: 1000
    },
    {
        id: 2,
        name: "Ratón Inalámbrico Logitech MX Master 3",
        description: "Ratón ergonómico con batería recargable y múltiples botones programables",
        price: 750
    },
    {
        id: 3,
        name: "Auriculares Sony WH-1000XM4",
        description: "Auriculares inalámbricos con cancelación de ruido y batería de larga duración",
        price: 1200
    },
    {
        id: 4,
        name: "Monitor Dell UltraSharp 27",
        description: "Monitor 4K UHD de 27 pulgadas con tecnología IPS y soporte ajustable",
        price: 1500
    },
    {
        id: 5,
        name: "Portátil Apple MacBook Pro 16",
        description: "Portátil con procesador M1, 16GB de RAM y 512GB de almacenamiento",
        price: 2400
    },
    {
        id: 6,
        name: "Tablet Samsung Galaxy Tab S7",
        description: "Tablet de 11 pulgadas con pantalla AMOLED y S Pen incluido",
        price: 900
    },
    {
        id: 7,
        name: "Smartwatch Garmin Fenix 6",
        description: "Reloj inteligente con GPS y funciones avanzadas de seguimiento deportivo",
        price: 1300
    },
    {
        id: 8,
        name: "Cámara Canon EOS R6",
        description: "Cámara mirrorless con sensor Full-Frame y grabación 4K",
        price: 2500
    },
    {
        id: 9,
        name: "Altavoces Bose SoundLink Revolve+",
        description: "Altavoz Bluetooth portátil con sonido 360 grados y resistente al agua",
        price: 850
    },
    {
        id: 10,
        name: "Disco Duro Externo Seagate 4TB",
        description: "Disco duro externo USB 3.0 con gran capacidad de almacenamiento",
        price: 400
    }
];