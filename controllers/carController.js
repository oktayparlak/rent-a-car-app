const { query } = require('../database');

exports.getAllCars = async (req, res) => {
  const result = await query('SELECT * FROM cars');
  res.send(result.rows);
};

exports.createCar = async (req, res) => {
  const car = {
    car_id: req.body.car_id,
    car_brand: req.body.car_brand,
    car_model: req.body.car_model,
    car_mileage: req.body.car_mileage,
    car_transmission: req.body.car_transmission,
    car_seats: req.body.car_seats,
    car_luggage: req.body.car_luggage,
    car_fuel: req.body.car_fuel,
    car_price_a_day: req.body.car_price_a_day,
  };
  const result = await query(
    `INSERT INTO cars(
      ${car.car_id},
      ${car.car_brand},
      ${car.car_model},
      ${car.car_mileage},
      ${car.car_transmission},
      ${car.car_seats},
      ${car.car_luggage},
      ${car.car_fuel},
      ${car.car_price_a_day}
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
    ['3', 'Audi', 'A8', 23000, 'manual', 7, 8, 'diesel', 359]
  );
  res.send(`Araba eklendi: ${car.car_brand}`);
};
