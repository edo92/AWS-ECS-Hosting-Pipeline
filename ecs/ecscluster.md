# ECS Cluster

<br/>

### Prerequisites

- [Load Balancer Security Group](https://github.com/cyber-netics/testX/blob/main/.assets/securitygroup/securitygroup.md#load-balancer-security-group)
- [Load Balancer](https://github.com/cyber-netics/testX/blob/main/.assets/loadbalancer/loadbalancer.md#load-balancer-configuration)
- [ECS Security Group](https://github.com/cyber-netics/testX/blob/main/.assets/securitygroup/securitygroup.md#ecs-security-group)
- [VPC](https://github.com/cyber-netics/testX/blob/main/.assets/vpc/vpc.md#steps)
- [CodeBuild Security Role](https://github.com/cyber-netics/testX/blob/main/.assets/securityrole/securityrole.md#security-role-for-codebuild)
- [Task Definition](https://github.com/cyber-netics/testX/blob/main/.assets/ecs/ecstaskdef.md#create-ecs-task-definition)

---

<br/>

## Steps

<table style="padding-top: 15px; padding-bottom: 15px">
  <tr>
    <th align="center">
      <img width="441" height="1" />
      <p>
        <small> Create Cluster</small>
      </p>
    </th>
    <th align="center">
      <img width="441" height="1" />
      <p>
        <small> Create Cluster Service </small>
      </p>
    </th>
  </tr>
  <tr>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/ecscluster.md#create-cluster"
        >Cluster Template</a
      >
      <pre> 1. EC2 Linux + Networking</pre>
    </td>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/ecscluster.md#create-service-for-ecs-cluster"
        >Configure Service</a
      >
      <pre>  1. Select EC2 for Lunch type <br/>  2. Select Task Definition <br/>  3. Select Cluster <br/>  4. Number of Tasks to Run</pre>
    </td>
  </tr>
  <tr>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/ecscluster.md#configure-cluster"
        >Configure Cluster</a
      >
      <pre>  1. Name the Cluster <br/>  2. Select Instance Type</pre>
    </td>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/ecscluster.md#service-deployment-configuration"
        >Service Deployment</a
      >
      <pre>  1. Select Blue/Green Deployment <br/>  2. Select CodeDeploy Service Role </pre>
    </td>
  </tr>
  <tr>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/ecscluster.md#networking-configuration"
        >Network Configuration</a
      >
      <pre>  1. Select VPC and all it's Public networks <br/>  2. Assign Public IP Enabled <br/>  3. Elect ECS Securty Group </pre>
    </td>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/ecscluster.md#load-balancer-configuration"
        >Load Balancer</a
      >
      <pre>  1. Select Application Load Balancer <br/>  2. Select AWSServiceRoleForECS IAM Role. <br/>  3. Select Load Balancer</pre>
    </td>
  </tr>
  <tr>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/ecscluster.md#ecs-iam-role"
        >Container Instance IAM Role</a
      >
      <pre>  1. Select IAM Role, if Doesn't Exist Select Create New</pre>
    </td>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/ecscluster.md#container-to-load-balancer"
        >Container To Load Balancer</a
      >
      <pre>  1. Container name:port <br/>  2. Add Load Balancer <br/>  3. Production Port 80:HTTP <br/>  4. Select Created LB Target Group  <br/>  5. Create Target Group 2</pre>
    </td>
  </tr>
</table>

---

<br/>
<br/>

## Create Cluster

- **`Create Cluster In ECS`**
  <p>
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/images/ecscluster/ecs-create-cluster.png"/>
  </p>

<br/>

- **`Select Cluster Template, ECS Linux + Networking`**
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/images/ecscluster/ecs-cluster-template.png" height="500px"/>
  </p>

<br/>

### Configure Cluster

- **`Give a Cluster name, and select (t2.small) `** [EC2 instace type](https://aws.amazon.com/ec2/instance-types/)\
  **`Give Number of Instances (home many instances to run)`**
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/images/ecscluster/ecs-cluster-config.png" height="500px"/>
  </p>

<br/>

### Networking Configuration

- **`Configure Networking, Select`** [VPC that we created](https://github.com/cyber-netics/testX/blob/main/.assets/vpc/vpc.md#steps)\
  **`Select all Public Networks`**\
  **`Set Auto Assign public ip to Enable`**\
  **`Select Security Group Created in Above Step`**
  <p>
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/images/ecscluster/ecs-cluster-networking.png" height="650px" width="100%"/>
  </p>

<br/>

> **_NOTE:_** **In above step Select Security Group that we created for ECS** > ![alt text](https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/images/ecscluster/ecs-cluster-select-sg.png)

<br/>

### ECS IAM Role

- **`Select Container Instace IAM Role, If don't have one Select Create New Role`**
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/images/ecscluster/ecs-create-cluster-rest.png" height="550px"/>
  </p>

<br/>

- **`Now we can see created cluster in the list`**
  <p>
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/images/ecscluster/ecs-cluster-dashboard.png"/>
  </p>

- **`After Creating Cluster AWS Created ecsInstanceRole in IAM, We Need To Attach extra Roles`**
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/securityrole/images/ecs-cluster-role-list.png"/>
  </p>

- **`1. AmazonS3FullAccess`**\
  **`2. AmazonECS_FullAccess`**
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/securityrole/images/security-role-ecs-roles.png"/>
  </p>

<br/>

---

<br/>

## Create Service for ECS Cluster

<br/>

- **`Click on Create`**
  <p>
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/images/ecscluster/ecs-create-cluster-service.png"/>
  </p>

<br/>

### ECS Cluster Service Config

- **`ECS Cluster Service Config`**\
  **`Lunch Type: EC2`**\
  **`Select Task Definition that we created in`** [Task Def. section](https://github.com/cyber-netics/testX/blob/main/.assets/ecs/ecstaskdef.md#ecs-task-definition)\
  **`Select Cluster that we just created`**\
  **`Give Service name`**\
  **`Number of Tasks to be created: 1`**
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/images/ecscluster/ecs-cluster-service-config.png" height="550px"/>
  </p>

<br/>

### Service Deployment Configuration

- **`Deployment Configuration`**\
  **`Select Blue/Green Deployment`**\
  **`Select Role For CodeBuild. Code Build Role that we just created`**
  <p>
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/images/ecscluster/ecs-cluster-service-deployment.png"/>
  </p>

<br/>

- **`Task Placement Leave as default, Next`**
  <p>
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/images/ecscluster/ecs-cluster-service-task-placement-default.png"/>
  </p>

<br/>

### Load Balancer Configuration

- **`Set Load Balancer for ECS Cluster Service`**\
  **`Select Service IAM Role, if doesn't exits select`** `Create New Role`\
  **`Select Load Balancer, just created in this section`**
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/images/ecscluster/ecs-cluster-service-loadbalancer-config.png" height="900px"/>
  </p>

<br/>

### Container To Load Balancer

- **`Once You Click Add to Load Balancer Container Load Balance will appear`** \
  **`Select port 80 for production listener`**\
  **`You can add another port for test listener otherwise Unmark Test listener`**
  <p>
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/images/ecscluster/ecs-cluster-service-loadbalancer-config-addto-lb.png"/>
  </p>

<br/>

- **`Additional Configuration`**\
  **`Select Target Group TG1(created in load balancer setup section)`**\
  **`Select Create New for Target Group 2, Give Name TG2`**
  <p>
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/images/ecscluster/ecs-cluster-service-additional-config.png"/>
  </p>

<br/>

- **`Leave Auto Scaling Default (we can add later)`**
  <p>
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/images/ecscluster/ecs-cluster-service-autoscaling.png"/>
  </p>

<br/>

- **`Confirm and Create Service`**
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/images/ecscluster/ecs-cluster-service-config-review.png" height="700"/>
  </p>

<br/>

- **`In the Cluster we can see Service has been created`**
  <p>
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/images/ecscluster/ecs-cluster-service-list.png"/>
  </p>

<br/>

- **`In Cluster Under Tasks you can see Task has been created`**
  <p>
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/images/ecscluster/ecs-cluster-tasks-created.png"/>
  </p>

<br/>

- **`In Cluster Under Event you can see steps. service MyApp-Service has reached a steady state means it successfuly updated ECS`**
  <p>
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/images/ecscluster/ecs-cluster-task-event.png"/>
  </p>

<br/>

- **`In VPC -> Target Groups, Under TG1 you can see Load Balancer Registered Target, and status is healthy`**
  <p>
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/images/ecscluster/ecs-cluster-target-group-registered-target.png"/>
  </p>

<br/>

- **`In VPC -> Load Balancer, Under Basic Configuration we can copy DNS name which is the url for the website`**
  <p>
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/images/ecscluster/ecs-cluster-lb-dnas-name.png"/>
  </p>

<br/>

---

<br/>

## [Next Up: Auto Scaling](https://github.com/cyber-netics/testX/blob/main/.assets/autoscaling/autoscaling.md#auto-scaling)
