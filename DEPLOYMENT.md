# 部署指南

## GitHub Pages 部署

### 方式一：使用 GitHub Actions（推荐）

1. **启用 GitHub Pages**
   - 进入仓库 Settings → Pages
   - Source 选择 "GitHub Actions"

2. **配置环境变量（可选）**
   - 如果使用自定义域名，进入 Settings → Secrets and variables → Actions
   - 添加 `NEXT_PUBLIC_BASE_URL` secret，值为你的完整域名

3. **推送代码**
   - 推送代码到 main 或 master 分支
   - GitHub Actions 会自动构建并部署

### 方式二：手动部署

1. **构建项目**
   ```bash
   npm install
   npm run build
   ```

2. **上传文件**
   - 将 `out` 文件夹中的所有内容上传到 GitHub 仓库
   - 如果使用子目录部署，上传到 `docs` 文件夹

3. **配置 GitHub Pages**
   - 进入仓库 Settings → Pages
   - Source 选择 "Deploy from a branch"
   - Branch 选择 main/master
   - Folder 选择 `/ (root)` 或 `/docs`

## SEO 配置

### 更新域名信息

1. **更新 `src/app/layout.tsx`**
   - 修改 `metadataBase` 为你的实际域名

2. **更新 `public/robots.txt`**
   - 修改 Sitemap URL 为你的实际域名

3. **设置环境变量（可选）**
   - 创建 `.env.local` 文件
   - 添加 `NEXT_PUBLIC_BASE_URL=https://yourdomain.com`

## 文件上传列表

### 必须上传的文件（从 `out` 文件夹）

- 所有 HTML 文件（index.html, about.html, contact.html 等）
- `_next/` 文件夹（包含所有静态资源）
- `images/` 文件夹（包含所有图片）
- `assets/` 文件夹（包含 PDF 等资源）
- `favicon.ico`
- 所有 SVG 文件

### 配置文件（可选）

- `.nojekyll`（如果使用 GitHub Pages，建议添加）
- `CNAME`（如果使用自定义域名）

## 验证清单

- [ ] 所有页面可以正常访问
- [ ] 图片和资源正确加载
- [ ] SEO meta 标签正确设置
- [ ] robots.txt 和 sitemap.xml 可访问
- [ ] 移动端显示正常
- [ ] 页面加载速度正常（Lighthouse 评分 ≥ 90）

