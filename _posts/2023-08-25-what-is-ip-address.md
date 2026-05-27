---
title: "What Is an IP Address?"
category: research
tags: [Network, IP Address, Internet Protocol]
excerpt_custom: "What is an IP address, and what is it used for? An introductory guide to networking that explains IPv4 classes, the difference between public and private IP addresses, and the transition to IPv6."
---
![IP Address](/assets/img/posts/ip-address.png)
## What Is an IP Address?

IP is actually an abbreviation—it stands for **Internet Protocol**. It is a protocol that operates at Layer 3 of the OSI Model. It is 32 bits long, meaning it consists of 4 octets. Each octet takes a decimal value between 0 and 255. This applies to IPv4.

## What Does an IP Do?

IP addresses enable packets to travel from one end to the other. It is a unique address that remains unchanged from the moment packet transmission begins. In short, it is our identification number—or even our fingerprint.

## What Are Its Features?

- It is a **connectionless** protocol. When a packet is sent to its destination, it does not check whether the destination exists or not. At this stage, the **ICMP** protocol assists the IP protocol.
- It is a protocol that is **independent** of the medium through which data is transmitted. It does not matter whether the medium is air, fiber, or copper.
- It does not **guarantee** packet delivery. It does not concern itself with whether a packet has been sent or not, or even if it was sent in a corrupted state. There are other protocols that handle these matters.

## IP Address Classes

When IPv4 addresses were first created, there was a class-based system. These classes provided different IP address ranges. The ranges were too large, and even a business with just 10 devices would end up with 254 IP addresses if it were assigned the smallest range. To solve this problem, the **IETF** phased out the class-based system and transitioned to **CIDR**.

**Subnet Mask**: Separates the network and host portions of an IP address. A subnet mask is required whenever an IP address is assigned or allocated.

## Types of IP

IP addresses are divided into two categories: **Public** and **Private**:

- **Public IP:** These are addresses that are publicly accessible on the internet.
- **Private IP:** These do not connect to the internet and cannot be accessed from outside. For example, this type of IP is used for internal communication within military organizations.

Private IP ranges:

| Range | Class |
|---|---|
| 10.0.0.0 – 10.255.255.255 | A |
| 172.16.0.0 – 172.31.255.255 | B |
| 192.168.0.0 – 192.168.255.255 | C |

## IPv6

Since IPv4 addresses are 32 bits long, there are 2³² possible addresses worldwide. As these began to run out, the **IETF** developed 128-bit IPv6 addresses. This capacity is so vast that, in theory, every light bulb in a home could be assigned an IP address. Currently, many large organizations are gradually transitioning to IPv6.
