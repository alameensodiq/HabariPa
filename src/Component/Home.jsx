import { useNavigate } from "react-router-dom";
import InputPassword from "../Reusables/InputPassword";
import InputText from "../Reusables/InputText";
import AuthenticationButton from "../Reusables/AuthenticationButton";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../Store/auth";
import toast from "react-hot-toast";

const Home = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isValid },
    reset
  } = useForm();

  const email = watch("email", "");
  const password = watch("password", "");
  const isSubmit = email.trim() !== "" && password.trim() !== "";

  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = async (data) => {
    try {
      const response = await login(data).unwrap();
      console.log(response);

      //   if (response?.token) {
      //     toast.success("Login successful!");
      //     reset();
      //     sessionStorage.setItem("token", response?.token);
      //     sessionStorage.setItem("userId", response?.id);
      //     // navigate(user);
      //   }
    } catch (error) {
      // console.error("Login error:", error);
      const errorName =
        error?.data?.errors?.[0]?.detail ||
        error?.error ||
        "An unexpected error occurred. Please try again.";
      if (errorName) {
        toast.error(errorName);
      }
    }
  };
  return (
    <div className="flex flex-row bg-[#FAFAFA] w-[100vw] min-h-[100vh]">
      <div className="flex-col justify-end items-center gap-35 lg:w-[45%] md:w-[45%] hidden sm:flex pt-86 pb-16">
        {/* <img
          src={Printing}
          alt="Invoice Printing Animation"
          className="w-auto h-auto"
        /> */}
      </div>
      <div className="flex flex-col bg-[#FAFAFA]  lg:p-2 md:p-2 lg:w-[55%] md:w-[55%] sm:w-full">
        <div className="flex flex-col bg-white rounded-lg gap-45 p-9 border-[1px] border-[#FAFAFA] min-h-[100%] overflow-y-auto">
          <div className="flex flex-row justify-end">
            {/* <img src={Logo} alt="logo" /> */}
          </div>
          <div className="flex flex-col gap-7 lg:px-20">
            <div className="flex flex-col items-start justify-center lg:pl-2">
              <span className="text-[#141414] text-[28px] font-bold">
                Welcome to HabariPay
              </span>
              <span className="text-[#666D80] text-[15px]">
                Sign in to your account
              </span>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-3 lg:w-[90%] w-[90%] md:w-[90%]"
            >
              <InputText
                label={"Email"}
                placeholder={"Enter email"}
                type="text"
                name="email"
                error={errors.email}
                register={register}
                validationRules={{
                  required: "Email is required"
                }}
              />
              <InputPassword
                label={"Password"}
                placeholder={"Enter your password"}
                type="text"
                name="password"
                error={errors.password}
                register={register}
                validationRules={{
                  required: "Password is required"
                }}
              />
              <div className="pt-0 gap-5 flex flex-col px-4">
                <div
                  // onClick={() => navigate("/corporate-reset-password")}
                  className="flex flex-row justify-end items-start cursor-pointer"
                >
                  <span className="text-[#141414] text-[14px]">
                    Forgot password?
                  </span>
                </div>
                <div>
                  <AuthenticationButton
                    title={"Sign in"}
                    isLoading={isLoading}
                    // onClick={() => {
                    //   setStep(1);
                    //   setAdjustment(true);
                    // }}
                    isValid={isValid}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
