---
sidebar_position: 2
---

# Progress

In this exercise you'll be pretending to be a network admin and will need setup some very typical network configurations from scratch. You'll have to deal with failures on every 2nd step and through troubleshooting of those failures you learn all the fundamentals.

You should do that sequentially (order is intentionally chosen) and can choose to stop any time without feeling bad about it - most people actually don't go to Anycast/BGP parts

As you do things I advise to capture some key learnings, conclusions or even snippets of concrete commands right in this document using different font or color, as you do things. Try to keep it compressed. You'll realize that this will be a useful document for you to return later at some point for hints or instructions on how to do something.

Prerequisite: set up Hyper-V

### Step 1: Create the switches

- [x] Create 3 private virtual switches called `red`, `green`, `blue`
- [x] Create a switch called `external` that public and connect it your home network

### Step 2: Create the VMs

- [x] Create 6 VMs   {red,green,blue}-{a,b}   [e.g.  `red-a`, `red-b`, `green-a`,….] and connect them to the appropriate switches.
	* Use UI-less (server) ubuntu SKU  (choose last LTS) 
	*  without DHCP
	* Verify that they indeed **fail** to acquire IP address, as there’s no DHCP

- [x] Create 1 VM called `router` and connect it all the switches
	* Verify that the router gets an IP address can access the internet

### Setup so far

```mermaid
graph TB
    hyper-V:::whiteClass
    classDef whiteClass fill:#0000,stroke:#f66,stroke-width:1px
    subgraph hyper-V["Hyper-V"]
        externalSwitch === VMrouter[fa:fa-computer VM-router]
        VMrouter === Switch-green:::greenClass 
        VMrouter === Switch-red:::redClass
        VMrouter === Switch-blue:::blueClass
        classDef greenClass fill:#bdf0cc,stroke:#333,stroke-width:3px
        classDef greenClassDashed fill:#bdf0cc,stroke:#333,stroke-width:2px, stroke-dasharray: 4 3
        classDef redClass  fill:#f0bdc7,stroke:#333,stroke-width:3px
        classDef redClassDashed  fill:#f0bdc7,stroke:#333,stroke-width:2px, stroke-dasharray: 4 3
        classDef blueClass  fill:lightblue,stroke:#333,stroke-width:3px
        classDef blueClassDashed  fill:lightblue,stroke:#333,stroke-width:2px, stroke-dasharray: 4 3

        
        subnet-red:::redClass
        subnet-green:::greenClass
        subnet-blue:::blueClass
        Switch-red(fa:fa-server switch-red)
        Switch-red === VM-red-a
        Switch-red === VM-red-b

        subgraph subnet-red["Subnet Red"]
            direction LR
            VM-red-a(fa:fa-computer VM-red-a)
            VM-red-b(fa:fa-computer VM-red-b)
        end

        Switch-green(fa:fa-server switch-green)
        Switch-green === VM-green-a
        Switch-green === VM-green-b

        subgraph subnet-green["Subnet Green"]
            direction LR
            VM-green-a(fa:fa-computer VM-green-a)
            VM-green-b(fa:fa-computer VM-green-b)
        end

        Switch-blue(fa:fa-server switch-blue)
        Switch-blue === VM-blue-a
        Switch-blue === VM-blue-b
        subgraph subnet-blue["Subnet Blue"]
            direction LR
            VM-blue-a(fa:fa-computer VM-blue-a)
            VM-blue-b(fa:fa-computer VM-blue-b)
        end
    end
```
