import ImageGallery from "react-image-gallery";
import "./NewPage.css";

const images = [
  {
    original: "https://images-na.ssl-images-amazon.com/images/I/71fVoqRC0wL._SX679_.jpg",
    thumbnail: "https://images-na.ssl-images-amazon.com/images/I/31SOygUjpUL._SX38_SY50_CR,0,0,38,50_.jpg",
    thumbnailHeight: "50px",
    thumbnailWidth: "50px"
  },
  {
    original: "https://images-na.ssl-images-amazon.com/images/I/81Vr1E73vLL._SX679_.jpg",
    thumbnail: "https://images-na.ssl-images-amazon.com/images/I/319XFhh9FDL._SX38_SY50_CR,0,0,38,50_.jpg",
  },
  {
    original: "https://images-na.ssl-images-amazon.com/images/I/81Kv2K6rR3L._SX679_.jpg",
    thumbnail: "https://images-na.ssl-images-amazon.com/images/I/41rW1snacvL._SX38_SY50_CR,0,0,38,50_.jpg",
  },{
    original: "https://images-na.ssl-images-amazon.com/images/I/81UBryv7mOL._SX679_.jpg",
    thumbnail: "https://images-na.ssl-images-amazon.com/images/I/41LGQ7JRlVL._SX38_SY50_CR,0,0,38,50_.jpg",
  },
  
];

const Slider = (props) => {
  console.log(props);
  return (
    <>
      <div className="container-fluid">
        <ImageGallery
          items={images}
          thumbnailPosition={props.thumbnailPosition}
          showPlayButton={props.showPlayButton}
          showNav={props.showNav}
          useTranslate3D={props.useTranslate3D}
          slideOnThumbnailOver={props.slideOnThumbnailOver}
          showBullets={props.showBullets}
        />
      </div>
    </>
  );
};

export default Slider;
