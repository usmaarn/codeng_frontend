import type { ApiResponse } from "./types";

export class API {
  private prefix: string;
  private headers: Headers;

  constructor(prefix: string) {
    this.prefix = prefix;
    this.headers = new Headers({
      "Content-Type": "application/json",
    });
  }

  async get<T>(path: string) {
    return await this.processRequest<T>(this.prefix + path, "GET");
  }

  async post<T>(path: string, data: object | FormData) {
    return this.processRequest(this.post + path, "POST", {
      headers: {
        "Content-Type":
          data instanceof FormData ? "multipart/form-data" : "application/json",
      },
      body: data instanceof FormData ? data : JSON.stringify(data),
    });
  }

  async put<T>(path: string, data: object | FormData) {
    return this.processRequest(this.post + path, "PUT", {
      headers: {
        "Content-Type":
          data instanceof FormData ? "multipart/form-data" : "application/json",
      },
      body: data instanceof FormData ? data : JSON.stringify(data),
    });
  }

  async delete<T>(path: string, options?: RequestInit) {
    return this.processRequest(this.post + path, "DELETE", options);
  }

  async processRequest<T>(
    url: string,
    method: string,
    options?: RequestInit
  ): Promise<ApiResponse<T> | null> {
    const response = await fetch(url, {
      ...options,
      headers: { ...this.headers, ...options?.headers },
      method,
    });

    if (response.ok) {
      const json = await response.json();
      return json;
    }

    return null;
  }
}

export const api = new API(process.env.API_URL!);
