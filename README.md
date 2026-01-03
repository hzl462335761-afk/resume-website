## 怪异启示录 · AI 产品经理个人简历站

数据驱动、极简高级的多页面 Next.js 简历网站，支持一键部署到 Vercel，并可导出静态 HTML 供本地双击预览。

### 🧱 技术栈
- Next.js App Router（TypeScript）
- Tailwind CSS + 自定义 CSS Tokens
- 纯静态数据源（`src/data/profile.ts`）
- 自定义表单验证与滚动动效 hooks

### 📦 目录要点
- `src/data/`：站点唯一数据源与类型定义
- `src/components/`：原子/分子/布局组件
- `src/modules/sections/`：页面 Section 级模块
- `public/assets/`：静态简历 PDF、OG 图等资源

### 🚀 本地开发
```bash
npm install
npm run dev
# 浏览器访问 http://localhost:3000
```

### 🏗️ 构建与静态导出
```bash
# 生成 .next 构建产物并导出静态 HTML 到 /out
npm run export
```
导出后可直接双击 `out/index.html` 进行本地预览，全部资源使用相对路径。

### ☁️ Vercel 部署
- 已提供 `vercel.json`，默认使用 `npm run export` 生成部署产物。
- 推送到任意 Git 仓库后连接 Vercel，即可一键部署。

### 🧪 质量验证建议
- `npm run lint`：检查 TypeScript 与可访问性规范。
- Lighthouse：目标 Performance/SEO ≥ 90。

### 🔧 二次扩展
- 新增博客或 AI Chat 模块：在 `src/modules/` 与 `src/app/` 下添加对应 Section/路由并扩展数据结构。
- 若接入真实 API，可在 `src/hooks/useForm.ts` 中替换模拟请求逻辑，并使用 Vercel Functions。
