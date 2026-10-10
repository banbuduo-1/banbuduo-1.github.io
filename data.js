// ============================================================
// 书签数据配置文件（JSON 结构）
// 说明：因浏览器本地打开(file://)时禁止读取 .json 文件，
//       故数据以 .js 文件承载，内容就是纯 JSON 结构。
//       换 token / 加线路 / 加账号，编辑本文件即可。
// ============================================================
// 【如何更换过期的 token】
//   在下方 groups 中找到对应账号，替换其 query 里的
//   token=... 、time=... 、sign=... 三处参数即可。
//   建议直接整体替换整条 query（从 gid= 到 isPcLauncher=true）。
//
// 【如何新增一条线路（域名）】
//   在 lines 数组末尾追加一项，例如：
//   { "id": "xx", "name": "新域名", "host": "xxx.example.com", "color": "#f59e0b" }
//   之后在页面上每个账号切换线路时即可循环选到它。
//
// 【如何新增账号】
//   在某个 groups 项的 accounts 数组里追加：
//   { "name": "新账号", "query": "gid=...&token=...&time=...&sign=...", "defaultLine": "50pk" }
// ============================================================
window.APP_DATA = {
  "lines": [
    {
      "id": "50pk",
      "name": "50pk",
      "host": "dldl.50pk.com",
      "color": "#22c55e"
    },
    {
      "id": "z7xz",
      "name": "z7xz",
      "host": "app.xxh5.z7xz.com",
      "color": "#3b82f6"
    }
  ],
  "groups": [
    {
      "name": "大号",
      "accounts": [
        {
          "name": "大鬼",
          "query": "gid=1002997&pid=1&token=BASE64ZGM2M00xYWhRNkFIUFFuZHc1QUU2RVo2TFEyOU1qSXJseXlkQ3FYTUx1bTBPV1kwVEViRzNLdEthcDBrb2ZDR2hwQ3FnRVVrMFRjRlpac0E2amxIa3ZMeGg0aHB0WGxyVWw5Yk5FdjR1TXBRKzZnNEhvZWJMWTV0Mm93dFVZT055cmdzMFhnVDhkZnlHWWYzWkFSRzdySlZXdGZ1Mm53TTNpRVBMVFJlNjBvNE9Ia29aY1JablFmQWlYVHJuUkErYTNTYXQxVGZPNFEyMXlYelpuSk1KenEvVE9kbFZLNXV3UmtOVUJDY2s3d1ZML1d0SjZhd0NJNTdzR282ZDBHL1FsYm1xWlM3RWtjc0g5MnZRRkJQaVdyKw==&time=1791420265&sign=3a245b1ffbadf9a958e2b19b850c9e50&appVer=1020&platCode=37wan&IMEI=350798335766244&isPcLauncher=true",
          "defaultLine": "50pk"
        },
        {
          "name": "霸气",
          "query": "gid=1002997&pid=1&token=BASE64ZjdmZnduK1lwZjNReHRlclhxdnd1TFNPQ2FKemZ2dkhyaVF6cDRMQkswekFUMWhYZitqdlk3U09FZWw4K1NENTBkcVJ2ZmhTMThHZ0pOdE5ISXJadGFCS2NUb3M5Z2lHU1cwZWRyOEFVc1dYNXlrMHpBdGJEa2lMV0FBdGJCbGNkSFpKdDZ2RGIwZzNwWmg0c2ljNkxBSGpkQXRKZ0s1cmhaTGpNRmpGV3dxMXBXOTVqaFVKM1VRK0pXdC95Mk1COGdJOEdJckZJa0ZGbnZKN1JiRnI0UlRmeUdGclFwcE53TlVZQVkvOFUycjBQNlFDVGdQRk9rUERINVZPc2k1U2xXOEpLdDVmbUtHNWwyNURhTXUv&time=1789667046&sign=cdc72532781c2c1c33cb9aa9d0c40ab2&appVer=1020&platCode=37wan&IMEI=356597838607247&isPcLauncher=true",
          "defaultLine": "50pk"
        },
        {
          "name": "辞风",
          "query": "gid=1002997&pid=1&token=BASE64ODhmNU1EV1B5QTlwVVViRGJHS3VJbFVJdkZMclg1UEptZkdtQmY5NldCRVhCRmdsM1RPV09mbzJxemcwOE9vU0pnbVYvekEzdWFMYXgvazJxZFVLZjBaYU42VXpyVzFXZ0kwUXhwelFGMTJnSzBpckc2cHpPVERqbWtGUnVLT3FmL1JYODYwSTlSbTdNbnNXT1M1YWNqV0NyWVhVejBRM3BVWUVnL0xFMTRTeENnbmxoYTNCMjBhcnh0VG5TcHI2QVI1ekJoRmdyOGZiWmd6ZFdqQk9lb2ZCWFkweFZSbXhiTlJFQUJYOVNGR2dkUjBqS2hpd25WamRvY2tVTVZadkNiMEFYWDNZdzA4ck1Mb0R3czFn&time=1789667469&sign=b5dd2d2827b61b8f8cadfdc15686b5fe&appVer=1020&platCode=37wan&IMEI=356597838607247&isPcLauncher=true",
          "defaultLine": "50pk"
        },
        {
          "name": "中鬼",
          "query": "gid=1002997&pid=1&token=BASE64ZDYyNURuZktKbnEzQXQvZjgxVFBGUXZaUFVLMUFESFZzQWVrMHhwWGk3VDNzbktWVGdxSzZWNldEZ0RmR2VzdDlnWndFYTMyVWJLQW1Bb2lyN1dUZUQ1Uzl0U3NwUUZYMkppUWZjZHhyYWxOSEUzdG1SZjlDL3QzUENJWUIyNm9UQVNVczM2cVRRZ1Nwa09PMko4cDZIc2J4dHR6OFBwZWpYZmQyVmRwY3FBeXRrL3Zyb0g5SFMwZEVYNndKcldiN2RNNnQ5S2lxZVFiWmY1a0Q5NVphSHZTSFlqY3hFcSt5S3BGZHBvUkQ0b0U1ODZHT2NBU0twaENCY3VRTjRyaVJldEczcnduSXVjUlJ1OWt3ZmE3&time=1789667361&sign=6e60e91e9e390ae7f4b39fe04232de24&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true",
          "defaultLine": "50pk"
        },
        {
          "name": "火苗",
          "query": "gid=1002997&pid=1&token=BASE64OThlNmZXSWlkQURSRlNwbWNtR1lueWdseTNubmFLMzYxcURhMk05YkRVMnhNSlNzai80K1RJQWtJUjQ4VzRiOUVnb3NIT3V1VmJ2eng1bXVUSXZWTndFOFpGU0FMRHE4T3U2Z2plQXJWM0R4cFNHbFpvdU56TlJvS2dEeGpsNXdZT1Y4bjFuUmg0MlJadkZTMVdWRXZIckZoQkxVblBUQURHMW83cHBic2dVMFN1SDM4bGw4MkwyOFR0bGVzTmRGL2E4aUNpSVZOVGFRcWhQclgyWldZVDdyMm1YVDlZMTZJWnY3SmxmQk1nT3U1OWZHdngybmpldUhFOUxjSW1SR1hZVmMvOHZ2WjYyYlZHZmJvQmRyckdoRQ==&time=1789667109&sign=35ab6f6f189b3eb9fd8337a9ad0ebb27&appVer=1020&platCode=37wan&IMEI=356597838607247&isPcLauncher=true",
          "defaultLine": "50pk"
        },
        {
          "name": "兔子",
          "query": "gid=1002997&pid=1&token=BASE64OGJlOGJ1WGRXN3lKTTlIT2tnYTcrZ1kzamFHWVptMXRmTHZWd0tBTksrb0J1dnVnalpLWmNXQWRIWUZLZ0k4d0NyWEVWQXQxclhiQmliR3VXbnBCRVJBZlZBL1FxbTZUaDdoTVFOcDdqRmthejUxeU10dHZ0R0x0bjA2dDN4TzgvQ0cxLzBsRmtpemtnUGdDa2NHbDJyV2ZrYWs3eG1jMGs3ZFErVTlXV2VqK2Y1Z0RuNmttVnYxcW1WS1Z5UTdQNWsxS29ubElOMldZVlNBaDN4WnZUdTFzSm51UVpOL0doTG1wQXRwdkF1dUN1ZUw2UHEyNzJQM1ZuaUltQ0FUc2lDOEhNQ09YRTFIMnhqck9SV3ZL&time=1789667261&sign=ec41800e3af9c6a5ca74264ca3a893a7&appVer=1020&platCode=37wan&IMEI=356597838607247&isPcLauncher=true",
          "defaultLine": "50pk"
        },
        {
          "name": "小鬼",
          "query": "gid=1002997&pid=1&token=BASE64YTc2YTNlZkNPZTVNWmd2cDhqVUtLbzlOeHN4ODNJeEtwNGg4UGNYYlA2RjV5SEk5cmhJTHFaRTVTS1pnenpFZ0JqVVlrS0F2TmU5WUJzam5qYjNlMXFnWVc3bTRnMmdFcFp2bUR5anlGdFhoUG9LbUc5OXZqYlBRaDIzV2hEaTk3SHBKTEtpRnk5eFBhYlZKOHZnQkZGUkRQUndkTlloNzBXTUJ5SnFFNnhjejIxbno5OE9BRW9UTkN2UDhJWlZram1ic0F6ZVlKelRUYXZQRk5NQ01rSmlmcXhQNjRVbzJTM3oyT2ZsVC9LYnJ5MTlTTnN6UG5yc21kclRwRHZ2YVhsLzZ4TzNTZzdjVzdXdUdzN2Ez&time=1789667084&sign=cbbc4979c6c9512af1218aa0c13e4358&appVer=1020&platCode=37wan&IMEI=356597838607247&isPcLauncher=true",
          "defaultLine": "50pk"
        },
        {
          "name": "厉害",
          "query": "gid=1002997&pid=1&token=BASE64NmZmYWFlODNmL2RaakM3Q25MdDRodUU3Q3VVMFJZNkNVcGZCUGtadU16N0psN0ZaVkpLay8yWDJmelNpOXVZdnQ2SVEzSXREc2ZyMm45MlJWNjBwQ2sya1hwdlBPeXI2aDRXZjF3VnVZYWxBNkNKTGdHUjNWNy9pOHNicWh0L3ZYWmlqUERoU0trcFBtVnZ2NXhQL2pydE9DQ2J3cDhqYnh0ZzNHVEZ4MVI0MzlsN0RQM2czenB0MG9VVWEwUWdva0tsNlJYZVhoSmY5V2plNHNNNHJtT3krSWp6ZUtYNVlJMU9mZHlQT1pWS3o0Yi8xRndJeWhPbm9aMU8zRXRyTHkveE5PRktkcFpoZ2ZxN1RUY1ZK&time=1789667145&sign=2d03f8e726b59141922a279b1958a847&appVer=1020&platCode=37wan&IMEI=356597838607247&isPcLauncher=true",
          "defaultLine": "50pk"
        },
        {
          "name": "阡陌",
          "query": "gid=1002997&pid=1&token=BASE64ODg2NVk4Tk1SYmNBTmhVejcxNUQyclZhNzZjYy9pNXNJeE1SMXN0eHNlVTZwNzdmZVVPTWlmUitDOTl2RGpWMzlXZHU5VHlERXBOcnpxUmpOcHczLzFCWHlTb3VLcGwrYjVpM2VFMk9LenFQWmhDQ2lyQWJDM2EzMUsrSkNvUzVJYUxLdERzaG1YZ0gzdEhyTWhZQm1UbStaeEVZUUpyVmgwbVFSQlZjSUFGWXlEVks1NUpkaTB5RlMrV1dxK2oyQ2V3ZEZWWUg2MytCY21TV0xBa2I1QW9GSldzNzRiRGV5ZzhGVkRNb1ZXNjVhcHJqWFBKMzRlcWIxTm5jUC9wMlc4bGJ0cXFSdU1kcnZBeHpaVXdp&time=1789667206&sign=a747a08b73e39f2d9cca951855320575&appVer=1020&platCode=37wan&IMEI=356597838607247&isPcLauncher=true",
          "defaultLine": "50pk"
        },
        {
          "name": "雾",
          "query": "gid=1002997&pid=1&token=BASE64ZGY2OXBueFc3ay94TUUxdjdDaDYxaVB1eEpkUEd3UlJ0elMyaE8rYkNtRW1ieEZhWWpwN2lhQkIxL1Q2b3pQR1ZCNlhUZU9SN0dtckN6TVp1V3k1VzBWdlhSRm5RZDhXb0tCTUtDbGQ0ZGE3Z1pGRW0vdzE5RjFxOUhGUVlNRkZsU3FJT3QrVTZ3TDJTVFlrNUFQQy9zY2F5ZkFpQUNXTlgxaUxraGsvT3NYNm1VeUVZM0E2RmM4ZHdobUZDL2tYTUo0dDlSSXZIMXh3a1ViNngvZnUrMUVyaFUxazRZNkJ3RVhoQmdFOFEyaTUvdnZMVVVuYUVwajZqQ01IRXB0MEs4eW1hU3U3Mk9kanIyRDRXd3N4&time=1789667180&sign=1bef6691ca7ba7857499add48f818398&appVer=1020&platCode=37wan&IMEI=356597838607247&isPcLauncher=true",
          "defaultLine": "50pk"
        },
        {
          "name": "3137",
          "query": "gid=1002997&pid=1&token=BASE64YTg1OFlXeERHc0cxWVlraU1UWitYNEJWdVUrMHhxZFZOczM4MXRxYXpaSWFNa3M0WEZmVkJERjFrUTV4RHFydFhud01OTmMwRXNtM0krd3hDODl6QVJIWWFORzY3MGFoK29kMWZFSnByMWh5WGtFaHd3Mjc0bXdQZ0JEYU1sUTlOaWxZRzM5WS9nMjdmOG4vUUFrNXJnSkY3NUlYc3hhM0E2SUVhVUEzdEM1TStxcktSMjhJTFdmeUpoY09TbXNJSnIzcnJ2MkNnRENzYzlhVkZ5WGtadDVwM1RlZnFCMTNVeDk1clYvSVFvb2JaVDFDd3A5ejFub1laOE5XbndvbDJTNFIyZ2tEMHN5Sm80bXZnRXpT&time=1789667231&sign=9c0d86f2d8655999b0a1761b9dbde746&appVer=1020&platCode=37wan&IMEI=356597838607247&isPcLauncher=true",
          "defaultLine": "50pk"
        }
      ]
    },
    {
      "name": "小号",
      "accounts": [
        {
          "name": "可爱",
          "query": "gid=1002997&pid=1&token=BASE64N2VjOWk5RVB4RGlpbk9jV2N1aXZNOWFyclArWDArbTVvV2RtU1dNT2JxN01DMlozZUNCUGQxUGsyN0RZbW1wVDI0R2JFQmplN1dhOHNEY3kyMTNsZnZ5N3hwamJ3czFNMTRhbzMyVFpMMGxJZ09vVit3bmdCMHM3ZUdnank5Q0I1b0lTMFpTNWpwVFVsQmRYbEZ2OUJOUUJkV3F5NGlRL3g2UVpHbTBpSHR6Zi9OeE84cTRnOFJVZlYzWWtrR3RBTFIzR1Q0SExpa2dpRWx2cnlJbFRhMFUyUzlnRjdUdFlEQlJ5alhHdzFQQytuM0JQVG5uUkVidXR3b0xKdERZOTZET01ick1lZk1ZTzdFcDd2T2FL&time=1789668006&sign=8d4ae6ffd74fd621c9941e84a363022f&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true",
         "defaultLine": "50pk"
        },
        {
          "name": "八倍",
          "query": "gid=1002997&pid=1&token=BASE64ODRlNEYyV3ppcGhRbVpHckNrcFpLTU1GS0xaRGhGc0VPQ2JXV3FwWDRYWllrc1cvWEhxMU5Iazc3QmEyUTlDTTl1eE04eExGNEJtR0o3UWxxQVQyUTl6NFJrdUZIVUt4ZW1WMDB6UHBRSGVXVDFkaFJ6ejNSbjJHNkxDTkNxaG1MZ2w4eWliRlFBcjFaeUI4V0RUNjZUVFl0ZFRuSVJISVg1b2V5LzBuVXo2R0hJNEZKVzVGcktidlN1R3FlQWVWaUN6NGhxRnV3ekcwN3ZzbFo3Tm5CMzhMTk5ZVk9NTWxFUmpXQllVM1NNWTJnU3ZVeU1wdjlOZ2tTeEU0Q3R4NTJDeml3V3lDZit0RzFSeURTQ2hQ&time=1789668030&sign=39b92562c85e704ddc50a5c389c6332a&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true",
         "defaultLine": "50pk"
        },
        {
          "name": "鬼",
          "query": "gid=1002997&pid=1&token=BASE64NjQ2MFFYUVAwMTFRK3huaVdmcGw5WEFPS21YZlJhRHd6SUpTZk1sdFdPckhjTG9RM1d6Um5UZFBRMVV5M21ldXdGcEFDbWdLaWJqdERiK1JBazY0QVNVT2V2T3I2NWZxMUNacStNM1JFb3JxWXpDdjJtR1lJMUZCWHNINmVYaUQzNUd4bjI4c1pQWmtpNlVkelc4WldzQ1RWN3VTT3NJVzBlRDZPNUV0Q1lkMkNIYWgrVnFPdFZYU2FuVGViMlc3dWZ0NzQ4K0NQNUtDSWdWRVFPbUoyNDcrVCt1dWd3aFdLNXBpeENkWUp4dDVlTFZXZHhXWjVsTW9VWEhsaDd4d21kWCs3VkFLTm54S2Fmc1VqMUl0&time=1789668050&sign=cbb37eb53972e11d6caeb97f2ae50aef&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true",
         "defaultLine": "50pk"
        },
        {
          "name": "飘逸",
          "query": "gid=1002997&pid=1&token=BASE64MWQzZW9TdCt5dDBwUHRTVVNNb2VJeURLeHgwYXBpMWVtVzJ2MStYYkl0d2ZnQW5GTTRUYnVxS1F1ZDF5TWNpUWliTmdpQVRuSnFMOXdXZ1BKcUhBRVl0alB4TTFRZFBwaTgrK2t4VCtZR3FiQnNhWkRJTXprblBPb1VWRHhzZnZwSjFSVTJEL0p0Y1U3RkpsZ3RuWE5vaUs4aUhoQy9uTWowUHY2eTQ3LzdLbXVORDNxZ29vcFJSSSt3ak04WFQ0cmw4UVBHTGg0YWhDRExJTW5TWDhNMVpzQjFnWGZ4NXRVcUIvZWFGd3NLazc5b1dKWjFUV08wZmJhTFBQSG1YU0JNV2xtcGdweGJWdk41cGxRWHg5&time=1789668075&sign=117bf67fc2cc381e7db407edd492173f&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true",
         "defaultLine": "50pk"
        },
        {
          "name": "动情",
          "query": "gid=1002997&pid=1&token=BASE64MDFlM2I1c2VmZlRQQ1JLWkk3MHRYU1pTVGxpWjhqNHlLS0ZSMUJoWkpoek5YK3l6WW1yeEJUcDdOenloaXZpWGU1MHgrdEpUMHR4bm5XNEZiaklKenVXOTJQdlZTSnQ4ckpwQ0NKYlcyV0xpRWNjNHVSbG9PazA2dFN5eVNBQXRySWY5NEdudnlCeEVNMXA5OWlNaHA1cGVYMWVoTSt1VXFYSE5sTVcvekZIMTdYU0lZcWkzVDhqcnZQQXpLWk9FLzRqL3ZlQVBCb3hDWXUzblU2R3c4SE8wTVZhNDhQaTlKSEs3S05OQWRiS2V3dUZsaFV0VkYrVmVoWUt6SVM3NkhYUGFUVkZqZnBkRi93UTVaN3FY&time=1789668090&sign=be4c5653253e35d2f0894a7495519f4a&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true",
         "defaultLine": "50pk"
        },
        {
          "name": "潇洒",
          "query": "gid=1002997&pid=1&token=BASE64NWNlYkxvL2hJWTdYRmdVWVJueWhSVkFUOEUvN3QzY3gzdSsramhyWnRJOGcvQXJ4TG05M3ZTYXhmdnJYVzl4akRIa0Jnek9JWVlPUTFEYTJNdThpMUdSczM1cUYvckp0Sy9ReEszaWNzR2FLeU42ekRQd2cxKzlLd1A0SllRVHVMU0dqWWFYT2tRYkFMVGtLL3lSQW1Pd1hkNkY1cVcxOXh4cnMyb0pJZ1A2UjR6QXBYbFV6RmFEekRzNUNoaHgvVnhMc3pvQUxsS2NDMWw5MlZNWER3WUltNUhJZDI2Ri80VWNaMStsYzBuSitKZFB2U3Y5d0NSREhNOEoxcUoxUEtDWVF3ajFreFZLelQzYUg3VitQYmtkNQ==&time=1789668115&sign=dcb20b4c363978d781b23a85f5ec88d8&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true",
         "defaultLine": "50pk"
        },
        {
          "name": "勤奋",
          "query": "gid=1002997&pid=1&token=BASE64ZmJiZjJkc0NYeGRzNGhRQzdxTFRnWmRIS1NqQ0p4cHJiVGhEZ1RQTkkvQ0pZdzdJVU1yZ3BzNnNHMXpWYkpZczVXUU5aaGdGOCtXeUR5aE5sWmdMV0YxR0d1ckE3VndwSjdxbVk4S2drREJZWDg4VkY2Y21UYnUxbWtZZUlwejhNVVFEQ3lWUldweTZEZk9SN2ZzM1EvQ0VYam1oNzBYL1ZYTVAxNHN3WlU0L2ZmT0NyZ0VlWm9lRTBqbHl3T2F6bzIrUWNIYU11S2pnK3B4RWU3cEJTMndSaTY0MjlFODJEQkE5MlltbVp5QjhnRmRTV2VHZ083TWcxT0IwUlNrVDhsZ01vSnFhaGJhaS9HV0o0WjdV&time=1789668131&sign=403a513db9529fde587fd5fc878e0447&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true",
         "defaultLine": "50pk"
        },
        {
          "name": "毁灭",
          "query": "gid=1002997&pid=1&token=BASE64MTA3YnFiL2g4NHFLRGc1SzEvOXd5TS9Ia2hRby9vWWQ3VndDSi9QTEFJN1VwR3ZXbFhGTHlRVHdFeEJZcjVFVngydHQwQVVqa0UrTkY2STVVSkI0OUZxb1paT1NOTWpEZDRqcFVyVGdyMTlqSzdRZU1BeXExdTBGTlJleWpkQ2lTWXVLT0VkbUh0ck13ZGZQME9VaC9kdm9NZk5uSTVnd2ZWMExnUEpEVHlkc2p0S1VmY2UybHZDdEQ3VU9TblQvVUtFYXBFTWd6bURSUEh0MXVidnNabDJYRE9wbThFNEVsZWgrU0h2MTlROGNLQThrcXZlYTZuQzQvMW5uREd3eUl3YTRKK29LNnZLa2Fvam04aG5QakE4Mw==&time=1789668151&sign=2836fa9e5ac714f4bb86a0a8f9105899&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true",
         "defaultLine": "50pk"
        },
        {
          "name": "绝美",
          "query": "gid=1002997&pid=1&token=BASE64YWFlYkdEMEhMblJPZzRMUm5JSTNIN0llVDA2ZGFvS3MvSWp1U3dCekFTYWRSWDJpTld6SjJxRGxheHAvSktETUtNWHltTnNsK1lVQThBdjhkTjlNMDc2U3dwR0V5ak9Pc2FNTHJET2Z2eENHZXBuUno5azNwRWRSYkloR1ZXRDMzaFR5cDNUQ2cyelVXMEg4OXJQd2U5V0YrQTFBRmhNY3lncDVzVmZIdjdRMFRCMUVtbmZwV0Z6M3lNbGhLRE4ybTh4MW1Nak83ZTNHWVUwQ1B2b2RoZmtaKzZGU1d6VGQ3bWJ5Q1JqQ1JxS1NsL0c0L3Qra1IzSEZDQjd3TURtMW1HUENnRlZoQVJHUy8xZm5zVkpI&time=1789668176&sign=2c693a8283a30ef88caa1183c784bab8&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true",
         "defaultLine": "50pk"
        },
        {
          "name": "痴情",
          "query": "gid=1002997&pid=1&token=BASE64NTQ0MHk5NHA3dXZyUEhMVVNGY1lRcnd2Z25FYVA2MWtRa1NjMlpvR2xFR2NZN2ZXU2JaYW5yVDBMeVFiSkJuM0hYQjQrbm1PL2hJSlJ3MmMzbm80N1Q2eUJEVGRvRDBqRExTdEZQTUoyZTg3YTliREk3NE41RW9mb0N1UjRwdDFoVEV5OWd3b3RxazRnekIvbHpiYmVobm5ETW5wM1NjQ01DcHMxa2FhSFlrSCsrVGNDVitkcTE5NGN4R21FbWxYSy9wQzFEVU5kVnYrOGo1a3lTb0VsRTlzTlZQaGtzSXNVMGNQaktpZTZhNDZzdGFobjR2bzdmTzcxc3lUZ2VURmk0VGFBQVJsUW9LMnlDUWkwc1NhOUVNUA==&time=1789668195&sign=dc5801b4c11af8d12acd0f4cec21b862&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true",
         "defaultLine": "50pk"
        },
        {
          "name": "迷情",
          "query": "gid=1002997&pid=1&token=BASE64MmIyYk9SZ1cvRDlsWXdpYUcyd1pzZTJGbk9mRG5Hc1dIeEpFTWQ3bDc0MFh3NHR2UVFra1ZTQmhOWS9nN1RhVG05ZHhRMjhaanVkdGxlQ2lRMXZUZHFITnhIN0lERFQrQTdJREE2N2ZtQjhoeVBQODFCYmtvWUJhUFhubXVUUWtrMnZLeFBad254NTZiNUVmUE5mRVpudHV6aDY3dkJoY3Y1V0VkLzNUNHFkVUlBeXBhbUN5NTI2VnRDSHA5WllzVE1WTXZwcERVYkhTZWhWL3dsOUJFOG8vOW5GL05YTHJtclVEK2w5aENGdjFPSWdwNnFHRWJhbk5CZEtETGR3L1pmbFVkRktLcVovNzVHWDF5TFc3&time=1789668221&sign=831cbeb891db2cb1e549ee9cf66ba146&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true",
         "defaultLine": "50pk"
        },
        {
          "name": "炸天",
          "query": "gid=1002997&pid=1&token=BASE64MTJjY0pUQnNjdjdENUw1SlZlZWlsYXBnM1d5cEtINWk4S1FZcmFXZFZsb2cvRzdoN2JLWFBrT0w2QzIrQk0rT1IvNjRNSGx4TnMvWWR4T1YrZHdZQkh2bkgyVXZ4dUpVNDJNUHRuenR3Q0UzWkREUUVRQXR5Ti9FSmFqdnBFNy8yMlJxY3Rrd0FTNWpTSXIvV1hvVEo2QTNSTXYzN3IxOFdKMXRPRkN0WlN5YjFTa3VjaFFiYUpqV2hXQmgvaDY0NWlHdTkwdXovSGJRMW1UYmJUZGpXdlJXSDBxNTdDeTFUYmZIcVpnaE1NaGFYTEtPTXFWWnB0Y3JveTR2L2tpa3BJOVUxSldnRGx4cWlKTjVBM1p4&time=1789668249&sign=ef10b38264f900a3fcd21ee8c9aacd72&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true",
         "defaultLine": "50pk"
        },
        {
          "name": "邪恶",
          "query": "gid=1002997&pid=1&token=BASE64M2Q3YWJhS2lpaldMN1d2QnJ6dEE5ME9JWTF5d0VtbkNlelQ3SStidGdzRkExa1crY2FDcDhESEtMVXBJNmQ5NkhUb1MvYnZMM2xFSEpjSCtLQVlYYVJKVzYzU3V2bTM0bS9UYU91RXZqM2hhVG1rS2pWeEd2aTRDWngxdW0xZHkxK1ViN2c1dXpMUEhCUEF5YnU3SzBRbU9STXJrL3hNcnZSZ09MYm1HTGVvOW44UVpBY3psZXBzUS9yZWI2NGk5SGMwV3NhT3ZFcGRoZUdlQTBoejlCa0R4djVZRE1rYS8rNDBjSUNOWWQ2aVZVcDUvWk5VbGtxVEhMN2JiZkVVR3JwcEpvTnA0TVN6emFrUU9xSkFaMkxoNg==&time=1789668278&sign=0ff4ce329cb6d67331a9948b1d24bebf&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true",
         "defaultLine": "50pk"
        },
        {
          "name": "内涵",
          "query": "gid=1002997&pid=1&token=BASE64ZmFlNkJRWnpwbUxlSW1ZZ0VNdXZPWUlnU3Fubm5UOERLaTgvREllTHpMTy8wWFQ4Y2VHanFhejAyZmRuMVBiQjQwS1hhU01kMk9xTHB4S0JJdDQxcWt3WEgxVVdvakdWc3NkbllOYy92ZkJhY1JXVk0rNERaZGp2UEFMeDdNZktueWdLVnZ6c1BvWDl3VWlsTXFMd3hjSXpUaFE2dDNhTTZQQVlTYzhyYzVpSlB2aVhGby8wVURDMS9MN0ZQZzRzKzJkWWFwL2l0MnFMRTlXb3ZDU3ZYMXd4V0FnVVlvb0lpVHdtM2doVExrYmMzci9hQzI0STFKSUg3ZVZsUytyMEhJVkk0RVA2SDBaU2VITytCZHZjZFdHVQ==&time=1789668294&sign=954d715e3769827cebb97a4d8a9ff965&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true",
         "defaultLine": "50pk"
        },
        {
          "name": "温柔",
          "query": "gid=1002997&pid=1&token=BASE64Y2M0NnJHbFdDZDVxMXRsdDB3UWJZMmQ3dFRFanY5T3Jnc2M0QkJ2QTU4cnFjUWlFeEtaK3BGUzBheGJTRVMxbXZCZURCQWlscVVHNndNdEFkZFBCQi9kNWd1ZjFCVEpMdmRvWk1CT1JCUm9ncGp2WGwxMzViTC9nbU8rK1Vnd2t5RUlHbnVLc0pXdVdvY3dLK212dmNocEFZUm9XOWtkbHJvejQ3cW9oeTMyRGlKK2FTU3o1K29GMHhBRXlFN0RXNERyd1FScTRFaUFBdFl5S3gvSUdzT3FZUlhvWDY0OEFDRDVhZDd5MHkzcStWV1Vwak12bFFqTUYrcDNGWm53T3VwenNESlFxY0VQM08wUzJYUVl3&time=1789668323&sign=8f3c0e5bb7cfb70f2aad08a586548a77&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true",
         "defaultLine": "50pk"
        }
      ]
    },
    {
      "name": "小号",
      "accounts": [
        {
          "name": "七罪",
          "query": "gid=1002997&pid=1&token=BASE64OWVjMGNYcmphbjZtVktzUHdGQ2dCZ1R2RXB2bm43YjBBaTRWRmd4TUpKb3djQnErRURqcXpERTA1cTg3UmZWTWUwZE4wR2ZueXVCM296ZlUvQ2JSRTViRU9yeE9STnNDTGJOL2VqRWYyMnl5QnV6NWlld056SFhEU0dTR2VrVjNKLzJMOVlxODVNSlhSLzllanRLZmxUaHlGVkRqRFcwckhtbFVUYnZpZXBZZVBCMlFLNm5QN1pkYWpQZEhjUm41YWozdjVYd2FzOWJrVHltQTZDaCtlcG44TVUxWDZDemZtUEZVTU5tNkRpcmxpZnhDZHAzaDRkdWZPcjF0b1VyOU5yQktsekh0NXJBSmlQTlNOVE1O&time=1789668362&sign=893b86dd784dc49a7c7bb98ef51ba46a&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true",
         "defaultLine": "50pk"
        },
        {
          "name": "南宫",
          "query": "gid=1002997&pid=1&token=BASE64ZTI3ZllFUVBmNUdDcEJQSEJiWU5nZXpMbzQrS2dJQlQzK0NYMjZxc1AvazNPMHV1Vk1EUjBCWWsrWllzWVNiSktESVZneVUwRXVSRGYwRG43TE1WeEtQb1VsaFpxeWNHaWxwUExyNXJCaDVGbzcxVVF5RUc4UXA2aGhlYWg3QXNPMGNyVnhHU1ErdS8zamxEejBmelZKd0dtVE90akZ3WWNyQnRxQXA0Nml6NkIrZWpnYjUvekNTa2FFbFZkYTladFArWXpRVDZXUnR1cktJV1MwS0tFMzRNT0plRDFWaGZ3WHAvS0E3Ulc2aExnTzlpMzR4NWZyV01NeUhrdytyRlZ1WjdIYVVheW9kNWlwUE83M0pP&time=1789668388&sign=f5663082bf27c790f91bf8f195f94ce1&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true",
         "defaultLine": "50pk"
        },
        {
          "name": "九哥",
          "query": "gid=1002997&pid=1&token=BASE64ZDBjNkh3UEduZ1M0SE56bkswZ2I4R2IyTy9ZdlRrNmJDT0hwdk85bkZxYmphR3YvZTFISU93a0xrcjJkcnQvOGlBUWtyYWErVjJybTNvc2RXN3NlQ282Sm51OGpUQUZFR1Z1WGlsRGNRaXo1UGQ3alhiYmtkSUhoRy9HUGtOWG12dkxRcXFyc1FOZ0YwYThnMUVkaXRiandmVndvZzBRdVpsK3NGU2RkZFZZYmJSVlJGOWxibVRBMXVkYVJKaUFQQ0hJbmlpSyt0cnNERy9XakEzV252bHoxZUtJV0QrNDNpZWRvL0lRVC8yWEZTR3Bkcm5jaEZOL1p3LzlnZHV0TzZWVDRES2svYW8zbmFCL0h0RUhU&time=1789668405&sign=25d95249681654193ae671d5a73581d3&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true",
         "defaultLine": "50pk"
        },
        {
          "name": "傲天",
          "query": "gid=1002997&pid=1&token=BASE64ZTNmY1NqWWVTclVuTFNBZ0pRWGZwRVZQbVRPNXdycDJ3d28yK0NBU2ZuUzhmUUpQK3hoaTAxY2xjYU9zci8yRG1TSHpIM2tPOUx2OHdlNnV4RFRXU2dsczhpeExMS3JnNUI4d0ZLTDFWRkhFRjIrMzRzK0NtRnUwdmVVaHZLT3NHQmREMHZEUEVJQ1hnZ1dpZXBScVQyTzFJbTdkbnk4czR3cFlYZEU1ZHk3ZU5Eam02L3JzRHdSOGRHdm9rempTZ2dwTi9EdkRkZ3cvQnFZSVFCNTB6eU1GOVJpaldZYk9OTnlZL3IxcG96MzJqWWpNVjMwTTN6U1pMYkk3VlJxSEVWTVNwNE1lS0IwQjd2dXU1QU5z&time=1789668423&sign=72177e4fbdfac59e589a86bc0b58e711&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true",
         "defaultLine": "50pk"
        },
        {
          "name": "琉璃",
          "query": "gid=1002997&pid=1&token=BASE64NjgwMmIwek5ISDd1VUVUekVGSFlCU3JNN1hKVzYxbmxUaEl0SjVER3FxU29MODlJdkNPQm9MYWVVcko0ZUtvNzBOd1huMmZteHhsNEVFS011VXVENWQyQW5CZWZQZDgxdVRuL3UyRG5yR1ZlOEZnZUw2VkEyejdRUEkwV2V5KzZ2dzRpbnRKa0s3aVg0SjI3R3VacTkrcUNMOWdTQkRGWTZQRFlITFRnaWlINXRNY2g2MTVkdFNHb1UraHdTQm43Zk1aWnh4MGtKQ2Nsa3ZvU2dYS0ViMXdxREhvcSs5Qk43YzlJN3JtbXVvQThzOGRzdHhTWkpGSDc0ZFMycnZEc0ZVU3Rib1pVN2hGZWhqOWo1NXZn&time=1789668438&sign=daad41ec6d014e27a36e73e8a1562e01&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true",
         "defaultLine": "50pk"
        },
        {
          "name": "飞雪",
          "query": "gid=1002997&pid=1&token=BASE64OGY0ZFNKUm1CWWVGOHIwYkNpc3FpMkVBL3lBZ3ZGYW1MQXFQVXNoRmx3VW5qd1EyZjZWb3J5cXVBLzhZVkxUWldSS2NjSlVneGZNVFF3TTZDT3lYQkZrS2pwNHZVWWRCWkh6bUNoVmprUlJOZTd4Q3J3ZEMyUlkyTmVNOWw0NS8zMG5mOGp2ME0rSCtHRXlJY09IUFBkd0Z2bHpjc3VpK3dGQW9RMDBSOEpSczhTOTVLOW1lQk0yTEFEWDJXZmF6N2RmWFVZeFpBZHlyRnBRajNUUEpGbVprcVdpeHJUSTFnRHZYYWJFYnBNMVBrMmdsbTlWZXF4eDNuQ3VBNFljY0tseVpsR0R0U1ZGQUpHUHJVamNJ&time=1789668456&sign=fa4ddcdc1af0a52da831d1ffb0b19fdd&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true",
         "defaultLine": "50pk"
        },
        {
          "name": "三少",
          "query": "gid=1002997&pid=1&token=BASE64ZTQyZC9UQU03RUVrWlgyOVNkSk1xN0RlU1p6REhhajR3aU9SdkpLM3kzMkg3QTNqbVRnV3Bwd3N0YW5MS05JT0d5MGNzdDIydjBYejROMU1QbGlhWnAvLzZhbHRPZktkbVV4bHhqRFZQWU9xVGdIdmxvWGc0cVFqV0lFRDdiSmc0RHByNjUwR0tqRlRiMFNJa3J5RjRHMERpbkZuV3BxRU9LMTJNVG9DUWlwNGRQWDJLekZ1cWtROWNRRHdwczdsUGwrSk1pdENVb1V0dWl4WElwZlFIMDhaWHowQno5MUp1TXBocEQ1KzIzQSt5Snl1MUhZZm5sbnV2ZHptMFo0RlZEZVJVckRyRVdDUy85NVByQnNh&time=1789668471&sign=7deb460b370c55eb4458bf2858d48c27&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true",
         "defaultLine": "50pk"
        },
        {
          "name": "幻影",
          "query": "gid=1002997&pid=1&token=BASE64NjJjMTNTdGc0U1g4amc4bnNLa0I4SlhZY2VFYnJvWWN1ZllDRFBTeWF0Lzh6NXI0YzJiYkVjcXdwZFdQa2FYbkFOamwyaFdURkVBWTlqVEtaR0xaQXVyU2FZN0QwWTZNUHB0VkdCREJ6Z0lLMVhrTjR6WENUUGFzUG53b3NJdXllQ00wYXI5d0MzWjFDbTFEZ1ZtQ2JGM2Q0MUtvTSt6ZU5BWElhR1UwNjBFZ054bFpQbkZUcVFqVmdOWFBjYzBVYzdDTjAwVU9sb1FCNUlrSys5bVJ5MituMVE0Vk9qQXRVQnA1ZFEvNGhHcHhEZjAzUkoyRm1TWGc2TU52d2lod3ZMZUhmTFB2UTBnZnIyenJ5bmNW&time=1789668489&sign=fa05548a1ed0fe62ae62072581ecb178&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true",
         "defaultLine": "50pk"
        },
        {
          "name": "宗政",
          "query": "gid=1002997&pid=1&token=BASE64MWY3NVpSdjFwNTdzcUdSN3VUeVZkRmRJME0ycysxUE9SVm92cW85WEJ1aDJnME9RK3V1RmxBMHVqbkJQQjZyQTc3c0M5NHA3MStvZWNuMWptTVIxSVFIbGJ0U0htUEZwWE1oNlJYZXcxMTJoVDV3SkdmZXd0REVxc2diQ3doYXFTcUp2dnZuUXIrU1YyNjhzN2NwNUVCa0dxQk0vbFphdUxmTlJPWC93aGw0NTRvOUlOQlFETUZ3UndPck56MjhGWVBSTFVza2NmRm95MWF1c1Ezdm4reVZBY3B4VitaWFZOZUxIMGk0QThBeEtlVWE5cjZIelE4K0lKWGQ5K25ONmJzT2gwbzdkVmRaSG1TUXQ5L0MzREtkbw==&time=1789668506&sign=c2df66c600f43de59e2c9424d26e82d2&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true",
         "defaultLine": "50pk"
        },
        {
          "name": "koc",
          "query": "gid=1002997&pid=1&token=BASE64NDY5OGxrVms1c0IwbHJTdnEwQWgxRUtwK3VaNGFMYU1nNFpmMElCODdIdUJ4ZTU2bGFFWHlQeFpMZUw2V2NMTC9VM1JGMmF2MzZDWTkyMFJpQjd2eTBRWHZUdWloWTNhMDhnMzREQzVJcEdIcE1VbThhcnZrUXNYQktwSzNFYjFtOWh3WXllU09zSXFxQVJnK1Ywa2oyTW5NZkV0REJkbG1UT21ubFRDMnRZSWNaUTJWcVExNWMxdWRReGU1dW9DYkdMRlgvdGpHVU1UbzVqMU1sYTNrcjhJaFhUQVJsN3QrdWhSc2dnS2p1NjVLOGJOdlBoSnhickg1SmRIc2M3eWRtbXpRVTZHM3lDUE9GcVFUS2pa&time=1789668523&sign=6804771d1416e7c18e82a06ed1126f52&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true",
         "defaultLine": "50pk"
        },
        {
          "name": "农丁军",
          "query": "gid=1002997&pid=1&token=BASE64MGY5YnpOcnE4S3VlempGVTZYY2swZS9OM0ZDc2g0Y2EycUhSRVBTNGNheXl4NmVpZ1RUcGRJWkdrQVZHMFhCRjhhQ2tQc2h6djY4TXFPU2tza0lRS1QvOHcxTFUyZ3k2THFxSDBwMGtzSUx0YkkvbVowTkFVdkxYRmhEeHY0bUVvVnozejBiVFhvMStmeml6dDd3a3BlTWtFRUJpRFE2dlRTMlJhd1NRNEw4aE9YazkyN25vU1phTkpFd2RReVpjbEMvdXNBbEUwdFB3SnRwSklaV3NQT3dQNDM3b3ZaMnNWaG9qM0RaM0srYWZaMFNzQ3BITjcvNTRudVhieVdCcVZyNTFGZmdQenpiK0JCM0JCbFNq&time=1789668539&sign=40883b4ca34c8e0088800ec9666f237b&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true",
         "defaultLine": "50pk"
        },
        {
          "name": "玉麒麟",
          "query": "gid=1002997&pid=1&token=BASE64NGI5N3pZSTMra1M0QzJiYzhLTXJzbWgrZlBqdzBBZHZFa0N2V3RuR0diOCsvRVpMaVQ0bGZwWDVKeUNTSXdOOUh1cW91blFaYVJlbloxbnUyaDZkYWFmeVNGUzVheXNuaW0yNEpDSEhIaVQ0a1RxK0c5V3BtenlJNkxIemZ0QXVvYmVkQWNWc1MvOG1zd3hQZmhwVy9uTzI0bmpZaklPQnpWUWkzT2RmeGRTczYxbmNiOGZxNUZ1N2FQSHpkb255WFF2RTh1clJuUmFHYWxSYld4TTRrNU8vS0FhRHhHRnBBeTk4Y1lKRHpQMUhEVk1NVURBSmVlZUt4Smt4YlVUZkdpd2lQdkx3YmlSVXk4M1UvU2Mz&time=1789668562&sign=302a509bfd3b3e96a2ff8341eeb6c734&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true",
         "defaultLine": "50pk"
        },
        {
          "name": "修罗",
          "query": "gid=1002997&pid=1&token=BASE64NjE2NS9RQjJsYUphQzdVTlNocGNsNHVaQXA5NVdCakZxOWo5bUk2aG9EdURiVnhXbEwzc3BLekIzRjgzUXV5MHMrSFpKcjcxNnc5RWxuR285U3g2ZFZQLzJSQ0hrZFJPTjZSTjBBSHNjTUxuajV3QWN6QUZPTi9rWW9nakQvUnBFdmRLY3dmb0Z1YkJ0dDJlN3NBWWxDUWFWc0xNUVZ5V0dZZXlIcTZHNlF0MVVZY1htbUo2UW03ZXd4Rktmem9aR0ptZTZtSThCRUJ5MTVuaDdDZ0dWaTVpYkYwVWIwTkVNL2FpQ3Rqckdwek5nVWJtV1Buei9ZcVpVQnRGNU9xUUYraDZSbzhjenlZUUV1eXk1R1YrbC9KeQ==&time=1789668580&sign=5da5a4b764bbb4ce2febee3d219fadb4&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true",
         "defaultLine": "50pk"
        },
        {
          "name": "唐潇",
          "query": "gid=1002997&pid=1&token=BASE64ZDA4ZENUVms5aUtzYUNialVaTEN6cVhFTGxNKzVuQkxPZlNJWkJhYmtlaVErcXRhWGFhK3NtaGFpcFpJRTFNVWNNZS9hbUJJU0pFaFJWMGhialJGbjdMNHZPblhZa0ZadldYOFRDek5Mc3EwS0d2ODArcDhyeEtOQy96Tm5yUVd5M0llV2V3Mzdnak00cmd3TmszdkIvaEIySGpKV3dxWTYxYnNoV1ZyOG9HNGVGa0Y5VFA2dEVNNzZ1RjVxMnFQR253NUcxWFZHNjFhempxVWdLQmsrUDZNWGhqWjJJZ3Z4WHUvMTN0cXJKencrZDcwRld6Mzl2Y2lEK0ROWE5QZkdhZ2VBbmpnckdBQzVBWXdiMllu&time=1789668598&sign=3fd6064b0dcb419e72edad24a8e5b21c&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true",
         "defaultLine": "50pk"
        },
        {
          "name": "梦梦",
          "query": "gid=1002997&pid=1&token=BASE64MTE2NTVIRDk1VlQ0NnpyeHhzWG5XVEtQamxNcmplT3ZtLzFFR3hpTUNhV0hrbXl6b0JYWFZqUlMwZ3NBb1F3WUNySTdDVlFxQmdXZ3h6UTZZNlJ3TjNQcTFlTTlSZmVhR0NyaDVoamJTSzBqbFIvSWRRSmtLTHh6VFI5UEdPUEZvTFlqMDBCL1hNQmszblZiVEhCbS9PaDNtTVNudkV3Vkh0QWUveDVESXduU0pjbnp3LzRkZFY0Uy9vNjMzYUNGVElkUitnckJQWkFOVTlNNW84NGszMTQxakY2d09CVmNiWHhQN2RicDBkRkMrSk52VXFqeHltN05iajFFM2NUVkZjVHFRNXU0U1Q1cHFBRG8rYjgy&time=1789668628&sign=dd32b882e234a9747bc251ea33b3de9e&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true",
         "defaultLine": "50pk"
        }
      ]
    }
  ]
};
