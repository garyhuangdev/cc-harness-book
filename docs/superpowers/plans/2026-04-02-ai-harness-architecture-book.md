# AI Harness Architecture Technical Book - Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a professional, deep-dive technical book that reverse-engineers Claude Code's harness architecture, teaching engineers how to build production-grade AI agent frameworks from scratch.

**Architecture:** VitePress-based Markdown book with Mermaid diagrams, syntax-highlighted code excerpts, and layered exposition (overview -> internals -> patterns). Research phase uses parallel agents; writing phase uses sequential synthesis.

**Tech Stack:** VitePress (rendering), Markdown + Mermaid (content), TypeScript code excerpts (examples)

---

## Book Metadata

- **Title:** 《AI Harness 架构深度解析：从 Claude Code 源码看 AI Agent 框架设计》
- **Subtitle:** *Deep Dive into AI Harness Architecture: Agent Framework Design Through Claude Code Source Analysis*
- **Target Audience:** Senior engineers building AI agent systems, framework architects, technical leads
- **Estimated Chapters:** 28 chapters across 8 parts
- **Estimated Pages:** 400-500 pages equivalent
- **Language:** Chinese (中文), with English technical terms preserved
- **Rendering:** VitePress with custom theme, Mermaid diagrams, code syntax highlighting

---

## Phase 0: Project Scaffolding

### Task 0.1: Initialize VitePress Book Project

**Files:**
- Create: `book/.vitepress/config.ts`
- Create: `book/index.md`
- Create: `book/package.json`

- [ ] **Step 1: Create book directory and package.json**

```json
{
  "name": "ai-harness-architecture-book",
  "private": true,
  "scripts": {
    "dev": "vitepress dev",
    "build": "vitepress build",
    "preview": "vitepress preview"
  },
  "devDependencies": {
    "vitepress": "^1.6.0",
    "markdown-it-mathjax3": "^4.3.2"
  }
}
```

- [ ] **Step 2: Create VitePress config with sidebar navigation**

```typescript
// book/.vitepress/config.ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI Harness 架构深度解析',
  description: '从 Claude Code 源码看 AI Agent 框架设计',
  lang: 'zh-CN',
  markdown: {
    mermaid: true,
    lineNumbers: true
  },
  themeConfig: {
    sidebar: [/* all chapters */],
    outline: { level: [2, 3] },
    search: { provider: 'local' }
  }
})
```

- [ ] **Step 3: Create landing page (book/index.md)**
- [ ] **Step 4: Run `npm install` and verify `npm run dev` works**
- [ ] **Step 5: Commit**

---

## Phase 1: Research & Intermediate Storage (Parallel Agents)

> **Execution Strategy:** Dispatch 8-10 parallel subagents, each analyzing one subsystem. Results stored in `book/_research/` as structured Markdown. These are NOT final chapters — they are raw material for the writing phase.

### Task 1.1: Research - Core Engine (QueryEngine + Query Loop)

**Files:**
- Create: `book/_research/01-core-engine.md`

**Agent Instructions:**
- Read `src/QueryEngine.ts` (1,295 lines) completely
- Read `src/query.ts` (1,729 lines) completely
- Read `src/query/deps.ts`, `src/query/config.ts`
- Read `src/services/tools/StreamingToolExecutor.ts`
- Document: class hierarchy, state machine, recovery paths, streaming protocol
- Include: all key type definitions, function signatures, state transitions
- Draw: Mermaid sequence diagram of a complete query cycle

### Task 1.2: Research - Tool System

**Files:**
- Create: `book/_research/02-tool-system.md`

**Agent Instructions:**
- Read `src/Tool.ts` (793 lines) completely
- Read `src/tools.ts` (390 lines) completely
- Read `src/services/tools/toolOrchestration.ts`, `src/services/tools/toolExecution.ts`
- Read 5+ tool implementations: BashTool, FileReadTool, FileEditTool, AgentTool, GrepTool
- Document: Tool interface (every field), buildTool() factory, execution pipeline
- Document: concurrency model, result budgeting, deferred tools, progress reporting
- Include: complete type definitions, execution flow diagrams

### Task 1.3: Research - Permission & Security System

**Files:**
- Create: `book/_research/03-permissions-security.md`

