## App Spec yml is a template that defines ECS Claster Service
- [More info in offical docs](https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-example.html)

```yml
version: 0.0
Resources:
  - TargetService:
      Type: AWS::ECS::Service
      Properties:
        TaskDefinition: "arn:aws:ecs:$AWS_DEFAULT_REGION:$AWS_ACCOUNT_ID:task-definition/$SERVICE_NAME"
        LoadBalancerInfo:
          ContainerName: "$CONTAINER_NAME"
          ContainerPort: $CONTAINER_PORT

```