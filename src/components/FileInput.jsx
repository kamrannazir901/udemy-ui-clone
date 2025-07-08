import React, { useRef, useState } from "react";
import { images } from "../assets/Data";
import Button from "./Button";

const FileInput = ({ type }) => {
  const fileRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [message, setMessage] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const objectUrl = URL.createObjectURL(file);
    const fileType = file.type;

    if (fileType.startsWith("image/")) {
      const img = new Image();
      img.onload = () => {
        if (img.width < 750 || img.height < 422) {
          setMessage(
            "The uploaded image is too small. Minimum image size is 750x422px. Please upload a larger image."
          );
          URL.revokeObjectURL(objectUrl);
          return;
        }

        setMessage("");
        setFileName(file.name);
        setPreviewUrl(objectUrl);
      };
      img.src = objectUrl;
    } else if (fileType.startsWith("video/")) {
      const video = document.createElement("video");
      video.onloadedmetadata = () => {
        if (video.videoWidth < 750 || video.videoHeight < 422) {
          setMessage("Video resolution is too low. Minimum size: 750x422px.");
          URL.revokeObjectURL(objectUrl);
          return;
        }

        setMessage("");
        setFileName(file.name);
        setPreviewUrl(objectUrl);
      };
      video.src = objectUrl;
    } else {
      alert("❌ Unsupported file type.");
      URL.revokeObjectURL(objectUrl);
    }
  };

  return (
    <div className="flex flex-wrap items-start gap-8">
      <div className="border border-[#ddd] lg:flex-1 md:max-w-[50%] overflow-hidden">
        {type === "image" ? (
          <img
            src={previewUrl || images.courseimage}
            alt=""
            className="md:max-h-[280px] w-full h-full object-cover"
          />
        ) : (
          <>
            {previewUrl ? (
              <video src={previewUrl} controls className="w-full h-[280px]" />
            ) : (
              <img src={images.courseimage} alt="" />
            )}
          </>
        )}
      </div>
      <div className="flex-1">
        {type === "image" ? (
          <p>
            Upload your course image here. It must meet our{" "}
            <a href="#" className="underline text-purple underline-offset-4">
              course image quality standards
            </a>{" "}
            to be accepted. Important guidelines: 750x422 pixels; .jpg, .jpeg,.
            gif, or .png. no text on the image.
          </p>
        ) : (
          <p>
            Your promo video is a quick and compelling way for students to
            preview what they’ll learn in your course. Students considering your
            course are more likely to enroll if your promo video is well-made.{" "}
            <a href="#" className="underline text-purple underline-offset-4">
              Learn how to make your promo video awesome!{" "}
            </a>{" "}
          </p>
        )}
        <div className="flex items-stretch gap-2 mt-4">
          <div
            className={`border flex-1 border-[#ddd] p-2 flex items-center rounded`}
          >
            {fileName || "No file selected"}
          </div>
          <div className="w-fit">
            <input
              type="file"
              ref={fileRef}
              className="hidden"
              accept={type === "image" ? "image/*" : "video/*"}
              onChange={handleFileChange}
            />
            <Button
              text={fileName ? "Change" : "Upload File"}
              onClick={() => fileRef.current.click()}
            />
          </div>
        </div>
        {message && (
          <p className="text-red-500 leading-tight text-[.8rem] mt-1">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default FileInput;
