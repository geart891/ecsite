import * as React from "react";
import TextField from "material-ui/TextField";
import Paper from "material-ui/Paper";
import { grey800 } from "material-ui/styles/colors";
import Checkbox from "material-ui/Checkbox";
import Subheader from "material-ui/Subheader";
import { List, ListItem } from "material-ui/List";
import PopupButton from "./miscComponents/PopupButtons";

class SignupPopup extends React.Component<{}, {}> {
  state = {
    email: "",
    password: "",
    fullname: "",
    preferStyle: { men: false, women: false, both: false },
  };
  handleChangeUserInfo = (key: string, info: string) => this.setState(prevState => ({ ...prevState, [key]: info }));
  handleChangePreferStyle = (style: string) =>
    this.setState((prevState: any) => ({
      ...prevState,
      preferStyle: { ...prevState.preferStyle, [style]: !prevState.preferStyle[style] },
    }));
  render() {
    const {
      handleChangeUserInfo,
      handleChangePreferStyle,
      state: { email, password, fullname, preferStyle },
    } = this;
    return (
      <Paper zDepth={0}>
        <div className="login-modal">
          <div className="welcome-text">
          <div style={{fontSize: "20px", padding: "20px"}}>Get a sneak peek.</div>

          Sign up to see what we’ve been working on and claim first dibs on all new product launches. 
          Stay in the know, on the go.

          </div>
          <TextField
            value={email}
            onChange={(e: any) => handleChangeUserInfo("email", e.target.value)}
            hintText="Please enter your email address."
            floatingLabelText="Email Address"
            underlineFocusStyle={{ borderColor: grey800 }}
            floatingLabelStyle={{ color: grey800 }}
            fullWidth
          />
        </div>
        <PopupButton {...{ createUserInfo: this.state }} />
      </Paper>
    );
  }
}

export default SignupPopup;
