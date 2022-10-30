exports.getAllCars = (req, res) => {
  res.render('cars', {
    page_name: 'cars',
  });
};
