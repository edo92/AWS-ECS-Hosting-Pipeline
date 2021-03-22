[![CircleCI](https://circleci.com/gh/edo92/AWS-ECS-Hosting-Pipeline.svg?style=shield)]()
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/edo92/AWS-ECS-Hosting-Pipeline.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/edo92/AWS-ECS-Hosting-Pipeline/context:javascript)
[![License](https://img.shields.io/badge/license-MIT-yellow?style=shield)](https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/main/LICENSE)
[![Version](https://img.shields.io/badge/version-v1.0.0-1abc9c?style=shield)](https://github.com/edo92/AWS-ECS-Hosting-Pipeline)
[![Contribution](https://img.shields.io/badge/contributions-welcome-red.svg?style=shield)](https://github.com/edo92/AWS-ECS-Hosting-Pipeline)
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=shield)](#contributors)

<br/>
<br/>

### Full Stack Web App Using [React](https://github.com/edo92/AWS-ECS-Hosting-Pipeline/tree/main/src/client), [Nodejs](https://github.com/edo92/AWS-ECS-Hosting-Pipeline/tree/main/src/backend), [Nginx](https://github.com/edo92/AWS-ECS-Hosting-Pipeline/tree/main/src/nginx), Technologies. Host on AWS ECS

---

<br/>


## Architecture
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/architectur-schema.png"/>
  </p>

<br/>
<br/>

## AWS ECS Hosting & Pipeline
<table>
  <tr>
    <th align="center">
      <img width="441" height="1" />
      <p>
        <small>ECS Hosting</small>
      </p>
    </th>
    <th align="center">
      <img width="441" height="1" />
      <p>
        <small>CI CD Pipeline</small>
      </p>
    </th>
  </tr>
  <tr>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/vpc/vpc.md"
        >   1. Create VPC</a
      >
    </td>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/codebuild/codebuild.md#create-codebuild"
        >   1. Security Roles</a
      >
    </td>
  </tr>
  <tr>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/securityrole/securityrole.md#security-roles"
        >   2. Security Roles</a
      >
    </td>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/codebuild/codebuild.md#create-codebuild"
        >2. CodeBuild</a
      >
    </td>
  </tr>
  <tr>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/securitygroup/securitygroup.md"
        >   3. Create Security Group</a
      >
    </td>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/codedeploy/codedeploy.md"
        >3. CodeDeploy</a
      >
    </td>
  </tr>
  <tr>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/loadbalancer/loadbalancer.md"
        >   4. Create Load Balancer</a
      >
    </td>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/codepipeline/pipeline.md#codepipeline"
        >4. CodePipeline</a
      >
    </td>
  </tr>
  <tr>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/ecstaskdef.md"
        >   5. ECS Task Definition</a
      >
    </td>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/circleci/circleci.md"
        >   1. CircleCI</a
      >
    </td>
  </tr>
   <tr>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/ecscluster.md"
        >   6. ECS Cluster / Service</a
      >
    </td>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/lambda/lambda.md#lambda-pipeline-notification"
        >   6. Lambda in Pipeline</a
      >
    </td>
  </tr>
  <tr>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/autoscaling/autoscaling.md#auto-scaling"
        >   7. Auto Scaling (Optional)</a
      >
    </td>
    <td>
    </td>
  </tr>
</table>
  
<br/>
<br/>


## Usage

<table align="center">
  <tr>
    <th align="center">
      <img width="441" height="1" />
      <p>
        <small>Development Environemtn Usage</small>
      </p>
    </th>
    <th align="center">
      <img width="441" height="1" />
      <p>
        <small>Production Environemtn Usage</small>
      </p>
    </th>
  </tr>
  <tr align="center">
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/usage/usage.md#development-environment"
        >   1. Development Environment</a
      >
    </td>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/usage/usage.md#production-environment"
        >   1. Production Environment</a
      >
    </td>
  </tr>
</table>

## Issues

<table align="center">
  <tr>
    <th align="center">
      <img width="441" height="1" />
      <p>
        <small>Issues In Development</small>
      </p>
    </th>
    <th align="center">
      <img width="441" height="1" />
      <p>
        <small>Issues In Production</small>
      </p>
    </th>
  </tr>
  <tr align="center">
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/issues/issues.md#development"
        >   1. Docker Compose Slow HTTP Requeset on Mac</a
      >
    </td>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/issues/issues.md#production"
        >   1. Issues May Face On Production</a
      >
    </td>
  </tr>
</table>

<br/>
<br/>

## Contributors ✨
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/edo92"
        ><img
          src="https://avatars.githubusercontent.com/u/33237305?s=400&u=9add80378cc1238ad19d4c8ebf9cf409f77b649a&v=4"
          width="100px;"
          alt=""
        /><br /><sub><b>edo92</b></sub></a
      ><br /><a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/commits?author=edo92"
        title="Code"
        >💻</a
      >
      <a href="#content-edo92" title="Content">🖋</a>
    </td>
    <td align="center">
      <a href="https://github.com/cyber-netics"
        ><img
          src="https://avatars.githubusercontent.com/u/67401984?s=400&v=4"
          width="100px;"
          alt=""
        /><br /><sub><b>cyber-netics</b></sub></a
      ><br /><a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/commits?author=cyber-netics"
        title="Code"
        >💻</a
      >
      <a href="#content-cyber-netics" title="Content">🖋</a>
    </td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
