import { Col, Row } from "reactstrap";
import Colors from "../Constants/Colors";
import { Form, FormGroup, Input, Label } from "reactstrap";

const CategorySelect = (props) => {
  const getGenders = () => {
    if (!props.categories) return null;

    const genders = new Set();
    for (let i = 0; i < props.categories?.length; i++) {
      genders.add(props.categories[i].gender);
    }
    return [...genders];
  };

  const getAges = () => {
    const ages = new Set();
    if (props.categories)
      for (let i = 0; i < props.categories?.length; i++) {
        ages.add(props.categories[i].age);
      }
    return [...ages];
  };

  return (
    <Form inline>
      <Row>
        <Col>
          <FormGroup floating>
            <Input
              id="categorySelect"
              name="category"
              placeholder="Category"
              type="select"
              style={selectStyle}
              onChange={(item) => props.onSelectCategory(item.target.value)}
            >
              <option selected>-------</option>
              {getAges()?.map((age) => (
                <option key={age} value={age.toString()}>
                  U-{age}
                </option>
              ))}
            </Input>
            <Label style={labelStyle} for="categorySelect">
              Category
            </Label>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup floating>
            <Input
              id="genderSelect"
              name="gender"
              placeholder="gender"
              type="select"
              style={selectStyle}
              onChange={(item) => props.onSelectGender(item.target.value)}
            >
              <option selected>-------</option>
              {getGenders()?.map((gender) => (
                <option key={gender} value={gender}>
                  {gender}
                </option>
              ))}
            </Input>
            <Label style={labelStyle} for="genderSelect">
              Gender
            </Label>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};

const selectStyle = { color: Colors.white, backgroundColor: Colors.black };
const labelStyle = { color: Colors.white };

export default CategorySelect;
