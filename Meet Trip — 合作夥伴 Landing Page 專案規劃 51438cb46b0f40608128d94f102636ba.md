# Meet Trip — 合作夥伴 Landing Page 專案規劃

## 📋 專案概覽

| 項目 | 內容 |
| --- | --- |
| 產品 | 一起來揪團 (Meet Trip) |
| 目標 | 招募紐西蘭的餐廳 & 咖啡廳合作夥伴 |
| 合作利益 | App 內專屬曝光頁面 + 提供使用者專屬折扣 |
| 語言 | 純英文 |
| 技術棧 | Next.js |
| 部署平台 | Zeabur |
| 表單儲存 | n8n 接收表單資料 → 寫入指定 Google Sheets |
| 品牌主色 | #F4B34A（暖陽黃） |
| 品牌輔色 | #3A8288（青藍色） |
| 背景色 | #FDF5E6（米白色） |
| 現有素材 | Logo、App Mockup |

---

## 🏗️ 頁面結構與區塊

以下是 Landing Page 各區塊的完整規劃，包含用途、內容方向與文案備註。

### 區塊 1 — Hero（主視覺）

<aside>
🎯

**用途：** 一眼讓餐廳老闆知道 Meet Trip 是什麼，以及為什麼值得合作。

</aside>

- **標題：** *"Get Your Restaurant in Front of 800+ Active Group Diners in New Zealand"*
- **副標題：** *"Meet Trip connects groups of friends looking for their next meal out. Partner with us to fill your tables and grow your brand."*
- **CTA 按鈕：** "Become a Partner" → 捲動到表單區塊
- **視覺素材：** App mockup，展示餐廳在 App 內的合作頁面

### 區塊 2 — 什麼是 Meet Trip？

<aside>
📱

**用途：** 快速介紹 App，讓合作夥伴了解產品。

</aside>

- 簡短 2-3 句 App 介紹
- 關鍵數據（參見下方社會證明策略）
- 可選：App 操作流程的 GIF 動畫或截圖輪播

**英文文案草稿：**

> *"Meet Trip is an iOS app that makes group outings effortless. Users create and join activities — from dinner plans to weekend adventures — all in one place. With a growing community of young professionals and working holiday makers across New Zealand, your restaurant gets direct access to groups already planning their next meal."*
> 

### 區塊 3 — 為什麼要跟我們合作？

<aside>
💡

**用途：** 用 4 個明確好處來推銷合作價值。

</aside>

1. **Dedicated Exposure** — Your restaurant gets a branded page inside the app, visible to all users browsing for group dining spots.
2. **Targeted Audience** — Reach 18-40 year olds actively looking for group dining experiences, not passive ad viewers.
3. **Zero Upfront Cost** — Joining as an early partner is free. You only offer a discount you're comfortable with.
4. **Simple Onboarding** — Fill out one form, and we handle the rest. Your page goes live within 48 hours.

### 區塊 4 — 合作流程

<aside>
⚙️

**用途：** 展示簡單的 3 步驟流程，降低合作門檻。

</aside>

| 步驟 | 說明 |
| --- | --- |
| 1. Fill Out the Form | 提供餐廳資訊與想提供的折扣方案 |
| 2. We Review & Set Up | 我們為你建立 App 內的專屬合作頁面 |
| 3. Go Live & Get Noticed | 使用者看到你的餐廳、折扣，開始揪團前往 |

**視覺建議：** 使用水平步驟條搭配圖示（表單 → 審核 → 火箭）

### 區塊 5 — 合作申請表單

<aside>
📝

**用途：** 直接在頁面上收集合作夥伴資訊。

</aside>

**表單欄位：**

- [ ]  Restaurant Name *（文字，必填）*
- [ ]  Contact Person *（文字，必填）*
- [ ]  Phone Number *（電話，必填）*
- [ ]  Email Address *（信箱，必填）*
- [ ]  Google Maps Link *（網址，必填 — 直接貼上 Google Maps 地標連結）*
- [ ]  Discount / Offer Details *（文字區塊，必填 — 例如 "10% off for groups of 4+"）*
- [ ]  Additional Notes *（文字區塊，選填 — 任何特殊條件或需求）*

**送出後：** 表單資料透過 **n8n webhook** 接收並寫入指定的 Google Sheets

**成功訊息：** *"Thank you! We'll review your application and have your partner page live within 48 hours."*

### 區塊 6 — 常見問題 (FAQ)

<aside>
❓

**用途：** 預先回答常見疑慮，提升轉換率。

</aside>

- **Is there a cost to join?**
    
    No. Early partners join for free. We only ask that you offer an exclusive discount to Meet Trip users.
    
