import revwords from '../utils/revwords';

const ERROR = 'Must specifty a string parameter';

const reverseHandler = (req, res) => {
  if (!req.query.string) {
    res.status(500).send(ERROR);
  } else {
    res.send(revwords(req.query.string));
  }
};
export default reverseHandler;
