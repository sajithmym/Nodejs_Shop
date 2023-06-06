const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const Product = require('./models/product');
const user = require('./models/user');
const Cart = require('./models/cart');
const Cart_item = require('./models/cart-item');
const Order = require('./models/order');
const OrderItem = require('./models/order-item');

const db = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => { 
    user.findByPk(1)
        .then((result) => {
            req.User = result
            next()
        }).catch((err) => {
            console.log(err);
        });
})

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(user, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
user.hasMany(Product);
user.hasOne(Cart);
Cart.belongsTo(user);
Cart.belongsToMany(Product, { through: Cart_item });
Product.belongsToMany(Cart, { through: Cart_item });
Order.belongsTo(user);
user.hasMany(Order);
Order.belongsToMany(Product, { through: OrderItem });

db.sync({ force: true }) // sync({ force: true })
    .then((result) => {
        return user.findByPk(1)
    })
    .then(ur => {
        if (!ur) {
            return user.create({ name: 'sajith', email: 'sajith@gmail.com' })
        }
        return ur 
    })
    .then(user => {
        // console.log('\n---------------------->',user,'\n')
        return user.createCart();
    })
    .then((r) => app.listen(8520, () => {
        console.log("Go to http://127.0.0.1:8520")
    }
    ))
    .catch((err) => {
        console.log(err);
    });
