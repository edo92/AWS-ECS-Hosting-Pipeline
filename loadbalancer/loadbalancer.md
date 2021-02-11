# Create Load Balancer
- Image result for aws what is load balancer for A load balancer serves as the single point of contact for clients. The load balancer distributes incoming application traffic across multiple targets, such as EC2 instances, in multiple Availability Zones. This increases the availability of your application. You add one or more listeners to your load balancer.

<br/>

## Prerequisites 
- [VPC](https://github.com/cyber-netics/testX/blob/main/.assets/vpc/vpc.md#aws-vpc-virtual-private-network)
- [Security Groups](https://github.com/cyber-netics/testX/blob/main/.assets/securitygroup/securitygroup.md#security-security-groups) 

<br/>

## Steps
<table align="center">
  <tr>
    <th align="center">
      <img width="441" height="1" />
      <p>
        <small>Load Balancer</small>
      </p>
    </th>
  </tr>
  <tr>
    <td>
      <a
        href="https://github.com/cyber-netics/testX/blob/main/.assets/ecs/images/ecs-cluster-template.png"
        >Create Load Balancer</a
      >
      <pre>  1. Select Application Load Balancer</pre>
    </td>
  </tr>
  <tr>
    <td>
        <a
          href="https://github.com/cyber-netics/testX/blob/main/.assets/loadbalancer/loadbalancer.md#load-balancer-configuration"
          >Configure Load Balancer</a
        >
        <pre>  1. Give Name To Load Balancer <br/>  2. Select VPC and All Public Subnets</pre>
    </td>
  </tr>
  <tr>
    <td>
      <a
        href="https://github.com/cyber-netics/testX/blob/main/.assets/loadbalancer/loadbalancer.md#configure-routing-target-group"
        >Configure Routing Target Group</a
      >
      <pre>  1. Configure Target Group Routing, Name TG1</pre>
    </td>
  </tr>
</table>

<br/>

---

<br/>
<br/>

## Load Balancer Configuration
- **`Create Load Balancer In EC2 Section (Naviate AWS to EC2, Select Load Balancer Tab)`**
  <p align="center">
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/loadbalancer/images/loadbalancer-dashboard.png" height="450px"/>
  </p>

<br/>

- **`Select Load Balancer Type (Application Load Balancer)`**
  <p align="center">
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/loadbalancer/images/loadbalancer-type.png" hight="450px"/>
  </p>

<br/>

- **`Select Name For Load Balancer`**
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/loadbalancer/images/loadbalancer-config.png"/>
  </p>

<br/>

- **`Select VPC and Availibility Zone, And Public Subnets`**
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/loadbalancer/images/loadbalancer-availibility-zone.png"/>
  </p>

<br/>

- **`Leave Add-on Service with default configs, click next`**
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/loadbalancer/images/loadbalancer-addon.png"/>
  </p>

<br/>

- **`HTTPS Warning. Need to create SSL for load balancer. This step we can do latest.`**
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/loadbalancer/images/loadbalancer-ssl-warning.png"/>
  </p>

<br/>

- **`Select Load Balancer Security Group `LoadBalancer-SG``**
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/loadbalancer/images/loadbalancer-security-group.png"/>
  </p>

<br/>

### Configure Routing Target Group
- **`Configure Load Balancer Target Group. (Target groups listen to specific port)`**
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/loadbalancer/images/loadbalancer-target-group.png"/>
  </p>

<br/>

- **`Register Targets Leave default, next`**
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/loadbalancer/images/loadbalancer-register-target.png"/>
  </p>

<br/>

- **`Review and Create`**
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/loadbalancer/images/loadbalancer-review.png"/>
  </p>

<br/>

- **`Successful Creation of load balancer`**
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/loadbalancer/images/loadbalancer-creation-success.png"/>
  </p>

<br/>

- **`Now we can see Load Balancer has been created`**
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/loadbalancer/images/loadbalancer-listed.png"/>
  </p>

<br/>

- **`And we can see Target Group is created`**
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/loadbalancer/images/loadbalancer-target-group-listed.png"/>
  </p>

<br/>

---

<br/>


## Next up: [Create ECS Task Definition](https://github.com/cyber-netics/testX/blob/main/.assets/ecs/ecstaskdef.md)
