import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData ={
    UserPoolId: "us-east-1_KysVtimI6",
    ClientId: "15ufbnr2mppvqt7n9qlk2sl4lg"
}

export default new CognitoUserPool(poolData);