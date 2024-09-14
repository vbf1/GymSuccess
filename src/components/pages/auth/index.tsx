import { SignInPage } from "./signIn";
import { SignOutPage } from "./signOut";

export const AuthPage = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <SignInPage />
      <SignOutPage />
    </div>
  );
};
