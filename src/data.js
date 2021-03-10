import { v4 as uuidv4 } from 'uuid';

const users = [
  {
    _id: uuidv4(),
    name: 'Allan Brito',
    cc: '10852349',
    email: 'allanB@gmail.com',
    password: '1234',
    phoneNum: '313678547',
    photo:
      'https://www.motopoliza.com/wp-content/uploads/2014/08/helmet-guy.jpg',
  },
  {
    _id: uuidv4(),
    name: 'Marlon Brando',
    cc: '799533350',
    email: 'marliton@gmail.com',
    password: '1234',
    phoneNum: '3006262590',
    photo:
      'https://res.cloudinary.com/djugjzinn/image/upload/v1612582362/aapktdqebpjhzflqlgw4.jpg',
  },

  {
    _id: uuidv4(),
    name: 'Maria Arango',
    cc: '5678234',
    email: 'maria789@gmail.com',
    password: '1234',
    phoneNum: '3213428310',
    photo:
      'https://www.moriwoki.com/wp-content/uploads/2020/04/Los-mejores-cascos-de-moto-para-mujer-integral.jpg',
  },
];

const motorcycles = [
  {
    _id: uuidv4(),
    plateNum: 'ASK989',
    weight: '200_Kg',
    type: 'sport',
    brand: 'Honda',
    cc: '750_cc',
    userID: users[0]._id,
  },
  {
    _id: uuidv4(),
    plateNum: 'LIZ09A',
    weight: '150_Kg',
    type: 'cross',
    cc: '250_cc',
    userID: users[1]._id,
  },
  {
    _id: uuidv4(),
    plateNum: 'NRS456',
    weight: '350_Kg',
    type: 'cuatrimoto',
    cc: '350_cc',
    userID: users[2]._id,
  },
];

const suppliers = [
  {
    _id: uuidv4(),
    name: 'Francisco Villa',
    cc: '897653f21',
    email: 'pancho@gmail.com',
    password: '1234',
    phoneNum: '317098371',
    photo:
      'https://i.pinimg.com/originals/4a/24/fa/4a24fa84b13864d45016a70be1914420.jpg',
  },
  {
    _id: uuidv4(),
    name: 'Carlos Santana',
    cc: '799533350',
    email: 'carlitos@gmail.com',
    password: '1234',
    phoneNum: '3006262590',
    photo:
      'https://i.pinimg.com/originals/2b/38/41/2b3841a0d0c11588726e3310707c1191.jpg',
  },

  {
    _id: uuidv4(),
    name: 'Miguel Hidalgo',
    cc: '7590876',
    email: 'miguelin@gmail.com',
    password: '1234',
    phoneNum: '3158750921',
    photo:
      'https://i.pinimg.com/236x/c9/5d/5d/c95d5d9fc2555216b5c1fc69eb9ec545.jpg',
  },
];

const tows = [
  {
    _id: uuidv4(),
    plateNum: 'NVW999',
    status: true,
    capacity: '1_Ton',
    photo:
      'https://res.cloudinary.com/djugjzinn/image/upload/v1612582362/aapktdqebpjhzflqlgw4.jpg',
    supplierID: suppliers[0]._id,
  },
  {
    _id: uuidv4(),
    plateNum: 'LIZ09A',
    status: true,
    capacity: '1_Ton',
    photo:
      'https://res.cloudinary.com/djugjzinn/image/upload/v1612582362/aapktdqebpjhzflqlgw4.jpg',
    supplierID: suppliers[1]._id,
  },
  {
    _id: uuidv4(),
    plateNum: 'NRS456',
    status: true,
    capacity: '1_Ton',
    photo:
      'https://res.cloudinary.com/djugjzinn/image/upload/v1612582362/aapktdqebpjhzflqlgw4.jpg',
    supplierID: suppliers[2]._id,
  },
];

const services = [
  {
    _id: uuidv4(),
    motoID: motorcycles[2]._id,
    towID: tows[1]._id,
    cost: 120000,
    initLoc: 'Parque Berrío',
    finalLoc: 'Aranjuez',
    date: 'December 17, 2020',
    hr: '08:24',
    rating: 3,
    comments: 'Un servicio que puede mejorar',
    servStat: true,
  },
  {
    _id: uuidv4(),
    motoID: motorcycles[1]._id,
    towID: tows[0]._id,
    cost: 120000,
    initLoc: 'Laureles',
    finalLoc: 'Bomboná',
    date: 'January 15, 2021',
    hr: '13:30',
    rating: 5,
    comments: 'Un servicio muy melo caramelo',
    servStat: true,
  },
  {
    _id: uuidv4(),
    motoID: motorcycles[2]._id,
    towID: tows[2]._id,
    cost: 80000,
    initLoc: 'Las palmas',
    finalLoc: 'Alpujarra',
    date: 'frebruary 3, 2021',
    hr: '21:00',
    rating: 2,
    comments: 'Servicio fatal, se demoran demasiado',
    servStat: true,
  },
];

export { users, motorcycles, suppliers, tows, services };
