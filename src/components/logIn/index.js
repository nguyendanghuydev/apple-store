import { useState } from "react";
import { Formik, Form } from "formik";
import InputField from "../../custom-fields/InputField";
import * as Yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { getCart } from "../../redux/cartSlice";
import { getUser } from "../../redux/userSlice";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
function LogIn() {
  const navigate = useNavigate();
  
  const [err, setErr] = useState(null);
  const validate = Yup.object({
    email: Yup.string()
      .email("gmail đã tồn tại")
      .required("vui lòng nhập email"),
    password: Yup.string()
      .min(8, "mật khẩu ít nhất 8 ký tự")
      .max(20, "mật khẩu không quá 20 ký tự")
      .required("vui lòng nhập mật khẩu"),
  });

  const dispatch = useDispatch();
  const submitHandler = (value) => {
    const { email, password } = value;

    signInWithEmailAndPassword(auth, email, password)
      .then(async (result) => {
        const id = result.user.uid;
        await dispatch(getUser(id));
        await dispatch(getCart(id));
        navigate("/");
      })
      .catch((err) => {
        setErr("tài khoản hoặc mật khẩu chưa đúng");
      });
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={submitHandler}
    >
      {() => (
        <div className="container">
          <div className="signUp__container">
            <h2 className="signUp__title">Đăng Nhập</h2>
            <Form>
              <InputField label="Email" name="email" type="email" />
              <InputField label="Mật Khẩu" name="password" type="password" />

              <button className="signUp__submit" type="submit">
                Đăng nhập
              </button>
            </Form>
            {err && <p>{err}</p>}
            <a href="/signup" style={{ color: "blue" }}>
              nếu chưa có tài khoản bạn có thể đăng ký tại đây
            </a>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default LogIn;
