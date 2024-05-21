import React from "react";
import "./app-additional-info.css";

const AppAdditionalInfo: React.FC = () => {
  return (
    <div className="additional-info">
      <div className="info-block">
        <strong>Facebook</strong> was founded by Mark Zuckerberg in February
        2004 while he was a student at Harvard College. Starting as a student
        project, <strong>Facebook</strong> quickly grew to become one of the
        largest and most influential social networks in the world. In 2006,{" "}
        <strong>Facebook</strong> became available to all users aged{" "}
        <em>13</em> and older with an email address. The company continued to
        expand its capabilities, including messenger features, groups,
        marketplace, and more.
      </div>
      <div className="info-block">
        In 2012, <strong>Facebook</strong> held a successful IPO, becoming one
        of the largest in the history of technology companies. In the following
        years, <strong>Facebook</strong> actively acquired other companies,
        such as <u>Instagram (2012)</u>, <u>WhatsApp (2014)</u>, and{" "}
        <u>Oculus VR (2014)</u>, expanding its portfolio of products and
        services.
      </div>
      <div className="info-block quote">
        <blockquote>
          Today, <strong>Facebook</strong> is one of the leading global players
          in social media and information technology, serving billions of users
          worldwide and exerting significant influence on culture and
          communication.
        </blockquote>
      </div>
    </div>
  );
};

export default AppAdditionalInfo;
