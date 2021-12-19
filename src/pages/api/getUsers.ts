import { NextApiRequest, NextApiResponse } from 'next';
import api from '../../../services/api';

export default async function GetUser(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).send('Method not allowed');
  }

  const data = req.body;

  const headers = {
    method: 'POST',
    'Content-Type': 'application/json',
    'Api-Token': process.env.ACTIVE_CAMPAIGN_TOKEN,
  };

  await api.post('/contacts', data, {
    headers,
  });

  return res.status(200).json({ message: 'Deu certo!' });
}
