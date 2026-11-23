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
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64YjliYVZ2OEQwWStxc3REb2ZLSWowWldwU3RMMGUrUW1jWFdxaC93V0tUdFdySHdmY1VTQmhneWhGL0NudEg4d2RSOEI3dHhtamhLZ3NGZ1BTc2hXSktMbTJTd1dScUNoaU00OFNDR0srNTRJa0dGKy9UdTFFTTVtV0tsQXlQSlB1OFhpVXdkSVNnT1VaOWVJUUQzclFLWEN2WnJNbTczc0s5TnAzVmVkNXcwYzVGdkxJVkExUmM2OFFyMlBhS2V6RnNVblVOR253YUtkcUQ5eHRCRWNVRW9LQ1pGblFDSXRMYUVZSHBwclVMT2c5Zm9KeVJpbEpxZkc2OXdtWE9seW1DZlhJYVVpQU9PbkVDY0s4TUh5c2lENw==&time=1795435712&sign=32131e8fb8ba628880ad0831db09bccc&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "霸气",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64ODVlY1N3OGpOek5ab3dicWc2RloyYzNMME5tcVRwQUJLK3VzU0FsS3J4akN5K2t5dmthbjdiQXdYUFNnUFg3MmFZTVJLSDV3Nm5aaCtFRVUwZVNCcnVxRmtZUUNNdHRrckZQMWk5a3FoZWVvVnd3MEZrdWJFeXY5TXFCcFpXNlYrYVZMZDBSUXZlL0liYkJkYk8vZnVFUm5iWnpiVzhRbFZrdjVLb1RxWERRWjBHZlR2UHBySGlvRkhWdXNjOS9aeFUrTnJWU0hRZmFmdDVCTkxQYkx0YUtKanhkYWpiR0d0TzFicmcybzRoT3haTjBVRTVxSVp2Q1lsNXRCZE1BYVhnandMT2h0S2VRRDRSaDN1STdS&time=1795435814&sign=ddb32a09e807e87603ebfcc7bb48f6cd&appVer=1020&platCode=37wan&IMEI=356597838607247&isPcLauncher=true"
        },
        {
          "name": "辞风",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64ZWU4ZnVkZDVpbWJFZkhyMDJocTV2VzAwUFp4a0l4eC9ZOWNVL000ZkJWejk5VE80T082aVEvNU11MVM5WHdCRTA1NndLaHlOb0EyQTIwdVU3NTQydW4zdzRaY2E5UlE1czRkcVdBbHVNdWJNRkFBaVpNbGJPYnFnK0ZmTEZNUkdIR3JRcnlGZnZockxhdGx2TWlNQStwb21QeU1tbVBnV3BrVkNob0xpbkF6SUd3eFY1Nk56QmthVklGUmN5a012YmNzSytGWCsrNTZMWVRMQXBkUzFiN1RQazljNXRGRkJva0lwZjk2ZlZIZlFsTW82Sm9XblFuOHVWaDhBU0Zld1BaOXBHNjhCcklzWEZEa0dyN0VR&time=1795435996&sign=fff14b3d49508850a7e3f622148d1355&appVer=1020&platCode=37wan&IMEI=356597838607247&isPcLauncher=true"
        },
        {
          "name": "中鬼",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64OThhYXlSSnZ2cndNdkdpMXZtT1BIajJPNGlxcmVMa0hwa3MyNmVoRVVpYkZPbkg1T1Y1Z3VwdDlWeEdpVWt3WkJSdTJMa0t4ZFQrMmF3b3JQMmhhQWNwYzZkbWZNK0R6OWVSWldMenBzajVrQWRiZ1U1elgydi9ndG0rb0FiNk5JdG9iZFdpcGpJV3ZKOVRwcTgvQkJVaCsvU0hVSmNDY2FhVTMySVBOUWF2Qi9yb0VpZHZyL3FkMEV0Z1hvcWs1NUE3WEl0MmVLcHlaNDg1VHBmYVlicHUxRWhYaUMyWTRiRHg3V1JmU01FK3AraDNBdjQ1ZXQxU1BvYXhmQ3ZtK3U5dU9CcHRoUnB2L1gwZ3I2ZFdT&time=1795435727&sign=d70f52143788a84c031e2a39dff70a12&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "火苗",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64NWFiZGx2ZWhYSmFaY21xZzF6djBwUysrandUL2NCUWFld0xkMStMM3p3ZDZINEZHcGt1RHBZMVRSRUR2ZGZaTmo1VGV1RlQ4TmVFRW1LSE1Na3RVOUZqT0NtcHB6MG1lcGZjdlM1UTJNNXgydGV4eDNBNXBrbzQvV2tNWGZaaGJ1ZksxQU1LVEJqVUlZVFF5cG5Lc1pZTGl5VkZNdmJzb1BVdEk4RXNGc1ZJKzIrRWRKQjRTbjNQTm9FWGtLNDFocGFaS3oxMmQ2cTNIa0QwaWpDWTV0eC9VTjhTVnlSV2pXRTRmMWlCa3VzRW9JQ1lRbVI0S1pkSVlLYTRiTXo5NmpSWDFiYXhPZ1RjV1JkaStuRi9BN3dnSg==&time=1795435910&sign=bf502cee2a47579b8da8ce4f425856db&appVer=1020&platCode=37wan&IMEI=356597838607247&isPcLauncher=true"
        },
        {
          "name": "兔子",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64YWNkYkI1c09KeFRkVUd4N2VwQ05RWitGZUx4K3NHTEptZEZLRnFqYnJpekV3MmtZUkpRSmc3aVk1L2xza1ZQNVNUWXNxNVV5dlkvOXhSd2NYaU14NGRNRXc4c080OE1ubFRPN0N2RVowMHNrajdLaGt4YkgxdmNEN1Z4b3B0aUtzUUI2ckt4Z25OWGd4bTNSM1MrbUtlVm9HaXc0U1h6NmV2L1B6M20xL0hScXMzMHFJbG0xazBweml4NmxMTVFqYWdOOHZoeWVIcDJrYWZpK3ZvZlA0NC9KaGN4eHV1RUY0dzg3ekpxTEhRNGRnV0doVHlaK2pyRmtLSXlna1ZnNkF2QlZuTzVYaDM1QVYwS2NNUUtD&time=1795436053&sign=72a47743b2d9f6b825d3072827573089&appVer=1020&platCode=37wan&IMEI=356597838607247&isPcLauncher=true"
        },
        {
          "name": "小鬼",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64ZDRhY3ZaUWZYZk9GbmdFcEhMeTBWcWh2ZHpKY3RTdy9VeFZYdGFpVURvTmNjMDRCbkordmNibXppSkJqUDJhOForL0huTHY2T2ZqWGhoU3d1STJWUTQwNEc0VmRWWHhtL3VBZERJQ0ZCU2hXVW84a2VHZ29sZzhxaGFWdm5Uci9hbHRyZ2xDbWNMUFZHYmt5amZGSDR1aUw1anFsT05GclUvSldGYndHZkJSRWxpZDUraWgzYm5vWXFHNDB3ODI5TmRsb2xFdVlUL0YxVThkRmNqdnNINEo0SloybTQ3RjY1cjFIYzhxUlNTWDF0alhCL3BBU2tLSldGMFlJUXY3dStMZEpOaVlMY3ZzR2tTWVdMbnJR&time=1795435887&sign=66e0d9f0f8493c465ee12bd244121233&appVer=1020&platCode=37wan&IMEI=356597838607247&isPcLauncher=true"
        },
        {
          "name": "厉害",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64YzZhMmJWNzNWZ0hYSWtKc3hSRVBvcFVOSW16OWZ3ZStJRnhuSGF4OGtDcHlYVlBSdkVpQzJSYjVoZmdlODh1OWJCcUN3bnJ4OVpaR0ZTUW9UNFJBTXRHVzlKc253a00weXRER0lEMGVocVpTSlVTeXVJUUFwNUUxazdHeUowb1Zwa1ozbTlRRXRpVzFtNEE3c3FmYkRHNHBmbXJqRjdVUmhTaWFUYlF4S3FmN2dRMlcvWGJJMFFlN085TlpVWldZL2s3Wktwb3pBS3hvZ05uY3ArbjZMT0JJeisvY3lMekMyd2prQlRORHZiTG1WZDhCeGNueUMxS0VhWWxzVVVSQjBWMHBxckVMaiswQy9Dd0VtRWtB&time=1795435939&sign=44d193c1f8814aeb574f985b6f22407b&appVer=1020&platCode=37wan&IMEI=356597838607247&isPcLauncher=true"
        },
        {
          "name": "浅陌",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64NjRjYzhaUktpd1dBY1duQmJLMTV5a2FUWmNFNXV2cnlrY3VKOStlSkJCUjN6a3lVVkV0aFg3ZTJtMGh1dWRORk80SzVUOWV6S2xsVEVReCtxS0hGYkZEZjQ3dkZETEJVbElIYjlqdHN5RE1uNXBkZjR2NmFHN2FCMHVCTWRqZng4ajk3cTJhWXhPdUNKMjBUajB6RGZGbWJHbE05YkFRRjZScGFudXd4c01ZMHJWQ3duK0dnL216YlBIZm40alZiR2k5T2pzaGxSNGVnMEszaGJaMTFVQ2VNTHM3emF1WEpPaFNUMDNCckZWaWM4V1BwUzEydHpPRGs0M2xxQkZzWW9Vdk90UXNLSTM4aVhHdWRjcTVK&time=1795435845&sign=ec7f608e3c4d7ec4a95bf3120210e293&appVer=1020&platCode=37wan&IMEI=356597838607247&isPcLauncher=true"
        },
        {
          "name": "雾",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64ODczODVDa0twNXVNNlE1NFVZVUVubVh1ei9laE9Db0FqK0lKWGZpNHRpeU5pTElBekJ2eDNjSzlOWEI4SG1Fb2gxSFpzQmxQcnp2NG5TVncyWXhKaEdKN0NFNTk1VFIxazJXRFRrRG9ucGpqOGoyTGROUXd5dFJJZitwZDVTbkwxMi9CNHN4Uk84ZWJEMTZieVo5NE5PaUp2ek1EcEFYVlY2elVYT3Y5WHBqaFJQWmZ4ejM4RHk4S3RiQlEzaFp2UmFKTWFweUpYa0xNZTl1YmpQVEpKK21HN2hxSnVmZjNDS25xTW9TSWRTVlBoRjFwdE5EdW1DeElIa29PNUl2R2x6QTZOQlJGMUdWamhtOHpqUnBy&time=1795435970&sign=4c91643f1c5b5cbb898d235b13d5e088&appVer=1020&platCode=37wan&IMEI=356597838607247&isPcLauncher=true"
        },
        {
          "name": "图图图",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64OGVlNXh5WWRodDFUc0s2M3RCY1ExMC9pY29IaVp4NWdLd1VxQm5tV254c1BqWEJnVHEwRU54S0N5UzFEVmpvK2FSamE5SU0vODRlMmdUQlVOazJPMHl6K3Q3NzZqbzNaaE5kODNmbFBnUjlGV3JTeWJkdnZibXpueGZrQ1l5aHlNM1d0NWNJdVBiWEFORWJQS3AzcXg5b01mL3lLRk9wVnE5NE5OZ3RoUmNWRk43TU1tRFlJejZlcFk4NWRZZ3JzeGFnWHl2Yloxd3ZWN29tVGo0UW5VN2lYM3hXRHhGZklnVmV4ZE9NV1RjY3BqMjJ5T2hkRkxkSGFCSjAzT2o2TmJzT29hc2dKTHM2Q1RhUUd2RDFS&time=1795436083&sign=f461bfeeb0d78f4aa7391f79d5da109a&appVer=1020&platCode=37wan&IMEI=356597838607247&isPcLauncher=true"
        }
      ]
    },
    {
      "name": "小号",
      "accounts": [
        {
          "name": "可爱",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64Yjc2ZFdWS2YwNFo2Sk11V2t0M0NZUHFnRFpzWFkwd2tJeVlJSHJrTkJpMWJ2cDR4VVRWZXkzM2tiWlphNW9mblZZcFVzR0dOcE5XR1p0NE8wRVFuRlBJZ05KT0hLaktBcThmRVZMdVl5dDdBTktsN3ZpRGQ2MERndi8xTk1NZmxQN0VDTFBnSkhvZ0RHbUhXOVlWc0poeTNiOHpTUTc2WE5MTXpaaXB1SU9VMXM2QysrU1d6eTV5dHJpMEw1SitxYkdxcEdlV1JJaytpelpTWEYveDZTSC9mSXY5NjJwMWpUR1FHZC9JNTgvb3Q0Y2ZiWXNMUnNqbWYrOGlHOFNmTEh2VUc1UmhxeHJzUEpOanU2RFh1&time=1795436122&sign=7145d48dc1adeeeb6144641b10ecf6d0&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "八倍",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64NjJlMENtU1lTL2lZWDd6L2tta0U0ZFJ1YVE3Z0JqdExpMTdPMzNXMFlQbnFIblZ6MzNybjA2UExaUzBJNTVycWM1MWJ2czhaQUdjR0RQdGthVkFqMzYzLzNlNjRCVmcvY0V4dFlWbnNkaHRtUCsvRktsQjJpay9QOHJ5U3ExdmRUemtxTTAxd2FDczN4aWxiSEV2TDRzdm9Od2tyRitVR2d1NCtudVJqTk9YZDUzNkpsdmZGUlJORDMyWHp1MlVva2I5WmpkV216S3Z6OGxNVmRIVHZZdHh1cmtDM1c5NU9SMU5PYUljNWNXZ3o4SzBkZWZTRkVvTTc5SEVKWDJGdHY5MjhLTjFpenRhZDZ3Nmh6QTZL&time=1795436147&sign=5c1b064ae6696c94acd1b001d8ab059a&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "鬼",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64MzcxN3h6N0lOdVJWcjBVYlNzWlBaZCtFOE9SYUhxalQ4b3QrT2FIaUlIR3hxU0xhRUNSWUg4ZDZkR1hQWGdHZWtZSWdqTkkrbkVPVXZKWWI3YWpFa1pJUjY5QzVEQ1VVM3R3eUxlSHB1R2Z3cGhrSXhQcDhyTE1BOE9BMzF6cjFnRklsNVpFcUVFQk9aaXF2em5DQkpUQUtUOTBPUHZFeU9mSDYvVW1tSzZCRDV4SHBnbWFEdDllTnNkaWU1UjJSd1V6alY4VW5GNVZmZ2doZ2ttNmhoOGJ3bTUwNG1EZDhYRnlkZko4RmlIOHRvYVNqd0doT1Zkb3JxaDdYQzlDelRCK2JLbUx2UmlZN3NRUVgvWndX&time=1795436170&sign=43f1fe9e6f8a06d79ba4c6a0c51620fe&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "飘逸",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64NWJjYnN1OEY2R21IdXhHamlSVWVGdllBMUxNUytWbW5vc0xSb0ZqTFg2MTNyR3BoMTZQaVJzQ3JydTRvZjZkZk9GanpDdGNZYnJ3b3lVeWI3dEhTeXNoQU9XOVdMeWdZS25oaStJSHYveFpGU0JoUWpTUUwzWmVRZ21waFR5VVlCblc0Q2w0eHd1ZFJ4VE55K3RtaDBoU2lmWTY1NVZuZDlPaUVNdXc4dWFaUk5GMkNaK0RWdlluRHlLZVo4TWFSYzdYTHNhdm0vcGFaUE9YQkFLRWtlNVdWa2NuQ3labXhSaEZ4YWV0UC9UOS9qUkoxTHo5SkdkY0M2TkxQRGxQWlB1SW5XSWVIQmJxNFVXOE9kU2Rz&time=1795436194&sign=6431e8fb3a09445072f6c279a9d11403&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "动情",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64ZDBkMTAvc1FQcWQyVmVmUXhPeVF3TzJGdDRsb2U3WC9BMy9Dbng4cDl5dEJwRVZNTHRwVk1YWkVmUytzWXBsbXhad0Ftb3NkSzhsRTl4dTA0M2NaZld2K3NVajc3Wm5wZkZJLzZiSUk5Z1Jtak9UbVQ4MUh2L3FkR3hwb2FiQTZtbnlhOXJ2aERMazVwdUhkbGQxZ3d1TEVGRy93L242T0NKbWlSNnNsY2U5eWFpcjJlWmJsazUxZUNDbmRTQ2U1TlVFcW9ZTHM3N2FLRjNJaml0aVJlNzZXeEp1Z2huSHRCZHhzSkxNTDdZSWJqRURoMU1tUXpzaXFDWEE1Qmd2bTdUYXNUcjZKVDJRK29DSno2U1JT&time=1795436232&sign=43951f440ad7741a76625e7c42bed161&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "潇洒",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64ZGZjNnIvU3NLZlY0d1VmKzBSTWZIZEI4QnU1bGdTZGI4OU9kdGYvU0JEVkVpNXRLeGg4V0FUcUhMNjFic1U5MzQvSW9wSHduNnhTbkplSWovS3Ztc0RweVVJVUJUblJGZ0oxTUJRRUJnVXcvL2NBaEF5RVIxTDNzbWZWM0NyM0xwOWZKclJWYlJvQWNBcTJnNmJlTzZVaEo1R2taRWdwbHc1cHFmT3NqZUpDcWpENXQ0aDZ6YnlyQTg4em5zV1VLcnkvcXBtYk5nWWl3QUhOTmV3bkpHQjdOSG00ZURBWEdzR3VWOVhBZXl0MXJXNlpIczh6cXlWNWEyYVlRRzVJRWVkUGNUdjA0elVSRmw5eWx1bGtNRTh3bQ==&time=1795436259&sign=10fe6d2029824532d9a8b14414658659&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "勤奋",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64MzdkYndjcW5TNFpadzg4RUYyTW9JWnJybitPaHVRY3g5MjZkcWJIUEIyejRILzBRZTh2MTdmTE02T2RSRFJYTGZyZjRiNnFLc05wY2x2SGd3MXg5OWprbDg4MjNKdWlQaW0vVDFSUkVFa0FpWURYSFRpVzQzbFpRd1lLcHpVVkVPS0k3c1B2NHgyd25RbGZpcFpSWGQvak1zNTc1ZHlNb2h4WmxwMFZDL3NOcjhkWWljNHI1T1FsUDJCWlk4NGx6SHYrc0JRRC8xSWdveFhhWitxdUE3dXlYcjN5bXlpbGluZDNSYklzM1VvL29HNE93a2RGMFpUUGhYbFpPV0FtYkNPeGFlWnlzSk8vVzNXSjBOK3pW&time=1795436285&sign=cd76b10132c5d7979d80428fba9910c6&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "毁灭",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64ZDAxNkYvUmxHeXF4R3Z6TW1FbnZ0K21wTmhzN2hOVEpCMllQMWlYTm1nekRBVXVhQmRnTmQ5TkFvdkFwYjFXc0dyTVpUSGczTUJnYmNPZUgvWFBnQUh6dmVVWkVSbHJmMldCT3FBU05oSVRWRVhLU3BUYTh5bDhyRElscnJwL1R5U1MydEhkQkEyMTlHQVY5eENNem81UEY3Ukt4dVhtWDR5MStGMTE3YlI5WkFpSGM0bElzZ2RlUndXdDhEaHV6b1hNbWFRdGhxTGdQcHpuSnREdVN2c2R0YzR1Zmg4ZGpUcHM5aVBhR3o2N2NZWlJQRDAxaWgrQVVkRXJwdmZ6MGJtcDUxUHFGaVNtOUY5ckJmZzU3UlR6eg==&time=1795436308&sign=1b7ea30da27fe407b2da483455c2d5b3&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "绝美",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64ODUxN1lxRzg5emxBUGl4T0NuQ1pjNWtVTHJzamsxNGplTFFudWpKc1dUZDJnMUNicGt6VFdOcGprQWFuTEVsZ0g1eHJKS0F6b1pGbzh4YVhKTnBJREFZYngySGZ0MnYzQkdnOCtTenQvOXl3UldBTjJ2VUo5TVJ2MFVqdTlwTHMyc01KdE1DVTZ6RE9aV1F5VnlRdFhReTF1WUlzdVZ0RG5oQlNGSTNlWWFQVW11M1lWQ0ZjczhVN2FlcW91czRNWmVpcjJuNFdqTVV1bUFCOTkrZy9ERTFzRXhDMk4zVkdCQURzejY2QkY2ODkwclRuVS9LaHd1NHZndWlJZkxKc0xVakgrQ2puWS9aZlNRbWVvbE1J&time=1795436333&sign=e737d4142c96aa2becac124542ce2a5e&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "痴情",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64YzRiOWErbTFRQnVveUV4YUdVMkNIY0JJdmtGTnlMQm1RNHR3L3ZmRkY2dTFrdm5yZXVYT2xKR09xYlpwV1AySmgzOFBrL3BVWVFkMHI0bnBDZWZHajJ3d3RWemVxaldhMFU2SlR5WmFGV2dUOTZQa25IVFpLWGRUT3IyMW1MdHRnZERMVHhYMDZiL01UL0FPMHdCZ2NPWGZIRTRlMDcwUUcxWWwzMmRtRzhGVVY2TXJjY1lCamsyRGpTbklzSjJpcG56ODB1cTZkekUrSnVnRGdsYVEwVFgxeVhueXZhazJqYTVQRXNOUVdaRmViMTlzS0tlUldRcnN3M0grK2w2dHc1eUhRSTcxOHY0VUp5Ym0rMVVEN2Q3SQ==&time=1795436357&sign=769b5f8abac79b953d6142fe7eecae86&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "迷情",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64NmUyZlVCeXJxMEZ1RVd0MmE0UWdXSG5ISGdVOVZBTTk5US9KTjRSd05OQ053TFdGUkY5VUV1Q3duZXQraVR6UjBRaWVHSVpXbnZmcGtCY3B5TGJQNHFyVlI3WjN1cGlzYk5tSUx4MUl6Wlc2Qjlub0FSZ2tWVmNFNWpJVjl5VHBIbFpIRzQ2UVgwWTJOUjVvd1RwdzVIRkRNbUQ3Rm5HTDZVWmI2dFM2endhck5LRnFWbHdWWjB6cy9FK2hET2d1WTZEUDBUaCtUd2w3dHo0VXdaa01za29VWUcySUNxVTU0d2t6VE5MK3JlSlp5WGdKWEVacUhocXcrZlEwV1QwUDMzaTRWVmRNbW5SVC9JcVQ5Zmwv&time=1795436382&sign=9fcabd195ca39c7a0c3d139c802aebba&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "炸天",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64MTBmZkYrVDNYRVhGdHh5dEhYM2J2N1ZyQzZlOXJ5Qyt1dmVSS0FTdkpMTmZNYnZYZW0rRWltWktseXJ3a3l1dURVR1JzUDBvY3BFcTdPeHUvSTJxUFd2cFc1MGQzNTRDK0dCMjBqRjBYUUVlN2dOUllEaHJQN2pDVEQzcnBjTUlGNGR0NGMzT0tTa2dNSHZ4aGUzYnBKTnVxZlRyT0FmZ3BQd2xjanhZUzBLOVYwTG9xNUpUU05BMnVpSytFYi9XcVJoR0U2S2p3dGxyNmxqVjlVZkt1dUsrNWUyQS9TMFBabmh5bUI5YWNmbnN1ak9JVFcybDBIZzZpL2xZSmVkTXhQcTcxUzNTUEhPRzZQU0hPTGYy&time=1795436412&sign=70a97373196b452dbddecd76d45c165e&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "邪恶",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64MDJkNkpuZDNTODhEakYvUzFOZ0NqakwzUFFleGpxc3JjODh3cFp5ZUp5WVdGOEtGWGhVbkdQYjJTWHhzdm9WMVVMckt2bE5DQkNzZjVUTmZSNHo4VDZIU3RQdHJnSjVVUFJydXRMclY0aWZZcm85L0JpSGpoQVZuOTYvY25jZUdVMzhwOUo0VkpzanVGWlFJM1BiSUFaVjBsOUFPTklNeGpLQzczeFYrazh3Q1l1OVZOTlU4MHpmVE5hdGNNdGUxcHFKanhaYTlqNDZtWTMvMFZMYzNROVdUS05LRDJMWmxJTC9IV2YzK2dKZUhDcEN1Q2lWWnkvb1VQWFptR1JPazRPRmxIdTZKRWhzWnRIMFNycGhZM1M0NA==&time=1795436435&sign=9e3620b9b0959e0b639b8d533b030fd0&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "内涵",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64MjI2YzVWT2NsMDIvRklFSWlVV3ZBUHJNY2FUZWRtWE13eWtaWTdEK1NhVzVUS3NhTDJrQnlzUUhBNTRkN1BoalhjdlpjVTlTSWhKNDRlL2dKN05JRllmdWd1anltY0F2SzRLNnJna2JtbUFxblF1OXBOenVxYjBqREFqL0tGc1EweGR6b0lYT3dzWitON1NyYUhjUytad1ZoeG5kbXZYbXpFeXVZQ1dJMi9MSEVHei9GY1I1NDRJTXlLalRodlppUnNpRVQya2x4ZmxkeFZkbk9tc0lVLytGSFNLbTJuTGRJT3NVdDZ4YU5PU0ZMVUNrU0hHMDU1TU9XL1M4RTVlQ3VWNXQxZjMxZGV1NUxVa2JvQTVQUkNsSA==&time=1795436458&sign=3638a4929fcb66e0fb986175ab82b1aa&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "温柔",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64NDI2OTMzaG5KZ0JTNElyWGoveEFpYTltaEpTY244T29WSjZ0ZHJBUTEvRkpJUkZ3NGw1M1VGbFFraDBLMVdPdTBVdWE0bjNOVjIxRFV6amMycmdPZTVRTVQrSE14Unpwc21aUHYzUDY4UDB6NzlVcTgvcVFneGNNdjdmRk5udGZla0tsN1N3eEt1c3M2cVRRd3dsSDZhV0kvMXF4UFRwenZuNVhzZ29aUitRdTdDQmR2d09idk1wMGZoSXA3TmdCTTNVUytvd2xEY2ZZNWNyQlJ4UHMwd3E0N3NZdmRZSUpMTWc1ekpLNEluUktkV1ZmeDBpLzBzbnBiRnNmd2w0S1dRMG5JNExla1F3OEhOYXZhUncz&time=1795436475&sign=1773071c0cd6dcbb24f37cc28f4df8ef&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        }
      ]
    },
    {
      "name": "小号",
      "accounts": [
        {
          "name": "七罪",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64ODk1ZU9MREtkbi9WZVNQSFFQZU9BQ1h2ZGR5czljMjdzTkpKZXRlSEZUcGY0SEFPUGQzVnhEc3Q2TUNleWlUb1hvdEJ0eS9DRTRETFQ5OGhMNmN6RmptK0QwbkRwR05jSnJYTk1VUE5LRWxaeTFWVFZXN2U0NHE0R1dBekpzU2dOcW9FWjl0NGE2WmJ1Nm1Vdy85Q1RKY1U0YjlZdExmVTVrK1dFUUl6VWhEcHNpNDR3Mk10djF1L1BRZkFuZVdMejd6SXlYSmozeWdQaDBJL0MrSVpiRzB3RnRVcFd1QW1BVG9Pd0dMWmd5L2FzRHFSbVFjYU12N2M3NlVGKzVUWE1BbDI5VnpGZ0g3ek1pWFZRY0d1&time=1795436520&sign=2c14a6704b6e9d4dca1aac8ec9b61992&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "南宫",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64ZDgwOHdZcFFhUkpXeGJGVytPZC9sZTN5Wk9XRVRRMGZicHRpYnQrSTNWdWMwQUZzMEZoZnduWUVTY2NyU0ZIV0tqZ1NGbGpZdVQva2ZvMlNmbVJBVGd2Z0JCQkwxQmlweE83VFM4VkQ5d2Jad2s0TU5GenhpODR0Zk5mY29jUHB3Vmg1S293TjgwRXllUTBwc1RyclhnRzY4dkh4QnIzSWNqRUE4eUowZTREd1FCVXBzSXN0eUZrWmVvOWs3Y1hMbGQxdXAyOVpiOG1aS1Y4RFJ4dEZyUzQ0KzJ5ZFIxVklwVHZQSXlhekxFSFdLblhUQUtlcmF4RlcwNG5qeEtheHZDR2RSMTRFZURXLzc3OExhN1Bq&time=1795436549&sign=29e261a22f0043225d4fad365707a424&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "九哥",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64YWQxYjFMc2Q5aFF2WEJtcm9rTk1qRlMwNFZYYTVpdHpURi8xY3RId0c0c3FCRGYvQ1lvNCtLa040NjJRYnlCUkczUDJkaWpLdTM4RzVMOGkwd1Rzc0RmczR0TU1PRDh4ay9tMzBVT1pLdVJQMlJtd0k0VFRGaENiV3BESDVYYmUyVFFWSFhyazk3SUJDaFp6ODRtNDU4ZTIvSC9lQk9SOE9PRGdZK1I5UFZzRUZaVWxFVkxTSU96dUhQUFZoRjllR21mOUF0b1QyVEZxUUx6Z2VOOGRvVGVxT0FGeU00TDlIc0w1a3JFNGZ4L2I3WktqYWVSTy83YW5HV1ZOcllDRkMrSm5seTZuQlUwS0Rtc0IrdFJC&time=1795436567&sign=5e2be4138f1324fa5bafa52e86762505&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "傲天",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64OWYyMElmeExTcEloaUJML3UyRmhlb1R5aDl0YXNiajZidzE2NHY3ekZvWGdaVzFJQmhhNm94eTNrbVRZcjRtNSs1bVZYYXB0cjZQU003bFpjbTlPYU9ZelRLRFNvTUZhYlNUL2lWU0tOZityeTdkWHlnOGgxNytPc2h0RzNMSkpoSVZaaWcwUXpyMkhOVjAvNzZxUnE0NWJsOFFQb1FNZTFBbGc3d3BoR3NaK1Nya0QwMExUenkwUUZhdWI2bjIyWlFqZFlrSnhsK0dVUlJMMExsSXlMMHpWK0xqZjJYUHhxYlUzWDNPVUhMSmtVYWFCZFFxVElTY1Y5VkVYdlUzejlzN2dCNm1TdWFUeFZUOWVDNkhp&time=1795436662&sign=66fa02904513e4b92a87509bcce327c5&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "琉璃",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64NGYzZE12WXNoaDJjNUoySTFxYmNhSCtBTnU5WGF3bklnRzJ3RGJpSXFlQnFkOFRQcU9XbmpVeFh0a3lqTG5EYXNpSlc5NHVUaTYrdERBZHE4THAzdlpPaU8za0N3YmtuTE9KYzl1akhKUll3STdhSEJDZkxpRWNUWTRXTFhWSHZXNnoyQnA1Y29ZUjFLYllQZTR1VHIycmx6SFBUWWZEOTBDbUx5UHpuM09xcXBmRXNrVVZyUVRTV1crQTJwVmo3M2lYWDN5a1N2RmpBZnJackM3MXRsejQ3QXdHSWVGeWwySHJoL0g3eEwzWm5VdXJsek1BaEVpbDVDUmVsczYvbjVFR2Y3OVRQeXBZUkwxQzZaMnU3&time=1795436608&sign=785eb9108a78fb558a14398df74583ac&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "飞雪",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64NjUzZWRIZmdVZXl0V3JGdHl0eVJlbWpwUVYyZkZyYjJMeitjZGthZVpoczhVQy8rSVltelVDdXFTZlNKdk8wOEM2QzRGMEhOa2JmYlpXcDJwMjJZVHZHZnVyYVluRWd5aDJZYWZkTmxzeGVOSVpxcGFtM1lUbmJXWi9DalZPOW1aUjEyWFliTU01M1NOMkYxY3RwR3dPa0lQTXlYWE9FSlRwUHRUSDVjN2lIWmI0TUg1bDAzWks4YmRpWTBCdVkxSDg1V01uWjQrbU0vTUZwVkRnejYrQVhGRitLTXFLTy9WdVdaQTc4ZEQzZ2RBWXBkS0EvWjdTRy90b1lJRGtQZHVpV0tEckhldHlGYVBzemczclo0&time=1795436634&sign=25fbf911c84acb6c9798795ed58609b3&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "三少",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64YTFhNmJTeDBGa3BPa1hxQmZMMFo2THBtL0ZDOWdvQU1LYnV4Q1dQWmNrblRwODIrNURZc25mdWExSGZZd2RuRFVDL0cyNHoyUk00UnowdXRMRHc5VEVJZXE0SEIxV3dEWHdaZVZFMzk3NEJDUlFDYkxjdGJyRDhNcmpkdk9JNmtuK3BHUjRyNGdsOFJqN21WNmdGRk9oS0ExTmV6cHNjK1hEMGtZZ3RKSlAzV0ZyZjdzSFRzVE1UM2p5T01HNmdIWWdvUUVvcXoyUFc4MHMzTTBEQzZ5ejF1cTJsbkhUa3FRNzRNckd5dWRCSVYwdytsR1NZV1F4V1ZqbHhQbVA5QThDR2w3MDg0bGNYdmFyTmhkUUc3&time=1795436687&sign=ffa970e843701ca9dac6743a88220ffb&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "幻影",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64MDZjNVk2SldDS1ZrV0NSUW1tZnVPSmhJTlM3Zks3UkxUZ1dNNWNONUhabjdRN2NnT0N3SzJSdk1pWWVFaTVXSDJNQmV6V2U5TU1WZGh4YVZFY2VzQ3NNMXdTeTIxdy9jVW54cXd4ZkxZYnBvdUNiSFBITmZFbE9lQVAvaWppejVkRTdJMi9UVnU5K05aMnFPSHdESnlEbXlkUWZ4L1lwdk4zWmlNZXNmWWVUcE10MGdDMWszNVZLeFhOQWNVRWgybkR6d3RrUGFqaVowekhVcEJyZkw1VHQ4TWJKNG5OeFdWcjdicTB1ZitVSTRhdDQrMkNqNThXK3k1NDBpZUtSVnN4eWR2Ync4U1JJOUlmVFd0TWNX&time=1795436709&sign=4dd8dde5ca8f5f9b14b1fb08647e3a94&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "宗政",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64NGE1YmdGWnJZQ2l3bFFFS2FEbC9FLzZ3YWh5Sk80WDdGVW9nV01HQm90UXVHc2RrQk1GRFFuaFhKV3FBNFFYV0JyWk43TFE3KzRCRkVGbW9OUzd2dy9OWlhLUDYxUnZpTmdaNnJlMkE0YXdmcDk1N3RITU5iV2pVaFpjMEkrY2pXUW1iNXptVEk3c2lUbzBKVEYzVnJsQ2xYMTVQcXR1bTVWclV5VTcvRDRpdkRkYW9IUUpCOHVOTVR0aTJBUnNkYmFkc2dzR0lJRDgrRlc0U1VFMUFKMkNJUUdydTN2Z2VELytyRERzTzBjK2xjM3YvVjBDeld4WjBwTDVpYktSREN0ZWVSY05icUV5VTR5a3BVK3QwcUJ3UA==&time=1795436732&sign=93f073052dfeb6f34035de440f2584c9&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "koc",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64MDYyZFdVOVNEaFNiUWxZT1FxcmF5UjNqSEErUjVBbFRnMkxhNmJIZlYwbHpOOTZQYllwYk9MUmF4RHN1OWtTWnRRdkU1TW02cW5PVklZMGFQNy9DbzI2SEJiVHd5S2RpOUhCZ3NVenQyTElPNFNzNTRwMHlSNkg1RVYrWjVCSk1DeXEyaFowb2dFRmVVY2s0SVlOODJPUkp0NXpBSGJEdmhnNGtMZENwNk4wMGt6bXBqd3Urc3U4RnlQc1N3Z2NncjUrTURmT3pBTEVITFBxRFZTdWsvVDZsRThQdnoyOWk3TzRiUkhOdis1bGZDaDluc3NUVmlOMFR6YlBGWGpFbFZWRzgzVGVTVGJNTERHcmpWbUJV&time=1795436750&sign=7e6390c3cca11ed9ac12574560a7b4cd&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "农丁军",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64NmE4ZXlZbENVT2dCVEJKQ2VWT2FXY0VJUXpXQVF2dW5MMmxtYW0wdURzM0xuWHUyT0lEMGYxTTJidXQ1WXpsVllHSHZOS3E0WWYvRTM0SFVCQkNCcVhzc3FtRThNUVdQaTZFZUJSMVNmRWZqRzNKVXloWkNybU5rMG54UUZFUFQ1MVA4enM4czluYWJQc1luUmp1NVdRaW9sZWxPT1VNcE1PVDlWU1hSWWQ4MTV0S1h5Y0dYKysxSFY4bHNGZnpuVTI1V3ZoVGNzS09jaEJxYW1PaWRDbWNkcWs1MFdoZDRxTWs4bm5TR1VCYkU4Ky9QRytvVHdUT3UwRTlVYWduaXpKUjJvVmFTM1BqY1lCUkRJN2FI&time=1795436787&sign=575c90c4f3372426145d0399341442bc&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "玉麒麟",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64OTk1Yy9kbDlRajhReGlPVWpEd09iVjg0MEVXQWVUeEFmOEdlbFl5RTBwWnA0c29sMTlFaGZ2ZS9TdDNKbUZoVXZsME4zb0pTMUFDdzNlVmlGd09kSFd1R1BWMElTZm50SGlvWTF1V2lwRU1vUW1nUVRzdzBYTVg2b0tOVUtnM09abWppeW91SzVsRUpvMElpTEFMNG5hQTJlei9pTGYyMUF4cHNvZjNjS2Vhc3F1RjhCNnB1VHpqRjBQQlQ4YTJzY1VWOHQ1bzNYQXJ6U0swYW8vWjF2c21EcjZUc1BFVm85NVAveG5sL1ZKMUtkaUdxdzAvSlBCa1BzS2NDMGVTaEtGQnJNWitsVXpMR3phUXpldDRh&time=1795436809&sign=b887781fcfaf30232dc1f3e3657a6f31&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "修罗",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64NTBkNUM4Y05OZzJKU2tLbllDUkVwbWNMVWIzSStZTXNjZ1BabXhmb0FvZGoyRk44ejJCTGxNZ25SaTdYb1AzSEd2WWJ4dmFtL1pVMlI4eDRsZG1LLzJ1YWp2eVAwNGlpSGw5Wm9LWnNhdlRUYW9TV1c5ZFl3YWZ5VXF1Sjl4WVJiMlZBbDFjbFh3MC9WM0pMeE5MdWJXcklKMThpaEV4S0tkN3IrTTVVYVhCaUxySEZhZEtSMEQrZVpRZHhHb2Z4Y3I3ZjI5VCs4ZXJyOW45WlVpVHkxM0VheWgxK0JFOCtvNitNRlR6Z1kzcVhtQUhkMWFVV0JobUZXN2lnSGliQmtsTU02NkgyQkViV1M2YWlqNXNHbzRmaQ==&time=1795436831&sign=196649f9359e48dd6fdfe5a67b796ac8&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "唐潇",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64NzBlYVp5NEJEQWdvV3FlNkxCS2lvSXJXNUc1NmY2RmVvQXplblc5OFhVb1BXb1BKWk4yM21hUFl4KzJXMTc5TTFFcFpTWVRSdmVOM3dlRnYveVpxN2tLVWhMa3VmL2FOL1NGTHNtekJQbkNzaXdZRDR6K09obEdIak81V2VyaHBqZWhWTFdZSTk3M2djRkNqdUVWU0RjV2h4Qm1GRjVURmpsQzY1WmRrU3V3UWRwYUtZcXVBdGQ1TGRld0tyK0d5TVhNV2FkaHVtVWhnald4OTVKenFCRko1YWtZdkhMSWd6UFROSGF3a2xMT0VFRXhPazlsK0dod0UyN0ZncGhIM0RUbGprU3VESDJtZ2lKMXZzeG1r&time=1795436857&sign=7f88bcec1103056de7b66661185b0e67&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        },
        {
          "name": "梦梦",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64MzQ2ZUM1ZkRFdkdOTnJiUVhCNFFXb2tPUC9obng3bWE2azU5T0dTbklObmRDRkl5K1B2ZE0vMnNld0Y0UzViMGNjem1WU3NOcGxJSS95M3p1NkhRajhwaUpiWDh5TXBvMTVmbE92L3UzNkJCWVE2TmZ0bndQWDVUQkEyeXEvSWNDSlIyZkd2VnlHeTNWQkNnejZhUkRSNGwxYTlIU2toZ01JSW1lNnRsZmNIMTZwc2ZoTFJvK1ZoWUZJTTZkTFV2NVkzSURIYzRaSVB2U0s1ZjlMakR1dElPS3RCVUtUbnRvODV1YXk5YnhNa0c5QkhnWC8zUy9iWC9RMm40T0dYMmg5dnh2VTE3Q1JTMGUvQThYZm1w&time=1795436877&sign=72773b76ff084b3414c6d3f54de9878f&appVer=1020&platCode=37wan&IMEI=356597535607247&isPcLauncher=true"
        }
      ]
    },
    {
      "name": "玄烨",
      "accounts": [
        {
          "name": "簌簌",
          "url": "https://app.xxh5.z7xz.com/login.php?gid=1002997&pid=1&token=BASE64MzliNEhPcGhDbXN1N09QemdvZ05za0djemtYSXB5a0VyemZQdXVsdXdUakVLbjE0UzFESk1zYU9zcU1EaGVVaFQzWlVudWtRYzJkSkhDbEpyZGcwTmRqV3dKN0ErNFBhSlIwSnh5eXJHS3NhZ3AyRFQvZHVRd3kzOHhxR3h3RkFVWUJkdXlrWHhyTHQ1YUdGSVpjZ3lHd3dWQ215Ym9sbVB1YnFqVHlxdXd4R0dxVG5vbHltWEo0czlaamY3Y1BST21sVjNkOFRCOXVBbXpiOG15cjVlWGRKMEZQUjJqaVptUFhJaWtyTkFRRnRjWXh6ZVBTQjhWSmxwenFnYng0em95ZnJmdmNWbytYSEIwUWIwWFhl&time=1795435767&sign=d4fdd0f52a29a0f98dcc363900bd1d05&appVer=1020&platCode=37wan&IMEI=356597838607247&isPcLauncher=true"
        },
        {
          "name": "千亿",
          "url": "https://dldl.50pk.com/login.php?gid=1002997&pid=1&token=BASE64NjFhNUxIUFdrRmppRWFKdjBBME5pREJiSlc0NUFtbXhLbU43aDdwQjFrb3hCTmtHU3NaT0hCZ29vU2ViVmpCYzBUQmwyVlFJZTgzRVc0VHkyTkZlc0JHTWhmYVRJUkxVTUM3U1dFR0d5MXRTZFF1UUQ2a0RSOUFZT0lkLzluNnkyNTArSVl0WGRYNzhnVVEyNENNV05DWEZONlY0OU1WQW84b3ljL2NQRmZzSEJ2bXgybkMvOHJ1K0tuZHlUT0lTR1NiYkF3dUNsbDMzakNzdnNidUhOdFJ0eEc3R3licURtZVpZWDBvNkV5TlM2eEcybStMNVpzZmlQNk1TSHBPRHZsZWgzdStlQlFWNVFsNmo1SDdz&time=1795426189&sign=b61a0fce897b9fa63f5307f99e6a4283&appVer=1030&platCode=37wan&IMEI=356595213588244&isPcLauncher=true"
        },
        {
          "name": "疏影",
          "url": "https://dldl.50pk.com/login.php?gid=1002997&pid=1&token=BASE64OTk2M0wxclFPcDVsaWZDTldiYXZEVmRVTjJLeE0zSkFCYjFIOE82RXJGK0lTclNtbHVoOHdqTG9lZlZTSTFVV3dPY0JSbU16Q2JvMWRTMk45ZWxLZVNrTnBYZFp3TGFOdVNWTmU3ZE8vYU1MaThpbkxCSDZrcDFlMU9ibU1wR1l3WDUxOGYwcVh0UHJKeFVBZFFNSFZTQUo1eHZDMktZcmFLT3N0T0lzTmtiYjVqTjlSSHI5M0xBTGppLzlZYmlZN2lMUng4Y1lyRjNiNU1qN0hDNGxtd25neGIyWHJJWjZOTHN6QkZvaEN3TmtKbjFOalBlNmx4a1MycFp6V2JRQWtaeHdJWS9NeUJxdGdqKzBPdFFk&time=1795426161&sign=57bb5a590bd831dc2879ea024987e0ed&appVer=1030&platCode=37wan&IMEI=356595213588244&isPcLauncher=true"
        },
        {
          "name": "玄烨",
          "url": "https://dldl.50pk.com/login.php?gid=1002997&pid=1&token=BASE64MzE1YlZybnFkZThXcDVuMWh5T0MwTVphMVZuTjQ0SDFkdkhOVm1menJxMmtycjF1T3VWVVhLZzB4eHlQUlAwV1ZteVk1STl4WTh3cjVRQTlNcElzUTNQOGtiK1RUZlpjanhpdWJmdjc3Rm52ZlM0UTAzYlVhdVJsOVlnL2ZycHlzU2hRZEh3RUVhbm1nRDR0VFhtVWl3WUE4aVZoR2hCWEIrY2MxQ05jbUExcS90b1FlSG1DOG9qbll4MlNMV1dxVVlxODl0TGMyWHY1UmtKdDVMQW1GdFBDMlNITXBVYVJvaU5hak1OdlZZM25CN1hvd1RGMXJLWitrQXVhalZlZXlnZDlVZFBSa2hMSGxrYkdETzA4&time=1795426128&sign=dc8f54b9af092a895312538eaabaca69&appVer=1030&platCode=37wan&IMEI=356595213588244&isPcLauncher=true"
        },
        {
          "name": "财神",
          "url": "https://dldl.50pk.com/login.php?gid=1002997&pid=1&token=BASE64ZjIxOTBWRzRZOEpabmIrWGtlVUNqOWp4emViMmgvNGtvM2QvUWJvUHpsMGwya09VZS9SL1Y2SUxUWEtmMU44eE8vUlhuNzJuNHg3eGJERXhhR3Z5NStFV2xoQ0pHamZ2cXM3Njl4MVlWYkFmYUFwN3FMR1Q3empKVjVWbjIrOWNvTTdFbVVjZUpCcUJCcGw2S0pRNG00WnR4cWdzenMxTVlQTEsxbE5GNTk3ZWREMWErM2pvaDlDcDA1S0xoTXN5dTBUS2thMUc3RmlqTzI5Y0FoNjVIRGdzTFJMTHZrYkFINTJDZnBxSFdhaTVWb0wxa2l4U1dPbWpacjIxdFNLbVhOK1dSRU1iU09YUU1FV09ZaGJt&time=1795426082&sign=a3960274e96c847cdb175857688c5e39&appVer=1030&platCode=37wan&IMEI=356595213588244&isPcLauncher=true"
        },
        {
          "name": "冉向天",
          "url": "https://dldl.50pk.com/login.php?gid=1002997&pid=1&token=BASE64ZDc0NTJoN011elVuMDVkcUl2Sk5Db2xkQ0NjK05ma1liMUI0cEVLcXpMbGdWTyt3a0FiYU9HWSt6Zzk4Rk03eWo4TVJ0eWFTS0hiRGQ2ckovVVkzY3VQN0dNWjRnNG9yQ0UyTU11QnJiMit6MEJzN2N0LzR5eVBOb3NMMTh5ZjBJbEQyK1I5Y3ZGUDRFSi9YTVcvZHdpK0ltTGpuNUJNbGNvN1h6emxIN1lrMXZQOGI3Ry9ScVN3RGFFelhySUZEREVXVGNNQmlCM3ptazdVbzBzbDR6ZTN6S0d1bEwvU1FXZCtkb3NOMWhxZXlKNjNSZWVJaXFnaUdTV3BQa1RZNlF5T041WWsvcGc1SWpDU0c0WHZ4&time=1795426042&sign=bd8a04c411ed193b31e83dc3aad547ef&appVer=1030&platCode=37wan&IMEI=356595213588244&isPcLauncher=true"
        },
        {
          "name": "门主",
          "url": "https://dldl.50pk.com/login.php?gid=1002997&pid=1&token=BASE64ZjliNHRkdlkwRzhOTlljN3ozbTBjZ2xJYjFsa1VOWTlDZ21SYkhKVzlONGV2Y3hBQVFJK0x3dDBmamozWVV5a01OZng4SzlMYWJPN1RPdTNTQ3liZXN5R0hLN2tjR2ovdm5ERDlKTmpQL2dUWEk3Rkl6QUMvdnF6aEpFcE1TK1BMWE9JU0pUdFlHeEMzL1ZzQmc5Wnl0R2NIMVhoNFFSOWpZc09zOFRneURMQXJaZWYwWDgvWFovTEtyY2NUcHp1RmYxM1NwbVB5UHhmaktFdkpoazNEak9rMkpNN2ZocnU1YkhoZGxlMGlUQnh5M0hpRUxXN2txU3orYzNwTWpSd0s5NTUwREtpVUJXRHh6TWN2UFE=&time=1795425997&sign=a5c7325fd91dda1ad5e1a35a1fe49caf&appVer=1030&platCode=37wan&IMEI=356595213588244&isPcLauncher=true"
        },
        {
          "name": "东方",
          "url": "https://dldl.50pk.com/login.php?gid=1002997&pid=1&token=BASE64NzkwN0RodUhNUmRlKzJITnUxakFQZ1FlZTBaQzkyMVZtSmhjUTNic3FPSldNTGlYajJZTEZVZUhRWkE5ZzZ4TVgrUE5DM1hEM3BFRm1UTENTR0ZhYU5OL3pldjZiakNCTUM1Z2J5NHpPbVVGTlBsTVhGd0VCTzN3V0NTTkE1OGtTeUQ2RDNZSHZiR2VZeE9ZbkY2dWQ0TzRVYThiNk5xMUNMK2NEUlZTdzN4TUdab1MrZk81NHBZTVdxbTM2U3liaVA2MTMxQmMrMXFuUWVxYjNVYTZ3emoxVnB1a1VPZVpwczU5ZjBxaWZ1QWxUR05UUW1jSDZKd2FOQjE0YVl3NURYaTZyNWVDOFZxaU81V1Nzbk4vU1pnUTdNQ1A1VUZWczhQTG9ZSnc=&time=1795425921&sign=f440c221e43b08ff801d63329e0b49ae&appVer=1030&platCode=37wan&IMEI=356595213588244&isPcLauncher=true"
        },
      ]
    }
  ]
};
