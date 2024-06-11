import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Table,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { deleteSingleDoc, deleteUSer, getAllUser, updateRole } from "../redux/action/useravtion";
import "../Styles/User.css"; // Import CSS file
import { RiDeleteBin7Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function Users() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [previewUser, setPreviewUser] = useState(null);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [loadingDoc, setLoadingDoc] = useState(null);
  const navigate = useNavigate()

  const { users, error, message, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(getAllUser(searchQuery));
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const deleteUserHandler =async (userId) => {
    setLoadingDoc(userId)
    try {
      await  dispatch(deleteUSer(userId));
      toast.success("User deleted successfully!");
      dispatch(getAllUser(searchQuery));
      navigate("/admin/Users")
    } catch (error) {
      toast.error("Failed to delete document.");
    } finally {
      setLoadingDoc(null);
    }
   
  };

  const openPreviewModal = (user) => {
    setPreviewUser(user);
    setShowModal(true);
  };

  const closePreviewModal = () => {
    setShowModal(false);
    setSelectedDocument(null); // Reset selected document when modal closes
  };

  const handleViewDocument = (documentUrl) => {
    window.open(documentUrl, "_blank");
  };

  const handlePrintImage = (documentUrl) => {
    const printWindow = window.open("", "_blank");
    printWindow.document.write(
      `<img src="${documentUrl}" onload="window.print();window.close()" />`
    );
    printWindow.document.close();
  };

  const deleteDocHandler = async (userId, docId) => {
    setLoadingDoc(docId);
    try {
      await dispatch(deleteSingleDoc(userId, docId));
      toast.success("Document deleted successfully!");
      dispatch(getAllUser(searchQuery));
      setShowModal(false);
      setSelectedDocument(null);
    } catch (error) {
      toast.error("Failed to delete document.");
    } finally {
      setLoadingDoc(null);
    }
  };
  const ChangeroleHandler = async (Userid) => {
    try {
      await dispatch(updateRole(Userid));
      toast.success("User role updated successfully")
      dispatch(getAllUser(searchQuery));

    } catch (error) {
      console.log(error)
      toast.error(error)
    }
  }
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
    dispatch(getAllUser());
  }, [dispatch, error, message, searchQuery]);

  return (
    <>
      <Container>
        <Form className="mt-4" onSubmit={handleSearch}>
          <Row>
            <Col md={10}>
              <Form.Control
                type="text"
                value={searchQuery}
                onChange={handleChange}
                placeholder="Search by username or email"
                className="mr-sm-2"
              />
            </Col>
            <Col md={2}>
              <Button type="submit" variant="primary" block>
                Search
              </Button>
            </Col>
          </Row>
        </Form>
        <div className="table-container mt-3">
          {" "}
          {/* Add a container for the table */}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Documents</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((item) => (
                  <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.role}</td>
                    <td>{item.numOfDoc}</td>
                    <td className="d-flex justify-content-center ">
                      <Button
                        variant="danger"
                        className="me-2 but"
                        onClick={() => deleteUserHandler(item._id)}
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
                      <Button className="but"
                        variant="info"
                        onClick={() => openPreviewModal(item)}
                      >
                        Preview
                      </Button>
                      <Button className="but"
                        variant="primary"
                        onClick={()=>ChangeroleHandler(item._id)}
                      >
                        change role
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
        <Modal show={showModal} onHide={closePreviewModal} size="xl" fullscreen>
          <Modal.Header closeButton>
            <Modal.Title>User Preview</Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex flex-column align-items-center">
            {previewUser && (
              <div>
                <h2>{previewUser.name}</h2>
                <p className="text-muted">
                  #{previewUser._id} || {previewUser.email}
                </p>
                <div className="cardd">
                  {previewUser?.docs?.map((doc, index) => (
                    <Card key={doc._id} className="card mt-4">
                      <Card.Body className="d-flex justify-content-between align-items-center">
                        <div>
                          <Card.Title>Document {index + 1}:</Card.Title>
                          <Card.Text>{doc.title}</Card.Text>
                        </div>
                        <img
                          className="image ml-2"
                          src={doc.url}
                          alt={doc.title}
                        />
                        {doc.resource_type === "image" ? (
                          <div className="butt">
                            <Button
                              variant="info"
                              onClick={() => handleViewDocument(doc.url)}
                            >
                              View
                            </Button>
                            <Button
                              variant="primary"
                              className=" mt-2 "
                              onClick={() => handlePrintImage(doc.url)}
                            >
                              Print
                            </Button>
                            <Button
                              variant="danger"
                              className=" mt-2 "
                              onClick={() =>
                                deleteDocHandler(previewUser._id, doc._id)
                              }
                              disabled={loadingDoc === doc._id}
                            >
                              {loadingDoc === doc._id ? (
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
                          </div>
                        ) : (
                          <div className="butt">
                            <Button
                              variant="info"
                              className="me-2"
                              onClick={() => handleViewDocument(doc.url)}
                            >
                              View PDF
                            </Button>
                            <Button
                              variant="danger"
                              className="me-2 mt-2 "
                              onClick={() =>
                                deleteDocHandler(previewUser._id, doc._id)
                              }
                              disabled={loadingDoc === doc._id}
                            >
                              {loadingDoc === doc._id ? (
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
                          </div>
                        )}
                      </Card.Body>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closePreviewModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
}

export default Users;
