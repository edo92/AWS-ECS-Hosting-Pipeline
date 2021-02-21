# CodePipeline

- AWS CodePipeline is a fully managed continuous delivery service that helps you automate your release pipelines for fast and reliable application and infrastructure updates. You can easily integrate AWS CodePipeline with third-party services such as GitHub or with your own custom plugin.

<br/>

## Prerequisites

- [CodeBuild](https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/codebuild/codebuild.md#aws-codebuild)
- [CodeDeploy](https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/codedeploy/codedeploy.md#codedeploy)
- [ECS Task Definition](https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/ecstaskdef.md#ecs-task-definition)
- [ECS Cluster Service](https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/ecscluster.md#ecs-cluster)

<br/>

---

<br/>
<br/>

## Steps

<table align="center">
  <tr>
    <th align="center">
      <img width="441" height="1" />
      <p>
        <small>Pipeline</small>
      </p>
    </th>
  </tr>
  <tr>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/codepipeline/pipeline.md#pipeline-settings"
        >Pipeline Settings</a
      >
      <pre> 1. Give Pipeline a Name <br/> 2. Select New Service Role to create role for pipeline</pre>
    </td>
  </tr>
  <tr>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/codepipeline/pipeline.md#pipeline-source-stage"
        >Source Stage</a
      >
      <pre> 1. Select Source Provider -> GitHub <br/> 2. Select Respasitory from github <br/> 3. Select Branch (main) </pre>
    </td>
  </tr>
  <tr>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/codepipeline/pipeline.md#pipeline-build-stage"
        >Build Stage</a
      >
      <pre> 1. Select Build Provider -> CodeBuild <br/> 2. Select CodeBuild Project that we <a href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/codebuild/codebuild.md#create-codebuild">created</a> <br/> 3. Select Branch (main) </pre>
    </td>
  </tr>
  <tr>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/codepipeline/pipeline.md#pipeline-deploy-stage"
        >Deploy Stage</a
      >
      <pre> 1. Select Deploy Provider -> ECS (Blue/Green) <br/> 2. Select CodeDeploy Application <br/> 3. Select CodeDeploy Deployment Group <br/> 4. Select BuildArtifact -> taskdef.json  <br/> 5. Select BuildArtifact -> appSpec.yml</pre>
    </td>
  </tr>
</table>

---

<br/>
<br/>

## Create CodePipeline

- Create Code Pipeline
  <p>
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/codepipeline/images/pipeline-create-pipeline.png"/>
  </p>

<br/>

#### Pipeline Settings

- Pipeline Name and Role
  <p>
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/codepipeline/images/pipeline-settings.png"/>
  </p>

<br/>

#### Pipeline Source Stage

- Pipeline Source, Connect Github project
  <p>
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/codepipeline/images/pipeline-soruce.png"/>
  </p>

<br/>

#### Pipeline Build Stage

- Select CodeBuild as build provide and select codebuild project [that we just created](https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/codebuild/codebuild.md#aws-codebuild)
  <p>
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/codepipeline/images/pipeline-build-stage.png"/>
  </p>

<br/>

#### Pipeline Deploy Stage

- Select ECS(Blue/Green) as deploy provider,
- Select CodeDeploy application [that we just created](https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/codedeploy/codedeploy.md#codedeploy)

- CodeDeploy Stage, Select ECS(Blue/Green) as deploy provider, deploy App & deploy group
  Also Select BuildArtifact [taskdef.json](https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/artifacts/taskdefjson.md#task-definition-template) & [appSpec.yml](https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/artifacts/appSpecyml.md#app-spec-yml-is-a-template-that-defines-ecs-claster-service) which are artifacts in buildspec.yml

  <p>
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/codepipeline/images/pipeline-codedeploy-stage.png"/>
  </p>

<br/>

- When CodePipeline has been Created it will start building and deploying codebase
  <p>
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/codepipeline/images/pipeline-porcess-start.png"/>
  </p>
