---
sidebar_position: 1
---

# 📜Networking Syllabus

In this exercise you'll be pretending to be a network admin and will need setup some very typical network configurations from scratch. You'll have to deal with failures on every 2nd step and through troubleshooting of those failures you learn all the fundamentals.

You should do that sequentially (order is intentionally chosen) and can choose to stop any time without feeling bad about it - most people actually don't go to Anycast/BGP parts

As you do things I advise to capture some key learnings, conclusions or even snippets of concrete commands right in this document using different font or color, as you do things. Try to keep it compressed. You'll realize that this will be a useful document for you to return later at some point for hints or instructions on how to do something.

- Create 3 networks (private virtual switches in Hyper-V) without DHCP: Red, Green, Blue
- Create 6 VMs `{red,green,blue}-{a,b}` [e.g. red-a, red-b, green-a,….]
  - Use UI-less (server) ubuntu SKU (choose last LTS)
  - Verify that they indeed **fail** to acquire IP address, as there's no DHCP
- Create 1 VM "router"
  - Have 4 NICS attached to this VM
    - 3 pointing to red/green/blue networks---
    - 4th - direct ethernet access of your home network
      - You should get auto-assigned IP address here in the same subnet as your host machine
      - Do NOT use NAT and/or host-only networking
- Install open-source (preferably from ISC) dhcp server on the router (dhcpd)
  - Allocate thee different subnets for your networks and configure dhcp server to allocate IPs for other VMs
- Configure routing on the router to ensure that VMs from each network can access other networks
- Configure NAT (specifically SNAT) on the router so VMs can reach internet. U can use 8.8.8.8 as a DNS server for now (Google's public dns) or your ISP dns (or your home router)
- Use iptables to block internet access for the red network
- Use your iptables policy to deny(or drop) -by default and use explicit allow-listing for everything. Ensure everything continues to work (DHCP, SNAT, etc).
- Experiment with various Iptables rules by allowing/disallowing routing between RED/BLUE/GREEN network and verify if it is working but leave that in a state where it is allowed by explicit rules.
- _Install your own DNS server on router VM (with recursive mode) on router and update dhcp to use this one_
  - _Configure DNS server to host three domains .red .blue .green so each VM gets a host name within these domains. Use DHCP to communicate domain name suffix for each VMs. Ensure that DNS server is forwarding traffic to the internet to be able to resolve hosts like_ [_www.microsoft.com_](http://www.microsoft.com/) _from your blue/red/green networks._
    - Bonus point – (optional) find a way how to ensure that hosts in a red network can resolve `*.{green,red,blue}` names but can't resolve internet hostnames
- Simulate ARPOISON attack.
  - Learn how to use arp tool, run it on various vms to inspect state of local ARP cache.
  - Add third Evil-VM in GREEN network
  - Learn how to use arping tool on Evil-VM.
  - Mount arpoinson attack on Evil-VM so you can intercept traffic between TWO other green VMs
    - Try to script arpoison attack yourself, without using C sources – by running arping in a loop in a shell script (if that's possible)
  - Mount arpoison attack in such a way that both router and two other VMs have poisoned ARP cache leading to resolving all addresses to the Evil-VM.
    - Ensure that Evil-VM can see all the traffic
    - Figure out how to configure Evil-VM such that everything continues to work, traffic flows (except that it is maybe slower) and green VMs + router do not suspect that the traffic is routed through the evil VM.
- Move your DNS and DHCP server to the VMs in the blue network.
  - You'd need to use "DHCP relay agent" aka "DHCP forwarder" to operate on the router
- Install nginx HTTP server into the red network serving simplest static hello-world page. Make this server externally accessible from the internet (so I can hit it).
  - You'd need to configure DNAT for specific port on your router VM and yet another DNAT on your cable modem.
  - This will only work if your modem has that feature (might be called port forwarding or port mapping) and if your ISP gives you a globally routable IP address.
  - Note that we want this to be accessible from internet and simultaneously preserve the restriction introduced above so red network can't initiate outbound traffic from the internet.
  - Read about connection state tracking in iptables.
- SSH to internal servers via router
- Create a small-sku VM in Azure with globally routable IP address
  - Ensure you have SSH server running there accessible from your home network
- Install openvpn server into Azure-VM on so you can connect from your home network and have internet access hiding your home IP address.
- Modify router VM by installing openvpn client there to connect to Azure-VM and route/NAT every outgoing internet traffic to the Azure-VM so when you ping from BLUE net to [www.microsoft.com](http://www.microsoft.com/) the latter sees the Azure-VM address.
- Create alternative tunnel impl. Using socat on both sides of tunnel
- Forget about both openvpn and assume for now there's no way to do ingress into your home network from internet. Bypass this limitation with following
  - Install ssh server on one of the VMs in BLUE network.
  - Create "reverse ssh" flow so you can connect from Azure-VM into the BLUE network.
  - Using that reverse SSH create port forwarding which would allow you to run "curl [http://localhost:8080](http://localhost:8080/)" on azure VM and reach your nginx webserver in the RED network.
- Optional: configure boot server as part of DHCP, try to bring up VM that uses network boot to install OS
- Anycast UDP. We pretend now that red, green, and blue are different geo-regions. We'll place the same IP address 42.42.42.42 in each of the region intentionally violating constraint of uniqueness of globally-routable IP address. By doing this we will mimic how Googe's public DNS server with ip address 8.8.8.8 is setup as well as how things like ATM (Azure Traffic Manager) or Global CDNs work.
  - Reconfigure 1 green VM, 1red and 1 one blue to have static IP address, configure secondary static IP address 42.42.42.42 on the NIC for each VM.
  - You'll have therefore 3 machines with non-unique IP address 42.42.42.42.
  - Launch some simple UDP server on port 1234 on each of those VMs bound exlusively to the IP address 42.42.42.42. Make sure it responds with VM name. You don't need to write new code. You can use "socat" tool. Learn how to use it it's a "swiss army knife" even more powerful than NetCat (aka nc).
  - Configure router VM such as if someone tries to route to the 42.42.42.42 it can route traffic to ANY of the machines. (anycast rounting) Validate this by connecting with netcat/nc tool or socat tool from your home network to ip address 42.42.42.42:1234 which is routed to your router - you should get different responses since you should be reaching different VMs.
- BGP routing (optional, hard). Goal – understand what makes Internet the internet and how traffic is routed at a global level.
  - Read about BGP.
  - Turn red/green/blue network into simulated Autonomous Systems (AS)
  - Add "yellow" AS, and connect it directly to the green and blue, but not red.
    - Three will be 3 routers therefore, one existing router-vm (router1), with following connectivity
      - green\<-\>router1, red\<-\>router1, blue\<-\> router1
    - And 2 more routers. You can turn existing VMs with static Ips in green and blue into routers by adding additional nic.
      - yellow\<-\>router2, green\<-\>router2
      - yellow\<-\>router3, blue\<-\>router3
    - Draw a topology manually and observe that there's bunch of alternate routes
    - Ensure that routing works automatically via BGP and you don't need to touch router1 when adding router23
    - Since there's multiple paths between some of the VMs via different routers, they can be exploited if one of the router fails. Simulate the failure by shutting down the router and ensure re-routing happens.
