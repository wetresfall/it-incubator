import styled from "styled-components";
import rectangle_1 from '../attached/rectangle_1.png';

export const StyledImage = styled.img`
  width: 100%;
  border-radius: 10px;
`

StyledImage.defaultProps = {
    src: rectangle_1,
};