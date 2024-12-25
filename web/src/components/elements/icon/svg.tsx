import clsx from 'clsx';

type IconProps = {
  children?: React.ReactNode;
  className?: string;
};

const Icon = ({ children, className }: IconProps) => {
  return (
    <svg
      className={clsx(
        'mr-1 stroke-current text-black transition-colors duration-300 group-hover:text-white',
        className
      )}
      width='20px'
      height='20px'
      strokeWidth='1.5'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      {children}
    </svg>
  );
};

const SomIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <path
      d='M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M3 16L10 13L21 18'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M16 10C14.8954 10 14 9.10457 14 8C14 6.89543 14.8954 6 16 6C17.1046 6 18 6.89543 18 8C18 9.10457 17.1046 10 16 10Z'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Icon>
);

const TitleIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <path
      d='M7 12L17 12'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7 8L13 8'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M3 20.2895V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V15C21 16.1046 20.1046 17 19 17H7.96125C7.35368 17 6.77906 17.2762 6.39951 17.7506L4.06852 20.6643C3.71421 21.1072 3 20.8567 3 20.2895Z'
      stroke='currentColor'
      strokeWidth='1.5'
    />
  </Icon>
);

const ObjectIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <path
      d='M21 7.35304V16.647C21 16.8649 20.8819 17.0656 20.6914 17.1715L12.2914 21.8381C12.1102 21.9388 11.8898 21.9388 11.7086 21.8381L3.30861 17.1715C3.11814 17.0656 3 16.8649 3 16.647V7.35304C2.99998 7.13514 3.11812 6.93437 3.3086 6.82855L11.7086 2.16188C11.8898 2.06121 12.1102 2.06121 12.2914 2.16188L20.6914 6.82855C20.8818 6.93437 21 7.13514 21 7.35304Z'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M3.52844 7.29357L11.7086 11.8381C11.8898 11.9388 12.1102 11.9388 12.2914 11.8381L20.5 7.27777'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 21L12 12'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Icon>
);

const SideBarIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    {/* <path
      d='M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z'
      stroke='currentColor'
      strokeWidth='2.0'
      strokeLinecap='round'
      strokeLinejoin='round'
    /> */}
    <path
      d='M3 6h18'
      stroke='currentColor'
      strokeWidth='2.0'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M3 12h18'
      stroke='currentColor'
      strokeWidth='2.0'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M3 18h18'
      stroke='currentColor'
      strokeWidth='2.0'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Icon>
);

const CloseIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <path
      d='M 6 6 L 18 18 M 6 18 L 18 6'
      stroke='currentColor'
      strokeWidth='2.0'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Icon>
);

export { SomIcon, TitleIcon, ObjectIcon, SideBarIcon, CloseIcon };
