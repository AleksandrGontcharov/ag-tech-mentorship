---
sidebar_position: 4
---

# ➡️ NAT
___

NAT, or Network Address Translation, is a networking technique used to map one IP address space to another by modifying the IP addresses in the packet headers as they pass through a routing device, like a router or a firewall. NAT was introduced to help mitigate the exhaustion of IPv4 addresses by allowing multiple devices with private IP addresses to share a single or a few public IP addresses when accessing the internet.

There are several types of NAT, including:

1.  SNAT (Source Network Address Translation): SNAT modifies the source IP address of packets leaving a private network. It allows multiple devices within the private network to share a single public IP address or a pool of public IP addresses when accessing the internet.
    
2.  DNAT (Destination Network Address Translation): DNAT modifies the destination IP address of packets arriving from a public network to a private network. It is often used in conjunction with SNAT to facilitate bidirectional communication between public and private networks.
    
3.  PAT (Port Address Translation): Also known as NAPT (Network Address and Port Translation), PAT not only translates IP addresses but also translates the source port numbers in the packet headers. This allows multiple devices to share a single public IP address by differentiating their connections based on port numbers.
    
4.  1:1 NAT (One-to-One NAT): In this NAT configuration, each private IP address is mapped to a unique public IP address. It provides a more transparent and less complex form of address translation but requires a public IP address for each device, which can be costly and inefficient.
    

NAT plays a crucial role in conserving the limited IPv4 address space, providing an additional layer of security by hiding the private IP addresses of devices within a network, and facilitating communication between private and public networks.

## Configuring SNAT on the router VM

To set up SNAT for the eth1 subnet so that it can access the internet through eth0, follow these steps:

1.  Enable IP forwarding on your Ubuntu server:

```
sudo sysctl -w net.ipv4.ip_forward=1
```
To make this change permanent, edit the `/etc/sysctl.conf` file and add or uncomment the following line:

```
net.ipv4.ip_forward=1
```
2. Configure SNAT using iptables:

```
sudo iptables -t nat -A POSTROUTING -o eth0 -s 192.168.2.0/26 -j MASQUERADE
sudo iptables -t nat -A POSTROUTING -o eth0 -s 192.168.2.64/26 -j MASQUERADE
sudo iptables -t nat -A POSTROUTING -o eth0 -s 192.168.2.128/26 -j MASQUERADE
```

This command appends a rule to the POSTROUTING chain of the `nat` table that says: for all packets originating from the 192.168.2.0/26 subnet (eth1) and going out through eth0, apply the MASQUERADE target, which will perform SNAT using the router's public IP address (192.168.1.18 in your case) on eth0.

3.  Configure the DNS server:

Since I am using DHCP to assign IP addresses to the VMs on the eth1 subnet, I will configure the DHCP server to provide the DNS server information to the clients.

```
sudo vim /etc/dhcp/dhcpd.conf
```

Add this to each subnet

```
option domain-name-servers 8.8.8.8;
```
Apply the settings

```
sudo systemctl restart isc-dhcp-server
```


