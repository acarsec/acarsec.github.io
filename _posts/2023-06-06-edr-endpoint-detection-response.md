---
title: "What Is EDR? How Does It Work?"
category: research
tags: [Cybersecurity, Security Solutions, EDR, Defensive]
excerpt_custom: "What is EDR, and how does it differ from antivirus software? A guide explaining how Endpoint Detection and Response systems work in 5 steps."
---
![EDR](/assets/img/posts/Endpoint-Detection-and-Response-EDR.jpg)
## What is EDR (Endpoint Detection and Response)?

The term **Endpoint Threat Detection and Response (ETDR)**, coined by Anton Chuvakin of Gartner in 2013, began to be referred to as **Endpoint Detection and Response (EDR)** starting in 2015.

EDR is a security technology used to monitor endpoint devices connected to a network, analyze the activities taking place, and intervene in activities that constitute an attack or a threat. Endpoints include any device on the network, such as desktop computers, laptops, mobile devices, and servers.

EDR software can only monitor and analyze network traffic when it is running on the server. However, to fully benefit from EDR, it must also be installed on endpoints.

EDR systems can operate on their own, but they need to work in conjunction with other security products to enhance security. A free and open-source alternative is **OpenEDR**, developed by Comodo.

## Why Should We Use EDR Instead of Antivirus?

Antivirus software uses malware signatures to detect malware on computer systems, and then removes or quarantines it.

EDR software, in addition to the features found in antivirus programs, can also stop threats by using **behavioral detection**. In this regard, it offers a proactive approach to cybersecurity. Additionally, it ensures that all data is sent to and managed from a single point.

Examples of abnormal behavior:

- Too many incorrect login attempts
- Unauthorized installation of known or unknown software
- Unauthorized changes to device settings
- Data traffic to phishing and malware servers
- Abnormal DNS queries

## How Does EDR Work?

**1. Installation on Endpoints**

EDR is designed to ensure security at the endpoints on the network. The EDR software installed on endpoints continuously monitors device activity and collects data for threat detection.

**2. Data Collection**

The data collected from endpoints is sent to a server in the cloud or to a server located within the organization. This data includes device credentials, file changes, network traffic, system activity logs, and user behavior.

**3. Data Analysis**

EDR software performs analyses using predefined rules, artificial intelligence, and machine learning. Thanks to machine learning, the collected data is analyzed and compared with historical data to generate recommendations.

**4. Threat Detection**

EDR software detects threats based on comparisons and analyses performed on the data. These threats may include malware, identity theft, data breaches, or other types of attacks.

**5. Response**

After threats are detected, it performs actions that match predefined triggers—similar to SOAR systems—sends alerts to security teams, and can quarantine or remove malware.

All of these processes continue in a loop and are stored for reuse.

> Just as no system is completely secure, no software can fully protect us. Cybersecurity is an ongoing effort—and in this effort, proactive defense is more important than reactive defense.
