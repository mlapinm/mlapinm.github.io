let tests = [
  {
    "number": "1",
    "type": "",
    "asks": [
      "Refer to Exhibit. Which action do the switches take on the trunk link?"
    ],
    "img": [
      "img0401"
    ],
    "sentence": [],
    "listing": [],
    "responses": [
      "B"
    ],
    "variants": [
      "The trunk does not form and the ports go into an err-disabled status.",
      "The trunk forms, but the mismatched native VLANs are merged into a single broadcast domain.",
      "The trunk does not form, but VLAN 99 and VLAN 999 are allowed to traverse the link.",
      "The trunk forms, but VLAN 99 and VLAN 999 are in a shutdown state."
    ]
  },
  {
    "number": "2",
    "type": "",
    "asks": [
      "Refer to the exhibit. The default-information originate command is configured under the R1 OSPF configuration. After testing, workstations on VLAN 20 at Site B cannot reach a DNS server on the Internet. Which action corrects the configuration issue?"
    ],
    "img": [
      "img0402"
    ],
    "sentence": [
      "Explanation:",
      "The default-information originate command advertises a default route into a normal area, provided the advertising router already has a default route. But in the routing table of R1 we don’t see such a default route. Therefore we have to configure one."
    ],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "Add the default-information originate command on R2.",
      "Add the always keyword to the default-information originate command on R1.",
      "Configure the ip route 0.0.0.0 0.0.0.0 10.10.10.18 command on R1.",
      "Configure the ip route 0.0.0.0 0.0.0.0 10.10.10.2 command on R2."
    ]
  },
  {
    "number": "3",
    "type": "",
    "asks": [
      "Refer to the exhibit. A network engineer must block access for all computers on VLAN 20 to the web server via HTTP. All other computers must be able to access the webserver. Which configuration when applied to switch A accomplishes this task?"
    ],
    "img": [
      "img0403"
    ],
    "sentence": [
      "config t",
      "ip access-list extended wwwblock deny tcp any host 10.20.0.100 eq 80 int vlan 10",
      "ip access-group wwwblock in",
      "config t",
      "ip access-list extended wwwblock deny tcp any host 10.20.0.100 eq 80 permit ip any any",
      "int vlan 20",
      "ip access-group wwwblock in",
      "config t",
      "ip access-list extended wwwblock permit ip any any",
      "deny tcp any host 10.20.0.100 eq 80 int vlan 30",
      "ip access-group wwwblock in",
      "config t",
      "ip access-list extended wwwblock permit ip any any",
      "deny tcp any host 10.20.0.100 eq 80 int vlan 20",
      "ip access-group wwwblock in",
      "Explanation:",
      "The “permit ip any any” command should be placed at the end of the access list."
    ],
    "listing": [],
    "responses": [
      "B"
    ],
    "variants": [
      "",
      "",
      "",
      ""
    ]
  },
  {
    "number": "4",
    "type": "",
    "asks": [
      "Refer to the exhibit. The New York router is configured with static routes pointing to the Atlanta and Washington sites. Which two tasks must be performed so that the Serial0/0/0 interfaces on the Atlanta and Washington routers can reach one another? (Choose two.)"
    ],
    "img": [
      "img0404"
    ],
    "sentence": [],
    "listing": [],
    "responses": [],
    "variants": [
      "Configure the ipv6 route 2012::/126 2023::1 command on the Washington router",
      "Configure the ipv6 route 2023::/126 2012::1 command on the Atlanta router.",
      "Configure the ipv6 route 2012::/126 s0/0/0 command on the Atlanta router",
      "Configure the ipv6 route 2023::/126 2012::2 command on the Atlanta router",
      "Configure the ipv6 route 2012::/126 2023::2 command on the Washington router"
    ]
  },
  {
    "number": "5",
    "type": "",
    "asks": [
      "Refer to the exhibit. If OSPF is running on this network, how does Router 2 handle traffic from Site B to 10.10.13.0/25 at Site A?"
    ],
    "img": [
      "img0405"
    ],
    "sentence": [
      "Explanation:",
      "Router2 does not have an entry for the subnet 10.10.13.128/25. It only has an entry for 10.10.13.0/25, which ranges from 10.10.13.0 to 10.10.13.127"
    ],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "It sends packets out of interface Fa0/2 only.",
      "It sends packets out of interface Fa0/1 only.",
      "It cannot send packets to 10.10.13.128/25",
      "It load-balances traffic out of Fa0/1 and Fa0/2"
    ]
  },
  {
    "number": "6",
    "type": "",
    "asks": [
      "Refer to the exhibit. What does router R1 use as its OSPF router-ID?"
    ],
    "img": [
      "img0406"
    ],
    "sentence": [
      "Explanation:",
      "OSPF uses the following criteria to select the router ID:",
      "1. Manual configuration of the router ID (via the “router-id x.x.x.x” command under OSPF router configuration mode).",
      "2. Highest IP address on a loopback interface.",
      "3. Highest IP address on a non-loopback and active (no shutdown) interface."
    ],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": []
  },
  {
    "number": "7",
    "type": "",
    "asks": [
      "You have just finished configuring a small test network as part of his training. The network is configured as shown in the diagram below:"
    ],
    "img": [
      "img0407"
    ],
    "sentence": [
      "When testing the configuration, you find that Host A in the diagram cannot ping Host B.",
      "Which of the following pairs of connections are required to be in the same subnet for Host A to be able to ping Host B? (Choose all that apply.)",
      "PAEG.",
      "Explanation:",
      "The following pairs of connections are required to be in the same subnet:",
      "– the IP address of Host A and the IP address of the Fa0/0 interface of Router A",
      "– the IP address of the S 0/0 interface of Router A and the IP address of the S 0/0 interface of Router B the IP address of Host B and the IP address of the Fa0/0 interface of Router B",
      "When troubleshooting a correctly labeled network diagram for IP addressing problems, one must start on one end and trace each link in one direction, ensuring at each step that the interfaces are in the same subnet. A switch simply passes the packet to the router; therefore, the IP address of the switch is not important. It performs its job even if it has no IP address.",
      "Moving from Host A to Host B, however, the following links must be in the same subnet: The IP address of Host A and the IP address of the Fa0/0 interface of Router A",
      "The IP address of the S0/0 interface of Router A and the IP address of the S0/0 interface of Router B The IP address of Host B and the IP address of the Fa0/0 interface of Router B",
      "Neither of the switch addresses is important to the process.",
      "If all other routing issues are correct, it is also not required for Host A and Host B to be in the same subnet."
    ],
    "listing": [],
    "responses": [],
    "variants": []
  },
  {
    "number": "8",
    "type": "",
    "asks": [
      "Refer to the exhibit. Which prefix does Router 1 use for traffic to Host A?"
    ],
    "img": [
      "img0408"
    ],
    "sentence": [
      "Explanation:",
      "The prefix with “longest prefix” will be matched first, in this case is “/29”.",
      "Because each entry in a forwarding table may specify a sub-network, one destination address may match more than one forwarding table entry. The most specific of the matching table entries — the one with the longest subnet mask — is called the longest prefix match. It is called this because it is also the entry where the largest number of leading address bits of the destination address match those in the table entry.",
      "Reference: https://en.wikipedia.org/wiki/Longest_prefix_match"
    ],
    "listing": [],
    "responses": [
      "D"
    ],
    "variants": [
      "10.10.10.0/28",
      "10.10.13.0/25",
      "10.10.13.144/28",
      "10.10.13.208/29"
    ]
  },
  {
    "number": "9",
    "type": "",
    "asks": [
      "R1 and R2 are connected as shown in the diagram and are configured as shown in output in the partial output of the show run command."
    ],
    "img": [
      "img0409"
    ],
    "sentence": [
      "The command “ping R2” fails when executed from R1. What command(s) would allow R1 to ping R2 by name?",
      "R1(config)#int S1",
      "R1(config-if)#no ip address 192.168.5.5",
      "R1(config-if)#ip address 192.168.5.9 255.255.255.252",
      "R1(config)#no ip host R1",
      "R1(config)#ip host R2 192.168.5.6 255.255.255.252",
      "R1(config)#no hostname R2",
      "R1(config)# hostname R1",
      "R2(config)#int S1",
      "R1(config-if)#no ip address 192.168.5.5",
      "R1(config-if)# ip address 192.168.5.9 255.255.255.0",
      "Explanation:",
      "Both routers have been configured with the ip host command. This command creates a name to IP address mapping, thereby enabling the pinging of the device by address. On R1, the mapping is incorrect and needs to be corrected. Currently it is configured as ip host R1 192.168.5.6. It is currently mapping its own name to the IP address of R2.",
      "To fix the problem, you should remove the incorrect IP address mapping and create the correct mapping for R2, as follows:",
      "R1(config)#no ip host R1",
      "R1(config)# ip host R2 192.168.5.6 255.255.255.252",
      "Once this is done, the ping on R2 will succeed.",
      "The IP address of the S1 interface on R1 does not need to be changed to 192.168.5.9 /30. In fact, if that is done the S1 interface on R1 and the S1 interface in R2 will no longer be in the same network. With a 30-bit mask configured, the network they are currently in extends from 192.168.5.4 – 192.168.5.7. They are currently set to the two usable addresses in that network, 192.168.5.5 and 192.168.5.6.",
      "The hostnames of the two routers do need to be set correctly using the hostname command for the ping to function, but they are correct now and do not need to be changed.",
      "The subnet mask of the S1 interface on R2 does not need to be changed to 255.255.255.0. The mask needs to match that of R1, which is 255.255.255.252"
    ],
    "listing": [],
    "responses": [
      "B"
    ],
    "variants": [
      "",
      "",
      "",
      ""
    ]
  },
  {
    "number": "10",
    "type": "",
    "asks": [
      "You are connecting a new computer to Switch55. The new computer should be placed in the Accounting VLAN. You execute the show vlan command and get the following output:"
    ],
    "img": [
      "img0410"
    ],
    "sentence": [
      "What action should you take to place the new computer in the Accounting VLAN and allow for inter-VLAN routing?",
      "Explanation:",
      "Switchport Fa0/5 can be used to place the computer in the Accounting VLAN.",
      "The diagram indicates that a router has been configured as a “router-on-a-stick” to perform inter-VLAN routing between VLANs 10, 20, 30 and 40. The show vlan output indicates that interfaces Fa0/5, Fa0/15, and Fa0/6 have been assigned to VLAN 20, the Accounting VLAN:",
      "20 accounting active Fa0/5, Fa0/6, Fa0/15",
      "Switchports Fa0/1 and Fa0/14 are both in the default VLAN, as indicated by the portion of the output describing the switch ports that are unassigned and therefore still residing in the default VLAN:",
      "1 default active Fa0/1, Fa0/2, Fa0/3, Fa0/7, Fa0/8, Fa0/9,",
      "Fa0/14, Fa0/16, Fa0/23, Fa0/19, Fa0/20, Fa0/23",
      "It is not necessary to configure a dynamic routing protocol on the router. Since the router is directly connected to all four subinterfaces and their associated networks, the networks will automatically be in the router’s routing table, making inter-VLAN routing possible."
    ],
    "listing": [],
    "responses": [
      "C"
    ],
    "variants": [
      "Connect the new computer to Fa0/1",
      "Connect the new computer to Fa0/14",
      "Connect the new computer to Fa0/5",
      "Configure a dynamic routing protocol on the router interface"
    ]
  }
]