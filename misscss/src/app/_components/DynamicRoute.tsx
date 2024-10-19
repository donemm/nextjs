'use client'

import HomePage from "./HomePage";
import LoginForm from "./LoginForm";
import DynPage from "./DynPage";
import ReadingList from "./ReadingList";

export const dynamic = 'force-dynamic'

interface DynamicRouteProps {
  id: string;
}

function DynamicRoute({ id }: Readonly<DynamicRouteProps>) {

    if (id === "Home") {
        return (
          <HomePage />
        )
      }

      if (id === "Login") {
        return (
            <LoginForm />
        )
      }

      if (id === "Reading") {
        return (
            <ReadingList />
        )
      }

      console.log("Calling with: " + id)

      return ( <DynPage p={id}/> );
}

export default DynamicRoute;