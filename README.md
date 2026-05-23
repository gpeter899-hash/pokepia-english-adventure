# POKEPIA英文冒險

適合英文初學者到國小四年級的遊戲式英文學習網站。孩子可以透過闖關、聽英文發音、閱讀中文解釋、收集動物夥伴與累積 XP 來學英文。

## 目前學習範圍

- ABC 與自然發音入門
- 顏色、數字與基礎名詞
- 教室物品與課堂指令
- 常見動物與外觀描述
- 家庭、朋友、自我介紹
- like / can / have 與日常動作
- 天氣、心情與簡單對話
- 國小四年級程度短文理解 BOSS 關

## 如何使用

直接開啟 `index.html` 即可遊玩。網站會把進度存在瀏覽器的 localStorage，同一台平板再次開啟時會保留進度。

## GitHub Pages 部署

1. 在 GitHub 建立一個新 repository。
2. 上傳 `index.html`、`styles.css`、`app.js`、`README.md`。
3. 到 repository 的 `Settings` > `Pages`。
4. Source 選擇 `Deploy from a branch`。
5. Branch 選 `main`，資料夾選 `/root`，按 Save。
6. 等待 GitHub 產生網址後，平板打開該網址即可遊玩。

## 技術說明

本專案是純 HTML、CSS、JavaScript，沒有後端和建置流程，適合 GitHub Pages。英文發音使用瀏覽器內建的 Web Speech API；若部分裝置不支援朗讀，仍可正常答題與閱讀解釋。
