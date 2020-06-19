export interface Question {
  questionBody: string;
  rightChoice: string;
  rightQuestion: Question;
  leftChoice: string;
  leftQuestion: Question;
}
