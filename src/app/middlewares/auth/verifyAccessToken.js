const jwt = require('jsonwebtoken');
const fetch = require('node-fetch');

function VerifyAccessToken (req, res) {
    let poolRegion = this.binds.cognitoData.poolRegion;
    let userPoolId = this.binds.cognitoData.poolData.UserPoolId;

    await fetch(`https://cognito-idp.${poolRegion}.amazonaws.com/${userPoolId}/.well-known/jwks.json`,
    {
        method: "GET",
        
    })
}

export default VerifyAccessToken;