import styled from "styled-components";

const AuthTemplate = ({ children }) => {
  return (
    <Wrapper>
      <div className="login-logo">Logo</div>
      <AuthTemplateBlock>{children}</AuthTemplateBlock>
    </Wrapper>
  );
};

export default AuthTemplate;

const Wrapper = styled.div`
  display: flex;
  background: white;
  height: 100vh;
`;
const AuthTemplateBlock = styled.div`
  width: 480px;
  min-width: 200px;
  height: 600px;
  margin: auto;
  border-radius: 30px;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
`;
