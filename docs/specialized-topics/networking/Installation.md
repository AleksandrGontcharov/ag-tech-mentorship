---
sidebar_position: 6
---

# Networking Syllabus

In this exercise you'll be pretending to be a network admin and will need setup some very typical network configurations from scratch. You'll have to deal with failures on every 2nd step and through troubleshooting of those failures you learn all the fundamentals.

You should do that sequentially (order is intentionally chosen) and can choose to stop any time without feeling bad about it - most people actually don't go to Anycast/BGP parts

As you do things I advise to capture some key learnings, conclusions or even snippets of concrete commands right in this document using different font or color, as you do things. Try to keep it compressed. You'll realize that this will be a useful document for you to return later at some point for hints or instructions on how to do something.

- [x] Create 3 networks (private virtual switches in Hyper-V) without DHCP:  Red, Green, Blue
- [x] Create 6 VMs   {red,green,blue}-{a,b}   [e.g.  red-a, red-b, green-a,….]

- [x] Use UI-less (server) ubuntu SKU  (choose last LTS)
- [x] Verify that they indeed **fail** to acquire IP address, as there's no DHCP

- [x] Create 1 VM "router"

- [x] Have  4 NICS attached to this VM

- [x] 3  pointing to red/green/blue  networks---
- [x] 4th  -  direct ethernet access of your home network

- [x] You should get auto-assigned IP address here in the same subnet as your host machine

- [x] Do NOT use NAT and/or host-only networking