**Agent Instructions:**
- Read `src/utils/permissions/permissions.ts` (600+ lines)
- Read `src/utils/permissions/permissionSetup.ts`, `filesystem.ts`, `yoloClassifier.ts`
- Read `src/utils/sandbox/sandbox-adapter.ts`
- Read `src/utils/shell/readOnlyCommandValidation.ts`
- Document: permission modes, rule sources, decision flow, classifier integration
- Document: sandbox architecture, bash command analysis, path validation
- Include: complete decision tree, rule priority, security patterns

### Task 1.4: Research - Agent & Task Orchestration

**Files:**
- Create: `book/_research/04-agent-task-system.md`

**Agent Instructions:**
- Read `src/tools/AgentTool/AgentTool.tsx`, `runAgent.ts`, `loadAgentsDir.ts`
- Read all built-in agent definitions in `src/tools/AgentTool/built-in/`
- Read `src/Task.ts`, `src/tasks.ts`, and all implementations in `src/tasks/`
- Read `src/coordinator/coordinatorMode.ts`
- Read `src/utils/swarm/` (spawnInProcess.ts, inProcessRunner.ts, permissionSync.ts, backends/)
- Document: agent definition schema, spawning flow, task lifecycle, multi-agent patterns
- Document: coordinator mode, teammate isolation, fork subagent, remote execution
- Include: state machine diagrams, communication protocols

### Task 1.5: Research - Terminal UI Framework (Ink)

**Files:**
- Create: `book/_research/05-terminal-ui.md`

**Agent Instructions:**
- Read `src/ink/ink.tsx` (1,722 lines) - core engine
- Read `src/ink/reconciler.ts` - React reconciler
- Read `src/ink/dom.ts`, `src/ink/render-node-to-output.ts`
- Read `src/ink/layout/` - Yoga layout integration
- Read `src/ink/events/` - event system
- Read `src/ink/selection.ts`, `src/ink/hit-test.ts`
- Read key components: Box, ScrollBox, Text, Button
- Document: rendering pipeline, reconciler host config, layout engine, event dispatch
- Document: differential updates, hardware scroll optimization, selection state machine
- Include: rendering pipeline diagram, component hierarchy

### Task 1.6: Research - Extension System (Skills, Plugins, MCP, Hooks)

**Files:**
- Create: `book/_research/06-extension-system.md`

**Agent Instructions:**
- Read `src/skills/loadSkillsDir.ts` (34K), `src/skills/bundledSkills.ts`
- Read `src/plugins/` - all files
- Read `src/services/mcp/client.ts` (3.3K lines), config, auth, transport
- Read `src/utils/hooks/` - hooksConfigManager, execAgentHook, hookEvents, etc.
- Read `src/tools/SkillTool/SkillTool.ts`, `src/tools/MCPTool/MCPTool.ts`
- Document: skill format, discovery pipeline, plugin lifecycle, MCP protocol integration
- Document: hook system (PreToolUse, PostToolUse, etc.), event types, execution model
- Include: extension loading sequence, MCP connection lifecycle

### Task 1.7: Research - State Management & Configuration

**Files:**
- Create: `book/_research/07-state-config.md`

**Agent Instructions:**
- Read `src/state/` - all files (store.ts, AppStateStore.ts, AppState.tsx, selectors.ts)
- Read `src/utils/settings/settings.ts` (32K), `types.ts` (42K)
- Read `src/utils/sessionStorage.ts` (180K) - session persistence
- Read `src/context.ts`, `src/context/` directory
- Read `src/constants/prompts.ts` (54K) - system prompt assembly
- Document: store implementation, AppState structure, settings layering
- Document: session storage model, context injection, system prompt composition
- Include: state flow diagrams, settings merge hierarchy

### Task 1.8: Research - CLI, Bridge & Infrastructure

**Files:**
- Create: `book/_research/08-infrastructure.md`

**Agent Instructions:**
- Read `src/main.tsx` (first 300 + last 300 lines), `src/entrypoints/cli.tsx`, `src/entrypoints/init.ts`
- Read `src/cli/print.ts` (212K), `src/cli/structuredIO.ts`
- Read `src/bridge/bridgeMain.ts`, `src/bridge/bridgeApi.ts`, `src/bridge/sessionRunner.ts`
- Read `src/upstreamproxy/`
- Read `src/cli/transports/` - WebSocket, SSE, Hybrid
- Read `src/migrations/` - migration pattern
- Document: bootstrap sequence, multi-mode dispatch, transport architecture
- Document: bridge/CCR system, proxy setup, migration framework
- Include: startup sequence diagram, transport selection flowchart

