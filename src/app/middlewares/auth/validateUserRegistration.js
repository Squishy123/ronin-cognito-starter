/**
 * Validation of user registration
 * username - required
 * name - required
 * email - required
 * password -required
 */
function validateUserRegistration (req, res) {
    let missing = "";
    let queries = ["username", "name", "email", "password"];

    queries.forEach((q, i) => {
        if(!req.params[q])
            missing+=req.params[q];
        
        if(i < queries.length-1)
            missing+=", ";

    });

    if(missing.length)
        return new Error(`Error: Missing required parameters: ${missing}`);
        
}

export default validateUserRegistration;