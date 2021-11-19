import React from 'react';
import "../Components/styles.css"
import { Jimage } from "react-jimp";
import { BasicTable } from '../App'

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: '', imagePreviewUrl: '', show: false };
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
        show: true
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview1 = null;
    let $imagePreview2 = null;
    let $imagePreview3 = null;
    let $imagePreview4 = null;
    if (imagePreviewUrl) {
      $imagePreview1 = (

        <img src={imagePreviewUrl}

        />
      );
      $imagePreview2 = (

        <Jimage
          src={imagePreviewUrl}

          pixelate="5"
          // mirror="true, false"
          greyscale
          color={[{ apply: "red", params: [100] }]}
          loadBlur
        />);
      $imagePreview3 = (

        <Jimage
          src={imagePreviewUrl}

          pixelate="5"
          // mirror="true, false"
          greyscale
          color={[{ apply: "blue", params: [80] }]}
          loadBlur
        />);
      $imagePreview4 = (<Jimage
        src={imagePreviewUrl}

        pixelate="5"
        // mirror="true, false"
        greyscale
        color={[{ apply: "green", params: [100] }]}
        loadBlur
      />);
    } else {
      $imagePreview1 = (<div className="previewText">Please select an Image for Preview</div>);
      $imagePreview2 = (<div className="previewText">Please select an Image for Preview</div>);
      $imagePreview3 = (<div className="previewText">Please select an Image for Preview</div>);
      $imagePreview4 = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="d-flex">
        <div className="previewComponent">

          <div className="d-flex container">
            <div className="imgPreview">

              <h2>Query Image</h2>
              {$imagePreview1}

            </div>

            <div className="imgPreview">
              <h2>Red Color Space</h2>
              {$imagePreview2}

            </div>

            <div className="imgPreview">
              <h2>Blue color Space</h2>
              {$imagePreview3}

            </div>
            <div>


            </div>

            <div className="imgPreview">
              <h2>Green Color Space</h2>
              {$imagePreview4}

            </div>
          </div>

          <form onSubmit={(e) => this._handleSubmit(e)}>

            <input className="fileInput"
              type="file"
              class="btn btn-secondary btn-lg"


              onChange={(e) => this._handleImageChange(e)} />

          </form>
        </div>
        <div className="mt-5" style={{ width: "30%" }}>
          {this.state.show && <BasicTable></BasicTable>}
        </div>
      </div>
    )
  }
}

export default ImageUpload;