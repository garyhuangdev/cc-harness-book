# AI Harness Architecture

Deep dive into AI agent framework design through analysis.

513,522 lines of code | 1,908 files | 28 chapters | English & Chinese

**Read online:** https://garyhuangdev.github.io/cc-harness-book/

## Repository Structure

```
src/          # The subject of analysis
book/         # VitePress book (English + Chinese)
  ├── en/     #   English chapters
  ├── zh/     #   Chinese chapters
  └── .vitepress/config.ts
docs/         # Supplementary materials
vendor/       # Native module sources
```

## Read the Book Locally

```bash
cd book
npm install
npm run dev
```

Open http://localhost:5173/cc-harness-book/ in your browser.

## How to Analyze

The book walks through the source in eight parts:

| Part | Topic | Key Source Paths |
|------|-------|-----------------|
| I | Overview | `src/bootstrap/`, `src/entrypoints/` |
| II | Core Engine | `src/query/`, `src/context/` |
| III | Tool System | `src/tools/`, `src/Tool.ts` |
| IV | Agent System | `src/assistant/`, `src/tasks/`, `src/coordinator/` |
| V | Terminal UI | `src/ink/`, `src/components/`, `src/screens/` |
| VI | Extensions | `src/plugins/`, `src/skills/`, `src/hooks/` |
| VII | Infrastructure | `src/cli/`, `src/commands/`, `src/services/` |
| VIII | Patterns | Cross-cutting concerns |

To follow along, open the source file referenced in each chapter and read the analysis side by side.

---

# AI Harness 架构解析

通过 Claude Code 源码分析，深入理解 AI Agent 框架设计。

513,522 行代码 | 1,908 个文件 | 28 章 | 中英双语

**在线阅读：** https://garyhuangdev.github.io/cc-harness-book/

## 仓库结构

```
src/          # Claude Code 源码 — 分析对象
book/         # VitePress 书籍（中英双语）
  ├── en/     #   英文章节
  ├── zh/     #   中文章节
  └── .vitepress/config.ts
docs/         # 补充资料
vendor/       # 原生模块源码
```

## 本地阅读

```bash
cd book
npm install
npm run dev
```

浏览器打开 http://localhost:5173/cc-harness-book/

## 分析路线

全书分为八大部分，按顺序阅读即可完成完整分析：

| 部分 | 主题 | 核心源码路径 |
|------|------|-------------|
| I | 总览篇 | `src/bootstrap/`, `src/entrypoints/` |
| II | 引擎篇 | `src/query/`, `src/context/` |
| III | 工具篇 | `src/tools/`, `src/Tool.ts` |
| IV | Agent 篇 | `src/assistant/`, `src/tasks/`, `src/coordinator/` |
| V | UI 篇 | `src/ink/`, `src/components/`, `src/screens/` |
| VI | 扩展篇 | `src/plugins/`, `src/skills/`, `src/hooks/` |
| VII | 基础设施篇 | `src/cli/`, `src/commands/`, `src/services/` |
| VIII | 模式篇 | 横切关注点 |

建议打开每章引用的源码文件，对照分析内容同步阅读。
