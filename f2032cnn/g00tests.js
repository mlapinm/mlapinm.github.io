let tests = [
  {
    "number": "",
    "type": "",
    "asks": [
	  "",
	  ""
    ],
	"img":[
	  ""
	],
	"sentence": [
	  "",
	  ""
	],
    "responses": [
      ""
    ],
    "variants": [
      "",
      "",
      "",
      ""
    ]
  },
  {
    "number": "",
    "type": "",
    "asks": [
	  "Which two command sequences need to be entered on a switch in order to establish a Layer 3 EtherChannel with an open-standard protocol? (Choose two.)",
	  ""
    ],
	"img":[
	  ""
	],
	"sentence": [
	  "0*E2 0.0.0.0/0 [110/lJ via 10.10.0.1, 00:00:01, GigabitEthernetO/O 10.0.0.0/8 is variably subnetted, 2 subnets, 2 masks C	10.0.0.0/24 is directly connected, GigabitEthernet0/0",
	  "L	10.0.0.2/32 is directly connected, GigabitEthernet0/0",
	  "C	10.11.0.0/24 is directly connected, GigabitEthernetO/l",
	  "L	10.11.0.2/32 is directly connected, GigabitEthernetO/l",
	  "",
	  ""
	],
    "responses": [
      "0",
	  "1"
    ],
    "variants": [
      "interface GigabitEthernetO/O/1 channel-group 10 mode on",
      "interface port-channel 10 no switchport ip address 172.20.0.1 255.255.255.0",
      "interface GigabitEthernet0/0/1 channel-group 10 mode auto",
      "interface GigabitEthernet0/0/1 channel-group 10 mode active",
	  "interface port-channel 10 ? switchport switchport mode trunk"
    ]
  },
  {
    "number": "",
    "type": "",
    "asks": [
	  "Refer to the exhibit. A network administrator configures a static default route on the router with the ip route 0.0.0.0 0.0.0.0 10.11.0.1 120 command. What is the expected effect of this command on the router?"
    ],
	"img":[
	  ""
	],
	"sentence": [
	  "",
	  ""
	],
    "responses": [
      "0"
    ],
    "variants": [
      "The router begins sending traffic without an explicit matching entry in the routing table to GigabitEthernetO/1.",
      "The router instantly replaces the existing OSPF route in the routing table with the newly configured static route.",
      "The router starts load-balancing traffic between the two default routes.",
      "The router ignores the new static route until the existing OSPF default route is removed."
    ]
  },
  {
    "number": "",
    "type": "",
    "asks": [
	  "",
	  ""
    ],
	"img":[
	  ""
	],
	"sentence": [
	  "",
	  ""
	],
    "responses": [
      ""
    ],
    "variants": [
      "",
      "",
      "",
      ""
    ]
  }
]
