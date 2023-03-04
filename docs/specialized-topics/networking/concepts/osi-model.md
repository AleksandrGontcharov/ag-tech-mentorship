---
sidebar_position: 2
---

# ➡️ OSI Model
___

# Definitions

## OSI Model

| Layer | Name                  | Description                                                                                                                                      | Addressing |
|-------|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|------- |
| 1     | Physical Layer        | Defines the physical medium used for communication and the electrical, mechanical, and functional specifications for the physical interface between devices. | N/A |
| 2     | Data Link Layer       | Provides reliable transmission of data over a physical medium by defining how data is framed, transmitted, and received on the network.              | MAC Address |
| 3     | Network Layer         | Allows different networks to communicate with each other using devices known as routers.                                      | IP Address |
| 4     | Transport Layer       | Provides reliable data delivery and flow control between devices by defining how data is segmented, transmitted, and reassembled.                   | Port #'s |
| 5     | Session Layer         | Manages and establishes communication sessions between devices by defining how connections are established, maintained, and terminated.            |
| 6     | Presentation Layer    | Provides data formatting and encryption services by defining how data is formatted and presented to the application layer.                         |
| 7     | Application Layer     | Provides network services to user applications by defining the protocols and interfaces used by network applications to communicate over the network.|


## Layer 2: Data Link Layer

## MAC Addresses

In networking, **a MAC address** (Media Access Control address) is a unique identifier assigned to a network interface controller (NIC).

MAC addresses are used by the data link layer (layer 2) of the OSI model to allow communication between network devices. The MAC address **is used to deliver data to its intended recipient** on the same local network segment.

MAC addresses are usually represented as a series of six pairs of hexadecimal digits, separated by colons or dashes. For example, a MAC address might be represented as `00:11:22:33:44:55`.

### What is my MAC address?

```shell-session
agontcharov@router:~$ ip addr show
  
5: eth3: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000  
link/ether 00:15:5d:01:0b:12 brd ff:ff:ff:ff:ff:ff
```

-   `00:15:5d:01:0b:12` is the MAC address of the Ethernet device. The **brd** part stands for broadcast, and shows the broadcast address `ff:ff:ff:ff:ff:ff` in hexadecimal notation. A broadcast address is used to send a packet to all devices on a network segment.

:::tip
Remember: MAC addresses are assigned to NICs
:::

## IPv4 address

In Layer 3 of the OSI model, an IPv4 address is used for network layer addressing and routing. T

An IPv4 address consists of four numbers separated by dots, which are called octets. Each octet is represented by a decimal number between 0 and 255, inclusive. For example, the IP address 192.168.0.1 is made up of four octets: 192, 168, 0, and 1.

An example
| 192.168.0.1             | 11000000.10101000.00000000.00000001 |

|           |  Dotted Decimal Notation |Bit Notation |
|-----------|------------------------|------------|
| Octet 1   | 192                    | 11000000   |
| Octet 2   | 168                    | 10101000   |
| Octet 3   | 0                      | 00000000   |
| Octet 4   | 1                      | 00000001   |

<details>
<summary> Table of useful octet numbers for reference </summary>

| Decimal | Binary     |
|---------|------------|
| 128     | 10000000   |
| 192     | 11000000   |
| 224     | 11100000   |
| 240     | 11110000   |
| 248     | 11111000   |
| 252     | 11111100   |
| 254     | 11111110   |
| 255     | 11111111   |
| 0       | 00000000   |
| 1       | 00000001   |
| 3       | 00000011   |
| 7       | 00000111   |
| 15      | 00001111   |
| 31      | 00011111   |
| 63      | 00111111   |
| 127     | 01111111   |

</details>
In the OSI (Open Systems Interconnection) model, IP addresses are part of the network layer (layer 3). The network layer is responsible for routing data between devices on different networks, and uses IP addresses to identify the source and destination of data packets.

### What is my IP address?

You may not have an IP address, but you can check this with 
 
```shell-session
agontcharov@router:~$ ip addr show
  
6: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether 00:15:5d:5e:5c:01 brd ff:ff:ff:ff:ff:ff
    inet 192.168.1.100/24 brd 192.168.1.255 scope global eth0
       valid_lft forever preferred_lft forever
```

which means 192.168.1.100 is the IP address assigned to your eth0 NIC.

:::tip
 `eth0` is the logical representation of your physical network interface card (NIC).

