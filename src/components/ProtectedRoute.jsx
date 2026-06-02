import {
  Navigate
} from "react-router-dom"

import {
  useAuth
} from "../contexts/AuthContext"

function ProtectedRoute({
  children,
  adminOnly = false,
}) {

  const {
    user,
    role,
  } = useAuth()

  if (!user) {

    return <Navigate to="/login" />

  }

  if (
    adminOnly &&
    role !== "admin"
  ) {

    return <Navigate to="/" />

  }

  return children

}

export default ProtectedRoute
