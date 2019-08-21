const fetch = require('node-fetch');
//${process.env.SERVER_URL}:${process.env.SERVER_PORT}
async function loginUser(username, email, password) {
    return await fetch(`http://localhost:3000/user/login`,
        {
            method: 'POST',
            body: {
                username, email, password
            }
        }).then(res => res.json());
}

test(`all null values`, () => {
    return loginUser(null, null, null).then(data => {
        console.log(data);
        expect(data).toStrictEqual({
            message: "Error: Missing required parameter username/email and password"
        });
    })
});