---

## Phase 2: Book Writing (Sequential, Agent-Assisted)

> **Execution Strategy:** Write chapters sequentially using research materials. Each chapter dispatched as a subagent task with the corresponding research file as input. Chapters are final Markdown with Mermaid diagrams.

### Part I: 总览篇 — Architecture Overview

#### Task 2.1: Chapter 1 - 什么是 AI Harness？

**Files:**
- Create: `book/part1/chapter01-what-is-ai-harness.md`

**Content Outline:**
1. AI 模型的"裸能力"与"成品能力"的差距
2. Harness 的定义：将 AI 模型包装成可用工具的编排框架
3. Claude Code 作为 Harness 的典型案例
4. Harness 的核心职责：工具编排、权限控制、上下文管理、多轮对话、流式交互
5. 本书的结构与阅读指南
6. 架构全景图（Mermaid）

#### Task 2.2: Chapter 2 - 全局架构鸟瞰

**Files:**
- Create: `book/part1/chapter02-architecture-overview.md`

**Content Outline:**
1. 分层架构：入口层 → 引擎层 → 工具层 → UI 层 → 扩展层
2. 核心数据流：用户输入 → 系统提示组装 → API 调用 → 工具执行 → 结果渲染
3. 关键设计决策：Generator-based streaming、Plugin architecture、Feature gates + DCE
4. 代码仓库结构导览（目录树 + 职责说明）
5. 技术栈选型：TypeScript + React + Ink + Yoga + Bun

#### Task 2.3: Chapter 3 - 启动流程与生命周期

**Files:**
- Create: `book/part1/chapter03-lifecycle.md`

**Content Outline:**
1. 从命令行到第一个 API 调用的完整路径
2. `cli.tsx` → `init.ts` → `main.tsx` → `QueryEngine` 初始化链
3. 快速路径优化（--version 零开销）
4. 延迟加载策略：OpenTelemetry、MCP、重型工具
5. 优雅退出与资源清理
6. 启动时序图（Mermaid sequence diagram）

---

### Part II: 引擎篇 — Core Engine

#### Task 2.4: Chapter 4 - QueryEngine：指挥中枢

**Files:**
- Create: `book/part2/chapter04-query-engine.md`

**Content Outline:**
1. QueryEngine 的角色：public API boundary
2. QueryEngineConfig 完整解析（每个字段的含义与用途）
3. submitMessage() 方法：系统提示加载、上下文注入、权限包装
4. 依赖注入：QueryDeps 的设计哲学
5. 与 query() 的分工边界
6. Facade 模式的应用

#### Task 2.5: Chapter 5 - 多轮循环：Agentic Loop 的心脏

**Files:**
- Create: `book/part2/chapter05-agentic-loop.md`

**Content Outline:**
1. `query()` 函数签名与 Generator 协议
2. State 类型：循环的可变状态
3. 单次迭代的完整流程（预处理 → API 调用 → 工具执行 → 后处理）
4. 终止条件判断
5. 错误恢复状态机：maxOutputTokens recovery、reactive compact
6. 循环流程图（Mermaid flowchart）

#### Task 2.6: Chapter 6 - 系统提示与上下文组装

**Files:**
- Create: `book/part2/chapter06-system-prompt-context.md`

**Content Outline:**
1. 系统提示的分层结构
2. `constants/prompts.ts` 的组装逻辑
3. 上下文注入：Git 状态、内存文件、工作目录
4. 用户上下文 vs 系统上下文
5. 缓存策略（Memoization）
6. 动态提示：memory mechanics、agent definitions

#### Task 2.7: Chapter 7 - 流式传输与上下文压缩

**Files:**
- Create: `book/part2/chapter07-streaming-compaction.md`

**Content Outline:**
1. AsyncGenerator-based streaming 协议
2. StreamEvent 类型系统
3. 四层压缩架构：Snip → Microcompact → Collapse → Autocompact
4. 压缩触发条件与策略
5. Token 预算管理
6. 压缩决策流程图

---

### Part III: 工具篇 — Tool System

#### Task 2.8: Chapter 8 - 工具接口：一切能力的基石

**Files:**
- Create: `book/part3/chapter08-tool-interface.md`

