import React, { useMemo } from "react";
import _ from "lodash";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
function CardComponent(props) {
  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    props.swiper(destination.droppableId);
    console.log(source, destination);
  };
  const handleChangeText = (typeSelected) => {
    return `My ${typeSelected} is `;
  };
  const columns = [{ columnId: "1" }, { columnId: "2" }, { columnId: "3" }];
  const { picture, username, location, phone, email, dob } = props.detailPerson;
  const text = useMemo(() => handleChangeText(props.typeSelected), [props.typeSelected, props.detailPerson]);
  const infor = useMemo(() => {
    switch (props.typeSelected) {
      case "Phone":
        return phone;
      case "Address":
        return _.startCase(location.street);
      case "Email":
        return email;
      case "Birthday":
        return dob;
    }
  }, [props.typeSelected, props.detailPerson]);
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
        {columns.map((column: any, index) => {
          if (index === 1) {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                key={index}
              >
                <div style={{ margin: 8 }}>
                  <Droppable droppableId={column.columnId} key={column.columnId}>
                    {(provided) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            padding: 4,
                            width: 350,
                            minHeight: 500,
                          }}
                        >
                          <Draggable key={column.columnId} draggableId={column.columnId} index={index}>
                            {(provided) => {
                              return (
                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                  <div className="person">
                                    <div className="person-photo">
                                      <img className="img" src={`${picture}`} alt={username} />
                                    </div>
                                    <div className="person-description">
                                      <p className="person-name-age">{text}</p>
                                      <p className="person-info">{infor}</p>
                                    </div>
                                  </div>
                                </div>
                              );
                            }}
                          </Draggable>
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          } else {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                key={index}
              >
                <div style={{ margin: 8 }}>
                  <Droppable droppableId={column.columnId} key={column.columnId}>
                    {(provided) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            padding: 4,
                            width: 450,
                            minHeight: 450,
                          }}
                        >
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          }
        })}
      </DragDropContext>
    </div>
  );
}
export default React.memo(CardComponent);
