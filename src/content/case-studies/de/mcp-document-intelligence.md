---
title: Dokumenten-KI auf Basis von MCP
client: Unternehmenskunde
order: 2
summary: Agenten-Workflows für komplexe Dokumente, bei denen Dokumentkonvertierung und strukturierte Extraktion als Tools über das Model Context Protocol bereitstehen.
diagram: mcp
diagramAlt: "Architektur: Komplexe Dokumente (PDF, Word, Tabellen, Bilder) gehen an einen Orchestrator. Dieser ruft ein Konvertierungs-Tool und ein Extraktions-Tool auf, die beide über das Model Context Protocol bereitstehen. Die Agentenausgabe wird validiert und evaluiert. Alles läuft in Containern auf Kubernetes, ausgerollt mit Helm."
context: Ein Unternehmenskunde arbeitet mit komplexen Dokumenten, die PDF, Word, Tabellen und Bilder mischen.
problem: Strukturierte Informationen aus solchen gemischten Dokumenten zu gewinnen, braucht mehrere Verarbeitungsschritte – und die Ausgabe der Agenten muss geprüft werden, bevor man ihr vertrauen kann.
approach:
  - Agenten-Workflows, die von einem Orchestrator koordiniert werden.
  - Dokumentkonvertierung und strukturierte Extraktion als Tools über das Model Context Protocol (MCP).
  - Validierung und Evaluation der Agentenausgaben.
  - Containerisiertes Deployment auf Kubernetes mit Helm.
role: Architektur, Entwicklung, Evaluation und Deployment.
outcome: Agenten-Workflows für komplexe Dokumente mit MCP-Tools, Validierung und Evaluation der Ausgaben, betrieben in Containern auf Kubernetes.
stack: [Python, MCP / FastMCP, Agenten-Orchestrierung, Kubernetes, Helm, Docker]
---
