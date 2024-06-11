import React, { useState } from "react";
import "../Styles/profile.css"; // Import the updated CSS file
import { Button, Spinner, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteMyDoc } from "../redux/action/useravtion";

const Profile = ({ user }) => {
  const [loadingDoc, setLoadingDoc] = useState(null);
  const dispatch = useDispatch()

  const deleteDocHandler = async(docId) => {
    setLoadingDoc(docId);
    try {
      await dispatch(deleteMyDoc( docId));

    } catch (error) {
      console.log(error);
    } finally {
      setLoadingDoc(null);
    }
  };

  return (
    <div className="flex">
      <h4 className="mt-4">Name: {user.name}</h4>
      <h4>{user.email}</h4>
      <h2>My documents</h2>
      {user.numOfDoc > 0 ? (
        <div className="table-container">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>No. of Document</th>
                <th>Documents</th>
                <th>CreatedAt</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {user?.docs?.map((item, i) => (
                
                <tr key={item._id}>
                  <td>{item._id}</td>
                  <td>{item.title}</td>
                  <td>{user.numOfDoc}</td>
                  <td>
                    <img className="image" src={item.url} alt="item" />
                  </td>
                  <td>{item.createdAt}</td>
                  <td className="d-flex justify-content-center ">
                    <Button
                      variant="danger"
                      className=" mt-2 but"
                      onClick={() => deleteDocHandler(item._id)}
                      disabled={loadingDoc === item._id}
                    >
                      {loadingDoc === item._id ? (
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                      ) : (
                        <RiDeleteBin7Fill />
                      )}
                    </Button>
                    
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        <p>
          You don't have any documents to show. If you want to upload a
          document{" "}
          <Link className="" to={""}>
            Click here
          </Link>
        </p>
      )}
    </div>
  );
};

export default Profile;
