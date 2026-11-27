---
title: Multi-Agenten-Plattform für die Dokumentenverarbeitung
client: Unternehmenskunde
order: 1
summary: Ein produktives Multi-Agenten-System, das PDF-Dokumente liest und in ein vorgegebenes strukturiertes Format für nachgelagerte Systeme überführt.
diagram: doc-platform
diagramAlt: "Architektur: PDF-Dokumente gelangen in ein Multi-Agenten-System. Die Agenten kommunizieren über Apache Kafka. Das Ergebnis sind strukturierte Daten in einem vorgegebenen Format für nachgelagerte Systeme. Alles läuft auf Microsoft Azure."
context: Ein Unternehmenskunde erhält PDF-Dokumente, deren Inhalt nachgelagerte Systeme in einem vorgegebenen strukturierten Format benötigen.
problem: Die Dokumente kommen als PDF, die nachgelagerten Systeme erwarten aber strukturierte Daten in einem festen Format. Die Umwandlung muss zuverlässig im Produktivbetrieb laufen, nicht als einmaliges Skript.
approach:
  - Ein Multi-Agenten-System, das die PDF-Dokumente liest und das Ergebnis im vorgegebenen strukturierten Format erzeugt.
  - Ereignisgesteuerte Kommunikation zwischen den Komponenten mit Apache Kafka.
  - Betrieb auf Microsoft Azure.
role: Architektur, Implementierung und produktives Deployment.
outcome: Das System ist in Produktion und wurde an das Team des Kunden übergeben.
stack: [Python, Multi-Agenten-System, Apache Kafka, Microsoft Azure]
---
