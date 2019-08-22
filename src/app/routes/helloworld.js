const Helloworld = {
  method: "GET",
  path: "/",
  handler: [
    function(req, res) {
      req.payload = {
        message: "Hello World!",
        data: req.params,
        binds: this.binds
      };

      let poolRegion = this.binds.cognitoData.poolRegion;
    let userPoolId = this.binds.cognitoData.poolData.UserPoolId;

    console.log(`https://cognito-idp.${poolRegion}.amazonaws.com/${userPoolId}/.well-known/jwks.json`);
    },
    (req, res) => {
      Object.assign(req.payload, { test: "MORE!" });
    }
  ]
};

export default Helloworld;
