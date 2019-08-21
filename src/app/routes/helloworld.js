
const Helloworld = {
    method: "GET",
    path: "/",
    handler: [function (req, res) {
        req.payload = { message: 'Hello World!', data: req.params, binds: this.binds};
    }, (req, res) => {
        Object.assign(req.payload, {test: "MORE!"});
    }]
}

export default Helloworld;