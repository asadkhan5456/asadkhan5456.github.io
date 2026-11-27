// Generic architecture diagrams, built only from components named in the case studies.
// TODO(asad) markers below mark places where a real diagram would need detail that has not been confirmed yet.

type Pt = [number, number];
interface Node { x: number; y: number; w: number; h: number; label: string; sub?: string; kind?: 'default' | 'accent' | 'io' }
interface Edge { points: Pt[]; label?: string; labelAt?: Pt; dashed?: boolean; both?: boolean }
interface Group { x: number; y: number; w: number; h: number; label: string }
interface Diagram { title: string; caption: string; width: number; height: number; nodes: Node[]; edges: Edge[]; groups: Group[] }

export const diagrams = {
  // TODO(asad): number, names and responsibilities of the agents are not confirmed; shown as generic "Agent" boxes.
  'doc-platform': {
    title: 'Multi-agent document processing platform',
    caption: 'Generic view. PDFs flow through agents that communicate via Apache Kafka; the result is structured data in a predefined format.',
    width: 760,
    height: 300,
    groups: [{ x: 160, y: 20, w: 420, h: 260, label: 'Microsoft Azure' }],
    nodes: [
      { x: 16, y: 115, w: 120, h: 60, label: 'PDF', sub: 'documents', kind: 'io' },
      { x: 185, y: 60, w: 115, h: 56, label: 'Agent', kind: 'accent' },
      { x: 313, y: 60, w: 115, h: 56, label: 'Agent', kind: 'accent' },
      { x: 441, y: 60, w: 115, h: 56, label: 'Agent', kind: 'accent' },
      { x: 185, y: 190, w: 371, h: 52, label: 'Apache Kafka', sub: 'event-driven communication' },
      { x: 604, y: 70, w: 140, h: 60, label: 'Structured data', sub: 'predefined format', kind: 'io' },
      { x: 604, y: 180, w: 140, h: 60, label: 'Downstream', sub: 'systems', kind: 'io' },
    ],
    edges: [
      { points: [[136, 145], [175, 145], [175, 88], [185, 88]] },
      { points: [[242, 116], [242, 190]], both: true },
      { points: [[370, 116], [370, 190]], both: true },
      { points: [[498, 116], [498, 190]], both: true },
      { points: [[556, 88], [580, 88], [580, 100], [604, 100]] },
      { points: [[674, 130], [674, 180]] },
    ],
  },
  // TODO(asad): the exact tool list and the evaluation method are not confirmed; only conversion and extraction are shown.
  mcp: {
    title: 'MCP-based document intelligence',
    caption: 'Generic view. An orchestrator calls document tools over the Model Context Protocol; agent output is validated and evaluated.',
    width: 760,
    height: 320,
    groups: [{ x: 160, y: 20, w: 584, h: 280, label: 'Kubernetes · deployed with Helm' }],
    nodes: [
      { x: 16, y: 120, w: 124, h: 76, label: 'Documents', sub: 'PDF · Word\ntables · images', kind: 'io' },
      { x: 190, y: 128, w: 140, h: 60, label: 'Orchestrator', kind: 'accent' },
      { x: 400, y: 55, w: 150, h: 46, label: 'MCP server', kind: 'default' },
      { x: 590, y: 50, w: 140, h: 56, label: 'Document', sub: 'conversion tool' },
      { x: 590, y: 120, w: 140, h: 56, label: 'Structured', sub: 'extraction tool' },
      { x: 400, y: 215, w: 150, h: 60, label: 'Validation &', sub: 'evaluation', kind: 'accent' },
      { x: 590, y: 217, w: 140, h: 56, label: 'Structured', sub: 'output', kind: 'io' },
    ],
    edges: [
      { points: [[140, 158], [190, 158]] },
      { points: [[330, 145], [365, 145], [365, 78], [400, 78]], label: 'MCP', labelAt: [382, 112], both: true },
      { points: [[550, 78], [590, 78]] },
      { points: [[550, 78], [570, 78], [570, 148], [590, 148]] },
      { points: [[330, 172], [365, 172], [365, 245], [400, 245]] },
      { points: [[550, 245], [590, 245]] },
    ],
  },
  // TODO(asad): where the ontology-based standardization runs (in the pipelines or as a separate layer) is not confirmed.
  fabric: {
    title: 'Data platform for scientific process data',
    caption: 'Generic view. Metadata-driven pipelines integrate many sources into a Delta Lake lakehouse and standardize the data against an ontology.',
    width: 760,
    height: 300,
    groups: [{ x: 160, y: 20, w: 440, h: 260, label: 'Microsoft Fabric' }],
    nodes: [
      { x: 16, y: 50, w: 120, h: 46, label: 'Source', kind: 'io' },
      { x: 16, y: 112, w: 120, h: 46, label: 'Source', kind: 'io' },
      { x: 16, y: 174, w: 120, h: 46, label: 'Source …', kind: 'io' },
      { x: 185, y: 55, w: 180, h: 70, label: 'Metadata-driven', sub: 'pipelines · Python / PySpark', kind: 'accent' },
      { x: 400, y: 55, w: 180, h: 70, label: 'Lakehouse', sub: 'Delta Lake' },
      { x: 185, y: 185, w: 395, h: 60, label: 'Ontology-based standardization', kind: 'accent' },
      { x: 624, y: 185, w: 120, h: 60, label: 'AI & ML', sub: 'use cases', kind: 'io' },
    ],
    edges: [
      { points: [[136, 73], [160, 73], [160, 90], [185, 90]] },
      { points: [[136, 135], [160, 135], [160, 90], [185, 90]] },
      { points: [[136, 197], [160, 197], [160, 90], [185, 90]] },
      { points: [[365, 90], [400, 90]] },
      { points: [[490, 125], [490, 185]] },
      { points: [[580, 215], [624, 215]] },
    ],
  },
  // TODO(asad): how answers are returned to the operator (speech output, screen) is not confirmed; shown as a generic answer.
  voice: {
    title: 'Multilingual voice assistant for industrial machines',
    caption: 'Generic view. Speech is transcribed with Whisper and answered with Azure OpenAI GPT models; a separate model monitors product quality.',
    width: 760,
    height: 320,
    groups: [{ x: 160, y: 20, w: 584, h: 280, label: 'Microsoft Azure · MLOps with CI/CD' }],
    nodes: [
      { x: 16, y: 55, w: 120, h: 60, label: 'Operator', sub: 'speech', kind: 'io' },
      { x: 190, y: 57, w: 150, h: 56, label: 'Whisper', sub: 'speech to text', kind: 'accent' },
      { x: 380, y: 57, w: 170, h: 56, label: 'Azure OpenAI', sub: 'GPT models', kind: 'accent' },
      { x: 590, y: 57, w: 140, h: 56, label: 'Answer', sub: 'operator language', kind: 'io' },
      { x: 16, y: 200, w: 120, h: 60, label: 'Machine', sub: 'process data', kind: 'io' },
      { x: 190, y: 202, w: 360, h: 56, label: 'Process-monitoring model', sub: 'ML-based' },
      { x: 590, y: 202, w: 140, h: 56, label: 'Product', sub: 'quality', kind: 'io' },
    ],
    edges: [
      { points: [[136, 85], [190, 85]] },
      { points: [[340, 85], [380, 85]] },
      { points: [[550, 85], [590, 85]] },
      { points: [[136, 230], [190, 230]] },
      { points: [[550, 230], [590, 230]] },
    ],
  },
} satisfies Record<string, Diagram>;

export type DiagramKey = keyof typeof diagrams;
