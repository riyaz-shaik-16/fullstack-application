import sharp from "sharp";

export const cropImage = async (buffer) => {
  return sharp(buffer)
    .resize(450, 350, {
      fit: "cover",
      position: "center",
    })
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toBuffer();
};
