const queryHandler = require('./repositories/queries/query_handler');
const commandHandler = require('./repositories/commands/command_handler');

const helloWorld = async (req, res) => {
    const result = await queryHandler.helloWorld();
    res.send(result);
};

const datascience = async (req, res) => {
    const result = await queryHandler.datascience();
    res.send(result);
};

module.exports = {
    helloWorld,
    datascience
}