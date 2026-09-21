---
title: "分類"
draft: false
---

<div class="custom-categories-grid">
  <!-- 1. GNU/Linux 或 Linux -->
  <a href="/categories/gnu-linux-%E6%88%96-linux/" class="category-card">
    <div class="category-icon"><i class="fa-brands fa-linux"></i></div>
    <div class="category-name">GNU/Linux 或 Linux</div>
  </a>

  <!-- 2. 不日常的日常 -->
  <a href="/categories/%E4%B8%8d%E6%97%A5%E5%B8%B8%E7%9A%84%E6%97%A5%E5%B8%B8/" class="category-card">
    <div class="category-icon"><i class="fa-solid fa-star"></i></div>
    <div class="category-name">不日常的日常</div>
  </a>

  <!-- 3. 技能競賽、技藝班與升學 -->
  <a href="/categories/%E6%8A%80%E8%83%BD%E7%AB%B6%E8%B3%BD%E3%80%81%E6%8A%80%E8%97%9D%班與升學/" class="category-card">
    <div class="category-icon"><i class="fa-solid fa-book"></i></div>
    <div class="category-name">技能競賽、技藝班與升學</div>
  </a>

  <!-- 4. 日常與壓力垃圾桶 -->
  <a href="/categories/%E6%97%A5%E5%B8%B8%E8%88%87%E5%A3%93%E5%8A%9B%E5%9E%83%E5%9C%BE%E6%A1%B6/" class="category-card">
    <div class="category-icon"><i class="fa-solid fa-trash-can"></i></div>
    <div class="category-name">日常與壓力垃圾桶</div>
  </a>

  <!-- 5. 網際網路與 Web -->
  <a href="/categories/%E7%B6%B2%E9%99%9B%E7%B6%B2%E8%B7%AF%E8%88%87-web/" class="category-card">
    <div class="category-icon"><i class="fa-solid fa-globe"></i></div>
    <div class="category-name">網際網路與 Web</div>
  </a>

  <!-- 6. 自由軟體與開源哲學 -->
  <a href="/categories/%E8%87%AA%E7%94%B1%E8%BB%9F%E9%AB%94%E8%88%87%E9%96%8b%E6%BA%90%E5%93%B2%E5%AD%B8/" class="category-card">
    <div class="category-icon"><i class="fa-solid fa-code-open"></i></div>
    <div class="category-name">自由軟體與開源哲學</div>
  </a>
</div>

<style>
/* 網格排版：自動適應手機與電腦螢幕 */
.custom-categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;
  margin-top: 20px;
}

/* 每個分類方塊的樣式（暗黑風格相容） */
.category-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
  background-color: #2a2a2a; /* 呼應 PaperMod 暗色模式的深灰背景 */
  border: 1px solid #3a3a3a;
  border-radius: 12px;
  text-decoration: none !important;
  color: #ffffff !important;
  transition: transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

/* 滑鼠懸停效果 */
.category-card:hover {
  transform: translateY(-3px);
  background-color: #333333;
  border-color: #555555;
}

/* 圖示大小與間距 */
.category-icon {
  font-size: 32px;
  margin-bottom: 12px;
  color: #e0e0e0;
}

/* 分類名稱文字 */
.category-name {
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  line-height: 1.4;
}
</style>
