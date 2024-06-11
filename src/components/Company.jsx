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
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { deleteCompany, deleteCompanyDoc, getAllCompany } from "../redux/action/companyaction";
import { RiDeleteBin7Fill } from "react-icons/ri";
import "../Styles/User.css"; // Import CSS file
import { useNavigate } from "react-router-dom";

function Company() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [previewCompany, setPreviewCompany] = useState(null);
  const [loadingDoc, setLoadingDoc] = useState(null);
  const navigate = useNavigate();
  const { companys, error, message, loading } = useSelector(
    (state) => state.company
  );
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getAllCompany("", searchQuery));
  };

  const deletecompany = async (companyid) => {
    setLoadingDoc(companyid);
    try {
      await dispatch(deleteCompany(companyid));
      dispatch(getAllCompany(searchQuery));
      navigate("/admin/company");
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingDoc(null);
    }
  };

  const deleteCompanyHandler = async(companyId,docId) => {
    setLoadingDoc(docId);
    try {
      await dispatch(deleteCompanyDoc(companyId,docId));
      dispatch(getAllCompany(searchQuery));
      setShowModal(false);
    } catch (error) {
      console.log(error)
    } finally {
      setLoadingDoc(null);
    }
  };

  const openPreviewModal = (company) => {
    setPreviewCompany(company);
    setShowModal(true);
  };

  const closePreviewModal = () => {
    setShowModal(false);
  };
  const handleViewDocument = (documentUrl) => {
    window.open(documentUrl, "_blank");
  };

  const handlePrintDocument = (documentUrl) => {
    const printWindow = window.open("", "_blank");
    printWindow.document.write(
      `<img src="${documentUrl}" onload="window.print();window.close()" />`
    );
    printWindow.document.close();
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
    dispatch(getAllCompany());
  }, [dispatch, error, message]);

  return (
    <>
      <Container>
        <Form className="mt-4" onSubmit={handleSubmit}>
          <Row>
            <Col md={10}>
              <Form.Control
                type="text"
                value={searchQuery}
                onChange={handleChange}
                placeholder="Search by company name or email"
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
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Company Name</th>
                <th>Company Email</th>
                <th>Documents</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {companys &&
                companys?.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.numOfDoc}</td>
                    <td className="d-flex justify-content-center">
                      <Button
                        variant="danger"
                        className="me-2 but"
                        onClick={() => deletecompany(item._id)}
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
                      <Button
                        className="but"
                        variant="info"
                        onClick={() => openPreviewModal(item)}
                      >
                        Preview
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
        <Modal show={showModal} onHide={closePreviewModal} size="xl" fullscreen>
          <Modal.Header closeButton>
            <Modal.Title>Company Preview</Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex flex-column align-items-center">
            {previewCompany && (
              <div>
                <h2>{previewCompany.name}</h2>
                <p className="text-muted">
                  #{previewCompany._id} || {previewCompany.email}
                </p>
                <div className="cardd">
                  {previewCompany?.docs?.map((doc, index) => (
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
                        <div className="butt">
                          <Button
                            variant="info"
                            className="ml-4 me-2"
                            onClick={() => handleViewDocument(doc.url)}
                          >
                            View Document
                          </Button>
                          <Button
                            variant="primary"
                            className="me-2 mt-2"
                            onClick={() => handlePrintDocument(doc.url)}
                          >
                            Print Document
                          </Button>
                          <Button
                            variant="danger"
                            className="me-2 mt-2 "
                            onClick={() => deleteCompanyHandler(previewCompany._id,doc._id)}
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

export default Company;
