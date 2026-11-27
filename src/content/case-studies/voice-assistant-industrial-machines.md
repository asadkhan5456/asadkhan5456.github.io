---
title: Multilingual voice assistant for industrial machines
client: Albert Handtmann (former employer)
order: 4
summary: A voice assistant for filling and portioning machines built on Azure OpenAI GPT models and Whisper speech recognition, tested in production at customer sites.
diagram: voice
diagramAlt: "Architecture: an operator speaks to the machine. Whisper converts speech to text. Azure OpenAI GPT models generate the answer. MLOps on Azure with CI/CD handles validation and deployment. A separate ML-based process-monitoring model predicts product quality."
context: Albert Handtmann builds filling and portioning machines that are used by customers in many countries.
problem: Operators need help at the machine in their own language, and product quality needs to be monitored during production.
approach:
  - A multilingual voice assistant for filling and portioning machines, built on Azure OpenAI GPT models and Whisper speech recognition.
  - MLOps on Azure with CI/CD.
  - An ML-based process-monitoring model for product quality.
role: Development, MLOps and deployment.
outcome: The voice assistant was tested in production at customer sites.
stack: [Python, Azure OpenAI, Whisper, Azure, CI/CD, MLOps]
---
