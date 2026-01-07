// 定义锚点 (Anchors) 
const pr = {
  type: "select",
  proxies: [
    "默认", "香港", "香港自动选择", "台湾", "台湾自动选择",
    "日本", "日本自动选择", "新加坡", "新加坡自动选择",
    "美国", "美国自动选择", "英国", "英国自动选择",
    "其它地区", "全部节点", "自动选择", "直连"
  ]
};

const p = {
  type: "http",
  interval: 3600,
  "health-check": {
    enable: true,
    url: "https://www.gstatic.com/generate_204",
    interval: 300
  }
};

const ipAnchor = {
  type: "http",
  interval: 86400,
  behavior: "ipcidr",
  format: "yaml"
};

const domainAnchor = {
  type: "http",
  interval: 86400,
  behavior: "domain",
  format: "yaml"
};

// 导出配置对象
const config = {
  "proxy-providers": {
    "润": {
      ...p,
      url: "", // 请在此处填写订阅链接
      override: { "additional-suffix": "[run]" }// 覆盖节点内容(additional-suffix在节点名称后增加固定后缀 additional-prefix在节点名称前增加固定前缀)
    }
  },
  ipv6: true,
  "allow-lan": false,
  "mixed-port": 7890,
  "external-controller": "",
  "log-level": "warning",
  profile: {
    "store-selected": true,
    "store-fake-ip": true
  },
  dns: {
    enable: true,
    ipv6: true,
    "use-hosts": true,
    "use-system-hosts": false,
    "enhanced-mode": "fake-ip",
    "fake-ip-range": "28.0.0.1/8",
    "fake-ip-filter": [
      "*",
      "+.lan",
      "+.local",
      "time.*.com",
      "ntp.*.com",
      "connect.rom.miui.com",
      "+.miwifi.com",
      "+.ntp.org",
      "+.market.xiaomi.com",
      // QQ
      "localhost.ptlogin2.qq.com",
      "localhost.sec.qq.com",
      // WeChat
      "localhost.work.weixin.qq.com",
      "+.weixin.qq.com",
      "+.wechat.com",
      // Windows
      "time.windows.com",
      "+.msftconnecttest.com",
      "+.msftncsi.com",
      "+.wpsmail.net",
      "+.henzanapp.com",
      "+.pconline.com.cn"
    ],
    "default-nameserver": [
      "119.29.29.29",
      "223.5.5.5"
    ],
    nameserver: [
      "https://doh.pub/dns-query",
      "https://dns.alidns.com/dns-query"
    ],
    "direct-nameserver": [
      "https://doh.pub/dns-query",
      "https://dns.alidns.com/dns-query"
    ],
    "proxy-server-nameserver": [
      "https://doh.pub/dns-query",
      "https://dns.alidns.com/dns-query"
    ],
    fallback: [
      "https://dns.google/dns-query",
      "https://cloudflare-dns.com/dns-query"
    ],
    "fallback-filter": {
      geoip: true,
      "geoip-code": "CN",
      ipcidr: [
        "240.0.0.0/4",
        "0.0.0.0/32"
      ],
      domain: [
        "+.google.com",
        "+.facebook.com",
        "+.youtube.com"
      ]
    }
  },
  sniffer: {
    enable: true,
    "parse-pure-ip": true,
    "force-dns-mapping": true,
    "override-destination": false,
    sniff: {
      HTTP: {
        ports: [80, 8180-8880],
        "override-destination": true
      },
      TLS: {
        ports: [443, 8443]
      },
      QUIC: {
        ports: [443, 8443]
      }
    },
    "skip-domain": [
      "+.push.apple.com"
    ],
    "force-domain": []
  },
  tun: {
    enable: true,
    stack: "mixed",
    "auto-route": true,
    "auto-redirect": false,
    "auto-detect-interface": true,
    "dns-hijack": [
      "any:53",
      "tcp://any:53"
    ],
    "route-exclude-address": [],
    mtu: 1500,
    "strict-route": true
  },
  proxies: [
    {
      name: "直连",
      type: "direct",
      udp: true
    }
  ],
  "proxy-groups": [
    {
      name: "默认",
      type: "select",
      proxies: [
        "自动选择", "直连", "香港", "香港自动选择", "台湾", "台湾自动选择",
        "日本", "日本自动选择", "新加坡", "新加坡自动选择", "美国", "美国自动选择",
        "英国", "英国自动选择", "其它地区", "全部节点"
      ],
      icon: "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/mini/Proxy.png"
    },
    {
      name: "Google",
      ...pr,
      icon: "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/mini/Google_Search.png"
    },
    {
      name: "Apple",
      ...pr,
      icon: "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/mini/Apple.png"
    },
    {
      name: "Telegram",
      ...pr,
      icon: "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/mini/Telegram.png"
    },
    {
      name: "Twitter",
      ...pr,
      icon: "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/mini/Twitter.png"
    },
    {
      name: "ehentai",
      ...pr,
      icon: "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/mini/Panda.png"
    },
    {
      name: "哔哩哔哩",
      ...pr,
      icon: "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/mini/bilibili.png"
    },
    {
      name: "哔哩东南亚",
      ...pr,
      icon: "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/mini/bilibili.png"
    },
    {
      name: "巴哈姆特",
      ...pr,
      icon: "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/mini/Bahamut.png"
    },
    {
      name: "YouTube",
      ...pr,
      icon: "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/mini/YouTube.png"
    },
    {
      name: "NETFLIX",
      ...pr,
      icon: "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/mini/Netflix.png"
    },
    {
      name: "Spotify",
      ...pr,
      icon: "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/mini/Spotify.png"
    },
    {
      name: "国内",
      type: "select",
      proxies: [
        "直连", "默认", "香港", "香港自动选择", "台湾", "台湾自动选择",
        "日本", "日本自动选择", "新加坡", "新加坡自动选择", "美国", "美国自动选择",
        "英国", "英国自动选择", "其它地区", "全部节点", "自动选择"
      ],
      icon: "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/mini/China_Map.png"
    },
    {
      name: "其他",
      ...pr,
      icon: "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/mini/Final.png"
    },
    // 分隔,下面是地区分组
    {
      name: "香港",
      type: "select",
      "include-all": true,
      filter: "(?i)(?!直连)(港|hk|hongkong|hong kong)",
      icon: "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/mini/HK.png"
    },
    {
      name: "台湾",
      type: "select",
      "include-all": true,
      filter: "(?i)(?!直连)(台|tw|taiwan)",
      icon: "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/mini/TW.png"
    },
    {
      name: "日本",
      type: "select",
      "include-all": true,
      filter: "(?i)(?!直连)(日|jp|japan)",
      icon: "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/mini/JP.png"
    },
    {
      name: "美国",
      type: "select",
      "include-all": true,
      filter: "(?i)(?!直连)(美|us|unitedstates|united states)",
      icon: "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/mini/US.png"
    },
    {
      name: "英国",
      type: "select",
      "include-all": true,
      filter: "(?i)(?!直连)(英|uk|unitedkingdom|united kingdom)",
      icon: "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/mini/UK.png"
    },
    {
      name: "新加坡",
      type: "select",
      "include-all": true,
      filter: "(?i)(?!直连)(新|sg|singapore)",
      icon: "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/mini/SG.png"
    },
    {
      name: "其它地区",
      type: "select",
      "include-all": true,
      filter: "(?i)^(?!.*(?:🇭🇰|🇹🇼|🇯🇵|🇸🇬|🇺🇸|🇬🇧|港|hk|hongkong|台|tw|taiwan|日|jp|japan|新|sg|singapore|美|us|unitedstates|英|uk|unitedkingdom|直连)).*",
      icon: "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/mini/Available.png"
    },
    {
      name: "自动选择",
      type: "url-test",
      "include-all": true,
      tolerance: 10,
      icon: "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/mini/Auto.png"
    },
    {
      name: "全部节点",
      type: "select",
      "include-all": true,
      icon: "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/mini/Global.png"
    },
    {
      name: "香港自动选择",
      type: "url-test",
      "include-all": true,
      filter: "(?i)(?!直连)(港|hk|hongkong|hong kong)",
      icon: "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/mini/HK.png"
    },
    {
      name: "台湾自动选择",
      type: "url-test",
      "include-all": true,
      filter: "(?i)(?!直连)(台|tw|taiwan)",
      icon: "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/mini/TW.png"
    },
    {
      name: "日本自动选择",
      type: "url-test",
      "include-all": true,
      filter: "(?i)(?!直连)(日|jp|japan)",
      icon: "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/mini/JP.png"
    },
    {
      name: "美国自动选择",
      type: "url-test",
      "include-all": true,
      filter: "(?i)(?!直连)(美|us|unitedstates|united states)",
      icon: "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/mini/US.png"
    },
    {
      name: "英国自动选择",
      type: "url-test",
      "include-all": true,
      filter: "(?i)(?!直连)(英|uk|unitedkingdom|united kingdom)",
      icon: "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/mini/UK.png"
    },
    {
      name: "新加坡自动选择",
      type: "url-test",
      "include-all": true,
      filter: "(?i)(?!直连)(新|sg|singapore)",
      icon: "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/mini/SG.png"
    }
  ],
  rules: [
    "DOMAIN-SUFFIX,xbiquzw.net,DIRECT",
    "GEOSITE,category-ads-all,REJECT",
    "RULE-SET,anti-AD,REJECT",
    "RULE-SET,秋风广告规则,REJECT",
    "RULE-SET,private_ip,直连,no-resolve",
    // 域名
    "RULE-SET,private_domain,直连,no-resolve",
    "RULE-SET,biliintl_domain,哔哩东南亚",
    "RULE-SET,ehentai_domain,ehentai",
    "RULE-SET,github_domain,其他",
    "RULE-SET,twitter_domain,Twitter",
    "RULE-SET,youtube_domain,YouTube",
    "RULE-SET,google_domain,Google",
    "RULE-SET,telegram_domain,Telegram",
    "RULE-SET,netflix_domain,NETFLIX",
    "RULE-SET,bilibili_domain,哔哩哔哩",
    "RULE-SET,bahamut_domain,巴哈姆特",
    "RULE-SET,spotify_domain,Spotify",
    "RULE-SET,pixiv_domain,其他",
    "RULE-SET,geolocation-!cn,其他",
    // IP
    "RULE-SET,google_ip,Google",
    "RULE-SET,netflix_ip,NETFLIX",
    "RULE-SET,telegram_ip,Telegram",
    "RULE-SET,twitter_ip,Twitter",
    "RULE-SET,cn_domain,国内",
    "RULE-SET,cn_ip,国内",
    "MATCH,其他"
  ],
  "rule-providers": {
    private_domain: {
      ...domainAnchor,
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/private.yaml"
    },
    cn_domain: {
      ...domainAnchor,
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/cn.yaml"
    },
    biliintl_domain: {
      ...domainAnchor,
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/biliintl.yaml"
    },
    ehentai_domain: {
      ...domainAnchor,
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/ehentai.yaml"
    },
    github_domain: {
      ...domainAnchor,
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/github.yaml"
    },
    twitter_domain: {
      ...domainAnchor,
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/twitter.yaml"
    },
    youtube_domain: {
      ...domainAnchor,
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/youtube.yaml"
    },
    google_domain: {
      ...domainAnchor,
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/google.yaml"
    },
    telegram_domain: {
      ...domainAnchor,
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/telegram.yaml"
    },
    netflix_domain: {
      ...domainAnchor,
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/netflix.yaml"
    },
    bilibili_domain: {
      ...domainAnchor,
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/bilibili.yaml"
    },
    bahamut_domain: {
      ...domainAnchor,
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/bahamut.yaml"
    },
    spotify_domain: {
      ...domainAnchor,
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/spotify.yaml"
    },
    pixiv_domain: {
      ...domainAnchor,
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/pixiv.yaml"
    },
    "geolocation-!cn": {
      ...domainAnchor,
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/geolocation-!cn.yaml"
    },
    "category-ads-all": {
      ...domainAnchor,
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/category-ads-all.yaml"
    },
    "anti-AD": {
      ...domainAnchor,
      url: "https://raw.githubusercontent.com/privacy-protection-tools/anti-AD/master/anti-ad-clash.yaml"
    },
    "秋风广告规则": {
      ...domainAnchor,
      url: "https://raw.githubusercontent.com/TG-Twilight/AWAvenue-Ads-Rule/main//Filters/AWAvenue-Ads-Rule-Clash.yaml"
    },
    private_ip: {
      ...ipAnchor,
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/private.yaml"
    },
    cn_ip: {
      ...ipAnchor,
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/cn.yaml"
    },
    google_ip: {
      ...ipAnchor,
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/google.yaml"
    },
    netflix_ip: {
      ...ipAnchor,
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/netflix.yaml"
    },
    twitter_ip: {
      ...ipAnchor,
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/twitter.yaml"
    },
    telegram_ip: {
      ...ipAnchor,
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/telegram.yaml"
    }
  }
};

function main(params) {
  return config;
}

// 确保在没有 module 和 export 的环境下也能通过返回值获取配置
config; 
