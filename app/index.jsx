import { AuthProvider } from "./context/AuthContext";
import AppNav from "./AppNav";

export default function App() {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}
