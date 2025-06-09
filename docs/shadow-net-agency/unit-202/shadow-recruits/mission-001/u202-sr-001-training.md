---
title: Unit 202 - Mission 001 - Technique Card
tags: [sna, "202"]
---

### 🔧 **Technique Card: Subnets, IPs, Ports, and SSH**

💾 **Mission Context**
You're a newly recruited Network Gecko. Your mission: gain access to a forgotten system deep within the decommisoned **Echo-Secot**. But first, you must learn the basics of digital infiltration—network IDs, ports, and remote access via SSH.

---

### 🌐 **Network Intel**

#### 🧠 What You Need to Know:

- **Subnets**: A large network is usually divided into smaller networks - these smaller parts of a larger network are known as **subnets**

- **IP Address**: Every device on a network has a unique address (e.g., `10.10.8.202`). It’s like the system’s home address on the network.

- **Port**: Think of ports as doors into a system. Each one serves a different service.

  - Port **22** is usually used for **SSH** – Secure Shell – which allows remote access.

- **SSH (Secure Shell)**: A way to log in to a remote system securely using a username and password (or key).
  You will use SSH from your Parrot machine to connect to the target.

---

### 🔍 **Tools of the Trade**

#### 📌 `nmap` – Network Mapper

Use this tool to scan for open ports on a known IP address - for example:

```bash
sudo nmap -sS 10.10.9.202
```

Look for `22/tcp open ssh` in the results. That means SSH is available!

!!! note

> nmap scans the most common 1000 ports by default - we can use the `-p` flag to specify ports such as `-p22` or `-p-` to scan **all** 65_535 ports

#### 🔐 `ssh` – Secure Shell

Use this command with the username and IP address amended as necessary to connect to a target system:

```bash
ssh username@10.10.8.202
```

If the password is something default or leaked (like `shadow123`), you might just get in...

---

### 🧩 **What You’re Learning**

- What an IP address is and how to identify the target system.
- What ports are and how they relate to services.
- What SSH is and how it’s used to access systems.
- How to use `nmap` to discover open ports.
- How to connect to a system via `ssh`.

---

### 🧪 **Try This**

- Scan the IP address of the target with `nmap`.
- Identify if port 22 is open.
- Try connecting with provided or discovered credentials.

---

### 📦 **Loadout**

| Tool       | Command           | Description                  |
| ---------- | ----------------- | ---------------------------- |
| `nmap`     | `sudo nmap <ip>`  | Scan for open ports          |
| `ssh`      | `ssh <user>@<ip>` | Connect to remote system     |
| `whoami`   | `whoami`          | Check your user after login  |
| `hostname` | `hostname`        | Confirm you’re on the target |

---

🎖️ **Shadow Tip**: Hackers don’t guess randomly—they discover, scan, connect. Stay curious. Observe. Always scan the ports!

---

### 🌐 Deeper Look at IP Addresses

When working with an internal **subnet** we see IP addresses such as **10.10.8.202**

We see that it is comprised of **4 numbers** separated by **.**

Each number is actually an **octet** - aka a **byte**

A common configuration for a **subnet** is to use the first three octets for the **network address** so in this example **10.10.8** then use the last octet for unique hosts (machines) on that network - in this case **202** is one machine and **17** would be a different one.

---

**[⬅️ Go to Mission 001: The Forgotten Terminal](u202-sr-001-mission.md)**

---

### 📹 Video Training Link (Part 1)

[![Watch the video](../../../sna1.png)](https://www.youtube.com/watch?v=CfdihYz83wY)

---

### 📹 Video Training Link (Part 2)

[![Watch the video](../../../sna1.png)](https://www.youtube.com/watch?v=y2pJZ4aBXnc)

---

### 📹 Video Training Link (Part 3)

[![Watch the video](../../../sna1.png)](https://www.youtube.com/watch?v=Chowcf3zCoc)

---
