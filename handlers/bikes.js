'use strict';

const { getAllBikes, addBike, deleteBike } = require('./../database/bikesRepository');

function handleContext(context) {
    context.state = `window.state = ${JSON.stringify(context)};`;
    return context;
}

async function getBikes() {   
    const bikes = await getAllBikes();
    return bikes;
}

async function addBikes(request) {
    await addBike(request.payload);
    return '';
}

async function renderBikes(request, h) {
    return h.view('server', handleContext({}));
}

async function defaultAction(request, h) {
    return h.view('server', handleContext({}));
}

async function deleteBikes(request) {
    await deleteBike(request.params.id);
    return '';
}

module.exports = {
    getBikes,
    renderBikes,
    defaultAction,
    addBikes,
    deleteBikes
};