**Content Outline:**
1. `Tool<Input, Output, P>` 泛型接口完整解析
2. 核心方法：call(), description(), prompt(), checkPermissions()
3. 元数据声明：isConcurrencySafe, isReadOnly, isDestructive
4. UI 渲染协议：renderToolUseMessage, renderToolResultMessage
5. `buildTool()` 工厂模式与安全默认值
6. Zod schema 验证集成

#### Task 2.9: Chapter 9 - 工具执行引擎

**Files:**
- Create: `book/part3/chapter09-tool-execution.md`

**Content Outline:**
1. 工具编排：`toolOrchestration.ts` 的并发分区策略
2. 执行管线：查找 → 验证 → 权限 → Hook → 执行 → 后处理
3. `StreamingToolExecutor`：流式并发执行
4. 结果预算系统（toolResultStorage）
5. 上下文修改器（contextModifier）模式
6. 错误分类与恢复

#### Task 2.10: Chapter 10 - 权限系统：安全的多层防线

**Files:**
- Create: `book/part3/chapter10-permission-system.md`

**Content Outline:**
1. 权限模式枚举：default, plan, auto, bypass, ask, dontAsk
2. 规则来源优先级（7 层）
3. 决策流程：规则匹配 → 分类器 → Hook → 用户交互
4. Bash 命令安全分析（子命令拆分、重定向检测、危险模式识别）
5. 文件系统权限（路径匹配、glob 模式）
6. 沙箱隔离架构
7. 决策树可视化（Mermaid）

#### Task 2.11: Chapter 11 - 内置工具深度剖析

**Files:**
- Create: `book/part3/chapter11-builtin-tools.md`

**Content Outline:**
1. BashTool：命令执行、并发安全判断、输出流式传输、沙箱集成
2. FileReadTool：多格式支持（文本、PDF、图片、Jupyter）、Token 限制
3. FileEditTool：字符串匹配替换、严格模式、LSP 集成
4. GlobTool & GrepTool：文件搜索与内容搜索
5. WebFetchTool & WebSearchTool：网络能力
6. 工具搜索（ToolSearch）与延迟加载

---

### Part IV: Agent 篇 — Agent Orchestration

#### Task 2.12: Chapter 12 - Agent 定义与加载

**Files:**
- Create: `book/part4/chapter12-agent-definition.md`

**Content Outline:**
1. AgentDefinition schema 完整解析
2. 三种来源：内置、自定义、插件
3. 内置 Agent 深度分析：General Purpose, Explore, Plan, Verification
4. ONE_SHOT Agent 优化（token 节省策略）
5. Agent 工具过滤管线
6. Agent 系统提示动态渲染

#### Task 2.13: Chapter 13 - 任务管理系统

**Files:**
- Create: `book/part4/chapter13-task-management.md`

**Content Outline:**
1. TaskType 枚举与 TaskState 状态机
2. 任务生命周期：注册 → 运行 → 完成/失败/终止 → 通知 → 驱逐
3. 磁盘输出流：outputFile + outputOffset
4. LocalAgentTask：进度追踪、消息缓冲
5. RemoteAgentTask：CCR 会话管理、WebSocket 轮询
6. InProcessTeammateTask：AsyncLocalStorage 隔离

#### Task 2.14: Chapter 14 - 多 Agent 协调

**Files:**
- Create: `book/part4/chapter14-multi-agent-coordination.md`

**Content Outline:**
1. Coordinator 模式：编排者 vs 执行者
2. Swarm 后端：Tmux、iTerm2、In-Process
3. 权限同步：Mailbox 系统、Bridge 路由
4. Fork Subagent：字节级缓存命中优化
5. Agent Summary 服务：30 秒周期摘要
6. 多 Agent 通信协议（XML 通知格式）

#### Task 2.15: Chapter 15 - 远程与分布式执行

**Files:**
- Create: `book/part4/chapter15-remote-execution.md`

**Content Outline:**
1. Bridge 架构：本地 ↔ CCR 容器
2. 会话管理：创建、轮询、归档
3. Transport 抽象：WebSocket、SSE、Hybrid
4. 上游代理（Upstream Proxy）：MITM 代理设置
5. Token 安全处理（堆内存隔离、文件删除）
6. 指数退避与睡眠检测

---

### Part V: UI 篇 — Terminal UI Framework

#### Task 2.16: Chapter 16 - 自定义 React 终端渲染器

