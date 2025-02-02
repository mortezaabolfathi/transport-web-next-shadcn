import { IoCallOutline } from "react-icons/io5";
interface TCallBox {
  color?:string,
  size ?:number
}
const CallBox:React.FC<TCallBox>= ({color="text-gray-700" , size=20}) => {
  return (
    <>
      <IoCallOutline size={size}  />
          <a
            href="tel:+982112345678"
            className= {`${color} hover:text-green-500 font-bold md:text-base text-3xl`}
          >
            021-12345678
          </a>
    </>
  )
}

export default CallBox