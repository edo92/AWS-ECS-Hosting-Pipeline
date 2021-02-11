## AWS Codebuild buildspec.yml

### buildspec.yml includes build stages, [pre_build, build, post_build]
- buildspec.yml is instructions how to build the project 

### pre_build
- login to aws ecr to save image
- npm install for helpers depends
- create environmental variables with custom script
- build docker images for testing

### build
- run built tests
- build production images

## post_build
- tag built images
- push images to aws ecr (elastic container registry)

## artifacts
- artifacts (appspec.yml, taskdef.json)
- appspec.yml -> taskdef arn, container name (nginx), container port(nginx:port)
- taskdef.json -> ECS task definition configuration

```yml
version: 0.2

phases:
  install:
    runtime-versions:
      docker: 18

  pre_build:
    commands:
      # Login to aws ECR
      - aws ecr get-login-password --region $AWS_DEFAULT_REGION | docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com

      # Install dev depends
      - npm install

      # Create  environmental variables
      - python ./scripts/prod_deploy.sh $AWS_ACCOUNT_ID $AWS_DEFAULT_REGION

      # Build images for testing
      - docker build -t backend_test -f ./src/backend/Dockerfile.Dev ./src/backend
      - docker build -t client_test -f ./src/client/Dockerfile.Dev ./src/client
  build:
    commands:
      # Test images
      - docker run -e CI=true backend_test
      - docker run -e CI=true client_test

      # Build images for production
      - docker build -t backend ./src/backend
      - docker build -t client ./src/client
      - docker build -t nginx ./src/nginx

  post_build:
    commands:
      # Tag images for ECR
      - docker tag backend $AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/backend:latest
      - docker tag client $AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/client:latest
      - docker tag nginx $AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/nginx:latest

      # Push each image to aws ECR
      - docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/backend:latest
      - docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/client:latest
      - docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/nginx:latest

artifacts:
  name: artifacts
  files:
    # Artifacts for codeDeploy, stores in S3
    - ./appSpec.yml
    - ./taskdef.json
```