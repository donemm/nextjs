'use client'

import DynamicRoute from "./DynamicRoute";

export const dynamic = 'force-dynamic'
export default function ReadingPane() {
  
  return (
    <div className="col-lg-6 p-5">
                <div className="row g-4">
                <div className="col-sm-8">
                <DynamicRoute id="Home" />
                </div>
            </div>

            </div>
  );
}
