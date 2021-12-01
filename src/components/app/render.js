import Content from './content';
import Header from './header';

export const QUESTIONS = [
  {
    tags: [
      {
        entity: { id: 1, label: 'Dimension' },
        id: 1,
        label: 'Problem Analysis',
      },
      { entity: { id: 2, label: 'Skill' }, id: 2, label: 'C#' },
      { entity: { id: 2, label: 'Skill' }, id: 3, label: 'NodeJS' },
    ],
    difficulty: { id: 1, label: 'Hard' },
    hint: 'De-normalization is the process of optimizing the read performance of a database by adding redundant data or by grouping data. De-normalization is used in OLAP systems',
    id: 1,
    question: 'What is De-normalization?',
    score: 9,
  },
  {
    tags: [
      { entity: { id: 2, label: 'Skill' }, id: 1, label: 'SQL' },
      { entity: { id: 1, label: 'Dimension' }, id: 2, label: 'Databases' },
    ],
    difficulty: { id: 2, label: 'Easy' },
    active: true,
    hint: 'De-normalization is the process of optimizing the read performance of a database by adding redundant data or by grouping data. De-normalization is used in OLAP systems',
    id: 2,
    question: 'What are the differences between UNION and UNION ALL?',
    score: null,
  },
  {
    tags: [
      { entity: { id: 2, label: 'Skill' }, id: 1, label: 'SQL' },
      { entity: { id: 1, label: 'Dimension' }, id: 2, label: 'Databases' },
    ],
    difficulty: { id: 3, label: 'Medium' },
    hint: 'De-normalization is the process of optimizing the read performance of a database by adding redundant data or by grouping data. De-normalization is used in OLAP systems',
    id: 3,
    question: 'How to delete duplicate records in a table?',
    score: 3,
  },
  {
    tags: [
      { entity: { id: 2, label: 'Skill' }, id: 1, label: 'SQL' },
      { entity: { id: 1, label: 'Dimension' }, id: 2, label: 'Databases' },
    ],
    difficulty: { id: 2, label: 'Medium' },
    hint: 'De-normalization is the process of optimizing the read performance of a database by adding redundant data or by grouping data. De-normalization is used in OLAP systems',
    id: 4,
    question: 'How to delete duplicate records in a table?',
  },
  {
    tags: [
      { entity: { id: 2, label: 'Skill' }, id: 1, label: 'SQL' },
      { entity: { id: 1, label: 'Dimension' }, id: 2, label: 'Databases' },
    ],
    difficulty: { id: 1, label: 'Medium' },
    hint: 'De-normalization is the process of optimizing the read performance of a database by adding redundant data or by grouping data. De-normalization is used in OLAP systems',
    id: 5,
    question: 'How to delete duplicate records in a table?',
  },
  {
    tags: [
      { entity: { id: 2, label: 'Skill' }, id: 1, label: 'SQL' },
      { entity: { id: 1, label: 'Dimension' }, id: 2, label: 'Databases' },
    ],
    difficulty: { id: 3, label: 'Medium' },
    hint: 'De-normalization is the process of optimizing the read performance of a database by adding redundant data or by grouping data. De-normalization is used in OLAP systems',
    id: 6,
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
