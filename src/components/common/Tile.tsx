const Tile = ({
  children,
  transparent,
}: {
  children?: React.ReactNode;
  transparent?: boolean;
}) => {
  const borderClass = transparent ? '' : 'border-2 rounded-md border-secondary';

  return (
    <main className={`bg-priamry min-w-[300px] p-4 ${borderClass}`}>
      {children}
    </main>
  );
};

export default Tile;
