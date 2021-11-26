import { Formik, Form } from "formik";
import InputField from "../custom-fields/InputField";
import * as Yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCart } from "../redux/cartSlice";
import { getUser } from "../redux/userSlice";
function SignUp() {
  const dispatch = useDispatch();
  const [err, setErr] = useState(null);

  const navigate = useNavigate();
  const validate = Yup.object({
    userName: Yup.string()
      .max(30, "vui lòng không nhập quá 30 ký tự")
      .min(3, "vui lòng  nhập trên 3 ký tự")
      .required("vui lòng nhập họ và tên"),
    email: Yup.string()
      .email()
      .required("vui lòng nhập email"),
    password: Yup.string()
      .min(8, "mật khẩu ít nhất 8 ký tự")
      .max(20, "mật khẩu không quá 20 ký tự")
      .required("vui lòng nhập mật khẩu"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "mật khẩu nhập không giống nhau")
      .required("vui lòng nhập mật khẩu"),
  });

  const submitHandler = (value) => {
    const { email, password } = value;
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (result) => {
        const { user } = result;
        const newUser = doc(db, `user/${user.uid}`);
        const newCart = doc(db, `cart/${user.uid}`);
        setDoc(newUser, {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          phoneNumber: null,
          address: null,
          gender: null,
        });

        setDoc(newCart, {
          id: user.uid,
          items: [],
          totalQuantity: 0,
        });
        await dispatch(getUser(user.uid));
        await dispatch(getCart(user.uid));

        navigate("/");
      })
      .catch((err) => {
        setErr("tài khoản đã tồn tại");
      });
  };
  return (
    <Formik
      initialValues={{
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={submitHandler}
    >
      {(formik) => (
        <div className="container">
          <div className="signUp__container">
            <h2 className="signUp__title">Tạo Tài Khoản</h2>
            <Form>
              <InputField label="Họ và Tên" name="userName" type="text" />
              <InputField label="Email" name="email" type="email" />
              <InputField label="Mật Khẩu" name="password" type="password" />
              <InputField
                label="Xác Nhận Mật Khẩu"
                name="confirmPassword"
                type="password"
              />
              <button className="signUp__submit" type="submit">
                Đăng Ký
              </button>
            </Form>
            {err && <p>{err}</p>}
          </div>
        </div>
      )}
    </Formik>
  );
}

export default SignUp;
