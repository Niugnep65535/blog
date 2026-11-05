---
title: 連國中生都用 Linux
date: 2026-11-02
draft: false
---
之前看了 Wiwi 的[《連鋼琴師都用 Linux》](https://wiwi.blog/blog/pianist-using-linux/)和[《連 PewDiePie 都用 Linux》](https://wiwi.blog/blog/pewdiepie-linux)，想說我是不是可以來自誇一下？

## 我的電腦使用環境
敝人用的是 [Arch Linux](https://archlinux.org)。這是個偏 geek 的發行版，對新手而言難度稍大。我是因為習慣了 `pacman` 生態，加上我家ㄉㄅ網路連不上國外鏡像，才選擇這發行版。

平時配合 KDE Plasma 桌面環境，用起來還算順利－－滾掛也是真的容易。

其實我應該到哪個生態都能習慣，之後[再](/blog/anyway-debian-now/)試試看 Debian 好了。

## 使用體驗
反正是比 Windows 來得好。

舉個例子，在 Windows 安裝瀏覽器：
1. 搜尋 `chrome`
2. 被 Bing 情勒
3. 點進官網
4. 遇上兩個彈窗
5. 繼續點下載
6. 執行安裝程式
7. 安裝完成
8. 某天更新預設瀏覽器變回 Edge
9. 上網找 blockers

在 Linux 嘛：
1. `wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb`
2. `sudo apt install ./google-chrome-stable_current_amd64.deb`（如果你用 AUR，`yay -S google-chrome` 也可以）
3. 去喝杯水
4. 裝好了

或者，安裝多一點軟體，Windows 必須一個一個找 `.exe`，還可能綑綁八個防毒軟體；Linux：
```sh
sudo pacman -S code vlc prismlauncher discord btop kitty # 自由加上你想裝的軟體
```
搞定了。

*（我真不知道 Debian 系裡上面這些叫啥）*

而且也沒有惱人的自動更新、關不完的遙測、開始選單的廣告，更不會強迫你登入 Microsoft、Linux、KDE 或是任何帳號。你想離線用都可以！

都看到這裡了，還不試試看嗎？

![](/img/fastfetch_261105.png)
