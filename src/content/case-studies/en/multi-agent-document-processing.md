---
title: Multi-agent document processing platform
client: Enterprise client
order: 1
summary: A production multi-agent system that reads PDF documents and turns them into a predefined structured format for downstream systems.
diagram: doc-platform
diagramAlt: "Architecture: PDF documents enter a multi-agent processing service. Agents communicate through Apache Kafka. The output is structured data in a predefined format, consumed by downstream systems. Everything is hosted on Microsoft Azure."
context: An enterprise client receives PDF documents whose content is needed by downstream systems in a predefined structured format.
problem: The documents arrive as PDFs, while the downstream systems expect structured data in a fixed format. The conversion has to run reliably in production, not as a one-off script.
approach:
  - A multi-agent system that reads the PDF documents and produces output in the predefined structured format.
  - Event-driven communication between the components with Apache Kafka.
  - Hosted on Microsoft Azure.
role: Architecture, implementation and production deployment.
outcome: The system is in production and has been handed over to the client team.
stack: [Python, Multi-agent system, Apache Kafka, Microsoft Azure]
---
