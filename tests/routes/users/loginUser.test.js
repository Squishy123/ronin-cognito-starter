const fetch = require("node-fetch");
//${process.env.SERVER_URL}:${process.env.SERVER_PORT}
async function loginUser(username, email, password) {
    return await fetch(`http://localhost:3000/user/login`, {
        method: "POST",
        body: JSON.stringify({
            username,
            email,
            password
        }),
        headers: { "Content-Type": "application/json" }
    }).then(res => res.json());
}

test(`all null values`, () => {
    return loginUser(null, null, null).then(data => {
        expect(data).toContain({
            message: "Error: Missing required parameter username/email and password"
        });
    });
});

test(`email password`, () => {
    return loginUser(null, "christian.gnaw@gmail.com", "Flyingunicorn456!").then(
        data => {
            expect(data).toContainEqual({
                message: "Success: Successfully Logged in User"
            });
            expect(data).toHaveProperty("accessToken", "idToken");
        }
    );
});
