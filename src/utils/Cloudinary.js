import { v2 as cloudinary } from "cloudinary";

const Cloudinary = () => {
  cloudinary.config({
    cloud_name:"dtennrzvm",
    api_key: 844181244136361,
    api_secret: "yQ36z91gzbAgp_0qdz_-wabvYgg",
  });

  console.log("✅ Cloudinary connected successfully");
};

export default Cloudinary;
