const Tile = ({
  children,
  transparent,
}: {
  children?: React.ReactNode;
  transparent?: boolean;
  centered?: boolean;
}) => {
  const borderClass = transparent ? '' : 'border-2 rounded-md border-secondary';

  return (
    <section
      className={`bg-primary w-[100%] p-2 ${borderClass} max-w-[640px] my-[16px]`}
    >
      {children}
    </section>
  );
};

export default Tile;
