import PropTypes from 'prop-types';

const problemShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isResolved: PropTypes.bool.isRequired,
});

export default { problemShape };
