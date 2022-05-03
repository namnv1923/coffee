const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://vannam_23:NvuIjfe3REQO6N5Z@cluster0.n9owh.mongodb.net/coffee_shop_dev?retryWrites=true&w=majority')
        console.log('Connect successfully!')
    } catch(error) {
        console.log('Connect failure')
    }
}

module.exports = { connect }
