# CodeDeploy

<br/>
<br/>

### CodeDeploy Setup

- **`In Our Case CodeDeploy has been created when we create ECS Cluster Service.`**\
  **`We can modify CodeDeploy settings by Navigating to AWS CodeDeploy, Click on the Deploy Application`**
  <p>
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/codedeploy/images/codedeploy-navigate-to-app.png"/>
  </p>

- **`Click On Deployment Group`**
  <p>
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/codedeploy/images/codedeploy-inisde-app.png"/>
  </p>

- **`Inside Deployment Group, Click Edit on the top right corner`**
  <p>
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/codedeploy/images/codedeploy-edit-settings.png"/>
  </p>

- **`At the bottom of CodeDeploy Settings change 1 hour to 5 minutes`**\
**` This will make deployment transfer from original instance to revisition instance in 5 minutes rather than 1 hour`**
 <p>
   <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/codedeploy/images/codedeploy-configuration.png"/>
 </p>

<br/>

---

<br/>

## Next Up: [Code Pipeline](https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/codepipeline/pipeline.md#codepipeline)
