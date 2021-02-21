# Security Roles

<br/>

<br/>

## Steps
<table>
  <tr>
    <th align="center">
      <img width="441" height="1" />
      <p>
        <small>CodeDeploy Security Role</small>
      </p>
    </th>
    <th align="center">
      <img width="441" height="1" />
      <p>
        <small>ECS Security Role</small>
      </p>
    </th>
    <th align="center">
      <img width="441" height="1" />
      <p>
        <small>CodeBuild Security Role</small>
      </p>
    </th>
  </tr>
  <tr>
    <td>
      <a
        href="https://github.com/cyber-netics/testX/blob/main/.assets/securityrole/securityrole.md#security-role-for-codedeploy"
        >Create CodeDeploy IAM Role</a
      >
      <pre>  1. Create Role <br/>  2. Select CodeDeploy <br/>  3. Select CodeDeploy ECS <br/>  4. Give Name to Role</pre>
    </td>
    <td>
      <a
        href="https://github.com/cyber-netics/testX/blob/main/.assets/securityrole/securityrole.md#security-ecs-security-role"
        >Create ECS IAM Role</a
      >
      <pre>  1. Create Role <br/>  2. Select Elastic Container Service <br/>  3. Select EC2 Role <br/>     for Elastic Container Service  <br/>  4. Give Name to Role</pre>
    </td>
    <td>
      <a
        href="https://github.com/cyber-netics/testX/blob/main/.assets/securityrole/securityrole.md#security-role-for-codebuild"
        >Create CodeBuild IAM Role</a
      >
      <pre>  1. Create Role <br/>  2. Select CodeBuild <br/>  3. Select CodeBuild  <br/>  4. Give Name to Role</pre>
    </td>
  </tr>
</table>


<br/>

---

<br/>


## Security Role for CodeDeploy
- **`CodeDeply Role to connect to ECS Service`**
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/securityrole/images/security-role-codedeploy-role-start.png"/>
  </p>

<br/>

- **`Select Code Deploy`**
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/securityrole/images/security-role-select-deploy-role.png"/>
  </p>

<br/>

- **`Down Below Select CodeDeploy - ECS`**
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/securityrole/images/security-role-codedeploy-ecs.png"/>
  </p>

<br/>

- **`Name CodeDeploy Role`**
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/securityrole/images/security-role-name-cdoedeploy-role.png"/>
  </p>

<br/>

- **`Inside CodeDeploy Role, attach policy, AmazonECSTaskExecutionRolePolicy`**
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/securityrole/images/security-role-codedeploy-attach-execrole.png"/>
  </p>

<br/>

---

<br/>

# Security ECS Security Role
- **`Create ECSInstanceRole otherwise ecsInstanceRole will be created when we create Cluster`**
  **`In IAM Create Role, Elastic Container Serivce -> EC2 Role for Elastic Container Service`**
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/securityrole/images/security-role-create-ecs-role.png"/>
  </p>

<br/>

- **`Attach policies to ecsInstanceRole`** -> **`AmazonS3FullAcess`** **`AmazonECS_FullAccess`**
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/securityrole/images/security-role-ecs-roles.png"/>
  </p>

<br/>

---

<br/>

# Security Role for CodeBuild
- **`Create Security Role`**\
  **`Select Codebuild, at the bottom select Codebuild`**
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/securityrole/images/security-role-codebuild.png"/>
  </p> 

<br/>

- **`Attach AmazonEC2ContainerRegistryPowerUser Policy to CodeBuild`**
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/securityrole/images/security-role-codebuild-attach-policy.png"/>
  </p> 

<br/>

- **`Name CodeBuild Policy`**
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/securityrole/images/security-role-codebuild-name-policy.png"/>
  </p> 

<br/>

- **`CodeBuild Should have this policies attached`**
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/securityrole/images/security-role-codebuild-policy-list.png"/>
  </p> 

<br/>

---

<br/>

## Next Up: [Security Group](https://github.com/cyber-netics/testX/blob/main/.assets/securitygroup/securitygroup.md#security-security-groups)