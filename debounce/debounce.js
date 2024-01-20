function usedebounce(callback, delay =700) {
    let timegrid;
  
    return (...args) => {
      clearInterval(timegrid);
      timegrid = setTimeout(() => {
        
        callback(...args);
      }, delay);
    };
  }
  
  export default usedebounce;
  
  