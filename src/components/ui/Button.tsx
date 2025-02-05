type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  disabled?: boolean;
};

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  disabled 
}: ButtonProps) {
  const baseStyles = 'px-4 py-2 rounded-md font-medium transition-colors';
  const variants = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-50'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
}
