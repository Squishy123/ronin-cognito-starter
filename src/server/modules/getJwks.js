//get public and private jwks from cognito
async function getJwks({ poolData, poolRegion }) {
    let jwks = await fetch(`https://cognito-idp.${poolRegion}.amazonaws.com/${poolData.UserPoolId}/.well-known/jwks.json`)
    .then(res => res.json());

    return jwks;
}

export default getJwks;