import { useQuery } from '@tanstack/react-query';

const getRandomNumberFromAPI = async (): Promise<number | undefined> => {
  const res = await fetch(
    'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new'
  );
  const numberString = await res.text();
  return +numberString;
};

export const useRandom = () => {
  //Primer array indica como va a manejar nuestro cache
  //Luego la funcion que voy a usar para cargar esta información

  const query = useQuery(['randomNumber'], getRandomNumberFromAPI);
  return query;
};