**Files:**
- Create: `book/part5/chapter16-terminal-renderer.md`

**Content Outline:**
1. 为什么需要自定义 Ink？
2. React Reconciler Host Config 实现
3. DOM 实现：DOMElement、TextNode
4. 渲染管线：React tree → Yoga layout → ANSI output → Terminal
5. 帧管理：前后缓冲区、差分更新
6. 终端能力检测：Kitty 协议、超链接、同步输出

#### Task 2.17: Chapter 17 - 布局引擎与事件系统

**Files:**
- Create: `book/part5/chapter17-layout-events.md`

**Content Outline:**
1. Yoga 布局引擎集成（Flex 模型）
2. 布局计算与缓存策略
3. 事件系统：Capture/Bubble 阶段
4. 键盘事件解析（parse-keypress.ts）
5. 鼠标事件与 Hit Testing
6. 选择系统状态机
7. 硬件滚动优化（DECSTBM）

#### Task 2.18: Chapter 18 - 组件架构与交互模式

**Files:**
- Create: `book/part5/chapter18-components.md`

**Content Outline:**
1. 核心组件：Box、ScrollBox、Text、Button
2. 权限对话框组件族
3. 消息渲染组件系统
4. 设计系统（design-system/）
5. 自定义 Hooks 库
6. 性能优化：对象池、宽度缓存、选择性重渲染

---

### Part VI: 扩展篇 — Extension System

#### Task 2.19: Chapter 19 - 插件系统

**Files:**
- Create: `book/part6/chapter19-plugin-system.md`

**Content Outline:**
1. 插件定义格式（name, skills, hooks, mcpServers）
2. 内置插件 vs 市场插件 vs 外部插件
3. 插件生命周期：加载 → 启用 → 运行 → 禁用
4. 插件与 AppState 的集成
5. 安全沙箱与权限限制

#### Task 2.20: Chapter 20 - Skills 框架

**Files:**
- Create: `book/part6/chapter20-skills-framework.md`

**Content Outline:**
1. Skill 文件格式（YAML frontmatter + Markdown prompt）
2. 发现管线：目录扫描 → gitignore 过滤 → frontmatter 解析
3. Skill 来源：bundled、user、plugin、managed、MCP
4. SkillTool 执行模型（fork subagent）
5. Token 预算管理
6. 与命令系统的集成

#### Task 2.21: Chapter 21 - MCP 协议集成

**Files:**
- Create: `book/part6/chapter21-mcp-integration.md`

**Content Outline:**
1. MCP 协议概述（tools, resources, prompts）
2. 传输层：StdIO、SSE、HTTP、WebSocket
3. 客户端实现：连接管理、工具发现、调用执行
4. OAuth 认证流程
5. MCPTool 动态注册
6. 资源浏览（ListMcpResourcesTool, ReadMcpResourceTool）

#### Task 2.22: Chapter 22 - Hook 系统

**Files:**
- Create: `book/part6/chapter22-hook-system.md`

**Content Outline:**
1. Hook 事件类型：PreToolUse, PostToolUse, UserPromptSubmit, etc.
2. Hook 配置与匹配
3. 执行模型：Shell hook、HTTP hook、Prompt hook
4. Exit code 协议（0=允许, 2=阻止+显示）
5. Hook 与权限系统的交互
6. 实战：自定义安全 Hook 示例

---

### Part VII: 基础设施篇 — Infrastructure

#### Task 2.23: Chapter 23 - CLI 架构与多模式入口

**Files:**
- Create: `book/part7/chapter23-cli-architecture.md`

**Content Outline:**
1. 入口点分发：REPL、SDK、Server、Remote
2. Feature gates 与死代码消除（Bun bundler）
3. 结构化 I/O 协议（structuredIO.ts）
4. 命令系统：注册、发现、执行
5. 快速路径优化
6. 多模式入口流程图

#### Task 2.24: Chapter 24 - 配置系统

**Files:**
- Create: `book/part7/chapter24-configuration.md`

**Content Outline:**
1. 设置来源层级：managed > policy > local > project > user
2. SettingsJson schema（Zod 定义）
3. 热重载：文件监听、变更检测、差分应用
4. 迁移系统（src/migrations/）
5. 快捷键系统（keybindings/）
6. MDM 支持（Windows 注册表集成）

#### Task 2.25: Chapter 25 - 安全模型全景

