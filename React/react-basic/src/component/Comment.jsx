import React from 'react';
let styles = {
  wrapper : {
    display : 'flex',
    justifyContent : 'space-between',
    alignItems: 'center',
    border : '2px solid #ccc',
    borderRadius: '16px',
    padding: '0 20px',
    margin: '20px'
  },
  img : {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
  },
  contentBox : {
    flexGrow: '1',
    marginLeft: '16px',
  },
}

const Comment = (props) => {
  return (
    <div style={styles.wrapper}>
      <div>
        <img style={styles.img} src="https://www.sragenkab.go.id/assets/images/demo/user-7.jpg" alt="user-img" />
      </div>

      <div style={styles.contentBox}>
        <h3>{props.name}</h3>
        <p>{props.text}</p>
      </div>

      <button type='butten'>X</button>
    </div>
  );
};

export default Comment;