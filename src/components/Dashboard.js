import React, { useEffect, useRef, useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { Button, Card, Image } from "react-bootstrap";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router";
import "./../css/Components.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faClipboardList,
  faCoffee,
  faComments,
  faEnvelope,
  faFileWord,
  faGift,
  faGraduationCap,
  faHandFist,
  faHandHoldingDollar,
  faTv,
  faUsersLine,
} from "@fortawesome/free-solid-svg-icons";
import { NavDropdown, NavDropdownProps } from "react-bootstrap";
import { slide as Menu } from "react-burger-menu";
import Slider from "./Slider";

// ... (imports)

// ... (imports)

// ... (imports)

const Dashboard = () => {
  const { logOut, user } = useUserAuth();
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userCollectionRef = collection(db, "users");
    getDocs(userCollectionRef)
      .then((response) => {
        const dataOfUser = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setUserData(dataOfUser);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  }, []);

  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  const imageUrl =
    "https://i.ibb.co/wQwnNnC/Whats-App-Image-2023-08-06-at-00-05-08.jpg";

  const [isCollapsed, setCollapsed] = useState(true);

  const handleToggle = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <div className="dashboard">
      <div className="navv">
        <div className="sub-nav">
          <Image
            src={imageUrl}
            alt="Sample Image"
            className="logo logo2"
            style={{
              width: "10%",
              borderRadius: "50%",
              position: "relative",
              left: "10%",
            }}
          />
          <a href="#message">
            <FontAwesomeIcon icon={faBell} />
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <Button variant="primary" onClick={handleLogout} className="log1">
            Log out
          </Button>
        </div>
      </div>
      <marquee
        behavior="scroll"
        direction="left"
        scrollamount="13"
        className="marquee"
      >
        দ্রষ্টব্যঃ চলতি মাসের নির্ধারিত ফ্রিসহ পূর্বের যাবতীয় বকেয়া অতিসত্বর
        পরিশোধ করে একাডেমীর যাবতীয় কার্যক্রম পরিচালনায় সহযোগিতা করুন।
      </marquee>

      <button className="navbar-toggle" onClick={handleToggle}>
        ☰
      </button>
      <Card className={`navbar-links ${isCollapsed ? "collapsed" : ""}`}>
        {userData.map((user, index) => (
          // Render user information only if data has been fetched (on reload, only first user data will be displayed)
          <div key={user.id}>
            {index === 0 && (
              <>
                <Image
                  src={imageUrl}
                  alt="Sample Image"
                  className="logo"
                  style={{
                    width: "34%",
                    borderRadius: "50%",
                    position: "relative",
                    left: "10%",
                  }}
                />

                <li>🖊 Id No : {user.data.referenceId}</li>
                <li>🙌 Name : {user.data.name}</li>
                <li>📞 Number: {user.data.phoneNumber}</li>
              </>
            )}
          </div>
        ))}

        <div className="menu">
          <div className="submenu">
            <div>
              <a href="#message">
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faUsersLine} />
                </span>{" "}
                Join Class                      
              </a>
            </div>
            <div>
              <a href="#message">
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faClipboardList} />{" "}
                </span>{" "}
                Home work and Practices
              </a>
            </div>
            <div>
              <a href="#message">
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faHandFist} />
                </span>{" "}
                Attendence
              </a>
            </div>
            <div>
              <a href="#message">
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faGraduationCap} />
                </span>{" "}
                Courses
              </a>
            </div>
            <div>
              <a href="#message">
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faTv} />
                </span>{" "}
                Video Class
              </a>
            </div>
            <div>
              <a href="#message">
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faComments} />
                </span>{" "}
                মাছআলা
              </a>
            </div>
            <div>
              <a href="#message">
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faHandHoldingDollar} />
                </span>{" "}
                Wellfare Fund
              </a>
            </div>
            <div>
              <a href="#message">
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faGift} />
                </span>{" "}
                Gift and reward
              </a>
            </div>
            <Button variant="primary" onClick={handleLogout} className="log2">
              Log out
            </Button>
          </div>
        </div>
      </Card>
      <Slider/>
      <div id="message">
        <p>
          প্রিয় শিক্ষার্থী, আপনাকে আনন্দের সাথে জানানো যাচ্ছে যে দীনিয়াত
          যাবতীয় কার্যক্রম সুন্দর ও সুশৃংখল পরিচালনার জন্য ডায়নামিক ওয়েবসাইট
          সফটওয়্যার ও মোবাইল অ্যাপ ডেভলপমেন্ট কার্যক্রম অতি দ্রুত সম্পন্ন
          হচ্ছে। এর মাধ্যমে শিক্ষার্থীদের নিয়মিত ক্লাসে অংশগ্রহণ নিশ্চিতকরণ,
          অটোমেটিক উপস্থিতি-অনুপস্থিতি পর্যবেক্ষণ, গ্রুপ প্র্যাকটিস ও হোমওয়ার্ক
          সম্পন্ন করণ, অতি সহজ ভাবে পরীক্ষা নেওয়া ও পরীক্ষার ফলাফল প্রকাশ করা,
          পরীক্ষার ফলাফল যাচাই করা, শিক্ষক ও অন্যান্য শিক্ষার্থীদের সাথে
          যোগাযোগ, পুরস্কার ও উপহার প্রদান, লেনদেন সহজ করণ, অভিযোগ ও মতামত
          জানানো ইত্যাদি সহ শিক্ষা ও সেবামূলক কার্যক্রম পরিচালনা সহজ ও সুন্দর
          হবে ইনশাআল্লাহ। আপনার যেকোনো পরামর্শ মতামত অথবা অভিযোগ আমাদের সাথে
          শেয়ার করুন। যথা সময়ে মাসিক ফি পরিশোধ করে একাডেমির সার্বিক কার্যক্রম
          পরিচালনায় অংশগ্রহণ করুন
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
