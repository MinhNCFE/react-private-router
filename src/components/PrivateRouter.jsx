import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRouter() {
  // Giả lập trạng thái login
  const [isAuth] = useState(false); // đổi thành true để test cho vào Account

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRouter;
