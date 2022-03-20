import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

import { Button } from "reactstrap";

import defaultImage from "assets/img/image_placeholder.jpg";
import defaultAvatar from "assets/img/placeholder.jpg";

function ImageView(props) {
  const [file, setFile] = React.useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = React.useState(
    props.avatar ? defaultAvatar : defaultImage
  );
  const fileInput = React.useRef(null);
  const handleImageChange = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      let reader = new FileReader();
      let file = e.target.files[0];
      reader.onloadend = () => {
        setFile(file);
        setImagePreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  // const handleSubmit = e => {
  // e.preventDefault();
  // this.state.file is the file/image uploaded
  // in this function you can save the image (this.state.file) on form submit
  // you have to call it yourself
  // };
  const handleClick = () => {
    fileInput.current.click();
  };
  const handleRemove = () => {
    setFile(null);
    setImagePreviewUrl(props.avatar ? defaultAvatar : defaultImage);
    fileInput.current.value = null;
  };
  return (
    <div className="fileinput text-center">
      <input type="file" onChange={handleImageChange} ref={fileInput} />
      <div className={"thumbnail" + (props.avatar ? " img-circle" : "")}>
        <img src={imagePreviewUrl} alt="..." />
      </div>
    </div>
  );
}

ImageView.propTypes = {
  avatar: PropTypes.bool,
};

export default ImageView;
