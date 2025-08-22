# API de Consulta de Domínios (.br) via RDAP

![Node](https://img.shields.io/badge/Node-%3E%3D18-339933)
![Express](https://img.shields.io/badge/Express-4.x-000000)
![Status](https://img.shields.io/badge/RDAP-Registro.br-blue)

API simples em **Node.js + Express** que consulta o serviço **RDAP** do Registro.br e retorna os dados do domínio em **JSON**.

---

## Sumário
- [Recursos](#recursos)
- [Como rodar](#como-rodar)
- [Endpoint](#endpoint)
- [Exemplo de uso](#exemplo-de-uso)

---

## Recursos
- Consulta qualquer domínio **.br** via **RDAP**
- Resposta **JSON** pronta para consumo
- **CORS** liberado por padrão

---

## Como rodar

### Pré-requisitos
- **Node.js 18+**
- **npm**

### Instalação
```bash
npm install
npm start
```

---

## Endpoint

### `GET /v1/whois?domain=seudominio.com.br`
- Parâmetro obrigatório: `domain`
- Exemplo de resposta:
```json
{
	"domain": "exemplo.com.br",
	"source": "rdap.registro.br",
	"data": { /* dados RDAP */ }
}
```

---

## Exemplo de uso

```
GET http://localhost:3000/v1/whois?domain=exemplo.com.br
```

---
