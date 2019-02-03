const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-l63kc5zs5b8i"
  },
  apiGateway: {
    REGION: -"us-east-1",
    URL: "https://rhzslrx76a.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_eDI4oGuW6",
    APP_CLIENT_ID: "12gdh1g5bcqdd48iah7ofh19pj",
    IDENTITY_POOL_ID: "us-east-1:c79e623d-580e-4428-96a8-373697e08833"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-fqqflti8wuv6"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://so8a9xqqi9.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_G7CBhUxzy",
    APP_CLIENT_ID: "14vboi5om5aopbbhruegv9a0st",
    IDENTITY_POOL_ID: "us-east-1:17455356-bc43-4ff3-b5c4-1229cdb806b2"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
