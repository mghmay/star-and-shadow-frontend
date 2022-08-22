export interface Film {
  filmId: number;
  title: string;
  description: string;
  releaseYear: number;
  languageId: number;
  language: string;
  inventory: any;
  originalLanguageId: string;
  rentalDuration: number;
  rentalRate: number;
  length: number;
  rating: string;
  category: string[];
  cast: string[];
  specialFeatures: string[];
}
