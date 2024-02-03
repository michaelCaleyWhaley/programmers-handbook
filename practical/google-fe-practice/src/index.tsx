import './styles.scss';

type AccumulatorByCategory = { [key: string]: Record<string, string>[] };
type AccumulatorByID = { [key: string]: string };

async function fetchData(endPoint: string) {
  const res = await fetch(endPoint);
  return await res.json();
}

async function getSubmissionsById() {
  const submissions = await fetchData('/api/fe/submissions');
  return submissions.reduce(
    (accumulator: AccumulatorByID, currentValue: Record<string, string>) => {
      accumulator[currentValue.questionId] = currentValue.status;
      return accumulator;
    },
    {},
  );
}

async function getQuestionsByCategory() {
  const questions = await fetchData('/api/fe/questions');

  const questionsByCategory = questions.reduce(
    (
      accumulator: AccumulatorByCategory,
      currentValue: Record<string, string>,
    ) => {
      const { category, ...rest } = currentValue;
      if (accumulator[category]) {
        accumulator[category].push({ ...rest });
        return accumulator;
      }

      accumulator[category] = [{ ...rest }];
      return accumulator;
    },
    {},
  );

  return questionsByCategory;
}

async function renderQuestionsByCategory() {
  const [categories, submissions] = await Promise.all([
    getQuestionsByCategory(),
    getSubmissionsById(),
  ]);

  const appEle = document.getElementById('app');

  const htmlToInsert = [];

  for (const category in categories) {
    const questions = categories[category];
    const categoryHtml = [];
    let correctCount = 0;

    categoryHtml.push(
      ...questions.map((question: { name: string; id: string }) => {
        if (submissions[question.id] === 'CORRECT') {
          correctCount += 1;
        }

        return `<div class="question"><div class="status ${submissions[question.id]}"></div><h3>${question.name}</h3></div>`;
      }),
    );

    htmlToInsert.push(
      ...[
        '<div class="category">',
        '<h2>',
        category,
        ` - ${correctCount}/${questions.length}</h2>`,
      ],
    );

    htmlToInsert.push(...categoryHtml);
    htmlToInsert.push('</div>');
  }

  appEle.innerHTML = htmlToInsert.join('');
}

renderQuestionsByCategory();
