# Security Security Groups

<br/>

## Prerequisites

- [VPC](https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/vpc/vpc.md#aws-vpc-virtual-private-network)

<br/>

## Steps

<table>
  <tr>
    <th align="center">
      <img width="441" height="1" />
      <p>
        <small>Load Balancer Security Group</small>
      </p>
    </th>
    <th align="center">
      <img width="441" height="1" />
      <p>
        <small>ECS Security Group</small>
      </p>
    </th>
  </tr>
  <tr>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/securitygroup/securitygroup.md#load-balancer-security-group"
        >Create Load Balancer Security Group</a
      >
      <pre>  1. In Inboud Rules Add Rules<br/>  2. Add Two HTTP Type Rules<br/>  3. One Points to <b>0.0.0.0/0</b> other one to <b>::/0</b> <br/>  4. Give Name to Role</pre>
    </td>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/securitygroup/securitygroup.md#ecs-security-group"
        >Create ECS Security Group</a
      >
      <pre>  1. In Inboud Rules Add Rule <br/>  2. Add Custom TCP Type Rule <br/>  3. Set Port Range <b>32768-65535</b> <br/>    Select Destination Load Balancer Security Group</pre>
    </td>
  </tr>
</table>

<br/>

---

<br/>
<br/>

## In VPC Section, security groups

- **`Create Security Group for ECS & Load Balancer In VPC`**
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/securitygroup/images/security-group-dashboard.png" height="600px"/>
  </p>

<br/>

## Load Balancer Security Group

- **`In VPC Create Security group for Load Balancer`**\
**` Make port 80 accessible to everywhere, which will be url to the website through load balancer`**
  <p>
   <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/securitygroup/images/security-group-loadbalancer.png"/>
 </p>

<br/>

## ECS Security Group

- **`Create Security Group for ECS`**\
  **`Specify Port rage (32768-65535) and select load balancer. we will access ECS through load balancer`**
  <p>
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/securitygroup/images/security-group-ecs.png"/>
  </p>

<br/>
<br/>

## [Next Up: Load Balancer](https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/loadbalancer/loadbalancer.md#load-balancer)