- **What kind of discount should I offer?**
    
    That's up to you! Common examples: 10% off for groups of 4+, a free side dish, or a drink deal. Whatever works for your business.
    
- **How long until my restaurant page is live?**
    
    Within 48 hours of submitting the form. We'll email you a confirmation with a preview.
    
- **Can I update my offer later?**
    
    Absolutely. Just email us and we'll update your page.
    
- **Who are Meet Trip users?**
    
    18-40 year olds in New Zealand — many are working holiday makers and young professionals who love eating out in groups.
    

### 區塊 7 — Footer（頁尾）

- Logo + 品牌標語
- 聯絡信箱
- 社群連結（Instagram 等）
- © 2026 Meet Trip. All rights reserved.

---

## 📊 社會證明策略

目前使用者人數還在早期階段，以下是不灌水但能建立信任的方法：

### ✅ 可以使用

1. **社群規模** — *"Backed by a community of 800+ members across New Zealand"*（打工度假群組）
2. **活動導向描述** — 不說「X 個使用者」，改說 *"Dozens of group activities organised every week"*（活動數量聽起來比用戶數更有說服力）
3. **目標受眾定位** — *"The go-to app for working holiday makers and young professionals in NZ"*（把利基市場定位為優勢）
4. **先行者優勢** — *"Be one of the first partner restaurants — early partners get premium placement and lifetime free listing"*（稀缺性 + 排他性）
5. **使用者見證（預留位）** — 放 1-2 句朋友或 Beta 用戶的簡短引言，非正式的也行
6. **成長軌跡** — *"Growing 30% month-over-month"*（如果屬實，早期階段成長率比絕對數字重要）

### ❌ 應避免

- 不要顯示過低的確切下載數
- 不要使用假見證
- 不要過度承諾流量或營收

---

## 🛠️ 技術實作方案

### 技術棧

- **框架：** Next.js（App Router）
- **樣式：** Tailwind CSS（推薦，快速原型開發）
- **表單處理：** React Hook Form + Zod 驗證
- **資料儲存：** n8n webhook 接收表單 → 寫入指定 Google Sheets
- **部署：** Zeabur
- **數據分析：** Google Analytics 4

### 建議檔案結構

```
meettrip-partners/
├── app/
│   ├── layout.tsx          # 根佈局（字型、metadata）
│   ├── page.tsx            # 主 Landing Page
│   ├── globals.css         # Tailwind + 品牌色
│   └── api/
│       └── submit/
│           └── route.ts    # POST 端點 → n8n webhook
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Benefits.tsx
│   ├── HowItWorks.tsx
│   ├── PartnerForm.tsx
│   ├── FAQ.tsx
│   └── Footer.tsx
├── lib/
│   └── n8nWebhook.ts       # n8n webhook 串接工具
├── public/
│   ├── logo.svg
│   ├── mockup.png
│   └── og-image.png        # Open Graph 分享圖片
├── tailwind.config.ts
└── package.json
```

### 品牌色設定（Tailwind）

```jsx
// tailwind.config.ts
colors: {
  brand: {
    primary: '#F4B34A',    // 暖陽黃（主色）
    secondary: '#3A8288',  // 青藍色（輔色）
    background: '#FDF5E6', // 米白色（背景色）
    dark: '#1A1A1A',       // 深色文字
  }
}
```

### 表單資料串接流程（n8n）

1. Landing Page 表單送出後，POST 到 n8n 的 **Webhook 節點**
2. n8n 接收資料後，透過 **Google Sheets 節點** 寫入指定的 Google Sheets
3. 可選：加入 **Email 通知節點**，每次有新申請時自動寄信通知你

---

## 📅 實作時程

| 階段 | 任務 | 預估時間 |
| --- | --- | --- |
| 階段 1 — 初始設定 | Next.js 專案建立、Tailwind 設定、品牌色、部署到 Zeabur | 0.5 天 |
| 階段 2 — 頁面佈局 | 建立全部 7 個區塊元件、響應式設計 | 1-2 天 |
| 階段 3 — 表單 | 表單元件 + 驗證 + Google Sheets 串接 | 0.5-1 天 |
| 階段 4 — 優化 | 文案潤稿、動畫效果、OG 圖片、SEO meta 標籤 | 0.5 天 |
| 階段 5 — 上線 | 最終測試、自訂網域設定、正式上線 | 0.5 天 |

**預估總時程：3-5 天**

---

## 🎯 下一步行動

- [ ]  確認頁面結構與文案方向
- [ ]  建立 Next.js 專案（含 Tailwind）
- [ ]  建立 n8n workflow（Webhook → Google Sheets）
- [ ]  開發並部署 MVP Landing Page
- [ ]  設定自訂網域
- [ ]  開始向紐西蘭餐廳與咖啡廳推廣