export interface Post {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T extends any> {
  success: boolean;
  message: string;
  data: T;
  errors: Record<string, string> | null;
}

export interface Question {
  id: number;
  question: string;
}
