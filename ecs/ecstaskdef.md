# ECS Task Definition

- A task definition is required to run Docker containers in AWS ECS.

<br/>
<br/>

## Prerequisites

- [ECS Security Group](https://github.com/cyber-netics/testX/blob/main/.assets/securitygroup/securitygroup.md#security-security-groups)
- [VPC](https://github.com/cyber-netics/testX/blob/main/.assets/vpc/vpc.md#aws-vpc-virtual-private-network)

<br/>
<br/>

## Steps

<table align="center">
  <tr>
    <th align="center">
      <img width="441" height="1" />
      <p>
        <small>ECS Task Definition</small>
      </p>
    </th>
  </tr>
  <tr>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/tree/docs/ecsecstaskdef.md#create-ecs-task-definition"
        >Create ECS Task Definition</a
      >
      <pre> 1. Create New Task Definition  <br/> 2. Select EC2 Type <br/> 3. Give Task Defin. a name</pre>
    </td>
  </tr>
  <tr>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/tree/docs/ecsecstaskdef.md#nginx-container"
        >Add Nginx Containers</a
      >
      <pre>  1. Add Container for nginx <br/>  2. give name, add Image URL <br/>  3. memory limit 200 (Soft Limit)  <br/>  4.  Port (0, 80) <br/>  5. Mark Essential <br/>  6. Link: client, backend</pre>
    </td>
  </tr>
  <tr>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/tree/docs/ecsecstaskdef.md#backend-container"
        >Add Backend Containers</a
      >
      <pre>  1. Add Container for backend <br/>  2. give name, add Image URL <br/>  3. memory limit 300 (Soft Limit)  <br/>  4.  Dont Add Anyting to Port <br/>  5. UnMark Essential</pre>
    </td>
  </tr>
  <tr>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/tree/docs/ecsecstaskdef.md#client-container"
        >Add Client Containers</a
      >
      <pre>  1. Add Container for client <br/>  2. give name, add Image URL <br/>  3. memory limit 300 (Soft Limit)  <br/>  4.  Dont Add Anyting to Port <br/>  5. UnMark Essential</pre>
    </td>
  </tr>
</table>

<br/>

---

<br/>

## Create ECS Task Definition

- **`Create Task Definition`**
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/images/ecstaskdef/task-def-create-taskdef.png"/>
  </p>

<br/>

- **`Select EC2 Type`**
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/images/ecstaskdef/task-def-lunch-type-ec2.png" height="500px"/>
  </p>

<br/>

- **`Give Task Definition a Name, leave the rest as default`**
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/images/ecstaskdef/task-def-configuration.png" height="500px"/>
  </p>

<br/>

- **`AWS will create Role ecsTaskExecutionRole for ecs to pull ECR images`**
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/images/ecstaskdef/task-def-taskexecution-role.png"/>
  </p>

<br/>

- **`Specify Task Def Size, or leave empty which will set to actiual size that task def needs`**
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/images/ecstaskdef/task-def-task-size.png"/>
  </p>

<br/>

## Add Task Definition Containers

- **`Add Nginx, Client, Backend Containers`**
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/images/ecstaskdef/task-def-addcontainer.png"/>
  </p>

<br/>

> **_NOTE:_** Images will be created in future setp when we build Pipeline. (CodeBuild will build, and upload images to ECR)
> ![alt text](https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/images/ecstaskdef/task-def-images-ecr.png)

<br/>

### Nginx Container

- **`Add Nginx Container, Add Image Url from ECR`**
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/images/ecstaskdef/task-def-nginx-container.png"/>
  </p>

<br/>

- **`Make Sure Essential is marked for Nginx`**
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/images/ecstaskdef/task-def-essential-marked.png"/>
  </p>

<br/>

- **`Link client and backend containers to Nginx`**
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/images/ecstaskdef/task-def-nginx-linked-containers.png"/>
  </p>

<br/>

### Backend Container

- **`Add Backend Container`**
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/images/ecstaskdef/task-def-backend-container.png"/>
  </p>

<br/>

- **`Unmark Essential`**
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/images/ecstaskdef/task-def-essential-unmarked.png"/>
  </p>

<br/>

### Client Container

- **`Add Client`**
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/images/ecstaskdef/task-def-client-container.png"/>
  </p>

<br/>

- **`Unmark Essential`**
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/images/ecstaskdef/task-def-essential-unmarked.png"/>
  </p>

<br/>

- **`Leave Rest as default, and press create`**
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/images/ecstaskdef/task-def-rest-default.png"/>
  </p>

<br/>

- **`Now we can see created task def in the list`**
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/images/ecstaskdef/task-def-result.png"/>
  </p>

<br/>

---

<br/>

### [Next up: ECS Cluster/Service](https://github.com/edo92/AWS-ECS-Hosting-Pipeline/tree/docs/ecsecscluster.md)
