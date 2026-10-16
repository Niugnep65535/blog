---
title: 自架真的好爽
date: 2026-10-16
tags:
 - 部落格
 - 筆記
categories:
 - 網際網路與 Web
---
我爸給了我一台電腦。

這台電腦有著8400的處理器、8GB記憶體跟256GB硬碟。

這麼好的電腦，光跑桌面Linux豈不是浪費？所以我改造成了伺服器。

![](/img/server-fastfetch-with-termux.png)

下面我分享一下我架設的服務。

## Cloudflare Tunnel
我這種從小就想自架的傢伙很容易遇到一個問題：不能給別人看，因為路由器權限都在父母手上。

Cloudflare Tunnel讓使用者不需要設定公網IP就能對外開啟服務，非常方便。

詳細的教學Ivon寫過：[《Cloudflare Tunnel教學，從外網安全地存取內網的Linux伺服器 》](https://ivonblog.com/posts/cloudflare-tunnel/)

## Tailscale
如果我要用SSH連線呢？

因為Cloudflare Tunnel需要兩方都安裝才能使用SSH，所以我們需要VPN。

目前市面上真「虛擬私人網路」的服務也只有Tailscale最穩定了。

## Nextcloud
我是把它（以及各種服務）跑在Podman裡。

Nextcloud是私人的雲端服務——不只雲端硬碟，包含筆記、聯絡人、日曆、密碼甚至視訊，它都能裝相應的外掛，一個抵兩百個。

為了存放Nextcloud，我買了一顆2TB的3.5吋HDD。二手貨其實算便宜，888。

## Gitea
因為Nextcloud其實不能充當Git使用。

Gitea是自架的Git網頁服務，像是[Wiwi](https://code.wiwi.blog)也有使用類似的Forgejo[^1]

部落格就託管在這上面。

### Gitea Runner
Gitea可以建立Runner。我只有一個人，一台就夠了。

這個沒什麼好說的。

## Nginx
一個方便的反向代理伺服器端，支援各種接口。

這部落格就是Nginx開的。

## 佔用
其實上述這些加起來，在幾乎閒置的情況下，記憶體佔用2GiB。

CPU佔用的話，六個核心只有其中兩核是0.1%，其它的都是0%。

其實伺服器也沒那麼耗電吧！

[^1]：他也用過Gitea，為什麼轉換不知道