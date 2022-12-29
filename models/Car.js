const Car = new Car({
  car_brand: {
    type: String,
  },
  car_model: {
    type: String,
  },
  car_mileage: {
    type: Number,
  },
  car_transmission: {
    type: String,
    enum: ['manual', 'automatic'],
    default: 'manual',
  },
  car_seats: {
    type: Number,
  },
  car_fuel: {
    type: String,
    enum: ['petrol', 'diesel', 'LPG'],
    default: 'petrol',
  },
  car_price_a_day: {
    type: Number,
  },
});
