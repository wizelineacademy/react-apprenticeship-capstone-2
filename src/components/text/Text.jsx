import styled from "styled-components";
import { system } from "styled-system";

const Text = ({ marginBottom, marginTop }) => styled.div`
    margin-top: ${marginTop},
    margin-bottom: ${marginBottom},
    ${system({
      textTransform: true,
    })}
`;

export default Text;
