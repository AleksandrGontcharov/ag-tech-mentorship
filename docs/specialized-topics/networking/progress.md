---
sidebar_position: 2
---

#   Progress

In this exercise you'll be pretending to be a network admin and will need setup some very typical network configurations from scratch. You'll have to deal with failures on every 2nd step and through troubleshooting of those failures you learn all the fundamentals.

You should do that sequentially (order is intentionally chosen) and can choose to stop any time without feeling bad about it - most people actually don't go to Anycast/BGP parts

As you do things I advise to capture some key learnings, conclusions or even snippets of concrete commands right in this document using different font or color, as you do things. Try to keep it compressed. You'll realize that this will be a useful document for you to return later at some point for hints or instructions on how to do something.

Prerequisite: set up Hyper-V

## Create the virtual hardware

### Create the switches

- [x] Create 3 private virtual switches called `red`, `green`, `blue`
- [x] Create a switch called `external` that public and connect it your home network

### Create the VMs

- [x] Create 6 VMs {red,green,blue}-{a,b} [e.g. `red-a`, `red-b`, `green-a`,….] and connect them to the appropriate switches.

  - Use UI-less (server) ubuntu SKU  (choose last LTS)
  - without DHCP
  - Verify that they indeed **fail** to acquire IP address, as there’s no DHCP

- [x] Create 1 VM called `router` and connect it all the switches
  - Verify that the router gets an IP address can access the internet
    - `ping google.com`
    - `ip addr show`

## Create the settings for dhcp

- [x] configure `dhcp` server to allocate IPs for other client-vms

### Networking diagram

```mermaid
graph BT
    Internet(fab:fa-internet-explorer Internet) === HomeRouter[fa:fa-wifi HomeRouter </br> subnet: 192.168.1.0/24 </br> gateway: 192.168.1.1]
    HomeRouter === externalSwitch[fa:fa-server switch-external]
    hyper-V:::whiteClass
    classDef whiteClass fill:#0000,stroke:#f66,stroke-width:1px
    subgraph hyper-V["Hyper-V"]
        externalSwitch === |eth0: 192.168.1.100| VMrouter[fa:fa-computer VM-router]
        VMrouter === |eth1: 192.168.2.1| Switch-red:::redClass
        VMrouter === |eth2: 192.168.2.65| Switch-green:::greenClass
        VMrouter === |eth3: 192.168.2.129| Switch-blue:::blueClass

        %% RED SUBNET

        Switch-red(fa:fa-server switch-red)
        Switch-red === |eth0| VM-red-a
        Switch-red === |eth0| VM-red-b
        subnet-red:::redClass
        subgraph subnet-red["192.168.2.0 to 192.168.2.63"]
            direction TB
            VM-red-a(fa:fa-computer VM-red-a)
            VM-red-b(fa:fa-computer VM-red-b)
        end

        %% GREEN SUBNET

        Switch-green(fa:fa-server switch-green)
        Switch-green === |eth0| VM-green-a
        Switch-green === |eth0| VM-green-b
        subnet-green:::greenClass
        subgraph subnet-green["192.168.2.64 to 192.168.2.127"]
            direction TB
            VM-green-a(fa:fa-computer VM-green-a)
            VM-green-b(fa:fa-computer VM-green-b)
        end

        
        %% BLUE SUBNET

        Switch-blue(fa:fa-server switch-blue)
        Switch-blue === |eth0| VM-blue-a
        Switch-blue === |eth0| VM-blue-b
        subnet-blue:::blueClass
        subgraph subnet-blue["192.168.2.128 to 192.168.2.191"]
            direction TB
            VM-blue-a(fa:fa-computer VM-blue-a)
            VM-blue-b(fa:fa-computer VM-blue-b)
        end

        classDef greenClass fill:#bdf0cc,stroke:#333,stroke-width:3px, color: black;
        classDef greenClassDashed fill:#bdf0cc,stroke:#333,stroke-width:2px, stroke-dasharray: 4 3, color: black;
        classDef redClass  fill:#f0bdc7,stroke:#333,stroke-width:3px, color: black;
        classDef redClassDashed  fill:#f0bdc7,stroke:#333,stroke-width:2px, stroke-dasharray: 4 3, color: black;
        classDef blueClass  fill:lightblue,stroke:#333,stroke-width:3px, color: black;
        classDef blueClassDashed  fill:lightblue,stroke:#333,stroke-width:2px, stroke-dasharray: 4 3, color: black;
end
```

### Router settings

These settings on my router allow it to be configured as a dhcp server

<details>
<summary>sudo vim /etc/netplan/00-installer-config.yaml</summary>

```
network:
  version: 2
  renderer: networkd
  ethernets:
    eth0:
      dhcp4: true
    eth1: # RED NETWORK
      addresses:
        - 192.168.2.1/26
      nameservers:
        addresses: [127.0.0.1]
      routes:
        - to: 127.0.0.1
          via: 192.168.2.1
    eth2: # GREEN NETWORK
      addresses:
        - 192.168.2.65/26
      nameservers:
        addresses: [127.0.0.1]
      routes:
        - to: 127.0.0.1
          via: 192.168.2.65
    eth3: # BLUE NETWORK
      addresses:
        - 192.168.2.129/26
      nameservers:
        addresses: [127.0.0.1]
      routes:
        - to: 127.0.0.1
          via: 192.168.2.129
```
</details>

<details>
<summary>sudo vim /etc/dhcp/dhcpd.conf</summary>

```
default-lease-time 600;
max-lease-time 7200;

ddns-update-style none;

authoritative;

# RED
subnet 192.168.2.0 netmask 255.255.255.192 {
  range 192.168.2.2 192.168.2.62;
  option routers 192.168.2.1;
  option domain-name-servers 127.0.0.1;
  interface eth1;
}
# GREEN
subnet 192.168.2.64 netmask 255.255.255.192 {
  range 192.168.2.66 192.168.2.126;
  option routers 192.168.2.65;
  option domain-name-servers 127.0.0.1;
  interface eth2;
}
# BLUE
subnet 192.168.2.128 netmask 255.255.255.192 {
  range 192.168.2.130 192.168.2.190;
  option routers 192.168.2.129;
  option domain-name-servers 127.0.0.1;
  interface eth3;
}
```
</details>

### Client VM settings (red-a, red-b etc.)

These settings on my router allow it to be configured as a dhcp server


<details>
<summary>sudo vim /etc/dhcp/dhcpd.conf</summary>

```
network:
  version: 2
  ethernets:
    eth0:
      dhcp4: true
```

</details>