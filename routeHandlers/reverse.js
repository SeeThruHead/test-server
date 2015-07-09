import reverse from '../utils/reverse';

const ERROR = 'Must specifty a string parameter';

const reverseHandler = (req, res) => {
  if (!req.query.string) {
    res.status(500).send(ERROR);
  } else {
    res.send(reverse(req.query.string));
  }
};
export default reverseHandler; 
