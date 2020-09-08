import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "../component/Container";
import CardContainer from "../component/CardContainer";
import Loading from "../component/Loading";
import CardNewForm from "../component/FormCard/CardNewForm";
import CardForm from "../component/FormCard/CardForm";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [formList, setFormList] = useState([]);

  useEffect(() => {
    loading &&
      axios
        .get(`https://formnest-backend-mt.herokuapp.com/forms`)
        .then((res) => {
          setFormList(res.data);
          setLoading(false);
        });
  });
  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <CardContainer>
          <CardNewForm />
          {formList.length > 0 &&
            formList.map((value, index) => {
              return (
                <CardForm
                  title={value.title}
                  description={value.description}
                  key={index}
                  id={value._id}
                />
              );
            })}
        </CardContainer>
      )}
    </Container>
  );
};

export default Home;
