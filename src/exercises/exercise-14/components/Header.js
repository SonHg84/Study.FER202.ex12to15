import UserMenu from './UserMenu';
// Header không cần nhận/chuyển tiếp user qua props.
export default function Header() {
  return (
    <header>
      <UserMenu />
    </header>
  );
}
