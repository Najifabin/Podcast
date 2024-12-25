import React, { useEffect, useState } from 'react'
import { PiGooglePodcastsLogoBold } from "react-icons/pi";
import { MdHome } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { Button, Modal } from "react-bootstrap";
import { MdCloudUpload } from "react-icons/md";



const Sidebar = ({mainTheme,setTheme, isOpen, setIsOpen,setDarkMode, darkMode }) => {
  const [createDisabled, setCreateDisabled]=useState(false)
  const [backDisabled,setBackDisabled] = useState(false)
  const [showEpisode, setShowEpisode] = useState(false)
  const [disabled,setDisabled] = useState(true)
  const [preview,setPreview] = useState("")
  const [podcastDetails, setPodacstDetails] = useState({
    title: "",
    desc: "",
    tags: "",
    format: "",
    category: "",
    podcastImg: "",
    episodes: [{ title: "", desc: "", podcastFile: "" }],
  });
  // console.log(podcastDetails);
  // console.log(audioFile);
  const goToAddEpisodes = ()=>{
    setShowEpisode(true)
  }
  const goToPodcast = ()=>{
    setShowEpisode(false)
  }
 
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setPreview("")
    setPodacstDetails({
      title: "",
      desc: "",
      tags: "",
      format: "",
      category: "",
      podcastImg: "",
      episodes:[
        {title:"",
          desc:"",
          podcastFile:"",
        }
      ]
    });
  }
  const handleShow = () => setShow(true);
  useEffect(() => {
    if (
      podcastDetails.podcastImg.type == "image/png" ||
      podcastDetails.podcastImg.type == "image/jpg" ||
      podcastDetails.podcastImg.type == "image/jpeg"
    ) {
      setPreview(URL.createObjectURL(podcastDetails.podcastImg));
    } else {
      // invalid image file
      setPodacstDetails({ ...podcastDetails, podcastImg: "" });
    }
  }, [podcastDetails.podcastImg]);

  useEffect(()=>{
    if(podcastDetails===null){
      setDisabled(true)
      setPodacstDetails({
        title: "",
        desc: "",
        tags: "",
        format: "",
        category: "",
        podcastImg: "",
        episodes: [{ title: "", desc: "", podcastFile: "" }],
      });
    }else{
      if(podcastDetails.podcastImg==="" ||podcastDetails.title==="" || podcastDetails.desc==="" || podcastDetails.format==="" || podcastDetails.category===""){
        setDisabled(true)
      }else{
        setDisabled(false)
      }
    }
  },[podcastDetails])
  useEffect(() => {
    if (
      podcastDetails.episodes.length > 0 &&
      podcastDetails.episodes.every(
        (episode) =>
          episode.podcastFile !== "" &&
          episode.title !== "" &&
          episode.desc !== ""
      )
    ) {
      setCreateDisabled(false);
    } else {
      setCreateDisabled(true);
    }
    
  }, [podcastDetails]);

  // console.log(createDisabled);
  const handleAddProject = ()=>{
     const reqBody = new FormData()
     reqBody.append("title",podcastDetails.title)
    reqBody.append("desc", podcastDetails.desc);
    reqBody.append("tags", podcastDetails.tags);
    reqBody.append("format", podcastDetails.format);
    reqBody.append("category", podcastDetails.category);
    reqBody.append("podcastImg", podcastDetails.podcastImg);
    if (podcastDetails.episodes && podcastDetails.episodes.length > 0) {
      podcastDetails.episodes.forEach((episode, index) => {
        // Append metadata as a JSON string
        reqBody.append(`episodes[${index}][title]`, episode.title);
        reqBody.append(`episodes[${index}][desc]`, episode.desc);
        // Append the podcast file
          reqBody.append(`episodes[${index}][podcastFile]`, episode.podcastFile);
        
      });
    }

    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`,
      };
      // make api call
    }
  }

  return (
    <>
      <div
        style={{
          backgroundColor: `${mainTheme.bg}`,
          color: `${mainTheme.text_primary}`,
          height: "100vh",
        }}
        className={`flex flex-col lg:max-w-64 lg:w-full lg:z-10  ${
          isOpen ? "w-64" : "w-17"
        }`}
      >
        <div className="flex text-green-600 font-bold text-2xl p-4 justify-between items-center">
          <div className={`flex md:flex   ${isOpen ? "block" : "hidden"}`}>
            <PiGooglePodcastsLogoBold />
            <h1 className="ms-1 me-4 -mt-1 text-2xl ">PODSTREAM</h1>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-200 block md:hidden -mt-8"
          >
            {isOpen ? (
              <IoClose size={28} color={`${mainTheme.text_primary}`} />
            ) : (
              <div className="mt-10">
                <IoMenu size={24} color={`${mainTheme.text_primary}`} />
              </div>
            )}
          </button>
        </div>
        <div>
          <Link to={"/"} className="no-underline">
            <div className="flex text-lg  p-4 hover:bg-gray-700">
              <div
                style={{ color: `${mainTheme.text_primary}` }}
                className="me-3"
              >
                <MdHome size={24} />
              </div>
              <h5
                className={`md:block ${isOpen ? "block" : "hidden"}`}
                style={{ color: `${mainTheme.text_secondary}` }}
              >
                Dashboard
              </h5>
            </div>
          </Link>
          <Link to={"/search"} className="no-underline">
            <div className="flex text-lg p-4 hover:bg-gray-700">
              <div
                style={{ color: `${mainTheme.text_primary}` }}
                className="me-3"
              >
                <IoSearch size={24} />
              </div>
              <h5
                className={`md:block ${isOpen ? "block" : "hidden"}`}
                style={{ color: `${mainTheme.text_secondary}` }}
              >
                Search
              </h5>
            </div>
          </Link>
          <Link to={"/favourites"} className="no-underline">
            <div className="flex text-lg p-4 hover:bg-gray-700">
              <div
                style={{ color: `${mainTheme.text_primary}` }}
                className="me-3"
              >
                <FaHeart size={24} />
              </div>
              <h5
                className={`md:block ${isOpen ? "block" : "hidden"}`}
                style={{ color: `${mainTheme.text_secondary}` }}
              >
                Favourites
              </h5>
            </div>
          </Link>
          <div className="">
            <hr />
          </div>
          <button
            onClick={handleShow}
            className="flex w-full text-lg p-4 hover:bg-gray-700"
          >
            <div className={`me-3 ${mainTheme.text_primary}`}>
              <FaCloudUploadAlt size={24} />
            </div>
            <h5
              className={`md:block ${isOpen ? "block" : "hidden"}`}
              style={{ color: `${mainTheme.text_secondary}` }}
            >
              Upload
            </h5>
          </button>
          <button
            onClick={() => (setDarkMode(!darkMode), setTheme(!darkMode))}
            className="flex text-lg p-4 w-full hover:bg-gray-700"
          >
            {darkMode ? (
              <>
                <div className={` me-3 ${mainTheme.text_primary}`}>
                  <MdLightMode size={24} />
                </div>
                <h5
                  className={`md:block ${isOpen ? "block" : "hidden"}`}
                  style={{ color: `${mainTheme.text_secondary}` }}
                >
                  Light Mode
                </h5>
              </>
            ) : (
              <>
                <div className={`me-3 ${mainTheme.text_primary}`}>
                  <MdDarkMode size={24} />
                </div>
                <h5
                  className={`md:block ${isOpen ? "block" : "hidden"}`}
                  style={{ color: `${mainTheme.text_secondary}` }}
                >
                  Dark Mode
                </h5>
              </>
            )}
          </button>
          <Link to={"/login"} className="no-underline">
            <div className="flex text-lg p-4 hover:bg-gray-700">
              <div
                style={{ color: `${mainTheme.text_secondary}` }}
                className="me-3"
              >
                <FiLogOut size={24} />
              </div>
              <h5
                className={`md:block ${isOpen ? "block" : "hidden"}`}
                style={{ color: `${mainTheme.text_secondary}` }}
              >
                Log Out
              </h5>
            </div>
          </Link>
        </div>
      </div>

      {/* Modal */}
      <Modal
        size="md"
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Podcast</Modal.Title>
        </Modal.Header>
        {!showEpisode ? (
          <>
            <Modal.Body>
              <div className="flex flex-col w-full">
                <h6>Podcast Details:</h6>
                <div className="flex flex-col w-full gap-3 p-2 ">
                  <div className="w-full rounded bg-white h-36 border-black flex justify-center items-center text-center text-gray-800 object-contain">
                    <div>
                      <input
                        onChange={(e) =>
                          setPodacstDetails({
                            ...podcastDetails,
                            podcastImg: e.target.files[0],
                          })
                        }
                        type="file"
                        id="file"
                        className="hidden"
                      />
                      {preview ? (
                        <div className="w-full h-36">
                          <img
                            src={preview}
                            alt=""
                            className="w-full h-full object-contain "
                          />
                        </div>
                      ) : (
                        <label
                          className="h-full w-full cursor-pointer items-center"
                          htmlFor="file"
                        >
                          <div className="flex flex-col items-center justify-center">
                            <MdCloudUpload size={48} />
                            Click here to upload the thambnail or Browse image
                            <span className="text-red-600">
                              *Upload only the following file types(jpeg, jpg,
                              png)
                            </span>
                          </div>
                        </label>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <input
                      value={podcastDetails.title}
                      onChange={(e) =>
                        setPodacstDetails({
                          ...podcastDetails,
                          title: e.target.value,
                        })
                      }
                      type="text"
                      placeholder="Podcast Name*"
                      className="rounded p-2 text-gray-800"
                    />
                    <textarea
                      value={podcastDetails.desc}
                      onChange={(e) =>
                        setPodacstDetails({
                          ...podcastDetails,
                          desc: e.target.value,
                        })
                      }
                      type="text"
                      placeholder="Podcast Description*"
                      className="rounded p-2"
                    />
                    <textarea
                      value={podcastDetails.tags}
                      onChange={(e) =>
                        setPodacstDetails({
                          ...podcastDetails,
                          tags: e.target.value.split(","),
                        })
                      }
                      type="text"
                      placeholder="Tags seperate by,"
                      className="rounded p-2"
                    />
                    <div className="flex flex-row gap-2 text-gray-800">
                      <select
                        value={podcastDetails.format}
                        onChange={(e) =>
                          setPodacstDetails({
                            ...podcastDetails,
                            format: e.target.value,
                          })
                        }
                        name="type"
                        id="type"
                        className="rounded p-2 w-1/2"
                        required
                      >
                        <option value="" disabled>
                          Podcast Type
                        </option>
                        <option>Audio</option>
                        <option>Video</option>
                      </select>
                      <select
                        value={podcastDetails.category}
                        onChange={(e) =>
                          setPodacstDetails({
                            ...podcastDetails,
                            category: e.target.value,
                          })
                        }
                        name="category"
                        id="category"
                        required
                        className="rounded p-2 w-1/2"
                      >
                        <option value="" disabled>
                          Select Category
                        </option>
                        <option>Comedy</option>
                        <option>Education</option>
                        <option>Business</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                disabled={disabled}
                variant="primary"
                onClick={() => {
                  !disabled && goToAddEpisodes();
                }}
              >
                Next
              </Button>
            </Modal.Footer>
          </>
        ) : (
          <>
            <Modal.Body>
              <div className="flex flex-col w-full">
                <h6>Episode Details:</h6>
                {podcastDetails.episodes.map((episode, index) => (
                  <>
                    <div key={index} className="flex flex-col w-full border rounded gap-3 p-3 mb-4">
                      <div className="rounded">
                        <input
                          onChange={(e) => {
                            (podcastDetails.episodes[index].podcastFile =
                              e.target.files[0]),
                              setPodacstDetails({
                                ...podcastDetails,
                                episodes: podcastDetails.episodes,
                              });
                          }}
                          accept={`${podcastDetails.format.toLowerCase()}/*`}
                          type="file"
                          
                        />
                      </div>
        
                      <div className="flex flex-col gap-3">
                        <input
                          value={episode.title}
                          onChange={(e) => {
                            (podcastDetails.episodes[index].title =
                              e.target.value),
                              setPodacstDetails({
                                ...podcastDetails,
                                episodes: podcastDetails.episodes,
                              });
                          }}
                          type="text"
                          placeholder="Episode Name*"
                          className="rounded p-2"
                        />
                        <textarea
                          value={episode.desc}
                          onChange={(e) => {
                            (podcastDetails.episodes[index].desc =
                              e.target.value),
                              setPodacstDetails({
                                ...podcastDetails,
                                episodes: podcastDetails.episodes,
                              });
                          }}
                          type="text"
                          placeholder="Episode Description*"
                          className="rounded p-2"
                        />
                        <Button
                          onClick={() =>
                            setPodacstDetails({
                              ...podcastDetails,
                              episodes: podcastDetails.episodes.filter(
                                (_, i) => i !== index
                              ),
                            })
                          }
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </>
                ))}
                <Button
                  onClick={() =>
                    setPodacstDetails({
                      ...podcastDetails,
                      episodes: [
                        ...podcastDetails.episodes,
                        { title: "", desc: "", podcastFile: "" },
                      ],
                    })
                  }
                >
                  Add Episode
                </Button>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => {
                  !backDisabled && goToPodcast();
                }}
              >
                Back
              </Button>
              <Button disabled={createDisabled} onClick={()=>!createDisabled && handleAddProject()} variant="primary">Create</Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </>
  );
};

export default Sidebar