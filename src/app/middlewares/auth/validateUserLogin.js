
function ValidateUserLogin(req, res) {
    if (!req.params.password && !req.params.username && !req.params.email)
        return res.status(400).send({
            message: "Error: Missing required parameter username/email and password"
        });

    if (!req.params.password) {
        return res.status(400).send({
            message: "Error: Missing required parameter password"
        });
    }

    if (!req.params.username && !req.params.email) {
        return res.status(400).send({
            message: "Error: Missing required parameter username or email"
        });
    }
}

export default ValidateUserLogin;