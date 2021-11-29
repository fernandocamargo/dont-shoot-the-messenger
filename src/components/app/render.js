import Content from './content';
import Header from './header';

export const QUESTIONS = [
  {
    tags: [
      { id: 1, label: 'Problem Analysis' },
      { id: 2, label: 'C#' },
      { id: 3, label: 'NodeJS' },
    ],
    level: { id: 1, label: 'Hard' },
    hint: 'De-normalization is the process of optimizing the read performance of a database by adding redundant data or by grouping data. De-normalization is used in OLAP systems',
    id: 1,
    question: 'What is De-normalization?',
  },
  {
    tags: [
      { id: 1, label: 'SQL' },
      { id: 2, label: 'Databases' },
    ],
    level: { id: 1, label: 'Easy' },
    hint: 'De-normalization is the process of optimizing the read performance of a database by adding redundant data or by grouping data. De-normalization is used in OLAP systems',
    id: 2,
    question: 'What are the differences between UNION and UNION ALL?',
  },
  {
    tags: [
      { id: 1, label: 'SQL' },
      { id: 2, label: 'Databases' },
    ],
    level: { id: 1, label: 'Medium' },
    hint: 'De-normalization is the process of optimizing the read performance of a database by adding redundant data or by grouping data. De-normalization is used in OLAP systems',
    id: 3,
    question: 'How to delete duplicate records in a table?',
  },
];

export default ({ className }) => (
  <div className={className}>
    <Header />
    <Content questions={QUESTIONS} />
    <footer></footer>
  </div>
);
