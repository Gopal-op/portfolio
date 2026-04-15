export const Footer = () => {
  return (
    <footer className="c-space flex flex-wrap items-center justify-between gap-5 border-t border-black-300 pb-3 pt-7">
      <div className="text-white-500">
        &copy; {new Date().getFullYear()} <strong>Gopal Kumar</strong>. All rights
        reserved.
      </div>
    </footer>
  );
};
