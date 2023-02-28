---
sidebar_position: 2
---

#  netplan
___
## Set a static ip address
---

[Documentation](https://netplan.io/)

After changing the config files, you need to run:

```
sudo netplan apply
```

This configuration file:

```bash
sudo vim /etc/netplan/00-installer-config.yaml
```

has the format:

```yaml
network: # Defines the network configuration for the system
  version: 2 # Specifies the version of the YAML network configuration format
  renderer: networkd # Specifies the network renderer to use

  ethernets: # Defines the network configuration for each Ethernet interface
    eth0: # Defines the network configuration for the eth1 interface
      dhcp4: yes # Enables DHCPv4 to obtain an IP address automatically
	eth1: # Defines the network configuration for the eth0 interface
      dhcp4: no # Disables DHCPv4 and uses a static IP address
      addresses: [192.168.1.10/24] # Specifies the IP address and subnet mask for eth0
      gateway4: 192.168.1.1 # Specifies the IP address of the default gateway for eth0
      nameservers: # Specifies the DNS servers to use for name resolution
        addresses: [8.8.8.8, 8.8.4.4] # Specifies two DNS server IP addresses
```
