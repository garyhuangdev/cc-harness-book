import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

const zhSidebar = [
  {
    text: 'Part I: 总览篇',
    collapsed: false,
    items: [
      { text: 'Ch 1: 什么是 AI Harness？', link: '/zh/part1/chapter01-what-is-ai-harness' },
      { text: 'Ch 2: 全局架构鸟瞰', link: '/zh/part1/chapter02-architecture-overview' },
      { text: 'Ch 3: 启动流程与生命周期', link: '/zh/part1/chapter03-lifecycle' }
    ]
  },
  {
    text: 'Part II: 引擎篇',
    collapsed: false,
    items: [
      { text: 'Ch 4: QueryEngine 指挥中枢', link: '/zh/part2/chapter04-query-engine' },
      { text: 'Ch 5: Agentic Loop 的心脏', link: '/zh/part2/chapter05-agentic-loop' },
      { text: 'Ch 6: 系统提示与上下文组装', link: '/zh/part2/chapter06-system-prompt-context' },
      { text: 'Ch 7: 流式传输与上下文压缩', link: '/zh/part2/chapter07-streaming-compaction' }
    ]
  },
  {
    text: 'Part III: 工具篇',
    collapsed: false,
    items: [
      { text: 'Ch 8: 工具接口设计', link: '/zh/part3/chapter08-tool-interface' },
      { text: 'Ch 9: 工具执行引擎', link: '/zh/part3/chapter09-tool-execution' },
      { text: 'Ch 10: 权限系统', link: '/zh/part3/chapter10-permission-system' },
      { text: 'Ch 11: 内置工具深度剖析', link: '/zh/part3/chapter11-builtin-tools' }
    ]
  },
  {
    text: 'Part IV: Agent 篇',
    collapsed: false,
    items: [
      { text: 'Ch 12: Agent 定义与加载', link: '/zh/part4/chapter12-agent-definition' },
      { text: 'Ch 13: 任务管理系统', link: '/zh/part4/chapter13-task-management' },
      { text: 'Ch 14: 多 Agent 协调', link: '/zh/part4/chapter14-multi-agent-coordination' },
      { text: 'Ch 15: 远程与分布式执行', link: '/zh/part4/chapter15-remote-execution' }
    ]
  },
  {
    text: 'Part V: UI 篇',
    collapsed: false,
    items: [
      { text: 'Ch 16: 自定义终端渲染器', link: '/zh/part5/chapter16-terminal-renderer' },
      { text: 'Ch 17: 布局引擎与事件系统', link: '/zh/part5/chapter17-layout-events' },
      { text: 'Ch 18: 组件架构与交互', link: '/zh/part5/chapter18-components' }
    ]
  },
  {
    text: 'Part VI: 扩展篇',
    collapsed: false,
    items: [
      { text: 'Ch 19: 插件系统', link: '/zh/part6/chapter19-plugin-system' },
      { text: 'Ch 20: Skills 框架', link: '/zh/part6/chapter20-skills-framework' },
      { text: 'Ch 21: MCP 协议集成', link: '/zh/part6/chapter21-mcp-integration' },
      { text: 'Ch 22: Hook 系统', link: '/zh/part6/chapter22-hook-system' }
    ]
  },
  {
    text: 'Part VII: 基础设施篇',
    collapsed: false,
    items: [
      { text: 'Ch 23: CLI 架构', link: '/zh/part7/chapter23-cli-architecture' },
      { text: 'Ch 24: 配置系统', link: '/zh/part7/chapter24-configuration' },
      { text: 'Ch 25: 安全模型全景', link: '/zh/part7/chapter25-security-model' }
    ]
  },
  {
    text: 'Part VIII: 模式篇',
    collapsed: false,
    items: [
      { text: 'Ch 26: 设计模式目录', link: '/zh/part8/chapter26-design-patterns' },
      { text: 'Ch 27: 性能优化策略', link: '/zh/part8/chapter27-performance' },
      { text: 'Ch 28: 构建你自己的 AI Harness', link: '/zh/part8/chapter28-build-your-own' }
    ]
  }
]

