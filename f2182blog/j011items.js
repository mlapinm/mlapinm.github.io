var objs = [
  {
    "time": [
      0.89,
      3.219
    ],
    "en": [
      "Welcome to Jeremy’s IT Lab."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      3.219,
      10.76
    ],
    "en": [
      "This is a complete course for the CCNA, including everything you need to pass the exam, all 100% free."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      10.76,
      14.66
    ],
    "en": [
      "Make sure you stay tuned till the end of the video for the quiz to test your knowledge"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      14.66,
      16.91
    ],
    "en": [
      "of the material in this video."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      16.91,
      22.289
    ],
    "en": [
      "Also, remember to download and use the Anki flashcards with the link in the description,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      22.289,
      27.15
    ],
    "en": [
      "which will help you very much in your studies. Let’s get started."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      27.15,
      30.119
    ],
    "en": [
      "This is the sixth lesson in the series."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      30.119,
      35.87
    ],
    "en": [
      "In this lesson we will continue with the same topic as in Day 5, Ethernet LAN switching,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      35.87,
      40.649
    ],
    "en": [
      "but we will go a little deeper to make sure there aren’t any holes in your knowledge."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      40.649,
      44.85
    ],
    "en": [
      "Once again, we’re talking about sending traffic within a LAN, like between"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      44.85,
      48.23
    ],
    "en": [
      "these three PCs in this small network here."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      48.23,
      52.75
    ],
    "en": [
      "The topic of how these PCs could send traffic out beyond the router to other networks is"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      52.75,
      58.46
    ],
    "en": [
      "for a future lesson, let’s start locally first, with LAN switching."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      58.46,
      62.66
    ],
    "en": [
      "Before I get started, I want to speak a little bit more on Ethernet frames which we talked"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      62.66,
      65.22
    ],
    "en": [
      "about in the last video."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      65.22,
      71.71
    ],
    "en": [
      "The preamble + SFD is usually not considered part of the Ethernet header, although it is"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      71.71,
      74.03
    ],
    "en": [
      "sent with every Ethernet frame."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      74.03,
      80.659
    ],
    "en": [
      "So, the Ethernet header consists of these three field, destination, source, and type."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      80.659,
      85.911
    ],
    "en": [
      "Therefore, the size of the Ethernet header + trailer is 18 bytes, if you don’t include"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      85.911,
      88.5
    ],
    "en": [
      "the preamble + SFD"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      88.5,
      92.09
    ],
    "en": [
      "Now, there is also a minimum size for an Ethernet frame."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      92.09,
      98.84
    ],
    "en": [
      "The minimum size is 64 bytes, including the encapsulated payload, the packet."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      98.84,
      104.159
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      98.84,
      104.159
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      104.159,
      108.719
    ],
    "en": [
      "Therefore, the minimum payload size is 46 bytes."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      108.719,
      114.18
    ],
    "en": [
      "Now, what if we send a payload packet that is less than 46 bytes?"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      114.18,
      121.44
    ],
    "en": [
      "If the payload is less than 46 bytes, padding bytes are added, and these bytes are all 0s by the way."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      121.44,
      126.86
    ],
    "en": [
      "For example, if you send a 34-byte packet, 12 bytes of padding will be added."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      126.86,
      130.58
    ],
    "en": [
      "Okay, that’s all I wanted to add."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      130.58,
      135.17
    ],
    "en": [
      "Remember that the Preamble and SFD might not be included as part of the Ethernet header,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      135.17,
      140.08
    ],
    "en": [
      "depending on how you define it, but they are included with every Ethernet frame."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      140.08,
      145.819
    ],
    "en": [
      "Also, remember the minimum size of the frame, 64 bytes, and that doesnt include the preamble"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      145.819,
      148.459
    ],
    "en": [
      "and SFD, by the way."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      148.459,
      153.58
    ],
    "en": [
      "That means that the minimum payload is 46 bytes, and padding will be added if the payload"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      153.58,
      155.51
    ],
    "en": [
      "is less than that."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      155.51,
      159.09
    ],
    "en": [
      "Now let’s get started with the main topics for today’s video."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      159.09,
      164.41
    ],
    "en": [
      "So, here’s the same small network we saw in the previous video."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      164.41,
      166.07
    ],
    "en": [
      "There are a couple changes, however."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      166.07,
      174.08
    ],
    "en": [
      "First, I changed the interfaces from Fastethernet to gigabit ethernet, hence the G0/0, G0/1,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      174.08,
      176.38
    ],
    "en": [
      "and G0/2 for each switch."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      176.38,
      179.72
    ],
    "en": [
      "Secondly, look at the mac addresses."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      179.72,
      191.739
    ],
    "en": [
      "In the previous video I used AAAA.AA00.0001, for PC1, or .0002 for PC2, etc."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      191.739,
      195.91
    ],
    "en": [
      "This time let’s use some more realistic MAC addresses."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      195.91,
      200.31
    ],
    "en": [
      "Notice once again that the OUI, the first half of the MAC address that identifies the"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      200.31,
      208.65
    ],
    "en": [
      "maker of the device, is the same for each PC, 0C2F.B0, so that means that the PCs were"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      208.65,
      211.5
    ],
    "en": [
      "all made by the same company."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      211.5,
      218.68
    ],
    "en": [
      "Of course, the second half of each device’s MAC address is unique, since that represents the device itself."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      218.68,
      224.569
    ],
    "en": [
      "When I refer to these MAC addresses I’ll just use the last 4 digits, to keep things simple."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      224.569,
      233.209
    ],
    "en": [
      "For example, I’ll just say PC1’s MAC address is 9D00, or PC2’s MAC address is 6200."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      233.209,
      237.069
    ],
    "en": [
      "Now, let’s add one more thing to this network topology."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      237.069,
      239.75
    ],
    "en": [
      "Let’s add some IP addresses."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      239.75,
      245.01
    ],
    "en": [
      "We won’t actually talk about the details of IP addresses in this video, but we’ll"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      245.01,
      248.189
    ],
    "en": [
      "need IP addresses to explain something else in this video."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      248.189,
      257.23
    ],
    "en": [
      "So, this number here, 192.168.1.0/24, represents this whole network here."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      257.23,
      262.14
    ],
    "en": [
      "Then .1 represents PC1’s IP address."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      262.14,
      269.22
    ],
    "en": [
      "This is just the short version, PC1’s real IP address is 192.168.1.1."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      269.22,
      284.92
    ],
    "en": [
      "PC2’s IP address is 192.168.1.2, PC3’s IP address is 192.168.1.3, and PC4’s IP address is 192.168.1.4."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      284.92,
      289.23
    ],
    "en": [
      "Now, in the last video I only really showed you part of the picture of how these PCs can"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      289.23,
      292.38
    ],
    "en": [
      "communicate within this network."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      292.38,
      299.64
    ],
    "en": [
      "When a device sends some data to another device, it doesn’t just include a source and destination MAC address."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      299.64,
      304.88
    ],
    "en": [
      "Encapsulated within that frame is an Internet Protocol, known as IP, packet, and that IP"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      304.88,
      309.34
    ],
    "en": [
      "packet includes a source and destination IP address."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      309.34,
      318.55
    ],
    "en": [
      "For example, if PC1 wants to send data to PC3, the source IP will be 192.168.1.1 and"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      318.55,
      323.96
    ],
    "en": [
      "the destination IP will be 192.168.1.3."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      323.96,
      335.85
    ],
    "en": [
      "The source MAC will be 0C2F.B011.9D00, however PC1 doesn’t actually know PC3’s MAC address."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      335.85,
      341.27
    ],
    "en": [
      "When you send data to another computer, you enter the IP address, not the MAC address."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      341.27,
      349.52
    ],
    "en": [
      "So, the user entered the IP address 192.168.1.3 as the destination, but PC1 has to discover"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      349.52,
      352.0
    ],
    "en": [
      "PC3’s MAC address by itself."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      352.0,
      357.93
    ],
    "en": [
      "Remember, these switches are Layer 2 devices, they don’t operate at Layer 3, so they need"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      357.93,
      361.33
    ],
    "en": [
      "to use MAC addresses, not IP addresses."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      361.33,
      369.71
    ],
    "en": [
      "So, PC1 wants to send this Ethernet frame to PC3, but first it has to learn PC3’s MAC address."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      369.71,
      376.06
    ],
    "en": [
      "To do so, it uses something called ARP, the Address Resolution Protocol."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      376.06,
      379.75
    ],
    "en": [
      "Let’s take a look at ARP."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      379.75,
      383.5
    ],
    "en": [
      "ARP stands for Address Resolution Protocol."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      383.5,
      388.82
    ],
    "en": [
      "It is used to discover the Layer 2 address, meaning the MAC address, of a known Layer"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      388.82,
      392.78
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      388.82,
      392.78
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      392.78,
      401.9
    ],
    "en": [
      "For example, in our example here PC1 knows PC3’s Layer 3 address, 192.168.1.3, but it doesn’t"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      401.9,
      405.79
    ],
    "en": [
      "know the Layer 2 address, its MAC address, yet."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      405.79,
      412.03
    ],
    "en": [
      "The ARP process consists of two messages: The ARP request, sent by the device that wants"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      412.03,
      414.9
    ],
    "en": [
      "to know the MAC Address of the other device."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      414.9,
      421.81
    ],
    "en": [
      "And the ARP reply, which is sent to inform the requesting device of the MAC address."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      421.81,
      429.0
    ],
    "en": [
      "In our example, PC1 would send the ARP request, and PC3 would send the ARP reply."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      429.0,
      433.81
    ],
    "en": [
      "The ARP request is sent as a broadcast ethernet frame."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      433.81,
      437.64
    ],
    "en": [
      "Broadcast means it is sent to all hosts on the network."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      437.64,
      442.97
    ],
    "en": [
      "Because the Layer 2 address of the destination host is unknown, it broadcasts the request"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      442.97,
      446.63
    ],
    "en": [
      "and waits for a reply from the correct device."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      446.63,
      449.3
    ],
    "en": [
      "The ARP reply is unicast."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      449.3,
      451.82
    ],
    "en": [
      "We learned about unicast frames in the last video."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      451.82,
      458.88
    ],
    "en": [
      "A unicast frame is sent to only one host, in this case its the host that sent the ARP request."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      458.88,
      462.97
    ],
    "en": [
      "Let’s take a look at how this works on our network."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      462.97,
      468.17
    ],
    "en": [
      "Here at the bottom is the original frame that PC1 wants to send to PC3."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      468.17,
      471.09
    ],
    "en": [
      "But first, It has to send this frame."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      471.09,
      473.81
    ],
    "en": [
      "This is an ARP request frame."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      473.81,
      479.09
    ],
    "en": [
      "The source and destination IP addresses, as well as the source MAC address, are the same."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      479.09,
      482.86
    ],
    "en": [
      "However, look at the destination MAC address."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      482.86,
      491.05
    ],
    "en": [
      "FFFF.FFFF.FFFF is the broadcast MAC Address."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      491.05,
      495.47
    ],
    "en": [
      "This is the destination MAC address used when a device wants to send ethernet frames to"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      495.47,
      498.54
    ],
    "en": [
      "all other devices on the local network."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      498.54,
      503.69
    ],
    "en": [
      "So, PC1 has prepared the Arp request to be sent."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      503.69,
      509.0
    ],
    "en": [
      "It sends the frame out of its network interface, and it is received by SW1."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      509.0,
      514.69
    ],
    "en": [
      "SW1 then adds PC1’s MAC address to its MAC address table."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      514.69,
      518.19
    ],
    "en": [
      "When a MAC address is learned in this way, what is it called?"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      518.19,
      523.169
    ],
    "en": [
      "It’s called a dynamic mac address, which we learned in the last video."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      523.169,
      530.63
    ],
    "en": [
      "So, since the destination MAC address is all Fs, SW1 broadcasts the frame out of all of its"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      530.63,
      534.63
    ],
    "en": [
      "interfaces, except the one it was received on."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      534.63,
      541.94
    ],
    "en": [
      "This is very much like what a switch does with an unknown unicast frame, which we also learned about last video."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      541.94,
      550.39
    ],
    "en": [
      "It sends the frame out of G0/1 and G0/2, but not G0/0 because it received the frame on that interface."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      550.39,
      554.04
    ],
    "en": [
      "PC2 receives it, but it ignores the frame."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      554.04,
      559.59
    ],
    "en": [
      "That’s because the destination IP address doesn’t match PC2’s IP address, so it"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      559.59,
      566.1
    ],
    "en": [
      "knows that the ARP request is meant for a different PC, so it just ignores the request."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      566.1,
      572.64
    ],
    "en": [
      "Of course, then SW2 learns PC1’s MAC Address and adds it to the MAC address table, associating"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      572.64,
      578.5
    ],
    "en": [
      "it with the G0/2 interface since that’s the interface the frame was received on."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      578.5,
      583.74
    ],
    "en": [
      "Since the destination MAC address is the broadcast MAC address, SW2 also sends the frame out"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      583.74,
      587.89
    ],
    "en": [
      "of all interfaces, except the one the frame was received on."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      587.89,
      593.13
    ],
    "en": [
      "So, that means it sends the frame out of G0/0 and G0/1."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      593.13,
      599.68
    ],
    "en": [
      "PC4 ignores the frame, because the destination IP address doesn’t match its own."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      599.68,
      606.56
    ],
    "en": [
      "However, PC3 recognizes that the destination IP addresses does match its own IP address,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      606.56,
      609.65
    ],
    "en": [
      "so it doesn’t ignore the ARP request."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      609.65,
      616.31
    ],
    "en": [
      "What it does is send the other ARP message I mentioned briefly, the ARP Reply."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      616.31,
      619.24
    ],
    "en": [
      "Here you can see the ARP reply packet."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      619.24,
      624.05
    ],
    "en": [
      "The source IP is PC3’s IP, and the destination is PC1’s IP."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      624.05,
      631.95
    ],
    "en": [
      "The Source MAC is PC3’s MAC address, and the destination is PC1’s."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      631.95,
      637.13
    ],
    "en": [
      "Although the ARP Request message was a broadcast message, because PC1’s MAC address was used"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      637.13,
      643.71
    ],
    "en": [
      "as the source MAC address of the ARP request message, PC3 now knows PC1’s MAC address"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      643.71,
      649.53
    ],
    "en": [
      "so it can send the ARP reply directly to PC1, without having to broadcast the frame."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      649.53,
      655.94
    ],
    "en": [
      "PC3 sends the frame out of its network interface, and it is received by SW2."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      655.94,
      662.69
    ],
    "en": [
      "SW2 learns PC3’s MAC Address and enters it into the MAC address table, associating"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      662.69,
      666.01
    ],
    "en": [
      "it with the G0/0 interface."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      666.01,
      671.28
    ],
    "en": [
      "Since this is a unicast frame, and SW2 already has an entry for the destination MAC address"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      671.28,
      676.83
    ],
    "en": [
      "in its MAC address table, what kind of frame is this, and what does SW2 do with it?"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      676.83,
      682.65
    ],
    "en": [
      "It’s a known unicast frame, and SW2 will simply forward it out of the interface in"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      682.65,
      689.57
    ],
    "en": [
      "the MAC address table, it will not flood it like an unknown unicast frame or a broadcast frame."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      689.57,
      694.99
    ],
    "en": [
      "Because SW2 learned PC1’s MAC address on the G0/2 interface, it will send the frame"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      694.99,
      698.1
    ],
    "en": [
      "out of that interface toward SW1."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      698.1,
      705.64
    ],
    "en": [
      "SW1 receives the frame, and since it has already learned PC1’s MAC address on the G0/0 interface,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      705.64,
      711.63
    ],
    "en": [
      "it simply forwards the frame out of the interface, and PC1 finally receives the ARP reply."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      711.63,
      718.029
    ],
    "en": [
      "PC1 will then use that information to add an entry for PC3 to its ARP table, which is"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      718.029,
      721.71
    ],
    "en": [
      "used to store these IP address to MAC address associations."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      721.71,
      725.96
    ],
    "en": [
      "Let’s take a look at an ARP table."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      725.96,
      730.4
    ],
    "en": [
      "This is a screenshot of part of the ARP table from my PC."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      730.4,
      736.92
    ],
    "en": [
      "I use Windows on my PC, but you can use the arp -a command to view the ARP table, whether"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      736.92,
      742.11
    ],
    "en": [
      "you run Windows, macOS, or Linux on your computer."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      742.11,
      745.91
    ],
    "en": [
      "The Internet address column displays IP addresses."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      745.91,
      752.06
    ],
    "en": [
      "The Physical address column displays the MAC addresses that correspond to the IP addresses."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      752.06,
      757.38
    ],
    "en": [
      "If the type column displays static, it means that it is a default entry, it wasn’t actually"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      757.38,
      760.02
    ],
    "en": [
      "learned by sending an ARP request."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      760.02,
      765.47
    ],
    "en": [
      "However, if the type column displays dynamic, that means that the entry was learned by sending"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      765.47,
      769.27
    ],
    "en": [
      "an ARP request and receiving an ARP reply."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      769.27,
      777.6
    ],
    "en": [
      "You can see one entry like that here, with an IP address of 192.168.0.1 and its MAC address next to it."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      777.6,
      780.87
    ],
    "en": [
      "That’s the address of my home router, by the way."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      780.87,
      785.84
    ],
    "en": [
      "My PC used ARP to learn the MAC address of the router."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      785.84,
      790.11
    ],
    "en": [
      "Now let’s take a deeper look at the MAC address table that is kept on these switches,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      790.11,
      792.01
    ],
    "en": [
      "and some additional information."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      792.01,
      797.89
    ],
    "en": [
      "I recreated the same topology in the network emulator software GNS3."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      797.89,
      803.81
    ],
    "en": [
      "GNS3 is similar to packet tracer in that it allows you to create networks and practice"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      803.81,
      810.11
    ],
    "en": [
      "configurations on Cisco devices, but its also different in some key ways."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      810.11,
      814.43
    ],
    "en": [
      "Packet tracer is a network simulator, it’s a piece of software designed to simulate the"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      814.43,
      816.67
    ],
    "en": [
      "operation of a real network."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      816.67,
      825.22
    ],
    "en": [
      "GNS3, however, runs actual Cisco IOS software, so these are real Cisco switches running virtually."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      825.22,
      832.65
    ],
    "en": [
      "However, GNS3 requires you to purchase your own copies of Cisco IOS, so although GNS3"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      832.65,
      837.65
    ],
    "en": [
      "itself is free, using Cisco IOS with GNS3 is not."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      837.65,
      843.15
    ],
    "en": [
      "That’s why I choose to use packet tracer for the lab videos in this series, its totally"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      843.15,
      847.73
    ],
    "en": [
      "free, and it lets you practice just about everything you need for the CCNA."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      847.73,
      853.15
    ],
    "en": [
      "I also want to show you GNS3 sometimes in these videos, however, since you’ll probably"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      853.15,
      856.8
    ],
    "en": [
      "want to use it later as you progress in your networking studies."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      856.8,
      862.76
    ],
    "en": [
      "Don’t worry about using GNS3 for now though, unless you really want to try it out."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      862.76,
      867.0
    ],
    "en": [
      "You can get it at gns3.com."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      867.0,
      872.11
    ],
    "en": [
      "So, here’s our topology, and notice this magnifying glass here."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      872.11,
      878.26
    ],
    "en": [
      "This is a cool feature of GNS3, it integrates with another piece of software called wireshark,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      878.26,
      883.26
    ],
    "en": [
      "and we’ll use it to analyze exactly what traffic passes between PC1 and SW1."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      883.26,
      888.47
    ],
    "en": [
      "I’m going to send a ping from PC1 to PC3."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      888.47,
      893.63
    ],
    "en": [
      "The process is the same, but let me just run down one more time what happens."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      893.63,
      899.04
    ],
    "en": [
      "Just like our example before, PC1 doesn’t know the destination MAC address, so has to"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      899.04,
      901.67
    ],
    "en": [
      "send an ARP request."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      901.67,
      905.22
    ],
    "en": [
      "The ARP request is sent to all other hosts on the network."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      905.22,
      911.75
    ],
    "en": [
      "PC3 responds to the Arp request, since it’s IP address matches the destination IP address"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      911.75,
      913.84
    ],
    "en": [
      "in the ARP request."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      913.84,
      920.87
    ],
    "en": [
      "PC1 then learns the MAC Address of PC3, adds it to its ARP table, and uses that information"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      920.87,
      924.94
    ],
    "en": [
      "to add the destination MAC Address to the ping it wants to send."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      924.94,
      932.63
    ],
    "en": [
      "Now, before I move on, you may have heard of ping before, but let me explain how it works."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      932.63,
      935.26
    ],
    "en": [
      "Ping is something you’re going to be using a lot."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      935.26,
      940.52
    ],
    "en": [
      "It's a network utility that is used to test reachability, for example, to test if two"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      940.52,
      943.55
    ],
    "en": [
      "computers can reach each other."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      943.55,
      951.61
    ],
    "en": [
      "It measures the round-trip time, for example the time from PC1 to PC3, then back to PC1."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      951.61,
      960.36
    ],
    "en": [
      "Much like ARP, ping uses two messages: ICMP Echo request, and ICMP echo reply."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      960.36,
      964.83
    ],
    "en": [
      "Again, this is similar to an ARP request and ARP reply."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      964.83,
      971.61
    ],
    "en": [
      "However, the PC won’t broadcast the ICMP echo request, it is sent to a specific host."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      971.61,
      979.13
    ],
    "en": [
      "So, it has to know the MAC address of the destination host, which is why ARP must be used first."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      979.13,
      985.64
    ],
    "en": [
      "The command to use ping is ping, followed by the IP address you want to ping to, for example,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      985.64,
      990.37
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      985.64,
      990.37
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      990.37,
      994.1
    ],
    "en": [
      "Let’s take a look at the ping process."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      994.1,
      996.93
    ],
    "en": [
      "So I’m on PC1 here."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      996.93,
      1000.31
    ],
    "en": [
      "Note that this is actually the Cisco IOS CLI."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1000.31,
      1006.16
    ],
    "en": [
      "I’m using Cisco routers to simulate PCs, since its easier than setting up virtual PCs"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1006.16,
      1009.11
    ],
    "en": [
      "to ping in GNS3."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1009.11,
      1018.03
    ],
    "en": [
      "I use the command ping 192.168.1.3, to send an IMCP echo request to PC3."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1018.03,
      1020.27
    ],
    "en": [
      "Take a look at this message here."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1020.27,
      1027.62
    ],
    "en": [
      "Sending 5, 100-byte ICMP echos to 192.168.1.3."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1027.62,
      1034.86
    ],
    "en": [
      "By default, a ping in Cisco IOS sends 5 ICMP echo requests, and then you should get 5 ICMP"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1034.86,
      1040.55
    ],
    "en": [
      "echo replies back, and the default size of each ping is 100 bytes."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1040.55,
      1048.63
    ],
    "en": [
      "The period indicates a failed ping, and the exclamation points indicate a successful ping."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1048.63,
      1053.84
    ],
    "en": [
      "As it says here, success rate is 80 percent, 4 out of 5."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1053.84,
      1059.12
    ],
    "en": [
      "It also shows the round trip time, giving the minimum, average, and maximum time of"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1059.12,
      1061.21
    ],
    "en": [
      "the 4 successful pings."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1061.21,
      1063.96
    ],
    "en": [
      "Now, why did that first ping fail?"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1063.96,
      1066.33
    ],
    "en": [
      "Well, that’s because of ARP."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1066.33,
      1075.02
    ],
    "en": [
      "PC1 didn’t know the destination MAC address, so it had to use ARP, and in that time the first ping failed."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1075.02,
      1079.59
    ],
    "en": [
      "After PC1 learned PC3’s MAC address, however, the pings succeeded."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1079.59,
      1083.63
    ],
    "en": [
      "Let’s take a quick look at the arp table here."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1083.63,
      1088.33
    ],
    "en": [
      "The command for windows, macos, and linux was arp -a."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1088.33,
      1094.63
    ],
    "en": [
      "However, in Cisco IOS its show arp, from privileged exec mode."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1094.63,
      1097.52
    ],
    "en": [
      "Here’s the ARP table."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1097.52,
      1110.2
    ],
    "en": [
      "Notice there is an entry for 192.168.1.1, which is PC1 itself, and then below it 192.168.1.3, which is PC3."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1110.2,
      1115.17
    ],
    "en": [
      "This is a screenshot from Wireshark, which I mentioned earlier."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1115.17,
      1122.38
    ],
    "en": [
      "Wireshark allows you to perform what are called ‘packet captures’, to analyze the contents of network traffic."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1122.38,
      1124.02
    ],
    "en": [
      "Notice the Protocol column."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1124.02,
      1128.6
    ],
    "en": [
      "ARP, followed by ICMP, which is ping."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1128.6,
      1131.62
    ],
    "en": [
      "Here’s the first ARP packet."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1131.62,
      1139.94
    ],
    "en": [
      "The source MAC is 0c2f b011 9d00, which is PC1’s MAC."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1139.94,
      1144.27
    ],
    "en": [
      "The destination is broadcast, which is all Fs."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1144.27,
      1146.61
    ],
    "en": [
      "Look at the info on the end."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1146.61,
      1153.81
    ],
    "en": [
      "Who has 192.168.1.3? tell 192.168.1.1."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1153.81,
      1156.91
    ],
    "en": [
      "This describes what purpose of ARP is."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1156.91,
      1164.7
    ],
    "en": [
      "The ARP request is asking which MAC address has an IP address of 192.168.1.3, and to send"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1164.7,
      1169.79
    ],
    "en": [
      "the reply to itself, 192.168.1.1."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1169.79,
      1171.91
    ],
    "en": [
      "Next is the ARP reply."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1171.91,
      1183.77
    ],
    "en": [
      "The source address is 0c2f b06a 3900, PC3’s MAC, and the destination is PC1’s MAC."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1183.77,
      1187.04
    ],
    "en": [
      "Look at the info section again here."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1187.04,
      1198.37
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1187.04,
      1198.37
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1198.37,
      1204.54
    ],
    "en": [
      "After that there are 4 ICMP echo requests, and 4 ICMP echo replies."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1204.54,
      1211.9
    ],
    "en": [
      "Note that the ICMP echo requests have a source IP of PC1 and destination of PC3, and the"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1211.9,
      1217.559
    ],
    "en": [
      "ICMP echo replies have a source of PC3 and destination of PC1."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1217.559,
      1223.25
    ],
    "en": [
      "I’ll use wireshark at various points throughout this course, but I think you can see how useful"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1223.25,
      1225.679
    ],
    "en": [
      "it can be in analyzing networks."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1225.679,
      1230.47
    ],
    "en": [
      "Okay, hopefully you understand this process a little better now."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1230.47,
      1236.52
    ],
    "en": [
      "Basically, if device A wants to send traffic to device B. which is on the same network,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1236.52,
      1242.41
    ],
    "en": [
      "device A first has to use ARP to learn device B’s MAC address, and then it can send traffic"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1242.41,
      1250.67
    ],
    "en": [
      "to device B. Now, let’s finally take a look at the MAC address table on a Cisco switch. Here it is."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1250.67,
      1256.73
    ],
    "en": [
      "This is the command to view it, show mac SPACE address HYPHEN table."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1256.73,
      1264.37
    ],
    "en": [
      "Old versions of Cisco IOS use show mac hyphen address hyphen table, but newer versions got"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1264.37,
      1271.8
    ],
    "en": [
      "rid of the first hyphen, and now its this, show mac space address hyphen table."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1271.8,
      1278.77
    ],
    "en": [
      "Now let’s look at each section of the MAC address table, before I only showed the MAC address and interface."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1278.77,
      1280.48
    ],
    "en": [
      "First is the VLAN."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1280.48,
      1284.15
    ],
    "en": [
      "VLAN means VIRTUAL local area network."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1284.15,
      1291.1
    ],
    "en": [
      "We’ll learn about those later, but as is displayed here the default is 1."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1291.1,
      1300.07
    ],
    "en": [
      "Next is the MAC address column, you can see PC1 up top and PC3 on the bottom, Next is the type."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1300.07,
      1303.24
    ],
    "en": [
      "Remember what I said about dynamic mac addresses?"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1303.24,
      1306.87
    ],
    "en": [
      "Well it is displayed in the MAC address table as well."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1306.87,
      1312.44
    ],
    "en": [
      "Both of these MAC addresses were learned dynamically, I did not manually configure them on the switch."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1312.44,
      1317.31
    ],
    "en": [
      "Finally, ports, which is another word for interface."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1317.31,
      1323.84
    ],
    "en": [
      "So, you can see that this matches the small MAC address table I put here in this diagram earlier."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1323.84,
      1329.86
    ],
    "en": [
      "Here’s the entry for PC1, and here’s the entry to PC2."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1329.86,
      1335.53
    ],
    "en": [
      "Now, I mentioned in the previous video that these dynamic MAC addresses are removed from"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1335.53,
      1338.99
    ],
    "en": [
      "the MAC address table after 5 minutes."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1338.99,
      1341.43
    ],
    "en": [
      "This is known as aging."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1341.43,
      1346.0
    ],
    "en": [
      "If the switch doesn’t get any traffic from that MAC address for 5 minutes, it will remove"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1346.0,
      1348.48
    ],
    "en": [
      "the entry from the MAC address table."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1348.48,
      1353.63
    ],
    "en": [
      "However, you can also manually remove MAC addresses from the table."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1353.63,
      1361.17
    ],
    "en": [
      "Here I used the show mac address table command and you can see the entries for PC1 and PC3."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1361.17,
      1365.71
    ],
    "en": [
      "Then I used the command clear mac address-table dynamic."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1365.71,
      1370.29
    ],
    "en": [
      "As you can see, all of the dynamic MAC address have been cleared."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1370.29,
      1375.26
    ],
    "en": [
      "Remember this command clear mac address-table dynamic."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1375.26,
      1380.049
    ],
    "en": [
      "Now, if you don’t want to clear all of the mac addresses from the table, you can add"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1380.049,
      1383.27
    ],
    "en": [
      "some additional options to the command."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1383.27,
      1389.85
    ],
    "en": [
      "Once again, I used show mac address-table, and you can see both entries, for PC1 and PC3."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1389.85,
      1395.179
    ],
    "en": [
      "This time I used a different command, clear mac address-table dynamic address, followed"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1395.179,
      1398.23
    ],
    "en": [
      "by PC1’s MAC address."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1398.23,
      1403.83
    ],
    "en": [
      "Then if I use show mac address-table again, only PC3’s MAC address can be seen."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1403.83,
      1406.67
    ],
    "en": [
      "Here’s the command once more."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1406.67,
      1411.94
    ],
    "en": [
      "Clear mac address-table dynamic address, then the mac address."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1411.94,
      1415.85
    ],
    "en": [
      "Finally, one more option to clear the MAC address table."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1415.85,
      1422.58
    ],
    "en": [
      "Again, show mac address-table shows both PC1 and PC3’s MAC addresses."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1422.58,
      1430.89
    ],
    "en": [
      "This time I use the command clear mac address-table dynamic interface gi0/0."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1430.89,
      1435.68
    ],
    "en": [
      "This clears all mac address table entries for a specific interface."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1435.68,
      1443.07
    ],
    "en": [
      "As you can see, once again PC1’s mac address is removed, because it is connected to the G0/0 interface."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1443.07,
      1445.73
    ],
    "en": [
      "Here’s the command again."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1445.73,
      1451.65
    ],
    "en": [
      "Clear mac address-table dynamic interface, and then the interface."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1451.65,
      1456.24
    ],
    "en": [
      "Before we move on to the quiz, I want to show you a little more in wireshark, regarding"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1456.24,
      1460.98
    ],
    "en": [
      "what I said in the beginning of this video about the Ethernet frame."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1460.98,
      1470.59
    ],
    "en": [
      "In this packet capture I sent a 36-byte ping with the command ‘ping 192.168.1.3 SIZE 36’."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1470.59,
      1474.97
    ],
    "en": [
      "First, notice the TYPE field down here."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1474.97,
      1482.34
    ],
    "en": [
      "As I mentioned in the last video, IPv4’s ethernet type is 0x0800."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1482.34,
      1488.9
    ],
    "en": [
      "The 0x just means that its using hexadecimal, so really its 0800."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1488.9,
      1492.429
    ],
    "en": [
      "Next, look at the padding here."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1492.429,
      1499.94
    ],
    "en": [
      "Remember, the minimum payload size for an ethernet frame is 46 bytes, and I sent 36"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1499.94,
      1504.49
    ],
    "en": [
      "byte pings, so there should be 10 bytes of padding."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1504.49,
      1507.809
    ],
    "en": [
      "These zeroes are hexadecimal zeroes."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1507.809,
      1515.6
    ],
    "en": [
      "Each hexadecimal digit is 4 bits, so 2 digits equals 8 bits, or 1 byte."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1515.6,
      1522.69
    ],
    "en": [
      "If you count the zeroes, there are 20 zeroes, so that means 10 bytes of padding."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1522.69,
      1527.03
    ],
    "en": [
      "If I zoom out a bit you can also see the padding down here."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1527.03,
      1532.38
    ],
    "en": [
      "These ten pairs of zeroes are the 10 bytes of padding added to the 36-byte pings to make"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1532.38,
      1535.89
    ],
    "en": [
      "them meet the 46-byte payload minimum size."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1535.89,
      1538.8
    ],
    "en": [
      "One last thing in wireshark."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1538.8,
      1540.78
    ],
    "en": [
      "This time looking at ARP."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1540.78,
      1550.49
    ],
    "en": [
      "Remember, the IPv4 ethernet type is 0800, and the IPv6 ethernet type is 86DD."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1550.49,
      1556.5
    ],
    "en": [
      "As you can see here, the ARP ethernet type of 0806."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1556.5,
      1560.39
    ],
    "en": [
      "This indicates that an ARP packet is inside of this ethernet frame."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1560.39,
      1565.74
    ],
    "en": [
      "Okay, so we covered a lot of important stuff in this video."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1565.74,
      1570.981
    ],
    "en": [
      "We talked about some more details of the ethernet frame, including the minimum size of the ethernet"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1570.981,
      1574.679
    ],
    "en": [
      "payload, which is 46 bytes."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1574.679,
      1578.71
    ],
    "en": [
      "We talked about ARP, the address resolution protocol."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1578.71,
      1584.33
    ],
    "en": [
      "It is used to learn the MAC address of a device, for which you already know the IP address."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1584.33,
      1591.1
    ],
    "en": [
      "It uses two messages, an ARP request, which is broadcast to all devices on the local network,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1591.1,
      1596.48
    ],
    "en": [
      "and an ARP reply, which is sent to the device which sent the request."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1596.48,
      1602.44
    ],
    "en": [
      "We also looked at the ARP table on a windows device and a Cisco IOS device."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1602.44,
      1607.26
    ],
    "en": [
      "We talked about ping, which is used to test reachability in a network."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1607.26,
      1614.25
    ],
    "en": [
      "It also uses two messages, ICMP echo request and ICMP echo reply."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1614.25,
      1619.43
    ],
    "en": [
      "Finally, we looked at the MAC address table on a Cisco switch, including how to clear"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1619.43,
      1621.4
    ],
    "en": [
      "it in a few ways."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1621.4,
      1628.12
    ],
    "en": [
      "Let’s move on to the quiz for today’s video. Here’s question 1."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1628.12,
      1635.38
    ],
    "en": [
      "You send a 36-byte ping to another computer and perform a packet capture to analyze the network traffic."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1635.38,
      1643.929
    ],
    "en": [
      "You notice a long series of bytes of 00000000 at the end of the Ethernet payload."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1643.929,
      1646.45
    ],
    "en": [
      "How can you explain these zeroes?"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1646.45,
      1650.36
    ],
    "en": [
      "A, pings are a series of zeroes."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1650.36,
      1654.11
    ],
    "en": [
      "B, they are padding bytes."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1654.11,
      1658.14
    ],
    "en": [
      "Or C, they are the Ethernet FCS."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1658.14,
      1664.04
    ],
    "en": [
      "Pause the video to think about your answer."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1664.04,
      1667.88
    ],
    "en": [
      "the answer is B, they are padding bytes."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1667.88,
      1674.97
    ],
    "en": [
      "The ping you sent was 36 bytes, but the minimum Ethernet payload size is 46 bytes, so a series"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1674.97,
      1678.62
    ],
    "en": [
      "of padding bytes must be added to meet the minimum payload size."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1678.62,
      1683.16
    ],
    "en": [
      "Let’s go to question 2."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1683.16,
      1693.19
    ],
    "en": [
      "Which of these messages is sent to all hosts on the local network? A, ARP Requeset. B, arp reply."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1693.19,
      1696.83
    ],
    "en": [
      "C, icmp echo request."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1696.83,
      1700.42
    ],
    "en": [
      "Or D, ICMP echo reply."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1700.42,
      1706.559
    ],
    "en": [
      "Pause the video to think about your answer."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1706.559,
      1711.539
    ],
    "en": [
      "the answer is a, ARP request. Let’s check."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1711.539,
      1717.09
    ],
    "en": [
      "The ARP reply message is a unicast message sent to the host that sent the ARP request."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1717.09,
      1721.21
    ],
    "en": [
      "So b, ARP reply, is incorrect."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1721.21,
      1728.59
    ],
    "en": [
      "The ICMP echo request is a unicast message used to test the reachability of another specific host."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1728.59,
      1733.07
    ],
    "en": [
      "The ICMP echo reply is a unicast reply to the request."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1733.07,
      1742.47
    ],
    "en": [
      "So C, ICMP echo request, and D, ICMP echo reply, the two messages used in PING, are incorrect."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1742.47,
      1747.33
    ],
    "en": [
      "The ARP request message is used to learn the Layer 2 address of a host."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1747.33,
      1752.37
    ],
    "en": [
      "Because the Layer 2 address is not yet known, the message has to be broadcast to all hosts"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1752.37,
      1754.309
    ],
    "en": [
      "on the local network."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1754.309,
      1757.44
    ],
    "en": [
      "So A, ARP request, is the correct answer."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1757.44,
      1761.52
    ],
    "en": [
      "Let’s go to question 3."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1761.52,
      1767.38
    ],
    "en": [
      "Which fields are present in the output of the show mac address-table command on a Cisco switch?"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1767.38,
      1770.77
    ],
    "en": [
      "A, mac address, and ports."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1770.77,
      1775.32
    ],
    "en": [
      "B, VLAN, mac address, and ports."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1775.32,
      1780.83
    ],
    "en": [
      "C, VLAN, MAC address, type, and ports."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1780.83,
      1786.2
    ],
    "en": [
      "D, Internet address, physical address, and type."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1786.2,
      1792.89
    ],
    "en": [
      "Pause the video to think about your answer."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1792.89,
      1797.6
    ],
    "en": [
      "The answer is C, VLAN, MAC address, type, and ports."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1797.6,
      1799.57
    ],
    "en": [
      "Let’s take a look."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1799.57,
      1804.95
    ],
    "en": [
      "Here’s a screenshot of the MAC address table on a Cisco switch."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1804.95,
      1810.48
    ],
    "en": [
      "Notice the four fields, VLAN, MAC address, type, and ports."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1810.48,
      1813.919
    ],
    "en": [
      "So C is the correct answer."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1813.919,
      1819.929
    ],
    "en": [
      "By the way, answer D, Internet address, physical address, and type, is the output shown from"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1819.929,
      1824.15
    ],
    "en": [
      "the arp -a command on my windows PC."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1824.15,
      1829.25
    ],
    "en": [
      "This is part of the ARP table on my PC, not the MAC address table on a Cisco switch."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1829.25,
      1833.14
    ],
    "en": [
      "Let’s go to question 4"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1833.14,
      1839.58
    ],
    "en": [
      "Which types of frames does a switch send out of all interfaces, except the one the frame was received on?"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1839.58,
      1843.52
    ],
    "en": [
      "A, broadcast and unknown unicast."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1843.52,
      1847.66
    ],
    "en": [
      "B, broadcast and known unicast."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1847.66,
      1852.28
    ],
    "en": [
      "C, known unicast and unknown unicast."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1852.28,
      1857.66
    ],
    "en": [
      "Or D, broadcast, unknown unicast, and known unicast."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1857.66,
      1863.75
    ],
    "en": [
      "Pause the video to think about your answer."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1863.75,
      1869.16
    ],
    "en": [
      "the answer is A, broadcast and unknown unicast. Let’s check."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1869.16,
      1873.62
    ],
    "en": [
      "Known unicast frames are sent to a single host."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1873.62,
      1877.99
    ],
    "en": [
      "Because the switch already has an entry for the destination in its MAC address table,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1877.99,
      1881.56
    ],
    "en": [
      "there is no need to flood the frame out all interfaces."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1881.56,
      1888.74
    ],
    "en": [
      "So B, C, and D are incorrect because they include known unicast."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1888.74,
      1897.6
    ],
    "en": [
      "Broadcast frames have a destination address of FFFF.FFFF.FFFF and are sent to all hosts"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1897.6,
      1900.22
    ],
    "en": [
      "on the local network."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1900.22,
      1904.48
    ],
    "en": [
      "Unknown unicast frames are destined for a single host, however the switch doesn’t"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1904.48,
      1910.1
    ],
    "en": [
      "have an entry for the destination in its MAC address table so it must flood the frame."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1910.1,
      1914.799
    ],
    "en": [
      "So A, broadcast and unknown unicast, is the correct answer."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1914.799,
      1920.059
    ],
    "en": [
      "Lets’ go to the last question for today’s video."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1920.059,
      1925.26
    ],
    "en": [
      "Which command is used on a Cisco switch to clear all dynamic MAC addresses on a specific"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1925.26,
      1928.54
    ],
    "en": [
      "interface from the MAC address table?"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1928.54,
      1935.32
    ],
    "en": [
      "A, clear mac address HYPHEN table interface, interface-id."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1935.32,
      1944.24
    ],
    "en": [
      "B, clear mac HYPHEN address HYPHEN table dynamic interface, interface-id."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1944.24,
      1951.96
    ],
    "en": [
      "C, clear mac HYPHEN address table dynamic interface, interface-id."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1951.96,
      1959.62
    ],
    "en": [
      "or D, clear mac address HYPHEN table dynamic interface, interface ID."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1959.62,
      1965.46
    ],
    "en": [
      "Pause the video to think about your answer."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1965.46,
      1973.12
    ],
    "en": [
      "the answer is D, clear mac address HYPHEN table dynamic interface interface-id."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1973.12,
      1978.059
    ],
    "en": [
      "Make sure to spend time doing practice labs in packet tracer to help you remember the commands!"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1978.059,
      1981.0
    ],
    "en": [
      "That’s all for the quiz."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1981.0,
      1985.159
    ],
    "en": [
      "Once again, there will be supplementary materials to help you study."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1985.159,
      1990.1
    ],
    "en": [
      "As always, there will be Anki flash cards to help you remember what you learned."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1990.1,
      1995.55
    ],
    "en": [
      "There will also be a packet tracer practice lab to give you some hands-on experience with Cisco devices."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1995.55,
      1998.039
    ],
    "en": [
      "Good luck with your studies."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1998.039,
      2001.07
    ],
    "en": [
      "Thank you for watching."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2001.07,
      2005.5
    ],
    "en": [
      "Please subscribe to the channel, like the video, leave a comment, and share the video"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2005.5,
      2008.83
    ],
    "en": [
      "with anyone else studying for the CCNA."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2008.83,
      2011.71
    ],
    "en": [
      "If you want to leave a tip, check the links in the description."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2011.71,
      2018.929
    ],
    "en": [
      "I'm also a Brave verified publisher and accept BAT, or Basic Attention Token, tips via the Brave browser."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2018.929,
      2018.929
    ],
    "en": [
      "That's all for now."
    ],
    "ru": [
      ""
    ]
  }
]