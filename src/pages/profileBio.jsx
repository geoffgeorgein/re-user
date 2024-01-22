import { APIProvider, Map } from "@vis.gl/react-google-maps";

const ProfileBio = ({ currentProfile }) => {
  return (
    <div>
      <div>
        {currentProfile?.tags.length !== 0 ? (
          <>
            <h4>Tags watched</h4>
            {currentProfile?.tags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </>
        ) : (
          <p>0 tags watched</p>
        )}
      </div>
      <div>
        {currentProfile?.about ? (
          <>
            <h4>About</h4>
            <p>{currentProfile?.about}</p>
          </>
        ) : (
          <p>No bio found</p>
        )}
      </div>
          {/* Google maps api */}
      <>
 
  <div
    style={{
      maxWidth: "100%",
      listStyle: "none",
      transition: "none",
      overflow: "hidden",
      width: 600,
      height: 600
    }}
  >
    <div
      id="google-maps-display"
      style={{ height: "100%", width: "100%", maxWidth: "100%" }}
    >
      <iframe
        style={{ height: "100%", width: "100%", border: 0 }}
        frameBorder={0}
        src="https://www.google.com/maps/embed/v1/place?q=Irinjalakuda,+Kerala,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
      />
    </div>
    <a
      className="from-embedmap-code"
      href="https://www.bootstrapskins.com/themes"
      id="get-data-for-embed-map"
    >
      premium bootstrap themes
    </a>
    <style
      dangerouslySetInnerHTML={{
        __html:
          "#google-maps-display img{max-width:none!important;background:none!important;font-size: inherit;font-weight:inherit;}"
      }}
    />
  </div>
</>

      
      </div>
  );
};

export default ProfileBio;