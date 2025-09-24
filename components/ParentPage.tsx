import React from "react";
 
const fake_user={
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    points: 100,
    child_name: "Lexi",
    stock:[]

}
export const ParentPage: React.FC = () => {
  return (
    <div>
      <h1>Parent Page</h1>
      <p>This is the parent page component.</p>
    </div>
  );
}