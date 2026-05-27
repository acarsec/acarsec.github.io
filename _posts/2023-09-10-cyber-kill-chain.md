---
title: "What Is the Cyber Kill Chain?"
category: research
tags: [Cyber Kill Chain, Cybersecurity, Defensive, Offensive]
excerpt_custom: "A guide explaining the seven steps of the Cyber Kill Chain framework developed by Lockheed Martin and how to defend against threats at each step."
---
![Cyber Kill Chain](/assets/img/posts/cyberkillchain.png)
## Cyber Kill Chain

It is a framework developed by **Lockheed Martin** to identify and prevent cyberattacks.

The Cyber Kill Chain consists of seven steps and outlines what a threat actor must accomplish to achieve its objectives. If all seven steps are completed, the threat actor is considered successful. If the attack is stopped at any stage, the chain is broken.

The Cyber Kill Chain is used by the defense side to predict and block what threat actors might do in the next step. The goal is to prevent the attacker from completing these 7 steps. Different scenarios unfold at each step, and every threat actor’s **TTP** (Techniques, Tactics, Procedures) is unique. The defense team uses the Cyber Kill Chain framework to try to understand the threat actors’ TTPs.

## 1. Reconnaissance

This is the stage during which the threat actor conducts research, gathers intelligence, and selects targets. Any publicly available information helps determine what, where, and how the attack will be carried out. In particular, the threat actor gathers a wide range of information, such as from websites, publicly accessible network devices, and employees’ social media accounts.

> **Defense:** It is necessary to identify behaviors indicative of reconnaissance activities, review web log alerts and historical search data, and focus on defending relevant areas.

## 2. Weaponization

This is the stage in which information gathered during reconnaissance is used to develop a weapon against specific systems or individuals within an organization. The goal is to make it difficult for the defense to detect the attack. *(See also: “evasion techniques”)*

> **Defense:** You should be familiar with IDS rules and signatures, perform malware analysis, and store metadata for use in future analyses.

## 3. Delivery

The malware is delivered to the target using a delivery vector. This could be a website, a USB drive, or an email attachment. The key at this stage is to ensure the recipient believes the content is legitimate and to make it difficult for other network devices to detect it.

> **Defense:** Review email and web logs, and attempt to understand the enemy's intent based on the delivery path.

## 4. Exploitation

The goal is to take control of the target by exploiting security vulnerabilities. These vulnerabilities can be found in applications, the operating system, hardware, or human error.

> **Defense:** Penetration tests should be conducted regularly, endpoint devices should be secured through hardening, and, most importantly, employees should receive awareness training.

## 5. Installation

The threat actor installs the actual malware on the system to gain persistent access to the target and establish a persistent threat.

> **Defense:** At this stage, it would be helpful to examine HIPS, antivirus, and EDR software. Any abnormal behavior on the endpoint and network traffic should be investigated.

## 6. Command and Control (C&C)

This is the stage at which the malware that has infiltrated the system can be controlled remotely and the system has been compromised. Most malware uses C&C servers to exfiltrate data and receives commands from them.

> **Defense:** Potential C&C infrastructures should be investigated, DNS traffic should be monitored (especially DynamicDNS), and anomalous DNS queries should be blocked.

## 7. Actions on Objectives

This is the final step in the chain. The threat actor has reached their target. These targets may involve stealing, altering, deleting, or encrypting data.

> **Defense:** It will be difficult to remove an attacker who has reached this stage from the network. The most important thing to do is to have backed up your data before reaching this stage. After this step, the best course of action is to assess the damage.

In this step, you can return to Step 1 via the compromised system and restart the Cyber Kill Chain with new targets.
