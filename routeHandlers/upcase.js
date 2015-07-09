import upcase from '../utils/upcase';

const ERROR = 'Must specifty a string parameter';

const upCaseHandler = (req, res) => {
  if (!req.query.string) {
    res.status(500).send(ERROR);
  } else {
    res.send(upcase(req.query.string));
  }
};
export default upCaseHandler;
