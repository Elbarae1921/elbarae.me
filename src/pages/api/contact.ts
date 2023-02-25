import axios from 'axios';
import { NextApiHandler } from 'next';
import * as Yup from 'yup';

const handler: NextApiHandler = async (req, res) => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email(),
      message: Yup.string().required()
    });

    const data = await schema.validate(req.body);
    await axios({
      method: 'POST',
      url: `${process.env.FORMIUM_ENDPOINT}`,
      headers: {
        'Content-Type': 'application/json'
      },
      data
    });
    res.status(200).json({ message: 'Submission sent successfully!' });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    res.status(400).json({ message: 'Submission failed to be sent.' });
  }
};

export default handler;
