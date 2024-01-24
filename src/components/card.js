import React from "react";

const Card = () => {
  return (
    <div className="hero">
      <div className="card">
        <b> Enter the vehicle number</b>
        <input
          type="text"
          placeholder="Enter the text"
          // value={text}
          // onChange={handleTextChange}
        />
          <b> Enter the Phone number</b>
        <input
          type="text"
          placeholder="Enter the number"
          

          // value={text}
          // onChange={handleTextChange}
        />
        <b> Select the Tire image</b>

        <input
          type="file"
          accept="image/jpeg,image/png,image/jpg"
          // onChange={handleImageUpload}
        />
        
          <button class="btn btn-outline-success" type="submit">
              Submit
            </button>
        {/* {image && <img src={image} alt="Uploaded" />} */}
      </div>
    </div>
  );
};

export default Card;
