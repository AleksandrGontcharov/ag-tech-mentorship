---
sidebar_position: 3
---

#  dhcpd
___
[Documentation](https://ubuntu.com/server/docs/network-dhcp)

## Installation

```bash
sudo apt install isc-dhcp-server
```

:::caution  
After changing the config files you need to restart the `dhcpd` service:

```
# Check syntax
sudo dhcpd -t -cf /etc/dhcp/dhcpd.conf
```

```
# Restart service
sudo systemctl restart isc-dhcp-server.service
```
:::
## Configure dhcpd

This configuration file:

```bash
sudo vim /etc/dhcp/dhcpd.conf
```

has the format:
```yaml
default-lease-time 600; # Set the default lease time for DHCP clients to 600 seconds (10 minutes)
max-lease-time 7200; # Set the maximum lease time for DHCP clients to 7200 seconds (2 hours)

subnet 192.168.1.0 netmask 255.255.255.0 {
  range 192.168.1.150 192.168.1.200; # Specify the range of IP addresses that will be assigned to DHCP clients
  option routers 192.168.1.254; # Specify the IP address of the default gateway for DHCP clients
  option domain-name-servers 192.168.1.1, 192.168.1.2; # Specify the IP addresses of the DNS servers to use for name resolution
  option domain-name "mydomain.example"; # Specify the domain name for the network
}
```
