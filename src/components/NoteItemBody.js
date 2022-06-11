import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import 'moment/locale/id';

function NoteItemBody({ title, body, createdAt }) {
  const tanggal = moment(createdAt).format('dddd, DD MMMM YYYY');
  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <div className="note-item__content">
      <h3 className="note-item__title">{title}</h3>
      <p className="note-item__date">{tanggal}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
}

NoteItemBody.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  createdAt: PropTypes.string,

};
NoteItemBody.defaultProps = {
  title: '',
  body: '',
  createdAt: '',
};

export default NoteItemBody;
