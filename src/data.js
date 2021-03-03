import { v4 as uuidv4 } from 'uuid';

const user = [

    {
        _id: uuidv4(),
        name: 'Allan Brito',
        cc: '10852349',
        emai: "allanB@gmail.com",
        password: '1234',
        phoneNum: '313678547',
        photo: 'https://res.cloudinary.com/djugjzinn/image/upload/v1612582362/aapktdqebpjhzflqlgw4.jpg'
    },
    {
        _id: uuidv4(),
        name: 'Marlon Brandon',
        cc: '799533350',
        emai: "marliton@gmail.com",
        password: '1234',
        phoneNum: '3006262590',
        photo: 'https://res.cloudinary.com/djugjzinn/image/upload/v1612582362/aapktdqebpjhzflqlgw4.jpg'
    },

    {
        _id: uuidv4(),
        name: 'Maria Arango',
        cc: '5678234',
        emai: "maria789@gmail.com",
        password: '1234',
        phoneNum: '3213428310',
        photo: 'https://res.cloudinary.com/djugjzinn/image/upload/v1612582362/aapktdqebpjhzflqlgw4.jpg'
    }

];

const motorcycle = [
    {
        _id: uuidv4(),
        plateNum: 'ASK989',
        weight: "200_Kg",
        type: "sport",
        brand: 'Honda',
        cc: "750_cc",
        userID: user[0]._id,

    },
    {
        _id: uuidv4(),
        plateNum: 'LIZ09A',
        weight: "150_Kg",
        type: "cross",
        cc: "250_cc",
        userID: user[1]._id,

    },
    {
        _id: uuidv4(),
        plateNum: 'NRS456',
        weight: "350_Kg",
        type: "cuatrimoto",
        cc: "350_cc",
        userID: user[2]._id,

    }
];

const supplier = [

    {
        _id: uuidv4(),
        name: 'Francisco Villa',
        cc: '897653f21',
        emai: "pancho@gmail.com",
        password: '1234',
        phoneNum: '317098371',
        photo: 'https://res.cloudinary.com/djugjzinn/image/upload/v1612582362/aapktdqebpjhzflqlgw4.jpg'
    },
    {
        _id: uuidv4(),
        name: 'Carlos Santana',
        cc: '799533350',
        emai: "marliton@gmail.com",
        password: '1234',
        phoneNum: '3006262590',
        photo: 'https://res.cloudinary.com/djugjzinn/image/upload/v1612582362/aapktdqebpjhzflqlgw4.jpg'
    },

    {
        _id: uuidv4(),
        name: 'Miguel Hidalgo',
        cc: '7590876',
        emai: "miguelin@gmail.com",
        password: '1234',
        phoneNum: '3158750921',
        photo: 'https://res.cloudinary.com/djugjzinn/image/upload/v1612582362/aapktdqebpjhzflqlgw4.jpg'
    }

];

const tow = [
    {
        _id: uuidv4(),
        plateNum: 'NVW999',
        status: true,
        capacity: "1_Ton",
        photo: 'https://res.cloudinary.com/djugjzinn/image/upload/v1612582362/aapktdqebpjhzflqlgw4.jpg',
        supplierID: supplier[0]._id,

    },
    {
        _id: uuidv4(),
        plateNum: 'LIZ09A',
        status: true,
        capacity: "1_Ton",              
        photo: 'https://res.cloudinary.com/djugjzinn/image/upload/v1612582362/aapktdqebpjhzflqlgw4.jpg',
        supplierID: supplier[1]._id,

    },
    {
        _id: uuidv4(),
        plateNum: 'NRS456',
        status: true,
        capacity: "1_Ton",
        photo: 'https://res.cloudinary.com/djugjzinn/image/upload/v1612582362/aapktdqebpjhzflqlgw4.jpg',        
        supplierID: supplier[2]._id,

    }
]

export { user, motorcycle, supplier, tow}