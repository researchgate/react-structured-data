import GenericNodeCollection from "../core/GenericNodeCollection";
import T from "prop-types";

class AnswerCollection extends GenericNodeCollection {}

AnswerCollection.propTypes = {
  type: T.oneOf(["suggestedAnswer"]).isRequired
};

export default AnswerCollection;
