interface TabButtonProps {
  id: string;
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({
  id,
  active,
  selectTab,
  children,
}) => {
  const buttonClasses = active ? 'text-pink-500' : 'text-slate-400';

  return (
    <button
      id={id}
      aria-selected={active}
      role="tab"
      onClick={selectTab}
      className="text-left">
      <p className={`mr-5 font-semibold hover:text-pink-500 ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
