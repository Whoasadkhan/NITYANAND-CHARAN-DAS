
import { FaInstagram, FaTwitter, FaYoutube,  FaFacebook } from 'react-icons/fa';

const SocialMediaIcons = () => {
  return (
    <div className="flex flex-wrap my-5 justify-center gap-10 items-center">
  <span className="flex items-center mr-4 text-sm">
    <FaFacebook size={30} color="#4267B2" className="mr-2" />
    <span>Facebook</span>
  </span>
  <span className="flex items-center mr-4 text-sm">
    <FaTwitter size={30} color="#1DA1F2" className="mr-2" />
    <span>Twitter</span>
  </span>
  <span className="flex items-center mr-4 text-sm">
    <FaYoutube size={30} color="#FF0000" className="mr-2" />
    <span>YouTube</span>
  </span>
  <span className="flex items-center text-sm">
    <FaInstagram size={30} color="#E1306C" className="mr-2" />
    <span>Instagram</span>
  </span>
</div>

  );
};

export default SocialMediaIcons;
