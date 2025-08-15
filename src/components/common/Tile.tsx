const Tile = ({
  children,
  transparent,
}: {
  children?: React.ReactNode;
  transparent?: boolean;
}) => {
  const borderClass = transparent ? '' : 'border-2 rounded-md border-secondary';

  return (
    <section
      className={`bg-primary min-w-[300px] p-4 ${borderClass} max-w-[640px]`}
    >
      {children}
    </section>
  );
};

export default Tile;
