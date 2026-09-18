# 계산기 만들기 — 실습 가이드

> 오늘은 사칙연산 계산기를 만들면서, **Gemini로 코드 만들기 → GitHub에 올리기 → 인터넷에 배포하기**까지 전체 흐름을 한 번 쭉 따라가봅니다. 코드 내용을 깊게 파고들기보다, 이 흐름 자체에 익숙해지는 게 오늘의 목표입니다.

## 🎯 오늘의 목표

1. Gemini로 코드를 생성해본다.
2. 만든 코드를 나의 GitHub 저장소에 올린다.
3. GitHub Pages로 실제 인터넷에 배포해본다.
4. 완성한 것을 학교 조직 저장소로 제출(PR)한다.

> ⚠️ 이메일, 전화번호 등 개인 연락처는 어디에도 넣지 마세요.

---

## 1️⃣ 이 저장소 Fork 하기

1. 이 저장소(`26-w04-calculator`) 우측 상단 **Fork** 클릭
2. 저장소 이름을 `calculator` 또는 `simple-calculator`로 바꿔서 Fork
3. **Public**으로 유지

## 2️⃣ 로컬로 Clone

```bash
cd Desktop   # 원하는 작업 폴더로 이동
git clone https://github.com/본인계정명/calculator.git
cd calculator
code .
```

## 3️⃣ Gemini로 계산기 코드 생성

Gemini에 아래 프롬프트를 입력합니다.

```
사칙연산이 가능한 계산기를 만들어줘.
- 숫자 버튼(0~9), 연산자 버튼(+, -, ×, ÷), =, C(초기화)
- HTML, CSS, JS 파일을 각각 분리해서 줘 (index.html, style.css, script.js)
- 디자인은 깔끔하게, 버튼은 그리드로 배치
```

Gemini가 준 코드를 그대로 복사해서, 저장소 안에 아래 3개 파일을 만들어 붙여넣습니다.

- `index.html`
- `style.css`
- `script.js`

> 💡 만약 Gemini가 HTML/CSS/JS를 한 파일에 다 섞어서 준다면, "HTML, CSS, JS를 각각 별도 코드블록으로 나눠줘"라고 다시 요청해보세요.

## 4️⃣ 로컬에서 미리보기

`index.html` 파일을 더블클릭해서 브라우저로 열어보거나, VS Code의 Live Server 확장을 사용해도 좋습니다. 계산기가 화면에 잘 나오는지, 버튼이 눌리는지 확인합니다.

혹시 오류가 있다면, Gemini에게 증상을 설명하고 다시 요청해보세요.

```
계산기에서 [어떤 문제가 있는지 설명]이 발생해. 원인을 확인하고 고쳐줘.
```

## 5️⃣ 커밋 & 푸시

```bash
git add .
git commit -m "계산기 코드 생성"
git push
```

## 6️⃣ GitHub Pages로 배포

1. GitHub 저장소 페이지 → **Settings** → 좌측 메뉴 **Pages**
2. **Branch** 항목에서 `main` 선택 → **Save**
3. 잠시 기다리면 상단에 배포된 주소(`https://본인계정명.github.io/calculator/`)가 표시됩니다
4. 그 주소로 접속해서 계산기가 정상적으로 동작하는지 확인합니다

## 7️⃣ 조직 저장소로 제출 (Pull Request)

1. 본인 GitHub 저장소 페이지에서 **Contribute** → **Open pull request**
2. 원본 저장소(`26-w04-calculator`)의 `main` 브랜치로 PR 생성
3. 제목에 이름을 포함해서 작성 (예: `[홍길동] 계산기 제출`)
4. PR을 열면 아래와 같은 템플릿이 자동으로 채워집니다. 빈칸을 채워서 제출하세요.

> 💡 이 PR은 실제로 원본에 합쳐지는 게 아니라, "제출 확인용"입니다. Merge는 하지 않습니다.

---

## ✅ 오늘 완성 체크

- [ ] Gemini로 계산기 코드를 생성했다
- [ ] `index.html`, `style.css`, `script.js` 3개 파일이 저장소에 있다
- [ ] GitHub Pages 배포 링크로 접속해서 계산기가 동작하는 걸 확인했다
- [ ] 조직 저장소로 PR을 제출했다

---

## ❓ 자주 묻는 질문 FAQ

### Q1. GitHub Pages에 배포했는데 빈 화면만 나와요
**A**: 파일 이름이 정확히 `index.html`인지 확인하세요. GitHub Pages는 `index.html`을 자동으로 찾아서 보여줍니다. 다른 이름(예: `main.html`)이면 인식하지 못합니다.

### Q2. 배포는 됐는데 디자인이 하나도 안 입혀져 있어요
**A**: `index.html`의 `<link>` 태그에서 CSS 파일 경로를 확인하세요.

```html
<link rel="stylesheet" href="style.css">
```

`style.css`가 `index.html`과 같은 폴더에 있는지, 파일명 오타는 없는지 확인합니다.

### Q3. Settings에 Pages 메뉴가 안 보여요
**A**: 저장소가 Private으로 되어 있으면 일부 플랜에서 Pages 메뉴가 제한될 수 있습니다. 저장소가 Public인지 다시 확인하세요.

### Q4. PR을 보냈는데 이걸 누가 확인하나요?
**A**: 제출용 PR이므로 별도로 Merge되지 않습니다. 교수님이 제출 목록으로 확인합니다.

---

**📚 오늘 만든 계산기는 계속 남아있습니다. 다음은 오늘의 진짜 메인 실습, 프로필 카드입니다!**