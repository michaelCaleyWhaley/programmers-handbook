async function getStarredRepos(startDate: string, endDate: string) {
  const [startDay, startMonth, startYear] = startDate.split("/");
  const [endDay, endMonth, endYear] = endDate.split("/");

  const isoStartDate = `${startYear}-${startMonth}-${startDay}`;
  const isoEndDate = `${endYear}-${endMonth}-${endDay}`;

  const uri = "https://api.github.com";
  const res = await fetch(
    `${uri}/search/repositories?q=stars:%3E1%20created:${isoStartDate}..${isoEndDate}&sort=stars&order=desc`
  );
  return res.json();
}

export { getStarredRepos };
