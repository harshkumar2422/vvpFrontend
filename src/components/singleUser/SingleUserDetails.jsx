// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { singleuser } from "../../redux/action/useravtion";
// import { useNavigate, useParams } from "react-router-dom";
// import { IoIosAddCircleOutline } from "react-icons/io";
// import { IoAddSharp } from "react-icons/io5";
// import { IoMdArrowBack } from "react-icons/io";

// import "./Single.css";
// import { Card, ListGroup } from "react-bootstrap";
// import image from "../logo-vpvv.png";

// const UserDetails = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const { users, loading, error } = useSelector((state) => state.user);
//   const navigate = useNavigate();

//   useEffect(() => {
//     dispatch(singleuser(id));
//   }, [dispatch, id]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   const handletoprofile = () => {
//     navigate("/profile");
//   };

//   const handletoopenview = (documentUrl) => {
//     window.open(documentUrl, "_blank");
//   };
//   // console.log(users.companylogo.url);
//   const handletoaddDirector = (id) => {
//     console.log(id);
//   };
//   const handletoaddSingleDirector = (userID, id) => {
//     console.log(userID);
//     console.log(id);
//   };
//   const handletoaddSingleNominee = (userID, id) => {
//     console.log(userID);
//     console.log(id);
//   };
//   const handletoaddNominee = (id) => {
//     console.log(id);
//   };
//   const handletoaddCompnayDocs = (id) => {
//     console.log(id);
//   };
//   const handletoaddPayments = (id) => {
//     console.log(id);
//   }
//   return (
//     <div className="total">
//       <div className="some">
//         <button className="to" onClick={handletoprofile}>
//           <IoMdArrowBack size={27} />
//         </button>
//         <div className="company">
//           {users.companylogo && (
//             <>
//               <img src={users.companylogo.url} alt="logo" />
//               <h4>{users.name}</h4>
//               <p>{users.email}</p>
//             </>
//           )}
//         </div>

//         <div className="up">
//           <h3>Directors</h3>
//           <div className="directors">
//             {users?.Directors?.map((item) => (
//               <Card
//                 key={item._id}
//                 style={{
//                   width: "15rem",
//                   background: "rgba(255, 255, 255, 0.6)",
//                 }}
//               >
//                 <IoIosAddCircleOutline
//                   size={40}
//                   className=""
//                   onClick={() => handletoaddSingleDirector(users._id, item._id)}
//                 />
//                 <Card.Img variant="top" src={item.Directorphoto.photo_url} />
//                 <Card.Body>
//                   <Card.Title>{item.DirectorName}</Card.Title>
//                   <Card.Text>{item.Directoremail}</Card.Text>
//                 </Card.Body>
//                 <ListGroup className="list-group-flush">
//                   <ListGroup.Item
//                     style={{ display: "flex", justifyContent: "space-between" }}
//                   >
//                     AAdharCard{" "}
//                     {item.DirectorAadhar && (
//                       <button
//                         className="preview"
//                         onClick={() =>
//                           handletoopenview(item.DirectorAadhar.Aadhar_url)
//                         }
//                       >
//                         Preview
//                       </button>
//                     )}
//                   </ListGroup.Item>
//                   <ListGroup.Item
//                     style={{ display: "flex", justifyContent: "space-between" }}
//                   >
//                     PanCard
//                     {item.DirectorPan && (
//                       <button
//                         className="preview"
//                         onClick={() =>
//                           handletoopenview(item.DirectorPan.Pan_url)
//                         }
//                       >
//                         Preview
//                       </button>
//                     )}
//                   </ListGroup.Item>
//                 </ListGroup>
//               </Card>
//             ))}
//             <button
//               className="adds"
//               onClick={() => handletoaddDirector(users._id)}
//             >
//               <IoAddSharp size={30} />
//             </button>
//           </div>
//         </div>
//         <hr />
//         <div className="up">
//           <h3>Nominees</h3>
//           <div className="directors">
//             {users?.Nominee?.map((items) => (
//               <Card
//                 key={items._id}
//                 style={{
//                   width: "15rem",
//                   background: "rgba(255, 255, 255, 0.6)",
//                 }}
//               >
//                 <IoIosAddCircleOutline
//                   size={40}
//                   className=""
//                   onClick={() =>
//                     handletoaddSingleNominee(users._id, items._id)
//                   }
//                 />

