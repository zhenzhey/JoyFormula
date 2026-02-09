import apiClient from './client';
import type { ExplorationRequest, ExplorationResponse } from '../types';

export const explorationApi = {
  /**
   * 根据能量值获取快乐推荐
   */
  async getRecommendations(energyLevel: number): Promise<ExplorationResponse> {
    // Convert 0-100 percentage to 1-10 scale for backend
    const scaledLevel = Math.max(1, Math.min(10, Math.round(energyLevel / 10)));
    const request: ExplorationRequest = {
      energy_level: scaledLevel,
    };
    const response = await apiClient.post<ExplorationResponse>('/api/exploration/recommend', request);
    return response.data;
  },
};
