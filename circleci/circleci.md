# CircleCI Integration with GitHub
- CircleCI in this projects is used to run integration testing and linting test
- It makes sure that broken or bad written code won't get merged in main branch

<br/>
<br/>

## Setup Github
- Add Rule for github branch
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/circleci/images/github-branch-rules.png"/>
  </p>

- Configure branch protection rule
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/circleci/images/github-branch-protection-rules.png"/>
  </p>

<br/>

## Configure Github Webhooks
- This Config makes github to trigger circleci only on pull request
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/circleci/images/github-webhooks-options-1.png"/>
  </p>
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/circleci/images/github-webhooks-options-2.png"/>
  </p>

<br/>

## CircleCI Setup
- Go to Circleci.com and register
- After go to projects section and click Set Up Project
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/circleci/images/circleci-setup-project.png"/>
  </p>

- Config CIrcleCi, In Projects section click on Project Settings
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/circleci/images/circleci-configure.png"/>
  </p>

- Under Advenced (settings) Change configurations
  <p>
    <img src="https://github.com/cyber-netics/testX/blob/main/.assets/circleci/images/circleci-change-configs.png"/>
  </p>

- You need to create .circleci directory and config.yml file inside
- Config yml file is the instructions how to run your tests (in your case test only, but it can be bundle, build, test setps)
- In insturctions we have 2 separate builds where we build client and backend separatly

```yml
jobs:
  client:
    docker:
      - image: cimg/node:15.8.0
    steps:
      - checkout
      - run:
          name: Installation depends
          command: |
            npm run setup-client
      
      - run:
          name: Test Linting
          command: |
            npm run lint-client

      - run:
          name: Run Client Unit Test
          command: |
            npm run test-client

  backend:
    docker:
      - image: cimg/node:15.8.0
    steps:
      - checkout
      - run:
          name: Installation depends
          command: |
            npm run setup-backend

      - run:
          name: Test Linting
          command: |
            npm run lint-backend

      - run:
          name: Run Backend Unit Test
          command: |
            npm run test-backend


workflows:
  version: 2
  build:
    jobs:
      - client
      - backend
```