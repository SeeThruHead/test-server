import upcaseReverse from '../utils/upcaseReverse';

const ERROR = 'Must specifty a string parameter';

const upCaseReverseHandler = (req, res) => {
  if (!req.query.string) {
    res.status(500).send(ERROR);
  } else {
    res.send(upcaseReverse(req.query.string));
  }
};
export default upCaseReverseHandler; 
