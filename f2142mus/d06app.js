$(() => {

    
    
    var audio = $('.audio')[0]
    let textArea = $('#id_text')
    let log1 = $('.log1')

    let timerId = null
    let pause = true
    let current = 0

    // textArea.text('1  2  3  4  5')
    textArea[0].value = '1  2  3  4  5'


    startTimer()
    create()

    function create(){
        let items = [
            {
                "num": 20,
                "name": "FREE CCNA Lab 020_ Review Configuration Lab 1.mp4",
                "link": "https://drive.google.com/uc?export=view&id=1PHHi7-8Se2YfaX_XtGYhwAAfRrjYSQdV"
              },
              {
                "num": 21,
                "name": "FREE CCNA Lab 021_ Review Troubleshooting Lab 1.mp4",
                "link": "https://drive.google.com/uc?export=view&id=1x9-swoiHr1NodhkaqSeHdiu9d9GYKhWj"
              },
              {
                "num": 22,
                "name": "FREE CCNA Lab 022_ Telnet _ VTY lines.mp4",
                "link": "https://drive.google.com/uc?export=view&id=107HBhgdHPE9f3Peiem_euSyv0lGENSBi"
              },
              {
                "num": 23,
                "name": "FREE CCNA Lab 023_ SSH _ VTY lines.mp4",
                "link": "https://drive.google.com/uc?export=view&id=1ncrfhydiNEouhSrfZDHBgFnc8ZYU7W18"
              },
              {
                "num": 24,
                "name": "FREE CCNA Lab 024_ Static Routing (Part 1).mp4",
                "link": "https://drive.google.com/uc?export=view&id=1Vl38H2PGyi6o1X9FVdkECGBTMp9Cj2GY"
              },
              {
                "num": 25,
                "name": "FREE CCNA Lab 025_ Static Routing (Part 2).mp4",
                "link": "https://drive.google.com/uc?export=view&id=1dwLRIfi1tlt0UAw7lLbF_Df4CFT0BRHH"
              },
              {
                "num": 26,
                "name": "FREE CCNA Lab 026_ Static Routing (Part 3).mp4",
                "link": "https://drive.google.com/uc?export=view&id=1Lj05gPG31eD3mGSmVc3f86o95OITuGIe"
              },
              {
                "num": 27,
                "name": "FREE CCNA Lab 027_ RIP (Part 1).mp4",
                "link": "https://drive.google.com/uc?export=view&id=1WFu2YBkEWlFM5GDr9OTo-a52xhnjjvIs"
              },
              {
                "num": 28,
                "name": "FREE CCNA Lab 028_ RIP (Part 2).mp4",
                "link": "https://drive.google.com/uc?export=view&id=10bmTjMtvdPHOO_yM0fKHkSBEphTd2AQI"
              },
              {
                "num": 29,
                "name": "FREE CCNA Lab 029_ Standard ACLs (Access Control Lists Part 1).mp4",
                "link": "https://drive.google.com/uc?export=view&id=1XblPVtccIO6d0foXeN1MNfECl73QDjoS"
              },
              {
                "num": 30,
                "name": "FREE CCNA Lab 030_ Extended ACLs (Access Control Lists Part 2).mp4",
                "link": "https://drive.google.com/uc?export=view&id=1QSkqDjRYw3laWOh9yFA_fCIPPZ54AMB-"
              },
              {
                "num": 31,
                "name": "FREE CCNA Lab 031_ Named ACLs (Access Control Lists Part 3).mp4",
                "link": "https://drive.google.com/uc?export=view&id=1nji97l8HT1hyELMCKwRk38KEu8ZsfVLD"
              },
              {
                "num": 32,
                "name": "FREE CCNA Lab 032_ NTP (Network Time Protocol Part 1).mp4",
                "link": "https://drive.google.com/uc?export=view&id=1yMthIb41Wz4gegiBJ5Yt2OEI6QqRlnEh"
              },
              {
                "num": 33,
                "name": "FREE CCNA Lab 033_ NTP (Network Time Protocol Part 2).mp4",
                "link": "https://drive.google.com/uc?export=view&id=1fRzks2T_P5NYCZcgZtGcTuF6Nj4uUerH"
              },
              {
                "num": 34,
                "name": "FREE CCNA Lab 034_ LLDP (Link Layer Discovery Protocol).mp4",
                "link": "https://drive.google.com/uc?export=view&id=1788LrRVVzEWr-Px85nuUjvy7H6dnFdoq"
              },
              {
                "num": 35,
                "name": "FREE CCNA Lab 035_ DHCP (Dynamic Host Configuration Protocol).mp4",
                "link": "https://drive.google.com/uc?export=view&id=1F3taYYDfvr_mhU_SWeaO_n_z0SXOpCEg"
              },
              {
                "num": 36,
                "name": "FREE CCNA Lab 036_ DNS (Domain Name System).mp4",
                "link": "https://drive.google.com/uc?export=view&id=15FpwhaUD90LxyXNNFwpmH3mMxzYV4Wfn"
              },
              {
                "num": 37,
                "name": "FREE CCNA Lab 037_ Static NAT (Network Address Translation).mp4",
                "link": "https://drive.google.com/uc?export=view&id=1a9mPkFxdNeOrT_vyWSKAS01C4VCDI83Q"
              },
              {
                "num": 38,
                "name": "FREE CCNA Lab 038_ Dynamic NAT (Network Address Translation).mp4",
                "link": "https://drive.google.com/uc?export=view&id=1-3ZDhGSwb0mtrbSHvdeuHol6JFaGq6iX"
              },
              {
                "num": 39,
                "name": "FREE CCNA Lab 039_ PAT (Port Address Translation).mp4",
                "link": "https://drive.google.com/uc?export=view&id=1aVNxnj0HYmsMYyO3MiajZ_dE2vaEhkNg"
              },
              {
                "num": 40,
                "name": "FREE CCNA Lab 040_ Syslog.mp4",
                "link": "https://drive.google.com/uc?export=view&id=1njnsu906rq5AWUkVaGDj84Q_BQ-MlSIQ"
              },
              {
                "num": 41,
                "name": "FREE CCNA Lab 041_ Password recovery, configuration backup, IOS upgrade.mp4",
                "link": "https://drive.google.com/uc?export=view&id=1kUTlY-ZhXk6lwaJER96MM11ZMFuTnSUR"
              },
              {
                "num": 42,
                "name": "FREE CCNA Lab 042_ IPv6.mp4",
                "link": "https://drive.google.com/uc?export=view&id=1FTNiPVD13cGMeX8krU_vXkmLJc88NE4g"
              },
              {
                "num": 43,
                "name": "FREE CCNA Lab 043_ Review Configuration Lab 2.mp4",
                "link": "https://drive.google.com/uc?export=view&id=1LabmTkzjus6G0vVwacx4uQf6mexWSHbk"
              },
              {
                "num": 44,
                "name": "FREE CCNA Lab 044_ Review Troubleshooting Lab 2.mp4",
                "link": "https://drive.google.com/uc?export=view&id=1rvbFvWcqWX8Cj8tLr1IYAup0XLpNU5tV"
              },
              {
                "num": 45,
                "name": "FREE CCNA Lab 045_ DTP _ VLANs.mp4",
                "link": "https://drive.google.com/uc?export=view&id=1lWaH0cGKeFr3boyahVegUFS2_T3inJTu"
              },
              {
                "num": 46,
                "name": "FREE CCNA Lab 046_ VTP (VLAN Trunking Protocol).mp4",
                "link": "https://drive.google.com/uc?export=view&id=1CXQhziqA1JpTHSc1S7xZfmhOCVzzitdk"
              },
              {
                "num": 47,
                "name": "FREE CCNA Lab 047_ VTP _ VLAN Troubleshooting.mp4",
                "link": "https://drive.google.com/uc?export=view&id=1Tggld5wGi2Fw5UhvDtQoWhV8dAZ-ksBc"
              },
              {
                "num": 48,
                "name": "FREE CCNA Lab 048_ STP (Spanning Tree Protocol).mp4",
                "link": "https://drive.google.com/uc?export=view&id=1rshv9sSrRAUkkl-WpL6jCZ8i8ZJx3JJJ"
              },
              {
                "num": 49,
                "name": "FREE CCNA Lab 049_ STP Election (Spanning Tree Protocol).mp4",
                "link": "https://drive.google.com/uc?export=view&id=1bMkEwuVz8hcpgLiLPl93trwhq-pDVrxk"
              },
              {
                "num": 50,
                "name": "FREE CCNA Lab 050_ EtherChannel.mp4",
                "link": "https://drive.google.com/uc?export=view&id=1TVC2RfwQL23bWri0aLwVKw6IB9vt3BZY"
              },
              {
                "num": 51,
                "name": "FREE CCNA Lab 051_ EtherChannel Troubleshooting.mp4",
                "link": "https://drive.google.com/uc?export=view&id=1MqkDPtZ1cNly1l3use36y8M_4Kbu2ATv"
              },
              {
                "num": 52,
                "name": "FREE CCNA Lab 052_ InterVLAN Routing (SVI, Router on a Stick).mp4",
                "link": "https://drive.google.com/uc?export=view&id=1IixNril6veetbZ6UEAdMriM0HtCT2frX"
              },
              {
                "num": 53,
                "name": "FREE CCNA Lab 053_ InterVLAN Routing Troubleshooting.mp4",
                "link": "https://drive.google.com/uc?export=view&id=1YPueo1Ec26mfBT8U9S4DaOfWrAMRUYjp"
              },
              {
                "num": 54,
                "name": "FREE CCNA Lab 054_ OSPF (Part 1_ Single Area).mp4",
                "link": "https://drive.google.com/uc?export=view&id=13pljKxmTLkibC7Ytp3sg0lNvWL_dPxCH"
              },
              {
                "num": 55,
                "name": "FREE CCNA Lab 055_ OSPF (Part 2_ Multi-Area).mp4",
                "link": "https://drive.google.com/uc?export=view&id=1pDJbUzHL9sS5liZ2eRqL3aEIq2j_UUOK"
              },
              {
                "num": 56,
                "name": "FREE CCNA Lab 056_ OSPF Troubleshooting.mp4",
                "link": "https://drive.google.com/uc?export=view&id=1Ov_M6UWHc3mkxajmnVhbgvlO9V5ed-R8"
              },
              {
                "num": 57,
                "name": "FREE CCNA Lab 057_ OSPFv3 for IPv6.mp4",
                "link": "https://drive.google.com/uc?export=view&id=1an2KlMDGYisuOtvdthbTFQKgw5ENg-et"
              },
              {
                "num": 58,
                "name": "FREE CCNA Lab 058_ EIGRP.mp4",
                "link": "https://drive.google.com/uc?export=view&id=1epbjDRxz_mdB1GpqL-2xw-syCP1cVOXd"
              },
              {
                "num": 59,
                "name": "FREE CCNA Lab 059_ EIGRP Troubleshooting.mp4",
                "link": "https://drive.google.com/uc?export=view&id=1fKODwmoXZnVmKXj6gQkKYf8TA5PQv7y4"
              },
              {
                "num": 60,
                "name": "FREE CCNA Lab 060_ EIGRP for IPv6.mp4",
                "link": "https://drive.google.com/uc?export=view&id=1Bhd0Z5O6YwEPovbkUEsCq6BXVYKvbWol"
              },
              {
                "num": 61,
                "name": "FREE CCNA Lab 061_ PPP with PAP and CHAP Authentication.mp4",
                "link": "https://drive.google.com/uc?export=view&id=1VfyZdVL4pmmWCFsLvQz4xGNznPrSXnI6"
              },
              {
                "num": 62,
                "name": "FREE CCNA Lab 062_ PPP Troubleshooting.mp4",
                "link": "https://drive.google.com/uc?export=view&id=1wu_RuZwgYkiR4WdWyBKY-CkqBpijMaDJ"
              },
              {
                "num": 63,
                "name": "FREE CCNA Lab 063_ MultiLink PPP.mp4",
                "link": "https://drive.google.com/uc?export=view&id=1Az0I0GE7p0ko7Nuew6UDJTyslew6GTO7"
              },
              {
                "num": 64,
                "name": "FREE CCNA Lab 064_ PPPoE.mp4",
                "link": "https://drive.google.com/uc?export=view&id=1a0k5qFM4dCSG6pkQy2MIvcl-iscnCn66"
              },
              {
                "num": 65,
                "name": "FREE CCNA Lab 065_ GRE.mp4",
                "link": "https://drive.google.com/uc?export=view&id=1ESgDzVwpLb2AcOAjnDWB6xYv95P2mknz"
              },
              {
                "num": 66,
                "name": "FREE CCNA Lab 066_ GRE Troubleshooting.mp4",
                "link": "https://drive.google.com/uc?export=view&id=1_7hiXc-7TRrtIbvC_rMhXhpivQx9X-1H"
              },
              {
                "num": 67,
                "name": "FREE CCNA Lab 067_ BGP.mp4",
                "link": "https://drive.google.com/uc?export=view&id=1SHDd_8rsmkM-CHmfYoxbtlpOMsnj1wMT"
              },
              {
                "num": 68,
                "name": "FREE CCNA Lab 068_ BGP Troubleshooting.mp4",
                "link": "https://drive.google.com/uc?export=view&id=1Kz12PKjfqdunHzwF8SG4CIVVgyoqE_jC"
              },
              {
                "num": 69,
                "name": "FREE CCNA Lab 069_ HSRP.mp4",
                "link": "https://drive.google.com/uc?export=view&id=1e5hDf-zI7HxGnXM5io0THG8z7G588q20"
              },
              {
                "num": 70,
                "name": "FREE CCNA Lab 070_ HSRP Troubleshooting.mp4",
                "link": "https://drive.google.com/uc?export=view&id=1_B0YRCVm8ew4e6n30mUK2UySRWi_adiq"
              },
              {
                "num": 71,
                "name": "FREE CCNA Lab 071_ IPv4 and IPv6 ACLs.mp4",
                "link": "https://drive.google.com/uc?export=view&id=1Y4WVo3easHdoARZ-WX6BvzVqX9xaEUzC"
              },
              {
                "num": 72,
                "name": "FREE CCNA Lab 072_ ACL Troubleshooting.mp4",
                "link": "https://drive.google.com/uc?export=view&id=16BKxm4OLIWoiZXpm-fZhLu_Rk33D4yYW"
              },
              {
                "num": 73,
                "name": "FREE CCNA Lab 073_ SPAN.mp4",
                "link": "https://drive.google.com/uc?export=view&id=1S0iW8mre4oZPyZIKBEiCec_MRf2aPDNE"
              },
              {
                "num": 74,
                "name": "FREE CCNA Lab 074_ IP SLA.mp4",
                "link": "https://drive.google.com/uc?export=view&id=1rZn2hWIpnObFtP22MWWTUh7mPgtT6vHF"
              },
              {
                "num": 75,
                "name": "FREE CCNA Lab 075_ Review Configuration Lab 3.mp4",
                "link": "https://drive.google.com/uc?export=view&id=1k9gHbIQagSBOUYn52BEyE141Sg-_N0vL"
              },
              {
                "num": 76,
                "name": "FREE CCNA Lab 076_ Review Troubleshooting Lab 3.mp4",
                "link": "https://drive.google.com/uc?export=view&id=1AqHDpSY-ylnP_LSaeAWiTXOjIvSXY-ry"
              }
                    ]
        let buttons = $('.container_radio')

        let n = 3
        let s = `${n}`.padStart(2, '0')
        $('.which_button').text('k05'.substring(1))

        items.forEach((item) => {
            let but = $('<button></button>')
            let n = item.num
            let name = 'k' + `${n}`.padStart(2, '0')
            but.addClass(name)
            but.text(name)

            buttons.append(but)

            but.click((e) => {
                let ee = $(e.target)
                let name = ee.text()
                let num = parseInt(name.substring(1))
                $('.which_button').text(name)
                let clickItems = items.filter(ec => ec.num == num)
                let clickItem = clickItems[0]

                $('.audio').attr('src', clickItem.link)

                // console.log(clickItem.link)
            })


        })
    }

    function startTimer(){
        if(timerId){
             clearTimeout(timerId)
        }
        timerId = setInterval(() => {
            current = audio.currentTime
            let t1 = ' play'
            if(audio.paused){
                pause = true
                t1 = ' pause'
            }else{
                pause = false
            }
            $('.log2').text('' + current)
            $('.display').text( ' '
            + timeToMinut(current)+ '  ' + Math.floor(current) + t1)
        }, 500)
    }

    function timeToMinut(time){
        let t2 = 0 
		//time = Math.float(time)
		t2 = Math.floor(time/60) + ':' 
        + Math.floor(time%60)
        return t2

    }

    function appendText(text){
        let txt = $('#id_text')[0].value

        // $('#id_text').append(' ' + text)
        $('#id_text')[0].value = txt + ' ' + text
    }


    $('.btn_play').click(() => {
        pause = pause ? false : true
        if( !pause){
            audio.play()
        }else{
            current = audio.currentTime 
            // $('.log2').text('' + current)
            // $('.log2').text('' + timeToMinut(current))
            appendText(timeToMinut(current) + ' ' + current.toFixed(6))
            audio.pause()

        }
    })

    $('.btn_big_play').click(() => {
        pause = pause ? false : true
        if( !pause){
            audio.play()
        }else{
            current = audio.currentTime 
            // $('.log2').text('' + current)
            // $('.log2').text('' + timeToMinut(current))
            appendText(timeToMinut(current) + ' ' + current)
            audio.pause()

        }
    })



    $('.btn_back').click(() => {

        audio.currentTime -=1 
        current = audio.currentTime
    })

    $('.btn_big_stop').click(() => {

        audio.currentTime -=1 
        current = audio.currentTime
    })

    

    $('.btn_toward').click(() => {

        audio.currentTime +=1 
        current = audio.currentTime
    })

    audio.addEventListener('play', function(ev){
        pause = false
    });
        
    audio.addEventListener('pause', function(ev){
        pause = true
        current = current.toFixed(6)
        // appendText(timeToMinut(current) + ' ' + current)
        navigator.clipboard.writeText(current + ' ')

    });

    $('.copy').click(() => {
      let text  = textArea[0].value
      log1.text(text)

    })
        


})