import { NextApiRequest, NextApiResponse } from 'next';

const users = (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, nome: 'Marcello' },
    { id: 2, nome: 'Nicoly' },
    { id: 3, nome: 'Alice' },
  ];

  return response.json(users);
};

export default users;
