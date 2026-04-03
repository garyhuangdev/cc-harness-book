---
layout: home
hero:
  name: AI Harness 架构深度解析
  text: 从 Claude Code 源码看 AI Agent 框架设计
  tagline: 513,522 行代码，1,908 个文件，28 章深度剖析 — 教你从零构建生产级 AI Agent 编排框架
  actions:
    - theme: brand
      text: 开始阅读
      link: /zh/part1/chapter01-what-is-ai-harness
    - theme: alt
      text: 全局架构
      link: /zh/part1/chapter02-architecture-overview

features:
  - title: 引擎篇 — Core Engine
    details: 深入 QueryEngine 与 Agentic Loop，理解多轮对话、流式传输、上下文压缩的核心机制
    link: /zh/part2/chapter04-query-engine
  - title: 工具篇 — Tool System
    details: 解析工具接口设计、执行引擎、权限系统，理解 AI 如何安全地操作外部世界
    link: /zh/part3/chapter08-tool-interface
  - title: Agent 篇 — Orchestration
    details: 从单 Agent 到多 Agent 协调，任务管理、Coordinator 模式、远程分布式执行
    link: /zh/part4/chapter12-agent-definition
  - title: UI 篇 — Terminal Renderer
    details: 自定义 React 终端渲染器，Yoga 布局引擎，事件系统，高性能差分更新
    link: /zh/part5/chapter16-terminal-renderer
  - title: 扩展篇 — Extensions
    details: 插件、Skills、MCP 协议、Hook 系统 — 四大扩展机制的设计与实现
    link: /zh/part6/chapter19-plugin-system
  - title: 模式篇 — Design Patterns
    details: Generator Streaming、Feature Gates + DCE、Recovery State Machine 等 10+ 设计模式
    link: /zh/part8/chapter26-design-patterns
---
