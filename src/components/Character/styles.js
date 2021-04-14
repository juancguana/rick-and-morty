const styles = (theme) => ({
  root: {
    background: '#0d739a',
    color: '#f0f0f0',
    padding: '8px',
    boxShadow: '5px 5px 10px #323232',
    '&:hover': {
      boxShadow: '15px 15px 30px #323232',
    },
    
  },
  image: {
    height: 'auto',
    maxWidth: '200px',
    borderRadius: '50%',
    border: 'solid 8px #72f522',
  },
  text: {
    fontSize: '1.4rem',
  },
  link: {
    color: '#72f522',
    fontSize: '1.4rem',
  },
});

export default styles;
