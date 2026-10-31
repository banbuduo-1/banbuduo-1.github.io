// ============================================================
// 书签数据配置文件（ES Module 版本）
// 说明：换 token / 加线路 / 加账号，编辑本文件即可。
// ============================================================
// 【如何更换过期链接】
//   在下方 groups 中找到对应账号，直接整体替换其 url 即可
//   （新链接从浏览器地址栏复制，带完整 https:// 前缀）。
//
// 【如何新增一条线路（域名）】
//   在 lines 数组末尾追加一项，例如：
//   { "id": "xx", "name": "新域名", "host": "xxx.example.com", "path": "/login.php", "color": "#f59e0b" }
//   path 表示登录入口路径，不同线路可能不同（/login.php 或 /dldl 等）。
//   账号的默认线路会根据 url 中的域名自动匹配 lines 里的 host，
//   无需手动指定；匹配不到时回退到第一条线路。
//
// 【如何新增账号】
//   在某个 groups 项的 accounts 数组里追加：
//   { "name": "新账号", "url": "https://域名/login.php?gid=...&token=...&time=...&sign=..." }
// ============================================================
export default {
  "lines": [
    {
      "id": "1",
      "name": "50pk",
      "host": "dldl.50pk.com",
      "path": "/login.php",
      "color": "#22c55e"
    },
    {
      "id": "2",
      "name": "z7xz",
      "host": "app.xxh5.z7xz.com",
      "path": "/login.php",
      "color": "#3b82f6"
    },
    {
      "id": "3",
      "name": "七兔",
      "host": "7tu7tu.com",
      "path": "/dldl",
      "color": "#f97316"
    },
    {
      "id": "4",
      "name": "新玩",
      "host": "xinwan.xinwanwl.com",
      "path": "/login.php",
      "color": "#a855f7"
    }
  ],
  "groups": [
    {
      "name": "大号",
      "accounts": [
        {
          "name": "大鬼",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64MTAzYU9LNTB2bVlEYmpER2VUY2s4WktwbDFnakw0T2JLSzkrV3lQMjVyUm5PTFZJWXZPdzhvakhYNHdGekQ4emo5Q2U4OXRzcTNwYzJPS3VDVnJIaGptRm5MeDZiL0UyanpJUS9JNXVyYjZ2TnIrVXdpWWt6OFV6dDFrQ01INWJ0Z0xBZ1o0Q3BEUUV3eTNhbWtKOS91QzZWbXZaRTdjb0d3SWl4T3NuT0RUUFBmeW1Lay93UFF5MnRWMlZUZCtiMUVSbEZlYzB3ZEhMRmlMck5kd01najg0dDdzM3RvR2J3c0dCR0ZkZVZMUFJvb3F3amxzSEwwUTNWa25uMno5b1pDbW9CTVlLZ2J5NmtsWThwM0ZNc1NuSA==&time=1793418576&sign=6f5ab678708d85c7339ae12ca50718be&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "霸气",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64NmYzN0pCVWVEbWVKZTNSS3Bta2x6MURBOWovbUVNMFc2VVM1cWhoTnVwZ0lETTQxREg3K2pJZ3haUEpkZWlGYnJYOGRPc3JkbDk4T284ekdOVjFBanBib0JPREFucXNOemM1UmZkUnNPeERGQjNLVEhIeFZraWRIYmFtSmt4L1FqZWo5eXZIdWZjaGJkSWpvVFB6akUySTNTbTVNcjEvdmUyQko4MGtsZHMxK01xM0NQcG9xTzBiWkhDcDFZN2pxY2pxeVQ4bHZramtBdXM4amdXNGxVTXd2S0xVYmtVbE5YKzNPZEx1MW5CQUQrNzh2dFdKUFJUcUM2N2t4Z3RVQXlCeXRTYUE2MVpKa1QwTzVhdnVt&time=1793418723&sign=68e581d893b19a92e734c2a03e0cff2c&appVer=1020&platCode=37wan&IMEI=356597838607247&isPcLauncher=true"
        },
        {
          "name": "辞风",
          "url": "https://dldl.50pk.com/login.php?gid=1002997&pid=1&token=BASE64MjEzNElmTnZ1cVJRRFBSVzNlSWg0b1ppR0xOaWdQOXJEQ2hCeTAzSWhFOEdVWDNaZmVkcUg3VmZIVlhucUp4ZjRMenZuaFBtNUQycGhkUlJrVDgxMUNrVW4vY1ZQZUJYbkllb3lidHNGbEJFK3QxUmc0Mm95V09zSmtWQnl4UmN1a3ExSnRnSXI0ZG5ETjAwWHdzZ1pMN0doVnl2UkVmYzMvRFNkVW5QaUJ1bGI4L0VPbUpFV0d6SDhPcU1vSmdnWlhxRGJGa1hzV1ZBa2RaV3lUUVZxSVcwRC85MmdKRURRaTlZaVhWYjB1ZkhYbDVTd0xpRHBmN2JDM1lGYU5sZXdUSTJSRytwckhHTE8yUC85MkM3&time=1791655908&sign=9b51bd290a4b19582d1554ff38b016b3&appVer=1020&platCode=37wan&IMEI=356597838607247&isPcLauncher=true"
        },
        {
          "name": "中鬼",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64NGIyNFRyOWVaTzZhOEQrcTVqMk9TU3FJL2pLRTlkZm1SUVdxRGVzZ3V1SFFlWlJjMnEwWmljdldKbVc2dG1ZZ2Q5QmZwSG0wSUV5blg3Vzd5VTRFTmdydVdWNUNFVVdEODVzQldNYWcvYUJqZk9qTm1ETmhTamdTTTZQVXhMWXVJTGtkZDY0Ui9YRWZnbFZGbGhQQVRoU0RJSGIrQXB4blVCeDdId0tIeDdrbE9GTWlRWHpSOTRiMVkvcWFxYXVZWlpiSllhYVdXemtIVktHSk42M2F3K08zQ2h2MmJZVkoyQnRyTXZKWGRUcUVQUFljUVN5R044dUlyRk1aT20vVHFFSVk5djJhM3R1ZzNxdVJwK2Vw&time=1793418655&sign=79aa686ec297802ed62a8aceec1a1d96&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "火苗",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64ZWJhYlZSMVdrK2M3SU42YmFRT3A5UDNpSDhZRXJPOFlHVVVHV3NIZDgyWWdaOEJWa1NDZTZyTTlWZnVYVENVUVYzcUFqNE4xblpEWmtjVFM0REpIR3BTSWVvUlpHZi96T1RSV1Q5Rk5xYzhGVHlRM3k1eTV0OUFmbnVSZWZ5UEVySVRZMHg0V3o4YWpkOGM0UnpmSlNPT3E5UHAxMjJYRGRYY0xxZ0dWcnpFSDJQa2tWMU5NdVU1NytHVHN4eFRvRXEyTUYvcEROa0Y3QTVxYm1lTUpUSlIrTjNTSGs2SURiRVZwTVhIQUM2ODBGUEVOTmJFZHdDWG4yanVSdHQ4c1RkbkRGVmhJL2RPUzBEeit1VXEwS3VPWg==&time=1793418801&sign=0c9ddaacdc78b24e1b8956611a0ad642&appVer=1020&platCode=37wan&IMEI=356597838607247&isPcLauncher=true"
        },
        {
          "name": "兔子",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64YWIxMGxhK1lTcnZzMUlZVGdXRjhDME9DYjdPekgwN0xIRURlYi9aVkJJNk5US21MS0JJRjMrL05pd010T0lLL0lqbjFEMkp2eEpRQ0p4dSs3akZidEE0ckdXbHNIUk1meXpQNkorSG1WR1lwanFiVnVFTXVtM3c1b0Q4TExIRXpQT2tXS3FKd1lnbjJxOExhU1NSakRBVnBRSUtvUTlZaUYzSUtIRFdtbGw1anRLSStPVy9teVdOd1NpTUlWTUpmNE1QNHBWRFV1WDIrQ0hZcmZKb1NQS2dyVlh0N2dabjFxMk13bVFycnkySFhiU1ZUL2U2RG9Ncy9KYldNUFovQTEvMWRkekl6UklWZ2JnUTZxMU8v&time=1793418920&sign=cb85328d26429e063b40f6f3004bede5&appVer=1020&platCode=37wan&IMEI=356597838607247&isPcLauncher=true"
        },
        {
          "name": "小鬼",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64NGNmMklHREk1cXJMN1RoTEluSkxqbloyZVM5SkN1d2EvT2c5Umo1eTRPcDF3amNPM0pCbzZjVjQ0ZjVLK0V3TitJa2VHR1drTDZJSit0UXNvU2lUMnZsL1BhdWY3cGZEaHJMdEV1clIzSlcrWU5kUVh1eUswVkRXQlV0cmhmVC9GWTBwRFhRbklCcmZNNVYyNFk0ZkQrSTRreTE5TmJHdSt5SUJrZHhvNWs0U2JCdnZNMWoyYktpS3RlRysvZEU4OXM4dXZxaTZQRmhTdWtPc2QyZDQ1L3Q0T1dxaHZjbmNaZTdENnF5RnRKZTJRWEhSUUduOVBGeHBjWVc3UlZzMERwaHlsTFNuYW5KalkzNDcwZEV3&time=1793418779&sign=e5172d0bb120dd06aecef40cb6bd3713&appVer=1020&platCode=37wan&IMEI=356597838607247&isPcLauncher=true"
        },
        {
          "name": "厉害",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64MThiNmd0QUdQRG9XVU1KZHJQQkgrUmVqVXVvZEJ2eFpET3B1V0kwRTFUSmVuYUpkbTRsZUU2QkZyTndsU0FXbGhEL3JrWU9CVFpGRlE2MjNMcExJRjVvQWxqUFcveGszZS84V0xjQzVLV05TZ0p4UUZmQlh0VlBZN0lGYllQTUtodllrcG9hbi9YS202Wm80SlIxcVA5Sk1hU1Z2WlFrdkxtOW4rT0RZTEl3U29mdm9MU1VMUEJxNkM4WmRyQ1dnckV0QmVYTmh3TGQ2enk1T3JLeHRMZnJTYytJYlpxV0cwMFRmTitkSExaUzdMYU5mM2piZlV0UzIxTTgvaHZiWE0rbEdZSGd3MFU3djhiczhUVUh3&time=1793418819&sign=236258451ac9922b7bbac2e6b0bf733a&appVer=1020&platCode=37wan&IMEI=356597838607247&isPcLauncher=true"
        },
        {
          "name": "阡陌",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64MzYyMXRJY1dnQ0ZkU0tRa2dqc2pmUjhkZHowSDRhaVFFZllvbVlxYnpTM3JQNTNkRCs1bzNiczdnWGhlKzYwTkdsQUpMOEhsMUQ2d0NWbzdEYmxhS3RHa3lVWGdEOUdDLzRJVmpXNDBNMUVUcXpmMEpiVkNReWJsN3lZaEtraGM1aTZxYXo5T0h4YzJ0STU4YzljTHFaa0FjczdVcDNjelFkeE1qNFc4anBKdlZLazlJUnZSazBOTTlBZ2w1NGtuci9mVE5MeURKbm1DS3RsVTA3VGZFOFlpR0ttcnk3NDBqb3lJQmpxc290dHFtSkZzUVYzVjZGNHdnVk5WUFQxWHB6NGU0NlJFQkF6S0NDaFRJb1U1&time=1793418748&sign=d3d85d31f6ae112cd8cc71eba346ac44&appVer=1020&platCode=37wan&IMEI=356597838607247&isPcLauncher=true"
        },
        {
          "name": "雾",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64YmZlZTl0YkRLUlgyZFFVQWxPVjFONkZhdnFVcm1EZm9LZ25TbUJHakxtYWFvc0lFdmxvNmpQaC9kYzd6QXVtRVRaVjh0NDljanA0ZFNDZWd6NmpwQTdPZFBVeW56aUx2aUNSZzR3Mm9vLythMHp3dFhXOUZRYWVROHY5Z1h4UkQwVDMyNUJWL0JvYy9GR2hoQXBibUM2Q3N4MTErOWd5dlhicU1TREZ1WklGQUFDeHlBNGxCTm9ob2hublhwNCttaGdqOWRKNmZ5T1ZhMWw5bmZUT3dnY2svcnlNVVhzNk9CVFNkV1piRGY4Z3JVaFFLWnFqMm9rRlBJdS82b3lENURCbHRLM2YwMDRJYUpkMmxmVGVI&time=1793418876&sign=867d64b2776aaba121c2e83aa3072c9c&appVer=1020&platCode=37wan&IMEI=356597838607247&isPcLauncher=true"
        },
        {
          "name": "3137",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64MzkzZGdySUNBQjBXaWRUQzRjd0lPOEdMdDJFZ1hmRGVCYnNZckZuaEZYdkZUTDJpSklsV1B0TXVianZvMlgxQW9ZTXFIQkdLT0NjV3VwRjRvcnpNVUJ2OVBBUGRBamlxcHZ5SVpKazJJVi9MSUkzY0IrOTUwSXVTRUZreGgvSnlJN1BWa2NucmNFalV1cjgycVhueVNNS3pYKzMzRzNNcTJoYjJaQ1ZjMDVNZGZkT0NiemE1Qy9FR3RSOUxPYXlsSE9rOGJsTG1Zbnh5dlhEYkNzTzQyeXhxLzNHcFQrMjI5emlrRTliR0k5REZlcDhZdmRGdW5GalFtOHNwalNtSG9HMFZHQlJJcTliNlRjL2tyY2di&time=1793418899&sign=c0b2a9e0cc5afb95007eea46f93a059f&appVer=1020&platCode=37wan&IMEI=356597838607247&isPcLauncher=true"
        }
      ]
    },
    {
      "name": "小号",
      "accounts": [
        {
          "name": "可爱",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64NTMzZnhGQS9VUWxrNXNCcWJnWWFaT0tEMXVmbm5ic3V2SS9FSlcza3Jkek11MkFZeVcyZ2w2b1ByMzVybTd2eitwSjEvcnJhMDM1cFFIY3U3SlcyYlgydTlEejhsMmJ4Y1BaTysyMTVLK2VUREF0ZWRxV01GQmhhVDFPc1g4R1JMQmU0c1J4RWpRTVB2SjhWMWp6MlBLSlpGem0vL2U2NU96U0U0a0NaNkt2OVpRUVVpOWhEcDQ1c2d4cExScWVUUDduYUJhZnFWYkt5cEFXdTdtT0EzbFBhMW5PWFFhaWptWFY3SjAwa2FHVGV2Y2hWUzlCSGxRaG8yREVTcmR1KzFBWVAvZG5lODNZeDZ4Qk5NTjZW&time=1793419089&sign=8485b9a15d7b28d8fa17b4aeaf9cfffc&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "八倍",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64ODU1OXFBSDVQc3FkM3h1UnBIQnQvSDlhTXcxVnNSRlQwa21HOUxXaWpyNldXMTlXdXM0WEc2VThWQm12dGJRb3o3K1hwZlprRHl1MTRPOEdQaHZYdXpsV2Jidy9lRWQ3V3RQSk8yRElscDNwc3FLVkRVQ3Q2MkxqR2VqcFNmbi9uQ092TjVpV2tKMllZSSt6enc5SDBJNVdkRnN4NDJUdUlwb1FiOHp3cFRtbmxBZlhlazZEYVpiL29WZlQwSFYxclgyNStLdk1VSGFzQkwzblNDUGtKcGJiYmUwRFJOZ1RlYmt6cGw1VlFwWS9pZWptZmtlTEpNZHhTYzZIYUY3VExmRGZBeXc0N3J5cFcrcWFjM3dq&time=1793419116&sign=1293704380fd0b1799b6c5abc0f30852&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "鬼",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64NzA5ZFlBKzFRaDRha3ZCVHN3QVE4ZzUxa3cyMFAzN3FON29WQXpsZ3pMQ0srNTJVd3RYM3NmWHd0NEJ3ckdIb0JvU01MNjVPSkt2VmozSWxVYTAxODVzdjNsdHMxYjIxQWlZdkhINFFqMFFvQUh4cGJXY2ZOTXI2MTZQZTdib1dIdDNwTGJOUmJFbUxqRnJ4UW9JbnlRaVVwRm04Zk1UVkR2ZGNaN2d1dVdpWGRMNEE5QmlhSGlWMmpxdmc0Q2N2YzdqTGxXdFR1aDZTeklYUzFDeXJteU42Lzg5TnM3N0hsV1c4c3JkcHB1d1BMTklmVVVkMEFPNWsyNmFUays2MmNNb1llaFhUMW45RmsxbnB2SjJS&time=1793419140&sign=07398016a7f535f7c93a09c7f8eb2aaf&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "飘逸",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64YWVjNm9ONXpCMW83dFZhZmZiR2kyVi9kcnJYVXJ6bEt5RmJHRTNNa0l2SUxqRk1ObGFmMjVOeWtNVm1ldHdhMmcyZmxDL1B2VlVZTXBPcGZEYXZqMGtVQkFKUW93UmxaeDFMWUczM24wMVU4N2wvZXpPY1ovb2JIM2ErMDkvTmJJdkV2NFMwMVlMemRnRFRTMlkyVzM0MlVyR3hqRDFrenFqRmxyKzArU0RPcHUwSDJjMkJXOVluSmU2SlNVTmpEVG1oNTV5aUZFQ3VqKzBDczJnU0h3S1ZtOVdwUlg2RFBpRzFlOW8rRXhPSlF1VjJYT245ZGxHM3VjZFZScFdBSGZTeVk3Sk44V1ZLSGlaVHJXdERH&time=1793419160&sign=8754016e11ebbc4acfb1e5d47237716b&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "动情",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64MmYzZFJucmlhQnpyVHJZZ0dLZTFKc2VNRWtvdXhjbWJoTlcyRVVsclp2ZEkwVEUwb2VUeE90WmsrNWRORWhpQjdaTjdUMlY4RWJrakZiN3BxWFJJRmJWa0xoUG5oaXBkdURxSnFTYW1yUEZmcUJ3NXllZ3JXbFhHbmtlWjJYVzZKUWdNL1hRc2RVQ3RuWGczUVZvMGJaZmhVWU0vUXRyalhNRXFEakErNUhJQmtLaFpjMmU1em1xdk41aU9DU3BGazRnZGYrSkRMcGpMalFMeTI2cjRRNTk1THRQWXdOOHBOV3IySzB6bzRaNitxNUU5bjNqbWIyVUs1RDY4TjlMemRnUVUxaHVLcWJ6TGZjRFJNY3VJ&time=1793419199&sign=a6051da140ba8dfb780bac63a14f7b3f&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "潇洒",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64NzU2MUdrWllmSjE4MGhXVDVrNFRVM01wd29Ta3V0QzBWRDE5bXFVOUJiZmIxYm9COFUrQVVpaXFrekkrWnZ4YmNkKzRJMFpGZHFkUWE2UTRTMnY5RUxhdllWMXdBeEdSOWVwR3pYek0vbkd6RmU3TFBIbnptaDhweDNhS2duNkJnSzQ1VzRBWG1XWWZ0WU93NHJ1OHJhRUNydFNCVzdHd3RUZC9LanJ3eTJQaWdCTUhZbDJFTHBhU2VqUDB4M0pBTUhEQldzTjNxZ0dtQTZPOVFUTFhUa0hJN0RmMitaZ3QrU0Ira2ZDQWQ2WE9RYXkzVHMyN0hMZkwrMUlYMzQxdlEySGwxclhmQTYyaHU5TW1SRzZmK3NTLw==&time=1793419231&sign=cf70c132052fb9b795398c0f1e87358f&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "勤奋",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64NWY2NzcwRjZ4bXlJZmtVV0dUSzZSZ1JuSUh1Sk5rSnVPRW5Sb2JSQXVxWkxhSTJGTk5XVkNZcW10WHBtclFXcnQvd2g0K2prM2xTcGVWTEpQTWhSOGxnaVU3TVF2Qmp1WWs5czZmQWRVL3BFZkIxUmlEZ3E2RDFKQ0RqSFQraGdpbjFGaWxhM0QrakRSc1hpVHQrMnY0YkxMYUNQQlFkWVlSSDRwNEhPeDN5SHNCY0tJLzZNaHptYWZvY3hSeTFLdkxBWEVxTHpUUUlxSmt0K0ROTlFXQ1FwRnQ5dFE3YWhsYXNRMzRadTgweGxnL0pZMVBmV1VYRmJMeGU3WFkvUW1ESDlORU5MVlFYazFxQjE4NEIy&time=1793419251&sign=e47072f178a8ce532c77877345156bd4&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "毁灭",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64ZDAxZjRwbU5ncWpBZEVIMXYrQS9oSk1qeDdUOFJJMzI1MVhESU8rM1dyRFhyb0FSaE4wLy9Ia2tab0U4dXFtYWpTb25scC9kekN0L3RPZmxmR0NnaUprOFRsazFqSlh2RjM4NGpZQXY5WGlvOU1JRkQzc09rZk42MUVRc0wvMTB3MEZDNDZzT3gwSUZrcEszS0RiVlgweHlZc0lzaFpxeDJkVlJXMnhOd01xa2Z3alp3Tmg2c043SVpkQ1VoT2Ewb3VYRjdXTGpYOG1GOG9Takh6c1FkNVdqaGRsK0NQVjdsR2RaQ05kWmhmUDg0OWRYU1R0MjZVbGVnMkMwbHoxV29CMTFLdEszcFFvcUpDL3cvMndyZTRXdA==&time=1793419270&sign=42b9e88597cf2a0c3912623fac4725e1&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "绝美",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64MmYwMU5nb0IybEpnRGF2dzRRU25DRXcvc3dETytNNkozQjhTR0JiWS8vZmhuWkFTS3liaExRVE1KMWNGQU85cnVpdHd1bGhyeWVFaUVXWld6bGRZRk90NXBZOWJJbnUzNDdoNjN3MmhMMVNIV0FzZzhENjVXTWxqZU95eU9OYUZaSEtYN3Q3MktYbytRZFdFcTNkZy9jRENXc3h0djZjcGFVUW9ML3YzZ0RsSWJMbVZqeXU4NXpFTms4UXpZaktWcE9QQ1VUR1RGUENvSWxqMDFEcjIxbm9rU1pycFAyU1BKOWdKOE9ZZVMyNitzQ2R6U0VXNU1jakZKMExPV1VSTzJBY3lBbmxTYTNXM2FZNnRIT3JW&time=1793419312&sign=16fb347d4ebe4a2dc71a0ed0b84e4ae9&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "痴情",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64YTY2ZDBmQ3ZaY1dBOWdreDZGTERvZTF1UEhPRldEQ1RmYlIzUWhBSGEyNXV6d0REWHdLdHpkSTRESTBNTG9jQXd4ZW1OZUpXZlR6MW13UmNSVE0wUUw4MWhrTDZvWi9hbEdQMThsR0NwdGRDRE9RSm9FVzNURDVkUVkxQXlWSSt5SFRuQnJBa2hJb2k4RHlIdmhYMTBhVjVMT2l3ZFhGZ3F5UEd1dnZPM2FTMy90aXlhalJTNktoQnZhZ3R2QjJFanUzTVd3eldIUkZlL3JqeUM4VlcxT3pNbUNFZHBJWi94OFpDbnpKejNCcWlzck10dk5MRXZBWFYzZWVCTGJXNG11QnNwazl5cXhsYnBwSFZ5VVFmRTZtSw==&time=1793419335&sign=1bcbd88e4f54605301e0ab7d8b286c1d&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "迷情",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64NzU2NVlUOGljeUtyZmY1TlhXS1Zzd2toTEhwOXRDYzR0TzlySTFoUVA2Uml3ZEtZaHNwdE5QRno4ZTBYVmlpdnBDODNUYUlwNnhmYSt4WmhhcE03eVJHRGUvVGQreHFEN0VCUW1Jb1IwUGVXbjdrTjdPWmtpK3RKaUVjVUlNSU8vVDVaYmhYVm8rVmVaaUg4UVdwOVhKRjlYOXVySGIvZzVPRjBXNFhwbklhTm1XK2U2WW9OYk41V0xVS0JyYVdjT20remhXTjFHOVYwRnNiaUl5bEtCaTl0c2RRTjhoTkpONzJLdXptOXplMnRsalA4a01yY0ZMejEvb0lqcElxUDJpcytvaU92ekQwNzlrOHBNNmVm&time=1793419357&sign=23271339571d899632aaf987e4756331&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "炸天",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64ZGIzOW0xUWlRVmRoOWphNUZuTHRNaVRKcnFoUlNUbGdBbTBWb0JGd09VK3FKSUludVRwejVEWDA1Z0p1QlFPWm1tb2JpYnhTd3dLWlZlTFRxcXNuYjVwbTcwazlxcTF2dTlJV0JrSVFqSG92eG9UaVBuTXFTekIvS0FsUjVud3o1Z0NlTzFQTy9yMjlxOURYRnJjUGkrcUtNbFV1ZFg5eDVWczZCTUJ1OS9ldTlBRDhRWWhVRXBmb3M0aUF5OExDMTlkWUZCYXZGWXZmdTVMYndud0lOMTBoZkpacDdLd2xPOVFPT2tlYnhKbVRXZmNaL2pqNmxsU1NBODhjSmRuUHdRbHZmU2RLdktMZlBzU2Zzb01P&time=1793419378&sign=76f332dc999ac2f26f8a206c38bfd060&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "邪恶",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64Y2NiODM5Y3ZDSUpiVjRXQS9rY3A2bDZwQmYwekpiS2cvcmIwYTNuN2kxMG1sd29QcnJVZlBIV24zRnYwVE9BSmxiK2Y5dHVjdjZ3c3lSV0JrYU9SY08ra3YwbTgyS3dibDRYM3o5eDM1bG1VZk1lNllXOG02WEo4ZWtwSGxoK1ZsdC9kajA5V3AzdGZMWU5CcmNaZWJ0Sy9kM0ZZNElzS2RFYnczZVhpTWIyS0oxUmdYRXpNcGYzMGFXV09pOXowQVBMU0ErMWgwU2o4T0l6WGdZU3NnbHVZV2hMS21NU2Z5ZFdmSG5JNWFjazQ2N2VBVDhMNXJQQjVpTzUya3RoQk9UR2swZ2xpSHd1akd0V3lrTk5GMllXbw==&time=1793419400&sign=3e56ef6c3b6f1fc7571924f57f9986c2&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "内涵",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64MGQ5M1VsWm0zTy9zdmNsZGFNTkpQVk9ZWTZhWVlsSERuR1EwWnU1bmwySzl1OWxSckFscHg1aG8xbEpCdytHS1E3a210Q3ROUi9KdmFjTlJwaW1PY3BBakc4d2VMWG5rU3FrcFNlNm5wVFNiUmY3WDRhUVNHQmp2QlhtLzk3OENhNkpXMVhaS0h3K1ZmSWd3ZnlvQUFoUlh6ZDZ1Q3FiWUtBbE1acmVxL2t6MXMzNldzOExvcTJkTUNtNFJaNzFMSTBwYjJBWFNBMzRDT0JwMi9iVkhxd2ZVSS81ZTNxaW1NbFJodlBRS2xsczUwNW12NzZKVjFGVHJXWnoybnJhdUxHM3NGbVpYeEJtSFdFRXhOeU1SMlEwQw==&time=1793419420&sign=60b9d37c1b1734c4220dfcb31178a00b&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "温柔",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64MjMxODUyZ1U0TVFjendIRHhvcHovdnRyVEw4RjY5bjBlMUlpUnh2V3BNaGRuQmt6SzdoMitTd3Q3bDVqa04xbDYyWHBYdEx4b20wL2w4VnptaXlJY25BNC9NN01aaEZmamNENlpOUTZZUXQwNk9udlpMK1JieUVHVG9NUGdNNlZNL2dZZlo4SlZFaXUvMFF5dHNhU08wSXJvQ1BVaFRpTGdoNVpyejRBNVgzbWVhQVEzeUxXVXJVeCtEUzJQQjBnUlVhRlh0Unp0aGZNRnJFWm9KTW0yOFpMcVpGVGllZG15YldKczlCK0VqenUyRFFQbXllaWFWU0Y4NHovQW42bHpEaXZwTTNiUEtPd0ZBMC9wK3E1&time=1793419440&sign=0e1350698eee8c51423d50e7291bbcf0&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        }
      ]
    },
    {
      "name": "小号",
      "accounts": [
        {
          "name": "七罪",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64MjQ3MWdGN2JqelRiT1lQaUZhVUhmNmQwb1lqWnQ5M1BsbEJtSWwxSGlrYmdtWURjRlM4OXhCWHZDSGlHYXVaVzNucnE0NFF2b1F6bU8vUzkvZnlvSG4rMHZsSHA2R3hScmY3a081RVRtYVJsL0lVejVrWnJjU2JpMTZhT2JrelhteFZQWDF4LzFGcndMM2MvRTY1SnJhd2EwQjJwamlUWENQbnhtSjVCVHRiZ2hZMG0wZ0dIakNwY01nR3ZYMlZXbHBpUkJkbTh3N3NuNGNKWlc0VDhsclBmeGhlbXZkQ096ZEhGSUNWWk54TnBWS043N0pZZDB6ZUFxNWlVeit1MEFQV3J5NitKdkZmQXlKMldidkZL&time=1793419460&sign=3425cfae750361cae47967b03dd329fa&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "南宫",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64MWNjY0QyUzFYVG1vaVUvUENZdk8xdVpxUjN5cFpqSDhPMERYWEcrYWNUSjJiOHY3V1VMRmZjajVSY2RpUENxTWMzK25pYlA3TmNteDBraEtFRWpycmN5ODg3ZXYvTlVHQlBTTHBObmU2N3V4K1YzQTE0SnpoYUtsQUpmUldwQ2hQaWRTWVFiVFFSVkRvS01OTmlwRkk1cy9pWXNPQlUwSmphdzBsTW9hZWcwR2xZVVlBRUh2bWhydEZkaUI5RWJoSWdUbVRNRFBYclExZkZYMFdJVVA3OXdaQ0RZR3Z2cS9pd3ZKVFdjdGR3ZHJ5WFUzS016b1UvVW15dFA2K1ZuMU9VcXBMOURGOE83eVlwVEhiWHV0&time=1793419479&sign=10f7c4cef0044a6161a1c2914bfff5e0&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "九哥",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64ZTQ4NXBnVXZ1NEpydmFTYUNtTnA5dlMzLy93c3JwWWpnZit4OUR5aWJrNEYvd20vei93Nkk5cXJsbVpMZkMxRXpiQ0N0NWNGaVRZWnAyU0g3ZmJwcy9oekNqb0QycDQ0cFNRTGVaZDMzNkFmOXVkUFJ2L2xuVEZSbkxLMXpPN3BzQ3Nrd1RPdHJscUxQa2NLSDNTbXppY0tjb05TTDZPbEpQSkhRSjFTaU05S0MrSzR1eUtGTEwvWVdLbkxaUGUrYlZQZmx3VHQ5VXZGVE5Ic2VkSER1KzZ4TnZaZS9xNUN2Yy9GSk5ENGRoYU1xc1FZVnJ5V3BhdmFlUm9BaFIyM0NHOFlJTDdQRTR3bFhTWU95OFR4&time=1793419498&sign=28a38d80e998ab5ea17bc86c6026f0cf&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "傲天",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64MzFkMFBzM1FCQ1RrUlRaaVhKYms5T2lNZHVyRk8rSW9zQTJxY1VBT1JnRHBhUlNnc1ZCZzZaT2pJaUpGamMzYm5GczN6emlpbEhyTUl4VXpRVEJPb25icmlvcm9xbFZCVU5YM1pSaWNvUlhkL3JWejUxNHFNMTJoejREQTNoazVlTE1CbmhUY2VycTJDcW5zeCtjcEVQSjdOaDZvQVdkeTR4OEtEeldlcnluMEUrNVRRSHlsempnSzdJamR2UVo2R0FLRURWdDc0SmpaZGtsTTJ1VlJJdlJlOUpORk9RSmxDQ25lT3BqcWlqMkpqeFV1eUM5YmIvYUF4bEFHL2JjL250bFpkQVRMUW8zakYxSWI4d1RW&time=1793419581&sign=c7cb69dec35d46fa3bba883a66a836df&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "琉璃",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64YzhiMEwwTlhtb0Z5L0wvT1p1L2NHQ2dYUTQwTkhOVHF4N1RxbEo2M3JEalUybFZGaVhlNXdxak1ZQVVPRG5zRTY4eFFmTHVzWVROR045Q29OeHBwWFo4MGtBTXVnZlJRYy8yS0xNWFlwM2lwTDdVRDRPYXJ0UERHMDhKVnJlb2NEOU91SWt1cFpBN29RdkRPbTV4V3FmdFY3TUw2b1gzNS9ERW1XK1d5bXY2emkzejFObzZvSmtFcCtLRnJWMEdIVm9EM0tJV2phK1A4Z0Iva0ZtZWI2bEh4N3hjWHcxbHFhU0R3clYyeUVmZ0wyeDdhZlk0Yi9RVFNUeTdJd25FWEFEWDJzVmxPWDdWZDlLV2pWdm0x&time=1793419516&sign=2caf49fb2ed642d97028152e40669e2b&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "飞雪",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64NjI4M0FtVUdWaDJnR21mVTlkcHN3eDBuV3djci9tUWZFaVE1Q1k3dFYxYVMrSGdHVlNRNTJGVllGWXI2RFduTUVXVW5XUkRNWDRHVHMvbFNOMVRGNmRlMTg2OUphdzNZb0pkemhzL1l6cWZOYTBxNCtpamdNREtkeGxWWmFWeldCeUtodHAzM08yUDBoMm5jS1c2ZHV6SDF1T1NFcHR1VVRzVlpwa1VLaDY1MnkvWE9IY2dFTC8ybS9oTWl2QUNVZ2FMaHNWVEhzTGZvdnVWOENpNG9MQ1VJa2Izc0RaV0NkTTdDZkVKLzgyQ0dGYWxOL2Z1Sk5oL2NmMTQwdjBnRER0djZxTkovalZZTjNReUpvSWp2&time=1793419543&sign=aff3a4bee3adf86fa605e4fddb9200d8&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "三少",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64NzJmNDVDWC96RGRyQUdPcTRrTjBNS2p3bFZzOEVZWUpySWNXZ3hQNjJlKy80Z0hHaXhabHBlYXhydkIrUkVrRkZkcWwwSWVURTZ0L0tUbk5vUWlhOTAvY2dZUXkyKy9hNzVlR3dCemcva1h4TmpEMEQ0WWRIcUgzNGcrNFY0VW40SGxKY1lsci9aRThueWVuU0dyYjR4VWdFZUhzeTJsZHIrNHN4SnRQM252eElNdkh2bjF0ZXkzc3JHak1pWkxVaUgwaU9PTk9OeGN4cmN6cHdwUlU1cHlkRXRLVHFva2ZOdndJOUJOZXorVG43WE1SR3NjVTlIKytDbGZnODJqUGxEVUJoU2NqZkcyWXVWd0hGZHZi&time=1793419601&sign=a73d06f77098a976fcc90c6a6b03648d&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "幻影",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64Y2RjM1NCVEIrSjI1ZE9ZRGJtVFVsZVg3WDBITDdYcGVhZHE3Y0VyWUxqMVdSZnVsUnNQUjhidk1Ra2Fxc085UFE0MmtoNWxjc2xXT2p0aGRLc2g3Mlh4Vk1id1NTOElOTnJlbjU0cGVEN1lvSnU2U0lxa2xHL2VpOHNIYWpvSkVnMFNsM2dBVVVVTXF2MjQ1KzlQSE8xVUlaa1JyYkNOYzltbHNqbkpQS0NLd21LVUpOaDA3R2JrTmZVQUJIcW0xUWZxYmQ3YStCSzJhY1h2K2ZCUk9GQ0k2U3RmaXRwL1o4TUROZU9tOGk0RkJtT2NMNUlqYXhFZWtLVC9GQXlUbSt0VkdsWVc1WlFvWWdlaFRRRkJl&time=1793419626&sign=33b08f66176febc9f46295be44452338&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "宗政",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64Mzg5YnhVODJxYjNvYXFhdUFxdElzd3RMQWRhMWpseHRhWFVZUkVoOXByUE5PSDhVbWxPdUtSTmpXdlZ1WXd0ZGV0dG1UL0xQSC9tVDBGZEs3b2dGcWZHQktJNmtIWFBuQ3ZXa0pTc1dHb21MeGRoVzB0MEo2Vnl3RG9zaVlXYWRsNng4bDdtZk1qQndQblF3cG1xdnN6R0piWTFvTlgxclpNSDcwOHRSeWN3SVU0RXpkRGYxQlVMZEQ5T1I3MHcwMnQxVkpqaEZjK3R4R1pnQjkwYkNtY0RRQnBNUUZOQVpoNWlNUWFkeVl4dFdVc3VhUExRQ3NTQ1Q3NXlhTWZZZnFCb1JTR3B5L1g5NWNOWFR3QmZtaklOeg==&time=1793419679&sign=ca5385b853f87ac8a56d6366f5bfa19c&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "koc",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64MzNjZk1WbnJxbUdCVXp2RldNMnBYMHZmaEFnWVNKSnQxZDdpeHBRS2wvbmdQNFc0eEZQTmRIbVZQWEJ5Q1Fma2RkUHQ5OU1DWWpWTFlNUlQxNGg0TDhiYk9vTkFteXpCcWpGRXFtRUZ3ZGY0OGxRWXgrdmszSjVaWXpERFVtbE9zMWZFVUlOSzB1cEJFbkJwM3N4c3dXMXA4RytFV09zQkI2Ti9KU3A0ODlaczd2TGtHMTlRd2tWbUo2SWJqeGdFeUlSR0l1RExqMDJpWW41ajkyZFc0MWgrS3Y5UWY4NUlLTVZzY0FVQ29ZR2kwdjdSaVovaDhWaGkxMlQvZEFBbDB3NFNDb09PNUF0UHFVM2JkNEk3&time=1793419700&sign=ec6bb401fcc7cc24d36337e279507289&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "农丁军",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64MTFmMmQ5VUFGZzVsNWowTllCUHNlMTB0MW5WMC9ieUhoYkEya0dQM011Q05nR084eDZkVnRxRmNYSllldDlGTWswbWFXQkhhVjRrTitDV1BURHhhbk9sY3g3Q0EweW1hY205UDBDeXFkc25MTUFrckRQbmZBTWlpVWZYb05aTjRmVVo5bzE1SE9DU2R1Smh2MmM4djhucDh3bW1qdmpZTGRVRnpBc1VpTmp1dXNUNUJFOGk1bFdGQzVHU05JZnhldEdIaHJpN0VCL1YvRUZobXpPbDdjRWJWaThGcTVsVTJJSXYrazhMTjh6WGVpeTNPNGR2c2k0dyswaVlDRkF3S1lQdVVJNnVmYytSUnV1a1AwR3o4&time=1793419717&sign=b9f49284a699c910341fadd2698991df&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "玉麒麟",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64NmQ4NmdEaTNoODM1R3ZsZVVsbnV6MmsxaEdFZDQrZloySWdWbHlkVytxR2pVUTRmcUsxWU1TcUNmSHRXejBwMThPYk82dDNLS1hFL0dvY25ZeE8rRE9jZTJsQ0hLc25OWE1kUjREOVUrd3NKdythYXhMcDkyUGhzYUxCbFpLOEpSbmtGcVZ5ZGIxSzc5OTVhekRQdDgwdG42a0dFMFlZNzF1THpFNTlBeHpaempwbWpxMEZ6d2ErdjNqYkZGcGgzQlZseUwwMnR4ZWJ4R010cWVZRHVsRDRGbXFOeDl2bVNGVnhOQXhwdkVjY1VuK0pJVVFBaE0rQmUzTG55bXVEYWJ1am9ZT25PTW96WjFZMXppS3Rj&time=1793419738&sign=cc205ff3bb56cef9a3051f3adf7602db&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "修罗",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64NjhiM0N3WTFhQnc2V0IwcGZKR09BQ0tKMXVXbHE4M0ZBTXBqM0FXcExDYXJmRkIyWk9MTUp1cEE2VDdFb2ZrSlBQYVJVYWJRQVVCMVkvYnlUbFVDamVnVStMSFJ6NXBVZTdWdUoreFFhWEVPOVBxNjlVb1h1UTFMMzdveW9TMUE3dnVmUEdjSG0wemJNWUN5UWxHME5aT054N0lyc3paakZYeVBkVnRJUElKbjZvcHBpQ2Y0czYxaHYxb2ZoYkJVdG1kU2FqNWxjYkVkTDI1OEE3cUo0MmtsT0dNOTR3NUFmZmpOaXh2TzBWZFFaMkhwRkRHeGNLb1ZwaEZEelg1bkQvTGcvckxjSzFxaHczakdvWDRlOTJTeA==&time=1793419754&sign=78d6b277e82b4424fa5340f5c7dad68c&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "唐潇",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64ODNjMnUzOWJVR0hrRjJZSGRtcHRmODNPME5MZ21XcFhaTmNHaVphcVgwM1padE1RdFdTT1ZSMGJpVUY0THBNZHAwRmRMSW5weFp0QU9KcXYvY2xlS29pSzhsYWNySExxT0VjUlJuSVhBUW9DdjcxWTJ2Z29EOWRuYVBNM25MY1NhS25lT1JUMGJTZUJqbE5tTDdsaHQ2MTR3cjZxWkpZMlNsMUN1c2V6cWxlQkxoY2t3eXNRWmJkWVRMektCaGZ0SWJOYWl5TXZ3M2lCNCt1cjVoSUx5ekFXa003N1ZVNVZwRWtYK3lLKzlHQUJFbFQrOXVZUjRhWjQvWDV5RUplL3RuK25naXdJdVRrMGUyNWlIdHBF&time=1793419786&sign=3e2bcd292fcbce83c2c82d8d279cb615&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "梦梦",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64MzFhMUh1THlqOFBBYkZlMWd2WXU1QkZXdWUvdFdSSXF3T0FXeENscEZpa1IvcnlSUnNacnZNS2d0c2VrSStpRnR4ZHl5UzZmUTVOd3pHdlFRUTRjMTRJME9BUHZjVkNZMUUyTDYrdno0MjByV2kyRUZRQjBOck5BQWpjb1hWRVVHNUI0NnVoSmdRZUJHR3hqU1BjbllUWjFIUWtzS2NIdlM5eGk3QVZCdUlhc2Eyays0bzNlNzhqbys1K1dYa3RsbnlCQnhpeVNUOEt2Z2p1SkFpaUFVOHhPQUNuRWplZ21oZWlCUm9zcVlacnpIYkVSd28wZndqRzlDSjF0bWxGM3dZK1JsSzBjSFdWRldBWWNIcDhQ&time=1793419806&sign=e4a469254a94790cab75807fbef95818&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        }
      ]
    },
    {
      "name": "玄烨",
      "accounts": [
        {
          "name": "簌簌",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64YmQ3OWpJTFJzTXdoQ2NqdzhCaUFzUUgrZmRHU1lLcjl2WDNCS2tsSHB3aWVnNkYwUXBJUjZobXFsM1BZbGJuTEsxYWEzSHo2R1pWQ096RTZLaFlQazNUeEJWM20rTlZpTnkyd1F4QXNtcTFabXZhQ05iVFM1ckZHWURVem1QODRQV2V1OTBrM0U1QzEzbnRJeHpuT0FjTXltZDg4QVgzMjc2WmpLNUEzZFN2MDF4Y2M5MUFQUzl0N1pnOG9WcFFSY05PRklGOG5hUXVFUGVVR0UyenE5TmNOcnNza01QdVlaRWZQanRHaURJWnhQRmtPcGZBU20reWlBZ2NyOEZaQUFPVHd0RkNhbDBxMHFPS2FqNzZQ&time=1793418949&sign=3297c8bec9db41cc7750d92a3412128e&appVer=1020&platCode=37wan&IMEI=356597838607247&isPcLauncher=true"
        }
      ]
    }
  ]
};
