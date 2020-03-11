const mockData = {
  name: 'milkmidi',
  age: 18,
};

export default function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 1000);
  });
}
