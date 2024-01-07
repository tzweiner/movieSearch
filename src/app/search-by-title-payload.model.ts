export interface SearchByTitlePayload {
  s: string;
  year?: number;
  plot: MoviePlot;
  type: MovieType;
}

export type MovieType =  'movie' | 'series' | 'episode';
export type MoviePlot = 'full' | 'short';
