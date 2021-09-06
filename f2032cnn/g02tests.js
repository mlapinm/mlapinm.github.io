let tests = [
  {
    "number": "1",
    "type": "153",
    "asks": [
      "Refer to the exhibit. A router received five routes from different routing information sources. Which two routes does it install in its routing table? (Choose two)"
    ],
    "img": [],
    "sentence": [],
    "listing": [
      "IBGP route 10.0.0.0/30",
      "RIP route 10.0.0.0/30",
      "OSPF route 10 0.0.0/16",
      "OSPF route 10 0.0.0/30",
      "EIGRP route 10.0.0.1/32"
    ],
    "responses": [
      "C",
      "D"
    ],
    "variants": [
      "OSPF route 10.0.0.0/30",
      "IBGP route 10.0.0.0/30",
      "OSPF route 10.0.0.0/16",
      "EIGRP route 10.0.0.1/32",
      "RIP route 10.0.0.0/30"
    ]
  },
  {
    "number": "2",
    "type": "321",
    "asks": [
      "What command can be used to verify that a static route is in the routing table?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "B"
    ],
    "variants": [
      "show static",
      "show ip route",
      "show routing table static",
      "show admin routes"
    ]
  },
  {
    "number": "3",
    "type": "503",
    "asks": [
      "Which sub-protocol inside of the PPP suite facilitates multilink connections?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "MPLS",
      "NCP",
      "LCP",
      "ACP"
    ]
  },
  {
    "number": "4",
    "type": "290",
    "asks": [
      "What is the default VLAN in Cisco networking?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "VLAN 10",
      "VLAN 0",
      "VLAN 4092",
      "VLAN 1"
    ]
  },
  {
    "number": "5",
    "type": "60",
    "asks": [
      "Which of the following MAC addresses is as a VRRP virtual address?"
    ],
    "img": [],
    "sentence": [
      "Explanation: The virtual router MAC address associated with a virtual router is an IEEE 802 MAC Address in the following format:",
      "00-00-5E-00-01-{VRID} (in hex in internet standard bit-order).",
      "The first three octets are derived from the IANA's OUI. The next two octets (00-01) indicate the address block assigned to the VRRP protocol. {VRID} is the VRRP Virtual Router Identifier. This mapping provides for up to 255 VRRP routers on a network."
    ],
    "listing": [],
    "responses": [
      "A"
    ],
    "variants": [
      "00-00-5E-00-01-0a",
      "00-05-00-11-00-75",
      "00-00-0C-07-AC-11",
      "00-08-E5-70-AB-01"
    ]
  },
  {
    "number": "6",
    "type": "72",
    "asks": [
      "Which mechanism is used by Cisco DNA Center to collect data from the network?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "Devices send data periodically to the controller using the call-home protocol",
      "Devices exchange data with the controller after establishing an IPsec tunnel",
      "The Cisco CLI Analyzer tool collects data from all licensed network devices and streams it to the controller",
      "Network devices use a variety of services like syslog, SNMP, u and streaming telemetry to send data to the controller"
    ]
  },
  {
    "number": "7",
    "type": "315",
    "asks": [
      "If a router cannot find a better match, what might the router use to route traffic?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "255.255.255.255/0",
      "127.0.0.1/32",
      "0.0.0.0/32",
      "0.0.0.0/0"
    ]
  },
  {
    "number": "8",
    "type": "518",
    "asks": [
      "An organization purchased a VM on a public cloud and plan to create a VPN tunnel to the cloud provider. The organization's IP network is 172.20.0.0/12, and the provider has assigned an IP address in the 10.10.0.0/8 network. What virtual network function (VNF) will the organization need from the provider to communicate with the VM?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "Virtual switch",
      "Virtual firewall",
      "Virtual router",
      "Another IP scheme at the provider"
    ]
  },
  {
    "number": "9",
    "type": "21",
    "asks": [
      "Which of the following ciphers provides the strongest encryption for WPA2-PSK?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "WEP",
      "RC4",
      "AES",
      "TKIP"
    ]
  },
  {
    "number": "10",
    "type": "416",
    "asks": [
      "What is the term used with Ansible for the text file that lists the nodes that Ansible can\tmanage?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "Runbook",
      "Playbook",
      "Recipe",
      "Inventory"
    ]
  },
  {
    "number": "11",
    "type": "326",
    "asks": [
      "Which statement about OSPFv2 is true?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "The dead timers do not need to match between neighbors.",
      "The hello timers do not need to match between neighbors.",
      "The area ID must match between neighbors.",
      "The network command must be used."
    ]
  },
  {
    "number": "12",
    "type": "201",
    "asks": [
      "When Auto MDI-X is used on a Cisco switch, what type of cable is used to connect a Layer 2 switch's port to a laptop?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "Crossover",
      "Rollover",
      "Console",
      "Straight-through"
    ]
  },
  {
    "number": "13",
    "type": "27",
    "asks": [
      "What is a role of an SNMP agent?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "A"
    ],
    "variants": [
      "It responds to requests from the NMS, providing it with ^ information about MIB variables.",
      "It handles user authentication between network devices and a RADIUS or TACACS+ server.",
      "It collects information about disastrous system events from remote network nodes.",
      "It supervises routing between Layer 3 devices in a network."
    ]
  },
  {
    "number": "14",
    "type": "212",
    "asks": [
      "Which statement about CDP is correct?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "CDP is disabled by default.",
      "CDP relies on TCP.",
      "CDP is disabled on all serial interfaces by default.",
      "CDP is a Layer 2 protocol."
    ]
  },
  {
    "number": "15",
    "type": "229",
    "asks": [
      "EIGRP uses the IPv4 address 224.0.0.10 in its operation. What type of address is this?"
    ],
    "img": [],
    "sentence": [
      "Explanation: IPv4 multicast addresses range is from 224.0.0.0 to 239.255.255.255"
    ],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "Unicast",
      "Broadcast",
      "Multicast",
      "Anycast"
    ]
  },
  {
    "number": "16",
    "type": "397",
    "asks": [
      "What is the default state when DHCP snooping port is enabled?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "B"
    ],
    "variants": [
      "Trusted",
      "Untrusted",
      "Permitted",
      "Disabled"
    ]
  },
  {
    "number": "17",
    "type": "31",
    "asks": [
      "What is the protocol used for the transport of user data in a site-to-site VPN architecture?"
    ],
    "img": [],
    "sentence": [
      "Explanation: A site-to-site VPN could use either internet protocol security protocol (IPSec) or generic routing encapsulation (GRE). GRE provides the framework for how to package the passenger protocol for transport over the internet protocol (IP)."
    ],
    "listing": [],
    "responses": [
      "B"
    ],
    "variants": [
      "TCP",
      "IPsec",
      "IKEv1",
      "IKEv2"
    ]
  },
  {
    "number": "18",
    "type": "228",
    "asks": [
      "What is the last usable host address on a subnet where a host has been given the address 172.16.6.1 255.255.254.0?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "172.16.6.255",
      "172.16.5.1",
      "172.16.6.128",
      "172.16.6.254"
    ]
  },
  {
    "number": "19",
    "type": "247",
    "asks": [
      "How many more bits are used in an IPv6 address than in an IPv4 address?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "A"
    ],
    "variants": [
      "96",
      "128",
      "48",
      "64"
    ]
  },
  {
    "number": "20",
    "type": "293",
    "asks": [
      "What is the first step of the Spanning Tree Protocol convergence process?"
    ],
    "img": [],
    "sentence": [
      "Explanation: Steps to STP convergence:",
      "1.\tElect the root bridge",
      "2.\tFind the best path to the root bridge.",
      "3.\tBlock anything left over."
    ],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "Block nondesignated ports.",
      "Calculate designated ports.",
      "Elect a root bridge.",
      "Calculate root ports."
    ]
  },
  {
    "number": "21",
    "type": "492",
    "asks": [
      "Which task do core layer switches perform in the three-tier design model?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "Connect to other switches for redundancy",
      "Connect to users",
      "Connect campuses",
      "Connect to the Internet"
    ]
  },
  {
    "number": "22",
    "type": "343",
    "asks": [
      "What is the inside global address for translation?"
    ],
    "img": [],
    "sentence": [
      "Examine the following command:",
      "ip nat inside source list 1 interface faO/O overload"
    ],
    "listing": [],
    "responses": [
      "A"
    ],
    "variants": [
      "The IP address on interface faO/O",
      "The virtual address on interface faO/O",
      "The address in access list 1",
      "The address in the NAT pool named interface"
    ]
  },
  {
    "number": "23",
    "type": "375",
    "asks": [
      "What command under the vty lines allows the checking of a local password?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "check-password",
      "enable",
      "login local",
      "test"
    ]
  },
  {
    "number": "24",
    "type": "513",
    "asks": [
      "What is the role of a cloud services catalog?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "B"
    ],
    "variants": [
      "It defines the capabilities for the cloud.",
      "It defines the available VMs for creation in the cloud.",
      "It defines the available VMs running in the cloud.",
      "test"
    ]
  },
  {
    "number": "25",
    "type": "63",
    "asks": [
      "Networking and cloud technologies usually use which type of the following APIs?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "B"
    ],
    "variants": [
      "SOAP",
      "REST",
      "JSON-RPC",
      "XML-RPC"
    ]
  },
  {
    "number": "26",
    "type": "193",
    "asks": [
      "The cloud offers the ability to dynamically resize resources based on demand. What is the term for this ability?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "A"
    ],
    "variants": [
      "Elasticity",
      "Cloud-bursting",
      "Scalability",
      "Immutability"
    ]
  },
  {
    "number": "27",
    "type": "353",
    "asks": [
      "What type of record is used in DNS for a mail server?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "B"
    ],
    "variants": [
      "SOA",
      "MX",
      "NS",
      "CNAME"
    ]
  },
  {
    "number": "28",
    "type": "157",
    "asks": [
      "Refer to the exhibit. What is the effect of this configuration?"
    ],
    "img": [],
    "sentence": [],
    "listing": [
      "ip arp inspection vlan 5-10",
      "interface fastethernet 0/1",
      "switchport mode access",
      "switchport access vlan 5"
    ],
    "responses": [
      "A"
    ],
    "variants": [
      "The switch discards all ingress ARP traffic with invalid u MAC-to-IP address bindings.",
      "All ARP packets are dropped by the switch.",
      "Egress traffic is passed only if the destination is a DHCP server.",
      "All ingress and egress traffic is dropped because the interface is untrusted."
    ]
  },
  {
    "number": "29",
    "type": "208",
    "asks": [
      "Which statement regarding LLDP is false in relation to Cisco devices?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "B"
    ],
    "variants": [
      "LLDP is not enabled by default on IOS devices.",
      "LLDP is a Cisco proprietary technology.",
      "LLDP and CDP are compatible.",
      "After being enabled globally, LLDP must be enabled on specific interfaces."
    ]
  },
  {
    "number": "30",
    "type": "218",
    "asks": [
      "What protocol an port number does SNMP use? (Choose two.)"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "B",
      "C"
    ],
    "variants": [
      "TCP",
      "UDP",
      "161",
      "514"
    ]
  },
  {
    "number": "31",
    "type": "19",
    "asks": [
      "What are the two encoding methods supported by REST APIs? (Choose two.)\tI"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "A",
      "B"
    ],
    "variants": [
      "JSON",
      "XML",
      "EBCDIC",
      "SGML",
      "YAML"
    ]
  },
  {
    "number": "32",
    "type": "194",
    "asks": [
      "Which technology eliminates the major concerns about straight-through versus crossover cables?"
    ],
    "img": [],
    "sentence": [
      "Explanation: A medium dependent interface (MDI) describes the interface (both physical and electrical/optical) in a computer network from a physical layer implementation to the physical medium used to carry the transmission. Ethernet over twisted pair also defines a medium dependent interface crossover (MDI-X) interface. Auto MDI-X ports on newer network interfaces detect if the connection would require a crossover, and automatically chooses the MDI or MDI-X configuration to properly match the other end of the link."
    ],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "STP",
      "RSTP",
      "Auto MDI-X",
      "FabricPath"
    ]
  },
  {
    "number": "33",
    "type": "59",
    "asks": [
      "Which statement identifies the functionality of virtual machines?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "B"
    ],
    "variants": [
      "Virtualized servers provide the best performance when they O are physically connected to a switch that is isolated from the hypervisor.",
      "The hypervisor can virtualize physical components u including CPU, memory, and storage.",
      "The hypervisor can only support one virtual machine and one software switch at once.",
      "The hypervisor communication on Layer 3 does not require any additional resources."
    ]
  },
  {
    "number": "34",
    "type": "40",
    "asks": [
      "Which two parameters are mandatory in order to enable OSPFv2 on an active interface? (Choose two.)"
    ],
    "img": [],
    "sentence": [
      "Explanation: Enabling OSPFv2 on an Interface SUMMARY STEPS:",
      "1.\tenable",
      "2.\tconfigure terminal",
      "3.\tinterface type number",
      "4.\tip ospf process-id area area-id [secondaries none]",
      "5.\tend",
      "6.\tshow ip ospf interface [type -number]"
    ],
    "listing": [],
    "responses": [
      "C",
      "E"
    ],
    "variants": [
      "IPv6 address",
      "IPv4 or IPv6 address",
      "OSPF process ID",
      "OSPF MD5 authentication key",
      "OSPF area",
      "OSPF stub flag"
    ]
  },
  {
    "number": "35",
    "type": "162",
    "asks": [
      "What versions of SNMP use a simple plaintext password? (Choose two.)"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "B",
      "C"
    ],
    "variants": [
      "Version 1",
      "Version 2",
      "Version 2c",
      "Version 3",
      "Version 4"
    ]
  },
  {
    "number": "36",
    "type": "234",
    "asks": [
      "Which of the following is true regarding IP address 127.0.0.1 ?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "This is a multicast address.",
      "This is a Class A unicast address.",
      "This is a loopback address.",
      "This is an invalid IP address."
    ]
  },
  {
    "number": "37",
    "type": "380",
    "asks": [
      "What command is used to create the public/private key pair for SSH?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "crypto key ssh create",
      "crypto key generate ssh",
      "crypto key ssh",
      "crypto key generate rsa"
    ]
  },
  {
    "number": "38",
    "type": "235",
    "asks": [
      "What is the subnet mask if you begin with the default Class A mask and then \"borrow\" 4 bits for subnetting?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "255.255.128.0",
      "255.255.240.0",
      "255.240.0.0",
      "255.255.255.240"
    ]
  },
  {
    "number": "39",
    "type": "466",
    "asks": [
      "Which is a false statement about firewalls?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "B"
    ],
    "variants": [
      "They can protect a network from external attacks.",
      "They are commonly deployed to protect a network from internal attacks.",
      "They can provide stateful packet inspection.",
      "They can control application traffic."
    ]
  },
  {
    "number": "40",
    "type": "487",
    "asks": [
      "The two-tier\tdesign model contains which layer switches?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "Core, distribution, and access",
      "Core and distribution",
      "Distribution and access",
      "Internet, core, distribution, and access"
    ]
  },
  {
    "number": "41",
    "type": "348",
    "asks": [
      "What device is responsible for each DNS domain?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "B"
    ],
    "variants": [
      "Master DNS",
      "Authoritative name server",
      "Zone file server",
      "DNS client"
    ]
  },
  {
    "number": "42",
    "type": "451",
    "asks": [
      "A new Layer 2 switch in its default configuration has just been powered up. In addition to a console connection, there are two Windows hosts and an IP phone (using PoE) connected to its Ethernet ports. Which of the following are true? (Choose two.)"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "A",
      "D"
    ],
    "variants": [
      "If either Windows host has successfully completed an ARP v' resolution, the switch will have learned the MAC addresses of both Windows hosts.",
      "The switch would see the two Windows hosts directly connected devices from CDP",
      "The switch would not know if the IP phone is a Cisco IP □ phone or a third-party IP phone until a call is initiated from the phone.",
      "The switch can be configured with an IPv4 address on interface VLAN 1."
    ]
  },
  {
    "number": "43",
    "type": "11",
    "asks": [
      "What are the advantages of implementing VLANs? (Choose three.)"
    ],
    "img": [],
    "sentence": [
      "G. 802.1 Q trunks allow port-based VLANs to increase switch-port use efficiency."
    ],
    "listing": [],
    "responses": [
      "A",
      "C",
      "D"
    ],
    "variants": [
      "A higher level of network security can be achieved by segregating sensitive data traffic from other network traffic.",
      "They allow multiple physical groups to share the same network infrastructure. This optimizes the use of bandwidth.",
      "They allow multiple logical groups to share the same network infrastructure. This optimizes the use of bandwidth.",
      "They increase the number of broadcast domains, which reduces their size. This allows to mitigate broadcast storms",
      "They decrease the number of broadcast domains, which increases their size. This allows to mitigate broadcast storms",
      "VLANs allow the configuration of new logical groups, because all VLANs belong to the same broadcast domain."
    ]
  },
  {
    "number": "44",
    "type": "148",
    "asks": [
      "Refer to the exhibit. How does the router manage traffic to 192.168.12.16?"
    ],
    "img": [],
    "sentence": [],
    "listing": [
      "EIGRP: 192.168.2.0/24",
      "RIP: 192 168 2 0/27",
      "OSPF: 192.168.2.0/28"
    ],
    "responses": [
      "C"
    ],
    "variants": [
      "It load-balances traffic between all three routes.",
      "It chooses the EIGRP route because it has the lowest administrative distance.",
      "It chooses the OSPF route because it has the longest prefix inclusive of the destination address.",
      "It selects the RIP route because it has the longest prefix inclusive of the destination address."
    ]
  },
  {
    "number": "45",
    "type": "297",
    "asks": [
      "What version of STP on a Cisco device implements classic IEEE 802.1 D?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "B"
    ],
    "variants": [
      "MST",
      "PVST+",
      "TRILL",
      "RPVST+"
    ]
  },
  {
    "number": "46",
    "type": "53",
    "asks": [
      "Which statement identifies the functionality of virtual machines?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "B"
    ],
    "variants": [
      "Virtualized servers provide the best performance when they O are physically connected to a switch that is isolated from the hypervisor.",
      "The hypervisor can virtualize physical components u including CPU, memory, and storage.",
      "The hypervisor can only support one virtual machine and one software switch at once.",
      "The hypervisor communication on Layer 3 does not require any additional resources."
    ]
  },
  {
    "number": "47",
    "type": "310",
    "asks": [
      "What aspect of the routing table is impacted by the command ip route 0.0.0.0 0.0.0.0?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "Network mask",
      "Metric",
      "Administrative distance",
      "Gateway of last resort"
    ]
  },
  {
    "number": "48",
    "type": "66",
    "asks": [
      "What protocol does Ansible use in order to connect to managed nodes for configuration purposes?"
    ],
    "img": [],
    "sentence": [
      "Explanation: Managed nodes are the network devices (and/or servers) you manage with Ansible, via ssh. They are also sometimes called \"hosts-. Ansible is not installed on managed nodes."
    ],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "IPSec",
      "HTTP",
      "HTTPS",
      "SSH",
      "SFTP"
    ]
  },
  {
    "number": "49",
    "type": "489",
    "asks": [
      "Which statement is true about the collapsed core design concept?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "It is best suited for large-scale networks.",
      "It allows for better bandwidth.",
      "It is best suited for small enterprises.",
      "It bottlenecks bandwidth."
    ]
  },
  {
    "number": "50",
    "type": "44",
    "asks": [
      "Which statement correctly describes how TCP and UDP provide reliability for packets delivery?"
    ],
    "img": [],
    "sentence": [
      "Explanation:",
      "https://www.privateinternetaccess.com/blog/tcp-vs-udp-understanding-the",
      "-difference/"
    ],
    "listing": [],
    "responses": [
      "B"
    ],
    "variants": [
      "TCP is a best effort protocol; It does not guarantee delivery or error checking to make sure that data is not corrupted. UDP uses message acknowledgement mecanism and retransmits the lost packets.",
      "TCP uses flow control to avoid inundating a receiver by sending too many packets at once. UDP sends packets to the receiver in a continuous stream without checking for sequencing.",
      "TCP uses windowing to deliver packets reliably. UDP establishes a three-way handshake in order to provide reliable message transfer between hosts.",
      "TCP is a connectionless protocol that does not provide reliable data delivery. UDP is a connection-oriented protocol that uses sequencing to provide reliable delivery."
    ]
  },
  {
    "number": "51",
    "type": "433",
    "asks": [
      "Which is not a major menu option in Cisco DNA Center?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "A"
    ],
    "variants": [
      "Compliance",
      "Policy",
      "Design",
      "Provision"
    ]
  },
  {
    "number": "52",
    "type": "140",
    "asks": [
      "Refer to the exhibit. A network administrator configures four switches for local authentication using passwords that are stored as a cryptographic hash. The four switches must also support SSH access for administrators to manage the network infrastructure. Which switch is configured correctly to meet these requirements?"
    ],
    "img": [],
    "sentence": [],
    "listing": [
      "SW1(config-line) #line vty 0 15",
      "SW1(config-line) #no login local",
      "SW1(config-line) #password cisco",
      "SW2(config) #username admin! password abc!23",
      "SW2(config-line) #line vty 0 15",
      "SW2(config-line) #login local",
      "SW3(config) #username admin! secret abc!23",
      "SW3(config-line) #line vty 0 15",
      "SW3(config-line) #login local",
      "SW4(config) #username admin! secret abc!23",
      "SW4(config-line) #line console 0",
      "SW4(config-line) #login local"
    ],
    "responses": [
      "C"
    ],
    "variants": [
      "SW1",
      "SW2",
      "SW3",
      "SW4"
    ]
  },
  {
    "number": "53",
    "type": "299",
    "asks": [
      "What command allows a port to more quickly transition from blocking to forwarding?"
    ],
    "img": [],
    "sentence": [
      "Explanation: PortFast causes a switch or trunk port to enter the spanning tree forwarding state immediately, bypassing the listening and learning states."
    ],
    "listing": [],
    "responses": [
      "A"
    ],
    "variants": [
      "spanning-tree portfast",
      "spanning-tree convergefast",
      "spanning-tree rstp",
      "spanning-tree port-fast enable"
    ]
  },
  {
    "number": "54",
    "type": "215",
    "asks": [
      "What layer of the OSI model corresponds to the transport layer of the TCP/ IP model?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "B"
    ],
    "variants": [
      "Network",
      "Transport",
      "Session",
      "Presentation"
    ]
  },
  {
    "number": "55",
    "type": "217",
    "asks": [
      "What protocol and port number does RIP use? (Choose two.)"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "B",
      "D"
    ],
    "variants": [
      "TCP",
      "UDP",
      "514",
      "520"
    ]
  },
  {
    "number": "56",
    "type": "269",
    "asks": [
      "What is the default MTU of the Data and Pad field of the Ethernet frame?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "1200",
      "900",
      "1500",
      "1600"
    ]
  },
  {
    "number": "57",
    "type": "320",
    "asks": [
      "What parameters of a static route can be included as part of the ip route command to indicate where traffic should be sent? (Choose two.)"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "A",
      "D"
    ],
    "variants": [
      "Next hop IP address",
      "RE ID",
      "Destination MAC address",
      "Outgoing interface"
    ]
  },
  {
    "number": "58",
    "type": "259",
    "asks": [
      "What software runs on a physical server and makes virtual machines a reality?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "Firewall",
      "Web server",
      "Hypervisor",
      "Container"
    ]
  },
  {
    "number": "59",
    "type": "332",
    "asks": [
      "Which network type in OSPF features the use of a DR and a BDR?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "B"
    ],
    "variants": [
      "Point-to-point",
      "Broadcast",
      "Point-to-multipoint",
      "Point-to-multipoint non-broadcast"
    ]
  },
  {
    "number": "60",
    "type": "192",
    "asks": [
      "Which WAN topology is usually the most expensive and difficult to maintain?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "B"
    ],
    "variants": [
      "Hub-and-spoke",
      "Full-mesh",
      "Point-to-point",
      "Single-homed"
    ]
  },
  {
    "number": "61",
    "type": "190",
    "asks": [
      "Speed is most important in which layer of a 2-tier architecture?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "The access layer",
      "The workstation layer",
      "The backbone layer",
      "The distribution layer"
    ]
  },
  {
    "number": "62",
    "type": "477",
    "asks": [
      "Which is a valid reason to implement a wireless LAN controller?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "A"
    ],
    "variants": [
      "Centralized authentication",
      "The use of autonomous WAPs",
      "Multiple SSIDs"
    ]
  },
  {
    "number": "63",
    "type": "482",
    "asks": [
      "Which is a direct benefit of a full mesh topology?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "B"
    ],
    "variants": [
      "Increased bandwidth",
      "Increased redundancy",
      "Decreased switch count",
      "Increased complexity"
    ]
  },
  {
    "number": "64",
    "type": "307",
    "asks": [
      "Refer to the exhibit. What is the next router (or hop) to be used for a packet destined for 172.16.1.23?"
    ],
    "img": [],
    "sentence": [],
    "listing": [
      "172.16.0.0/16\tvia\t10.10.10.1",
      "0.0.0.0/0 via\t192.\t168.1.1",
      "172.16.1.0/24\tvia\t10.2C.20.2",
      "172.IS.2.0/24\tvia\t10.3C.30.3"
    ],
    "responses": [
      "D"
    ],
    "variants": [
      "10.30.30.3",
      "192.168.1.1",
      "10.10.10.1",
      "10.20.20.2"
    ]
  },
  {
    "number": "65",
    "type": "138",
    "asks": [
      "Refer to the exhibit. If OSPF is running on this network, how does Routerl handle traffic from Site A to 10.10.12.128/25 at Site B?"
    ],
    "img": [],
    "sentence": [],
    "listing": [
      "Router!#show ip route Gateway of last resort is not set",
      "10 0 00/8 is variably subnetted. 4 subnets. 2 masks C\t10 10 10 8/30 is directly connected. FastEthemetO/2",
      "C\t10101012/30 is directly connected. FastEthernet0/1",
      "O\t10.10 12 0/25 [110/11) via 10 10 10 9 00 00 02. FastEthemetO/2",
      "[110/11| via 10 10 10 13 00 00 02. FastEthernet0/1 C\t10 10 10 4/30 is directly connected. FastEthemetO/2"
    ],
    "responses": [
      "B"
    ],
    "variants": [
      "It sends packets out of interface Fa0/1 only.",
      "It cannot send packets to 10.10.12.128/25.",
      "It load-balances traffic out of Fa0/1 and FaO/2.",
      "It sends packets out of interface FaO/2 only."
    ]
  }
]