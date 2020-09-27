const HelloWorld = require('./domain');

const helloWorld = async () => {
    const helloWorld = new HelloWorld();
    return helloWorld.initial();
};

const datascience = async () => {
    const helloWorld = new HelloWorld();
    return helloWorld.datascience();
};

module.exports = {
    helloWorld,
    datascience
};