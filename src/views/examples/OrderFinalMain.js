import React, { Component } from "react";
import OrderFinalStep1 from "./OrderFinalStep1";
import OrderFinalStep2 from "./OrderFinalStep2";
import OrderFinalSuccess from "./OrderFinalSuccess";
import Stepper from "react-js-stepper";

const steps = [
  { title: "Address" },
  { title: "Billing" }, 
  { title: "Confirmation" }
];

class UserForm extends Component {
  state = {
    step: 1,
    address: "",
    bedroom: "",
    description: "",
    bathroom: "",
    images: [],
    imagePreview: "",
  };

  // ontoggle change imagePreview
  onToggleImagePreview = (src) => {
    const { imagePreview } = this.state;
    imagePreview === src
      ? this.setState({
          imagePreview: "",
        })
      : this.setState({
          imagePreview: src,
        });
  };

  //clear state
  clearStateOnStart = () => {
    this.setState({
      step: 2,
      address: "",
      bedroom: "",
      description: "",
      bathroom: "",
      images: [],
      imagePreview: "",
    });
  };

  //save images to state
  // onDrop = (file) => {
  //   const { images } = this.state;
  //   if (images.length <= 3) {
  //     var fileToLoad = file[0];
  //     var fileReader = new FileReader();
  //     fileReader.onloadend = (load) => {
  //       var base64 = load.target.result;
  //       this.setState({
  //         images: [
  //           ...images,
  //           {
  //             name: fileToLoad.name,
  //             path: fileToLoad.path,
  //             src: base64,
  //             size: fileToLoad.size,
  //           },
  //         ],
  //       });
  //     };
  //     fileReader.readAsDataURL(fileToLoad);
  //   } else {
  //     alert("No more that 4 images");
  //   }
  // };

  // go to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // validation for the form
  validation = () => {

  };

  // go to previous step
  previousStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // change value onChange
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  // handle csv file and add convert to json format
  // handleFiles = (files) => {
  //   var reader = new FileReader();
  //   reader.onload = (e) => {
  //     let jsonData = reader.result.split("\n");
  //     jsonData.forEach((element, index) => {
  //       if (index) {
  //         const elementRaw = element.split(",");
  //         if (element) {
  //           this.setState({
  //             address: elementRaw[0],
  //             bathroom: elementRaw[1],
  //             bedroom: elementRaw[2],
  //             description: elementRaw[3],
  //           });
  //         }
  //       }
  //     });
  //   };
  //   reader.readAsText(files[0]);
  //   this.nextStep();
  // };

  // current step
  showStep = () => {
    const { step } = this.state;
    const {
      address,
      bedroom,
      bathroom,
      description,
      images,
      imgSrc,
      imagePreview,
    } = this.state;
    const values = { address, bedroom, bathroom, description, imagePreview };
    switch (step) {
      case 1:
        return (
          <OrderFinalStep1
            handleChange={this.handleChange}
            prevStep={this.previousStep}
            nextStep={this.nextStep}
            values={values}
            validation={this.validation}
          />
        );
      case 2:
        return (
          <OrderFinalStep2
            handleChange={this.handleChange}
            prevStep={this.previousStep}
            nextStep={this.nextStep}
            values={values}
            validation={this.validation}
          />
        );
      case 3:
        return <OrderFinalSuccess values={values} images={images} />;
      default:
        return null;
    }
  };

  render() {
    const { step } = this.state;
    return (
      <div className="container mt-2">
        <Stepper
          steps={steps}
          activeStep={step}
          onSelect={this.handleOnClickStepper}
          showNumber={false}
        />
        {this.showStep()}
      </div>
    );
  }
}

export default UserForm;
