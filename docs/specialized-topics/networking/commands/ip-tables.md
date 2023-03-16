---
sidebar_position: 4
---

#  ip-tables
___
`iptables` is a command-line utility in Linux-based systems used to manage and configure the IP packet filtering rules in the kernel's netfilter framework. It allows administrators to define rules for processing incoming and outgoing network traffic based on IP addresses, protocols, ports, and other criteria. These rules can be used for various purposes, such as filtering, NAT (Network Address Translation), and port forwarding.

The `iptables` command provides a rich set of options for creating, modifying, and deleting rules in different tables and chains. Some common actions performed using the `iptables` command include:

-   Creating new rules
-   Modifying existing rules
-   Deleting rules
-   Listing current rules
-   Changing default policies
-   Creating and managing user-defined chains

Typically, the `iptables` command is used with administrative privileges (using `sudo` or as the root user) because it modifies the kernel's packet filtering rules.

Here's the general syntax for the `iptables` command:

```bash
iptables [-t table] command [chain] [options] [criteria] -j target
```

-   `-t table`: Specifies the table containing the chain (e.g., filter, nat, mangle, or raw). If omitted, the filter table is used by default.
-   `command`: The action to perform, such as adding a new rule (-A), inserting a rule (-I), deleting a rule (-D), listing rules (-L), and more.
-   `chain`: The chain in which the rule will be added or modified (e.g., INPUT, OUTPUT, FORWARD, PREROUTING, or POSTROUTING).
-   `options`: Various options to modify the command behavior, such as `-v` for verbose output or `-n` for numeric output.
-   `criteria`: The conditions that packets must meet to match the rule, such as the source IP address, destination IP address, protocol, or port.
-   `-j target`: The target specifies the action to take when a packet matches the rule (e.g., ACCEPT, DROP, REJECT, or a user-defined chain).

## NAT Table

The 'nat' table in iptables is a specific table used for Network Address Translation (NAT) operations, such as Source Network Address Translation (SNAT) and Destination Network Address Translation (DNAT). The primary purpose of the 'nat' table is to alter the source or destination IP addresses and/or port numbers of packets as they traverse through a router or firewall.

The 'nat' table contains the following built-in chains:

1.  PREROUTING: This chain handles packets when they first arrive at the router or firewall, before routing decisions are made. It is mainly used for DNAT, where the destination IP addresses and/or ports of incoming packets are altered.
    
2.  OUTPUT: This chain is used for locally generated packets on the firewall or router itself. It can be used for both DNAT and SNAT operations on these packets.
    
3.  POSTROUTING: This chain handles packets after routing decisions have been made and just before they leave the router or firewall. It is mainly used for SNAT, where the source IP addresses and/or ports of outgoing packets are altered.
    

When configuring iptables rules for NAT operations, the 'nat' table is specified using the `-t` option followed by the table name, like this:
```bash
iptables -t nat <other-options>
```

For example, to set up a basic SNAT rule that allows multiple devices on a private network to share a single public IP address when accessing the internet, you can use the following command:

```
sudo iptables -t nat -A POSTROUTING -o <public_interface> -j MASQUERADE`
```


In this command, `<public_interface>` should be replaced with the name of the network interface connected to the internet (e.g., eth0).