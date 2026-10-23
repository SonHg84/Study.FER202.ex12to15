import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
export default function UserMenu() {
  const user = useContext(UserContext);
  return (
    <p>
      Hello {user.name} · Role: {user.role}
    </p>
  );
}
