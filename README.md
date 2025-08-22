$md = @"
# API de Consulta de Domínios (.br) via RDAP

![Node](https://img.shields.io/badge/Node-%3E%3D18-339933)
![Express](https://img.shields.io/badge/Express-4.x-000000)
![Status](https://img.shields.io/badge/RDAP-Registro.br-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen)

API simples em **Node.js + Express** que consulta o serviço **RDAP** do Registro.br e retorna os dados do domínio em **JSON**.  
Perfeita para integrações que antes dependiam de scraping/WHOIS em HTML.

> **RDAP** é o sucessor padronizado do WHOIS, pensado para consumo por máquinas (JSON).

---

## 🧭 Sumário
- [✨ Recursos](#-recursos)
- [🚀 Como rodar](#-como-rodar)
- [🔌 Endpoint](#-endpoint)
- [🔍 Exemplos de uso](#-exemplos-de-uso)
- [🧰 Variáveis de ambiente](#-variáveis-de-ambiente)
- [🛡️ Produção & segurança](#️-produção--segurança)
- [📦 Docker](#-docker)
- [🧪 Testes rápidos](#-testes-rápidos)
- [📚 OpenAPI (mini)](#-openapi-mini)
- [🗂 Estrutura do projeto](#-estrutura-do-projeto)
- [📄 Licença](#-licença)

---

## ✨ Recursos
- Consulta qualquer domínio **.br** via **RDAP**.
- Resposta **JSON** pronta para consumo.
- **Cache HTTP** leve (via `Cache-Control`).
- **CORS** liberado por padrão (facilita front-ends).
- Tratamento básico de **erros** e propagação do status do RDAP.

---

## 🚀 Como rodar

### Pré-requisitos
- **Node.js 18+** (recomendado)
- **npm** (vem com o Node)

### Instalação
```bash
npm install
