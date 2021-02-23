## [Lambda Function](https://github.com/edo92/AWS-ECS-Hosting-Pipeline/tree/main/src/lambda) In Pipeline

<br/>
<br/>

## Lambda Pipeline Notification

- **`Go to aws Lambda and create function`**
  <p>
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/lambda/images/lambda-create-fucntion.png"/>
  </p>

- **`Name function and set to nodejs runtime, create function`**
  <p>
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/lambda/images/lambda-create-function-settings.png"/>
  </p>

<br/>

<br/>

- **`Go to aws CodePipeline where you have you pipeline app, go inside your pipeline app and click edit`**
  <p>
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/lambda/images/lambda-pipeline-edit.png"/>
  </p>

<br/>

- **`when you click edit pipeline you will have option to add stage`**
  <p>
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/lambda/images/lambda-pipeline-add-state.png"/>
  </p>

- **`Name the stage`**
  <p>
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/lambda/images/lambda-pipeline-name-stage.png"/>
  </p>

<br/>

- **`Than Click on Add action group`**
  <p>
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/lambda/images/lambda-pipeline-add-action-group.png"/>
  </p>

- **`Configure group`**
  <p>
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/lambda/images/lambda-pipeline-configure-action-group.png"/>
  </p>

- **`Click save at the top`**
<p>
   <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/lambda/images/lambda-pipeline-save-pipeline.png"/>
 </p>

- **`Once Codebuild is triggered it will upload lambdas`**
  - in buildspec.yml command --> npm run deploy:lambda $AWS_DEFAULT_REGION will upload the code
