---
sidebar_position: 3
---

#  ip
___
## Display interface information
---

### ip addr show

Show network interface configuration details.

```
ip addr show

5: eth3: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether 00:15:5d:01:0b:12 brd ff:ff:ff:ff:ff:ff
```


<details>

<summary>What does it mean?</summary>

- `eth3`: This is the name of the network interface.
- `<BROADCAST,MULTICAST>`: These are the flags that indicate the capabilities and status of the interface. BROADCAST means that the interface can send and receive broadcast packets, which are packets that are addressed to all hosts on a network segment. MULTICAST means that the interface can send and receive multicast packets, which are packets that are addressed to a group of hosts that share a common interest.
- `mtu 1500`: This is the maximum transmission unit (MTU) of the interface, which is the maximum size of a packet that can be sent or received by the interface without fragmentation. The default value for Ethernet interfaces is 1500 bytes.
- `qdisc noop`: This is the queuing discipline (qdisc) of the interface, which is a mechanism that controls how packets are queued and dequeued for transmission or reception. The noop qdisc means that there is no queuing discipline applied, and packets are sent or received as soon as possible.
- `state DOWN`: This is the state of the interface, which indicates whether it is active or not. The DOWN state means that the interface is not active, either because it has no carrier signal (such as a cable unplugged) or because it has been manually disabled by an administrator. To change the state of an interface, you can use ip link set up or ip link set down commands
- `group default`: This is the group name of the interface, which allows you to assign multiple interfaces to a single group for easier management. The default group name means that no specific group has been assigned to this interface. You can change the group name of an interface using ip link set group command
- `qlen 1000`: This is the transmit queue length (txqueuelen) of the interface, which is how many packets can be queued for transmission before they are dropped by the kernel. The default value for Ethernet interfaces is 1000 packets.
- `link/ether 00:15:5d:01:0b:12 brd ff:ff:ff:ff:ff:ff`: MAC address (media access control address) of the Ethernet device. The **brd** part stands for broadcast, and shows the broadcast address ff:ff:ff:ff:ff: ff in hexadecimal notation. A broadcast address is used to send a packet to all devices on a network segment.

</details>

## Controlling the state of each interface
---
`sudo ip link set up dev eth3` will turn the STATE of the eth3 interface to "UP". **Not persistent after reboot.**

To turn on state UP and have it **be persistent after reboot**:

```
# Edit the configuration file, this is also how you can assign a static ip address

sudo vim /etc/netplan/00-installer-config.yaml

```
