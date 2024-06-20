import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';
  private apiKey = 'YOUR_API_KEY';

  constructor(private http: HttpClient) {}

  getResponse(prompt: string) {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    };
    const body = {
      prompt: prompt,
      max_tokens: 50n
    };
    return this.http.post(this.apiUrl, body, { headers });
  }

  generateImage(prompt: string) {
    // Lógica para generar imagen con DALL-E
  }
}
