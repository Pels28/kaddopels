import React from "react";
import Button from "../Button";
import yourData from "../../data/portfolio.json";

const Socials = ({ className }) => {
  const handleSocialClick = (link) => {
    // Special handling for email links
    if (link.startsWith("mailto:")) {
      window.location.href = link;
    } else {
      // Open other links in a new tab
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.socials.map((social, index) => (
        <Button 
          key={social.id} // Better to use social.id than index
          onClick={() => handleSocialClick(social.link)}
          aria-label={`Link to ${social.title}`}
        >
          {social.title}
        </Button>
      ))}
    </div>
  );
};

export default Socials;