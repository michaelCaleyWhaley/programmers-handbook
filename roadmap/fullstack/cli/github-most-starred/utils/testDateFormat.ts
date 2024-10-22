function testDateFormat(input: string) {
  const regex = new RegExp(/([0-9]{2})\/([0-9]{2})\/([0-9]{4})/gi);
  return regex.test(input);
}

export { testDateFormat };
