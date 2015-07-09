import upcase from '../utils/upcase';
import reverse from '../utils/reverse';
import { compose } from 'ramda';

const upcaseReverse = compose(upcase, reverse); 

export default upcaseReverse;