const enSidebar = [
  {
    text: 'Part I: Overview',
    collapsed: false,
    items: [
      { text: 'Ch 1: What is an AI Harness?', link: '/en/part1/chapter01-what-is-ai-harness' },
      { text: 'Ch 2: Architecture Bird\'s Eye View', link: '/en/part1/chapter02-architecture-overview' },
      { text: 'Ch 3: Bootstrap & Lifecycle', link: '/en/part1/chapter03-lifecycle' }
    ]
  },
  {
    text: 'Part II: Core Engine',
    collapsed: false,
    items: [
      { text: 'Ch 4: QueryEngine — The Brain', link: '/en/part2/chapter04-query-engine' },
      { text: 'Ch 5: The Agentic Loop', link: '/en/part2/chapter05-agentic-loop' },
      { text: 'Ch 6: System Prompt & Context', link: '/en/part2/chapter06-system-prompt-context' },
      { text: 'Ch 7: Streaming & Compaction', link: '/en/part2/chapter07-streaming-compaction' }
    ]
  },
  {
    text: 'Part III: Tool System',
    collapsed: false,
    items: [
      { text: 'Ch 8: Tool Interface Design', link: '/en/part3/chapter08-tool-interface' },
      { text: 'Ch 9: Tool Execution Engine', link: '/en/part3/chapter09-tool-execution' },
      { text: 'Ch 10: Permission System', link: '/en/part3/chapter10-permission-system' },
      { text: 'Ch 11: Built-in Tools Deep Dive', link: '/en/part3/chapter11-builtin-tools' }
    ]
  },
  {
    text: 'Part IV: Agent System',
    collapsed: false,
    items: [
      { text: 'Ch 12: Agent Definition & Loading', link: '/en/part4/chapter12-agent-definition' },
      { text: 'Ch 13: Task Management', link: '/en/part4/chapter13-task-management' },
      { text: 'Ch 14: Multi-Agent Coordination', link: '/en/part4/chapter14-multi-agent-coordination' },
      { text: 'Ch 15: Remote & Distributed Execution', link: '/en/part4/chapter15-remote-execution' }
    ]
  },
  {
    text: 'Part V: Terminal UI',
    collapsed: false,
    items: [
      { text: 'Ch 16: Custom Terminal Renderer', link: '/en/part5/chapter16-terminal-renderer' },
      { text: 'Ch 17: Layout Engine & Events', link: '/en/part5/chapter17-layout-events' },
      { text: 'Ch 18: Component Architecture', link: '/en/part5/chapter18-components' }
    ]
  },
  {
    text: 'Part VI: Extensions',
    collapsed: false,
    items: [
      { text: 'Ch 19: Plugin System', link: '/en/part6/chapter19-plugin-system' },
      { text: 'Ch 20: Skills Framework', link: '/en/part6/chapter20-skills-framework' },
      { text: 'Ch 21: MCP Integration', link: '/en/part6/chapter21-mcp-integration' },
      { text: 'Ch 22: Hook System', link: '/en/part6/chapter22-hook-system' }
    ]
  },
  {
    text: 'Part VII: Infrastructure',
    collapsed: false,
    items: [
      { text: 'Ch 23: CLI Architecture', link: '/en/part7/chapter23-cli-architecture' },
      { text: 'Ch 24: Configuration System', link: '/en/part7/chapter24-configuration' },
      { text: 'Ch 25: Security Model', link: '/en/part7/chapter25-security-model' }
    ]
  },
  {
    text: 'Part VIII: Patterns',
    collapsed: false,
    items: [
      { text: 'Ch 26: Design Patterns Catalog', link: '/en/part8/chapter26-design-patterns' },
      { text: 'Ch 27: Performance Optimization', link: '/en/part8/chapter27-performance' },
      { text: 'Ch 28: Build Your Own AI Harness', link: '/en/part8/chapter28-build-your-own' }
    ]
  }
]

export default withMermaid(
  defineConfig({
    title: 'AI Harness Architecture',
    description: 'Deep Dive into AI Agent Framework Design through Claude Code Source Analysis',
    lastUpdated: true,
    srcExclude: ['_research/**'],
    markdown: {
      lineNumbers: true,
      theme: {
        light: 'github-light',
        dark: 'one-dark-pro'
      }
    },
    head: [
      ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
    ],
    locales: {
      en: {
        label: 'English',
        lang: 'en-US',
        link: '/en/',
        themeConfig: {
          nav: [
            { text: 'Home', link: '/en/' },
            { text: 'Start Reading', link: '/en/part1/chapter01-what-is-ai-harness' }
          ],
          sidebar: { '/en/': enSidebar },
          outline: { level: [2, 3], label: 'On this page' },
          docFooter: { prev: 'Previous', next: 'Next' },
          lastUpdated: { text: 'Last updated' },
          footer: {
            message: 'Based on Claude Code Source Analysis',
            copyright: 'AI Harness Architecture Deep Dive'
          }
        }
      },
      zh: {
        label: '中文',
        lang: 'zh-CN',
        link: '/zh/',
        themeConfig: {
          nav: [
            { text: '首页', link: '/zh/' },
            { text: '开始阅读', link: '/zh/part1/chapter01-what-is-ai-harness' }
          ],
          sidebar: { '/zh/': zhSidebar },
          outline: { level: [2, 3], label: '本章目录' },
          docFooter: { prev: '上一章', next: '下一章' },
          lastUpdated: { text: '最后更新于' },
          footer: {
            message: '基于 Claude Code 源码分析',
            copyright: 'AI Harness Architecture Deep Dive'
          }
        }
      }
    },
    themeConfig: {
      search: {
        provider: 'local'
      },
      socialLinks: [
        { icon: 'github', link: 'https://github.com' }
      ]
    }
  })
)
