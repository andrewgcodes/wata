function splitAlphabetically(arr) {
  const splitted = [];

  arr.forEach((element) => {
    const [letter] = element.name;
    if(!splitted.find(item => item.letter === letter)) {
      splitted.push({
        letter,
        elements: [element]
      })
    } else {
      const existingElement = splitted.find(item => item.letter === letter);
      existingElement.elements.push(element);
    }
  });
  
  return splitted;
}

export default splitAlphabetically;