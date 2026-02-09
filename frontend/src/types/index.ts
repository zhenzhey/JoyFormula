// API Response Types
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

// User Types
export interface User {
  id: string;
  username: string;
  created_at: string;
}

// Chat Types
export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface ChatStartResponse {
  session_id: string;
  initial_message: string;
}

export interface ChatMessageRequest {
  session_id: string;
  message: string;
}

export interface JoyFormula {
  scene?: string;
  people?: string;
  event?: string;
  trigger?: string;
  sensation?: string;
}

export interface JoyCardData {
  id: string;
  summary: string;
  formula: JoyFormula;
}

export interface ChatMessageResponse {
  ai_response: string;
  is_complete: boolean;
  card?: JoyCardData;
}

// Joy Card Types
export interface JoyCard {
  id: string;
  user_id: string;
  raw_input: string;
  formula_scene?: string;
  formula_people?: string;
  formula_event?: string;
  formula_trigger?: string;
  formula_sensation?: string;
  card_summary?: string;
  conversation_history: ChatMessage[];
  created_at: string;
  updated_at: string;
}

export interface JoyCardListResponse {
  cards: JoyCard[];
  total: number;
}

// Insight Types
export interface JoyInsight {
  id: string;
  user_id: string;
  insight_text: string;
  statement?: string;
  keywords?: string[];
  pattern_type?: string;
  evidence_cards: { card_id: string; quote: string }[];
  is_confirmed: boolean;
  is_rejected: boolean;
  created_at: string;
  updated_at: string;
}

export interface GenerateInsightsResponse {
  insights: JoyInsight[];
  message: string;
}

// Exploration Types
export interface ExplorationRequest {
  energy_level: number;
}

export interface Recommendation {
  title: string;
  description: string;
  related_insight?: string;
  energy_match?: string;
  confidence?: number;
}

export interface ExplorationResponse {
  energy_level: number;
  recommendations: Recommendation[];
}
