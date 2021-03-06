import * as React from "react";
import Link from "react-router-dom/es/Link";
import connect from "react-redux/es/connect/connect";
import { grey50, grey800, redA700, red900, lightBlueA700, lightBlue900, greenA700, green900 } from "material-ui/styles/colors";
import RaisedButton from "material-ui/RaisedButton";
import { createNewUser, logUserIn, } from "../redux/actionCreators";

const styles: { [name: string]: React.CSSProperties } = {
  raisedButton: {
    marginRight: 5,
    marginBottom: 15,
  },
};

interface ISignupPopup {
  createUserInfo?: any;
  loginUserInfo?: any;
  createNewUser: (data: any) => any;
  logUserIn: (data: any) => any;
  facebookAuth?: () => any;
  googleAuth?: () => any;
}

const PopupButton: React.SFC<ISignupPopup> = props => {
  const { createUserInfo, loginUserInfo, createNewUser, logUserIn, facebookAuth, googleAuth } = props;
  const renderButton = loginUserInfo ? "continue" : "sign up";
  const handleOnClick = () => (createUserInfo ? createNewUser(createUserInfo) : logUserIn(loginUserInfo));
  return (
    <div className="popup-button">
      <RaisedButton
        style={styles.raisedButton}
        labelColor={grey50}
        label={renderButton}
        backgroundColor={grey800}
        onClick={handleOnClick}
        fullWidth
      />
      <div className="popup-btn-divider">{`Or ${renderButton} with`}</div>
      <RaisedButton
        style={styles.raisedButton}
        labelColor={grey50}
        label="FACEBOOK"
        backgroundColor={lightBlue900}
        onClick={facebookAuth}
        fullWidth
      />
      <br />
      <RaisedButton
        style={styles.raisedButton}
        labelColor={grey50}
        label="GOOGLE"
        backgroundColor={red900}
        onClick={facebookAuth}
        fullWidth
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  createNewUser: (data: any) => dispatch(createNewUser(data)),
  logUserIn: (data: any) => dispatch(logUserIn(data)),
});

export default connect(null, mapDispatchToProps)(PopupButton);