//                 <Card.Img variant="top" src={items.Nomineephoto.url} />
//                 <Card.Body>
//                   <Card.Title>{items.NomineeName}</Card.Title>
//                   <Card.Text>{items.NomineeEmail}</Card.Text>
//                 </Card.Body>
//                 <ListGroup className="list-group-flush">
//                   <ListGroup.Item
//                     style={{ display: "flex", justifyContent: "space-between" }}
//                   >
//                     AAdharCard
//                     {items.NomineeAAdhar && (
//                       <button
//                         className="preview"
//                         onClick={() =>
//                           handletoopenview(items.NomineeAAdhar.url)
//                         }
//                       >
//                         Preview
//                       </button>
//                     )}
//                   </ListGroup.Item>
//                   <ListGroup.Item
//                     style={{ display: "flex", justifyContent: "space-between" }}
//                   >
//                     PanCard{" "}
//                     {items.NomineePan && (
//                       <button
//                         className="preview"
//                         onClick={() => handletoopenview(items.NomineePan.url)}
//                       >
//                         Preview
//                       </button>
//                     )}
//                   </ListGroup.Item>
//                 </ListGroup>
//               </Card>
//             ))}
//             <button className="adds">
//               <IoAddSharp
//                 size={30}
//                 onClick={() => handletoaddNominee(users._id)}
//               />
//             </button>
//           </div>
//         </div>
//         <hr />
      
       
       
        
       
//       </div>
//     </div>
//   );
// };

// export default UserDetails;


import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { singleuser } from "../../redux/action/useravtion";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoAddSharp } from "react-icons/io5";
import { IoMdArrowBack } from "react-icons/io";
import "./Single.css";
import { Card, ListGroup } from "react-bootstrap";
import image from "../logo-vpvv.png";

const UserDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(singleuser(id));
  }, [dispatch, id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handletoprofile = () => {
    navigate("/profile");
  };

  const handletoopenview = (documentUrl) => {
    window.open(documentUrl, "_blank");
  };

  const handletoaddDirector = (id) => {
    console.log(id);
  };

  const handletoaddSingleDirector = (userID, id) => {
    console.log(userID);
    console.log(id);
  };

  const handletoaddSingleNominee = (userID, id) => {
    console.log(userID);
    console.log(id);
  };

  const handletoaddNominee = (id) => {
    console.log(id);
  };

  const handletoaddCompnayDocs = (id) => {
    console.log(id);
  };

  const handletoaddPayments = (id) => {
    console.log(id);
  }

  return (
    <div className="total">
      <div className="some">
        <button className="to" onClick={handletoprofile}>
          <IoMdArrowBack size={27} />
        </button>
        <div className="company">
          {users.companylogo && (
            <>
              <img src={users.companylogo.url} alt="logo" />
              <h4>{users.name}</h4>
              <p>{users.email}</p>
            </>
          )}
        </div>

        <div className="up">
          <h3>Directors</h3>
          <div className="directors">
            {users?.Directors?.map((item) => (
              <Card
                key={item._id}
                style={{
                  width: "15rem",
                  background: "rgba(255, 255, 255, 0.6)",
                }}
              >
                <IoIosAddCircleOutline
                  size={40}
                  className=""
                  onClick={() => handletoaddSingleDirector(users._id, item._id)}
                />
                <Card.Img variant="top" src={item.Directorphoto.photo_url} />
                <Card.Body>
                  <Card.Title>{item.DirectorName}</Card.Title>
                  <Card.Text>{item.Directoremail}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    AAdharCard{" "}
                    {item.DirectorAadhar && (
                      <button
                        className="preview"
                        onClick={() =>
                          handletoopenview(item.DirectorAadhar.Aadhar_url)
                        }
                      >
                        Preview
                      </button>
                    )}
                  </ListGroup.Item>
                  <ListGroup.Item
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    PanCard
                    {item.DirectorPan && (
                      <button
                        className="preview"
                        onClick={() =>
                          handletoopenview(item.DirectorPan.Pan_url)
                        }
                      >
                        Preview
                      </button>
                    )}
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            ))}
            <button
              className="adds"
              onClick={() => handletoaddDirector(users._id)}
            >
              <IoAddSharp size={30} />
            </button>
          </div>
        </div>
        <hr />
        <div className="up">
          <h3>Nominees</h3>
          <div className="directors">
            {users?.Nominee?.map((items) => (
              <Card
                key={items._id}
                style={{
                  width: "15rem",
                  background: "rgba(255, 255, 255, 0.6)",
                }}
              >
                <IoIosAddCircleOutline
                  size={40}
                  className=""
                  onClick={() =>
                    handletoaddSingleNominee(users._id, items._id)
                  }
                />

                <Card.Img variant="top" src={items.Nomineephoto.url} />
                <Card.Body>
                  <Card.Title>{items.NomineeName}</Card.Title>
                  <Card.Text>{items.NomineeEmail}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    AAdharCard
                    {items.NomineeAAdhar && (
                      <button
                        className="preview"
                        onClick={() =>
                          handletoopenview(items.NomineeAAdhar.url)
                        }
                      >
                        Preview
                      </button>
                    )}
                  </ListGroup.Item>
                  <ListGroup.Item
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    PanCard{" "}
                    {items.NomineePan && (
                      <button
                        className="preview"
                        onClick={() => handletoopenview(items.NomineePan.url)}
                      >
                        Preview
                      </button>
                    )}
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            ))}
            <button className="adds">
              <IoAddSharp
                size={30}
                onClick={() => handletoaddNominee(users._id)}
              />
            </button>
          </div>
        </div>
        <hr />
        <div className="mid">
          <h3>Company Documents</h3>
          <button className="adds">
            <IoAddSharp size={30} onClick={()=>handletoaddCompnayDocs(users._id)} />
          </button>
          <div className="docs">
            <Card
              style={{
                width: "25rem",
                backgroundColor: "rgba(255, 255, 255, 0.3)",
              }}
            >
              <ListGroup variant="flush">
                <ListGroup.Item
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  Icorporation Certificate{" "}
                  <button className="preview" onClick={handletoopenview()}>
                    Preview
                  </button>
                </ListGroup.Item>{" "}
                <ListGroup.Item
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  Company Pan <button className="preview">Preview</button>
                </ListGroup.Item>
                <ListGroup.Item
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  Company Tan <button className="preview">Preview</button>
                </ListGroup.Item>
                <ListGroup.Item
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  MOA <button className="preview">Preview</button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <h3>Contract details</h3>
          <button className="adds">
            <IoAddSharp size={30} />
          </button>
          <div className="contract">
            <div className="main-type">
              <div className="type">
                <h4>Type Of Contract</h4> <div className="details">special</div>
              </div>
              <div className="type">
                <h4>Contract Tenure</h4> <div className="details">special</div>
              </div>
            </div>
            <div className="main-type">
              <div className="type">
                <h4> Contract Value</h4> <div className="details">special</div>
              </div>
              <div className="type">
                <h4>End Amount</h4> <div className="details">special</div>
              </div>
            </div>
            <div className="main-type">
              <div className="type">
                <h4>Total Recived</h4> <div className="details">special</div>
              </div>
              <div className="type">
                <h4>Pending</h4> <div className="details">special</div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="payments">
          <h3>Emd Tranches</h3>
          <button className="adds">
            <IoAddSharp size={30} onClick={()=>handletoaddPayments(users._id)} />
          </button>
          <div className="each">
            <div className="main-type">
              <div className="type">
                <h5>Payment Amount :</h5>
                <div className="details">special</div>
              </div>
              <div className="type">
                <h5> Date:</h5>
                <div className="details">special</div>
              </div>
            </div>
            <div className="main-type">
              <div className="type space">
                <h5>Recieved :</h5>
                <div className="details">special</div>
              </div>
            </div>
          </div>
          <div className="each">
            <div className="main-type">
              <div className="type">
                <h5>Payment Amount :</h5>
                <div className="details">special</div>
              </div>
              <div className="type">
                <h5> Date:</h5>
                <div className="details">special</div>
              </div>
            </div>
            <div className="main-type">
              <div className="type space">
                <h5>Recieved :</h5>
                <div className="details">special</div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="workorder">
          <h4>Work Ordered</h4>
          <button className="adds">
            <IoAddSharp size={30} onClick={()=>handletoaddPayments(users._id)} />
          </button>
          <div className="grouuup">
            <div className="order">
            <h5>Work Ordered :</h5>
            <div className="details">special</div>
            </div>
            <div className="order">
             <h5>Gurantee Bond Isssued :</h5>
            <div className="details">special</div>
            </div>
          </div>
     </div>
      </div>
    </div>
  );
};

export default UserDetails;
