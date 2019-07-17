import styled from 'styled-components';

const Button = styled.button`
  background: red;
  border-radius: 50px;
  border: none;
  color: white;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  font-size: 22px;
  font-weight: 600;
  height: 50px;
  margin-top: 25px;
  opacity: ${props => (props.disabled ? '0.4' : '1')};
  padding: 10px 0;
  width: 100%;
`;

export default Button;
