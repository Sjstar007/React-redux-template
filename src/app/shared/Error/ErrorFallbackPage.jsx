import React from "react";
import Lottie from "lottie-react";
import errorJson from '../../assets/lottie_json/error.json';

const lottieContainerStyle = {
    height: '500px',
    width: '100%'
}
const lottieIconStyle = {
    height: '100%',
    width: '100%'
}
const errorLogStyle ={
    height: '100px',
    width: "70%",
    borderRadius: '10px',
    padding: '2rem',
    margin: 'auto',
    backgroundColor: '#d5d5d538',

}
function ErrorFallbackPage({ error }) {
  return (
    <div>
      <div style={lottieContainerStyle}>
        <Lottie animationData={errorJson} style={lottieIconStyle} loop={false} />
      </div>
      <div style={errorLogStyle}>
        <h3>{error}</h3>
      </div>
    </div>
  );
}

export default ErrorFallbackPage;
