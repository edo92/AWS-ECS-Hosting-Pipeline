const Artifacts = require("swipe-env");

const configs = {
  files: [
    {
      template: "./aws.templates/appSpec.yml",
      filename: "appSpec",
      ext: "yml",
      saveTo: "./",
    },
    {
      template: "./aws.templates/taskdef.json",
      filename: "taskdef",
      ext: "json",
      saveTo: "./",
    },
  ],
};

const envs = {
  $AWS_ACCOUNT_ID: process.argv[2],
  $AWS_DEFAULT_REGION: process.argv[3],
  $SERVICE_NAME: "MyApp-Task-Def",
  $SERVICE_VERSION: "14",
  $CONTAINER_NAME: "nginx",
  $CONTAINER_PORT: 80,
};

new Artifacts().create(configs, envs);
