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
