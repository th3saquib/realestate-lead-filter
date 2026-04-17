# 🏠 Real Estate Lead Filter

AI-powered real estate lead filtering and scoring system. Filters high net-worth buyers using conditional logic, Meta Ads data, and local LLM integration.

## Features
- Score and rank leads based on budget, location, and intent
- Meta Ads webhook integration
- Local LLM-based lead analysis
- REST API with Express.js
- Simple dashboard UI

## Tech Stack
- Node.js + Express
- Local LLM (Ollama)
- MongoDB (Mongoose)
- dotenv for config

## Getting Started
```bash
npm install
cp .env.example .env
npm run dev
```

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/leads | Submit a new lead |
| GET | /api/leads | Get all leads |
| GET | /api/leads/:id | Get lead by ID |
| POST | /api/leads/score | Score a lead with LLM |

## Folder Structure
```
src/
├── controllers/
├── models/
├── routes/
├── services/
└── index.js
```
