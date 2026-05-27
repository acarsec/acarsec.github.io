---
title: "What Is the AAA Security Concept?"
category: research
tags: [AAA, Cybersecurity, Network, Network Security]
excerpt_custom: "What is AAA? An introductory guide explaining the concepts of Authentication, Authorization, and Accounting and their roles in network security."
---
![AAA Security Concept](/assets/img/posts/aaa-security-concept.webp)
## What is AAA?

**AAA** is a framework that enables the tracking of who is permitted to connect to a network, what actions they can perform, what resources they can access, and the duration of their access. It consists of three processes:

- **Authentication**
- **Authorization**
- **Accounting**

## Authentication 

It determines whether the correct person has logged in. Authentication can be performed using a username, password, or other methods.

## Authorization

After authentication, it determines the resources the user or device can access and the actions they can perform. In short, it specifies which resources the user is authorized to access and which they are not. This information is stored on AAA servers. Once the permissions are retrieved from the AAA server—for example, if the device is connected to a switch—ACL rules are applied to the connected port, preventing unauthorized access.

## Accounting

It involves monitoring and logging activities performed on the network. It records which users accessed which resources, what types of actions they performed, and how long they used them. In addition to this, the following information is logged:

- What time did they log in?
- How long did they stay online?
- How much bandwidth did they use?
- When did they log out?
