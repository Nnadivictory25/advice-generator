import { ReactNode } from "react";


interface Props {
    children: ReactNode;
}

const Card = ({children}: Props) => {
    return (
        <div className="card bg-greyBlue rounded-lg px-5 pt-6 pb-16 max-w-sm w-[95%] mx-auto relative flex flex-col justify-center text-center gap-y-3">
            {children}
            
      </div>
  )
};

export default Card;
