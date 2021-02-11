# Auto Scaling

- Auto Scaling is an Optional feature. resources respond to changes in demand. You can optimize availability, costs, or a balance of both. AWS Auto Scaling automatically creates all of the scaling policies and sets targets for you based on your preference.

<br/>
<br/>

## Prerequisites

- [ECS Service](https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/ecs/ecscluster.md#ecs-cluster)

<br/>
<br/>

## Auto Scaling Configuration

- In ECS Cluster Select Service and Click Update
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/autoscaling/images/autoscaling-update-service.png"/>
  </p>

- Press Next Step (3 times) until you reach set auto scaling section
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/autoscaling/images/autoscaling-section.png"/>
  </p>

- Select second option, Configure Service Auto Scaling to adjust your service’s desired count
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/autoscaling/images/autoscaling-option.png"/>
  </p>

- Set Min Max Number of instances allowed to create
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/autoscaling/images/autoscaling-min-max-instances.png"/>
  </p>

- **`Add Scaling Policy (settings)`**
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/autoscaling/images/autoscaling-add-scaling-policy.png"/>
  </p>

- **`Autoscaling policy based on cpu`**\
**`Give a name, and Select target value which is in percentage`**\
 **`ECS Service Metric has options what metric to target (If CPU or Memory Reaches 75% than create new instance)`**
 <p>
   <img src="https://github.com/cyber-netics/testX/blob/main/.assets/autoscaling/images/autoscaling-policy-config.png"/>
 </p>
