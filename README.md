# JoyFormula

An AI-powered happiness wellness application that helps users record, analyze, and rediscover their happy moments through a structured "Joy Formula".

```
Happiness = Scene + People + Event + Drive + Sense
```

## Features

- **Joy Coach Chat** — AI-guided conversations to record happy moments, extracting structured formula elements (scene, people, event, trigger, sensation)
- **Joy Cards** — Persistent records of each happy moment with AI-generated summaries
- **Joy Laws** — AI-analyzed patterns and insights derived from multiple recorded moments (requires 5+ cards)
- **Joy Mystery Box** — Personalized activity recommendations based on energy level and historical data
- **Multi-AI Provider** — Supports Anthropic Claude, OpenAI GPT, Google Gemini, and custom endpoints
- **Bilingual** — Full Chinese / English support (UI, prompts, AI system messages)
- **Dual Interface** — FastAPI REST API + Interactive CLI for terminal testing

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | FastAPI 0.115 + Uvicorn |
| Database | SQLite (dev) / PostgreSQL-ready |
| ORM | SQLAlchemy 2.0 |
| Validation | Pydantic 2.x |
| AI SDKs | anthropic, openai, google-generativeai |
| CLI | Rich |
| i18n | Custom translation module |

## Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/zhenzhey/JoyFormula
cd JoyFormula
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 2. Configure

```bash
cp .env.example .env
```

Edit `.env` with your AI provider and API key:

```env
AI_PROVIDER=gemini            # anthropic | openai | gemini | custom
GEMINI_API_KEY=your_key_here  # set the key matching your provider
DATABASE_URL=sqlite:///./joyformula.db
```

### 3. Run

**API Server:**

```bash
uvicorn app.main:app --reload
```

- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc
- Health check: http://localhost:8000/health

**Interactive CLI:**

```bash
python -m app.cli.interactive
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/auth/me` | Get current user info |
| `POST` | `/api/chat/start` | Start a new chat session |
| `POST` | `/api/chat/message` | Send message to Joy Coach |
| `POST` | `/api/chat/complete` | Finalize and save a joy card |
| `GET` | `/api/cards` | List joy cards (paginated) |
| `GET` | `/api/cards/{id}` | Get card details |
| `DELETE` | `/api/cards/{id}` | Delete a card |
| `POST` | `/api/insights/generate` | Generate joy laws (min 5 cards) |
| `GET` | `/api/insights` | List all insights |
| `PUT` | `/api/insights/{id}/confirm` | Confirm an insight |
| `PUT` | `/api/insights/{id}/reject` | Reject an insight |
| `POST` | `/api/exploration/recommend` | Get activity recommendations |

All endpoints require `X-User-ID` header for authentication (simplified for hackathon phase).

## Project Structure

```
app/
├── main.py              # FastAPI entry point
├── config.py            # Settings management
├── database.py          # SQLAlchemy setup
├── models/              # ORM models (User, JoyCard, JoyInsight, ChatSession)
├── schemas/             # Pydantic request/response schemas
├── api/                 # Route handlers (auth, chat, cards, insights, exploration)
├── services/            # Business logic (AI, chat, card, insight, exploration)
├── cli/                 # Interactive terminal interface
└── i18n/                # Translations and language state
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `AI_PROVIDER` | AI backend: `anthropic`, `openai`, `gemini`, `custom` | — |
| `ANTHROPIC_API_KEY` | Anthropic API key | — |
| `OPENAI_API_KEY` | OpenAI API key | — |
| `GEMINI_API_KEY` | Google Gemini API key | — |
| `CUSTOM_AI_ENDPOINT` | Custom AI endpoint URL | — |
| `CUSTOM_AI_API_KEY` | Custom AI endpoint key | — |
| `DATABASE_URL` | Database connection string | `sqlite:///./joyformula.db` |
| `SIMPLE_AUTH` | Use simplified header auth | `true` |

## License

MIT
