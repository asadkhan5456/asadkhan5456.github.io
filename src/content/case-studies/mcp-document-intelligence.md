---
title: MCP-based document intelligence
client: Enterprise client
order: 2
summary: Agent workflows for complex documents, with document conversion and structured extraction exposed as tools via the Model Context Protocol.
diagram: mcp
diagramAlt: "Architecture: complex documents (PDF, Word, tables, images) go to an orchestrator. The orchestrator calls a document conversion tool and a structured extraction tool, both exposed through the Model Context Protocol. Agent output passes through validation and evaluation. Everything runs in containers on Kubernetes, deployed with Helm."
context: An enterprise client works with complex documents that mix PDF, Word, tables and images.
problem: Extracting structured information from such mixed documents needs several processing steps, and the output of the agents has to be checked before it can be trusted.
approach:
  - Agent workflows coordinated by an orchestrator.
  - Document conversion and structured extraction exposed as tools via the Model Context Protocol (MCP).
  - Validation and evaluation of the agent output.
  - Containerized deployment on Kubernetes with Helm.
role: Architecture, development, evaluation and deployment.
outcome: Agent workflows for complex documents with MCP tools, output validation and evaluation, running in containers on Kubernetes.
stack: [Python, MCP / FastMCP, Agent orchestration, Kubernetes, Helm, Docker]
---
