'use strict';

const bikesModel = require('./schemas/bikes');

async function getAllBikes() {
    const bikes = await bikesModel.find({}).exec();
    return bikes;
}

function addBike(bike) {
    const newBike = new bikesModel(bike);
    return newBike.save();
}

function deleteBike(id) {
    return bikesModel.deleteOne({_id: id});
}

module.exports = {
    getAllBikes,
    addBike,
    deleteBike
};
