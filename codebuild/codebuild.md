# AWS Codebuild

<br/>

## Prerequisites
  - [CodeBuild IAM Role](https://github.com/cyber-netics/testX/blob/main/.assets/codebuild/codebuild.md#create-codebuild)
  
  
<br/>
<br/>


### Create Codebuild
- **`Navigate to AWS CodeBuild`**
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/codebuild/images/code-build-dashboard.png"/>
  </p>

<br/>

### Basic configuration
- **`Name & description`**
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/codebuild/images/codebuild-nameing.png"/>
  </p>

<br/>

### Target soruce github
- **`Source (Github project url)`**
  ![alt text](https://github.com/cyber-netics/testX/blob/main/.assets/codebuild/images/codebuild-source.png)


### Environment Configuration
- **`Environment`**
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/codebuild/images/codebuild-env-1.png"/>
  </p>

<br/>

- **`Select CodeBuild Security Role that we`** [created](https://github.com/cyber-netics/testX/blob/main/.assets/securityrole/securityrole.md#security-role-for-codebuild)
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/codebuild/images/codebuild-env-2.png"/>
  </p>

- **`Additional Configuration environment`**
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/codebuild/images/codebuild-env-addConfig-1.png"/>
  </p>

<br/>

### VPC
- **`VPC with private subnets`**, [that we just created](https://github.com/cyber-netics/testX/blob/main/.assets/vpc/vpc.md)
  ![alt text](https://github.com/cyber-netics/testX/blob/main/.assets/codebuild/images/codebuild-env-addConfig-vpc.png)
- **`Select private subnets. private is neccessary for security, so no one will be able to access it during build`**

<br/>

### ENVS
- **`Environmental Variables`**
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/codebuild/images/codebuild-addConfig-Env-vars.png"/>
  </p>

<br/>

### Cloudwatch
- **`configure cloudwatch to view logs`**
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/codebuild/images/codebuild-cloudwatch.png"/>
  </p>

<br/>

### IAM Role
- **`In IAM -> CodeBuild role, AWS will attach this policies after creating codebuild`**.\
  **`For CodeBuild to work with ECS, AmazonECSTaskExecutionRolePolicy policy must be attached`**
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/codebuild/images/codebuild-role-created.png"/>
  </p>