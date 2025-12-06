export enum DiagramType {
  NONE = 'NONE'
}

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  diagram?: DiagramType;
  timestamp: number;
}

export interface Chapter {
  id: number;
  title: string;
}

export const CHAPTERS: Chapter[] = [
  { id: 1, title: "Positive" },
  { id: 2, title: "Active" },
  { id: 3, title: "Timely" },
  { id: 4, title: "Effective" },
  { id: 5, title: "Economic" },
  { id: 6, title: "Learning" },
  { id: 7, title: "Exploring" },
  { id: 8, title: "Enthusiastic" },
  { id: 9, title: "Understanding" },
  { id: 10, title: "Contributing" },
  { id: 11, title: "Sharing" },
  { id: 12, title: "Giving" },
  { id: 13, title: "Loving" },
  { id: 14, title: "Trusting" },
  { id: 15, title: "Responsible" },
  { id: 16, title: "Connecting" },
  { id: 17, title: "Unifying" },
  { id: 18, title: "Enjoying" },
];

export const SAMPLE_QUESTIONS = [
  "What defines a responsible volunteer?",
  "How can I practice being 'Timely'?",
  "Tell me about the Four Way Reality.",
  "What is the Pentagon of Effectiveness?",
  "Why is sharing important in volunteering?",
  "Explain the relationship between Love and Devotion.",
];