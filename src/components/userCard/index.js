import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Radio } from "@mui/material";
function User(props) {
  const { onSubmit } = props;

  const [nameInput, setNameInput] = useState("");
  const [phoneNumberInput, setPhoneNumberInput] = useState("");
  const [addressInput, setAddressInput] = useState("");
  const [genderInput, setGenderInput] = useState(undefined);
  const [err, setErr] = useState(false);

  const user = useSelector((state) => state.user);
  const listGender = [
    {
      id: 1,
      gender: "nữ",
    },
    {
      id: 2,
      gender: "nam",
    },
  ];

  useEffect(() => {
    setNameInput(user.name);
    setAddressInput(user.address);
    setPhoneNumberInput(user.phoneNumber);
    setGenderInput(user.gender);
  }, [user]);

  function isPhoneNumber(phoneNumber) {
    let check = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (phoneNumber.match(check)) {
      return true;
    } else {
      return false;
    }
  }

  const submitHandler = (e) => {
    const checkPhoneNumber = isPhoneNumber(phoneNumberInput);
    if (checkPhoneNumber) {
      setErr(false);
      const obj = {
        id: user.id,
        email: user.email,
        name: nameInput,
        phoneNumber: phoneNumberInput,
        address: addressInput,
        gender: genderInput,
      };
      console.log(obj);
      onSubmit(obj);
    } else {
      setErr(true);
    }
  };

  const nameChangeHandler = (e) => {
    const value = e.target.value;
    setNameInput(value);
  };
  const phoneNumberChangeHandler = (e) => {
    const value = e.target.value;
    setPhoneNumberInput(value);
  };
  const addressChangeHandler = (e) => {
    const value = e.target.value;
    setAddressInput(value);
  };
  const genderChangeHandler = (id) => {
    setGenderInput(id);
  };

  return (
    <div className="user-form">
      <h3 className="userForm__title">Thông Tin Tài Khoản</h3>
      <div>
        <div className="form__controls">
          <label>Họ và Tên</label>
          <input type="text" value={nameInput} onChange={nameChangeHandler} />
        </div>
        <div className="form__controls">
          <label>Số Điện Thoại</label>
          <input
            type="text"
            value={phoneNumberInput}
            onChange={phoneNumberChangeHandler}
          />
          {err && <p>Số điện thoại đang không đúng</p>}
        </div>
        <div className="form__controls">
          <label>Địa Chỉ</label>
          <input
            type="text"
            value={addressInput}
            onChange={addressChangeHandler}
          />
        </div>
        <div className="form__controls  ">
          <label>Giới Tính</label>
          {listGender.map((gender) => {
            return (
              <div className="form__controls--radio" key={gender.id}>
                <p>{gender.gender}</p>
                <Radio
                  checked={genderInput === gender.id}
                  onChange={() => genderChangeHandler(gender.id)}
                  value={genderInput}
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                  style={{ color: "purple" }}
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 28,
                    },
                  }}
                />
              </div>
            );
          })}
        </div>
        <div className="form__action">
          <button onClick={submitHandler} className="user-form__submit">
            Cập Nhật User
          </button>
        </div>
      </div>
    </div>
  );
}

export default User;
