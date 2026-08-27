# 🧠 Memory Game

카드의 위치를 기억하고 같은 그림의 짝을 찾는 브라우저 메모리 게임입니다.

**혼자 컴퓨터와 대결하거나, 같은 화면에서 1:1로 플레이해 보세요.**

[🎮 Memory Game 플레이하기](https://fiverocksgames.github.io/memory-game/)

## 🎯 게임 방법

1. 게임 모드와 보드 크기, 카드 테마를 선택합니다.
2. 카드를 두 장씩 뒤집어 같은 그림의 짝을 찾습니다.
3. 같은 짝을 찾으면 점수를 얻고 한 번 더 플레이합니다.
4. 모든 카드의 짝을 찾았을 때 더 많은 점수를 얻은 플레이어가 승리합니다.

## ✨ 주요 기능

- 🤖 컴퓨터 대전 / 👥 1:1 대전
- 🎚️ Easy / Normal / Hard AI 난이도
- 🧩 4×4 / 6×6 / 8×8 보드
- 🐾 동물 / 🍎 과일 / 🔷 무늬 카드 테마
- 🏆 턴 기반 점수 경쟁
- 📱 모바일 브라우저 지원
- 📲 Web App Manifest / Service Worker 기반 PWA 구성

## 🛠️ Built With

- HTML
- CSS
- Vanilla JavaScript
- Web App Manifest
- Service Worker

## 📂 Structure

```text
memory-game/
├── index.html
├── css/
├── icons/
├── js/
│   ├── ai.js
│   ├── app.js
│   ├── game.js
│   └── themes.js
├── manifest.json
└── sw.js
```

## 🚀 Run Locally

No build step or package installation is required.

```bash
git clone https://github.com/fiverocksgames/memory-game.git
cd memory-game
```

Run the project with a simple local web server, or play the deployed version on GitHub Pages.

## 🔄 Deployment

The private source repository is the development source of truth. Changes merged to its `main` branch are deployed to this public repository through GitHub Actions.

The deploy workflow publishes only browser runtime files and documentation. CI configuration and development-only utilities are excluded from the public deployment.
