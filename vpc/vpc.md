# AWS VPC (Virtual Private Network)

- Enables you to launch AWS resources into a virtual network, where resources can communicate with each other via private network and gives internet getway.

<br/>

<br/>

## Steps

- **VPC & Additional Subnets**

<table style="padding-top: 15px; padding-bottom: 15px">
  <tr>
    <th align="center">
      <img width="441" height="1" />
      <p>
        <small>VPC Setup</small>
      </p>
    </th>
    <th align="center">
      <img width="441" height="1" />
      <p>
        <small>Subnets</small>
      </p>
    </th>
  </tr>
  <tr>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/vpc/vpc.md#elastic-ip"
        >Elastic IP</a
      >
      <pre> 1. Allocate Elastic IP </pre>
    </td>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/vpc/vpc.md#additional-public-subnet"
        >Create Additional Public Subnet</a
      >
      <pre> 1. Create Public Subnet 2 <br/> 2. Select Avail. Zone other than original <br/> 3. Give IP Address (10.0.2.0/24)</pre>
    </td>
  </tr>
  <tr>
     <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/vpc/vpc.md#lunch-vpc-wizard"
        >VPC Wizard</a
      >
      <pre> 1. Lunch VPC Wizard  <br/> 2. Select Public and Private Subnets  <br/> 3. Name VPC  <br/> 4. Select Elastic IP that we just created</pre>
    </td>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/vpc/vpc.md#additional-private-subnet"
        >Create Additional Private Subnet</a
      >
      <pre> 1. Create Private Subnet 2 <br/> 2. Select Avail. Zone other than original <br/> 3. Give IP Address (10.0.3.0/24)</pre>
    </td>
  </tr>
</table>

- **Subnets & Route Table Association**
<table style="padding-top: 15px; padding-bottom: 15px">
  <tr>
    <th align="center">
      <img width="441" height="1" />
      <p>
        <small>Route Table Association</small>
      </p>
    </th>
    <th align="center">
      <img width="441" height="1" />
      <p>
        <small>Subnet Association</small>
      </p>
    </th>
  </tr>
  <tr>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/vpc/vpc.md#change-public-subnet-2-route-table-association"
        >Change Public Subnet 2 Route Association</a
      >
      <pre> 1. In Subnet, Under Route Table <br/>    Edit Route Table Assoc. <br/> 2. Select igw-xxxxx </pre>
    </td>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/vpc/vpc.md#route-tables-subnet-association"
        >Public Route Table Association</a
      >
      <pre> 1. In Route Table Select Public RT <br/> 2. Under Subnet Association <br/>    Edit Subnet Association  <br/> 3. Select/Mark All Public Subnets</pre>
    </td>
  </tr>
  <tr>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/vpc/vpc.md#subnet-route-table-association-target"
        >Subnets Route Association</a
      >
      <pre> 1. All Public Subnets Must Target igw-xxxx <br/> 2. All Private Subnets Must target nat-xxxx</pre>
    </td>
    <td>
      <a
        href="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/vpc/vpc.md#route-tables-subnet-association"
        >Private Route Table Association</a
      >
      <pre> 1. In Route Table Select Private RT <br/> 2. Under Subnet Association Edit Subnet Assoc. <br/> 3. Select/Mark All Private Subnets</pre>
    </td>
  </tr>
</table>

<br/>
<br/>

## Elastic Ip

- **`Navigate to AWS VPC`**\
**` In order to create VPC we will need elastic ip, which is reserved public IP address that vpc uses`**
 <p align="center">
   <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/vpc/images/vpc-elasticip.png"/>
 </p>

- **`Allocate Elastic Ip Address`**
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/vpc/images/vpc-allocationEI.png" height="650px"/>
  </p>

<br/>

### Lunch VPC Wizard

- **`Lunch wizard`**
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/vpc/images/vpc-lunch-wizard.png"/>
  </p>

- **`VPC with private and public Subnets`**
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/vpc/images/vpc-wizard-start.png" />
  </p>

<br/>

- **`Configure VPC Wizard, Create VPC`**
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/vpc/images/vpc-private_public-subnets.png"/>
  </p>

<br/>

- **`Successful VPC creation`**\
  It creates 1-VPC, 2-Subnets(public & private), 1-Internet Getway, 1-DHCP, 1-NAT-Getway, 1-Network
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/vpc/images/vpc-create-success.png" height="450px"/>
  </p>

<br/>

## Create additional subnets (private & public)

- **`Create additional Private and public subnets`**
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/vpc/images/vpc-create-additional-subnets.png"/>
  </p>

> **_NOTE:_** Wizard Created Subnets On `us-east-2c` Availibility Zone
> ![alt text](https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/vpc/images/ecs-vpc-wizard-subnet-availibility-zone.png)

<br/>

### Additional Public Subnet

- **`Create Public subnet 2 that has ip 10.0.2.0/24`**\
  **_NOTE:_** Select Availibility Zone different than `us-east-2c`, which is in use by other 2 subnets\
  Select `us-east-2a` Availibility Zone
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/vpc/images/vpc-additional-public-ip.png" height="650px"/>
  </p>

<br/>

### Additional Private Subnet

- **`Create Private subnet 2 that has ip 10.0.3.0/24`**\
 Select `us-east-2a` Availibility Zone, must be same AZ that we selected for Public Subnet 2
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/vpc/images/vpc-additional-private-ip.png" height="650px"/>
  </p>
<br/>

## VPC Dashboard

- **`You end up with this result`**
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/vpc/images/vpc-end-result-dashboard.png"/>
  </p>

<br/>

## Change Public Subnet 2 Route Table Association

- **`Edit route table association of newly Created Public Subnet to point to igw-xxxxx`**
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/vpc/images/vpc-configure-route-tables.png"/>
  </p>

<br/>

## Subnet Route Table Association Target

- **Public subnets route table must point to igw-xxxxxx**
- **Private subnets route table must point to nat-xxxxx**
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/vpc/images/vpc-route-table-publicip-association.png" height="650px"/>
  </p>

---

<br/>

## Route Tables Subnet Association

- **`Public Route Tables must have Target Network as iwg-xxxxx`**
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/vpc/images/vpc-route-table-public-target-network.png"/>
  </p>

<br/>

- **`Private Route Tables must have Target Network as nat-xxxxx`**
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/vpc/images/vpc-route-table-private-target-network.png"/>
  </p>

<br/>

- **`Public Route Table Edit Subnet association`**
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/vpc/images/vpc-route-table-public-subnet-assoc-edit.png"/>
  </p>

- **`Select all Public Subnets in the table`**
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/vpc/images/vpc-route-table-public-subnet-assoc-table.png"/>
  </p>

<br/>

- **`Private Route Table Edit Subnet association`**
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/vpc/images/vpc-route-table-private-subnet-assoc-edit.png"/>
  </p>

- **`Select all Public Subnets in the table`**
  <p align="center">
    <img src="https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/vpc/images/vpc-route-table-private-subnet-assoc-table.png"/>
  </p>

<br/>

---

<br/>

## Next Up: [Security Roles](https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/docs/securityrole/securityrole.md#security-roles)