When you view the output of `ip addr show` command, you can see information about the IP address and other network settings associated with the `eth0` interface. These settings are configured on the logical interface, which is created on top of the physical NIC by the operating system.

**IP addresses** are assigned to logical network interfaces, not to physical network interface cards (NICs).
:::

:::tip

### Logical Ethernet Interface VS Logical IP interface

If I have assigned to IP addresses 
```
**eth0**: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000  
    link/ether 00:15:3d:5b:5f:01 brd ff:ff:ff:ff:ff:ff  
    i**net 192.168.1.10/24** scope global eth0  
       valid_lft forever preferred_lft forever  
    i**net 192.168.1.11/24** scope global secondary eth0  
       valid_lft forever preferred_lft forever  
```

Then we have: 

-   The physical/virtual NIC with mac address 00:15:5d:5e:5c:01
-   eth0 is the logical **ethernet interface** associated with 00:15:5d:5e:5c:01 (level 2)
-   **two** IP interfaces mapping to eth0 (level 3)
:::

:::tip

### .1Q tagging

With 802.1Q tagging, a single physical NIC can be associated with multiple VLANs by using virtual interfaces, which are identified by adding a dot and a VLAN ID to the interface name.

It allows multiple VLANs to be carried over a single physical network interface card (NIC). This is typically done.

Takeaway: There exists a way to assign several **ethernet interfaces** to one physical NIC.
:::

## Subnet Masks

| Decimal             | Binary                                     | CIDR Notation |
|---------------------|--------------------------------------------|---------------|
| 0.0.0.0             | 00000000.00000000.00000000.00000000         | /0            |
| 128.0.0.0           | 10000000.00000000.00000000.00000000         | /1            |
| 192.0.0.0           | 11000000.00000000.00000000.00000000         | /2            |
| 224.0.0.0           | 11100000.00000000.00000000.00000000         | /3            |
| 240.0.0.0           | 11110000.00000000.00000000.00000000         | /4            |
| 248.0.0.0           | 11111000.00000000.00000000.00000000         | /5            |
| 252.0.0.0           | 11111100.00000000.00000000.00000000         | /6            |
| 254.0.0.0           | 11111110.00000000.00000000.00000000         | /7            |
| 255.0.0.0           | 11111111.00000000.00000000.00000000         | /8            |
| 255.128.0.0         | 11111111.10000000.00000000.00000000         | /9            |
| 255.192.0.0         | 11111111.11000000.00000000.00000000         | /10           |
| 255.224.0.0         | 11111111.11100000.00000000.00000000         | /11           |
| 255.240.0.0         | 11111111.11110000.00000000.00000000         | /12           |
| 255.248.0.0         | 11111111.11111000.00000000.00000000         | /13           |
| 255.252.0.0         | 11111111.11111100.00000000.00000000         | /14           |
| 255.254.0.0         | 11111111.11111110.00000000.00000000         | /15           |
| 255.255.0.0         | 11111111.11111111.00000000.00000000         | /16           |
| 255.255.128.0       | 11111111.11111111.10000000.00000000         | /17           |
| 255.255.192.0       | 11111111.11111111.11000000.00000000         | /18           |
| 255.255.224.0       | 11111111.11111111.11100000.00000000         | /19           |
| 255.255.240.0       | 11111111.11111111.11110000.00000000         | /20           |
| 255.255.248.0       | 11111111.11111111.11111000.00000000         | /21           |
| 255.255.252.0       | 11111111.11111111.11111100.00000000         | /22           |
| 255.255.254.0       | 11111111.11111111.11111110.00000000         | /23           |
| 255.255.255.0       | 11111111.11111111.11111111.00000000         | /24           |
| 255.255.255.128     | 11111111.11111111.11111111.10000000         | /25           |
| 255.255.255.192     | 11111111.11111111.11111111.11000000         | /26           |
| 255.255.255.224     | 11111111.11111111.11111111.11100000         | /27           |
| 255.255.255.240     | 11111111.11111111.11111111.11110000         | /28           |
| 255.255.255.248     | 11111111.11111111.11111111.11111000         | /29           |
| 255.255.255.252     | 11111111.11111111.11111111.11111100         | /30           |
| 255.255.255.254     | 11111111.11111111.11111111.11111110         | /31           |
| 255.255.255.255     | 11111111.11111111.11111111.11111111         | /32           |

