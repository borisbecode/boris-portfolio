import AvatarView from "@sarge/avatar-view";
import "../../style/header.css";

const url =
  "https://d1a370nemizbjq.cloudfront.net/58986872-a638-490e-b3f0-b3347718fec7.glb";

export default function Header() {
  return (
    <div className="Header">
      <div className="container">
        <AvatarView
          style={{
            width: "400px",
            height: "400px",
            backgroundColor: "grey",
            borderRadius: "100%",
          }}
          url={url}
          rotateAvatar
          eyeBlink
          headMovement
        />
      </div>
    </div>
  );
}
