import { Sequelize } from 'sequelize';
import { sequelize } from '../database';

const Car = sequelize.define('cars', {
  car_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    unique: true,
  },
  car_brand: {
    type: Sequelize.STRING,
  },
  car_model: {
    type: Sequelize.STRING,
  },
  car_mileage: {
    type: Sequelize.INTEGER,
  },
  car_transmission: {
    type: Sequelize.ENUM,
    values: ['manual', 'automatic'],
    defaultValue: 'manual',
  },
  car_seats: {
    type: Sequelize.INTEGER,
  },
  car_fuel: {
    type: Sequelize.ENUM,
    values: ['petrol', 'diesel', 'LPG'],
    defaultValue: 'petrol',
  },
  car_price_a_day: {
    type: Sequelize.INTEGER,
  },
});
