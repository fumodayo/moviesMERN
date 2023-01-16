import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import mediaApi from "../../api/modules/media.api";
import { toast } from "react-toastify";
import AutoSwiper from "./AutoSwiper";

const MediaSlide = ({ mediaType, mediaCategory }) => {
  const [medias, setMedias] = useState([]);

  useEffect(() => {
    const getMedias = async () => {
      const { response, err } = await mediaApi.getList({
        mediaType,
        mediaCategory,
        page: 1,
      });

      if (response) setMedias(response.results);
      if (err) toast.error(err.message);
    };
    getMedias();
  }, [mediaType, mediaCategory]);

  return (
    <AutoSwiper>
      {
        medias.map((media, index) => (
          <SwiperSlide key={index}>
            
          </SwiperSlide>
        ))
      }
    </AutoSwiper>
  )
};

export default MediaSlide;
