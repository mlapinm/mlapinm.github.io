var objs = [
  {
    "time": [
      1.41,
      8.82
    ],
    "en": [
      "Welcome to Jeremy’s IT Lab. This is a free, complete course for the CCNA 200-301. If you"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      8.82,
      14.11
    ],
    "en": [
      "like these videos, please subscribe to follow along with the series. Also, please like and"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      14.11,
      18.97
    ],
    "en": [
      "leave a comment, and share the video to help spread this free series of videos. Thanks"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      18.97,
      23.949
    ],
    "en": [
      "for your help. Also, remember to download and use the Anki flashcards with the link"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      23.949,
      30.939
    ],
    "en": [
      "in the description, which will help you very much in remembering what you have learned. Let’s get started."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      30.939,
      35.93
    ],
    "en": [
      "This is the 7th lecture in the series. In the past couple videos we talked about Ethernet"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      35.93,
      42.5
    ],
    "en": [
      "LAN switching, for example within this small network of PCs, attached to a switch. In this"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      42.5,
      47.26
    ],
    "en": [
      "video, however, we’ll start to expand our horizon, and take a look at how traffic is"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      47.26,
      54.289
    ],
    "en": [
      "forwarded not WITHIN a LAN, but between different LANs. Basically, we are going up the OSI model"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      54.289,
      63.199
    ],
    "en": [
      "from Layer 2, the data link layer, to Layer 3, the network layer. Let’s do a quick review of Layer 3."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      63.199,
      68.86
    ],
    "en": [
      "This slide is from Day 3’s video on the OSI model. Let’s review some characteristics"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      68.86,
      74.98
    ],
    "en": [
      "of Layer 3, the Network layer. The network layer provides connectivity between end hosts"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      74.98,
      82.44
    ],
    "en": [
      "on DIFFERENT networks, outside of the local area network. Layer 3 provides logical addressing,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      82.44,
      88.99
    ],
    "en": [
      "specifically IP addresses. Where Layer 2 uses MAC addresses, which are assigned to"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      88.99,
      94.47
    ],
    "en": [
      "the device when it is made, IP addresses are logical addresses you assign when you configure"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      94.47,
      102.24
    ],
    "en": [
      "the device. Layer 3 provides path selection between source and destination. Over larger,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      102.24,
      107.72
    ],
    "en": [
      "more complex networks, for example the Internet, there can be many different possible paths"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      107.72,
      114.07
    ],
    "en": [
      "to a destination. Selecting the best path to the destination is part of Layer 3’s"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      114.07,
      119.32
    ],
    "en": [
      "functionality. Routers operate at Layer 3. So far in this course we haven’t talked"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      119.32,
      124.25
    ],
    "en": [
      "much about routers. That’s going to change over these next few videos, however, as we"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      124.25,
      130.39
    ],
    "en": [
      "talk about Layer 3. In this video, our focus will be specifically on the logical Layer"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      130.39,
      134.79
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
      130.39,
      134.79
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
      134.79,
      140.42
    ],
    "en": [
      "You may recognize this network from the previous videos on Ethernet LAN switching. These PCs"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      140.42,
      146.82
    ],
    "en": [
      "are all connected by switches, so they are part of the same network. These Layer 2 devices,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      146.82,
      152.99
    ],
    "en": [
      "switches, do not separate different networks. They connect and expand networks. I could"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      152.99,
      158.61
    ],
    "en": [
      "connect two more switches, each with multiple PCs connected to them, to this network, and"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      158.61,
      165.37
    ],
    "en": [
      "it would still be one network, one LAN. Because of this, the PCs all have IP addresses in"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      165.37,
      177.57
    ],
    "en": [
      "the same Layer 3 network, 192.168.1.0/24. PC1’s IP address is 192.168.1.1, PC2’s"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      177.57,
      189.12
    ],
    "en": [
      "IP address is 192.168.1.2, PC3’s IP address is 192.168.1.3, and PC4’s IP address is"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      189.12,
      198.19
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
      189.12,
      198.19
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
      198.19,
      203.99
    ],
    "en": [
      "After SW1 receives the frame, it will broadcast it out all of its interfaces except the"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      203.99,
      206.56
    ],
    "en": [
      "one it was received on,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      206.56,
      213.709
    ],
    "en": [
      "so that means G0/1 and G0/2. SW2 will then do the same with the frame, broadcasting it"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      213.709,
      218.22
    ],
    "en": [
      "out of all of its interfaces, except the one it was received on."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      218.22,
      225.43
    ],
    "en": [
      "so that means G0/0 and G0/1. As you can see, all other PCs in the network have received"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      225.43,
      232.319
    ],
    "en": [
      "the frame. Now, what if I put a router between SW1 and SW2?"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      232.319,
      238.58
    ],
    "en": [
      "Now I’ve put R1 in between the two switches. Now instead of one network, the PCs have been"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      238.58,
      247.25
    ],
    "en": [
      "split into two networks. Let’s say SW1, PC1, and PC2 are still on the 192.168.1.0/24"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      247.25,
      261.85
    ],
    "en": [
      "network, but now SW2, PC3 and PC4 are on the 192.168.2.0/24 network, with PC3 being 192.168.2.1"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      261.85,
      270.18
    ],
    "en": [
      "and PC4 being 192.168.2.2. You may have noticed that, in these network IP addresses, the first"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      270.18,
      279.88
    ],
    "en": [
      "three groups of numbers, 192.168.1, and 192.168.2, represent the network itself, and only this"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      279.88,
      286.93
    ],
    "en": [
      "last 0 changes to represent the end hosts on the network, the PCs. You may also have"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      286.93,
      293.08
    ],
    "en": [
      "wondered what these /24s mean at the end. Actually, they are used to tell what part"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      293.08,
      299.81
    ],
    "en": [
      "of the address represents the network, and which part represents the end hosts, the PCs."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      299.81,
      306.74
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
      299.81,
      306.74
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
      306.74,
      312.13
    ],
    "en": [
      "going to go in depth about how these IP addresses work. But first, there’s one more thing"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      312.13,
      318.85
    ],
    "en": [
      "missing in this network diagram. The router needs an IP address. Actually, not just one"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      318.85,
      325.02
    ],
    "en": [
      "IP address, it needs an IP address for each network it is connected to. So, let’s give"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      325.02,
      339.27
    ],
    "en": [
      "R1’s G0/0 interface an IP address of 192.168.1.254, and it’s G0/1 interface an IP address of 192.168.2.254."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      339.27,
      348.34
    ],
    "en": [
      "This time, if R1 sends a frame to the broadcast MAC address of all Fs, SW1 will receive the frame,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      348.34,
      352.84
    ],
    "en": [
      "and it will forward it out of all of interfaces except the one the frame was received on."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      352.84,
      360.979
    ],
    "en": [
      "So, it sends the frame out of G0/1 and G0/2, and PC2 and R1 receive the frame. However,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      360.979,
      366.51
    ],
    "en": [
      "that’s where it ends. The broadcast is limited to the local network, it doesn’t cross the"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      366.51,
      373.24
    ],
    "en": [
      "router and go to SW2, PC3, and PC4. I’ll go more into detail about routing and Layer"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      373.24,
      381.51
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
      373.24,
      381.51
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
      381.51,
      388.18
    ],
    "en": [
      "This is a chart from Wikipedia showing the IP version 4 header. IP, or Internet protocol,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      388.18,
      394.15
    ],
    "en": [
      "is the primary layer 3 protocol in use today, and version 4 is the version in use in most"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      394.15,
      400.03
    ],
    "en": [
      "networks. As you can see, there are a lot of different fields in the IPv4 header, more"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      400.03,
      405.6
    ],
    "en": [
      "than in the Ethernet header. We’ll talk more about the IPv4 header in another video,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      405.6,
      413.07
    ],
    "en": [
      "so today let’s look at these two fields, the source IP address and destination IP address."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      413.07,
      419.21
    ],
    "en": [
      "These fields are both 32-bits in length, as you can see they stretch from 0 to 31 in this"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      419.21,
      426.13
    ],
    "en": [
      "chart. So, IP addresses are 32-bits, or 4 bytes, in length."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      426.13,
      436.07
    ],
    "en": [
      "Let’s take a look at this IPv4 address, 192.168.1.254. An IPv4 address is 32 bits"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      436.07,
      444.65
    ],
    "en": [
      "long, so each of these four groups of numbers represents 8 bits. 192 represents 8 bits,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      444.65,
      454.669
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
      444.65,
      454.669
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
      454.669,
      472.73
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
      454.669,
      472.73
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
      472.73,
      484.07
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
      472.73,
      484.07
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
      484.07,
      489.479
    ],
    "en": [
      "binary is difficult to read and understand for us humans, so IP addresses are written using"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      489.479,
      496.419
    ],
    "en": [
      "what’s called dotted decimal, because there are four decimal numbers, 192, 168, 1, and"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      496.419,
      504.09
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
      496.419,
      504.09
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
      504.09,
      508.09
    ],
    "en": [
      "to understand IPv4 addresses."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      508.09,
      514.459
    ],
    "en": [
      "Before looking at binary, let’s review decimal and hexadecimal. In decimal, also known as"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      514.459,
      524.199
    ],
    "en": [
      "base 10, each digit increases by a factor of 10. For example, this number 3294 consists"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      524.199,
      537.639
    ],
    "en": [
      "of 1 unit of 4, 9 units of 10, 2 units of 100, and 3 units of 1000. Notice that they increase by a factor of 10."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      537.639,
      548.11
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
      537.639,
      548.11
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
      548.11,
      557.35
    ],
    "en": [
      "ten thousand. Now, let’s look at this number in hexadecimal. Decimal 3294 is written in"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      557.35,
      564.709
    ],
    "en": [
      "hexadecimal as C D E. How does that work? Well, the first digit represents 1s, so this"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      564.709,
      575.079
    ],
    "en": [
      "is E times 1, and E = 14, so that equals 14. The next digit increases by a factor of 16,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      575.079,
      586.329
    ],
    "en": [
      "and 1 * 16 is 16 of course, so this is D times 16, and D in hexadecimal is equal to 13, making this equal to decimal"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      586.329,
      593.429
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
      586.329,
      593.429
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
      593.429,
      609.73
    ],
    "en": [
      "is equal to 256, so this is C times 256. In hexadecimal, C is equal to 12, so this is equal to decimal 3072."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      609.73,
      618.179
    ],
    "en": [
      "If you add those numbers up, you get 3294. So, that’s a quick review of decimal and hexadecimal."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      618.179,
      620.309
    ],
    "en": [
      "Now let’s look at binary."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      620.309,
      628.189
    ],
    "en": [
      "So, looking back at this IP address 192.168.1.254, let’s look at how each of these numbers"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      628.189,
      637.649
    ],
    "en": [
      "is written in binary, starting with 192, which is 11 00 00 00."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      637.649,
      644.79
    ],
    "en": [
      "Binary is base 2, meaning each digit increases by a factor of 2, it doubles. So, that means"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      644.79,
      658.019
    ],
    "en": [
      "that this 11 00 00 00 really is 0 1s, then 1 x 2 is 2, so 0 2s, then 2 x 2 is 4, so 0"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      658.019,
      673.339
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
      658.019,
      673.339
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
      673.339,
      690.68
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
      673.339,
      690.68
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
      690.68,
      698.42
    ],
    "en": [
      "Next let’s look at how 168 is converted to binary, which is 10 10 10 00."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      698.42,
      712.42
    ],
    "en": [
      "So, 10 10 10 00 in binary means 1 unit of 128, 1 unit of 32, and 1 unit of 8. 128 plus"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      712.42,
      717.36
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
      712.42,
      717.36
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
      717.36,
      725.3
    ],
    "en": [
      "Next up is 1, which is the decimal representation of binary 00 00 00 01."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      725.3,
      734.98
    ],
    "en": [
      "This is pretty simple. 1 is equal to 1 unit of 1. Let’s go to the last 8 bits of the IP address."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      734.98,
      743.649
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
      734.98,
      743.649
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
      743.649,
      756.29
    ],
    "en": [
      "Binary 11 11 11 10 represents 1 unit of 128, 1 unit of 64, 1 unit of 32, 1 unit of 16,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      756.29,
      765.13
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
      756.29,
      765.13
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
      765.13,
      771.499
    ],
    "en": [
      "So, hopefully you have an idea of how binary works now. Before we do some practice converting"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      771.499,
      777.689
    ],
    "en": [
      "between decimal and binary, I want to teach you one more term. You’ll often hear each"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      777.689,
      783.549
    ],
    "en": [
      "of these 8 bit groups referred to as ‘octets’. Now, let’s get some practice converting"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      783.549,
      785.749
    ],
    "en": [
      "binary octets to decimal."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      785.749,
      795.42
    ],
    "en": [
      "Here’s an example. We have a binary octet of 10 00 11 11. How can we go about converting"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      795.42,
      801.839
    ],
    "en": [
      "this to decimal? First, I recommend writing the value of each binary digit over the binary"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      801.839,
      807.649
    ],
    "en": [
      "numbers. You can start with 1 on the right, and then multiply by 2 for each digit as you"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      807.649,
      814.809
    ],
    "en": [
      "move to the left. Or if you prefer, start by writing 128 over the digit on the left,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      814.809,
      820.499
    ],
    "en": [
      "and divide by 2 as you move to the right. Once you have written these values, simply"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      820.499,
      832.48
    ],
    "en": [
      "add up the value of each 1, and you get the answer. 128 + 8 + 4 + 2 + 1 equals 143. So,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      832.48,
      842.869
    ],
    "en": [
      "binary 10 00 11 11 is equal to decimal 143. Let’s do another example."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      842.869,
      851.489
    ],
    "en": [
      "Now we have binary 01 11 01 10. Once again, write the value of each binary digit over"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      851.489,
      862.899
    ],
    "en": [
      "the octet. So, we have 1 unit of 64, 1 unit of 32, 1 unit of 16, 1 unit of 4, and 1 unit"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      862.899,
      871.239
    ],
    "en": [
      "of 2. Add each of those numbers together, and you get the answer, which is 118. So,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      871.239,
      878.649
    ],
    "en": [
      "binary 01 11 01 10 is equal to decimal 118."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      878.649,
      886.62
    ],
    "en": [
      "What is binary 11 10 11 00 in decimal? This time I won’t display the value of each binary"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      886.62,
      893.709
    ],
    "en": [
      "digit above. Write down the number yourself, or try to do the calculation in your head."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      893.709,
      906.97
    ],
    "en": [
      "Pause the video to figure out the answer. Got it? 128 + 64 + 32 + 8 + 4 equals"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      906.97,
      913.569
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
      906.97,
      913.569
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
      913.569,
      917.31
    ],
    "en": [
      "today’s video, let’s move on."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      917.31,
      922.54
    ],
    "en": [
      "Now let’s try converting in the opposite direction, from decimal to binary. We have"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      922.54,
      930.169
    ],
    "en": [
      "the decimal number 221, how can we go about converting it to binary? I recommend writing"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      930.169,
      937.79
    ],
    "en": [
      "out the values of each bit in a binary octet, like this. Then, starting from 128, try to"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      937.79,
      943.869
    ],
    "en": [
      "subtract each number from the decimal number you’re trying to convert. As you can see,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      943.869,
      952.79
    ],
    "en": [
      "we can subtract 128 from 221, so write a 1 under 128. Now, we’ve got 93 left, can we"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      952.79,
      964.009
    ],
    "en": [
      "subtract 64 from 93? Yes we can, and we’re left with 28. So, write a 1 under 64. Next,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      964.009,
      970.179
    ],
    "en": [
      "can we subtract 32 from 28? Well, we can, but we’d end up with a negative number,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      970.179,
      979.48
    ],
    "en": [
      "so for our purposes, no we can’t. So, write a 0 under 32. Next, 16 is smaller than 28,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      979.48,
      989.339
    ],
    "en": [
      "so let’s subtract 16 from 28. We’re left with 12, and write a 1 under 16. Next is 8,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      989.339,
      997.049
    ],
    "en": [
      "and it’s smaller than 12, so let’s subtract 8 from 12 and write a 1 under 8. Next, subtract"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      997.049,
      1005.86
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
      997.049,
      1005.86
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
      1005.86,
      1014.82
    ],
    "en": [
      "That means we can just write 0 and 2 and 1. So, there’s our answer. Decimal 221 is equivalent"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1014.82,
      1020.42
    ],
    "en": [
      "to binary 11 01 11 00 (**WRONG: CHECK ERRATA**)."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1020.42,
      1028.62
    ],
    "en": [
      "Let’s do another example. Let’s convert decimal 127 to binary. Try to figure it out"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1028.62,
      1038.55
    ],
    "en": [
      "yourself first. Pause the video to find the answer. Okay, hopefully you found the answer,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1038.55,
      1047.51
    ],
    "en": [
      "let’s check. We can’t subtract 128 from 127, so write a 0 under 128. We can subtract"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1047.51,
      1057.95
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
      1047.51,
      1057.95
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
      1057.95,
      1068.37
    ],
    "en": [
      "write a 1 under 32, and we’re left with 31. Next subtract 16 from 31, 15 remains,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1068.37,
      1077.08
    ],
    "en": [
      "and write a 1 under 16. Subtract 8 from 15, and write a 1 under 8. You’re left with"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1077.08,
      1086.8
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
      1077.08,
      1086.8
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
      1086.8,
      1096.06
    ],
    "en": [
      "a 1 under 2. Finally, subtract 1 from 1 and you’re left with 0. There’s our answer."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1096.06,
      1102.74
    ],
    "en": [
      "Decimal 127 in binary is 01 11 11 11."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1102.74,
      1108.73
    ],
    "en": [
      "Let’s do one more example of decimal to binary conversion. Again, try to find the"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1108.73,
      1115.95
    ],
    "en": [
      "answer yourself. Write down the numbers and convert decimal 207 to binary. Pause the video"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1115.95,
      1126.18
    ],
    "en": [
      "to think about your answer. Okay, hopefully you found the answer, let’s check. First,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1126.18,
      1133.72
    ],
    "en": [
      "write out the values for each bit of the binary octet. Subtract 128 from 207, and write a"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1133.72,
      1144.18
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
      1133.72,
      1144.18
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
      1144.18,
      1154.85
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
      1144.18,
      1154.85
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
      1154.85,
      1164.04
    ],
    "en": [
      "Subtract 8 from 15, and write a 1 under 8. Subtract 4 from 7, and write a 1 under 4."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1164.04,
      1170.8
    ],
    "en": [
      "Subtract 2 from 3, and write a 1 under 2. And finally, subtract 1 from 1 and you get 0."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1170.8,
      1180.62
    ],
    "en": [
      "There’s the answer. Decimal 207 is equivalent to 11 00 11 11 in binary."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1180.62,
      1185.0
    ],
    "en": [
      "Before moving on, you probably figured this out by yourself already, but the range of"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1185.0,
      1191.31
    ],
    "en": [
      "possible numbers that can be represented with 8 binary bits ranges from 0, if all bits are"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1191.31,
      1204.92
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
      1191.31,
      1204.92
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
      1204.92,
      1213.73
    ],
    "en": [
      "So, an IPv4 address is really a series of 32 bits. It is split up into 4 octets, and"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1213.73,
      1220.24
    ],
    "en": [
      "then written in dotted decimal format to make it simpler for us humans to read and understand."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1220.24,
      1226.64
    ],
    "en": [
      "However, you may remember there was this /24 that I said was used to identify which part"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1226.64,
      1233.47
    ],
    "en": [
      "of the IP address represents the network and which represents the end host. Since an IP"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1233.47,
      1241.38
    ],
    "en": [
      "address is 32 bits, can you guess what this /24 means? It means that the first 24"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1241.38,
      1246.93
    ],
    "en": [
      "bits of this IP address represent the network portion of the address, and the remaining"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1246.93,
      1249.57
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
      1246.93,
      1249.57
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
      1249.57,
      1259.68
    ],
    "en": [
      "So, the first 24 bits is equal to the first 3 octets, because 8 + 8 + 8 equals 24."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1259.68,
      1268.28
    ],
    "en": [
      "So 192.168.1 is the network portion of the address, and 254 is the host portion."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1268.28,
      1277.64
    ],
    "en": [
      "Here’s a quick look back at our small network. The IP address of PC1, PC2, and R1’s G0/0"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1277.64,
      1292.28
    ],
    "en": [
      "interface are 192.168.1.1/24, 192.168.1.2/24, and 192.168.1.254/24. Notice that the network"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1292.28,
      1298.23
    ],
    "en": [
      "portion of each IP address is the same, because they are all part of the same local network,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1298.23,
      1306.62
    ],
    "en": [
      "only the host portion is different. Likewise, the IP addresses of PC3, PC4, and R1’s G0/1"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1306.62,
      1320.31
    ],
    "en": [
      "interface are 192.168.2.1/24, 192.168.2.2/24, and 192.168.2.254/24, only the host portion"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1320.31,
      1324.74
    ],
    "en": [
      "of the address is different because they are on the same local area network."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1324.74,
      1331.0
    ],
    "en": [
      "Let’s follow the same process as before with another IP address. If you want some"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1331.0,
      1337.85
    ],
    "en": [
      "extra practice, try to convert these 32 binary bits into an IPv4 address. Pause the video"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1337.85,
      1346.35
    ],
    "en": [
      "if you want to try to find the answer on your own. Okay, so the 32 bits can be split into"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1346.35,
      1354.63
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
      1346.35,
      1354.63
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
      1354.63,
      1364.05
    ],
    "en": [
      "This time, /16 is used instead of /24. Which portion is the network portion and which is the host portion?"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1364.05,
      1372.3
    ],
    "en": [
      "Well, /16 means the first 16 bits, or the first half, are the network portion. So, the"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1372.3,
      1378.38
    ],
    "en": [
      "first two octets are the network portion, and the last two octets are the host portion."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1378.38,
      1389.2
    ],
    "en": [
      "Therefore, 154.78 is the network portion, and 111.32 is the host portion. Let’s do one more example."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1389.2,
      1397.32
    ],
    "en": [
      "Here’s another IPv4 address. Try to convert these 32 bits into dotted decimal. Pause the"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1397.32,
      1406.84
    ],
    "en": [
      "video now if you want to try. Okay, so you can divide the 32 bits into 4 octets like"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1406.84,
      1414.75
    ],
    "en": [
      "this, and then convert the octets into dotted decimal like this. This time, it’s /8. So,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1414.75,
      1420.95
    ],
    "en": [
      "which part of the address is the network portion, and which is the host portion?"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1420.95,
      1425.811
    ],
    "en": [
      "Since the first 8 bits are the network portion, that means that the first octet is the network"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1425.811,
      1431.32
    ],
    "en": [
      "portion, and the last three octets are the host portion."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1431.32,
      1438.68
    ],
    "en": [
      "So 12 is the network portion, and 128.251.23 is the host portion."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1438.68,
      1447.2
    ],
    "en": [
      "Now, IPv4 addresses are split up into 5 different ‘classes’. The class of an IPv4 address"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1447.2,
      1454.68
    ],
    "en": [
      "is determined by the first octet of the address. The first is class A, which has a first octet"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1454.68,
      1460.58
    ],
    "en": [
      "beginning with 0. If the first octet begins with 0, that means that the numeric range"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1460.58,
      1470.84
    ],
    "en": [
      "of the first octet is from 0 to 127, because 64 + 32 + 16 + 8 + 4 + 2 + 1 gives a maximum"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1470.84,
      1479.89
    ],
    "en": [
      "of 127. The second class is class B, which has a first octet beginning with 1 0, and"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1479.89,
      1488.16
    ],
    "en": [
      "therefore a numeric range of 128 to 191. The third class is class C, which has a first"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1488.16,
      1494.76
    ],
    "en": [
      "octet beginning with 1 1 0, and therefore the numeric range for the first octet is 192"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1494.76,
      1503.6
    ],
    "en": [
      "to 223. Class D has a first octet beginning with 1 1 1 0, and the numeric range of the"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1503.6,
      1513.97
    ],
    "en": [
      "first octet is 224 to 239. Finally, class E has a first octet beginning with 1111, and"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1513.97,
      1519.39
    ],
    "en": [
      "therefore the numeric range for the first octet is 240 to 255."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1519.39,
      1526.44
    ],
    "en": [
      "However, the classes of address we’ll be focusing on are A, B, and C. Addresses in"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1526.44,
      1532.9
    ],
    "en": [
      "class D are reserved for ‘multicast’ addresses. Multicast is another type of address, separate"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1532.9,
      1538.35
    ],
    "en": [
      "from the unicast and broadcast addresses we talked about in previous videos. We will talk"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1538.35,
      1543.56
    ],
    "en": [
      "about them, but that will be later in the course. Class E addresses are reserved for"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1543.56,
      1549.55
    ],
    "en": [
      "experimental uses, and we won’t talk about them in this course. Now, one more thing about"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1549.55,
      1556.73
    ],
    "en": [
      "the Class A range. The end of the class A range is usually considered to be 126, NOT"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1556.73,
      1561.9
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
      1556.73,
      1561.9
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
      1561.9,
      1567.76
    ],
    "en": [
      "The 127 range is reserved for ‘loopback addresses’. The range is anything with a"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1567.76,
      1579.95
    ],
    "en": [
      "first octet of 127, so 127.0.0.0 to 127.255.255.255. These addresses are used to test the ‘network"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1579.95,
      1585.65
    ],
    "en": [
      "stack’ of the local device. If a device sends any network traffic to an address in"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1585.65,
      1592.15
    ],
    "en": [
      "this range, it is simply processed back up the TCP/IP stack as if it were traffic received"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1592.15,
      1600.47
    ],
    "en": [
      "from another device. In this image, I pinged 127.0.0.1 on my windows PC, and you can see"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1600.47,
      1607.97
    ],
    "en": [
      "the responses. My PC is responding to its own pings. In this image, I sent a ping to"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1607.97,
      1619.2
    ],
    "en": [
      "a random IP address in the 127 range, 127.23.68.241, and again my PC responds back to its own ping."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1619.2,
      1625.0
    ],
    "en": [
      "Notice the round trip times, all 0 milliseconds. That’s because the traffic isn’t going"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1625.0,
      1629.46
    ],
    "en": [
      "anywhere, my PC is just sending and receiving these pings to and from itself."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1629.46,
      1638.72
    ],
    "en": [
      "So here’s the chart again with just classes A, B, and C. I’ve also added one more column,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1638.72,
      1645.86
    ],
    "en": [
      "the prefix length, which is the /8, /16, and /24 which is used to identify the length of"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1645.86,
      1653.09
    ],
    "en": [
      "the network portion of the address. Class A addresses use a /8 prefix, Class B addresses"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1653.09,
      1660.09
    ],
    "en": [
      "use a /16 prefix, and Class C addresses use a /24 prefix."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1660.09,
      1665.26
    ],
    "en": [
      "Actually, if you look back at these three addresses we used in our examples, you can"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1665.26,
      1672.01
    ],
    "en": [
      "see they are , Class A, class B, and Class C addresses, and their prefix lengths match"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1672.01,
      1682.38
    ],
    "en": [
      "the table. /8 for class A, /16 for class B, and /24 for class C. In class A, there are"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1682.38,
      1688.44
    ],
    "en": [
      "fewer possible network addresses, however because the network (*host) portion is very long,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1688.44,
      1695.21
    ],
    "en": [
      "there can be many hosts on each network. Class C is the opposite, there are many more possible"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1695.21,
      1700.71
    ],
    "en": [
      "networks, but because the host portion is smaller there are fewer hosts on each network."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1700.71,
      1703.54
    ],
    "en": [
      "Let’s take a look at the numbers."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1703.54,
      1710.11
    ],
    "en": [
      "So, this is another chart I’ve taken off of wikipedia. The leading bits column refers"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1710.11,
      1716.2
    ],
    "en": [
      "to the first bits of the first octet, which I displayed in my previous table. The ‘size"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1716.2,
      1720.52
    ],
    "en": [
      "of network number bit field’ displays the number of bits in the network portion of the"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1720.52,
      1727.8
    ],
    "en": [
      "IP address, which as I mentioned is 8 for class A, 16 for class B, and 24 for class"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1727.8,
      1734.67
    ],
    "en": [
      "C. ‘size of rest bit field’ indicates the remaining number of bits in the address, which is"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1734.67,
      1742.05
    ],
    "en": [
      "the host portion of the address. 24 bits for class A, 16 for class B, and 8 for class C."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1742.05,
      1749.76
    ],
    "en": [
      "Now, this part here displays the number of possible networks in each class. As I said,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1749.76,
      1755.72
    ],
    "en": [
      "class A has fewer potential networks, but more hosts in each network, class C is the"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1755.72,
      1764.14
    ],
    "en": [
      "opposite, and class B is in between. Class A has 128 possible networks, Class B has about"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1764.14,
      1772.69
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
      1764.14,
      1772.69
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
      1772.69,
      1779.421
    ],
    "en": [
      "hosts in each network, Class B allows about 65,000 hosts in each network, and class C"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1779.421,
      1786.33
    ],
    "en": [
      "allows 256 hosts in each network. However, because the first address in each network"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1786.33,
      1792.8
    ],
    "en": [
      "is the network address, it cant be assigned to hosts. Also the last address of the network"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1792.8,
      1797.69
    ],
    "en": [
      "is the broadcast address, the Layer 3 address used when you want to send traffic to all"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1797.69,
      1804.49
    ],
    "en": [
      "hosts, and it also can’t be assigned to hosts, so really the host count is two less, for example"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1804.49,
      1809.52
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
      1804.49,
      1809.52
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
      1809.52,
      1815.57
    ],
    "en": [
      "Now I want to briefly talk about another way of writing these prefix lengths. Using a slash,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1815.57,
      1819.74
    ],
    "en": [
      "followed by the length of the prefix, is a newer and easier way of writing the prefix"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1819.74,
      1826.63
    ],
    "en": [
      "length. On Juniper network devices, for example, you write prefix lengths using this slash"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1826.63,
      1832.559
    ],
    "en": [
      "notation. However, Cisco devices still use an older, slightly more complicated way of"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1832.559,
      1839.25
    ],
    "en": [
      "writing the prefix length. That is using a dotted decimal netmask. A netmask is written"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1839.25,
      1845.17
    ],
    "en": [
      "in dotted decimal like an IP address, where the network portion is all 1s and the host"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1845.17,
      1854.65
    ],
    "en": [
      "portion is all 0s. For example, the network mask of a class A address is 255.0.0.0. That’s"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1854.65,
      1862.79
    ],
    "en": [
      "the dotted decimal version of 11 11 11 11, followed by 24 zeroes. So, what do you think"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1862.79,
      1871.84
    ],
    "en": [
      "the netmask of a Class B address is?... It’s 255.255.0.0, which is two octets of 1s, followed"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1871.84,
      1877.82
    ],
    "en": [
      "by two octets of zeroes, written in dotted decimal. Finally, what do you think the netmask"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1877.82,
      1887.13
    ],
    "en": [
      "of a Class C address is? It’s 255.255.255.0, which is three octets of 1s, followed by 1"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1887.13,
      1893.94
    ],
    "en": [
      "octet of zeroes, again written in dotted decimal notation. So, these prefix lengths and these"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1893.94,
      1899.67
    ],
    "en": [
      "netmasks are the same things, just written in different ways."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1899.67,
      1903.17
    ],
    "en": [
      "Before moving on to the quiz for today’s video, I want to explain two more types of"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1903.17,
      1912.1
    ],
    "en": [
      "IP addresses which I briefly mentioned before, the network and broadcast addresses. If the host portion of an IP address is all"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1912.1,
      1918.83
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
      1912.1,
      1918.83
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
      1918.83,
      1927.67
    ],
    "en": [
      "diagram here, you can see 192.168.1.0/24. We know that /24 means the first three octets"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1927.67,
      1933.61
    ],
    "en": [
      "are the network portion, and the last octet is the host portion. Since, the host portion"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1933.61,
      1943.99
    ],
    "en": [
      "is 0, it means the last octet, the host portion, is all 0s. Therefore, this address, 192.168.1.0/24,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1943.99,
      1950.77
    ],
    "en": [
      "is the network address. Keep in mind, the network address cannot be assigned to a host."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1950.77,
      1955.78
    ],
    "en": [
      "The network address is the first address of the network, but the first USABLE address"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1955.78,
      1964.2
    ],
    "en": [
      "is one above the network address, in this case it’s 192.168.1.1, which is assigned to PC1."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1964.2,
      1972.179
    ],
    "en": [
      "So, the network address is the first address, with a host portion of all 0s. However, the"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1972.179,
      1977.67
    ],
    "en": [
      "LAST address in a network, with a host portion of all 1s, is the broadcast address for the"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1977.67,
      1985.7
    ],
    "en": [
      "network. Like the network address, the broadcast address CANNOT be assigned to a host. So although"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1985.7,
      1991.2
    ],
    "en": [
      "it’s the last address in the network the last USABLE address is actually 1 under the"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1991.2,
      2002.07
    ],
    "en": [
      "broadcast address, in this case, that’s 192.168.1.254, the address assigned to R1’s G0/0 interface."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2002.07,
      2007.44
    ],
    "en": [
      "So, the broadcast address is the layer 3 address used to send a packet to all hosts on the"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2007.44,
      2013.35
    ],
    "en": [
      "local network. If a packet is sent with this destination IP address, what do you think"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2013.35,
      2018.84
    ],
    "en": [
      "will be the destination MAC address of the frame it is encapsulated in? Think about the"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2018.84,
      2027.17
    ],
    "en": [
      "Ethernet LAN switching videos... it will be all F’s, the broadcast MAC Address. If PC1,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2027.17,
      2039.63
    ],
    "en": [
      "for example, sent a ping to 192.168.1.255, it would be received by PC2 and R1’s G0/0 interface."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2039.63,
      2043.99
    ],
    "en": [
      "Once again, I think we’ve covered a lot of ground in this video. Let’s list what"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2043.99,
      2051.499
    ],
    "en": [
      "we covered before moving on to today’s quiz. First, I talked about dotted decimal and binary."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2051.499,
      2056.529
    ],
    "en": [
      "Binary is how computers think, but 32 bit IPv4 addresses are difficult to remember for"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2056.529,
      2062.359
    ],
    "en": [
      "us humans, so we convert IPv4 addresses to dotted decimal form to make them easier to"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2062.359,
      2071.069
    ],
    "en": [
      "read and remember. You learned that IPv4 addresses consist of a network portion and a host portion."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2071.069,
      2075.56
    ],
    "en": [
      "Hosts on the same network will have the same network portion, but a unique host portion"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2075.56,
      2082.7
    ],
    "en": [
      "of their IP addresses. You learned about the IPv4 address classes. We looked at the"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2082.7,
      2086.899
    ],
    "en": [
      "different ways of indicating the length of the network prefix, by writing the prefix"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2086.899,
      2092.65
    ],
    "en": [
      "length with a slash or by using a netmask. and finally, you learned about the network"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2092.65,
      2098.41
    ],
    "en": [
      "address, which has a host portion of all 0s, and is used to identify the network itself,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2098.41,
      2105.839
    ],
    "en": [
      "not any particular host on the network. Also, the broadcast address, which has a host portion of all 1s,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2105.839,
      2109.89
    ],
    "en": [
      "which is used to send network traffic to all hosts on the network."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2109.89,
      2114.78
    ],
    "en": [
      "So, before moving on to the quiz I want to remind you to download and use the flashcards"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2114.78,
      2119.789
    ],
    "en": [
      "for this lesson to help you remember what you’ve studied in this lesson. Now, for"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2119.789,
      2125.049
    ],
    "en": [
      "today’s quiz, I’m going to focus exclusively on converting IPv4 addresses between binary"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2125.049,
      2132.119
    ],
    "en": [
      "and dotted decimal. There will be 10 questions, instead of the usual 5, and hopefully afterward"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2132.119,
      2139.489
    ],
    "en": [
      "you’ll feel confident converting IPv4 addresses between binary and dotted decimal. Let’s get started."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2139.489,
      2146.109
    ],
    "en": [
      "Question 1. Convert the following IPv4 address to dotted decimal notation. Pause the video"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2146.109,
      2154.06
    ],
    "en": [
      "to solve the question, then unpause to check your answer."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2154.06,
      2161.78
    ],
    "en": [
      "The answer is 63.56.231.19. Let’s go the question 2."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2161.78,
      2166.96
    ],
    "en": [
      "Convert the following IPv4 address to dotted decimal notation. Pause the video to solve"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2166.96,
      2174.32
    ],
    "en": [
      "the question, then unpause to check your answer."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2174.32,
      2182.94
    ],
    "en": [
      "The answer is 243.127.98.1. Let’s go question 3."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2182.94,
      2188.19
    ],
    "en": [
      "Convert the following IPv4 address to dotted decimal notation. Pause the video to solve"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2188.19,
      2195.7
    ],
    "en": [
      "the question, and unpause to check your answer."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2195.7,
      2203.73
    ],
    "en": [
      "The answer is 111.6.89.199. Let’s go question 4."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2203.73,
      2209.23
    ],
    "en": [
      "Convert the following IPv4 address to dotted decimal notation. Pause the video to solve"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2209.23,
      2216.22
    ],
    "en": [
      "the question, and unpause to check your answer."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2216.22,
      2225.75
    ],
    "en": [
      "The answer is 207.198.47.76. Let’s go question 5."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2225.75,
      2231.2
    ],
    "en": [
      "Convert the following IPv4 address to dotted decimal notation. Pause the video to solve"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2231.2,
      2238.68
    ],
    "en": [
      "the question, and unpause to check your answer."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2238.68,
      2247.18
    ],
    "en": [
      "The answer is 100.201.33.253. Let’s go question 6."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2247.18,
      2256.17
    ],
    "en": [
      "Convert the following IPv4 address to binary notation. 88.46.90.91. Pause the video to"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2256.17,
      2272.489
    ],
    "en": [
      "solve the question, and unpause to check your answer. And here’s the answer. Let's go to question 7."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2272.489,
      2283.099
    ],
    "en": [
      "Convert the following IPv4 address to binary notation. 221.234.246.163. Pause the video"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2283.099,
      2295.13
    ],
    "en": [
      "to solve the question, and unpause to check your answer. And here’s the answer. Let's"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2295.13,
      2298.039
    ],
    "en": [
      "go to question 8."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2298.039,
      2307.91
    ],
    "en": [
      "Convert the following IPv4 address to binary notation. 3.41.143.222. Pause the video to"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2307.91,
      2322.519
    ],
    "en": [
      "solve the question, and unpause to check your answer. And here’s the answer. Let's go to question 9."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2322.519,
      2331.2
    ],
    "en": [
      "Convert the following IPv4 address to binary notation. 10.200.231.91. Pause the video to"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2331.2,
      2345.049
    ],
    "en": [
      "solve the question, and unpause to check your answer. And here’s the answer. Let's go to question 10."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2345.049,
      2354.869
    ],
    "en": [
      "Convert the following IPv4 address to binary notation. 248.87.255.152. Pause the video"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2354.869,
      2363.67
    ],
    "en": [
      "to solve the question, and unpause to check your answer. And here’s the answer."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2363.67,
      2370.98
    ],
    "en": [
      "Okay, that’s all for the quiz, I hope you feel confident converting IPv4 addresses between"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2370.98,
      2377.21
    ],
    "en": [
      "binary and dotted decimal notation. As usual, there will be supplementary materials to help"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2377.21,
      2382.98
    ],
    "en": [
      "you review what you’ve learned. There will be review flashcards using Anki, which I highly"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2382.98,
      2388.7
    ],
    "en": [
      "recommend you download and use to review. There will also be a packet tracer practice"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2388.7,
      2394.369
    ],
    "en": [
      "lab, however it will be after Part 2’s video, so there won’t be a lab for today’s video"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2394.369,
      2397.94
    ],
    "en": [
      "specifically. Good luck with your studies."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2397.94,
      2404.119
    ],
    "en": [
      "Thank you for watching. Please subscribe to the channel, like the video, leave a comment,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2404.119,
      2409.2
    ],
    "en": [
      "and share the video with anyone else studying for the CCNA. If you want to leave a tip,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2409.2,
      2414.809
    ],
    "en": [
      "check the links in the description. I'm also a Brave verified publisher, and accept BAT,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2414.809,
      2414.809
    ],
    "en": [
      "or Basic Attention Token, tips via the Brave browser. That's all for now."
    ],
    "ru": [
      ""
    ]
  }
]