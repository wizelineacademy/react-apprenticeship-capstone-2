import React from 'react';

const NasaContent = ({ url, type }) => {
  return (
    <div>
      {
        type === 'video' && <iframe src={url} title="Video player" />
      }
       {
        type === 'image' && <img src={url}  alt="content of the day" />
      }
    </div>
  );
}

export default NasaContent;
