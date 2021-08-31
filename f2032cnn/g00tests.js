let tests = [
  {
    "number": "1",
    "type": "",
    "asks": [
      "Which two command sequences need to be entered on a switch in order to establish a Layer 3 EtherChannel with an open-standard protocol? (Choose two.)"
    ],
    "img": [],
    "sentence": [
      "ip address 172.20.0.1 255.255.255.0",
      "switchport mode trunk"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "interface GigabitEthernetO/O/1 channel-group 10 mode on",
      "interface port-channel 10 no switchport",
      "interface GigabitEthernet0/0/1 channel-group 10 mode auto",
      "interface GigabitEthernet0/0/1 channel-group 10 mode active",
      "interface port-channel 10 ? switchport"
    ]
  },
  {
    "number": "2",
    "type": "",
    "asks": [
      "Refer to the exhibit. A network administrator configures a static default route on the router with the ip route 0.0.0.0 0.0.0.0 10.11.0.1 120 command. What is the expected effect of this command on the router?"
    ],
    "img": [],
    "sentence": [
      "0*E2 0.0.0.0/0 [110/lJ via 10.10.0.1, 00:00:01, GigabitEthernetO/O 10.0.0.0/8 is variably subnetted, 2 subnets, 2 masks C\t10.0.0.0/24 is directly connected, GigabitEthernet0/0",
      "L\t10.0.0.2/32 is directly connected, GigabitEthernet0/0",
      "C\t10.11.0.0/24 is directly connected, GigabitEthernetO/l",
      "L\t10.11.0.2/32 is directly connected, GigabitEthernetO/l"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "The router begins sending traffic without an explicit matching entry in the routing table to GigabitEthernetO/1.",
      "The router instantly replaces the existing OSPF route in the routing table with the newly configured static route.",
      "The router starts load-balancing traffic between the two default routes.",
      "The router ignores the new static route until the existing OSPF default route is removed."
    ]
  },
  {
    "number": "3",
    "type": "",
    "asks": [
      "Which of the following is not an item for which you configure profiles when first setting up a WLC?"
    ],
    "img": [],
    "sentence": [
      "в. RF"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "Site",
      "Node",
      "WLAN"
    ]
  },
  {
    "number": "4",
    "type": "",
    "asks": [
      "When Auto MDI-X is used on a Cisco switch, what type of cable is used to connect a Layer 2 switch's port to a laptop?"
    ],
    "img": [],
    "sentence": [
      "В.\tRollover"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "Crossover",
      "Console",
      "Straight-through"
    ]
  },
  {
    "number": "5",
    "type": "",
    "asks": [
      "You see the syslog message *Nov 16 00:13:23.003: %SYS-6-CLOCKUPDATE: System clock has been updated from 13:20:35 EDT Sun Feb 28 2021 to 18:53:13 EST Thu Jun 15 2022, configured from console by console. What facility produced the message?"
    ],
    "img": [],
    "sentence": [],
    "responses": [
      ""
    ],
    "variants": [
      "%SY S-6-C LOCKUP DATE",
      "CLOCKUPDATE",
      "%SYS",
      "6"
    ]
  },
  {
    "number": "6",
    "type": "",
    "asks": [
      "Why would Multiprotocol Label Switching (MPLS) be used as a connectivity option?"
    ],
    "img": [],
    "sentence": [],
    "responses": [
      ""
    ],
    "variants": [
      "To support multicast packets.",
      "To support both IPv4 and IPv6 packets.",
      "When a high amount of bandwidth is needed.",
      "When encryption is required."
    ]
  },
  {
    "number": "7",
    "type": "",
    "asks": [
      "What attack method locks out a system or even encrypts it and then offers to unlock it in exchange for money?"
    ],
    "img": [],
    "sentence": [
      "В. Man-in-the-middle"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "Worm",
      "Phishing",
      "Ransomware"
    ]
  },
  {
    "number": "8",
    "type": "",
    "asks": [
      "Refer to the exhibit. What is the cause of the shown configuration error message?"
    ],
    "img": [],
    "sentence": [
      "А.\t192.168.10.143 belongs to a private IP address range.",
      "Routerl(config)#interface GigabitEthernet 1/0/1 Routerl(conf ig-if)#ip address 192.168.10.143 255.255.255.240 Bad mask /28 for address 192.168.10.143"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "The router does not support the /28 mask.",
      "192.168.10.143 is the network IP address.",
      "192.168.10.143 is the broadcast IP address."
    ]
  },
  {
    "number": "9",
    "type": "",
    "asks": [
      "Which of the following is true regarding spine-and-leaf architecture?"
    ],
    "img": [],
    "sentence": [],
    "responses": [
      ""
    ],
    "variants": [
      "Higher bandwidth can be obtained for each link between leaf switches.",
      "It facilitates STP troubleshooting because STP blocked ports can be predicted easily.",
      "By design, traveling information has variable latency between endpoint devices.",
      "Each device in the topology is separated by the same number of hops."
    ]
  },
  {
    "number": "10",
    "type": "",
    "asks": [
      "An email user has clicked a link in an email apparently sent by his company's security team. The webpage that opens appears to be safe but the link could have contained malicious code. Which type of attack is this?"
    ],
    "img": [],
    "sentence": [
      "В. Social engineering attack"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "Physical access control",
      "Brute force attack",
      "User awareness",
      "Phishing"
    ]
  },
  {
    "number": "11",
    "type": "",
    "asks": [
      "A technician needs to configure switch Sw2 so that it can be accessed remotely from the management workstation connected to Switch Swl. Which set of commands is required to accomplish this task?"
    ],
    "img": [],
    "sentence": [],
    "responses": [
      ""
    ],
    "variants": [
      "Sw2(config)# interface FastEthernet 0/1 Sw2(config-if)# ip address 192.168.8.252 255.255.255.0 Sw2(config-if)# no shutdown",
      "Sw2(config)# interface vlan 1 Sw2(config-if)# ip address 192.168.8.252 255.255.255.0 Sw2(config-if)# ip default-gateway 192.168.8.254 255.255.255.0 Sw2(config-if)# no shutdown",
      "Sw2(config)# ip default-gateway 192.168.8.254 Sw2(config)# interface vlan 1 Sw2(config-if)# ip address 192.168.8.252 255.255.255.0 Sw2(config-if)# no shutdown",
      "Sw2(config)# ip default-network 192.168.8.254 Sw2(config)# interface vlan 1 Sw2(config-if)# ip address 192.168.8.252 255.255.255.0 Sw2(config-if)# no shutdown",
      "Sw2(config)# ip route 192.168.8.254 255.255.255.0 Sw2(config)# interface FastEthernet 0/1 Sw2(config-if)# ip address 192.168.8.252 255.255.255.0 Sw2(config-if)# no shutdown"
    ]
  },
  {
    "number": "12",
    "type": "",
    "asks": [
      "What command creates the RSA key for use with SSH ?"
    ],
    "img": [],
    "sentence": [
      "В. ssh key rsa generate"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "crypto key generate rsa",
      "get ssh key rsa",
      "ip ssh generate key rsa"
    ]
  },
  {
    "number": "13",
    "type": "",
    "asks": [
      "Refer to the exhibit, which type of device must be connected to interface FastEthernet 0/1, if the network environment is operating normally?"
    ],
    "img": [],
    "sentence": [
      "В.\trouter",
      "С.\tDHCP client",
      "ip arp inspection vlan 2-10 interface fastethernet 0/1",
      "ip arp inspection trust"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "PC",
      "access point"
    ]
  },
  {
    "number": "14",
    "type": "",
    "asks": [
      "What command can be used to quickly view all the trunks on a switch?"
    ],
    "img": [],
    "sentence": [
      "В. show interface trunk"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "show vlans trunk",
      "show trunk interface",
      "show trunk all"
    ]
  },
  {
    "number": "15",
    "type": "",
    "asks": [
      "If a subnet mask has a length of 19 bits, what is the subnet mask in dotted-decimal notation?"
    ],
    "img": [],
    "sentence": [
      "В. 255.255.224.0"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "255.255.192.0",
      "255.255.240.0"
    ]
  },
  {
    "number": "16",
    "type": "",
    "asks": [
      "What is the name for the router that is responsible for assigning traffic to routers in GLBP?"
    ],
    "img": [],
    "sentence": [
      "В. AVR"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "AVF",
      "AVG"
    ]
  },
  {
    "number": "17",
    "type": "",
    "asks": [
      "Which of the following are transport layer protocols? (Choose two.)"
    ],
    "img": [],
    "sentence": [],
    "responses": [
      ""
    ],
    "variants": [
      "ICMP",
      "TCP",
      "UDP"
    ]
  },
  {
    "number": "18",
    "type": "",
    "asks": [
      "In order to generate an RSA key for SSH on a switch, which of the following is required? (Choose two.)"
    ],
    "img": [],
    "sentence": [],
    "responses": [
      ""
    ],
    "variants": [
      "Configuring VTY access.",
      "Configuring a hostname.",
      "Creating a user with a password.",
      "Configuring the version of SSH.",
      "Assigning a DNS domain name."
    ]
  },
  {
    "number": "19",
    "type": "",
    "asks": [
      "What layer of the OSI model corresponds to the transport layer of the TCP/IP model?"
    ],
    "img": [],
    "sentence": [
      "В. Transport"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "Network",
      "Session"
    ]
  },
  {
    "number": "20",
    "type": "",
    "asks": [
      "What is a service-level agreement (SLA) for network connectivity?"
    ],
    "img": [],
    "sentence": [],
    "responses": [
      ""
    ],
    "variants": [
      "It is an agreement of bandwidth between the ISP and the customer.",
      "It is a quality of service agreement between the ISP and the customer.",
      "It is an agreement of uptime between the ISP and the customer.",
      "All of the above."
    ]
  },
  {
    "number": "21",
    "type": "",
    "asks": [
      "How large is the typical network portion of an IPv6 global unicast address?"
    ],
    "img": [],
    "sentence": [],
    "responses": [
      ""
    ],
    "variants": [
      "32 bits",
      "48 bits",
      "64 bits",
      "128 bits"
    ]
  },
  {
    "number": "22",
    "type": "",
    "asks": [
      "Which specification for connectivity is currently used in data centers for lower cost and simplicity?"
    ],
    "img": [],
    "sentence": [
      "В. 40GBase-T"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "l0GBase-T",
      "10GBase-CX"
    ]
  },
  {
    "number": "23",
    "type": "",
    "asks": [
      "Which is a benefit of using MLPPP?"
    ],
    "img": [],
    "sentence": [
      "В. Does not require routing protocols"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "Simplified layer 3 configuration",
      "Does not require authentication protocols"
    ]
  },
  {
    "number": "24",
    "type": "",
    "asks": [
      "What command is used to create the public/private key pair for SSH?"
    ],
    "img": [],
    "sentence": [
      "В. crypto key generate ssh"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "crypto key ssh create",
      "crypto key ssh",
      "crypto key generate rsa"
    ]
  },
  {
    "number": "25",
    "type": "",
    "asks": [
      "Which is a valid reason to implement a wireless LAN controller?"
    ],
    "img": [],
    "sentence": [
      "В. The use of autonomous WAPs"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "Centralized authentication",
      "Multiple SSIDs",
      "Multiple VLANs"
    ]
  },
  {
    "number": "26",
    "type": "",
    "asks": [
      "What command identifies the inside NAT interface?"
    ],
    "img": [],
    "sentence": [
      "В. nat ip inside"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "nat inside",
      "inside"
    ]
  },
  {
    "number": "27",
    "type": "",
    "asks": [
      "What improvement does SNMP version 3 offer over SNMP v2c?"
    ],
    "img": [],
    "sentence": [
      "В. Increased security"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "Monitoring with no overhead",
      "A reduction in server calls"
    ]
  },
  {
    "number": "28",
    "type": "",
    "asks": [
      "A network administrator issues a successful ping to www.company.com. What has been verified?"
    ],
    "img": [],
    "sentence": [
      "В. DNS"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "WINS",
      "NTP"
    ]
  },
  {
    "number": "29",
    "type": "",
    "asks": [
      "According to best practices, what is the proper placement of a firewall?"
    ],
    "img": [],
    "sentence": [],
    "responses": [
      ""
    ],
    "variants": [
      "Only between the internal network and the Internet В. At key security boundaries",
      "IntheDMZ"
    ]
  },
  {
    "number": "30",
    "type": "",
    "asks": [
      "When using DHCP combined with the SLAAC feature in IPv6, what form of DHCP is most likely being used?"
    ],
    "img": [],
    "sentence": [
      "В. Stateless"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "Stateful",
      "Headless"
    ]
  },
  {
    "number": "31",
    "type": "",
    "asks": [
      "How does EIGRP, by default, calculate the metric of a route when adding it to the routing table?"
    ],
    "img": [],
    "sentence": [],
    "responses": [
      ""
    ],
    "variants": [
      "It uses the bandwidth and delay values of the path to calculate the route metric.",
      "It sets a default metric of 10 for all routes that are learned by the router.",
      "It uses a reference bandwidth and the actual bandwidth of the connected link to calculate the route metric.",
      "It counts the number of hops between the receiving and destination routers and uses that value as the metric."
    ]
  },
  {
    "number": "32",
    "type": "",
    "asks": [
      "What command disables CDP globally on a device?"
    ],
    "img": [],
    "sentence": [],
    "responses": [
      ""
    ],
    "variants": [
      "no cdp run",
      "no cdp enable",
      "cdp disable"
    ]
  },
  {
    "number": "33",
    "type": "",
    "asks": [
      "Where is the full mesh topology commonly seen in the three-tier design"
    ],
    "img": [],
    "sentence": [
      "model?"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "Core layer",
      "Distribution layer",
      "Access layer"
    ]
  },
  {
    "number": "34",
    "type": "",
    "asks": [
      "What does a Cisco IP phone do when it receives untagged data traffic from an attached PC?"
    ],
    "img": [],
    "sentence": [
      "В. It tags the traffic with the default VLAN."
    ],
    "responses": [
      ""
    ],
    "variants": [
      "It tags the traffic with the native VLAN.",
      "It drops the traffic."
    ]
  },
  {
    "number": "35",
    "type": "",
    "asks": [
      "What command allows to send log messages to a device at 10.10.10.7?"
    ],
    "img": [],
    "sentence": [
      "В. logging trap level 2 10.10.10.7 О"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "logging 10.10.10.7 О",
      "logging host 10.10.10.7",
      "logging host send 7 host 10.10.10.7"
    ]
  },
  {
    "number": "36",
    "type": "",
    "asks": [
      "Refer to the exhibit. Which type of route does R1 use to reach host 10.10.14.10/32?"
    ],
    "img": [
      "img36"
    ],
    "sentence": [
      "R1#sh ip ro",
      "Gateway of last resort is 10.10.10.18 to network 0.0.0.0",
      "10.0.0.0/8 is variably subnetted, 4 subnets, 3 masks C\t10.10.10.0/30 is directly connected, FastEthernetO/1",
      "О\t10.10.14.0/25 (110/6576J via 10.10.10.1, 06:58:21, FastEthernetO/1",
      "C\t10.10.10.16/30 is dirootly connected, FastEthornotO/24",
      "О\t10.10.14.144/28 [110/110] via 10.10.10.1, 06:58:21, FastEthernetO/1",
      "B* 0.0.0.0/0 [20/OJ via 10.10.10.18, 01:17:58",
      "В. network route",
      "С. host route"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "default route",
      "floating static route"
    ]
  },
  {
    "number": "37",
    "type": "",
    "asks": [
      "What does a JSON object consist of?"
    ],
    "img": [],
    "sentence": [
      "В. Subobjects"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "Arrays",
      "If, Then statements",
      "Key/value pairs"
    ]
  },
  {
    "number": "38",
    "type": "",
    "asks": [
      "What counter is incremented when the number of frames transmitted is greater than 1518 bytes in size?"
    ],
    "img": [],
    "sentence": [
      "В. Late collision"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "Babble",
      "Runt",
      "Ignored"
    ]
  },
  {
    "number": "39",
    "type": "",
    "asks": [
      "Refer to the exhibit, which would be the effect of replacing the hub with a switch?"
    ],
    "img": [
      "img39"
    ],
    "sentence": [],
    "responses": [
      ""
    ],
    "variants": [
      "The number of collision domains would increase.",
      "The number of collision domains would decrease.",
      "The number of broadcast domains would increase.",
      "The number of broadcast domains would decrease."
    ]
  },
  {
    "number": "40",
    "type": "",
    "asks": [
      "What is a stratum in NTP?"
    ],
    "img": [],
    "sentence": [],
    "responses": [
      ""
    ],
    "variants": [
      "A measure of the proximity to the reference clock В. A measure of a clockXs accuracy",
      "A measure of the number of total NTP clients",
      "The number of broadcast domains would decrease."
    ]
  },
  {
    "number": "41",
    "type": "",
    "asks": [
      "What command assigns voice VLAN 20 on a switch access port?"
    ],
    "img": [],
    "sentence": [
      "В. switchport access vlan 20 voice"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "switchport voice vlan 20",
      "switchport vlan 20 voice",
      "switchport access vlan 20"
    ]
  },
  {
    "number": "42",
    "type": "",
    "asks": [
      "Which type of device will detect but not prevent unauthorized access?"
    ],
    "img": [],
    "sentence": [
      "В. IPS"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "Firewall",
      "IDS",
      "Honeypots"
    ]
  },
  {
    "number": "43",
    "type": "",
    "asks": [
      "What command shoud be entered in order to configure a Cisco router so that severity levels 5 through 0 log messages are stored in a buffer?"
    ],
    "img": [],
    "sentence": [
      "В. logging level 5 buffer"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "logging buffered 5",
      "logging 5 buffered",
      "logging buffered 5 0"
    ]
  },
  {
    "number": "44",
    "type": "",
    "asks": [
      "Refer to the exhibit. Which statement is false?"
    ],
    "img": [],
    "sentence": [
      "no service password-encryption",
      "!",
      "enable secret rt3KKSMZPs",
      "!",
      "username admin0l privilege 15 secret Ciscol23",
      "!",
      "line vty 0 4",
      "password CdffLs&WvZ",
      "login",
      "transport input telnet"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "Telnet users will be required to provide a password for Telnet access.",
      "Telnet users will be required to provide the password ChEeEs&WiZ for access to privileged mode.",
      "The account password of the admin privilege-level user is not very secure.",
      "New plaintext passwords will not be encrypted."
    ]
  },
  {
    "number": "45",
    "type": "",
    "asks": [
      "When analyzing the frames sent and received over a Gigabit Ethernet connection, a network technician sees many frames that are approximately 9000 bytes in size. What are these frames called?"
    ],
    "img": [],
    "sentence": [
      "В. Pico frames"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "Error frames",
      "Runts",
      "Jumbo frames"
    ]
  },
  {
    "number": "46",
    "type": "",
    "asks": [
      "What is a basic security measure used in some wireless networks?"
    ],
    "img": [],
    "sentence": [
      "В. RF cloaking"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "Network cloaking",
      "SSID broadcasting",
      "MAC masking"
    ]
  },
  {
    "number": "47",
    "type": "",
    "asks": [
      "What two new port roles were introduced with Rapid PVST+? (Choose two.)"
    ],
    "img": [],
    "sentence": [],
    "responses": [
      ""
    ],
    "variants": [
      "Alternate",
      "Designated",
      "Root",
      "Backup"
    ]
  },
  {
    "number": "48",
    "type": "",
    "asks": [
      "Which layer in the three-tier model is where collision domains should be created?"
    ],
    "img": [],
    "sentence": [
      "В. Distribution layer"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "Core layer",
      "Access layer",
      "Routing layer"
    ]
  },
  {
    "number": "49",
    "type": "",
    "asks": [
      "What technology permits high-availability configurations with physical ports on Cisco wireless LAN controllers?"
    ],
    "img": [],
    "sentence": [
      "В. STP"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "VTP",
      "LAG",
      "PoE"
    ]
  },
  {
    "number": "50",
    "type": "",
    "asks": [
      "A router R1 learns the same route from two different neighbors R2 and R3. R2 is an OSPF neighbor, and R3 is an EIGRP neighbor. What is the administrative distance of the route that will be added to R1 's routing table?"
    ],
    "img": [],
    "sentence": [
      "В. 90",
      "С. 110"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "20",
      "115"
    ]
  },
  {
    "number": "51",
    "type": "",
    "asks": [
      "What command sets the maximum number of MAC addresses permitted to 4?"
    ],
    "img": [],
    "sentence": [],
    "responses": [
      ""
    ],
    "variants": [
      "set port-security max mac-address 4",
      "switchport port-security maximum 4",
      "switchport port-security maximum mac-address 4",
      "switchport port-security 4"
    ]
  },
  {
    "number": "52",
    "type": "",
    "asks": [
      "What level of logging is appropriate for an event where an immediate action is required?"
    ],
    "img": [],
    "sentence": [],
    "responses": [
      ""
    ],
    "variants": [
      "Emergency",
      "Critical",
      "Error",
      "Alert"
    ]
  },
  {
    "number": "53",
    "type": "",
    "asks": [
      "What security protocol does not encrypt the entire body of a packet?"
    ],
    "img": [],
    "sentence": [
      "В. TACACS+"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "RADIUS",
      "VTP",
      "STP"
    ]
  },
  {
    "number": "54",
    "type": "",
    "asks": [
      "A new Layer 2 switch in its default configuration has just been powered up. In addition to a console connection, there are two Windows hosts and an IP phone (using PoE) connected to its Ethernet ports. Which of the following are true? (Choose two.)"
    ],
    "img": [],
    "sentence": [],
    "responses": [
      ""
    ],
    "variants": [
      "If either Windows host has successfully completed an ARP ? resolution, the switch will have learned the MAC addresses of both Windows hosts.",
      "The switch would see the two Windows hosts directly connected devices from CDP.",
      "The switch would not know if the IP phone is a Cisco IP ? phone or a third-party IP phone until a call is initiated from the phone.",
      "The switch can be configured with an IPv4 address on interface VLAN 1."
    ]
  },
  {
    "number": "55",
    "type": "",
    "asks": [
      "Refer to the exhibit. How many broadcast domains are present in the network?"
    ],
    "img": [],
    "sentence": [
      "В.\tTwo broadcast domains"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "One broadcast domain",
      "Three broadcast domains",
      "Seven broadcast domains"
    ]
  },
  {
    "number": "56",
    "type": "",
    "asks": [
      "What is an alternative to using local authentication on a Cisco router?"
    ],
    "img": [],
    "sentence": [
      "В. A remote Telnet database"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "Centralized AAA",
      "SNMP for authentication",
      "FTP for authentication"
    ]
  },
  {
    "number": "57",
    "type": "",
    "asks": [
      "What field can a standard ACL filter on?"
    ],
    "img": [],
    "sentence": [
      "В. Port"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "Protocol",
      "Destination\tIP",
      "Source IP"
    ]
  },
  {
    "number": "58",
    "type": "",
    "asks": [
      "What is the term used with Ansible for the text file that lists the nodes that Ansible can manage?"
    ],
    "img": [],
    "sentence": [
      "В. Playbook"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "Runbook",
      "Recipe",
      "Inventory"
    ]
  },
  {
    "number": "59",
    "type": "",
    "asks": [
      "What is the administrative distance of Internal EIGRP routes?"
    ],
    "img": [],
    "sentence": [
      "В. 20",
      "С. 90"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "5",
      "100"
    ]
  },
  {
    "number": "60",
    "type": "",
    "asks": [
      "What traditional 802.1 D STP port state does not exist in 802.1 w RSTP?"
    ],
    "img": [],
    "sentence": [
      "В. Listening"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "Discarding",
      "Learning",
      "Forwarding"
    ]
  },
  {
    "number": "61",
    "type": "",
    "asks": [
      "What is the default MTU of the Data and Pad field of the Ethernet frame?"
    ],
    "img": [],
    "sentence": [
      "В. 900",
      "С. 1500"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "1200",
      "1600"
    ]
  },
  {
    "number": "62",
    "type": "",
    "asks": [
      "Which network topology design has a centralized switch connecting all of the devices?"
    ],
    "img": [],
    "sentence": [
      "В. Full mesh"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "Star",
      "Partial mesh",
      "Hybrid"
    ]
  },
  {
    "number": "63",
    "type": "",
    "asks": [
      "For which two reasons does a network administrator configure a floating static route? (Choose two.)"
    ],
    "img": [],
    "sentence": [],
    "responses": [
      ""
    ],
    "variants": [
      "to route traffic differently based on the source IP of the packet",
      "to enable fallback static routing when the dynamic routing protocol fails",
      "to automatically route traffic on a secondary path when the primary path goes down",
      "to support load balancing via static routing",
      "to control the return path of traffic that is sent from the router"
    ]
  },
  {
    "number": "64",
    "type": "",
    "asks": [
      "What software runs on a physical server and makes virtual machines a reality?"
    ],
    "img": [],
    "sentence": [
      "В. Web server"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "Firewall",
      "Hypervisor",
      "Container"
    ]
  },
  {
    "number": "65",
    "type": "",
    "asks": [
      "Refer to the exhibit. The network administrator wants VLAN 55 traffic to be untagged between Sw1 and Sw2, while all other VLANs remain tagged. Which command should be entered to perfom this task?"
    ],
    "img": [],
    "sentence": [
      "Workstation!",
      "В.\tswitchport trunk allowed vlan 55"
    ],
    "responses": [
      ""
    ],
    "variants": [
      "switchport access vlan 55",
      "switchport private-vlan association host 55",
      "switchport trunk native vlan 55"
    ]
  }
]