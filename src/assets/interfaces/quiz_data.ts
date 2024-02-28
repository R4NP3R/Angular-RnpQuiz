export interface Option {
  id: number;
  name: string;
  alias: number;
}

export interface Question {
  id: number;
  question: string;
  options: Option[];
}

export interface Results {
  [key: number]: null
  text: string;
  image: string;
}

export interface Quiz {
  id: string;
  title: string;
  image: string;
  questions: Question[];
  results: Results[];
}
