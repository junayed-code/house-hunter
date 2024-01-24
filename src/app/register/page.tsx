import RegisterForm from "@/components/RegisterForm";

function Register() {
  return (
    <main className="mt-[80px]">
      <div className="container">
        <div className="max-w-md mx-auto border border-slate-400 rounded-md p-8">
          <h3 className="text-2xl text-center font-semibold mb-5 md:mb-7">
            Register An Account
          </h3>
          <RegisterForm />
        </div>
      </div>
    </main>
  );
}

export default Register;
