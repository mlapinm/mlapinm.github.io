let tests = [
  {
    "number": "1",
    "type": "522",
    "asks": [
      "Which specification for connectivity is currently used in data centers for lower cost and simplicity?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "lOGBase-T",
      "40GBase-T",
      "10GBase-CX",
      "lOOGBase-TX"
    ]
  },
  {
    "number": "2",
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
      "IKEvI",
      "IKEv2"
    ]
  },
  {
    "number": "3",
    "type": "283",
    "asks": [
      "What command configures an interface to trunk?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "switchport trunk",
      "switchport trunk dot1 q",
      "switchport mode trunk",
      "switchport trunk enable"
    ]
  },
  {
    "number": "4",
    "type": "406",
    "asks": [
      "What method is used with WPA2 in personal mode?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "SAE",
      "3DES",
      "MD5",
      "PSK"
    ]
  },
  {
    "number": "5",
    "type": "440",
    "asks": [
      "When enabling port security for a switch port, what is the default violation mode?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "B"
    ],
    "variants": [
      "Restrict",
      "Shutdown",
      "Protect",
      "Passive"
    ]
  },
  {
    "number": "6",
    "type": "144",
    "asks": [
      "Refer to the exhibit. Router R1 is running three different routing protocols. Based on which characteristic does it forward the packets destined for IP 172.17.32.1?"
    ],
    "img": [],
    "sentence": [],
    "listing": [
      "R1# show ip route",
      "D\t172.17.32.0/27\t[90/2888597172] via 20.1.1.1",
      "O\t172.17.32.0/19\t[110/292094] via 20.1.1.10",
      "R\t172.17.32.0/24\t[120/2] via 20.1.1.3"
    ],
    "responses": [
      "D"
    ],
    "variants": [
      "metric",
      "administrative distance",
      "cost",
      "longest prefix"
    ]
  },
  {
    "number": "7",
    "type": "366",
    "asks": [
      "What approach to QoS involves marking and classifying traffic?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "B"
    ],
    "variants": [
      "IntServ",
      "DiffServ",
      "BE",
      "RSVP"
    ]
  },
  {
    "number": "8",
    "type": "379",
    "asks": [
      "What happens if you issue the command no service password-encryption?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "B"
    ],
    "variants": [
      "Encrypted passwords are reversed.",
      "The device no longer encrypts future passwords.",
      "The device removes all encrypted passwords.",
      "This command is not valid."
    ]
  },
  {
    "number": "9",
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
    "number": "10",
    "type": "14",
    "asks": [
      "Which of the following is valid a Spanning Tree Protocol (STP) port state?"
    ],
    "img": [],
    "sentence": [
      "Explanation: The ports on a switch with enabled Spanning Tree Protocol (STP) are in one of the following five port states: Blocking, Listening, Learning, Forwarding, Disabled."
    ],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "Dispatching",
      "Transmitting",
      "Sending",
      "Forwarding",
      "Delivering",
      "Transferring"
    ]
  },
  {
    "number": "11",
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
    "number": "12",
    "type": "206",
    "asks": [
      "When analyzing the frames sent and received over a Gigabit Ethernet connection, a network technician sees many frames that are approximately 9000 bytes in size. What are these frames called?"
    ],
    "img": [],
    "sentence": [
      "Explanation: In computer networking, jumbo frames are Ethernet frames with more than 1500 bytes of payload, the limit set by the IEEE 802.3 standard. Conventionally, jumbo frames can carry up to 9000 bytes of payload, but variations exist and some care must be taken using the term. Many Gigabit Ethernet switches and Gigabit Ethernet network interface cards can support jumbo frames. Some Fast Ethernet switches and Fast Ethernet network interface cards can also support jumbo frames."
    ],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "Error frames",
      "Pico frames",
      "Runts",
      "Jumbo frames"
    ]
  },
  {
    "number": "13",
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
      "The backbone layer"
    ]
  },
  {
    "number": "14",
    "type": "486",
    "asks": [
      "Which topology does the collapsed core layer switch use in a two-tier design model?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "A"
    ],
    "variants": [
      "Star topology",
      "Full mesh topology",
      "Partial mesh topology",
      "Hybrid topology"
    ]
  },
  {
    "number": "15",
    "type": "507",
    "asks": [
      "Refer to the exhibit, what does the line LCP closed mean?"
    ],
    "img": [],
    "sentence": [],
    "listing": [
      "RouterA#show interface s0/3/0",
      "Serial0/0 is up, line protocol is down",
      "Hardware is PowerQuicc serial",
      "internet address is 10.0.1.1/24",
      "MTU 1500 bytes. BW 1544 Kbit. DLY 20000 usee, L.reliability 233/255. txload 1/255, rxload 1/255 L.encapsulation ppp, loopback not set",
      "Keepalive set (10 sec)",
      "lcp closed",
      "closed: ipcp, cdpcp"
    ],
    "responses": [
      "D"
    ],
    "variants": [
      "The LCP process has completed.",
      "The router does not have an IP address configured.",
      "The serial line is disconnected.",
      "The LCP process has not completed."
    ]
  },
  {
    "number": "16",
    "type": "337",
    "asks": [
      "In HSRR what is the term for routers that are not forwarding traffic for the LAN but are waiting to see if they are needed?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "Distinct routers",
      "Backup routers",
      "Standby routers",
      "Secondary routers"
    ]
  },
  {
    "number": "17",
    "type": "242",
    "asks": [
      "When troubleshooting an IPv6 network, an engineer notices that two devices have identical IPv6 addresses. Assuming that the network is correctly configured, why might this occur?"
    ],
    "img": [],
    "sentence": [
      "Explanation: An IPv6 anycast address is an address that is assigned to a set of interfaces that typically belong to different nodes. Anycast addresses are syntactically indistinguishable from unicast addresses, because anycast addresses are allocated from the unicast address space."
    ],
    "listing": [],
    "responses": [
      "B"
    ],
    "variants": [
      "The devices are using broadcasts for routing protocol traffic.",
      "The devices are using anycast.",
      "The devices are using matching link-local addresses for the purpose of SLAAC.",
      "The devices are using unique local addresses."
    ]
  },
  {
    "number": "18",
    "type": "271",
    "asks": [
      "What is the name of the database that stores address information in a Cisco switch?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "A"
    ],
    "variants": [
      "MAC address table",
      "Routing table",
      "Interface table",
      "Buffer table"
    ]
  },
  {
    "number": "19",
    "type": "402",
    "asks": [
      "Under which configuration mode is the command ip dhcp snooping used to enable DHCP snooping?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "Interface configuration mode",
      "Line configuration mode",
      "Security configuration mode",
      "Global configuration mode"
    ]
  },
  {
    "number": "20",
    "type": "125",
    "asks": [
      "Refer to the exhibit. What is the password that a network administrator must use in order to enter the enable mode?"
    ],
    "img": [],
    "sentence": [],
    "listing": [
      "Atlantatconf t",
      "Enter configuration commands, one per line. End with CNTL/Z.",
      "Atlanta(config)Vaaa new-model",
      "Atlanta(config)taaa authentication login default local",
      "Atlanta(config)ffline vty 0 4 L.Atlanta(config-line)flogin authentication default L.Atlanta(config-line)lexit",
      "Atlanta(config)tusername admin password adminl23 L.Atlanta(config)tusername admin privilege 15 L.Atlanta(config)tenable password ciscol23 L.Atlanta(config)tenable secret testl23 L.Atlanta(config)tend"
    ],
    "responses": [
      "D"
    ],
    "variants": [
      "admin123",
      "cisco123",
      "default",
      "test! 23"
    ]
  },
  {
    "number": "21",
    "type": "55",
    "asks": [
      "What is the default behavior of a Layer 2 switch when a frame with an unknown destination MAC address is received?"
    ],
    "img": [],
    "sentence": [
      "Explanation: When the switch receives a frame dedicated for a particular destination but that destination does not have an entry in the MAC Address Table, the switch has no choice but to flood the frame. The goal of this flood is that the device using the MAC address in the destination of the frame will receive the flood and respond to the message. If that device responds, then the switch can learn their MAC address and map it to the port into which the message arrives."
    ],
    "listing": [],
    "responses": [
      "B"
    ],
    "variants": [
      "The frame is dropped.",
      "The switch floods packets to all ports except the receiving port in the given VLAN.",
      "The switch uses DHCP in order to learn the destination MAC address.",
      "The switch uses ARP in order to learn the destination MAC address."
    ]
  },
  {
    "number": "22",
    "type": "509",
    "asks": [
      "Amazon Web Services (AWS) and Microsoft Azure are examples of what?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "A"
    ],
    "variants": [
      "Public cloud providers",
      "Private cloud providers",
      "Hybrid cloud providers",
      "Dynamic cloud providers"
    ]
  },
  {
    "number": "23",
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
    "number": "24",
    "type": "250",
    "asks": [
      "What command outputs the multicast addresses that an interface has joined in IPv6?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "B"
    ],
    "variants": [
      "show ipv6 interface\tbrief",
      "show ipv6 interface",
      "show ipv6 interface\tmulticast",
      "show multicast ipv6"
    ]
  },
  {
    "number": "25",
    "type": "307",
    "asks": [
      "Refer to the exhibit. What is the next router (or hop) to be used for a packet destined for 172.16.1.23?"
    ],
    "img": [],
    "sentence": [],
    "listing": [
      "172.16.0.0/16\tvia\t10.10.10.1",
      "0.0.0.0/0 via\t192.168.1.1",
      "172.16.1.0/24\tvia\t10.20.20.2",
      "172.16.2.0/24\tvia\t10.30.30.3"
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
    "number": "26",
    "type": "521",
    "asks": [
      "Which type of cable should used to connect a computer to a switch for management of the switch?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "Straight-through cable",
      "Crossover cable",
      "Rolled cable",
      "Shielded cable"
    ]
  },
  {
    "number": "27",
    "type": "230",
    "asks": [
      "What does it mean when the destination address in an Ethernet frame is set FFFF.FFFF.FFFF?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "The frame is a multicast frame.",
      "The frame is a unicast frame.",
      "The frame should be dropped.",
      "The frame is a broadcast frame."
    ]
  },
  {
    "number": "28",
    "type": "351",
    "asks": [
      "What command configures a default gateway in a DHCP server pool?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "ip default-gateway",
      "ip default-router",
      "ip domain-server"
    ]
  },
  {
    "number": "29",
    "type": "209",
    "asks": [
      "What command disables CDP globally on a device?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "A"
    ],
    "variants": [
      "no cdp run",
      "no cdp enable",
      "cdp disable"
    ]
  },
  {
    "number": "30",
    "type": "182",
    "asks": [
      "An email user has clicked a link in an email apparently sent by his company's security team. The webpage that opens appears to be safe but the link could have contained malicious code. Which type of attack is this?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "E"
    ],
    "variants": [
      "Physical access control",
      "Social engineering attack",
      "Brute force attack",
      "User awareness",
      "Phishing"
    ]
  },
  {
    "number": "31",
    "type": "415",
    "asks": [
      "What language is instrumental for both Puppet and Chef?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "A"
    ],
    "variants": [
      "Ruby",
      "C#",
      "Java"
    ]
  },
  {
    "number": "32",
    "type": "377",
    "asks": [
      "What is true about banner messages on Cisco routers? (Choose two.)"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "B",
      "C"
    ],
    "variants": [
      "You must always use a # symbol to indicate the end of the banner.",
      "Various types of banner messages appear at different times or for different conditions.",
      "You can use ASCII art in them."
    ]
  },
  {
    "number": "33",
    "type": "365",
    "asks": [
      "What command allows to send log messages to a device at 10.10.10.7?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "logging 10.10.10.7",
      "logging trap level 2 10.10.10.7",
      "logging host 10.10.10.7",
      "logging host send 7 host 10.10.10.7"
    ]
  },
  {
    "number": "34",
    "type": "86",
    "asks": [
      "Which of the following are mandatory actions that must be performed in order for SSH to operate normally on a Cisco switch? (Choose two.)"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "D",
      "E"
    ],
    "variants": [
      "IP routing must be enabled.",
      "Telnet must be disabled.",
      "A console password must be configured.",
      "The switch must be running a k9 (crypto) IOS image.",
      "The ip domain-name command must be configured."
    ]
  },
  {
    "number": "35",
    "type": "140",
    "asks": [
      "Refer to the exhibit. A network administrator configures four switches for local authentication using passwords that are stored as a cryptographic hash. The four switches must also support SSH access for administrators to manage the network infrastructure. Which switch is configured correctly to meet these requirements?"
    ],
    "img": [],
    "sentence": [],
    "listing": [
      "SWI(config-line) #line vty 0 15",
      "SWI(config-line) #no login local",
      "SWI(config-line) #password cisco",
      "SW2(config) #username admin 1 password abc123 L.SW2(config-line) #line vty 0 15",
      "SW2(config-line) #login local",
      "SW3(config) #username admin 1 secret abc123 L.SW3(config-line) #line vty 0 15",
      "SW3(config-line) #login local",
      "SW4(config) #username admin 1 secret abc123 L.SW4(config-line) #line console 0 SW4(config-line) #login local"
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
    "number": "36",
    "type": "407",
    "asks": [
      "If you are running WPA3 in enterprise mode, what is the required version of AES?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "AES-32",
      "AES-64",
      "AES-128",
      "AES-192"
    ]
  },
  {
    "number": "37",
    "type": "51",
    "asks": [
      "Which type of address is the public IP address of a NAT device?"
    ],
    "img": [],
    "sentence": [
      "Explanation: Inside global address — A legitimate IP address assigned by the NIC or service provider that represents one or more inside local IP addresses to the outside world."
    ],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "outside global",
      "outside local",
      "inside global",
      "inside local",
      "outside public",
      "inside public"
    ]
  },
  {
    "number": "38",
    "type": "47",
    "asks": [
      "How does EIGRP, by default, calculate the metric of a route when adding it to the routing table?"
    ],
    "img": [],
    "sentence": [
      "Explanation: EIGRP uses multiple factors to calculate the metric for a path. Metric calculation uses bandwidth and delay by default but can include interface load and reliability, too."
    ],
    "listing": [],
    "responses": [
      "A"
    ],
    "variants": [
      "It uses the bandwidth and delay values of the path to calculate the route metric.",
      "It sets a default metric of 10 for all routes that are learned by the router.",
      "It uses a reference bandwidth and the actual bandwidth of the connected link to calculate the route metric.",
      "It counts the number of hops between the receiving and destination routers and uses that value as the metric."
    ]
  },
  {
    "number": "39",
    "type": "107",
    "asks": [
      "Which two statements correctly describe the functioning of Weighted Random Early Detection protocol? (Choose two.)"
    ],
    "img": [],
    "sentence": [
      "Explanation: Weighted random early detection (WRED) is a queueing discipline for a network scheduler suited for congestion avoidance. It is an extension to random early detection (RED) where a single queue may have several different sets of queue thresholds. Each threshold set is associated to a particular traffic class."
    ],
    "listing": [],
    "responses": [
      "D",
      "E"
    ],
    "variants": [
      "It can identify different flows with a high level of granularity.",
      "It supports protocol discovery.",
      "It guarantees the delivery of high-priority packets.",
      "It can avoid congestion by preventing the queue from filling up.",
      "packets with the lower-priority are dropped before those with the higher-priority packets."
    ]
  },
  {
    "number": "40",
    "type": "367",
    "asks": [
      "What improvement does SNMP version 3 offer over SNMP v2c?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "B"
    ],
    "variants": [
      "Monitoring with no overhead",
      "Increased security",
      "A reduction in server calls",
      "ICMP IP SLA"
    ]
  },
  {
    "number": "41",
    "type": "456",
    "asks": [
      "Refer to the exhibit. Which statement is true?"
    ],
    "img": [
      "img0041"
    ],
    "sentence": [],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "There are one collision domain and one broadcast domain.",
      "There are two collision domains and one broadcast domain.",
      "There are three collision domains and two broadcast domains.",
      "There are seven collision domains and two broadcast domains."
    ]
  },
  {
    "number": "42",
    "type": "68",
    "asks": [
      "What character is us as separator between keys and values in JSON?"
    ],
    "img": [],
    "sentence": [
      "Explanation: In JSON, data structures take on these forms:",
      "An object is an unordered set of name/value pairs. An object begins with \"{\" left brace and ends with\"}\" right brace. Each name is followed by ”:M colon and the name/value pairs are separated by 7 comma."
    ],
    "listing": [],
    "responses": [
      "A"
    ],
    "variants": [
      ":",
      "=",
      "|",
      ","
    ]
  },
  {
    "number": "43",
    "type": "516",
    "asks": [
      "Which cloud connectivity method allows for seamless transition between public clouds?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "MPLS VPN",
      "Internet VPN",
      "Intercloud exchange",
      "Private WAN"
    ]
  },
  {
    "number": "44",
    "type": "130",
    "asks": [
      "Refer to the exhibit. The network administrator wants VLAN 55 traffic to be untagged between Swl and Sw2, while all other VLANs remain tagged. Which command should be entered to perfom this task?"
    ],
    "img": [
      "img0044"
    ],
    "sentence": [],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "switchport access vlan 55",
      "switchport trunk allowed vlan 55",
      "switchport private-vlan association host 55",
      "switchport trunk native vlan 55"
    ]
  },
  {
    "number": "45",
    "type": "275",
    "asks": [
      "A 48-port Cisco switch has been configured with seven different VLANs. How many broadcast domains exist on the switch?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "0",
      "1",
      "7",
      "48"
    ]
  },
  {
    "number": "46",
    "type": "359",
    "asks": [
      "What marking is done at Layer 3?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "A"
    ],
    "variants": [
      "Type of service",
      "Class of service",
      "Experimental bits",
      "BECN"
    ]
  },
  {
    "number": "47",
    "type": "172",
    "asks": [
      "For which reason are access points often referred to as dual band?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "B"
    ],
    "variants": [
      "Because they can service LAN and WAN clients",
      "Because they support multiple frequency bands",
      "Because they are capable of operating in secure and non-secure modes",
      "Because they can operate in both lightweight and autonomous modes"
    ]
  },
  {
    "number": "48",
    "type": "409",
    "asks": [
      "Where does a northbound API exist in an SDN network?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "A"
    ],
    "variants": [
      "Between the controller and the network management applications",
      "Between the controller and the network devices being managed",
      "Between the controller and the public cloud",
      "Between the controller and the access layer"
    ]
  },
  {
    "number": "49",
    "type": "472",
    "asks": [
      "Which term describes what it is called when more than one wireless access point (WAP) cover the same SSID?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "Broadcast domain",
      "Basic service set",
      "Extended server set",
      "Wireless mesh"
    ]
  },
  {
    "number": "50",
    "type": "108",
    "asks": [
      "Which two statements correctly describe the functioning of HSRP? (Choose two.)"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "A",
      "E"
    ],
    "variants": [
      "The two routers designate one router as the active router and the other as the standby router.",
      "The two routers share the same interface IP address, and default gateway traffic is load-balanced between them.",
      "The two routers synchronize configurations to provide u consistent packet forwarding.",
      "Each router has a different IP address, both routers act as □ the default gateway on the LAN, and traffic is load-balanced between them.",
      "The two routers share a virtual IP address that is used as the default gateway for devices on the LAN."
    ]
  },
  {
    "number": "51",
    "type": "339",
    "asks": [
      "What is the purpose of static NAT?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "B"
    ],
    "variants": [
      "To ensure that the destination IP address remains unchanged during translation",
      "To translate a single specific inside address to a single specific outside address",
      "To ensure that multiple inside addresses can translate to a single outside address",
      "To pull inside addresses for translation from a pool of addresses"
    ]
  },
  {
    "number": "52",
    "type": "369",
    "asks": [
      "LLQ is a form of what type of tool in QoS?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "A"
    ],
    "variants": [
      "Congestion management",
      "Policing",
      "Shaping"
    ]
  },
  {
    "number": "53",
    "type": "476",
    "asks": [
      "What is a service-level agreement (SLA) for network connectivity?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "It is an agreement of bandwidth between the ISP and the customer.",
      "It is a quality of service agreement between the ISP and the customer.",
      "It is an agreement of uptime between the ISP and the customer."
    ]
  },
  {
    "number": "54",
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
    "number": "55",
    "type": "318",
    "asks": [
      "What is the administrative distance of Internal EIGRP routes?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "5",
      "20",
      "90",
      "100"
    ]
  },
  {
    "number": "56",
    "type": "396",
    "asks": [
      "What are two options for recovering from an errordisabled port due to port security? (Choose two.)"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "B",
      "C"
    ],
    "variants": [
      "Port Security Auto Recovery",
      "errdisable recovery",
      "Manual recovery",
      "port security disable"
    ]
  },
  {
    "number": "57",
    "type": "245",
    "asks": [
      "Which commands can be used to verify an IPv6 interface address? (Choose two.)"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "A",
      "C"
    ],
    "variants": [
      "show ipv6 interface brief",
      "show interface ipv6 details",
      "show ipv6 interface",
      "show interface ipv6 info"
    ]
  },
  {
    "number": "58",
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
    "number": "59",
    "type": "58",
    "asks": [
      "How does OSPF select a route when It learns multiple paths to a network?"
    ],
    "img": [],
    "sentence": [
      "Explanation: OSPF uses following formula to calculate the cost:",
      "Cost = Reference bandwidth / Interface bandwidth in bps.",
      "Reference bandwidth was defined as arbitrary value in OSPF documentation (RFC 2338). Vendors need to use their own reference bandwidth. Cisco uses 100Mbps (108) bandwidth as reference bandwidth."
    ],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "It selects the route with the lowest metric, calculated by multiplying active K value by 256.",
      "It selects the route with the lowest bandwidth, calculated by adding the metric from the source router to the destination, for each existing interface.",
      "It selects the route with the lowest cost, calculated by dividing a reference bandwidth of 100 Mbps by the actual bandwidth of the existing interface.",
      "It selects the route with the lowest hops count between the source and the destination routers."
    ]
  },
  {
    "number": "60",
    "type": "32",
    "asks": [
      "In order to be managed by Cisco Wireless LAN Controllers, access points need to be configured in which mode?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "Mobility express",
      "Bridge",
      "Autonomous",
      "Lightweight"
    ]
  },
  {
    "number": "61",
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
    "number": "62",
    "type": "354",
    "asks": [
      "A network administrator issues a successful ping to www.company.com. What has been verified?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "B"
    ],
    "variants": [
      "WINS",
      "DNS",
      "NTP",
      "DHCP"
    ]
  },
  {
    "number": "63",
    "type": "529",
    "asks": [
      "Refer to the exhibit. What can be concluded about the interface or node?"
    ],
    "img": [],
    "sentence": [],
    "listing": [
      "SwitchlJfsh int fastEthernet 0/1",
      "FastEthernete/1 is down, line protocol is down (disabled)",
      "Hardware is Lance, address is 000a.6cf3.1502 (bia 000a.f36c.1502) [output cut]",
      "956 packets input, 193351 bytes, 0 no buffer",
      "Received 956 broadcasts, 0 runts, 0 giants, 0 throttles",
      "0 input errors, 0 CRC, 0 frame, 0 overrun, 0 ignored, 0 abort",
      "0 watchdog, 0 multicast, 0 pause input",
      "0 input packets with dribble condition detected",
      "2357 packets output, 263570 bytes, 0 underruns",
      "0 output errors, 0 collisions, 10 interface resets",
      "0 babbles, 457 late collision, 0 deferred",
      "0 lost carrier, 0 no carrier",
      "0 output buffer failures, 0 output buffers swapped out"
    ],
    "responses": [
      "C"
    ],
    "variants": [
      "The interface is shut down.",
      "The interface is negotiated at half-duplex.",
      "There is a duplex mismatch on the interface.",
      "The cabling is shorted on the interface."
    ]
  },
  {
    "number": "64",
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
      "They are commonly deployed to protect a network from u internal attacks.",
      "They can provide stateful packet inspection.",
      "They can control application traffic."
    ]
  },
  {
    "number": "65",
    "type": "444",
    "asks": [
      "What command allows to confirm the IP address and mask assigned to an interface?"
    ],
    "img": [],
    "sentence": [],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "show interfaces terse",
      "show addresses",
      "show ip interface brief",
      "show ip interface"
    ]
  }
]