**Files:**
- Create: `book/part7/chapter25-security-model.md`

**Content Outline:**
1. 安全层级：权限规则 → 分类器 → Hook → 沙箱 → 代理
2. Bash 命令安全分析深度剖析
3. 文件系统安全边界
4. 网络安全：域名白名单、代理设置
5. 密钥安全：堆内存隔离、Token 文件删除
6. 安全架构全景图

---

### Part VIII: 模式篇 — Design Patterns & Advanced Topics

#### Task 2.26: Chapter 26 - 设计模式目录

**Files:**
- Create: `book/part8/chapter26-design-patterns.md`

**Content Outline:**
1. Generator-Based Streaming：异步生成器驱动全栈
2. Plugin Architecture：工具、命令、任务的统一接口
3. Feature Gates + DCE：编译时与运行时的能力开关
4. Dependency Injection：QueryDeps 的测试友好设计
5. Recovery State Machine：多层错误恢复
6. Abort Controller Hierarchy：级联取消
7. Context Threading：ToolUseContext 的"上帝对象"必要性
8. Lazy Loading：按需加载与循环依赖打破

#### Task 2.27: Chapter 27 - 性能优化策略

**Files:**
- Create: `book/part8/chapter27-performance.md`

**Content Outline:**
1. 启动性能：快速路径、延迟加载、并行预取
2. 渲染性能：差分更新、硬件滚动、对象池
3. 内存效率：CharPool、StylePool、消息上限
4. Token 经济：缓存命中、ONE_SHOT 优化、结果预算
5. 并发性能：工具并行执行、Agent 并行派遣
6. 网络性能：DNS 预连接、WebSocket 复用

#### Task 2.28: Chapter 28 - 构建你自己的 AI Harness

**Files:**
- Create: `book/part8/chapter28-build-your-own.md`

**Content Outline:**
1. 最小可行 Harness：API 调用 + 单工具
2. 添加多轮对话与上下文管理
3. 实现工具系统与权限模型
4. 添加 Agent 能力与任务管理
5. UI 层的选择与实现
6. 扩展性设计：插件、技能、MCP
7. 生产化考量：安全、性能、监控
8. 架构决策清单

---

## Phase 3: Assembly & Polish

### Task 3.1: Sidebar Navigation & Cross-References

- [ ] Generate complete VitePress sidebar config from all chapters
- [ ] Add inter-chapter links and cross-references
- [ ] Create glossary page with key terms

### Task 3.2: Diagrams & Visuals

- [ ] Ensure every chapter has at least 1 Mermaid diagram
- [ ] Add architecture overview diagram to landing page
- [ ] Create data flow diagrams for key subsystems

### Task 3.3: Index & Search Optimization

- [ ] Add proper frontmatter to all chapters
- [ ] Optimize headings for search
- [ ] Add tags/categories

### Task 3.4: Build & Verify

- [ ] Run `npm run build` and fix any errors
- [ ] Verify all Mermaid diagrams render correctly
- [ ] Check all code blocks have proper syntax highlighting
- [ ] Test navigation and search
- [ ] Commit final version

---

## Execution Strategy

### Recommended: Multi-Session Subagent Approach

**Session 1 (Current):**
- Phase 0: Project scaffolding
- Phase 1: Research (8 parallel agents → `book/_research/`)

**Session 2:**
- Phase 2, Part I-II: Write chapters 1-7 (overview + core engine)

**Session 3:**
- Phase 2, Part III-IV: Write chapters 8-15 (tools + agents)

**Session 4:**
- Phase 2, Part V-VI: Write chapters 16-22 (UI + extensions)

**Session 5:**
- Phase 2, Part VII-VIII: Write chapters 23-28 (infrastructure + patterns)

**Session 6:**
- Phase 3: Assembly, polish, build

### Per-Chapter Writing Protocol

Each chapter agent receives:
1. The research file for that subsystem
2. The chapter outline from this plan
3. Instructions to write 3000-5000 words
4. Instructions to include Mermaid diagrams
5. Instructions to include actual code excerpts (not pseudocode)
6. The target audience description

### Quality Standards

- Every architectural claim must cite a specific source file and line range
- Code excerpts must be real, not simplified pseudocode
- Diagrams must accurately represent the actual data flow
- Chinese prose with English technical terms preserved
- Each chapter stands alone but references related chapters
