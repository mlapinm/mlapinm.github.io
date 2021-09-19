var objs = [
  {
    "time": [
      1.27,
      3.649
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
      3.649,
      6.89
    ],
    "en": [
      "This is a free, complete course for the CCNA."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      6.89,
      10.99
    ],
    "en": [
      "If you like these videos, please subscribe to follow along with the series."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      10.99,
      16.96
    ],
    "en": [
      "Also, please like and leave a comment, and share the video to help spread this free series of videos."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      16.96,
      18.22
    ],
    "en": [
      "Thanks for your help."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      18.22,
      23.66
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
      23.66,
      28.91
    ],
    "en": [
      "which will help you very much in remembering what you have learned. Let’s get started."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      28.91,
      36.1
    ],
    "en": [
      "In this video, we’re going to take a look at the Internet Protocol version 4, known as IPv4 header."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      36.1,
      41.93
    ],
    "en": [
      "This is used at Layer 3, to help send data between devices on separate networks, even"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      41.93,
      44.97
    ],
    "en": [
      "on other sides of the world over the Internet."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      44.97,
      46.55
    ],
    "en": [
      "This is known as routing."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      46.55,
      52.39
    ],
    "en": [
      "Originally, I planned this video to be a general introduction to routing, but in the end I"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      52.39,
      55.56
    ],
    "en": [
      "decided to split it up into separate parts."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      55.56,
      59.29
    ],
    "en": [
      "Let’s take a look at what we’ll cover in this video."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      59.29,
      66.289
    ],
    "en": [
      "We’ll cover the IPv4 packet structure, or more accurately, the IPv4 header which is"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      66.289,
      70.2
    ],
    "en": [
      "used to encapsulate a TCP or UDP segment."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      70.2,
      74.68
    ],
    "en": [
      "Specifically, we will cover the fields of the IPv4 header."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      74.68,
      79.11
    ],
    "en": [
      "We already looked in detail at two fields of the header, the source and destination"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      79.11,
      83.999
    ],
    "en": [
      "IP address fields, but there are quite a few more fields to look at."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      83.999,
      86.179
    ],
    "en": [
      "And that’s all for this video!"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      86.179,
      90.719
    ],
    "en": [
      "As I said, I originally planned to make this a long, introduction to routing video."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      90.719,
      95.079
    ],
    "en": [
      "However, I don’t want to make these videos too long, already the shortest videos are"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      95.079,
      97.929
    ],
    "en": [
      "at least 30 minutes which is quite long I think."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      97.929,
      102.499
    ],
    "en": [
      "So, I decided to split up routing into more videos."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      102.499,
      107.689
    ],
    "en": [
      "This prevents the videos from getting too long, but also lets me go more in depth on each topic."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      107.689,
      113.249
    ],
    "en": [
      "So, this video will focus exclusively on the fields in the IPv4 header, and then future"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      113.249,
      117.719
    ],
    "en": [
      "videos will will get more practical, with hands-on configuration in the CLI."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      117.719,
      124.42
    ],
    "en": [
      "Since we’re going to look at the IPv4 header, let’s review its position in a complete frame."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      124.42,
      130.81
    ],
    "en": [
      "So, the upper layers of the OSI model prepare some data to be sent to another device."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      130.81,
      137.31
    ],
    "en": [
      "It is encapsulated in a layer 4 header, typically using the TCP or UDP protocols, which we’ll"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      137.31,
      139.9
    ],
    "en": [
      "talk about in a future lesson."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      139.9,
      144.41
    ],
    "en": [
      "This combination of data plus layer 4 header is called a segment."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      144.41,
      151.69
    ],
    "en": [
      "The segment is encapsulated with a Layer 3 header, usually using the internet protocol, IP."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      151.69,
      157.0
    ],
    "en": [
      "This combination of data, layer 4 header, and layer 3 header, is called a packet."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      157.0,
      163.08
    ],
    "en": [
      "Then, the layer 2 header and trailer are added, and this is called a frame."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      163.08,
      166.94
    ],
    "en": [
      "These units are called protocol data units, or PDUs."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      166.94,
      173.49
    ],
    "en": [
      "For example, the layer 3 PDU is a packet, and the layer 2 PDU is a frame."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      173.49,
      178.1
    ],
    "en": [
      "For this lesson, we’ll focus on this Layer 3 header, as it contains the information that"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      178.1,
      181.73
    ],
    "en": [
      "is needed to route this packet to its destination."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      181.73,
      187.39
    ],
    "en": [
      "Note that, since we’ll be focusing on Layer 3 here, I’ll usually be using the term ‘packet’,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      187.39,
      190.7
    ],
    "en": [
      "talking about ‘routing packets’, rather than frames."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      190.7,
      196.72
    ],
    "en": [
      "So, thanks to Wikipedia for this chart of the IPv4 header structure."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      196.72,
      200.71
    ],
    "en": [
      "As you can see, it’s a bit more complicated than the Ethernet header."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      200.71,
      204.75
    ],
    "en": [
      "To be honest, I doubt that it will be necessary for you to memorize the exact structure of"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      204.75,
      209.3
    ],
    "en": [
      "the header, the size of each field, etc, for the CCNA test,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      209.3,
      212.68
    ],
    "en": [
      "but I can’t make any guarantees, I didn’t make the test."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      212.68,
      219.01
    ],
    "en": [
      "What I recommend is just getting to know the purpose of each field of the header, which we’ll cover now."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      219.01,
      223.041
    ],
    "en": [
      "By the way, if you’re wondering how to read this chart, it’s read left to right, top"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      223.041,
      229.69
    ],
    "en": [
      "to bottom, so this is the first bit of the header, and this is the last bit of the header."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      229.69,
      236.38
    ],
    "en": [
      "So, let’s quickly go through each field of the header so you’re familiar with its purpose."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      236.38,
      238.91
    ],
    "en": [
      "First up is the ‘Version’ field of the header."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      238.91,
      242.76
    ],
    "en": [
      "It’s length is 4 bits, half of one octet."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      242.76,
      245.48
    ],
    "en": [
      "It’s purpose is straight forward."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      245.48,
      248.4
    ],
    "en": [
      "It identifies the version of IP used."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      248.4,
      254.67
    ],
    "en": [
      "Now, there are only two versions of IP in use, IPv4, which is simply identified with"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      254.67,
      260.249
    ],
    "en": [
      "a value of 4 in this field, or 0 1 0 0 in binary."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      260.249,
      269.059
    ],
    "en": [
      "The other version is Ipv6, which is identified with a value of 6, or 0 1 1 0 in binary."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      269.059,
      271.389
    ],
    "en": [
      "Now you may wonder what happened to IPv5?"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      271.389,
      278.49
    ],
    "en": [
      "Well there was an experimental protocol called Internet Stream Protocol which uses an Internet"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      278.49,
      282.689
    ],
    "en": [
      "Protocol value of 5, but it was never publically used."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      282.689,
      285.49
    ],
    "en": [
      "So, you could say that’s the lost IPv5."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      285.49,
      290.9
    ],
    "en": [
      "Now, we’re focusing on the IPv4 header, so this field of the header will always have"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      290.9,
      293.159
    ],
    "en": [
      "a value of 4."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      293.159,
      298.4
    ],
    "en": [
      "The IPv6 header has a different structure than the IPv4 header, so if the value of this"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      298.4,
      303.939
    ],
    "en": [
      "field is 6 the rest of the header will have a different structure."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      303.939,
      308.09
    ],
    "en": [
      "Next up is the Internet Header Length, or IHL, field."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      308.09,
      312.55
    ],
    "en": [
      "It’s also 4 bits in length, half of one octet."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      312.55,
      319.289
    ],
    "en": [
      "The final field of the IPv4 header (Options) is variable in length, so this field is necessary"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      319.289,
      321.46
    ],
    "en": [
      "to indicate the total length of the header."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      321.46,
      329.919
    ],
    "en": [
      "Here’s an important part to remember: This field specifies the length of the header IN 4-BYTE INCREMENTS."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      329.919,
      336.629
    ],
    "en": [
      "For example, if the value in this field is 5, 5 times 4-bytes is 20, so that means that"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      336.629,
      340.58
    ],
    "en": [
      "length of the header is 20 bytes."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      340.58,
      346.31
    ],
    "en": [
      "The minimum value in this field is 5, which as I just said is equal to 20 bytes."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      346.31,
      354.259
    ],
    "en": [
      "That’s the length of the IP packet WITHOUT any IP options at the end, so an empty options field."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      354.259,
      360.559
    ],
    "en": [
      "The maximum value is 15, which is the maximum value of 4 bits, As you can see here, the"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      360.559,
      366.389
    ],
    "en": [
      "values of the 4 bits are 1, 2, 4, and 8, adding them up results in 15."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      366.389,
      371.74
    ],
    "en": [
      "So, 15 x 4 bytes is equal to 60 bytes."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      371.74,
      376.24
    ],
    "en": [
      "That means the maximum length of the IP options field is 40 bytes."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      376.24,
      383.009
    ],
    "en": [
      "So, an IPv4 header with no options field is 20 bytes in length, and that’s the minimum length"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      383.009,
      384.639
    ],
    "en": [
      "of an IPv4 header."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      384.639,
      391.919
    ],
    "en": [
      "And, an IPv4 with a maximum length options field, 40 bytes, has a length of 60 bytes,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      391.919,
      395.08
    ],
    "en": [
      "and that’s the maximum length of an IPv4 header."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      395.08,
      400.55
    ],
    "en": [
      "Okay, that’s the IHL field of the IPv4 header."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      400.55,
      402.93
    ],
    "en": [
      "Next is the DSCP field."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      402.93,
      411.749
    ],
    "en": [
      "DSCP stand for differentiated services code point, and the field’s length is 6 bits."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      411.749,
      415.779
    ],
    "en": [
      "This field is used for QoS, quality of service."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      415.779,
      422.65
    ],
    "en": [
      "Basic QoS is a topic on the CCNA so I will make a dedicated video about it later."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      422.65,
      430.379
    ],
    "en": [
      "Essentially, it is used to prioritize delay-sensitive data, such as streaming voice and video."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      430.379,
      435.02
    ],
    "en": [
      "If you’re loading a web page and the Internet is a little slow, it’s not a big deal."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      435.02,
      439.77
    ],
    "en": [
      "However, if you’re having a skype call and there’s terrible delay, or the audio and"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      439.77,
      444.08
    ],
    "en": [
      "video keep freezing, it can totally ruin the experience."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      444.08,
      450.05
    ],
    "en": [
      "This field is used to identify which traffic should receive priority treatment."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      450.05,
      456.03
    ],
    "en": [
      "Next up is the ECN field, which stands for explicit congestion notification and has a"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      456.03,
      458.449
    ],
    "en": [
      "length of 2 bits."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      458.449,
      464.159
    ],
    "en": [
      "It provides end-to-end notification of network congestion WITHOUT DROPPING PACKETS."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      464.159,
      472.119
    ],
    "en": [
      "Normally in a network, if the network is super busy, if there is congestion, this is signalled by dropping packets."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      472.119,
      477.71
    ],
    "en": [
      "The ECN field provides a way to signal a congested network without dropping packets."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      477.71,
      483.439
    ],
    "en": [
      "However, this is an optional field that requires both endpoints, as well as the underlying"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      483.439,
      487.68
    ],
    "en": [
      "network infrastructure, to support it."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      487.68,
      495.229
    ],
    "en": [
      "Next up is the Total Length field, and its length is 16 bits, or 2 octets, 2 bytes."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      495.229,
      501.009
    ],
    "en": [
      "It indicates the total length of the packet, including the IPv4 header and the encapsulated"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      501.009,
      506.819
    ],
    "en": [
      "Layer 4 segment, which includes both the layer 4 header and the data."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      506.819,
      513.81
    ],
    "en": [
      "This is different than the IHL field, which indicates only the length of the IPv4 header itself."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      513.81,
      520.14
    ],
    "en": [
      "This field indicates the length in bytes, NOT IN 4-BYTE INCREMENTS LIKE THE IHL HEADER."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      520.14,
      526.06
    ],
    "en": [
      "So, a value of 20 in this field simply means 20 bytes."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      526.06,
      532.22
    ],
    "en": [
      "The minimum value in this field is 20, meaning 20 bytes, which is equal a minimum-sized IPv4"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      532.22,
      535.68
    ],
    "en": [
      "header with no encapsulated data."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      535.68,
      545.77
    ],
    "en": [
      "The maximum value is 65,535, which is the maximum value of 16 binary bits, all set to 1."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      545.77,
      548.06
    ],
    "en": [
      "Let me just show you that calculation."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      548.06,
      553.91
    ],
    "en": [
      "Here are 16 bits, two octets, all set to 1."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      553.91,
      566.08
    ],
    "en": [
      "The first bit is equal to 1, then 2, then 4...8...16...32...64...128."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      566.08,
      571.3
    ],
    "en": [
      "This is as far as we went when looking at a single octet in an IPv4 address."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      571.3,
      575.68
    ],
    "en": [
      "If you extend beyond 8 bits, the value keeps doubling."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      575.68,
      594.74
    ],
    "en": [
      "Next is 256...512...1024...2048...4096...8192...16,384...and then the 16th bit is 32,768."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      594.74,
      603.83
    ],
    "en": [
      "Add those all up, and you get 65535, the maximum length of an IPv4 packet."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      603.83,
      609.31
    ],
    "en": [
      "Next up is the Identification field, which is also 16 bits in length."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      609.31,
      614.93
    ],
    "en": [
      "If a packet is fragmented due to being too large, this field is used to identify which"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      614.93,
      622.0
    ],
    "en": [
      "packet the fragment belongs to, so it can be reassembled again to make the original packet."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      622.0,
      627.51
    ],
    "en": [
      "All fragments of the same packet will have their own IPv4 header with the same value in this"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      627.51,
      631.15
    ],
    "en": [
      "field., so they can be reassembled later."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      631.15,
      638.71
    ],
    "en": [
      "Packets are fragmented if larger than the MTU, which stands for Maximum Transmission Unit."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      638.71,
      643.24
    ],
    "en": [
      "The MTU is usually 1500 bytes."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      643.24,
      645.66
    ],
    "en": [
      "Remember the maximum size of an Ethernet frame?"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      645.66,
      654.81
    ],
    "en": [
      "I mentioned that the maximum payload size of an Ethernet frame is 1500 bytes, so these are related."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      654.81,
      661.17
    ],
    "en": [
      "And one last point, fragments are reassembled by the receiving host."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      661.17,
      664.53
    ],
    "en": [
      "Next is the Flags field, which is 3 bits in length."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      664.53,
      669.17
    ],
    "en": [
      "It is used to control and identify fragments."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      669.17,
      672.61
    ],
    "en": [
      "There are 3 bits, and they function like this."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      672.61,
      678.4
    ],
    "en": [
      "The first bit, bit 0, is reserved and always set to 0."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      678.4,
      682.62
    ],
    "en": [
      "Bit 1 is the don’t fragment bit, or DF bit."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      682.62,
      687.61
    ],
    "en": [
      "If it is set to 1, it means that the packet should not be fragmented."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      687.61,
      691.36
    ],
    "en": [
      "Bit 2 is the more fragments, or MF bit."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      691.36,
      697.85
    ],
    "en": [
      "It is set to 1 if there are more fragments in the packet, and then set to 0 for the last fragment."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      697.85,
      707.87
    ],
    "en": [
      "Also, if the packet is a whole, unfragmented packet, the MF bit is set to 0, since there are no fragments."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      707.87,
      713.03
    ],
    "en": [
      "Next we have one more field related to packet fragmentation, that is the fragment offset"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      713.03,
      717.06
    ],
    "en": [
      "field, which is 13 bits in length."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      717.06,
      724.18
    ],
    "en": [
      "This field is used to indicate the position of the fragment within the original, unfragmented IP packet."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      724.18,
      729.93
    ],
    "en": [
      "This allows fragmented packets to be reassembled even if the fragments arrive out of order,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      729.93,
      735.42
    ],
    "en": [
      "since this field lets the receiver know the original order of the fragments."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      735.42,
      740.04
    ],
    "en": [
      "Next up is the Time to Live Field, which is 8 bits in length."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      740.04,
      744.62
    ],
    "en": [
      "A router will drop a packet with a TTL of 0."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      744.62,
      748.95
    ],
    "en": [
      "So, this field is used to prevent infinite loops."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      748.95,
      754.19
    ],
    "en": [
      "If a poor routing configuration causes a packet to be continually sent around in a loop, never"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      754.19,
      759.67
    ],
    "en": [
      "reaching its intended destination, if enough traffic like that accumulates, it could causes"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      759.67,
      763.54
    ],
    "en": [
      "network congestion, and eventually failure."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      763.54,
      770.98
    ],
    "en": [
      "This feature prevents that by happening, causing looped traffic to be dropped when the TTL reaches 0."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      770.98,
      776.72
    ],
    "en": [
      "This field was originally designed to indicate the packet’s maximum lifetime in seconds,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      776.72,
      781.31
    ],
    "en": [
      "in practice, however, this actually indicates a ‘hop count’."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      781.31,
      786.34
    ],
    "en": [
      "Each time the packet arrives at a router on the way to its destination, the router decreases"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      786.34,
      794.87
    ],
    "en": [
      "the TTL by 1, until the packet reaches its destination, or the TTL reaches 0 and the packet is dropped."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      794.87,
      799.48
    ],
    "en": [
      "The current recommended default TTL is 64."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      799.48,
      804.82
    ],
    "en": [
      "Next up is the Protocol field, which is also 8 bits in length."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      804.82,
      809.65
    ],
    "en": [
      "It indicates the protocol of the encapsulated Layer 4 PDU."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      809.65,
      816.95
    ],
    "en": [
      "Typically, this will be one of the following: TCP, which is indicated by a value of 6, or"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      816.95,
      820.65
    ],
    "en": [
      "UDP, which is indicated by a value of 17."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      820.65,
      828.29
    ],
    "en": [
      "I haven’t talked about TCP and UDP yet, but that I will make a dedicated video about them later."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      828.29,
      835.72
    ],
    "en": [
      "For now, try to remember their protocol numbers of 6 for TCP and 17 for UDP."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      835.72,
      842.6
    ],
    "en": [
      "You might also see a value of 1, which is used for ICMP, the protocol ping uses."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      842.6,
      849.86
    ],
    "en": [
      "Another one to remember is 89, which is OSPF, which stands for Open Shortest Path First."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      849.86,
      855.7
    ],
    "en": [
      "OSPF is a dynamic routing protocol which allows routers to learn routes to destinations from"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      855.7,
      859.86
    ],
    "en": [
      "their neighbors, without us having to manually configure the routes."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      859.86,
      867.39
    ],
    "en": [
      "We will cover OSPF in depth in this course, so for now just try to remember the protocol number of 89."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      867.39,
      873.12
    ],
    "en": [
      "If you’re curious, you can check a list of protocol numbers at this page on wikipedia."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      873.12,
      878.76
    ],
    "en": [
      "Don’t worry about memorizing any others, but try to remember these four."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      878.76,
      884.75
    ],
    "en": [
      "The included flashcards are extremely useful for remembering little facts like these."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      884.75,
      889.93
    ],
    "en": [
      "Next is the header checksum field, which is 16 bits in length."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      889.93,
      896.54
    ],
    "en": [
      "It is a calculated checksum used to check for errors in the Ipv4 header."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      896.54,
      901.32
    ],
    "en": [
      "When a router receives a packet, it calculates the checksum of the header and compares it"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      901.32,
      904.43
    ],
    "en": [
      "to the one in this field of the header."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      904.43,
      910.3
    ],
    "en": [
      "If the newly calculated checksum and the checksum in the IPv4 header do not match, it means"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      910.3,
      915.87
    ],
    "en": [
      "that an error has occurred in transmission, so the router drops the packet."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      915.87,
      922.01
    ],
    "en": [
      "Note that this is only used to check for errors in the IPv4 header, not in the encapsulated data."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      922.01,
      926.55
    ],
    "en": [
      "IP relies on the encapsulated protocol to do that."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      926.55,
      933.07
    ],
    "en": [
      "Both UDP and TCP, the two Layer 4 protocols most likely to be encapsulated, have checksum"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      933.07,
      936.89
    ],
    "en": [
      "fields to check for errors in the encapsulated data."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      936.89,
      944.81
    ],
    "en": [
      "Okay, next up are the Source and Destination IP Address fields, which I covered in detail already."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      944.81,
      952.23
    ],
    "en": [
      "As you already know, they are 32 bits in length each, as that is the length of an IPv4 address."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      952.23,
      958.89
    ],
    "en": [
      "The source IP address field indicates the IPv4 address of the sender of the packet."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      958.89,
      966.18
    ],
    "en": [
      "The destination IP address field indicates the IPv4 address of the intended receiver of the packet."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      966.18,
      974.19
    ],
    "en": [
      "Finally, the options field, which is optional and can be 0 bits in length if not used, or"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      974.19,
      978.92
    ],
    "en": [
      "up to 320 bits, 40 bytes, in length."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      978.92,
      984.86
    ],
    "en": [
      "This field is rarely used, however if the IHL, Internet header length, field is greater"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      984.86,
      989.26
    ],
    "en": [
      "than 5, is means that options are present."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      989.26,
      993.97
    ],
    "en": [
      "Here is a chart from Wikipedia showing the structure of the Options field, you can check"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      993.97,
      1000.18
    ],
    "en": [
      "it out or read more online if you’re interested, but for the purposes of CCNA studies I don’t"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1000.18,
      1002.71
    ],
    "en": [
      "think you need to worry about it."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1002.71,
      1007.33
    ],
    "en": [
      "Okay, now we’ve covered all of the fields of the IPv4 header."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1007.33,
      1011.9
    ],
    "en": [
      "It’s a bit more complicated than the simple Ethernet header and trailer we already learned"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1011.9,
      1016.82
    ],
    "en": [
      "about, but hopefully you understand the purpose of each field now."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1016.82,
      1022.581
    ],
    "en": [
      "For the purpose of the CCNA, I think the information presented in this video is sufficient, but"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1022.581,
      1028.55
    ],
    "en": [
      "of course feel free to read more, a simple Google search will give you many good resources."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1028.55,
      1034.459
    ],
    "en": [
      "Also don’t forget to use the Anki flashcards to help you remember everything."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1034.459,
      1039.339
    ],
    "en": [
      "Now let’s go in depth and analyze a packet capture from Wireshark."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1039.339,
      1044.64
    ],
    "en": [
      "I showed you Wireshark before, and its an extremely useful tool both for learning, and"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1044.64,
      1047.27
    ],
    "en": [
      "also in the real world to troubleshoot problems."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1047.27,
      1053.07
    ],
    "en": [
      "This isn’t a wireshark course, but I will show you wireshark at various points in this"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1053.07,
      1059.77
    ],
    "en": [
      "course, and if you have a lab with real Cisco equipment, or a virtual lab using GNS3, I"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1059.77,
      1064.07
    ],
    "en": [
      "highly recommend you use Wireshark to examine network traffic like this, it will really"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1064.07,
      1066.46
    ],
    "en": [
      "help you in your studies."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1066.46,
      1071.61
    ],
    "en": [
      "But in either case, I will show you Wireshark packet captures in this course, so don’t"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1071.61,
      1073.92
    ],
    "en": [
      "worry if you aren’t able to use it yourself."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1073.92,
      1083.19
    ],
    "en": [
      "So, I sent a ping between two routers, notice under the INFO column it says echo (ping) request."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1083.19,
      1088.98
    ],
    "en": [
      "I have selected the frame here, meaning the entire frame and you can see down here that"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1088.98,
      1091.5
    ],
    "en": [
      "the entire frame is highlighted."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1091.5,
      1096.64
    ],
    "en": [
      "These digits are a hexadecimal representation of the frame."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1096.64,
      1101.49
    ],
    "en": [
      "Now I highlighted the Ethernet header, and down at the bottom you can see only the Ethernet"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1101.49,
      1104.98
    ],
    "en": [
      "header section of the frame is highlighted."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1104.98,
      1112.61
    ],
    "en": [
      "Then I highlight the IP header, and at the bottom only the IP header section of the frame is highlighted."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1112.61,
      1118.78
    ],
    "en": [
      "Then I highlight the packet’s payload, which is Internet Control Message Protocol, or ICMP,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1118.78,
      1124.31
    ],
    "en": [
      "the protocol used by ping, and you can see the payload highlighted at the bottom."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1124.31,
      1132.71
    ],
    "en": [
      "In this video we’re focusing on the IPv4 header, so let’s expand the Internet Protocol Version 4 information."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1132.71,
      1139.16
    ],
    "en": [
      "Okay, so I’ve expanded the IPv4 header section and zoomed up a bit, and here you can see"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1139.16,
      1143.88
    ],
    "en": [
      "all of the fields we looked at in this video, except Options."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1143.88,
      1148.85
    ],
    "en": [
      "As I said, options are rarely used, and they aren’t in this packet."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1148.85,
      1155.49
    ],
    "en": [
      "First up, the Version field, and V you can see the binary bits 0100 on the left, and it shows"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1155.49,
      1158.78
    ],
    "en": [
      "you that means version 4."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1158.78,
      1162.34
    ],
    "en": [
      "Next is the header length which is the IHL field."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1162.34,
      1168.28
    ],
    "en": [
      "It has a binary value of 0101, which equals 5."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1168.28,
      1174.74
    ],
    "en": [
      "Remember, this field indicates the length in units of 4 bytes, so this value of 5 means"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1174.74,
      1177.98
    ],
    "en": [
      "a header length of 20 bytes."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1177.98,
      1185.68
    ],
    "en": [
      "That is the minimum header length, and it is the length of an IPv4 header with no options field."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1185.68,
      1191.44
    ],
    "en": [
      "Next up is the differentiated services field, and as you can see Wireshark categorizes both"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1191.44,
      1199.63
    ],
    "en": [
      "the DSCP, differentiated services codepoint, and ECN, explicit congestion notification,"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1199.63,
      1202.6
    ],
    "en": [
      "fields under this section."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1202.6,
      1206.92
    ],
    "en": [
      "Both are set to 0, as they are not being used."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1206.92,
      1209.59
    ],
    "en": [
      "Next up is the total length."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1209.59,
      1214.929
    ],
    "en": [
      "This represent the total length of the IP packet in bytes, including both the header"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1214.929,
      1217.77
    ],
    "en": [
      "and the ICMP data it encapsulates."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1217.77,
      1223.74
    ],
    "en": [
      "So, this 100 means that the total length is 100 bytes."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1223.74,
      1226.73
    ],
    "en": [
      "Next is the identification field."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1226.73,
      1229.76
    ],
    "en": [
      "This packet has an identification field of 5."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1229.76,
      1236.21
    ],
    "en": [
      "It’s not fragmented, but if it were fragmented, the other fragments belonging to this packet"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1236.21,
      1239.91
    ],
    "en": [
      "would also have a value of 5 here."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1239.91,
      1242.79
    ],
    "en": [
      "Next up is the flags field."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1242.79,
      1248.22
    ],
    "en": [
      "Notice that Wireshark also includes the fragment offset field under this section."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1248.22,
      1250.62
    ],
    "en": [
      "The reserved bit is always 0."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1250.62,
      1253.97
    ],
    "en": [
      "That’s what ‘not set’ means by the way."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1253.97,
      1260.45
    ],
    "en": [
      "I sometimes say ‘set to 0’ or ‘set to 1’, but another way of saying it is ‘not"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1260.45,
      1264.54
    ],
    "en": [
      "set’, which means 0, or ‘set’, which means 1."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1264.54,
      1272.42
    ],
    "en": [
      "The don’t fragment bit isn’t set, so this packet can be fragmented, if necessary."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1272.42,
      1278.55
    ],
    "en": [
      "The more fragments bit also isn’t set, which is expected as the packet isn’t fragmented."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1278.55,
      1285.59
    ],
    "en": [
      "The fragment offset field is also 0, which is also expected in a packet that isn’t fragmented."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1285.59,
      1290.8
    ],
    "en": [
      "Next is the Time to Live field, which is set to 255, the maximum."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1290.8,
      1299.15
    ],
    "en": [
      "Remember, the time to live field is 8 bits in length, and 255 is the maximum 8-bit value."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1299.15,
      1303.75
    ],
    "en": [
      "The protocol is ICMP, because I used ping."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1303.75,
      1307.92
    ],
    "en": [
      "Notice the protocol value of 1 which indicates this."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1307.92,
      1310.98
    ],
    "en": [
      "You can see the header checksum here."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1310.98,
      1314.32
    ],
    "en": [
      "Remember it’s a 16-bit value."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1314.32,
      1323.44
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
      1314.32,
      1323.44
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
      1323.44,
      1331.62
    ],
    "en": [
      "Here’s the source IP address, and finally the destination IP address."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1331.62,
      1336.98
    ],
    "en": [
      "The standard PING command on a Cisco router will send 100-byte pings, which is why the"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1336.98,
      1339.42
    ],
    "en": [
      "ping I showed you wasn’t fragmented."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1339.42,
      1349.59
    ],
    "en": [
      "But, I pinged once more, using this command ping 192.168.1.2 SIZE 10000, which will send"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1349.59,
      1355.08
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
      1349.59,
      1355.08
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
      1355.08,
      1359.1
    ],
    "en": [
      "So, this will cause fragmentation."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1359.1,
      1363.35
    ],
    "en": [
      "As you can see here, there are a bunch of IP fragments."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1363.35,
      1368.58
    ],
    "en": [
      "They all say ‘reassembled in #13’. What is #13?"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1368.58,
      1372.23
    ],
    "en": [
      "Well, it’s this ICMP echo request right here."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1372.23,
      1378.18
    ],
    "en": [
      "Now, let’s take a look at some of the IPv4 header fields in these fragments."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1378.18,
      1383.37
    ],
    "en": [
      "Okay, so these are the details of just the first two fragments."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1383.37,
      1390.06
    ],
    "en": [
      "First off, notice the total length of 1500 bytes, so this 10,000 byte ping was divided"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1390.06,
      1395.679
    ],
    "en": [
      "up into 1500 byte fragments, which is equal to the MTU size."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1395.679,
      1400.059
    ],
    "en": [
      "Then, notice the identification field of 1."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1400.059,
      1404.12
    ],
    "en": [
      "This is different than the last packet I showed you, but notice that the value is the same"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1404.12,
      1407.07
    ],
    "en": [
      "for these two fragments."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1407.07,
      1410.03
    ],
    "en": [
      "Then take a look at the flags."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1410.03,
      1417.25
    ],
    "en": [
      "Each of them has the more fragments bit set, because neither of these is the last fragment in the packet."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1417.25,
      1421.47
    ],
    "en": [
      "Also, notice that each of them has a different fragment offset value, however, and that the first"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1421.47,
      1425.0
    ],
    "en": [
      "fragment has an offset of 0."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1425.0,
      1430.58
    ],
    "en": [
      "Just one more thing, this time I sent a ping and set the don’t fragment bit by adding"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1430.58,
      1433.84
    ],
    "en": [
      "the ‘df-bit’ option to the ping command."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1433.84,
      1437.07
    ],
    "en": [
      "As you can see here, now the don’t fragment bit is set."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1437.07,
      1443.07
    ],
    "en": [
      "Because I didn’t set the size, the default ping size of 100 bytes was used, so it was"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1443.07,
      1446.67
    ],
    "en": [
      "no problem that these packets weren’t allowed to be fragmented."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1446.67,
      1454.87
    ],
    "en": [
      "However, if I send pings that are larger than the MTU, AND set the DF-bit, you can see the pings fail."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1454.87,
      1461.92
    ],
    "en": [
      "They were too large to be sent unfragmented, but also not allowed to be fragmented."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1461.92,
      1466.39
    ],
    "en": [
      "Before moving on to today’s quiz let’s review what we studied."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1466.39,
      1474.26
    ],
    "en": [
      "We looked at the structure of an IPv4 packet, more specifically the fields of the IPv4 header. That’s it."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1474.26,
      1477.96
    ],
    "en": [
      "It doesn’t look like a lot when you list it like this, but I’m sure you agree that"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1477.96,
      1480.3
    ],
    "en": [
      "was a lot of information."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1480.3,
      1485.09
    ],
    "en": [
      "In the next video we’ll get more practical and hands-on, getting into the CLI to see"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1485.09,
      1487.1
    ],
    "en": [
      "how to configure routes."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1487.1,
      1491.26
    ],
    "en": [
      "Okay let’s move on to today’s quiz."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1491.26,
      1495.89
    ],
    "en": [
      "In addition to the quiz, make sure to download and use the Anki flashcards to help you remember"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1495.89,
      1498.52
    ],
    "en": [
      "all of the details you learned in this video."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1498.52,
      1502.46
    ],
    "en": [
      "Let’s get started with question 1."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1502.46,
      1520.429
    ],
    "en": [
      "What is the fixed binary value of the first field of an IPv4 header? A, 0010. B, 0110. C, 0001. D, 0100."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1520.429,
      1527.309
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
      1527.309,
      1531.25
    ],
    "en": [
      "The answer is D, 0100."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1531.25,
      1535.429
    ],
    "en": [
      "The first field of the IPv4 header is the version field."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1535.429,
      1541.371
    ],
    "en": [
      "Because the question is about an IPv4, or Internet Protocol VERSION 4 header, the version"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1541.371,
      1546.059
    ],
    "en": [
      "field is always set to 4, or 0100 in binary."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1546.059,
      1549.99
    ],
    "en": [
      "let’s go to question 2."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1549.99,
      1565.73
    ],
    "en": [
      "Which field will cause the packet to be dropped if it has a value of 0? A, TTL. B, DSCP. C, IHL. D, ECN."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1565.73,
      1572.26
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
      1572.26,
      1575.01
    ],
    "en": [
      "The answer is A, TTL."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1575.01,
      1578.23
    ],
    "en": [
      "TTL stands for Time To Live."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1578.23,
      1582.64
    ],
    "en": [
      "It is reduced by 1 at each router the packet passes through."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1582.64,
      1585.52
    ],
    "en": [
      "If it reaches 0, the packet is dropped."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1585.52,
      1589.95
    ],
    "en": [
      "Let's go to question 3."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1589.95,
      1594.57
    ],
    "en": [
      "How are errors in an IPv4 packet’s encapsulated data detected?"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1594.57,
      1599.99
    ],
    "en": [
      "A, the IPv4 header checksum field checks for errors."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1599.99,
      1607.05
    ],
    "en": [
      "B, the encapsulated protocol, for example TCP or UDP, checks for errors."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1607.05,
      1612.22
    ],
    "en": [
      "C, Errors in the encapsulated data cannot be detected."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1612.22,
      1619.57
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
      1619.57,
      1624.71
    ],
    "en": [
      "The answer is B, the encapsulated protocol checks for errors."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1624.71,
      1630.44
    ],
    "en": [
      "The IPv4 Header Checksum field only checks for errors in the IPv4 header itself."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1630.44,
      1636.74
    ],
    "en": [
      "However, Layer 4 protocols like TCP or UDP can use their checksum to check for errors"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1636.74,
      1638.53
    ],
    "en": [
      "in the encapsulated data."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1638.53,
      1642.76
    ],
    "en": [
      "Let’s go to question 4."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1642.76,
      1657.429
    ],
    "en": [
      "Which field of an Ipv4 header is variable in length? A, options. B, header checksum. C, total length. D, IHL."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1657.429,
      1664.02
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
      1664.02,
      1667.16
    ],
    "en": [
      "The answer is A, Options."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1667.16,
      1672.32
    ],
    "en": [
      "The Options field can vary in length from 0 bits to 320 bits."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1672.32,
      1675.669
    ],
    "en": [
      "The other fields are fixed-length."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1675.669,
      1680.38
    ],
    "en": [
      "Although the Total Length and IHL fields are used to represent the variable length of the"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1680.38,
      1685.429
    ],
    "en": [
      "IPv4 header and packet, the fields themselves are fixed in length."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1685.429,
      1690.14
    ],
    "en": [
      "Let’s go to question 5."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1690.14,
      1696.84
    ],
    "en": [
      "Which bit will be set to 1 on all IPv4 packet fragments except the last fragment?"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1696.84,
      1700.36
    ],
    "en": [
      "A, fragment offset bit."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1700.36,
      1703.62
    ],
    "en": [
      "B, more fragments bit."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1703.62,
      1706.77
    ],
    "en": [
      "C, dont fragment bit."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1706.77,
      1710.41
    ],
    "en": [
      "D, packet fragment bit."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1710.41,
      1717.429
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
      1717.429,
      1721.07
    ],
    "en": [
      "The answer is B, more fragments bits."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1721.07,
      1727.04
    ],
    "en": [
      "The More Fragments bit, part of the Flags field of the IPv4 header, is used to indicate"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1727.04,
      1732.01
    ],
    "en": [
      "that the current fragment is not the last fragment of a fragmented packet."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1732.01,
      1737.64
    ],
    "en": [
      "It is set to 1 on all fragments except the last, which will set it to 0."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1737.64,
      1743.0
    ],
    "en": [
      "A, fragment offset, is a 13-bit field in the header, not a single bit."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1743.0,
      1749.15
    ],
    "en": [
      "C, Don’t fragment bit, is used to prevent a packet from being fragmented."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1749.15,
      1754.85
    ],
    "en": [
      "And D, packet fragment bit, is not a real bit in the IPv4 header."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1754.85,
      1758.76
    ],
    "en": [
      "Okay, that’s all for the quiz."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1758.76,
      1763.95
    ],
    "en": [
      "Remember to use the supplementary materials to help you remember what you’ve studied."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1763.95,
      1767.67
    ],
    "en": [
      "There will be Anki flashcards to help you review what you’ve studied."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1767.67,
      1772.47
    ],
    "en": [
      "For a video like this, I think the flashcards are particularly important, so remember to"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1772.47,
      1775.29
    ],
    "en": [
      "download and use them."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1775.29,
      1779.21
    ],
    "en": [
      "There will be a packet tracer lab for routing, but not after this video."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1779.21,
      1786.35
    ],
    "en": [
      "Wait until after day 11’s video to get some hands-on practice configuring routing on a Cisco router."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1786.35,
      1789.51
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
      1789.51,
      1790.57
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
      1790.57,
      1795.0
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
      1795.0,
      1798.33
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
      1798.33,
      1801.21
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
      1801.21,
      1808.429
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
      1808.429,
      1808.429
    ],
    "en": [
      "That's all for now."
    ],
    "ru": [
      ""
    ]
  }
]