exports.getIndexPage = (req, res) => {
  res.render('index', {
    page_name: 'index',
  });
};

exports.getAboutPage = (req, res) => {
  res.render('about', {
    page_name: 'about',
  });
};

exports.getServicePage = (req, res) => {
  res.render('service', {
    page_name: 'service',
  });
};

exports.getPricePage = (req, res) => {
  res.render('pricing', {
    page_name: 'pricing',
  });
};

exports.getContactPage = (req, res) => {
  res.render('contact', {
    page_name: 'contact',
  });
};

exports.getLoginPage = (req, res) => {
  res.render('login', {
    page_name: 'login',
  });
};

exports.getAllCars = (req, res) => {
  res.render('cars', {
    page_name: 'cars',
  });
};

exports.getRegisterPage = (req, res) => {
  res.render('register', {
    page_name: 'register',
  });
};

exports.getAddCarPage = (req, res) => {
  res.render('addcar', {
    page_name: 'addcar',
  });
};