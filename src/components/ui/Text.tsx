interface Props {
  children: string;
  
}

const Text = ({children}: Props) => {
  return (
    <p className="text-[2rem] text-justify tracking-[0.1em] leading-[1.5]">
      {children}
    </p>
  )
}

export default Text;