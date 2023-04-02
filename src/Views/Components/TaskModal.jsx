import React, { useState } from "react";
import { Button, Modal, Form, InputGroup } from "react-bootstrap";

const TaskModal = (props) => {
  // a simple state to store the form
  const [formValue, setFormValue] = useState({
    taskName: "",
    topPriority: false,
  });

  // use to check if the task name has pass the validation, if no task name has typed, it will be true, and warn the user; on false, nothing shows
  const [validated, setValidated] = useState(false);

  // update the form whenever there is a change
  const updateForm = (event) => {
    const { name, value, type, checked } = event.currentTarget;
    const val = type === "checkbox" ? checked : value;
    setFormValue({
      ...formValue,
      [name]: val,
    });
  };

  // if there is a close modal option, reset the form status and close the form
  const onClose = () => {
    props.closeModal();
    setFormValue({ taskName: "", topPriority: false });
    setValidated(false);
  };

  // on submit, check if it pass the validation, if so, update the form and re-render the task list
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formValue.taskName <= 0) {
      setValidated(true); // even with the required setting on the task name, section, here implemented a conditional statement to trigger feedback
    } else {
      props.updateTask(formValue);
      onClose(); //reset the form
    }
  };

  // validated on Form is used to control the validation element on the form, if true, it will show the validation feed back ( or point out where gets wrong) on the form
  return (
    <Modal
      show={props.show}
      onHide={props.closeModal}
      centered
      backdrop="static"
    >
      <Form onSubmit={handleSubmit} noValidate>
        <Modal.Header>
          <Modal.Title>
            {props.newTask ? "Add A New Task" : "Edit Task"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Task Name</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                size="lg"
                placeholder="Enter a task"
                name="taskName"
                id="task"
                onChange={updateForm}
                maxLength={20}
                required
                isInvalid={validated}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please enter a valid task
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              name="topPriority"
              type="checkbox"
              label="This is a prioritized task"
              id="topPriority"
              onChange={updateForm}
              checked={formValue.topPriority}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={
              props.closeModal
                ? onClose
                : () => {
                    console.log("No Close Modal Event Applied");
                  }
            }
          >
            Close
          </Button>
          <Button variant="primary" type="submit">
            {props.newTask ? "Add" : "Save"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default TaskModal;
