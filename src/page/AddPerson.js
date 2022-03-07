import { useState } from "react";
import { useNavigate } from "react-router";
import { Btn1Active } from "../component/button";
import { StepNavigation } from "../component/step_navigation";

export function AddPerson() {
  const [step, setStep] = useState(1);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState();
  const [address, setAddress] = useState();

  const [pendidikan, setPendidikan] = useState();
  const [pekerjaan, setPekerjaan] = useState();
  const [keahlian, setKeahlian] = useState();

  const navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  };

  const handleChangeName = (e) => {
    if (e.target.value == "") {
      setName({ value: "", error: "Nama tidak boleh kosong" });
    } else {
      setName({ value: e.target.value, error: false });
    }
  };

  const handleChangeEmail = (e) => {
    if (e.target.value == "") {
      setEmail({ value: "", error: "Email tidak boleh kosong" });
    } else {
      setEmail({ value: e.target.value, error: false });
    }
  };

  const handleChangeGender = (e) => {
    if (e.target.value == "") {
      setGender({ value: "", error: "Gender harus dipilih" });
    } else {
      setGender({ value: e.target.value, error: false });
    }
  };

  const handleChangeAddress = (e) => {
    if (e.target.value == "") {
      setAddress({ value: "", error: "Alamat harus diisi" });
    } else {
      setAddress({ value: e.target.value, error: false });
    }
  };

  const handleChangePendidikan = (e) => {
    if (e.target.value == "") {
      setPendidikan({ value: "", error: "Riwayat pendidikan harus diisi" });
    } else {
      setPendidikan({ value: e.target.value, error: false });
    }
  };

  const handleChangePekerjaan = (e) => {
    if (e.target.value == "") {
      setPekerjaan({
        value: "",
        error: "Pengalaman kerja atau magang harus diisi",
      });
    } else {
      setPekerjaan({ value: e.target.value, error: false });
    }
  };

  const handleChangeKeahlian = (e) => {
    if (e.target.value == "") {
      setKeahlian({ value: "", error: "Keahlian harus diisi" });
    } else {
      setKeahlian({ value: e.target.value, error: false });
    }
  };

  const handleStep1 = (event) => {
    event.preventDefault();
    if (
      name.value == "" ||
      email.value == "" ||
      address.value == "" ||
      gender.value == ""
    )
      return;

    setStep(2);
  };

  const handleStep2 = (event) => {
    event.preventDefault();
    if (pendidikan == "") return;
    setStep(3);
  };

  const handleStep3 = (event) => {
    event.preventDefault();
    if (pekerjaan == "") return;
    setStep(4);
  };

  const handleStep4 = (event) => {
    if (keahlian == "") return;
    event.preventDefault();

    const data = {
      name: name.value,
      email: email.value,
      address: address.value,
      gender: gender.value,
      pendidikan: pendidikan.value,
      pekerjaan: pekerjaan.value,
      keahlian: keahlian?.value,
    };

    SaveDataToLocalStorage(data);
  };

  function SaveDataToLocalStorage(data) {
    var a = [];
    a = JSON.parse(localStorage.getItem("data-person")) || [];
    a.push(data);
    localStorage.setItem("data-person", JSON.stringify(a));

    routeChange("/");
  }

  return (
    <div className="w-full ">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-center font-bold text-xl my-10">Add Person</h1>
        <div className="step-navigator w-full">
          <StepNavigation step={step} />
        </div>
        <div className="body mt-10">
          {step == 1 ? (
            <div className="rounded-lg bg-white overflow-hidden mb-5 p-4 shadow-lg">
              <div className="c-head flex justify-between bg-cgreen-100 px-5 py-2 items-center gap-4">
                <h3 className="grow font-semibold">Data Diri</h3>
              </div>
              <div className="c-body px-5 py-2">
                <form onSubmit={handleStep1}>
                  <div className="form-group flex flex-col relative justify-center mt-4">
                    <label htmlFor="name" className="font-medium">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      onChange={handleChangeName}
                      name="name"
                      id="name"
                      placeholder="Nama lengkap"
                      value={name?.value}
                      className={`py-2 px-3 mt-2 bg-white text-md rounded-md outline-none focus:border-purple-400 ${
                        name?.error == false
                          ? "border border-green-500"
                          : name?.error
                          ? "border border-red-400"
                          : "border border-light-300"
                      }`}
                    />

                    <h6
                      className={`text-xs text-red-400 mt-1 ${
                        name?.error ? "block" : "hidden"
                      }`}
                    >
                      {name?.error}
                    </h6>
                  </div>

                  <div className="form-group flex flex-col relative justify-center mt-4">
                    <label htmlFor="email" className="font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      onChange={handleChangeEmail}
                      name="email"
                      id="email"
                      value={email?.value}
                      placeholder="yopigambyok@gmail.com"
                      className={`py-2 px-3 mt-2 bg-white text-md rounded-md outline-none focus:border-purple-400 ${
                        email?.error == false
                          ? "border border-green-500"
                          : email?.error
                          ? "border border-red-400"
                          : "border border-light-300"
                      }`}
                    />

                    <h6
                      className={`text-xs text-red-400 mt-1 ${
                        email?.error ? "block" : "hidden"
                      }`}
                    >
                      {email?.error}
                    </h6>
                  </div>

                  <div className="form-group flex flex-col relative justify-center mt-4">
                    <label htmlFor="gender" className="font-medium">
                      Jenis Kelamin
                    </label>
                    <select
                      name="gender"
                      id="gender"
                      value={gender?.value}
                      onChange={handleChangeGender}
                      className={`py-2 px-3 mt-2 bg-white text-md rounded-md outline-none ${
                        gender?.error == false
                          ? "border border-green-500"
                          : gender?.error
                          ? "border border-cred-400"
                          : "border border-light-300"
                      }`}
                    >
                      <option disabled selected>
                        Pilih Jenis Kelamin
                      </option>
                      <option value="Laki - laki">Laki - laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>

                    <h6
                      className={`text-xs text-cred-400 mt-1 ${
                        gender?.error ? "block" : "hidden"
                      }`}
                    >
                      {gender?.error}
                    </h6>
                  </div>

                  <div className="form-group flex flex-col relative justify-center mt-4">
                    <label htmlFor="address" className="font-medium">
                      Alamat
                    </label>
                    <input
                      type="text"
                      onChange={handleChangeAddress}
                      name="address"
                      id="address"
                      value={address?.value}
                      placeholder="Alamat Domisili"
                      className={`py-2 px-3 mt-2 bg-white text-md rounded-md outline-none focus:border-purple-400 ${
                        address?.error == false
                          ? "border border-green-500"
                          : address?.error
                          ? "border border-red-400"
                          : "border border-light-300"
                      }`}
                    />

                    <h6
                      className={`text-xs text-red-400 mt-1 ${
                        address?.error ? "block" : "hidden"
                      }`}
                    >
                      {address?.error}
                    </h6>
                  </div>

                  <div className="action flex justify-end mt-5">
                    <Btn1Active title="Selanjutnya" />
                  </div>
                </form>
              </div>
            </div>
          ) : step == 2 ? (
            <div className="rounded-lg bg-white overflow-hidden mb-5 p-4 shadow-lg">
              <div className="c-head flex justify-between bg-cgreen-100 px-5 py-2 items-center gap-4">
                <h3 className="grow font-semibold">Riwayat Pendidikan</h3>
              </div>
              <div className="c-body px-5 py-2">
                <form onSubmit={handleStep2}>
                  <div className="form-group flex flex-col relative justify-center mt-4">
                    <label htmlFor="pendidikan" className="font-medium">
                      Institusi Pendidikan
                    </label>
                    <input
                      type="text"
                      onChange={handleChangePendidikan}
                      name="pendidikan"
                      id="pendidikan"
                      value={pendidikan?.value}
                      placeholder="Universitas / sekolah"
                      className={`py-2 px-3 mt-2 bg-white text-md rounded-md outline-none focus:border-purple-400 ${
                        pendidikan?.error == false
                          ? "border border-green-500"
                          : pendidikan?.error
                          ? "border border-red-400"
                          : "border border-light-300"
                      }`}
                    />

                    <h6
                      className={`text-xs text-red-400 mt-1 ${
                        pendidikan?.error ? "block" : "hidden"
                      }`}
                    >
                      {pendidikan?.error}
                    </h6>
                  </div>

                  <div className="action flex justify-end mt-5">
                    <Btn1Active title="Selanjutnya" />
                  </div>
                </form>
              </div>
            </div>
          ) : step == 3 ? (
            <div className="rounded-lg bg-white overflow-hidden mb-5 p-4 shadow-lg">
              <div className="c-head flex justify-between bg-cgreen-100 px-5 py-2 items-center gap-4">
                <h3 className="grow font-semibold">
                  Pengalaman Kerja / Magang
                </h3>
              </div>
              <div className="c-body px-5 py-2">
                <form onSubmit={handleStep3}>
                  <div className="form-group flex flex-col relative justify-center mt-4">
                    <label htmlFor="pekerjaan" className="font-medium">
                      Institusi / Perusahaan
                    </label>
                    <input
                      type="text"
                      onChange={handleChangePekerjaan}
                      name="pekerjaan"
                      id="pekerjaan"
                      value={pekerjaan?.value}
                      placeholder="PT Yopiangga Solusi Tama"
                      className={`py-2 px-3 mt-2 bg-white text-md rounded-md outline-none focus:border-purple-400 ${
                        pekerjaan?.error == false
                          ? "border border-green-500"
                          : pekerjaan?.error
                          ? "border border-red-400"
                          : "border border-light-300"
                      }`}
                    />

                    <h6
                      className={`text-xs text-red-400 mt-1 ${
                        pekerjaan?.error ? "block" : "hidden"
                      }`}
                    >
                      {pekerjaan?.error}
                    </h6>
                  </div>

                  <div className="action flex justify-end mt-5">
                    <Btn1Active title="Selanjutnya" />
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div className="rounded-lg bg-white overflow-hidden mb-5 p-4 shadow-lg">
              <div className="c-head flex justify-between bg-cgreen-100 px-5 py-2 items-center gap-4">
                <h3 className="grow font-semibold">Keahlian / Professional</h3>
              </div>
              <div className="c-body px-5 py-2">
                <form onSubmit={handleStep4}>
                  <div className="form-group flex flex-col relative justify-center mt-4">
                    <label htmlFor="keahlian" className="font-medium">
                      Bidang Keadlian
                    </label>
                    <input
                      type="text"
                      onChange={handleChangeKeahlian}
                      name="keahlian"
                      id="keahlian"
                      value={keahlian?.value}
                      placeholder="Front End Development"
                      className={`py-2 px-3 mt-2 bg-white text-md rounded-md outline-none focus:border-purple-400 ${
                        keahlian?.error == false
                          ? "border border-green-500"
                          : keahlian?.error
                          ? "border border-red-400"
                          : "border border-light-300"
                      }`}
                    />

                    <h6
                      className={`text-xs text-red-400 mt-1 ${
                        keahlian?.error ? "block" : "hidden"
                      }`}
                    >
                      {keahlian?.error}
                    </h6>
                  </div>

                  <div className="action flex justify-end mt-5">
                    <Btn1Active title="Tambahkan" />
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
