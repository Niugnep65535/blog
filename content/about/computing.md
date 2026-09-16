---
title: 我與我的電腦
date: 2026-09-16
draft: true
comments: false
---
這是一篇~~抄襲~~效仿Stallman.org《How I do my computing》的文章，而且連結構都很像。

## 本人的電腦
我目前使用GIGABYTE G5 GE當作我的主力電腦。好用歸好用，但是給藍天代工的電腦嘛...韌體爛到爆，大多數品牌驅動都只支援Windows。

沒有固定的外出機，因為都太重了。如果能把Surface修好，或是把我的Tab S9 FE刷上Linux，我應該會抱著不放。

背後還有台8400的桌機，打算當伺服器玩。

## 作業系統與Linux發行版
對，我不會特別稱其GNU/Linux，因為麻煩，而且大家都知道你在說誰－－除了Alpine。

我的主力機使用Arch Linux。其實只是因為它卡在很剛好的地方，不會太老、不需要手動編譯、自訂能力強，而且習慣pacman生態系。<!--btw-->

剛剛提到的桌機應該會使用Rocky Linux；如果要買外出機應該會用Fedora。

## 在電腦上幹嘛
說到底就是寫程式、打電動、看影片。

我平時習慣使用KDE Plasma桌面環境，不習慣Tiling WM，也不太使用tty環境。

寫程式還是習慣用VS Code。開源有公司贊助所以真的比較方便，這也是我脫離自由軟體~~教會~~的原因；在外面會用GitHub內建的編輯器，不過2FA有點麻煩，考慮用Gitea取代部分GitHub功能，不然我出門在外都沒法登入。

玩遊戲一般都是Minecraft。最近沉迷於《機械動力》模組。

看影片不太使用FreeTube，因為不習慣。但是我安裝了Shorts攔截插件以免大腦變廢。

## 網站維護模式
其實就是利用Hugo跟GitHub Actions，然後GitHub Pages配自定義網域。

老實講這套很香，GSC吃不到sitemap其實只是GitHub Pages的SSL搞太多層，設定自訂網域之後就會放手變成http，而Cloudflare是不會擋住GSC機器人的。

搜尋用的是PaperMod的腳本。

我有特別為LibreJS優化－－那件事情發生在我還是自由軟體原教旨主義者時。以後再加入腳本我就不管了。

## 社群媒體
因為我不想變成[殭屍](https://wiwi.blog/blog/meta-ai-cloning-patent/)，已經不使用Meta各平台帳號了。

如果要發幹文，我都使用Bluesky。這玩意的演算法還好，或者我可能已經免疫了。

## Email服務
我用的是Cloudflare的Email Routing來收信。使用Gmail當作後端。

然後使用Resend寄信。

老實講這樣很難配置，之後我想改用自架的IMAP跟SMTP，但是不知道Cloudflare Tunnel支不支援。

## 程式語言
Python跟JavaScript都有在用；為了比技能競賽學了C#。

.NET在Linux上還是很彆扭，而且我不想用不能拿來上班的ReSharper。

## 非自由軟體
看情況。我很討厭專有的超級App，比如LINE。因為這種鬼東西100%廣告滿天飛還收集隱私。

如果是Discord這種尊重人的，或是VS Code核心開源但是包專有組件的就還好。
