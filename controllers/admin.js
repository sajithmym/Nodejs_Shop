const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  req.User.createProduct({
    title: title,
    price: price,
    imageUrl: imageUrl,
    description: description
  })
    .then(result => {
      // console.log(result);
      console.log('Created Product');
      res.redirect('/')
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/')
  }
  const prodId = req.params.productId;
  // Product.findByPk(prodId)
  req.User.getProducts({where : {id : prodId}})
    .then(product => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product[0]
      });
    })
    .catch(e => console.log(e))
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;

  Product.findByPk(prodId)
    .then((product) => {
      product.title = updatedTitle;
      product.description = updatedDesc;
      product.price = updatedPrice;
      product.imageUrl = updatedImageUrl;
      product.save()
    })
    .catch((err) => {
      console.log(err)
    });

  res.redirect('/admin/products');
};

exports.getProducts = (req, res, next) => {
  req.User.getProducts()
    .then(products => {
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
    })
    .catch(e => console.log(e))
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByPk(prodId)
    .then(pro => {
      return pro.destroy()
    })
    .then(e => {
      console.log("\n ----------------> Product was successfully Deleted...\n")
      res.redirect('/admin/products');
    })
    .catch(e => console.log(err))
};
