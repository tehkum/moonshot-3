import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="form-container" style={styles}>
      {children}
    </div>
  );
}

const styles = {
  display: "flex",
  justifyContent: "center",
};
