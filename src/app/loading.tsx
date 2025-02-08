import LogoIcon from "@/components/logoIcon"

const Loading = () => {
  return (
    <div className="absolute h-screen w-screen bg-slate-900 bg-opacity-45 flex justify-center items-center">
        <LogoIcon size={80}/>
    </div>
  )
}

export default Loading