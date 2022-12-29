exports.getAllCars = (req, res) => {
  res.render('cars', {
    page_name: 'cars',
  });
};

exports.getACar = (req, res) => {
  res.render('car-single');
};
